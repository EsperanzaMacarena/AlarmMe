const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const error_types = require('./error_types');
const User = require('../models/user');

let controller = {

    register: (req, res, next) => {
        User.find({ username: req.body.username }, (err, result) => {
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
        passport.authenticate("local", { session: false }, (error, user) => {
            if (error || !user) {
                next(new error_types.Error404("Email or password not correct."))
            } else {
                const payload = {
                    sub: user.id,
                    exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
                    email: req.body.email,
                    password: req.body.password,
                };
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, { algorithm: process.env.JWT_ALGORITHM });
                res.json({
                    email: user.email,
                    token: token,
                });

            }
        })(req, res)
    },
    getUsers: async (req, res) => {
        try {
            let result = null;
            result = await User.find().exec();
            res.status(200).json(result);
        } catch (error) {
            res.send(500, error.message);
        }

    },
    getMe: (req, res, next) => {
        const idr = req.user._id

        try {
            let result = null;
            result = await User.findById(id).exec();
            res.status(200).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    updateName: (req, res, next) => {
        const id = req.user._id
        try {
            let result = null;
            result = await User.updateOne({ id }, { fullname: req.body.fullname }).exec();
            res.status(200).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    updateImg: (req, res, next) => {
        const id = req.user._id
        try {
            let result = null;

            result = await User.updateOne({ id }, {
                picture: {
                    data: req.file.buffer.toString('base64'),
                    contentType: req.file.mimetype
                }
            }).exec();

            res.status(200).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    updatePassword: (req, res, next) => {
        const id = req.user._id
        try {
            let result = null;

            result = await User.updateOne({ id }, { password: req.body.password }).exec();

            res.status(200).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    disabledUser: (req, res, next) => {
        const id = req.user._id
        try {
            let result = null;

            result = await User.updateOne({ id }, { enabled: req.body.enabled }).exec();

            res.status(200).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    deleteImg: (req, res, next) => {
        const id = req.user._id
        try {
            let result = null;

            result = await User.updateOne({ id }, { picture: undefined }).exec();

            res.status(204).json(result);

        } catch (error) {
            res.send(404, error.message);
        }
    },
    getImage: (req, res, next) => {
        const id = req.user._id
        let result = null;

        result = await User.findById(id).exec();

        if (result.picture != undefined) {
            res.contentType(result.picture.contentType)
            res.send(Buffer.from(result.picture.data, 'base64'))
        } else res.send(404, "The user has not picture");

    }

}

module.exports = controller;