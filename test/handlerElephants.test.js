const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('retorna a popularidade dos elefante', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('retorna null', () => {
    expect(handlerElephants('')).toEqual(null);
  });
  test('retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  test('retorna erro se não receber uma string', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
