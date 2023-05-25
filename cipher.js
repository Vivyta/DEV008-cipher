const cipher = {
  encode: function (desplazamiento, mensaje) {
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26)
    if (mensaje) {
      for (let i = 0; i < mensaje.length; i++) {
        if (letras.indexOf(mensaje[i]) !== -1) {
          const posicion = ((letras.indexOf(mensaje[i]) + desplazamiento) % 26);
          resultado += letras[posicion];
        }
        else
          resultado += mensaje[i]; //entrega el caracter ingresado que no es letra del abecedario
      }
      console.log(resultado)
      return resultado
    }
  },

  decode: function (desplazamiento, mensaje) {
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26);
    if (mensaje) {
      for (let i = 0; i < mensaje.length; i++) {
        if (letras.indexOf(mensaje[i]) !== -1) {
          const posicion = ((letras.indexOf(mensaje[i]) - desplazamiento) % 26);
          console.log({ posicion })
          resultado += letras[posicion];
        }
        else
          resultado += mensaje[i]; //entrega el caracter ingresado que no es letra del abecedario
      }
      console.log({ resultado })
      return resultado
    }
  },

}



//   let vuelta = mensaje.charCodeAt(i) + desplazamiento;
//   console.log("vuelta", vuelta)
//   let cifrado = String.fromCharCode(vuelta);
//   console.log("cifrado", cifrado)
//   resultado = resultado + cifrado;

// }
// console.log("resultado final", resultado)
// console.log(resultado)
// return "resultado"

export default cipher;
