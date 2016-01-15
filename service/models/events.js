var db = require('../config/settings').db;

var Event = db.define('events', {
		id			:Number,
        deviceId	:String,
        ssid 		:String,
        event		:Number,
		timestamp	:{ type: "date", time: true }
    }
);

module.exports = Event;

Event.log = function(deviceId, ssid, event, callback) {
	newEvent = {};
	newEvent.deviceId = deviceId;
	newEvent.ssid = ssid;
	newEvent.event = event;

	Event.create(newEvent, function(err, event) {
		if (callback) callback(err, event);
	});
};

Event.findLastRecord = function(deviceId, ssid, callback) {
	Event.one({'deviceId' : deviceId, 'ssid' : ssid}, ['timestamp', 'Z'], function(err, event) {
		if (callback) callback(err, event);
	});
}
