var _db = require("./db");

async function registerUser(param) {
  let sqlStr =
    "INSERT INTO user (username, password , email , firstname , lastname , created_date , status) VALUES " +
    " ( '" +
    param.username +
    "' , '" +
    param.password +
    "' , '" +
    param.email +
    "' ,  '" +
    param.firstname +
    "' ,  '" +
    param.lastname +
    "' , '" +
    param.created_date +
    "' , '" +
    param.status +
    "' )";
  let res = await _db.insertdata(sqlStr);
  return res;
}
async function updateUser(param) {
  let sqlStr =
    "UPDATE user SET firstname = '" +
    param.firstname +
    "' , lastname = '" +
    param.lastname +
    "' , email = '" +
    param.email +
    "', updated_date = '" +
    param.updated_date +
    "', status = '" +
    param.status +
    "' WHERE username = '" +
    param.username +
    "'  ";
  let res = _db.updatedata(sqlStr);
  return res;
}

async function login(param) {
  let sqlStr =
    "SELECT * FROM user WHERE username = '" +
    param.username +
    "' AND password = '" +
    param.password +
    "'";
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result : ", res);

  return res;
}

async function findUser(username) {
  let sqlStr = "SELECT * FROM user WHERE username = '" + username + "'";
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function regisActivity(param) {
  let sqlStr = `INSERT INTO cscamp.user_activity
    (userId, activityName, approveFlg, registerDate, voteCount, activityDate)
    VALUES(${param.userId}, '${param.activityName}', 0, '${param.created_date}', 0, '${param.activityDate}');
    `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.insertdata(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function getRegisActivityByUserId(param) {
  let sqlStr = `SELECT * FROM user_activity WHERE userId = ${param.userId};
      `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function getUserByActivityName(param) {
  let sqlStr = `SELECT * FROM user_activity act INNER JOIN user ON user.id = act.userId WHERE activityName = '${param.activityName}';
      `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function requestApprove(param) {
  let sqlStr = `INSERT INTO cscamp.approve_list
  (userId, approveUserId, approveFlg, approveDate, name, major, faculty, userActivityId)
  VALUES(${param.userId}, NULL, 0, NULL, '${param.name}', '${param.major}', '${param.faculty}', ${param.userActivityId});  
      `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.insertdata(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function approveList(param) {
  let sqlStr = `SELECT * FROM approve_list appr JOIN user_activity act ON appr.userActivityId = act.userActivityId JOIN user ON user.id = act.userId 
  WHERE appr.approveFlg = 0`;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function approveRequest(param) {
  let sqlStr = `UPDATE approve_list SET approveFlg = ${param.approveFlg} WHERE approveId = ${param.approveId}`;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.updatedata(sqlStr);

  let sqlStr2 = `UPDATE user_activity SET approveFlg = ${param.approveFlg} WHERE userActivityId = ${param.userActivityId}`;
  console.log("sqlStr : ", sqlStr2);
  let res2 = await _db.updatedata(sqlStr2);

  console.log("result findUser: ", res);

  return res;
}

async function voteUserByUserActivityId(param) {
  let sqlStr = `UPDATE user_activity SET voteCount = voteCount + 1 WHERE userActivityId = ${param.userActivityId};
      `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.updatedata(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function logVoteUser(param) {
  let sqlStr = `INSERT INTO cscamp.vote_log
  (userId, voteToUserActivityId, voteDate)
  VALUES(${param.userId}, ${param.userActivityId}, '${param.created_date}');
  `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.updatedata(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function findlLogVoteUser(param) {
  let sqlStr = `SELECT * FROM cscamp.vote_log WHERE userId = ${param.userId} AND voteToUserActivityId = ${param.userActivityId};
  `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

let user = {
  registerUser: registerUser,
  updateUser: updateUser,
  login: login,
  findUser: findUser,
  regisActivity: regisActivity,
  getRegisActivityByUserId: getRegisActivityByUserId,
  getUserByActivityName: getUserByActivityName,
  requestApprove: requestApprove,
  approveList: approveList,
  approveRequest: approveRequest,
  voteUserByUserActivityId: voteUserByUserActivityId,
  logVoteUser: logVoteUser,
  findlLogVoteUser: findlLogVoteUser
};

module.exports = user;
