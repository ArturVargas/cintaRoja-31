
//Servidor con Express
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//middleware
//app.use((req, res, next) => {
  //  console.log('Este es el middleware');
    //termina la ejecución del middleware
   // next();
//});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Hola en express');
    res.status(200).send('<h1>Bienvenido a Express</h1>');
})

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
});


