const qs = require('..');

const extendedFunction = function () {};
extendedFunction.prototype = { a: 'b' };

const testCases = [
  [{ regexp: /./g }, 'regexp=', { regexp: '' }],
  [{ regexp: new RegExp('.', 'g') }, 'regexp=', { regexp: '' }],
  [{ fn: function () {} }, 'fn=', { fn: '' }],
  [{ fn: new Function('') }, 'fn=', { fn: '' }],
  [{ math: Math }, 'math=', { math: '' }],
  [{ e: extendedFunction }, 'e=', { e: '' }],
  [{ d: new Date() }, 'd=', { d: '' }],
  [{ d: Date }, 'd=', { d: '' }],
  [{ f: new Boolean(false), t: new Boolean(true) }, 'f=&t=', { f: '', t: '' }],
  [{ f: false, t: true }, 'f=false&t=true', { f: 'false', t: 'true' }],
  [{ n: null }, 'n=', { n: '' }],
  [{ nan: NaN }, 'nan=', { nan: '' }],
  [{ inf: Infinity }, 'inf=', { inf: '' }]
];

test.each(testCases)('[parse] weird-objects %d', (_, stringified, objectified) => {
  expect(qs.parse(stringified)).toStrictEqual(objectified);
});

test.each(testCases)(
  '[stringify] weird-objects %d',
  (_, stringified, objectified) => {
    expect(qs.stringify(objectified)).toStrictEqual(stringified);
  }
);
