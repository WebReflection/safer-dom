const basichtml = require('basichtml');
basichtml.init();
global.CustomEvent = basichtml.CustomEvent;
global.Element = basichtml.Element;
global.Event = basichtml.Event;
global.HTMLElement = basichtml.HTMLElement;
global.Node = basichtml.Node;
Object.defineProperty(
  Node.prototype, 'childNodes', {
    get() {
      return this.childNodes;
    },
    set(value) {
      Object.defineProperty(this, 'childNodes', {
        configurable: true,
        enumerable: true,
        writable: true,
        value
      });
    }
  }
);
Object.defineProperty(
  Element.prototype, 'children', {
    get() {
      return this.childNodes;
    }
  }
);

const {
  Event,
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
} = require('../cjs');

const {body} = document;
// body = querySelector(document, 'body');

const p = appendChild(body, createElement('p'));

addEventListener(p, 'click', click);
addEventListener(p, 'click', click, true);
dispatchEvent(p, new Event('click'));
dispatchEvent(p, new Event('click', {bubbles: true}));
removeEventListener(p, 'click', click, true);
removeEventListener(p, 'click', click);

console.assert(querySelector(document, 'p') === p);
console.assert(querySelector(body, 'p') === p);
console.assert(querySelectorAll(document, 'p')[0] === p);
console.assert(querySelectorAll(body, 'p')[0] === p);
console.assert(childNodes(body)[0] === p);
console.assert(children(body)[0] === p);

removeChild(body, p);
insertBefore(body, p);

function click() {
  console.log('click');
}
