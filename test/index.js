const { assert } = require('chai');
const NodeBase = require('../index');

it('verify External module contract', () => {
  const { typeOrmLogger, TypeOrmConfigFactory } = NodeBase;

  assert.typeOf(typeOrmLogger, 'object');
  assert.typeOf(TypeOrmConfigFactory, 'function');
});
