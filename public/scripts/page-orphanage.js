const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    srollWheelZoom: false,
    zoomControl: false,
}

// create map
const map = L.map("mapid", options).setView([-15.8113315, -48.0875141], 11);

// create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-15.8113315, -48.0875141], { icon }).addTo(map);
