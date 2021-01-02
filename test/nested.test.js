const qs = require('..');

test('[parse] nested', () => {
  const f = qs.parse('a=b&q=x%3Dy%26y%3Dz');
  f.q = qs.parse(f.q);

  expect(f).toStrictEqual({ a: 'b', q: { x: 'y', y: 'z' } });
});

test('[parse] nested colon', () => {
  const f = qs.parse('a:b;q:x%3Ay%3By%3Az', ';', ':');
  f.q = qs.parse(f.q, ';', ':');

  expect(f).toStrictEqual({ a: 'b', q: { x: 'y', y: 'z' } });
});

test('[stringify] nested', () => {
  const f = qs.stringify({
    a: 'b',
    q: qs.stringify({
      x: 'y',
      y: 'z'
    })
  });

  expect(f).toStrictEqual('a=b&q=x%3Dy%26y%3Dz');
});

test('[stringify] nested colon', () => {
  var f = qs.stringify(
    {
      a: 'b',
      q: qs.stringify(
        {
          x: 'y',
          y: 'z'
        },
        ';',
        ':'
      )
    },
    ';',
    ':'
  );

  expect(f).toStrictEqual('a:b;q:x%3Ay%3By%3Az');
});
