const qs = require('..');

const testCases = [
  [
    'foo=918854443121279438895193',
    'foo=918854443121279438895193',
    { foo: '918854443121279438895193' }
  ],
  ['foo=bar', 'foo=bar', { foo: 'bar' }],
  ['foo=bar&foo=quux', 'foo=bar&foo=quux', { foo: ['bar', 'quux'] }],
  ['foo=1&bar=2', 'foo=1&bar=2', { foo: '1', bar: '2' }],
  [
    'my+weird+field=q1%212%22%27w%245%267%2Fz8%29%3F',
    "my%20weird%20field=q1!2%22'w%245%267%2Fz8)%3F",
    { 'my weird field': 'q1!2"\'w$5&7/z8)?' }
  ],
  ['foo%3Dbaz=bar', 'foo%3Dbaz=bar', { 'foo=baz': 'bar' }],
  ['foo=baz=bar', 'foo=baz%3Dbar', { foo: 'baz=bar' }],
  [
    'str=foo&arr=1&arr=2&arr=3&somenull=&undef=',
    'str=foo&arr=1&arr=2&arr=3&somenull=&undef=',
    { str: 'foo', arr: ['1', '2', '3'], somenull: '', undef: '' }
  ],
  [' foo = bar ', '%20foo%20=%20bar%20', { ' foo ': ' bar ' }],
  // disable test that fails ['foo=%zx', 'foo=%25zx', {'foo': '%zx'}],
  ['foo=%EF%BF%BD', 'foo=%EF%BF%BD', { foo: '\ufffd' }],
  // See: https://github.com/joyent/node/issues/1707
  [
    'hasOwnProperty=x&toString=foo&valueOf=bar&__defineGetter__=baz',
    'hasOwnProperty=x&toString=foo&valueOf=bar&__defineGetter__=baz',
    {
      hasOwnProperty: 'x',
      toString: 'foo',
      valueOf: 'bar',
      __defineGetter__: 'baz'
    }
  ],
  // See: https://github.com/joyent/node/issues/3058
  ['foo&bar=baz', 'foo=&bar=baz', { foo: '', bar: 'baz' }]
];

test.each(testCases)('[parse] canonical %d', (_, stringified, objectified) => {
  expect(qs.parse(stringified)).toStrictEqual(objectified);
});

test.each(testCases)('[stringify] canonical %d', (_, stringified, objectified) => {
  expect(qs.stringify(objectified)).toStrictEqual(stringified);
});
