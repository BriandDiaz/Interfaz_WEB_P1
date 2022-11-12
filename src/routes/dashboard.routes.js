const {Router} = require('express');

const router = Router();

const{renderDashboard, renderDevicesForm} = require('../controllers/dashboard.controller');
const { isAuthenticated } = require('../helpers/auth');

router.get('/dashboard', isAuthenticated, renderDashboard);

router.get('/dashboard/devices/add',isAuthenticated, renderDevicesForm)

module.exports = router;