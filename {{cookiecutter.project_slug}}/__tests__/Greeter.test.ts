/* eslint-disable no-undef */
import { Greeter } from '../src/index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});