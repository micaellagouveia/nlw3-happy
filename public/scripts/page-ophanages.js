// create map
const map = L.map("mapid").setView([-15.8113315, -48.0875141], 11);

// create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das Meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>'
);

// create and add marker
L.marker([-15.8113315, -48.0875141], { icon }).addTo(map).bindPopup(popup);
