const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get(`/`, (req, res) => {
    burger.all((data) => {
        const bObj = {
            burger: data,
        };
        console.log('router.get', bObj);
        res.render('index', bObj);
    });
});

router.get(`/api/burgers`, (req, res) => {
    burger.all((data) => {
        res.json(data);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.name, req.body.devoured, (response) => {
        console.log('router.post', response);
        res.json({ id: response.id, burger: response.name, devoured: response. devoured});
    });
});

router.put('/api/burgers/:id', (req,res) => {
    const id = req.params.id;
    console.log('id: ', id);

    burger.all((data) => {
        console.log('router.put', data);
        data.forEach((burger) => {
            if (burger.id === id) {
                console.log('router.put', burger);
                burger.update(req.body.name, req.body.devoured, (response) => {
                    if (response.changedRoms === 0) {
                        return res.status(404).end();
                    }
                    res.status(200).end();
                });
            }
        }
        );
    }); 
});

module.exports = router;