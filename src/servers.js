const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Initializations
const app = express();
require('./config/passport');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
//engige configura el motor de plantilla
app.engine('.hbs', exphbs.engine({
   //app.get('views) devuelve la ruta de donde esta la carpeta views
   defaultLayout: 'main',
   layoutsDir: path.join(app.get('views'), 'layouts'), //Los layouts se colocan codigo comunes, nav y footer
   partialsDir: path.join(app.get('views'), 'partials'),//pedazos de codigos en el cual podemos importar otros archivos html
   extname: '.hbs'
  
}));
app.set('view engine', '.hbs');


//Middlewares -> funcion que va a procesar algo cada vez que llegue una peticion
app.use(morgan('dev'));
//PAra poder entender los datos que llegan del formulario html
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
   secret: 'secret', 
   resave: true,
   saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
    next();
});

//Routes
app.use(require('./routes/index.routes'));
//app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/dashboard.routes'));
app.use(require('./routes/errors.routes'));



//Statics files
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;