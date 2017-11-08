<template>
	<section id="logs" class="row">
		<h2 class="col-xs-12"><i class="fa fa-file-text-o" aria-hidden="true"></i> Logs</h2>

		<div class="col-xs-12">
			<div class="row list">
				<log-view v-for="log in logs" v-bind:id="log"></log-view>
			</div>
		</div>
	</section>
</template>

<script>
const LogView = require("./LogView.vue");

module.exports = {
	components: {
		LogView
	},
	computed: {
		logs() {
			return this.$store.getters.logs;
		}
	}
};
</script>
