'use strict';

var express = require('express');
var request = require('request');
var config = require('../config/environment');

var router = express.Router();

router.post('/', function (req, res) {

	request.post(
		{
			url: "https://" + config.slack_team_name + ".slack.com/api/users.admin.invite?t=" + new Date().getTime(),
			form: {
				email: req.body.email,
				first_name: req.body.firstName,
				last_name: req.body.lastName,
				token: config.slack_token,
				set_active: "true",
				_attempts: 1
			}
		},
		function (err, httpResponse, body) {
			if (err)
				res.status(500).send(body);

			res.send(body);
		});
});

module.exports = router;