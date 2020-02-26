/* eslint-disable no-undef */
import { Circle } from './../src/triangle.js';

describe('Circle', () => {

  test('should take in an input and return it', () => {
    let circle = new Circle(1);
    expect(circle.returnRadius()).toEqual(1);
  });

});