const {getUserById, deleteUserById, createUser } = require('../controlleurs/userController');
const Router = require('express').Router;
const router = Router();

// Get user by id
router.get('/users/:id', getUserById);

// Create user
router.post('/createUser', createUser);

// Delete user by id
router.delete('/users/:id', deleteUserById);

module.exports = router;
