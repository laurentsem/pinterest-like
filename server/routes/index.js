const postRouter = require('./postRoutes');
const userRouter = require('./userRoute');
const playlistRouter = require('./playlistRoute');
const Router = require('express').Router;
const router = Router();

router.use(postRouter);
router.use(userRouter);
router.use(playlistRouter);

module.exports = router;
