//处理请求结果并展示到卡片中
//本方法处理日语结果
define(function(){
	window["wrapContent"]=function (content){
		var trans = document.getElementById('trans')
		trans.innerHTML=content
		var audioSpans=document.querySelectorAll('span[title=日语发音]')
 //处理音频链接
 for(var i=0;i<audioSpans.length;i++){
 	var audioSrc=audioSpans[i].lastChild.innerText
 	audioSpans[i].innerHTML="<img class='playbutton' onclick='playAudio(\""+audioSrc+"\")' src='http://ecator.github.io/anki-theme-hjbasic/img/sound.gif'>"
 }
}
})
