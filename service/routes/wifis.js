var express = require('express');
var router 	= express.Router();
var Wifi 	= require('../models/wifis');

router.get('/register/:deviceId/:ssid/:label', function(req, res, next) {
	var user_device_id = req.params.deviceId
	var wifi_ssid = req.params.ssid;
	var wifi_label = req.params.label;

	Wifi.findByDeviceIdandSSID(user_device_id, wifi_ssid, function(err, wifi) {
		if (wifi != null) {
			wifi.label = wifi_label;
			Wifi.update(wifi, function(err){});
			res.send('WIFI ' + wifi_ssid + ' 已经注册过了，更新成功！');
		} else {
			Wifi.register(user_device_id, wifi_ssid, wifi_label);
			res.send('WIFI ' + wifi_ssid + ' 已经注册成功！');
		}
	});
})

router.get('/list/:deviceId', function(req, res, next) {
	var user_device_id = req.params.deviceId

	Wifi.listByDeviceId(user_device_id, function(err, wifis) {
		if （wifis != null) {
			res.render('wifis', {'wifis': wifis});
		}
	});
})

module.exports = router;