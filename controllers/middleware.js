exports.userAdmin = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'Petition has not an authentication header'});
    }

    let user = JSON.parse(req.headers.authorization);

    try {
        if(user.role !== 'user' && user.role !== 'admin') {
            return res.status(401).send({
                message: 'User role not allowed'
            })
        }
    } catch(ex){
        return res.status(401).send({
            message: 'User role is neither User nor Admin'
        })
    }

    next();
};