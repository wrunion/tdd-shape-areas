/* eslint-disable no-undef */
import { Circle } from './../src/circle.js';

describe('Circle', () => {

  test('should take in an input and return it', () => {
    let circle = new Circle(1);
    expect(circle.radius).toEqual(1);
  });

});