# bem-block
BEM CSS class names generator for use in React

Created a simple BEM library because all the string concatenation was driving me crazy.
BEM info: http://getbem.com/naming/

Example
```js
const myBlock = block('my-block', 'some-modifier');
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
