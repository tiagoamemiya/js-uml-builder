require('dotenv').config();

const path = require('path');
const helmet = require('helmet')();
const mustache = require('mustache-express')();
const routes = require(path.resolve('app', 'routes'));
const express = require('express');

const app = express();

routes(app);
app.use(helmet);
app.use('/static', express.static('app/public'));

app.engine('html', mustache);
app.set('view engine', 'html');
app.set('views', path.resolve('app', 'views'));
app.set('view options', {layout: 'default'});

app.listen(process.env.PORT);
