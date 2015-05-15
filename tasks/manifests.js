module.exports = {
	release:
	{
		output: "<%= configFolder %>/manifests.json",
		files: "assets/fla/**/*.js",
		remove: "../../../deploy/",
		options: {
			lowercase: true
		}
	},
	debug:
	{
		output: "<%= configFolder %>/manifests.json",
		files: "assets/fla/**/*.js",
		remove: "../../../deploy/",
		options: {
			space: "	",
			lowercase: true
		}
	}
};