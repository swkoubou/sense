var Quiz = Class.create({
    initialize: function(word, ans){
        this.word = word;
        this.ans = ans;
        this.answer_list = [ans];
    },

    add_answer: function(user_ans){
        this.answer_list.push(user_ans);
    },

    shuffle_answer: function(){
        var shuffle = function(){ return Math.random()-.5; };
        return this.answer_list.sort(shuffle);
    },
    
    solve: function(select_ans){
        return select_ans == this.ans;
    }
});
