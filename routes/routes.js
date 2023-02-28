module.exports = app => {
    var router = require("express").Router();

    
    const user = require("../controllers/UserControllers.js");
    router.post("/register", user.create);

    router.post('/login', user.loginUser)
    
    router.get("/users", user.findAll);

    router.get("/user/:id", user.findOne);
    
    router.put("/user/:id", user.update);
    
    router.delete("/user/:id", user.delete);
  

    const product = require('../controllers/ProductControllers.js');
    router.post("/product", product.create);
  
    router.get("/products", product.findAll);

    router.get("/product/:id", product.findOne);
  
    router.put("/product/:id", product.update);
  
    router.delete("/product/:id", product.delete);
    
    // app.use('/products', router);
    
    app.use('/', router);
  };