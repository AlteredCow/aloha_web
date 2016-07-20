// JavaScript: automatic and manual slideshow.

var images = new Array(
"Minced.jpg",
"Tempura Shrimp.jpg",
"Fried Gyoza.jpg",
"Crab Rangoon.jpg"
);

var captions = [
"Minced Chicken w/ Lettuce Wraps: $6.25",
"Tempura Shrimp (3): $4.95",
"Fried Gyoza (6): $4.25",
"Crab Rangoon (4): $4.25"
];

var currentPic = 0; var finalPic = images.length-1;

// automatically slides through images - allows for pause
var pause;
function playPause() {
    if (!pause) {
        pause = setInterval(function(){slideNext()},3000)
    } else {
        clearInterval(pause);
        pause = null;
    }
}

// both slide[...] functions allow visiter to scroll through gallery
function slideNext(){
	if (document.images){
		if (currentPic==finalPic)currentPic = 0; // reset loop
		else currentPic++;
		}
		
	// update picture and caption
	document.Image.src = images[currentPic];
	var text =	document.getElementById("captions");
	text.innerHTML = captions[currentPic];
	shrink();
	
}

function slidePrevious(){
	if (document.images){
		if (currentPic == 0) currentPic = finalPic; // wind back
		else currentPic--;
		}
	
	// update picture and caption		
	document.Image.src = images[currentPic];
	var text =	document.getElementById("captions");
	text.innerHTML = captions[currentPic];
	shrink();
}

// adjusts text size to fit into caption box
function shrink(){
	var selection = document.querySelector("#captions");
	var length = captions[currentPic].length;
	if (length > 30) { 
	selection.style.fontSize = "12px";
	selection.style.left = "4px";
	}
	else {
	selection.style.fontSize = "16px";
	selection.style.left = "22px";
	}
}