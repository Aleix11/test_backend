const axios = require('axios');
const usersScripts = require('./users');


exports.getByPoliceNumber = async function (req, res) {
    let number = req.params.number;

    let policies = await getPolicies(res, number, 'id');

    if(policies.error) {
        res.status(404).json(policies.error);
    } else {
        console.log(policies);
        let user = await usersScripts.getRequest(res, policies.clientId, 'id');

        console.log(user);

        if(user.error) {
            res.status(404).json(user.error);
        } else {
            res.status(200).json(user);
        }
    }
};

exports.getByName = async function (req, res) {
    let name = req.params.name;

    let request = await usersScripts.getRequest(res, name, 'name');

    if(request.error) {
        res.status(404).json(request.error);
    } else {
        let policies = await getPolicies(res, request.id, 'clientId');

        if(request.error) {
            res.status(404).json(request.error);
        } else {
            res.status(200).json(policies);
        }
    }
};


async function getPolicies(res, param, key) {
    return new Promise(async (resolve, reject) => {
        axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5', { json: true })
            .then(response => {
                if (response.data.policies) {
                    let policies = response.data.policies;
                    let policiesFiltered = policies.find(x => x[key] === param);

                    if(policiesFiltered) {
                        resolve(policiesFiltered);
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