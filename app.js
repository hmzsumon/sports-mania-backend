const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');

const indexRouter = require('./routes/index');
const leaguesRouter = require('./routes/leagues');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);
app.use('/leagues', leaguesRouter);

module.exports = app;
