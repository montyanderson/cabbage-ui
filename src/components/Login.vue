<template>
	<div>
		<div class="row" v-if="!loggedIn">
			<div class="col-xs-12 col-md-6">
				<input placeholder="Username" v-model="login.username" v-on:keyup.enter="go">
			</div>

			<div class="col-xs-12 col-md-6">
				<input placeholder="Password" v-model="login.password" v-on:keyup.enter="go" type="password">
			</div>
		</div>
	</div>
</template>

<script>
const store = require("../lib/store");

module.exports = {
	data: () => ({
		login: {}
	}),
	computed: {
		loggedIn() {
			return this.$store.getters.auth;
		}
	},
	methods: {
		go() {
			store.dispatch("login", this.login);
		}
	}
};
</script>
