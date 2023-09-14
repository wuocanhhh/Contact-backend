const express = require ('express');
const cors = require ('cors');

const app = express ();

const contactsRouter = require ('./routes/contacts.router');

    const {
        resourNotFound,
        handleError
        } = require ('./controllers/errors.controller');
    

app.use ('/api/contact', contactsRouter);
app.use(resourNotFound);
app.use (cors ());
app.use(express.json());
app.use(handleError);


app.get ('/', (req, res) => {
    res.json ({ message :'Welcome to contact book application .'});
});


module.exports = app;