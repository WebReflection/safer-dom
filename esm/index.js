import {call} from 'safer-function';
import saferClass from 'safer-class';

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

export {
  doc as document,
  defaultView as window,
  CE as CustomEvent,
  E as Event,
  HE as HTMLElement,
};

export const childNodes = where => call(getChildNodes, where);

export const children = where => call(getChildren, where);

export const createElement = doc.createElement.bind(doc);

export const addEventListener = (where, type, listener, options) => call(
  add, where, type, listener, options == null ? false : options
);

export const removeEventListener = (where, type, listener, options) => call(
  remove, where, type, listener, options == null ? false : options
);

export const dispatchEvent = (where, event) => call(
  dispatch, where, event
);

export const appendChild = (where, child) => call(
  app, where, child
);

export const removeChild = (where, child) => call(
  rem, where, child
);

export const insertBefore = (where, node, before) => call(
  ins, where, node, before
);

export const querySelector = (where, selector) => call(
  where === doc ? $ : query, where, selector
);

export const querySelectorAll = (where, selector) => call(
  where === doc ? $$ : queryAll, where, selector
);
