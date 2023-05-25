import cipher from './cipher.js';
//cipher.encode("hola", 1)
document.getElementById("mensaje").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
}, true);

document.getElementById("Cifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamientos").value;
  document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);

}, true);

document.getElementById("Descifrar").addEventListener('click', function () {
  const texto = document.getElementById("mensaje2").value;
  const desplazamiento = document.getElementById("desplazamientos").value;
  document.getElementById("mensaje-revelado").textContent = cipher.decode(desplazamiento, texto);
}, true);









