const { get } = require('jquery');
const userService = require('../services/userService');

async function getUserById(req, res) {
    const result = await userService.getUserById();
    res.json(result);
}

async function createUser(req, res) {
    const result = await userService.createUser();
    res.json(result)
}

async function deleteUserById(req, res) {
    const result = await userService.deleteUserById();
    res.json(result)
}

exports.getUserById = getUserById;
exports.createUser = createUser;
exports.deleteUserById = deleteUserById;
