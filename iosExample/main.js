/*
     File: main.js
 Abstract: Defines JavaScript functionality for the Geolocation sample.
           Uses a Google static map to display a user's current location.
 
  Version: 1.0
 
 Disclaimer: IMPORTANT:  This Apple software is supplied to you by Apple
 Inc. ("Apple") in consideration of your agreement to the following
 terms, and your use, installation, modification or redistribution of
 this Apple software constitutes acceptance of these terms.  If you do
 not agree with these terms, please do not use, install, modify or
 redistribute this Apple software.
 
 In consideration of your agreement to abide by the following terms, and
 subject to these terms, Apple grants you a personal, non-exclusive
 license, under Apple's copyrights in this original Apple software (the
 "Apple Software"), to use, reproduce, modify and redistribute the Apple
 Software, with or without modifications, in source and/or binary forms;
 provided that if you redistribute the Apple Software in its entirety and
 without modifications, you must retain this notice and the following
 text and disclaimers in all such redistributions of the Apple Software.
 Neither the name, trademarks, service marks or logos of Apple Inc. may
 be used to endorse or promote products derived from the Apple Software
 without specific prior written permission from Apple.  Except as
 expressly stated in this notice, no other rights or licenses, express or
 implied, are granted by Apple herein, including but not limited to any
 patent rights that may be infringed by your derivative works or by other
 works in which the Apple Software may be incorporated.
 
 The Apple Software is provided by Apple on an "AS IS" basis.  APPLE
 MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
 THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS
 FOR A PARTICULAR PURPOSE, REGARDING THE APPLE SOFTWARE OR ITS USE AND
 OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS.
 
 IN NO EVENT SHALL APPLE BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL
 OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
 MODIFICATION AND/OR DISTRIBUTION OF THE APPLE SOFTWARE, HOWEVER CAUSED
 AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE),
 STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 
 Copyright (C) 2010 Apple Inc. All Rights Reserved.
 
 */


var watchId = null;
var latitude = null;
var longitude = null;
var imageWidth = null;
var imageHeight = null;


// Determine whether user is running on iPad by checking the user agent of the browser
function isPad()
{
   // Returns true if the user agent is associated with an iPad and false, otherwise
    if (navigator.userAgent.match(/iPad/i))
    {
        return true;
    }
    return false;
}



//Show a Google static map centered at a given position. Display the latitude and longitude coordinates associated with this position.
function showLocation (position)
{
    var location =  document.getElementById("location");
    // Display map to the user 
    location.innerHTML = "<img src='http://maps.google.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=14&size="+imageWidth+"x"+imageHeight+"&markers=color:blue|label:S|"+position.coords.latitude+","+position.coords.longitude+"&sensor=true' />";
        
       
        
    // Show the latitude and longitude coordinates associated with this position
    document.getElementById("longitude").innerHTML = "Latitude: "+position.coords.latitude.toString().substr(0,7)+" Longitude: "+position.coords.longitude.toString().substr(0,7);
    
    // Store this position
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}



// Handle location errors
function handleError(error) 
{
    var errorMessage;
    switch (error.code)
    {
        case error.code.PERMISSION_DENIED:
            errorMessage = "Permission Denied";
            break;
        case error.code.POSITION_UNAVAILABLE:
            errorMessage = "Position Unavailable";
            break;	
        case error.code.TIMEOUT:
            errorMessage = "Time Out";
            break;
        case error.code.UNKNOWN_ERROR:
            errorMessage = "Unknown Error";
            break;	
    }
    // Display and log the error message
    document.getElementById("location").innerHTML = "<p>"+errorMessage+"</p>";
}



// Set the size of the Google static map according to the rotation and the device type
function updateMapSize(deviceOrientation)
{   
    var device = isPad();
    // Set the size of the map to 640x640, if the device is an iPad and is in the portrait mode
    if ((deviceOrientation == "portrait") && isPad())
    {
       imageWidth = 640;
       imageHeight = 640;
       document.getElementById("longitude").setAttribute("style","margin-top:115px");
    }
    else if ((deviceOrientation == "landscape") && isPad())
    {  
       // Set the size of the map to 640x560, if the device is an iPad and is in landscape mode
       imageWidth = 640;
       imageHeight = 560;
        document.getElementById("longitude").setAttribute("style","margin-top:27px");
    }
    else if ((deviceOrientation == "landscape") && !isPad())
    {
       // Set the size of the map to 450x200, if the device is not an iPad and is in landscape mode 
       imageWidth = 450;
       imageHeight = 200;
    }
    else
    { 
       // Set the size of the map to 300x300, otherwise
       imageWidth = 300;
       imageHeight = 300;
    }
}




// Check the orientation of the device and update the position of the longitude in the application
function updateOrientation()
{
    var orientation = window.orientation === undefined ? 0 : window.orientation;
    
    if ((orientation === 0) || (orientation === 180))
    {
        updateMapSize("portrait");  
    }
    else if ((orientation === 90) || (orientation === -90))
    {
        updateMapSize("landscape");
    }
    
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showLocation, handleError);
    }
}



//Update the map if the current location is different from the previous location
function updateLocation(position)
{
    // Update the map if the current position is different from the previous position
	if ((latitude != position.coords.latitude)||(longitude != position.coords.longitude))
	{
        showLocation(position);
    }
 
}



// Get the current location and register for location changes
function acquireLocation(event)
{
	if (navigator.geolocation)
	{
        updateOrientation();
        
        // Register for location changes and pass the returned position to the updateLocation method
		watchId = navigator.geolocation.watchPosition(updateLocation, handleError);
	}
	else
	{  
       // Display a message if Geolocation is unavailable
	   document.getElementById("location").innerHTML="<p>Your browser does not support Geolocation services.</p>";
	}
}



// Function: load()
// Called by HTML body element's onload event when the web application is ready to start
function load()
{
    dashcode.setupParts();
    
    acquireLocation(event);
}



// Unregister for location changes when the user quits the application
function clearWatchId()
{
	if(watchId) 
    {
        navigator.geolocation.clearWatch(watchId);
		watchId = null;
    }
}