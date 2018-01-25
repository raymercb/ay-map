function initiateGoogleMap() {
    $("#btnInitSidebar").removeAttr( "disabled" );

//   var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

  // Safari detection for CSS3 transitions
//   if (isSafari) {
//     $(".destinations__map").addClass("safari-browser");
//     $(".direction").removeClass("zoom").addClass("zoom-safari");
//   }

//   $.getJSON(mapSettings.mapStylesUrl).done(function (data) {
    var mapStyles = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#fafafa"
    }]
}, {
    "featureType": "all",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#0b1560"
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#c2c2c2"
    }]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }, {
        "color": "#afafaf"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#0b1560"
    }]
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{
        "visibility": "simplified"
    }, {
        "color": "#afafaf"
    }]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#707070"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#5c5c5c"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#000000"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#000000"
    }]
}, {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#000000"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "labels.text",
    "stylers": [{
        "color": "#0b1560"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#cccccc"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#dedede"
    }]
}, {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#bdb9bd"
    }]
}];
    
    // var req = $.get(mapSettings.allDestDataUrl);

    // req.done(function (result) {

      var result = { "AAR" : { "code" : "AAR", "name": "Aarhus" , "continent" : "SC", "themes" : [] , "country" : "Denmark" , "coordinates" : { "lat" : "56.162939", "lon" : "10.203921" } }, "ABQ" : { "code" : "ABQ", "name": "Albuquerque" , "continent" : "NA", "themes" : [] , "country" : "Mexico" , "coordinates" : { "lat" : "35.0853336", "lon" : "-106.6055534" } }, "ADL" : { "code" : "ADL", "name": "Adelaide" , "continent" : "OC", "themes" : ["beach"] , "country" : "Australia" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/adelaide" , "coordinates" : { "lat" : "-34.9286212", "lon" : "138.5999594" } }, "AGP" : { "code" : "AGP", "name": "Málaga" , "continent" : "EU", "themes" : ["activity","beach"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/spain/malaga" , "coordinates" : { "lat" : "36.721261", "lon" : "-4.4212655" } }, "AKL" : { "code" : "AKL", "name": "Auckland" , "continent" : "OC", "themes" : ["activity","beach"] , "country" : "New Zealand" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/new-zealand/auckland" , "coordinates" : { "lat" : "-36.8484597", "lon" : "174.7633315" } }, "AMS" : { "code" : "AMS", "name": "Amsterdam" , "continent" : "EU", "themes" : ["city"] , "country" : "Netherlands" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/netherlands/amsterdam" , "coordinates" : { "lat" : "52.3702157", "lon" : "4.8951679" } }, "ANC" : { "code" : "ANC", "name": "Anchorage" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "61.2180556", "lon" : "-149.9002778" } }, "ATL" : { "code" : "ATL", "name": "Atlanta" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "33.7489954", "lon" : "-84.3879824" } }, "AYT" : { "code" : "AYT", "name": "Antalya" , "continent" : "EU", "themes" : ["beach"] , "country" : "Turkey" , "link" : "https://www.finnair.com/us/gb/destinations/europe/turkey/antalya" , "coordinates" : { "lat" : "36.8968908", "lon" : "30.7133233" } }, "BCN" : { "code" : "BCN", "name": "Barcelona" , "continent" : "EU", "themes" : ["beach"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/spain/barcelona" , "coordinates" : { "lat" : "41.3850639", "lon" : "2.1734035" } }, "BDL" : { "code" : "BDL", "name": "Hartford" , "country" : "USA" , "coordinates" : { "lat" : "41.7637111", "lon" : "-72.6850932" } }, "BER" : { "code" : "BER", "name": "Berlin" , "continent" : "EU", "themes" : ["city"] , "country" : "Germany" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/germany/berlin" , "coordinates" : { "lat" : "52.5200066", "lon" : "13.404954" } }, "BGO" : { "code" : "BGO", "name": "Bergen" , "continent" : "SC", "themes" : ["activity"] , "country" : "Norway" , "link" : "https://www.finnair.com/us/gb/destinations/europe/norway/bergen" , "coordinates" : { "lat" : "60.3912628", "lon" : "5.3220544" } }, "BHM" : { "code" : "BHM", "name": "Birmingham" , "continent" : "NA", "themes" : [] , "country" : "United Kingdom" , "coordinates" : { "lat" : "33.5206608", "lon" : "-86.80249" } }, "BIQ" : { "code" : "BIQ", "name": "Biarritz" , "continent" : "EU", "themes" : ["beach"] , "country" : "France" , "link" : "https://www.finnair.com/us/gb/destinations/europe/france/biarritz" , "coordinates" : { "lat" : "43.4831519", "lon" : "-1.558626" } }, "BJS" : { "code" : "BJS", "name": "Beijing" , "continent" : "AS", "themes" : ["activity"] , "country" : "China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/china/beijing" , "coordinates" : { "lat" : "39.904211", "lon" : "116.407395" } }, "BKI" : { "code" : "BKI", "name": "Kota Kinabalu" , "country" : "Malaysia" , "coordinates" : { "lat" : "5.980408", "lon" : "116.0734568" } }, "BKK" : { "code" : "BKK", "name": "Bangkok" , "continent" : "AS", "themes" : ["activity","beach"] , "country" : "Thailand" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/thailand/bangkok" , "coordinates" : { "lat" : "13.7563309", "lon" : "100.5017651" } }, "BNE" : { "code" : "BNE", "name": "Brisbane" , "continent" : "OC", "themes" : ["beach"] , "country" : "Australia" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/brisbane" , "coordinates" : { "lat" : "-27.4710107", "lon" : "153.0234489" } }, "BOM" : { "code" : "BOM", "name": "Mumbai" , "continent" : "AS", "themes" : [] , "country" : "India" , "coordinates" : { "lat" : "19.0759837", "lon" : "72.8776559" } }, "BOS" : { "code" : "BOS", "name": "Boston" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "42.3600825", "lon" : "-71.0588801" } }, "BRU" : { "code" : "BRU", "name": "Brussels" , "continent" : "EU", "themes" : [] , "country" : "Belgium" , "link" : "https://www.finnair.com/us/gb/destinations/europe/belgium/brussels" , "coordinates" : { "lat" : "50.8503396", "lon" : "4.3517103" } }, "BUD" : { "code" : "BUD", "name": "Budapest" , "continent" : "EU", "themes" : ["activity"] , "country" : "Hungary" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/hungary/budapest" , "coordinates" : { "lat" : "47.497912", "lon" : "19.040235" } }, "BUH" : { "code" : "BUH", "name": "Bucharest" , "continent" : "EU", "themes" : [] , "country" : "Romania" , "coordinates" : { "lat" : "44.4267674", "lon" : "26.1025384" } }, "BWI" : { "code" : "BWI", "name": "Baltimore" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "39.2903848", "lon" : "-76.6121893" } }, "CGK" : { "code" : "CGK", "name": "Jakarta" , "continent" : "AS", "themes" : [] , "country" : "Indonesia" , "coordinates" : { "lat" : "-6.2087634", "lon" : "106.845599" } }, "CHI" : { "code" : "CHI", "name": "Chicago" , "continent" : "NA", "themes" : ["ski","activity"] , "country" : "USA" , "link" : "https://www.finnair.com/us/gb/destinations/americas/north-america/chicago" , "coordinates" : { "lat" : "41.8781136", "lon" : "-87.6297982" } }, "CKG" : { "code" : "CKG", "name": "Chongqing" , "continent" : "AS", "themes" : [] , "country" : "China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/china/chongqing" , "coordinates" : { "lat" : "29.56301", "lon" : "106.551557" } }, "CLE" : { "code" : "CLE", "name": "Cleveland" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "41.49932", "lon" : "-81.6943605" } }, "CLT" : { "code" : "CLT", "name": "Charlotte" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "35.2270869", "lon" : "-80.8431267" } }, "CMB" : { "code" : "CMB", "name": "Colombo" , "continent" : "AS", "themes" : [] , "country" : "Sri Lanka" , "coordinates" : { "lat" : "6.9270786", "lon" : "79.861243" } }, "CNS" : { "code" : "CNS", "name": "Cairns" , "continent" : "OC", "themes" : [] , "country" : "Australia" , "coordinates" : { "lat" : "-16.9203338", "lon" : "145.7708595" } }, "CNX" : { "code" : "CNX", "name": "Chiang Mai" , "continent" : "AS", "themes" : [] , "country" : "Thailand" , "coordinates" : { "lat" : "18.7060641", "lon" : "98.9817163" } }, "CPH" : { "code" : "CPH", "name": "Copenhagen" , "continent" : "SC", "themes" : ["activity","city"] , "country" : "Denmark" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/denmark/copenhagen" , "coordinates" : { "lat" : "55.6760968", "lon" : "12.5683371" } }, "CPT" : { "code" : "CPT", "name": "Cape Town" , "country" : "South Africa" , "coordinates" : { "lat" : "-33.9248685", "lon" : "18.4240553" } }, "CUN" : { "code" : "CUN", "name": "Cancun" , "continent" : "NA", "themes" : [] , "country" : "Mexico" , "coordinates" : { "lat" : "21.161908", "lon" : "-86.8515279" } }, "CVG" : { "code" : "CVG", "name": "Cincinnati" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "39.1031182", "lon" : "-84.5120196" } }, "DBV" : { "code" : "DBV", "name": "Dubrovnik" , "continent" : "EU", "themes" : ["activity","beach","city"] , "country" : "Croatia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/croatia/dubrovnik" , "coordinates" : { "lat" : "42.6506606", "lon" : "18.0944238" } }, "DEL" : { "code" : "DEL", "name": "Delhi" , "continent" : "AS", "themes" : [] , "country" : "India" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/india/delhi" , "coordinates" : { "lat" : "28.6139391", "lon" : "77.2090212" } }, "DEN" : { "code" : "DEN", "name": "Denver" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "39.7392358", "lon" : "-104.990251" } }, "DFW" : { "code" : "DFW", "name": "Dallas" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "32.7766642", "lon" : "-96.7969879" } }, "DPS" : { "code" : "DPS", "name": "Bali" , "continent" : "AS", "themes" : ["activity","beach"] , "country" : "Indonesia" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/indonesia/bali" , "coordinates" : { "lat" : "-8.4095178", "lon" : "115.188916" } }, "DTT" : { "code" : "DTT", "name": "Detroit" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "42.331427", "lon" : "-83.0457538" } }, "DUB" : { "code" : "DUB", "name": "Dublin" , "continent" : "EU", "themes" : ["beach"] , "country" : "Ireland" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/ireland/dublin" , "coordinates" : { "lat" : "53.3498053", "lon" : "-6.2603097" } }, "DUS" : { "code" : "DUS", "name": "Düsseldorf" , "continent" : "EU", "themes" : [] , "country" : "Germany" , "link" : "https://www.finnair.com/us/gb/destinations/europe/germany/dusseldorf" , "coordinates" : { "lat" : "51.2277411", "lon" : "6.7734556" } }, "DXB" : { "code" : "DXB", "name": "Dubai" , "continent" : "ME", "themes" : ["beach"] , "country" : "United Arab Emirates" , "link" : "https://www.finnair.com/us/gb/destinations/middle-east/united-arab-emirates/dubai" , "coordinates" : { "lat" : "25.2048493", "lon" : "55.2707828" } }, "FRA" : { "code" : "FRA", "name": "Frankfurt" , "continent" : "EU", "themes" : [] , "country" : "Germany" , "link" : "https://www.finnair.com/us/gb/destinations/europe/germany/frankfurt" , "coordinates" : { "lat" : "50.1109221", "lon" : "8.6821267" } }, "FWA" : { "code" : "FWA", "name": "Fort Wayne" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "41.079273", "lon" : "-85.1393513" } }, "GDN" : { "code" : "GDN", "name": "Gdansk" , "continent" : "EU", "themes" : ["activity","beach"] , "country" : "Poland" , "link" : "https://www.finnair.com/us/gb/destinations/europe/poland/gdansk" , "coordinates" : { "lat" : "54.3520252", "lon" : "18.6466384" } }, "GOT" : { "code" : "GOT", "name": "Gothenburg" , "continent" : "SC", "themes" : ["beach"] , "country" : "Sweden" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/sweden/gothenburg" , "coordinates" : { "lat" : "57.729519", "lon" : "11.965081" } }, "GVA" : { "code" : "GVA", "name": "Geneva" , "continent" : "EU", "themes" : ["ski"] , "country" : "Switzerland" , "link" : "https://www.finnair.com/us/gb/destinations/europe/switzerland/geneva" , "coordinates" : { "lat" : "46.2043907", "lon" : "6.1431577" } }, "GZP" : { "code" : "GZP", "name": "Alanya (Gazipasa)" , "continent" : "EU", "themes" : ["beach"] , "country" : "Turkey" , "link" : "https://www.finnair.com/us/gb/destinations/europe/turkey/alanya" , "coordinates" : { "lat" : "36.5431953", "lon" : "32.0042644" } }, "HAM" : { "code" : "HAM", "name": "Hamburg" , "continent" : "EU", "themes" : [] , "country" : "Germany" , "link" : "https://www.finnair.com/us/gb/destinations/europe/germany/hamburg" , "coordinates" : { "lat" : "53.5510846", "lon" : "9.9936818" } }, "HAN" : { "code" : "HAN", "name": "Hanoi" , "continent" : "AS", "themes" : [] , "country" : "Vietnam" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/vietnam/hanoi" , "coordinates" : { "lat" : "21.0277644", "lon" : "105.8341598" } }, "HEL" : { "code" : "HEL", "name": "Helsinki" , "continent" : "FI", "themes" : ["activity","beach","city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/finland/helsinki" , "coordinates" : { "lat" : "60.1733244", "lon" : "24.9410248" } }, "HKG" : { "code" : "HKG", "name": "Hong Kong" , "continent" : "AS", "themes" : ["activity"] , "country" : "Hong Kong, China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/hong-kong/hong-kong-city" , "coordinates" : { "lat" : "22.396428", "lon" : "114.109497" } }, "HKT" : { "code" : "HKT", "name": "Phuket" , "continent" : "AS", "themes" : ["activity","beach"] , "country" : "Thailand" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand" , "coordinates" : { "lat" : "7.8804479", "lon" : "98.3922504" } }, "HNL" : { "code" : "HNL", "name": "Honolulu" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "21.3069444", "lon" : "-157.8583333" } }, "HOU" : { "code" : "HOU", "name": "Houston" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "29.7604267", "lon" : "-95.3698028" } }, "IAH" : { "code" : "IAH", "name": "Houston" , "country" : "USA" , "coordinates" : { "lat" : "29.7604267", "lon" : "-95.3698028" } }, "IEV" : { "code" : "IEV", "name": "Kiev" , "country" : "Ukraine" , "coordinates" : { "lat" : "50.4501", "lon" : "30.5234" } }, "IND" : { "code" : "IND", "name": "Indianapolis" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "39.768403", "lon" : "-86.158068" } }, "IVL" : { "code" : "IVL", "name": "Ivalo" , "continent" : "FI", "themes" : ["ski","activity","city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/ivalo" , "coordinates" : { "lat" : "68.6566687", "lon" : "27.5394579" } }, "JNB" : { "code" : "JNB", "name": "Johannesburg" , "country" : "South Africa" , "coordinates" : { "lat" : "-26.2041028", "lon" : "28.0473051" } }, "JOE" : { "code" : "JOE", "name": "Joensuu" , "continent" : "FI", "themes" : [] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/joensuu" , "coordinates" : { "lat" : "62.6010899", "lon" : "29.7635297" } }, "JYV" : { "code" : "JYV", "name": "Jyväskylä" , "continent" : "FI", "themes" : ["ski"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/jyvaskyla" , "coordinates" : { "lat" : "62.244747", "lon" : "25.7472184" } }, "KAJ" : { "code" : "KAJ", "name": "Kajaani" , "continent" : "FI", "themes" : ["ski","activity"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kajaani" , "coordinates" : { "lat" : "64.2270558", "lon" : "27.7286008" } }, "KAO" : { "code" : "KAO", "name": "Kuusamo" , "continent" : "FI", "themes" : ["ski","activity"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kuusamo" , "coordinates" : { "lat" : "65.964567", "lon" : "29.188827" } }, "KCH" : { "code" : "KCH", "name": "Kuching" , "continent" : "AS", "themes" : [] , "country" : "Malaysia" , "coordinates" : { "lat" : "1.6076812", "lon" : "110.3785438" } }, "KEM" : { "code" : "KEM", "name": "Kemi" , "continent" : "FI", "themes" : ["ski","activity"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kemi" , "coordinates" : { "lat" : "65.7362771", "lon" : "24.5643979" } }, "KHH" : { "code" : "KHH", "name": "Kaohsiung" , "continent" : "AS", "themes" : [] , "country" : "Taiwan, China" , "coordinates" : { "lat" : "22.6272784", "lon" : "120.3014353" } }, "KOK" : { "code" : "KOK", "name": "Kokkola" , "continent" : "FI", "themes" : ["ski"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kokkola-pietarsaari" , "coordinates" : { "lat" : "63.8384908", "lon" : "23.1304813" } }, "KRK" : { "code" : "KRK", "name": "Krakow" , "continent" : "EU", "themes" : [] , "country" : "Poland" , "link" : "https://www.finnair.com/us/gb/destinations/europe/poland/krakow" , "coordinates" : { "lat" : "50.0646501", "lon" : "19.9449799" } }, "KTM" : { "code" : "KTM", "name": "Kathmandu" , "continent" : "AS", "themes" : [] , "country" : "Nepal" , "coordinates" : { "lat" : "27.7172453", "lon" : "85.3239605" } }, "KTT" : { "code" : "KTT", "name": "Kittilä" , "continent" : "FI", "themes" : ["ski","activity","city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kittila" , "coordinates" : { "lat" : "67.6533776", "lon" : "24.9126091" } }, "KUL" : { "code" : "KUL", "name": "Kuala Lumpur" , "continent" : "AS", "themes" : [] , "country" : "Malaysia" , "coordinates" : { "lat" : "3.139003", "lon" : "101.686855" } }, "KUO" : { "code" : "KUO", "name": "Kuopio" , "continent" : "FI", "themes" : ["ski","city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/kuopio" , "coordinates" : { "lat" : "62.8933347", "lon" : "27.6793385" } }, "Lapland" : { "code" : "Lapland", "name": "Finnish Lapland" , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/finland/lapland" , "coordinates" : { "lat" : "66.1669457", "lon" : "29.1397965" } }, "LAS" : { "code" : "LAS", "name": "Las Vegas" , "continent" : "NA", "themes" : ["activity"] , "country" : "USA" , "link" : "https://www.finnair.com/us/gb/destinations/americas/north-america/beyond" , "coordinates" : { "lat" : "36.1699412", "lon" : "-115.1398296" } }, "LAX" : { "code" : "LAX", "name": "Los Angeles" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "34.0522342", "lon" : "-118.2436849" } }, "LED" : { "code" : "LED", "name": "St. Petersburg" , "continent" : "EU", "themes" : ["activity","city"] , "country" : "Russia" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/russia/st-petersburg" , "coordinates" : { "lat" : "59.934232", "lon" : "30.337414" } }, "LGK" : { "code" : "LGK", "name": "Langkawi" , "continent" : "AS", "themes" : [] , "country" : "Malaysia" , "coordinates" : { "lat" : "6.35", "lon" : "99.8" } }, "LJU" : { "code" : "LJU", "name": "Ljubljana" , "continent" : "EU", "themes" : ["activity","beach","city"] , "country" : "Slovenia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/slovenia/ljubljana" , "coordinates" : { "lat" : "46.0569465", "lon" : "14.5057515" } }, "LON" : { "code" : "LON", "name": "London" , "continent" : "EU", "themes" : ["city"] , "country" : "United Kingdom" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/united-kingdom/london" , "coordinates" : { "lat" : "51.5073509", "lon" : "-0.1277583" } }, "MAA" : { "code" : "MAA", "name": "Chennai" , "continent" : "AS", "themes" : [] , "country" : "India" , "coordinates" : { "lat" : "13.0826802", "lon" : "80.2707184" } }, "MAD" : { "code" : "MAD", "name": "Madrid" , "continent" : "EU", "themes" : ["activity"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/spain/madrid" , "coordinates" : { "lat" : "40.4167754", "lon" : "-3.7037902" } }, "MAN" : { "code" : "MAN", "name": "Manchester" , "continent" : "EU", "themes" : ["city"] , "country" : "United Kingdom" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/united-kingdom/manchester" , "coordinates" : { "lat" : "53.4807593", "lon" : "-2.2426305" } }, "MCO" : { "code" : "MCO", "name": "Orlando" , "country" : "USA" , "coordinates" : { "lat" : "28.5383355", "lon" : "-81.3792365" } }, "MEL" : { "code" : "MEL", "name": "Melbourne" , "continent" : "OC", "themes" : ["beach"] , "country" : "Australia" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/melbourne" , "coordinates" : { "lat" : "-37.843774", "lon" : "144.969672" } }, "MEM" : { "code" : "MEM", "name": "Memphis" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "35.1495343", "lon" : "-90.0489801" } }, "MEX" : { "code" : "MEX", "name": "Mexico City" , "continent" : "NA", "themes" : [] , "country" : "Mexico" , "coordinates" : { "lat" : "19.4326077", "lon" : "-99.133208" } }, "MHQ" : { "code" : "MHQ", "name": "Mariehamn" , "continent" : "FI", "themes" : ["beach"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/europe/mariehamn" , "coordinates" : { "lat" : "60.0970945", "lon" : "19.9348339" } }, "MIA" : { "code" : "MIA", "name": "Miami" , "continent" : "NA", "themes" : ["activity","beach"] , "country" : "USA" , "link" : "https://www.finnair.com/us/gb/travel-guides-north-america/miami" , "coordinates" : { "lat" : "25.7616798", "lon" : "-80.1917902" } }, "MIL" : { "code" : "MIL", "name": "Milan" , "continent" : "EU", "themes" : ["ski","activity","beach","city"] , "country" : "Italy" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/italy/milan" , "coordinates" : { "lat" : "45.4654219", "lon" : "9.1859243" } }, "MNL" : { "code" : "MNL", "name": "Manila" , "continent" : "AS", "themes" : [] , "country" : "Philippines" , "coordinates" : { "lat" : "14.5995124", "lon" : "120.9842195" } }, "MOW" : { "code" : "MOW", "name": "Moscow" , "continent" : "EU", "themes" : ["activity"] , "country" : "Russia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/russia/moscow" , "coordinates" : { "lat" : "55.755826", "lon" : "37.6173" } }, "MSP" : { "code" : "MSP", "name": "Minneapolis" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "44.977753", "lon" : "-93.2650108" } }, "MSQ" : { "code" : "MSQ", "name": "Minsk" , "country" : "Belarus Belorussia" , "coordinates" : { "lat" : "53.9045398", "lon" : "27.5615244" } }, "MSY" : { "code" : "MSY", "name": "New Orleans" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "29.9510658", "lon" : "-90.0715323" } }, "MUC" : { "code" : "MUC", "name": "Munich" , "continent" : "EU", "themes" : ["ski","activity"] , "country" : "Germany" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/germany/munich" , "coordinates" : { "lat" : "48.1351253", "lon" : "11.5819806" } }, "NCE" : { "code" : "NCE", "name": "Nice" , "continent" : "EU", "themes" : ["activity","beach"] , "country" : "France" , "link" : "https://www.finnair.com/us/gb/destinations/europe/france/nice" , "coordinates" : { "lat" : "43.7101728", "lon" : "7.2619532" } }, "NGO" : { "code" : "NGO", "name": "Nagoya" , "continent" : "AS", "themes" : ["ski","activity"] , "country" : "Japan" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/japan/nagoya" , "coordinates" : { "lat" : "35.1814464", "lon" : "136.906398" } }, "NOU" : { "code" : "NOU", "name": "Noumea" , "country" : "New Caledonia" , "coordinates" : { "lat" : "-22.2558234", "lon" : "166.4505243" } }, "NRK" : { "code" : "NRK", "name": "Norrköping" , "country" : "Sweden" }, "NYC" : { "code" : "NYC", "name": "New York" , "continent" : "NA", "themes" : ["ski","activity","city"] , "country" : "USA" , "link" : "https://www.finnair.com/us/gb/travel-guides-north-america/new-york" , "coordinates" : { "lat" : "40.7127837", "lon" : "-74.0059413" } }, "OMA" : { "code" : "OMA", "name": "Omaha" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "41.2523634", "lon" : "-95.9979883" } }, "ORL" : { "code" : "ORL", "name": "Orlando" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "28.5383355", "lon" : "-81.3792365" } }, "OSA" : { "code" : "OSA", "name": "Osaka" , "continent" : "AS", "themes" : ["beach"] , "country" : "Japan" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/japan/osaka" , "coordinates" : { "lat" : "34.6937378", "lon" : "135.5021651" } }, "OSL" : { "code" : "OSL", "name": "Oslo" , "continent" : "SC", "themes" : ["ski","activity","city"] , "country" : "Norway" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/norway/oslo" , "coordinates" : { "lat" : "59.9138688", "lon" : "10.7522454" } }, "OUL" : { "code" : "OUL", "name": "Oulu" , "continent" : "FI", "themes" : ["ski","city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/oulu" , "coordinates" : { "lat" : "65.0126148", "lon" : "25.4714526" } }, "PAR" : { "code" : "PAR", "name": "Paris" , "continent" : "EU", "themes" : ["activity","city"] , "country" : "France" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/france/paris" , "coordinates" : { "lat" : "48.856614", "lon" : "2.3522219" } }, "PDX" : { "code" : "PDX", "name": "Portland" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "45.5230622", "lon" : "-122.6764816" } }, "PEN" : { "code" : "PEN", "name": "Penang" , "continent" : "AS", "themes" : [] , "country" : "Malaysia" , "coordinates" : { "lat" : "5.414921", "lon" : "100.3297612" } }, "PER" : { "code" : "PER", "name": "Perth" , "continent" : "OC", "themes" : ["beach"] , "country" : "Australia" , "link" : "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/perth" , "coordinates" : { "lat" : "-31.9535132", "lon" : "115.8570471" } }, "PHL" : { "code" : "PHL", "name": "Philadelphia" , "country" : "USA" , "coordinates" : { "lat" : "39.9525839", "lon" : "-75.1652215" } }, "PHX" : { "code" : "PHX", "name": "Phoenix" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "33.4483771", "lon" : "-112.0740373" } }, "PIT" : { "code" : "PIT", "name": "Pittsburgh" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "40.4406248", "lon" : "-79.9958864" } }, "PNH" : { "code" : "PNH", "name": "Phnom Penh" , "continent" : "AS", "themes" : [] , "country" : "Cambodia" , "coordinates" : { "lat" : "11.5448729", "lon" : "104.8921668" } }, "POR" : { "code" : "POR", "name": "Pori" , "country" : "Finland" , "coordinates" : { "lat" : "61.4851997", "lon" : "21.7974444" } }, "PRG" : { "code" : "PRG", "name": "Prague" , "continent" : "EU", "themes" : ["activity"] , "country" : "Czech Republic" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/czech-republic/prague" , "coordinates" : { "lat" : "50.0755381", "lon" : "14.4378005" } }, "PSA" : { "code" : "PSA", "name": "Pisa" , "continent" : "EU", "themes" : ["activity"] , "country" : "Italy" , "link" : "https://www.finnair.com/us/gb/destinations/europe/italy/pisa" , "coordinates" : { "lat" : "43.7228386", "lon" : "10.4016888" } }, "PUS" : { "code" : "PUS", "name": "Busan" , "continent" : "AS", "themes" : [] , "country" : "Korea, South" , "coordinates" : { "lat" : "35.1795543", "lon" : "129.0756416" } }, "PVG" : { "code" : "PVG", "name": "Shanghai" , "continent" : "AS", "themes" : ["activity","beach"] , "country" : "China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/china/shanghai" , "coordinates" : { "lat" : "31.230416", "lon" : "121.473701" } }, "RDU" : { "code" : "RDU", "name": "Raleigh" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "35.7795897", "lon" : "-78.6381787" } }, "REP" : { "code" : "REP", "name": "Siem Reap" , "continent" : "AS", "themes" : [] , "country" : "Cambodia" , "coordinates" : { "lat" : "13.3670968", "lon" : "103.8448134" } }, "RGN" : { "code" : "RGN", "name": "Yangon" , "country" : "Myanmar" , "coordinates" : { "lat" : "16.8660694", "lon" : "96.195132" } }, "RIC" : { "code" : "RIC", "name": "Richmond" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "37.5407246", "lon" : "-77.4360481" } }, "RIX" : { "code" : "RIX", "name": "Riga" , "continent" : "BL", "themes" : ["activity","city"] , "country" : "Latvia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/latvia/riga" , "coordinates" : { "lat" : "56.9496487", "lon" : "24.1051864" } }, "ROM" : { "code" : "ROM", "name": "Rome" , "continent" : "EU", "themes" : ["activity","beach","city"] , "country" : "Italy" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/italy/rome" , "coordinates" : { "lat" : "41.9027835", "lon" : "12.4963655" } }, "RVN" : { "code" : "RVN", "name": "Rovaniemi" , "continent" : "FI", "themes" : ["ski","activity"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/rovaniemi" , "coordinates" : { "lat" : "66.4970216", "lon" : "25.724999" } }, "SAN" : { "code" : "SAN", "name": "San Diego" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "32.715738", "lon" : "-117.1610838" } }, "SEA" : { "code" : "SEA", "name": "Seattle" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "47.6062095", "lon" : "-122.3320708" } }, "SEL" : { "code" : "SEL", "name": "Seoul" , "continent" : "AS", "themes" : ["activity"] , "country" : "Korea, South" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/korea/seoul" , "coordinates" : { "lat" : "37.566535", "lon" : "126.9779692" } }, "SFO" : { "code" : "SFO", "name": "San Francisco" , "continent" : "NA", "themes" : [] , "country" : "USA" , "link" : "https://www.finnair.com/us/gb/destinations/americas/north-america/san-francisco" , "coordinates" : { "lat" : "37.7749295", "lon" : "-122.4194155" } }, "SGN" : { "code" : "SGN", "name": "Ho Chi Minh City" , "continent" : "AS", "themes" : ["activity"] , "country" : "Vietnam" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/vietnam/ho-chi-minh-city" , "coordinates" : { "lat" : "10.8230989", "lon" : "106.6296638" } }, "SHA" : { "code" : "SHA", "name": "Shanghai" , "country" : "China" , "coordinates" : { "lat" : "31.230416", "lon" : "121.473701" } }, "SIN" : { "code" : "SIN", "name": "Singapore" , "continent" : "AS", "themes" : ["activity"] , "country" : "Singapore" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/singapore/singapore-city" , "coordinates" : { "lat" : "1.352083", "lon" : "103.819836" } }, "SJU" : { "code" : "SJU", "name": "San Juan" , "continent" : "NA", "themes" : [] , "country" : "Puerto Rico" , "coordinates" : { "lat" : "18.4663338", "lon" : "-66.1057217" } }, "SJY" : { "code" : "SJY", "name": "Seinäjoki" , "country" : "Finland" , "coordinates" : { "lat" : "62.794543", "lon" : "22.8278264" } }, "SKG" : { "code" : "SKG", "name": "Thessaloniki" , "continent" : "EU", "themes" : [] , "country" : "Greece" , "coordinates" : { "lat" : "40.6400629", "lon" : "22.9444191" } }, "SLC" : { "code" : "SLC", "name": "Salt Lake City" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "40.7607793", "lon" : "-111.8910474" } }, "SMF" : { "code" : "SMF", "name": "Sacramento" , "country" : "USA" , "coordinates" : { "lat" : "38.5815719", "lon" : "-121.4943996" } }, "SOF" : { "code" : "SOF", "name": "Sofia" , "continent" : "EU", "themes" : [] , "country" : "Bulgaria" , "coordinates" : { "lat" : "42.6977082", "lon" : "23.3218675" } }, "SPK" : { "code" : "SPK", "name": "Sapporo" , "continent" : "AS", "themes" : [] , "country" : "Japan" , "coordinates" : { "lat" : "43.0620958", "lon" : "141.3543763" } }, "STL" : { "code" : "STL", "name": "Saint Louis" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "38.6270025", "lon" : "-90.1994042" } }, "STO" : { "code" : "STO", "name": "Stockholm" , "continent" : "SC", "themes" : ["activity","city"] , "country" : "Sweden" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/sweden/stockholm" , "coordinates" : { "lat" : "59.3293235", "lon" : "18.0685808" } }, "SUB" : { "code" : "SUB", "name": "Surabaya" , "continent" : "AS", "themes" : [] , "country" : "Indonesia" , "coordinates" : { "lat" : "-7.2574719", "lon" : "112.7520883" } }, "SVL" : { "code" : "SVL", "name": "Savonlinna" , "country" : "Finland" , "coordinates" : { "lat" : "61.8687022", "lon" : "28.8850555" } }, "SVX" : { "code" : "SVX", "name": "Yekaterinburg" , "continent" : "EU", "themes" : ["ski","beach"] , "country" : "Russia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations" , "coordinates" : { "lat" : "56.8389261", "lon" : "60.6057025" } }, "SYD" : { "code" : "SYD", "name": "Sydney" , "continent" : "OC", "themes" : ["activity","beach"] , "country" : "Australia" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/australia/sydney" , "coordinates" : { "lat" : "-33.8674869", "lon" : "151.2069902" } }, "SYX" : { "code" : "SYX", "name": "Sanya" , "continent" : "AS", "themes" : [] , "country" : "China" , "coordinates" : { "lat" : "18.252847", "lon" : "109.511909" } }, "TAY" : { "code" : "TAY", "name": "Tartu" , "continent" : "BL", "themes" : ["activity"] , "country" : "Estonia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/estonia/tartu" , "coordinates" : { "lat" : "58.3776252", "lon" : "26.7290063" } }, "TDX" : { "code" : "TDX", "name": "Trat" , "continent" : "AS", "themes" : [] , "country" : "Thailand" , "coordinates" : { "lat" : "12.2427563", "lon" : "102.5174734" } }, "TGD" : { "code" : "TGD", "name": "Podgorica" , "continent" : "EU", "themes" : [] , "country" : "Serbia Montenegro" , "coordinates" : { "lat" : "42.4304196", "lon" : "19.2593642" } }, "TIA" : { "code" : "TIA", "name": "Tirana" , "continent" : "EU", "themes" : [] , "country" : "Albania" , "coordinates" : { "lat" : "41.3275459", "lon" : "19.8186982" } }, "TKU" : { "code" : "TKU", "name": "Turku" , "continent" : "FI", "themes" : ["city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/turku" , "coordinates" : { "lat" : "60.4518126", "lon" : "22.2666303" } }, "TLL" : { "code" : "TLL", "name": "Tallinn" , "continent" : "BL", "themes" : ["activity","city"] , "country" : "Estonia" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/estonia/tallinn" , "coordinates" : { "lat" : "59.4369608", "lon" : "24.7535746" } }, "TLV" : { "code" : "TLV", "name": "Tel Aviv" , "continent" : "ME", "themes" : ["activity","beach","city"] , "country" : "Israel" , "link" : "https://www.finnair.com/us/gb/destinations/middle-east/tel-aviv" , "coordinates" : { "lat" : "32.0852999", "lon" : "34.7817676" } }, "TMP" : { "code" : "TMP", "name": "Tampere" , "continent" : "FI", "themes" : ["city"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/tampere" , "coordinates" : { "lat" : "61.4981508", "lon" : "23.7610254" } }, "TOS" : { "code" : "TOS", "name": "Tromsø" , "continent" : "SC", "themes" : [] , "country" : "Norway" , "link" : "https://www.finnair.com/us/gb/destinations/europe/tromso" , "coordinates" : { "lat" : "69.6492", "lon" : "18.9553" } }, "TPA" : { "code" : "TPA", "name": "Tampa" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "27.950575", "lon" : "-82.4571776" } }, "TPE" : { "code" : "TPE", "name": "Taipei" , "continent" : "AS", "themes" : [] , "country" : "Taiwan, China" , "coordinates" : { "lat" : "25.0329694", "lon" : "121.5654177" } }, "TRD" : { "code" : "TRD", "name": "Trondheim" , "country" : "Norway" , "coordinates" : { "lat" : "63.4305149", "lon" : "10.3950528" } }, "TYO" : { "code" : "TYO", "name": "Tokyo" , "continent" : "AS", "themes" : ["activity"] , "country" : "Japan" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/japan/tokyo" , "coordinates" : { "lat" : "35.6894875", "lon" : "139.6917064" } }, "UME" : { "code" : "UME", "name": "Umeå" , "continent" : "SC", "themes" : [] , "country" : "Sweden" , "link" : "https://www.finnair.com/us/gb/destinations/europe/sweden/umea" , "coordinates" : { "lat" : "63.8258471", "lon" : "20.2630354" } }, "USM" : { "code" : "USM", "name": "Koh Samui" , "continent" : "AS", "themes" : [] , "country" : "Thailand" , "coordinates" : { "lat" : "9.5120168", "lon" : "100.0135929" } }, "VAA" : { "code" : "VAA", "name": "Vaasa" , "continent" : "FI", "themes" : ["ski"] , "country" : "Finland" , "link" : "https://www.finnair.com/us/gb/destinations/finland/vaasa" , "coordinates" : { "lat" : "63.0951412", "lon" : "21.6165128" } }, "VCE" : { "code" : "VCE", "name": "Venice" , "continent" : "EU", "themes" : ["activity","beach"] , "country" : "Italy" , "link" : "https://www.finnair.com/us/gb/destinations/europe/italy/venice" , "coordinates" : { "lat" : "45.4408474", "lon" : "12.3155151" } }, "VIE" : { "code" : "VIE", "name": "Vienna" , "continent" : "EU", "themes" : ["ski"] , "country" : "Austria" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/austria/vienna" , "coordinates" : { "lat" : "48.2081743", "lon" : "16.3738189" } }, "VNO" : { "code" : "VNO", "name": "Vilnius" , "continent" : "BL", "themes" : ["activity","city"] , "country" : "Lithuania" , "link" : "https://www.finnair.com/us/gb/destinations/europe/lithuania/vilnius" , "coordinates" : { "lat" : "54.6871555", "lon" : "25.2796514" } }, "VRK" : { "code" : "VRK", "name": "Varkaus" , "country" : "Finland" , "coordinates" : { "lat" : "62.3118817", "lon" : "27.8778704" } }, "WAS" : { "code" : "WAS", "name": "Washington" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "38.9071923", "lon" : "-77.0368707" } }, "WAW" : { "code" : "WAW", "name": "Warsaw" , "continent" : "EU", "themes" : ["activity"] , "country" : "Poland" , "link" : "https://www.finnair.com/us/gb/destinations/europe/poland/warsaw" , "coordinates" : { "lat" : "52.2296756", "lon" : "21.0122287" } }, "YTO" : { "code" : "YTO", "name": "Toronto" , "continent" : "NA", "themes" : ["activity"] , "country" : "Canada" , "link" : "https://www.finnair.com/us/gb/destinations/americas/north-america/beyond" , "coordinates" : { "lat" : "43.653226", "lon" : "-79.3831843" } }, "YUL" : { "code" : "YUL", "name": "Montreal" , "country" : "Canada" , "coordinates" : { "lat" : "45.5016889", "lon" : "-73.567256" } }, "YVR" : { "code" : "YVR", "name": "Vancouver" , "continent" : "NA", "themes" : [] , "country" : "Canada" , "coordinates" : { "lat" : "45.6387281", "lon" : "-122.6614861" } }, "YYC" : { "code" : "YYC", "name": "Calgary" , "continent" : "NA", "themes" : [] , "country" : "Canada" , "coordinates" : { "lat" : "51.0486151", "lon" : "-114.0708459" } }, "ZAG" : { "code" : "ZAG", "name": "Zagreb" , "continent" : "EU", "themes" : [] , "country" : "Croatia" , "coordinates" : { "lat" : "45.8150108", "lon" : "15.981919" } }, "ZRH" : { "code" : "ZRH", "name": "Zurich" , "continent" : "EU", "themes" : [] , "country" : "Switzerland" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/switzerland/zurich" , "coordinates" : { "lat" : "47.3768866", "lon" : "8.541694" } }, "KBV" : { "code" : "KBV", "name": "Krabi" , "continent" : "AS", "themes" : ["activity","beach"] , "country" : "Thailand" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand" , "coordinates" : { "lat" : "8.0862997", "lon" : "98.9062835" } }, "TCI" : { "code" : "TCI", "name": "Tenerife" , "continent" : "EU", "themes" : ["activity"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/tenerife" , "coordinates" : { "lat" : "28.2915637", "lon" : "-16.6291304" } }, "LPA" : { "code" : "LPA", "name": "Gran Canaria" , "continent" : "EU", "themes" : ["activity"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/gran-canaria" , "coordinates" : { "lat" : "27.9202202", "lon" : "-15.5474373" } }, "INN" : { "code" : "INN", "name": "Innsbruck" , "continent" : "EU", "themes" : ["ski"] , "country" : "Austria" , "link" : "https://www.finnair.com/us/gb/destinations/europe/austria/innsbruck" , "coordinates" : { "lat" : "47.2692124", "lon" : "11.4041024" } }, "DLM" : { "code" : "DLM", "name": "Dalaman" , "country" : "Turkey" , "coordinates" : { "lat" : "36.76662", "lon" : "28.799991" } }, "KZN" : { "code" : "KZN", "name": "Kazan" , "continent" : "EU", "themes" : [] , "country" : "Russia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations" , "coordinates" : { "lat" : "55.8304307", "lon" : "49.0660806" } }, "KUF" : { "code" : "KUF", "name": "Samara" , "continent" : "EU", "themes" : [] , "country" : "Russia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations" , "coordinates" : { "lat" : "53.2415041", "lon" : "50.2212463" } }, "SPU" : { "code" : "SPU", "name": "Split" , "continent" : "EU", "themes" : ["activity","beach"] , "country" : "Croatia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/croatia/split" , "coordinates" : { "lat" : "43.5081323", "lon" : "16.4401935" } }, "XIY" : { "code" : "XIY", "name": "Xi'an" , "continent" : "AS", "themes" : ["activity"] , "country" : "China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/china/xian" , "coordinates" : { "lat" : "34.341568", "lon" : "108.940175" } }, "SIA" : { "code" : "SIA", "name": "Xi'an" , "continent" : "AS", "themes" : [] , "country" : "China" , "coordinates" : { "lat" : "34.341568", "lon" : "108.940175" } }, "YMQ" : { "code" : "YMQ", "name": "Montreal" , "continent" : "NA", "themes" : [] , "country" : "Canada" , "coordinates" : { "lat" : "45.5016889", "lon" : "-73.567256" } }, "FUE" : { "code" : "FUE", "name": "Fuerteventura" , "continent" : "EU", "themes" : ["activity"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/canary-islands/fuerteventura" , "coordinates" : { "lat" : "28.3982211", "lon" : "-14.0103493" } }, "ACE" : { "code" : "ACE", "name": "Lanzarote" , "continent" : "EU", "themes" : ["activity"] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/canary-islands/lanzarote" , "coordinates" : { "lat" : "29.0468535", "lon" : "-13.5899733" } }, "LLA" : { "code" : "LLA", "name": "Lulea" , "country" : "Sweden" , "coordinates" : { "lat" : "65.584819", "lon" : "22.1567026" } }, "VBY" : { "code" : "VBY", "name": "Visby" , "continent" : "SC", "themes" : ["beach"] , "country" : "Sweden" , "link" : "https://www.finnair.com/us/gb/destinations/europe/sweden/visby" , "coordinates" : { "lat" : "57.6348", "lon" : "18.29484" } }, "UMA" : { "code" : "UMA", "name": "Umeå" , "country" : "Sweden" }, "ARN" : { "code" : "ARN", "name": "Stockholm Arlanda" , "continent" : "SC", "themes" : [] , "country" : "Sweden" , "coordinates" : { "lat" : "59.3293235", "lon" : "18.0685808" } }, "CDG" : { "code" : "CDG", "name": "Paris" , "continent" : "EU", "themes" : [] , "country" : "France" , "coordinates" : { "lat" : "48.856614", "lon" : "2.3522219" } }, "FCO" : { "code" : "FCO", "name": "Rome" , "continent" : "EU", "themes" : [] , "country" : "Italy" , "coordinates" : { "lat" : "41.9027835", "lon" : "12.4963655" } }, "ICN" : { "code" : "ICN", "name": "Seoul" , "continent" : "AS", "themes" : [] , "country" : "Korea, South" , "coordinates" : { "lat" : "37.566535", "lon" : "126.9779692" } }, "JFK" : { "code" : "JFK", "name": "New York" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "40.7127837", "lon" : "-74.0059413" } }, "KIX" : { "code" : "KIX", "name": "Osaka" , "continent" : "AS", "themes" : [] , "country" : "Japan" , "coordinates" : { "lat" : "34.6937378", "lon" : "135.5021651" } }, "LHR" : { "code" : "LHR", "name": "London" , "continent" : "EU", "themes" : [] , "country" : "United Kingdom" , "coordinates" : { "lat" : "51.5073509", "lon" : "-0.1277583" } }, "MXP" : { "code" : "MXP", "name": "Milan" , "continent" : "EU", "themes" : [] , "country" : "Italy" , "coordinates" : { "lat" : "45.4654219", "lon" : "9.1859243" } }, "NRT" : { "code" : "NRT", "name": "Tokyo" , "country" : "Japan" , "coordinates" : { "lat" : "35.6894875", "lon" : "139.6917064" } }, "PEK" : { "code" : "PEK", "name": "Beijing" , "country" : "China" , "coordinates" : { "lat" : "39.904211", "lon" : "116.407395" } }, "SVO" : { "code" : "SVO", "name": "Moscow" , "continent" : "EU", "themes" : [] , "country" : "Russia" , "coordinates" : { "lat" : "55.755826", "lon" : "37.6173" } }, "TXL" : { "code" : "TXL", "name": "Berlin" , "country" : "Germany" , "coordinates" : { "lat" : "52.5200066", "lon" : "13.404954" } }, "YYZ" : { "code" : "YYZ", "name": "Toronto" , "continent" : "NA", "themes" : [] , "country" : "Canada" , "coordinates" : { "lat" : "43.653226", "lon" : "-79.3831843" } }, "ORD" : { "code" : "ORD", "name": "Chicago" , "continent" : "NA", "themes" : [] , "country" : "USA" , "coordinates" : { "lat" : "41.8781136", "lon" : "-87.6297982" } }, "ODT" : { "code" : "ODT", "name": "Bucharest" , "country" : "Romania" , "coordinates" : { "lat" : "44.4267674", "lon" : "26.1025384" } }, "KBP" : { "code" : "KBP", "name": "Kiev" , "continent" : "EU", "themes" : [] , "country" : "Ukraine" , "coordinates" : { "lat" : "50.4501", "lon" : "30.5234" } }, "EDI" : { "code" : "EDI", "name": "Edinburgh" , "continent" : "EU", "themes" : ["activity"] , "country" : "United Kingdom" , "link" : "https://www.finnair.com/us/gb/destinations/europe/united-kingdom/edinburgh" , "coordinates" : { "lat" : "55.953252", "lon" : "-3.188267" } }, "LYR" : { "code" : "LYR", "name": "Longyearbyen" , "coordinates" : { "lat" : "78.2231722", "lon" : "15.626723" } }, "BLL" : { "code" : "BLL", "name": "Billund" , "continent" : "SC", "themes" : [] , "country" : "Denmark" , "link" : "https://www.finnair.com/us/gb/destinations/europe/denmark/billund" , "coordinates" : { "lat" : "55.728449", "lon" : "9.112366" } }, "ZTH" : { "code" : "ZTH", "name": "Zakynthos" , "continent" : "EU", "themes" : [] , "country" : "Greece" , "coordinates" : { "lat" : "37.7881604", "lon" : "20.8988271" } }, "PUY" : { "code" : "PUY", "name": "Pula" , "country" : "Croatia" , "link" : "https://www.finnair.com/us/gb/destinations/europe/croatia/pula" , "coordinates" : { "lat" : "44.8666232", "lon" : "13.8495788" } }, "JSI" : { "code" : "JSI", "name": "Skiathos" , "continent" : "EU", "themes" : ["activity"] , "country" : "Greece" , "link" : "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos" , "coordinates" : { "lat" : "39.1626627", "lon" : "23.4909759" } }, "JTR" : { "code" : "JTR", "name": "Santorini" , "continent" : "EU", "themes" : [] , "country" : "Greece" , "coordinates" : { "lat" : "36.3931562", "lon" : "25.4615092" } }, "MJT" : { "code" : "MJT", "name": "Mytilene" , "country" : "Greece" , "coordinates" : { "lat" : "39.1067382", "lon" : "26.5572747" } }, "PVK" : { "code" : "PVK", "name": "Preveza" , "continent" : "EU", "themes" : [] , "country" : "Greece" , "coordinates" : { "lat" : "38.9592649", "lon" : "20.7517155" } }, "VAR" : { "code" : "VAR", "name": "Varna" , "continent" : "EU", "themes" : [] , "country" : "Bulgaria" , "coordinates" : { "lat" : "43.2140504", "lon" : "27.9147333" } }, "FUK" : { "code" : "FUK", "name": "Fukuoka" , "continent" : "AS", "themes" : ["beach"] , "country" : "Japan" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/japan/fukuoka" , "coordinates" : { "lat" : "33.5903547", "lon" : "130.4017155" } }, "CAN" : { "code" : "CAN", "name": "Guangzhou" , "continent" : "AS", "themes" : [] , "country" : "China" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/china/guangzhou" , "coordinates" : { "lat" : "23.12911", "lon" : "113.264385" } }, "LGA" : { "code" : "LGA", "name": "New York" , "continent" : "NA", "themes" : [] }, "HR" : { "code" : "HR", "name": "Croatia" , "country" : "Croatia" , "link" : "https://www.finnair.com/us/gb/travel-guides-europe/croatia" }, "TH" : { "code" : "TH", "name": "Thailand" , "country" : "Thailand" , "link" : "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand" }, "MLE" : { "code" : "MLE", "name": "Male" }, "ALC" : { "code" : "ALC", "name": "Alicante" , "continent" : "EU", "themes" : [] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/alicante" , "coordinates" : { "lat" : "38.346154", "lon" : "-0.490665" } }, "BMA" : { "code" : "BMA", "name": "Stockholm Bromma" }, "KEF" : { "code" : "KEF", "name": "Reykjavik" }, "MAH" : { "code" : "MAH", "name": "Menorca" , "continent" : "EU", "themes" : [] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/menorca" , "coordinates" : { "lat" : "39.949197", "lon" : "4.110750" } }, "IBZ" : { "code" : "IBZ", "name": "Ibiza" , "continent" : "EU", "themes" : [] , "country" : "Spain" , "link" : "https://www.finnair.com/us/gb/destinations/europe/spain/ibiza" , "coordinates" : { "lat" : "38.906488", "lon" : "1.420406" } }, "GYE" : { "code" : "GYE", "name": "Guayaquil" }, "SCL" : { "code" : "SCL", "name": "Santiago" }, "LIM" : { "code" : "LIM", "name": "Lima" }, "UIO" : { "code" : "UIO", "name": "Quito" }, "AZO" : { "code" : "AZO", "name": "Kalamazoo Battle Creek" }, "IL" : { "code" : "IL", "name": "Israel" , "country" : "Israel" }, "EE" : { "code" : "EE", "name": "Estonia" , "country" : "Estonia" }, "PL" : { "code" : "PL", "name": "Poland" , "country" : "Poland" }, "US" : { "code" : "US", "name": "United States" , "country" : "USA" }, "THN" : { "code" : "THN", "name": "Trollhättan" }, "AGH" : { "code" : "AGH", "name": "Ängelholm" }, "HAD" : { "code" : "HAD", "name": "Halmstad" }, "MMX" : { "code" : "MMX", "name": "Malmö" , "continent" : "SC", "themes" : [] }, "VXO" : { "code" : "VXO", "name": "Växjö" }, "KLR" : { "code" : "KLR", "name": "Kalmar" }, "OSD" : { "code" : "OSD", "name": "Åre" }, "RNB" : { "code" : "RNB", "name": "Ronneby" }, "SDL" : { "code" : "SDL", "name": "Sundsvall" }, "VST" : { "code" : "VST", "name": "Västerås" }, "KUN" : { "code" : "KUN", "name": "Kaunas" }, "NAN" : { "code" : "NAN", "name": "Fiji" }, "PR" : { "code" : "PR", "name": "Puerto Rico" }, "AUH" : { "code" : "AUH", "name": "Abu Dhabi" }, "QRL" : { "code" : "QRL", "name": "Marbella" }, "KHL" : { "code" : "KHL", "name": "Khao Lak" }, "HOI" : { "code" : "HOI", "name": "Hoi An" }, "CEB" : { "code" : "CEB", "name": "Cebu" }, "QYG" : { "code" : "QYG", "name": "Railway Germany" } };

      mapData.array = Object.keys(result).map(function (destination) {
        return result[destination];
      });


      mapData.array.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });

      var map,
      center;

      // Set a map position for mobile/tablet/desktop
      if ($(window).width() < 770) {
        center = { lat: 47, lng: 17 }
      } else {
        center = { lat: 40, lng: 21.5 }
      }

      // Initialize Google map on all sites except CN
      map = new myGoogleMap({
        mapId: "map",
        myStyles: mapStyles,
        myDestData: result,
        iconUrl: mapSettings.assetsUrl + "images/58-destinations/poi.png",
        iconUrlHover: mapSettings.assetsUrl + "images/58-destinations/poi_blue.png",
        // These small ones are used when the map is zoomed out to max(3)
        iconUrlSmall: mapSettings.assetsUrl + "images/58-destinations/poi_pink_small.png",
        iconUrlHoverSmall: mapSettings.assetsUrl + "images/58-destinations/poi_blue_small.png",
        center: center
      });

      map.initMap();

    // });
// });
}


/**
 * Constructor for Google Map
 *
 * @param  {Object} options: zoom - default value of the map zoom
 *                           center - default value of the map center
 *                           myDestData - JSON with location names and coordinates
 *                           iconUrl - url of marker icon
 *                           mapId - ID of map wrapper
 *                           mapStyles - JSON with custom map styles
 *                           
 */

 function myGoogleMap(options) {

  var myDestData = options.myDestData,
  myLatLng,
  destUrl;
  options.zoom = options.zoom || 3;
  options.center = options.center || { lat: 55, lng: 25 };

  this.initMap = function () {

    map = new google.maps.Map(document.getElementById(options.mapId), {
      zoom: options.zoom,
      minZoom: 3,
      styles: options.myStyles,
      center: options.center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      streetViewControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      draggable: true,
      gestureHandling: 'cooperative',
      fullscreenControl: false
    });

    // Scroll lock for touch devices
    /*
    google.maps.event.addListener(map, 'mouseout', function (event) {
      this.setOptions({ scrollwheel: false });
    });*/ 

    google.maps.event.addListener(map, 'zoom_changed', function() {
      var i, prevZoomLevel;
      var eventSent = false;

      prevZoomLevel = zoomLevel;

      map.getZoom() < 4 ? zoomLevel = 3 : zoomLevel = 4;

      if (prevZoomLevel !== zoomLevel) {
        for (i = 0; i < markers.length; i++) {
          if (zoomLevel === 4) {
            markers[i].setIcon(markerImages.iconUrl);
          }
          else {
            markers[i].setIcon(markerImages.iconUrlSmall);
          }
        }
      }
      ga('send', 'event', "Destinations map", "Click on map zoom controls", "Map zoom level changed to " + map.getZoom());
    });
    
    google.maps.event.addListenerOnce(map, 'idle', function(){
      $('#selectRegion').removeAttr('disabled');
    });

    //A11Y for keyboards
    $('#map').keydown(function (event) {
      var o = 128; // half a tile's width 
      switch (event.which) {
        case 37: // leftArrow
        event.preventDefault();
        map.panBy(-o, 0);
        break;
        case 38: // upArrow
        event.preventDefault();
        map.panBy(0, -o);
        break;
        case 39: // rightArrow
        event.preventDefault();
        map.panBy(o, 0);
        break;
        case 40: // downArrow
        event.preventDefault();
        map.panBy(0, o);
        break;
        case 109: // numpad -
        case 189: // -
        event.preventDefault();
        map.setZoom(map.getZoom() - 1);
        break;
        case 107: // numpad +
        case 187: // =
        event.preventDefault();
        map.setZoom(map.getZoom() + 1);
        break;
      }
    });

    // Enable scrolling after resizing
    var wasResized = false;
    if (window.addEventListener) { //IE8 Workaround
      window.addEventListener("resize", function () {
        wasResized = true;
      });
    }
    else {
      window.attachEvent("onresize", function () {
        wasResized = true;
      });
    }
    if (wasResized) {
      google.maps.event.addListener(map, 'mouseover', function (event) {
        this.setOptions({ scrollwheel: true });
        wasResized = false;  // Reset listener
      });
    };
    // Enable scrolling after resizing and dragging

    google.maps.event.addListener(map, 'drag', function (event) {
      this.setOptions({ scrollwheel: true });
    });

    google.maps.event.addListener(map, 'dragend', function(event){
        ga('send', 'event', "Destinations map", "Drag map", "Map was dragged");
    });

    var markers = [], // array of markers to store markers data
    index = 0;


    // Create POI for every destination from myDestData JSON
    // and InfoBubble tooltip for each of them with data provided
    for (var key in myDestData) {
      if (myDestData.hasOwnProperty(key)) {

        if (typeof myDestData[key].link !== "undefined" &&
          typeof myDestData[key].coordinates !== "undefined") {

          myLatLng = {
            lat: Number(myDestData[key].coordinates.lat),
            lng: Number(myDestData[key].coordinates.lon)
          };

          var markerImages = {
            iconUrl: new google.maps.MarkerImage(options.iconUrl),
            iconUrlHover: new google.maps.MarkerImage(options.iconUrlHover),
            iconUrlSmall: new google.maps.MarkerImage(options.iconUrlSmall),
            iconUrlHoverSmall: new google.maps.MarkerImage(options.iconUrlHoverSmall)
          };

          mapSettings.markers[key] = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: markerImages.iconUrlSmall,
            url: myDestData[key].link,
            name: myDestData[key].name,
            country: myDestData[key].country,
            id: myDestData[key].code
          });

          //Hover-effect which changes color of POI / Marker
          var markerListener1 = google.maps.event.addListener(mapSettings.markers[key], 'mouseover', function (event) {
            var currentZoom = map.getZoom();
            if (currentZoom < 4) {
              this.setIcon(markerImages.iconUrlHoverSmall);
            }
            else {
              this.setIcon(markerImages.iconUrlHover);
            }
            google.maps.event.addListener(this, 'mouseout', function (event) {
              if (currentZoom < 4) {
                this.setIcon(markerImages.iconUrlSmall);
              }
              else {
                this.setIcon(markerImages.iconUrl);
              }
            });
          });


          var markerListener2 = google.maps.event.addListener(mapSettings.markers[key], 'mouseout', function (event) {
            var currentZoom = map.getZoom();
            if (currentZoom < 4) {
              this.setIcon(markerImages.iconUrlSmall);
            }
            else {
              this.setIcon(markerImages.iconUrl);
            }

          });

          //Changes the icon picture based on the zoom level
          var zoomLevel = 3;


          google.maps.event.addListener(map, 'zoom_changed', function () {
            var i, prevZoomLevel;

            prevZoomLevel = zoomLevel;

            map.getZoom() < 4 ? zoomLevel = 3 : zoomLevel = 4;

            if (prevZoomLevel !== zoomLevel) {
              for (marker in mapSettings.markers) {
                if (zoomLevel === 4) {
                  mapSettings.markers[marker].setIcon(markerImages.iconUrl);
                }
                else {
                  mapSettings.markers[marker].setIcon(markerImages.iconUrlSmall);
                }
              }
            }
          });

          google.maps.event.addListener(mapSettings.markers[key], "click", function () {

            var marker = $(this)[0];

            $('#markerTrigger').trigger('markerMapClick', [marker]);
          });

          var infowindow = new google.maps.InfoWindow({});
          
          ga('send', 'event', "Destinations map", "Click on map marker", this.id);

          google.maps.event.addListener(mapSettings.markers[key], "mouseover", function () {

            var currentZoom = map.getZoom();
            if (currentZoom < 4) {
              this.setIcon(markerImages.iconUrlHoverSmall);
            }
            else {
              this.setIcon(markerImages.iconUrlHover);
            }
            google.maps.event.addListener(this, 'mouseout', function (event) {
              var currentZoom = map.getZoom();
              if (currentZoom < 4) {
                this.setIcon(markerImages.iconUrlSmall);
              }
              else {
                this.setIcon(markerImages.iconUrl);
              }
            });

            var contentString = '<div class="align-center" data-window-destination="' + this.id + '"><h4 class="paddingless marginless white-text amp-medium">' + this.name + '</h4></div>'

            infowindow.setContent(contentString)

            infowindow.open(map, this)
          });

          google.maps.event.addListener(mapSettings.markers[key], "mouseout", function () {
            infowindow.close()
          });

          // index += 1;
        }
      }
    }


    google.maps.event.addDomListener(document.getElementById('close-container'), "click", function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });


    google.maps.event.addDomListener(document.getElementById('selectRegion'), "change", function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    google.maps.event.addDomListener(window, "resize", function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    google.maps.event.addDomListener(map, 'zoom_changed', function() {
      ga('send', 'event', "Destination map with sidebar", "Click on map zoom controls", "Map zoom level changed to " + map.getZoom());
    });

    google.maps.event.addDomListener(map, 'dragend', function(event){
      ga('send', 'event', "Destination map with sidebar", "Drag map", "Map was dragged");
    });

  }; // end of initMap
} // end of myGoogleMap

$(document).on('click-info-bubble-link', '.top-destination--outer-container [data-event-tracking]', function() {
  window.dataLayer.push({
    event: 'click-info-bubble-link',
    infoBubble: {
      label: $(this).data('event-tracking').split(',')[1].trim()
    }
  });
});