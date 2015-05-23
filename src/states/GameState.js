(function()
{
	//Import classes
	var BaseState = include('springroll.easeljs.BaseState'),
		GamePanel = include('_namespace_.GamePanel');

	/**
	 * The logic for the title state
	 * @class _namespace_.TitleState
	 * @extends springroll.easeljs.BaseState
	 */
	var GameState = function(options)
	{
		BaseState.call(this, new GamePanel(), options);

		// Bind the callback
		this.onPlayHelp = this.onPlayHelp.bind(this);
	};

	//Super prototype
	var s = BaseState.prototype;

	//Extend the base state
	var p = extend(GameState, BaseState);

	/**
	 * After assets are loaded and state is fully entered
	 * @method  enterDone
	 */
	p.enterDone = function()
	{
		// Handle when the help button is pressed
		this.game.container.on('playHelp', this.onPlayHelp);
	};

	/**
	 * Listens for playHelp message fired by the Help button
	 * on the game Container module
	 * @method  onPlayHelp
	 * @private
	 */
	p.onPlayHelp = function()
	{
		// Track any help parameters
		// this.game.learning.clickHelp(
		//     game_specific_tracking_paramter_1,
		//     game_specific_tracking_paramter_2
		// );
	};

	/**
	 * When the state starts to exit, before transition
	 * @method  exitStart
	 */
	p.exitStart = function()
	{
		this.game.container.off('playHelp', this.onPlayHelp);
	};

	//Assign to namespace
	namespace('_namespace_').GameState = GameState;
}());