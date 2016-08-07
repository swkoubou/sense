function get_quiz(){
    $.ajax({
        type: 'get',
        url: '/quiz',
    }).done(function(res){
        console.log("OK.");
        
        var parse = JSON.parse(res);
        quizzes = [];
        for(var i=0; i<parse.quizzes.length; i++){
            quizzes.push( new Quiz( parse.quizzes[i].word, parse.quizzes[i].answer ) );
        }
        
    }).fail(function(err){
        console.log("err.");
        console.log(err);
        alert("何かエラーが起こっています。ページを更新してください。");
    });
}
