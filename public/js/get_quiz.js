function get_quiz(){
    $.ajax({
        type: 'get',
        url: '/quiz',
    }).done(function(res){
        console.log("OK.");
        console.log(res);
    }).fail(function(err){
        console.log("err.");
        console.log(err);
    });
}
