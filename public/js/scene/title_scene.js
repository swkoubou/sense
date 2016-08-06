var TitleScene = Class.create( Scene, {
    initialize: function(){
        Scene.call(this);
        
        var bg = new Sprite(1600, 800);
        bg.image = assets[ TITLE_IMG ];
        bg.x = 0;
        bg.y = 0;
        
        bg.addEventListener('touchstart', function() {
            if(quizzes != null){
                core.popScene();
                
            }
        });

        this.addChild(bg);
    },
});
