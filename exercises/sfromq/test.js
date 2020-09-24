const Stack = require('./index');

test('Queue is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const s = new Stack();
  expect(() => {
    s.push(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Stack();
  expect(() => {
    q.push(1);
    q.pop();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Stack();
  q.push(1);
  q.push(2);
  q.push(3);
  expect(q.pop()).toEqual(3);
  expect(q.pop()).toEqual(2);
  expect(q.pop()).toEqual(1);
  expect(q.pop()).toEqual(undefined);
});

test('peek returns, but does not remove, the first value', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.peek()).toEqual(2);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});
