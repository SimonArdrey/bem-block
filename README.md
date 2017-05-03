# bem-block
BEM CSS selector generator for use in React

Created a simple BEM library because all the string concatenation was driving me crazy.
http://getbem.com/naming/
EXAMPLE:
Decl
```js
const css = bem('dashboard', 'fullscreen');
```
Then in JSX
```js
<div className={css()}>
  <div className={css('widget', 'small')}></div>
</div>
```
Will produce:
```html
<div class="dashboard dashboard--fullscreen">
  <div class="dashboard__widget dashboard__widget--small"></div>
</div>
```
