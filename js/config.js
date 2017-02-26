//加载一个包含单词以及模板的全局config对象
//日语
//资源根路径 http://ecator.github.io/anki-theme-hjbasic/
var config={
	tpl:{
		front:"<div onclick=\"window.event.cancelBubble = true\" class=\"word front\">{{word}}</div>",
		back:"<div class=\"word back\" id=\"word\">{{word}}</div><div class=\"trans\" id=\"trans\"><center><img src=\"img/loading.gif\"></center></div>"
	},
	baseUrl:"http://ecator.github.io/anki-theme-hjbasic/",
	jp:{
		words:new Array("暗記","日本語","こんにちは")		
	},
	de:{
		words:new Array("Deutsch","Hallo")
	},
	en:{
		words:new Array("english","hello")
	},
	fr:{
		words:new Array("française","candidat")
	},
	kr:{
		words:new Array("한국어","오빠")
	},
	es:{
		words:new Array("España","testigo")
	}

}