/* HTML разметка для всплывающих окон адреса на карте */

export {
  contacts,
  defaultOpenZoom,
  defaultCloseZoom,
  kupecheskiyCoord,
  vavilonCoord,
  severniyCoord,
  kupecheskiyMarker,
  severniyMarker,
  vavilonMarker,
  severniyPopup,
  kupecheskiyPopup,
  vavilonPopup,
};

const contacts = document.querySelectorAll(".contact-item");
const defaultOpenZoom = 14;
const defaultCloseZoom = 15.5;
/* Координаты локаций */
const kupecheskiyCoord = [47.22110211539116, 39.71256922889912];
const vavilonCoord = [47.23245727300718, 39.6104870000007];
const severniyCoord = [47.282430441732645, 39.7181612608273];
const icon = L.icon({
  iconUrl: "img/section-contacts/map-point.svg",
  iconSize: [32, 32], // size of the icon
});

/* Маркеры локаций на карте */
const kupecheskiyMarker = L.marker([47.21960211509106, 39.71256922889912], {
  icon: icon,
});
const vavilonMarker = L.marker([47.23065727300718, 39.6104870000007], {
  icon: icon,
});
const severniyMarker = L.marker([47.280400441732645, 39.7181612608273], {
  icon: icon,
});

/* HTML разметка всплывающих окон при клике на локацию на карте */
const kupecheskiyPopup = `
<div class="map-location-popup map-location-popup--kupecheskiy">
    <div class="map-location-popup__name">Сана Центральный офис</div>
    <span class="map-location-popup__address">
        БЦ Купеческий Двор, Социалистическая ул., 74, 6 этаж, каб.
        605А
    </span>
    <a class="map-location-popup__phone" href="tel:88001230001">
        8 (800) 123-00-01
    </a>
    <div class="map-location-popup__time">
        <div>
            <span class="blue-text">Пн-Вс</span>
            <span>круглосуточно</span
        </div>
    </div>
</div>`;

const vavilonPopup = `
<div class="map-location-popup map-location-popup--vavilon">
    <div class="map-location-popup__name">Сана Экспресс</div>
    <span class="map-location-popup__address">
        ТЦ Золотой Вавилон, ул. Малиновского, 25, цокольноый этаж,
        слева от главного входа.
    </span>
    <a class="map-location-popup__phone" href="tel:88001230002">
        8 (800) 123-00-02
    </a>
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
</div>`;

const severniyPopup = `
<div class="map-location-popup map-location-popup--severniy">
    <div class="map-location-popup__name">Пункт приема</div>
    <span class="map-location-popup__address">
        Северный, просп. Космонавтов, 2/2, д 451
    </span>
    <a class="map-location-popup__phone" href="tel:88001230004">
        8 (800) 123-00-04
    </a>
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
`;
