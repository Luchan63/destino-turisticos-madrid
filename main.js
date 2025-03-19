let latitud = 0;
let longitud = 0;
let mostrar;

let options = {
  enableHighAccuracy: true, // Precisión alta
  maximumAge: 0, // No usar caché, siempre pedir nueva ubicación
  timeout: 5000, // Aumentado a 5s para evitar expiraciones
};

function geolocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;

        mostrar.innerHTML = `
        Mi latitud: ${latitud} <br>
        Mi longitud: ${longitud}<br>
        Destino turístico más cercano: -Viridian-<br>
        Distancia: ${haversine(
          latitud,
          longitud,
          40.4423169,
          -3.6808958
        ).toFixed(2)} km
      `;
        console.log("Latitud actualizada:", latitud);
        console.log("Longitud actualizada:", longitud);
      },
      (error) => {
        console.error(`ERROR(${error.code}): ${error.message}`);
      },
      options
    );
  } else {
    console.error("Geolocalización no es soportada en este navegador.");
  }
}

// Actualización automática cada 5 segundos
setInterval(() => {
  console.log("Solicitando ubicación...");
  geolocation();
}, 5000); // Ahora cada 5 segundos para evitar saturación

function haversine(latOrigen, lonOrigen, latDestino, lonDestino) {
  const R = 6371; // Radio de la Tierra en km
  const toRad = (angle) => (angle * Math.PI) / 180;

  const dLat = toRad(latDestino - latOrigen);
  const dLon = toRad(lonDestino - lonOrigen);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(latOrigen)) *
      Math.cos(toRad(latDestino)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Esperar a que el DOM esté cargado antes de asignar `mostrar`
window.onload = () => {
  mostrar = document.getElementById("ubication");
  geolocation(); // Obtener la ubicación inicial
};
