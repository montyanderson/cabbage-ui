module.exports = {
	get username() {
		if(typeof localStorage.username === "string") {
			return localStorage.username;
		} else {
			throw new Error("Username not defined!");
		}
	},

	set username(username) {
		localStorage.username = username;
	},

	get password() {
		if(typeof localStorage.password === "string") {
			return localStorage.password;
		} else {
			throw new Error("Password not defined!");
		}
	},

	set password(password) {
		localStorage.password = password;
	}
};
