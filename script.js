const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const fileInput = document.getElementById('file-input');
const imageList = document.getElementById('image-list');
const message = document.getElementById('messages-section');

let markers = [];

function clearMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

fileInput.addEventListener('change', async () => {
  const files = fileInput.files;
  if (!files.length) return;

  message.textContent = '';
  imageList.innerHTML = '';
  clearMarkers();

  let anyLocationFound = false;

  for (const file of files) {
    try {
      const tags = await exifr.parse(file);

      // Adiciona imagem na galeria
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      imageList.appendChild(img);

      const lat = tags?.latitude;
      const lon = tags?.longitude;
      const dateTime = tags?.DateTimeOriginal || tags?.DateTime;

      if (lat && lon) {
        anyLocationFound = true;

        const marker = L.marker([lat, lon]).addTo(map);

        let popupText = `<strong>${file.name}</strong><br>Latitude: ${lat.toFixed(5)}<br>Longitude: ${lon.toFixed(5)}`;
        if (dateTime) {
          popupText += `<br>Data/Hora: ${dateTime}`;
        }
        marker.bindPopup(popupText);
        markers.push(marker);
      } else {
        console.log(`Arquivo "${file.name}" não tem dados GPS.`);
      }
    } catch (e) {
      console.error(`Erro lendo EXIF do arquivo ${file.name}`, e);
    }
  }

  if (anyLocationFound) {
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.5));
    setTimeout(() => map.invalidateSize(), 200);
  } else {
    message.textContent = 'Nenhuma localização GPS encontrada nas fotos selecionadas.';
    map.setView([0, 0], 2);
  }
});
