alert("i am util1");

require(["subDir2/util2"], function(util2) {
	util2.alertUtil("using a function from util2, util2 is a module now, its functions are not global");
	util2.changeP();
});