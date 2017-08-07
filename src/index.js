const Vue = require("vue");
const Project = require("./Project");
const Server = require("./Server");

window.Project = Project;
window.Server = Server;
window.auth = require("./auth");

const app = new Vue({
	el: "main",
	data: {
		projects: [],
		servers: [],
		newProject: false,
		newServer: false
	},
	methods: {
		async updateProjects() {
			app.projects = await Project.list();
		},

		async updateServers() {
			app.servers = await Server.list();
		},

		async createProject(project) {
			await Project.create({
				name: project.name,
				servers: Object.keys(project.servers)
					.filter(id => project.servers[id] === true),
				repo: project.repo,
				directory: project.directory
			});

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
		}
	}
});

app.updateProjects();
app.updateServers();
