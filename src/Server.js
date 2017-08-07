const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

const Server = module.exports = {
	async create(server) {
		return (await axios.post(`${base}/server/create`, server, {
			auth
		})).data;
	},

	async delete(id) {
		return (await axios.get(`${base}/server/delete`, {
			params: { id },
			auth
		})).data;
	},

	async edit(server) {
		return (await axios.post(`${base}/server/edit`, server, {
			auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/server/find`, {
			params: { id },
			auth
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/server/list`, {
			auth
		})).data;
	}
};
