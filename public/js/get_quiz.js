function get_quiz(){
    $.ajax({
        type: 'get',
        url: '/quiz',
    }).done(function(res){
        console.log("OK.");
        
        var parse = JSON.parse(res);
        quizzes = parse.quizzes;

    }).fail(function(err){
        console.log("err.");
        console.log(err);
        alert("何かエラーが起こっています。ページを更新してください。");
    });
}
