var express = require('express');
var router = express.Router();
var InstitutionController = require('../controllers/InstitutionController.js');

/*
 * GET
 */
router.get('/', InstitutionController.list);

/*
 * GET
 */
router.get('/:id', InstitutionController.show);

/*
 * POST
 */
router.post('/', InstitutionController.create);

/*
 * PUT
 */
router.put('/:id', InstitutionController.update);

/*
 * DELETE
 */
router.delete('/:id', InstitutionController.remove);

module.exports = router;
