<template>
	<section id="logs" class="row">
		<h2 class="col-xs-12"><i class="fa fa-file-text-o" aria-hidden="true"></i> Logs</h2>

		<div class="col-xs-12">
			<div class="row list">
				<div class="col-xs-12" v-for="log in logs">
					<log-view v-bind:id="log"></log-view>
				</div>
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
