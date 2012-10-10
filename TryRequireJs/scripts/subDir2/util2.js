define(function(){
	function util2AlertHelper(param){
		alert(param);
	}
	function changePElement(){
		var p = document.getElementById("container");
		p.innerText = "i am util2";
	}
	return {alertUtil:util2AlertHelper, changeP:changePElement};
})