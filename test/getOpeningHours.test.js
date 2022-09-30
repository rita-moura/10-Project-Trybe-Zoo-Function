const getOpeningHours = require('../src/getOpeningHours');

const object = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  test('retona objeto se não for passado parametro', () => {
    expect(getOpeningHours()).toBe(object);
  });
});
