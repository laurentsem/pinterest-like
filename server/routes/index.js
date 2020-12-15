const postRouter = require('./postRoutes');
const Router = require('express').Router;
const router = Router();

router.use(postRouter)

module.exports = router
