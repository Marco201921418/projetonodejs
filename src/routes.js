const { Router } = require('express');
const EletroController = require('./app/controllers/EletroController');
const router = Router();

router.get('/eletro', EletroController.index);
router.post('/eletro-inserir', EletroController.store);
router.get('/eletro-buscar/:id', EletroController.show);
router.put('/eletro-update/:id', EletroController.update);
router.delete('/eletro-deletar/:id', EletroController.delete);

module.exports = router;
