import Calculadora  from "../src/Calculadora";


describe("Calculos básicos", () => {

  it("Deve retornar o resultado da soma de 2 valores", () => {
    let resultado = Calculadora.somar(15, 30);
    expect(resultado).toEqual(45);
  })


})