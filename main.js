let latitud = 0;
let longitud = 0;
let mostrar = document.getElementById("ubication");

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitud = position.coords.latitude;
      longitud = position.coords.longitude;
      mostrar.innerHTML = `
        Mi latitud: ${latitud} <br>
        Mi longitud: ${longitud}<br>
        Destino turístico más cercano: -Viridian-<br>
        Distancia: ${haversine(latitud, longitud, 40.4423169, -3.6808958).toFixed(2)} km
      `;
      console.log("Latitud:", latitud);
      console.log("Longitud:", longitud);
    },
    (error) => {
      console.error("Error obteniendo la ubicación:", error.message);
    }
  );
} else {
  console.error("Geolocalización no es soportada en este navegador.");
}

function haversine(latOrigen, lonOrigen, latDestino, lonDestino) {
  const R = 6371; // Radio de la Tierra en km
  const toRad = (angle) => (angle * Math.PI) / 180; // Convertir grados a radianes

  const dLat = toRad(latDestino - latOrigen);
  const dLon = toRad(lonDestino - lonOrigen);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(latOrigen)) *
      Math.cos(toRad(latDestino)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distancia en km
}