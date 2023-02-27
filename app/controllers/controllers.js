const User = require('../models/model.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
    }
    const User = new User({
        firstName: req.body.fistName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        cellphoneNumber: req.body.cellphoneNumber,
        emailAdd: req.body.emailAdd,
        userPass: req.body.userPass,
        userRole: req.body.userRole,
        userProfile: req.body.userProfile,
        joinDate: req.body.joinDate
    });
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Some error ocurred while creating the User"
            })
        } else {
            res.send(data);
        }
    })
};

exports.getAll = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind == 'Not Found') {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving the User"
                })
            }
        }
        else {
            res.send(data)
        }
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
    }
    console.log(req.body);
        User.updateById(req.params.id, new User(req.body), (err, data) => {
            if (err) {
                if (err.kind == 'Not found') {
                    res.status(404).send({
                        message: `Not find User with id ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: `Error updating User with id ${req.params.id}`
                    });
                }
            } else {
                res.data(data)
            }
        }
    )
}

exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
        if(err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: `Could not delete User with id ${req.params.id}.`
                });
            }
        } else {
            res.send({message: `User was deleted successfully`})
        }
    })
}

