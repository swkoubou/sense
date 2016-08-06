BACKGROUND_IMG = "img/background2.png";
USERS_BACKGROUND_IMG = "img/status.png";
THEME_TAB_IMG = "img/theme-tab.png";
ICON_IMG = "img/icon2.jpg";
ANSWER_TAB_IMG = "img/ans.png";


THEME_FONT = "65px Palatino";
ANSWER_FONT = "30px Palatino";
USER_FONT = "45px Palatino";

window.onload = function () {
    var game = new Game(1600, 800);

    game.preload(BACKGROUND_IMG, USERS_BACKGROUND_IMG, THEME_TAB_IMG, ICON_IMG, ANSWER_TAB_IMG); 
    assets = game.assets;
    scene = game.rootScene;
    game.onload = function () {
        /* bg */
        var bg = new Sprite(1600, 800);
        bg.image = assets[ BACKGROUND_IMG ];
        bg.x = 0;
        bg.y = 0;
        scene.addChild(bg);
        var users_bg = new Sprite(500, 800);
        users_bg.image = assets[ USERS_BACKGROUND_IMG ];
        users_bg.x = 1100;
        users_bg.y = 0;
        scene.addChild(users_bg);
        var theme_tab = new Sprite(820, 220);
        theme_tab.image = assets[ THEME_TAB_IMG ];
        theme_tab.x = 150;
        theme_tab.y = 100;
        scene.addChild(theme_tab);

        /* theme text */
        var theme_label = new Label('ビシソワーズ');
        theme_label.font = THEME_FONT;
        theme_label.x = 400;
        theme_label.y = 150;
        scene.addChild(theme_label);

        var anstab_mx = [150, 570, 150, 570];
        var anstab_my = [400, 400, 550, 550];
        var anstab_font_mx = [200, 600, 200, 600];
        var anstab_font_my = [440, 440, 600, 600];
        for(var i=0; i<4; i++){
            var answer_tab = new Sprite(400, 110);
            answer_tab.image = assets[ ANSWER_TAB_IMG ];
            answer_tab.x = anstab_mx[i];
            answer_tab.y = anstab_my[i];
            scene.addChild(answer_tab);
            
            var answer_label = new Label('じゃがいものポタージュ');
            answer_label.font = ANSWER_FONT;
            answer_label.x = anstab_font_mx[i];
            answer_label.y = anstab_font_my[i];
            scene.addChild(answer_label);
        }
        
        /* icon */
        var icons = [];
        for(var i=0; i<3; i++){
            var icon = new Sprite(128,128);
            icon.image = assets[ ICON_IMG ];
            icon.scale(0.5, 0.5);
            icon.x = 1150;
            icon.y = 175 + 125 * i;
            scene.addChild(icon);

            var user_label = new Label('tibim〇su');
            user_label.font = USER_FONT;
            user_label.x = icon.x + 130;
            user_label.y = icon.y + 32;
            scene.addChild(user_label);
        }

    };
    game.start();
}
