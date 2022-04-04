let btnEnviar = document.getElementById("btnEnviar");
let rotulo2 = document.getElementById("rotulo2");
let dato = <HTMLInputElement>document.getElementById("dato");
let precio: number;
let porcentaje: number;
let descuento: number;

btnEnviar.addEventListener("click", () => {
  precio = Number(dato.value);
  porcentaje = precio * 0.1;
  descuento = precio - porcentaje;
  console.log("precio con descuento es " + descuento);
  rotulo2.innerHTML = "el precio con descuento es " + descuento;
  alert(descuento);
});
