const axios = require('axios');

exports.getById = async function (req, res) {
    let id = req.params.id;

    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac', { json: true })
        .then( response => {
            if (response.data.clients) {
                let clients = response.data.clients;
                let clientsFiltered = clients.find(x => x.id === id);

                if(clientsFiltered) {
                    res.status(200).json(clientsFiltered);
                } else {
                    res.status(404).send({
                        error: 'No client with this ID'
                    })
                }
            } else {
                res.status(400).send({
                    error: 'Error getting information'
                });
            }
        }).catch(() => {
            res.status(400).send({
                error: 'Error getting information'
            });
        });
};

exports.getByName = function (req, res) {
    let name = req.params.name;


    axios.get('http://www.mocky.io/v2/5808862710000087232b75ac', { json: true })
        .then( response => {
            if (response.data.clients) {
                let clients = response.data.clients;
                let clientsFiltered = clients.find(x => x.name === name);

                if(clientsFiltered) {
                    res.status(200).json(clientsFiltered);
                } else {
                    res.status(404).send({
                        error: 'No client with this Name'
                    })
                }
            } else {
                res.status(400).send({
                    error: 'Error getting information'
                });
            }
        }).catch(() => {
        res.status(400).send({
            error: 'Error getting information'
        });
    });
};