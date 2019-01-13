require('rootpath')();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from './_helpers/jwt';
import errorHandler from './_helpers/error-handler';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors);

app.use(jwt());

app.use('/users', require('./users/user.controller'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const index = app.listen(port, () => {
    console.log(`server listening to port: ${port}`);
});
