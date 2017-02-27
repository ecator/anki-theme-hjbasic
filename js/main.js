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
//语言和加载的js文件映射
var lanMap=[]
lanMap['jp']="jp"

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
loadjs("playaudio")
loadjs("wrapcontent/"+lanMap[language])
loadjs("gettrans/"+lanMap[language])

//执行程序
function initialjs(){
	typeof(getTrans)=="function"?getTrans():setTimeout(initialjs,1000)
}
setTimeout(initialjs,1000)