//沪江两个回调函数，用于处理jsonp
//HJ.fun.jsonCallBack
//HJ.fun.changeLanguage
var HJ={
	fun:{jsonCallBack:function(data){wrapContent(data.content)},
	changeLanguage:function(){}
}
}


//播放音频
function playAudio(audioSrc) {
// alert(audioSrc)
 //判断是否为PC端，PC和移动端的播放方式不一样
 if(typeof(py)=="object"){
 //PC端，需要代码为498789867的插件依赖
 py.link("ankiplay"+audioSrc)
}else{
 //移动端
 var player=document.createElement('audio')
 player.src=audioSrc
 player.play()
}
}