const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://a14samvilcad:Pedralbes1@clustersamu.qhifl74.mongodb.net/test', { useNewUrlParser: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.log(err));


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const administrationRoutes = require('./routes/administration.routes');
app.use('/api/administration', administrationRoutes);

app.listen(3000, () => console.log('Servidor en puerto 3000'));
