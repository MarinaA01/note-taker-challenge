const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const notessRouter = require('./notes');
const indexRouter = require('./index');

router.use('/notes', notesRouter);
router.use('/*', indexRouter);

module.exports = router;
