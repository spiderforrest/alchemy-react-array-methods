import { filterAu, filterOceania, filterYoungDogs, getYoungDogNames } from '../filter';
import { brands, countries, dogs } from '../data';

test.skip('filterOceania returns countries in Oceania', () => {
  expect(filterOceania(countries).map((elem) => elem.iso2)).toStrictEqual(['KI', 'MH', 'PF', 'MH']);
});

test.skip('filterAu returns countries that contain au', () => {
  expect(filterAu(countries).map((elem) => elem.name)).toStrictEqual([
    'Saudi Arabia',
    'Mauritania',
  ]);
});

test.skip('filterYoungDogs returns dogs that are less than 2 years old', () => {
  expect(filterYoungDogs(dogs)).toStrictEqual([
    { name: 'Spot', age: 2 },
    { name: 'Rover', age: 1 },
  ]);
});

test.skip('getYoungDogNames returns names of dogs that are less than 2 years old', () => {
  expect(getYoungDogNames(dogs)).toStrictEqual(['Spot', 'Rover']);
});
