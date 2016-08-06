function get_quiz(){
    $.ajax({
        type: 'get',
        url: '/quiz',
    }).done(function(res){
        console.log("OK.");
        console.log(res);

        var parse = JSON.parse(res);
        quizzes = parse.quizzes;

        for(var user_idx = 0; user_idx < 3; user_idx++){
            var name = null;
            while(true){
                name = prompt("名前を6文字以内で入力してください。", "");
                if(name != null && name.length != 0  && name.length <= 6){
                    user_labels[ user_idx ].text = name;
                    break;
                }
            }

            var user_ans_list = [];
            for(var quiz_idx = 0; quiz_idx < 1; quiz_idx++){
                var view_text = "お題: " + quizzes[ quiz_idx ].word + " のでたらめな意味を入力してください。";
                while(true){
                    var user_ans = prompt(view_text, "");
                    if(user_ans != null && user_ans.length != 0 && user_ans.length <= 50){
                        user_ans_list.push(user_ans);
                        break;
                    }
                }
            }

            user_answers.push(user_ans_list);
            alert("次の人に画面を受け渡したらOKを押してください。");
        }
        
        theme_label.text = quizzes[0].word;
        answer_labels[0].text = user_answers[2][0];
        answer_labels[1].text = quizzes[0].answer;
        answer_labels[2].text = user_answers[0][0];
        answer_labels[3].text = user_answers[1][0];
        scene.removeChild(wait_start_image);
    }).fail(function(err){
        console.log("err.");
        console.log(err);
    });
}
