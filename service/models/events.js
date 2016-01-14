var db = require('../config/settings').db;

var Event = db.define('events', {
		id			:Number,
        deviceId	:String,
        event		:Number,
		timestamp	:{ type: "date", time: true }
    }
);

module.exports = Event;

Event.log = function(deviceId, event) {
	newEvent = {};
	newEvent.deviceId = deviceId;
	newEvent.event = event;
	console.log(newEvent);
	Event.create(newEvent, function(err, results) {
		console.log(err);
	});
};
