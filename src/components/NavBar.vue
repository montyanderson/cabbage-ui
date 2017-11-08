<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-8">
					<h1>cabbage</h1>
				</div>

				<login></login>
			</div>
		</div>
	</header>
</template>

<script>
const Login = require("./Login.vue");

module.exports = {
	components: {
		Login
	}
};
</script>
