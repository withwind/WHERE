var db = require('../config/settings').db;

var Wifi = db.define('wifis', {
		id			:Number,
        deviceId	:String,
        ssid 		:String,
        label 		:String
    }, {
    	methods : {
    		wifi_label: function() {
    			return this.label;
			}
    	}
    }
);

module.exports = Wifi;

Wifi.register = function(deviceId, ssid, label, callback) {
    var newWifi = {};
    newWifi.ssid = ssid;
    newWifi.deviceId = deviceId;
    newWifi.label = label;

    Wifi.create(newWifi, function(err, wifi) {
        if (callback) callback(err, wifi);
    })
}

Wifi.update = function(wifi, callback) {
    wifi.save(function(err) {
        if (callback) callback(err);
    });
}

Wifi.listByDeviceId = function(deviceId, callback) {
    Wifi.find({'deviceId' : deviceId}, function(err, wifis) {
        if (callback) callback(err, wifis);
    })
}

Wifi.findByDeviceIdandSSID = function(deviceId, ssid, callback) {
	Wifi.one({'deviceId' : deviceId, 'ssid' : ssid}, function(err, wifi) {
        if (callback) callback(err, wifi);
    });
}
