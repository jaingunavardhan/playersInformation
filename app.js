const express = require('express');
const sequelize = require('./util/database.js');
const playerRoutes = require('./routes/playerRoutes.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(playerRoutes);

sequelize.sync()
    .then( ()=>{
        app.listen(4000);
    })
    .catch(error=>console.log(error));