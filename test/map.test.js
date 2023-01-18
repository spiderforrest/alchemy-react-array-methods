import { brands, countries, dogs } from '../data';
import { getBrands, getCountryCodes, getCountryNames } from '../map';
import { getAverageAge } from '../reduce';

test.skip('getCountryNames should return the country names', () => {
  expect(getCountryNames(countries)).toStrictEqual([
    'Ecuador',
    'Lesotho',
    'Yemen',
    'Saudi Arabia',
    'Saint Kitts and Nevis',
    'Sierra Leone',
    'Saint Vincent and the Grenadines',
    'United Kingdom',
    'Jersey',
    'Gambia',
    'Kiribati',
    'Sri Lanka',
    'Burkina Faso',
    'Sao Tome and Principe',
    'Cape Verde',
    'Andorra',
    'Martinique',
    'Malaysia',
    'Mauritania',
    'Japan',
    'Heard Island and Mcdonald Islands',
    'Estonia',
    'Gibraltar',
    'Marshall Islands',
    'French Polynesia',
    'Bosnia and Herzegovina',
    'Marshall Islands',
  ]);
});

test.skip('getCountryCodes return a nested array of countries and their codes', () => {
  expect(getCountryCodes(countries)).toStrictEqual([
    ['Ecuador', 'EC'],
    ['Lesotho', 'LS'],
    ['Yemen', 'YE'],
    ['Saudi Arabia', 'SA'],
    ['Saint Kitts and Nevis', 'KN'],
    ['Sierra Leone', 'SL'],
    ['Saint Vincent and the Grenadines', 'VC'],
    ['United Kingdom', 'GB'],
    ['Jersey', 'JE'],
    ['Gambia', 'GM'],
    ['Kiribati', 'KI'],
    ['Sri Lanka', 'LK'],
    ['Burkina Faso', 'BF'],
    ['Sao Tome and Principe', 'ST'],
    ['Cape Verde', 'CV'],
    ['Andorra', 'AD'],
    ['Martinique', 'MQ'],
    ['Malaysia', 'MY'],
    ['Mauritania', 'MR'],
    ['Japan', 'JP'],
    ['Heard Island and Mcdonald Islands', 'HM'],
    ['Estonia', 'EE'],
    ['Gibraltar', 'GI'],
    ['Marshall Islands', 'MH'],
    ['French Polynesia', 'PF'],
    ['Bosnia and Herzegovina', 'BA'],
    ['Marshall Islands', 'MH'],
  ]);
});

test.skip('getBrands should return the list of brands', () => {
  expect(getBrands(brands)).toStrictEqual(['Nike', 'Puma', 'Adidas']);
});
