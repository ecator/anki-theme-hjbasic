//加载一个包含单词以及模板的全局config对象
//日语
//资源根路径 http://ecator.github.io/anki-theme-hjbasic/
var config={
	tpl:{
		front:"<div onclick=\"window.event.cancelBubble = true\" class=\"word front\">{{word}}</div>",
		back:"<div class=\"word back\" id=\"word\">{{word}}</div><div class=\"trans\" id=\"trans\"><center><img src=\"http://ecator.github.io/anki-theme-hjbasic/img/loading.gif\"></center></div>"
	},
	baseUrl:"http://ecator.github.io/anki-theme-hjbasic/",
	jp:{
		words:new Array("暗記","日本語","こんにちは")		
	}

}