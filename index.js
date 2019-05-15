var saferDOM = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var call = Function.call;
  var bind = call.bind(call.bind);
  var apply = bind(call, call.apply);
  call = bind(call, call);

  /*! (c) Andrea Giammarchi - ISC */

  const {
    defineProperty,
    getPrototypeOf,
    getOwnPropertyDescriptor,
    getOwnPropertyNames,
    hasOwnProperty
  } = Object;

  const falsify = (descriptor, name) => {
    defineProperty(descriptor, name, {
      enumerable: true,
      value: false
    });
  };

  const updated = descriptor => {
    falsify(descriptor, 'configurable');
    if (call(hasOwnProperty, descriptor, 'writable'))
      falsify(descriptor, 'writable');
    return descriptor;
  };

  var saferObject = object => {
    const self = object;
    const names = [];
    const descriptors = [];
    do {
      getOwnPropertyNames(object).forEach(name => {
        if (!names.includes(name)) {
          names.push(name);
          descriptors.push(getOwnPropertyDescriptor(object, name));
        }
      });
    }
    while (object = getPrototypeOf(object));
    names.forEach((name, i) => {
      defineProperty(self, name, updated(descriptors[i]));
    });
    return self;
  };

  /*! (c) Andrea Giammarchi - ISC */

  var saferClass = Class => (
    saferObject(Class.prototype),
    saferObject(Class)
  );

  const {getOwnPropertyDescriptor: getOwnPropertyDescriptor$1} = Object;

  const {prototype} = Element;
  const {
    addEventListener: add, removeEventListener: remove,
    dispatchEvent: dispatch,
    appendChild: app, removeChild: rem,
    insertBefore: ins,
    querySelector: query, querySelectorAll: queryAll
  } = prototype;

  const getChildNodes = getOwnPropertyDescriptor$1(Node.prototype, 'childNodes').get;
  const getChildren = getOwnPropertyDescriptor$1(prototype, 'children').get;

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

  const childNodes = where => call(getChildNodes, where);

  const children = where => call(getChildren, where);

  const createElement = doc.createElement.bind(doc);

  const addEventListener = (where, type, listener, options) => call(
    add, where, type, listener, options == null ? false : options
  );

  const removeEventListener = (where, type, listener, options) => call(
    remove, where, type, listener, options == null ? false : options
  );

  const dispatchEvent = (where, event) => call(
    dispatch, where, event
  );

  const appendChild = (where, child) => call(
    app, where, child
  );

  const removeChild = (where, child) => call(
    rem, where, child
  );

  const insertBefore = (where, node, before) => call(
    ins, where, node, before
  );

  const querySelector = (where, selector) => call(
    where === doc ? $ : query, where, selector
  );

  const querySelectorAll = (where, selector) => call(
    where === doc ? $$ : queryAll, where, selector
  );

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  return index;

}({}));
