const axios = require('axios');

exports.getById = async function (req, res) {
    let id = req.params.id;

    let request = await getRequest(res, id, 'id');

    if(request.error) {
        res.status(404).json(request.error);
    } else {
        res.status(200).json(request);
    }
};

exports.getByName = async function (req, res) {
    let name = req.params.name;

    let request = await getRequest(res, name, 'name');

    if(request.error) {
        res.status(404).json(request.error);
    } else {
        res.status(200).json(request);
    }
};

async function getRequest(res, param, key) {
    return new Promise(async (resolve, reject) => {
        axios.get('http://www.mocky.io/v2/5808862710000087232b75ac', { json: true })
            .then( response => {
                if (response.data.clients) {
                    let clients = response.data.clients;
                    let clientsFiltered = clients.find(x => x[key] === param);

                    if(clientsFiltered) {
                        resolve(clientsFiltered);
                    } else {
                        resolve({
                            error: 'No client with this Name'
                        });
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
    });
}

exports.getRequest = getRequest;
