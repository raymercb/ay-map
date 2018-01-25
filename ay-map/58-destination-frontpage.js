google.maps.event.addListenerOnce(map, 'idle', function(){
    $('#selectRegion').removeAttr('disabled');
});

function initSidebar() {
    console.log("initSidebar starts");
    //Filtering
    function isValidDestination(destination) {
        return destination.coordinates && destination.link && destination.country && destination.themes;
    }

    function filterByRegion(region, destinationArray) {
        return destinationArray
            .filter(isValidDestination)
            .filter(function(destination) { return Boolean(destination.continent) })
            .filter(function(destination) { 
                if(region === 'EU') return ['EU', 'FI', 'BL', 'SC'].indexOf(destination.continent) !== -1;
                else return destination.continent === region;
            });
    }

    //Helpers
    function isSelected(element) {
        return element !== '';
    }

    function isFirstInstance(elem, index, listOfElems) {
        return listOfElems.indexOf(elem) === index;
    }

    function parseCountryListId(id) {
        return id.toLowerCase().replace(/(\s|,)/g, '-').replace(/\(|\)/g, '').replace(/\./g, '')
    }

    function resetFilters() {
        mapElements.$selectRegion.val('');
    }

    function resetSidebar() {
        hideSingleDestination()
        mapElements.$mapRef.removeClass('sidebar-visible');
        mapElements.$noResultsContainer.addClass('is-hidden');
    }

    function animateIn(element) {
        element.removeClass('slide-out');
        element.addClass('slide-in');
    }

    function animateOut(element) {
        element.removeClass('slide-in');
        element.addClass('slide-out');
    }

    function showSingleDestination() {
        animateOut(mapElements.$destinationList);
        mapElements.$filteredDestinations.addClass('paddingless');
        mapElements.$closeButton.addClass('margin-top-right');
        mapElements.$resultHeading.addClass('is-vishidden');
        mapElements.$singleDestinationContainer.empty();
        animateIn(mapElements.$singleDestinationContainer);
    }

    function hideSingleDestination() {
        animateOut(mapElements.$singleDestinationContainer);
        mapElements.$filteredDestinations.removeClass('paddingless');
        mapElements.$closeButton.removeClass('margin-top-right');
        mapElements.$resultHeading.removeClass('is-vishidden');
        animateIn(mapElements.$destinationList);
    }

    //Markers
    function resetMarkers() {
        mapSettings.markersFiltered = mapSettings.markers;
    }

    function getMarker(destination, markerList) {
        return Object.keys(markerList).filter(function (marker) {
            return markerList[marker].id == destination.code
        });
    }

    function showFilteredMarkers() {
        //Loop all markers and show on to map according to filtered data.
        Object.keys(mapSettings.markers).forEach(function (marker) {
            if (mapSettings.markers[marker] == mapSettings.markersFiltered[marker]) {
                mapSettings.markers[marker].setVisible(true);
            } else {
                mapSettings.markers[marker].setVisible(false);
            }
        });
    }

    function findFirstMarker() {
        console.log("findFirstMarker!");
        //Find first marker on the list and center to it.
        console.log(mapSettings.markersFiltered);
        var firstMarker = mapSettings.markersFiltered[Object.keys(mapSettings.markersFiltered)[0]];
        centerToMarker(firstMarker);
    }

    function centerToMarker(marker) {
        pt = marker.getPosition();
        newpt = new google.maps.LatLng(pt.lat(), pt.lng());
        map.panTo(newpt);
    }

    function zoomToMarker(marker) {
        centerToMarker(marker);
        var currentZoom = map.getZoom();

        if (currentZoom > 5) {
            map.setZoom(5);
        }
    }

    function hoverMarker(event, marker) {
        new google.maps.event.trigger(marker, event.type);
        centerToMarker(marker);
    }

    function applyMarkerEvents(listElement, marker) {
        listElement.find('a').on('click touchend', function (e) {
            e.preventDefault();
            zoomToMarker(marker);
            buildSingleDestContent(marker);
        });
        listElement.find('a').on('keydown', function (event) {
            var code = event.which;

            if (code === 13 || code === 32) {
                zoomToMarker(marker);
                buildSingleDestContent(marker);
            }
        });
        listElement.find('a').on('mouseover', function (event) {
            hoverMarker(event, marker);
        });
        listElement.find('a').on('mouseout', function (event) {
            new google.maps.event.trigger(marker, event.type);
        });
    }

    //Building
    function buildSingleDestContent(destination) {
        showSingleDestination();
        var daily = Math.ceil(flightFrequency[destination.id] / 7),
            templateString = $('#single-destination-template').html().replace(/} }/g, '}}').replace(/{ {/g, '{{'); // LOCAL MUSTACHE CONFLICT FIX

            var theTemplate = Handlebars.compile(templateString);

            var data = {
                name: destination.name,
                nameOf: destPages[destination.id].nameOf,
                nameTo: destPages[destination.id].nameTo,
                country: destination.country,
                id: destination.id,
                dailyFlights: daily,
                airportLink: airportLinks[destination.id],
                travelGuideLink: travelGuides[destination.id],
                destPageLink: destPages[destination.id].link
            }

            if (offersAndPrices[destination.id]) {
                data.price = offersAndPrices[destination.id].price;
                data.offerId = offersAndPrices[destination.id].offerId;
            }

            var html = theTemplate(data)


            mapElements.$singleDestinationContainer.html(html);

        //Back arrow button action
        mapElements.$singleDestinationContainer.find('#back-container').on('click', function () {
            hideSingleDestination();
            if (mapElements.$destinationList.find('a')[0]) {
                mapElements.$destinationList.find('a')[0].focus();
            } else {
                mapElements.$noResultsContainer.removeClass('is-hidden');
            }
            ga('send', 'event', 'Destination map with sidebar', 'Click on button', 'Back to destination list from destination card');
        });

    }

    function createDestinationListElement(country, addTitle) {

        var templateString = $('#country-list-template').html().replace(/} }/g, '}}').replace(/{ {/g, '{{'); // LOCAL MUSTACHE CONFLICT FIX

        var theTemplate = Handlebars.compile(templateString);

        var html = theTemplate({
            countryName: country,
            countryCode: parseCountryListId(country),
            addTitle: addTitle
        })

        return html
    }

    function buildCountryList() {
        var countries = [];

        //Find all countries in data and create list. If there exits only one country, we don't need to show heading.
        countries = mapData.filtered
        .map(function (destination) {
            return destination.country;
        }).filter(isFirstInstance).sort();

        countries.forEach(function (country) {
            var hasTitle = countries.length > 1;
            mapElements.$destinationList.append(createDestinationListElement(country, hasTitle));
        });
        console.log("buildCountryList is ok!");

    }

    function buildContentFromData(region, destinationData) {
        //Change heading according to conditions
        mapElements.$resultHeading.text(continentNames[region]);

        //Create destination list element and append to country list
        destinationData.forEach(function (destination) {
            var list = $('#' + parseCountryListId(destination.country)),
            $listElement = $('<li><a tabindex="0" role="button" data-destination-code="' + destination.code + '">' + destination.name + '</a></li>');

            //Find referencing marker and copy it to filtered marker data. Apply events to marker.
            var marker = getMarker(destination, mapSettings.markers);
            var markerObj = mapSettings.markers[marker];
            mapSettings.markersFiltered[marker] = mapSettings.markers[marker];

            applyMarkerEvents($listElement, markerObj);

            list.append($listElement);
        });

    }

    function buildFilteredDestList(region) {
        //Reset list
        mapElements.$resultHeading.empty();
        mapElements.$destinationList.empty();
        mapElements.$noResultsContainer.addClass('is-hidden');

        //Build list of countries matching condition
        buildCountryList();
        animateIn(mapElements.$filteredDestinations);

        //If destination data exists, list elements under countries
        if (!$.isEmptyObject(mapData.filtered)) {

            buildContentFromData(region, mapData.filtered)

        } else {
            mapElements.$noResultsContainer.removeClass('is-hidden');
        }

        mapElements.$mapRef.addClass('sidebar-visible');
        mapElements.$mapStatus.text('Sidebar visible');
    }

    function filterByCondition(region) {
        //Reset temporary data
        console.log("0?");
        mapData.filtered = [];
        mapSettings.markersFiltered = {};
        hideSingleDestination();
        

        //Filter by condition and build the filtered sidebar. If conditions are not fulfilled, close sidebar.
        if (isSelected(region)) {            
            mapData.filtered = filterByRegion(region, mapData.array);
            console.log("1 - " + region);
            buildFilteredDestList(region);
            findFirstMarker();            
        } else {
            console.log("2");
            animateOut(mapElements.$filteredDestinations);
            mapElements.$mapRef.removeClass('sidebar-visible');
            mapElements.$mapStatus.text(sidebarHiddenText);
            resetMarkers();
            map.setZoom(1);
            map.setCenter({lat:40, lng:21.5});
            
        }

        showFilteredMarkers();
    }

    $('#selectRegion').on('change', function() {
        // NOTE:: why is this undefined on my page but defined on theirs?
        // Mine:
        // {context: document, selector: "#selectRegion"}
        // Theirs:
        // 
        filterByCondition(mapElements.$selectRegion.val());

        if( $('#selectRegion').val() == '' ) {
            ga('send', 'event', 'Destination map with sidebar', 'Filter Selected Category', 'Filtered all destinations');
        } else {
            ga('send', 'event', 'Destination map with sidebar', 'Filter Selected Category', 'Filtered ' + $('#selectRegion').val() + ' destinations');
        }
        
        map.setZoom(3);

        $('#result-heading').attr('tabindex', '-1').focus();

        setTimeout(function() { 
            $('.destination-list li a').on('click touchend keyup', function(e) {
                e.preventDefault();

                ga('send', 'event', 'Destination map with sidebar', 'Click on link', 'Clicked ' + $(this).data('destination-code') + ' destination link from sidebar');
                console.log();

                if (e.which === 13 || e.type === 'click' || e.type === 'touchend') {
                    $('#filtered-destinations').scrollTop(0);
                    $('.offer-block__link h3').attr('tabindex', '-1').focus();
                }
            });

        }, 1000);
    });

    //Sidebar close button action
    $('#close-container').on('click', function () {
        animateOut(mapElements.$filteredDestinations);
        mapElements.$mapStatus.text(sidebarHiddenText);
        resetSidebar();
        resetMarkers();
        showFilteredMarkers();

        ga('send', 'event', 'Destination map with sidebar', 'Click on button', 'Close button');
    });

    //Click marker on the map
    $('#markerTrigger').on('markerMapClick', function (event, marker) {
        animateIn(mapElements.$filteredDestinations);
        mapElements.$mapRef.addClass('sidebar-visible');
        zoomToMarker(marker);
        buildSingleDestContent(marker);

        ga('send', 'event', 'Destination map with sidebar', 'Click on map marker', marker.name);

        if ( mapElements.$selectRegion.val() == '' ) {
            $('#back-container').remove();
        }
    });
}