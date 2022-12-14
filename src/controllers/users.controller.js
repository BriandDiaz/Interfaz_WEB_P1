const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');

usersCtrl.renderSingUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;

    const len = email.length;
    //const part = email.slice(9);
    const end = email.endsWith("ce.pucmm.edu.do");
   const num = Number(email.slice(0, 8));

    numEval =  Number(email.slice(0,1));
    console.log(num);
    // console.log(part);
    console.log(len);

  

// // //Correo de estudiantes
if( len !=24  ||  end != true || num == NaN ){
     errors.push({ text: 'El correo ingresado no es valido' });

}
// // // // }else if(num != NaN){
// // // //     errors.push({ text: 'El correo profesoral ingresado no es valido' });
// // // // }

//Correo de Profesores


if (password != confirm_password) {
    errors.push({ text: 'Las contraseñas no coinciden' });
}
if (password.length < 4) {
    errors.push({ text: 'La contraseña debe ser mayor a 4 caracteres' });
}
if (errors.length > 0) {
    res.render('users/signup', {
        errors,
        name,
        email
    })
} else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
        req.flash('error_msg', 'El correo ya se encuentra registrado');
        res.redirect('/users/signup');
    } else {
        const newUser = new User({ name, email, password })
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Estas registrado');
        res.redirect('/users/signin');
    }
}
};

usersCtrl.renderSinginForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/dashboard',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout((err) => {

        req.flash('success_msg', 'Acabas de salir');
        res.redirect('/users/signin');
    });

};


module.exports = usersCtrl;