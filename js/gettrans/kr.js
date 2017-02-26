//向沪江请求单词释义
//本方法适用于韩语
function getTrans(){
	var word=document.getElementById('word').innerText
	var script=document.createElement('script')
	script.setAttribute('src','http://dict.hjenglish.com/services/huaci/kr_web_ajax.ashx?w='+encodeURI(word))
	document.body.appendChild(script)
}