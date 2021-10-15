//defino una constante altura minima
const alturaMinima: number = 1.3;
//vinculo el boton enviar del html
let btnEnv = document.getElementById("btnEnviar");
let alturaJugador: number = document.getElementById("altura");
btnEnv.addEventListener("click", () => {
  let respuesta: string = "";
  if (alturaJugador.value >= alturaMinima) {
    respuesta = "Puede Jugar";
  } else {
    respuesta = "No Puede Jugar";
  }
  let prntRes = document.getElementById("respuesta");
  prntRes.innerHTML = respuesta;
});
