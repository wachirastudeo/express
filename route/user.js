const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send("user index");
});

router.get('/:id', (req, res) => {
    res.send(`user id : ${req.params.id}`);
});

module.exports = router; 