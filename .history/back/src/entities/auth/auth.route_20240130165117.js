// // En tu archivo de rutas (por ejemplo, auth/routes.js)
// const express = require('express');
// const router = express.Router();

// // Importa tu controlador
// const authController = require('./controller');

// // Ruta protegida con sesiones
// router.get('/dashboard', (req, res) => {
//   if (req.session && req.session.user) {
//     // El usuario ha iniciado sesión, permite el acceso
//     res.send('Bienvenido al panel de control');
//   } else {
//     // El usuario no ha iniciado sesión, redirige a la página de inicio de sesión
//     res.redirect('/login');
//   }
// });

// // Resto de tus rutas
// // ...

// module.exports = router;
