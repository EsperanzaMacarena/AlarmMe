const Type = require('../model/type');

let controller = {
    register: (req, res, next) => {
        let type = new Type({
            description: req.body.description,
            typePlaces: req.body.typePlaces,
            ubication: req.body.ubication
        })
    }
}

module.exports = controller;