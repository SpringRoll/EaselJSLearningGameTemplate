module.exports = function(grunt)
{
	grunt.registerTask(
		'_pre-build',
		'Default task to build all the project code', [
			'curl:release',
			'clean:manifests',
			'manifests:release'
		]
	);
	
	grunt.registerTask(
		'_pre-build-debug',
		'Default task to build all the project code', [
			'curl:debug',
			'clean:manifests',
			'manifests:debug'
		]	
	);	
	
	grunt.registerTask(
		'create-manifests',
		'Combine the FLA manifests into a single file', [
			'manifests:release'
		]
	);
};
