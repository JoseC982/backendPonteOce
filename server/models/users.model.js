const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es requerido"],
        unique: true
    },
    pass: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    role: {
        type: String,
        required: [true, "El rol es requerido"],
        enum: ['admin', 'user']
    },
    estado: {
        type: String,
        required: [true, "El estado es requerido"],
        enum: ['Activo', 'Silenciado']
    },
    fechaNacimiento: {
        type: Date // Puedes usar Date si prefieres: type: Date
    },
    bio: {
        type: String,
        default: ""
    },
    username: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;