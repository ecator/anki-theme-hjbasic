//显示卡片背面
function showAns() {
	var content=document.getElementById("content")
	var controller=document.getElementById("controller")
	content.innerHTML=config.tpl.back.replace(/{{word}}/g,words[wordIndex])
	controller.innerHTML="<button id=\"showFront\" onclick=\"showFront()\">显示正面</button>&nbsp;<button id=\"showNext\" onclick=\"showNext()\">显示下一个</button>"
	getTrans()
}
//显示卡片正面
function showFront(){
	var content=document.getElementById("content")
	var controller=document.getElementById("controller")
	content.innerHTML=config.tpl.front.replace(/{{word}}/g,words[wordIndex])
	controller.innerHTML="<button id=\"showAns\" onclick=\"showAns()\">显示答案</button>"
}
//显示下一个单词，数组循环
function showNext(){
	wordIndex=wordIndex==words.length-1?0:wordIndex+1
	showFront()
}