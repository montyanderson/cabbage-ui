const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

module.exports = {
	async create(server) {
		return (await axios.put(`${base}/server`, server, {
			auth: auth
		})).data;
	},

	async delete(id) {
		return (await axios.delete(`${base}/server`, {
			params: { id },
			auth: auth
		})).data;
	},

	async edit(server) {
		return (await axios.post(`${base}/server`, server, {
			auth: auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/server`, {
			params: { id },
			auth: auth
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/server/list`, {
			auth: auth
		})).data;
	}
};
