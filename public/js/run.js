BACKGROUND_IMG = "img/background.png";
TITLE_IMG = "img/title.png";
ICON_IMGS = ["img/icons/icon.jpg", "img/icons/mazai.jpg", "img/icons/kuma.png", "img/icons/tibi.jpg"];
GAME_THEME_TAB_IMG = "img/theme_tab.png";
GAME_THEME_TAB_EDGE_IMG = "img/theme_edge.png";
GAME_ANSWER_TAB_IMG = "img/answer_tab.png";
GAME_USER_BACKGROUND_IMG = "img/status.png";
GAME_EDGE_IMG = "img/edge.png";
NEXT_BUTTON_IMG = "img/next.png";
ICON_EDGE_IMG = "img/icon_edge.png";


quizzes = null;
users = [];

window.onload = function(){
    core = new Core(1600, 800);
    core.preload(BACKGROUND_IMG, TITLE_IMG, GAME_THEME_TAB_IMG,
            GAME_ANSWER_TAB_IMG, GAME_USER_BACKGROUND_IMG, NEXT_BUTTON_IMG,
            GAME_EDGE_IMG, ICON_EDGE_IMG);
    for(var i=0; i<ICON_IMGS.length; i++) core.preload(ICON_IMGS[i]);

    assets = core.assets;
    scene = core.rootScene;

    core.onload = function(){
        var title_scene = new TitleScene();
        core.pushScene(title_scene);
    };
    
    get_quiz();
    core.start();
};
