const express = require('express');
const router = express.Router();
const teaController = require('../controllers/teaController');

router.get('/tea', teaController.getTea);
router.post('/tea', teaController.postTea);
router.put('/tea/:id', teaController.putTea);
router.delete('/tea/:id', teaController.deleteTea);
router.get('/tea/all', teaController.getAllTea);





module.exports = router;