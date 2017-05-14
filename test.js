var tap = require('tap')
var block = require('./lib/index');

var myBlock = block('my-block', 'my-modifier');

tap.equals(myBlock(), 'my-block my-block--my-modifier');
var expected = 'my-block__my-element my-block__my-element--my-modifier1 my-block__my-element--my-modifier2';
tap.equals(myBlock('my-element', 'my-modifier1', 'my-modifier2'), expected);
tap.equals(myBlock('my-element', ['my-modifier1', 'my-modifier2']), expected);
tap.equals(myBlock('my-element', {
  'my-modifier1': true,
  'my-modifier2': 1,
  'my-modifier3': false,
  'my-modifier4': 0,
  'my-modifier5': null,
}), expected);

expected = 'my-block my-block--my-modifier1 my-block--my-modifier2';
tap.equals(block('my-block', 'my-modifier1', 'my-modifier2')(), expected);
tap.equals(block('my-block', ['my-modifier1', 'my-modifier2'])(), expected);
tap.equals(block('my-block', {
  'my-modifier1': true,
  'my-modifier2': 1,
  'my-modifier3': false,
  'my-modifier4': 0,
  'my-modifier5': null,
})(), expected);
