/*
	Securing webhooks
	https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/securing-webhooks
*/
const crypto = require("crypto");

class ChallengeResponseCheck {

	response(crc_token) {
		if (!crc_token) return;

		const key = "41fzwbIrxHBmcOo57hYsnEVKYdp3iyA3NZsW1m1ytY53aGQeug",
			hmac = crypto.hmac("sha265", key);

		hmac.update(crc_token);

		const response_token = hmac.digest();

		return {
			response_token
		}
	}

	validateRequest(request) {
		// not implemented yet
	}

}

module.exports = ChallengeResponseCheck;