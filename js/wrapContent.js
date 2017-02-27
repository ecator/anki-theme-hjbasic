//处理请求结果并展示到卡片中
function wrapContent(content){
	var trans = document.getElementById('trans')
	if (!trans) return false
		//语言query映射
	var queryMap={
		"de":".sound_ico",
		"jp":"span[title=日语发音]",
		"en":".sound_ico",
		"fr":".sound_ico",
		"kr":".sound_ico",
		"es":".sound_ico"
	}
	trans.innerHTML=content
	var audioSpans=document.querySelectorAll(queryMap[language])
	 //处理音频链接
 	for(var i=0;i<audioSpans.length;i++){
 		//日语的音频链接需要特殊处理
 		var audioSrc=language=='jp'?audioSpans[i].lastChild.innerText:audioSpans[i].innerText
 		audioSpans[i].innerHTML="&nbsp;<img class='playbutton' onclick='playAudio(\""+audioSrc+"\")' src='http://ecator.github.io/anki-theme-hjbasic/img/sound.gif'>"
 		//英语需要加载多个音频
 		if(i>0 && language!='en'){
 		audioSpans[i].innerHTML=""
 		}
	}
}