//沪江两个回调函数，用于处理jsonp
//HJ.fun.jsonCallBack
//HJ.fun.changeLanguage
var HJ={
	fun:{jsonCallBack:function(data){wrapContent(data.content)},
	changeLanguage:function(){}
}
}
//处理请求结果并展示到卡片中
function wrapContent(content){
	var trans = document.getElementById('trans')
	trans.innerHTML=content
	var audioSpans=document.querySelectorAll('span[title=日语发音]')
 //处理音频链接
 for(var i=0;i<audioSpans.length;i++){
 	var audioSrc=audioSpans[i].lastChild.innerText
 	audioSpans[i].innerHTML="<img class='playbutton' onclick='playAudio(\""+audioSrc+"\")' src='http://ecator.github.io/anki-theme-hjbasic/img/sound.gif'>"
 }
}
//向沪江请求单词释义
function getTrans(){
	var word=document.getElementById('word').innerText
	var script=document.createElement('script')
	script.setAttribute('src','http://dict.hjenglish.com/services/huaci/jp_web_ajax.ashx?type=jc&w='+encodeURI(word))
	document.body.appendChild(script)
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