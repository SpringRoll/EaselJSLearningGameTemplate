(function()
{
    //Import classes
    var BasePanel = include('springroll.easeljs.BasePanel'),
        Bitmap = include('createjs.Bitmap'),
        DwellTimer = include('springroll.easeljs.DwellTimer'),
        SoundButton = include('springroll.easeljs.SoundButton');

    /**
     * Panel contains all of the visual elements for the title state
     * @class _namespace_.TitlePanel
     * @extends springroll.easeljs.BasePanel
     */
    var TitlePanel = function()
    {
        BasePanel.call(this);
    };

    //Super prototype
    var s = BasePanel.prototype;

    //Extend the base panel
    var p = extend(TitlePanel, BasePanel);

    /**
     * Setup the state, this happens on each state entering
     */
    p.setup = function()
    {
        this.background = new Bitmap(images.TitleBackground);
        this.background.name = 'TitleBackground';
        this.addChildAt(this.background, 0);
        DwellTimer.create(this.background);

        this.playButton = new SoundButton(images.PlayButton);
        this.playButton.name = 'PlayButton';
        var data = this.game.config.sprites.playButton;
        this.playButton.x = data.x;
        this.playButton.y = data.y;
        this.addChild(this.playButton);
        DwellTimer.create(this.playButton);
    };

    /**
     * Un-setup the panel when exiting the state
     */
    p.teardown = function()
    {
        s.teardown.call(this);
        this.background = null;
        this.playButton = null;
    };

    //Assign to namespace
    namespace('_namespace_').TitlePanel = TitlePanel;
}());