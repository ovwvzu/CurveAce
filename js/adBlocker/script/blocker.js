function detectBlocker()
{
	//create a iframe. Append the iframe to the body. And then after 100ms check if their offsetHeight, display or visibility is set such a way that user cannot see them.
	//In the URL use the words specific to advertising so that Adblock can do string matching.
	var iframe = document.createElement("iframe");
	iframe.height = "1px";
	iframe.width = "1px";
	iframe.id = "ads-text-iframe";
	iframe.src = "../js/adBlocker/script/ads.html";
   
	document.body.appendChild(iframe);
   
	setTimeout(function()
	{
	   var iframe = document.getElementById("ads-text-iframe");
	   if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0)
	   {
			//alert("Adblock is blocking ads on this page");
			document.getElementById("adBlockerTitle").innerHTML = "Ad Blocker detected";
			// document.getElementById("adBlockerContent").innerHTML = "Please consider turn it off to continue playing our games";
			document.getElementById("adBlockerContent").innerHTML = "Please consider turning it off to continue playing our games";
			document.getElementById("adBlockerOverlay").style.display = "flex";
			var adBlockerBG = document.getElementById("adBlockerBG");
			
			if (adBlockerBG.src == "")
			{
				adBlockerBG.src = "../js/adBlocker/img/Bolt_adblocker_optimized.png";
			}
			// landscape games
			if (window.productKey == "castleofIntenseDismayFree"
				|| window.productKey == "kiteFree"
				|| window.productKey == "midnightPoolClassicFree"
				|| window.productKey == "nitroTukTukFree"
				|| window.productKey == "novaCoveredOpsFree"
				|| window.productKey == "paddingtonFree"
				|| window.productKey == "piratesPathOfTheBuccaneerFree"
				|| window.productKey == "pocketDessertChefFree"
				|| window.productKey == "realFootballFree"
				|| window.productKey == "supercapeOfJusticeFree"
			) {
				if (window.innerWidth > window.innerHeight)
				{
					document.getElementById("adBlockerPopup").style.top = "0px";
					document.getElementById("adBlockerPopup").style.maxHeight = "320px";
					document.getElementById("adBlockerPopupHeight").style.minHeight = "100px";
				}				
			}
			
			// test end
			iframe.remove();
	   }
	   else
	   {
			//alert("Adblock is not detecting ads on this page");
			iframe.remove();
	   }
	}, 2000);
}
detectBlocker();