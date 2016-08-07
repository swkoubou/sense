var UserView = new Class.create({
    initialize: function(x, y, root_scene, name, icon){
        this.x = x;
        this.y = y;
        var icon_sprite = new Sprite(64,64);
        icon_sprite.image = icon;
        icon_sprite.x = x + 10;
        icon_sprite.y = y + 10;
        root_scene.addChild(icon_sprite);
        
        var user_label = new Label(name);
        user_label.font = "25px Palatino";
        user_label.x = x + 20 + 64;
        user_label.y = y + 15;
        user_label.color = "white";
        root_scene.addChild(user_label);

        this.score = 0;
        this.score_label = new Label( "Score: " + this.score);
        this.score_label.font = "22px Palatino";
        this.score_label.x = user_label.x;
        this.score_label.y = y + 50;
        this.score_label.color = "white";
        root_scene.addChild(this.score_label);
    },

    add_score: function( add_point ){
        this.score += add_point;
        this.score_label.text = "Score: " + this.score;
    }
});
