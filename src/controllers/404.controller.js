const errosCtrl = {};

errosCtrl.render404 = (req, res, next) =>{
    res.status(404).render('404')
 }

 module.exports = errosCtrl;