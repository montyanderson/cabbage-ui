<template>
	<div class="col-xs-12 log">
		<h4 v-on:click="toggle = !toggle">Log #{{id}} ({{status}}) ({{project.name}})</h4>
		<pre v-if="toggle == true">{{text}}</pre>
	</div>
</template>

<script>
const Vue = require("vue");
const Log = require("../lib/Log");
const Project = require("../lib/Project");

module.exports = {
	props: [ "id" ],
	data: () => ({
		toggle: false,
		text: "",
		status: "",
		projectId: "",
		project: {
			name: ""
		}
	}),
	methods: {
		async update() {
			Object.assign(this, await Log.find(this.id));
			this.project = await Project.find(this.projectId);
		}
	},
	async created() {
		await this.update();

		setInterval(async () => {
			if(this.status == "pending") {
				await this.update();
			}
		}, 2000);
	}
};
</script>
