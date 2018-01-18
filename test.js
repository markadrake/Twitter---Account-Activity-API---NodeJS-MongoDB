/*
	Dotenv [Dependency]
	- Allows us to load the root `.env` file as environment variables.
*/
require("dotenv").config();

const crc = require("./src/twitter/_crc.es6");

var x = crc.response("some data to hash");
console.log(x);
process.exit();