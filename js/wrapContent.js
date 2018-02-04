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
	//处理图片,有些图片的src是以“//”开头，得加上http协议名
	content = content.replace(new RegExp("'//dict\\.hjenglish\\.com/images/icon_star\\.gif'","g"),"'http://dict.hjenglish.com/images/icon_star.gif'")
	trans.innerHTML = content
	var audioSpans=document.querySelectorAll(queryMap[language])
	 //处理音频链接
 	for(var i=0;i<audioSpans.length;i++){
 		//日语的音频链接需要特殊处理
 		//var audioSrc=language=='jp'?audioSpans[i].lastChild.innerText:audioSpans[i].innerText
 		//日语更换为百度音源
 		var audioSrc=language=='jp'?"http://fanyi.baidu.com/gettts?lan=jp&text="+encodeURI(content.match(new RegExp('class="hjd_Green".*?\\[(.*?)\\]'))[1])+"&source=web":audioSpans[i].innerText
 		audioSpans[i].innerHTML="&nbsp;<img class='playbutton' onclick='playAudio(\""+audioSrc+"\")' src='http://anki-theme-hjbasic.nocode.site/img/sound.gif'>"
 		//英语和日语可能需要加载多个音频
 		if(i>0){
 			switch(language){
 				case 'en':
 					break
 				case 'jp':
 					break
 				default:
 					audioSpans[i].innerHTML=""
 			}
 		}
	}
}