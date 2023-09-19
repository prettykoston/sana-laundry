import L from "leaflet";
import {
  contacts,
  defaultOpenZoom,
  defaultCloseZoom,
  kupecheskiyCoord,
  vavilonCoord,
  severniyCoord,
  kupecheskiyMarker,
  vavilonMarker,
  severniyMarker,
  severniyPopup,
  kupecheskiyPopup,
  vavilonPopup,
} from "./variables.js";

export default function initContactsMap() {
  /* Инициализация карты */
  const map = L.map("contacts-map", { attributionControl: false }).setView(
    [47.241, 39.712],
    11
  );

  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 0,
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: "png",
    }
  ).addTo(map);

  /* Посмотреть локацию на карте по координатам */
  function lookLocation(coordinates, marker) {
    map.setView(coordinates, defaultOpenZoom);
    marker.openPopup();
    setTimeout(() => {
      map.setView(coordinates, defaultCloseZoom);
    }, 1400);
  }

  /* Маркеры */
  /* Купеческий */
  kupecheskiyMarker.addTo(map).bindPopup(kupecheskiyPopup);

  /* Вавилон */
  vavilonMarker.addTo(map).bindPopup(vavilonPopup);

  /* Северный */
  severniyMarker.addTo(map).bindPopup(severniyPopup);

  /* К каждому айтему добавить клик листенер, который переместит карту к выбранной локации */
  contacts.forEach((c) => c.addEventListener("click", moveMapOnClick));

  /* В зависимости от кликнутого элемента переместить карту на определенную точку */
  function moveMapOnClick(event) {
    const isKupecheskiy = event.target.classList.contains(
      "contact-item--kupecheskiy"
    );
    const isVavilon = event.target.classList.contains("contact-item--vavilon");
    const isSeverniy = event.target.classList.contains(
      "contact-item--severniy"
    );

    switch (true) {
      case isKupecheskiy:
        lookLocation(kupecheskiyCoord, kupecheskiyMarker);
        break;

      case isVavilon:
        lookLocation(vavilonCoord, vavilonMarker);
        break;

      case isSeverniy:
        lookLocation(severniyCoord, severniyMarker);
        break;
    }
  }
}
