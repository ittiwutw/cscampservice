var _db = require('./db');

async function register(param) {

    let sqlStr = "INSERT INTO pansuk_info (name, latitude , longitude , detail , img , created_date) VALUES " +
        " ( '" + param.name + "' , '" + param.latitude + "' , '" + param.longitude + "' ,  '" + param.detail + "' ,  '" + param.img + "' , '" + param.created_date + "' )";
    let res = await _db.insertdata(sqlStr);
    return res;
}

async function update(param) {
    let sqlStr = "UPDATE pansuk_info SET name = '" + param.name + "' , latitude = '" + param.latitude + "', longitude = '" + param.longitude + "', detail = '" + param.detail + "', img = '" + param.img + "', update_date = '" + param.update_date + "' WHERE id = '" + param.id + "'";
    let res = _db.updatedata(sqlStr);
    return res;
}

async function findById(param) {
    let sqlStr = "SELECT * FROM pansuk_info WHERE id ='" + param.id + "'";
    let res = _db.updatedata(sqlStr);
    return res;
}

async function getAll() {
    let sqlStr = "SELECT * FROM pansuk_info";
    let res = _db.updatedata(sqlStr);
    return res;
}

function deletePunsuk(param) {
    let sqlStr = "DELETE FROM pansuk_info WHERE id = '" + param.id + "'";
    let res = _db.selectData(sqlStr);
    return res;
}

let punsukCost = {
    register: register,
    update:update,
    getAll:getAll,
    findById:findById,
    deletePunsuk:deletePunsuk
}

module.exports = punsukCost;