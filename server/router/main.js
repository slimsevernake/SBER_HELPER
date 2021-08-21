const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname , 'client', 'build', 'index.html'));
});

module.exports = router;
