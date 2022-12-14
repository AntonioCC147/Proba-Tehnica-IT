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
    const { email, password } = req.body;
    if(!email)
        return res.status(400).json({ email: "is required" })
    if(!password)
        return res.status(400).json({ password: "is required" })

    const match1 = await bcrypt.compare(password, user.password);
    const match2 = await compare(email, user.email);
    if(!match1 || !match2) return res.status(400).json ({ message: "Wrong email or password" })

    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.listen(3000)