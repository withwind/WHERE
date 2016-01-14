var db = require('../config/settings').db;

var User = db.define('users', {
		id			:Number,
        name		:String,
        deviceId	:String
    }, {
    	methods : {
    		user_name: function() {
    			return this.name;
			}
    	}
    }
);

module.exports = User;

User.register = function(name, deviceId, callback) {
	newUser = {};
	newUser.name = name;
	newUser.deviceId = deviceId;
	User.create(newUser, function(err, user) {
		if (callback) callback(err, user);
	});
};

User.findByDeviceId = function(deviceId, callback) {
	return User.one({'deviceId' : deviceId}, function(err, user) {
		if (callback) callback(err, user);
	});
}
