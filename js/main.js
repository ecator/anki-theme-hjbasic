//入口模块
//加载js文件函数
function loadjs(filename){
	var script=document.createElement("script")
	script.setAttribute("src",baseurl+filename+'.js')
	document.head.appendChild(script)
}
//获取自身baseurl
function getBaseurl(){
var script=document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1]
if(script.getAttribute("data-baseurl")){
	return script.getAttribute("data-baseurl")

}else
{
	var tmp=script.src.split('/')
	// console.log(tmp)
	tmp.pop()
	return tmp.join("/")+"/"
}
}
var baseurl=getBaseurl()
// console.log(baseurl)

//沪江两个回调函数，用于处理jsonp
//HJ.fun.jsonCallBack
//HJ.fun.changeLanguage
HJ={
	fun:{
		jsonCallBack:function(data){
			wrapContent(data.content)
		},
		changeLanguage:function(){}
		}
	}

//加载依赖模块
loadjs("playAudio")
loadjs("wrapContent")
loadjs("getTrans")

//执行anki的js代码，入口为getTrans函数
function initialAnki(){
	typeof(getTrans)=="function"?getTrans():setTimeout(initialAnki,1000)
}
setTimeout(initialAnki,1000)