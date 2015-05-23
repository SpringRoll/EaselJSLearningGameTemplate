module.exports = {
	release:
	{
		output: "<%= configFolder %>/manifests.json",
		files: "assets/fla/**/*.js",
		remove: "../../../deploy/"
	},
	debug:
	{
		output: "<%= configFolder %>/manifests.json",
		files: "assets/fla/**/*.js",
		remove: "../../../deploy/",
		options: {
			space: "\t"
		}
	}
};
