const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

module.exports = {
	async top() {
		return (await axios.get(`${base}/log/top`, {
			auth: auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/log`, {
			params: { id },
			auth: auth
		})).data;
	}
};
