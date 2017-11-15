<template>
	<div class="project row">
		<div class="col-xs-6">
			<h3><i class="fa fa-hdd-o" aria-hidden="true"></i> {{project.name}}</h3>
		</div>

		<div class="col-xs-6 buttons">
			<button class="small" v-on:click="edit">
				Edit
			</button>

			<button class="small deploy" v-on:click="deploy">
				Deploy
			</button>

			<button class="small off" v-if="project.active" v-on:click="off">
				Off
			</button>

			<button class="small on" v-else v-on:click="on">
				On
			</button>

			<button class="small delete" v-on:click="delete(project)">Delete</button>
		</div>

		<h4 class="col-xs-12">{{project.repo}}</h4>
		<h5 class="col-xs-12">{{project.pushSecret}}</h5>

	</div>
</template>

<script>
const store = require("../lib/store");
const Project = require("../lib/Project");

module.exports = {
	props: [ "project" ],
	data: () => ({

	}),
	methods: {
		edit() {
			this.$emit("edit");
		},
		async on() {
			this.project.active = true;
			await Project.edit(this.project);

			store.dispatch("updateProjects");
		},
		async off() {
			this.project.active = false;
			await Project.edit(this.project);

			store.dispatch("updateProjects");
		},
		async delete() {
			if(confirm(`Are you sure you want to delete the project '${this.project.name}'?`) == true) {
				await Project.delete(this.project);
				store.dispatch("updateProjects");
			}
		},
		async deploy() {
			await Project.deploy(this.project.id);
		}
	}
};
</script>
