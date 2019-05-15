# safer-dom

<sup>**Social Media Photo by [freestocks.org](https://unsplash.com/@freestocks) on [Unsplash](https://unsplash.com/)**</sup>

[![Build Status](https://travis-ci.com/WebReflection/safer-dom.svg?branch=master)](https://travis-ci.com/WebReflection/safer-dom) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/safer-dom/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/safer-promise?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

Most common DOM operations made safe by [safer-function](https://github.com/WebReflection/safer-function#safer-function) and [safer-class](https://github.com/WebReflection/safer-class#safer-class).

### Example

```js
// list of exports
import {
  CustomEvent,
  Event,
  HTMLElement,
  window,
  document,
  childNodes,
  children,
  createElement,
  addEventListener,
  removeEventListener,
  dispatchEvent,
  appendChild,
  removeChild,
  insertBefore,
  querySelector,
  querySelectorAll
} from 'safer-dom';

const body = querySelector(document, 'body');
const nodes = childNodes(body);
```
