user_views = [];
_game_scene = null;

var GameScene = Class.create( Scene, {
    initialize: function(){
        Scene.call(this);

        _game_scene = this;
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

        var users_bg_2 = new Sprite(500, 800);
        users_bg_2.image = assets[ GAME_EDGE_IMG ];
        users_bg_2.x = 1100;
        users_bg_2.y = 0;
        this.addChild(users_bg_2);

        var theme_tab = new Sprite(820, 220);
        theme_tab.image = assets[ GAME_THEME_TAB_IMG ];
        theme_tab.x = 150;
        theme_tab.y = 100;
        this.addChild(theme_tab);

        for(var i=0; i<users.length; i++){
            var user_view = new UserView(1150, 175+125*i, this, users[i].name, users[i].icon);
            user_views.push(user_view);
        }
        
        
        var theme_pop = new Label('お題');
        theme_pop.font = "32px tenderness";
        theme_pop.x = 200;
        theme_pop.y = 150;
        theme_pop.addEventListener('touchstart', function(){
            alert("aaa");
        });
        this.addChild(theme_pop);
        
        
        var theme_pop2 = new Label('の意味を選択してください。');
        theme_pop2.font = "32px tenderness";
        theme_pop2.x = 600;
        theme_pop2.y = 250;
        theme_pop2.width = 500;
        this.addChild(theme_pop2);
        
        
        this.theme_label = new Label(' ');
        this.theme_label.font = "48px Palatino";
        this.theme_label.x = 300;
        this.theme_label.y = 200;
        this.theme_label.width = 500;
        this.addChild(this.theme_label);

        answer_user_index = 0;
        now_quiz_index = 0;

        var ans_tab_mx = [150, 570, 150, 570];
        var ans_tab_my = [400, 400, 550, 550];
        this.answer_labels = [];
        for(var i=0; i<4;i++){
            var ans_tab = new Sprite(400, 110);
            ans_tab.image = assets[ GAME_ANSWER_TAB_IMG ];
            ans_tab.x = ans_tab_mx[i];
            ans_tab.y = ans_tab_my[i];
            this.addChild(ans_tab);
            var answer_label = new Label(' ');
            answer_label.font = "30px Palatino";
            answer_label.x = ans_tab.x + 50;
            answer_label.y = ans_tab.y + 30;
            answer_label.color = "white";
            answer_label.addEventListener('touchstart', function(){
                if(quizzes[now_quiz_index].solve(this.text)){
                    user_views[answer_user_index].add_score(1);
                    alert(users[answer_user_index].name + "さん 正解です！");
                }else{
                    alert(users[answer_user_index].name + "さん 不正解です。。。");
                }
                answer_user_index++;

                if(answer_user_index == 3){
                    answer_user_index = 0;
                    now_quiz_index++;
                    if(now_quiz_index == 6){
                        alert("終わりです。");
                    }else{
                        _game_scene.set_quiz( now_quiz_index );
                        alert("次は" + users[answer_user_index].name + "さんです。");
                    }
                }else{
                    alert("次は" + users[answer_user_index].name + "さんです。");
                }
            });
            this.answer_labels.push(answer_label);
            this.addChild(answer_label);
        }

        this.set_quiz( 0 );
    },
    
    set_quiz: function( idx ){
        console.log(idx);
        this.theme_label.text = quizzes[idx].word;
        
        var labels = quizzes[idx].shuffle_answer();
        for(var i=0; i<4; i++){
            this.answer_labels[i].text = labels[i];
        }
    }
});
