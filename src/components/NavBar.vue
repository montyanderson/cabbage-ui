<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-8">
					<h1>cabbage</h1>
				</div>

				<div class="col-xs-12 col-md-4" v-if="loggedIn">
					<button class="logout" v-on:click="username = ''; password = ''; updateLogin()">Logout</button>
				</div>
			</div>

			<div class="row" v-if="!loggedIn">
				<div class="col-xs-12 col-md-6">
					<input placeholder="Username" v-model="username" v-on:keyup.enter="updateLogin">
				</div>

				<div class="col-xs-12 col-md-6">
					<input placeholder="Password" v-model="password" v-on:keyup.enter="updateLogin" type="password">
				</div>
			</div>
		</div>
	</header>
</template>

<script>
module.exports = {
	data: () => ({

	})
}
</script>
