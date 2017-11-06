const Vue = require("vue");
const Log = require("../Log");

Vue.component("log-view", {
	props: [ "id" ],
	data: () => ({
		toggle: false,
		text: "",
		status: "",
		projectId: ""
	}),
	methods: {
		async update() {
			Object.assign(this, await Log.find(this.id));
		}
	},
	async created() {
		await this.update();

		setInterval(async () => {
			if(this.status == "pending") {
				console.log(this);
				await this.update();
			}
		}, this.toggle ? 500 : 2000);
	},
	template: `<div class="col-xs-12 log">
		<h4 v-on:click="toggle = !toggle">Log #{{id}} ({{status}}) ({{projectId}})</h4>
		<pre v-if="toggle == true">{{text}}</pre>
	</div>`
});
