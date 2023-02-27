module.exports = app => {
    const users = require('../controllers/controllers.js')
    var router = require('express').Router();

    router.post('/user'. users.create);
    router.get('/users', users.getAll);
    // router.get('/user/:id', user.get);
    router.put('/user/:id', users.update);
    router.delete('/user/:id', users.delete);

    app.use('/server.js', router);

}