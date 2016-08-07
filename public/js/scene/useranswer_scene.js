var UserAnswerScene = Class.create(Scene, {
    initialize: function(){
        Scene.call(this);

        var bg = new Sprite(1600, 800);
        bg.image = assets[ BACKGROUND_IMG ];
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);

        for(var i=0; i<quizzes.length; i++){
            var quiz_label = new Label("「"+quizzes[i].word+"」のでたらめな意味を入力してください。");
            quiz_label.font = "30px Palatino";
            quiz_label.x = 100;
            quiz_label.y = 100 + i * 75;
            quiz_label.width = 900;
            quiz_label.color = "white";
            this.addChild(quiz_label);

            var ans_input = new Entity();
            ans_input.x = quiz_label.x + 950;
            ans_input.y = quiz_label.y;
            ans_input.width = 200;
            ans_input.height = 30;
            ans_input._element = document.createElement('input');
            this.addChild(ans_input);
        }

        var next_button = new Sprite(250, 80);
        next_button.image = assets[ NEXT_BUTTON_IMG ];
        next_button.x = 100;
        next_button.y = 100 + 7 * 75;
        next_button.addEventListener('touchstart', function(){
            var inputs = document.getElementsByTagName("input");
            for(var i=0; i<inputs.length; i++){
                if(inputs[i].value == null || inputs[i].value == "" || inputs[i].length > 50){
                    alert("全ての項目に50文字以内で回答してください。");
                    return ;
                }
            }

            
            for(var i=0; i<inputs.length; i++){
                quizzes[i].add_answer(inputs[i].value);
            }

            if(users.length == 3){
                core.popScene();
                core.pushScene(new GameScene());
            }else{
                core.popScene();
                core.pushScene(new UserInfoScene());
            }
        });
        this.addChild(next_button);
    }
});
