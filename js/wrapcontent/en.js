//处理请求结果并展示到卡片中
//本方法适用于英语
function wrapContent(content){
	var trans = document.getElementById('trans')
	trans.innerHTML=content
	var audioSpans=document.querySelectorAll('.sound_ico')
 //处理音频链接
 for(var i=0;i<audioSpans.length;i++){
 	var audioSrc=audioSpans[i].innerText
 	audioSpans[i].innerHTML="&nbsp;<img class='playbutton' onclick='playAudio(\""+audioSrc+"\")' src='http://ecator.github.io/anki-theme-hjbasic/img/sound.gif'>"
 }
}