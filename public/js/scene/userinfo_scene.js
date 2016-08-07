var user_name_str = ""
var select_icon_str = "";

var UserInfoScene = Class.create( Scene, {
    initialize: function(){
        Scene.call(this);

        user_name_str = "";
        select_icon_str = "";

        var bg = new Sprite(1600, 800);
        bg.image = assets[ BACKGROUND_IMG ];
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);

        var name_input_label = new Label("名前を10文字以内で入力してください：");
        name_input_label.font = "30px Palatino";
        name_input_label.x = 100;
        name_input_label.y = 100;
        name_input_label.width = 550;
        name_input_label.color = "white";
        this.addChild(name_input_label);

        var name_text_area = new Entity();
        name_text_area.x = 625;
        name_text_area.y = 100;
        name_text_area.width = 200;
        name_text_area.height = 30;
        name_text_area._element = document.createElement('input');
        this.addChild(name_text_area);

        var icon_select_label = new Label("使用するアイコンをクリックしてください。");
        icon_select_label.font = "30px Palatino";
        icon_select_label.x = name_input_label.x;
        icon_select_label.y = name_input_label.y + 100;
        icon_select_label.width = name_input_label.width;
        icon_select_label.color = "white";
        this.addChild(icon_select_label);

        this.icons = [];
        for(var i=0; i<ICON_IMGS.length; i++){
            var icon = new Sprite(64, 64);
            icon.image = assets[ICON_IMGS[i]];
            icon.x = 100 + (i % 5) * 100;
            icon.y = icon_select_label.y + Math.floor(i / 5) * 75 + 50;
            icon.image_name = ICON_IMGS[i];
            icon.addEventListener('touchstart', function(){
                console.log(this.image_name);
                select_icon_str = this.image_name;
            });
            this.addChild(icon);
            this.icons.push(icon);
        }

        var next_button = new Sprite(250, 80);
        next_button.image = assets[ NEXT_BUTTON_IMG ];
        next_button.x = this.icons[0].x;
        next_button.y = this.icons[this.icons.length-1].y + 100;
        next_button.addEventListener('touchstart', function(){
            user_name_str = document.getElementsByTagName("input")[0].value;
            if(user_name_str == null || user_name_str.length == 0 || user_name_str.length > 10){
                alert("適切な名前を設定してください。");
            }else if(select_icon_str == null || select_icon_str.length == 0){
                alert("アイコンを選択してください。");
            }else{
                // 次の画面に遷移する処理
                console.log(user_name_str + " " + select_icon_str);
            }
        });
        this.addChild(next_button);
    }
});
