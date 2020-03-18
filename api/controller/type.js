const Type = require('../model/type');

let controller = {
    register: (req, res, next) => {
        let type = new Type({
            description: req.body.description,
            places: req.body.places
        });
        type.save()
            .then(t => res.status(201).json(t))
            .catch(err => res.send(400).json(err.message));
    },
    getAll:(req, res, next)=>{
        Type.find().exec((error, response)=>{
            if(error) res.status(404).json(error.message);
            else res.status(200).json(response);
        });
    },
    update:(req,res,next)=>{
        const id= req.params.id;
        Type.updateOne({ _id: id },{ $set:{
            description: req.body.description,
            places: req.body.places
        }}).exec((error, response) => {
            if (error) res.status(404).json(error.message);
            else Type.findById(id).exec((error, type) => {
                 res.status(200).json(type);
            });
        });
    },
    delete:(req,res,next)=>{
        const id= req.params.id;
        Type.remove({ _id: id }).exec((error, response) => {
            if (error) res.status(404).json(error.message);
            else res.status(204).json({"result":"Type removed"});
        });
    },
    getOne:(req,res,next)=>{
        const id= req.params.id;
        Type.findById(id).exec((error, type) => {
            if (error) res.status(404).json(error.message);
            else res.status(200).json(type);
       });
    },
    getPlaces:(req,res,next)=>{
        res.status(200).json(Type.schema.path('places').enumValues);
    }
}

module.exports = controller;