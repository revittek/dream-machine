var app = {
	initialize: function() {
	},
	onClickButton: function() {
		document.getElementById("title").style.visibility = "hidden";
		document.getElementById("ready").style.display = "none";
    	document.getElementById("reset").style.display = "block";
    	document.getElementById("knobby").style.visibility = "hidden";
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, 111);
	},
    onReset: function() {
		document.getElementById("title").style.visibility = "visible";
    	document.getElementById("ready").style.display = "block";
    	document.getElementById("reset").style.display = "none";
    	document.getElementById("knobby").style.visibility = "visible";
    	document.body.style.backgroundColor = "white";
    	clearInterval(myVar);
    	document.getElementById("myDial").setAttribute("value","111");
    	},
    onInput: function(val) {
    	console.log(val);
    	document.getElementById("title").style.visibility = "hidden";
		document.getElementById("ready").style.display = "none";
    	document.getElementById("reset").style.display = "block";
    	document.getElementById("knobby").style.visibility = "hidden";
    	var state = false;
    	myVar = setInterval(function(){
            state = !state;
            var color = (state?'red':'white');
            document.body.style.backgroundColor = color;
        }, val);
    }
};