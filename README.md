# bem-block
BEM CSS selector generator for use in React

Created a simple BEM library because all the string concatenation was driving me crazy.
BEM info: http://getbem.com/naming/

Example
```js
const myBlock = bem('my-block', 'some-modifier');
// or
const myBlock = bem('my-block', ['some-modifier', 'another-modifier']);
// or
const myBlock = bem('my-block', {
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
You can also nest blocks.
```js
  const anotherBlock = myBlock.block('another-block');
 
  anotherBlock('some-element', {
    my-modifier: true
  });
 ```
Produces `my-block__another_block__some-element my-block__another_block__some-element--my-modifier`
