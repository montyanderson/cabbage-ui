<template>
	<div>
		<NavBar></NavBar>

		<main class="container row">
			<div class="col-xs-6">
				<projects-panel></projects-panel>
			</div>

			<div class="col-xs-6">
				<logs-panel></logs-panel>
				<servers-panel></servers-panel>
			</div>
		</main>
	</div>
</template>

<script>
const Vue = require("vue");
//const auth = require("../auth");

const NavBar = require("./NavBar.vue");
const ProjectsPanel = require("./ProjectsPanel.vue");
const ServersPanel = require("./ServersPanel.vue");
const LogsPanel = require("./LogsPanel.vue");

module.exports = {
	data: () => ({
		loggedIn: false
	}),
	components: {
		NavBar,
		ProjectsPanel,
		ServersPanel,
		LogsPanel
	}
}
</script>
