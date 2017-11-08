const Vue = require("vue");
const Vuex = require("vuex");
const auth = require("./auth");
const Project = require("./Project");
const Server = require("./Server");
const Log = require("./Log");

Vue.use(Vuex);

const store = module.exports = new Vuex.Store({
	state: {
		projects: [],
		servers: [],
		logs: []
	},
	mutations: {
		setProjects: (state, projects) => state.projects = projects,
		setServers: (state, servers) => state.servers = servers,
		setLogs: (state, logs) => state.logs = logs
	},
	getters: {
		projects: state => state.projects,
		servers: state => state.servers,
		logs: state => state.logs
	},
	actions: {
		async load(context) {
			context.dispatch("updateProjects");
			context.dispatch("updateServers");
			context.dispatch("updateLogs");
		},
		async updateProjects({ commit }) {
			commit("setProjects", await Project.list())
		},
		async updateServers({ commit }) {
			commit("setServers", await Server.list())
		},
		async updateLogs({ commit }) {
			const logs = [];
			const top = await Log.top();

			for(let i = Math.max(top - 5, 0); i < top; i++) {
				logs.push(i);
			}

			commit("setLogs", logs);
		},
		async editProject(context, project) {
			if(project.id) {
				await Project.edit(project);
			} else {
				await Project.create(project);
			}

			context.dispatch("updateProjects");
		},
		async editServer(context, server) {
			if(server.id) {
				await Server.edit(server);
			} else {
				await Server.create(server);
			}

			context.dispatch("updateServers");
		}
	}
});
