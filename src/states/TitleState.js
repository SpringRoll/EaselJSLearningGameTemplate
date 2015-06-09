(function()
{
	//Import classes
	var BaseState = include('springroll.easeljs.BaseState'),
		TitlePanel = include('_namespace_.TitlePanel');

	/**
	 * The logic for the title state
	 * @class _namespace_.TitleState
	 * @extends springroll.easeljs.BaseState
	 */
	var TitleState = function(options)
	{
		BaseState.call(this, new TitlePanel(), options);

		this.onPlay = this.onPlay.bind(this);
	};

	// Super prototype
	var s = BaseState.prototype;

	// Extend the base class
	var p = extend(TitleState, BaseState);

	/**
	 * When the transition is done playing and we're fully in
	 */
	p.enterDone = function()
	{
		// Click either the background or the button
		this.panel.playButton.addEventListener("click", this.onPlay);
		this.panel.background.addEventListener("click", this.onPlay);
		this.panel.background.cursor = "pointer";
	};

	/**
	 * Handler when the play button is clicked
	 * @method  onPlay
	 * @private
	 */
	p.onPlay = function()
	{
		//Don't play music while in dev mode, only as
		//a courtesy to the developer
		if (RELEASE)
		{
			this.game.music = 'BackgroundMusic';
		}
		this.nextState();
	};

	/**
	 * When the state fully exits
	 * @method  exit
	 */
	p.exit = function()
	{
		// Release event listeners
		this.panel.background.cursor = null;
		this.panel.background.removeEventListener("click", this.onPlay);
		this.panel.playButton.removeEventListener("click", this.onPlay);
	};

	//Assign to namespace
	namespace("_namespace_").TitleState = TitleState;
}());
