// Enabling Bootstrap's tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Add map to index.html page
var map = L.map('map').setView([53.27, -6.20], 13);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);

// Get companies details from hidden div on index.html with id = data
const companiesArrayJson = document.getElementById("data").innerHTML.replaceAll("'", '"');
companies = JSON.parse(companiesArrayJson);

// Add marker to map for each company
var markers = [];
for (let i=0; i< companies.length; i++) {
  console.log(companies[i].organisation_name);
  markers[i] = L.marker([companies[i].latitude, companies[i].longitude]).addTo(map)
  .bindPopup(companies[i].organisation_name  + '<br>' + companies[i].web_address)
    .openPopup();
}



