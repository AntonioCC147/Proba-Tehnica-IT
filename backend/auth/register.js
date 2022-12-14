const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const token = jwt.sign(
  { user_id: user._id, email },
  process.env.TOKEN_KEY,
  {
      expiresIn: "2h",
  }
);
user.token = token;

const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if(!username)
        return res.status(400).json({ username: "is missing" })
    if(!email)
        return res.status(400).json({ email: "is missing" })
    if(!password)
        return res.status(400).json({ password: "is missing" })

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UsersModel.create({
        username,
        email,
        password: hashedPassword
    })

    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.username === req.body.username)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(3000)