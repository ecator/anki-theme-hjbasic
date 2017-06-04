# HJdictBasic

沪江小D风格的Anki主题，本模板是基础模板，所有字段需要手动填写，适合用来记日语单词:smile:

# HJdictOnline

超级懒人模板，一共支持**英日法韩徳西**六种语言，所有资源文件均托管在本仓库，并且在模板中远程引入相应的资源文件，对于多个模板使用公共库的情况十分方便，有点模块化编程的思想。由于所有资源文件包括js代码都是在线引用的，所以通过修改仓库中的js文件就可以实时更新模板中的js文件，达到了一个实时更新的作用，对于需要频繁更新处理逻辑的模板非常有用，比如本模板需要根据沪江的返回数据来做出相应的处理，如果沪江的返回数据格式有变化，本模板也可以通过修改仓库中相应的js文件来实时更新各个模板对于沪江返回数据的处理逻辑。

模板详细介绍请戳[知乎传送门](https://zhuanlan.zhihu.com/p/24902283)

本模板所有查询数据均来自沪江小D，调用方法采用jsonp跨域方式，具体实现逻辑请参考[沪江小D-jsonp测试](http://ecator.github.io/anki-theme-hjbasic/)

另外为了方便调试（预览）在Anki中的运行效果，特别写了一个模拟Anki环境的web页面，分别是根目录下的en.html、jp.html、fr.html、kr.html、de.html、es.html文件，打开对应页面即可在线预览对应的模板效果，具体实现逻辑可参考页面源代码。

- 模板在线预览
	- [HJdictOnline-en：英语](https://ecator.github.io/anki-theme-hjbasic/en.html)
	- [HJdictOnline-jp：日语](https://ecator.github.io/anki-theme-hjbasic/jp.html)
	- [HJdictOnline-fr：法语](https://ecator.github.io/anki-theme-hjbasic/fr.html)
	- [HJdictOnline-kr：韩语](https://ecator.github.io/anki-theme-hjbasic/kr.html)
	- [HJdictOnline-de：德语](https://ecator.github.io/anki-theme-hjbasic/de.html)
	- [HJdictOnline-es：西语](https://ecator.github.io/anki-theme-hjbasic/es.html)

# server.sh

快速在当前目录建立端口666的web服务器（需要安装Python），用于本地测试。

运行`./server.sh`，然后访问`http://localhost:666/`即可