<template>
	<section id="projects" class="row">
		<h2 class="col-xs-12"><i class="fa fa-folder-open-o" aria-hidden="true"></i> Projects</h2>

		<div class="col-xs-12">
			<button v-on:click="blank">Create a new Project</button>
		</div>

		<div class="col-xs-12">
			<div class="row new form" v-if="newProject">
				<div class="col-xs-12">
					<input placeholder="Name" v-model="newProject.name">
				</div>

				<div class="col-xs-12">
					<div class="row" v-for="server in servers">
						<div class="col-xs-1">
							<input type="checkbox" v-bind:checked="serverChecked(server)" v-on:click="toggleServer(server)">
						</div>

						<div class="col-xs-11">{{server.name}}</div>
					</div>
				</div>

				<div class="col-xs-6">
					<input placeholder="Repository" v-model="newProject.repo">
				</div>

				<div class="col-xs-6">
					<input placeholder="Directory" v-model="newProject.directory">
				</div>

				<div class="col-xs-12">
					<button v-if="newProject.id" v-on:click="create">Save</button>
					<button v-else v-on:click="create">Create</button>
				</div>
			</div>
		</div>

		<div class="col-xs-12">
			<div class="row">
				<input v-model="search" class="search" placeholder="Search">
			</div>
		</div>

		<div class="col-xs-12">
			<div class="row list">
				<div v-for="project in filteredProjects" class="col-xs-12">
					<project-bar v-bind:project="project" v-on:edit="edit(project)"></project-bar>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
const ProjectBar = require("./ProjectBar.vue");

module.exports = {
	data: () => ({
		newProject: false,
		search: ""
	}),
	components: {
		ProjectBar
	},
	computed: {
		projects() {
			return this.$store.getters.projects;
		},
		servers() {
			return this.$store.getters.servers;
		},
		filteredProjects() {
			const search = this.search.toLowerCase();

			return this.projects.filter(project => {
				const projectName = project.name.toLowerCase();

				return search.split(" ").every(keyword =>
					projectName.indexOf(keyword) !== -1
				)
			}).sort((a, b) => {
				if(a.name < b.name)
					return -1;

				if(a.name > b.name)
					return 1;

				return 0;
			});
		}
	},
	methods: {
		serverChecked(server) {
			return this.newProject.servers.indexOf(+server.id) !== -1;
		},
		toggleServer(server) {
			const index = this.newProject.servers.indexOf(server.id);

			if(index === -1) {
				this.newProject.servers.push(+server.id);
			} else {
				this.newProject.servers.splice(index, 1);
			}
		},
		edit(project) {
			this.newProject = Object.assign({}, project);
			window.scrollTo(0, 0);
		},
		blank() {
			if(typeof this.newProject === "object") {
				this.newProject = false;
			} else {
				this.newProject = {
					servers: [],
					active: true
				};
			}
		},
		create() {
			this.$store.dispatch("editProject", this.newProject);
			this.newProject = false;
		}
	}
}
</script>
