const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const error_types = require('./error_types');
const User = require('../model/user');

let controller = {

    register: (req, res, next) => {
        User.find({ email: req.body.email }, (err, result) => {
            if (result.length > 0) {
                next(new error_types.Error400("User already exists"));
            } else {
                let hash = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS));
                let user = new User({
                    email: req.body.email,
                    fullname: req.body.fullname,
                    password: hash
                });

                user.save((err, user) => {
                    if (err) next(new error_types.Error400(err.message));
                    res.status(201).json(user);
                });
            }
        })
    },
    login: (req, res, next) => {
        passport.authenticate("local", {session: false}, (error, user) => {
            if (error || !user) {
                next(new error_types.Error404("username or password not correct."))
            } else {
                const payload = {
                    sub: user.id,
                    exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
                    username: req.body.username,
                    password: req.body.password,
                };
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {algorithm: process.env.JWT_ALGORITHM});
                res.json({ 
                    username: user.username,
                    token: token,
                });

            }
        })(req, res)
    },
    getUsers: async (req, res) => {
        User.find().exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    getMe: (req, res, next) => {
        const id = req.user._id

        User.findById(id).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    updateName: (req, res, next) => {
        const id = req.user._id
        User.updateOne({ id }, { fullname: req.body.fullname }).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    updateImg: (req, res, next) => {
        const id = req.user._id
        User.updateOne({ id }, {
            picture: {
                data: req.file.buffer.toString('base64'),
                contentType: req.file.mimetype
            }
        }).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    updatePassword: (req, res, next) => {
        const id = req.user._id
        User.updateOne({ id }, { password: req.body.password }).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    disabledUser: (req, res, next) => {
        const id = req.user._id
        User.updateOne({ id }, { enabled: req.body.enabled }).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(200).json(response);
        });
    },
    deleteImg: (req, res, next) => {
        const id = req.user._id
        User.updateOne({ id }, { picture: undefined }).exec((error, response) => {
            if (error) res.send(404, error.message);
            else res.status(204).json("Picture deleted");
        });
    },
    getImage: (req, res, next) => {
        const id = req.user._id
        User.findById(id).exec((error, response) => {
            if (error) res.send(404, error.message);
            else {
                if (response.picture != undefined) {
                    res.contentType(response.picture.contentType)
                    res.send(Buffer.from(response.picture.data, 'base64'))
                }
            }
        });
    }

}

module.exports = controller;