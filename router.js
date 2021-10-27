const router = require('express').Router();
const controller = require('./controllers/controller');

router.get('/', () => console.log('Router GET'));
router.post('/', () => console.log('Router POST'));
router.put('/', () => console.log('Router PUT'));
router.delete('/', () => console.log('Router DELETE'));

module.exports = router;