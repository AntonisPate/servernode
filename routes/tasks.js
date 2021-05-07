var express = require('express');
var router = express.Router();
var task = require('../resources/task');

router.get('/', async (req, res) => {
    res.json(await task.read())
})

router.get('/:id', async (req, res) => {
    res.json(await task.read(req.params.id))
})
  
router.get('/delete/:id', async (req, res) => {
    res.json(await task.deleteOne(req.params.id))
})
  
router.post('/create', async function (req, res) {
    await task.create(req.body) ? res.sendStatus(200) : res.sendStatus(401)
})

module.exports = router;