//语言和加载的js文件映射
var lanMap=[]
lanMap['jp']="jp"

define(["wrapcontent/"+lanMap[language],"gettrans/"+lanMap[language],"playaudio"],function(){
	//沪江两个回调函数，用于处理jsonp
	//HJ.fun.jsonCallBack
	//HJ.fun.changeLanguage
	window["HJ"]={
		fun:{
			jsonCallBack:function(data){
				wrapContent(data.content)
			},
		changeLanguage:function(){}
		}
	}
	})