const router = require('express').Router();
const Tip = require('../models/Tip');
const {verifyTokenAndAdmin} = require('./verifyToken');

//CREATE A TIP
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newTip = new Tip(req.body);
    try{
        const savedTip = await newTip.save();
        res.status(200).json(savedTip);

    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE A TIP
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{ 
        const updatedTip = Tip.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});

        res.status(200).json(updatedTip);
    } catch (err) {
        return res.status(500).json(err);
    }
})

//DELETE A TIP
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{
        await Tip.findByIdAndDelete(req.params.id);
        res.status(200).json('Tip has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET A TIP
router.get('/:id', async (req, res) => {
    try{
        const tip = await Tip.findById(req.params.id);
        res.status(200).json(tip);
    } catch (err) {
        res.status(500).json(err);
    }
})



//Get ALL POSTS
router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let tip = await Tip.find();
        res.status(200).json(tip);

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;