const user = require("../service/user-service");

function register(req){
    return new Promise((resolve, reject) => {
        try {
            user.register(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function updateUser(req){
    return new Promise((resolve, reject) => {
        try {
            user.updateUser(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function login(req){
    return new Promise((resolve, reject) => {
        try {
            user.login(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function regisActivity(req){
    return new Promise((resolve, reject) => {
        try {
            user.regisActivity(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function getRegisActivityByUserId(req){
    return new Promise((resolve, reject) => {
        try {
            user.getRegisActivityByUserId(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function getUserByActivityName(req){
    return new Promise((resolve, reject) => {
        try {
            user.getUserByActivityName(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function requestApprove(req){
    return new Promise((resolve, reject) => {
        try {
            user.requestApprove(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function approveList(req){
    return new Promise((resolve, reject) => {
        try {
            user.approveList(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function approveRequest(req){
    return new Promise((resolve, reject) => {
        try {
            user.approveRequest(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function voteUserByUserActivityId(req){
    return new Promise((resolve, reject) => {
        try {
            user.voteUserByUserActivityId(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

var punsukConst = {
    register:register,
    updateUser:updateUser,
    login:login,
    regisActivity:regisActivity,
    getRegisActivityByUserId: getRegisActivityByUserId,
    getUserByActivityName: getUserByActivityName,
    requestApprove: requestApprove,
    approveRequest: approveRequest,
    approveList: approveList,
    voteUserByUserActivityId: voteUserByUserActivityId
}

module.exports = punsukConst;