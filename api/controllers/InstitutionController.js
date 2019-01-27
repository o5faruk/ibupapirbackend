var InstitutionModel = require('../models/InstitutionModel.js');

/**
 * InstitutionController.js
 *
 * @description :: Server-side logic for managing Institutions.
 */
module.exports = {

    /**
     * InstitutionController.list()
     */
    list: function (req, res) {
        InstitutionModel.find(function (err, Institutions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Institution.',
                    error: err
                });
            }
            return res.json(Institutions);
        });
    },

    /**
     * InstitutionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        InstitutionModel.findOne({_id: id}, function (err, Institution) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Institution.',
                    error: err
                });
            }
            if (!Institution) {
                return res.status(404).json({
                    message: 'No such Institution'
                });
            }
            return res.json(Institution);
        });
    },

    /**
     * InstitutionController.create()
     */
    create: function (req, res) {
        var Institution = new InstitutionModel({
			name : req.body.name,
			type : req.body.type,
			muncipality : req.body.muncipality

        });

        Institution.save(function (err, Institution) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Institution',
                    error: err
                });
            }
            return res.status(201).json(Institution);
        });
    },

    /**
     * InstitutionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        InstitutionModel.findOne({_id: id}, function (err, Institution) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Institution',
                    error: err
                });
            }
            if (!Institution) {
                return res.status(404).json({
                    message: 'No such Institution'
                });
            }

            Institution.name = req.body.name ? req.body.name : Institution.name;
			Institution.type = req.body.type ? req.body.type : Institution.type;
			Institution.muncipality = req.body.muncipality ? req.body.muncipality : Institution.muncipality;
			
            Institution.save(function (err, Institution) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Institution.',
                        error: err
                    });
                }

                return res.json(Institution);
            });
        });
    },

    /**
     * InstitutionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        InstitutionModel.findByIdAndRemove(id, function (err, Institution) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Institution.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
