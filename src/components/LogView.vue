<template>
	<div class="row log" v-on:click="toggle = !toggle">
		<div class="col-xs-12">
			<h3><i class="fa fa-file-text-o" aria-hidden="true"></i> Log #{{id}}</h3>
		</div>

		<div class="col-xs-12">
			<h4><strong>{{project.name}}</strong> {{startPretty}} ({{time}}ms)</h4>
		</div>

		<pre class="col-xs-12" v-if="toggle == true">{{text}}</pre>
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
		start: 0,
		time: 0,
		text: "",
		status: "",
		projectId: "",
		project: {
			name: ""
		}
	}),
	computed: {
		startPretty() {
			const date = new Date(this.start);

			let day = date.getDate().toString();
			if(day.length == 1) day = "0" + day;

			let month = (date.getMonth() + 1).toString();
			if(month.length == 1) month = "0" + month;

			let year = date.getFullYear();

			let hour = date.getHours();
			if(hour.length == 1) hour = "0" + hour;

			let minute = date.getMinutes();
			if(minute.length == 1) minute = "0" + minute.toString();

			return `${day}/${month}/${year} ${hour}:${minute}`;
		}
	},
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
