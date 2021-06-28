 class Calculadora {
  
  somar(...valores) {
    let resultado = valores.reduce((v1, v2) => v1 + v2);
    return resultado;
  } 

  subtrair(...valores) {
    let resultado = valores.reduce((v1, v2) => v1 - v2);
    return resultado;
  } 

}

export default new Calculadora();