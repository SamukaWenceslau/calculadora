import Calculadora  from "../src/Calculadora";


describe("Calculos básicos", () => {

  it("Deve retornar o resultado da soma de N valores", () => {
    let resultado = Calculadora.somar(10, 20, 30);
    expect(resultado).toEqual(60);
  })

  it("Deve retornar o resultado da subtração de N valores", () => {
    let resultado = Calculadora.subtrair(15, 30);
    expect(resultado).toEqual(-15);
  })

  


})