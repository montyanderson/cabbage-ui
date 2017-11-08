module.exports = {
	get username() {
		if(typeof localStorage.username === "string") {
			return localStorage.username;
		} else {
			return "";
		}
	},

	set username(username) {
		localStorage.username = username;
	},

	get password() {
		if(typeof localStorage.password === "string") {
			return localStorage.password;
		} else {
			return "";
		}
	},

	set password(password) {
		localStorage.password = password;
	}
};
