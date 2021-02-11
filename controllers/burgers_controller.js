const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get(`/`, (req, res) => {
    burger.all((data) => {
        const bObj = {
            burger: data,
        };
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
    console.log('req.body', req.body);
    burger.all((data) => {
        console.log('router.put', data);
        for (let i = 0; i < data.length; i++) {
            console.log('id:', data[i].id);
            if (Number(data[i].id) === Number(id)) {
                console.log('matches', data[i].id);
                burger.update(Number(id), req.body.devoured, (response) => {
                    if (response.changedRows === 0) {
                        return res.status(404).end();
                    }
                    res.status(200).end();
                });
                return;
            }
        }
    }); 
});

module.exports = router;