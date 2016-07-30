/* --------- STICKY NAV MENU ------------- */
	window.addEventListener("scroll", function(func) {
		var currentLocation = $(window).scrollTop();
		var threshold = $('#mainContentWrapper').position().top;
		var navMenu = "#navWrapper";
		
		if (currentLocation > threshold){
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
	
/* ------- TOGGLE INDIVIDUAL ASIAN TABLES ------------- */
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
	
	
/* --------------  (( CREATING NAMESPACE )) ---------------------------- */
var alohaNS = function(){

	
	/* ------------ REBOUND FROM RESIZE -------------- */

	
	function rebound(){
	
	}

	/* ------------ TOGGLE ALL ASIAN MENUS -------------- */
	function toggleTables(action){
		var asianTables = "#asianArea table";
		if (action == "open") {
			$(asianTables).fadeIn(800);
		} else {
			$(asianTables).fadeOut(300);
		}
	}

	/*------- NAVIGATION --------------------------*/

	function shiftTo(area){
		// requires schema: section ID = '[name]Area' 
		var tag_name = "#" + area + "Area";
		var destination = $(tag_name);
		var spacing = destination.offset().top;
		if (area==='home') spacing -= 50; // top of page
		if (area==='hawaiian') spacing +=80; // better slideshow view
		
		// performing the scroll 
		$('html,body').stop().animate({scrollTop: spacing}, 1500);	
	}


	/* ------------ SWAP SLIDESHOW IMAGES -------------- */
	
	// replaces all substring occurences in string subject
	function replaceAll(subject, target, replacement){
		return subject.split(target).join(replacement);
	} 		
	
	// current page number
	var deckNumber = 1;
	
	// swaps Hawaiian slide -- image, name, price, and description
	function swapEntry(selectedItem){
		var slidePhotos = document.querySelectorAll("#hawaiianSlider li img");
		var dataIndex = (selectedItem * deckNumber) - 1;
		var selectedSlot = slidePhotos[selectedItem-1]; // the image box
		var selectedPhoto = selectedSlot.src;
		var presentPhoto = document.getElementById("currentImg");
		
		var foodEntry = document.getElementById('hawaiianEntry');
		var foodName = replaceAll(imageCollection[dataIndex], "%20", " ");
		var foodPrice = prices[dataIndex];
		var foodDetails = document.getElementById('entryDescription');
		
		// swapping appropriate information to selected food item
		var separator = "<span id = 'doubleTab'> | </span>"; 
		presentPhoto.src = selectedPhoto;
		foodEntry.innerHTML = foodName + separator + foodPrice ;
		foodDetails.innerHTML = descriptions[dataIndex]
		
		// un-highlight previously highlighted boxes
		$(slidePhotos).css({
			"box-shadow": "none",
				"-moz-box-shadow": "none",
				"-webkit-box-shadow": "none",
		});
		
		// highlight currently-selected image box
		$(selectedSlot).css({
				"box-shadow": "0px 0px 12px blue",
				"-moz-box-shadow": "0 0 12px blue",
				"-webkit-box-shadow": "0 0 12px blue",
		});
	}
	
	
	var entriesPerPage = 3; 
	function shiftDeck(direction){
		
		// cycling through the pages
		if (direction === "right"){
			deckNumber++;
		} else {
			deckNumber--;
		}
		var pageMax = 5;
		if (deckNumber === pageMax+ 1) {
			deckNumber = 1;
		}
		if (deckNumber === 0){
			deckNumber = 5;
		}
		
		var slidePhotos =  document.querySelectorAll("#hawaiianSlider li img");
		
	
		// updating the thumbnails 
		for (var i = 0; i < slidePhotos.length; i++){
			var newIndex = (deckNumber-1)*entriesPerPage + i;
			var newSource = imageCollection[newIndex] + ".jpg";
			var containingFolder = "./food_img/";
			slidePhotos[i].src = containingFolder + newSource;
		}
		
		swapEntry(1);
		var pageDisplay = document.getElementById('pageDisplay');
		pageDisplay.innerHTML = "Page " + deckNumber + " out of 5";
		
	}

	/* ------------ DATA FOR FOOD ITEMS ------------------------------ */

	// name of food item = image-name, with "%20" replaced with a single space 
	var imageCollection = [ 
				// Set 1
				"Hawaiian%20BBQ%20Chicken",
				"Chicken%20Katsu",
				"Chicken%20Mix",
				
				// Set 2
				"Kalbi%20Short%20Ribs",
				"Teriyaki%20Chicken", /* no img */
				"Aloha%20Crispy%20Shrimp",

				// Set 3
				"Pork%20Katsu",
				"Mahi%20Mahi",
				"Hawaiian%20BBQ%20Beef",

				// Set 4
				"Shrimp%20&%20BBQ%20Chicken%20Mix",	/* no img */
				"BBQ%20Chicken%20&%20Beef%20Mix",
				"Aloha%20BBQ%20Pork%20Chop",
				
				// Set 5
				"Aloha%20BBQ%20Mix",
				"Aloha%20Seafood%20Mix",
				"Loco%20Moco" /* no img */
	];




	var descriptions = [
		// Set 1
		"Grilled boneless & skinless chicken, marinated in Hawaiian BBQ sauce.",
		"Crispy breaded chicken fillets, served with special Katsu Sauce.",
		"A combination of BBQ Chicken and Chicken Katsu",

		// Set 2
		"Tender beef short-ribs marinated in Korean style BBQ sauce, then grilled to perfection", 
		"Grilled boneless chicken served with our house teriyaki sauce.",
		"-", /* this item does not have a description" */
		
		// Set 3
		"Crispy breaded pork served with special Katsu Sauce.",
		"Hawaii's favorite fish fillet marinated, lightly breaded, then tenderly cooked.",
		"Grilled slices of lean & tender beef, marinated in Hawaiian BBQ sauce.",

		// Set 4
		"Savor our Crispy Shrimp along with our famous Hawaiian BBQ Chicken.",
		"A combination of two of our popular items: BBQ Chicken & BBQ Beef",
		"Tender pork-chop marinated in Hawaiian BBQ sauce",
		
		// Set 5
		"BBQ Chicken, BBQ Beef & Kalbi Short Ribs.",
		"Crispy Shrimp, Mahi-Mahi & BBQ Chicken",
		"2 beef patties, 2 sunnyside up eggs over gravy." 
	];



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


	/* ---- END OF ADDED VARIABLES AND FUNCTIONS -------------------- */ 
	
	
	/* to make functions externally accessible */
	return{
			toggleTables: toggleTables,
			shiftTo: shiftTo,
			swapEntry: swapEntry,
			shiftDeck: shiftDeck,
	}

}();

/* ------------------------------------------ 
---------------DOC END ----------------------- 
----------------------------------------- */

