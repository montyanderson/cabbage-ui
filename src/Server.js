const axios = require("axios");
const base = require("./base");

const Server = module.exports = {
	async create(server) {
		return (await axios.post(`${base}/server/create`, server)).data;
	},

	async delete(id) {
		return (await axios.get(`${base}/server/delete`, {
			params: { id }
		})).data;
	},

	async edit(server) {
		return (await axios.post(`${base}/server/edit`, server)).data;
	},

	async find(id) {
		return (await axios.get(`${base}/server/find`, {
			params: { id }
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/server/list`)).data;
	}
};
