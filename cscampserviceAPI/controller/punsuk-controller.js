const punsuk = require("../service/punsuk-service");

function register(req){
    return new Promise((resolve, reject) => {
        try {
            punsuk.register(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function update(req){
    return new Promise((resolve, reject) => {
        try {
            punsuk.update(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function getAll(req){
    return new Promise((resolve, reject) => {
        try {
            punsuk.getAll(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function findById(req){
    return new Promise((resolve, reject) => {
        try {
            punsuk.findById(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function deletePunsuk(req){
    return new Promise((resolve, reject) => {
        try {
            punsuk.deletePunsuk(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

var punsukConst = {
    register:register,
    update:update,
    getAll:getAll,
    findById:findById,
    deletePunsuk:deletePunsuk
}

module.exports = punsukConst;