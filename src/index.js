const Vue = require("vue");
const App = require("./components/App.vue");
const store = require("./lib/store");

new Vue({
	el: "#app",
	components: {
		App
	},
	store,
	render: createElement => createElement("app")
});

store.dispatch("load");
