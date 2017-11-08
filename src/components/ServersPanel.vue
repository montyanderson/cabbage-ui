<template>
	<section id="servers" class="row">
		<h2 class="col-xs-12"><i class="fa fa-folder-open-o" aria-hidden="true"></i> Servers</h2>

		<div class="col-xs-12">
			<button v-on:click="blank">Create a new Server</button>
		</div>

		<div class="col-xs-12">
			<div class="row new form" v-if="newServer">
				<div class="col-xs-12">
					<input placeholder="Name" v-model="newServer.name">
				</div>

				<div class="col-xs-6">
					<input placeholder="Address" v-model="newServer.address">
				</div>

				<div class="col-xs-6">
					<input placeholder="Port" v-model="newServer.port">
				</div>

				<div class="col-xs-6">
					<input placeholder="Username" v-model="newServer.username">
				</div>

				<div class="col-xs-6">
					<input placeholder="Password" v-model="newServer.password" type="password">
				</div>

				<div class="col-xs-12">
					<button v-if="newServer.id" v-on:click="create">Save</button>
					<button v-else="newServer.id" v-on:click="create">Create</button>
				</div>
			</div>
		</div>

		<div class="col-xs-12">
			<div class="row list">
				<div v-for="server in servers" class="col-xs-12">
					<server-bar v-bind:server="server" v-on:edit="edit(server)"></server-bar>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
const ServerBar = require("./ServerBar.vue");

module.exports = {
	data: () => ({
		newServer: false
	}),
	components: {
		ServerBar
	},
	computed: {
		servers() {
			return this.$store.getters.servers;
		}
	},
	methods: {
		edit(server) {
			this.newServer = Object.assign({}, server);
		},
		blank() {
			if(typeof this.newServer === "object") {
				this.newServer = false;
			} else {
				this.newServer = {};
			}
		},
		create() {
			this.$store.dispatch("editServer", this.newServer);
			this.newServer = false;
		}
	}
};
</script>
