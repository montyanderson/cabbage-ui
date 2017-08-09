const Vue = require("vue");
const auth = require("./auth");
const Project = require("./Project");
const Server = require("./Server");

const app = window.app = new Vue({
	el: "#app",
	data: {
		projects: [],
		servers: [],
		newProject: false,
		newServer: false,
		username: auth.username,
		password: auth.password
	},
	methods: {
		async updateLogin() {
			auth.username = this.username;
			auth.password = this.password;

			try {
				await this.updateProjects();
				await this.updateServers();
			} catch(err) {

			}
		},

		async updateProjects() {
			app.projects = await Project.list();
		},

		async updateServers() {
			app.servers = await Server.list();
		},

		async createProject(project) {
			if(!project.id) {
				await Project.create(project);
			} else {
				await Project.edit(project);
			}

			this.newProject = false;
			await this.updateProjects();
		},

		async createServer(server) {
			await Server.create(server);
			this.newServer = false;
			await this.updateServers();
		},

		async deleteProject(project) {
			await Project.delete(project.id);
			await this.updateProjects();
		},

		async deleteServer(server) {
			await Server.delete(server.id);
			await this.updateServers();
		},

		async editProject(project) {
			await Project.edit(project);
			await this.updateProjects();
		},

		async deployProject(project) {
			try {
				const res = await Project.deploy(project.id);
				alert(JSON.stringify(res, null, "\t"));
			} catch(err) {
				//alert(`Deployment failed! ${err}`);
			}
		},

		arrayToggle(array, item) {
			const index = array.indexOf(item);

			if(index === -1) {
				array.push(item);
			} else {
				array.splice(index, 1);
			}
		}
	}
});

document.querySelector("main").style.display = "block";

app.updateProjects();
app.updateServers();
