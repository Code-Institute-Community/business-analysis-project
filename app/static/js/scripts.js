/*jshint esversion: 8 */

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
            const map = L.map('map').setView([53.27, -6.20], 13);
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
 * Adds marker to map for each company in companies array.
 * Companies array is retrieved from the database via an API in home.py. 
 * When clicked company name and webaddress are displayed in a pop-up. 
 * @param {string} response 
 * @param {object} map 
 */
function addOrganisations(response, map) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const organisations = JSON.parse(this.response);
            var markers = L.markerClusterGroup();
            for (let i = 0; i < organisations.length; i++) {
                var marker = L.marker([organisations[i].latitude, organisations[i].longitude])
                    .bindPopup(organisations[i].organisation_name + '<br>' + organisations[i].web_address)
                    .openPopup();
                markers.addLayer(marker);
            }
            map.addLayer(markers);
        }
        else if (this.readyState == 4)
            alert(
                `Unfortunately the list of organisations is currently unavailable. 
Please try again later.`);
    };
    xhttp.open("GET", `${window.location.href}/api/get-organisations`, true);
    xhttp.send();
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

