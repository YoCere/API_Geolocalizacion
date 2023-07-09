let myMap = L.map('myMap').setView([-17.78629,-63.18117], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  }).addTo(myMap);

myMap.doubleClickZoom.disable();

myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);
  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap);
});

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(getPosition, error, options);
}); 

const getPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

    var marcador = L.marker([latitude, longitude])
    marcador.addTo(myMap);

    setTimeout(() => {
      myMap.panTo(new L.LatLng(latitude , longitude));
    }, 500);
  }

const options = {
      enableHightAccuracy: true,
      timeout: 5000,
      maximunAge: 0
}
const error = (error) => console.log(error);