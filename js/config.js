//加载一个包含单词以及模板的全局config对象
//日语
var config={
	tpl:{
		front:"<div onclick=\"window.event.cancelBubble = true\" class=\"word front\">{{word}}</div>",
		back:"<div class=\"word back\" id=\"word\">{{word}}</div><div class=\"trans\" id=\"trans\"><center><img src=\"https://github.com/ecator/anki-theme-hjbasic/raw/master/img/_hj_online_loading.gif\"></center></div>"
	},
	jp:{
		words:new Array("暗記","日本語","こんにちは")		
	}

}