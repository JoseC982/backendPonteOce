const User = require("../controllers/users.controllers");

module.exports=function(app){
    app.get("/users",User.getAllUsers);
    app.post("/users",User.createUser);
}