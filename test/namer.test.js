import { createName } from '../public/scripts/namer.js'

QUnit.module('NAMER MODULE', {})  // group all these tests together

QUnit.test('TEST createName()', assert => {
  const a = createName()
  const b = createName()
  const c = createName()
  assert.equal(a.length, 5, a + ' passed')
  assert.equal(b.length, 5, b + ' passed')
  assert.equal(c.length, 5, c + ' passed')
})