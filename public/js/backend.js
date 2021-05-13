(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.esm.js ***!
  \***********************************************************/
/*! exports provided: Alert, AsyncLoad, Button, Carousel, ClassToggler, Collapse, Dropdown, Modal, Popover, Scrollspy, Sidebar, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncLoad", function() { return AsyncLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassToggler", function() { return ClassToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollspy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/*!
  * CoreUI v3.3.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */



function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "" + obj;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href');
    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = parseFloat(transitionDuration);
  var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  return (obj[0] || obj).nodeType;
};

var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
  var called = false;
  var durationPadding = 5;
  var emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    var elementStyle = getComputedStyle(element);
    var parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {
  return function () {};
};

var reflow = function reflow(element) {
  return element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
    return jQuery;
  }

  return null;
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.key === 'undefined') {
        element.key = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.key.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.key === 'undefined') {
        return null;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    delete: function _delete(element, key) {
      if (typeof element.key === 'undefined') {
        return;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.key;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData.delete(instance, key);
  }
};

/* istanbul ignore file */
var find = Element.prototype.querySelectorAll;
var findOne = Element.prototype.querySelector; // MSEdge resets defaultPrevented flag upon dispatchEvent call if at least one listener is attached

var defaultPreventedPreservedOnDispatch = function () {
  var e = new CustomEvent('Bootstrap', {
    cancelable: true
  });
  var element = document.createElement('div');
  element.addEventListener('Bootstrap', function () {
    return null;
  });
  e.preventDefault();
  element.dispatchEvent(e);
  return e.defaultPrevented;
}();

var scopeSelectorRegex = /:scope\b/;

var supportScopeQuery = function () {
  var element = document.createElement('div');

  try {
    element.querySelectorAll(':scope *');
  } catch (_) {
    return false;
  }

  return true;
}();

if (!supportScopeQuery) {
  find = function find(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelectorAll(selector);
    }

    var hasId = Boolean(this.id);

    if (!hasId) {
      this.id = getUID('scope');
    }

    var nodeList = null;

    try {
      selector = selector.replace(scopeSelectorRegex, "#" + this.id);
      nodeList = this.querySelectorAll(selector);
    } finally {
      if (!hasId) {
        this.removeAttribute('id');
      }
    }

    return nodeList;
  };

  findOne = function findOne(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelector(selector);
    }

    var matches = find.call(this, selector);

    if (typeof matches[0] !== 'undefined') {
      return matches[0];
    }

    return null;
  };
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var $ = getjQuery();
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector) {
  if (delegationSelector === void 0) {
    delegationSelector = null;
  }

  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.indexOf(typeEvent) > -1;

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      delegation = _normalizeParams[0],
      originalHandler = _normalizeParams[1],
      typeEvent = _normalizeParams[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.indexOf(namespace) > -1) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.charAt(0) === '.';

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.indexOf(handlerKey) > -1) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var typeEvent = event.replace(stripNameRegex, '');
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.indexOf(typeEvent) > -1;
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();

      if (!defaultPreventedPreservedOnDispatch) {
        Object.defineProperty(evt, 'defaultPrevented', {
          get: function get() {
            return true;
          }
        });
      }
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'asyncLoad';
var VERSION = '3.2.2';
var DATA_KEY = 'coreui.asyncLoad';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var CLASS_NAME_ACTIVE = 'c-active';
var CLASS_NAME_NAV_DROPDOWN_TOGGLE = 'c-sidebar-nav-dropdown-toggle';
var CLASS_NAME_NAV_LINK = 'c-sidebar-nav-link';
var CLASS_NAME_SHOW = 'c-show';
var CLASS_NAME_VIEW_SCRIPT = 'view-script';
var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
var EVENT_XHR_STATUS = 'xhr';
var SELECTOR_NAV_DROPDOWN = '.c-sidebar-nav-dropdown';
var SELECTOR_NAV_LINK = '.c-xhr-link, .c-sidebar-nav-link';
var SELECTOR_NAV_ITEM = '.c-sidebar-nav-item';
var SELECTOR_VIEW_SCRIPT = '.view-script';
var Default = {
  defaultPage: 'main.html',
  errorPage: '404.html',
  subpagesDirectory: 'views/'
};

var AsyncLoad = /*#__PURE__*/function () {
  function AsyncLoad(element, config) {
    this._config = this._getConfig(config);
    this._element = element; // eslint-disable-next-line no-restricted-globals

    var url = location.hash.replace(/^#/, ''); // eslint-disable-next-line no-negated-condition

    if (url !== '') {
      this._setUpUrl(url);
    } else {
      this._setUpUrl(this._config.defaultPage);
    }

    this._addEventListeners();
  } // Getters


  var _proto = AsyncLoad.prototype;

  // Private
  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2({}, Default), config);
    return config;
  };

  _proto._loadPage = function _loadPage(url) {
    var _this = this;

    var element = this._element;
    var config = this._config;

    var loadScripts = function loadScripts(src, element) {
      if (element === void 0) {
        element = 0;
      }

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src[element];
      script.className = CLASS_NAME_VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign, unicorn/prefer-add-event-listener

      script.onload = script.onreadystatechange = function () {
        if (!_this.readyState || _this.readyState === 'complete') {
          if (src.length > element + 1) {
            loadScripts(src, element + 1);
          }
        }
      };

      var body = document.getElementsByTagName('body')[0];
      body.appendChild(script);
    };

    var removeScripts = function removeScripts() {
      var oldScripts = document.querySelectorAll(SELECTOR_VIEW_SCRIPT);

      if (oldScripts.length) {
        oldScripts.forEach(function (oldScript) {
          oldScript.remove();
        });
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open('GET', config.subpagesDirectory + url);
    var event = new CustomEvent(EVENT_XHR_STATUS, {
      detail: {
        url: url,
        status: xhr.status
      }
    });
    element.dispatchEvent(event); // eslint-disable-next-line unicorn/prefer-add-event-listener

    xhr.onload = function (result) {
      if (xhr.status === 200) {
        event = new CustomEvent(EVENT_XHR_STATUS, {
          detail: {
            url: url,
            status: xhr.status
          }
        });
        element.dispatchEvent(event);
        var wrapper = document.createElement('div');
        wrapper.innerHTML = result.target.response; // eslint-disable-next-line unicorn/prefer-spread

        var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
          return script.attributes.getNamedItem('src').nodeValue;
        });
        wrapper.querySelectorAll('script').forEach(function (script) {
          return script.remove(script);
        });
        window.scrollTo(0, 0);
        element.innerHTML = '';
        element.appendChild(wrapper);
        removeScripts();

        if (scripts.length) {
          loadScripts(scripts);
        }

        window.location.hash = url;
      } else {
        window.location.href = config.errorPage;
      }
    };

    xhr.send();
  };

  _proto._setUpUrl = function _setUpUrl(url) {
    url = url.replace(/^\//, '').split('?')[0]; // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(SELECTOR_NAV_LINK)).forEach(function (element) {
      element.classList.remove(CLASS_NAME_ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(SELECTOR_NAV_LINK)).forEach(function (element) {
      element.classList.remove(CLASS_NAME_ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(SELECTOR_NAV_DROPDOWN)).forEach(function (element) {
      element.classList.remove(CLASS_NAME_SHOW);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(SELECTOR_NAV_DROPDOWN)).forEach(function (element) {
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(element.querySelectorAll("a[href*=\"" + url + "\"]")).length > 0) {
        element.classList.add(CLASS_NAME_SHOW);
      }
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(SELECTOR_NAV_ITEM + " a[href*=\"" + url + "\"]")).forEach(function (element) {
      element.classList.add(CLASS_NAME_ACTIVE);
    });

    this._loadPage(url);
  };

  _proto._loadBlank = function _loadBlank(url) {
    window.open(url);
  };

  _proto._loadTop = function _loadTop(url) {
    window.location = url;
  };

  _proto._update = function _update(link) {
    if (link.href !== '#') {
      if (typeof link.dataset.toggle === 'undefined' || link.dataset.toggle === 'null') {
        if (link.target === '_top') {
          this._loadTop(link.href);
        } else if (link.target === '_blank') {
          this._loadBlank(link.href);
        } else {
          this._setUpUrl(link.getAttribute('href'));
        }
      }
    }
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_NAV_LINK, function (event) {
      event.preventDefault();
      var link = event.target;

      if (!link.classList.contains(CLASS_NAME_NAV_LINK)) {
        link = link.closest(SELECTOR_NAV_LINK);
      }

      if (!link.classList.contains(CLASS_NAME_NAV_DROPDOWN_TOGGLE) && link.getAttribute('href') !== '#') {
        _this2._update(link);
      }
    });
  } // Static
  ;

  AsyncLoad._asyncLoadInterface = function _asyncLoadInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new AsyncLoad(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  AsyncLoad.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      AsyncLoad._asyncLoadInterface(this, config);
    });
  };

  _createClass(AsyncLoad, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }]);

  return AsyncLoad;
}();

var $$1 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .asyncLoad to jQuery only if jQuery is present
 */

if ($$1) {
  var JQUERY_NO_CONFLICT = $$1.fn[NAME];
  $$1.fn[NAME] = AsyncLoad.jQueryInterface;
  $$1.fn[NAME].Constructor = AsyncLoad;

  $$1.fn[NAME].noConflict = function () {
    $$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return AsyncLoad.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'alert';
var VERSION$1 = '3.2.2';
var DATA_KEY$1 = 'coreui.alert';
var EVENT_KEY$1 = "." + DATA_KEY$1;
var DATA_API_KEY$1 = '.data-api';
var SELECTOR_DISMISS = '[data-dismiss="alert"]';
var EVENT_CLOSE = "close" + EVENT_KEY$1;
var EVENT_CLOSED = "closed" + EVENT_KEY$1;
var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
var CLASSNAME_ALERT = 'alert';
var CLASSNAME_FADE = 'fade';
var CLASSNAME_SHOW = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function () {
  function Alert(element) {
    this._element = element;

    if (this._element) {
      Data.setData(element, DATA_KEY$1, this);
    }
  } // Getters


  var _proto = Alert.prototype;

  // Public
  _proto.close = function close(element) {
    var rootElement = element ? this._getRootElement(element) : this._element;

    var customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$1);
    this._element = null;
  } // Private
  ;

  _proto._getRootElement = function _getRootElement(element) {
    return getElementFromSelector(element) || element.closest("." + CLASSNAME_ALERT);
  };

  _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
    return EventHandler.trigger(element, EVENT_CLOSE);
  };

  _proto._removeElement = function _removeElement(element) {
    var _this = this;

    element.classList.remove(CLASSNAME_SHOW);

    if (!element.classList.contains(CLASSNAME_FADE)) {
      this._destroyElement(element);

      return;
    }

    var transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, TRANSITION_END, function () {
      return _this._destroyElement(element);
    });
    emulateTransitionEnd(element, transitionDuration);
  };

  _proto._destroyElement = function _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, EVENT_CLOSED);
  } // Static
  ;

  Alert.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$1);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  };

  Alert.handleDismiss = function handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  };

  Alert.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$1);
  };

  _createClass(Alert, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$1;
    }
  }]);

  return Alert;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
var $$2 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .alert to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$2) {
  var JQUERY_NO_CONFLICT$1 = $$2.fn[NAME$1];
  $$2.fn[NAME$1] = Alert.jQueryInterface;
  $$2.fn[NAME$1].Constructor = Alert;

  $$2.fn[NAME$1].noConflict = function () {
    $$2.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Alert.jQueryInterface;
  };
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  matches: function matches(element, selector) {
    return element.matches(selector);
  },
  find: function find$1(selector, element) {
    var _ref;

    if (element === void 0) {
      element = document.documentElement;
    }

    return (_ref = []).concat.apply(_ref, find.call(element, selector));
  },
  findOne: function findOne$1(selector, element) {
    if (element === void 0) {
      element = document.documentElement;
    }

    return findOne.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;

    var children = (_ref2 = []).concat.apply(_ref2, element.children);

    return children.filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (this.matches(next, selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }
};

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'button';
var VERSION$2 = '3.2.2';
var DATA_KEY$2 = 'coreui.button';
var EVENT_KEY$2 = "." + DATA_KEY$2;
var DATA_API_KEY$2 = '.data-api';
var CLASS_NAME_ACTIVE$1 = 'active';
var CLASS_NAME_DISABLED = 'disabled';
var CLASS_NAME_FOCUS = 'focus';
var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
var SELECTOR_DATA_TOGGLE = '[data-toggle="buttons"]';
var SELECTOR_INPUT = 'input:not([type="hidden"])';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_BUTTON = '.btn';
var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
var EVENT_FOCUS_DATA_API = "focus" + EVENT_KEY$2 + DATA_API_KEY$2;
var EVENT_BLUR_DATA_API = "blur" + EVENT_KEY$2 + DATA_API_KEY$2;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function () {
  function Button(element) {
    this._element = element;
    Data.setData(element, DATA_KEY$2, this);
  } // Getters


  var _proto = Button.prototype;

  // Public
  _proto.toggle = function toggle() {
    var triggerChangeEvent = true;
    var addAriaPressed = true;

    var rootElement = this._element.closest(SELECTOR_DATA_TOGGLE);

    if (rootElement) {
      var input = SelectorEngine.findOne(SELECTOR_INPUT, this._element);

      if (input && input.type === 'radio') {
        if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$1)) {
          triggerChangeEvent = false;
        } else {
          var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE, rootElement);

          if (activeElement) {
            activeElement.classList.remove(CLASS_NAME_ACTIVE$1);
          }
        }

        if (triggerChangeEvent) {
          if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains(CLASS_NAME_DISABLED) || rootElement.classList.contains(CLASS_NAME_DISABLED)) {
            return;
          }

          input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$1);
          EventHandler.trigger(input, 'change');
        }

        input.focus();
        addAriaPressed = false;
      }
    }

    if (addAriaPressed) {
      this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE$1));
    }

    if (triggerChangeEvent) {
      this._element.classList.toggle(CLASS_NAME_ACTIVE$1);
    }
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$2);
    this._element = null;
  } // Static
  ;

  Button.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$2);

      if (!data) {
        data = new Button(this);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  };

  Button.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$2);
  };

  _createClass(Button, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$2;
    }
  }]);

  return Button;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_BUTTON);
  var data = Data.getData(button, DATA_KEY$2);

  if (!data) {
    data = new Button(button);
  }

  data.toggle();
});
EventHandler.on(document, EVENT_FOCUS_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
  var button = event.target.closest(SELECTOR_BUTTON);

  if (button) {
    button.classList.add(CLASS_NAME_FOCUS);
  }
});
EventHandler.on(document, EVENT_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
  var button = event.target.closest(SELECTOR_BUTTON);

  if (button) {
    button.classList.remove(CLASS_NAME_FOCUS);
  }
});
var $$3 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .button to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$3) {
  var JQUERY_NO_CONFLICT$2 = $$3.fn[NAME$2];
  $$3.fn[NAME$2] = Button.jQueryInterface;
  $$3.fn[NAME$2].Constructor = Button;

  $$3.fn[NAME$2].noConflict = function () {
    $$3.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Button.jQueryInterface;
  };
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-" + chr.toLowerCase();
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-" + normalizeDataKey(key), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-" + normalizeDataKey(key));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = _objectSpread2({}, element.dataset);

    Object.keys(attributes).forEach(function (key) {
      attributes[key] = normalizeData(attributes[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-" + normalizeDataKey(key)));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  },
  toggleClass: function toggleClass(element, className) {
    if (!element) {
      return;
    }

    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
};

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'carousel';
var VERSION$3 = '3.2.2';
var DATA_KEY$3 = 'coreui.carousel';
var EVENT_KEY$3 = "." + DATA_KEY$3;
var DATA_API_KEY$3 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default$1 = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var DIRECTION_NEXT = 'next';
var DIRECTION_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var EVENT_SLIDE = "slide" + EVENT_KEY$3;
var EVENT_SLID = "slid" + EVENT_KEY$3;
var EVENT_KEYDOWN = "keydown" + EVENT_KEY$3;
var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$3;
var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$3;
var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$3;
var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$3;
var EVENT_TOUCHEND = "touchend" + EVENT_KEY$3;
var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$3;
var EVENT_POINTERUP = "pointerup" + EVENT_KEY$3;
var EVENT_DRAG_START = "dragstart" + EVENT_KEY$3;
var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$3 + DATA_API_KEY$3;
var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_RIGHT = 'carousel-item-right';
var CLASS_NAME_LEFT = 'carousel-item-left';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function () {
  function Carousel(element, config) {
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._element = element;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

    this._addEventListeners();

    Data.setData(element, DATA_KEY$3, this);
  } // Getters


  var _proto = Carousel.prototype;

  // Public
  _proto.next = function next() {
    if (!this._isSliding) {
      this._slide(DIRECTION_NEXT);
    }
  };

  _proto.nextWhenVisible = function nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  };

  _proto.prev = function prev() {
    if (!this._isSliding) {
      this._slide(DIRECTION_PREV);
    }
  };

  _proto.pause = function pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  };

  _proto.to = function to(index) {
    var _this = this;

    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, function () {
        return _this.to(index);
      });
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

    this._slide(direction, this._items[index]);
  };

  _proto.dispose = function dispose() {
    EventHandler.off(this._element, EVENT_KEY$3);
    Data.removeData(this._element, DATA_KEY$3);
    this._items = null;
    this._config = null;
    this._element = null;
    this._interval = null;
    this._isPaused = null;
    this._isSliding = null;
    this._activeElement = null;
    this._indicatorsElement = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2({}, Default$1), config);
    typeCheckConfig(NAME$3, config, DefaultType);
    return config;
  };

  _proto._handleSwipe = function _handleSwipe() {
    var absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    var direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0; // swipe left

    if (direction > 0) {
      this.prev();
    } // swipe right


    if (direction < 0) {
      this.next();
    }
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
        return _this2._keydown(event);
      });
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
        return _this2.pause(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
        return _this2.cycle(event);
      });
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  };

  _proto._addTouchEventListeners = function _addTouchEventListeners() {
    var _this3 = this;

    var start = function start(event) {
      if (_this3._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this3.touchStartX = event.clientX;
      } else if (!_this3._pointerEvent) {
        _this3.touchStartX = event.touches[0].clientX;
      }
    };

    var move = function move(event) {
      // ensure swiping with one touch and not pinching
      if (event.touches && event.touches.length > 1) {
        _this3.touchDeltaX = 0;
      } else {
        _this3.touchDeltaX = event.touches[0].clientX - _this3.touchStartX;
      }
    };

    var end = function end(event) {
      if (_this3._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this3.touchDeltaX = event.clientX - _this3.touchStartX;
      }

      _this3._handleSwipe();

      if (_this3._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        _this3.pause();

        if (_this3.touchTimeout) {
          clearTimeout(_this3.touchTimeout);
        }

        _this3.touchTimeout = setTimeout(function (event) {
          return _this3.cycle(event);
        }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
      EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
        return end(event);
      });

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
        return move(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
        return end(event);
      });
    }
  };

  _proto._keydown = function _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    switch (event.key) {
      case ARROW_LEFT_KEY:
        event.preventDefault();
        this.prev();
        break;

      case ARROW_RIGHT_KEY:
        event.preventDefault();
        this.next();
        break;
    }
  };

  _proto._getItemIndex = function _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  };

  _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
    var isNextDirection = direction === DIRECTION_NEXT;
    var isPrevDirection = direction === DIRECTION_PREV;

    var activeIndex = this._getItemIndex(activeElement);

    var lastItemIndex = this._items.length - 1;
    var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    var delta = direction === DIRECTION_PREV ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this._items.length;
    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  };

  _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
    var targetIndex = this._getItemIndex(relatedTarget);

    var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget: relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  };

  _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      var indicators = SelectorEngine.find(SELECTOR_ACTIVE$1, this._indicatorsElement);

      for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove(CLASS_NAME_ACTIVE$2);
      }

      var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

      if (nextIndicator) {
        nextIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      }
    }
  };

  _proto._slide = function _slide(direction, element) {
    var _this4 = this;

    var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeElementIndex = this._getItemIndex(activeElement);

    var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

    var nextElementIndex = this._getItemIndex(nextElement);

    var isCycling = Boolean(this._interval);
    var directionalClassName;
    var orderClassName;
    var eventDirectionName;

    if (direction === DIRECTION_NEXT) {
      directionalClassName = CLASS_NAME_LEFT;
      orderClassName = CLASS_NAME_NEXT;
      eventDirectionName = DIRECTION_LEFT;
    } else {
      directionalClassName = CLASS_NAME_RIGHT;
      orderClassName = CLASS_NAME_PREV;
      eventDirectionName = DIRECTION_RIGHT;
    }

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

      if (nextElementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = nextElementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }

      var transitionDuration = getTransitionDurationFromElement(activeElement);
      EventHandler.one(activeElement, TRANSITION_END, function () {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        _this4._isSliding = false;
        setTimeout(function () {
          EventHandler.trigger(_this4._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        }, 0);
      });
      emulateTransitionEnd(activeElement, transitionDuration);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    }

    if (isCycling) {
      this.cycle();
    }
  } // Static
  ;

  Carousel.carouselInterface = function carouselInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$3);

    var _config = _objectSpread2(_objectSpread2({}, Default$1), Manipulator.getDataAttributes(element));

    if (typeof config === 'object') {
      _config = _objectSpread2(_objectSpread2({}, _config), config);
    }

    var action = typeof config === 'string' ? config : _config.slide;

    if (!data) {
      data = new Carousel(element, _config);
    }

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError("No method named \"" + action + "\"");
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  };

  Carousel.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  };

  Carousel.dataApiClickHandler = function dataApiClickHandler(event) {
    var target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    var config = _objectSpread2(_objectSpread2({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

    var slideIndex = this.getAttribute('data-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Data.getData(target, DATA_KEY$3).to(slideIndex);
    }

    event.preventDefault();
  };

  Carousel.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$3);
  };

  _createClass(Carousel, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$3;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }]);

  return Carousel;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Data.getData(carousels[i], DATA_KEY$3));
  }
});
var $$4 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .carousel to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$4) {
  var JQUERY_NO_CONFLICT$3 = $$4.fn[NAME$3];
  $$4.fn[NAME$3] = Carousel.jQueryInterface;
  $$4.fn[NAME$3].Constructor = Carousel;

  $$4.fn[NAME$3].noConflict = function () {
    $$4.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Carousel.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$4 = 'class-toggler';
var VERSION$4 = '3.2.2';
var DATA_KEY$4 = 'coreui.class-toggler';
var EVENT_KEY$4 = "." + DATA_KEY$4;
var DATA_API_KEY$4 = '.data-api';
var DefaultType$1 = {
  addClass: '(null|array|string)',
  breakpoints: '(null|array|string)',
  removeClass: '(null|array|string)',
  responsive: '(null|boolean)',
  target: '(null|string)',
  toggleClass: '(null|array|string)'
};
var Default$2 = {
  addClass: null,
  breakpoints: ['', 'sm', 'md', 'lg', 'xl'],
  removeClass: null,
  responsive: false,
  target: 'body',
  toggleClass: null
};
var CLASS_NAME_CLASS_TOGGLER = 'c-class-toggler';
var EVENT_CLASS_ADDED = 'classadded';
var EVENT_CLASS_REMOVED = 'classremoved';
var EVENT_CLASS_TOGGLE = 'classtoggle';
var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
var SELECTOR_CLASS_TOGGLER = '.c-class-toggler';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ClassToggler = /*#__PURE__*/function () {
  function ClassToggler(element, config) {
    this._element = element;
    this._config = this._getConfig(config);
    Data.setData(element, DATA_KEY$4, this);
  } // Getters


  var _proto = ClassToggler.prototype;

  // Public
  _proto.add = function add() {
    var _this = this;

    var target = this._target();

    var classNames = this._config.addClass.replace(/\s/g, '').split(',');

    classNames.forEach(function (className) {
      target.classList.add(className);

      _this._customEvent(EVENT_CLASS_ADDED, target, true, className);
    });
  };

  _proto.remove = function remove() {
    var _this2 = this;

    var target = this._target();

    var classNames = this._config.removeClass.replace(/\s/g, '').split(',');

    classNames.forEach(function (className) {
      if (_this2._config.responsive) {
        _this2._updateResponsiveClassNames(className).forEach(function (className) {
          target.classList.remove(className);

          _this2._customEvent(EVENT_CLASS_REMOVED, target, false, className);
        });
      } else {
        target.classList.remove(className);

        _this2._customEvent(EVENT_CLASS_REMOVED, target, false, className);
      }
    });
  };

  _proto.toggle = function toggle() {
    var _this3 = this;

    var target = this._target();

    var classNames = this._config.toggleClass.replace(/\s/g, '').split(',');

    if (this._config.responsive) {
      classNames.forEach(function (className) {
        var responsiveClassNames = _this3._updateResponsiveClassNames(className);

        if (responsiveClassNames.filter(function (className) {
          return target.classList.contains(className);
        }).length) {
          _this3._updateResponsiveClassNames(className).forEach(function (className) {
            _this3._config.removeClass = className;

            _this3.remove();

            _this3._customEvent(EVENT_CLASS_TOGGLE, target, false, className);
          });
        } else {
          _this3._config.addClass = className;

          _this3.add();

          _this3._customEvent(EVENT_CLASS_TOGGLE, target, true, className);
        }
      });
    } else {
      classNames.forEach(function (className) {
        if (target.classList.contains(className)) {
          _this3._config.removeClass = className;

          _this3.remove();

          _this3._customEvent(EVENT_CLASS_TOGGLE, target, false, className);
        } else {
          _this3._config.addClass = className;

          _this3.add();

          _this3._customEvent(EVENT_CLASS_TOGGLE, target, true, className);
        }
      });
    }
  };

  _proto.class = function _class() {
    this._config.toggleClass = this._config.class;

    if (this._element.getAttribute('responsive')) {
      this._config.responsive = this._element.getAttribute('responsive');
    }

    this.toggle();
  } // Private
  ;

  _proto._target = function _target() {
    if (this._config.target === 'body') {
      return document.querySelector(this._config.target);
    }

    if (this._config.target === '_parent') {
      return this._element.parentNode;
    }

    return document.querySelector(this._config.target);
  };

  _proto._customEvent = function _customEvent(eventName, target, add, className) {
    var event = new CustomEvent(eventName, {
      detail: {
        target: target,
        add: add,
        className: className
      }
    });
    target.dispatchEvent(event);
  };

  _proto._breakpoint = function _breakpoint(className) {
    var breakpoints = this._config.breakpoints;
    return breakpoints.filter(function (breakpoint) {
      return breakpoint.length > 0;
    }).filter(function (breakpoint) {
      return className.includes(breakpoint);
    })[0];
  };

  _proto._breakpoints = function _breakpoints(className) {
    var breakpoints = this._config.breakpoints;
    return breakpoints.slice(0, breakpoints.indexOf(breakpoints.filter(function (breakpoint) {
      return breakpoint.length > 0;
    }).filter(function (breakpoint) {
      return className.includes(breakpoint);
    })[0]) + 1);
  };

  _proto._updateResponsiveClassNames = function _updateResponsiveClassNames(className) {
    var bp = this._breakpoint(className);

    return this._breakpoints(className).map(function (breakpoint) {
      return breakpoint.length > 0 ? className.replace(bp, breakpoint) : className.replace("-" + bp, breakpoint);
    });
  };

  _proto._includesResponsiveClass = function _includesResponsiveClass(className) {
    var _this4 = this;

    return this._updateResponsiveClassNames(className).filter(function (className) {
      return _this4._config.target.contains(className);
    });
  } // Static
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
    return config;
  };

  ClassToggler.classTogglerInterface = function classTogglerInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$4);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new ClassToggler(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  ClassToggler.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      ClassToggler.classTogglerInterface(this, config);
    });
  };

  _createClass(ClassToggler, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$4;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$1;
    }
  }]);

  return ClassToggler;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_CLASS_TOGGLER, function (event) {
  event.preventDefault();
  event.stopPropagation();
  var toggler = event.target;

  if (!toggler.classList.contains(CLASS_NAME_CLASS_TOGGLER)) {
    toggler = toggler.closest(SELECTOR_CLASS_TOGGLER);
  }

  if (typeof toggler.dataset.addClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'add');
  }

  if (typeof toggler.dataset.removeClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'remove');
  }

  if (typeof toggler.dataset.toggleClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'toggle');
  }

  if (typeof toggler.dataset.class !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'class');
  }
});
var $$5 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .c-class-toggler to jQuery only if jQuery is present
 */

if ($$5) {
  var JQUERY_NO_CONFLICT$4 = $$5.fn[NAME$4];
  $$5.fn[NAME$4] = ClassToggler.jQueryInterface;
  $$5.fn[NAME$4].Constructor = ClassToggler;

  $$5.fn[NAME$4].noConflict = function () {
    $$5.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return ClassToggler.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'collapse';
var VERSION$5 = '3.2.2';
var DATA_KEY$5 = 'coreui.collapse';
var EVENT_KEY$5 = "." + DATA_KEY$5;
var DATA_API_KEY$5 = '.data-api';
var Default$3 = {
  toggle: true,
  parent: ''
};
var DefaultType$2 = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var EVENT_SHOW = "show" + EVENT_KEY$5;
var EVENT_SHOWN = "shown" + EVENT_KEY$5;
var EVENT_HIDE = "hide" + EVENT_KEY$5;
var EVENT_HIDDEN = "hidden" + EVENT_KEY$5;
var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
var CLASS_NAME_SHOW$1 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.show, .collapsing';
var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function () {
  function Collapse(element, config) {
    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1 + "[href=\"#" + element.id + "\"]," + (SELECTOR_DATA_TOGGLE$1 + "[data-target=\"#" + element.id + "\"]"));
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }

    Data.setData(element, DATA_KEY$5, this);
  } // Getters


  var _proto = Collapse.prototype;

  // Public
  _proto.toggle = function toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW$1)) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.show = function show() {
    var _this = this;

    if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var actives;
    var activesData;

    if (this._parent) {
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
        if (typeof _this._config.parent === 'string') {
          return elem.getAttribute('data-parent') === _this._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    var container = SelectorEngine.findOne(this._selector);

    if (actives) {
      var tempActiveData = actives.filter(function (elem) {
        return container !== elem;
      });
      activesData = tempActiveData[0] ? Data.getData(tempActiveData[0], DATA_KEY$5) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.setData(elemActive, DATA_KEY$5, null);
        }
      });
    }

    var dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(function (element) {
        element.classList.remove(CLASS_NAME_COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$1);

      _this._element.style[dimension] = '';

      _this.setTransitioning(false);

      EventHandler.trigger(_this._element, EVENT_SHOWN);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = "scroll" + capitalizedDimension;
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
    this._element.style[dimension] = this._element[scrollSize] + "px";
  };

  _proto.hide = function hide() {
    var _this2 = this;

    if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (startEvent.defaultPrevented) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$1);

    var triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !elem.classList.contains(CLASS_NAME_SHOW$1)) {
          trigger.classList.add(CLASS_NAME_COLLAPSED);
          trigger.setAttribute('aria-expanded', false);
        }
      }
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this2.setTransitioning(false);

      _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this2._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(_this2._element, EVENT_HIDDEN);
    };

    this._element.style[dimension] = '';
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.setTransitioning = function setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$5);
    this._config = null;
    this._parent = null;
    this._element = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2({}, Default$3), config);
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME$5, config, DefaultType$2);
    return config;
  };

  _proto._getDimension = function _getDimension() {
    return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
  };

  _proto._getParent = function _getParent() {
    var _this3 = this;

    var parent = this._config.parent;

    if (isElement(parent)) {
      // it's a jQuery object
      if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
        parent = parent[0];
      }
    } else {
      parent = SelectorEngine.findOne(parent);
    }

    var selector = SELECTOR_DATA_TOGGLE$1 + "[data-parent=\"" + parent + "\"]";
    SelectorEngine.find(selector, parent).forEach(function (element) {
      var selected = getElementFromSelector(element);

      _this3._addAriaAndCollapsedClass(selected, [element]);
    });
    return parent;
  };

  _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
    if (!element || !triggerArray.length) {
      return;
    }

    var isOpen = element.classList.contains(CLASS_NAME_SHOW$1);
    triggerArray.forEach(function (elem) {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static
  ;

  Collapse.collapseInterface = function collapseInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$5);

    var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), Manipulator.getDataAttributes(element)), typeof config === 'object' && config ? config : {});

    if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Collapse.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Collapse.collapseInterface(this, config);
    });
  };

  Collapse.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$5);
  };

  _createClass(Collapse, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }]);

  return Collapse;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$1, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }

  var triggerData = Manipulator.getDataAttributes(this);
  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    var data = Data.getData(element, DATA_KEY$5);
    var config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
var $$6 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .collapse to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$6) {
  var JQUERY_NO_CONFLICT$5 = $$6.fn[NAME$5];
  $$6.fn[NAME$5] = Collapse.jQueryInterface;
  $$6.fn[NAME$5].Constructor = Collapse;

  $$6.fn[NAME$5].noConflict = function () {
    $$6.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Collapse.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$6 = 'dropdown';
var VERSION$6 = '3.2.2';
var DATA_KEY$6 = 'coreui.dropdown';
var EVENT_KEY$6 = "." + DATA_KEY$6;
var DATA_API_KEY$6 = '.data-api';
var ESCAPE_KEY = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY);
var EVENT_HIDE$1 = "hide" + EVENT_KEY$6;
var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$6;
var EVENT_SHOW$1 = "show" + EVENT_KEY$6;
var EVENT_SHOWN$1 = "shown" + EVENT_KEY$6;
var EVENT_CLICK = "click" + EVENT_KEY$6;
var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$6 + DATA_API_KEY$6;
var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$6;
var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$6;
var CLASS_NAME_DISABLED$1 = 'disabled';
var CLASS_NAME_SHOW$2 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPRIGHT = 'dropright';
var CLASS_NAME_DROPLEFT = 'dropleft';
var CLASS_NAME_HEADER = 'c-header';
var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
var CLASS_NAME_NAVBAR = 'navbar';
var CLASS_NAME_POSITION_STATIC = 'position-static';
var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
var SELECTOR_FORM_CHILD = '.dropdown form';
var SELECTOR_HEADER_NAV = '.c-header-nav';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = 'top-start';
var PLACEMENT_TOPEND = 'top-end';
var PLACEMENT_BOTTOM = 'bottom-start';
var PLACEMENT_BOTTOMEND = 'bottom-end';
var PLACEMENT_RIGHT = 'right-start';
var PLACEMENT_LEFT = 'left-start';
var Default$4 = {
  offset: [0, 0],
  flip: true,
  boundary: 'scrollParent',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null
};
var DefaultType$3 = {
  offset: '(array|function)',
  flip: 'boolean',
  boundary: '(string|element)',
  reference: '(string|element)',
  display: 'string',
  popperConfig: '(null|object)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function () {
  function Dropdown(element, config) {
    this._element = element;
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
    this._inHeader = this._detectHeader();

    this._addEventListeners();

    Data.setData(element, DATA_KEY$6, this);
  } // Getters


  var _proto = Dropdown.prototype;

  // Public
  _proto.toggle = function toggle() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$1)) {
      return;
    }

    var isActive = this._menu.classList.contains(CLASS_NAME_SHOW$2);

    Dropdown.clearMenus();

    if (isActive) {
      return;
    }

    this.show();
  };

  _proto.show = function show() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$1) || this._menu.classList.contains(CLASS_NAME_SHOW$2)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var showEvent = EventHandler.trigger(parent, EVENT_SHOW$1, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    } // Disable totally Popper.js for Dropdown in Navbar


    if (!this._inNavbar && !this._inHeader) {
      if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"] === 'undefined') {
        throw new TypeError('CoreUI\'s dropdowns require Popper.js (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = this._config.reference; // Check if it's jQuery element

        if (typeof this._config.reference.jquery !== 'undefined') {
          referenceElement = this._config.reference[0];
        }
      } // If boundary is not `scrollParent`, then set position to `static`
      // to allow the menu to "escape" the scroll parent's boundaries
      // https://github.com/twbs/bootstrap/issues/24251


      if (this._config.boundary !== 'scrollParent') {
        parent.classList.add(CLASS_NAME_POSITION_STATIC);
      }

      this._popper = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(referenceElement, this._menu, this._getPopperConfig());
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      var _ref;

      (_ref = []).concat.apply(_ref, document.body.children).forEach(function (elem) {
        return EventHandler.on(elem, 'mouseover', null, noop());
      });
    }

    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_HEADER_NAV)) {
      var _ref2;

      (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (elem) {
        return EventHandler.on(elem, 'mouseover', null, noop());
      });
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    Manipulator.toggleClass(this._menu, CLASS_NAME_SHOW$2);
    Manipulator.toggleClass(parent, CLASS_NAME_SHOW$2);
    EventHandler.trigger(parent, EVENT_SHOWN$1, relatedTarget);
  };

  _proto.hide = function hide() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED$1) || !this._menu.classList.contains(CLASS_NAME_SHOW$2)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    }

    if (this._popper) {
      this._popper.destroy();
    }

    Manipulator.toggleClass(this._menu, CLASS_NAME_SHOW$2);
    Manipulator.toggleClass(parent, CLASS_NAME_SHOW$2);
    EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$6);
    EventHandler.off(this._element, EVENT_KEY$6);
    this._element = null;
    this._menu = null;

    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  };

  _proto.update = function update() {
    this._inNavbar = this._detectNavbar();
    this._inHeader = this._detectHeader();

    if (this._popper) {
      this._popper.update();
    }
  } // Private
  ;

  _proto._addEventListeners = function _addEventListeners() {
    var _this = this;

    EventHandler.on(this._element, EVENT_CLICK, function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.toggle();
    });
  };

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
    typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
    return config;
  };

  _proto._getMenuElement = function _getMenuElement() {
    var parent = Dropdown.getParentFromElement(this._element);
    return SelectorEngine.findOne(SELECTOR_MENU, parent);
  };

  _proto._getPlacement = function _getPlacement() {
    var parentDropdown = this._element.parentNode;
    var placement = PLACEMENT_BOTTOM; // Handle dropup

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      placement = PLACEMENT_TOP;

      if (this._menu.classList.contains(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_TOPEND;
      }
    } else if (parentDropdown.classList.contains(CLASS_NAME_DROPRIGHT)) {
      placement = PLACEMENT_RIGHT;
    } else if (parentDropdown.classList.contains(CLASS_NAME_DROPLEFT)) {
      placement = PLACEMENT_LEFT;
    } else if (this._menu.classList.contains(CLASS_NAME_MENURIGHT)) {
      placement = PLACEMENT_BOTTOMEND;
    }

    return placement;
  };

  _proto._detectNavbar = function _detectNavbar() {
    return Boolean(this._element.closest("." + CLASS_NAME_NAVBAR));
  };

  _proto._detectHeader = function _detectHeader() {
    return Boolean(this._element.closest("." + CLASS_NAME_HEADER));
  };

  _proto._getOffset = function _getOffset() {
    var _this2 = this;

    var offset = [];

    if (typeof this._config.offset === 'function') {
      offset = function offset(_ref3) {
        var placement = _ref3.placement,
            reference = _ref3.reference,
            popper = _ref3.popper;
        return _this2._config.offset({
          placement: placement,
          reference: reference,
          popper: popper
        });
      };
    } else {
      offset = this._config.offset;
    }

    return offset;
  };

  _proto._getPopperConfig = function _getPopperConfig() {
    var popperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'flip',
        enabled: this._config.flip
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }]
    }; // Disable Popper.js if we have a static display

    if (this._config.display === 'static') {
      popperConfig.modifiers = {
        name: 'applyStyles',
        enabled: false
      };
    }

    return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
  } // Static
  ;

  Dropdown.dropdownInterface = function dropdownInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$6);

    var _config = typeof config === 'object' ? config : null;

    if (!data) {
      data = new Dropdown(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Dropdown.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Dropdown.dropdownInterface(this, config);
    });
  };

  Dropdown.clearMenus = function clearMenus(event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
      return;
    }

    var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$2);

    for (var i = 0, len = toggles.length; i < len; i++) {
      var parent = Dropdown.getParentFromElement(toggles[i]);
      var context = Data.getData(toggles[i], DATA_KEY$6);
      var relatedTarget = {
        relatedTarget: toggles[i]
      };

      if (event && event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      if (!context) {
        continue;
      }

      var dropdownMenu = context._menu;

      if (!parent.classList.contains(CLASS_NAME_SHOW$2)) {
        continue;
      }

      if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.key === TAB_KEY) && parent.contains(event.target)) {
        continue;
      }

      var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

      if (hideEvent.defaultPrevented) {
        continue;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref4;

        (_ref4 = []).concat.apply(_ref4, document.body.children).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', null, noop());
        });
      }

      toggles[i].setAttribute('aria-expanded', 'false');

      if (context._popper) {
        context._popper.destroy();
      }

      dropdownMenu.classList.remove(CLASS_NAME_SHOW$2);
      parent.classList.remove(CLASS_NAME_SHOW$2);
      EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
    }
  };

  Dropdown.getParentFromElement = function getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
  };

  Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED$1)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this);
    var isActive = parent.classList.contains(CLASS_NAME_SHOW$2);

    if (event.key === ESCAPE_KEY) {
      var button = this.matches(SELECTOR_DATA_TOGGLE$2) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$2)[0];
      button.focus();
      Dropdown.clearMenus();
      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
      return;
    }

    var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

    if (!items.length) {
      return;
    }

    var index = items.indexOf(event.target);

    if (event.key === ARROW_UP_KEY && index > 0) {
      // Up
      index--;
    }

    if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
      // Down
      index++;
    } // index is -1 if the first keydown is an ArrowUp


    index = index === -1 ? 0 : index;
    items[index].focus();
  };

  Dropdown.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$6);
  };

  _createClass(Dropdown, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$6;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }]);

  return Dropdown;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$6, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$2, function (event) {
  event.preventDefault();
  event.stopPropagation();
  Dropdown.dropdownInterface(this, 'toggle');
});
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_FORM_CHILD, function (e) {
  return e.stopPropagation();
});
var $$7 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .dropdown to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$7) {
  var JQUERY_NO_CONFLICT$6 = $$7.fn[NAME$6];
  $$7.fn[NAME$6] = Dropdown.jQueryInterface;
  $$7.fn[NAME$6].Constructor = Dropdown;

  $$7.fn[NAME$6].noConflict = function () {
    $$7.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Dropdown.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$7 = 'modal';
var VERSION$7 = '3.2.2';
var DATA_KEY$7 = 'coreui.modal';
var EVENT_KEY$7 = "." + DATA_KEY$7;
var DATA_API_KEY$7 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: true
};
var DefaultType$4 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean',
  show: 'boolean'
};
var EVENT_HIDE$2 = "hide" + EVENT_KEY$7;
var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$7;
var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$7;
var EVENT_SHOW$2 = "show" + EVENT_KEY$7;
var EVENT_SHOWN$2 = "shown" + EVENT_KEY$7;
var EVENT_FOCUSIN = "focusin" + EVENT_KEY$7;
var EVENT_RESIZE = "resize" + EVENT_KEY$7;
var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$7;
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$7;
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$7;
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$7;
var EVENT_CLICK_DATA_API$7 = "click" + EVENT_KEY$7 + DATA_API_KEY$7;
var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
var CLASS_NAME_BACKDROP = 'modal-backdrop';
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function () {
  function Modal(element, config) {
    this._config = this._getConfig(config);
    this._element = element;
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, element);
    this._backdrop = null;
    this._isShown = false;
    this._isBodyOverflowing = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollbarWidth = 0;
    Data.setData(element, DATA_KEY$7, this);
  } // Getters


  var _proto = Modal.prototype;

  // Public
  _proto.toggle = function toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  _proto.show = function show(relatedTarget) {
    var _this = this;

    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (this._element.classList.contains(CLASS_NAME_FADE)) {
      this._isTransitioning = true;
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget: relatedTarget
    });

    if (this._isShown || showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._checkScrollbar();

    this._setScrollbar();

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
      return _this.hide(event);
    });
    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
      EventHandler.one(_this._element, EVENT_MOUSEUP_DISMISS, function (event) {
        if (event.target === _this._element) {
          _this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(function () {
      return _this._showElement(relatedTarget);
    });
  };

  _proto.hide = function hide(event) {
    var _this2 = this;

    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    if (transition) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.off(document, EVENT_FOCUSIN);

    this._element.classList.remove(CLASS_NAME_SHOW$3);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, function (event) {
        return _this2._hideModal(event);
      });
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      this._hideModal();
    }
  };

  _proto.dispose = function dispose() {
    [window, this._element, this._dialog].forEach(function (htmlElement) {
      return EventHandler.off(htmlElement, EVENT_KEY$7);
    });
    /**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */

    EventHandler.off(document, EVENT_FOCUSIN);
    Data.removeData(this._element, DATA_KEY$7);
    this._config = null;
    this._element = null;
    this._dialog = null;
    this._backdrop = null;
    this._isShown = null;
    this._isBodyOverflowing = null;
    this._ignoreBackdropClick = null;
    this._isTransitioning = null;
    this._scrollbarWidth = null;
  };

  _proto.handleUpdate = function handleUpdate() {
    this._adjustDialog();
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2({}, Default$5), config);
    typeCheckConfig(NAME$7, config, DefaultType$4);
    return config;
  };

  _proto._showElement = function _showElement(relatedTarget) {
    var _this3 = this;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (transition) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$3);

    if (this._config.focus) {
      this._enforceFocus();
    }

    var transitionComplete = function transitionComplete() {
      if (_this3._config.focus) {
        _this3._element.focus();
      }

      _this3._isTransitioning = false;
      EventHandler.trigger(_this3._element, EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });
    };

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.one(this._dialog, TRANSITION_END, transitionComplete);
      emulateTransitionEnd(this._dialog, transitionDuration);
    } else {
      transitionComplete();
    }
  };

  _proto._enforceFocus = function _enforceFocus() {
    var _this4 = this;

    EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN, function (event) {
      if (document !== event.target && _this4._element !== event.target && !_this4._element.contains(event.target)) {
        _this4._element.focus();
      }
    });
  };

  _proto._setEscapeEvent = function _setEscapeEvent() {
    var _this5 = this;

    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this5._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();

          _this5.hide();
        } else if (!_this5._config.keyboard && event.key === ESCAPE_KEY$1) {
          _this5._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
    }
  };

  _proto._setResizeEvent = function _setResizeEvent() {
    var _this6 = this;

    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, function () {
        return _this6._adjustDialog();
      });
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  };

  _proto._hideModal = function _hideModal() {
    var _this7 = this;

    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._showBackdrop(function () {
      document.body.classList.remove(CLASS_NAME_OPEN);

      _this7._resetAdjustments();

      _this7._resetScrollbar();

      EventHandler.trigger(_this7._element, EVENT_HIDDEN$2);
    });
  };

  _proto._removeBackdrop = function _removeBackdrop() {
    this._backdrop.parentNode.removeChild(this._backdrop);

    this._backdrop = null;
  };

  _proto._showBackdrop = function _showBackdrop(callback) {
    var _this8 = this;

    var animate = this._element.classList.contains(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

    if (this._isShown && this._config.backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP;

      if (animate) {
        this._backdrop.classList.add(animate);
      }

      document.body.appendChild(this._backdrop);
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this8._ignoreBackdropClick) {
          _this8._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        _this8._triggerBackdropTransition();
      });

      if (animate) {
        reflow(this._backdrop);
      }

      this._backdrop.classList.add(CLASS_NAME_SHOW$3);

      if (!animate) {
        callback();
        return;
      }

      var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
      EventHandler.one(this._backdrop, TRANSITION_END, callback);
      emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
    } else if (!this._isShown && this._backdrop) {
      this._backdrop.classList.remove(CLASS_NAME_SHOW$3);

      var callbackRemove = function callbackRemove() {
        _this8._removeBackdrop();

        callback();
      };

      if (this._element.classList.contains(CLASS_NAME_FADE)) {
        var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

        EventHandler.one(this._backdrop, TRANSITION_END, callbackRemove);
        emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
      } else {
        callbackRemove();
      }
    } else {
      callback();
    }
  };

  _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
    var _this9 = this;

    if (this._config.backdrop === 'static') {
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, TRANSITION_END);
      EventHandler.one(this._element, TRANSITION_END, function () {
        _this9._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          EventHandler.one(_this9._element, TRANSITION_END, function () {
            _this9._element.style.overflowY = '';
          });
          emulateTransitionEnd(_this9._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);

      this._element.focus();
    } else {
      this.hide();
    }
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  ;

  _proto._adjustDialog = function _adjustDialog() {
    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!this._isBodyOverflowing && isModalOverflowing) {
      this._element.style.paddingLeft = this._scrollbarWidth + "px";
    }

    if (this._isBodyOverflowing && !isModalOverflowing) {
      this._element.style.paddingRight = this._scrollbarWidth + "px";
    }
  };

  _proto._resetAdjustments = function _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  };

  _proto._checkScrollbar = function _checkScrollbar() {
    var rect = document.body.getBoundingClientRect();
    this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    this._scrollbarWidth = this._getScrollbarWidth();
  };

  _proto._setScrollbar = function _setScrollbar() {
    var _this10 = this;

    if (this._isBodyOverflowing) {
      // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
      //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
      // Adjust fixed content padding
      SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
        var actualPadding = element.style.paddingRight;
        var calculatedPadding = window.getComputedStyle(element)['padding-right'];
        Manipulator.setDataAttribute(element, 'padding-right', actualPadding);
        element.style.paddingRight = parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px";
      }); // Adjust sticky content margin

      SelectorEngine.find(SELECTOR_STICKY_CONTENT).forEach(function (element) {
        var actualMargin = element.style.marginRight;
        var calculatedMargin = window.getComputedStyle(element)['margin-right'];
        Manipulator.setDataAttribute(element, 'margin-right', actualMargin);
        element.style.marginRight = parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px";
      }); // Adjust body padding

      var actualPadding = document.body.style.paddingRight;
      var calculatedPadding = window.getComputedStyle(document.body)['padding-right'];
      Manipulator.setDataAttribute(document.body, 'padding-right', actualPadding);
      document.body.style.paddingRight = parseFloat(calculatedPadding) + this._scrollbarWidth + "px";
    }

    document.body.classList.add(CLASS_NAME_OPEN);
  };

  _proto._resetScrollbar = function _resetScrollbar() {
    // Restore fixed content padding
    SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
      var padding = Manipulator.getDataAttribute(element, 'padding-right');

      if (typeof padding !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'padding-right');
        element.style.paddingRight = padding;
      }
    }); // Restore sticky content and navbar-toggler margin

    SelectorEngine.find("" + SELECTOR_STICKY_CONTENT).forEach(function (element) {
      var margin = Manipulator.getDataAttribute(element, 'margin-right');

      if (typeof margin !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'margin-right');
        element.style.marginRight = margin;
      }
    }); // Restore body padding

    var padding = Manipulator.getDataAttribute(document.body, 'padding-right');

    if (typeof padding === 'undefined') {
      document.body.style.paddingRight = '';
    } else {
      Manipulator.removeDataAttribute(document.body, 'padding-right');
      document.body.style.paddingRight = padding;
    }
  };

  _proto._getScrollbarWidth = function _getScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  } // Static
  ;

  Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$7);

      var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$5), Manipulator.getDataAttributes(this)), typeof config === 'object' && config ? config : {});

      if (!data) {
        data = new Modal(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](relatedTarget);
      } else if (_config.show) {
        data.show(relatedTarget);
      }
    });
  };

  Modal.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$7);
  };

  _createClass(Modal, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$7;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }]);

  return Modal;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DATA_TOGGLE$3, function (event) {
  var _this11 = this;

  var target = getElementFromSelector(this);

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$2, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      if (isVisible(_this11)) {
        _this11.focus();
      }
    });
  });
  var data = Data.getData(target, DATA_KEY$7);

  if (!data) {
    var config = _objectSpread2(_objectSpread2({}, Manipulator.getDataAttributes(target)), Manipulator.getDataAttributes(this));

    data = new Modal(target, config);
  }

  data.show(this);
});
var $$8 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .modal to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$8) {
  var JQUERY_NO_CONFLICT$7 = $$8.fn[NAME$7];
  $$8.fn[NAME$7] = Modal.jQueryInterface;
  $$8.fn[NAME$7].Constructor = Modal;

  $$8.fn[NAME$7].noConflict = function () {
    $$8.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Modal.jQueryInterface;
  };
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
  var attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.indexOf(attrName) !== -1) {
    if (uriAttrs.indexOf(attrName) !== -1) {
      return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attrRegex) {
    return attrRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (attrName.match(regExp[i])) {
      return true;
    }
  }

  return false;
};

var DefaultWhitelist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
  var _ref;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var whitelistKeys = Object.keys(whiteList);

  var elements = (_ref = []).concat.apply(_ref, createdDocument.body.querySelectorAll('*'));

  var _loop = function _loop(i, len) {
    var _ref2;

    var el = elements[i];
    var elName = el.nodeName.toLowerCase();

    if (whitelistKeys.indexOf(elName) === -1) {
      el.parentNode.removeChild(el);
      return "continue";
    }

    var attributeList = (_ref2 = []).concat.apply(_ref2, el.attributes);

    var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
    attributeList.forEach(function (attr) {
      if (!allowedAttribute(attr, whitelistedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$8 = 'tooltip';
var VERSION$8 = '3.2.2';
var DATA_KEY$8 = 'coreui.tooltip';
var EVENT_KEY$8 = "." + DATA_KEY$8;
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
var DefaultType$5 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|function)',
  container: '(string|element|boolean)',
  boundary: '(string|element)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  whiteList: 'object',
  popperConfig: '(null|object)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};
var Default$6 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  boundary: 'scrollParent',
  sanitize: true,
  sanitizeFn: null,
  whiteList: DefaultWhitelist,
  popperConfig: null
};
var Event$1 = {
  HIDE: "hide" + EVENT_KEY$8,
  HIDDEN: "hidden" + EVENT_KEY$8,
  SHOW: "show" + EVENT_KEY$8,
  SHOWN: "shown" + EVENT_KEY$8,
  INSERTED: "inserted" + EVENT_KEY$8,
  CLICK: "click" + EVENT_KEY$8,
  FOCUSIN: "focusin" + EVENT_KEY$8,
  FOCUSOUT: "focusout" + EVENT_KEY$8,
  MOUSEENTER: "mouseenter" + EVENT_KEY$8,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$8
};
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$4 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(element, config) {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"] === 'undefined') {
      throw new TypeError('CoreUI\'s tooltips require Popper.js (https://popper.js.org)');
    } // private


    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this.element = element;
    this.config = this._getConfig(config);
    this.tip = null;

    this._setListeners();

    Data.setData(element, this.constructor.DATA_KEY, this);
  } // Getters


  var _proto = Tooltip.prototype;

  // Public
  _proto.enable = function enable() {
    this._isEnabled = true;
  };

  _proto.disable = function disable() {
    this._isEnabled = false;
  };

  _proto.toggleEnabled = function toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  };

  _proto.toggle = function toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      var dataKey = this.constructor.DATA_KEY;
      var context = Data.getData(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.setData(event.delegateTarget, dataKey, context);
      }

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$4)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  };

  _proto.dispose = function dispose() {
    clearTimeout(this._timeout);
    Data.removeData(this.element, this.constructor.DATA_KEY);
    EventHandler.off(this.element, this.constructor.EVENT_KEY);
    EventHandler.off(this.element.closest("." + CLASS_NAME_MODAL), 'hide.coreui.modal', this._hideModalHandler);

    if (this.tip) {
      this.tip.parentNode.removeChild(this.tip);
    }

    this._isEnabled = null;
    this._timeout = null;
    this._hoverState = null;
    this._activeTrigger = null;

    if (this._popper) {
      this._popper.destroy();
    }

    this._popper = null;
    this.element = null;
    this.config = null;
    this.tip = null;
  };

  _proto.show = function show() {
    var _this = this;

    if (this.element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (this.isWithContent() && this._isEnabled) {
      var showEvent = EventHandler.trigger(this.element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this.element);
      var isInTheDom = shadowRoot === null ? this.element.ownerDocument.documentElement.contains(this.element) : shadowRoot.contains(this.element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);
      this.element.setAttribute('aria-describedby', tipId);
      this.setContent();

      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE$1);
      }

      var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

      var attachment = this._getAttachment(placement); // this._addAttachmentClass(attachment)


      var container = this._getContainer();

      Data.setData(tip, this.constructor.DATA_KEY, this);

      if (!this.element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
      }

      EventHandler.trigger(this.element, this.constructor.Event.INSERTED);
      this._popper = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(this.element, tip, this._getPopperConfig(attachment));
      tip.classList.add(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop());
        });
      }

      var complete = function complete() {
        if (_this.config.animation) {
          _this._fixTransition();
        }

        var prevHoverState = _this._hoverState;
        _this._hoverState = null;
        EventHandler.trigger(_this.element, _this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this._leave(null, _this);
        }
      };

      if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
        var transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler.one(this.tip, TRANSITION_END, complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    }
  };

  _proto.hide = function hide() {
    var _this2 = this;

    var tip = this.getTipElement();

    var complete = function complete() {
      if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      _this2._cleanTipClass();

      _this2.element.removeAttribute('aria-describedby');

      EventHandler.trigger(_this2.element, _this2.constructor.Event.HIDDEN);

      _this2._popper.destroy();
    };

    var hideEvent = EventHandler.trigger(this.element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      var _ref2;

      (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (element) {
        return EventHandler.off(element, 'mouseover', noop);
      });
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;

    if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
      var transitionDuration = getTransitionDurationFromElement(tip);
      EventHandler.one(tip, TRANSITION_END, complete);
      emulateTransitionEnd(tip, transitionDuration);
    } else {
      complete();
    }

    this._hoverState = '';
  };

  _proto.update = function update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected
  ;

  _proto.isWithContent = function isWithContent() {
    return Boolean(this.getTitle());
  };

  _proto.getTipElement = function getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    var element = document.createElement('div');
    element.innerHTML = this.config.template;
    this.tip = element.children[0];
    return this.tip;
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement();
    this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
    tip.classList.remove(CLASS_NAME_FADE$1, CLASS_NAME_SHOW$4);
  };

  _proto.setElementContent = function setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if (typeof content === 'object' && isElement(content)) {
      if (content.jquery) {
        content = content[0];
      } // content is a DOM node or a jQuery


      if (this.config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.appendChild(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this.config.html) {
      if (this.config.sanitize) {
        content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  };

  _proto.getTitle = function getTitle() {
    var title = this.element.getAttribute('data-original-title');

    if (!title) {
      title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
    }

    return title;
  } // Private
  ;

  _proto._getPopperConfig = function _getPopperConfig(attachment) {
    var _this3 = this;

    var defaultBsConfig = {
      placement: attachment,
      modifiers: [{
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'arrow',
        options: {
          element: "." + this.constructor.NAME + "-arrow"
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this.config.boundary
        }
      }],
      onFirstUpdate: function onFirstUpdate(data) {
        if (data.originalPlacement !== data.placement) {
          // this._handlePopperPlacementChange(data)
          // fix Popper position issue
          //TODO: find where is the problem or find better solution
          _this3._popper.update();
        }
      }
    };
    return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
  } // _addAttachmentClass(attachment) {
  //   this.getTipElement().classList.add(`${CLASS_PREFIX}-${attachment}`)
  // }
  // _getOffset() {
  //   const offset = {}
  //   if (typeof this.config.offset === 'function') {
  //     offset.fn = data => {
  //       data.offsets = {
  //         ...data.offsets,
  //         ...this.config.offset(data.offsets, this.element) || {}
  //       }
  //       return data
  //     }
  //   } else {
  //     offset.offset = this.config.offset
  //   }
  //   return offset
  // }
  ;

  _proto._getOffset = function _getOffset() {
    var _this4 = this;

    var offset = [];

    if (typeof this.config.offset === 'function') {
      offset = function offset(_ref3) {
        var placement = _ref3.placement,
            reference = _ref3.reference,
            popper = _ref3.popper;
        return _this4.config.offset({
          placement: placement,
          reference: reference,
          popper: popper
        });
      };
    } else {
      offset = this.config.offset;
    }

    return offset;
  };

  _proto._getContainer = function _getContainer() {
    if (this.config.container === false) {
      return document.body;
    }

    if (isElement(this.config.container)) {
      return this.config.container;
    }

    return SelectorEngine.findOne(this.config.container);
  };

  _proto._getAttachment = function _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  };

  _proto._setListeners = function _setListeners() {
    var _this5 = this;

    var triggers = this.config.trigger.split(' ');
    triggers.forEach(function (trigger) {
      if (trigger === 'click') {
        EventHandler.on(_this5.element, _this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
          return _this5.toggle(event);
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
        var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
        EventHandler.on(_this5.element, eventIn, _this5.config.selector, function (event) {
          return _this5._enter(event);
        });
        EventHandler.on(_this5.element, eventOut, _this5.config.selector, function (event) {
          return _this5._leave(event);
        });
      }
    });

    this._hideModalHandler = function () {
      if (_this5.element) {
        _this5.hide();
      }
    };

    EventHandler.on(this.element.closest("." + CLASS_NAME_MODAL), 'hide.coreui.modal', this._hideModalHandler);

    if (this.config.selector) {
      this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
        trigger: 'manual',
        selector: ''
      });
    } else {
      this._fixTitle();
    }
  };

  _proto._fixTitle = function _fixTitle() {
    var titleType = typeof this.element.getAttribute('data-original-title');

    if (this.element.getAttribute('title') || titleType !== 'string') {
      this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
      this.element.setAttribute('title', '');
    }
  };

  _proto._enter = function _enter(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context.config.delay || !context.config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context.config.delay.show);
  };

  _proto._leave = function _leave(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context.config.delay || !context.config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context.config.delay.hide);
  };

  _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
    for (var trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  };

  _proto._getConfig = function _getConfig(config) {
    var dataAttributes = Manipulator.getDataAttributes(this.element);
    Object.keys(dataAttributes).forEach(function (dataAttr) {
      if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
        delete dataAttributes[dataAttr];
      }
    });

    if (config && typeof config.container === 'object' && config.container.jquery) {
      config.container = config.container[0];
    }

    config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), typeof config === 'object' && config ? config : {});

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$8, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
    }

    return config;
  };

  _proto._getDelegateConfig = function _getDelegateConfig() {
    var config = {};

    if (this.config) {
      for (var key in this.config) {
        if (this.constructor.Default[key] !== this.config[key]) {
          config[key] = this.config[key];
        }
      }
    }

    return config;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  } // _handlePopperPlacementChange(popperData) {
  //   console.log(popperData)
  //   const popperInstance = popperData.elements.popper
  //   this.tip = document.getElementById(popperInstance.getAttribute('id'))
  //   console.log(this.tip)
  //   this._cleanTipClass()
  //   this._addAttachmentClass(this._getAttachment(popperData.placement))
  // }
  ;

  _proto._fixTransition = function _fixTransition() {
    var tip = this.getTipElement();
    var initConfigAnimation = this.config.animation;

    if (tip.getAttribute('data-popper-placement') !== null) {
      return;
    }

    tip.classList.remove(CLASS_NAME_FADE$1);
    this.config.animation = false;
    this.hide();
    this.show();
    this.config.animation = initConfigAnimation;
  } // Static
  ;

  Tooltip.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$8);

      var _config = typeof config === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  Tooltip.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$8);
  };

  _createClass(Tooltip, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$8;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$8;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$8;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$5;
    }
  }]);

  return Tooltip;
}();

var $$9 = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .tooltip to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$9) {
  var JQUERY_NO_CONFLICT$8 = $$9.fn[NAME$8];
  $$9.fn[NAME$8] = Tooltip.jQueryInterface;
  $$9.fn[NAME$8].Constructor = Tooltip;

  $$9.fn[NAME$8].noConflict = function () {
    $$9.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Tooltip.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'popover';
var VERSION$9 = '3.2.2';
var DATA_KEY$9 = 'coreui.popover';
var EVENT_KEY$9 = "." + DATA_KEY$9;
var CLASS_PREFIX$1 = 'bs-popover';
var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

var Default$7 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var DefaultType$6 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
  content: '(string|element|function)'
});

var Event$2 = {
  HIDE: "hide" + EVENT_KEY$9,
  HIDDEN: "hidden" + EVENT_KEY$9,
  SHOW: "show" + EVENT_KEY$9,
  SHOWN: "shown" + EVENT_KEY$9,
  INSERTED: "inserted" + EVENT_KEY$9,
  CLICK: "click" + EVENT_KEY$9,
  FOCUSIN: "focusin" + EVENT_KEY$9,
  FOCUSOUT: "focusout" + EVENT_KEY$9,
  MOUSEENTER: "mouseenter" + EVENT_KEY$9,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$9
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inheritsLoose(Popover, _Tooltip);

  function Popover() {
    return _Tooltip.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype;

  // Overrides
  _proto.isWithContent = function isWithContent() {
    return this.getTitle() || this._getContent();
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement(); // we use append for html objects to maintain js events

    this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

    var content = this._getContent();

    if (typeof content === 'function') {
      content = content.call(this.element);
    }

    this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$5);
  } // Private
  ;

  _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(CLASS_PREFIX$1 + "-" + attachment);
  };

  _proto._getContent = function _getContent() {
    return this.element.getAttribute('data-content') || this.config.content;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  } // Static
  ;

  Popover.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$9);

      var _config = typeof config === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        Data.setData(this, DATA_KEY$9, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  Popover.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$9);
  };

  _createClass(Popover, null, [{
    key: "VERSION",
    // Getters
    get: function get() {
      return VERSION$9;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$9;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$9;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$6;
    }
  }]);

  return Popover;
}(Tooltip);

var $$a = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

/* istanbul ignore if */

if ($$a) {
  var JQUERY_NO_CONFLICT$9 = $$a.fn[NAME$9];
  $$a.fn[NAME$9] = Popover.jQueryInterface;
  $$a.fn[NAME$9].Constructor = Popover;

  $$a.fn[NAME$9].noConflict = function () {
    $$a.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Popover.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'scrollspy';
var VERSION$a = '3.2.2';
var DATA_KEY$a = 'coreui.scrollspy';
var EVENT_KEY$a = "." + DATA_KEY$a;
var DATA_API_KEY$8 = '.data-api';
var Default$8 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$7 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate" + EVENT_KEY$a;
var EVENT_SCROLL = "scroll" + EVENT_KEY$a;
var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$a + DATA_API_KEY$8;
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function () {
  function ScrollSpy(element, config) {
    var _this = this;

    this._element = element;
    this._scrollElement = element.tagName === 'BODY' ? window : element;
    this._config = this._getConfig(config);
    this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + ", " + this._config.target + " " + SELECTOR_LIST_ITEMS + ", " + this._config.target + " ." + CLASS_NAME_DROPDOWN_ITEM;
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, EVENT_SCROLL, function (event) {
      return _this._process(event);
    });
    this.refresh();

    this._process();

    Data.setData(element, DATA_KEY$a, this);
  } // Getters


  var _proto = ScrollSpy.prototype;

  // Public
  _proto.refresh = function refresh() {
    var _this2 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    var targets = SelectorEngine.find(this._selector);
    targets.map(function (element) {
      var targetSelector = getSelectorFromElement(element);
      var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        var targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(function (item) {
      return item;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      _this2._offsets.push(item[0]);

      _this2._targets.push(item[1]);
    });
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$a);
    EventHandler.off(this._scrollElement, EVENT_KEY$a);
    this._element = null;
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2({}, Default$8), typeof config === 'object' && config ? config : {});

    if (typeof config.target !== 'string' && isElement(config.target)) {
      var id = config.target.id;

      if (!id) {
        id = getUID(NAME$a);
        config.target.id = id;
      }

      config.target = "#" + id;
    }

    typeCheckConfig(NAME$a, config, DefaultType$7);
    return config;
  };

  _proto._getScrollTop = function _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  _proto._getScrollHeight = function _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  _proto._getOffsetHeight = function _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  _proto._process = function _process() {
    var scrollTop = this._getScrollTop() + this._config.offset;

    var scrollHeight = this._getScrollHeight();

    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (var i = this._offsets.length; i--;) {
      var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  };

  _proto._activate = function _activate(target) {
    this._activeTarget = target;

    this._clear();

    var queries = this._selector.split(',').map(function (selector) {
      return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
    });

    var link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$3);
      link.classList.add(CLASS_NAME_ACTIVE$3);
    } else {
      // Set triggered link as active
      link.classList.add(CLASS_NAME_ACTIVE$3);
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP).forEach(function (listGroup) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).forEach(function (item) {
          return item.classList.add(CLASS_NAME_ACTIVE$3);
        }); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$3);
          });
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  };

  _proto._clear = function _clear() {
    SelectorEngine.find(this._selector).filter(function (node) {
      return node.classList.contains(CLASS_NAME_ACTIVE$3);
    }).forEach(function (node) {
      return node.classList.remove(CLASS_NAME_ACTIVE$3);
    });
  } // Static
  ;

  ScrollSpy.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$a);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  ScrollSpy.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$a);
  };

  _createClass(ScrollSpy, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$a;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }]);

  return ScrollSpy;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
  });
});
var $$b = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

/* istanbul ignore if */

if ($$b) {
  var JQUERY_NO_CONFLICT$a = $$b.fn[NAME$a];
  $$b.fn[NAME$a] = ScrollSpy.jQueryInterface;
  $$b.fn[NAME$a].Constructor = ScrollSpy;

  $$b.fn[NAME$a].noConflict = function () {
    $$b.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return ScrollSpy.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$b = 'sidebar';
var VERSION$b = '3.2.2';
var DATA_KEY$b = 'coreui.sidebar';
var EVENT_KEY$b = "." + DATA_KEY$b;
var DATA_API_KEY$9 = '.data-api';
var Default$9 = {
  activeLinksExact: true,
  breakpoints: {
    xs: 'c-sidebar-show',
    sm: 'c-sidebar-sm-show',
    md: 'c-sidebar-md-show',
    lg: 'c-sidebar-lg-show',
    xl: 'c-sidebar-xl-show',
    xxl: 'c-sidebar-xxl-show'
  },
  dropdownAccordion: true
};
var DefaultType$8 = {
  activeLinksExact: 'boolean',
  breakpoints: 'object',
  dropdownAccordion: '(string|boolean)'
};
var CLASS_NAME_ACTIVE$4 = 'c-active';
var CLASS_NAME_BACKDROP$1 = 'c-sidebar-backdrop';
var CLASS_NAME_FADE$3 = 'c-fade';
var CLASS_NAME_NAV_DROPDOWN = 'c-sidebar-nav-dropdown';
var CLASS_NAME_NAV_DROPDOWN_TOGGLE$1 = 'c-sidebar-nav-dropdown-toggle';
var CLASS_NAME_SHOW$6 = 'c-show';
var CLASS_NAME_SIDEBAR_MINIMIZED = 'c-sidebar-minimized';
var CLASS_NAME_SIDEBAR_OVERLAID = 'c-sidebar-overlaid';
var CLASS_NAME_SIDEBAR_UNFOLDABLE = 'c-sidebar-unfoldable';
var EVENT_CLASS_TOGGLE$1 = 'classtoggle';
var EVENT_CLICK_DATA_API$8 = "click" + EVENT_KEY$b + DATA_API_KEY$9;
var EVENT_CLOSE$1 = "close" + EVENT_KEY$b;
var EVENT_CLOSED$1 = "closed" + EVENT_KEY$b;
var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$b + DATA_API_KEY$9;
var EVENT_OPEN = "open" + EVENT_KEY$b;
var EVENT_OPENED = "opened" + EVENT_KEY$b;
var SELECTOR_NAV_DROPDOWN_TOGGLE = '.c-sidebar-nav-dropdown-toggle';
var SELECTOR_NAV_DROPDOWN$1 = '.c-sidebar-nav-dropdown';
var SELECTOR_NAV_LINK$1 = '.c-sidebar-nav-link';
var SELECTOR_NAVIGATION_CONTAINER = '.c-sidebar-nav';
var SELECTOR_SIDEBAR = '.c-sidebar';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(element, config) {
    if (typeof perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"] === 'undefined') {
      throw new TypeError('CoreUI\'s sidebar require Perfect Scrollbar');
    }

    this._element = element;
    this._config = this._getConfig(config);
    this._open = this._isVisible();
    this._mobile = this._isMobile();
    this._overlaid = this._isOverlaid();
    this._minimize = this._isMinimized();
    this._unfoldable = this._isUnfoldable();

    this._setActiveLink();

    this._ps = null;
    this._backdrop = null;

    this._psInit();

    this._addEventListeners();

    Data.setData(element, DATA_KEY$b, this);
  } // Getters


  var _proto = Sidebar.prototype;

  // Public
  _proto.open = function open(breakpoint) {
    var _this = this;

    EventHandler.trigger(this._element, EVENT_OPEN);

    if (this._isMobile()) {
      this._addClassName(this._firstBreakpointClassName());

      this._showBackdrop();

      EventHandler.one(this._element, TRANSITION_END, function () {
        _this._addClickOutListener();
      });
    } else if (breakpoint) {
      this._addClassName(this._getBreakpointClassName(breakpoint));

      if (this._isOverlaid()) {
        EventHandler.one(this._element, TRANSITION_END, function () {
          _this._addClickOutListener();
        });
      }
    } else {
      this._addClassName(this._firstBreakpointClassName());

      if (this._isOverlaid()) {
        EventHandler.one(this._element, TRANSITION_END, function () {
          _this._addClickOutListener();
        });
      }
    }

    var complete = function complete() {
      if (_this._isVisible() === true) {
        _this._open = true;
        EventHandler.trigger(_this._element, EVENT_OPENED);
      }
    };

    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.close = function close(breakpoint) {
    var _this2 = this;

    EventHandler.trigger(this._element, EVENT_CLOSE$1);

    if (this._isMobile()) {
      this._element.classList.remove(this._firstBreakpointClassName());

      this._removeBackdrop();

      this._removeClickOutListener();
    } else if (breakpoint) {
      this._element.classList.remove(this._getBreakpointClassName(breakpoint));

      if (this._isOverlaid()) {
        this._removeClickOutListener();
      }
    } else {
      this._element.classList.remove(this._firstBreakpointClassName());

      if (this._isOverlaid()) {
        this._removeClickOutListener();
      }
    }

    var complete = function complete() {
      if (_this2._isVisible() === false) {
        _this2._open = false;
        EventHandler.trigger(_this2._element, EVENT_CLOSED$1);
      }
    };

    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.toggle = function toggle(breakpoint) {
    if (this._open) {
      this.close(breakpoint);
    } else {
      this.open(breakpoint);
    }
  };

  _proto.minimize = function minimize() {
    if (!this._isMobile()) {
      this._addClassName(CLASS_NAME_SIDEBAR_MINIMIZED);

      this._minimize = true;

      this._psDestroy();
    }
  };

  _proto.unfoldable = function unfoldable() {
    if (!this._isMobile()) {
      this._addClassName(CLASS_NAME_SIDEBAR_UNFOLDABLE);

      this._unfoldable = true;
    }
  };

  _proto.reset = function reset() {
    if (this._element.classList.contains(CLASS_NAME_SIDEBAR_MINIMIZED)) {
      this._element.classList.remove(CLASS_NAME_SIDEBAR_MINIMIZED);

      this._minimize = false;
      EventHandler.one(this._element, TRANSITION_END, this._psInit());
    }

    if (this._element.classList.contains(CLASS_NAME_SIDEBAR_UNFOLDABLE)) {
      this._element.classList.remove(CLASS_NAME_SIDEBAR_UNFOLDABLE);

      this._unfoldable = false;
    }
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), Manipulator.getDataAttributes(this._element)), config);
    typeCheckConfig(NAME$b, config, this.constructor.DefaultType);
    return config;
  };

  _proto._isMobile = function _isMobile() {
    return Boolean(window.getComputedStyle(this._element, null).getPropertyValue('--is-mobile'));
  };

  _proto._isIOS = function _isIOS() {
    var iOSDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
    var platform = Boolean(navigator.platform);

    if (platform) {
      while (iOSDevices.length) {
        if (navigator.platform === iOSDevices.pop()) {
          return true;
        }
      }
    }

    return false;
  };

  _proto._isMinimized = function _isMinimized() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_MINIMIZED);
  };

  _proto._isOverlaid = function _isOverlaid() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_OVERLAID);
  };

  _proto._isUnfoldable = function _isUnfoldable() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_UNFOLDABLE);
  };

  _proto._isVisible = function _isVisible() {
    var rect = this._element.getBoundingClientRect();

    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    /* or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    /* or $(window).width() */
    ;
  };

  _proto._addClassName = function _addClassName(className) {
    this._element.classList.add(className);
  };

  _proto._firstBreakpointClassName = function _firstBreakpointClassName() {
    return Object.keys(Default$9.breakpoints).map(function (key) {
      return Default$9.breakpoints[key];
    })[0];
  };

  _proto._getBreakpointClassName = function _getBreakpointClassName(breakpoint) {
    return Default$9.breakpoints[breakpoint];
  };

  _proto._removeBackdrop = function _removeBackdrop() {
    if (this._backdrop) {
      this._backdrop.parentNode.removeChild(this._backdrop);

      this._backdrop = null;
    }
  };

  _proto._showBackdrop = function _showBackdrop() {
    if (!this._backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP$1;

      this._backdrop.classList.add(CLASS_NAME_FADE$3);

      document.body.appendChild(this._backdrop);
      reflow(this._backdrop);

      this._backdrop.classList.add(CLASS_NAME_SHOW$6);
    }
  };

  _proto._clickOutListener = function _clickOutListener(event, sidebar) {
    if (event.target.closest(SELECTOR_SIDEBAR) === null) {
      // or use:
      event.preventDefault();
      event.stopPropagation();
      sidebar.close();
    }
  };

  _proto._addClickOutListener = function _addClickOutListener() {
    var _this3 = this;

    EventHandler.on(document, EVENT_CLICK_DATA_API$8, function (event) {
      _this3._clickOutListener(event, _this3);
    });
  };

  _proto._removeClickOutListener = function _removeClickOutListener() {
    EventHandler.off(document, EVENT_CLICK_DATA_API$8);
  } // Sidebar navigation
  ;

  _proto._getAllSiblings = function _getAllSiblings(element, filter) {
    var siblings = [];
    element = element.parentNode.firstChild;

    do {
      if (element.nodeType === 3) {
        continue; // text node
      }

      if (element.nodeType === 8) {
        continue; // comment node
      }

      if (!filter || filter(element)) {
        siblings.push(element);
      } // eslint-disable-next-line no-cond-assign

    } while (element = element.nextSibling);

    return siblings;
  };

  _proto._toggleDropdown = function _toggleDropdown(event, sidebar) {
    var toggler = event.target;

    if (!toggler.classList.contains(CLASS_NAME_NAV_DROPDOWN_TOGGLE$1)) {
      toggler = toggler.closest(SELECTOR_NAV_DROPDOWN_TOGGLE);
    }

    var dataAttributes = toggler.closest(SELECTOR_NAVIGATION_CONTAINER).dataset;

    if (typeof dataAttributes.dropdownAccordion !== 'undefined') {
      Default$9.dropdownAccordion = JSON.parse(dataAttributes.dropdownAccordion);
    } // TODO: find better solution


    if (Default$9.dropdownAccordion === true) {
      this._getAllSiblings(toggler.parentElement, function (element) {
        return Boolean(element.classList.contains(CLASS_NAME_NAV_DROPDOWN));
      }).forEach(function (element) {
        if (element !== toggler.parentNode) {
          if (element.classList.contains(CLASS_NAME_NAV_DROPDOWN)) {
            element.classList.remove(CLASS_NAME_SHOW$6);
          }
        }
      });
    }

    toggler.parentNode.classList.toggle(CLASS_NAME_SHOW$6); // TODO: Set the toggler's position near to cursor after the click.
    // TODO: add transition end

    sidebar._psUpdate();
  } // PerfectScrollbar
  ;

  _proto._psInit = function _psInit() {
    if (this._element.querySelector(SELECTOR_NAVIGATION_CONTAINER) && !this._isIOS()) {
      this._ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](this._element.querySelector(SELECTOR_NAVIGATION_CONTAINER), {
        suppressScrollX: true,
        wheelPropagation: false
      });
    }
  };

  _proto._psUpdate = function _psUpdate() {
    if (this._ps) {
      this._ps.update();
    }
  };

  _proto._psDestroy = function _psDestroy() {
    if (this._ps) {
      this._ps.destroy();

      this._ps = null;
    }
  };

  _proto._getParents = function _getParents(element, selector) {
    // Setup parents array
    var parents = []; // Get matching parent elements

    for (; element && element !== document; element = element.parentNode) {
      // Add matching parents to array
      if (selector) {
        if (element.matches(selector)) {
          parents.push(element);
        }
      } else {
        parents.push(element);
      }
    }

    return parents;
  };

  _proto._setActiveLink = function _setActiveLink() {
    var _this4 = this;

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(this._element.querySelectorAll(SELECTOR_NAV_LINK$1)).forEach(function (element) {
      var currentUrl;
      var urlHasParams = /\\?.*=/;
      var urlHasQueryString = /\\?./;
      var urlHasHash = /#./;

      if (urlHasParams.test(String(window.location)) || urlHasQueryString.test(String(window.location))) {
        currentUrl = String(window.location).split('?')[0];
      } else if (urlHasHash.test(String(window.location))) {
        currentUrl = String(window.location).split('#')[0];
      } else {
        currentUrl = String(window.location);
      }

      if (currentUrl.slice(-1) === '#') {
        currentUrl = currentUrl.slice(0, -1);
      }

      var dataAttributes = element.closest(SELECTOR_NAVIGATION_CONTAINER).dataset;

      if (typeof dataAttributes.activeLinksExact !== 'undefined') {
        Default$9.activeLinksExact = JSON.parse(dataAttributes.activeLinksExact);
      }

      if (Default$9.activeLinksExact && element.href === currentUrl) {
        element.classList.add(CLASS_NAME_ACTIVE$4); // eslint-disable-next-line unicorn/prefer-spread

        Array.from(_this4._getParents(element, SELECTOR_NAV_DROPDOWN$1)).forEach(function (element) {
          element.classList.add(CLASS_NAME_SHOW$6);
        });
      }

      if (!Default$9.activeLinksExact && element.href.startsWith(currentUrl)) {
        element.classList.add(CLASS_NAME_ACTIVE$4); // eslint-disable-next-line unicorn/prefer-spread

        Array.from(_this4._getParents(element, SELECTOR_NAV_DROPDOWN$1)).forEach(function (element) {
          element.classList.add(CLASS_NAME_SHOW$6);
        });
      }
    });
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this5 = this;

    if (this._mobile && this._open) {
      this._addClickOutListener();
    }

    if (this._overlaid && this._open) {
      this._addClickOutListener();
    }

    EventHandler.on(this._element, EVENT_CLASS_TOGGLE$1, function (event) {
      if (event.detail.className === CLASS_NAME_SIDEBAR_MINIMIZED) {
        if (_this5._element.classList.contains(CLASS_NAME_SIDEBAR_MINIMIZED)) {
          _this5.minimize();
        } else {
          _this5.reset();
        }
      }

      if (event.detail.className === CLASS_NAME_SIDEBAR_UNFOLDABLE) {
        if (_this5._element.classList.contains(CLASS_NAME_SIDEBAR_UNFOLDABLE)) {
          _this5.unfoldable();
        } else {
          _this5.reset();
        }
      }

      if (typeof Object.keys(Default$9.breakpoints).find(function (key) {
        return Default$9.breakpoints[key] === event.detail.className;
      }) !== 'undefined') {
        var className = event.detail.className;
        var breakpoint = Object.keys(Default$9.breakpoints).find(function (key) {
          return Default$9.breakpoints[key] === className;
        });

        if (event.detail.add) {
          _this5.open(breakpoint);
        } else {
          _this5.close(breakpoint);
        }
      }
    });
    EventHandler.on(this._element, EVENT_CLICK_DATA_API$8, SELECTOR_NAV_DROPDOWN_TOGGLE, function (event) {
      event.preventDefault();

      _this5._toggleDropdown(event, _this5);
    });
    EventHandler.on(this._element, EVENT_CLICK_DATA_API$8, SELECTOR_NAV_LINK$1, function () {
      if (_this5._isMobile()) {
        _this5.close();
      }
    });
  } // Static
  ;

  Sidebar._sidebarInterface = function _sidebarInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$b);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new Sidebar(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Sidebar.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Sidebar._sidebarInterface(this, config);
    });
  };

  Sidebar.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$b);
  };

  _createClass(Sidebar, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$b;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }]);

  return Sidebar;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  // eslint-disable-next-line unicorn/prefer-spread
  Array.from(document.querySelectorAll(SELECTOR_SIDEBAR)).forEach(function (element) {
    Sidebar._sidebarInterface(element);
  });
});
var $$c = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

if ($$c) {
  var JQUERY_NO_CONFLICT$b = $$c.fn[NAME$b];
  $$c.fn[NAME$b] = Sidebar.jQueryInterface;
  $$c.fn[NAME$b].Constructor = Sidebar;

  $$c.fn[NAME$b].noConflict = function () {
    $$c.fn[NAME$b] = JQUERY_NO_CONFLICT$b;
    return Sidebar.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$c = 'tab';
var VERSION$c = '3.2.2';
var DATA_KEY$c = 'coreui.tab';
var EVENT_KEY$c = "." + DATA_KEY$c;
var DATA_API_KEY$a = '.data-api';
var EVENT_HIDE$3 = "hide" + EVENT_KEY$c;
var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$c;
var EVENT_SHOW$3 = "show" + EVENT_KEY$c;
var EVENT_SHOWN$3 = "shown" + EVENT_KEY$c;
var EVENT_CLICK_DATA_API$9 = "click" + EVENT_KEY$c + DATA_API_KEY$a;
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE$5 = 'active';
var CLASS_NAME_DISABLED$2 = 'disabled';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$7 = 'show';
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_ACTIVE$2 = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function () {
  function Tab(element) {
    this._element = element;
    Data.setData(this._element, DATA_KEY$c, this);
  } // Getters


  var _proto = Tab.prototype;

  // Public
  _proto.show = function show() {
    var _this = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE$5) || this._element.classList.contains(CLASS_NAME_DISABLED$2)) {
      return;
    }

    var previous;
    var target = getElementFromSelector(this._element);

    var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP$1);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    var hideEvent = null;

    if (previous) {
      hideEvent = EventHandler.trigger(previous, EVENT_HIDE$3, {
        relatedTarget: this._element
      });
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    var complete = function complete() {
      EventHandler.trigger(previous, EVENT_HIDDEN$3, {
        relatedTarget: _this._element
      });
      EventHandler.trigger(_this._element, EVENT_SHOWN$3, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY$c);
    this._element = null;
  } // Private
  ;

  _proto._activate = function _activate(element, container, callback) {
    var _this2 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE$2);
    var active = activeElements[0];
    var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$4);

    var complete = function complete() {
      return _this2._transitionComplete(element, active, callback);
    };

    if (active && isTransitioning) {
      var transitionDuration = getTransitionDurationFromElement(active);
      active.classList.remove(CLASS_NAME_SHOW$7);
      EventHandler.one(active, TRANSITION_END, complete);
      emulateTransitionEnd(active, transitionDuration);
    } else {
      complete();
    }
  };

  _proto._transitionComplete = function _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE$5);
      var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE$5);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE$5);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$4)) {
      element.classList.add(CLASS_NAME_SHOW$7);
    }

    if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      var dropdownElement = element.closest(SELECTOR_DROPDOWN$1);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE$1).forEach(function (dropdown) {
          return dropdown.classList.add(CLASS_NAME_ACTIVE$5);
        });
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static
  ;

  Tab.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$c) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  Tab.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$c);
  };

  _createClass(Tab, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$c;
    }
  }]);

  return Tab;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$9, SELECTOR_DATA_TOGGLE$4, function (event) {
  event.preventDefault();
  var data = Data.getData(this, DATA_KEY$c) || new Tab(this);
  data.show();
});
var $$d = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .tab to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$d) {
  var JQUERY_NO_CONFLICT$c = $$d.fn[NAME$c];
  $$d.fn[NAME$c] = Tab.jQueryInterface;
  $$d.fn[NAME$c].Constructor = Tab;

  $$d.fn[NAME$c].noConflict = function () {
    $$d.fn[NAME$c] = JQUERY_NO_CONFLICT$c;
    return Tab.jQueryInterface;
  };
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$d = 'toast';
var VERSION$d = '3.2.2';
var DATA_KEY$d = 'coreui.toast';
var EVENT_KEY$d = "." + DATA_KEY$d;
var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$d;
var EVENT_HIDE$4 = "hide" + EVENT_KEY$d;
var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$d;
var EVENT_SHOW$4 = "show" + EVENT_KEY$d;
var EVENT_SHOWN$4 = "shown" + EVENT_KEY$d;
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_HIDE = 'hide';
var CLASS_NAME_SHOW$8 = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType$9 = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default$a = {
  animation: true,
  autohide: true,
  delay: 5000
};
var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function () {
  function Toast(element, config) {
    this._element = element;
    this._config = this._getConfig(config);
    this._timeout = null;

    this._setListeners();

    Data.setData(element, DATA_KEY$d, this);
  } // Getters


  var _proto = Toast.prototype;

  // Public
  _proto.show = function show() {
    var _this = this;

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE$5);
    }

    var complete = function complete() {
      _this._element.classList.remove(CLASS_NAME_SHOWING);

      _this._element.classList.add(CLASS_NAME_SHOW$8);

      EventHandler.trigger(_this._element, EVENT_SHOWN$4);

      if (_this._config.autohide) {
        _this._timeout = setTimeout(function () {
          _this.hide();
        }, _this._config.delay);
      }
    };

    this._element.classList.remove(CLASS_NAME_HIDE);

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOWING);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.hide = function hide() {
    var _this2 = this;

    if (!this._element.classList.contains(CLASS_NAME_SHOW$8)) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var complete = function complete() {
      _this2._element.classList.add(CLASS_NAME_HIDE);

      EventHandler.trigger(_this2._element, EVENT_HIDDEN$4);
    };

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.dispose = function dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
      this._element.classList.remove(CLASS_NAME_SHOW$8);
    }

    EventHandler.off(this._element, EVENT_CLICK_DISMISS$1);
    Data.removeData(this._element, DATA_KEY$d);
    this._element = null;
    this._config = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$a), Manipulator.getDataAttributes(this._element)), typeof config === 'object' && config ? config : {});
    typeCheckConfig(NAME$d, config, this.constructor.DefaultType);
    return config;
  };

  _proto._setListeners = function _setListeners() {
    var _this3 = this;

    EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
      return _this3.hide();
    });
  };

  _proto._clearTimeout = function _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static
  ;

  Toast.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$d);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](this);
      }
    });
  };

  Toast.getInstance = function getInstance(element) {
    return Data.getData(element, DATA_KEY$d);
  };

  _createClass(Toast, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$d;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$9;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }]);

  return Toast;
}();

var $$e = getjQuery();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 *  add .toast to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($$e) {
  var JQUERY_NO_CONFLICT$d = $$e.fn[NAME$d];
  $$e.fn[NAME$d] = Toast.jQueryInterface;
  $$e.fn[NAME$d].Constructor = Toast;

  $$e.fn[NAME$d].noConflict = function () {
    $$e.fn[NAME$d] = JQUERY_NO_CONFLICT$d;
    return Toast.jQueryInterface;
  };
}


//# sourceMappingURL=coreui.esm.js.map


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");














function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");








function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);

    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");


function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) === 'body';
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"]; // $FlowFixMe

  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])()), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map


/***/ }),

/***/ "./resources/js/backend/alert.js":
/*!***************************************!*\
  !*** ./resources/js/backend/alert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SwalModal = function SwalModal(icon, title, html) {
  Swal.fire({
    icon: icon,
    title: title,
    html: html
  });
};

var SwalConfirm = function SwalConfirm(icon, title, html, confirmButtonText, method, params, callback) {
  Swal.fire({
    icon: icon,
    title: title,
    html: html,
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: confirmButtonText,
    reverseButtons: true
  }).then(function (result) {
    if (result.value) {
      return window.livewire.emit(method, params);
    }

    if (callback) {
      return window.livewire.emit(callback);
    }
  });
};

var SwalAlert = function SwalAlert(icon, title) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7000;
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timeout,
    onOpen: function onOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  Toast.fire({
    icon: icon,
    title: title
  });
};

document.addEventListener('DOMContentLoaded', function () {
  window.livewire.on('swal:modal', function (data) {
    SwalModal(data.icon, data.title, data.text);
  });
  window.livewire.on('swal:confirm', function (data) {
    SwalConfirm(data.icon, data.title, data.text, data.confirmText, data.method, data.params, data.callback);
  });
  window.livewire.on('swal:alert', function (data) {
    SwalAlert(data.icon, data.title, data.timeout);
  });
  window.livewire.on('place-bets-puti', function (data) {
    var element = document.querySelector('.puti-pool');
    element.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');
  });
  window.livewire.on('place-bets-pula', function (data) {
    var element = document.querySelector('.pula-pool');
    element.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');
  });
});

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);

window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); // CoreUI

__webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.esm.js"); // Boilerplate


__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

__webpack_require__(/*! ./alert */ "./resources/js/backend/alert.js");

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Place any jQuery/helper plugins in here.
 */
$(function () {
  /**
   * Checkbox tree for permission selecting
   */
  $('#tree :checkbox').on('click change', function () {
    if ($(this).is(':checked')) {
      $(this).siblings('ul').find('input[type="checkbox"]').attr('checked', true).attr('disabled', true);
    } else {
      $(this).siblings('ul').find('input[type="checkbox"]').removeAttr('checked').removeAttr('disabled');
    }
  });
  $('#tree :checkbox').each(function () {
    if ($(this).is(':checked')) {
      $(this).siblings('ul').find('input[type="checkbox"]').attr('checked', true).attr('disabled', true);
    }
  });
  /**
   * Disable submit inputs in the given form
   *
   * @param form
   */

  function disableSubmitButtons(form) {
    form.find('input[type="submit"]').attr('disabled', true);
    form.find('button[type="submit"]').attr('disabled', true);
  }
  /**
   * Enable the submit inputs in a given form
   *
   * @param form
   */


  function enableSubmitButtons(form) {
    form.find('input[type="submit"]').removeAttr('disabled');
    form.find('button[type="submit"]').removeAttr('disabled');
  }
  /**
   * Disable all submit buttons once clicked
   */


  $('form').submit(function () {
    disableSubmitButtons($(this));
    return true;
  });
  /**
   * Add a confirmation to a delete button/form
   */

  $('body').on('submit', 'form[name=delete-item]', function (e) {
    var _this = this;

    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      showCancelButton: true,
      confirmButtonText: 'Confirm Delete',
      cancelButtonText: 'Cancel',
      icon: 'warning'
    }).then(function (result) {
      if (result.value) {
        _this.submit();
      } else {
        enableSubmitButtons($(_this));
      }
    });
  }).on('submit', 'form[name=confirm-item]', function (e) {
    var _this2 = this;

    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      cancelButtonText: 'Cancel',
      icon: 'warning'
    }).then(function (result) {
      if (result.value) {
        _this2.submit();
      } else {
        enableSubmitButtons($(_this2));
      }
    });
  }).on('click', 'a[name=confirm-item]', function (e) {
    var _this3 = this;

    /**
     * Add an 'are you sure' pop-up to any button/link
     */
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      cancelButtonText: 'Cancel',
      icon: 'info'
    }).then(function (result) {
      result.value && window.location.assign($(_this3).attr('href'));
    });
  }).on('submit', 'form[data-confirm]', function (e) {
    var _this4 = this;

    /**
     * Add an 'are you sure' pop-up to any button/link
     */
    e.preventDefault();
    var config = $(this).data('confirm');
    var swalConfig = {
      title: config.title || 'Are you sure you want to do this?',
      showCancelButton: config.showCancelButton || true,
      confirmButtonText: config.confirmButtonText || 'Continue',
      cancelButtonText: config.cancelButtonText || 'Cancel',
      icon: config.icon || 'info'
    };
    Swal.fire(swalConfig).then(function (result) {
      if (result.value) {
        _this4.submit();
      } else {
        enableSubmitButtons($(_this4));
      }
    });
  }); // Remember tab on page load

  $('a[data-toggle="tab"], a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var hash = $(e.target).attr('href');
    history.pushState ? history.pushState(null, null, hash) : location.hash = hash;
  });
  var hash = window.location.hash;

  if (hash) {
    $('.nav-link[href="' + hash + '"]').tab('show');
  } // Enable tooltips everywhere


  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ 3:
/*!*******************************************!*\
  !*** multi ./resources/js/backend/app.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/local/var/www/htdocs/dropball/resources/js/backend/app.js */"./resources/js/backend/app.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Rpc3QvcGVyZmVjdC1zY3JvbGxiYXIuZXNtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyJdLCJuYW1lcyI6WyJTd2FsTW9kYWwiLCJpY29uIiwidGl0bGUiLCJodG1sIiwiU3dhbCIsImZpcmUiLCJTd2FsQ29uZmlybSIsImNvbmZpcm1CdXR0b25UZXh0IiwibWV0aG9kIiwicGFyYW1zIiwiY2FsbGJhY2siLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJyZXZlcnNlQnV0dG9ucyIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsIndpbmRvdyIsImxpdmV3aXJlIiwiZW1pdCIsIlN3YWxBbGVydCIsInRpbWVvdXQiLCJUb2FzdCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJvbk9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJkb2N1bWVudCIsIm9uIiwiZGF0YSIsInRleHQiLCJjb25maXJtVGV4dCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiJCIsImpRdWVyeSIsInJlcXVpcmUiLCJpcyIsInNpYmxpbmdzIiwiZmluZCIsImF0dHIiLCJyZW1vdmVBdHRyIiwiZWFjaCIsImRpc2FibGVTdWJtaXRCdXR0b25zIiwiZm9ybSIsImVuYWJsZVN1Ym1pdEJ1dHRvbnMiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxCdXR0b25UZXh0IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjb25maWciLCJzd2FsQ29uZmlnIiwiaGFzaCIsInRhcmdldCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0YWIiLCJ0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDRzs7QUFFakQ7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsMkJBQTJCO0FBQzlELHNDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsU0FBUztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsOENBQThDOztBQUU5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLGtEQUFrRDs7QUFFbEQ7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFpRSx5R0FBeUc7O0FBRTFLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsaUJBQWlCLDJEQUFZO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFZO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUVBQW1FLHNHQUFzRzs7QUFFeks7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFJQUFxSTs7QUFFckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUwsc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwyREFBWTtBQUMzQjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0RBQXNEOzs7QUFHdEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG1FQUFZO0FBQ2pDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsNkNBQTZDLGFBQWEsR0FBRyxXQUFXO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQsZ0dBQWdHOztBQUU1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Qsc0JBQXNCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvREFBb0QsMEJBQTBCO0FBQzlFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZDQUE2QyxnRUFBZ0U7O0FBRTdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLEtBQUs7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUseURBQWdCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSwyREFBMkQ7QUFDM0Q7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix5REFBZ0I7QUFDckM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQixVQUFVLGlDQUFpQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0REFBNEQsK0dBQStHO0FBQzNLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNKO0FBQ3RKOzs7Ozs7Ozs7Ozs7O0FDM3FNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNOO0FBQ1E7QUFDSjtBQUNFO0FBQ1I7QUFDWjtBQUNrQjtBQUNsQjtBQUNnQjtBQUNWO0FBQ007QUFDRDtBQUNwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSxxQkFBcUIsMkVBQVMsY0FBYywrRUFBaUIseUNBQXlDLCtFQUFpQjtBQUN2SCxrQkFBa0IsK0VBQWlCO0FBQ25DLFVBQVU7QUFDVjs7QUFFQSwrQkFBK0Isd0VBQWMsQ0FBQyxzRUFBVyx3REFBd0Q7O0FBRWpIO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDs7QUFFQSxZQUFZLElBQXFDO0FBQ2pELDBCQUEwQixrRUFBUTtBQUNsQztBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVUsMkVBQWlCOztBQUUzQixjQUFjLDBFQUFnQiw4QkFBOEIsK0NBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsOEVBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDs7O0FBR0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLGNBQWMsSUFBcUM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0EscUJBQXFCLDhFQUFnQixZQUFZLDZFQUFlO0FBQ2hFLGtCQUFrQiwyRUFBYTtBQUMvQixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDZDQUE2QyxLQUFLOztBQUVsRDtBQUNBLHNFQUFzRTtBQUN0RSxTQUFTO0FBQ1Q7O0FBRUEsMkJBQTJCLHVDQUF1QztBQUNsRSxjQUFjLElBQXFDO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGNBQWMsa0VBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ08sa0RBQWtEOzs7Ozs7Ozs7Ozs7OztBQy9QekQ7QUFBQTtBQUFBO0FBQStDO0FBQ2hDO0FBQ2YsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsbUVBQVk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNZO0FBQ0E7QUFDSTtBQUNKO0FBQ007QUFDSjtBQUNNO0FBQ0k7QUFDaEI7QUFDVjtBQUNNO0FBQ2lCOztBQUU1RDtBQUNBLGFBQWEseUVBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtEQUFRLEdBQUcsMkVBQWdCLENBQUMsbUVBQWUsYUFBYSxvRUFBYSxnRUFBZ0UsMkVBQWdCLENBQUMsbUVBQWUsQ0FBQyxzRUFBa0I7QUFDcE4sQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0Esd0JBQXdCLHFFQUFpQixDQUFDLGlFQUFhO0FBQ3ZELHdEQUF3RCxvRUFBZ0I7QUFDeEUsNENBQTRDLG9FQUFhLFlBQVksbUVBQWU7O0FBRXBGLE9BQU8sZ0VBQVM7QUFDaEI7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLFdBQVcsZ0VBQVMsb0JBQW9CLDZEQUFRLG9DQUFvQyxnRUFBVztBQUMvRixHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ2hCO0FBQ0o7QUFDSztBQUNXO0FBQ0Y7QUFDUjtBQUNqRDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0VBQWtCO0FBQzFDLGFBQWEseUVBQXFCO0FBQ2xDLGdDQUFnQyxvRUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBVztBQUNuQixJQUFJLGtFQUFjO0FBQ2xCLGVBQWUsaUVBQWE7QUFDNUI7O0FBRUEsUUFBUSxvRUFBYTtBQUNyQixnQkFBZ0IseUVBQXFCO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLHVFQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBdUM7QUFDeEI7QUFDZixTQUFTLDZEQUFTO0FBQ2xCLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUE0QztBQUM3QjtBQUNmO0FBQ0EsV0FBVyxnRUFBUztBQUNwQixDOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDSjtBQUNNO0FBQ1I7QUFDbkQ7O0FBRWU7QUFDZixhQUFhLHNFQUFrQjtBQUMvQixrQkFBa0IsbUVBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVFQUFtQjtBQUNyRDs7QUFFQSxNQUFNLG9FQUFnQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNaO0FBQ1M7QUFDYTtBQUM5QztBQUNmLGVBQWUsNkRBQVMsV0FBVyxvRUFBYTtBQUNoRCxXQUFXLG1FQUFlO0FBQzFCLEdBQUc7QUFDSCxXQUFXLHdFQUFvQjtBQUMvQjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNJO0FBQ1U7QUFDTDtBQUNDO0FBQ0Y7QUFDVTs7QUFFekQ7QUFDQSxPQUFPLG9FQUFhO0FBQ3BCLEVBQUUsb0VBQWdCO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLHNFQUFrQjs7QUFFakMsUUFBUSwrREFBVyw2QkFBNkIsb0VBQWdCLHdDQUF3QyxvRUFBZ0I7QUFDeEg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBLG9CQUFvQixpRUFBYTs7QUFFakMsU0FBUyxvRUFBYSwwQ0FBMEMsK0RBQVc7QUFDM0UsY0FBYyxvRUFBZ0IsY0FBYztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7O0FBR2U7QUFDZixlQUFlLDZEQUFTO0FBQ3hCOztBQUVBLHlCQUF5QixrRUFBYyxrQkFBa0Isb0VBQWdCO0FBQ3pFO0FBQ0E7O0FBRUEsc0JBQXNCLCtEQUFXLDZCQUE2QixvRUFBZ0I7QUFDOUU7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNjO0FBQzFDO0FBQ2YsTUFBTSwrREFBVztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQWtCOztBQUV0QjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDRTtBQUNOO0FBQ0s7QUFDakM7QUFDZiw0Q0FBNEMsK0RBQVc7QUFDdkQ7QUFDQTtBQUNBOztBQUVBLE1BQU0sb0VBQWEsVUFBVSxrRUFBYztBQUMzQztBQUNBOztBQUVBLHlCQUF5QixpRUFBYTtBQUN0QyxDOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ2tCO0FBQ0U7QUFDNUM7QUFDZixZQUFZLDZEQUFTO0FBQ3JCLGFBQWEsc0VBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsc0NBQXNDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1RUFBbUI7QUFDOUI7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUEsa0JBQWtCLFNBQVMsaUJBQWlCOztBQUU1Qyw2REFBNkQ7QUFDOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUF1QztBQUN4QjtBQUNmLFlBQVksNkRBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNOO0FBQ047QUFDcEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseUVBQXFCLENBQUMsc0VBQWtCLGtCQUFrQixtRUFBZTtBQUNsRixDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ3ZDO0FBQ0EsV0FBVzs7QUFFWDtBQUNBLG1CQUFtQiw2REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7QUFHZjtBQUNBLG1CQUFtQiw2REFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7QUFHZDtBQUNBLG1CQUFtQiw2REFBUztBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBcUQ7QUFDdEM7QUFDZjtBQUNBLDBCQUEwQixvRUFBZ0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQTJDO0FBQzVCO0FBQ2YsdUNBQXVDLCtEQUFXO0FBQ2xELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ0o7QUFDSjtBQUNKO0FBQ1U7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtRUFBZTtBQUNwQyxlQUFlLCtEQUFXO0FBQzFCLFlBQVksNkRBQVM7QUFDckIsK0RBQStELGtFQUFjO0FBQzdFO0FBQ0E7QUFDQSx1Q0FBdUMsaUVBQWE7QUFDcEQsQzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0EsQ0FBQyxNQUFNOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLGdIOzs7Ozs7Ozs7Ozs7QUM5QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFDVTs7QUFFaUU7O0FBRTNEOzs7Ozs7Ozs7Ozs7OztBQ0wzQztBQUFBO0FBQUE7QUFBc0Q7QUFDSztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QyxTQUFTLDhFQUFhLGNBQWMseUVBQVc7QUFDL0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSEFBc0g7O0FBRXRIO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSSxFQUFFOztBQUViLFdBQVcsOEVBQWEsY0FBYyx5RUFBVztBQUNqRDtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3JGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQ0Y7QUFDVjtBQUNjO0FBQ2M7QUFDcEM7QUFDd0I7QUFDTjtBQUNhO0FBQ1o7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEVBQWdCO0FBQ3RDLGFBQWEsa0ZBQXdCO0FBQ3JDLG9CQUFvQiw4Q0FBSSxFQUFFLCtDQUFLO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwyRUFBYTtBQUMvQiwrQkFBK0IsNkNBQUcsR0FBRyw4Q0FBSTtBQUN6QywrQkFBK0IsZ0RBQU0sR0FBRywrQ0FBSztBQUM3QztBQUNBO0FBQ0EsMEJBQTBCLDZFQUFlO0FBQ3pDO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0VBQU0sbUJBQW1COztBQUV4QztBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0MsU0FBUyw4RUFBYTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxzRUFBUTtBQUNmLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDRFQUFrQix5Q0FBeUMseUVBQWUsVUFBVSx3REFBYztBQUMvRztBQUNBLENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2xHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ087QUFDWjtBQUNrQjtBQUNKO0FBQ0o7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBSTtBQUNsQixjQUFjLDZDQUFHO0FBQ2pCOztBQUVBO0FBQ0EsdUJBQXVCLDZFQUFlOztBQUV0Qyx5QkFBeUIsdUVBQVM7QUFDbEMscUJBQXFCLGdGQUFrQjtBQUN2QyxLQUFLOztBQUVMLGdEQUFnRDs7O0FBR2hELHNCQUFzQiw2Q0FBRztBQUN6QixjQUFjLGdEQUFNO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsOENBQUk7QUFDMUIsY0FBYywrQ0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLHlDQUF5QyxtQkFBbUIsc0JBQXNCO0FBQ2xGOztBQUVBLHVDQUF1QyxtQkFBbUIsdUJBQXVCO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0MsNkJBQTZCLDhFQUFnQjs7QUFFN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDBFQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxrRUFBa0UsbUJBQW1CO0FBQzdJO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVEQUF1RCxpRUFBaUUsbUJBQW1CO0FBQzNJO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwREFBMEQsOEJBQThCO0FBQ3hGO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDeklEO0FBQUE7QUFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBUztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0U7QUFDUjtBQUMwQjtBQUM5QjtBQUNZO0FBQ0E7QUFDaEI7O0FBRXBEO0FBQ0EsTUFBTSwwRUFBZ0IsZ0JBQWdCLDhDQUFJO0FBQzFDO0FBQ0E7O0FBRUEsMEJBQTBCLDhFQUFvQjtBQUM5QyxVQUFVLHVGQUE2QixnQ0FBZ0MsdUZBQTZCO0FBQ3BHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwRUFBZ0I7QUFDdEM7QUFDQSxpR0FBaUcsOEVBQW9CO0FBQ3JIO0FBQ0Esc0JBQXNCLDBFQUFnQixnQkFBZ0IsOENBQUksR0FBRyw4RUFBb0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7O0FBRUEseUJBQXlCLDBFQUFnQjs7QUFFekMsMkJBQTJCLHNFQUFZLGdCQUFnQiwrQ0FBSztBQUM1RCxzQkFBc0IsNkNBQUcsRUFBRSxnREFBTTtBQUNqQztBQUNBLG1CQUFtQix3RUFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDREQUE0RCwrQ0FBSyxHQUFHLDhDQUFJLHNCQUFzQixnREFBTSxHQUFHLDZDQUFHOztBQUUxRztBQUNBLDBCQUEwQiw4RUFBb0I7QUFDOUM7O0FBRUEsMkJBQTJCLDhFQUFvQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDbEpEO0FBQUE7QUFBQTtBQUF1RDtBQUNDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsNkNBQUcsRUFBRSwrQ0FBSyxFQUFFLGdEQUFNLEVBQUUsOENBQUk7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdFQUFjO0FBQ3hDO0FBQ0EsR0FBRztBQUNILDBCQUEwQix3RUFBYztBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCw4QkFBOEI7QUFDeEY7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHYztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQzVERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNaO0FBQ2dCO0FBQ0U7QUFDcEI7QUFDQTtBQUNJO0FBQ2M7Ozs7Ozs7Ozs7Ozs7QUNQOUQ7QUFBQTtBQUFBO0FBQUE7QUFBNEQ7QUFDRDtBQUNwRDtBQUNQLHNCQUFzQiwwRUFBZ0I7QUFDdEMsd0JBQXdCLDhDQUFJLEVBQUUsNkNBQUc7O0FBRWpDLGlGQUFpRixZQUFZO0FBQzdGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsOENBQUksRUFBRSwrQ0FBSztBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVU7QUFDdkI7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDcEREO0FBQUE7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdFQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEQ7QUFDRjtBQUNnQjtBQUM1QjtBQUNSO0FBQ2tCO0FBQ0k7QUFDTjtBQUNKO0FBQ1k7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdFQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiwwRUFBZ0I7QUFDdEMsa0JBQWtCLHNFQUFZO0FBQzlCO0FBQ0EsaUJBQWlCLGtGQUF3QjtBQUN6QyxnQkFBZ0Isb0VBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHLGtCQUFrQjtBQUM1SDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsNkNBQUcsR0FBRyw4Q0FBSTtBQUNoRCxxQ0FBcUMsZ0RBQU0sR0FBRywrQ0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFLO0FBQ3BDLCtCQUErQiwrQ0FBSywwQ0FBMEM7QUFDOUU7O0FBRUE7QUFDQSw2Q0FBNkMsMkVBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EseUhBQXlILDRFQUFrQjtBQUMzSTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0VBQU07QUFDekI7QUFDQTtBQUNBLG9EQUFvRCw2RUFBZTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBTTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsNkNBQUcsR0FBRyw4Q0FBSTs7QUFFakQsc0NBQXNDLGdEQUFNLEdBQUcsK0NBQUs7O0FBRXBEOztBQUVBOztBQUVBOztBQUVBLDJCQUEyQixnRUFBTTs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUN0SEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9FO0FBQ1Q7QUFDRjtBQUNBO0FBQ0o7QUFDckQsd0JBQXdCLG9FQUFjLEVBQUUsbUVBQWEsRUFBRSxtRUFBYSxFQUFFLGlFQUFXO0FBQ2pGLGdDQUFnQyx3RUFBZTtBQUMvQztBQUNBLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0U7QUFDVDtBQUNGO0FBQ0E7QUFDSjtBQUNWO0FBQ0o7QUFDc0I7QUFDcEI7QUFDRjtBQUN2Qyx3QkFBd0Isb0VBQWMsRUFBRSxtRUFBYSxFQUFFLG1FQUFhLEVBQUUsaUVBQVcsRUFBRSw0REFBTSxFQUFFLDBEQUFJLEVBQUUscUVBQWUsRUFBRSwyREFBSyxFQUFFLDBEQUFJO0FBQzdILGdDQUFnQyx3RUFBZTtBQUMvQztBQUNBLENBQUMsRUFBRTs7QUFFd0U7O0FBRVA7Ozs7Ozs7Ozs7Ozs7O0FDakJwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDa0Q7QUFDOUM7QUFDSTs7QUFFckQsMEJBQTBCLCtCQUErQjs7QUFFekQsSUFBSSxzQkFBc0Isc0NBQXNDO0FBQ2pEO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLG9EQUFhO0FBQzlFLGtCQUFrQixnRUFBWTtBQUM5QixnREFBZ0QsNkRBQW1CLEdBQUcsNkRBQW1CO0FBQ3pGLFdBQVcsZ0VBQVk7QUFDdkIsR0FBRyxJQUFJLHdEQUFjLENBQUM7O0FBRXRCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxxQkFBcUIsa0VBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUUsb0VBQWdCO0FBQ3ZCO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ1I7QUFDd0I7QUFDRjtBQUNwRDtBQUNmO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvRUFBZ0I7QUFDbEQsOEJBQThCLGdFQUFZO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNkNBQUc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsZ0RBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsK0NBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsOENBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsNEVBQXdCOztBQUV6RDtBQUNBOztBQUVBO0FBQ0EsV0FBVywrQ0FBSztBQUNoQjtBQUNBOztBQUVBLFdBQVcsNkNBQUc7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEU7QUFDWjtBQUNNO0FBQ25CO0FBQ0k7QUFDMEQ7QUFDeEQ7QUFDRTtBQUNOOztBQUVwQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx5REFBZTtBQUMvRDtBQUNBLHdEQUF3RCxrREFBUTtBQUNoRTtBQUNBLDBEQUEwRCxnREFBTTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzRUFBa0IseUNBQXlDLG1FQUFlLFVBQVUsd0RBQWM7QUFDeEgsc0NBQXNDLGdEQUFNLEdBQUcsbURBQVMsR0FBRyxnREFBTTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkVBQWUsQ0FBQywwRUFBUyxnREFBZ0QsZ0ZBQWtCO0FBQ3RILDRCQUE0QixtRkFBcUI7QUFDakQsc0JBQXNCLGtFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QixvRUFBZ0IsK0JBQStCO0FBQ3hFLDZDQUE2QyxnREFBTSwwQ0FBMEM7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5Qyx5QkFBeUIsZ0RBQU07QUFDL0I7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBSyxFQUFFLGdEQUFNO0FBQ25DLGtCQUFrQiw2Q0FBRyxFQUFFLGdEQUFNO0FBQzdCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBZTtBQUNmLHdGQUF3RixhQUFhO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFtQztBQUNwQjtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxrRkFBa0YseUJBQXlCO0FBQzNHLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsS0FBSztBQUNMO0FBQ0EsR0FBRyxJQUFJLEVBQUU7O0FBRVQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBeUQ7QUFDMUM7QUFDZix1Q0FBdUMsRUFBRSxzRUFBa0I7QUFDM0QsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVlO0FBQ2Y7QUFDQSwwQ0FBMEM7O0FBRTFDLFNBQVMsd0RBQWM7QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBZTtBQUNmLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNZO0FBQzdDO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNO0FBQ2hDOztBQUVBO0FBQ0EsY0FBYyx3REFBYztBQUM1QiwwQkFBMEIsMERBQU0sK0RBQStELHdEQUFjO0FBQzdHOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQU07QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwREFBTTtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFNO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQU07QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0IsMERBQU07QUFDOUI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBeUUsaUNBQWlDO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCLEVBQUU7QUFDdEQsd0JBQXdCLDBCQUEwQixFQUFFO0FBQ3BEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEIsRUFBRTtBQUN4RCw2QkFBNkIsK0JBQStCLEVBQUU7QUFDOUQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0VBQXdFLEVBQUU7QUFDM0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixXQUFXLHFCQUFxQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCwrQkFBK0IsRUFBRTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHNCQUFzQixFQUFFO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVILHdEQUF3RCw0QkFBNEIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLG1DQUFtQztBQUN2RSxzQ0FBc0MsMkVBQTJFOztBQUVqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrQ0FBK0M7QUFDMUUsMEJBQTBCLGtEQUFrRDs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5REFBeUQsc0NBQXNDLEVBQUU7O0FBRWpHLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0Msd0RBQXdELDJCQUEyQixFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5Qyw0QkFBNEIsa0JBQWtCOztBQUU5Qzs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixjQUFjO0FBQzFDLDRCQUE0QixjQUFjO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQyxFQUFFO0FBQ3BFO0FBQ0E7O0FBRWUsK0VBQWdCLEVBQUM7QUFDaEM7Ozs7Ozs7Ozs7OztBQzV6Q0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNDLElBQWQsRUFBdUI7QUFDckNDLE1BQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05KLFFBQUksRUFBSkEsSUFETTtBQUVOQyxTQUFLLEVBQUxBLEtBRk07QUFHTkMsUUFBSSxFQUFKQTtBQUhNLEdBQVY7QUFLSCxDQU5EOztBQVFBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLEVBQW9CSSxpQkFBcEIsRUFBdUNDLE1BQXZDLEVBQStDQyxNQUEvQyxFQUF1REMsUUFBdkQsRUFBb0U7QUFDcEZOLE1BQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05KLFFBQUksRUFBSkEsSUFETTtBQUVOQyxTQUFLLEVBQUxBLEtBRk07QUFHTkMsUUFBSSxFQUFKQSxJQUhNO0FBSU5RLG9CQUFnQixFQUFFLEtBSlo7QUFLTkMsc0JBQWtCLEVBQUUsU0FMZDtBQU1OQyxxQkFBaUIsRUFBRSxNQU5iO0FBT05OLHFCQUFpQixFQUFqQkEsaUJBUE07QUFRTk8sa0JBQWMsRUFBRTtBQVJWLEdBQVYsRUFTR0MsSUFUSCxDQVNRLFVBQUFDLE1BQU0sRUFBSTtBQUNkLFFBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkLGFBQU9DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJaLE1BQXJCLEVBQTZCQyxNQUE3QixDQUFQO0FBQ0g7O0FBRUQsUUFBSUMsUUFBSixFQUFjO0FBQ1YsYUFBT1EsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQlYsUUFBckIsQ0FBUDtBQUNIO0FBQ0osR0FqQkQ7QUFrQkgsQ0FuQkQ7O0FBcUJBLElBQU1XLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNwQixJQUFELEVBQU9DLEtBQVAsRUFBaUM7QUFBQSxNQUFuQm9CLE9BQW1CLHVFQUFULElBQVM7QUFDL0MsTUFBTUMsS0FBSyxHQUFHbkIsSUFBSSxDQUFDb0IsS0FBTCxDQUFXO0FBQ3JCQyxTQUFLLEVBQUUsSUFEYztBQUVyQkMsWUFBUSxFQUFFLFNBRlc7QUFHckJDLHFCQUFpQixFQUFFLEtBSEU7QUFJckJDLFNBQUssRUFBRU4sT0FKYztBQUtyQk8sVUFBTSxFQUFFLGdCQUFBSixLQUFLLEVBQUk7QUFDYkEsV0FBSyxDQUFDSyxnQkFBTixDQUF1QixZQUF2QixFQUFxQzFCLElBQUksQ0FBQzJCLFNBQTFDO0FBQ0FOLFdBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUMxQixJQUFJLENBQUM0QixXQUExQztBQUNIO0FBUm9CLEdBQVgsQ0FBZDtBQVdBVCxPQUFLLENBQUNsQixJQUFOLENBQVc7QUFDUEosUUFBSSxFQUFKQSxJQURPO0FBRVBDLFNBQUssRUFBTEE7QUFGTyxHQUFYO0FBSUgsQ0FoQkQ7O0FBa0JBK0IsUUFBUSxDQUFDSCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRFosUUFBTSxDQUFDQyxRQUFQLENBQWdCZSxFQUFoQixDQUFtQixZQUFuQixFQUFpQyxVQUFBQyxJQUFJLEVBQUk7QUFDckNuQyxhQUFTLENBQUNtQyxJQUFJLENBQUNsQyxJQUFOLEVBQVlrQyxJQUFJLENBQUNqQyxLQUFqQixFQUF3QmlDLElBQUksQ0FBQ0MsSUFBN0IsQ0FBVDtBQUNILEdBRkQ7QUFJQWxCLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQmUsRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUMsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZDN0IsZUFBVyxDQUFDNkIsSUFBSSxDQUFDbEMsSUFBTixFQUFZa0MsSUFBSSxDQUFDakMsS0FBakIsRUFBd0JpQyxJQUFJLENBQUNDLElBQTdCLEVBQW1DRCxJQUFJLENBQUNFLFdBQXhDLEVBQXFERixJQUFJLENBQUMzQixNQUExRCxFQUFrRTJCLElBQUksQ0FBQzFCLE1BQXZFLEVBQStFMEIsSUFBSSxDQUFDekIsUUFBcEYsQ0FBWDtBQUNILEdBRkQ7QUFJQVEsUUFBTSxDQUFDQyxRQUFQLENBQWdCZSxFQUFoQixDQUFtQixZQUFuQixFQUFpQyxVQUFBQyxJQUFJLEVBQUk7QUFDckNkLGFBQVMsQ0FBQ2MsSUFBSSxDQUFDbEMsSUFBTixFQUFZa0MsSUFBSSxDQUFDakMsS0FBakIsRUFBd0JpQyxJQUFJLENBQUNiLE9BQTdCLENBQVQ7QUFDSCxHQUZEO0FBSUFKLFFBQU0sQ0FBQ0MsUUFBUCxDQUFnQmUsRUFBaEIsQ0FBbUIsaUJBQW5CLEVBQXNDLFVBQUFDLElBQUksRUFBSTtBQUMxQyxRQUFNRyxPQUFPLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBRCxXQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLG1CQUF0QixFQUEyQyxvQkFBM0MsRUFBaUUsbUJBQWpFO0FBQ0gsR0FIRDtBQUtBdkIsUUFBTSxDQUFDQyxRQUFQLENBQWdCZSxFQUFoQixDQUFtQixpQkFBbkIsRUFBc0MsVUFBQUMsSUFBSSxFQUFJO0FBQzFDLFFBQU1HLE9BQU8sR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0FELFdBQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsbUJBQXRCLEVBQTJDLG9CQUEzQyxFQUFpRSxtQkFBakU7QUFDSCxHQUhEO0FBSUgsQ0F0QkQsRTs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBRUF2QixNQUFNLENBQUN3QixDQUFQLEdBQVd4QixNQUFNLENBQUN5QixNQUFQLEdBQWdCQyxtQkFBTyxDQUFDLG9EQUFELENBQWxDO0FBQ0ExQixNQUFNLENBQUNkLElBQVAsR0FBY3dDLG1CQUFPLENBQUMsdUVBQUQsQ0FBckIsQyxDQUVBOztBQUNBQSxtQkFBTyxDQUFDLDJFQUFELENBQVAsQyxDQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyw2Q0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLGdEQUFELENBQVAsQzs7Ozs7Ozs7Ozs7QUNYQTs7O0FBR0FGLENBQUMsQ0FBQyxZQUFZO0FBQ1Y7OztBQUdBQSxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlIsRUFBckIsQ0FBd0IsY0FBeEIsRUFBd0MsWUFBVztBQUMvQyxRQUFHUSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLEVBQVIsQ0FBVyxVQUFYLENBQUgsRUFBMkI7QUFDdkJILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksUUFBUixDQUFpQixJQUFqQixFQUF1QkMsSUFBdkIsQ0FBNEIsd0JBQTVCLEVBQXNEQyxJQUF0RCxDQUEyRCxTQUEzRCxFQUFzRSxJQUF0RSxFQUE0RUEsSUFBNUUsQ0FBaUYsVUFBakYsRUFBNkYsSUFBN0Y7QUFDSCxLQUZELE1BRU87QUFDSE4sT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxRQUFSLENBQWlCLElBQWpCLEVBQXVCQyxJQUF2QixDQUE0Qix3QkFBNUIsRUFBc0RFLFVBQXRELENBQWlFLFNBQWpFLEVBQTRFQSxVQUE1RSxDQUF1RixVQUF2RjtBQUNIO0FBQ0osR0FORDtBQVFBUCxHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsSUFBckIsQ0FBMEIsWUFBWTtBQUNsQyxRQUFHUixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLEVBQVIsQ0FBVyxVQUFYLENBQUgsRUFBMkI7QUFDdkJILE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksUUFBUixDQUFpQixJQUFqQixFQUF1QkMsSUFBdkIsQ0FBNEIsd0JBQTVCLEVBQXNEQyxJQUF0RCxDQUEyRCxTQUEzRCxFQUFzRSxJQUF0RSxFQUE0RUEsSUFBNUUsQ0FBaUYsVUFBakYsRUFBNkYsSUFBN0Y7QUFDSDtBQUNKLEdBSkQ7QUFNQTs7Ozs7O0FBS0EsV0FBU0csb0JBQVQsQ0FBOEJDLElBQTlCLEVBQW9DO0FBQ2hDQSxRQUFJLENBQUNMLElBQUwsQ0FBVSxzQkFBVixFQUFrQ0MsSUFBbEMsQ0FBdUMsVUFBdkMsRUFBbUQsSUFBbkQ7QUFDQUksUUFBSSxDQUFDTCxJQUFMLENBQVUsdUJBQVYsRUFBbUNDLElBQW5DLENBQXdDLFVBQXhDLEVBQW9ELElBQXBEO0FBQ0g7QUFFRDs7Ozs7OztBQUtBLFdBQVNLLG1CQUFULENBQTZCRCxJQUE3QixFQUFtQztBQUMvQkEsUUFBSSxDQUFDTCxJQUFMLENBQVUsc0JBQVYsRUFBa0NFLFVBQWxDLENBQTZDLFVBQTdDO0FBQ0FHLFFBQUksQ0FBQ0wsSUFBTCxDQUFVLHVCQUFWLEVBQW1DRSxVQUFuQyxDQUE4QyxVQUE5QztBQUNIO0FBRUQ7Ozs7O0FBR0FQLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVksTUFBVixDQUFpQixZQUFZO0FBQ3pCSCx3QkFBb0IsQ0FBQ1QsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFwQjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBSEQ7QUFLQTs7OztBQUdBQSxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVSLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHdCQUF2QixFQUFpRCxVQUFTcUIsQ0FBVCxFQUFZO0FBQUE7O0FBQ3pEQSxLQUFDLENBQUNDLGNBQUY7QUFFQXBELFFBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05ILFdBQUssRUFBRSw0Q0FERDtBQUVOUyxzQkFBZ0IsRUFBRSxJQUZaO0FBR05KLHVCQUFpQixFQUFFLGdCQUhiO0FBSU5rRCxzQkFBZ0IsRUFBRSxRQUpaO0FBS054RCxVQUFJLEVBQUU7QUFMQSxLQUFWLEVBTUdjLElBTkgsQ0FNUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2QsYUFBSSxDQUFDcUMsTUFBTDtBQUNILE9BRkQsTUFFTztBQUNIRCwyQkFBbUIsQ0FBQ1gsQ0FBQyxDQUFDLEtBQUQsQ0FBRixDQUFuQjtBQUNIO0FBQ0osS0FaRDtBQWFILEdBaEJELEVBaUJLUixFQWpCTCxDQWlCUSxRQWpCUixFQWlCa0IseUJBakJsQixFQWlCNkMsVUFBVXFCLENBQVYsRUFBYTtBQUFBOztBQUNsREEsS0FBQyxDQUFDQyxjQUFGO0FBRUFwRCxRQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOSCxXQUFLLEVBQUUsbUNBREQ7QUFFTlMsc0JBQWdCLEVBQUUsSUFGWjtBQUdOSix1QkFBaUIsRUFBRSxVQUhiO0FBSU5rRCxzQkFBZ0IsRUFBRSxRQUpaO0FBS054RCxVQUFJLEVBQUU7QUFMQSxLQUFWLEVBTUdjLElBTkgsQ0FNUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2QsY0FBSSxDQUFDcUMsTUFBTDtBQUNILE9BRkQsTUFFTztBQUNIRCwyQkFBbUIsQ0FBQ1gsQ0FBQyxDQUFDLE1BQUQsQ0FBRixDQUFuQjtBQUNIO0FBQ0osS0FaRDtBQWFILEdBakNMLEVBa0NLUixFQWxDTCxDQWtDUSxPQWxDUixFQWtDaUIsc0JBbENqQixFQWtDeUMsVUFBVXFCLENBQVYsRUFBYTtBQUFBOztBQUNsRDs7O0FBR0FBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBcEQsUUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkgsV0FBSyxFQUFFLG1DQUREO0FBRU5TLHNCQUFnQixFQUFFLElBRlo7QUFHTkosdUJBQWlCLEVBQUUsVUFIYjtBQUlOa0Qsc0JBQWdCLEVBQUUsUUFKWjtBQUtOeEQsVUFBSSxFQUFFO0FBTEEsS0FBVixFQU1HYyxJQU5ILENBTVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxZQUFNLENBQUNDLEtBQVAsSUFBZ0JDLE1BQU0sQ0FBQ3dDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCakIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsTUFBYixDQUF2QixDQUFoQjtBQUNILEtBUkQ7QUFTSCxHQWpERCxFQWtES2QsRUFsREwsQ0FrRFEsUUFsRFIsRUFrRGtCLG9CQWxEbEIsRUFrRHdDLFVBQVVxQixDQUFWLEVBQWE7QUFBQTs7QUFDakQ7OztBQUdBQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJSSxNQUFNLEdBQUlsQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFQLElBQVIsQ0FBYSxTQUFiLENBQWQ7QUFDQSxRQUFJMEIsVUFBVSxHQUFHO0FBQ2IzRCxXQUFLLEVBQUUwRCxNQUFNLENBQUMxRCxLQUFQLElBQWdCLG1DQURWO0FBRWJTLHNCQUFnQixFQUFFaUQsTUFBTSxDQUFDakQsZ0JBQVAsSUFBMkIsSUFGaEM7QUFHYkosdUJBQWlCLEVBQUVxRCxNQUFNLENBQUNyRCxpQkFBUCxJQUE0QixVQUhsQztBQUlia0Qsc0JBQWdCLEVBQUVHLE1BQU0sQ0FBQ0gsZ0JBQVAsSUFBMkIsUUFKaEM7QUFLYnhELFVBQUksRUFBRTJELE1BQU0sQ0FBQzNELElBQVAsSUFBZTtBQUxSLEtBQWpCO0FBT0FHLFFBQUksQ0FBQ0MsSUFBTCxDQUFVd0QsVUFBVixFQUFzQjlDLElBQXRCLENBQTJCLFVBQUNDLE1BQUQsRUFBWTtBQUNuQyxVQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDZCxjQUFJLENBQUNxQyxNQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hELDJCQUFtQixDQUFDWCxDQUFDLENBQUMsTUFBRCxDQUFGLENBQW5CO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0F0RUQsRUFqRFUsQ0F5SFY7O0FBQ0FBLEdBQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEUixFQUFqRCxDQUFvRCxjQUFwRCxFQUFvRSxVQUFVcUIsQ0FBVixFQUFhO0FBQzdFLFFBQUlPLElBQUksR0FBR3BCLENBQUMsQ0FBQ2EsQ0FBQyxDQUFDUSxNQUFILENBQUQsQ0FBWWYsSUFBWixDQUFpQixNQUFqQixDQUFYO0FBQ0FnQixXQUFPLENBQUNDLFNBQVIsR0FBb0JELE9BQU8sQ0FBQ0MsU0FBUixDQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QkgsSUFBOUIsQ0FBcEIsR0FBMERKLFFBQVEsQ0FBQ0ksSUFBVCxHQUFnQkEsSUFBMUU7QUFDSCxHQUhEO0FBS0EsTUFBSUEsSUFBSSxHQUFHNUMsTUFBTSxDQUFDd0MsUUFBUCxDQUFnQkksSUFBM0I7O0FBQ0EsTUFBSUEsSUFBSixFQUFVO0FBQ05wQixLQUFDLENBQUMscUJBQW1Cb0IsSUFBbkIsR0FBd0IsSUFBekIsQ0FBRCxDQUFnQ0ksR0FBaEMsQ0FBb0MsTUFBcEM7QUFDSCxHQWxJUyxDQW9JVjs7O0FBQ0F4QixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnlCLE9BQTdCO0FBQ0gsQ0F0SUEsQ0FBRCxDIiwiZmlsZSI6Ii9qcy9iYWNrZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogQ29yZVVJIHYzLjMuMCAoaHR0cHM6Ly9jb3JldWkuaW8pXG4gICogQ29weXJpZ2h0IDIwMjAgY3JlYXRpdmVMYWJzIMWBdWthc3ogSG9sZWN6ZWtcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqL1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWFscGhhMSk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG52YXIgTUFYX1VJRCA9IDEwMDAwMDA7XG52YXIgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwO1xudmFyIFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnOyAvLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5cbnZhciB0b1R5cGUgPSBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gXCJcIiArIG9iajtcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG59O1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxudmFyIGdldFVJRCA9IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTtcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgcmV0dXJuIHByZWZpeDtcbn07XG5cbnZhciBnZXRTZWxlY3RvciA9IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgdmFyIGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yO1xufTtcblxudmFyIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQgPSBmdW5jdGlvbiBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IGZ1bmN0aW9uIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcbiAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsO1xufTtcblxudmFyIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfSAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuXG5cbiAgdmFyIF93aW5kb3ckZ2V0Q29tcHV0ZWRTdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3dpbmRvdyRnZXRDb21wdXRlZFN0LnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EZWxheSA9IF93aW5kb3ckZ2V0Q29tcHV0ZWRTdC50cmFuc2l0aW9uRGVsYXk7XG5cbiAgdmFyIGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICB2YXIgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7IC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcblxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwO1xuICB9IC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcblxuXG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXTtcbiAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVI7XG59O1xuXG52YXIgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcbn07XG5cbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGU7XG59O1xuXG52YXIgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBlbXVsYXRlVHJhbnNpdGlvbkVuZChlbGVtZW50LCBkdXJhdGlvbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHZhciBkdXJhdGlvblBhZGRpbmcgPSA1O1xuICB2YXIgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcik7XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpO1xuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbik7XG59O1xuXG52YXIgdHlwZUNoZWNrQ29uZmlnID0gZnVuY3Rpb24gdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV07XG4gICAgdmFyIHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICB2YXIgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XG5cbiAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpICsgXCI6IFwiICsgKFwiT3B0aW9uIFxcXCJcIiArIHByb3BlcnR5ICsgXCJcXFwiIHByb3ZpZGVkIHR5cGUgXFxcIlwiICsgdmFsdWVUeXBlICsgXCJcXFwiIFwiKSArIChcImJ1dCBleHBlY3RlZCB0eXBlIFxcXCJcIiArIGV4cGVjdGVkVHlwZXMgKyBcIlxcXCIuXCIpKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUpIHtcbiAgICB2YXIgZWxlbWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICB2YXIgcGFyZW50Tm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgIHJldHVybiBlbGVtZW50U3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIHBhcmVudE5vZGVTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgZWxlbWVudFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGZpbmRTaGFkb3dSb290ID0gZnVuY3Rpb24gZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcblxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcblxuXG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcbn07XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xufTtcblxudmFyIHJlZmxvdyA9IGZ1bmN0aW9uIHJlZmxvdyhlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbn07XG5cbnZhciBnZXRqUXVlcnkgPSBmdW5jdGlvbiBnZXRqUXVlcnkoKSB7XG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgalF1ZXJ5ID0gX3dpbmRvdy5qUXVlcnk7XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbnZhciBtYXBEYXRhID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RvcmVEYXRhID0ge307XG4gIHZhciBpZCA9IDE7XG4gIHJldHVybiB7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZWxlbWVudCwga2V5LCBkYXRhKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQua2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlbGVtZW50LmtleSA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgICAgaWQrKztcbiAgICAgIH1cblxuICAgICAgc3RvcmVEYXRhW2VsZW1lbnQua2V5LmlkXSA9IGRhdGE7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCB0eXBlb2YgZWxlbWVudC5rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5UHJvcGVydGllcyA9IGVsZW1lbnQua2V5O1xuXG4gICAgICBpZiAoa2V5UHJvcGVydGllcy5rZXkgPT09IGtleSkge1xuICAgICAgICByZXR1cm4gc3RvcmVEYXRhW2tleVByb3BlcnRpZXMuaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGtleVByb3BlcnRpZXMgPSBlbGVtZW50LmtleTtcblxuICAgICAgaWYgKGtleVByb3BlcnRpZXMua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlRGF0YVtrZXlQcm9wZXJ0aWVzLmlkXTtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQua2V5O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0oKTtcblxudmFyIERhdGEgPSB7XG4gIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoaW5zdGFuY2UsIGtleSwgZGF0YSkge1xuICAgIG1hcERhdGEuc2V0KGluc3RhbmNlLCBrZXksIGRhdGEpO1xuICB9LFxuICBnZXREYXRhOiBmdW5jdGlvbiBnZXREYXRhKGluc3RhbmNlLCBrZXkpIHtcbiAgICByZXR1cm4gbWFwRGF0YS5nZXQoaW5zdGFuY2UsIGtleSk7XG4gIH0sXG4gIHJlbW92ZURhdGE6IGZ1bmN0aW9uIHJlbW92ZURhdGEoaW5zdGFuY2UsIGtleSkge1xuICAgIG1hcERhdGEuZGVsZXRlKGluc3RhbmNlLCBrZXkpO1xuICB9XG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xudmFyIGZpbmQgPSBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsO1xudmFyIGZpbmRPbmUgPSBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yOyAvLyBNU0VkZ2UgcmVzZXRzIGRlZmF1bHRQcmV2ZW50ZWQgZmxhZyB1cG9uIGRpc3BhdGNoRXZlbnQgY2FsbCBpZiBhdCBsZWFzdCBvbmUgbGlzdGVuZXIgaXMgYXR0YWNoZWRcblxudmFyIGRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZSA9IG5ldyBDdXN0b21FdmVudCgnQm9vdHN0cmFwJywge1xuICAgIGNhbmNlbGFibGU6IHRydWVcbiAgfSk7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignQm9vdHN0cmFwJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9KTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gIHJldHVybiBlLmRlZmF1bHRQcmV2ZW50ZWQ7XG59KCk7XG5cbnZhciBzY29wZVNlbGVjdG9yUmVnZXggPSAvOnNjb3BlXFxiLztcblxudmFyIHN1cHBvcnRTY29wZVF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRyeSB7XG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgKicpO1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59KCk7XG5cbmlmICghc3VwcG9ydFNjb3BlUXVlcnkpIHtcbiAgZmluZCA9IGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICBpZiAoIXNjb3BlU2VsZWN0b3JSZWdleC50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgdmFyIGhhc0lkID0gQm9vbGVhbih0aGlzLmlkKTtcblxuICAgIGlmICghaGFzSWQpIHtcbiAgICAgIHRoaXMuaWQgPSBnZXRVSUQoJ3Njb3BlJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVMaXN0ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2Uoc2NvcGVTZWxlY3RvclJlZ2V4LCBcIiNcIiArIHRoaXMuaWQpO1xuICAgICAgbm9kZUxpc3QgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIWhhc0lkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlTGlzdDtcbiAgfTtcblxuICBmaW5kT25lID0gZnVuY3Rpb24gZmluZE9uZShzZWxlY3Rvcikge1xuICAgIGlmICghc2NvcGVTZWxlY3RvclJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlcyA9IGZpbmQuY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cbiAgICBpZiAodHlwZW9mIG1hdGNoZXNbMF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjAtYWxwaGExKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyICQgPSBnZXRqUXVlcnkoKTtcbnZhciBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi87XG52YXIgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovO1xudmFyIHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC87XG52YXIgZXZlbnRSZWdpc3RyeSA9IHt9OyAvLyBFdmVudHMgc3RvcmFnZVxuXG52YXIgdWlkRXZlbnQgPSAxO1xudmFyIGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn07XG52YXIgbmF0aXZlRXZlbnRzID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZXVwJywgJ21vdXNlZG93bicsICdjb250ZXh0bWVudScsICdtb3VzZXdoZWVsJywgJ0RPTU1vdXNlU2Nyb2xsJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdtb3VzZW1vdmUnLCAnc2VsZWN0c3RhcnQnLCAnc2VsZWN0ZW5kJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnb3JpZW50YXRpb25jaGFuZ2UnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVyY2FuY2VsJywgJ2dlc3R1cmVzdGFydCcsICdnZXN0dXJlY2hhbmdlJywgJ2dlc3R1cmVlbmQnLCAnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAncmVzZXQnLCAnc2VsZWN0JywgJ3N1Ym1pdCcsICdmb2N1c2luJywgJ2ZvY3Vzb3V0JywgJ2xvYWQnLCAndW5sb2FkJywgJ2JlZm9yZXVubG9hZCcsICdyZXNpemUnLCAnbW92ZScsICdET01Db250ZW50TG9hZGVkJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLCAnZXJyb3InLCAnYWJvcnQnLCAnc2Nyb2xsJ107XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBtZXRob2RzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBnZXRVaWRFdmVudChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuIHVpZCAmJiB1aWQgKyBcIjo6XCIgKyB1aWRFdmVudCsrIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrKztcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICB2YXIgdWlkID0gZ2V0VWlkRXZlbnQoZWxlbWVudCk7XG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWQ7XG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fTtcbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXTtcbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gZWxlbWVudDtcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICB2YXIgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgZm9yICh2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gVG8gcGxlYXNlIEVTTGludFxuXG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgaWYgKGRlbGVnYXRpb25TZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbDtcbiAgfVxuXG4gIHZhciB1aWRFdmVudExpc3QgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXTtcblxuICAgIGlmIChldmVudC5vcmlnaW5hbEhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgdmFyIGRlbGVnYXRpb24gPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZyc7XG4gIHZhciBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlcjsgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuXG4gIHZhciB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XG4gIHZhciBjdXN0b20gPSBjdXN0b21FdmVudHNbdHlwZUV2ZW50XTtcblxuICBpZiAoY3VzdG9tKSB7XG4gICAgdHlwZUV2ZW50ID0gY3VzdG9tO1xuICB9XG5cbiAgdmFyIGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmluZGV4T2YodHlwZUV2ZW50KSA+IC0xO1xuXG4gIGlmICghaXNOYXRpdmUpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudDtcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaGFuZGxlcikge1xuICAgIGhhbmRsZXIgPSBkZWxlZ2F0aW9uRm47XG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfbm9ybWFsaXplUGFyYW1zID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pLFxuICAgICAgZGVsZWdhdGlvbiA9IF9ub3JtYWxpemVQYXJhbXNbMF0sXG4gICAgICBvcmlnaW5hbEhhbmRsZXIgPSBfbm9ybWFsaXplUGFyYW1zWzFdLFxuICAgICAgdHlwZUV2ZW50ID0gX25vcm1hbGl6ZVBhcmFtc1syXTtcblxuICB2YXIgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudCk7XG4gIHZhciBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KTtcbiAgdmFyIHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpO1xuXG4gIGlmIChwcmV2aW91c0ZuKSB7XG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmY7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHVpZCA9IGdldFVpZEV2ZW50KG9yaWdpbmFsSGFuZGxlciwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKTtcbiAgdmFyIGZuID0gZGVsZWdhdGlvbiA/IGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbikgOiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIpO1xuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGw7XG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlcjtcbiAgZm4ub25lT2ZmID0gb25lT2ZmO1xuICBmbi51aWRFdmVudCA9IHVpZDtcbiAgaGFuZGxlcnNbdWlkXSA9IGZuO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICB2YXIgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSk7XG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIHZhciBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xuICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcktleSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluZGV4T2YobmFtZXNwYWNlKSA+IC0xKSB7XG4gICAgICB2YXIgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XTtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgRXZlbnRIYW5kbGVyID0ge1xuICBvbjogZnVuY3Rpb24gb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgZmFsc2UpO1xuICB9LFxuICBvbmU6IGZ1bmN0aW9uIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9ub3JtYWxpemVQYXJhbXMyID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pLFxuICAgICAgICBkZWxlZ2F0aW9uID0gX25vcm1hbGl6ZVBhcmFtczJbMF0sXG4gICAgICAgIG9yaWdpbmFsSGFuZGxlciA9IF9ub3JtYWxpemVQYXJhbXMyWzFdLFxuICAgICAgICB0eXBlRXZlbnQgPSBfbm9ybWFsaXplUGFyYW1zMlsyXTtcblxuICAgIHZhciBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XG4gICAgdmFyIGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpO1xuICAgIHZhciBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nO1xuXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghZXZlbnRzIHx8ICFldmVudHNbdHlwZUV2ZW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudEV2ZW50KSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleUhhbmRsZXJzKSB7XG4gICAgICB2YXIgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpO1xuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluZGV4T2YoaGFuZGxlcktleSkgPiAtMSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc107XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdHJpZ2dlcjogZnVuY3Rpb24gdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdHlwZUV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xuICAgIHZhciBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnQ7XG4gICAgdmFyIGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmluZGV4T2YodHlwZUV2ZW50KSA+IC0xO1xuICAgIHZhciBqUXVlcnlFdmVudDtcbiAgICB2YXIgYnViYmxlcyA9IHRydWU7XG4gICAgdmFyIG5hdGl2ZURpc3BhdGNoID0gdHJ1ZTtcbiAgICB2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgIHZhciBldnQgPSBudWxsO1xuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncyk7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpO1xuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTtcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOYXRpdmUpIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICBldnQuaW5pdEV2ZW50KHR5cGVFdmVudCwgYnViYmxlcywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzOiBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcblxuXG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsICdkZWZhdWx0UHJldmVudGVkJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiB0eXBlb2YgalF1ZXJ5RXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBldnQ7XG4gIH1cbn07XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FID0gJ2FzeW5jTG9hZCc7XG52YXIgVkVSU0lPTiA9ICczLjIuMic7XG52YXIgREFUQV9LRVkgPSAnY29yZXVpLmFzeW5jTG9hZCc7XG52YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbnZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbnZhciBDTEFTU19OQU1FX0FDVElWRSA9ICdjLWFjdGl2ZSc7XG52YXIgQ0xBU1NfTkFNRV9OQVZfRFJPUERPV05fVE9HR0xFID0gJ2Mtc2lkZWJhci1uYXYtZHJvcGRvd24tdG9nZ2xlJztcbnZhciBDTEFTU19OQU1FX05BVl9MSU5LID0gJ2Mtc2lkZWJhci1uYXYtbGluayc7XG52YXIgQ0xBU1NfTkFNRV9TSE9XID0gJ2Mtc2hvdyc7XG52YXIgQ0xBU1NfTkFNRV9WSUVXX1NDUklQVCA9ICd2aWV3LXNjcmlwdCc7XG52YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVk7XG52YXIgRVZFTlRfWEhSX1NUQVRVUyA9ICd4aHInO1xudmFyIFNFTEVDVE9SX05BVl9EUk9QRE9XTiA9ICcuYy1zaWRlYmFyLW5hdi1kcm9wZG93bic7XG52YXIgU0VMRUNUT1JfTkFWX0xJTksgPSAnLmMteGhyLWxpbmssIC5jLXNpZGViYXItbmF2LWxpbmsnO1xudmFyIFNFTEVDVE9SX05BVl9JVEVNID0gJy5jLXNpZGViYXItbmF2LWl0ZW0nO1xudmFyIFNFTEVDVE9SX1ZJRVdfU0NSSVBUID0gJy52aWV3LXNjcmlwdCc7XG52YXIgRGVmYXVsdCA9IHtcbiAgZGVmYXVsdFBhZ2U6ICdtYWluLmh0bWwnLFxuICBlcnJvclBhZ2U6ICc0MDQuaHRtbCcsXG4gIHN1YnBhZ2VzRGlyZWN0b3J5OiAndmlld3MvJ1xufTtcblxudmFyIEFzeW5jTG9hZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFzeW5jTG9hZChlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZWdhdGVkLWNvbmRpdGlvblxuXG4gICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgIHRoaXMuX3NldFVwVXJsKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFVwVXJsKHRoaXMuX2NvbmZpZy5kZWZhdWx0UGFnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSAvLyBHZXR0ZXJzXG5cblxuICB2YXIgX3Byb3RvID0gQXN5bmNMb2FkLnByb3RvdHlwZTtcblxuICAvLyBQcml2YXRlXG4gIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCksIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfTtcblxuICBfcHJvdG8uX2xvYWRQYWdlID0gZnVuY3Rpb24gX2xvYWRQYWdlKHVybCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuX2NvbmZpZztcblxuICAgIHZhciBsb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICBlbGVtZW50ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmNbZWxlbWVudF07XG4gICAgICBzY3JpcHQuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9WSUVXX1NDUklQVDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnbiwgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyXG5cbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnJlYWR5U3RhdGUgfHwgX3RoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmIChzcmMubGVuZ3RoID4gZWxlbWVudCArIDEpIHtcbiAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH07XG5cbiAgICB2YXIgcmVtb3ZlU2NyaXB0cyA9IGZ1bmN0aW9uIHJlbW92ZVNjcmlwdHMoKSB7XG4gICAgICB2YXIgb2xkU2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfVklFV19TQ1JJUFQpO1xuXG4gICAgICBpZiAob2xkU2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgICAgb2xkU2NyaXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChvbGRTY3JpcHQpIHtcbiAgICAgICAgICBvbGRTY3JpcHQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIGNvbmZpZy5zdWJwYWdlc0RpcmVjdG9yeSArIHVybCk7XG4gICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KEVWRU5UX1hIUl9TVEFUVVMsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWFkZC1ldmVudC1saXN0ZW5lclxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoRVZFTlRfWEhSX1NUQVRVUywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IHJlc3VsdC50YXJnZXQucmVzcG9uc2U7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcblxuICAgICAgICB2YXIgc2NyaXB0cyA9IEFycmF5LmZyb20od3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSkubWFwKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdzcmMnKS5ub2RlVmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgIHJldHVybiBzY3JpcHQucmVtb3ZlKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIHJlbW92ZVNjcmlwdHMoKTtcblxuICAgICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgICAgICBsb2FkU2NyaXB0cyhzY3JpcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuZXJyb3JQYWdlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZCgpO1xuICB9O1xuXG4gIF9wcm90by5fc2V0VXBVcmwgPSBmdW5jdGlvbiBfc2V0VXBVcmwodXJsKSB7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJz8nKVswXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX05BVl9MSU5LKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX05BVl9MSU5LKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKTtcbiAgICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX05BVl9EUk9QRE9XTikpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpO1xuICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3ByZWFkXG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfTkFWX0RST1BET1dOKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuICAgICAgaWYgKEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmKj1cXFwiXCIgKyB1cmwgKyBcIlxcXCJdXCIpKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpO1xuICAgICAgfVxuICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3ByZWFkXG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfTkFWX0lURU0gKyBcIiBhW2hyZWYqPVxcXCJcIiArIHVybCArIFwiXFxcIl1cIikpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9sb2FkUGFnZSh1cmwpO1xuICB9O1xuXG4gIF9wcm90by5fbG9hZEJsYW5rID0gZnVuY3Rpb24gX2xvYWRCbGFuayh1cmwpIHtcbiAgICB3aW5kb3cub3Blbih1cmwpO1xuICB9O1xuXG4gIF9wcm90by5fbG9hZFRvcCA9IGZ1bmN0aW9uIF9sb2FkVG9wKHVybCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgfTtcblxuICBfcHJvdG8uX3VwZGF0ZSA9IGZ1bmN0aW9uIF91cGRhdGUobGluaykge1xuICAgIGlmIChsaW5rLmhyZWYgIT09ICcjJykge1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLmRhdGFzZXQudG9nZ2xlID09PSAndW5kZWZpbmVkJyB8fCBsaW5rLmRhdGFzZXQudG9nZ2xlID09PSAnbnVsbCcpIHtcbiAgICAgICAgaWYgKGxpbmsudGFyZ2V0ID09PSAnX3RvcCcpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkVG9wKGxpbmsuaHJlZik7XG4gICAgICAgIH0gZWxzZSBpZiAobGluay50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZEJsYW5rKGxpbmsuaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2V0VXBVcmwobGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX05BVl9MSU5LLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgbGluayA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgaWYgKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX05BVl9MSU5LKSkge1xuICAgICAgICBsaW5rID0gbGluay5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSU5LKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX05BVl9EUk9QRE9XTl9UT0dHTEUpICYmIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICcjJykge1xuICAgICAgICBfdGhpczIuX3VwZGF0ZShsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIEFzeW5jTG9hZC5fYXN5bmNMb2FkSW50ZXJmYWNlID0gZnVuY3Rpb24gX2FzeW5jTG9hZEludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSk7XG5cbiAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBBc3luY0xvYWQoZWxlbWVudCwgX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgIH1cbiAgfTtcblxuICBBc3luY0xvYWQualF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24galF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQXN5bmNMb2FkLl9hc3luY0xvYWRJbnRlcmZhY2UodGhpcywgY29uZmlnKTtcbiAgICB9KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoQXN5bmNMb2FkLCBudWxsLCBbe1xuICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFzeW5jTG9hZDtcbn0oKTtcblxudmFyICQkMSA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLmFzeW5jTG9hZCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmlmICgkJDEpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQkMS5mbltOQU1FXTtcbiAgJCQxLmZuW05BTUVdID0gQXN5bmNMb2FkLmpRdWVyeUludGVyZmFjZTtcbiAgJCQxLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQXN5bmNMb2FkO1xuXG4gICQkMS5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkMS5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gQXN5bmNMb2FkLmpRdWVyeUludGVyZmFjZTtcbiAgfTtcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIE5BTUUkMSA9ICdhbGVydCc7XG52YXIgVkVSU0lPTiQxID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSQxID0gJ2NvcmV1aS5hbGVydCc7XG52YXIgRVZFTlRfS0VZJDEgPSBcIi5cIiArIERBVEFfS0VZJDE7XG52YXIgREFUQV9BUElfS0VZJDEgPSAnLmRhdGEtYXBpJztcbnZhciBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSc7XG52YXIgRVZFTlRfQ0xPU0UgPSBcImNsb3NlXCIgKyBFVkVOVF9LRVkkMTtcbnZhciBFVkVOVF9DTE9TRUQgPSBcImNsb3NlZFwiICsgRVZFTlRfS0VZJDE7XG52YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQxICsgREFUQV9BUElfS0VZJDE7XG52YXIgQ0xBU1NOQU1FX0FMRVJUID0gJ2FsZXJ0JztcbnZhciBDTEFTU05BTUVfRkFERSA9ICdmYWRlJztcbnZhciBDTEFTU05BTUVfU0hPVyA9ICdzaG93Jztcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgQWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbGVydChlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDEsIHRoaXMpO1xuICAgIH1cbiAgfSAvLyBHZXR0ZXJzXG5cblxuICB2YXIgX3Byb3RvID0gQWxlcnQucHJvdG90eXBlO1xuXG4gIC8vIFB1YmxpY1xuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgdmFyIHJvb3RFbGVtZW50ID0gZWxlbWVudCA/IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIDogdGhpcy5fZWxlbWVudDtcblxuICAgIHZhciBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KTtcblxuICAgIGlmIChjdXN0b21FdmVudCA9PT0gbnVsbCB8fCBjdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudCk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQxKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2dldFJvb3RFbGVtZW50ID0gZnVuY3Rpb24gX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LmNsb3Nlc3QoXCIuXCIgKyBDTEFTU05BTUVfQUxFUlQpO1xuICB9O1xuXG4gIF9wcm90by5fdHJpZ2dlckNsb3NlRXZlbnQgPSBmdW5jdGlvbiBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9DTE9TRSk7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NOQU1FX1NIT1cpO1xuXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgIEV2ZW50SGFuZGxlci5vbmUoZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8uX2Rlc3Ryb3lFbGVtZW50ID0gZnVuY3Rpb24gX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKTtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIEFsZXJ0LmpRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZJDEpO1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgQWxlcnQuaGFuZGxlRGlzbWlzcyA9IGZ1bmN0aW9uIGhhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpO1xuICAgIH07XG4gIH07XG5cbiAgQWxlcnQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQxKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoQWxlcnQsIG51bGwsIFt7XG4gICAga2V5OiBcIlZFUlNJT05cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OJDE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFsZXJ0O1xufSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuaGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpO1xudmFyICQkMiA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLmFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbmlmICgkJDIpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQxID0gJCQyLmZuW05BTUUkMV07XG4gICQkMi5mbltOQU1FJDFdID0gQWxlcnQualF1ZXJ5SW50ZXJmYWNlO1xuICAkJDIuZm5bTkFNRSQxXS5Db25zdHJ1Y3RvciA9IEFsZXJ0O1xuXG4gICQkMi5mbltOQU1FJDFdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCQyLmZuW05BTUUkMV0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkMTtcbiAgICByZXR1cm4gQWxlcnQualF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIE5PREVfVEVYVCA9IDM7XG52YXIgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIG1hdGNoZXM6IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfSxcbiAgZmluZDogZnVuY3Rpb24gZmluZCQxKHNlbGVjdG9yLCBlbGVtZW50KSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgZmluZC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7XG4gIH0sXG4gIGZpbmRPbmU6IGZ1bmN0aW9uIGZpbmRPbmUkMShzZWxlY3RvciwgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmRPbmUuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG4gIH0sXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBjaGlsZHJlbiA9IChfcmVmMiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjIsIGVsZW1lbnQuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgfSxcbiAgcGFyZW50czogZnVuY3Rpb24gcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRzID0gW107XG4gICAgdmFyIGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKGFuY2VzdG9yICYmIGFuY2VzdG9yLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBhbmNlc3Rvci5ub2RlVHlwZSAhPT0gTk9ERV9URVhUKSB7XG4gICAgICBpZiAodGhpcy5tYXRjaGVzKGFuY2VzdG9yLCBzZWxlY3RvcikpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzO1xuICB9LFxuICBwcmV2OiBmdW5jdGlvbiBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH0sXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmICh0aGlzLm1hdGNoZXMobmV4dCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF07XG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FJDIgPSAnYnV0dG9uJztcbnZhciBWRVJTSU9OJDIgPSAnMy4yLjInO1xudmFyIERBVEFfS0VZJDIgPSAnY29yZXVpLmJ1dHRvbic7XG52YXIgRVZFTlRfS0VZJDIgPSBcIi5cIiArIERBVEFfS0VZJDI7XG52YXIgREFUQV9BUElfS0VZJDIgPSAnLmRhdGEtYXBpJztcbnZhciBDTEFTU19OQU1FX0FDVElWRSQxID0gJ2FjdGl2ZSc7XG52YXIgQ0xBU1NfTkFNRV9ESVNBQkxFRCA9ICdkaXNhYmxlZCc7XG52YXIgQ0xBU1NfTkFNRV9GT0NVUyA9ICdmb2N1cyc7XG52YXIgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9UID0gJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nO1xudmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nO1xudmFyIFNFTEVDVE9SX0lOUFVUID0gJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknO1xudmFyIFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJztcbnZhciBTRUxFQ1RPUl9CVVRUT04gPSAnLmJ0bic7XG52YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkMiA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQyICsgREFUQV9BUElfS0VZJDI7XG52YXIgRVZFTlRfRk9DVVNfREFUQV9BUEkgPSBcImZvY3VzXCIgKyBFVkVOVF9LRVkkMiArIERBVEFfQVBJX0tFWSQyO1xudmFyIEVWRU5UX0JMVVJfREFUQV9BUEkgPSBcImJsdXJcIiArIEVWRU5UX0tFWSQyICsgREFUQV9BUElfS0VZJDI7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDIsIHRoaXMpO1xuICB9IC8vIEdldHRlcnNcblxuXG4gIHZhciBfcHJvdG8gPSBCdXR0b24ucHJvdG90eXBlO1xuXG4gIC8vIFB1YmxpY1xuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHZhciB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlO1xuICAgIHZhciBhZGRBcmlhUHJlc3NlZCA9IHRydWU7XG5cbiAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpO1xuXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICB2YXIgaW5wdXQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOUFVULCB0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUkMSkpIHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCByb290RWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHJvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgcm9vdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihpbnB1dCwgJ2NoYW5nZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWRkQXJpYVByZXNzZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUkMSkpO1xuICAgIH1cblxuICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSQxKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQyKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIEJ1dHRvbi5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSQyKTtcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBCdXR0b24uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQyKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoQnV0dG9uLCBudWxsLCBbe1xuICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTiQyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQyLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKTtcbiAgdmFyIGRhdGEgPSBEYXRhLmdldERhdGEoYnV0dG9uLCBEQVRBX0tFWSQyKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICBkYXRhID0gbmV3IEJ1dHRvbihidXR0b24pO1xuICB9XG5cbiAgZGF0YS50b2dnbGUoKTtcbn0pO1xuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9ULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTik7XG5cbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRk9DVVMpO1xuICB9XG59KTtcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQkxVUl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9ULCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTik7XG5cbiAgaWYgKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRk9DVVMpO1xuICB9XG59KTtcbnZhciAkJDMgPSBnZXRqUXVlcnkoKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5idXR0b24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuaWYgKCQkMykge1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDIgPSAkJDMuZm5bTkFNRSQyXTtcbiAgJCQzLmZuW05BTUUkMl0gPSBCdXR0b24ualF1ZXJ5SW50ZXJmYWNlO1xuICAkJDMuZm5bTkFNRSQyXS5Db25zdHJ1Y3RvciA9IEJ1dHRvbjtcblxuICAkJDMuZm5bTkFNRSQyXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkMy5mbltOQU1FJDJdID0gSlFVRVJZX05PX0NPTkZMSUNUJDI7XG4gICAgcmV0dXJuIEJ1dHRvbi5qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWFscGhhMSk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gIH1cblxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoY2hyKSB7XG4gICAgcmV0dXJuIFwiLVwiICsgY2hyLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG52YXIgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSwgdmFsdWUpO1xuICB9LFxuICByZW1vdmVEYXRhQXR0cmlidXRlOiBmdW5jdGlvbiByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1cIiArIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSk7XG4gIH0sXG4gIGdldERhdGFBdHRyaWJ1dGVzOiBmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkMih7fSwgZWxlbWVudC5kYXRhc2V0KTtcblxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgYXR0cmlidXRlc1trZXldID0gbm9ybWFsaXplRGF0YShhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICB9LFxuICBnZXREYXRhQXR0cmlidXRlOiBmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSkpO1xuICB9LFxuICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChlbGVtZW50KSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICB9O1xuICB9LFxuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfTtcbiAgfSxcbiAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTkFNRSQzID0gJ2Nhcm91c2VsJztcbnZhciBWRVJTSU9OJDMgPSAnMy4yLjInO1xudmFyIERBVEFfS0VZJDMgPSAnY29yZXVpLmNhcm91c2VsJztcbnZhciBFVkVOVF9LRVkkMyA9IFwiLlwiICsgREFUQV9LRVkkMztcbnZhciBEQVRBX0FQSV9LRVkkMyA9ICcuZGF0YS1hcGknO1xudmFyIEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCc7XG52YXIgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnO1xudmFyIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDA7IC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG52YXIgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG52YXIgRGVmYXVsdCQxID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiBmYWxzZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHdyYXA6IHRydWUsXG4gIHRvdWNoOiB0cnVlXG59O1xudmFyIERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB3cmFwOiAnYm9vbGVhbicsXG4gIHRvdWNoOiAnYm9vbGVhbidcbn07XG52YXIgRElSRUNUSU9OX05FWFQgPSAnbmV4dCc7XG52YXIgRElSRUNUSU9OX1BSRVYgPSAncHJldic7XG52YXIgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCc7XG52YXIgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0JztcbnZhciBFVkVOVF9TTElERSA9IFwic2xpZGVcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX1NMSUQgPSBcInNsaWRcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX0tFWURPV04gPSBcImtleWRvd25cIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX01PVVNFRU5URVIgPSBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX01PVVNFTEVBVkUgPSBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX1RPVUNIU1RBUlQgPSBcInRvdWNoc3RhcnRcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX1RPVUNITU9WRSA9IFwidG91Y2htb3ZlXCIgKyBFVkVOVF9LRVkkMztcbnZhciBFVkVOVF9UT1VDSEVORCA9IFwidG91Y2hlbmRcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX1BPSU5URVJET1dOID0gXCJwb2ludGVyZG93blwiICsgRVZFTlRfS0VZJDM7XG52YXIgRVZFTlRfUE9JTlRFUlVQID0gXCJwb2ludGVydXBcIiArIEVWRU5UX0tFWSQzO1xudmFyIEVWRU5UX0RSQUdfU1RBUlQgPSBcImRyYWdzdGFydFwiICsgRVZFTlRfS0VZJDM7XG52YXIgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IFwibG9hZFwiICsgRVZFTlRfS0VZJDMgKyBEQVRBX0FQSV9LRVkkMztcbnZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQzID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJDMgKyBEQVRBX0FQSV9LRVkkMztcbnZhciBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJztcbnZhciBDTEFTU19OQU1FX0FDVElWRSQyID0gJ2FjdGl2ZSc7XG52YXIgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSc7XG52YXIgQ0xBU1NfTkFNRV9SSUdIVCA9ICdjYXJvdXNlbC1pdGVtLXJpZ2h0JztcbnZhciBDTEFTU19OQU1FX0xFRlQgPSAnY2Fyb3VzZWwtaXRlbS1sZWZ0JztcbnZhciBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0JztcbnZhciBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2JztcbnZhciBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCc7XG52YXIgU0VMRUNUT1JfQUNUSVZFJDEgPSAnLmFjdGl2ZSc7XG52YXIgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJztcbnZhciBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJztcbnZhciBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnO1xudmFyIFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2JztcbnZhciBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJztcbnZhciBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJztcbnZhciBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJztcbnZhciBQb2ludGVyVHlwZSA9IHtcbiAgVE9VQ0g6ICd0b3VjaCcsXG4gIFBFTjogJ3Blbidcbn07XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIENhcm91c2VsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2Fyb3VzZWwoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gMDtcbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMDtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudCk7XG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMDtcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkMywgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IENhcm91c2VsLnByb3RvdHlwZTtcblxuICAvLyBQdWJsaWNcbiAgX3Byb3RvLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTkVYVCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5uZXh0V2hlblZpc2libGUgPSBmdW5jdGlvbiBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucHJldiA9IGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9QUkVWKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTkVYVF9QUkVWLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLmN5Y2xlKHRydWUpO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8uY3ljbGUgPSBmdW5jdGlvbiBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG8gPSBmdW5jdGlvbiB0byhpbmRleCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMudG8oaW5kZXgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5jeWNsZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gRElSRUNUSU9OX05FWFQgOiBESVJFQ1RJT05fUFJFVjtcblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkkMyk7XG4gICAgRGF0YS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJDMpO1xuICAgIHRoaXMuX2l0ZW1zID0gbnVsbDtcbiAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IG51bGw7XG4gICAgdGhpcy5faXNTbGlkaW5nID0gbnVsbDtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGw7XG4gIH0gLy8gUHJpdmF0ZVxuICA7XG5cbiAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDEpLCBjb25maWcpO1xuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FJDMsIGNvbmZpZywgRGVmYXVsdFR5cGUpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVTd2lwZSA9IGZ1bmN0aW9uIF9oYW5kbGVTd2lwZSgpIHtcbiAgICB2YXIgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWCk7XG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYO1xuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwOyAvLyBzd2lwZSBsZWZ0XG5cbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5wcmV2KCk7XG4gICAgfSAvLyBzd2lwZSByaWdodFxuXG5cbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX2tleWRvd24oZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnBhdXNlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmN5Y2xlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiBzdGFydChldmVudCkge1xuICAgICAgaWYgKF90aGlzMy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIF90aGlzMy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9IGVsc2UgaWYgKCFfdGhpczMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICBfdGhpczMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBtb3ZlID0gZnVuY3Rpb24gbW92ZShldmVudCkge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIF90aGlzMy50b3VjaERlbHRhWCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBfdGhpczMudG91Y2hTdGFydFg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpczMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICBfdGhpczMudG91Y2hEZWx0YVggPSBldmVudC5jbGllbnRYIC0gX3RoaXMzLnRvdWNoU3RhcnRYO1xuICAgICAgfVxuXG4gICAgICBfdGhpczMuX2hhbmRsZVN3aXBlKCk7XG5cbiAgICAgIGlmIChfdGhpczMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuICAgICAgICBfdGhpczMucGF1c2UoKTtcblxuICAgICAgICBpZiAoX3RoaXMzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczMudG91Y2hUaW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuY3ljbGUoZXZlbnQpO1xuICAgICAgICB9LCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgX3RoaXMzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtSW1nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaXRlbUltZywgRVZFTlRfRFJBR19TVEFSVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlbmQoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzdGFydChldmVudCk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gbW92ZShldmVudCk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlbmQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fa2V5ZG93biA9IGZ1bmN0aW9uIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVk6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVk6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRJdGVtSW5kZXggPSBmdW5jdGlvbiBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID8gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCBlbGVtZW50LnBhcmVudE5vZGUpIDogW107XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudCk7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRJdGVtQnlEaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgIHZhciBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUO1xuICAgIHZhciBpc1ByZXZEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9QUkVWO1xuXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgdmFyIGxhc3RJdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICAgIHZhciBpc0dvaW5nVG9XcmFwID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8IGlzTmV4dERpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleDtcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFViA/IC0xIDogMTtcbiAgICB2YXIgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdO1xuICB9O1xuXG4gIF9wcm90by5fdHJpZ2dlclNsaWRlRXZlbnQgPSBmdW5jdGlvbiBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KSk7XG5cbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCA9IGZ1bmN0aW9uIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIHZhciBpbmRpY2F0b3JzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkUkMSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KV07XG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgIG5leHRJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9zbGlkZSA9IGZ1bmN0aW9uIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCk7XG5cbiAgICB2YXIgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgdmFyIG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpO1xuXG4gICAgdmFyIGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO1xuICAgIHZhciBkaXJlY3Rpb25hbENsYXNzTmFtZTtcbiAgICB2YXIgb3JkZXJDbGFzc05hbWU7XG4gICAgdmFyIGV2ZW50RGlyZWN0aW9uTmFtZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUKSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENMQVNTX05BTUVfTEVGVDtcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9ORVhUO1xuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX0xFRlQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9SSUdIVDtcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9QUkVWO1xuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX1JJR0hUO1xuICAgIH1cblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUkMikpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSk7XG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZTtcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSk7XG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpO1xuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgdmFyIG5leHRFbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChuZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApO1xuXG4gICAgICBpZiAobmV4dEVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IG5leHRFbGVtZW50SW50ZXJ2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZShhY3RpdmVFbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSk7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMik7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQyLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICBfdGhpczQuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpczQuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlRWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDIpO1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQyKTtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICB9XG4gIH0gLy8gU3RhdGljXG4gIDtcblxuICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSA9IGZ1bmN0aW9uIGNhcm91c2VsSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHZhciBkYXRhID0gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDMpO1xuXG4gICAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCQxKSwgTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIF9jb25maWcpLCBjb25maWcpO1xuICAgIH1cblxuICAgIHZhciBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGU7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwoZWxlbWVudCwgX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICBkYXRhLnRvKGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgYWN0aW9uICsgXCJcXFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBkYXRhW2FjdGlvbl0oKTtcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKCk7XG4gICAgICBkYXRhLmN5Y2xlKCk7XG4gICAgfVxuICB9O1xuXG4gIENhcm91c2VsLmpRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRoaXMsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGRhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpKSwgTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcykpO1xuXG4gICAgdmFyIHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpO1xuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKTtcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBEYXRhLmdldERhdGEodGFyZ2V0LCBEQVRBX0tFWSQzKS50byhzbGlkZUluZGV4KTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIENhcm91c2VsLmdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkMyk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKENhcm91c2VsLCBudWxsLCBbe1xuICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTiQzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYXJvdXNlbDtcbn0oKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDMsIFNFTEVDVE9SX0RBVEFfU0xJREUsIENhcm91c2VsLmRhdGFBcGlDbGlja0hhbmRsZXIpO1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIERhdGEuZ2V0RGF0YShjYXJvdXNlbHNbaV0sIERBVEFfS0VZJDMpKTtcbiAgfVxufSk7XG52YXIgJCQ0ID0gZ2V0alF1ZXJ5KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuY2Fyb3VzZWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuaWYgKCQkNCkge1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDMgPSAkJDQuZm5bTkFNRSQzXTtcbiAgJCQ0LmZuW05BTUUkM10gPSBDYXJvdXNlbC5qUXVlcnlJbnRlcmZhY2U7XG4gICQkNC5mbltOQU1FJDNdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWw7XG5cbiAgJCQ0LmZuW05BTUUkM10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkJDQuZm5bTkFNRSQzXSA9IEpRVUVSWV9OT19DT05GTElDVCQzO1xuICAgIHJldHVybiBDYXJvdXNlbC5qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FJDQgPSAnY2xhc3MtdG9nZ2xlcic7XG52YXIgVkVSU0lPTiQ0ID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSQ0ID0gJ2NvcmV1aS5jbGFzcy10b2dnbGVyJztcbnZhciBFVkVOVF9LRVkkNCA9IFwiLlwiICsgREFUQV9LRVkkNDtcbnZhciBEQVRBX0FQSV9LRVkkNCA9ICcuZGF0YS1hcGknO1xudmFyIERlZmF1bHRUeXBlJDEgPSB7XG4gIGFkZENsYXNzOiAnKG51bGx8YXJyYXl8c3RyaW5nKScsXG4gIGJyZWFrcG9pbnRzOiAnKG51bGx8YXJyYXl8c3RyaW5nKScsXG4gIHJlbW92ZUNsYXNzOiAnKG51bGx8YXJyYXl8c3RyaW5nKScsXG4gIHJlc3BvbnNpdmU6ICcobnVsbHxib29sZWFuKScsXG4gIHRhcmdldDogJyhudWxsfHN0cmluZyknLFxuICB0b2dnbGVDbGFzczogJyhudWxsfGFycmF5fHN0cmluZyknXG59O1xudmFyIERlZmF1bHQkMiA9IHtcbiAgYWRkQ2xhc3M6IG51bGwsXG4gIGJyZWFrcG9pbnRzOiBbJycsICdzbScsICdtZCcsICdsZycsICd4bCddLFxuICByZW1vdmVDbGFzczogbnVsbCxcbiAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gIHRhcmdldDogJ2JvZHknLFxuICB0b2dnbGVDbGFzczogbnVsbFxufTtcbnZhciBDTEFTU19OQU1FX0NMQVNTX1RPR0dMRVIgPSAnYy1jbGFzcy10b2dnbGVyJztcbnZhciBFVkVOVF9DTEFTU19BRERFRCA9ICdjbGFzc2FkZGVkJztcbnZhciBFVkVOVF9DTEFTU19SRU1PVkVEID0gJ2NsYXNzcmVtb3ZlZCc7XG52YXIgRVZFTlRfQ0xBU1NfVE9HR0xFID0gJ2NsYXNzdG9nZ2xlJztcbnZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQ0ID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJDQgKyBEQVRBX0FQSV9LRVkkNDtcbnZhciBTRUxFQ1RPUl9DTEFTU19UT0dHTEVSID0gJy5jLWNsYXNzLXRvZ2dsZXInO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBDbGFzc1RvZ2dsZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDbGFzc1RvZ2dsZXIoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDQsIHRoaXMpO1xuICB9IC8vIEdldHRlcnNcblxuXG4gIHZhciBfcHJvdG8gPSBDbGFzc1RvZ2dsZXIucHJvdG90eXBlO1xuXG4gIC8vIFB1YmxpY1xuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG5cbiAgICB2YXIgY2xhc3NOYW1lcyA9IHRoaXMuX2NvbmZpZy5hZGRDbGFzcy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJyk7XG5cbiAgICBjbGFzc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICAgICAgX3RoaXMuX2N1c3RvbUV2ZW50KEVWRU5UX0NMQVNTX0FEREVELCB0YXJnZXQsIHRydWUsIGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcblxuICAgIHZhciBjbGFzc05hbWVzID0gdGhpcy5fY29uZmlnLnJlbW92ZUNsYXNzLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJywnKTtcblxuICAgIGNsYXNzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoX3RoaXMyLl9jb25maWcucmVzcG9uc2l2ZSkge1xuICAgICAgICBfdGhpczIuX3VwZGF0ZVJlc3BvbnNpdmVDbGFzc05hbWVzKGNsYXNzTmFtZSkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblxuICAgICAgICAgIF90aGlzMi5fY3VzdG9tRXZlbnQoRVZFTlRfQ0xBU1NfUkVNT1ZFRCwgdGFyZ2V0LCBmYWxzZSwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXG4gICAgICAgIF90aGlzMi5fY3VzdG9tRXZlbnQoRVZFTlRfQ0xBU1NfUkVNT1ZFRCwgdGFyZ2V0LCBmYWxzZSwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuXG4gICAgdmFyIGNsYXNzTmFtZXMgPSB0aGlzLl9jb25maWcudG9nZ2xlQ2xhc3MucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yZXNwb25zaXZlKSB7XG4gICAgICBjbGFzc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgcmVzcG9uc2l2ZUNsYXNzTmFtZXMgPSBfdGhpczMuX3VwZGF0ZVJlc3BvbnNpdmVDbGFzc05hbWVzKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNpdmVDbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfSkubGVuZ3RoKSB7XG4gICAgICAgICAgX3RoaXMzLl91cGRhdGVSZXNwb25zaXZlQ2xhc3NOYW1lcyhjbGFzc05hbWUpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgX3RoaXMzLl9jb25maWcucmVtb3ZlQ2xhc3MgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICAgIF90aGlzMy5yZW1vdmUoKTtcblxuICAgICAgICAgICAgX3RoaXMzLl9jdXN0b21FdmVudChFVkVOVF9DTEFTU19UT0dHTEUsIHRhcmdldCwgZmFsc2UsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMzLl9jb25maWcuYWRkQ2xhc3MgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICBfdGhpczMuYWRkKCk7XG5cbiAgICAgICAgICBfdGhpczMuX2N1c3RvbUV2ZW50KEVWRU5UX0NMQVNTX1RPR0dMRSwgdGFyZ2V0LCB0cnVlLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgIF90aGlzMy5fY29uZmlnLnJlbW92ZUNsYXNzID0gY2xhc3NOYW1lO1xuXG4gICAgICAgICAgX3RoaXMzLnJlbW92ZSgpO1xuXG4gICAgICAgICAgX3RoaXMzLl9jdXN0b21FdmVudChFVkVOVF9DTEFTU19UT0dHTEUsIHRhcmdldCwgZmFsc2UsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMzLl9jb25maWcuYWRkQ2xhc3MgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICBfdGhpczMuYWRkKCk7XG5cbiAgICAgICAgICBfdGhpczMuX2N1c3RvbUV2ZW50KEVWRU5UX0NMQVNTX1RPR0dMRSwgdGFyZ2V0LCB0cnVlLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsYXNzID0gZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgIHRoaXMuX2NvbmZpZy50b2dnbGVDbGFzcyA9IHRoaXMuX2NvbmZpZy5jbGFzcztcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgncmVzcG9uc2l2ZScpKSB7XG4gICAgICB0aGlzLl9jb25maWcucmVzcG9uc2l2ZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZXNwb25zaXZlJyk7XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX3RhcmdldCA9IGZ1bmN0aW9uIF90YXJnZXQoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy50YXJnZXQgPT09ICdib2R5Jykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50YXJnZXQgPT09ICdfcGFyZW50Jykge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcudGFyZ2V0KTtcbiAgfTtcblxuICBfcHJvdG8uX2N1c3RvbUV2ZW50ID0gZnVuY3Rpb24gX2N1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdGFyZ2V0LCBhZGQsIGNsYXNzTmFtZSkge1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9O1xuXG4gIF9wcm90by5fYnJlYWtwb2ludCA9IGZ1bmN0aW9uIF9icmVha3BvaW50KGNsYXNzTmFtZSkge1xuICAgIHZhciBicmVha3BvaW50cyA9IHRoaXMuX2NvbmZpZy5icmVha3BvaW50cztcbiAgICByZXR1cm4gYnJlYWtwb2ludHMuZmlsdGVyKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludC5sZW5ndGggPiAwO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmNsdWRlcyhicmVha3BvaW50KTtcbiAgICB9KVswXTtcbiAgfTtcblxuICBfcHJvdG8uX2JyZWFrcG9pbnRzID0gZnVuY3Rpb24gX2JyZWFrcG9pbnRzKGNsYXNzTmFtZSkge1xuICAgIHZhciBicmVha3BvaW50cyA9IHRoaXMuX2NvbmZpZy5icmVha3BvaW50cztcbiAgICByZXR1cm4gYnJlYWtwb2ludHMuc2xpY2UoMCwgYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50cy5maWx0ZXIoZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgIHJldHVybiBicmVha3BvaW50Lmxlbmd0aCA+IDA7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluY2x1ZGVzKGJyZWFrcG9pbnQpO1xuICAgIH0pWzBdKSArIDEpO1xuICB9O1xuXG4gIF9wcm90by5fdXBkYXRlUmVzcG9uc2l2ZUNsYXNzTmFtZXMgPSBmdW5jdGlvbiBfdXBkYXRlUmVzcG9uc2l2ZUNsYXNzTmFtZXMoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGJwID0gdGhpcy5fYnJlYWtwb2ludChjbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2JyZWFrcG9pbnRzKGNsYXNzTmFtZSkubWFwKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludC5sZW5ndGggPiAwID8gY2xhc3NOYW1lLnJlcGxhY2UoYnAsIGJyZWFrcG9pbnQpIDogY2xhc3NOYW1lLnJlcGxhY2UoXCItXCIgKyBicCwgYnJlYWtwb2ludCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9pbmNsdWRlc1Jlc3BvbnNpdmVDbGFzcyA9IGZ1bmN0aW9uIF9pbmNsdWRlc1Jlc3BvbnNpdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLl91cGRhdGVSZXNwb25zaXZlQ2xhc3NOYW1lcyhjbGFzc05hbWUpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gX3RoaXM0Ll9jb25maWcudGFyZ2V0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH0gLy8gU3RhdGljXG4gIDtcblxuICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpKSwgY29uZmlnKTtcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSQ0LCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgQ2xhc3NUb2dnbGVyLmNsYXNzVG9nZ2xlckludGVyZmFjZSA9IGZ1bmN0aW9uIGNsYXNzVG9nZ2xlckludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQ0KTtcblxuICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENsYXNzVG9nZ2xlcihlbGVtZW50LCBfY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgfVxuICB9O1xuXG4gIENsYXNzVG9nZ2xlci5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDbGFzc1RvZ2dsZXIuY2xhc3NUb2dnbGVySW50ZXJmYWNlKHRoaXMsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKENsYXNzVG9nZ2xlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFZFUlNJT04kNDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQxO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbGFzc1RvZ2dsZXI7XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ0LCBTRUxFQ1RPUl9DTEFTU19UT0dHTEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHZhciB0b2dnbGVyID0gZXZlbnQudGFyZ2V0O1xuXG4gIGlmICghdG9nZ2xlci5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DTEFTU19UT0dHTEVSKSkge1xuICAgIHRvZ2dsZXIgPSB0b2dnbGVyLmNsb3Nlc3QoU0VMRUNUT1JfQ0xBU1NfVE9HR0xFUik7XG4gIH1cblxuICBpZiAodHlwZW9mIHRvZ2dsZXIuZGF0YXNldC5hZGRDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBDbGFzc1RvZ2dsZXIuY2xhc3NUb2dnbGVySW50ZXJmYWNlKHRvZ2dsZXIsICdhZGQnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdG9nZ2xlci5kYXRhc2V0LnJlbW92ZUNsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIENsYXNzVG9nZ2xlci5jbGFzc1RvZ2dsZXJJbnRlcmZhY2UodG9nZ2xlciwgJ3JlbW92ZScpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0b2dnbGVyLmRhdGFzZXQudG9nZ2xlQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgQ2xhc3NUb2dnbGVyLmNsYXNzVG9nZ2xlckludGVyZmFjZSh0b2dnbGVyLCAndG9nZ2xlJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHRvZ2dsZXIuZGF0YXNldC5jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBDbGFzc1RvZ2dsZXIuY2xhc3NUb2dnbGVySW50ZXJmYWNlKHRvZ2dsZXIsICdjbGFzcycpO1xuICB9XG59KTtcbnZhciAkJDUgPSBnZXRqUXVlcnkoKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5jLWNsYXNzLXRvZ2dsZXIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5pZiAoJCQ1KSB7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkNCA9ICQkNS5mbltOQU1FJDRdO1xuICAkJDUuZm5bTkFNRSQ0XSA9IENsYXNzVG9nZ2xlci5qUXVlcnlJbnRlcmZhY2U7XG4gICQkNS5mbltOQU1FJDRdLkNvbnN0cnVjdG9yID0gQ2xhc3NUb2dnbGVyO1xuXG4gICQkNS5mbltOQU1FJDRdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCQ1LmZuW05BTUUkNF0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNDtcbiAgICByZXR1cm4gQ2xhc3NUb2dnbGVyLmpRdWVyeUludGVyZmFjZTtcbiAgfTtcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIE5BTUUkNSA9ICdjb2xsYXBzZSc7XG52YXIgVkVSU0lPTiQ1ID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSQ1ID0gJ2NvcmV1aS5jb2xsYXBzZSc7XG52YXIgRVZFTlRfS0VZJDUgPSBcIi5cIiArIERBVEFfS0VZJDU7XG52YXIgREFUQV9BUElfS0VZJDUgPSAnLmRhdGEtYXBpJztcbnZhciBEZWZhdWx0JDMgPSB7XG4gIHRvZ2dsZTogdHJ1ZSxcbiAgcGFyZW50OiAnJ1xufTtcbnZhciBEZWZhdWx0VHlwZSQyID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbn07XG52YXIgRVZFTlRfU0hPVyA9IFwic2hvd1wiICsgRVZFTlRfS0VZJDU7XG52YXIgRVZFTlRfU0hPV04gPSBcInNob3duXCIgKyBFVkVOVF9LRVkkNTtcbnZhciBFVkVOVF9ISURFID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkNTtcbnZhciBFVkVOVF9ISURERU4gPSBcImhpZGRlblwiICsgRVZFTlRfS0VZJDU7XG52YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNSA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ1ICsgREFUQV9BUElfS0VZJDU7XG52YXIgQ0xBU1NfTkFNRV9TSE9XJDEgPSAnc2hvdyc7XG52YXIgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSc7XG52YXIgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xudmFyIENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG52YXIgV0lEVEggPSAnd2lkdGgnO1xudmFyIEhFSUdIVCA9ICdoZWlnaHQnO1xudmFyIFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJztcbnZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxID0gJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJztcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb2xsYXBzZShlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDEgKyBcIltocmVmPVxcXCIjXCIgKyBlbGVtZW50LmlkICsgXCJcXFwiXSxcIiArIChTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxICsgXCJbZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKTtcbiAgICB2YXIgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUkMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGVsZW0gPSB0b2dnbGVMaXN0W2ldO1xuICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKTtcbiAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uIChmb3VuZEVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kRWxlbSA9PT0gZWxlbWVudDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsO1xuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkNSwgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICAvLyBQdWJsaWNcbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDEpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlcztcbiAgICB2YXIgYWN0aXZlc0RhdGE7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVTLCB0aGlzLl9wYXJlbnQpLmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gX3RoaXMuX2NvbmZpZy5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKTtcblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICB2YXIgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbHRlcihmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtO1xuICAgICAgfSk7XG4gICAgICBhY3RpdmVzRGF0YSA9IHRlbXBBY3RpdmVEYXRhWzBdID8gRGF0YS5nZXREYXRhKHRlbXBBY3RpdmVEYXRhWzBdLCBEQVRBX0tFWSQ1KSA6IG51bGw7XG5cbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpO1xuXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1BY3RpdmUpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xuICAgICAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1BY3RpdmUsICdoaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgRGF0YS5zZXREYXRhKGVsZW1BY3RpdmUsIERBVEFfS0VZJDUsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDA7XG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgX3RoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xuXG4gICAgICBfdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVyQxKTtcblxuICAgICAgX3RoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuXG4gICAgICBfdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoX3RoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG4gICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKTtcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV0gKyBcInB4XCI7XG4gIH07XG5cbiAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKTtcblxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyBcInB4XCI7XG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XJDEpO1xuXG4gICAgdmFyIHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGg7XG5cbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXTtcbiAgICAgICAgdmFyIGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpO1xuXG4gICAgICAgIGlmIChlbGVtICYmICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMSkpIHtcbiAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpO1xuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpczIuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XG5cbiAgICAgIF90aGlzMi5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORyk7XG5cbiAgICAgIF90aGlzMi5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpO1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpczIuX2VsZW1lbnQsIEVWRU5UX0hJRERFTik7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSk7XG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nO1xuICB9O1xuXG4gIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkNSk7XG4gICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGw7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbDtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQkMyksIGNvbmZpZyk7XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSk7IC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSQ1LCBjb25maWcsIERlZmF1bHRUeXBlJDIpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVDtcbiAgfTtcblxuICBfcHJvdG8uX2dldFBhcmVudCA9IGZ1bmN0aW9uIF9nZXRQYXJlbnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudDtcblxuICAgIGlmIChpc0VsZW1lbnQocGFyZW50KSkge1xuICAgICAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgcGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHBhcmVudFswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50WzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHBhcmVudCk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdG9yID0gU0VMRUNUT1JfREFUQV9UT0dHTEUkMSArIFwiW2RhdGEtcGFyZW50PVxcXCJcIiArIHBhcmVudCArIFwiXFxcIl1cIjtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCBwYXJlbnQpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCk7XG5cbiAgICAgIF90aGlzMy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHNlbGVjdGVkLCBbZWxlbWVudF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc09wZW4gPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckMSk7XG4gICAgdHJpZ2dlckFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRCk7XG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKTtcbiAgICB9KTtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlID0gZnVuY3Rpb24gY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdmFyIGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkNSk7XG5cbiAgICB2YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDMpLCBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENvbGxhcHNlKGVsZW1lbnQsIF9jb25maWcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICB9XG4gIH07XG5cbiAgQ29sbGFwc2UualF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24galF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UodGhpcywgY29uZmlnKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb2xsYXBzZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDUpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhDb2xsYXBzZSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFZFUlNJT04kNTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkMztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ1LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQxLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB2YXIgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKTtcbiAgdmFyIHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgdmFyIHNlbGVjdG9yRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKTtcbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkNSk7XG4gICAgdmFyIGNvbmZpZztcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyB1cGRhdGUgcGFyZW50IGF0dHJpYnV0ZVxuICAgICAgaWYgKGRhdGEuX3BhcmVudCA9PT0gbnVsbCAmJiB0eXBlb2YgdHJpZ2dlckRhdGEucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRhLl9jb25maWcucGFyZW50ID0gdHJpZ2dlckRhdGEucGFyZW50O1xuICAgICAgICBkYXRhLl9wYXJlbnQgPSBkYXRhLl9nZXRQYXJlbnQoKTtcbiAgICAgIH1cblxuICAgICAgY29uZmlnID0gJ3RvZ2dsZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHRyaWdnZXJEYXRhO1xuICAgIH1cblxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZyk7XG4gIH0pO1xufSk7XG52YXIgJCQ2ID0gZ2V0alF1ZXJ5KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuY29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuaWYgKCQkNikge1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDUgPSAkJDYuZm5bTkFNRSQ1XTtcbiAgJCQ2LmZuW05BTUUkNV0gPSBDb2xsYXBzZS5qUXVlcnlJbnRlcmZhY2U7XG4gICQkNi5mbltOQU1FJDVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2U7XG5cbiAgJCQ2LmZuW05BTUUkNV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkJDYuZm5bTkFNRSQ1XSA9IEpRVUVSWV9OT19DT05GTElDVCQ1O1xuICAgIHJldHVybiBDb2xsYXBzZS5qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FJDYgPSAnZHJvcGRvd24nO1xudmFyIFZFUlNJT04kNiA9ICczLjIuMic7XG52YXIgREFUQV9LRVkkNiA9ICdjb3JldWkuZHJvcGRvd24nO1xudmFyIEVWRU5UX0tFWSQ2ID0gXCIuXCIgKyBEQVRBX0tFWSQ2O1xudmFyIERBVEFfQVBJX0tFWSQ2ID0gJy5kYXRhLWFwaSc7XG52YXIgRVNDQVBFX0tFWSA9ICdFc2NhcGUnO1xudmFyIFNQQUNFX0tFWSA9ICdTcGFjZSc7XG52YXIgVEFCX0tFWSA9ICdUYWInO1xudmFyIEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJztcbnZhciBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nO1xudmFyIFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7IC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbnZhciBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoQVJST1dfVVBfS0VZICsgXCJ8XCIgKyBBUlJPV19ET1dOX0tFWSArIFwifFwiICsgRVNDQVBFX0tFWSk7XG52YXIgRVZFTlRfSElERSQxID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkNjtcbnZhciBFVkVOVF9ISURERU4kMSA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkNjtcbnZhciBFVkVOVF9TSE9XJDEgPSBcInNob3dcIiArIEVWRU5UX0tFWSQ2O1xudmFyIEVWRU5UX1NIT1dOJDEgPSBcInNob3duXCIgKyBFVkVOVF9LRVkkNjtcbnZhciBFVkVOVF9DTElDSyA9IFwiY2xpY2tcIiArIEVWRU5UX0tFWSQ2O1xudmFyIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDYgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkkNiArIERBVEFfQVBJX0tFWSQ2O1xudmFyIEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBcImtleWRvd25cIiArIEVWRU5UX0tFWSQ2ICsgREFUQV9BUElfS0VZJDY7XG52YXIgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBcImtleXVwXCIgKyBFVkVOVF9LRVkkNiArIERBVEFfQVBJX0tFWSQ2O1xudmFyIENMQVNTX05BTUVfRElTQUJMRUQkMSA9ICdkaXNhYmxlZCc7XG52YXIgQ0xBU1NfTkFNRV9TSE9XJDIgPSAnc2hvdyc7XG52YXIgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJztcbnZhciBDTEFTU19OQU1FX0RST1BSSUdIVCA9ICdkcm9wcmlnaHQnO1xudmFyIENMQVNTX05BTUVfRFJPUExFRlQgPSAnZHJvcGxlZnQnO1xudmFyIENMQVNTX05BTUVfSEVBREVSID0gJ2MtaGVhZGVyJztcbnZhciBDTEFTU19OQU1FX01FTlVSSUdIVCA9ICdkcm9wZG93bi1tZW51LXJpZ2h0JztcbnZhciBDTEFTU19OQU1FX05BVkJBUiA9ICduYXZiYXInO1xudmFyIENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDID0gJ3Bvc2l0aW9uLXN0YXRpYyc7XG52YXIgU0VMRUNUT1JfREFUQV9UT0dHTEUkMiA9ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSc7XG52YXIgU0VMRUNUT1JfRk9STV9DSElMRCA9ICcuZHJvcGRvd24gZm9ybSc7XG52YXIgU0VMRUNUT1JfSEVBREVSX05BViA9ICcuYy1oZWFkZXItbmF2JztcbnZhciBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51JztcbnZhciBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2JztcbnZhciBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJztcbnZhciBQTEFDRU1FTlRfVE9QID0gJ3RvcC1zdGFydCc7XG52YXIgUExBQ0VNRU5UX1RPUEVORCA9ICd0b3AtZW5kJztcbnZhciBQTEFDRU1FTlRfQk9UVE9NID0gJ2JvdHRvbS1zdGFydCc7XG52YXIgUExBQ0VNRU5UX0JPVFRPTUVORCA9ICdib3R0b20tZW5kJztcbnZhciBQTEFDRU1FTlRfUklHSFQgPSAncmlnaHQtc3RhcnQnO1xudmFyIFBMQUNFTUVOVF9MRUZUID0gJ2xlZnQtc3RhcnQnO1xudmFyIERlZmF1bHQkNCA9IHtcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGZsaXA6IHRydWUsXG4gIGJvdW5kYXJ5OiAnc2Nyb2xsUGFyZW50JyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGxcbn07XG52YXIgRGVmYXVsdFR5cGUkMyA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fGZ1bmN0aW9uKScsXG4gIGZsaXA6ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3QpJ1xufTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpO1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgdGhpcy5faW5IZWFkZXIgPSB0aGlzLl9kZXRlY3RIZWFkZXIoKTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkNiwgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICAvLyBQdWJsaWNcbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEJDEpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzQWN0aXZlID0gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuXG4gICAgRHJvcGRvd24uY2xlYXJNZW51cygpO1xuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRElTQUJMRUQkMSkgfHwgdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH07XG4gICAgdmFyIHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHBhcmVudCwgRVZFTlRfU0hPVyQxLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG5cblxuICAgIGlmICghdGhpcy5faW5OYXZiYXIgJiYgIXRoaXMuX2luSGVhZGVyKSB7XG4gICAgICBpZiAodHlwZW9mIGNyZWF0ZVBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29yZVVJXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlOyAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9wcGVyID0gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKTtcbiAgICB9IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG5cblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci5vbihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX0hFQURFUl9OQVYpKSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIChfcmVmMiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjIsIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci5vbihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKTtcblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICBNYW5pcHVsYXRvci50b2dnbGVDbGFzcyh0aGlzLl9tZW51LCBDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgTWFuaXB1bGF0b3IudG9nZ2xlQ2xhc3MocGFyZW50LCBDTEFTU19OQU1FX1NIT1ckMik7XG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9TSE9XTiQxLCByZWxhdGVkVGFyZ2V0KTtcbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCQxKSB8fCAhdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH07XG4gICAgdmFyIGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHBhcmVudCwgRVZFTlRfSElERSQxLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgTWFuaXB1bGF0b3IudG9nZ2xlQ2xhc3ModGhpcy5fbWVudSwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgIE1hbmlwdWxhdG9yLnRvZ2dsZUNsYXNzKHBhcmVudCwgQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHBhcmVudCwgRVZFTlRfSElEREVOJDEsIHJlbGF0ZWRUYXJnZXQpO1xuICB9O1xuXG4gIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkNik7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkkNik7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fbWVudSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKCk7XG4gICAgdGhpcy5faW5IZWFkZXIgPSB0aGlzLl9kZXRlY3RIZWFkZXIoKTtcblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKTtcbiAgICB9XG4gIH0gLy8gUHJpdmF0ZVxuICA7XG5cbiAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQpLCBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSksIGNvbmZpZyk7XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUkNiwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9O1xuXG4gIF9wcm90by5fZ2V0TWVudUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgdmFyIHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHBhcmVudCk7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiBfZ2V0UGxhY2VtZW50KCkge1xuICAgIHZhciBwYXJlbnREcm9wZG93biA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB2YXIgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTTsgLy8gSGFuZGxlIGRyb3B1cFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9UT1A7XG5cbiAgICAgIGlmICh0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX01FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX1RPUEVORDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9SSUdIVDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0xFRlQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX01FTlVSSUdIVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9CT1RUT01FTkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX2RldGVjdE5hdmJhciA9IGZ1bmN0aW9uIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZWxlbWVudC5jbG9zZXN0KFwiLlwiICsgQ0xBU1NfTkFNRV9OQVZCQVIpKTtcbiAgfTtcblxuICBfcHJvdG8uX2RldGVjdEhlYWRlciA9IGZ1bmN0aW9uIF9kZXRlY3RIZWFkZXIoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZWxlbWVudC5jbG9zZXN0KFwiLlwiICsgQ0xBU1NfTkFNRV9IRUFERVIpKTtcbiAgfTtcblxuICBfcHJvdG8uX2dldE9mZnNldCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgb2Zmc2V0ID0gW107XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldChfcmVmMykge1xuICAgICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjMucGxhY2VtZW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3JlZjMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3JlZjMucG9wcGVyO1xuICAgICAgICByZXR1cm4gX3RoaXMyLl9jb25maWcub2Zmc2V0KHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfTtcblxuICBfcHJvdG8uX2dldFBvcHBlckNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgdmFyIHBvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfTsgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzID0ge1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHBvcHBlckNvbmZpZyksIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpO1xuICB9IC8vIFN0YXRpY1xuICA7XG5cbiAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UgPSBmdW5jdGlvbiBkcm9wZG93bkludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQ2KTtcblxuICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IERyb3Bkb3duKGVsZW1lbnQsIF9jb25maWcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICB9XG4gIH07XG5cbiAgRHJvcGRvd24ualF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24galF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcywgY29uZmlnKTtcbiAgICB9KTtcbiAgfTtcblxuICBEcm9wZG93bi5jbGVhck1lbnVzID0gZnVuY3Rpb24gY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFJDIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKTtcbiAgICAgIHZhciBjb250ZXh0ID0gRGF0YS5nZXREYXRhKHRvZ2dsZXNbaV0sIERBVEFfS0VZJDYpO1xuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBkcm9wZG93bk1lbnUgPSBjb250ZXh0Ll9tZW51O1xuXG4gICAgICBpZiAoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDIpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpICYmIHBhcmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9ISURFJDEsIHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF9yZWY0O1xuXG4gICAgICAgIChfcmVmNCA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjQsIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLm9mZihlbGVtLCAnbW91c2VvdmVyJywgbnVsbCwgbm9vcCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDIpO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocGFyZW50LCBFVkVOVF9ISURERU4kMSwgcmVsYXRlZFRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50ID0gZnVuY3Rpb24gZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfTtcblxuICBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID8gZXZlbnQua2V5ID09PSBTUEFDRV9LRVkgfHwgZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmIChldmVudC5rZXkgIT09IEFSUk9XX0RPV05fS0VZICYmIGV2ZW50LmtleSAhPT0gQVJST1dfVVBfS0VZIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9ESVNBQkxFRCQxKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKTtcbiAgICB2YXIgaXNBY3RpdmUgPSBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQyKTtcblxuICAgIGlmIChldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgIHZhciBidXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUkMikgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyKVswXTtcbiAgICAgIGJ1dHRvbi5mb2N1cygpO1xuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkpIHtcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHBhcmVudCkuZmlsdGVyKGlzVmlzaWJsZSk7XG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSAmJiBpbmRleCA+IDApIHtcbiAgICAgIC8vIFVwXG4gICAgICBpbmRleC0tO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gRG93blxuICAgICAgaW5kZXgrKztcbiAgICB9IC8vIGluZGV4IGlzIC0xIGlmIHRoZSBmaXJzdCBrZXlkb3duIGlzIGFuIEFycm93VXBcblxuXG4gICAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyAwIDogaW5kZXg7XG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gIH07XG5cbiAgRHJvcGRvd24uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQ2KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIG51bGwsIFt7XG4gICAga2V5OiBcIlZFUlNJT05cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OJDY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRlZmF1bHRUeXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGUkMztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpO1xuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBEcm9wZG93bi5jbGVhck1lbnVzKTtcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpO1xuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMsICd0b2dnbGUnKTtcbn0pO1xuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ2LCBTRUxFQ1RPUl9GT1JNX0NISUxELCBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xudmFyICQkNyA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLmRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbmlmICgkJDcpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ2ID0gJCQ3LmZuW05BTUUkNl07XG4gICQkNy5mbltOQU1FJDZdID0gRHJvcGRvd24ualF1ZXJ5SW50ZXJmYWNlO1xuICAkJDcuZm5bTkFNRSQ2XS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duO1xuXG4gICQkNy5mbltOQU1FJDZdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJCQ3LmZuW05BTUUkNl0gPSBKUVVFUllfTk9fQ09ORkxJQ1QkNjtcbiAgICByZXR1cm4gRHJvcGRvd24ualF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTkFNRSQ3ID0gJ21vZGFsJztcbnZhciBWRVJTSU9OJDcgPSAnMy4yLjInO1xudmFyIERBVEFfS0VZJDcgPSAnY29yZXVpLm1vZGFsJztcbnZhciBFVkVOVF9LRVkkNyA9IFwiLlwiICsgREFUQV9LRVkkNztcbnZhciBEQVRBX0FQSV9LRVkkNyA9ICcuZGF0YS1hcGknO1xudmFyIEVTQ0FQRV9LRVkkMSA9ICdFc2NhcGUnO1xudmFyIERlZmF1bHQkNSA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogdHJ1ZVxufTtcbnZhciBEZWZhdWx0VHlwZSQ0ID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBmb2N1czogJ2Jvb2xlYW4nLFxuICBzaG93OiAnYm9vbGVhbidcbn07XG52YXIgRVZFTlRfSElERSQyID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkNztcbnZhciBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IFwiaGlkZVByZXZlbnRlZFwiICsgRVZFTlRfS0VZJDc7XG52YXIgRVZFTlRfSElEREVOJDIgPSBcImhpZGRlblwiICsgRVZFTlRfS0VZJDc7XG52YXIgRVZFTlRfU0hPVyQyID0gXCJzaG93XCIgKyBFVkVOVF9LRVkkNztcbnZhciBFVkVOVF9TSE9XTiQyID0gXCJzaG93blwiICsgRVZFTlRfS0VZJDc7XG52YXIgRVZFTlRfRk9DVVNJTiA9IFwiZm9jdXNpblwiICsgRVZFTlRfS0VZJDc7XG52YXIgRVZFTlRfUkVTSVpFID0gXCJyZXNpemVcIiArIEVWRU5UX0tFWSQ3O1xudmFyIEVWRU5UX0NMSUNLX0RJU01JU1MgPSBcImNsaWNrLmRpc21pc3NcIiArIEVWRU5UX0tFWSQ3O1xudmFyIEVWRU5UX0tFWURPV05fRElTTUlTUyA9IFwia2V5ZG93bi5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNztcbnZhciBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBcIm1vdXNldXAuZGlzbWlzc1wiICsgRVZFTlRfS0VZJDc7XG52YXIgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBcIm1vdXNlZG93bi5kaXNtaXNzXCIgKyBFVkVOVF9LRVkkNztcbnZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQ3ID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJDcgKyBEQVRBX0FQSV9LRVkkNztcbnZhciBDTEFTU19OQU1FX1NDUk9MTEJBUl9NRUFTVVJFUiA9ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZSc7XG52YXIgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCc7XG52YXIgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nO1xudmFyIENMQVNTX05BTUVfRkFERSA9ICdmYWRlJztcbnZhciBDTEFTU19OQU1FX1NIT1ckMyA9ICdzaG93JztcbnZhciBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnO1xudmFyIFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJztcbnZhciBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5JztcbnZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQzID0gJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJztcbnZhciBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJztcbnZhciBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnO1xudmFyIFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJztcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgZWxlbWVudCk7XG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IDA7XG4gICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJDcsIHRoaXMpO1xuICB9IC8vIEdldHRlcnNcblxuXG4gIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgLy8gUHVibGljXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldCk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckMiwge1xuICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcblxuICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKCk7XG5cbiAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKTtcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5oaWRlKGV2ZW50KTtcbiAgICB9KTtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZnVuY3Rpb24gKCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZShfdGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gX3RoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGV2ZW50KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDIpO1xuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuXG4gICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpO1xuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKTtcblxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKTtcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMyk7XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpO1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyk7XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX2hpZGVNb2RhbChldmVudCk7XG4gICAgICB9KTtcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXS5mb3JFYWNoKGZ1bmN0aW9uIChodG1sRWxlbWVudCkge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSQ3KTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRVZFTlRfRk9DVVNJTmAgYW5kIGBFVkVOVF9DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pO1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSQ3KTtcbiAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2RpYWxvZyA9IG51bGw7XG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgIHRoaXMuX2lzU2hvd24gPSBudWxsO1xuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gbnVsbDtcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbDtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsO1xuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICB9IC8vIFByaXZhdGVcbiAgO1xuXG4gIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCQ1KSwgY29uZmlnKTtcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSQ3LCBjb25maWcsIERlZmF1bHRUeXBlJDQpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgX3Byb3RvLl9zaG93RWxlbWVudCA9IGZ1bmN0aW9uIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSk7XG5cbiAgICB2YXIgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpO1xuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHwgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDA7XG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckMyk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gdHJhbnNpdGlvbkNvbXBsZXRlKCkge1xuICAgICAgaWYgKF90aGlzMy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIF90aGlzMy5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoX3RoaXMzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiQyLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZyk7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2RpYWxvZywgVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSk7XG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9kaWFsb2csIHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2VuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKTsgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG5cbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiYgX3RoaXM0Ll9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIV90aGlzNC5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fc2V0RXNjYXBlRXZlbnQgPSBmdW5jdGlvbiBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChfdGhpczUuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBfdGhpczUuaGlkZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKCFfdGhpczUuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkkMSkge1xuICAgICAgICAgIF90aGlzNS5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3NldFJlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM2Ll9hZGp1c3REaWFsb2coKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oaWRlTW9kYWwgPSBmdW5jdGlvbiBfaGlkZU1vZGFsKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pO1xuXG4gICAgICBfdGhpczcuX3Jlc2V0QWRqdXN0bWVudHMoKTtcblxuICAgICAgX3RoaXM3Ll9yZXNldFNjcm9sbGJhcigpO1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpczcuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQyKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX3JlbW92ZUJhY2tkcm9wID0gZnVuY3Rpb24gX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fYmFja2Ryb3ApO1xuXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5fc2hvd0JhY2tkcm9wID0gZnVuY3Rpb24gX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgdmFyIGFuaW1hdGUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpID8gQ0xBU1NfTkFNRV9GQURFIDogJyc7XG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDTEFTU19OQU1FX0JBQ0tEUk9QO1xuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2JhY2tkcm9wKTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKF90aGlzOC5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIF90aGlzOC5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczguX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICByZWZsb3codGhpcy5fYmFja2Ryb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQzKTtcblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9iYWNrZHJvcCwgVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKTtcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2JhY2tkcm9wLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1ckMyk7XG5cbiAgICAgIHZhciBjYWxsYmFja1JlbW92ZSA9IGZ1bmN0aW9uIGNhbGxiYWNrUmVtb3ZlKCkge1xuICAgICAgICBfdGhpczguX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICAgIHZhciBfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcCk7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9iYWNrZHJvcCwgVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKTtcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fYmFja2Ryb3AsIF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuXG4gICAgICB2YXIgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCk7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzOS5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKTtcblxuICAgICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbmUoX3RoaXM5Ll9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM5Ll9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKF90aGlzOS5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH0gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIDtcblxuICBfcHJvdG8uX2FkanVzdERpYWxvZyA9IGZ1bmN0aW9uIF9hZGp1c3REaWFsb2coKSB7XG4gICAgdmFyIGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fcmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICB9O1xuXG4gIF9wcm90by5fY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgdmFyIHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfTtcblxuICBfcHJvdG8uX3NldFNjcm9sbGJhciA9IGZ1bmN0aW9uIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRQYWRkaW5nID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3BhZGRpbmctcmlnaHQnXTtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgX3RoaXMxMC5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCI7XG4gICAgICB9KTsgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuXG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBhY3R1YWxNYXJnaW4gPSBlbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0O1xuICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydtYXJnaW4tcmlnaHQnXTtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodCA9IHBhcnNlRmxvYXQoY2FsY3VsYXRlZE1hcmdpbikgLSBfdGhpczEwLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH0pOyAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG5cbiAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVsncGFkZGluZy1yaWdodCddO1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pO1xuICB9O1xuXG4gIF9wcm90by5fcmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHZhciBwYWRkaW5nID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAncGFkZGluZy1yaWdodCcpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhZGRpbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nO1xuICAgICAgfVxuICAgIH0pOyAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50IGFuZCBuYXZiYXItdG9nZ2xlciBtYXJnaW5cblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoXCJcIiArIFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgbWFyZ2luID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnbWFyZ2luLXJpZ2h0Jyk7XG5cbiAgICAgIGlmICh0eXBlb2YgbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodCA9IG1hcmdpbjtcbiAgICAgIH1cbiAgICB9KTsgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcblxuICAgIHZhciBwYWRkaW5nID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpO1xuXG4gICAgaWYgKHR5cGVvZiBwYWRkaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2dldFNjcm9sbGJhcldpZHRoID0gZnVuY3Rpb24gX2dldFNjcm9sbGJhcldpZHRoKCkge1xuICAgIC8vIHRoeCBkLndhbHNoXG4gICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDTEFTU19OQU1FX1NDUk9MTEJBUl9NRUFTVVJFUjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH0gLy8gU3RhdGljXG4gIDtcblxuICBNb2RhbC5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSQ3KTtcblxuICAgICAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCQ1KSwgTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcykpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgTW9kYWwuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQ3KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoTW9kYWwsIG51bGwsIFt7XG4gICAga2V5OiBcIlZFUlNJT05cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OJDc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsO1xufSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEkkNywgU0VMRUNUT1JfREFUQV9UT0dHTEUkMywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBfdGhpczExID0gdGhpcztcblxuICB2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKTtcblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1ckMiwgZnVuY3Rpb24gKHNob3dFdmVudCkge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4kMiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzVmlzaWJsZShfdGhpczExKSkge1xuICAgICAgICBfdGhpczExLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0YXJnZXQsIERBVEFfS0VZJDcpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0KSksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpKTtcblxuICAgIGRhdGEgPSBuZXcgTW9kYWwodGFyZ2V0LCBjb25maWcpO1xuICB9XG5cbiAgZGF0YS5zaG93KHRoaXMpO1xufSk7XG52YXIgJCQ4ID0gZ2V0alF1ZXJ5KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAubW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuaWYgKCQkOCkge1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJDcgPSAkJDguZm5bTkFNRSQ3XTtcbiAgJCQ4LmZuW05BTUUkN10gPSBNb2RhbC5qUXVlcnlJbnRlcmZhY2U7XG4gICQkOC5mbltOQU1FJDddLkNvbnN0cnVjdG9yID0gTW9kYWw7XG5cbiAgJCQ4LmZuW05BTUUkN10ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkJDguZm5bTkFNRSQ3XSA9IEpRVUVSWV9OT19DT05GTElDVCQ3O1xuICAgIHJldHVybiBNb2RhbC5qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4wLWFscGhhMSk6IHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xudmFyIHVyaUF0dHJzID0gWydiYWNrZ3JvdW5kJywgJ2NpdGUnLCAnaHJlZicsICdpdGVtdHlwZScsICdsb25nZGVzYycsICdwb3N0ZXInLCAnc3JjJywgJ3hsaW5rOmhyZWYnXTtcbnZhciBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2k7XG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cblxudmFyIFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14jJi86P10qKD86WyMvP118JCkpL2dpO1xuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cblxudmFyIERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pO1xuXG52YXIgYWxsb3dlZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgdmFyIGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICBpZiAodXJpQXR0cnMuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChhdHRyUmVnZXgpIHtcbiAgICByZXR1cm4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwO1xuICB9KTsgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgRGVmYXVsdFdoaXRlbGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufTtcbmZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgdmFyIF9yZWY7XG5cbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sO1xuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKTtcbiAgfVxuXG4gIHZhciBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICB2YXIgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJyk7XG4gIHZhciB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KTtcblxuICB2YXIgZWxlbWVudHMgPSAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpLCBsZW4pIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgZWwgPSBlbGVtZW50c1tpXTtcbiAgICB2YXIgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWxOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICB9XG5cbiAgICB2YXIgYXR0cmlidXRlTGlzdCA9IChfcmVmMiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjIsIGVsLmF0dHJpYnV0ZXMpO1xuXG4gICAgdmFyIHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pO1xuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIHdoaXRlbGlzdGVkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBfcmV0ID0gX2xvb3AoaSk7XG5cbiAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FJDggPSAndG9vbHRpcCc7XG52YXIgVkVSU0lPTiQ4ID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSQ4ID0gJ2NvcmV1aS50b29sdGlwJztcbnZhciBFVkVOVF9LRVkkOCA9IFwiLlwiICsgREFUQV9LRVkkODtcbnZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG52YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYICsgXCJcXFxcUytcIiwgJ2cnKTtcbnZhciBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ107XG52YXIgRGVmYXVsdFR5cGUkNSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZycsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldDogJyhhcnJheXxmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgd2hpdGVMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbn07XG52YXIgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogJ2xlZnQnXG59O1xudmFyIERlZmF1bHQkNiA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICB3aGl0ZUxpc3Q6IERlZmF1bHRXaGl0ZWxpc3QsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufTtcbnZhciBFdmVudCQxID0ge1xuICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ4LFxuICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkOCxcbiAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkOCxcbiAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ4LFxuICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZJDgsXG4gIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkOCxcbiAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVkkOCxcbiAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSQ4LFxuICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ4LFxuICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQ4XG59O1xudmFyIENMQVNTX05BTUVfRkFERSQxID0gJ2ZhZGUnO1xudmFyIENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnO1xudmFyIENMQVNTX05BTUVfU0hPVyQ0ID0gJ3Nob3cnO1xudmFyIEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdyc7XG52YXIgSE9WRVJfU1RBVEVfT1VUID0gJ291dCc7XG52YXIgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcic7XG52YXIgVFJJR0dFUl9IT1ZFUiA9ICdob3Zlcic7XG52YXIgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cyc7XG52YXIgVFJJR0dFUl9DTElDSyA9ICdjbGljayc7XG52YXIgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJztcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRvb2x0aXAoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjcmVhdGVQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb3JlVUlcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gICAgfSAvLyBwcml2YXRlXG5cblxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsOyAvLyBQcm90ZWN0ZWRcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcblxuICAgIERhdGEuc2V0RGF0YShlbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcbiAgfSAvLyBHZXR0ZXJzXG5cblxuICB2YXIgX3Byb3RvID0gVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgLy8gUHVibGljXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICB2YXIgY29udGV4dCA9IERhdGEuZ2V0RGF0YShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICBEYXRhLnNldERhdGEoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNCkpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICBEYXRhLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5lbGVtZW50LmNsb3Nlc3QoXCIuXCIgKyBDTEFTU19OQU1FX01PREFMKSwgJ2hpZGUuY29yZXVpLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcik7XG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50aXApO1xuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IG51bGw7XG4gICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmNvbmZpZyA9IG51bGw7XG4gICAgdGhpcy50aXAgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICB2YXIgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdmFyIGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID8gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMuZWxlbWVudCkgOiBzaGFkb3dSb290LmNvbnRhaW5zKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpO1xuICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFJDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcblxuICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudCk7IC8vIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG5cbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKTtcblxuICAgICAgRGF0YS5zZXREYXRhKHRpcCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKTtcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IGNyZWF0ZVBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVyQ0KTsgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIF90aGlzLl9maXhUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgX3RoaXMuX2hvdmVyU3RhdGUgPSBudWxsO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpcy5lbGVtZW50LCBfdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTik7XG5cbiAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgICBfdGhpcy5fbGVhdmUobnVsbCwgX3RoaXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApO1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMudGlwLCBUUkFOU0lUSU9OX0VORCwgY29tcGxldGUpO1xuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLnRpcCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgX3RoaXMyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKF90aGlzMi5lbGVtZW50LCBfdGhpczIuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKTtcblxuICAgICAgX3RoaXMyLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICB2YXIgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDQpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIChfcmVmMiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjIsIGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlO1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSQxKSkge1xuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRpcCk7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRpcCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKTtcbiAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRpcCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKCk7XG4gICAgfVxuICB9IC8vIFByb3RlY3RlZFxuICA7XG5cbiAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNvbmZpZy50ZW1wbGF0ZTtcbiAgICB0aGlzLnRpcCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgcmV0dXJuIHRoaXMudGlwO1xuICB9O1xuXG4gIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFJDEsIENMQVNTX05BTUVfU0hPVyQ0KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudChlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgaWYgKGNvbnRlbnQuanF1ZXJ5KSB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50WzBdO1xuICAgICAgfSAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcblxuXG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoY29udGVudC5wYXJlbnROb2RlICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudC50ZXh0Q29udGVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJyk7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiB0aXRsZTtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2dldFBvcHBlckNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGRlZmF1bHRCc0NvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGVsZW1lbnQ6IFwiLlwiICsgdGhpcy5jb25zdHJ1Y3Rvci5OQU1FICsgXCItYXJyb3dcIlxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgb25GaXJzdFVwZGF0ZTogZnVuY3Rpb24gb25GaXJzdFVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIC8vIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICAgIC8vIGZpeCBQb3BwZXIgcG9zaXRpb24gaXNzdWVcbiAgICAgICAgICAvL1RPRE86IGZpbmQgd2hlcmUgaXMgdGhlIHByb2JsZW0gb3IgZmluZCBiZXR0ZXIgc29sdXRpb25cbiAgICAgICAgICBfdGhpczMuX3BvcHBlci51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkZWZhdWx0QnNDb25maWcpLCB0aGlzLmNvbmZpZy5wb3BwZXJDb25maWcpO1xuICB9IC8vIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAvLyAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgLy8gfVxuICAvLyBfZ2V0T2Zmc2V0KCkge1xuICAvLyAgIGNvbnN0IG9mZnNldCA9IHt9XG4gIC8vICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gICAgIG9mZnNldC5mbiA9IGRhdGEgPT4ge1xuICAvLyAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gIC8vICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAvLyAgICAgICAgIC4uLnRoaXMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuZWxlbWVudCkgfHwge31cbiAgLy8gICAgICAgfVxuICAvLyAgICAgICByZXR1cm4gZGF0YVxuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBvZmZzZXRcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvLl9nZXRPZmZzZXQgPSBmdW5jdGlvbiBfZ2V0T2Zmc2V0KCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIG9mZnNldCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldChfcmVmMykge1xuICAgICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjMucGxhY2VtZW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3JlZjMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3JlZjMucG9wcGVyO1xuICAgICAgICByZXR1cm4gX3RoaXM0LmNvbmZpZy5vZmZzZXQoe1xuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0O1xuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRDb250YWluZXIgPSBmdW5jdGlvbiBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gIH07XG5cbiAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihfdGhpczUuZWxlbWVudCwgX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczUuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnRvZ2dsZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICB2YXIgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgPyBfdGhpczUuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6IF90aGlzNS5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOO1xuICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID8gX3RoaXM1LmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczUuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihfdGhpczUuZWxlbWVudCwgZXZlbnRJbiwgX3RoaXM1LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5fZW50ZXIoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKF90aGlzNS5lbGVtZW50LCBldmVudE91dCwgX3RoaXM1LmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS5fbGVhdmUoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXM1LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXM1LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuZWxlbWVudC5jbG9zZXN0KFwiLlwiICsgQ0xBU1NfTkFNRV9NT0RBTCksICdoaWRlLmNvcmV1aS5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmNvbmZpZyksIHt9LCB7XG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2ZpeFRpdGxlID0gZnVuY3Rpb24gX2ZpeFRpdGxlKCkge1xuICAgIHZhciB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScsIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJycpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fZW50ZXIgPSBmdW5jdGlvbiBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgRGF0YS5nZXREYXRhKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5KTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgIERhdGEuc2V0RGF0YShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1ckNCkgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1c7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XO1xuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdyk7XG4gIH07XG5cbiAgX3Byb3RvLl9sZWF2ZSA9IGZ1bmN0aW9uIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldERhdGEoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgRGF0YS5zZXREYXRhKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX09VVDtcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSk7XG4gIH07XG5cbiAgX3Byb3RvLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yICh2YXIgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIHZhciBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuZWxlbWVudCk7XG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGRhdGFBdHRyKSB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmNvbnRhaW5lciA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmNvbnRhaW5lci5qcXVlcnkpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyWzBdO1xuICAgIH1cblxuICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQpLCBkYXRhQXR0cmlidXRlcyksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUkOCwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9O1xuXG4gIF9wcm90by5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfTtcblxuICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgdmFyIHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpO1xuXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnRyaW0oKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHRDbGFzcykge1xuICAgICAgICByZXR1cm4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhwb3BwZXJEYXRhKVxuICAvLyAgIGNvbnN0IHBvcHBlckluc3RhbmNlID0gcG9wcGVyRGF0YS5lbGVtZW50cy5wb3BwZXJcbiAgLy8gICB0aGlzLnRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcHBlckluc3RhbmNlLmdldEF0dHJpYnV0ZSgnaWQnKSlcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnRpcClcbiAgLy8gICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgLy8gICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by5fZml4VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9maXhUcmFuc2l0aW9uKCkge1xuICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSQxKTtcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICB0aGlzLnNob3coKTtcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICB9IC8vIFN0YXRpY1xuICA7XG5cbiAgVG9vbHRpcC5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSQ4KTtcblxuICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBUb29sdGlwLmdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkOCk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAga2V5OiBcIlZFUlNJT05cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OJDg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5BTUVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBOQU1FJDg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFUQV9LRVkkODtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRXZlbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBFdmVudCQxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBFVkVOVF9LRVkkODtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ1O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb29sdGlwO1xufSgpO1xuXG52YXIgJCQ5ID0gZ2V0alF1ZXJ5KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAudG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5pZiAoJCQ5KSB7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkOCA9ICQkOS5mbltOQU1FJDhdO1xuICAkJDkuZm5bTkFNRSQ4XSA9IFRvb2x0aXAualF1ZXJ5SW50ZXJmYWNlO1xuICAkJDkuZm5bTkFNRSQ4XS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJCQ5LmZuW05BTUUkOF0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkJDkuZm5bTkFNRSQ4XSA9IEpRVUVSWV9OT19DT05GTElDVCQ4O1xuICAgIHJldHVybiBUb29sdGlwLmpRdWVyeUludGVyZmFjZTtcbiAgfTtcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIE5BTUUkOSA9ICdwb3BvdmVyJztcbnZhciBWRVJTSU9OJDkgPSAnMy4yLjInO1xudmFyIERBVEFfS0VZJDkgPSAnY29yZXVpLnBvcG92ZXInO1xudmFyIEVWRU5UX0tFWSQ5ID0gXCIuXCIgKyBEQVRBX0tFWSQ5O1xudmFyIENMQVNTX1BSRUZJWCQxID0gJ2JzLXBvcG92ZXInO1xudmFyIEJTQ0xTX1BSRUZJWF9SRUdFWCQxID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYJDEgKyBcIlxcXFxTK1wiLCAnZycpO1xuXG52YXIgRGVmYXVsdCQ3ID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIFRvb2x0aXAuRGVmYXVsdCksIHt9LCB7XG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgY29udGVudDogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG59KTtcblxudmFyIERlZmF1bHRUeXBlJDYgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSksIHt9LCB7XG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufSk7XG5cbnZhciBFdmVudCQyID0ge1xuICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSQ5LFxuICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkOSxcbiAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVkkOSxcbiAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSQ5LFxuICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZJDksXG4gIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkkOSxcbiAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVkkOSxcbiAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSQ5LFxuICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSQ5LFxuICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSQ5XG59O1xudmFyIENMQVNTX05BTUVfRkFERSQyID0gJ2ZhZGUnO1xudmFyIENMQVNTX05BTUVfU0hPVyQ1ID0gJ3Nob3cnO1xudmFyIFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcic7XG52YXIgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5Jztcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgUG9wb3ZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1Rvb2x0aXApIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9wb3ZlciwgX1Rvb2x0aXApO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgcmV0dXJuIF9Ub29sdGlwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb3BvdmVyLnByb3RvdHlwZTtcblxuICAvLyBPdmVycmlkZXNcbiAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuICB9O1xuXG4gIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7IC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9USVRMRSwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKTtcblxuICAgIHZhciBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0NPTlRFTlQsIHRpcCksIGNvbnRlbnQpO1xuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSQyLCBDTEFTU19OQU1FX1NIT1ckNSk7XG4gIH0gLy8gUHJpdmF0ZVxuICA7XG5cbiAgX3Byb3RvLl9hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKENMQVNTX1BSRUZJWCQxICsgXCItXCIgKyBhdHRhY2htZW50KTtcbiAgfTtcblxuICBfcHJvdG8uX2dldENvbnRlbnQgPSBmdW5jdGlvbiBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHwgdGhpcy5jb25maWcuY29udGVudDtcbiAgfTtcblxuICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgdmFyIHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgkMSk7XG5cbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICByZXR1cm4gdG9rZW4udHJpbSgpO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAodENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IC8vIFN0YXRpY1xuICA7XG5cbiAgUG9wb3Zlci5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSQ5KTtcblxuICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGw7XG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpO1xuICAgICAgICBEYXRhLnNldERhdGEodGhpcywgREFUQV9LRVkkOSwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFBvcG92ZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSQ5KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoUG9wb3ZlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgIC8vIEdldHRlcnNcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OJDk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0JDc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5BTUVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBOQU1FJDk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFUQV9LRVkkOTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRXZlbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBFdmVudCQyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBFVkVOVF9LRVkkOTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ2O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3BvdmVyO1xufShUb29sdGlwKTtcblxudmFyICQkYSA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbmlmICgkJGEpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCQ5ID0gJCRhLmZuW05BTUUkOV07XG4gICQkYS5mbltOQU1FJDldID0gUG9wb3Zlci5qUXVlcnlJbnRlcmZhY2U7XG4gICQkYS5mbltOQU1FJDldLkNvbnN0cnVjdG9yID0gUG9wb3ZlcjtcblxuICAkJGEuZm5bTkFNRSQ5XS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkYS5mbltOQU1FJDldID0gSlFVRVJZX05PX0NPTkZMSUNUJDk7XG4gICAgcmV0dXJuIFBvcG92ZXIualF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTkFNRSRhID0gJ3Njcm9sbHNweSc7XG52YXIgVkVSU0lPTiRhID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSRhID0gJ2NvcmV1aS5zY3JvbGxzcHknO1xudmFyIEVWRU5UX0tFWSRhID0gXCIuXCIgKyBEQVRBX0tFWSRhO1xudmFyIERBVEFfQVBJX0tFWSQ4ID0gJy5kYXRhLWFwaSc7XG52YXIgRGVmYXVsdCQ4ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufTtcbnZhciBEZWZhdWx0VHlwZSQ3ID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufTtcbnZhciBFVkVOVF9BQ1RJVkFURSA9IFwiYWN0aXZhdGVcIiArIEVWRU5UX0tFWSRhO1xudmFyIEVWRU5UX1NDUk9MTCA9IFwic2Nyb2xsXCIgKyBFVkVOVF9LRVkkYTtcbnZhciBFVkVOVF9MT0FEX0RBVEFfQVBJJDEgPSBcImxvYWRcIiArIEVWRU5UX0tFWSRhICsgREFUQV9BUElfS0VZJDg7XG52YXIgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nO1xudmFyIENMQVNTX05BTUVfQUNUSVZFJDMgPSAnYWN0aXZlJztcbnZhciBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nO1xudmFyIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJztcbnZhciBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJztcbnZhciBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJztcbnZhciBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nO1xudmFyIFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bic7XG52YXIgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnO1xudmFyIE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0JztcbnZhciBNRVRIT0RfUE9TSVRJT04gPSAncG9zaXRpb24nO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBTY3JvbGxTcHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JvbGxTcHkoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnQ7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5fc2VsZWN0b3IgPSB0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTRUxFQ1RPUl9OQVZfTElOS1MgKyBcIiwgXCIgKyB0aGlzLl9jb25maWcudGFyZ2V0ICsgXCIgXCIgKyBTRUxFQ1RPUl9MSVNUX0lURU1TICsgXCIsIFwiICsgdGhpcy5fY29uZmlnLnRhcmdldCArIFwiIC5cIiArIENMQVNTX05BTUVfRFJPUERPV05fSVRFTTtcbiAgICB0aGlzLl9vZmZzZXRzID0gW107XG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fcHJvY2VzcyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLl9wcm9jZXNzKCk7XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkYSwgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IFNjcm9sbFNweS5wcm90b3R5cGU7XG5cbiAgLy8gUHVibGljXG4gIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgPyBNRVRIT0RfT0ZGU0VUIDogTUVUSE9EX1BPU0lUSU9OO1xuICAgIHZhciBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgPyBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZDtcbiAgICB2YXIgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gTUVUSE9EX1BPU0lUSU9OID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwO1xuICAgIHRoaXMuX29mZnNldHMgPSBbXTtcbiAgICB0aGlzLl90YXJnZXRzID0gW107XG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG4gICAgdmFyIHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKTtcbiAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdmFyIHRhcmdldFNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXRTZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0U2VsZWN0b3IpIDogbnVsbDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB2YXIgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBbTWFuaXB1bGF0b3Jbb2Zmc2V0TWV0aG9kXSh0YXJnZXQpLnRvcCArIG9mZnNldEJhc2UsIHRhcmdldFNlbGVjdG9yXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhWzBdIC0gYlswXTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBfdGhpczIuX29mZnNldHMucHVzaChpdGVtWzBdKTtcblxuICAgICAgX3RoaXMyLl90YXJnZXRzLnB1c2goaXRlbVsxXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSRhKTtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0tFWSRhKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIHRoaXMuX3NlbGVjdG9yID0gbnVsbDtcbiAgICB0aGlzLl9vZmZzZXRzID0gbnVsbDtcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsO1xuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IG51bGw7XG4gIH0gLy8gUHJpdmF0ZVxuICA7XG5cbiAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBEZWZhdWx0JDgpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIGlzRWxlbWVudChjb25maWcudGFyZ2V0KSkge1xuICAgICAgdmFyIGlkID0gY29uZmlnLnRhcmdldC5pZDtcblxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IGdldFVJRChOQU1FJGEpO1xuICAgICAgICBjb25maWcudGFyZ2V0LmlkID0gaWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBcIiNcIiArIGlkO1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FJGEsIGNvbmZpZywgRGVmYXVsdFR5cGUkNyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfTtcblxuICBfcHJvdG8uX2dldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/IHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcDtcbiAgfTtcblxuICBfcHJvdG8uX2dldFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgfTtcblxuICBfcHJvdG8uX2dldE9mZnNldEhlaWdodCA9IGZ1bmN0aW9uIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICB9O1xuXG4gIF9wcm90by5fcHJvY2VzcyA9IGZ1bmN0aW9uIF9wcm9jZXNzKCkge1xuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXQ7XG5cbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICB2YXIgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpO1xuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX2NsZWFyKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJiBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJiAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSk7XG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgdmFyIHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvciArIFwiW2RhdGEtdGFyZ2V0PVxcXCJcIiArIHRhcmdldCArIFwiXFxcIl0sXCIgKyBzZWxlY3RvciArIFwiW2hyZWY9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXVwiO1xuICAgIH0pO1xuXG4gICAgdmFyIGxpbmsgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHF1ZXJpZXMuam9pbignLCcpKTtcblxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgbGluay5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDMpO1xuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkuZm9yRWFjaChmdW5jdGlvbiAobGlzdEdyb3VwKSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfTElOS1MgKyBcIiwgXCIgKyBTRUxFQ1RPUl9MSVNUX0lURU1TKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICAgICAgfSk7IC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuXG4gICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfSVRFTVMpLmZvckVhY2goZnVuY3Rpb24gKG5hdkl0ZW0pIHtcbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkMyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY2xlYXIgPSBmdW5jdGlvbiBfY2xlYXIoKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUkMyk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSQzKTtcbiAgICB9KTtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIFNjcm9sbFNweS5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSRhKTtcblxuICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2Nyb2xsU3B5LmdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkYSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFNjcm9sbFNweSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFZFUlNJT04kYTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkODtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsU3B5O1xufSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEkkMSwgZnVuY3Rpb24gKCkge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKS5mb3JFYWNoKGZ1bmN0aW9uIChzcHkpIHtcbiAgICByZXR1cm4gbmV3IFNjcm9sbFNweShzcHksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHNweSkpO1xuICB9KTtcbn0pO1xudmFyICQkYiA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbmlmICgkJGIpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCRhID0gJCRiLmZuW05BTUUkYV07XG4gICQkYi5mbltOQU1FJGFdID0gU2Nyb2xsU3B5LmpRdWVyeUludGVyZmFjZTtcbiAgJCRiLmZuW05BTUUkYV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHk7XG5cbiAgJCRiLmZuW05BTUUkYV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkJGIuZm5bTkFNRSRhXSA9IEpRVUVSWV9OT19DT05GTElDVCRhO1xuICAgIHJldHVybiBTY3JvbGxTcHkualF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTkFNRSRiID0gJ3NpZGViYXInO1xudmFyIFZFUlNJT04kYiA9ICczLjIuMic7XG52YXIgREFUQV9LRVkkYiA9ICdjb3JldWkuc2lkZWJhcic7XG52YXIgRVZFTlRfS0VZJGIgPSBcIi5cIiArIERBVEFfS0VZJGI7XG52YXIgREFUQV9BUElfS0VZJDkgPSAnLmRhdGEtYXBpJztcbnZhciBEZWZhdWx0JDkgPSB7XG4gIGFjdGl2ZUxpbmtzRXhhY3Q6IHRydWUsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgeHM6ICdjLXNpZGViYXItc2hvdycsXG4gICAgc206ICdjLXNpZGViYXItc20tc2hvdycsXG4gICAgbWQ6ICdjLXNpZGViYXItbWQtc2hvdycsXG4gICAgbGc6ICdjLXNpZGViYXItbGctc2hvdycsXG4gICAgeGw6ICdjLXNpZGViYXIteGwtc2hvdycsXG4gICAgeHhsOiAnYy1zaWRlYmFyLXh4bC1zaG93J1xuICB9LFxuICBkcm9wZG93bkFjY29yZGlvbjogdHJ1ZVxufTtcbnZhciBEZWZhdWx0VHlwZSQ4ID0ge1xuICBhY3RpdmVMaW5rc0V4YWN0OiAnYm9vbGVhbicsXG4gIGJyZWFrcG9pbnRzOiAnb2JqZWN0JyxcbiAgZHJvcGRvd25BY2NvcmRpb246ICcoc3RyaW5nfGJvb2xlYW4pJ1xufTtcbnZhciBDTEFTU19OQU1FX0FDVElWRSQ0ID0gJ2MtYWN0aXZlJztcbnZhciBDTEFTU19OQU1FX0JBQ0tEUk9QJDEgPSAnYy1zaWRlYmFyLWJhY2tkcm9wJztcbnZhciBDTEFTU19OQU1FX0ZBREUkMyA9ICdjLWZhZGUnO1xudmFyIENMQVNTX05BTUVfTkFWX0RST1BET1dOID0gJ2Mtc2lkZWJhci1uYXYtZHJvcGRvd24nO1xudmFyIENMQVNTX05BTUVfTkFWX0RST1BET1dOX1RPR0dMRSQxID0gJ2Mtc2lkZWJhci1uYXYtZHJvcGRvd24tdG9nZ2xlJztcbnZhciBDTEFTU19OQU1FX1NIT1ckNiA9ICdjLXNob3cnO1xudmFyIENMQVNTX05BTUVfU0lERUJBUl9NSU5JTUlaRUQgPSAnYy1zaWRlYmFyLW1pbmltaXplZCc7XG52YXIgQ0xBU1NfTkFNRV9TSURFQkFSX09WRVJMQUlEID0gJ2Mtc2lkZWJhci1vdmVybGFpZCc7XG52YXIgQ0xBU1NfTkFNRV9TSURFQkFSX1VORk9MREFCTEUgPSAnYy1zaWRlYmFyLXVuZm9sZGFibGUnO1xudmFyIEVWRU5UX0NMQVNTX1RPR0dMRSQxID0gJ2NsYXNzdG9nZ2xlJztcbnZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQ4ID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJGIgKyBEQVRBX0FQSV9LRVkkOTtcbnZhciBFVkVOVF9DTE9TRSQxID0gXCJjbG9zZVwiICsgRVZFTlRfS0VZJGI7XG52YXIgRVZFTlRfQ0xPU0VEJDEgPSBcImNsb3NlZFwiICsgRVZFTlRfS0VZJGI7XG52YXIgRVZFTlRfTE9BRF9EQVRBX0FQSSQyID0gXCJsb2FkXCIgKyBFVkVOVF9LRVkkYiArIERBVEFfQVBJX0tFWSQ5O1xudmFyIEVWRU5UX09QRU4gPSBcIm9wZW5cIiArIEVWRU5UX0tFWSRiO1xudmFyIEVWRU5UX09QRU5FRCA9IFwib3BlbmVkXCIgKyBFVkVOVF9LRVkkYjtcbnZhciBTRUxFQ1RPUl9OQVZfRFJPUERPV05fVE9HR0xFID0gJy5jLXNpZGViYXItbmF2LWRyb3Bkb3duLXRvZ2dsZSc7XG52YXIgU0VMRUNUT1JfTkFWX0RST1BET1dOJDEgPSAnLmMtc2lkZWJhci1uYXYtZHJvcGRvd24nO1xudmFyIFNFTEVDVE9SX05BVl9MSU5LJDEgPSAnLmMtc2lkZWJhci1uYXYtbGluayc7XG52YXIgU0VMRUNUT1JfTkFWSUdBVElPTl9DT05UQUlORVIgPSAnLmMtc2lkZWJhci1uYXYnO1xudmFyIFNFTEVDVE9SX1NJREVCQVIgPSAnLmMtc2lkZWJhcic7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIFNpZGViYXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaWRlYmFyKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUGVyZmVjdFNjcm9sbGJhciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvcmVVSVxcJ3Mgc2lkZWJhciByZXF1aXJlIFBlcmZlY3QgU2Nyb2xsYmFyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5fb3BlbiA9IHRoaXMuX2lzVmlzaWJsZSgpO1xuICAgIHRoaXMuX21vYmlsZSA9IHRoaXMuX2lzTW9iaWxlKCk7XG4gICAgdGhpcy5fb3ZlcmxhaWQgPSB0aGlzLl9pc092ZXJsYWlkKCk7XG4gICAgdGhpcy5fbWluaW1pemUgPSB0aGlzLl9pc01pbmltaXplZCgpO1xuICAgIHRoaXMuX3VuZm9sZGFibGUgPSB0aGlzLl9pc1VuZm9sZGFibGUoKTtcblxuICAgIHRoaXMuX3NldEFjdGl2ZUxpbmsoKTtcblxuICAgIHRoaXMuX3BzID0gbnVsbDtcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG5cbiAgICB0aGlzLl9wc0luaXQoKTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkYiwgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IFNpZGViYXIucHJvdG90eXBlO1xuXG4gIC8vIFB1YmxpY1xuICBfcHJvdG8ub3BlbiA9IGZ1bmN0aW9uIG9wZW4oYnJlYWtwb2ludCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9PUEVOKTtcblxuICAgIGlmICh0aGlzLl9pc01vYmlsZSgpKSB7XG4gICAgICB0aGlzLl9hZGRDbGFzc05hbWUodGhpcy5fZmlyc3RCcmVha3BvaW50Q2xhc3NOYW1lKCkpO1xuXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcblxuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fYWRkQ2xpY2tPdXRMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChicmVha3BvaW50KSB7XG4gICAgICB0aGlzLl9hZGRDbGFzc05hbWUodGhpcy5fZ2V0QnJlYWtwb2ludENsYXNzTmFtZShicmVha3BvaW50KSk7XG5cbiAgICAgIGlmICh0aGlzLl9pc092ZXJsYWlkKCkpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLl9hZGRDbGlja091dExpc3RlbmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRDbGFzc05hbWUodGhpcy5fZmlyc3RCcmVha3BvaW50Q2xhc3NOYW1lKCkpO1xuXG4gICAgICBpZiAodGhpcy5faXNPdmVybGFpZCgpKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5fYWRkQ2xpY2tPdXRMaXN0ZW5lcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGlmIChfdGhpcy5faXNWaXNpYmxlKCkgPT09IHRydWUpIHtcbiAgICAgICAgX3RoaXMuX29wZW4gPSB0cnVlO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpcy5fZWxlbWVudCwgRVZFTlRfT1BFTkVEKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKTtcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFJDEpO1xuXG4gICAgaWYgKHRoaXMuX2lzTW9iaWxlKCkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9maXJzdEJyZWFrcG9pbnRDbGFzc05hbWUoKSk7XG5cbiAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0TGlzdGVuZXIoKTtcbiAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9nZXRCcmVha3BvaW50Q2xhc3NOYW1lKGJyZWFrcG9pbnQpKTtcblxuICAgICAgaWYgKHRoaXMuX2lzT3ZlcmxhaWQoKSkge1xuICAgICAgICB0aGlzLl9yZW1vdmVDbGlja091dExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9maXJzdEJyZWFrcG9pbnRDbGFzc05hbWUoKSk7XG5cbiAgICAgIGlmICh0aGlzLl9pc092ZXJsYWlkKCkpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xpY2tPdXRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgaWYgKF90aGlzMi5faXNWaXNpYmxlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzMi5fb3BlbiA9IGZhbHNlO1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpczIuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRCQxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKTtcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoYnJlYWtwb2ludCkge1xuICAgIGlmICh0aGlzLl9vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKGJyZWFrcG9pbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oYnJlYWtwb2ludCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5taW5pbWl6ZSA9IGZ1bmN0aW9uIG1pbmltaXplKCkge1xuICAgIGlmICghdGhpcy5faXNNb2JpbGUoKSkge1xuICAgICAgdGhpcy5fYWRkQ2xhc3NOYW1lKENMQVNTX05BTUVfU0lERUJBUl9NSU5JTUlaRUQpO1xuXG4gICAgICB0aGlzLl9taW5pbWl6ZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuX3BzRGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udW5mb2xkYWJsZSA9IGZ1bmN0aW9uIHVuZm9sZGFibGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc01vYmlsZSgpKSB7XG4gICAgICB0aGlzLl9hZGRDbGFzc05hbWUoQ0xBU1NfTkFNRV9TSURFQkFSX1VORk9MREFCTEUpO1xuXG4gICAgICB0aGlzLl91bmZvbGRhYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSURFQkFSX01JTklNSVpFRCk7XG5cbiAgICAgIHRoaXMuX21pbmltaXplID0gZmFsc2U7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCB0aGlzLl9wc0luaXQoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0lERUJBUl9VTkZPTERBQkxFKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0lERUJBUl9VTkZPTERBQkxFKTtcblxuICAgICAgdGhpcy5fdW5mb2xkYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpKSwgY29uZmlnKTtcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSRiLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG5cbiAgX3Byb3RvLl9pc01vYmlsZSA9IGZ1bmN0aW9uIF9pc01vYmlsZSgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlzLW1vYmlsZScpKTtcbiAgfTtcblxuICBfcHJvdG8uX2lzSU9TID0gZnVuY3Rpb24gX2lzSU9TKCkge1xuICAgIHZhciBpT1NEZXZpY2VzID0gWydpUGFkIFNpbXVsYXRvcicsICdpUGhvbmUgU2ltdWxhdG9yJywgJ2lQb2QgU2ltdWxhdG9yJywgJ2lQYWQnLCAnaVBob25lJywgJ2lQb2QnXTtcbiAgICB2YXIgcGxhdGZvcm0gPSBCb29sZWFuKG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbiAgICBpZiAocGxhdGZvcm0pIHtcbiAgICAgIHdoaWxlIChpT1NEZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtID09PSBpT1NEZXZpY2VzLnBvcCgpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLl9pc01pbmltaXplZCA9IGZ1bmN0aW9uIF9pc01pbmltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSURFQkFSX01JTklNSVpFRCk7XG4gIH07XG5cbiAgX3Byb3RvLl9pc092ZXJsYWlkID0gZnVuY3Rpb24gX2lzT3ZlcmxhaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0lERUJBUl9PVkVSTEFJRCk7XG4gIH07XG5cbiAgX3Byb3RvLl9pc1VuZm9sZGFibGUgPSBmdW5jdGlvbiBfaXNVbmZvbGRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NJREVCQVJfVU5GT0xEQUJMRSk7XG4gIH07XG5cbiAgX3Byb3RvLl9pc1Zpc2libGUgPSBmdW5jdGlvbiBfaXNWaXNpYmxlKCkge1xuICAgIHZhciByZWN0ID0gdGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QubGVmdCA+PSAwICYmIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAvKiBvciAkKHdpbmRvdykuaGVpZ2h0KCkgKi9cbiAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgLyogb3IgJCh3aW5kb3cpLndpZHRoKCkgKi9cbiAgICA7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRDbGFzc05hbWUgPSBmdW5jdGlvbiBfYWRkQ2xhc3NOYW1lKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9O1xuXG4gIF9wcm90by5fZmlyc3RCcmVha3BvaW50Q2xhc3NOYW1lID0gZnVuY3Rpb24gX2ZpcnN0QnJlYWtwb2ludENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoRGVmYXVsdCQ5LmJyZWFrcG9pbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIERlZmF1bHQkOS5icmVha3BvaW50c1trZXldO1xuICAgIH0pWzBdO1xuICB9O1xuXG4gIF9wcm90by5fZ2V0QnJlYWtwb2ludENsYXNzTmFtZSA9IGZ1bmN0aW9uIF9nZXRCcmVha3BvaW50Q2xhc3NOYW1lKGJyZWFrcG9pbnQpIHtcbiAgICByZXR1cm4gRGVmYXVsdCQ5LmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICB9O1xuXG4gIF9wcm90by5fcmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2JhY2tkcm9wKTtcblxuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3Nob3dCYWNrZHJvcCA9IGZ1bmN0aW9uIF9zaG93QmFja2Ryb3AoKSB7XG4gICAgaWYgKCF0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1AkMTtcblxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkMyk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgcmVmbG93KHRoaXMuX2JhY2tkcm9wKTtcblxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fY2xpY2tPdXRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9jbGlja091dExpc3RlbmVyKGV2ZW50LCBzaWRlYmFyKSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX1NJREVCQVIpID09PSBudWxsKSB7XG4gICAgICAvLyBvciB1c2U6XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaWRlYmFyLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fYWRkQ2xpY2tPdXRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9hZGRDbGlja091dExpc3RlbmVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ4LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzMy5fY2xpY2tPdXRMaXN0ZW5lcihldmVudCwgX3RoaXMzKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX3JlbW92ZUNsaWNrT3V0TGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlQ2xpY2tPdXRMaXN0ZW5lcigpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ4KTtcbiAgfSAvLyBTaWRlYmFyIG5hdmlnYXRpb25cbiAgO1xuXG4gIF9wcm90by5fZ2V0QWxsU2libGluZ3MgPSBmdW5jdGlvbiBfZ2V0QWxsU2libGluZ3MoZWxlbWVudCwgZmlsdGVyKSB7XG4gICAgdmFyIHNpYmxpbmdzID0gW107XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgY29udGludWU7IC8vIHRleHQgbm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICBjb250aW51ZTsgLy8gY29tbWVudCBub2RlXG4gICAgICB9XG5cbiAgICAgIGlmICghZmlsdGVyIHx8IGZpbHRlcihlbGVtZW50KSkge1xuICAgICAgICBzaWJsaW5ncy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cblxuICAgIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRTaWJsaW5nKTtcblxuICAgIHJldHVybiBzaWJsaW5ncztcbiAgfTtcblxuICBfcHJvdG8uX3RvZ2dsZURyb3Bkb3duID0gZnVuY3Rpb24gX3RvZ2dsZURyb3Bkb3duKGV2ZW50LCBzaWRlYmFyKSB7XG4gICAgdmFyIHRvZ2dsZXIgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoIXRvZ2dsZXIuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfTkFWX0RST1BET1dOX1RPR0dMRSQxKSkge1xuICAgICAgdG9nZ2xlciA9IHRvZ2dsZXIuY2xvc2VzdChTRUxFQ1RPUl9OQVZfRFJPUERPV05fVE9HR0xFKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YUF0dHJpYnV0ZXMgPSB0b2dnbGVyLmNsb3Nlc3QoU0VMRUNUT1JfTkFWSUdBVElPTl9DT05UQUlORVIpLmRhdGFzZXQ7XG5cbiAgICBpZiAodHlwZW9mIGRhdGFBdHRyaWJ1dGVzLmRyb3Bkb3duQWNjb3JkaW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgRGVmYXVsdCQ5LmRyb3Bkb3duQWNjb3JkaW9uID0gSlNPTi5wYXJzZShkYXRhQXR0cmlidXRlcy5kcm9wZG93bkFjY29yZGlvbik7XG4gICAgfSAvLyBUT0RPOiBmaW5kIGJldHRlciBzb2x1dGlvblxuXG5cbiAgICBpZiAoRGVmYXVsdCQ5LmRyb3Bkb3duQWNjb3JkaW9uID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9nZXRBbGxTaWJsaW5ncyh0b2dnbGVyLnBhcmVudEVsZW1lbnQsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfTkFWX0RST1BET1dOKSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0b2dnbGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9OQVZfRFJPUERPV04pKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlci5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XJDYpOyAvLyBUT0RPOiBTZXQgdGhlIHRvZ2dsZXIncyBwb3NpdGlvbiBuZWFyIHRvIGN1cnNvciBhZnRlciB0aGUgY2xpY2suXG4gICAgLy8gVE9ETzogYWRkIHRyYW5zaXRpb24gZW5kXG5cbiAgICBzaWRlYmFyLl9wc1VwZGF0ZSgpO1xuICB9IC8vIFBlcmZlY3RTY3JvbGxiYXJcbiAgO1xuXG4gIF9wcm90by5fcHNJbml0ID0gZnVuY3Rpb24gX3BzSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX05BVklHQVRJT05fQ09OVEFJTkVSKSAmJiAhdGhpcy5faXNJT1MoKSkge1xuICAgICAgdGhpcy5fcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTkFWSUdBVElPTl9DT05UQUlORVIpLCB7XG4gICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3BzVXBkYXRlID0gZnVuY3Rpb24gX3BzVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wcykge1xuICAgICAgdGhpcy5fcHMudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fcHNEZXN0cm95ID0gZnVuY3Rpb24gX3BzRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcHMpIHtcbiAgICAgIHRoaXMuX3BzLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5fcHMgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2dldFBhcmVudHMgPSBmdW5jdGlvbiBfZ2V0UGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIFNldHVwIHBhcmVudHMgYXJyYXlcbiAgICB2YXIgcGFyZW50cyA9IFtdOyAvLyBHZXQgbWF0Y2hpbmcgcGFyZW50IGVsZW1lbnRzXG5cbiAgICBmb3IgKDsgZWxlbWVudCAmJiBlbGVtZW50ICE9PSBkb2N1bWVudDsgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgLy8gQWRkIG1hdGNoaW5nIHBhcmVudHMgdG8gYXJyYXlcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHBhcmVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzO1xuICB9O1xuXG4gIF9wcm90by5fc2V0QWN0aXZlTGluayA9IGZ1bmN0aW9uIF9zZXRBY3RpdmVMaW5rKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXNwcmVhZFxuICAgIEFycmF5LmZyb20odGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX05BVl9MSU5LJDEpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgY3VycmVudFVybDtcbiAgICAgIHZhciB1cmxIYXNQYXJhbXMgPSAvXFxcXD8uKj0vO1xuICAgICAgdmFyIHVybEhhc1F1ZXJ5U3RyaW5nID0gL1xcXFw/Li87XG4gICAgICB2YXIgdXJsSGFzSGFzaCA9IC8jLi87XG5cbiAgICAgIGlmICh1cmxIYXNQYXJhbXMudGVzdChTdHJpbmcod2luZG93LmxvY2F0aW9uKSkgfHwgdXJsSGFzUXVlcnlTdHJpbmcudGVzdChTdHJpbmcod2luZG93LmxvY2F0aW9uKSkpIHtcbiAgICAgICAgY3VycmVudFVybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pLnNwbGl0KCc/JylbMF07XG4gICAgICB9IGVsc2UgaWYgKHVybEhhc0hhc2gudGVzdChTdHJpbmcod2luZG93LmxvY2F0aW9uKSkpIHtcbiAgICAgICAgY3VycmVudFVybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pLnNwbGl0KCcjJylbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VXJsLnNsaWNlKC0xKSA9PT0gJyMnKSB7XG4gICAgICAgIGN1cnJlbnRVcmwgPSBjdXJyZW50VXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGFBdHRyaWJ1dGVzID0gZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVklHQVRJT05fQ09OVEFJTkVSKS5kYXRhc2V0O1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGFBdHRyaWJ1dGVzLmFjdGl2ZUxpbmtzRXhhY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIERlZmF1bHQkOS5hY3RpdmVMaW5rc0V4YWN0ID0gSlNPTi5wYXJzZShkYXRhQXR0cmlidXRlcy5hY3RpdmVMaW5rc0V4YWN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKERlZmF1bHQkOS5hY3RpdmVMaW5rc0V4YWN0ICYmIGVsZW1lbnQuaHJlZiA9PT0gY3VycmVudFVybCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkNCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcblxuICAgICAgICBBcnJheS5mcm9tKF90aGlzNC5fZ2V0UGFyZW50cyhlbGVtZW50LCBTRUxFQ1RPUl9OQVZfRFJPUERPV04kMSkpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFEZWZhdWx0JDkuYWN0aXZlTGlua3NFeGFjdCAmJiBlbGVtZW50LmhyZWYuc3RhcnRzV2l0aChjdXJyZW50VXJsKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUkNCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcblxuICAgICAgICBBcnJheS5mcm9tKF90aGlzNC5fZ2V0UGFyZW50cyhlbGVtZW50LCBTRUxFQ1RPUl9OQVZfRFJPUERPV04kMSkpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX21vYmlsZSAmJiB0aGlzLl9vcGVuKSB7XG4gICAgICB0aGlzLl9hZGRDbGlja091dExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX292ZXJsYWlkICYmIHRoaXMuX29wZW4pIHtcbiAgICAgIHRoaXMuX2FkZENsaWNrT3V0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xBU1NfVE9HR0xFJDEsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRldGFpbC5jbGFzc05hbWUgPT09IENMQVNTX05BTUVfU0lERUJBUl9NSU5JTUlaRUQpIHtcbiAgICAgICAgaWYgKF90aGlzNS5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICBfdGhpczUubWluaW1pemUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuZGV0YWlsLmNsYXNzTmFtZSA9PT0gQ0xBU1NfTkFNRV9TSURFQkFSX1VORk9MREFCTEUpIHtcbiAgICAgICAgaWYgKF90aGlzNS5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSURFQkFSX1VORk9MREFCTEUpKSB7XG4gICAgICAgICAgX3RoaXM1LnVuZm9sZGFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5rZXlzKERlZmF1bHQkOS5icmVha3BvaW50cykuZmluZChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0JDkuYnJlYWtwb2ludHNba2V5XSA9PT0gZXZlbnQuZGV0YWlsLmNsYXNzTmFtZTtcbiAgICAgIH0pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gZXZlbnQuZGV0YWlsLmNsYXNzTmFtZTtcbiAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBPYmplY3Qua2V5cyhEZWZhdWx0JDkuYnJlYWtwb2ludHMpLmZpbmQoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBEZWZhdWx0JDkuYnJlYWtwb2ludHNba2V5XSA9PT0gY2xhc3NOYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmFkZCkge1xuICAgICAgICAgIF90aGlzNS5vcGVuKGJyZWFrcG9pbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNS5jbG9zZShicmVha3BvaW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ4LCBTRUxFQ1RPUl9OQVZfRFJPUERPV05fVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzNS5fdG9nZ2xlRHJvcGRvd24oZXZlbnQsIF90aGlzNSk7XG4gICAgfSk7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJJDgsIFNFTEVDVE9SX05BVl9MSU5LJDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczUuX2lzTW9iaWxlKCkpIHtcbiAgICAgICAgX3RoaXM1LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gU3RhdGljXG4gIDtcblxuICBTaWRlYmFyLl9zaWRlYmFySW50ZXJmYWNlID0gZnVuY3Rpb24gX3NpZGViYXJJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdmFyIGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkkYik7XG5cbiAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBTaWRlYmFyKGVsZW1lbnQsIF9jb25maWcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICB9XG4gIH07XG5cbiAgU2lkZWJhci5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBTaWRlYmFyLl9zaWRlYmFySW50ZXJmYWNlKHRoaXMsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2lkZWJhci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJGIpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaWRlYmFyLCBudWxsLCBbe1xuICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTiRiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCQ5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlJDg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNpZGViYXI7XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSQyLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1NJREVCQVIpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgU2lkZWJhci5fc2lkZWJhckludGVyZmFjZShlbGVtZW50KTtcbiAgfSk7XG59KTtcbnZhciAkJGMgPSBnZXRqUXVlcnkoKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmlmICgkJGMpIHtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCRiID0gJCRjLmZuW05BTUUkYl07XG4gICQkYy5mbltOQU1FJGJdID0gU2lkZWJhci5qUXVlcnlJbnRlcmZhY2U7XG4gICQkYy5mbltOQU1FJGJdLkNvbnN0cnVjdG9yID0gU2lkZWJhcjtcblxuICAkJGMuZm5bTkFNRSRiXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkYy5mbltOQU1FJGJdID0gSlFVRVJZX05PX0NPTkZMSUNUJGI7XG4gICAgcmV0dXJuIFNpZGViYXIualF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTkFNRSRjID0gJ3RhYic7XG52YXIgVkVSU0lPTiRjID0gJzMuMi4yJztcbnZhciBEQVRBX0tFWSRjID0gJ2NvcmV1aS50YWInO1xudmFyIEVWRU5UX0tFWSRjID0gXCIuXCIgKyBEQVRBX0tFWSRjO1xudmFyIERBVEFfQVBJX0tFWSRhID0gJy5kYXRhLWFwaSc7XG52YXIgRVZFTlRfSElERSQzID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkYztcbnZhciBFVkVOVF9ISURERU4kMyA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkYztcbnZhciBFVkVOVF9TSE9XJDMgPSBcInNob3dcIiArIEVWRU5UX0tFWSRjO1xudmFyIEVWRU5UX1NIT1dOJDMgPSBcInNob3duXCIgKyBFVkVOVF9LRVkkYztcbnZhciBFVkVOVF9DTElDS19EQVRBX0FQSSQ5ID0gXCJjbGlja1wiICsgRVZFTlRfS0VZJGMgKyBEQVRBX0FQSV9LRVkkYTtcbnZhciBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSc7XG52YXIgQ0xBU1NfTkFNRV9BQ1RJVkUkNSA9ICdhY3RpdmUnO1xudmFyIENMQVNTX05BTUVfRElTQUJMRUQkMiA9ICdkaXNhYmxlZCc7XG52YXIgQ0xBU1NfTkFNRV9GQURFJDQgPSAnZmFkZSc7XG52YXIgQ0xBU1NfTkFNRV9TSE9XJDcgPSAnc2hvdyc7XG52YXIgU0VMRUNUT1JfRFJPUERPV04kMSA9ICcuZHJvcGRvd24nO1xudmFyIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQJDEgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnO1xudmFyIFNFTEVDVE9SX0FDVElWRSQyID0gJy5hY3RpdmUnO1xudmFyIFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnO1xudmFyIFNFTEVDVE9SX0RBVEFfVE9HR0xFJDQgPSAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJztcbnZhciBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSA9ICcuZHJvcGRvd24tdG9nZ2xlJztcbnZhciBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnOnNjb3BlID4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSc7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIFRhYiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRhYihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgRGF0YS5zZXREYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZJGMsIHRoaXMpO1xuICB9IC8vIEdldHRlcnNcblxuXG4gIHZhciBfcHJvdG8gPSBUYWIucHJvdG90eXBlO1xuXG4gIC8vIFB1YmxpY1xuICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiYgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSQ1KSB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RJU0FCTEVEJDIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzO1xuICAgIHZhciB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgdmFyIGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQJDEpO1xuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICB2YXIgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkUkMjtcbiAgICAgIHByZXZpb3VzID0gU2VsZWN0b3JFbmdpbmUuZmluZChpdGVtU2VsZWN0b3IsIGxpc3RFbGVtZW50KTtcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgdmFyIGhpZGVFdmVudCA9IG51bGw7XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURFJDMsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1ckMywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KTtcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBoaWRlRXZlbnQgIT09IG51bGwgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudCk7XG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURERU4kMywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBfdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kMywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSRjKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2FjdGl2YXRlID0gZnVuY3Rpb24gX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgPyBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCwgY29udGFpbmVyKSA6IFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKGNvbnRhaW5lciwgU0VMRUNUT1JfQUNUSVZFJDIpO1xuICAgIHZhciBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXTtcbiAgICB2YXIgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgYWN0aXZlICYmIGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFJDQpO1xuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKTtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ3KTtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUoYWN0aXZlLCBUUkFOU0lUSU9OX0VORCwgY29tcGxldGUpO1xuICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoYWN0aXZlLCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3RyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFJDUpO1xuICAgICAgdmFyIGRyb3Bkb3duQ2hpbGQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCwgYWN0aXZlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUkNSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFJDUpO1xuXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIHJlZmxvdyhlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUkNCkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1ckNyk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04kMSk7XG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUkMSkuZm9yRWFjaChmdW5jdGlvbiAoZHJvcGRvd24pIHtcbiAgICAgICAgICByZXR1cm4gZHJvcGRvd24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSQ1KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIFRhYi5qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IERhdGEuZ2V0RGF0YSh0aGlzLCBEQVRBX0tFWSRjKSB8fCBuZXcgVGFiKHRoaXMpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIG1ldGhvZCBuYW1lZCBcXFwiXCIgKyBjb25maWcgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBUYWIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSRjKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoVGFiLCBudWxsLCBbe1xuICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTiRjO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYWI7XG59KCk7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSQ5LCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSQ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIGRhdGEgPSBEYXRhLmdldERhdGEodGhpcywgREFUQV9LRVkkYykgfHwgbmV3IFRhYih0aGlzKTtcbiAgZGF0YS5zaG93KCk7XG59KTtcbnZhciAkJGQgPSBnZXRqUXVlcnkoKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC50YWIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuaWYgKCQkZCkge1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUJGMgPSAkJGQuZm5bTkFNRSRjXTtcbiAgJCRkLmZuW05BTUUkY10gPSBUYWIualF1ZXJ5SW50ZXJmYWNlO1xuICAkJGQuZm5bTkFNRSRjXS5Db25zdHJ1Y3RvciA9IFRhYjtcblxuICAkJGQuZm5bTkFNRSRjXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkZC5mbltOQU1FJGNdID0gSlFVRVJZX05PX0NPTkZMSUNUJGM7XG4gICAgcmV0dXJuIFRhYi5qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBOQU1FJGQgPSAndG9hc3QnO1xudmFyIFZFUlNJT04kZCA9ICczLjIuMic7XG52YXIgREFUQV9LRVkkZCA9ICdjb3JldWkudG9hc3QnO1xudmFyIEVWRU5UX0tFWSRkID0gXCIuXCIgKyBEQVRBX0tFWSRkO1xudmFyIEVWRU5UX0NMSUNLX0RJU01JU1MkMSA9IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZJGQ7XG52YXIgRVZFTlRfSElERSQ0ID0gXCJoaWRlXCIgKyBFVkVOVF9LRVkkZDtcbnZhciBFVkVOVF9ISURERU4kNCA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVkkZDtcbnZhciBFVkVOVF9TSE9XJDQgPSBcInNob3dcIiArIEVWRU5UX0tFWSRkO1xudmFyIEVWRU5UX1NIT1dOJDQgPSBcInNob3duXCIgKyBFVkVOVF9LRVkkZDtcbnZhciBDTEFTU19OQU1FX0ZBREUkNSA9ICdmYWRlJztcbnZhciBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSc7XG52YXIgQ0xBU1NfTkFNRV9TSE9XJDggPSAnc2hvdyc7XG52YXIgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnO1xudmFyIERlZmF1bHRUeXBlJDkgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn07XG52YXIgRGVmYXVsdCRhID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufTtcbnZhciBTRUxFQ1RPUl9EQVRBX0RJU01JU1MkMSA9ICdbZGF0YS1kaXNtaXNzPVwidG9hc3RcIl0nO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBUb2FzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRvYXN0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG5cbiAgICBEYXRhLnNldERhdGEoZWxlbWVudCwgREFUQV9LRVkkZCwgdGhpcyk7XG4gIH0gLy8gR2V0dGVyc1xuXG5cbiAgdmFyIF9wcm90byA9IFRvYXN0LnByb3RvdHlwZTtcblxuICAvLyBQdWJsaWNcbiAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVyQ0KTtcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUkNSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORyk7XG5cbiAgICAgIF90aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XJDgpO1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04kNCk7XG5cbiAgICAgIGlmIChfdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIF90aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICB9LCBfdGhpcy5fY29uZmlnLmRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSk7XG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudCk7XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSk7XG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVyQ4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFJDQpO1xuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBfdGhpczIuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpO1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihfdGhpczIuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiQ0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVyQ4KTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIFRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSk7XG4gICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XJDgpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XJDgpO1xuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUyQxKTtcbiAgICBEYXRhLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkkZCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fY29uZmlnID0gbnVsbDtcbiAgfSAvLyBQcml2YXRlXG4gIDtcblxuICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIERlZmF1bHQkYSksIE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpKSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FJGQsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfTtcblxuICBfcHJvdG8uX3NldExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUyQxLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MkMSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMy5oaWRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgfSAvLyBTdGF0aWNcbiAgO1xuXG4gIFRvYXN0LmpRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZJGQpO1xuXG4gICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBUb2FzdC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZJGQpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhUb2FzdCwgbnVsbCwgW3tcbiAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFZFUlNJT04kZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZSQ5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb2FzdDtcbn0oKTtcblxudmFyICQkZSA9IGdldGpRdWVyeSgpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgYWRkIC50b2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXG5pZiAoJCRlKSB7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QkZCA9ICQkZS5mbltOQU1FJGRdO1xuICAkJGUuZm5bTkFNRSRkXSA9IFRvYXN0LmpRdWVyeUludGVyZmFjZTtcbiAgJCRlLmZuW05BTUUkZF0uQ29uc3RydWN0b3IgPSBUb2FzdDtcblxuICAkJGUuZm5bTkFNRSRkXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQkZS5mbltOQU1FJGRdID0gSlFVRVJZX05PX0NPTkZMSUNUJGQ7XG4gICAgcmV0dXJuIFRvYXN0LmpRdWVyeUludGVyZmFjZTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgQWxlcnQsIEFzeW5jTG9hZCwgQnV0dG9uLCBDYXJvdXNlbCwgQ2xhc3NUb2dnbGVyLCBDb2xsYXBzZSwgRHJvcGRvd24sIE1vZGFsLCBQb3BvdmVyLCBTY3JvbGxTcHkgYXMgU2Nyb2xsc3B5LCBTaWRlYmFyLCBUYWIsIFRvYXN0LCBUb29sdGlwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JldWkuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TKSwgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIHN0YXRlLm9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBNYXRoLm1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBNYXRoLm1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IE1hdGgubWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gTWF0aC5tYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgdmFyIHdpZHRoID0gTWF0aC5tYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcblxuICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcblxuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLndpbGxDaGFuZ2UgJiYgY3NzLndpbGxDaGFuZ2UgIT09ICdhdXRvJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gJEZsb3dGaXhNZTogdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWU6IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG4gICAgZWxlbWVudC5ob3N0IHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCIvKjo6IGltcG9ydCB0eXBlIHsgV2luZG93IH0gZnJvbSAnLi4vdHlwZXMnOyAqL1xuXG4vKjo6IGRlY2xhcmUgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGU6IE5vZGUgfCBXaW5kb3cpOiBXaW5kb3c7ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuLyo6OiBkZWNsYXJlIGZ1bmN0aW9uIGlzRWxlbWVudChub2RlOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyhub2RlIGluc3RhbmNlb2ZcbiAgRWxlbWVudCk7ICovXG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cbi8qOjogZGVjbGFyZSBmdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGU6IG1peGVkKTogYm9vbGVhbiAlY2hlY2tzKG5vZGUgaW5zdGFuY2VvZlxuICBIVE1MRWxlbWVudCk7ICovXG5cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuLyo6OiBkZWNsYXJlIGZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyhub2RlIGluc3RhbmNlb2ZcbiAgU2hhZG93Um9vdCk7ICovXG5cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGUgXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IGdldE5vZGVOYW1lKHNjcm9sbFBhcmVudCkgPT09ICdib2R5JztcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgICAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZSArIFwiI3BlcnNpc3RlbnRcIl0ucGFkZGluZztcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQsXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWUgKyBcIiNwZXJzaXN0ZW50XCJdID0ge1xuICAgIHBhZGRpbmc6IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSlcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLnJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogTWF0aC5yb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmU7XG5cbiAgdmFyIF9yb3VuZE9mZnNldHMgPSByb3VuZE9mZnNldHMob2Zmc2V0cyksXG4gICAgICB4ID0gX3JvdW5kT2Zmc2V0cy54LFxuICAgICAgeSA9IF9yb3VuZE9mZnNldHMueTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG4gICAgfSAvLyAkRmxvd0ZpeE1lOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG4gICAgLyo6OiBvZmZzZXRQYXJlbnQgPSAob2Zmc2V0UGFyZW50OiBFbGVtZW50KTsgKi9cblxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcyksIHt9LCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzKSwge30sIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWYzKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYzLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyKSwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMpLCB7fSwge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmVcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93KSwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMpLCB7fSwge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciksIHt9LCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyKSwge30sIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5U3R5bGVzIH0gZnJvbSBcIi4vYXBwbHlTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyb3cgfSBmcm9tIFwiLi9hcnJvdy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wdXRlU3R5bGVzIH0gZnJvbSBcIi4vY29tcHV0ZVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsaXAgfSBmcm9tIFwiLi9mbGlwLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhpZGUgfSBmcm9tIFwiLi9oaWRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9mZnNldCB9IGZyb20gXCIuL29mZnNldC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3BwZXJPZmZzZXRzIH0gZnJvbSBcIi4vcG9wcGVyT2Zmc2V0cy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50T3ZlcmZsb3cgfSBmcm9tIFwiLi9wcmV2ZW50T3ZlcmZsb3cuanNcIjsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlY3RzKSwge30sIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cyksIHt9LCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBNYXRoLm1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gTWF0aC5tYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4oX21pbiwgX29mZnNldCwgX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcblxuLyo6OiB0eXBlIE92ZXJmbG93c01hcCA9IHsgW0NvbXB1dGVkUGxhY2VtZW50XTogbnVtYmVyIH07ICovXG5cbi8qOzsgdHlwZSBPdmVyZmxvd3NNYXAgPSB7IFtrZXkgaW4gQ29tcHV0ZWRQbGFjZW1lbnRdOiBudW1iZXIgfTsgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50czsgLy8gJEZsb3dGaXhNZVxuXG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWU6IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IE1hdGguZmxvb3Iob2Zmc2V0c1ttYWluQXhpc10pIC0gTWF0aC5mbG9vcihyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IE1hdGguZmxvb3Iob2Zmc2V0c1ttYWluQXhpc10pICsgTWF0aC5jZWlsKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0KSwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcpLCBjdXJyZW50KSwge30sIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucyksIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEpLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpKSwgcGFkZGluZ09iamVjdCk7XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZWN0KSwge30sIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9mb3JtYXQuanNcIjtcbmltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbn0iLCIvKiFcbiAqIHBlcmZlY3Qtc2Nyb2xsYmFyIHYxLjUuMFxuICogQ29weXJpZ2h0IDIwMjAgSHl1bmplIEp1biwgTURCb290c3RyYXAgYW5kIENvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKi9cblxuZnVuY3Rpb24gZ2V0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldChlbGVtZW50LCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IHZhbCArIFwicHhcIjtcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkaXYoY2xhc3NOYW1lKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIGRpdjtcbn1cblxudmFyIGVsTWF0Y2hlcyA9XG4gIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBxdWVyeSkge1xuICBpZiAoIWVsTWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBtYXRjaGluZyBtZXRob2Qgc3VwcG9ydGVkJyk7XG4gIH1cblxuICByZXR1cm4gZWxNYXRjaGVzLmNhbGwoZWxlbWVudCwgcXVlcnkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5yZW1vdmUpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlDaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpOyB9XG4gICk7XG59XG5cbnZhciBjbHMgPSB7XG4gIG1haW46ICdwcycsXG4gIHJ0bDogJ3BzX19ydGwnLFxuICBlbGVtZW50OiB7XG4gICAgdGh1bWI6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fdGh1bWItXCIgKyB4KTsgfSxcbiAgICByYWlsOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3JhaWwtXCIgKyB4KTsgfSxcbiAgICBjb25zdW1pbmc6ICdwc19fY2hpbGQtLWNvbnN1bWUnLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGZvY3VzOiAncHMtLWZvY3VzJyxcbiAgICBjbGlja2luZzogJ3BzLS1jbGlja2luZycsXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLWFjdGl2ZS1cIiArIHgpOyB9LFxuICAgIHNjcm9sbGluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1zY3JvbGxpbmctXCIgKyB4KTsgfSxcbiAgfSxcbn07XG5cbi8qXG4gKiBIZWxwZXIgbWV0aG9kc1xuICovXG52YXIgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbmZ1bmN0aW9uIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgdmFyIGNsYXNzTGlzdCA9IGkuZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBjbGFzc05hbWUgPSBjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpO1xuXG4gIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIGNsZWFyVGltZW91dChzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSA9IHNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaS5pc0FsaXZlICYmIGkuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5zY3JvbGxpbmcoeCkpOyB9LFxuICAgIGkuc2V0dGluZ3Muc2Nyb2xsaW5nVGhyZXNob2xkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHgpIHtcbiAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG4gIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpO1xufVxuXG52YXIgRXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gRXZlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNFbXB0eTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGV2ZW50TmFtZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0YXJnZXQgJiYgaGFuZGxlciAhPT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcyQxLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMuaGFuZGxlcnMpIHtcbiAgICB0aGlzLnVuYmluZChuYW1lKTtcbiAgfVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzRW1wdHkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5ldmVyeShcbiAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzJDEuaGFuZGxlcnNba2V5XS5sZW5ndGggPT09IDA7IH1cbiAgKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBFdmVudEVsZW1lbnQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIGV2ZW50RWxlbWVudCAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZWUuZWxlbWVudCA9PT0gZWxlbWVudDsgfSlbMF07XG4gIGlmICghZWUpIHtcbiAgICBlZSA9IG5ldyBFdmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xuICB9XG4gIHJldHVybiBlZTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICBlZS51bmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICBpZiAoZWUuaXNFbXB0eSkge1xuICAgIC8vIHJlbW92ZVxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5zcGxpY2UodGhpcy5ldmVudEVsZW1lbnRzLmluZGV4T2YoZWUpLCAxKTtcbiAgfVxufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS51bmJpbmRBbGwoKTsgfSk7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZXZ0KTtcbiAgfTtcbiAgZWUuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY3JvbGxEaWZmKFxuICBpLFxuICBheGlzLFxuICBkaWZmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGZpZWxkcztcbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICd5JyxcbiAgICAgICd1cCcsXG4gICAgICAnZG93bicgXTtcbiAgfSBlbHNlIGlmIChheGlzID09PSAnbGVmdCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudFdpZHRoJyxcbiAgICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAneCcsXG4gICAgICAnbGVmdCcsXG4gICAgICAncmlnaHQnIF07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHByb3BlciBheGlzIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYkMShpLCBkaWZmLCBmaWVsZHMsIHVzZVNjcm9sbGluZ0NsYXNzLCBmb3JjZUZpcmVSZWFjaEV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1Njcm9sbERpZmYkMShcbiAgaSxcbiAgZGlmZixcbiAgcmVmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzJdO1xuICB2YXIgeSA9IHJlZlszXTtcbiAgdmFyIHVwID0gcmVmWzRdO1xuICB2YXIgZG93biA9IHJlZls1XTtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICAvLyByZXNldCByZWFjaFxuICBpLnJlYWNoW3ldID0gbnVsbDtcblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdIDwgMSkge1xuICAgIGkucmVhY2hbeV0gPSAnc3RhcnQnO1xuICB9XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA+IGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0gLSAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdlbmQnO1xuICB9XG5cbiAgaWYgKGRpZmYpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgeSkpKTtcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHVwKSkpO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyBkb3duKSkpO1xuICAgIH1cblxuICAgIGlmICh1c2VTY3JvbGxpbmdDbGFzcykge1xuICAgICAgc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGkucmVhY2hbeV0gJiYgKGRpZmYgfHwgZm9yY2VGaXJlUmVhY2hFdmVudCkpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtXCIgKyB5ICsgXCItcmVhY2gtXCIgKyAoaS5yZWFjaFt5XSkpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoeCkge1xuICByZXR1cm4gcGFyc2VJbnQoeCwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzRWRpdGFibGUoZWwpIHtcbiAgcmV0dXJuIChcbiAgICBtYXRjaGVzKGVsLCAnaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICd0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ2J1dHRvbixbY29udGVudGVkaXRhYmxlXScpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoZWxlbWVudCkge1xuICB2YXIgc3R5bGVzID0gZ2V0KGVsZW1lbnQpO1xuICByZXR1cm4gKFxuICAgIHRvSW50KHN0eWxlcy53aWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nTGVmdCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nUmlnaHQpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlclJpZ2h0V2lkdGgpXG4gICk7XG59XG5cbnZhciBlbnYgPSB7XG4gIGlzV2ViS2l0OlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICBzdXBwb3J0c1RvdWNoOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKCdtYXhUb3VjaFBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvciAmJlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSksXG4gIHN1cHBvcnRzSWVQb2ludGVyOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFxuICBpc0Nocm9tZTpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSxcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUdlb21ldHJ5KGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBpLmNvbnRhaW5lcldpZHRoID0gTWF0aC5jZWlsKHJlY3Qud2lkdGgpO1xuICBpLmNvbnRhaW5lckhlaWdodCA9IE1hdGguY2VpbChyZWN0LmhlaWdodCk7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhclhSYWlsKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd5JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJlxuICAgIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aFxuICApIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XG4gICAgaS5yYWlsWFJhdGlvID0gaS5jb250YWluZXJXaWR0aCAvIGkucmFpbFhXaWR0aDtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludCgoaS5yYWlsWFdpZHRoICogaS5jb250YWluZXJXaWR0aCkgLyBpLmNvbnRlbnRXaWR0aClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSB0b0ludChcbiAgICAgICgoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICpcbiAgICAgICAgKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSkgL1xuICAgICAgICAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmXG4gICAgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHRcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xuICAgIGkucmFpbFlSYXRpbyA9IGkuY29udGFpbmVySGVpZ2h0IC8gaS5yYWlsWUhlaWdodDtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoKGkucmFpbFlIZWlnaHQgKiBpLmNvbnRhaW5lckhlaWdodCkgLyBpLmNvbnRlbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSB0b0ludChcbiAgICAgIChyb3VuZGVkU2Nyb2xsVG9wICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpKSAvXG4gICAgICAgIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGg7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZUNzcyhlbGVtZW50LCBpKTtcblxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGkuaXNSdGwgPT09IHRydWUgPyBpLmNvbnRlbnRXaWR0aCA6IDA7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xuICBpZiAoaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICBpZiAoaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gdGh1bWJTaXplO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWxlbWVudCwgaSkge1xuICB2YXIgeFJhaWxPZmZzZXQgPSB7IHdpZHRoOiBpLnJhaWxYV2lkdGggfTtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgIGkuY29udGFpbmVyV2lkdGggLVxuICAgICAgaS5jb250ZW50V2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuICBpZiAoaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSkge1xuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgcm91bmRlZFNjcm9sbFRvcDtcbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHsgdG9wOiByb3VuZGVkU2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHQgfTtcbiAgaWYgKGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCkge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9XG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWVJpZ2h0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aCAtXG4gICAgICAgIDk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgICBpLmNvbnRhaW5lcldpZHRoICogMiAtXG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZTGVmdCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xuXG4gIHNldChpLnNjcm9sbGJhclgsIHtcbiAgICBsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LFxuICAgIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aCxcbiAgfSk7XG4gIHNldChpLnNjcm9sbGJhclksIHtcbiAgICB0b3A6IGkuc2Nyb2xsYmFyWVRvcCxcbiAgICBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrUmFpbChpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhcllSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25Ub3AgPVxuICAgICAgZS5wYWdlWSAtXG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJZUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uVG9wID4gaS5zY3JvbGxiYXJZVG9wID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbFRvcCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lckhlaWdodDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25MZWZ0ID1cbiAgICAgIGUucGFnZVggLVxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25MZWZ0ID4gaS5zY3JvbGxiYXJYTGVmdCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVyV2lkdGg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1RodW1iKGkpIHtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAnY29udGVudFdpZHRoJyxcbiAgICAncGFnZVgnLFxuICAgICdyYWlsWFdpZHRoJyxcbiAgICAnc2Nyb2xsYmFyWCcsXG4gICAgJ3Njcm9sbGJhclhXaWR0aCcsXG4gICAgJ3Njcm9sbExlZnQnLFxuICAgICd4JyxcbiAgICAnc2Nyb2xsYmFyWFJhaWwnIF0pO1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAnY29udGVudEhlaWdodCcsXG4gICAgJ3BhZ2VZJyxcbiAgICAncmFpbFlIZWlnaHQnLFxuICAgICdzY3JvbGxiYXJZJyxcbiAgICAnc2Nyb2xsYmFyWUhlaWdodCcsXG4gICAgJ3Njcm9sbFRvcCcsXG4gICAgJ3knLFxuICAgICdzY3JvbGxiYXJZUmFpbCcgXSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoXG4gIGksXG4gIHJlZlxuKSB7XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgcGFnZVkgPSByZWZbMl07XG4gIHZhciByYWlsWUhlaWdodCA9IHJlZlszXTtcbiAgdmFyIHNjcm9sbGJhclkgPSByZWZbNF07XG4gIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gcmVmWzVdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzZdO1xuICB2YXIgeSA9IHJlZls3XTtcbiAgdmFyIHNjcm9sbGJhcllSYWlsID0gcmVmWzhdO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBzdGFydGluZ1Njcm9sbFRvcCA9IG51bGw7XG4gIHZhciBzdGFydGluZ01vdXNlUGFnZVkgPSBudWxsO1xuICB2YXIgc2Nyb2xsQnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdKSB7XG4gICAgICBlW3BhZ2VZXSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICB9XG4gICAgZWxlbWVudFtzY3JvbGxUb3BdID1cbiAgICAgIHN0YXJ0aW5nU2Nyb2xsVG9wICsgc2Nyb2xsQnkgKiAoZVtwYWdlWV0gLSBzdGFydGluZ01vdXNlUGFnZVkpO1xuICAgIGFkZFNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5jbGlja2luZyk7XG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kTW92ZXMoZSwgdG91Y2hNb2RlKSB7XG4gICAgc3RhcnRpbmdTY3JvbGxUb3AgPSBlbGVtZW50W3Njcm9sbFRvcF07XG4gICAgaWYgKHRvdWNoTW9kZSAmJiBlLnRvdWNoZXMpIHtcbiAgICAgIGVbcGFnZVldID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIH1cbiAgICBzdGFydGluZ01vdXNlUGFnZVkgPSBlW3BhZ2VZXTtcbiAgICBzY3JvbGxCeSA9XG4gICAgICAoaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSkgL1xuICAgICAgKGlbcmFpbFlIZWlnaHRdIC0gaVtzY3JvbGxiYXJZSGVpZ2h0XSk7XG4gICAgaWYgKCF0b3VjaE1vZGUpIHtcbiAgICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuY2xpY2tpbmcpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpW3Njcm9sbGJhclldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBiaW5kTW92ZXMoZSk7XG4gIH0pO1xuICBpLmV2ZW50LmJpbmQoaVtzY3JvbGxiYXJZXSwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGJpbmRNb3ZlcyhlLCB0cnVlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGtleWJvYXJkKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnRIb3ZlcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCAnOmhvdmVyJyk7IH07XG4gIHZhciBzY3JvbGxiYXJGb2N1c2VkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fCBtYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpOyB9O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGlmIChkZWx0YVggPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fFxuICAgICAgICAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8XG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnRIb3ZlcmVkKCkgJiYgIXNjcm9sbGJhckZvY3VzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gMDtcbiAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzY6IC8vIGhvbWVcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgZGVsdGFYICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3aGVlbChpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgaXNCb3R0b20gPVxuICAgICAgcm91bmRlZFNjcm9sbFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgaXNMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwO1xuICAgIHZhciBpc1JpZ2h0ID1cbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICB2YXIgaGl0c0JvdW5kO1xuXG4gICAgLy8gcGljayBheGlzIHdpdGggcHJpbWFyeSBkaXJlY3Rpb25cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzVG9wIHx8IGlzQm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRzQm91bmQgPSBpc0xlZnQgfHwgaXNSaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0c0JvdW5kID8gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbiA6IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xuXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBPUyBYIFNhZmFyaVxuICAgICAgZGVsdGFYID0gKC0xICogZS53aGVlbERlbHRhWCkgLyA2O1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xuICAgICAgZGVsdGFYICo9IDEwO1xuICAgICAgZGVsdGFZICo9IDEwO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWSAvKiBOYU4gY2hlY2tzICovKSB7XG4gICAgICAvLyBJRSBpbiBzb21lIG1vdXNlIGRyaXZlcnNcbiAgICAgIGRlbHRhWCA9IDA7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIC8vIHJldmVyc2UgYXhpcyB3aXRoIHNoaWZ0IGtleVxuICAgICAgcmV0dXJuIFstZGVsdGFZLCAtZGVsdGFYXTtcbiAgICB9XG4gICAgcmV0dXJuIFtkZWx0YVgsIGRlbHRhWV07XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgLy8gRklYTUU6IHRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciA8c2VsZWN0PiBpc3N1ZSBpbiBGRiBhbmQgSUUgIzU3MVxuICAgIGlmICghZW52LmlzV2ViS2l0ICYmIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0OmZvY3VzJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcblxuICAgICAgLy8gaWYgZGVsdGFZICYmIHZlcnRpY2FsIHNjcm9sbGFibGVcbiAgICAgIGlmIChkZWx0YVkgJiYgc3R5bGUub3ZlcmZsb3dZLm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsVG9wID4gMCAmJiBkZWx0YVkgPCAwKSB8fFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxUb3AgPCBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgZGVsdGFYICYmIGhvcml6b250YWwgc2Nyb2xsYWJsZVxuICAgICAgaWYgKGRlbHRhWCAmJiBzdHlsZS5vdmVyZmxvd1gubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxXaWR0aCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxMZWZ0ID4gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAgICAgKGN1cnNvci5zY3JvbGxMZWZ0IDwgbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgcmVmID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XG4gICAgdmFyIGRlbHRhWCA9IHJlZlswXTtcbiAgICB2YXIgZGVsdGFZID0gcmVmWzFdO1xuXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcbiAgICAgIGlmIChkZWx0YVkpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxuICAgICAgaWYgKGRlbHRhWCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50ICYmICFlLmN0cmxLZXkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b3VjaChpKSB7XG4gIGlmICghZW52LnN1cHBvcnRzVG91Y2ggJiYgIWVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBtYWduaXR1ZGVZID0gTWF0aC5hYnMoZGVsdGFZKTtcblxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSB1cC9kb3duIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWSA8IDAgJiYgc2Nyb2xsVG9wID09PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgfHxcbiAgICAgICAgKGRlbHRhWSA+IDAgJiYgc2Nyb2xsVG9wID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHNldCBwcmV2ZW50IGZvciBtb2JpbGUgQ2hyb21lIHJlZnJlc2hcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID09PSAwICYmIGRlbHRhWSA+IDAgJiYgZW52LmlzQ2hyb21lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFYIDwgMCAmJiBzY3JvbGxMZWZ0ID09PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHx8XG4gICAgICAgIChkZWx0YVggPiAwICYmIHNjcm9sbExlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkaWZmZXJlbmNlWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGlmZmVyZW5jZVg7XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcbiAgfVxuXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xuICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgdmFyIHNwZWVkID0ge307XG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcblxuICBmdW5jdGlvbiBnZXRUb3VjaChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAmJiBlLnBvaW50ZXJUeXBlID09PSAncGVuJyAmJiBlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS5wb2ludGVyVHlwZSAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJyAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICBzdGFydE9mZnNldC5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XG5cbiAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG5cbiAgICAgIC8vIGlmIGRlbHRhWSAmJiB2ZXJ0aWNhbCBzY3JvbGxhYmxlXG4gICAgICBpZiAoZGVsdGFZICYmIHN0eWxlLm92ZXJmbG93WS5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3Vyc29yLnNjcm9sbFRvcCA+IDAgJiYgZGVsdGFZIDwgMCkgfHxcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsVG9wIDwgbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIGRlbHRhWCAmJiBob3Jpem9udGFsIHNjcm9sbGFibGVcbiAgICAgIGlmIChkZWx0YVggJiYgc3R5bGUub3ZlcmZsb3dYLm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsV2lkdGggLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsTGVmdCA+IDAgJiYgZGVsdGFYIDwgMCkgfHxcbiAgICAgICAgICAgIChjdXJzb3Iuc2Nyb2xsTGVmdCA8IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xuICAgIGlmIChzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHsgcGFnZVg6IHRvdWNoLnBhZ2VYLCBwYWdlWTogdG91Y2gucGFnZVkgfTtcblxuICAgICAgdmFyIGRpZmZlcmVuY2VYID0gY3VycmVudE9mZnNldC5wYWdlWCAtIHN0YXJ0T2Zmc2V0LnBhZ2VYO1xuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xuXG4gICAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpO1xuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnQoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoRW5kKCkge1xuICAgIGlmIChpLnNldHRpbmdzLnN3aXBlRWFzaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaS5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcHBseVRvdWNoTW92ZShzcGVlZC54ICogMzAsIHNwZWVkLnkgKiAzMCk7XG5cbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XG4gICAgICAgIHNwZWVkLnkgKj0gMC44O1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbnYuc3VwcG9ydHNUb3VjaCkge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICB9IGVsc2UgaWYgKGVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlclVwJywgdG91Y2hFbmQpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGVmYXVsdFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgaGFuZGxlcnM6IFsnY2xpY2stcmFpbCcsICdkcmFnLXRodW1iJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxpbmdUaHJlc2hvbGQ6IDEwMDAsXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXG4gIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXG4gIHN3aXBlRWFzaW5nOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgd2hlZWxTcGVlZDogMSxcbn0pOyB9O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gICdjbGljay1yYWlsJzogY2xpY2tSYWlsLFxuICAnZHJhZy10aHVtYic6IGRyYWdUaHVtYixcbiAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICB3aGVlbDogd2hlZWwsXG4gIHRvdWNoOiB0b3VjaCxcbn07XG5cbnZhciBQZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggdXNlclNldHRpbmdzID09PSB2b2lkIDAgKSB1c2VyU2V0dGluZ3MgPSB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgaXMgc3BlY2lmaWVkIHRvIGluaXRpYWxpemUgUGVyZmVjdFNjcm9sbGJhcicpO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLm1haW4pO1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MoKTtcbiAgZm9yICh2YXIga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuZm9jdXMpOyB9O1xuICB2YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuZm9jdXMpOyB9O1xuXG4gIHRoaXMuaXNSdGwgPSBnZXQoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbiAgaWYgKHRoaXMuaXNSdGwgPT09IHRydWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnJ0bCk7XG4gIH1cbiAgdGhpcy5pc05lZ2F0aXZlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0xO1xuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pKCk7XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcbiAgdGhpcy5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneCcpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd4JykpO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHRoaXMuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYV2lkdGggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcbiAgdmFyIHJhaWxYU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSA9IHBhcnNlSW50KHJhaWxYU3R5bGUuYm90dG9tLCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhclhCb3R0b20pKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWFRvcCA9IHRvSW50KHJhaWxYU3R5bGUudG9wKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnJhaWxCb3JkZXJYV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLm1hcmdpbkxlZnQpICsgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5SaWdodCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxYV2lkdGggPSBudWxsO1xuICB0aGlzLnJhaWxYUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd5JykpO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHRoaXMuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJZQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZVG9wID0gbnVsbDtcbiAgdmFyIHJhaWxZU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJpZ2h0ID0gcGFyc2VJbnQocmFpbFlTdHlsZS5yaWdodCwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJZUmlnaHQpKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJZTGVmdCA9IHRvSW50KHJhaWxZU3R5bGUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnNjcm9sbGJhcllPdXRlcldpZHRoID0gdGhpcy5pc1J0bCA/IG91dGVyV2lkdGgodGhpcy5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIHRoaXMucmFpbEJvcmRlcllXaWR0aCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyB0b0ludChyYWlsWVN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Ub3ApICsgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Cb3R0b20pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWUhlaWdodCA9IG51bGw7XG4gIHRoaXMucmFpbFlSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5yZWFjaCA9IHtcbiAgICB4OlxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxMZWZ0ID49IHRoaXMuY29udGVudFdpZHRoIC0gdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICA/ICdlbmQnXG4gICAgICAgIDogbnVsbCxcbiAgICB5OlxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbFRvcCA+PSB0aGlzLmNvbnRlbnRIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICA/ICdlbmQnXG4gICAgICAgIDogbnVsbCxcbiAgfTtcblxuICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuXG4gIHRoaXMuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHsgcmV0dXJuIGhhbmRsZXJzW2hhbmRsZXJOYW1lXSh0aGlzJDEpOyB9KTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuZWxlbWVudCwgJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiB0aGlzJDEub25TY3JvbGwoZSk7IH0pO1xuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcblxuICAvLyBSZWNhbGN1bGF0ZSByYWlsIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luTGVmdCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5SaWdodCk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Ub3ApICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luQm90dG9tKTtcblxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuXG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICdsZWZ0JywgMCwgZmFsc2UsIHRydWUpO1xuXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLm9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwgKGUpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgLSB0aGlzLmxhc3RTY3JvbGxUb3ApO1xuICBwcm9jZXNzU2Nyb2xsRGlmZihcbiAgICB0aGlzLFxuICAgICdsZWZ0JyxcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCAtIHRoaXMubGFzdFNjcm9sbExlZnRcbiAgKTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKHRoaXMuZWxlbWVudC5zY3JvbGxUb3ApO1xuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5ldmVudC51bmJpbmRBbGwoKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclkpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5yZW1vdmVQc0NsYXNzZXMoKTtcblxuICAvLyB1bnNldCBlbGVtZW50c1xuICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclkgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IG51bGw7XG5cbiAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5yZW1vdmVQc0NsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVQc0NsYXNzZXMgKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZVxuICAgIC5zcGxpdCgnICcpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW5hbWUubWF0Y2goL15wcyhbLV9dLit8KSQvKTsgfSlcbiAgICAuam9pbignICcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZmVjdFNjcm9sbGJhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcy5tYXBcbiIsImNvbnN0IFN3YWxNb2RhbCA9IChpY29uLCB0aXRsZSwgaHRtbCkgPT4ge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIGljb24sXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBodG1sXG4gICAgfSlcbn1cblxuY29uc3QgU3dhbENvbmZpcm0gPSAoaWNvbiwgdGl0bGUsIGh0bWwsIGNvbmZpcm1CdXR0b25UZXh0LCBtZXRob2QsIHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgICBpY29uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaHRtbCxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dCxcbiAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxpdmV3aXJlLmVtaXQobWV0aG9kLCBwYXJhbXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubGl2ZXdpcmUuZW1pdChjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IFN3YWxBbGVydCA9IChpY29uLCB0aXRsZSwgdGltZW91dCA9IDcwMDApID0+IHtcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICB0aW1lcjogdGltZW91dCxcbiAgICAgICAgb25PcGVuOiB0b2FzdCA9PiB7XG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgaWNvbixcbiAgICAgICAgdGl0bGVcbiAgICB9KVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5saXZld2lyZS5vbignc3dhbDptb2RhbCcsIGRhdGEgPT4ge1xuICAgICAgICBTd2FsTW9kYWwoZGF0YS5pY29uLCBkYXRhLnRpdGxlLCBkYXRhLnRleHQpXG4gICAgfSlcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbignc3dhbDpjb25maXJtJywgZGF0YSA9PiB7XG4gICAgICAgIFN3YWxDb25maXJtKGRhdGEuaWNvbiwgZGF0YS50aXRsZSwgZGF0YS50ZXh0LCBkYXRhLmNvbmZpcm1UZXh0LCBkYXRhLm1ldGhvZCwgZGF0YS5wYXJhbXMsIGRhdGEuY2FsbGJhY2spXG4gICAgfSlcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbignc3dhbDphbGVydCcsIGRhdGEgPT4ge1xuICAgICAgICBTd2FsQWxlcnQoZGF0YS5pY29uLCBkYXRhLnRpdGxlLCBkYXRhLnRpbWVvdXQpXG4gICAgfSlcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbigncGxhY2UtYmV0cy1wdXRpJywgZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV0aS1wb29sJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9faGVhcnRCZWF0JywgJ2FuaW1hdGVfX3JlcGVhdC0zJyk7XG4gICAgfSlcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbigncGxhY2UtYmV0cy1wdWxhJywgZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHVsYS1wb29sJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9faGVhcnRCZWF0JywgJ2FuaW1hdGVfX3JlcGVhdC0zJyk7XG4gICAgfSlcbn0pXG4iLCJpbXBvcnQgJ2FscGluZWpzJ1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbndpbmRvdy5Td2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcblxuLy8gQ29yZVVJXG5yZXF1aXJlKCdAY29yZXVpL2NvcmV1aScpO1xuXG4vLyBCb2lsZXJwbGF0ZVxucmVxdWlyZSgnLi4vcGx1Z2lucycpO1xuXG5yZXF1aXJlKCcuL2FsZXJ0Jyk7XG4iLCIvKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuJChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2tib3ggdHJlZSBmb3IgcGVybWlzc2lvbiBzZWxlY3RpbmdcbiAgICAgKi9cbiAgICAkKCcjdHJlZSA6Y2hlY2tib3gnKS5vbignY2xpY2sgY2hhbmdlJywgZnVuY3Rpb24gKCl7XG4gICAgICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ3VsJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuYXR0cignY2hlY2tlZCcsIHRydWUpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjdHJlZSA6Y2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygndWwnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzdWJtaXQgaW5wdXRzIGluIHRoZSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBzdWJtaXQgaW5wdXRzIGluIGEgZ2l2ZW4gZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmFibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhbGwgc3VibWl0IGJ1dHRvbnMgb25jZSBjbGlja2VkXG4gICAgICovXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbmZpcm1hdGlvbiB0byBhIGRlbGV0ZSBidXR0b24vZm9ybVxuICAgICAqL1xuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1kZWxldGUtaXRlbV0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgICAgICAub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9Y29uZmlybS1pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz8nLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDb250aW51ZScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtLWl0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbiAnYXJlIHlvdSBzdXJlJyBwb3AtdXAgdG8gYW55IGJ1dHRvbi9saW5rXG4gICAgICAgICAqL1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0NvbnRpbnVlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAgICAgLm9uKCdzdWJtaXQnLCAnZm9ybVtkYXRhLWNvbmZpcm1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbiAnYXJlIHlvdSBzdXJlJyBwb3AtdXAgdG8gYW55IGJ1dHRvbi9saW5rXG4gICAgICAgICAqL1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjb25maWcgPSAgJCh0aGlzKS5kYXRhKCdjb25maXJtJyk7XG4gICAgICAgIGxldCBzd2FsQ29uZmlnID0ge1xuICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy50aXRsZSB8fCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IGNvbmZpZy5zaG93Q2FuY2VsQnV0dG9uIHx8IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlnLmNvbmZpcm1CdXR0b25UZXh0IHx8ICdDb250aW51ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjb25maWcuY2FuY2VsQnV0dG9uVGV4dCB8fCAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uIHx8ICdpbmZvJyxcbiAgICAgICAgfTtcbiAgICAgICAgU3dhbC5maXJlKHN3YWxDb25maWcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9ucygkKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1lbWJlciB0YWIgb24gcGFnZSBsb2FkXG4gICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXSwgYVtkYXRhLXRvZ2dsZT1cInBpbGxcIl0nKS5vbignc2hvd24uYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGhhc2ggPSAkKGUudGFyZ2V0KS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlID8gaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgaGFzaCkgOiBsb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICB9KTtcblxuICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rW2hyZWY9XCInK2hhc2grJ1wiXScpLnRhYignc2hvdycpO1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==