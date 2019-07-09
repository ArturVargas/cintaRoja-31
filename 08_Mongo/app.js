

const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');
const mongoUrl = 'mongodb+srv://<yourUser>:<yourPassword>@cinta31-qbqwc.mongodb.net/test?retryWrites=true&w=majority'
const {User} = require('./models/user');
// 
moongose.connect(mongoUrl, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Todo Chido en mongo..!!')
    }
})
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1> Express & Mongo </h1>');
})

app.post('/new/user', (req, res) =>{
    const params = req.body;
    console.log(params);
    let newUser = User ({
        name: params.name,
        email: params.email,
        password: params.password
    });
    newUser.save((err, user) => {
        if(err) {
            res.status(500).json({message: 'Ocurrio un error'});
        }
        if(user) {
            res.status(201).send({data: params})
        } else {
            res.status(404).send({
                status: 'Error',
                message: 'No se registro el usuario'
            });
        }
    });
});

app.post('/login', (req, res) => {
    /* Condiciones:
        Que email y password no vengan vacios
        Buscar ese email en la base de datos (findOne)
        * revisar: https://mongoosejs.com/docs/api/query.html#query_Query-findOne
    */
})

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`)
})