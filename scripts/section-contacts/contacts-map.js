import L from "leaflet";

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

  const icon = L.icon({
    iconUrl: "img/section-contacts/map-point.svg",
    iconSize: [32, 32], // size of the icon
  });

  /* 

  Купеческий
  
        <div class="map-location-popup map-location-popup--kupecheskiy">
            <div class="map-location-popup__name">Сана Центральный офис</div>
            <span class="map-location-popup__address"
              >БЦ Купеческий Двор, Социалистическая ул., 74, 6 этаж, каб.
              605А</span
            >
            <a class="map-location-popup__phone" href="tel:88001230001"
              >8 (800) 123-00-01</a
            >
            <div class="map-location-popup__time">
              <div>
                <span class="blue-text">Пн-Вс</span>
                <span>круглосуточно</span>
              </div>
            </div>
          </div>


  Вавилон

          <div class="map-location-popup map-location-popup--vavilon">
           <div class="contact-item__name">Сана Экспресс</div>

              <span class="contact-item__address"
                >ТЦ Золотой Вавилон, ул. Малиновского, 25, цокольноый этаж,
                слева от главного входа.</span
              >
              <a class="contact-item__phone" href="tel:88001230002"
                >8 (800) 123-00-02</a
              >
              <div class="contact-item__time">
                <div>
                  <span class="blue-text">Пн-Пт</span>
                  <span>с <time>9:00</time> - <time>21:00</time> </span>
                </div>

                <div>
                  <span class="blue-text">Сб-Вс</span>
                  <span>с <time>10:00</time> - <time>19:00</time> </span>
                </div>
              </div>
          </div>


  Северный

        <div class="map-location-popup map-location-popup--severniy">
           <div class="map-location-popup__name">Пункт приема</div>
              <span class="map-location-popup__address"
                >Северный, просп. Космонавтов, 2/2, д 451</span
              >
              <a class="map-location-popup__phone" href="tel:88001230004"
                >8 (800) 123-00-04</a
              >
              <div class="map-location-popup__time">
                <div>
                  <span class="blue-text">Пн-Пт</span>
                  <span>с <time>9:00</time> - <time>22:00</time></span>
                </div>
                <div>
                  <span class="blue-text">Сб-Вс</span>
                  <span>выходной</span>
                </div>
              </div>
          </div>
        
  
  
  */

  /* Маркеры (маленькие иконки) */
  const kupecheskiyMarker = L.marker([47.21960211509106, 39.71256922889912], {
    icon: icon,
  }).addTo(map);

  kupecheskiyMarker.bindPopup(`<div class="map-location-popup map-location-popup--kupecheskiy">
  <div class="map-location-popup__name">Сана Центральный офис</div>
  <span class="map-location-popup__address"
    >БЦ Купеческий Двор, Социалистическая ул., 74, 6 этаж, каб.
    605А</span
  >
  <a class="map-location-popup__phone" href="tel:88001230001"
    >8 (800) 123-00-01</a
  >
  <div class="map-location-popup__time">
    <div>
      <span class="blue-text">Пн-Вс</span>
      <span>круглосуточно</span>
    </div>
  </div>
</div>`);

  const vavilonMarker = L.marker([47.23065727300718, 39.6104870000007], {
    icon: icon,
  }).addTo(map);

  vavilonMarker.bindPopup(`<div class="map-location-popup map-location-popup--vavilon">
  <div class="map-location-popup__name">Сана Экспресс</div>

     <span class="map-location-popup__address"
       >ТЦ Золотой Вавилон, ул. Малиновского, 25, цокольноый этаж,
       слева от главного входа.</span
     >
     <a class="map-location-popup__phone" href="tel:88001230002"
       >8 (800) 123-00-02</a
     >
     <div class="map-location-popup__time">
       <div>
         <span class="blue-text">Пн-Пт</span>
         <span>с <time>9:00</time> - <time>21:00</time> </span>
       </div>

       <div>
         <span class="blue-text">Сб-Вс</span>
         <span>с <time>10:00</time> - <time>19:00</time> </span>
       </div>
     </div>
 </div>`);

  const severniyMarker = L.marker([47.280400441732645, 39.7181612608273], {
    icon: icon,
  }).addTo(map);

  

  severniyMarker.bindPopup(`<div class="map-location-popup map-location-popup--severniy">
  <div class="map-location-popup__name">Пункт приема</div>
     <span class="map-location-popup__address"
       >Северный, просп. Космонавтов, 2/2, д 451</span
     >
     <a class="map-location-popup__phone" href="tel:88001230004"
       >8 (800) 123-00-04</a
     >
     <div class="map-location-popup__time">
       <div>
         <span class="blue-text">Пн-Пт</span>
         <span>с <time>9:00</time> - <time>22:00</time></span>
       </div>
       <div>
         <span class="blue-text">Сб-Вс</span>
         <span>выходной</span>
       </div>
     </div>
 </div>
`);

  /* Add event listener to each of them */
  const contacts = document.querySelectorAll(".contact-item");
  contacts.forEach((c) => c.addEventListener("click", lookLocation));

  /* 



*/

  /*
   *
   *
   *
   *
   */

  /* В зависимости от кликнутого элемента переместить карту на определенную точку */
  function lookLocation(event) {
    const isKupecheskiy = event.target.classList.contains(
      "contact-item--kupecheskiy"
    );

    const isVavilon = event.target.classList.contains("contact-item--vavilon");

    const isSeverniy = event.target.classList.contains(
      "contact-item--severniy"
    );

    switch (true) {
      case isKupecheskiy:
        map.setView([47.21960211509106, 39.71256922889912], 14);
        setTimeout(() => {
          map.setView([47.21960211509106, 39.71256922889912], 15.5);
        }, 1400);
        break;

      case isVavilon:
        map.setView([47.23065727300718, 39.6104870000007], 14);

        setTimeout(() => {
          map.setView([47.23065727300718, 39.6104870000007], 15.5);
        }, 1400);
        break;

      case isSeverniy:
        map.setView([47.280400441732645, 39.7181612608273], 14);

        setTimeout(() => {
          map.setView([47.280400441732645, 39.7181612608273], 15.5);
        }, 1400);
        break;
    }
  }
}
