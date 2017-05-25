//向沪江请求单词释义
function getTrans(){
	var word=document.getElementById('word')
	// console.log(word)
	if (!word) {
		return false
	}else{
		word=word.innerText
	}
	//语言请求地址映射
	var srcMap={
		"de":"https://dict.hjenglish.com/services/huaci/de_web_ajax.ashx?langType=de&w=",
		"jp":"https://dict.hjenglish.com/services/huaci/jp_web_ajax.ashx?type=jc&w=",
		"en":"https://dict.hjenglish.com/services/huaci/xml_web_ajax.ashx?w=",
		"fr":"https://dict.hjenglish.com/services/huaci/fr_web_ajax.ashx?w=",
		"kr":"https://dict.hjenglish.com/services/huaci/kr_web_ajax.ashx?w=",
		"es":"https://dict.hjenglish.com/services/huaci/es_web_ajax.ashx?langType=es&w="
	}
	var script=document.createElement('script')
	script.setAttribute('src',srcMap[language]+encodeURI(word))
	document.body.appendChild(script)
}