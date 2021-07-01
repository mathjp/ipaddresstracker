//ss

let map;
const searchInput = document.getElementById("searchInput");
const searchFor = document.getElementById("searchFor");
const searchResult = document.querySelector(".search-result");
const url =
  "https://geo.ipify.org/api/v1?apiKey=at_qsv2IIFl7QkTJ6WKlqIRsAfnJqYkT&ipAddress=";
const searchForIP = () => {
  showLoader();
  fetch(`${url}${searchInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      data && showDate(data);
    });
  // console.log(searchInput.value);
};
searchFor.addEventListener("click", searchForIP);

function showDate({ ip, location, isp }) {
  initMap(location.lat, location.lng);
  if (ip) {
    searchResult.innerHTML = `<div class="result-item">
    <span>ip address</span>
    <strong>${ip}</strong>
  </div>
  <div class="result-item">
    <span>location</span>
    <strong>${location.city}, ${location.city} ${location.postalCode}</strong>
  </div>
  <div class="result-item">
    <span>timezone</span>
    <strong>UTC ${location.timezone}</strong>
  </div>
  <div class="result-item">
    <span>isp</span>
    <strong>${isp}</strong>
  </div>`;
  }
  searchInput.value = "";
}

//34.04915
function initMap(lat = 34.04915, lng = -118.09462) {
  const myLatLng = { lat, lng };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 8,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
    icon: "../images/icon-location.svg",
  });
}

const showLoader = () => {
  searchResult.innerHTML = `<img style="width: 80px;margin: 0 auto" src="../images/loader.gif"/>`;
};
window.onload = function () {
  initMap();
};
