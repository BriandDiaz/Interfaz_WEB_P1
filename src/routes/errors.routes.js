const {Router} = require('express');

const router = Router();

const{render404} = require('../controllers/404.controller')

router.get('/404', render404);

module.exports = router;