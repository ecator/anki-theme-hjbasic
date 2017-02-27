//页面加载完毕后加载本文件
showFront()
//自动填充标题和h1为模板名称
var titleMap={
	"en":"HJdictOnline-en：英语",
	"jp":"HJdictOnline-jp：日语",
	"fr":"HJdictOnline-fr：法语",
	"kr":"HJdictOnline-kr：韩语",
	"de":"HJdictOnline-de：德语",
	"es":"HJdictOnline-es：西语"
}
document.title=titleMap[language]
document.getElementsByTagName("h1")[0].innerText=document.title