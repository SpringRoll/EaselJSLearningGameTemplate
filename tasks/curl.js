module.exports = {
	debug: {
		src: 'http://stage.pbskids.org/progresstracker/api/v2/games/<%= eventSpec %>/events-spec.json',
		dest: '<%= build.config %>/spec.json'
	},
	release: {
		src: '<%= curl.debug.src %>?release=true',
		dest: '<%= build.config %>/spec.json'
	}
};