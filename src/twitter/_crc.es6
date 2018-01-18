/*
	Securing webhooks
	https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/securing-webhooks
*/
const crypto = require("crypto");

class ChallengeResponseCheck {

	constructor() {
		this.debug = true;
	}

	log(message) {
		if(!this.debug) return;

		if (typeof message === typeof "")
			console.log(`ChallengeResponseCheck: ${message}`);
		else {
			console.log(`ChallengeResponseCheck:`);
			console.log(`${message}`);
		}
	}

	response(crc_token) {
		this.log(`response() called.`);

		if (!crc_token) return;

		const hmac = crypto.createHmac("sha256", process.env.TWITTER_APP_CONSUMER_SECRET);
		hmac.update(crc_token);

		const response_token = hmac.digest("hex");
		hmac.end();

		return {
			response_token
		}
	}

	validateRequest(request) {
		this.log(`validateRequest() is not implemented yet.`);

		return true;
	}

}

module.exports = new ChallengeResponseCheck();