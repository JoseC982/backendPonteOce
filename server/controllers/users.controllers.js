const {request} = require("express");
const User = require("../models/users.model");

// Crear un usuario
module.exports.createUser = (req, res) => {
    const { name, email, pass, role, estado, fechaNacimiento, bio, username } = req.body;

    // Validar datos incompletos
    if (!name || !email || !pass || !role || !estado || !fechaNacimiento || !bio || !username) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    // Verificar si el correo ya existe
    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ error: "Correo ya registrado" });
            }
            // Crear usuario
            return User.create({
                name,
                email,
                pass,
                role,
                estado,
                fechaNacimiento,
                bio,
                username
            });
        })
        .then(newUser => {
            if (newUser) {
                res.status(201).json({
                    id: newUser._id.toString(),
                    name: newUser.name,
                    email: newUser.email,
                    pass: newUser.pass,
                    role: newUser.role,
                    estado: newUser.estado,
                    fechaNacimiento: newUser.fechaNacimiento ? newUser.fechaNacimiento.toISOString().split('T')[0] : "",
                    bio: newUser.bio,
                    username: newUser.username
                });
            }
        })
        .catch(err => {
            res.status(400).json({ error: "Datos incompletos" });
        });
};

// Obtener todos los usuarios
module.exports.getAllUsers = (_, res) => {
    User.find({})
        .then(users => res.status(200).json(users))
        .catch(err => {
            res.status(500).json({ error: "Error interno del servidor" });
        });
};

