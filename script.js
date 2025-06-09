// Inicializa o mapa no mundo
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const fileInput = document.getElementById('file-input');
const imageList = document.getElementById('image-list');
const message = document.getElementById('messages-section');

let markers = [];

function convertDMSToDD(dms, ref) {
  const degrees = dms[0];
  const minutes = dms[1];
  const seconds = dms[2];
  let dd = degrees + minutes / 60 + seconds / 3600;
  if (ref === 'S' || ref === 'W') {
    dd = -dd;
  }
  return dd;
}

function clearMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  if (!files.length) return;

  message.textContent = '';
  imageList.innerHTML = '';
  clearMarkers();

  let anyLocationFound = false;
  let filesProcessed = 0;

  Array.from(files).forEach(file => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayBuffer = event.target.result;

      let tags;
      try {
        tags = EXIF.readFromBinaryFile(arrayBuffer);
      } catch (e) {
        console.error('Erro ao ler EXIF:', e);
        tags = null;
      }

      // Cria a imagem na galeria
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      imageList.appendChild(img);

      const lat = tags?.GPSLatitude;
      const latRef = tags?.GPSLatitudeRef;
      const lon = tags?.GPSLongitude;
      const lonRef = tags?.GPSLongitudeRef;
      const dateTime = tags?.DateTimeOriginal || tags?.DateTime;

      if (lat && latRef && lon && lonRef) {
        anyLocationFound = true;

        const latitude = convertDMSToDD(lat, latRef);
        const longitude = convertDMSToDD(lon, lonRef);

        const marker = L.marker([latitude, longitude]).addTo(map);

        let popupText = `<strong>${file.name}</strong><br>Latitude: ${latitude.toFixed(5)}<br>Longitude: ${longitude.toFixed(5)}`;
        if (dateTime) {
          popupText += `<br>Data/Hora: ${dateTime}`;
        }
        marker.bindPopup(popupText);
        markers.push(marker);
      } else {
        console.log(`Arquivo "${file.name}" não tem dados GPS.`);
      }

      filesProcessed++;
      if (filesProcessed === files.length) {
        if (anyLocationFound) {
          const group = new L.featureGroup(markers);
          map.fitBounds(group.getBounds().pad(0.5));

          setTimeout(() => {
            map.invalidateSize();
          }, 200);
        } else {
          message.textContent = 'Nenhuma localização GPS encontrada nas fotos selecionadas.';
          map.setView([0, 0], 2);
        }
      }
    };

    reader.readAsArrayBuffer(file);
  });
});
