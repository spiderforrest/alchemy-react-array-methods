import { getAverageAge, getSneaks } from '../reduce';
import { brands, countries, dogs } from '../data';

test.skip('getSneaks returns the list of sneaker brands', () => {
  expect(getSneaks(brands)).toStrictEqual([
    'Air Max',
    'Air Force',
    'Air Jordan',
    'Air Mag',
    'Pegasus',
    'Kobe',
    'Clyde',
    'Suede',
    'Roma',
    'California',
    'Ultraboost',
    'Gazelle',
    'Samba',
    'Superstar',
  ]);
});

test.skip('getAverageAge returns the average age of the dogs', () => {
  expect(getAverageAge(dogs)).toEqual(3.2);
});
