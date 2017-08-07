const axios = require("axios");
const base = require("./base");
const auth = require("./auth");

const Project = module.exports = {
	async create(project) {
		return (await axios.post(`${base}/project/create`, project, {
			auth
		})).data;
	},

	async delete(id) {
		return (await axios.get(`${base}/project/delete`, {
			params: { id },
			auth
		})).data;
	},

	async edit(project) {
		return (await axios.post(`${base}/project/edit`, project, {
			auth
		})).data;
	},

	async find(id) {
		return (await axios.get(`${base}/project/find`, {
			params: { id },
			auth
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/project/list`, {
			auth
		})).data;
	}
};
