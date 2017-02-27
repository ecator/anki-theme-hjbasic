//向沪江请求单词释义
//本方法获取日语解释
var getTrans=function(){
	var word=document.getElementById('word').innerText
	var script=document.createElement('script')
	script.setAttribute('src','http://dict.hjenglish.com/services/huaci/jp_web_ajax.ashx?type=jc&w='+encodeURI(word))
	document.body.appendChild(script)
}