const Vue = require("vue");
const Vuex = require("vuex");
const auth = require("./auth");
const Project = require("./Project");
const Server = require("./Server");
const Log = require("./Log");

Vue.use(Vuex);

const store = module.exports = new Vuex.Store({
	state: {
		login: {},
		auth: false,
		projects: [],
		servers: [],
		logs: []
	},
	mutations: {
		setLogin: (state, login) => {
			Object.assign(auth, login);
			state.login = login
		},
		auth: (state) => {
			state.auth = true;
			localStorage.login = JSON.stringify(state.login);
		},
		setProjects: (state, projects) => state.projects = projects,
		setServers: (state, servers) => state.servers = servers,
		setLogs: (state, logs) => state.logs = logs
	},
	getters: {
		login: state => state.login,
		auth: state => state.auth,
		projects: state => state.projects,
		servers: state => state.servers,
		logs: state => state.logs
	},
	actions: {
		async login(context, login) {
			context.commit("setLogin", login);
			setTimeout(() => context.dispatch("load"), 0);
		},
		async load(context) {
			context.dispatch("updateProjects");
			context.dispatch("updateServers");

			context.dispatch("updateLogs");

			setInterval(() => {
				context.dispatch("updateLogs");
			}, 5000);

			context.commit("auth");
		},
		async updateProjects({ commit }) {
			commit("setProjects", await Project.list());
		},
		async updateServers({ commit }) {
			commit("setServers", await Server.list());
		},
		async updateLogs({ commit }) {
			const logs = [];
			const top = await Log.top();

			for(let i = Math.max(top - 5, 0); i <= top; i++) {
				logs.unshift(i);
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
