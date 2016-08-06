BACKGROUND_IMG = "img/background2.png";
TITLE_IMG = "img/title.png";
ICON_IMGS = ["img/icon.png", "img/icon2.jpg"];
GAME_THEME_TAB_IMG = "img/theme-tab.png";
GAME_ANSWER_TAB_IMG = "img/ans.png";
GAME_USER_BACKGROUND_IMG = "img/status.png";

quizzes = null;

window.onload = function(){
    core = new Core(1600, 800);
    core.preload(BACKGROUND_IMG, TITLE_IMG, ICON_IMGS, GAME_THEME_TAB_IMG,
            GAME_ANSWER_TAB_IMG, GAME_USER_BACKGROUND_IMG);

    assets = core.assets;
    scene = core.rootScene;

    core.onload = function(){
        var title_scene = new TitleScene();
        core.pushScene(title_scene);
    };
    
    get_quiz();
    core.start();
};
