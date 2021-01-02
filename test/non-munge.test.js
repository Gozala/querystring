const qs = require('..');

const testCases = [
  ['', {}],
  ['foo=bar&foo=baz', { foo: ['bar', 'baz'] }],
  ['blah=burp', { blah: 'burp' }],
  ['gragh=1&gragh=3&goo=2', { gragh: ['1', '3'], goo: '2' }],
  [
    'frappucino=muffin&goat%5B%5D=scone&pond=moose',
    { frappucino: 'muffin', 'goat[]': 'scone', pond: 'moose' }
  ],
  ['trololol=yes&lololo=no', { trololol: 'yes', lololo: 'no' }]
];

const sepratorCharacter = '&';
const equalCharacter = '=';

test.each(testCases)('[parse] non-munge %d', (stringified, objectified) => {
  expect(
    qs.parse(stringified, sepratorCharacter, equalCharacter, false)
  ).toStrictEqual(objectified);
});

test.each(testCases)('[stringify] non-munge %d', (stringified, objectified) => {
  expect(
    qs.stringify(objectified, sepratorCharacter, equalCharacter, false)
  ).toStrictEqual(stringified);
});
