const Meme = require("../models/meme.model");

const router = require("express").Router();

//POST /memes
router.post("/", async (req, res) => {
    try {
        const meme = new Meme({
            description: req.body.description,
        });

        meme.save();

        return res.send({
            succes: true
        });
    } catch (e) {
        return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

//GET /memes
router.get("/", async (req, res) => {
    try {
        const meme_array = await Meme.find();

        let memes = [];
        for(i = 0; i < meme_array.length; i++)
            memes.push({
                description: meme_array[i].description,
                date: meme_array[i].date
            })

        console.log(memes);
        return res.send({
            "succes": true,
            data: memes
        })
    } catch (e) {
         return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

//GET /memes/:id
router.get("/:id", async (req, res) => {
    try {
        const meme_array_id = await Meme.findById(req.params.id);

        console.log(meme_array_id);
        return res.send({
            "succes": true,
            data: meme_array_id.description
        })
    } catch (e) {
         return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

//PATCH /memes/:id
router.patch("/:id", async (req, res) => {
    try {
        const patch_meme = new Meme({
            description: req.body.description,
        });

        const meme_p = await Meme.findById(req.params.id);

        meme_p.description = req.body.description;
        meme_p.save();

        if(meme_p) {
            return res.send({
                success: true
            })
        }
    } catch (e) {
         return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

//DELETE /memes/:id
router.delete("/:id", async (req, res) => {
    try {
        meme = Meme.findById(req.params.id);
        const meme_delete = await meme.deleteOne(meme);

        return res.send({
            "succes": true,
        })
    } catch (e) {
         return res.send({
            "succes": false,
            message: "Error: " + e.message
        })
    }
})

module.exports = router;