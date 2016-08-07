var GameScene = Class.create( Scene, {
    initialize: function(){
        Scene.call(this);

        var bg = new Sprite(1600, 800);
        bg.image = assets[ BACKGROUND_IMG ];
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);
    
        var users_bg = new Sprite(500, 800);
        users_bg.image = assets[ GAME_USER_BACKGROUND_IMG ];
        users_bg.x = 1100;
        users_bg.y = 0;
        this.addChild(users_bg);

        var theme_tab = new Sprite(820, 220);
        theme_tab.image = assets[ GAME_THEME_TAB_IMG ];
        theme_tab.x = 150;
        theme_tab.y = 100;
        this.addChild(theme_tab);

        for(var i=0; i<users.length; i++){
            var icon = new Sprite(64,64);
            icon.image = users[i].icon;
            icon.x = 1150;
            icon.y = 175 + 125 * i;
            this.addChild(icon);
        }
    }
});
