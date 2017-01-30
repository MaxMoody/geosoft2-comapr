/**
 * Created by Sven O. Pagel on 2016-12-19.
 */

var crypto = require('crypto');
var db = require('./db_setup').db;

module.exports.hashPassword = function hashPassword(password, salt) {
    var hash = crypto.createHash('sha256');
    hash.update(password);
    hash.update(salt);
    return hash.digest('hex');
};

module.exports.registerUser = function (name, email, city, country, password) {
    var now = Date.now().toString();
    var hash = this.hashPassword(password.toString(),now);
    db.run("INSERT INTO Users VALUES (null, ?, ?, ?, ?, ?, ?);", name, email, city, country, hash, now);
    
};
module.exports.newProject = function (name, ownerid) {
    db.run("INSERT INTO Projects VALUES (null, ?, ?);", name, ownerid);  
};
//FIXME
module.exports.deleteProject = function(id){
    db.run("DELETE from Projects where id = ?;", id);
}