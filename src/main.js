(function()
{
	// Library depencencies
	var DebugOptions = include('springroll.DebugOptions', false),
		TitleState = include('_namespace_.TitleState'),
		GameState = include('_namespace_.GameState'),
		Application = include('springroll.Application'),
		Display = include('_displayClass_');

	var app = new Application({
		fps: 24,
		name: '_name_',
		state: 'title',
		canvasId: 'stage',
		configPath: 'assets/config/config.json',
		manifestsPath: 'assets/config/manifests.json',
		captionsPath: 'assets/config/captions.json',
		transition: new lib.Transition(),
		transitionSounds: {
			"in": "TransitionIn",
			"out": "TransitionOut"
		},
		display: Display,
		displayOptions:	{
			clearView: true,
		}
	});

	// Log out the qeury options
	if (DEBUG && DebugOptions)
	{
		DebugOptions
			.string('state', 'title, game')
			.boolean('mute', 'mute all sounds')
			.log();
	}

	// App has been initialized
	app.on('init', function()
	{
		// Set the states to use
		this.states = {
			title: new TitleState(),
			game: new GameState()
		};
	});

	// Give window access to the app
	window.app = app;

}());
