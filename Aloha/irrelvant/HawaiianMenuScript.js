// Presentation for Hawaiian Menu dishes that
// contain images, prices, and descriptions.

/* Items separated into sets for possible future changes, ideas 
	and to keep organized */
	
/* These items are organized by the order from the original site,
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

var currentPic = 0; var finalPic = images.length-1;

function causePlay(){ // allows for "autoplay()" to repeat
setInterval(function(){autoplay()}, 3600)
}

function autoplay(){
	if (document.images){
		if (currentPic==finalPic)currentPic = 0; // reset loop
		else currentPic++; // cycle through loop
		}
		
	// update picture (#4, 9, 14 are items w/ no pictures)
	var pic = document.getElementById("currentImg");
	if (currentPic != 4 && currentPic != 9 && currentPic != 14)
	pic.src = images[currentPic];
	else pic.src = "NoImage.png" 
	
	// update item's name
	var name =	document.getElementById("name");
	var actualName = images[currentPic];
	name.innerHTML = actualName.substring(0, actualName.length-4);
	
	// update current price
	var price =	document.getElementById("price");
	price.innerHTML = prices[currentPic];
	
	// update current description
	var desc =	document.getElementById("description");
	desc.innerHTML = descriptions[currentPic];	
}