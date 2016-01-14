var db = require('../config/settings').db;

//var users = [
//  { id : 1, name: 'withwind',	deviceId : '1'},
//  { id : 2, name: 'hunan',		deviceId : '2'},
//];

var User = db.define('users', {
		id			:Number,
        name		:String,
        deviceId	:String
    }
);

module.exports = User;

User.register = function(name, deviceId) {
	newUser = {};
	newUser.name = name;
	newUser.deviceId = deviceId;
	console.log(name);
	User.create(newUser, function(err, results) {
		console.log(err);
	});
};

User.getUser = function(deviceId) {
	return User.one({'deviceId' : deviceId}, function(err, User) {
		console.log(err);
	});
}
