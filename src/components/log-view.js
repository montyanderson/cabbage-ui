const Vue = require("vue");
const Log = require("../Log");

Vue.component("log-view", {
	props: [ "id" ],
	data: () => ({
		text: ""
	}),
	methods: {
		async toggle() {
			if(this.text == "") {
				this.text = await Log.find(this.id);
			} else {
				this.text = "";
			}
		}
	},
	template: `<div class="col-xs-12 log">
		<h4 v-on:click="toggle">Log #{{id}}</h4>
		<pre>{{text}}</pre>
	</div>`
});
