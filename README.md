# bem-block
[![Build Status](https://travis-ci.org/SimonArdrey/bem-block.svg?branch=master)](https://travis-ci.org/SimonArdrey/bem-block)

BEM CSS class names generator for use in React

Created a simple BEM library because all the string concatenation was driving me crazy.
BEM info: http://getbem.com/naming/

## Install
`npm install bem-block --save`

## Usage
`import block from 'bem-block';`
or
`var block = require('bem-block');`

Example
```js
const myBlock = block('my-block', 'some-modifier', 'another-modifier');
// or
const myBlock = block('my-block', ['some-modifier', 'another-modifier']);
// or
const myBlock = block('my-block', {
  'some-modifier': true,
  'another-modifier': false,
});
```
Then in JSX
```js
<div className={myBlock()}>
  <div className={myBlock('some-element', 'and-a-modifier')}></div>
</div>
```
Will produce:
```html
<div class="my-block my-block--some-modifier">
  <div class="my-block__some-element my-block__some-element--and-a-modifier"></div>
</div>
```
