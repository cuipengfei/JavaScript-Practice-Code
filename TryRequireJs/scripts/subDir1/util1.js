alert("i am util1");

//main加载util1,然后util1加载util2,util2是一个module
//util2返回一个JSON对象，该对象包含下面调到的两个function
require(["subDir2/util2"], function(util2) {
	util2.alertUtil("using a function from util2, util2 is a module now, its functions are not global");
	util2.changeP();
});