const qs = require('..');

const testCases = [
  ['foo:bar', 'foo:bar', { foo: 'bar' }],
  ['foo:bar;foo:quux', 'foo:bar;foo:quux', { foo: ['bar', 'quux'] }],
  [
    'foo:1&bar:2;baz:quux',
    'foo:1%26bar%3A2;baz:quux',
    { foo: '1&bar:2', baz: 'quux' }
  ],
  ['foo%3Abaz:bar', 'foo%3Abaz:bar', { 'foo:baz': 'bar' }],
  ['foo:baz:bar', 'foo:baz%3Abar', { foo: 'baz:bar' }]
];

const sepratorCharacter = ';';
const equalCharacter = ':';

test.each(testCases)(
  "[parse] colon %d w/ septator ';' and equal ':'",
  (_, stringified, objectified) => {
    expect(qs.parse(stringified, sepratorCharacter, equalCharacter)).toStrictEqual(
      objectified
    );
  }
);

test.each(testCases)(
  "[stringify] colon %d w/ septator ';' and equal ':'",
  (_, stringified, objectified) => {
    expect(
      qs.stringify(objectified, sepratorCharacter, equalCharacter)
    ).toStrictEqual(stringified);
  }
);
