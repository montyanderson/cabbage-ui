const axios = require("axios");
const base = require("./base");

const Project = module.exports = {
	async create(project) {
		return (await axios.post(`${base}/project/create`, project)).data;
	},

	async delete(id) {
		return (await axios.get(`${base}/project/delete`, {
			params: { id }
		})).data;
	},

	async edit(project) {
		return (await axios.post(`${base}/project/edit`, project)).data;
	},

	async find(id) {
		return (await axios.get(`${base}/project/find`, {
			params: { id }
		})).data;
	},

	async list() {
		return (await axios.get(`${base}/project/list`)).data;
	}
};
