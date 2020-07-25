var _punsukRepo = require("../repository/punsuk-repository");
var host = "localhost/";
var _coreFunc = require("./coreFunction");
var fs = require("fs");
var _userRepo = require("../repository/user-repository");

async function register(param, callback) {
  console.log(param);
  param.username = _coreFunc.escapSQLFunction(param.username);

  let leng = await _userRepo.findUser(param.username);
  if (leng.result.length == 0) {
    param.password = _coreFunc.escapSQLFunction(param.password);
    param.firstname = _coreFunc.escapSQLFunction(param.firstname);
    param.lastname = _coreFunc.escapSQLFunction(param.lastname);
    param.created_date = new Date().toMysqlFormat();
    param.status = "ACTIVE";
    _userRepo.registerUser(param);
    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "USERNAME ALREADY EXISTS",
    });
  }
  return;
}

async function updateUser(param, callback) {
  param.username = _coreFunc.escapSQLFunction(param.username);

  let leng = await _userRepo.findUser(param.username);
  if (leng.result.length > 0) {
    if (param.firstName) {
      param.firstName = _coreFunc.escapSQLFunction(param.firstName);
    } else {
      param.firstName = leng.result[0].firstName;
    }

    if (param.lastName) {
      param.lastName = _coreFunc.escapSQLFunction(param.lastName);
    } else {
      param.lastName = leng.result[0].lastName;
    }

    if (param.email) {
      param.email = _coreFunc.escapSQLFunction(param.email);
    } else {
      param.email = leng.result[0].email;
    }

    if (param.status) {
      param.status = _coreFunc.escapSQLFunction(param.status);
    } else {
      param.status = leng.result[0].status;
    }

    param.updated_date = new Date().toMysqlFormat();

    var res = _userRepo.updateUser(param);

    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "USER NOT FOUND",
    });
  }

  return;
}

async function login(param, callback) {
  param.username = _coreFunc.escapSQLFunction(param.username);
  param.password = _coreFunc.escapSQLFunction(param.password);
  var data = await _userRepo.login(param);

  if (data.result.length > 0) {
    callback("", {
      response_code: "0000",
      response_description: "SUCCESS",
      data,
    });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "INVALID USERNAME/PASSWORD",
    });
  }

  return;
}

async function regisActivity(param, callback) {
  // param.username = _coreFunc.escapSQLFunction(param.username);
  // param.password = _coreFunc.escapSQLFunction(param.password);
  param.created_date = new Date().toMysqlFormat();
  var data = await _userRepo.regisActivity(param);

  if (data) {
    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", { response_code: "0001", response_description: "ERROR" });
  }

  return;
}

async function getRegisActivityByUserId(param, callback) {
  var data = await _userRepo.getRegisActivityByUserId(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
    data,
  });

  return;
}

async function getUserByActivityName(param, callback) {
  var data = await _userRepo.getUserByActivityName(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
    data,
  });

  return;
}

async function requestApprove(param, callback) {
  // param.username = _coreFunc.escapSQLFunction(param.username);
  // param.password = _coreFunc.escapSQLFunction(param.password);
  param.created_date = new Date().toMysqlFormat();
  var data = await _userRepo.requestApprove(param);

  if (data) {
    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", { response_code: "0001", response_description: "ERROR" });
  }

  return;
}

async function approveList(param, callback) {
  var data = await _userRepo.approveList(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
    data,
  });

  return;
}

async function approveRequest(param, callback) {
  // param.username = _coreFunc.escapSQLFunction(param.username);
  // param.password = _coreFunc.escapSQLFunction(param.password);
  param.created_date = new Date().toMysqlFormat();
  var data = await _userRepo.approveRequest(param);

  if (data) {
    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", { response_code: "0001", response_description: "ERROR" });
  }

  return;
}

async function voteUserByUserActivityId(param, callback) {
  let leng = await _userRepo.findlLogVoteUser(param);
  if (leng.result.length == 0) {
    var data = await _userRepo.voteUserByUserActivityId(param);
    var log = await logVoteUser(param);

    callback("", {
      response_code: "0000",
      response_description: "โหวตสำเร็จแล้ว",
    });
  }else{
    callback("", {
      response_code: "0001",
      response_description: "คุณเคยทำการโหวตให้คนนี้แล้ว",
    });
  }

  return;
}

async function logVoteUser(param, callback) {
  param.created_date = new Date().toMysqlFormat();
  var data = await _userRepo.logVoteUser(param);

  return;
}

var punsukService = {
  login: login,
  register: register,
  updateUser: updateUser,
  regisActivity: regisActivity,
  getRegisActivityByUserId: getRegisActivityByUserId,
  getUserByActivityName: getUserByActivityName,
  requestApprove: requestApprove,
  approveRequest: approveRequest,
  approveList: approveList,
  voteUserByUserActivityId: voteUserByUserActivityId,
  logVoteUser: logVoteUser
};

module.exports = punsukService;
