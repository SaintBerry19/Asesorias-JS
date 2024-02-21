function contarHastaDiezSincrono() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    const inicio = new Date().getTime();
    while (new Date().getTime() < inicio + 1000);
  }
  console.log("Conteo síncrono terminado");
}

console.log("Inicio del conteo síncrono");
contarHastaDiezSincrono();
console.log("Esta línea espera a que termine el conteo síncrono");

async function contarHastaDiezAsincrono() {
  for (let i = 1; i <= 10; i++) {
    // Usamos setTimeout para simular un conteo asincrónico
    setTimeout(() => {
      console.log(i);
    }, i * 1000); // i * 1000 para que cada iteración se retrase un segundo más que la anterior
  }
  console.log(
    "Conteo asíncrono iniciado (la finalización se muestra de forma desincronizada)"
  );
}

console.log("Inicio del conteo asíncrono");
contarHastaDiezAsincrono();
console.log(
  "Esta línea se ejecuta inmediatamente después de iniciar el conteo asíncrono, sin esperar a que termine"
);
