var _punsukRepo = require('../repository/punsuk-repository');
// var host = "localhost/";
var host = "thaipansukservice.thaipansuk.com/";
var _coreFunc = require('./coreFunction');
var fs = require('fs');

async function register(param, callback) {
    param.img = _coreFunc.escapSQLFunction(param.img);
    var dir = "punsuk";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    if (param.img.length > 0) {
        var base64Data = param.img.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(dir + "/" + param.name + ".png", base64Data, 'base64', function (err) {
        });
        param.img = host + dir + "/" + param.name + ".png";
    }
    param.created_date = new Date();
    param.created_date = param.created_date.toMysqlFormat();
    let response = await _punsukRepo.register(param);
    if (response.isSucceed) {
        callback("", { response_code: "0000", response_description: "SUCCESS", id: response.result.insertId });
    } else {
        callback("", { response_code: "9999", response_description: "FAILED" });
    }

    return;
}

async function update(param, callback) {
    param.img = _coreFunc.escapSQLFunction(param.img);
    var dir = "punsuk";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    if (param.img.length > 0) {
        var base64Data = param.img.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(dir + "/" + param.name + ".png", base64Data, 'base64', function (err) {
        });
        param.img = host + dir + "/" + param.name + ".png";
    }
    param.update_date = new Date();
    param.update_date = param.update_date.toMysqlFormat();
    let response = await _punsukRepo.update(param);
    if (response.isSucceed) {
        callback("", { response_code: "0000", response_description: "SUCCESS"});
    } else {
        callback("", { response_code: "9999", response_description: "FAILED" });
    }
    return;
}

async function getAll(param, callback) {
    var res = await _punsukRepo.getAll();
    if (res.result.length > 0) {
        callback("", { response_code: "0000", response_description: "SUCCESS", data: res.result });
    } else {
        callback("", { response_code: "1111", response_description: "NOT FOUND" });
    }
    return;
}

async function findById(param, callback) {
    var res = await _punsukRepo.findById(param);
    if (res.result.length > 0) {
        callback("", { response_code: "0000", response_description: "SUCCESS", data: res.result });
    } else {
        callback("", { response_code: "1111", response_description: "NOT FOUND" });
    }
    return;
}

async function deletePunsuk(param, callback) {
    let response = await _punsukRepo.deletePunsuk(param);
    callback("", { response_code: "0000", response_description: "SUCCESS" });
    return;
}


var punsukService = {
    register: register,
    update:update,
    getAll:getAll,
    findById:findById,
    deletePunsuk:deletePunsuk
}

module.exports = punsukService;