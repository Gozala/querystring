const qs = require('..');

const stringified = 'id=918854443121279438895193';
const objectified = { id: '918854443121279438895193' };

test('[parse] test basic', () => {
  expect(qs.parse(stringified)).toStrictEqual(objectified);
});

test('[stringify] test basic', () => {
  expect(qs.stringify(objectified)).toStrictEqual(stringified);
});

test('[stringify] does not throw on undefined', () => {
  let threw = false;

  try {
    qs.parse(undefined);
  } catch (error) {
    threw = true;
  }

  expect(threw).toStrictEqual(false);
});

test('[parse] undefined', () => {
  expect(qs.parse()).toStrictEqual({});
});
