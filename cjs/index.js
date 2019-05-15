'use strict';
const {call} = require('safer-function');
const saferClass = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('safer-class'));

const {getOwnPropertyDescriptor} = Object;

const {prototype} = Element;
const {
  addEventListener: add, removeEventListener: remove,
  dispatchEvent: dispatch,
  appendChild: app, removeChild: rem,
  insertBefore: ins,
  querySelector: query, querySelectorAll: queryAll
} = prototype;

const getChildNodes = getOwnPropertyDescriptor(Node.prototype, 'childNodes').get;
const getChildren = getOwnPropertyDescriptor(prototype, 'children').get;

const doc = document;
const {defaultView, querySelector: $, querySelectorAll: $$} = doc;

const CE = saferClass(
  class SaferCustomEvent extends CustomEvent {}
);

const E = saferClass(
  class SaferEvent extends Event {}
);

const HE = saferClass(
  class SaferHTMLElement extends HTMLElement {}
);

exports.document = doc;
exports.window = defaultView;
exports.CustomEvent = CE;
exports.Event = E;
exports.HTMLElement = HE;

const childNodes = where => call(getChildNodes, where);
exports.childNodes = childNodes;

const children = where => call(getChildren, where);
exports.children = children;

const createElement = doc.createElement.bind(doc);
exports.createElement = createElement;

const addEventListener = (where, type, listener, options) => call(
  add, where, type, listener, options == null ? false : options
);
exports.addEventListener = addEventListener;

const removeEventListener = (where, type, listener, options) => call(
  remove, where, type, listener, options == null ? false : options
);
exports.removeEventListener = removeEventListener;

const dispatchEvent = (where, event) => call(
  dispatch, where, event
);
exports.dispatchEvent = dispatchEvent;

const appendChild = (where, child) => call(
  app, where, child
);
exports.appendChild = appendChild;

const removeChild = (where, child) => call(
  rem, where, child
);
exports.removeChild = removeChild;

const insertBefore = (where, node, before) => call(
  ins, where, node, before
);
exports.insertBefore = insertBefore;

const querySelector = (where, selector) => call(
  where === doc ? $ : query, where, selector
);
exports.querySelector = querySelector;

const querySelectorAll = (where, selector) => call(
  where === doc ? $$ : queryAll, where, selector
);
exports.querySelectorAll = querySelectorAll;
