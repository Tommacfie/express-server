const router = require('express').Router();

router.get('/', () => console.log('Router GET'));
router.post('/', () => console.log('Router POST'));

module.exports = router;