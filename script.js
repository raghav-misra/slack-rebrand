function convert(){
	document.body.style.backgroundColor = "#611f69";
	document.body.style.animation = "fade-in 3s";
	document.getElementById("text").style.color = "white";
	document.getElementById("logo").style.opacity = "0";
	document.getElementById("new").style.opacity = "1";
	document.getElementById("new").style.animation = "spin 2s";
	window.setTimeout(function(){
		document.getElementById("reload").style.display = "inline-block";
		document.getElementById("reload").style.animation = "fade-in 4s";
	}, 2000)
}
window.setTimeout(convert, 3000);

document.getElementById("reload").onclick = function(){
	location.reload();
};