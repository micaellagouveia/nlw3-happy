const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  srollWheelZoom: false,
  zoomControl: false,
};

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

/*Image gallery*/
function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão
  button.classList.add("active");
}
