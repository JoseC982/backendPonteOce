const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PonteOnce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log("Error al conectar a MongoDB", err));