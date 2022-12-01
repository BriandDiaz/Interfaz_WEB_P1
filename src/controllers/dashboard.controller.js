const dashboardCtrl= {};

dashboardCtrl.renderDashboard = (req, res)=>{
    res.render('dashboard/dashboard');
}

dashboardCtrl.renderDevicesForm = (req, res) => {
    res.render('dashboard/device');
}
module.exports = dashboardCtrl;