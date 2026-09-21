const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')

router.get('',TaskController.index)
router.post('',TaskController.store)
router.patch('/:id',TaskController.update)

module.exports = router;