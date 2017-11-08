const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

module.exports = {
	async create(project) {
		return (await axios.put(`${base}/project`, project, {
			auth: auth
		})).data;
	},

	async delete(id) {
		return (await axios.delete(`${base}/project`, {
			params: { id },
			auth: auth
		})).data;
	},

	async edit(project) {
		return (await axios.post(`${base}/project`, project, {
			auth: auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/project`, {
			params: { id },
			auth: auth
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/project/list`, {
			auth: auth
		})).data;
	},

	async deploy(id) {
		return (await axios.post(`${base}/project/deploy`, {}, {
			params: { id },
			auth: auth
		})).data;
	}
};
