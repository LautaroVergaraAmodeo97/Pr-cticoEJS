const express = ('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.user(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Routes
require('./routes/index')(app);

//Escuchamos el puerto
app.listen(app.get('port'),()=>{
console.log('Servidor en el puerto ${3000}' )    
})



