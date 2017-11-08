const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

module.exports = {
	async create(project) {
		return (await axios.put(`${base}/project`, project, {
			auth
		})).data;
	},

	async delete(id) {
		return (await axios.delete(`${base}/project`, {
			params: { id },
			auth
		})).data;
	},

	async edit(project) {
		return (await axios.post(`${base}/project`, project, {
			auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/project`, {
			params: { id },
			auth
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/project/list`, {
			auth
		})).data;
	},

	async deploy(id) {
		return (await axios.post(`${base}/project/deploy`, {}, {
			params: { id },
			auth
		})).data;
	}
};
