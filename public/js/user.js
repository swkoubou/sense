var User = Class.create({
    initialize: function(name, icon_img_str){
        this.name = name;
        this.icon = assets[ icon_img_str ];
    }
});
