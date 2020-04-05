//importar as dependecias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//inicializar o express
const app = express();

//inibir o parsing do http request body
app.use(bodyParser.json());
app.use(cors());

//rotas e chamadas de API
app.use ('/hello', (req, res) => res.send('Hello World'));

//start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`\x1b[32m(PLAIN) Server listening on port ${port} \x1b[0m.`);
});