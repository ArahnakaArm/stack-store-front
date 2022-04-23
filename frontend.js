const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const expressWinston = require("express-winston");
const { constants } = require("crypto");
const winston = require("winston");

const server = JSON.parse(process.env.server);
const frontEndPort = server.app_port || 80;
const ssl = server.use_https || false;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.options('*', cors())

app.use(express.static(path.join(__dirname, 'dist/stack-store')));

app.use(
	expressWinston.logger({
		transports: [
			new winston.transports.Console({
				json: true,
				colorize: true
			})
		]
	})
);

// app.use(
// 	helmet({
// 		frameguard: false
// 	})
// );

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/stack-store', 'index.html'));
});

if (!ssl) {
	const http = require("http");
	http.createServer(app).listen(frontEndPort, "0.0.0.0", function(err) {
		// console.log(`Ready on http://0.0.0.0:${frontEndPort}`);
	});
} else {
	var headers = {};
	// set header to handle the CORS
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Headers"] =
		"Content-Type, Content-Length, Authorization, Accept, X-Requested-With";
	headers["Access-Contrl-Allow-Methods"] = "PUT, POST, GET, DELETE, OPTIONS";
	headers["Access-Control-Max-Age"] = "86400";
	headers["Content-Security-Policy"] = "default-src 'self'";
	const https = require("https");
	const key = fs.readFileSync(__dirname + `/${server.key}`);
	const cert = fs.readFileSync(__dirname + `/${server.cert}`);
	const options = {
		headers: headers,
		key: key,
		cert: cert,
		secureOptions: constants.SSL_OP_NO_TLSv1 |
			constants.SSL_OP_NO_TLSv1_1 |
			constants.SSL_OP_NO_TLSv2 |
			constants.SSL_OP_NO_SSLv3
	};
	https
		.createServer(options, app)
		.listen(frontEndPort, "0.0.0.0", function(err) {
			// console.log(`> Ready on https://0.0.0.0:${frontEndPort}`);
		});
}