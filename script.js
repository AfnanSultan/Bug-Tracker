'use strict';
var delivInfo = new Object();
var delivSummary = document.getElementById("deliverTo");

// previewOrder calls processDeliveryInfo
function previewOrder()
{
	processDeliveryInfo();
	document.getElementsByTagName("section")[0].style.display = "block";
}

// add value of each input into new object
function processDeliveryInfo()
{
	var prop;
	delivInfo.name = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.innerHTML = '';
	for (prop in delivInfo)
	{
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
	document.getElementById("deliverTo").style.display = "block";
}

// add event listener to Submit button
function createEventListener()
{
	var previewButton = document.getElementById("previewBtn");
	if (previewButton.addEventListener)
	{
		previewButton.addEventListener("click", previewOrder, false);
	}
	else if (previewButton.attachEvent)
	{
		previewButton.attachEvent("onclick", previewOrder);
	}
}

// create event listener on page load
if (window.addEventListener)
{
	window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent)
{
	window.attachEvent("onload", createEventListener);
}