//定义define函数
function define(){
	if(typeof(arguments[0])=='object'){
		// console.log(arguments[0])
		for(var dep in arguments[0]){
			loadjs(arguments[0][dep])
		}
	}else if (typeof(arguments[0]=='function')) {
		console.log(arguments[0])
	}
}
function loadjs(filename){
	var script=document.createElement("script")
	script.setAttribute("src",filename+'.js')
	document.head.appendChild(script)
}
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