const { Router } = require('express');

const { createUser, deleteUser, getUsers, updateUser } = require('../controllers/userController');
const router = Router();


// se agregan las rutas y metodos correspondientes a cada operacion crud
// que se realizara con las notas

// en todas las operaciones se hace referencia a la raiz ya que la ruta
// completa se encuentra en el index y se completa al referencias este modulo

// ruta para obtener notas
router.get('/' , getUsers);

// ruta para agregar notas
router.post('/', createUser);

// ruta para modificar notas
router.put('/:id', updateUser);

// ruta para eliminar una nota
router.delete('/:id', deleteUser);


module.exports = router;