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
    expect(getOpeningHours()).toEqual(object);
  });
  test('retona a string esperada para Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  test('retona a string esperada para Tuesday', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  test('retona a string esperada para Wednesday', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  test('retona a string esperada para Thu', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow();
  });
  test('retona a string esperada Friday', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow();
  });
  test('retona a string esperada Saturday', () => {
    expect(() => getOpeningHours('Saturday', 'c9:00-AM')).toThrow();
  });
  test('retona a string esperada Sunday', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow();
  });
  test('retona a string esperada Monday', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow();
  });
  test('retona a string esperada Tuesday', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow();
  });
});
