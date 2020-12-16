const postRouter = require('./postRoutes');
const userRouter = require('./userRoute');
const Router = require('express').Router;
const router = Router();

router.use(postRouter);
router.use(userRouter);

module.exports = router;
