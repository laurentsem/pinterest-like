const {getUserById, deleteUserById, updateUserById } = require('../controlleurs/userController')
const Router = require('express').Router;
const router = Router();


// Get user by id 
router.get('/users/:id', getUserById)

// Update user by id
router.post('/users/:id', updateUserById)

// Delete user by id
router.delete('/users/:id', deleteUserById)