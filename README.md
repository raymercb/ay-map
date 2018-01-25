# ay-map

# Client doc
Destination map technical description
Map

The map is created using Google Maps JavaScript API
https://developers.google.com/maps/documentation/javascript/tutorial
The API requires an API key, but the usage remains free for a restricted amount of visitors. Currently this API is used with a key created by Frantic (key=AIzaSyDvTBJvICnNK-DI14X6M1hXF9SXB8Dfuec). 

The map is initialized in a function “initiateGoogleMap” (https://www.finnair.com/go/2017.12-41/assets-6/js/58-destinations/googleMap.js), which gets called on page load. In this file we create and define a new Map object. 
To this Map object we define customized styles, which are defined in a JSON file (https://www.finnair.com/go/2017.12-41/assets/js/json/googleMapStyles.json).  
Destinations and information about them, such as coordinates, are fetched via Ajax from a HTML page containing JSON (https://www.finnair.com/int/gb/offers-international?PAGE=AJAX&ENTITY=content&DIALOG_KEY=destination_map_allData_json_v2), which is managed through our CMS. This means this data is updated manually in the CMS, if there are changes to which destinations should be shown. We parse the HTML content of this page and transform it into JSON. This data is stored in a JavaScript Object.

With the destination data available, we are able to properly initialize the Google map. We loop trough all destination data and look for location properties. If the coordinates for that destination are available, we can insert a new Marker object to the map. The style of the markers (pink “pin” icon) are also customized and served as png images from our server. The hover effect, which shows the name of the destination, is used by using the Google Maps object InfoWindow, which is also customized using CSS. 

We are also tracking the interaction with the map heavily through Google Analytics (actions like dragging the map, hover/click on marker and resizing).

The final map object is inserted to the DOM.

Sidebar

Once the map is initialized properly, we initialize the sidebar, which will provide additional information when clicking on markers/pins on the map, or filtering via the dropdown menu above the map. All functions for the sidebar are hosted in a separate JavaScript file (https://www.finnair.com/go/2017.12-41/assets-6/js/58-destinations/58-destination-frontpage.js).

The sidebar is an empty HTML template (Handlebars.js), in which we inject the filtered data. Filtered data is a copy of destination data JavaScript object created in the previous JavaScript file. We filter this object using JavaScript. The filtering is essentially controlled by the Select region element above the map. According to change of value in this Select region element, we filter the destination data by their continent property.  With the filtered data defined, we can animate in the empty sidebar from to left side of the page and inject it Handlebars template visualizing destination data. The same goes for clicks on a destination marker/pin on the map.

Interaction with sidebar is also heavily tracked with Google Analytics (open/close sidebar, filter by region, click on destination/marker)

All data being possibly presented in the sidebar, is being exposed by generating JavaScript variables to the DOM. This data is available after the page has loaded and is not fetched separately. Depending on the destination and ongoing campaigns we are presenting following information: Offer price, link to offer, link website of airport, link to destination page, link to travel guide, flight frequency, translated destination name (and its correct grammatical form for Finnish and Estonian).
