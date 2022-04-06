/*jshint esversion: 8 */

//* Global variables *//
var organisations = [];
var markers;
var map;

/**
     * This function adds a map to the div with an id of 'map'.
     * It gets the access token required for the map from an environmental variable set in env.py.
     * It uses an ajax request to consume an API in home.py which returns the access token.
     * It sends an alert if there is an error.
     *  */
function addMap() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            map = L.map('map').setView([53.27, -6.20], 13);
            const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: JSON.parse(this.response)
            }).addTo(map);
            addOrganisations(this.response, map);
        }
        else if(this.readyState == 4)
        alert(
            `Unfortunately the map is currently unavailable. 
Please try again later.`);
    };
    xhttp.open("GET", `${window.location.href}/api/get-access-token`, true);
    xhttp.send();
}

/**
 * Adds marker to map for each organisation in companies array.
 * Companies array is retrieved from the database via an API in home.py. 
 * When clicked organisation name and webaddress are displayed in a pop-up. 
 * @param {string} response 
 * @param {object} map 
 */
function addOrganisations(response, map) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            organisations = JSON.parse(this.response);
            load_nace_codes();
            markers = L.markerClusterGroup();
            addMarkers(organisations)
        }
        else if (this.readyState == 4)
            alert(
                `Unfortunately the list of organisations is currently unavailable.
Please try again later.`);
    };
    xhttp.open("GET", `${window.location.href}/api/get-organisations`, true);
    xhttp.send();
}


function addMarkers(organisations_list) {
    if (markers) {
        markers.clearLayers(organisations_list);
    }
    for (let i = 0; i < organisations_list.length; i++) {
        
        var marker = L.marker([organisations_list[i].latitude, organisations_list[i].longitude])
            .bindPopup(organisations_list[i].organisation_name + '<br>' + organisations_list[i].web_address)
            .openPopup();
        markers.addLayer(marker);
    }
    map.addLayer(markers);
}

/**
 *  Gets the value selected in the filter panel for nace code 1, 2 and 3.
 *  Selects only the organisations that match from the global list of organisations 
 */
function filterList() {
    const nace1 = document.querySelector('#nace-1-list');
    const nace2 = document.querySelector('#nace-2-list');
    const nace3 = document.querySelector('#nace-3-list');
    const location = document.querySelector('#location-list');

    var filteredList = organisations;
    if (nace1.value) {
        filteredList = organisations.filter(org => org.nace_1_label == nace1.value);
    }
    if (nace2.value) {
        filteredList = filteredList.filter(org => org.nace_2_label == nace2.value);
    }
    if (nace3.value) {
        filteredList = filteredList.filter(org => org.nace_3_label == nace3.value);
    }
    if (location.value) {
        filterLocation = organisations.filter(location => org.longitude && org.latitude == location.value);
    }
    addMarkers(filteredList);
}

/**
 * Clears the selected values in the nace code dropdowns in the filter panel
 */
function resetFilter() {
    document.getElementById("nace-1-list").value = '' ;
    document.getElementById("nace-2-list").value = '';
    document.getElementById("nace-3-list").value = '';
    document.getElementById("location-list").value = '';
}

/**
 * Reads through the global organisations list and builds a list of codes for nace code 1, 2 and 3.
 * Sets these lists as the options in the dropdowns in the filter panel 
 */
function load_nace_codes() {
    const nace1List = new Set();
    const nace2List = new Set();
    const nace3List = new Set();
    const locationList = new Set();

    nace1List.add("");
    nace2List.add("");
    nace3List.add("");
    locationList.add("");

    for (let org of organisations) {
        nace1List.add(org.nace_1_label);
        nace2List.add(org.nace_2_label);
        nace3List.add(org.nace_3_label);
        locationList.add(org.latitude + "," + org.longitude);
    }
    const nace1Ref = document.querySelector("#nace-1-list");
    const nace2Ref = document.querySelector("#nace-2-list");
    const nace3Ref = document.querySelector("#nace-3-list");
    const locationRef = document.querySelector("#location-list");

    let html = ``;
    nace1List.forEach( org => { html += `<option value="${org}">${org}</option>`; } );
    nace1Ref.innerHTML = html;

    html = ``;
    nace2List.forEach(org => { html += `<option value="${org}">${org}</option>`; } );
    nace2Ref.innerHTML = html;

    html = ``;
    nace3List.forEach(org => {html += `<option value="${org}">${org}</option>`; } );
    nace3Ref.innerHTML = html;

    html = ``;
    locationList.forEach(org => {html += `<option value="${org}">${org}</option>`; } );
    locationRef.innerHTML = html;
}

function toggleFilterPanelBtnText(){
    const buttonRef = document.getElementById("filterPanel");
    (buttonRef.innerHTML.includes("Open") ) ? buttonRef.innerHTML = "Close Filter Panel" : buttonRef.innerHTML = "Open Filter Panel";
}

// Enabling Bootstrap's tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl);
});

fadeOutToasts();

function fadeOutToasts(){
  let flashMessages = document.querySelectorAll('.alert.alert-info.flash-message');
  for (let message of flashMessages){
      setTimeout(()=>{message.style.opacity = '0';}, 3000);
      setTimeout(()=>{message.remove();}, 4000);
  }
}

if (document.getElementById("map") != null) {
    addMap();
}

document.querySelector('#filter').addEventListener('click', filterList);
document.querySelector('#reset').addEventListener('click', resetFilter);
document.querySelector('#filterPanel').addEventListener('click', toggleFilterPanelBtnText);
