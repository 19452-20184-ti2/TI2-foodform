require('./configs/sequelize.js').connectDB().then(() => {
    console.log(`\x1b[32m(PLAIN) Congrats you've connected to the database. Huzzah! ${port} \x1b[0m.`);

    //importar as dependecias
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    require('dotenv').config();

    //ficheiro das rotas
    const postsRoute = require('./routes/posts-route.js');

    //inicializar o express
    const app = express();

    //inibir o parsing do http request body
    app.use(bodyParser.json());
    app.use(cors());

    //rotas e chamadas de API
    app.use ('/', postsRoute);

    //start node server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`\x1b[32m(PLAIN) Server listening on port ${port} \x1b[0m.`);
    });

})
.catch(err => { console.error(err.message); } );

