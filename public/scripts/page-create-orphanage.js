// create map
const map = L.map("mapid").setView([-15.8113315, -48.0875141], 15);

// create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-upload
  const images = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada
  const newImage = images[images.length - 1].cloneNode(true);

  // verificar se o campo está vazio, se sim -> não adicionar ao container de imagens
  const input = newImage.children[0];

  if (input.value == "") return;

  // limpar o campo antes de add ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newImage);
}

function deleteUpload(event) {
  const span = event.currentTarget;

  // pegar o container para duplicar .new-upload
  const images = document.querySelectorAll(".new-upload");

  if (images <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// selecionar sim ou não
function toggleSelect(event) {
  // retirar a class .active (dos botões)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector("[name = open-on-weekends]");

  // verificar se sim ou não
  input.value = button.dataset.value;
}
