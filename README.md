# Google Paper Ripple Animation

## Usage

Add ripple class to button or achor tag

```html
<!-- In Head tag -->
<link rel="stylesheet" href="./styles.css" />
<script src="./index.js" type="module"></script>
<!-- In Head tag -->

<button class="btn ripple">Paper Ripple</button>
```

Import reset.css and paper-ripple.css in your main stylessheet

```css
@import url(../reset.css);
@import url(./paper-ripple.css);
```

If you want to change the waves color change the bg property in css

```css
.btn {
	--bg: blue;
	background-color: hsl(0 0% 15% / 0.3);
	color: #fff;
	padding: 1.2em 2em;
	border-radius: 0.5em;
}
```

For Javascript

```js
import PaperRipple from './PaperRipple.js'

const buttons = document.querySelectorAll('.ripple')

PaperRipple(buttons)
```
