//Prueba mau apiKey
const { config } = require('../config')

function checkApiKey(req, res, next){
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey){
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = { checkApiKey }