/* ------------ COLLAPSABLE ASIAN TABLES -------------- */


function toggleTables(action){
	
	var asianTables = "#asianArea table";

	if (action == "open") {
		$(asianTables).fadeIn(800);
	} else {
		$(asianTables).fadeOut(300);
	}
}

document.addEventListener("click", function (event){
	
	var clickedElement = event.target;
	
	if (clickedElement.classList.contains("food_type")){
		
		// requires schema: table follows <a> header 
		var clickedMenu = $(clickedElement).next("table");
		
		// toggle visibility 
		var isOpen = $(clickedMenu).css("display") != "none";
		if (isOpen){
			$(clickedMenu).fadeOut(300);
			
		} else {
			$(clickedMenu).fadeIn(600);
			
		}
	
	}
}); 

/* ------------------------------------------ */

/*------- NAVIGATION --------------------------*/

function shiftTo(area){
	var tag_name = "#" + area + "Area";
	var destination = $(tag_name);
	var spacing = destination.offset().top;
	if (area==='home') spacing -= 50; // top of page
	
	// performing the scroll 
	$('html,body').stop().animate({scrollTop: spacing}, 1500);	
}

/* ------------------------------------------- */

/* --------- STICKY NAV MENU ------------- */
window.addEventListener("scroll", function(func) {
	var scrollMark = $(window).scrollTop();
	var threshold = $('#asianArea').position().top;
	var navMenu = "#navWrapper";

	
	if (scrollMark > threshold){
	   $(navMenu).css({
				"position": "fixed",
				"top":0,
				"right": 0,


			});
	} else {
		   $(navMenu).css({
				"position": "static"
			});
	}
	

});
/* ------------------------------------------ */

/* ------------ SWAP SLIDESHOW IMAGES -------------- */

function swapPhoto(selectedItem){
	var slidePhotos = document.querySelectorAll("#hawaiianSlider li img");
	var selectedPhoto = slidePhotos[selectedItem-1].src;
	var presentPhoto = document.getElementById("currentImg");
	presentPhoto.src = selectedPhoto;
}

function swapDeck(){
	
}

/* ------------------------------------------ */
/* ------------ REBOUND FROM RESIZE -------------- */


/* ------------------------------------------ */

/* 
 Presentation for Hawaiian Menu dishes that
 contain images, prices, and descriptions.

 Items separated into sets for possible future changes, ideas 
 and to keep organized 
	
 These items are organized by the order from the original site,
 going through each row for each set. The exceptions are the 3 items
 without pictures, one added to the end of each set. */

var images = new Array(
// Set 1
"Hawaiian BBQ Chicken.jpg",
"Chicken Katsu.jpg",
"Chicken Mix.jpg",
"Kalbi Short Ribs.jpg",
"Teriyaki Chicken.jpg", /* image does not exist */

// Set 2
"Aloha Crispy Shrimp.jpg",
"Pork Katsu.jpg",
"Mahi Mahi.jpg",
"Hawaiian BBQ Beef.jpg", 
"Shrimp & BBQ Chicken Mix.jpg", /* image does not exist */

// Set 3
"BBQ Chicken & Beef Mix.jpg",
"Aloha BBQ Pork Chop.jpg",
"Aloha BBQ Mix.jpg",
"Aloha Seafood Mix.jpg",
"Loco Moco.jpg" /* image does not exist */
);

var prices = [
// Set 1
"$7.25",
"$7.25",
"$7.50",
"$9.95",
"$7.25", /* teriyaki chicken */

// Set 2
"$7.95",
"$7.95",
"$8.50",
"$7.95",
"$7.95", /* Shrimp, BBQ Chicken Mix */

// Set 3
"$7.95",
"$8.50",
"$8.95",
"$8.95",
"$7.95" /* Loco moco */
];

var descriptions = [
// Set 1
"Grilled boneless & skinless chicken, marinated in Hawaiian BBQ sauce.",
"Crispy breaded chicken fillets, served with special Katsu Sauce.",
"A combination of BBQ Chicken and Chicken Katsu",
"Tender beef short-ribs marinated in Korean style BBQ sauce, then grilled to perfection", "Grilled boneless chicken served with our house teriyaki sauce.",

// Set 2
"-", /* this item does not have a description" */
"Crispy breaded pork served with special Katsu Sauce.",
"Hawaii's favorite fish fillet marinated, lightly breaded, then tenderly cooked.",
"Grilled slices of lean & tender beef, marinated in Hawaiian BBQ sauce.",
"Savor our Crispy Shrimp along with our famous Hawaiian BBQ Chicken.",

// Set 3
"A combination of two of our popular items: BBQ Chicken & BBQ Beef",
"Tender pork-chop marinated in Hawaiian BBQ sauce",
"BBQ Chicken, BBQ Beef & Kalbi Short Ribs.",
"Crispy Shrimp, Mahi-Mahi & BBQ Chicken",
"2 beef patties, 2 sunnyside up eggs over gravy." 
];
