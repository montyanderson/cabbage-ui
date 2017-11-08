<template>
	<div class="server row">
		<div class="col-xs-8">
			<h3><i class="fa fa-server" aria-hidden="true"></i> {{server.name}}</h3>
		</div>

		<div class="col-xs-4 buttons">
			<button class="small" v-on:click="edit">Edit</button>
			<button class="small delete">Delete</button>
		</div>

		<h4 class="col-xs-12">{{server.username}}@{{server.address}}:{{server.port}}</h4>
	</div>
</template>

<script>
const store = require("../lib/store");
const Server = require("../lib/Server");

module.exports = {
	props: [ "server" ],
	computed: {
		servers() {
			return this.$store.getters.servers;
		}
	},
	methods: {
		edit() {
			this.$emit("edit");
		},
		async delete() {
			if(confirm(`Are you sure you want to delete '${this.server.name}'?`) == true) {
				Server.delete(this.server);
				store.dispatch("updateServers");
			}
		}
	}
};
</script>
