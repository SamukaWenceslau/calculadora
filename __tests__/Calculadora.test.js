import Calculadora  from "../src/Calculadora";


describe("Calculos básicos", () => {

  it("Deve retornar o resultado da soma de 2 valores", () => {
    let resultado = Calculadora.somar(15, 30);
    expect(resultado).toEqual(45);
  })

  it("Deve retornar o resultado da subtração de 2 valores", () => {
    let resultado = Calculadora.subtrair(15, 30);
    expect(resultado).toEqual(-15);
  })

  


})