(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/frontend"],{

/***/ "./node_modules/argon-design-system-free/assets/js/argon-design-system.min.js":
/*!************************************************************************************!*\
  !*** ./node_modules/argon-design-system-free/assets/js/argon-design-system.min.js ***!
  \************************************************************************************/
/***/ (() => {

var big_image,navbar_initialized,transparent=!0,transparentDemo=!0,fixedTop=!1,backgroundOrange=!1,toggle_initialized=!1,$datepicker=$(".datepicker"),$collapse=$(".navbar .collapse"),$html=$("html"),$tagsinput=$(".tagsinput");function hideNavbarCollapse(e){e.addClass("collapsing-out")}function hiddenNavbarCollapse(e){e.removeClass("collapsing-out")}function debounce(t,o,r){var n;return function(){var e=this,a=arguments;clearTimeout(n),n=setTimeout(function(){n=null,r||t.apply(e,a)},o),r&&!n&&t.apply(e,a)}}function debounce(t,o,r){var n;return function(){var e=this,a=arguments;clearTimeout(n),n=setTimeout(function(){n=null,r||t.apply(e,a)},o),r&&!n&&t.apply(e,a)}}-1<navigator.platform.indexOf("Win")?($(".wrapper .login-page, .register-page, .card").perfectScrollbar(),0!=$(".tab-content .table-responsive").length&&$(".table-responsive").each(function(){new PerfectScrollbar($(this)[0])}),$html.addClass("perfect-scrollbar-on")):$html.addClass("perfect-scrollbar-off"),$(document).ready(function(){$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),$('[data-toggle="popover"]').each(function(){color_class=$(this).data("color"),$(this).popover({template:'<div class="popover popover-'+color_class+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'})});var a=document.getElementById("square1"),t=document.getElementById("square2"),o=document.getElementById("square3"),r=document.getElementById("square4"),n=document.getElementById("square5"),l=document.getElementById("square6"),s=document.getElementById("square7"),i=document.getElementById("square8");0!=$(".square").length&&$(document).mousemove(function(e){posX=event.clientX-window.innerWidth/2,posY=event.clientY-window.innerWidth/6,a.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",t.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",o.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",r.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",n.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",l.style.transform="perspective(500px) rotateY("+.05*posX+"deg) rotateX("+-.05*posY+"deg)",s.style.transform="perspective(500px) rotateY("+.02*posX+"deg) rotateX("+-.02*posY+"deg)",i.style.transform="perspective(500px) rotateY("+.02*posX+"deg) rotateX("+-.02*posY+"deg)"}),ArgonKit.initNavbarImage(),$navbar=$(".navbar[color-on-scroll]"),scroll_distance=$navbar.attr("color-on-scroll")||500,0!=$(".navbar[color-on-scroll]").length&&(ArgonKit.checkScrollForTransparentNavbar(),$(window).on("scroll",ArgonKit.checkScrollForTransparentNavbar)),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")}),$(".bootstrap-switch").each(function(){$this=$(this),data_on_label=$this.data("on-label")||"",data_off_label=$this.data("off-label")||"",$this.bootstrapSwitch({onText:data_on_label,offText:data_off_label})}),$(".carousel").carousel({interval:!1}),$(".datepicker")[0]&&$(".datepicker").each(function(){$(".datepicker").datepicker({disableTouchKeyboard:!0,autoclose:!1})}),flatpickr(".flatpickr",{}),flatpickr(".range",{mode:"range"}),flatpickr(".datetimepicker",{enableTime:!0,dateFormat:"Y-m-d H:i"}),ArgonKit.initSliders()}),$collapse.length&&($collapse.on({"hide.bs.collapse":function(){hideNavbarCollapse($collapse)}}),$collapse.on({"hidden.bs.collapse":function(){hiddenNavbarCollapse($collapse)}})),ArgonKit={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){$(document).scrollTop()>scroll_distance?transparent&&(transparent=!1,$(".navbar[color-on-scroll]").removeClass("navbar-transparent")):transparent||(transparent=!0,$(".navbar[color-on-scroll]").addClass("navbar-transparent"))},17),initNavbarImage:function(){var e=$(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),a=e.data("nav-image");$(window).width()<991||$("body").hasClass("burger-menu")?null!=a&&e.css("background","url('"+a+"')").removeAttr("data-nav-image").css("background-size","cover").addClass("has-image"):null!=a&&e.css("background","").attr("data-nav-image",""+a).css("background-size","").removeClass("has-image")},initDatePicker:function(){0!=$datepicker.length&&$datepicker.datetimepicker({icons:{time:"tim-icons icon-watch-time",date:"tim-icons icon-calendar-60",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"tim-icons icon-minimal-left",next:"tim-icons icon-minimal-right",today:"fa fa-screenshot",clear:"fa fa-trash",close:"fa fa-remove"}})},initSliders:function(){var e=document.getElementById("sliderRegular");0!=$("#sliderRegular").length&&noUiSlider.create(e,{start:40,connect:[!0,!1],range:{min:0,max:100}});var a=document.getElementById("sliderDouble");0!=$("#sliderDouble").length&&noUiSlider.create(a,{start:[20,60],connect:!0,range:{min:0,max:100}})}};
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
  window.animate = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


window.Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'pusher',
  key: "HgjQMw.1OcGkw",
  wsHost: 'realtime-pusher.ably.io',
  wsPort: 443,
  disableStats: true,
  encrypted: true
});

/***/ }),

/***/ "./resources/js/frontend/alert.js":
/*!****************************************!*\
  !*** ./resources/js/frontend/alert.js ***!
  \****************************************/
/***/ (() => {

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
    showCancelButton: true,
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
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
  var method = arguments.length > 3 ? arguments[3] : undefined;
  var params = arguments.length > 4 ? arguments[4] : undefined;
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
  }).then(function (result) {
    if (method) {
      return window.livewire.emit(method, params);
    }
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
    SwalAlert(data.icon, data.title, data.timeout, data.method, data.params);
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

/***/ "./resources/js/frontend/app.js":
/*!**************************************!*\
  !*** ./resources/js/frontend/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");

__webpack_require__(/*! ./alert */ "./resources/js/frontend/alert.js");

__webpack_require__(/*! ./eyecandy */ "./resources/js/frontend/eyecandy.js");

__webpack_require__(/*! argon-design-system-free/assets/js/argon-design-system.min.js */ "./node_modules/argon-design-system-free/assets/js/argon-design-system.min.js"); // window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//
// const app = new Vue({
//     el: '#app',
// });
//

/***/ }),

/***/ "./resources/js/frontend/eyecandy.js":
/*!*******************************************!*\
  !*** ./resources/js/frontend/eyecandy.js ***!
  \*******************************************/
/***/ (() => {

$(function () {
  $('.eyecandy').on('click', function () {
    var passwordElem = $(this).parent().find('input[name="password"]');
    var currentType = passwordElem.attr('type'); // Toggle Eye Candy

    $(this).toggleClass('show'); // Toggle Password input type

    passwordElem.prop({
      type: currentType === 'text' ? 'password' : 'text'
    });
  });
});

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/***/ (() => {

/**
 * Place any jQuery/helper plugins in here.
 */
$(function () {
  /**
   * Checkbox tree for permission selecting
   */
  var permissionTree = $('.permission-tree :checkbox');
  permissionTree.on('click change', function () {
    if ($(this).is(':checked')) {
      $(this).siblings('ul').find('input[type="checkbox"]').attr('checked', true).attr('disabled', true);
    } else {
      $(this).siblings('ul').find('input[type="checkbox"]').removeAttr('checked').removeAttr('disabled');
    }
  });
  permissionTree.each(function () {
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
  }).on('click', '.close-alert', function (e) {
    $(".alert").remove();
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);







const DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    const self = {
        config: Object.assign(Object.assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
    };
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        const config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            const defaultDate = self.config.minDate === undefined ||
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            const defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        const prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        const limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        const limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (limitMaxHours) {
            const maxTime = self.config.maxTime !== undefined
                ? self.config.maxTime
                : self.config.maxDate;
            hours = Math.min(hours, maxTime.getHours());
            if (hours === maxTime.getHours())
                minutes = Math.min(minutes, maxTime.getMinutes());
            if (minutes === maxTime.getMinutes())
                seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
            const minTime = self.config.minTime !== undefined
                ? self.config.minTime
                : self.config.minDate;
            hours = Math.max(hours, minTime.getHours());
            if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                minutes = minTime.getMinutes();
            if (minutes === minTime.getMinutes())
                seconds = Math.max(seconds, minTime.getSeconds());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        const date = dateObj || self.latestSelectedDateObj;
        if (date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0)
            : hours);
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
    }
    function onYearInput(event) {
        const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
        const year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach((ev) => bind(element, ev, handler, options));
        if (element instanceof Array)
            return element.forEach((el) => bind(el, event, handler, options));
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: () => element.removeEventListener(event, handler),
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach((evt) => {
                Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el) => bind(el, "click", self[evt]));
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        const debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
        self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", (e) => {
                if (self.config.mode === "range")
                    onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            const selText = (e) => (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", (e) => {
                    updateTime(e);
                    triggerChange();
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        const jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        const oldYear = self.currentYear;
        const oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        const target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        const input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        const event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        const fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                const { weekWrapper, weekNumbers } = buildWeeks();
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        const customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                const wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        const dateIsEnabled = isEnabled(date, true), dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        for (let m = startMonth; m != endMonth; m += delta) {
            const month = self.daysContainer.children[m];
            const startIndex = delta > 0 ? 0 : month.children.length - 1;
            const endIndex = delta > 0 ? month.children.length : -1;
            for (let i = startIndex; i != endIndex; i += delta) {
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        const givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        const loopDelta = delta > 0 ? 1 : -1;
        for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            const month = self.daysContainer.children[m];
            const startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            const numMonthDays = month.children.length;
            for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        const dayFocused = isInView(document.activeElement || document.body);
        const startElem = current !== undefined
            ? current
            : dayFocused
                ? document.activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        const dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
        if (self.weekNumbers)
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
        const frag = document.createDocumentFragment();
        for (let i = 0; i < self.config.showMonths; i++) {
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        const shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (let i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            const month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        const container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
        const monthNavFragment = window.document.createDocumentFragment();
        let monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", (e) => {
                const target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                const selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        const yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", { tabindex: "-1" });
        const yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        const currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container,
            yearElement,
            monthElement,
        };
    }
    function buildMonths() {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (let m = self.config.showMonths; m--;) {
            const month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: () => self.__hidePrevMonthArrow,
            set(bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: () => self.__hideNextMonthArrow,
            set(bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        const defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
        self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        const separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
        const hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        const minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            const secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");
        else
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
        for (let i = self.config.showMonths; i--;) {
            const container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        const firstDayOfWeek = self.l10n.firstDayOfWeek;
        let weekdays = [...self.l10n.weekdays.shorthand];
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = [
                ...weekdays.splice(firstDayOfWeek, weekdays.length),
                ...weekdays.splice(0, firstDayOfWeek),
            ];
        }
        for (let i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        const weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        const weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper,
            weekNumbers,
        };
    }
    function changeMonth(value, isOffset = true) {
        const delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent = true, toInitial = true) {
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            const { hours, minutes, seconds } = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (let i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                const wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach((k) => {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            const isCalendarElement = isCalendarElem(eventTarget);
            const isInput = eventTarget === self.input ||
                eventTarget === self.altInput ||
                self.element.contains(eventTarget) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            const lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput &&
                    !isCalendarElement &&
                    !isCalendarElem(e.relatedTarget);
            const isIgnored = !self.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
            if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless = true) {
        var _a;
        const dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (let i = 0, d; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                const parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        const isInput = e.target === self._input;
        if (isInput &&
            (self.selectedDates.length > 0 || self._input.value.length > 0) &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        const isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        const allowInput = self.config.allowInput;
        const allowKeydown = self.isOpen && (!allowInput || !isInput);
        const allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            const isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (document.activeElement && isInView(document.activeElement)))) {
                            const delta = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta);
                            else {
                                e.stopPropagation();
                                changeMonth(delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    const delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        const elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter((x) => x);
                        const i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            const target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains("flatpickr-day") ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        const hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        let containsDisabled = false;
        let minRange = 0, maxRange = 0;
        for (let t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        for (let m = 0; m < self.config.showMonths; m++) {
            const month = self.daysContainer.children[m];
            for (let i = 0, l = month.children.length; i < l; i++) {
                const dayElem = month.children[i], date = dayElem.dateObj;
                const timestamp = date.getTime();
                const outOfRange = (minRange > 0 && timestamp < minRange) ||
                    (maxRange > 0 && timestamp > maxRange);
                if (outOfRange) {
                    dayElem.classList.add("notAllowed");
                    ["inRange", "startRange", "endRange"].forEach((c) => {
                        dayElem.classList.remove(c);
                    });
                    continue;
                }
                else if (containsDisabled && !outOfRange)
                    continue;
                ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
                    dayElem.classList.remove(c);
                });
                if (elem !== undefined) {
                    elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                        ? "startRange"
                        : "endRange");
                    if (initialDate < hoverDate && timestamp === initialDate)
                        dayElem.classList.add("startRange");
                    else if (initialDate > hoverDate && timestamp === initialDate)
                        dayElem.classList.add("endRange");
                    if (timestamp >= minRange &&
                        (maxRange === 0 || timestamp <= maxRange) &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate))
                        dayElem.classList.add("inRange");
                }
            }
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement = self._positionElement) {
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        const wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(() => self.hourElement.select(), 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return (date) => {
            const dateObj = (self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat));
            const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        const boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        const formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: () => self.config._enable,
            set: (dates) => {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: () => self.config._disable,
            set: (dates) => {
                self.config._disable = parseDateRules(dates);
            },
        });
        const timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            const defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            const defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
        }
        Object.defineProperty(self.config, "minDate", {
            get: () => self.config._minDate,
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: () => self.config._maxDate,
            set: minMaxDateSetter("max"),
        });
        const minMaxTimeSetter = (type) => (val) => {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        };
        Object.defineProperty(self.config, "minTime", {
            get: () => self.config._minTime,
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: () => self.config._maxTime,
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (let i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter((hook) => self.config[hook] !== undefined).forEach((hook) => {
            self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (let i = 0; i < self.config.plugins.length; i++) {
            const pluginConf = self.config.plugins[i](self) || {};
            for (const key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
                    self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
        self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
        const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
        self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        const positionElement = customPositionElement || self._positionElement;
        const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, ((acc, child) => acc + child.offsetHeight), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        const top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        let left = window.pageXOffset + inputBounds.left;
        let isCenter = false;
        let isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        const right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        const rightMost = left + calendarWidth > window.document.body.offsetWidth;
        const centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = `${top}px`;
        if (!rightMost) {
            self.calendarContainer.style.left = `${left}px`;
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = `${right}px`;
        }
        else {
            const doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            const bodyWidth = window.document.body.offsetWidth;
            const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            const centerBefore = ".flatpickr-calendar.centerMost:before";
            const centerAfter = ".flatpickr-calendar.centerMost:after";
            const centerIndex = doc.cssRules.length;
            const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
            self.calendarContainer.style.left = `${centerLeft}px`;
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        let editableSheet = null;
        for (let i = 0; i < document.styleSheets.length; i++) {
            const sheet = document.styleSheets[i];
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        const style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        const isSelectable = (day) => day.classList &&
            day.classList.contains("flatpickr-day") &&
            !day.classList.contains("flatpickr-disabled") &&
            !day.classList.contains("notAllowed");
        const t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
        if (t === undefined)
            return;
        const target = t;
        const selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            const selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            const isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            const single = self.config.mode === "single" && !self.config.enableTime;
            const range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    const CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        clickOpens: [
            () => {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (const key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach((x) => x());
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach((x) => x());
            else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1)
                self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        let dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map((d) => self.parseDate(d, format));
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map((date) => self.parseDate(date, format));
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map((date) => self.parseDate(date, format));
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter((d) => d instanceof Date && isEnabled(d, false)));
        if (self.config.mode === "range")
            self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    function setDate(date, triggerChange = false, format = self.config.dateFormat) {
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map((rule) => {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter((x) => x);
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        const preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        const inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", (e) => {
            self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        const hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (let i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        const e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (let i = 0; i < self.selectedDates.length; i++) {
            if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach((yearElement, i) => {
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(format) {
        return self.selectedDates
            .map((dObj) => self.formatDate(dObj, format))
            .filter((d, i, arr) => self.config.mode !== "range" ||
            self.config.enableTime ||
            arr.indexOf(d) === i)
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange = true) {
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        const eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        const isPrevMonth = self.prevMonthNav.contains(eventTarget);
        const isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        const isKeyDown = e.type === "keydown", eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
        }
        const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        let newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) +
                        ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    const nodes = Array.prototype.slice
        .call(nodeList)
        .filter((x) => x instanceof HTMLElement);
    const instances = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
    default: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
};
flatpickr.localize = (l10n) => {
    flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = (config) => {
    flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "english": () => (/* binding */ english),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: (nth) => {
        const s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOOKS": () => (/* binding */ HOOKS),
/* harmony export */   "defaults": () => (/* binding */ defaults)
/* harmony export */ });
const HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
const defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
    getWeek: (givenDate) => {
        const date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDateFormatter": () => (/* binding */ createDateFormatter),
/* harmony export */   "createDateParser": () => (/* binding */ createDateParser),
/* harmony export */   "compareDates": () => (/* binding */ compareDates),
/* harmony export */   "compareTimes": () => (/* binding */ compareTimes),
/* harmony export */   "isBetween": () => (/* binding */ isBetween),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "getDefaultHours": () => (/* binding */ getDefaultHours)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



const createDateFormatter = ({ config = _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults, l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english, isMobile = false, }) => (dateObj, frmt, overrideLocale) => {
    const locale = overrideLocale || l10n;
    if (config.formatDate !== undefined && !isMobile) {
        return config.formatDate(dateObj, frmt, locale);
    }
    return frmt
        .split("")
        .map((c, i, arr) => _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\"
        ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config)
        : c !== "\\"
            ? c
            : "")
        .join("");
};
const createDateParser = ({ config = _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults, l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english }) => (date, givenFormat, timeless, customLocale) => {
    if (date !== 0 && !date)
        return undefined;
    const locale = customLocale || l10n;
    let parsedDate;
    const dateOrig = date;
    if (date instanceof Date)
        parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" &&
        date.toFixed !== undefined)
        parsedDate = new Date(date);
    else if (typeof date === "string") {
        const format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
        const datestr = String(date).trim();
        if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
        }
        else if (/Z$/.test(datestr) ||
            /GMT$/.test(datestr))
            parsedDate = new Date(date);
        else if (config && config.parseDate)
            parsedDate = config.parseDate(date, format);
        else {
            parsedDate =
                !config || !config.noCalendar
                    ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                    : new Date(new Date().setHours(0, 0, 0, 0));
            let matched, ops = [];
            for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                const token = format[i];
                const isBackSlash = token === "\\";
                const escaped = format[i - 1] === "\\" || isBackSlash;
                if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
                    regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
                    const match = new RegExp(regexStr).exec(date);
                    if (match && (matched = true)) {
                        ops[token !== "Y" ? "push" : "unshift"]({
                            fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                            val: match[++matchIndex],
                        });
                    }
                }
                else if (!isBackSlash)
                    regexStr += ".";
                ops.forEach(({ fn, val }) => (parsedDate = fn(parsedDate, val, locale) || parsedDate));
            }
            parsedDate = matched ? parsedDate : undefined;
        }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
        return undefined;
    }
    if (timeless === true)
        parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
};
function compareDates(date1, date2, timeless = true) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return (3600 * (date1.getHours() - date2.getHours()) +
        60 * (date1.getMinutes() - date2.getMinutes()) +
        date1.getSeconds() -
        date2.getSeconds());
}
const isBetween = (ts, ts1, ts2) => {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    let hours = config.defaultHour;
    let minutes = config.defaultMinute;
    let seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        const minHour = config.minDate.getHours();
        const minMinutes = config.minDate.getMinutes();
        const minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        const maxHr = config.maxDate.getHours();
        const maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours, minutes, seconds };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "clearNode": () => (/* binding */ clearNode),
/* harmony export */   "findParent": () => (/* binding */ findParent),
/* harmony export */   "createNumberInput": () => (/* binding */ createNumberInput),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget)
/* harmony export */ });
function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    const e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (const key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            const path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monthToStr": () => (/* binding */ monthToStr),
/* harmony export */   "revFormat": () => (/* binding */ revFormat),
/* harmony export */   "tokenRegex": () => (/* binding */ tokenRegex),
/* harmony export */   "formats": () => (/* binding */ formats)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

const doNothing = () => undefined;
const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    H: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    J: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    K: (dateObj, amPM, locale) => {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: (dateObj, seconds) => {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
    W: function (dateObj, weekNum, locale) {
        const weekNumber = parseInt(weekNum);
        const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: (dateObj, year) => {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: (_, ISODate) => new Date(ISODate),
    d: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    h: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    i: (dateObj, minutes) => {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: (dateObj, month) => {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: (dateObj, month) => {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: (dateObj, seconds) => {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
    w: doNothing,
    y: (dateObj, year) => {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
const tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
const formats = {
    Z: (date) => date.toISOString(),
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
    },
    H: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours()),
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: (date, locale) => locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)],
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds()),
    U: (date) => date.getTime() / 1000,
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4),
    d: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate()),
    h: (date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),
    i: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes()),
    j: (date) => date.getDate(),
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: (date) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1),
    n: (date) => date.getMonth() + 1,
    s: (date) => date.getSeconds(),
    u: (date) => date.getTime(),
    w: (date) => date.getDay(),
    y: (date) => String(date.getFullYear()).substring(2),
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pad": () => (/* binding */ pad),
/* harmony export */   "int": () => (/* binding */ int),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "arrayify": () => (/* binding */ arrayify)
/* harmony export */ });
const pad = (number, length = 2) => `000${number}`.slice(length * -1);
const int = (bool) => (bool === true ? 1 : 0);
function debounce(fn, wait) {
    let t;
    return function () {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, arguments), wait);
    };
}
const arrayify = (obj) => obj instanceof Array ? obj : [obj];


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {

"use strict";

if (typeof Object.assign !== "function") {
    Object.assign = function (target, ...args) {
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        for (const source of args) {
            if (source) {
                Object.keys(source).forEach((key) => (target[key] = source[key]));
            }
        }
        return target;
    };
}


/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Connector = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Connector(options) {
    _classCallCheck(this, Connector);

    /**
     * Default connector options.
     */
    this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: '/broadcasting/auth',
      broadcaster: 'pusher',
      csrfToken: null,
      host: null,
      key: null,
      namespace: 'App.Events'
    };
    this.setOptions(options);
    this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */


  _createClass(Connector, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = _extends(this._defaultOptions, options);

      if (this.csrfToken()) {
        this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
      }

      return options;
    }
    /**
     * Extract the CSRF token from the page.
     */

  }, {
    key: "csrfToken",
    value: function csrfToken() {
      var selector;

      if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
        return window['Laravel'].csrfToken;
      } else if (this.options.csrfToken) {
        return this.options.csrfToken;
      } else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
        return selector.getAttribute('content');
      }

      return null;
    }
  }]);

  return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = /*#__PURE__*/function () {
  function Channel() {
    _classCallCheck(this, Channel);
  }

  _createClass(Channel, [{
    key: "listenForWhisper",

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "notification",
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */

  }, {
    key: "stopListeningForWhisper",
    value: function stopListeningForWhisper(event, callback) {
      return this.stopListening('.client-' + event, callback);
    }
  }]);

  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function EventFormatter(namespace) {
    _classCallCheck(this, EventFormatter);

    this.setNamespace(namespace);
  }
  /**
   * Format the given event name.
   */


  _createClass(EventFormatter, [{
    key: "format",
    value: function format(event) {
      if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
        return event.substr(1);
      } else if (this.namespace) {
        event = this.namespace + '.' + event;
      }

      return event.replace(/\./g, '\\');
    }
    /**
     * Set the event namespace.
     */

  }, {
    key: "setNamespace",
    value: function setNamespace(value) {
      this.namespace = value;
    }
  }]);

  return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */

var PusherChannel = /*#__PURE__*/function (_Channel) {
  _inherits(PusherChannel, _Channel);

  var _super = _createSuper(PusherChannel);

  /**
   * Create a new class instance.
   */
  function PusherChannel(pusher, name, options) {
    var _this;

    _classCallCheck(this, PusherChannel);

    _this = _super.call(this);
    _this.name = name;
    _this.pusher = pusher;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Pusher channel.
   */


  _createClass(PusherChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      var _this2 = this;

      this.subscription.bind_global(function (event, data) {
        if (event.startsWith('pusher:')) {
          return;
        }

        var namespace = _this2.options.namespace.replace(/\./g, '\\');

        var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : '.' + event;
        callback(formattedEvent, data);
      });
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      if (callback) {
        this.subscription.unbind(this.eventFormatter.format(event), callback);
      } else {
        this.subscription.unbind(this.eventFormatter.format(event));
      }

      return this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */

  }, {
    key: "stopListeningToAll",
    value: function stopListeningToAll(callback) {
      if (callback) {
        this.subscription.unbind_global(callback);
      } else {
        this.subscription.unbind_global();
      }

      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('pusher:subscription_succeeded', function () {
        callback();
      });
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      this.on('pusher:subscription_error', function (status) {
        callback(status);
      });
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }]);

  return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */

var PusherPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherPrivateChannel);

  function PusherPrivateChannel() {
    _classCallCheck(this, PusherPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPrivateChannel, [{
    key: "whisper",

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher private channel.
 */

var PusherEncryptedPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherEncryptedPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherEncryptedPrivateChannel);

  function PusherEncryptedPrivateChannel() {
    _classCallCheck(this, PusherEncryptedPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherEncryptedPrivateChannel, [{
    key: "whisper",

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherEncryptedPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */

var PusherPresenceChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPresenceChannel, _PusherChannel);

  var _super = _createSuper(PusherPresenceChannel);

  function PusherPresenceChannel() {
    _classCallCheck(this, PusherPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPresenceChannel, [{
    key: "here",

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      this.on('pusher:subscription_succeeded', function (data) {
        callback(Object.keys(data.members).map(function (k) {
          return data.members[k];
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('pusher:member_added', function (member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('pusher:member_removed', function (member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */

var SocketIoChannel = /*#__PURE__*/function (_Channel) {
  _inherits(SocketIoChannel, _Channel);

  var _super = _createSuper(SocketIoChannel);

  /**
   * Create a new class instance.
   */
  function SocketIoChannel(socket, name, options) {
    var _this;

    _classCallCheck(this, SocketIoChannel);

    _this = _super.call(this);
    /**
     * The event callbacks applied to the socket.
     */

    _this.events = {};
    /**
     * User supplied callbacks for events on this channel.
     */

    _this.listeners = {};
    _this.name = name;
    _this.socket = socket;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Socket.io channel.
   */


  _createClass(SocketIoChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.socket.emit('subscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.unbind();
      this.socket.emit('unsubscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.unbindEvent(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('connect', function (socket) {
        callback(socket);
      });
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;

      this.listeners[event] = this.listeners[event] || [];

      if (!this.events[event]) {
        this.events[event] = function (channel, data) {
          if (_this2.name === channel && _this2.listeners[event]) {
            _this2.listeners[event].forEach(function (cb) {
              return cb(data);
            });
          }
        };

        this.socket.on(event, this.events[event]);
      }

      this.listeners[event].push(callback);
      return this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (event) {
        _this3.unbindEvent(event);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */

  }, {
    key: "unbindEvent",
    value: function unbindEvent(event, callback) {
      this.listeners[event] = this.listeners[event] || [];

      if (callback) {
        this.listeners[event] = this.listeners[event].filter(function (cb) {
          return cb !== callback;
        });
      }

      if (!callback || this.listeners[event].length === 0) {
        if (this.events[event]) {
          this.socket.removeListener(event, this.events[event]);
          delete this.events[event];
        }

        delete this.listeners[event];
      }
    }
  }]);

  return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io private channel.
 */

var SocketIoPrivateChannel = /*#__PURE__*/function (_SocketIoChannel) {
  _inherits(SocketIoPrivateChannel, _SocketIoChannel);

  var _super = _createSuper(SocketIoPrivateChannel);

  function SocketIoPrivateChannel() {
    _classCallCheck(this, SocketIoPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPrivateChannel, [{
    key: "whisper",

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
  }]);

  return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */

var SocketIoPresenceChannel = /*#__PURE__*/function (_SocketIoPrivateChann) {
  _inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

  var _super = _createSuper(SocketIoPresenceChannel);

  function SocketIoPresenceChannel() {
    _classCallCheck(this, SocketIoPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPresenceChannel, [{
    key: "here",

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      this.on('presence:subscribed', function (members) {
        callback(members.map(function (m) {
          return m.user_info;
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('presence:joining', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('presence:leaving', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
  }]);

  return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */

var NullChannel = /*#__PURE__*/function (_Channel) {
  _inherits(NullChannel, _Channel);

  var _super = _createSuper(NullChannel);

  function NullChannel() {
    _classCallCheck(this, NullChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullChannel, [{
    key: "subscribe",

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {} //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {} //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      return this;
    }
  }]);

  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */

var NullPrivateChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPrivateChannel, _NullChannel);

  var _super = _createSuper(NullPrivateChannel);

  function NullPrivateChannel() {
    _classCallCheck(this, NullPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPrivateChannel, [{
    key: "whisper",

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);

  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */

var NullPresenceChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPresenceChannel, _NullChannel);

  var _super = _createSuper(NullPresenceChannel);

  function NullPresenceChannel() {
    _classCallCheck(this, NullPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPresenceChannel, [{
    key: "here",

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      return this;
    }
  }]);

  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */

var PusherConnector = /*#__PURE__*/function (_Connector) {
  _inherits(PusherConnector, _Connector);

  var _super = _createSuper(PusherConnector);

  function PusherConnector() {
    var _this;

    _classCallCheck(this, PusherConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Pusher connection.
   */


  _createClass(PusherConnector, [{
    key: "connect",
    value: function connect() {
      if (typeof this.options.client !== 'undefined') {
        this.pusher = this.options.client;
      } else {
        this.pusher = new Pusher(this.options.key, this.options);
      }
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new PusherChannel(this.pusher, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      if (!this.channels['private-encrypted-' + name]) {
        this.channels['private-encrypted-' + name] = new PusherEncryptedPrivateChannel(this.pusher, 'private-encrypted-' + name, this.options);
      }

      return this.channels['private-encrypted-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this2 = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name, index) {
        _this2.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.pusher.disconnect();
    }
  }]);

  return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */

var SocketIoConnector = /*#__PURE__*/function (_Connector) {
  _inherits(SocketIoConnector, _Connector);

  var _super = _createSuper(SocketIoConnector);

  function SocketIoConnector() {
    var _this;

    _classCallCheck(this, SocketIoConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Socket.io connection.
   */


  _createClass(SocketIoConnector, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var io = this.getSocketIO();
      this.socket = io(this.options.host, this.options);
      this.socket.on('reconnect', function () {
        Object.values(_this2.channels).forEach(function (channel) {
          channel.subscribe();
        });
      });
      return this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */

  }, {
    key: "getSocketIO",
    value: function getSocketIO() {
      if (typeof this.options.client !== 'undefined') {
        return this.options.client;
      }

      if (typeof io !== 'undefined') {
        return io;
      }

      throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this3 = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name) {
        _this3.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    }
  }]);

  return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */

var NullConnector = /*#__PURE__*/function (_Connector) {
  _inherits(NullConnector, _Connector);

  var _super = _createSuper(NullConnector);

  function NullConnector() {
    var _this;

    _classCallCheck(this, NullConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  _createClass(NullConnector, [{
    key: "connect",
    value: function connect() {} //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {} //

    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {} //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {//
    }
  }]);

  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Echo(options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connect();

    if (!this.options.withoutInterceptors) {
      this.registerInterceptors();
    }
  }
  /**
   * Get a channel instance by name.
   */


  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
    /**
     * Create a new connection.
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.options.broadcaster == 'pusher') {
        this.connector = new PusherConnector(this.options);
      } else if (this.options.broadcaster == 'socket.io') {
        this.connector = new SocketIoConnector(this.options);
      } else if (this.options.broadcaster == 'null') {
        this.connector = new NullConnector(this.options);
      } else if (typeof this.options.broadcaster == 'function') {
        this.connector = new this.options.broadcaster(this.options);
      }
    }
    /**
     * Disconnect from the Echo server.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "join",
    value: function join(channel) {
      return this.connector.presenceChannel(channel);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(channel) {
      this.connector.leave(channel);
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(channel) {
      this.connector.leaveChannel(channel);
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(channel, event, callback) {
      return this.connector.listen(channel, event, callback);
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "private",
    value: function _private(channel) {
      return this.connector.privateChannel(channel);
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivate",
    value: function encryptedPrivate(channel) {
      return this.connector.encryptedPrivateChannel(channel);
    }
    /**
     * Get the Socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */

  }, {
    key: "registerInterceptors",
    value: function registerInterceptors() {
      if (typeof Vue === 'function' && Vue.http) {
        this.registerVueRequestInterceptor();
      }

      if (typeof axios === 'function') {
        this.registerAxiosRequestInterceptor();
      }

      if (typeof jQuery === 'function') {
        this.registerjQueryAjaxSetup();
      }
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerVueRequestInterceptor",
    value: function registerVueRequestInterceptor() {
      var _this = this;

      Vue.http.interceptors.push(function (request, next) {
        if (_this.socketId()) {
          request.headers.set('X-Socket-ID', _this.socketId());
        }

        next();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerAxiosRequestInterceptor",
    value: function registerAxiosRequestInterceptor() {
      var _this2 = this;

      axios.interceptors.request.use(function (config) {
        if (_this2.socketId()) {
          config.headers['X-Socket-Id'] = _this2.socketId();
        }

        return config;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */

  }, {
    key: "registerjQueryAjaxSetup",
    value: function registerjQueryAjaxSetup() {
      var _this3 = this;

      if (typeof jQuery.ajax != 'undefined') {
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (_this3.socketId()) {
            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
          }
        });
      }
    }
  }]);

  return Echo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Echo);


/***/ }),

/***/ "./resources/sass/tailwind/app.scss":
/*!******************************************!*\
  !*** ./resources/sass/tailwind/app.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/frontend/app.scss":
/*!******************************************!*\
  !*** ./resources/sass/frontend/app.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/backend/app.scss":
/*!*****************************************!*\
  !*** ./resources/sass/backend/app.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/***/ ((module) => {

/*!
 * Pusher JavaScript Library v7.0.3
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_669__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_669__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_669__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_669__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_669__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_669__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_669__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_669__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_669__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_669__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_669__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_669__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_669__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_669__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_669__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_669__(__nested_webpack_require_669__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package base64 implements Base64 encoding and decoding.
 */
// Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */
var Coder = /** @class */ (function () {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) { _paddingCharacter = "="; }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            out += this._encodeByte((c >>> 1 * 6) & 63);
            out += this._encodeByte((c >>> 0 * 6) & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            if (left === 2) {
                out += this._encodeByte((c >>> 1 * 6) & 63);
            }
            else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function (s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            out[op++] = (v1 << 4) | (v2 >>> 2);
            out[op++] = (v2 << 6) | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = (v1 << 4) | (v2 >>> 2);
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v2 << 6) | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);
        // c == 47 (c > 46 and c < 48)
        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}());
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */
var URLSafeCoder = /** @class */ (function (_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);
        // c == 95 (c > 94 and c < 96)
        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    return URLSafeCoder;
}(Coder));
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function (length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function (length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function (s) {
    return stdCoder.decodedLength(s);
};
//# sourceMappingURL=base64.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package utf8 implements UTF-8 encoding and decoding.
 */
var INVALID_UTF16 = "utf8: invalid string";
var INVALID_UTF8 = "utf8: invalid source encoding";
/**
 * Encodes the given string into UTF-8 byte array.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encode(s) {
    // Calculate result length and allocate output array.
    // encodedLength() also validates string and throws errors,
    // so we don't need repeat validation here.
    var arr = new Uint8Array(encodedLength(s));
    var pos = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            arr[pos++] = c;
        }
        else if (c < 0x800) {
            arr[pos++] = 0xc0 | c >> 6;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else if (c < 0xd800) {
            arr[pos++] = 0xe0 | c >> 12;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else {
            i++; // get one more character
            c = (c & 0x3ff) << 10;
            c |= s.charCodeAt(i) & 0x3ff;
            c += 0x10000;
            arr[pos++] = 0xf0 | c >> 18;
            arr[pos++] = 0x80 | (c >> 12) & 0x3f;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
    }
    return arr;
}
exports.encode = encode;
/**
 * Returns the number of bytes required to encode the given string into UTF-8.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encodedLength(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            result += 1;
        }
        else if (c < 0x800) {
            result += 2;
        }
        else if (c < 0xd800) {
            result += 3;
        }
        else if (c <= 0xdfff) {
            if (i >= s.length - 1) {
                throw new Error(INVALID_UTF16);
            }
            i++; // "eat" next character
            result += 4;
        }
        else {
            throw new Error(INVALID_UTF16);
        }
    }
    return result;
}
exports.encodedLength = encodedLength;
/**
 * Decodes the given byte array from UTF-8 into a string.
 * Throws if encoding is invalid.
 */
function decode(arr) {
    var chars = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
            var min = void 0;
            if (b < 0xe0) {
                // Need 1 more byte.
                if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                if ((n1 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x1f) << 6 | (n1 & 0x3f);
                min = 0x80;
            }
            else if (b < 0xf0) {
                // Need 2 more bytes.
                if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | (n2 & 0x3f);
                min = 0x800;
            }
            else if (b < 0xf8) {
                // Need 3 more bytes.
                if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                var n3 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | (n3 & 0x3f);
                min = 0x10000;
            }
            else {
                throw new Error(INVALID_UTF8);
            }
            if (b < min || (b >= 0xd800 && b <= 0xdfff)) {
                throw new Error(INVALID_UTF8);
            }
            if (b >= 0x10000) {
                // Surrogate pair.
                if (b > 0x10ffff) {
                    throw new Error(INVALID_UTF8);
                }
                b -= 0x10000;
                chars.push(String.fromCharCode(0xd800 | (b >> 10)));
                b = 0xdc00 | (b & 0x3ff);
            }
        }
        chars.push(String.fromCharCode(b));
    }
    return chars.join("");
}
exports.decode = decode;
//# sourceMappingURL=utf8.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_19967__) {

// required so we don't have to do require('pusher').default etc.
module.exports = __nested_webpack_require_19967__(3).default;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_20171__) {

"use strict";
__nested_webpack_require_20171__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
var ScriptReceiverFactory = (function () {
    function ScriptReceiverFactory(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
    }
    ScriptReceiverFactory.prototype.create = function (callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function () {
            if (!called) {
                callback.apply(null, arguments);
                called = true;
            }
        };
        this[number] = callbackWrapper;
        return { number: number, id: id, name: name, callback: callbackWrapper };
    };
    ScriptReceiverFactory.prototype.remove = function (receiver) {
        delete this[receiver.number];
    };
    return ScriptReceiverFactory;
}());

var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

// CONCATENATED MODULE: ./src/core/defaults.ts
var Defaults = {
    VERSION: "7.0.3",
    PROTOCOL: 7,
    wsPort: 80,
    wssPort: 443,
    wsPath: '',
    httpHost: 'sockjs.pusher.com',
    httpPort: 80,
    httpsPort: 443,
    httpPath: '/pusher',
    stats_host: 'stats.pusher.com',
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax',
    activityTimeout: 120000,
    pongTimeout: 30000,
    unavailableTimeout: 10000,
    cluster: 'mt1',
    cdn_http: "http://js.pusher.com",
    cdn_https: "https://js.pusher.com",
    dependency_suffix: ""
};
/* harmony default export */ var defaults = (Defaults);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts


var dependency_loader_DependencyLoader = (function () {
    function DependencyLoader(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
    }
    DependencyLoader.prototype.load = function (name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
            self.loading[name].push(callback);
        }
        else {
            self.loading[name] = [callback];
            var request = runtime.createScriptRequest(self.getPath(name, options));
            var receiver = self.receivers.create(function (error) {
                self.receivers.remove(receiver);
                if (self.loading[name]) {
                    var callbacks = self.loading[name];
                    delete self.loading[name];
                    var successCallback = function (wasSuccessful) {
                        if (!wasSuccessful) {
                            request.cleanup();
                        }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                    }
                }
            });
            request.send(receiver);
        }
    };
    DependencyLoader.prototype.getRoot = function (options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if ((options && options.useTLS) || protocol === 'https:') {
            cdn = this.options.cdn_https;
        }
        else {
            cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
    };
    DependencyLoader.prototype.getPath = function (name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
    };
    return DependencyLoader;
}());
/* harmony default export */ var dependency_loader = (dependency_loader_DependencyLoader);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts



var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
var Dependencies = new dependency_loader({
    cdn_http: defaults.cdn_http,
    cdn_https: defaults.cdn_https,
    version: defaults.VERSION,
    suffix: defaults.dependency_suffix,
    receivers: DependenciesReceivers
});

// CONCATENATED MODULE: ./src/core/utils/url_store.ts
var urlStore = {
    baseUrl: 'https://pusher.com',
    urls: {
        authenticationEndpoint: {
            path: '/docs/authenticating_users'
        },
        javascriptQuickStart: {
            path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
            path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
            fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
    }
};
var buildLogSuffix = function (key) {
    var urlPrefix = 'See:';
    var urlObj = urlStore.urls[key];
    if (!urlObj)
        return '';
    var url;
    if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
    }
    else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
    }
    if (!url)
        return '';
    return urlPrefix + " " + url;
};
/* harmony default export */ var url_store = ({ buildLogSuffix: buildLogSuffix });

// CONCATENATED MODULE: ./src/core/errors.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BadEventName = (function (_super) {
    __extends(BadEventName, _super);
    function BadEventName(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return BadEventName;
}(Error));

var RequestTimedOut = (function (_super) {
    __extends(RequestTimedOut, _super);
    function RequestTimedOut(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return RequestTimedOut;
}(Error));

var TransportPriorityTooLow = (function (_super) {
    __extends(TransportPriorityTooLow, _super);
    function TransportPriorityTooLow(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return TransportPriorityTooLow;
}(Error));

var TransportClosed = (function (_super) {
    __extends(TransportClosed, _super);
    function TransportClosed(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return TransportClosed;
}(Error));

var UnsupportedFeature = (function (_super) {
    __extends(UnsupportedFeature, _super);
    function UnsupportedFeature(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedFeature;
}(Error));

var UnsupportedTransport = (function (_super) {
    __extends(UnsupportedTransport, _super);
    function UnsupportedTransport(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedTransport;
}(Error));

var UnsupportedStrategy = (function (_super) {
    __extends(UnsupportedStrategy, _super);
    function UnsupportedStrategy(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedStrategy;
}(Error));

var HTTPAuthError = (function (_super) {
    __extends(HTTPAuthError, _super);
    function HTTPAuthError(status, msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return HTTPAuthError;
}(Error));


// CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts



var ajax = function (context, socketId, callback) {
    var self = this, xhr;
    xhr = runtime.createXHR();
    xhr.open('POST', self.options.authEndpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var headerName in this.authOptions.headers) {
        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = void 0;
                var parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (e) {
                    callback(new HTTPAuthError(200, 'JSON returned from auth endpoint was invalid, yet status code was 200. Data was: ' +
                        xhr.responseText), { auth: '' });
                }
                if (parsed) {
                    callback(null, data);
                }
            }
            else {
                var suffix = url_store.buildLogSuffix('authenticationEndpoint');
                callback(new HTTPAuthError(xhr.status, 'Unable to retrieve auth string from auth endpoint - ' +
                    ("received status: " + xhr.status + " from " + self.options.authEndpoint + ". ") +
                    ("Clients must be authenticated to join private or presence channels. " + suffix)), { auth: '' });
            }
        }
    };
    xhr.send(this.composeQuery(socketId));
    return xhr;
};
/* harmony default export */ var xhr_auth = (ajax);

// CONCATENATED MODULE: ./src/core/base64.ts
function encode(s) {
    return btoa(utob(s));
}
var fromCharCode = String.fromCharCode;
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = {};
for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
    b64tab[b64chars.charAt(base64_i)] = base64_i;
}
var cb_utob = function (c) {
    var cc = c.charCodeAt(0);
    return cc < 0x80
        ? c
        : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                fromCharCode(0x80 | (cc & 0x3f));
};
var utob = function (u) {
    return u.replace(/[^\x00-\x7F]/g, cb_utob);
};
var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3];
    var ord = (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    var chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
    ];
    return chars.join('');
};
var btoa = window.btoa ||
    function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

// CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
var Timer = (function () {
    function Timer(set, clear, delay, callback) {
        var _this = this;
        this.clear = clear;
        this.timer = set(function () {
            if (_this.timer) {
                _this.timer = callback(_this.timer);
            }
        }, delay);
    }
    Timer.prototype.isRunning = function () {
        return this.timer !== null;
    };
    Timer.prototype.ensureAborted = function () {
        if (this.timer) {
            this.clear(this.timer);
            this.timer = null;
        }
    };
    return Timer;
}());
/* harmony default export */ var abstract_timer = (Timer);

// CONCATENATED MODULE: ./src/core/utils/timers/index.ts
var timers_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function timers_clearTimeout(timer) {
    window.clearTimeout(timer);
}
function timers_clearInterval(timer) {
    window.clearInterval(timer);
}
var OneOffTimer = (function (_super) {
    timers_extends(OneOffTimer, _super);
    function OneOffTimer(delay, callback) {
        return _super.call(this, setTimeout, timers_clearTimeout, delay, function (timer) {
            callback();
            return null;
        }) || this;
    }
    return OneOffTimer;
}(abstract_timer));

var PeriodicTimer = (function (_super) {
    timers_extends(PeriodicTimer, _super);
    function PeriodicTimer(delay, callback) {
        return _super.call(this, setInterval, timers_clearInterval, delay, function (timer) {
            callback();
            return timer;
        }) || this;
    }
    return PeriodicTimer;
}(abstract_timer));


// CONCATENATED MODULE: ./src/core/util.ts

var Util = {
    now: function () {
        if (Date.now) {
            return Date.now();
        }
        else {
            return new Date().valueOf();
        }
    },
    defer: function (callback) {
        return new OneOffTimer(0, callback);
    },
    method: function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
            return object[name].apply(object, boundArguments.concat(arguments));
        };
    }
};
/* harmony default export */ var util = (Util);

// CONCATENATED MODULE: ./src/core/utils/collections.ts


function extend(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
            if (extensions[property] &&
                extensions[property].constructor &&
                extensions[property].constructor === Object) {
                target[property] = extend(target[property] || {}, extensions[property]);
            }
            else {
                target[property] = extensions[property];
            }
        }
    }
    return target;
}
function stringify() {
    var m = ['Pusher'];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(arguments[i]);
        }
        else {
            m.push(safeJSONStringify(arguments[i]));
        }
    }
    return m.join(' : ');
}
function arrayIndexOf(array, item) {
    var nativeIndexOf = Array.prototype.indexOf;
    if (array === null) {
        return -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
function objectApply(object, f) {
    for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            f(object[key], key, object);
        }
    }
}
function keys(object) {
    var keys = [];
    objectApply(object, function (_, key) {
        keys.push(key);
    });
    return keys;
}
function values(object) {
    var values = [];
    objectApply(object, function (value) {
        values.push(value);
    });
    return values;
}
function apply(array, f, context) {
    for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
    }
}
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
    }
    return result;
}
function mapObject(object, f) {
    var result = {};
    objectApply(object, function (value, key) {
        result[key] = f(value);
    });
    return result;
}
function filter(array, test) {
    test =
        test ||
            function (value) {
                return !!value;
            };
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
            result.push(array[i]);
        }
    }
    return result;
}
function filterObject(object, test) {
    var result = {};
    objectApply(object, function (value, key) {
        if ((test && test(value, key, object, result)) || Boolean(value)) {
            result[key] = value;
        }
    });
    return result;
}
function flatten(object) {
    var result = [];
    objectApply(object, function (value, key) {
        result.push([key, value]);
    });
    return result;
}
function any(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function collections_all(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
function encodeParamsObject(data) {
    return mapObject(data, function (value) {
        if (typeof value === 'object') {
            value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
    });
}
function buildQueryString(data) {
    var params = filterObject(data, function (value) {
        return value !== undefined;
    });
    var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
    return query;
}
function decycleObject(object) {
    var objects = [], paths = [];
    return (function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }
                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return { $ref: paths[i] };
                    }
                }
                objects.push(value);
                paths.push(path);
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                }
                else {
                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    })(object, '$');
}
function safeJSONStringify(source) {
    try {
        return JSON.stringify(source);
    }
    catch (e) {
        return JSON.stringify(decycleObject(source));
    }
}

// CONCATENATED MODULE: ./src/core/logger.ts


var logger_Logger = (function () {
    function Logger() {
        this.globalLog = function (message) {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };
    }
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLog, args);
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLogWarn, args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLogError, args);
    };
    Logger.prototype.globalLogWarn = function (message) {
        if (window.console && window.console.warn) {
            window.console.warn(message);
        }
        else {
            this.globalLog(message);
        }
    };
    Logger.prototype.globalLogError = function (message) {
        if (window.console && window.console.error) {
            window.console.error(message);
        }
        else {
            this.globalLogWarn(message);
        }
    };
    Logger.prototype.log = function (defaultLoggingFunction) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
            core_pusher.log(message);
        }
        else if (core_pusher.logToConsole) {
            var log = defaultLoggingFunction.bind(this);
            log(message);
        }
    };
    return Logger;
}());
/* harmony default export */ var logger = (new logger_Logger());

// CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

var jsonp = function (context, socketId, callback) {
    if (this.authOptions.headers !== undefined) {
        logger.warn('To send headers with the auth request, you must use AJAX, rather than JSONP.');
    }
    var callbackName = context.nextAuthCallbackID.toString();
    context.nextAuthCallbackID++;
    var document = context.getDocument();
    var script = document.createElement('script');
    context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
    };
    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
    script.src =
        this.options.authEndpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            this.composeQuery(socketId);
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};
/* harmony default export */ var jsonp_auth = (jsonp);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
var ScriptRequest = (function () {
    function ScriptRequest(src) {
        this.src = src;
    }
    ScriptRequest.prototype.send = function (receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
            self.script.onerror = function () {
                receiver.callback(errorString);
            };
            self.script.onload = function () {
                receiver.callback(null);
            };
        }
        else {
            self.script.onreadystatechange = function () {
                if (self.script.readyState === 'loaded' ||
                    self.script.readyState === 'complete') {
                    receiver.callback(null);
                }
            };
        }
        if (self.script.async === undefined &&
            document.attachEvent &&
            /opera/i.test(navigator.userAgent)) {
            self.errorScript = document.createElement('script');
            self.errorScript.id = receiver.id + '_error';
            self.errorScript.text = receiver.name + "('" + errorString + "');";
            self.script.async = self.errorScript.async = false;
        }
        else {
            self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
            head.insertBefore(self.errorScript, self.script.nextSibling);
        }
    };
    ScriptRequest.prototype.cleanup = function () {
        if (this.script) {
            this.script.onload = this.script.onerror = null;
            this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
            this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
    };
    return ScriptRequest;
}());
/* harmony default export */ var script_request = (ScriptRequest);

// CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts


var jsonp_request_JSONPRequest = (function () {
    function JSONPRequest(url, data) {
        this.url = url;
        this.data = data;
    }
    JSONPRequest.prototype.send = function (receiver) {
        if (this.request) {
            return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
    };
    JSONPRequest.prototype.cleanup = function () {
        if (this.request) {
            this.request.cleanup();
        }
    };
    return JSONPRequest;
}());
/* harmony default export */ var jsonp_request = (jsonp_request_JSONPRequest);

// CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts


var getAgent = function (sender, useTLS) {
    return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
            ScriptReceivers.remove(receiver);
            request.cleanup();
            if (result && result.host) {
                sender.host = result.host;
            }
            if (callback) {
                callback(error, result);
            }
        });
        request.send(receiver);
    };
};
var jsonp_timeline_jsonp = {
    name: 'jsonp',
    getAgent: getAgent
};
/* harmony default export */ var jsonp_timeline = (jsonp_timeline_jsonp);

// CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

function getGenericURL(baseScheme, params, path) {
    var scheme = baseScheme + (params.useTLS ? 's' : '');
    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
    return scheme + '://' + host + path;
}
function getGenericPath(key, queryString) {
    var path = '/app/' + key;
    var query = '?protocol=' +
        defaults.PROTOCOL +
        '&client=js' +
        '&version=' +
        defaults.VERSION +
        (queryString ? '&' + queryString : '');
    return path + query;
}
var ws = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
    }
};
var http = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
    }
};
var sockjs = {
    getInitial: function (key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
    },
    getPath: function (key, params) {
        return getGenericPath(key);
    }
};

// CONCATENATED MODULE: ./src/core/events/callback_registry.ts

var callback_registry_CallbackRegistry = (function () {
    function CallbackRegistry() {
        this._callbacks = {};
    }
    CallbackRegistry.prototype.get = function (name) {
        return this._callbacks[prefix(name)];
    };
    CallbackRegistry.prototype.add = function (name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] =
            this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    };
    CallbackRegistry.prototype.remove = function (name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
            this.removeCallback(names, callback, context);
        }
        else {
            this.removeAllCallbacks(names);
        }
    };
    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
        apply(names, function (name) {
            this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
                return ((callback && callback !== binding.fn) ||
                    (context && context !== binding.context));
            });
            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }, this);
    };
    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
        apply(names, function (name) {
            delete this._callbacks[name];
        }, this);
    };
    return CallbackRegistry;
}());
/* harmony default export */ var callback_registry = (callback_registry_CallbackRegistry);
function prefix(name) {
    return '_' + name;
}

// CONCATENATED MODULE: ./src/core/events/dispatcher.ts


var dispatcher_Dispatcher = (function () {
    function Dispatcher(failThrough) {
        this.callbacks = new callback_registry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
    }
    Dispatcher.prototype.bind = function (eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    };
    Dispatcher.prototype.bind_global = function (callback) {
        this.global_callbacks.push(callback);
        return this;
    };
    Dispatcher.prototype.unbind = function (eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    };
    Dispatcher.prototype.unbind_global = function (callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], function (c) { return c !== callback; });
        return this;
    };
    Dispatcher.prototype.unbind_all = function () {
        this.unbind();
        this.unbind_global();
        return this;
    };
    Dispatcher.prototype.emit = function (eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
            args.push(data, metadata);
        }
        else if (data) {
            args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.apply(callbacks[i].context || window, args);
            }
        }
        else if (this.failThrough) {
            this.failThrough(eventName, data);
        }
        return this;
    };
    return Dispatcher;
}());
/* harmony default export */ var dispatcher = (dispatcher_Dispatcher);

// CONCATENATED MODULE: ./src/core/transports/transport_connection.ts
var transport_connection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var transport_connection_TransportConnection = (function (_super) {
    transport_connection_extends(TransportConnection, _super);
    function TransportConnection(hooks, name, priority, key, options) {
        var _this = _super.call(this) || this;
        _this.initialize = runtime.transportConnectionInitializer;
        _this.hooks = hooks;
        _this.name = name;
        _this.priority = priority;
        _this.key = key;
        _this.options = options;
        _this.state = 'new';
        _this.timeline = options.timeline;
        _this.activityTimeout = options.activityTimeout;
        _this.id = _this.timeline.generateUniqueID();
        return _this;
    }
    TransportConnection.prototype.handlesActivityChecks = function () {
        return Boolean(this.hooks.handlesActivityChecks);
    };
    TransportConnection.prototype.supportsPing = function () {
        return Boolean(this.hooks.supportsPing);
    };
    TransportConnection.prototype.connect = function () {
        var _this = this;
        if (this.socket || this.state !== 'initialized') {
            return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
            this.socket = this.hooks.getSocket(url, this.options);
        }
        catch (e) {
            util.defer(function () {
                _this.onError(e);
                _this.changeState('closed');
            });
            return false;
        }
        this.bindListeners();
        logger.debug('Connecting', { transport: this.name, url: url });
        this.changeState('connecting');
        return true;
    };
    TransportConnection.prototype.close = function () {
        if (this.socket) {
            this.socket.close();
            return true;
        }
        else {
            return false;
        }
    };
    TransportConnection.prototype.send = function (data) {
        var _this = this;
        if (this.state === 'open') {
            util.defer(function () {
                if (_this.socket) {
                    _this.socket.send(data);
                }
            });
            return true;
        }
        else {
            return false;
        }
    };
    TransportConnection.prototype.ping = function () {
        if (this.state === 'open' && this.supportsPing()) {
            this.socket.ping();
        }
    };
    TransportConnection.prototype.onOpen = function () {
        if (this.hooks.beforeOpen) {
            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
    };
    TransportConnection.prototype.onError = function (error) {
        this.emit('error', { type: 'WebSocketError', error: error });
        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
    };
    TransportConnection.prototype.onClose = function (closeEvent) {
        if (closeEvent) {
            this.changeState('closed', {
                code: closeEvent.code,
                reason: closeEvent.reason,
                wasClean: closeEvent.wasClean
            });
        }
        else {
            this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
    };
    TransportConnection.prototype.onMessage = function (message) {
        this.emit('message', message);
    };
    TransportConnection.prototype.onActivity = function () {
        this.emit('activity');
    };
    TransportConnection.prototype.bindListeners = function () {
        var _this = this;
        this.socket.onopen = function () {
            _this.onOpen();
        };
        this.socket.onerror = function (error) {
            _this.onError(error);
        };
        this.socket.onclose = function (closeEvent) {
            _this.onClose(closeEvent);
        };
        this.socket.onmessage = function (message) {
            _this.onMessage(message);
        };
        if (this.supportsPing()) {
            this.socket.onactivity = function () {
                _this.onActivity();
            };
        }
    };
    TransportConnection.prototype.unbindListeners = function () {
        if (this.socket) {
            this.socket.onopen = undefined;
            this.socket.onerror = undefined;
            this.socket.onclose = undefined;
            this.socket.onmessage = undefined;
            if (this.supportsPing()) {
                this.socket.onactivity = undefined;
            }
        }
    };
    TransportConnection.prototype.changeState = function (state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
            state: state,
            params: params
        }));
        this.emit(state, params);
    };
    TransportConnection.prototype.buildTimelineMessage = function (message) {
        return extend({ cid: this.id }, message);
    };
    return TransportConnection;
}(dispatcher));
/* harmony default export */ var transport_connection = (transport_connection_TransportConnection);

// CONCATENATED MODULE: ./src/core/transports/transport.ts

var transport_Transport = (function () {
    function Transport(hooks) {
        this.hooks = hooks;
    }
    Transport.prototype.isSupported = function (environment) {
        return this.hooks.isSupported(environment);
    };
    Transport.prototype.createConnection = function (name, priority, key, options) {
        return new transport_connection(this.hooks, name, priority, key, options);
    };
    return Transport;
}());
/* harmony default export */ var transports_transport = (transport_Transport);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts




var WSTransport = new transports_transport({
    urls: ws,
    handlesActivityChecks: false,
    supportsPing: false,
    isInitialized: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    isSupported: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    getSocket: function (url) {
        return runtime.createWebSocket(url);
    }
});
var httpConfiguration = {
    urls: http,
    handlesActivityChecks: false,
    supportsPing: true,
    isInitialized: function () {
        return true;
    }
};
var streamingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
    }
}, httpConfiguration);
var pollingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createPollingSocket(url);
    }
}, httpConfiguration);
var xhrConfiguration = {
    isSupported: function () {
        return runtime.isXHRSupported();
    }
};
var XHRStreamingTransport = new transports_transport((extend({}, streamingConfiguration, xhrConfiguration)));
var XHRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xhrConfiguration));
var Transports = {
    ws: WSTransport,
    xhr_streaming: XHRStreamingTransport,
    xhr_polling: XHRPollingTransport
};
/* harmony default export */ var transports = (Transports);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts






var SockJSTransport = new transports_transport({
    file: 'sockjs',
    urls: sockjs,
    handlesActivityChecks: true,
    supportsPing: false,
    isSupported: function () {
        return true;
    },
    isInitialized: function () {
        return window.SockJS !== undefined;
    },
    getSocket: function (url, options) {
        return new window.SockJS(url, null, {
            js_path: Dependencies.getPath('sockjs', {
                useTLS: options.useTLS
            }),
            ignore_null_origin: options.ignoreNullOrigin
        });
    },
    beforeOpen: function (socket, path) {
        socket.send(JSON.stringify({
            path: path
        }));
    }
});
var xdrConfiguration = {
    isSupported: function (environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
    }
};
var XDRStreamingTransport = new transports_transport((extend({}, streamingConfiguration, xdrConfiguration)));
var XDRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xdrConfiguration));
transports.xdr_streaming = XDRStreamingTransport;
transports.xdr_polling = XDRPollingTransport;
transports.sockjs = SockJSTransport;
/* harmony default export */ var transports_transports = (transports);

// CONCATENATED MODULE: ./src/runtimes/web/net_info.ts
var net_info_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NetInfo = (function (_super) {
    net_info_extends(NetInfo, _super);
    function NetInfo() {
        var _this = _super.call(this) || this;
        var self = _this;
        if (window.addEventListener !== undefined) {
            window.addEventListener('online', function () {
                self.emit('online');
            }, false);
            window.addEventListener('offline', function () {
                self.emit('offline');
            }, false);
        }
        return _this;
    }
    NetInfo.prototype.isOnline = function () {
        if (window.navigator.onLine === undefined) {
            return true;
        }
        else {
            return window.navigator.onLine;
        }
    };
    return NetInfo;
}(dispatcher));

var net_info_Network = new NetInfo();

// CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts


var assistant_to_the_transport_manager_AssistantToTheTransportManager = (function () {
    function AssistantToTheTransportManager(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
    }
    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
        var _this = this;
        options = extend({}, options, {
            activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function () {
            connection.unbind('open', onOpen);
            connection.bind('closed', onClosed);
            openTimestamp = util.now();
        };
        var onClosed = function (closeEvent) {
            connection.unbind('closed', onClosed);
            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                _this.manager.reportDeath();
            }
            else if (!closeEvent.wasClean && openTimestamp) {
                var lifespan = util.now() - openTimestamp;
                if (lifespan < 2 * _this.maxPingDelay) {
                    _this.manager.reportDeath();
                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                }
            }
        };
        connection.bind('open', onOpen);
        return connection;
    };
    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
    };
    return AssistantToTheTransportManager;
}());
/* harmony default export */ var assistant_to_the_transport_manager = (assistant_to_the_transport_manager_AssistantToTheTransportManager);

// CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
var Protocol = {
    decodeMessage: function (messageEvent) {
        try {
            var messageData = JSON.parse(messageEvent.data);
            var pusherEventData = messageData.data;
            if (typeof pusherEventData === 'string') {
                try {
                    pusherEventData = JSON.parse(messageData.data);
                }
                catch (e) { }
            }
            var pusherEvent = {
                event: messageData.event,
                channel: messageData.channel,
                data: pusherEventData
            };
            if (messageData.user_id) {
                pusherEvent.user_id = messageData.user_id;
            }
            return pusherEvent;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: messageEvent.data };
        }
    },
    encodeMessage: function (event) {
        return JSON.stringify(event);
    },
    processHandshake: function (messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
            if (!message.data.activity_timeout) {
                throw 'No activity timeout specified in handshake';
            }
            return {
                action: 'connected',
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === 'pusher:error') {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw 'Invalid handshake';
        }
    },
    getCloseAction: function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return 'backoff';
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return 'tls_only';
        }
        else if (closeEvent.code < 4100) {
            return 'refused';
        }
        else if (closeEvent.code < 4200) {
            return 'backoff';
        }
        else if (closeEvent.code < 4300) {
            return 'retry';
        }
        else {
            return 'refused';
        }
    },
    getCloseError: function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    }
};
/* harmony default export */ var protocol_protocol = (Protocol);

// CONCATENATED MODULE: ./src/core/connection/connection.ts
var connection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var connection_Connection = (function (_super) {
    connection_extends(Connection, _super);
    function Connection(id, transport) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.transport = transport;
        _this.activityTimeout = transport.activityTimeout;
        _this.bindListeners();
        return _this;
    }
    Connection.prototype.handlesActivityChecks = function () {
        return this.transport.handlesActivityChecks();
    };
    Connection.prototype.send = function (data) {
        return this.transport.send(data);
    };
    Connection.prototype.send_event = function (name, data, channel) {
        var event = { event: name, data: data };
        if (channel) {
            event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
    };
    Connection.prototype.ping = function () {
        if (this.transport.supportsPing()) {
            this.transport.ping();
        }
        else {
            this.send_event('pusher:ping', {});
        }
    };
    Connection.prototype.close = function () {
        this.transport.close();
    };
    Connection.prototype.bindListeners = function () {
        var _this = this;
        var listeners = {
            message: function (messageEvent) {
                var pusherEvent;
                try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                }
                catch (e) {
                    _this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    });
                }
                if (pusherEvent !== undefined) {
                    logger.debug('Event recd', pusherEvent);
                    switch (pusherEvent.event) {
                        case 'pusher:error':
                            _this.emit('error', {
                                type: 'PusherError',
                                data: pusherEvent.data
                            });
                            break;
                        case 'pusher:ping':
                            _this.emit('ping');
                            break;
                        case 'pusher:pong':
                            _this.emit('pong');
                            break;
                    }
                    _this.emit('message', pusherEvent);
                }
            },
            activity: function () {
                _this.emit('activity');
            },
            error: function (error) {
                _this.emit('error', error);
            },
            closed: function (closeEvent) {
                unbindListeners();
                if (closeEvent && closeEvent.code) {
                    _this.handleCloseEvent(closeEvent);
                }
                _this.transport = null;
                _this.emit('closed');
            }
        };
        var unbindListeners = function () {
            objectApply(listeners, function (listener, event) {
                _this.transport.unbind(event, listener);
            });
        };
        objectApply(listeners, function (listener, event) {
            _this.transport.bind(event, listener);
        });
    };
    Connection.prototype.handleCloseEvent = function (closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
            this.emit('error', error);
        }
        if (action) {
            this.emit(action, { action: action, error: error });
        }
    };
    return Connection;
}(dispatcher));
/* harmony default export */ var connection_connection = (connection_Connection);

// CONCATENATED MODULE: ./src/core/connection/handshake/index.ts



var handshake_Handshake = (function () {
    function Handshake(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
    }
    Handshake.prototype.close = function () {
        this.unbindListeners();
        this.transport.close();
    };
    Handshake.prototype.bindListeners = function () {
        var _this = this;
        this.onMessage = function (m) {
            _this.unbindListeners();
            var result;
            try {
                result = protocol_protocol.processHandshake(m);
            }
            catch (e) {
                _this.finish('error', { error: e });
                _this.transport.close();
                return;
            }
            if (result.action === 'connected') {
                _this.finish('connected', {
                    connection: new connection_connection(result.id, _this.transport),
                    activityTimeout: result.activityTimeout
                });
            }
            else {
                _this.finish(result.action, { error: result.error });
                _this.transport.close();
            }
        };
        this.onClosed = function (closeEvent) {
            _this.unbindListeners();
            var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
            var error = protocol_protocol.getCloseError(closeEvent);
            _this.finish(action, { error: error });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
    };
    Handshake.prototype.unbindListeners = function () {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
    };
    Handshake.prototype.finish = function (action, params) {
        this.callback(extend({ transport: this.transport, action: action }, params));
    };
    return Handshake;
}());
/* harmony default export */ var connection_handshake = (handshake_Handshake);

// CONCATENATED MODULE: ./src/core/auth/pusher_authorizer.ts

var pusher_authorizer_PusherAuthorizer = (function () {
    function PusherAuthorizer(channel, options) {
        this.channel = channel;
        var authTransport = options.authTransport;
        if (typeof runtime.getAuthorizers()[authTransport] === 'undefined') {
            throw "'" + authTransport + "' is not a recognized auth transport";
        }
        this.type = authTransport;
        this.options = options;
        this.authOptions = options.auth || {};
    }
    PusherAuthorizer.prototype.composeQuery = function (socketId) {
        var query = 'socket_id=' +
            encodeURIComponent(socketId) +
            '&channel_name=' +
            encodeURIComponent(this.channel.name);
        for (var i in this.authOptions.params) {
            query +=
                '&' +
                    encodeURIComponent(i) +
                    '=' +
                    encodeURIComponent(this.authOptions.params[i]);
        }
        return query;
    };
    PusherAuthorizer.prototype.authorize = function (socketId, callback) {
        PusherAuthorizer.authorizers =
            PusherAuthorizer.authorizers || runtime.getAuthorizers();
        PusherAuthorizer.authorizers[this.type].call(this, runtime, socketId, callback);
    };
    return PusherAuthorizer;
}());
/* harmony default export */ var pusher_authorizer = (pusher_authorizer_PusherAuthorizer);

// CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

var timeline_sender_TimelineSender = (function () {
    function TimelineSender(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
    }
    TimelineSender.prototype.send = function (useTLS, callback) {
        if (this.timeline.isEmpty()) {
            return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
    };
    return TimelineSender;
}());
/* harmony default export */ var timeline_sender = (timeline_sender_TimelineSender);

// CONCATENATED MODULE: ./src/core/channels/channel.ts
var channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var channel_Channel = (function (_super) {
    channel_extends(Channel, _super);
    function Channel(name, pusher) {
        var _this = _super.call(this, function (event, data) {
            logger.debug('No callbacks on ' + name + ' for ' + event);
        }) || this;
        _this.name = name;
        _this.pusher = pusher;
        _this.subscribed = false;
        _this.subscriptionPending = false;
        _this.subscriptionCancelled = false;
        return _this;
    }
    Channel.prototype.authorize = function (socketId, callback) {
        return callback(null, { auth: '' });
    };
    Channel.prototype.trigger = function (event, data) {
        if (event.indexOf('client-') !== 0) {
            throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
            var suffix = url_store.buildLogSuffix('triggeringClientEvents');
            logger.warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
        }
        return this.pusher.send_event(event, data, this.name);
    };
    Channel.prototype.disconnect = function () {
        this.subscribed = false;
        this.subscriptionPending = false;
    };
    Channel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
            this.handleSubscriptionSucceededEvent(event);
        }
        else if (eventName.indexOf('pusher_internal:') !== 0) {
            var metadata = {};
            this.emit(eventName, data, metadata);
        }
    };
    Channel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.emit('pusher:subscription_succeeded', event.data);
        }
    };
    Channel.prototype.subscribe = function () {
        var _this = this;
        if (this.subscribed) {
            return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, function (error, data) {
            if (error) {
                _this.subscriptionPending = false;
                logger.error(error.toString());
                _this.emit('pusher:subscription_error', Object.assign({}, {
                    type: 'AuthError',
                    error: error.message
                }, error instanceof HTTPAuthError ? { status: error.status } : {}));
            }
            else {
                _this.pusher.send_event('pusher:subscribe', {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: _this.name
                });
            }
        });
    };
    Channel.prototype.unsubscribe = function () {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
            channel: this.name
        });
    };
    Channel.prototype.cancelSubscription = function () {
        this.subscriptionCancelled = true;
    };
    Channel.prototype.reinstateSubscription = function () {
        this.subscriptionCancelled = false;
    };
    return Channel;
}(dispatcher));
/* harmony default export */ var channels_channel = (channel_Channel);

// CONCATENATED MODULE: ./src/core/channels/private_channel.ts
var private_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var private_channel_PrivateChannel = (function (_super) {
    private_channel_extends(PrivateChannel, _super);
    function PrivateChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivateChannel.prototype.authorize = function (socketId, callback) {
        var authorizer = factory.createAuthorizer(this, this.pusher.config);
        return authorizer.authorize(socketId, callback);
    };
    return PrivateChannel;
}(channels_channel));
/* harmony default export */ var private_channel = (private_channel_PrivateChannel);

// CONCATENATED MODULE: ./src/core/channels/members.ts

var members_Members = (function () {
    function Members() {
        this.reset();
    }
    Members.prototype.get = function (id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
            return {
                id: id,
                info: this.members[id]
            };
        }
        else {
            return null;
        }
    };
    Members.prototype.each = function (callback) {
        var _this = this;
        objectApply(this.members, function (member, id) {
            callback(_this.get(id));
        });
    };
    Members.prototype.setMyID = function (id) {
        this.myID = id;
    };
    Members.prototype.onSubscription = function (subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
    };
    Members.prototype.addMember = function (memberData) {
        if (this.get(memberData.user_id) === null) {
            this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
    };
    Members.prototype.removeMember = function (memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
            delete this.members[memberData.user_id];
            this.count--;
        }
        return member;
    };
    Members.prototype.reset = function () {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
    };
    return Members;
}());
/* harmony default export */ var members = (members_Members);

// CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
var presence_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var presence_channel_PresenceChannel = (function (_super) {
    presence_channel_extends(PresenceChannel, _super);
    function PresenceChannel(name, pusher) {
        var _this = _super.call(this, name, pusher) || this;
        _this.members = new members();
        return _this;
    }
    PresenceChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
            if (!error) {
                authData = authData;
                if (authData.channel_data === undefined) {
                    var suffix = url_store.buildLogSuffix('authenticationEndpoint');
                    logger.error("Invalid auth response for channel '" + _this.name + "'," +
                        ("expected 'channel_data' field. " + suffix));
                    callback('Invalid auth response');
                    return;
                }
                var channelData = JSON.parse(authData.channel_data);
                _this.members.setMyID(channelData.user_id);
            }
            callback(error, authData);
        });
    };
    PresenceChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
            this.handleInternalEvent(event);
        }
        else {
            var data = event.data;
            var metadata = {};
            if (event.user_id) {
                metadata.user_id = event.user_id;
            }
            this.emit(eventName, data, metadata);
        }
    };
    PresenceChannel.prototype.handleInternalEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
            case 'pusher_internal:subscription_succeeded':
                this.handleSubscriptionSucceededEvent(event);
                break;
            case 'pusher_internal:member_added':
                var addedMember = this.members.addMember(data);
                this.emit('pusher:member_added', addedMember);
                break;
            case 'pusher_internal:member_removed':
                var removedMember = this.members.removeMember(data);
                if (removedMember) {
                    this.emit('pusher:member_removed', removedMember);
                }
                break;
        }
    };
    PresenceChannel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.members.onSubscription(event.data);
            this.emit('pusher:subscription_succeeded', this.members);
        }
    };
    PresenceChannel.prototype.disconnect = function () {
        this.members.reset();
        _super.prototype.disconnect.call(this);
    };
    return PresenceChannel;
}(private_channel));
/* harmony default export */ var presence_channel = (presence_channel_PresenceChannel);

// EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
var utf8 = __nested_webpack_require_20171__(1);

// EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
var base64 = __nested_webpack_require_20171__(0);

// CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts
var encrypted_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var encrypted_channel_EncryptedChannel = (function (_super) {
    encrypted_channel_extends(EncryptedChannel, _super);
    function EncryptedChannel(name, pusher, nacl) {
        var _this = _super.call(this, name, pusher) || this;
        _this.key = null;
        _this.nacl = nacl;
        return _this;
    }
    EncryptedChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
            if (error) {
                callback(error, authData);
                return;
            }
            var sharedSecret = authData['shared_secret'];
            if (!sharedSecret) {
                callback(new Error("No shared_secret key in auth payload for encrypted channel: " + _this.name), null);
                return;
            }
            _this.key = Object(base64["decode"])(sharedSecret);
            delete authData['shared_secret'];
            callback(null, authData);
        });
    };
    EncryptedChannel.prototype.trigger = function (event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
    };
    EncryptedChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 ||
            eventName.indexOf('pusher:') === 0) {
            _super.prototype.handleEvent.call(this, event);
            return;
        }
        this.handleEncryptedEvent(eventName, data);
    };
    EncryptedChannel.prototype.handleEncryptedEvent = function (event, data) {
        var _this = this;
        if (!this.key) {
            logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
            return;
        }
        if (!data.ciphertext || !data.nonce) {
            logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                data);
            return;
        }
        var cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
            logger.error("Expected encrypted event ciphertext length to be " + this.nacl.secretbox.overheadLength + ", got: " + cipherText.length);
            return;
        }
        var nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
            logger.error("Expected encrypted event nonce length to be " + this.nacl.secretbox.nonceLength + ", got: " + nonce.length);
            return;
        }
        var bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
            logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
            this.authorize(this.pusher.connection.socket_id, function (error, authData) {
                if (error) {
                    logger.error("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
                    return;
                }
                bytes = _this.nacl.secretbox.open(cipherText, nonce, _this.key);
                if (bytes === null) {
                    logger.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                }
                _this.emit(event, _this.getDataToEmit(bytes));
                return;
            });
            return;
        }
        this.emit(event, this.getDataToEmit(bytes));
    };
    EncryptedChannel.prototype.getDataToEmit = function (bytes) {
        var raw = Object(utf8["decode"])(bytes);
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return raw;
        }
    };
    return EncryptedChannel;
}(private_channel));
/* harmony default export */ var encrypted_channel = (encrypted_channel_EncryptedChannel);

// CONCATENATED MODULE: ./src/core/connection/connection_manager.ts
var connection_manager_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var connection_manager_ConnectionManager = (function (_super) {
    connection_manager_extends(ConnectionManager, _super);
    function ConnectionManager(key, options) {
        var _this = _super.call(this) || this;
        _this.state = 'initialized';
        _this.connection = null;
        _this.key = key;
        _this.options = options;
        _this.timeline = _this.options.timeline;
        _this.usingTLS = _this.options.useTLS;
        _this.errorCallbacks = _this.buildErrorCallbacks();
        _this.connectionCallbacks = _this.buildConnectionCallbacks(_this.errorCallbacks);
        _this.handshakeCallbacks = _this.buildHandshakeCallbacks(_this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', function () {
            _this.timeline.info({ netinfo: 'online' });
            if (_this.state === 'connecting' || _this.state === 'unavailable') {
                _this.retryIn(0);
            }
        });
        Network.bind('offline', function () {
            _this.timeline.info({ netinfo: 'offline' });
            if (_this.connection) {
                _this.sendActivityCheck();
            }
        });
        _this.updateStrategy();
        return _this;
    }
    ConnectionManager.prototype.connect = function () {
        if (this.connection || this.runner) {
            return;
        }
        if (!this.strategy.isSupported()) {
            this.updateState('failed');
            return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
    };
    ConnectionManager.prototype.send = function (data) {
        if (this.connection) {
            return this.connection.send(data);
        }
        else {
            return false;
        }
    };
    ConnectionManager.prototype.send_event = function (name, data, channel) {
        if (this.connection) {
            return this.connection.send_event(name, data, channel);
        }
        else {
            return false;
        }
    };
    ConnectionManager.prototype.disconnect = function () {
        this.disconnectInternally();
        this.updateState('disconnected');
    };
    ConnectionManager.prototype.isUsingTLS = function () {
        return this.usingTLS;
    };
    ConnectionManager.prototype.startConnecting = function () {
        var _this = this;
        var callback = function (error, handshake) {
            if (error) {
                _this.runner = _this.strategy.connect(0, callback);
            }
            else {
                if (handshake.action === 'error') {
                    _this.emit('error', {
                        type: 'HandshakeError',
                        error: handshake.error
                    });
                    _this.timeline.error({ handshakeError: handshake.error });
                }
                else {
                    _this.abortConnecting();
                    _this.handshakeCallbacks[handshake.action](handshake);
                }
            }
        };
        this.runner = this.strategy.connect(0, callback);
    };
    ConnectionManager.prototype.abortConnecting = function () {
        if (this.runner) {
            this.runner.abort();
            this.runner = null;
        }
    };
    ConnectionManager.prototype.disconnectInternally = function () {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
            var connection = this.abandonConnection();
            connection.close();
        }
    };
    ConnectionManager.prototype.updateStrategy = function () {
        this.strategy = this.options.getStrategy({
            key: this.key,
            timeline: this.timeline,
            useTLS: this.usingTLS
        });
    };
    ConnectionManager.prototype.retryIn = function (delay) {
        var _this = this;
        this.timeline.info({ action: 'retry', delay: delay });
        if (delay > 0) {
            this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new OneOffTimer(delay || 0, function () {
            _this.disconnectInternally();
            _this.connect();
        });
    };
    ConnectionManager.prototype.clearRetryTimer = function () {
        if (this.retryTimer) {
            this.retryTimer.ensureAborted();
            this.retryTimer = null;
        }
    };
    ConnectionManager.prototype.setUnavailableTimer = function () {
        var _this = this;
        this.unavailableTimer = new OneOffTimer(this.options.unavailableTimeout, function () {
            _this.updateState('unavailable');
        });
    };
    ConnectionManager.prototype.clearUnavailableTimer = function () {
        if (this.unavailableTimer) {
            this.unavailableTimer.ensureAborted();
        }
    };
    ConnectionManager.prototype.sendActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new OneOffTimer(this.options.pongTimeout, function () {
            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
            _this.retryIn(0);
        });
    };
    ConnectionManager.prototype.resetActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
            this.activityTimer = new OneOffTimer(this.activityTimeout, function () {
                _this.sendActivityCheck();
            });
        }
    };
    ConnectionManager.prototype.stopActivityCheck = function () {
        if (this.activityTimer) {
            this.activityTimer.ensureAborted();
        }
    };
    ConnectionManager.prototype.buildConnectionCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
            message: function (message) {
                _this.resetActivityCheck();
                _this.emit('message', message);
            },
            ping: function () {
                _this.send_event('pusher:pong', {});
            },
            activity: function () {
                _this.resetActivityCheck();
            },
            error: function (error) {
                _this.emit('error', error);
            },
            closed: function () {
                _this.abandonConnection();
                if (_this.shouldRetry()) {
                    _this.retryIn(1000);
                }
            }
        });
    };
    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
            connected: function (handshake) {
                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                _this.clearUnavailableTimer();
                _this.setConnection(handshake.connection);
                _this.socket_id = _this.connection.id;
                _this.updateState('connected', { socket_id: _this.socket_id });
            }
        });
    };
    ConnectionManager.prototype.buildErrorCallbacks = function () {
        var _this = this;
        var withErrorEmitted = function (callback) {
            return function (result) {
                if (result.error) {
                    _this.emit('error', { type: 'WebSocketError', error: result.error });
                }
                callback(result);
            };
        };
        return {
            tls_only: withErrorEmitted(function () {
                _this.usingTLS = true;
                _this.updateStrategy();
                _this.retryIn(0);
            }),
            refused: withErrorEmitted(function () {
                _this.disconnect();
            }),
            backoff: withErrorEmitted(function () {
                _this.retryIn(1000);
            }),
            retry: withErrorEmitted(function () {
                _this.retryIn(0);
            })
        };
    };
    ConnectionManager.prototype.setConnection = function (connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
            this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
    };
    ConnectionManager.prototype.abandonConnection = function () {
        if (!this.connection) {
            return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
            this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
    };
    ConnectionManager.prototype.updateState = function (newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
            var newStateDescription = newState;
            if (newStateDescription === 'connected') {
                newStateDescription += ' with new socket ID ' + data.socket_id;
            }
            logger.debug('State changed', previousState + ' -> ' + newStateDescription);
            this.timeline.info({ state: newState, params: data });
            this.emit('state_change', { previous: previousState, current: newState });
            this.emit(newState, data);
        }
    };
    ConnectionManager.prototype.shouldRetry = function () {
        return this.state === 'connecting' || this.state === 'connected';
    };
    return ConnectionManager;
}(dispatcher));
/* harmony default export */ var connection_manager = (connection_manager_ConnectionManager);

// CONCATENATED MODULE: ./src/core/channels/channels.ts




var channels_Channels = (function () {
    function Channels() {
        this.channels = {};
    }
    Channels.prototype.add = function (name, pusher) {
        if (!this.channels[name]) {
            this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
    };
    Channels.prototype.all = function () {
        return values(this.channels);
    };
    Channels.prototype.find = function (name) {
        return this.channels[name];
    };
    Channels.prototype.remove = function (name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
    };
    Channels.prototype.disconnect = function () {
        objectApply(this.channels, function (channel) {
            channel.disconnect();
        });
    };
    return Channels;
}());
/* harmony default export */ var channels = (channels_Channels);
function createChannel(name, pusher) {
    if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
            return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        var errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        var suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(errMsg + ". " + suffix);
    }
    else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
    }
    else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
    }
    else {
        return factory.createChannel(name, pusher);
    }
}

// CONCATENATED MODULE: ./src/core/utils/factory.ts










var Factory = {
    createChannels: function () {
        return new channels();
    },
    createConnectionManager: function (key, options) {
        return new connection_manager(key, options);
    },
    createChannel: function (name, pusher) {
        return new channels_channel(name, pusher);
    },
    createPrivateChannel: function (name, pusher) {
        return new private_channel(name, pusher);
    },
    createPresenceChannel: function (name, pusher) {
        return new presence_channel(name, pusher);
    },
    createEncryptedChannel: function (name, pusher, nacl) {
        return new encrypted_channel(name, pusher, nacl);
    },
    createTimelineSender: function (timeline, options) {
        return new timeline_sender(timeline, options);
    },
    createAuthorizer: function (channel, options) {
        if (options.authorizer) {
            return options.authorizer(channel, options);
        }
        return new pusher_authorizer(channel, options);
    },
    createHandshake: function (transport, callback) {
        return new connection_handshake(transport, callback);
    },
    createAssistantToTheTransportManager: function (manager, transport, options) {
        return new assistant_to_the_transport_manager(manager, transport, options);
    }
};
/* harmony default export */ var factory = (Factory);

// CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

var transport_manager_TransportManager = (function () {
    function TransportManager(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
    }
    TransportManager.prototype.getAssistant = function (transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
            minPingDelay: this.options.minPingDelay,
            maxPingDelay: this.options.maxPingDelay
        });
    };
    TransportManager.prototype.isAlive = function () {
        return this.livesLeft > 0;
    };
    TransportManager.prototype.reportDeath = function () {
        this.livesLeft -= 1;
    };
    return TransportManager;
}());
/* harmony default export */ var transport_manager = (transport_manager_TransportManager);

// CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts



var sequential_strategy_SequentialStrategy = (function () {
    function SequentialStrategy(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
    }
    SequentialStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
    };
    SequentialStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = function (error, handshake) {
            if (handshake) {
                callback(null, handshake);
            }
            else {
                current = current + 1;
                if (_this.loop) {
                    current = current % strategies.length;
                }
                if (current < strategies.length) {
                    if (timeout) {
                        timeout = timeout * 2;
                        if (_this.timeoutLimit) {
                            timeout = Math.min(timeout, _this.timeoutLimit);
                        }
                    }
                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
                }
                else {
                    callback(true);
                }
            }
        };
        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
            timer = new OneOffTimer(options.timeout, function () {
                runner.abort();
                callback(true);
            });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
            if (error && timer && timer.isRunning() && !options.failFast) {
                return;
            }
            if (timer) {
                timer.ensureAborted();
            }
            callback(error, handshake);
        });
        return {
            abort: function () {
                if (timer) {
                    timer.ensureAborted();
                }
                runner.abort();
            },
            forceMinPriority: function (p) {
                runner.forceMinPriority(p);
            }
        };
    };
    return SequentialStrategy;
}());
/* harmony default export */ var sequential_strategy = (sequential_strategy_SequentialStrategy);

// CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts


var best_connected_ever_strategy_BestConnectedEverStrategy = (function () {
    function BestConnectedEverStrategy(strategies) {
        this.strategies = strategies;
    }
    BestConnectedEverStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
    };
    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
            return function (error, handshake) {
                runners[i].error = error;
                if (error) {
                    if (allRunnersFailed(runners)) {
                        callback(true);
                    }
                    return;
                }
                apply(runners, function (runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                });
                callback(null, handshake);
            };
        });
    };
    return BestConnectedEverStrategy;
}());
/* harmony default export */ var best_connected_ever_strategy = (best_connected_ever_strategy_BestConnectedEverStrategy);
function connect(strategies, minPriority, callbackBuilder) {
    var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
    });
    return {
        abort: function () {
            apply(runners, abortRunner);
        },
        forceMinPriority: function (p) {
            apply(runners, function (runner) {
                runner.forceMinPriority(p);
            });
        }
    };
}
function allRunnersFailed(runners) {
    return collections_all(runners, function (runner) {
        return Boolean(runner.error);
    });
}
function abortRunner(runner) {
    if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/cached_strategy.ts




var cached_strategy_CachedStrategy = (function () {
    function CachedStrategy(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
    }
    CachedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    CachedStrategy.prototype.connect = function (minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
            var transport = this.transports[info.transport];
            if (transport) {
                this.timeline.info({
                    cached: true,
                    transport: info.transport,
                    latency: info.latency
                });
                strategies.push(new sequential_strategy([transport], {
                    timeout: info.latency * 2 + 1000,
                    failFast: true
                }));
            }
        }
        var startTimestamp = util.now();
        var runner = strategies
            .pop()
            .connect(minPriority, function cb(error, handshake) {
            if (error) {
                flushTransportCache(usingTLS);
                if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                }
                else {
                    callback(error);
                }
            }
            else {
                storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp);
                callback(null, handshake);
            }
        });
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    return CachedStrategy;
}());
/* harmony default export */ var cached_strategy = (cached_strategy_CachedStrategy);
function getTransportCacheKey(usingTLS) {
    return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
}
function fetchTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            var serializedCache = storage[getTransportCacheKey(usingTLS)];
            if (serializedCache) {
                return JSON.parse(serializedCache);
            }
        }
        catch (e) {
            flushTransportCache(usingTLS);
        }
    }
    return null;
}
function storeTransportCache(usingTLS, transport, latency) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                timestamp: util.now(),
                transport: transport,
                latency: latency
            });
        }
        catch (e) {
        }
    }
}
function flushTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            delete storage[getTransportCacheKey(usingTLS)];
        }
        catch (e) {
        }
    }
}

// CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

var delayed_strategy_DelayedStrategy = (function () {
    function DelayedStrategy(strategy, _a) {
        var number = _a.delay;
        this.strategy = strategy;
        this.options = { delay: number };
    }
    DelayedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    DelayedStrategy.prototype.connect = function (minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new OneOffTimer(this.options.delay, function () {
            runner = strategy.connect(minPriority, callback);
        });
        return {
            abort: function () {
                timer.ensureAborted();
                if (runner) {
                    runner.abort();
                }
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    return DelayedStrategy;
}());
/* harmony default export */ var delayed_strategy = (delayed_strategy_DelayedStrategy);

// CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
var IfStrategy = (function () {
    function IfStrategy(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    IfStrategy.prototype.isSupported = function () {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
    };
    IfStrategy.prototype.connect = function (minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
    };
    return IfStrategy;
}());
/* harmony default export */ var if_strategy = (IfStrategy);

// CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
var FirstConnectedStrategy = (function () {
    function FirstConnectedStrategy(strategy) {
        this.strategy = strategy;
    }
    FirstConnectedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
            if (handshake) {
                runner.abort();
            }
            callback(error, handshake);
        });
        return runner;
    };
    return FirstConnectedStrategy;
}());
/* harmony default export */ var first_connected_strategy = (FirstConnectedStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts







function testSupportsStrategy(strategy) {
    return function () {
        return strategy.isSupported();
    };
}
var getDefaultStrategy = function (config, baseOptions, defineTransport) {
    var definedTransports = {};
    function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
    }
    var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
    });
    var wss_options = Object.assign({}, ws_options, {
        useTLS: true
    });
    var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
    });
    var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
    };
    var ws_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var streaming_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
    var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
    var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
    var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
    var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
    var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
    var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
    var ws_loop = new sequential_strategy([ws_transport], timeouts);
    var wss_loop = new sequential_strategy([wss_transport], timeouts);
    var sockjs_loop = new sequential_strategy([sockjs_transport], timeouts);
    var streaming_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
    ], timeouts);
    var polling_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
    ], timeouts);
    var http_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy([
            streaming_loop,
            new delayed_strategy(polling_loop, { delay: 4000 })
        ]), polling_loop)
    ], timeouts);
    var http_fallback_loop = new if_strategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
    var wsStrategy;
    if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy([
            ws_loop,
            new delayed_strategy(http_fallback_loop, { delay: 2000 })
        ]);
    }
    else {
        wsStrategy = new best_connected_ever_strategy([
            ws_loop,
            new delayed_strategy(wss_loop, { delay: 2000 }),
            new delayed_strategy(http_fallback_loop, { delay: 5000 })
        ]);
    }
    return new cached_strategy(new first_connected_strategy(new if_strategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
    });
};
/* harmony default export */ var default_strategy = (getDefaultStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

/* harmony default export */ var transport_connection_initializer = (function () {
    var self = this;
    self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
    }));
    if (self.hooks.isInitialized()) {
        self.changeState('initialized');
    }
    else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
            if (self.hooks.isInitialized()) {
                self.changeState('initialized');
                callback(true);
            }
            else {
                if (error) {
                    self.onError(error);
                }
                self.onClose();
                callback(false);
            }
        });
    }
    else {
        self.onClose();
    }
});

// CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

var http_xdomain_request_hooks = {
    getRequest: function (socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
            socket.emit('error', new RequestTimedOut());
            socket.close();
        };
        xdr.onerror = function (e) {
            socket.emit('error', e);
            socket.close();
        };
        xdr.onprogress = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
        };
        xdr.onload = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
            socket.emit('finished', 200);
            socket.close();
        };
        return xdr;
    },
    abortRequest: function (xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
    }
};
/* harmony default export */ var http_xdomain_request = (http_xdomain_request_hooks);

// CONCATENATED MODULE: ./src/core/http/http_request.ts
var http_request_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MAX_BUFFER_LENGTH = 256 * 1024;
var http_request_HTTPRequest = (function (_super) {
    http_request_extends(HTTPRequest, _super);
    function HTTPRequest(hooks, method, url) {
        var _this = _super.call(this) || this;
        _this.hooks = hooks;
        _this.method = method;
        _this.url = url;
        return _this;
    }
    HTTPRequest.prototype.start = function (payload) {
        var _this = this;
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = function () {
            _this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
            this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
    };
    HTTPRequest.prototype.close = function () {
        if (this.unloader) {
            runtime.removeUnloadListener(this.unloader);
            this.unloader = null;
        }
        if (this.xhr) {
            this.hooks.abortRequest(this.xhr);
            this.xhr = null;
        }
    };
    HTTPRequest.prototype.onChunk = function (status, data) {
        while (true) {
            var chunk = this.advanceBuffer(data);
            if (chunk) {
                this.emit('chunk', { status: status, data: chunk });
            }
            else {
                break;
            }
        }
        if (this.isBufferTooLong(data)) {
            this.emit('buffer_too_long');
        }
    };
    HTTPRequest.prototype.advanceBuffer = function (buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
            this.position += endOfLinePosition + 1;
            return unreadData.slice(0, endOfLinePosition);
        }
        else {
            return null;
        }
    };
    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
    };
    return HTTPRequest;
}(dispatcher));
/* harmony default export */ var http_request = (http_request_HTTPRequest);

// CONCATENATED MODULE: ./src/core/http/state.ts
var State;
(function (State) {
    State[State["CONNECTING"] = 0] = "CONNECTING";
    State[State["OPEN"] = 1] = "OPEN";
    State[State["CLOSED"] = 3] = "CLOSED";
})(State || (State = {}));
/* harmony default export */ var state = (State);

// CONCATENATED MODULE: ./src/core/http/http_socket.ts



var autoIncrement = 1;
var http_socket_HTTPSocket = (function () {
    function HTTPSocket(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
    }
    HTTPSocket.prototype.send = function (payload) {
        return this.sendRaw(JSON.stringify([payload]));
    };
    HTTPSocket.prototype.ping = function () {
        this.hooks.sendHeartbeat(this);
    };
    HTTPSocket.prototype.close = function (code, reason) {
        this.onClose(code, reason, true);
    };
    HTTPSocket.prototype.sendRaw = function (payload) {
        if (this.readyState === state.OPEN) {
            try {
                runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HTTPSocket.prototype.reconnect = function () {
        this.closeStream();
        this.openStream();
    };
    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
            this.onclose({
                code: code,
                reason: reason,
                wasClean: wasClean
            });
        }
    };
    HTTPSocket.prototype.onChunk = function (chunk) {
        if (chunk.status !== 200) {
            return;
        }
        if (this.readyState === state.OPEN) {
            this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
            case 'o':
                payload = JSON.parse(chunk.data.slice(1) || '{}');
                this.onOpen(payload);
                break;
            case 'a':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                }
                break;
            case 'm':
                payload = JSON.parse(chunk.data.slice(1) || 'null');
                this.onEvent(payload);
                break;
            case 'h':
                this.hooks.onHeartbeat(this);
                break;
            case 'c':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                this.onClose(payload[0], payload[1], true);
                break;
        }
    };
    HTTPSocket.prototype.onOpen = function (options) {
        if (this.readyState === state.CONNECTING) {
            if (options && options.hostname) {
                this.location.base = replaceHost(this.location.base, options.hostname);
            }
            this.readyState = state.OPEN;
            if (this.onopen) {
                this.onopen();
            }
        }
        else {
            this.onClose(1006, 'Server lost session', true);
        }
    };
    HTTPSocket.prototype.onEvent = function (event) {
        if (this.readyState === state.OPEN && this.onmessage) {
            this.onmessage({ data: event });
        }
    };
    HTTPSocket.prototype.onActivity = function () {
        if (this.onactivity) {
            this.onactivity();
        }
    };
    HTTPSocket.prototype.onError = function (error) {
        if (this.onerror) {
            this.onerror(error);
        }
    };
    HTTPSocket.prototype.openStream = function () {
        var _this = this;
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', function (chunk) {
            _this.onChunk(chunk);
        });
        this.stream.bind('finished', function (status) {
            _this.hooks.onFinished(_this, status);
        });
        this.stream.bind('buffer_too_long', function () {
            _this.reconnect();
        });
        try {
            this.stream.start();
        }
        catch (error) {
            util.defer(function () {
                _this.onError(error);
                _this.onClose(1006, 'Could not start streaming', false);
            });
        }
    };
    HTTPSocket.prototype.closeStream = function () {
        if (this.stream) {
            this.stream.unbind_all();
            this.stream.close();
            this.stream = null;
        }
    };
    return HTTPSocket;
}());
function getLocation(url) {
    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
    return {
        base: parts[1],
        queryString: parts[2]
    };
}
function getSendURL(url, session) {
    return url.base + '/' + session + '/xhr_send';
}
function getUniqueURL(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
}
function replaceHost(url, hostname) {
    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
    return urlParts[1] + hostname + urlParts[3];
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function randomString(length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
    }
    return result.join('');
}
/* harmony default export */ var http_socket = (http_socket_HTTPSocket);

// CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
var http_streaming_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
    },
    onHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
    }
};
/* harmony default export */ var http_streaming_socket = (http_streaming_socket_hooks);

// CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
var http_polling_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
    },
    onHeartbeat: function () {
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        if (status === 200) {
            socket.reconnect();
        }
        else {
            socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
    }
};
/* harmony default export */ var http_polling_socket = (http_polling_socket_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

var http_xhr_request_hooks = {
    getRequest: function (socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
            switch (xhr.readyState) {
                case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit('finished', xhr.status);
                    socket.close();
                    break;
            }
        };
        return xhr;
    },
    abortRequest: function (xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
    }
};
/* harmony default export */ var http_xhr_request = (http_xhr_request_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts





var HTTP = {
    createStreamingSocket: function (url) {
        return this.createSocket(http_streaming_socket, url);
    },
    createPollingSocket: function (url) {
        return this.createSocket(http_polling_socket, url);
    },
    createSocket: function (hooks, url) {
        return new http_socket(hooks, url);
    },
    createXHR: function (method, url) {
        return this.createRequest(http_xhr_request, method, url);
    },
    createRequest: function (hooks, method, url) {
        return new http_request(hooks, method, url);
    }
};
/* harmony default export */ var http_http = (HTTP);

// CONCATENATED MODULE: ./src/runtimes/web/http/http.ts


http_http.createXDR = function (method, url) {
    return this.createRequest(http_xdomain_request, method, url);
};
/* harmony default export */ var web_http_http = (http_http);

// CONCATENATED MODULE: ./src/runtimes/web/runtime.ts












var Runtime = {
    nextAuthCallbackID: 1,
    auth_callbacks: {},
    ScriptReceivers: ScriptReceivers,
    DependenciesReceivers: DependenciesReceivers,
    getDefaultStrategy: default_strategy,
    Transports: transports_transports,
    transportConnectionInitializer: transport_connection_initializer,
    HTTPFactory: web_http_http,
    TimelineTransport: jsonp_timeline,
    getXHRAPI: function () {
        return window.XMLHttpRequest;
    },
    getWebSocketAPI: function () {
        return window.WebSocket || window.MozWebSocket;
    },
    setup: function (PusherClass) {
        var _this = this;
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = function () {
            _this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
            Dependencies.load('json2', {}, initializeOnDocumentBody);
        }
        else {
            initializeOnDocumentBody();
        }
    },
    getDocument: function () {
        return document;
    },
    getProtocol: function () {
        return this.getDocument().location.protocol;
    },
    getAuthorizers: function () {
        return { ajax: xhr_auth, jsonp: jsonp_auth };
    },
    onDocumentBody: function (callback) {
        var _this = this;
        if (document.body) {
            callback();
        }
        else {
            setTimeout(function () {
                _this.onDocumentBody(callback);
            }, 0);
        }
    },
    createJSONPRequest: function (url, data) {
        return new jsonp_request(url, data);
    },
    createScriptRequest: function (src) {
        return new script_request(src);
    },
    getLocalStorage: function () {
        try {
            return window.localStorage;
        }
        catch (e) {
            return undefined;
        }
    },
    createXHR: function () {
        if (this.getXHRAPI()) {
            return this.createXMLHttpRequest();
        }
        else {
            return this.createMicrosoftXHR();
        }
    },
    createXMLHttpRequest: function () {
        var Constructor = this.getXHRAPI();
        return new Constructor();
    },
    createMicrosoftXHR: function () {
        return new ActiveXObject('Microsoft.XMLHTTP');
    },
    getNetwork: function () {
        return net_info_Network;
    },
    createWebSocket: function (url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
    },
    createSocketRequest: function (method, url) {
        if (this.isXHRSupported()) {
            return this.HTTPFactory.createXHR(method, url);
        }
        else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
            return this.HTTPFactory.createXDR(method, url);
        }
        else {
            throw 'Cross-origin HTTP requests are not supported';
        }
    },
    isXHRSupported: function () {
        var Constructor = this.getXHRAPI();
        return (Boolean(Constructor) && new Constructor().withCredentials !== undefined);
    },
    isXDRSupported: function (useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return (Boolean(window['XDomainRequest']) && documentProtocol === protocol);
    },
    addUnloadListener: function (listener) {
        if (window.addEventListener !== undefined) {
            window.addEventListener('unload', listener, false);
        }
        else if (window.attachEvent !== undefined) {
            window.attachEvent('onunload', listener);
        }
    },
    removeUnloadListener: function (listener) {
        if (window.addEventListener !== undefined) {
            window.removeEventListener('unload', listener, false);
        }
        else if (window.detachEvent !== undefined) {
            window.detachEvent('onunload', listener);
        }
    }
};
/* harmony default export */ var runtime = (Runtime);

// CONCATENATED MODULE: ./src/core/timeline/level.ts
var TimelineLevel;
(function (TimelineLevel) {
    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
})(TimelineLevel || (TimelineLevel = {}));
/* harmony default export */ var timeline_level = (TimelineLevel);

// CONCATENATED MODULE: ./src/core/timeline/timeline.ts



var timeline_Timeline = (function () {
    function Timeline(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
    }
    Timeline.prototype.log = function (level, event) {
        if (level <= this.options.level) {
            this.events.push(extend({}, event, { timestamp: util.now() }));
            if (this.options.limit && this.events.length > this.options.limit) {
                this.events.shift();
            }
        }
    };
    Timeline.prototype.error = function (event) {
        this.log(timeline_level.ERROR, event);
    };
    Timeline.prototype.info = function (event) {
        this.log(timeline_level.INFO, event);
    };
    Timeline.prototype.debug = function (event) {
        this.log(timeline_level.DEBUG, event);
    };
    Timeline.prototype.isEmpty = function () {
        return this.events.length === 0;
    };
    Timeline.prototype.send = function (sendfn, callback) {
        var _this = this;
        var data = extend({
            session: this.session,
            bundle: this.sent + 1,
            key: this.key,
            lib: 'js',
            version: this.options.version,
            cluster: this.options.cluster,
            features: this.options.features,
            timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, function (error, result) {
            if (!error) {
                _this.sent++;
            }
            if (callback) {
                callback(error, result);
            }
        });
        return true;
    };
    Timeline.prototype.generateUniqueID = function () {
        this.uniqueID++;
        return this.uniqueID;
    };
    return Timeline;
}());
/* harmony default export */ var timeline_timeline = (timeline_Timeline);

// CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts




var transport_strategy_TransportStrategy = (function () {
    function TransportStrategy(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
    }
    TransportStrategy.prototype.isSupported = function () {
        return this.transport.isSupported({
            useTLS: this.options.useTLS
        });
    };
    TransportStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        if (!this.isSupported()) {
            return failAttempt(new UnsupportedStrategy(), callback);
        }
        else if (this.priority < minPriority) {
            return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function () {
            transport.unbind('initialized', onInitialized);
            transport.connect();
        };
        var onOpen = function () {
            handshake = factory.createHandshake(transport, function (result) {
                connected = true;
                unbindListeners();
                callback(null, result);
            });
        };
        var onError = function (error) {
            unbindListeners();
            callback(error);
        };
        var onClosed = function () {
            unbindListeners();
            var serializedTransport;
            serializedTransport = safeJSONStringify(transport);
            callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function () {
            transport.unbind('initialized', onInitialized);
            transport.unbind('open', onOpen);
            transport.unbind('error', onError);
            transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
            abort: function () {
                if (connected) {
                    return;
                }
                unbindListeners();
                if (handshake) {
                    handshake.close();
                }
                else {
                    transport.close();
                }
            },
            forceMinPriority: function (p) {
                if (connected) {
                    return;
                }
                if (_this.priority < p) {
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                }
            }
        };
    };
    return TransportStrategy;
}());
/* harmony default export */ var transport_strategy = (transport_strategy_TransportStrategy);
function failAttempt(error, callback) {
    util.defer(function () {
        callback(error);
    });
    return {
        abort: function () { },
        forceMinPriority: function () { }
    };
}

// CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts





var strategy_builder_Transports = runtime.Transports;
var strategy_builder_defineTransport = function (config, name, type, priority, options, manager) {
    var transportClass = strategy_builder_Transports[type];
    if (!transportClass) {
        throw new UnsupportedTransport(type);
    }
    var enabled = (!config.enabledTransports ||
        arrayIndexOf(config.enabledTransports, name) !== -1) &&
        (!config.disabledTransports ||
            arrayIndexOf(config.disabledTransports, name) === -1);
    var transport;
    if (enabled) {
        options = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options);
        transport = new transport_strategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
    }
    else {
        transport = strategy_builder_UnsupportedStrategy;
    }
    return transport;
};
var strategy_builder_UnsupportedStrategy = {
    isSupported: function () {
        return false;
    },
    connect: function (_, callback) {
        var deferred = util.defer(function () {
            callback(new UnsupportedStrategy());
        });
        return {
            abort: function () {
                deferred.ensureAborted();
            },
            forceMinPriority: function () { }
        };
    }
};

// CONCATENATED MODULE: ./src/core/config.ts


function getConfig(opts) {
    var config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        authEndpoint: opts.authEndpoint || defaults.authEndpoint,
        authTransport: opts.authTransport || defaults.authTransport,
        cluster: opts.cluster || defaults.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts)
    };
    if ('auth' in opts)
        config.auth = opts.auth;
    if ('authorizer' in opts)
        config.authorizer = opts.authorizer;
    if ('disabledTransports' in opts)
        config.disabledTransports = opts.disabledTransports;
    if ('enabledTransports' in opts)
        config.enabledTransports = opts.enabledTransports;
    if ('ignoreNullOrigin' in opts)
        config.ignoreNullOrigin = opts.ignoreNullOrigin;
    if ('timelineParams' in opts)
        config.timelineParams = opts.timelineParams;
    if ('nacl' in opts) {
        config.nacl = opts.nacl;
    }
    return config;
}
function getHttpHost(opts) {
    if (opts.httpHost) {
        return opts.httpHost;
    }
    if (opts.cluster) {
        return "sockjs-" + opts.cluster + ".pusher.com";
    }
    return defaults.httpHost;
}
function getWebsocketHost(opts) {
    if (opts.wsHost) {
        return opts.wsHost;
    }
    if (opts.cluster) {
        return getWebsocketHostFromCluster(opts.cluster);
    }
    return getWebsocketHostFromCluster(defaults.cluster);
}
function getWebsocketHostFromCluster(cluster) {
    return "ws-" + cluster + ".pusher.com";
}
function shouldUseTLS(opts) {
    if (runtime.getProtocol() === 'https:') {
        return true;
    }
    else if (opts.forceTLS === false) {
        return false;
    }
    return true;
}
function getEnableStatsConfig(opts) {
    if ('enableStats' in opts) {
        return opts.enableStats;
    }
    if ('disableStats' in opts) {
        return !opts.disableStats;
    }
    return false;
}

// CONCATENATED MODULE: ./src/core/pusher.ts












var pusher_Pusher = (function () {
    function Pusher(app_key, options) {
        var _this = this;
        checkAppKey(app_key);
        options = options || {};
        if (!options.cluster && !(options.wsHost || options.httpHost)) {
            var suffix = url_store.buildLogSuffix('javascriptQuickStart');
            logger.warn("You should always specify a cluster when connecting. " + suffix);
        }
        if ('disableStats' in options) {
            logger.warn('The disableStats option is deprecated in favor of enableStats');
        }
        this.key = app_key;
        this.config = getConfig(options);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher();
        this.sessionID = Math.floor(Math.random() * 1000000000);
        this.timeline = new timeline_timeline(this.key, this.sessionID, {
            cluster: this.config.cluster,
            features: Pusher.getClientFeatures(),
            params: this.config.timelineParams || {},
            limit: 50,
            level: timeline_level.INFO,
            version: defaults.VERSION
        });
        if (this.config.enableStats) {
            this.timelineSender = factory.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: '/timeline/v2/' + runtime.TimelineTransport.name
            });
        }
        var getStrategy = function (options) {
            return runtime.getDefaultStrategy(_this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
            getStrategy: getStrategy,
            timeline: this.timeline,
            activityTimeout: this.config.activityTimeout,
            pongTimeout: this.config.pongTimeout,
            unavailableTimeout: this.config.unavailableTimeout,
            useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', function () {
            _this.subscribeAll();
            if (_this.timelineSender) {
                _this.timelineSender.send(_this.connection.isUsingTLS());
            }
        });
        this.connection.bind('message', function (event) {
            var eventName = event.event;
            var internal = eventName.indexOf('pusher_internal:') === 0;
            if (event.channel) {
                var channel = _this.channel(event.channel);
                if (channel) {
                    channel.handleEvent(event);
                }
            }
            if (!internal) {
                _this.global_emitter.emit(event.event, event.data);
            }
        });
        this.connection.bind('connecting', function () {
            _this.channels.disconnect();
        });
        this.connection.bind('disconnected', function () {
            _this.channels.disconnect();
        });
        this.connection.bind('error', function (err) {
            logger.warn(err);
        });
        Pusher.instances.push(this);
        this.timeline.info({ instances: Pusher.instances.length });
        if (Pusher.isReady) {
            this.connect();
        }
    }
    Pusher.ready = function () {
        Pusher.isReady = true;
        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
            Pusher.instances[i].connect();
        }
    };
    Pusher.getClientFeatures = function () {
        return keys(filterObject({ ws: runtime.Transports.ws }, function (t) {
            return t.isSupported({});
        }));
    };
    Pusher.prototype.channel = function (name) {
        return this.channels.find(name);
    };
    Pusher.prototype.allChannels = function () {
        return this.channels.all();
    };
    Pusher.prototype.connect = function () {
        this.connection.connect();
        if (this.timelineSender) {
            if (!this.timelineSenderTimer) {
                var usingTLS = this.connection.isUsingTLS();
                var timelineSender = this.timelineSender;
                this.timelineSenderTimer = new PeriodicTimer(60000, function () {
                    timelineSender.send(usingTLS);
                });
            }
        }
    };
    Pusher.prototype.disconnect = function () {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
            this.timelineSenderTimer.ensureAborted();
            this.timelineSenderTimer = null;
        }
    };
    Pusher.prototype.bind = function (event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
    };
    Pusher.prototype.unbind = function (event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
    };
    Pusher.prototype.bind_global = function (callback) {
        this.global_emitter.bind_global(callback);
        return this;
    };
    Pusher.prototype.unbind_global = function (callback) {
        this.global_emitter.unbind_global(callback);
        return this;
    };
    Pusher.prototype.unbind_all = function (callback) {
        this.global_emitter.unbind_all();
        return this;
    };
    Pusher.prototype.subscribeAll = function () {
        var channelName;
        for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
                this.subscribe(channelName);
            }
        }
    };
    Pusher.prototype.subscribe = function (channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
        }
        else if (!channel.subscriptionPending &&
            this.connection.state === 'connected') {
            channel.subscribe();
        }
        return channel;
    };
    Pusher.prototype.unsubscribe = function (channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
            channel.cancelSubscription();
        }
        else {
            channel = this.channels.remove(channel_name);
            if (channel && channel.subscribed) {
                channel.unsubscribe();
            }
        }
    };
    Pusher.prototype.send_event = function (event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
    };
    Pusher.prototype.shouldUseTLS = function () {
        return this.config.useTLS;
    };
    Pusher.instances = [];
    Pusher.isReady = false;
    Pusher.logToConsole = false;
    Pusher.Runtime = runtime;
    Pusher.ScriptReceivers = runtime.ScriptReceivers;
    Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
    Pusher.auth_callbacks = runtime.auth_callbacks;
    return Pusher;
}());
/* harmony default export */ var core_pusher = __webpack_exports__["default"] = (pusher_Pusher);
function checkAppKey(key) {
    if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
    }
}
runtime.setup(pusher_Pusher);


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/backend","css/frontend","css/tailwind","/js/vendor"], () => (__webpack_exec__("./resources/js/frontend/app.js"), __webpack_exec__("./resources/sass/tailwind/app.scss"), __webpack_exec__("./resources/sass/frontend/app.scss"), __webpack_exec__("./resources/sass/backend/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBYTtBQUNsQyxzQ0FBc0MsZ0RBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsMEJBQTBCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3Y3RGxCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVoQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hpRHBCOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHLFVBQVU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRiw0Q0FBNEM7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDJDQUEyQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0NBQXNDO0FBQ3RDO0FBQ0EsS0FBSztBQUNMLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsYUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQsdURBQXVELGFBQWE7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2QkFBNkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDdkI7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXLHVCQUF1QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQ0FBMkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmdvbi1kZXNpZ24tc3lzdGVtLWZyZWUvYXNzZXRzL2pzL2FyZ29uLWRlc2lnbi1zeXN0ZW0ubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2V5ZWNhbmR5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL2wxMG4vZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3R5cGVzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS91dGlscy9kYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy90YWlsd2luZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9mcm9udGVuZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9iYWNrZW5kL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBiaWdfaW1hZ2UsbmF2YmFyX2luaXRpYWxpemVkLHRyYW5zcGFyZW50PSEwLHRyYW5zcGFyZW50RGVtbz0hMCxmaXhlZFRvcD0hMSxiYWNrZ3JvdW5kT3JhbmdlPSExLHRvZ2dsZV9pbml0aWFsaXplZD0hMSwkZGF0ZXBpY2tlcj0kKFwiLmRhdGVwaWNrZXJcIiksJGNvbGxhcHNlPSQoXCIubmF2YmFyIC5jb2xsYXBzZVwiKSwkaHRtbD0kKFwiaHRtbFwiKSwkdGFnc2lucHV0PSQoXCIudGFnc2lucHV0XCIpO2Z1bmN0aW9uIGhpZGVOYXZiYXJDb2xsYXBzZShlKXtlLmFkZENsYXNzKFwiY29sbGFwc2luZy1vdXRcIil9ZnVuY3Rpb24gaGlkZGVuTmF2YmFyQ29sbGFwc2UoZSl7ZS5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmctb3V0XCIpfWZ1bmN0aW9uIGRlYm91bmNlKHQsbyxyKXt2YXIgbjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT10aGlzLGE9YXJndW1lbnRzO2NsZWFyVGltZW91dChuKSxuPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuPW51bGwscnx8dC5hcHBseShlLGEpfSxvKSxyJiYhbiYmdC5hcHBseShlLGEpfX1mdW5jdGlvbiBkZWJvdW5jZSh0LG8scil7dmFyIG47cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPWFyZ3VtZW50cztjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bj1udWxsLHJ8fHQuYXBwbHkoZSxhKX0sbyksciYmIW4mJnQuYXBwbHkoZSxhKX19LTE8bmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIik/KCQoXCIud3JhcHBlciAubG9naW4tcGFnZSwgLnJlZ2lzdGVyLXBhZ2UsIC5jYXJkXCIpLnBlcmZlY3RTY3JvbGxiYXIoKSwwIT0kKFwiLnRhYi1jb250ZW50IC50YWJsZS1yZXNwb25zaXZlXCIpLmxlbmd0aCYmJChcIi50YWJsZS1yZXNwb25zaXZlXCIpLmVhY2goZnVuY3Rpb24oKXtuZXcgUGVyZmVjdFNjcm9sbGJhcigkKHRoaXMpWzBdKX0pLCRodG1sLmFkZENsYXNzKFwicGVyZmVjdC1zY3JvbGxiYXItb25cIikpOiRodG1sLmFkZENsYXNzKFwicGVyZmVjdC1zY3JvbGxiYXItb2ZmXCIpLCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7JCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXSwgW3JlbD1cInRvb2x0aXBcIl0nKS50b29sdGlwKCksJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLmVhY2goZnVuY3Rpb24oKXtjb2xvcl9jbGFzcz0kKHRoaXMpLmRhdGEoXCJjb2xvclwiKSwkKHRoaXMpLnBvcG92ZXIoe3RlbXBsYXRlOic8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyLScrY29sb3JfY2xhc3MrJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nfSl9KTt2YXIgYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTFcIiksdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTJcIiksbz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTNcIikscj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTRcIiksbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTVcIiksbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTZcIikscz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZTdcIiksaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNxdWFyZThcIik7MCE9JChcIi5zcXVhcmVcIikubGVuZ3RoJiYkKGRvY3VtZW50KS5tb3VzZW1vdmUoZnVuY3Rpb24oZSl7cG9zWD1ldmVudC5jbGllbnRYLXdpbmRvdy5pbm5lcldpZHRoLzIscG9zWT1ldmVudC5jbGllbnRZLXdpbmRvdy5pbm5lcldpZHRoLzYsYS5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIsdC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIsby5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIsci5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIsbi5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIsbC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDUqcG9zWCtcImRlZykgcm90YXRlWChcIistLjA1KnBvc1krXCJkZWcpXCIscy5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDIqcG9zWCtcImRlZykgcm90YXRlWChcIistLjAyKnBvc1krXCJkZWcpXCIsaS5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWShcIisuMDIqcG9zWCtcImRlZykgcm90YXRlWChcIistLjAyKnBvc1krXCJkZWcpXCJ9KSxBcmdvbktpdC5pbml0TmF2YmFySW1hZ2UoKSwkbmF2YmFyPSQoXCIubmF2YmFyW2NvbG9yLW9uLXNjcm9sbF1cIiksc2Nyb2xsX2Rpc3RhbmNlPSRuYXZiYXIuYXR0cihcImNvbG9yLW9uLXNjcm9sbFwiKXx8NTAwLDAhPSQoXCIubmF2YmFyW2NvbG9yLW9uLXNjcm9sbF1cIikubGVuZ3RoJiYoQXJnb25LaXQuY2hlY2tTY3JvbGxGb3JUcmFuc3BhcmVudE5hdmJhcigpLCQod2luZG93KS5vbihcInNjcm9sbFwiLEFyZ29uS2l0LmNoZWNrU2Nyb2xsRm9yVHJhbnNwYXJlbnROYXZiYXIpKSwkKFwiLmZvcm0tY29udHJvbFwiKS5vbihcImZvY3VzXCIsZnVuY3Rpb24oKXskKHRoaXMpLnBhcmVudChcIi5pbnB1dC1ncm91cFwiKS5hZGRDbGFzcyhcImlucHV0LWdyb3VwLWZvY3VzXCIpfSkub24oXCJibHVyXCIsZnVuY3Rpb24oKXskKHRoaXMpLnBhcmVudChcIi5pbnB1dC1ncm91cFwiKS5yZW1vdmVDbGFzcyhcImlucHV0LWdyb3VwLWZvY3VzXCIpfSksJChcIi5ib290c3RyYXAtc3dpdGNoXCIpLmVhY2goZnVuY3Rpb24oKXskdGhpcz0kKHRoaXMpLGRhdGFfb25fbGFiZWw9JHRoaXMuZGF0YShcIm9uLWxhYmVsXCIpfHxcIlwiLGRhdGFfb2ZmX2xhYmVsPSR0aGlzLmRhdGEoXCJvZmYtbGFiZWxcIil8fFwiXCIsJHRoaXMuYm9vdHN0cmFwU3dpdGNoKHtvblRleHQ6ZGF0YV9vbl9sYWJlbCxvZmZUZXh0OmRhdGFfb2ZmX2xhYmVsfSl9KSwkKFwiLmNhcm91c2VsXCIpLmNhcm91c2VsKHtpbnRlcnZhbDohMX0pLCQoXCIuZGF0ZXBpY2tlclwiKVswXSYmJChcIi5kYXRlcGlja2VyXCIpLmVhY2goZnVuY3Rpb24oKXskKFwiLmRhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcih7ZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6ITAsYXV0b2Nsb3NlOiExfSl9KSxmbGF0cGlja3IoXCIuZmxhdHBpY2tyXCIse30pLGZsYXRwaWNrcihcIi5yYW5nZVwiLHttb2RlOlwicmFuZ2VcIn0pLGZsYXRwaWNrcihcIi5kYXRldGltZXBpY2tlclwiLHtlbmFibGVUaW1lOiEwLGRhdGVGb3JtYXQ6XCJZLW0tZCBIOmlcIn0pLEFyZ29uS2l0LmluaXRTbGlkZXJzKCl9KSwkY29sbGFwc2UubGVuZ3RoJiYoJGNvbGxhcHNlLm9uKHtcImhpZGUuYnMuY29sbGFwc2VcIjpmdW5jdGlvbigpe2hpZGVOYXZiYXJDb2xsYXBzZSgkY29sbGFwc2UpfX0pLCRjb2xsYXBzZS5vbih7XCJoaWRkZW4uYnMuY29sbGFwc2VcIjpmdW5jdGlvbigpe2hpZGRlbk5hdmJhckNvbGxhcHNlKCRjb2xsYXBzZSl9fSkpLEFyZ29uS2l0PXttaXNjOntuYXZiYXJfbWVudV92aXNpYmxlOjB9LGNoZWNrU2Nyb2xsRm9yVHJhbnNwYXJlbnROYXZiYXI6ZGVib3VuY2UoZnVuY3Rpb24oKXskKGRvY3VtZW50KS5zY3JvbGxUb3AoKT5zY3JvbGxfZGlzdGFuY2U/dHJhbnNwYXJlbnQmJih0cmFuc3BhcmVudD0hMSwkKFwiLm5hdmJhcltjb2xvci1vbi1zY3JvbGxdXCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXRyYW5zcGFyZW50XCIpKTp0cmFuc3BhcmVudHx8KHRyYW5zcGFyZW50PSEwLCQoXCIubmF2YmFyW2NvbG9yLW9uLXNjcm9sbF1cIikuYWRkQ2xhc3MoXCJuYXZiYXItdHJhbnNwYXJlbnRcIikpfSwxNyksaW5pdE5hdmJhckltYWdlOmZ1bmN0aW9uKCl7dmFyIGU9JChcIi5uYXZiYXJcIikuZmluZChcIi5uYXZiYXItdHJhbnNsYXRlXCIpLnNpYmxpbmdzKFwiLm5hdmJhci1jb2xsYXBzZVwiKSxhPWUuZGF0YShcIm5hdi1pbWFnZVwiKTskKHdpbmRvdykud2lkdGgoKTw5OTF8fCQoXCJib2R5XCIpLmhhc0NsYXNzKFwiYnVyZ2VyLW1lbnVcIik/bnVsbCE9YSYmZS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJ1cmwoJ1wiK2ErXCInKVwiKS5yZW1vdmVBdHRyKFwiZGF0YS1uYXYtaW1hZ2VcIikuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsXCJjb3ZlclwiKS5hZGRDbGFzcyhcImhhcy1pbWFnZVwiKTpudWxsIT1hJiZlLmNzcyhcImJhY2tncm91bmRcIixcIlwiKS5hdHRyKFwiZGF0YS1uYXYtaW1hZ2VcIixcIlwiK2EpLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLFwiXCIpLnJlbW92ZUNsYXNzKFwiaGFzLWltYWdlXCIpfSxpbml0RGF0ZVBpY2tlcjpmdW5jdGlvbigpezAhPSRkYXRlcGlja2VyLmxlbmd0aCYmJGRhdGVwaWNrZXIuZGF0ZXRpbWVwaWNrZXIoe2ljb25zOnt0aW1lOlwidGltLWljb25zIGljb24td2F0Y2gtdGltZVwiLGRhdGU6XCJ0aW0taWNvbnMgaWNvbi1jYWxlbmRhci02MFwiLHVwOlwiZmEgZmEtY2hldnJvbi11cFwiLGRvd246XCJmYSBmYS1jaGV2cm9uLWRvd25cIixwcmV2aW91czpcInRpbS1pY29ucyBpY29uLW1pbmltYWwtbGVmdFwiLG5leHQ6XCJ0aW0taWNvbnMgaWNvbi1taW5pbWFsLXJpZ2h0XCIsdG9kYXk6XCJmYSBmYS1zY3JlZW5zaG90XCIsY2xlYXI6XCJmYSBmYS10cmFzaFwiLGNsb3NlOlwiZmEgZmEtcmVtb3ZlXCJ9fSl9LGluaXRTbGlkZXJzOmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJSZWd1bGFyXCIpOzAhPSQoXCIjc2xpZGVyUmVndWxhclwiKS5sZW5ndGgmJm5vVWlTbGlkZXIuY3JlYXRlKGUse3N0YXJ0OjQwLGNvbm5lY3Q6WyEwLCExXSxyYW5nZTp7bWluOjAsbWF4OjEwMH19KTt2YXIgYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlckRvdWJsZVwiKTswIT0kKFwiI3NsaWRlckRvdWJsZVwiKS5sZW5ndGgmJm5vVWlTbGlkZXIuY3JlYXRlKGEse3N0YXJ0OlsyMCw2MF0sY29ubmVjdDohMCxyYW5nZTp7bWluOjAsbWF4OjEwMH19KX19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3NpdGVfa2l0X2ZyZWUvYXNzZXRzL2pzL2tpdC1mcmVlLmpzLm1hcCIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cuU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG50cnkge1xuICAgIHdpbmRvdy5Qb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKS5kZWZhdWx0O1xuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgIHdpbmRvdy5hbmltYXRlID0gcmVxdWlyZSgnYW5pbWF0ZS5jc3MnKTtcblxuICAgIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xufSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxud2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG53aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbiAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4gICAga2V5OiBwcm9jZXNzLmVudi5NSVhfQUJMWV9QVUJMSUNfS0VZLFxuICAgIHdzSG9zdDogJ3JlYWx0aW1lLXB1c2hlci5hYmx5LmlvJyxcbiAgICB3c1BvcnQ6IDQ0MyxcbiAgICBkaXNhYmxlU3RhdHM6IHRydWUsXG4gICAgZW5jcnlwdGVkOiB0cnVlLFxufSk7XG4iLCJjb25zdCBTd2FsTW9kYWwgPSAoaWNvbiwgdGl0bGUsIGh0bWwpID0+IHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgICBpY29uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaHRtbFxuICAgIH0pXG59XG5cbmNvbnN0IFN3YWxDb25maXJtID0gKGljb24sIHRpdGxlLCBodG1sLCBjb25maXJtQnV0dG9uVGV4dCwgbWV0aG9kLCBwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgICAgaWNvbixcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGh0bWwsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dCxcbiAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxpdmV3aXJlLmVtaXQobWV0aG9kLCBwYXJhbXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubGl2ZXdpcmUuZW1pdChjYWxsYmFjaylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IFN3YWxBbGVydCA9IChpY29uLCB0aXRsZSwgdGltZW91dCA9IDQwMDAsIG1ldGhvZCwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgdGltZXI6IHRpbWVvdXQsXG4gICAgICAgIG9uT3BlbjogdG9hc3QgPT4ge1xuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIGljb24sXG4gICAgICAgIHRpdGxlXG4gICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZihtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubGl2ZXdpcmUuZW1pdChtZXRob2QsIHBhcmFtcylcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB3aW5kb3cubGl2ZXdpcmUub24oJ3N3YWw6bW9kYWwnLCBkYXRhID0+IHtcbiAgICAgICAgU3dhbE1vZGFsKGRhdGEuaWNvbiwgZGF0YS50aXRsZSwgZGF0YS50ZXh0KVxuICAgIH0pO1xuXG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdzd2FsOmNvbmZpcm0nLCBkYXRhID0+IHtcbiAgICAgICAgU3dhbENvbmZpcm0oZGF0YS5pY29uLCBkYXRhLnRpdGxlLCBkYXRhLnRleHQsIGRhdGEuY29uZmlybVRleHQsIGRhdGEubWV0aG9kLCBkYXRhLnBhcmFtcywgZGF0YS5jYWxsYmFjaylcbiAgICB9KTtcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbignc3dhbDphbGVydCcsIGRhdGEgPT4ge1xuICAgICAgICBTd2FsQWxlcnQoZGF0YS5pY29uLCBkYXRhLnRpdGxlLCBkYXRhLnRpbWVvdXQsIGRhdGEubWV0aG9kLCBkYXRhLnBhcmFtcylcbiAgICB9KTtcblxuICAgIHdpbmRvdy5saXZld2lyZS5vbigncGxhY2UtYmV0cy1wdXRpJywgZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHV0aS1wb29sJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9faGVhcnRCZWF0JywgJ2FuaW1hdGVfX3JlcGVhdC0zJyk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cubGl2ZXdpcmUub24oJ3BsYWNlLWJldHMtcHVsYScsIGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1bGEtcG9vbCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2hlYXJ0QmVhdCcsICdhbmltYXRlX19yZXBlYXQtMycpO1xuICAgIH0pXG59KVxuIiwiLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4uL2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnLi4vcGx1Z2lucycpO1xucmVxdWlyZSgnZmxhdHBpY2tyJyk7XG5yZXF1aXJlKCcuL2FsZXJ0Jyk7XG5yZXF1aXJlKCcuL2V5ZWNhbmR5Jyk7XG5yZXF1aXJlKCdhcmdvbi1kZXNpZ24tc3lzdGVtLWZyZWUvYXNzZXRzL2pzL2FyZ29uLWRlc2lnbi1zeXN0ZW0ubWluLmpzJyk7XG4vLyB3aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbi8qKlxuICogVGhlIGZvbGxvd2luZyBibG9jayBvZiBjb2RlIG1heSBiZSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXIgeW91clxuICogVnVlIGNvbXBvbmVudHMuIEl0IHdpbGwgcmVjdXJzaXZlbHkgc2NhbiB0aGlzIGRpcmVjdG9yeSBmb3IgdGhlIFZ1ZVxuICogY29tcG9uZW50cyBhbmQgYXV0b21hdGljYWxseSByZWdpc3RlciB0aGVtIHdpdGggdGhlaXIgXCJiYXNlbmFtZVwiLlxuICpcbiAqIEVnLiAuL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC52dWUgLT4gPGV4YW1wbGUtY29tcG9uZW50PjwvZXhhbXBsZS1jb21wb25lbnQ+XG4gKi9cblxuLy8gY29uc3QgZmlsZXMgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLnZ1ZSQvaSlcbi8vIGZpbGVzLmtleXMoKS5tYXAoa2V5ID0+IFZ1ZS5jb21wb25lbnQoa2V5LnNwbGl0KCcvJykucG9wKCkuc3BsaXQoJy4nKVswXSwgZmlsZXMoa2V5KS5kZWZhdWx0KSlcblxuLy9WdWUuY29tcG9uZW50KCdleGFtcGxlLWNvbXBvbmVudCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LnZ1ZScpLmRlZmF1bHQpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cbi8vXG4vLyBjb25zdCBhcHAgPSBuZXcgVnVlKHtcbi8vICAgICBlbDogJyNhcHAnLFxuLy8gfSk7XG4vL1xuIiwiXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmV5ZWNhbmR5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRWxlbSA9ICQodGhpcykucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJyk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFR5cGUgPSBwYXNzd29yZEVsZW0uYXR0cigndHlwZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRvZ2dsZSBFeWUgQ2FuZHlcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIFBhc3N3b3JkIGlucHV0IHR5cGVcclxuICAgICAgICBwYXNzd29yZEVsZW0ucHJvcCh7XHJcbiAgICAgICAgICAgIHR5cGU6IGN1cnJlbnRUeXBlID09PSAndGV4dCcgPyAncGFzc3dvcmQnIDogJ3RleHQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8qKlxuICogUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxuICovXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDaGVja2JveCB0cmVlIGZvciBwZXJtaXNzaW9uIHNlbGVjdGluZ1xuICAgICAqL1xuICAgIGxldCBwZXJtaXNzaW9uVHJlZSA9ICQoJy5wZXJtaXNzaW9uLXRyZWUgOmNoZWNrYm94Jyk7XG5cbiAgICBwZXJtaXNzaW9uVHJlZS5vbignY2xpY2sgY2hhbmdlJywgZnVuY3Rpb24gKCl7XG4gICAgICAgIGlmKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ3VsJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuYXR0cignY2hlY2tlZCcsIHRydWUpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwZXJtaXNzaW9uVHJlZS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygndWwnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzdWJtaXQgaW5wdXRzIGluIHRoZSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIHRoZSBzdWJtaXQgaW5wdXRzIGluIGEgZ2l2ZW4gZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmFibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhbGwgc3VibWl0IGJ1dHRvbnMgb25jZSBjbGlja2VkXG4gICAgICovXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbmZpcm1hdGlvbiB0byBhIGRlbGV0ZSBidXR0b24vZm9ybVxuICAgICAqL1xuICAgICQoJ2JvZHknKVxuICAgICAgICAub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGVsZXRlLWl0ZW1dJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9ucygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWNvbmZpcm0taXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ29udGludWUnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9ucygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsICdhW25hbWU9Y29uZmlybS1pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBhbiAnYXJlIHlvdSBzdXJlJyBwb3AtdXAgdG8gYW55IGJ1dHRvbi9saW5rXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzPycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0NvbnRpbnVlJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgd2luZG93LmxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzdWJtaXQnLCAnZm9ybVtkYXRhLWNvbmZpcm1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIGFuICdhcmUgeW91IHN1cmUnIHBvcC11cCB0byBhbnkgYnV0dG9uL2xpbmtcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGNvbmZpZyA9ICAkKHRoaXMpLmRhdGEoJ2NvbmZpcm0nKTtcbiAgICAgICAgICAgIGxldCBzd2FsQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBjb25maWcudGl0bGUgfHwgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzPycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogY29uZmlnLnNob3dDYW5jZWxCdXR0b24gfHwgdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlnLmNvbmZpcm1CdXR0b25UZXh0IHx8ICdDb250aW51ZScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY29uZmlnLmNhbmNlbEJ1dHRvblRleHQgfHwgJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24gfHwgJ2luZm8nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFN3YWwuZmlyZShzd2FsQ29uZmlnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgJy5jbG9zZS1hbGVydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQoXCIuYWxlcnRcIikucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAvLyBSZW1lbWJlciB0YWIgb24gcGFnZSBsb2FkXG4gICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXSwgYVtkYXRhLXRvZ2dsZT1cInBpbGxcIl0nKS5vbignc2hvd24uYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGhhc2ggPSAkKGUudGFyZ2V0KS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlID8gaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgaGFzaCkgOiBsb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICB9KTtcblxuICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rW2hyZWY9XCInK2hhc2grJ1wiXScpLnRhYignc2hvdycpO1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSB0b29sdGlwcyBldmVyeXdoZXJlXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IGRlZmF1bHRzIGFzIGRlZmF1bHRPcHRpb25zLCBIT09LUywgfSBmcm9tIFwiLi90eXBlcy9vcHRpb25zXCI7XG5pbXBvcnQgRW5nbGlzaCBmcm9tIFwiLi9sMTBuL2RlZmF1bHRcIjtcbmltcG9ydCB7IGFycmF5aWZ5LCBkZWJvdW5jZSwgaW50LCBwYWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgY2xlYXJOb2RlLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVOdW1iZXJJbnB1dCwgZmluZFBhcmVudCwgdG9nZ2xlQ2xhc3MsIGdldEV2ZW50VGFyZ2V0LCB9IGZyb20gXCIuL3V0aWxzL2RvbVwiO1xuaW1wb3J0IHsgY29tcGFyZURhdGVzLCBjcmVhdGVEYXRlUGFyc2VyLCBjcmVhdGVEYXRlRm9ybWF0dGVyLCBkdXJhdGlvbiwgaXNCZXR3ZWVuLCBnZXREZWZhdWx0SG91cnMsIH0gZnJvbSBcIi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IHRva2VuUmVnZXgsIG1vbnRoVG9TdHIgfSBmcm9tIFwiLi91dGlscy9mb3JtYXR0aW5nXCI7XG5pbXBvcnQgXCIuL3V0aWxzL3BvbHlmaWxsc1wiO1xuY29uc3QgREVCT1VOQ0VEX0NIQU5HRV9NUyA9IDMwMDtcbmZ1bmN0aW9uIEZsYXRwaWNrckluc3RhbmNlKGVsZW1lbnQsIGluc3RhbmNlQ29uZmlnKSB7XG4gICAgY29uc3Qgc2VsZiA9IHtcbiAgICAgICAgY29uZmlnOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpLFxuICAgICAgICBsMTBuOiBFbmdsaXNoLFxuICAgIH07XG4gICAgc2VsZi5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHsgY29uZmlnOiBzZWxmLmNvbmZpZywgbDEwbjogc2VsZi5sMTBuIH0pO1xuICAgIHNlbGYuX2hhbmRsZXJzID0gW107XG4gICAgc2VsZi5wbHVnaW5FbGVtZW50cyA9IFtdO1xuICAgIHNlbGYubG9hZGVkUGx1Z2lucyA9IFtdO1xuICAgIHNlbGYuX2JpbmQgPSBiaW5kO1xuICAgIHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xuICAgIHNlbGYuX3Bvc2l0aW9uQ2FsZW5kYXIgPSBwb3NpdGlvbkNhbGVuZGFyO1xuICAgIHNlbGYuY2hhbmdlTW9udGggPSBjaGFuZ2VNb250aDtcbiAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xuICAgIHNlbGYuY2xlYXIgPSBjbGVhcjtcbiAgICBzZWxmLmNsb3NlID0gY2xvc2U7XG4gICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG4gICAgc2VsZi5kZXN0cm95ID0gZGVzdHJveTtcbiAgICBzZWxmLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuICAgIHNlbGYub3BlbiA9IG9wZW47XG4gICAgc2VsZi5yZWRyYXcgPSByZWRyYXc7XG4gICAgc2VsZi5zZXQgPSBzZXQ7XG4gICAgc2VsZi5zZXREYXRlID0gc2V0RGF0ZTtcbiAgICBzZWxmLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcbiAgICAgICAgc2VsZi51dGlscyA9IHtcbiAgICAgICAgICAgIGdldERheXNJbk1vbnRoKG1vbnRoID0gc2VsZi5jdXJyZW50TW9udGgsIHlyID0gc2VsZi5jdXJyZW50WWVhcikge1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMSAmJiAoKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCkgfHwgeXIgJSA0MDAgPT09IDApKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubDEwbi5kYXlzSW5Nb250aFttb250aF07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBzZWxmLmVsZW1lbnQgPSBzZWxmLmlucHV0ID0gZWxlbWVudDtcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgcGFyc2VDb25maWcoKTtcbiAgICAgICAgc2V0dXBMb2NhbGUoKTtcbiAgICAgICAgc2V0dXBJbnB1dHMoKTtcbiAgICAgICAgc2V0dXBEYXRlcygpO1xuICAgICAgICBzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXG4gICAgICAgICAgICBidWlsZCgpO1xuICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldENhbGVuZGFyV2lkdGgoKTtcbiAgICAgICAgY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUgJiYgaXNTYWZhcmkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblJlYWR5XCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5kVG9JbnN0YW5jZShmbikge1xuICAgICAgICByZXR1cm4gZm4uYmluZChzZWxmKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0Q2FsZW5kYXJXaWR0aCgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gc2VsZi5jb25maWc7XG4gICAgICAgIGlmIChjb25maWcud2Vla051bWJlcnMgPT09IGZhbHNlICYmIGNvbmZpZy5zaG93TW9udGhzID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLm5vQ2FsZW5kYXIgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5c1dpZHRoID0gKHNlbGYuZGF5cy5vZmZzZXRXaWR0aCArIDEpICogY29uZmlnLnNob3dNb250aHM7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGRheXNXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzV2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLndlZWtXcmFwcGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInZpc2liaWxpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdERhdGUgPSBzZWxmLmNvbmZpZy5taW5EYXRlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMobmV3IERhdGUoKSwgc2VsZi5jb25maWcubWluRGF0ZSkgPj0gMFxuICAgICAgICAgICAgICAgID8gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIDogbmV3IERhdGUoc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdHMgPSBnZXREZWZhdWx0SG91cnMoc2VsZi5jb25maWcpO1xuICAgICAgICAgICAgZGVmYXVsdERhdGUuc2V0SG91cnMoZGVmYXVsdHMuaG91cnMsIGRlZmF1bHRzLm1pbnV0ZXMsIGRlZmF1bHRzLnNlY29uZHMsIGRlZmF1bHREYXRlLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtkZWZhdWx0RGF0ZV07XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IGRlZmF1bHREYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlICE9PSBcImJsdXJcIikge1xuICAgICAgICAgICAgdGltZVdyYXBwZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gc2VsZi5faW5wdXQudmFsdWU7XG4gICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICBpZiAoc2VsZi5faW5wdXQudmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYW1wbTJtaWxpdGFyeShob3VyLCBhbVBNKSB7XG4gICAgICAgIHJldHVybiAoaG91ciAlIDEyKSArIDEyICogaW50KGFtUE0gPT09IHNlbGYubDEwbi5hbVBNWzFdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWlsaXRhcnkyYW1wbShob3VyKSB7XG4gICAgICAgIHN3aXRjaCAoaG91ciAlIDI0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiAxMjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgJSAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21JbnB1dHMoKSB7XG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBob3VycyA9IChwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLnNsaWNlKC0yKSwgMTApIHx8IDApICUgMjQsIG1pbnV0ZXMgPSAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MCwgc2Vjb25kcyA9IHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpbWl0TWluSG91cnMgPSBzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0cnVlKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgMCk7XG4gICAgICAgIGNvbnN0IGxpbWl0TWF4SG91cnMgPSBzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5tYXhEYXRlLCB0cnVlKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgMCk7XG4gICAgICAgIGlmIChsaW1pdE1heEhvdXJzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhUaW1lID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhUaW1lXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlO1xuICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4VGltZS5nZXRIb3VycygpKTtcbiAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWF4VGltZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1pbihtaW51dGVzLCBtYXhUaW1lLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICBpZiAobWludXRlcyA9PT0gbWF4VGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGgubWluKHNlY29uZHMsIG1heFRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGltaXRNaW5Ib3Vycykge1xuICAgICAgICAgICAgY29uc3QgbWluVGltZSA9IHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluVGltZVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZTtcbiAgICAgICAgICAgIGhvdXJzID0gTWF0aC5tYXgoaG91cnMsIG1pblRpbWUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IG1pblRpbWUuZ2V0SG91cnMoKSAmJiBtaW51dGVzIDwgbWluVGltZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IG1pblRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPT09IG1pblRpbWUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1heChzZWNvbmRzLCBtaW5UaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVPYmogfHwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmo7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBzZXRIb3VycyhkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgICAgICAgaWYgKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzICUgMjQsIG1pbnV0ZXMsIHNlY29uZHMgfHwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmhvdXJFbGVtZW50IHx8ICFzZWxmLm1pbnV0ZUVsZW1lbnQgfHwgc2VsZi5pc01vYmlsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZCghc2VsZi5jb25maWcudGltZV8yNGhyXG4gICAgICAgICAgICA/ICgoMTIgKyBob3VycykgJSAxMikgKyAxMiAqIGludChob3VycyAlIDEyID09PSAwKVxuICAgICAgICAgICAgOiBob3Vycyk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChtaW51dGVzKTtcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1baW50KGhvdXJzID49IDEyKV07XG4gICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWNvbmRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25ZZWFySW5wdXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChldmVudCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChldmVudFRhcmdldC52YWx1ZSkgKyAoZXZlbnQuZGVsdGEgfHwgMCk7XG4gICAgICAgIGlmICh5ZWFyIC8gMTAwMCA+IDEgfHxcbiAgICAgICAgICAgIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiAhL1teXFxkXS8udGVzdCh5ZWFyLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmZvckVhY2goKGV2KSA9PiBiaW5kKGVsZW1lbnQsIGV2LCBoYW5kbGVyLCBvcHRpb25zKSk7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5mb3JFYWNoKChlbCkgPT4gYmluZChlbCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICByZW1vdmU6ICgpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKCkge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLndyYXApIHtcbiAgICAgICAgICAgIFtcIm9wZW5cIiwgXCJjbG9zZVwiLCBcInRvZ2dsZVwiLCBcImNsZWFyXCJdLmZvckVhY2goKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7ZXZ0fV1gKSwgKGVsKSA9PiBiaW5kKGVsLCBcImNsaWNrXCIsIHNlbGZbZXZ0XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIHNldHVwTW9iaWxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2Uob25SZXNpemUsIDUwKTtcbiAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlID0gZGVib3VuY2UodHJpZ2dlckNoYW5nZSwgREVCT1VOQ0VEX0NIQU5HRV9NUyk7XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgIS9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSlcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKGdldEV2ZW50VGFyZ2V0KGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYylcbiAgICAgICAgICAgIGJpbmQod2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZWRSZXNpemUpO1xuICAgICAgICBpZiAod2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwidG91Y2hzdGFydFwiLCBkb2N1bWVudENsaWNrKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwibW91c2Vkb3duXCIsIGRvY3VtZW50Q2xpY2spO1xuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudCwgXCJmb2N1c1wiLCBkb2N1bWVudENsaWNrLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbGlja09wZW5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImNsaWNrXCIsIHNlbGYub3Blbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFwiY2xpY2tcIiwgb25Nb250aE5hdkNsaWNrKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wia2V5dXBcIiwgXCJpbmNyZW1lbnRcIl0sIG9uWWVhcklucHV0KTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcImNsaWNrXCIsIHNlbGVjdERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnRpbWVDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsVGV4dCA9IChlKSA9PiBnZXRFdmVudFRhcmdldChlKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJpbmNyZW1lbnRcIl0sIHVwZGF0ZVRpbWUpO1xuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiYmx1clwiLCB1cGRhdGVUaW1lLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJjbGlja1wiLCB0aW1lSW5jcmVtZW50KTtcbiAgICAgICAgICAgIGJpbmQoW3NlbGYuaG91ckVsZW1lbnQsIHNlbGYubWludXRlRWxlbWVudF0sIFtcImZvY3VzXCIsIFwiY2xpY2tcIl0sIHNlbFRleHQpO1xuICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5zZWNvbmRFbGVtZW50LCBcImZvY3VzXCIsICgpID0+IHNlbGYuc2Vjb25kRWxlbWVudCAmJiBzZWxmLnNlY29uZEVsZW1lbnQuc2VsZWN0KCkpO1xuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYmluZChzZWxmLmFtUE0sIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZShlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImJsdXJcIiwgb25CbHVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlLCB0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IGp1bXBUbyA9IGp1bXBEYXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gc2VsZi5wYXJzZURhdGUoanVtcERhdGUpXG4gICAgICAgICAgICA6IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8XG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgc2VsZi5jb25maWcubWluRGF0ZSA+IHNlbGYubm93XG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jb25maWcubWF4RGF0ZSA8IHNlbGYubm93XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1heERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2VsZi5ub3cpO1xuICAgICAgICBjb25zdCBvbGRZZWFyID0gc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgY29uc3Qgb2xkTW9udGggPSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChqdW1wVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IGp1bXBUby5nZXRNb250aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlLm1lc3NhZ2UgPSBcIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIgKyBqdW1wVG87XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgJiYgc2VsZi5jdXJyZW50WWVhciAhPT0gb2xkWWVhcikge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmXG4gICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciAhPT0gb2xkWWVhciB8fCBzZWxmLmN1cnJlbnRNb250aCAhPT0gb2xkTW9udGgpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICBpZiAofmV2ZW50VGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwiYXJyb3dcIikpXG4gICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dChlLCBldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpID8gMSA6IC0xKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5jcmVtZW50TnVtSW5wdXQoZSwgZGVsdGEsIGlucHV0RWxlbSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlICYmIGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGlucHV0RWxlbSB8fFxuICAgICAgICAgICAgKHRhcmdldCAmJiB0YXJnZXQucGFyZW50Tm9kZSAmJiB0YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBjcmVhdGVFdmVudChcImluY3JlbWVudFwiKTtcbiAgICAgICAgZXZlbnQuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgaW5wdXQgJiYgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcbiAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB3ZWVrV3JhcHBlciwgd2Vla051bWJlcnMgfSA9IGJ1aWxkV2Vla3MoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gd2Vla051bWJlcnM7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrV3JhcHBlciA9IHdlZWtXcmFwcGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkV2Vla2RheXMoKSk7XG4gICAgICAgICAgICBpZiAoIXNlbGYuZGF5c0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItZGF5c1wiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZGF5c0NvbnRhaW5lcik7XG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuckNvbnRhaW5lcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRUaW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmFuZ2VNb2RlXCIsIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIik7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYW5pbWF0ZVwiLCBzZWxmLmNvbmZpZy5hbmltYXRlID09PSB0cnVlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJtdWx0aU1vbnRoXCIsIHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxKTtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIGNvbnN0IGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgfHwgc2VsZi5jb25maWcuc3RhdGljKSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSkge1xuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tQXBwZW5kICYmIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgc2VsZi5faW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmFwcGVuZFRvLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgc2VsZi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFwcGVuZFRvXG4gICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheShjbGFzc05hbWUsIGRhdGUsIGRheU51bWJlciwgaSkge1xuICAgICAgICBjb25zdCBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLCBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItZGF5IFwiICsgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgZGF5RWxlbWVudC5kYXRlT2JqID0gZGF0ZTtcbiAgICAgICAgZGF5RWxlbWVudC4kaSA9IGk7XG4gICAgICAgIGRheUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmZvcm1hdERhdGUoZGF0ZSwgc2VsZi5jb25maWcuYXJpYURhdGVGb3JtYXQpKTtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYubm93KSA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtID0gZGF5RWxlbWVudDtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgICAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIiwgXCJkYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlSXNFbmFibGVkKSB7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAoaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJzdGFydFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcImVuZFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSwgdHJ1ZSkgPT09IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcIm5leHRNb250aERheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKGlzRGF0ZUluUmFuZ2UoZGF0ZSkgJiYgIWlzRGF0ZVNlbGVjdGVkKGRhdGUpKVxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEgJiZcbiAgICAgICAgICAgIGNsYXNzTmFtZSAhPT0gXCJwcmV2TW9udGhEYXlcIiAmJlxuICAgICAgICAgICAgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xuICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLWRheSc+XCIgKyBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGF5Q3JlYXRlXCIsIGRheUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZGF5RWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9jdXNPbkRheUVsZW0odGFyZ2V0Tm9kZSkge1xuICAgICAgICB0YXJnZXROb2RlLmZvY3VzKCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RBdmFpbGFibGVEYXkoZGVsdGEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IGRlbHRhID4gMCA/IDAgOiBzZWxmLmNvbmZpZy5zaG93TW9udGhzIC0gMTtcbiAgICAgICAgY29uc3QgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgIGZvciAobGV0IG0gPSBzdGFydE1vbnRoOyBtICE9IGVuZE1vbnRoOyBtICs9IGRlbHRhKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBkZWx0YSA+IDAgPyAwIDogbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gZGVsdGEgPiAwID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIDogLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSAhPSBlbmRJbmRleDsgaSArPSBkZWx0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBtb250aC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoYy5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiYgaXNFbmFibGVkKGMuZGF0ZU9iaikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5leHRBdmFpbGFibGVEYXkoY3VycmVudCwgZGVsdGEpIHtcbiAgICAgICAgY29uc3QgZ2l2ZW5Nb250aCA9IGN1cnJlbnQuY2xhc3NOYW1lLmluZGV4T2YoXCJNb250aFwiKSA9PT0gLTFcbiAgICAgICAgICAgID8gY3VycmVudC5kYXRlT2JqLmdldE1vbnRoKClcbiAgICAgICAgICAgIDogc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZGVsdGEgPiAwID8gc2VsZi5jb25maWcuc2hvd01vbnRocyA6IC0xO1xuICAgICAgICBjb25zdCBsb29wRGVsdGEgPSBkZWx0YSA+IDAgPyAxIDogLTE7XG4gICAgICAgIGZvciAobGV0IG0gPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGg7IG0gIT0gZW5kTW9udGg7IG0gKz0gbG9vcERlbHRhKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGggPT09IG1cbiAgICAgICAgICAgICAgICA/IGN1cnJlbnQuJGkgKyBkZWx0YVxuICAgICAgICAgICAgICAgIDogZGVsdGEgPCAwXG4gICAgICAgICAgICAgICAgICAgID8gbW9udGguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICBjb25zdCBudW1Nb250aERheXMgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA+PSAwICYmIGkgPCBudW1Nb250aERheXMgJiYgaSAhPSAoZGVsdGEgPiAwID8gbnVtTW9udGhEYXlzIDogLTEpOyBpICs9IGxvb3BEZWx0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBtb250aC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoYy5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkKGMuZGF0ZU9iaikgJiZcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoY3VycmVudC4kaSAtIGkpID49IE1hdGguYWJzKGRlbHRhKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvY3VzT25EYXlFbGVtKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2hhbmdlTW9udGgobG9vcERlbHRhKTtcbiAgICAgICAgZm9jdXNPbkRheShnZXRGaXJzdEF2YWlsYWJsZURheShsb29wRGVsdGEpLCAwKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9jdXNPbkRheShjdXJyZW50LCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgZGF5Rm9jdXNlZCA9IGlzSW5WaWV3KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RWxlbSA9IGN1cnJlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBjdXJyZW50XG4gICAgICAgICAgICA6IGRheUZvY3VzZWRcbiAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICA6IHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmIGlzSW5WaWV3KHNlbGYuc2VsZWN0ZWREYXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZUVsZW1cbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLnRvZGF5RGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnRvZGF5RGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYudG9kYXlEYXRlRWxlbVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBnZXRGaXJzdEF2YWlsYWJsZURheShvZmZzZXQgPiAwID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKHN0YXJ0RWxlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFkYXlGb2N1c2VkKSB7XG4gICAgICAgICAgICBmb2N1c09uRGF5RWxlbShzdGFydEVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2V0TmV4dEF2YWlsYWJsZURheShzdGFydEVsZW0sIG9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aERheXMoeWVhciwgbW9udGgpIHtcbiAgICAgICAgY29uc3QgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSAtIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArIDcpICUgNztcbiAgICAgICAgY29uc3QgcHJldk1vbnRoRGF5cyA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgoKG1vbnRoIC0gMSArIDEyKSAlIDEyLCB5ZWFyKTtcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSwgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIGlzTXVsdGlNb250aCA9IHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxLCBwcmV2TW9udGhEYXlDbGFzcyA9IGlzTXVsdGlNb250aCA/IFwicHJldk1vbnRoRGF5IGhpZGRlblwiIDogXCJwcmV2TW9udGhEYXlcIiwgbmV4dE1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcIm5leHRNb250aERheSBoaWRkZW5cIiA6IFwibmV4dE1vbnRoRGF5XCI7XG4gICAgICAgIGxldCBkYXlOdW1iZXIgPSBwcmV2TW9udGhEYXlzICsgMSAtIGZpcnN0T2ZNb250aCwgZGF5SW5kZXggPSAwO1xuICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShwcmV2TW9udGhEYXlDbGFzcywgbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChkYXlOdW1iZXIgPSAxOyBkYXlOdW1iZXIgPD0gZGF5c0luTW9udGg7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIlwiLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGRheU51bSA9IGRheXNJbk1vbnRoICsgMTsgZGF5TnVtIDw9IDQyIC0gZmlyc3RPZk1vbnRoICYmXG4gICAgICAgICAgICAoc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSB8fCBkYXlJbmRleCAlIDcgIT09IDApOyBkYXlOdW0rKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkobmV4dE1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImRheUNvbnRhaW5lclwiKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheXMpO1xuICAgICAgICByZXR1cm4gZGF5Q29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZERheXMoKSB7XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyTm9kZShzZWxmLmRheXNDb250YWluZXIpO1xuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycylcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLndlZWtOdW1iZXJzKTtcbiAgICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSk7XG4gICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGJ1aWxkTW9udGhEYXlzKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvbk1vdXNlT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhTd2l0Y2goKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgIT09IFwiZHJvcGRvd25cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2hvdWxkQnVpbGRNb250aCA9IGZ1bmN0aW9uIChtb250aCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgIG1vbnRoIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICEoc2VsZi5jb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgICAgbW9udGggPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCkpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXNob3VsZEJ1aWxkTW9udGgoaSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aFwiKTtcbiAgICAgICAgICAgIG1vbnRoLnZhbHVlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgaSkuZ2V0TW9udGgoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbW9udGgudGV4dENvbnRlbnQgPSBtb250aFRvU3RyKGksIHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCwgc2VsZi5sMTBuKTtcbiAgICAgICAgICAgIG1vbnRoLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPT09IGkpIHtcbiAgICAgICAgICAgICAgICBtb250aC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoXCIpO1xuICAgICAgICBjb25zdCBtb250aE5hdkZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgbGV0IG1vbnRoRWxlbWVudDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxIHx8XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgbW9udGhFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJjdXItbW9udGhcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcImZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoc1wiKTtcbiAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmwxMG4ubW9udGhBcmlhTGFiZWwpO1xuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLCBcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKHNlbGVjdGVkTW9udGggLSBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgbW9udGhFbGVtZW50ID0gc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB5ZWFySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImN1ci15ZWFyXCIsIHsgdGFiaW5kZXg6IFwiLTFcIiB9KTtcbiAgICAgICAgY29uc3QgeWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBzZWxmLmwxMG4ueWVhckFyaWFMYWJlbCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSB7XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgeWVhckVsZW1lbnQuZGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XG4gICAgICAgIGN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChtb250aEVsZW1lbnQpO1xuICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoeWVhcklucHV0KTtcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChjdXJyZW50TW9udGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhOYXZGcmFnbWVudCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICB5ZWFyRWxlbWVudCxcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aHMoKSB7XG4gICAgICAgIGNsZWFyTm9kZShzZWxmLm1vbnRoTmF2KTtcbiAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChzZWxmLnByZXZNb250aE5hdik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzKSB7XG4gICAgICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IG0tLTspIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gYnVpbGRNb250aCgpO1xuICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMucHVzaChtb250aC55ZWFyRWxlbWVudCk7XG4gICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMucHVzaChtb250aC5tb250aEVsZW1lbnQpO1xuICAgICAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aC5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQoc2VsZi5uZXh0TW9udGhOYXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoTmF2KCkge1xuICAgICAgICBzZWxmLm1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aHNcIik7XG4gICAgICAgIHNlbGYueWVhckVsZW1lbnRzID0gW107XG4gICAgICAgIHNlbGYubW9udGhFbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLnByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XG4gICAgICAgIHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xuICAgICAgICBzZWxmLm5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XG4gICAgICAgIGJ1aWxkTW9udGhzKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBzZWxmLl9faGlkZVByZXZNb250aEFycm93LFxuICAgICAgICAgICAgc2V0KGJvb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyAhPT0gYm9vbCkge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLnByZXZNb250aE5hdiwgXCJmbGF0cGlja3ItZGlzYWJsZWRcIiwgYm9vbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgPSBib29sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZU5leHRNb250aEFycm93XCIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyxcbiAgICAgICAgICAgIHNldChib29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgIT09IGJvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5uZXh0TW9udGhOYXYsIFwiZmxhdHBpY2tyLWRpc2FibGVkXCIsIGJvb2wpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9faGlkZU5leHRNb250aEFycm93ID0gYm9vbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSBzZWxmLnllYXJFbGVtZW50c1swXTtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICByZXR1cm4gc2VsZi5tb250aE5hdjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRUaW1lKCkge1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhcilcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vQ2FsZW5kYXJcIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0gZ2V0RGVmYXVsdEhvdXJzKHNlbGYuY29uZmlnKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci10aW1lXCIpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xuICAgICAgICBjb25zdCBob3VySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1ob3VyXCIsIHtcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBzZWxmLmwxMG4uaG91ckFyaWFMYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPSBob3VySW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgY29uc3QgbWludXRlSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1taW51dGVcIiwge1xuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHNlbGYubDEwbi5taW51dGVBcmlhTGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgPSBtaW51dGVJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKVxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRzLmhvdXJzXG4gICAgICAgICAgICAgICAgOiBtaWxpdGFyeTJhbXBtKGRlZmF1bHRzLmhvdXJzKSk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKClcbiAgICAgICAgICAgIDogZGVmYXVsdHMubWludXRlcyk7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBzZWxmLmNvbmZpZy5taW51dGVJbmNyZW1lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMFwiIDogXCIxXCIpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCIpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjJcIik7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyXCIpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cklucHV0KTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy50aW1lXzI0aHIpXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1zZWNvbmRcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRzLnNlY29uZHMpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5taW51dGVFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMlwiKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZElucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuICAgICAgICAgICAgc2VsZi5hbVBNID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItYW0tcG1cIiwgc2VsZi5sMTBuLmFtUE1baW50KChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpID4gMTEpXSk7XG4gICAgICAgICAgICBzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XG4gICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmFtUE0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla2RheXMoKSB7XG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla2RheUNvbnRhaW5lcik7XG4gICAgICAgIGZvciAobGV0IGkgPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpLS07KSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXJcIik7XG4gICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVXZWVrZGF5cygpO1xuICAgICAgICByZXR1cm4gc2VsZi53ZWVrZGF5Q29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVXZWVrZGF5cygpIHtcbiAgICAgICAgaWYgKCFzZWxmLndlZWtkYXlDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcbiAgICAgICAgbGV0IHdlZWtkYXlzID0gWy4uLnNlbGYubDEwbi53ZWVrZGF5cy5zaG9ydGhhbmRdO1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB3ZWVrZGF5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi53ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgLi4ud2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IHNlbGYuY29uZmlnLnNob3dNb250aHM7IGktLTspIHtcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lci5jaGlsZHJlbltpXS5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlxuICAgICAgICAke3dlZWtkYXlzLmpvaW4oXCI8L3NwYW4+PHNwYW4gY2xhc3M9J2ZsYXRwaWNrci13ZWVrZGF5Jz5cIil9XG4gICAgICA8L3NwYW4+XG4gICAgICBgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuICAgICAgICBjb25zdCB3ZWVrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIik7XG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlcIiwgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTtcbiAgICAgICAgY29uc3Qgd2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZCh3ZWVrTnVtYmVycyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrV3JhcHBlcixcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VNb250aCh2YWx1ZSwgaXNPZmZzZXQgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gaXNPZmZzZXQgPyB2YWx1ZSA6IHZhbHVlIC0gc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgIGlmICgoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9PT0gdHJ1ZSkgfHxcbiAgICAgICAgICAgIChkZWx0YSA+IDAgJiYgc2VsZi5faGlkZU5leHRNb250aEFycm93ID09PSB0cnVlKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XG4gICAgICAgIGlmIChzZWxmLmN1cnJlbnRNb250aCA8IDAgfHwgc2VsZi5jdXJyZW50TW9udGggPiAxMSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciArPSBzZWxmLmN1cnJlbnRNb250aCA+IDExID8gMSA6IC0xO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhcih0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlLCB0b0luaXRpYWwgPSB0cnVlKSB7XG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodG9Jbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gZ2V0RGVmYXVsdEhvdXJzKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAgIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuX2lucHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EZXN0cm95XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gc2VsZi5faGFuZGxlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBzZWxmLl9oYW5kbGVyc1tpXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCkge1xuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5tb2JpbGVJbnB1dCk7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5sYXN0Q2hpbGQgJiYgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKHdyYXBwZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmFsdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBzZWxmLmlucHV0Ll90eXBlO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcbiAgICAgICAgfVxuICAgICAgICBbXG4gICAgICAgICAgICBcIl9zaG93VGltZUlucHV0XCIsXG4gICAgICAgICAgICBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFxuICAgICAgICAgICAgXCJfaGlkZU5leHRNb250aEFycm93XCIsXG4gICAgICAgICAgICBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiX19oaWRlUHJldk1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiaXNNb2JpbGVcIixcbiAgICAgICAgICAgIFwiaXNPcGVuXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcbiAgICAgICAgICAgIFwibWluRGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgIFwibWF4RGF0ZUhhc1RpbWVcIixcbiAgICAgICAgICAgIFwiZGF5c1wiLFxuICAgICAgICAgICAgXCJkYXlzQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcIl9pbnB1dFwiLFxuICAgICAgICAgICAgXCJfcG9zaXRpb25FbGVtZW50XCIsXG4gICAgICAgICAgICBcImlubmVyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcInJDb250YWluZXJcIixcbiAgICAgICAgICAgIFwibW9udGhOYXZcIixcbiAgICAgICAgICAgIFwidG9kYXlEYXRlRWxlbVwiLFxuICAgICAgICAgICAgXCJjYWxlbmRhckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJ3ZWVrZGF5Q29udGFpbmVyXCIsXG4gICAgICAgICAgICBcInByZXZNb250aE5hdlwiLFxuICAgICAgICAgICAgXCJuZXh0TW9udGhOYXZcIixcbiAgICAgICAgICAgIFwibW9udGhzRHJvcGRvd25Db250YWluZXJcIixcbiAgICAgICAgICAgIFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFxuICAgICAgICAgICAgXCJjdXJyZW50WWVhckVsZW1lbnRcIixcbiAgICAgICAgICAgIFwibmF2aWdhdGlvbkN1cnJlbnRNb250aFwiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXG4gICAgICAgICAgICBcImNvbmZpZ1wiLFxuICAgICAgICBdLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGZba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0NhbGVuZGFyRWxlbShlbGVtKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlbGVtKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlbGVtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgY29uc3QgaXNDYWxlbmRhckVsZW1lbnQgPSBpc0NhbGVuZGFyRWxlbShldmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc0lucHV0ID0gZXZlbnRUYXJnZXQgPT09IHNlbGYuaW5wdXQgfHxcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCB8fFxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldCkgfHxcbiAgICAgICAgICAgICAgICAoZS5wYXRoICYmXG4gICAgICAgICAgICAgICAgICAgIGUucGF0aC5pbmRleE9mICYmXG4gICAgICAgICAgICAgICAgICAgICh+ZS5wYXRoLmluZGV4T2Yoc2VsZi5pbnB1dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIH5lLnBhdGguaW5kZXhPZihzZWxmLmFsdElucHV0KSkpO1xuICAgICAgICAgICAgY29uc3QgbG9zdEZvY3VzID0gZS50eXBlID09PSBcImJsdXJcIlxuICAgICAgICAgICAgICAgID8gaXNJbnB1dCAmJlxuICAgICAgICAgICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldClcbiAgICAgICAgICAgICAgICA6ICFpc0lucHV0ICYmXG4gICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW0oZS5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzSWdub3JlZCA9ICFzZWxmLmNvbmZpZy5pZ25vcmVkRm9jdXNFbGVtZW50cy5zb21lKChlbGVtKSA9PiBlbGVtLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSk7XG4gICAgICAgICAgICBpZiAobG9zdEZvY3VzICYmIGlzSWdub3JlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnRpbWVDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcbiAgICAgICAgaWYgKCFuZXdZZWFyIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBuZXdZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKSB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiYgbmV3WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1llYXJOdW0gPSBuZXdZZWFyLCBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBuZXdZZWFyTnVtO1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1heChzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcyA9IHRydWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBkYXRlVG9DaGVjayA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHVuZGVmaW5lZCwgdGltZWxlc3MpO1xuICAgICAgICBpZiAoKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1pbkRhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1pbkRhdGVIYXNUaW1lKSA8IDApIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5tYXhEYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5tYXhEYXRlSGFzVGltZSkgPiAwKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5lbmFibGUgJiYgc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKGRhdGVUb0NoZWNrID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGJvb2wgPSAhIXNlbGYuY29uZmlnLmVuYWJsZSwgYXJyYXkgPSAoX2EgPSBzZWxmLmNvbmZpZy5lbmFibGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHNlbGYuY29uZmlnLmRpc2FibGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBkOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgZChkYXRlVG9DaGVjaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICBlbHNlIGlmIChkIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBzZWxmLnBhcnNlRGF0ZShkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQgJiYgcGFyc2VkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID8gYm9vbFxuICAgICAgICAgICAgICAgICAgICA6ICFib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgZC5mcm9tICYmXG4gICAgICAgICAgICAgICAgZC50byAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA+PSBkLmZyb20uZ2V0VGltZSgpICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpIDw9IGQudG8uZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhYm9vbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJblZpZXcoZWxlbSkge1xuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcImZsYXRwaWNrci1kaXNhYmxlZFwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuY29udGFpbnMoZWxlbSkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICAgIGNvbnN0IGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gc2VsZi5faW5wdXQ7XG4gICAgICAgIGlmIChpc0lucHV0ICYmXG4gICAgICAgICAgICAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgfHwgc2VsZi5faW5wdXQudmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAgICAgICAgICEoZS5yZWxhdGVkVGFyZ2V0ICYmIGlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0XG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgIGNvbnN0IGlzSW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwXG4gICAgICAgICAgICA/IGVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXQpXG4gICAgICAgICAgICA6IGV2ZW50VGFyZ2V0ID09PSBzZWxmLl9pbnB1dDtcbiAgICAgICAgY29uc3QgYWxsb3dJbnB1dCA9IHNlbGYuY29uZmlnLmFsbG93SW5wdXQ7XG4gICAgICAgIGNvbnN0IGFsbG93S2V5ZG93biA9IHNlbGYuaXNPcGVuICYmICghYWxsb3dJbnB1dCB8fCAhaXNJbnB1dCk7XG4gICAgICAgIGNvbnN0IGFsbG93SW5saW5lS2V5ZG93biA9IHNlbGYuY29uZmlnLmlubGluZSAmJiBpc0lucHV0ICYmICFhbGxvd0lucHV0O1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBpc0lucHV0KSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgdHJ1ZSwgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpIHx8XG4gICAgICAgICAgICBhbGxvd0tleWRvd24gfHxcbiAgICAgICAgICAgIGFsbG93SW5saW5lS2V5ZG93bikge1xuICAgICAgICAgICAgY29uc3QgaXNUaW1lT2JqID0gISFzZWxmLnRpbWVDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RGF0ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnB1dCAmJiAhc2VsZi5jb25maWcuYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgIWlzSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhbGxvd0lucHV0ID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBpc0luVmlldyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBlLmtleUNvZGUgPT09IDM5ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KHVuZGVmaW5lZCwgZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aChkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkoMSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmhvdXJFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBlLmtleUNvZGUgPT09IDQwID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYuZGF5c0NvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuJGkgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmlucHV0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkoMSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVGltZU9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KHVuZGVmaW5lZCwgZGVsdGEgKiA3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiBzZWxmLmhvdXJFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxmLnBsdWdpbkVsZW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGVsZW1zLmluZGV4T2YoZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWxlbXNbaSArIChlLnNoaWZ0S2V5ID8gLTEgOiAxKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXQgfHwgc2VsZi5faW5wdXQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZXZlbnRUYXJnZXQgPT09IHNlbGYuYW1QTSkge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApOlxuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzBdO1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCk6XG4gICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1bMV07XG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJbnB1dCB8fCBpc0NhbGVuZGFyRWxlbShldmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uS2V5RG93blwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtKSB7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgICAoZWxlbSAmJlxuICAgICAgICAgICAgICAgICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpKSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGhvdmVyRGF0ZSA9IGVsZW1cbiAgICAgICAgICAgID8gZWxlbS5kYXRlT2JqLmdldFRpbWUoKVxuICAgICAgICAgICAgOiBzZWxmLmRheXMuZmlyc3RFbGVtZW50Q2hpbGQuZGF0ZU9iai5nZXRUaW1lKCksIGluaXRpYWxEYXRlID0gc2VsZi5wYXJzZURhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB1bmRlZmluZWQsIHRydWUpLmdldFRpbWUoKSwgcmFuZ2VTdGFydERhdGUgPSBNYXRoLm1pbihob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCByYW5nZUVuZERhdGUgPSBNYXRoLm1heChob3ZlckRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpO1xuICAgICAgICBsZXQgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbWluUmFuZ2UgPSAwLCBtYXhSYW5nZSA9IDA7XG4gICAgICAgIGZvciAobGV0IHQgPSByYW5nZVN0YXJ0RGF0ZTsgdCA8IHJhbmdlRW5kRGF0ZTsgdCArPSBkdXJhdGlvbi5EQVkpIHtcbiAgICAgICAgICAgIGlmICghaXNFbmFibGVkKG5ldyBEYXRlKHQpLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkIHx8ICh0ID4gcmFuZ2VTdGFydERhdGUgJiYgdCA8IHJhbmdlRW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHQgPCBpbml0aWFsRGF0ZSAmJiAoIW1pblJhbmdlIHx8IHQgPiBtaW5SYW5nZSkpXG4gICAgICAgICAgICAgICAgICAgIG1pblJhbmdlID0gdDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID4gaW5pdGlhbERhdGUgJiYgKCFtYXhSYW5nZSB8fCB0IDwgbWF4UmFuZ2UpKVxuICAgICAgICAgICAgICAgICAgICBtYXhSYW5nZSA9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBtKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW21dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlFbGVtID0gbW9udGguY2hpbGRyZW5baV0sIGRhdGUgPSBkYXlFbGVtLmRhdGVPYmo7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0T2ZSYW5nZSA9IChtaW5SYW5nZSA+IDAgJiYgdGltZXN0YW1wIDwgbWluUmFuZ2UpIHx8XG4gICAgICAgICAgICAgICAgICAgIChtYXhSYW5nZSA+IDAgJiYgdGltZXN0YW1wID4gbWF4UmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlmIChvdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhaW5zRGlzYWJsZWQgJiYgIW91dE9mUmFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8PSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwic3RhcnRSYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiZW5kUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5pdGlhbERhdGUgPiBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG1pblJhbmdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAobWF4UmFuZ2UgPT09IDAgfHwgdGltZXN0YW1wIDw9IG1heFJhbmdlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNCZXR3ZWVuKHRpbWVzdGFtcCwgaW5pdGlhbERhdGUsIGhvdmVyRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9wb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLl9pbnB1dC5kaXNhYmxlZCB8fCBzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXNPcGVuID0gc2VsZi5pc09wZW47XG4gICAgICAgIHNlbGYuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF3YXNPcGVuKSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSA9PT0gdHJ1ZSAmJiBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICAoZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICFzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNlbGYuaG91ckVsZW1lbnQuc2VsZWN0KCksIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtaW5NYXhEYXRlU2V0dGVyKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIChkYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqID0gKHNlbGYuY29uZmlnW2BfJHt0eXBlfURhdGVgXSA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpKTtcbiAgICAgICAgICAgIGNvbnN0IGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbYF8ke3R5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIn1EYXRlYF07XG4gICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlID09PSBcIm1pblwiID8gXCJtaW5EYXRlSGFzVGltZVwiIDogXCJtYXhEYXRlSGFzVGltZVwiXSA9XG4gICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0TWludXRlcygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRTZWNvbmRzKCkgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IHNlbGYuc2VsZWN0ZWREYXRlcy5maWx0ZXIoKGQpID0+IGlzRW5hYmxlZChkKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIHR5cGUgPT09IFwibWluXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaik7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZWRyYXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgISFpbnZlcnNlRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlRGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBib29sT3B0cyA9IFtcbiAgICAgICAgICAgIFwid3JhcFwiLFxuICAgICAgICAgICAgXCJ3ZWVrTnVtYmVyc1wiLFxuICAgICAgICAgICAgXCJhbGxvd0lucHV0XCIsXG4gICAgICAgICAgICBcImFsbG93SW52YWxpZFByZWxvYWRcIixcbiAgICAgICAgICAgIFwiY2xpY2tPcGVuc1wiLFxuICAgICAgICAgICAgXCJ0aW1lXzI0aHJcIixcbiAgICAgICAgICAgIFwiZW5hYmxlVGltZVwiLFxuICAgICAgICAgICAgXCJub0NhbGVuZGFyXCIsXG4gICAgICAgICAgICBcImFsdElucHV0XCIsXG4gICAgICAgICAgICBcInNob3J0aGFuZEN1cnJlbnRNb250aFwiLFxuICAgICAgICAgICAgXCJpbmxpbmVcIixcbiAgICAgICAgICAgIFwic3RhdGljXCIsXG4gICAgICAgICAgICBcImVuYWJsZVNlY29uZHNcIixcbiAgICAgICAgICAgIFwiZGlzYWJsZU1vYmlsZVwiLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCB1c2VyQ29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKSwgaW5zdGFuY2VDb25maWcpO1xuICAgICAgICBjb25zdCBmb3JtYXRzID0ge307XG4gICAgICAgIHNlbGYuY29uZmlnLnBhcnNlRGF0ZSA9IHVzZXJDb25maWcucGFyc2VEYXRlO1xuICAgICAgICBzZWxmLmNvbmZpZy5mb3JtYXREYXRlID0gdXNlckNvbmZpZy5mb3JtYXREYXRlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZW5hYmxlXCIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gc2VsZi5jb25maWcuX2VuYWJsZSxcbiAgICAgICAgICAgIHNldDogKGRhdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2VuYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZGlzYWJsZVwiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuY29uZmlnLl9kaXNhYmxlLFxuICAgICAgICAgICAgc2V0OiAoZGF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZGlzYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0aW1lTW9kZSA9IHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCI7XG4gICAgICAgIGlmICghdXNlckNvbmZpZy5kYXRlRm9ybWF0ICYmICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0RGF0ZUZvcm1hdCA9IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgfHwgZGVmYXVsdE9wdGlvbnMuZGF0ZUZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdHMuZGF0ZUZvcm1hdCA9XG4gICAgICAgICAgICAgICAgdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gXCJIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHREYXRlRm9ybWF0ICsgXCIgSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXJDb25maWcuYWx0SW5wdXQgJiZcbiAgICAgICAgICAgICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpICYmXG4gICAgICAgICAgICAhdXNlckNvbmZpZy5hbHRGb3JtYXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBbHRGb3JtYXQgPSBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgfHwgZGVmYXVsdE9wdGlvbnMuYWx0Rm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0cy5hbHRGb3JtYXQgPVxuICAgICAgICAgICAgICAgIHVzZXJDb25maWcubm9DYWxlbmRhciB8fCB0aW1lTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IFwiaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6UyBLXCIgOiBcIiBLXCIpXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdEFsdEZvcm1hdCArIGAgaDppJHt1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwifSBLYDtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluRGF0ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuY29uZmlnLl9taW5EYXRlLFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heERhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBzZWxmLmNvbmZpZy5fbWF4RGF0ZSxcbiAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1heFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1pbk1heFRpbWVTZXR0ZXIgPSAodHlwZSkgPT4gKHZhbCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb25maWdbdHlwZSA9PT0gXCJtaW5cIiA/IFwiX21pblRpbWVcIiA6IFwiX21heFRpbWVcIl0gPSBzZWxmLnBhcnNlRGF0ZSh2YWwsIFwiSDppOlNcIik7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5UaW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gc2VsZi5jb25maWcuX21pblRpbWUsXG4gICAgICAgICAgICBzZXQ6IG1pbk1heFRpbWVTZXR0ZXIoXCJtaW5cIiksXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4VGltZVwiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuY29uZmlnLl9tYXhUaW1lLFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhUaW1lU2V0dGVyKFwibWF4XCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgZm9ybWF0cywgdXNlckNvbmZpZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IFwidHJ1ZVwiO1xuICAgICAgICBIT09LUy5maWx0ZXIoKGhvb2spID0+IHNlbGYuY29uZmlnW2hvb2tdICE9PSB1bmRlZmluZWQpLmZvckVhY2goKGhvb2spID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW2hvb2tdID0gYXJyYXlpZnkoc2VsZi5jb25maWdbaG9va10gfHwgW10pLm1hcChiaW5kVG9JbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLmlzTW9iaWxlID1cbiAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlTW9iaWxlICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmlubGluZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmXG4gICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbkNvbmYgPSBzZWxmLmNvbmZpZy5wbHVnaW5zW2ldKHNlbGYpIHx8IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGx1Z2luQ29uZikge1xuICAgICAgICAgICAgICAgIGlmIChIT09LUy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gYXJyYXlpZnkocGx1Z2luQ29uZltrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiaW5kVG9JbnN0YW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5jb25maWdba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmFsdElucHV0Q2xhc3MpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MgPVxuICAgICAgICAgICAgICAgIGdldElucHV0RWxlbSgpLmNsYXNzTmFtZSArIFwiIFwiICsgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcztcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblBhcnNlQ29uZmlnXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJbnB1dEVsZW0oKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmNvbmZpZy53cmFwXG4gICAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKVxuICAgICAgICAgICAgOiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cExvY2FsZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoYGZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgJHtzZWxmLmNvbmZpZy5sb2NhbGV9YCkpO1xuICAgICAgICBzZWxmLmwxMG4gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0KSwgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubG9jYWxlXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA/IGZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpKTtcbiAgICAgICAgdG9rZW5SZWdleC5LID0gYCgke3NlbGYubDEwbi5hbVBNWzBdfXwke3NlbGYubDEwbi5hbVBNWzFdfXwke3NlbGYubDEwbi5hbVBNWzBdLnRvTG93ZXJDYXNlKCl9fCR7c2VsZi5sMTBuLmFtUE1bMV0udG9Mb3dlckNhc2UoKX0pYDtcbiAgICAgICAgY29uc3QgdXNlckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2VDb25maWcpLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKTtcbiAgICAgICAgaWYgKHVzZXJDb25maWcudGltZV8yNGhyID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLnRpbWVfMjRociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPSBzZWxmLmwxMG4udGltZV8yNGhyO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoc2VsZik7XG4gICAgICAgIHNlbGYucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7IGNvbmZpZzogc2VsZi5jb25maWcsIGwxMG46IHNlbGYubDEwbiB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihjdXN0b21Qb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5wb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCBzZWxmLmNvbmZpZy5wb3NpdGlvbihzZWxmLCBjdXN0b21Qb3NpdGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUHJlQ2FsZW5kYXJQb3NpdGlvblwiKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25FbGVtZW50ID0gY3VzdG9tUG9zaXRpb25FbGVtZW50IHx8IHNlbGYuX3Bvc2l0aW9uRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2FsZW5kYXJIZWlnaHQgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jaGlsZHJlbiwgKChhY2MsIGNoaWxkKSA9PiBhY2MgKyBjaGlsZC5vZmZzZXRIZWlnaHQpLCAwKSwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLnNwbGl0KFwiIFwiKSwgY29uZmlnUG9zVmVydGljYWwgPSBjb25maWdQb3NbMF0sIGNvbmZpZ1Bvc0hvcml6b250YWwgPSBjb25maWdQb3MubGVuZ3RoID4gMSA/IGNvbmZpZ1Bvc1sxXSA6IG51bGwsIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1Bvc1ZlcnRpY2FsID09PSBcImFib3ZlXCIgfHxcbiAgICAgICAgICAgIChjb25maWdQb3NWZXJ0aWNhbCAhPT0gXCJiZWxvd1wiICYmXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VGcm9tQm90dG9tIDwgY2FsZW5kYXJIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XG4gICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArXG4gICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgK1xuICAgICAgICAgICAgKCFzaG93T25Ub3AgPyBwb3NpdGlvbkVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMiA6IC1jYWxlbmRhckhlaWdodCAtIDIpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93VG9wXCIsICFzaG93T25Ub3ApO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Qm90dG9tXCIsIHNob3dPblRvcCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdDtcbiAgICAgICAgbGV0IGlzQ2VudGVyID0gZmFsc2U7XG4gICAgICAgIGxldCBpc1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGlmIChjb25maWdQb3NIb3Jpem9udGFsID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBsZWZ0IC09IChjYWxlbmRhcldpZHRoIC0gaW5wdXRCb3VuZHMud2lkdGgpIC8gMjtcbiAgICAgICAgICAgIGlzQ2VudGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWdQb3NIb3Jpem9udGFsID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gY2FsZW5kYXJXaWR0aCAtIGlucHV0Qm91bmRzLndpZHRoO1xuICAgICAgICAgICAgaXNSaWdodCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0xlZnRcIiwgIWlzQ2VudGVyICYmICFpc1JpZ2h0KTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0NlbnRlclwiLCBpc0NlbnRlcik7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dSaWdodFwiLCBpc1JpZ2h0KTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICAod2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMucmlnaHQpO1xuICAgICAgICBjb25zdCByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBjZW50ZXJNb3N0ID0gcmlnaHQgKyBjYWxlbmRhcldpZHRoID4gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIHJpZ2h0TW9zdCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjZW50ZXJNb3N0KSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBgJHtyaWdodH1weGA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudFN0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIGlmIChkb2MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBib2R5V2lkdGggPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlckxlZnQgPSBNYXRoLm1heCgwLCBib2R5V2lkdGggLyAyIC0gY2FsZW5kYXJXaWR0aCAvIDIpO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyQmVmb3JlID0gXCIuZmxhdHBpY2tyLWNhbGVuZGFyLmNlbnRlck1vc3Q6YmVmb3JlXCI7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJBZnRlciA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmFmdGVyXCI7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJJbmRleCA9IGRvYy5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJTdHlsZSA9IGB7bGVmdDoke2lucHV0Qm91bmRzLmxlZnR9cHg7cmlnaHQ6YXV0bzt9YDtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiY2VudGVyTW9zdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGRvYy5pbnNlcnRSdWxlKGAke2NlbnRlckJlZm9yZX0sJHtjZW50ZXJBZnRlcn0ke2NlbnRlclN0eWxlfWAsIGNlbnRlckluZGV4KTtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2NlbnRlckxlZnR9cHhgO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERvY3VtZW50U3R5bGVTaGVldCgpIHtcbiAgICAgICAgbGV0IGVkaXRhYmxlU2hlZXQgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzaGVldC5jc3NSdWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVkaXRhYmxlU2hlZXQgPSBzaGVldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlZGl0YWJsZVNoZWV0ICE9IG51bGwgPyBlZGl0YWJsZVNoZWV0IDogY3JlYXRlU3R5bGVTaGVldCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIHJldHVybiBzdHlsZS5zaGVldDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzQW5kQ2xvc2UoKSB7XG4gICAgICAgIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTEgfHxcbiAgICAgICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5jbG9zZSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2VsZWN0RGF0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RhYmxlID0gKGRheSkgPT4gZGF5LmNsYXNzTGlzdCAmJlxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcbiAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpICYmXG4gICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdEFsbG93ZWRcIik7XG4gICAgICAgIGNvbnN0IHQgPSBmaW5kUGFyZW50KGdldEV2ZW50VGFyZ2V0KGUpLCBpc1NlbGVjdGFibGUpO1xuICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0O1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZSh0YXJnZXQuZGF0ZU9iai5nZXRUaW1lKCkpKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ2hhbmdlTW9udGggPSAoc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPCBzZWxmLmN1cnJlbnRNb250aCB8fFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoICsgc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDEpICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IHRhcmdldDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIpXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gaXNEYXRlU2VsZWN0ZWQoc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4KVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zcGxpY2UocGFyc2VJbnQoc2VsZWN0ZWRJbmRleCksIDEpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpICE9PSAwKVxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KChhLCBiKSA9PiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgaWYgKHNob3VsZENoYW5nZU1vbnRoKSB7XG4gICAgICAgICAgICBjb25zdCBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKCFzaG91bGRDaGFuZ2VNb250aCAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxKVxuICAgICAgICAgICAgZm9jdXNPbkRheUVsZW0odGFyZ2V0KTtcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5zZWxlY3RlZERhdGVFbGVtICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtICYmIHNlbGYuc2VsZWN0ZWREYXRlRWxlbS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJiAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5lbmFibGVUaW1lO1xuICAgICAgICAgICAgaWYgKHNpbmdsZSB8fCByYW5nZSkge1xuICAgICAgICAgICAgICAgIGZvY3VzQW5kQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyQ2hhbmdlKCk7XG4gICAgfVxuICAgIGNvbnN0IENBTExCQUNLUyA9IHtcbiAgICAgICAgbG9jYWxlOiBbc2V0dXBMb2NhbGUsIHVwZGF0ZVdlZWtkYXlzXSxcbiAgICAgICAgc2hvd01vbnRoczogW2J1aWxkTW9udGhzLCBzZXRDYWxlbmRhcldpZHRoLCBidWlsZFdlZWtkYXlzXSxcbiAgICAgICAgbWluRGF0ZTogW2p1bXBUb0RhdGVdLFxuICAgICAgICBtYXhEYXRlOiBbanVtcFRvRGF0ZV0sXG4gICAgICAgIGNsaWNrT3BlbnM6IFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgZnVuY3Rpb24gc2V0KG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYuY29uZmlnLCBvcHRpb24pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKENBTExCQUNLU1trZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIENBTExCQUNLU1trZXldLmZvckVhY2goKHgpID0+IHgoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoQ0FMTEJBQ0tTW29wdGlvbl0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBDQUxMQkFDS1Nbb3B0aW9uXS5mb3JFYWNoKCh4KSA9PiB4KCkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoSE9PS1MuaW5kZXhPZihvcHRpb24pID4gLTEpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IGFycmF5aWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWREYXRlKGlucHV0RGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIGxldCBkYXRlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZS5tYXAoKGQpID0+IHNlbGYucGFyc2VEYXRlKGQsIGZvcm1hdCkpO1xuICAgICAgICBlbHNlIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBpbnB1dERhdGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYuY29uZmlnLm1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5jb25maWcuY29uanVuY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkYXRlKSA9PiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoYEludmFsaWQgZGF0ZSBzdXBwbGllZDogJHtKU09OLnN0cmluZ2lmeShpbnB1dERhdGUpfWApKTtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gKHNlbGYuY29uZmlnLmFsbG93SW52YWxpZFByZWxvYWRcbiAgICAgICAgICAgID8gZGF0ZXNcbiAgICAgICAgICAgIDogZGF0ZXMuZmlsdGVyKChkKSA9PiBkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc0VuYWJsZWQoZCwgZmFsc2UpKSk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydCgoYSwgYikgPT4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldERhdGUoZGF0ZSwgdHJpZ2dlckNoYW5nZSA9IGZhbHNlLCBmb3JtYXQgPSBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KSB7XG4gICAgICAgIGlmICgoZGF0ZSAhPT0gMCAmJiAhZGF0ZSkgfHwgKGRhdGUgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRlLmxlbmd0aCA9PT0gMCkpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbGVhcih0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID1cbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlc1tzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgICAgIGp1bXBUb0RhdGUodW5kZWZpbmVkLCB0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgc2V0SG91cnNGcm9tRGF0ZSgpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSk7XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xuICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICBydWxlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhcnNlRGF0ZShydWxlLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgcnVsZS5mcm9tICYmXG4gICAgICAgICAgICAgICAgcnVsZS50bylcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxmLnBhcnNlRGF0ZShydWxlLmZyb20sIHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgc2VsZi5ub3cgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5ub3cpIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHByZWxvYWRlZERhdGUgPSBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fFxuICAgICAgICAgICAgKChzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIlRFWFRBUkVBXCIpICYmXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wbGFjZWhvbGRlciAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPT09IHNlbGYuaW5wdXQucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IHNlbGYuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAocHJlbG9hZGVkRGF0ZSlcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShwcmVsb2FkZWREYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgc2VsZi5faW5pdGlhbERhdGUgPVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlc1swXVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSA+IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93O1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pblRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5taW5UaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heFRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5tYXhUaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSA9XG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSA9XG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBJbnB1dHMoKSB7XG4gICAgICAgIHNlbGYuaW5wdXQgPSBnZXRJbnB1dEVsZW0oKTtcbiAgICAgICAgaWYgKCFzZWxmLmlucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBlbGVtZW50IHNwZWNpZmllZFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LmFkZChcImZsYXRwaWNrci1pbnB1dFwiKTtcbiAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MpO1xuICAgICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50YWJJbmRleCA9IHNlbGYuaW5wdXQudGFiSW5kZXg7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dClcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XG4gICAgICAgIHNlbGYuX3Bvc2l0aW9uRWxlbWVudCA9IHNlbGYuY29uZmlnLnBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9pbnB1dDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IHNlbGYuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubm9DYWxlbmRhclxuICAgICAgICAgICAgICAgID8gXCJ0aW1lXCJcbiAgICAgICAgICAgICAgICA6IFwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgOiBcImRhdGVcIjtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIGZsYXRwaWNrci1tb2JpbGVcIik7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQudGFiSW5kZXggPSAxO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XG4gICAgICAgIHNlbGYubW9iaWxlRm9ybWF0U3RyID1cbiAgICAgICAgICAgIGlucHV0VHlwZSA9PT0gXCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgPyBcIlktbS1kXFxcXFRIOmk6U1wiXG4gICAgICAgICAgICAgICAgOiBpbnB1dFR5cGUgPT09IFwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJZLW0tZFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJIOmk6U1wiO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGVmYXVsdFZhbHVlID0gc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQubWluID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUsIFwiWS1tLWRcIik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKVxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcbiAgICAgICAgaWYgKHNlbGYuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSlcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuc3RlcCA9IFN0cmluZyhzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpO1xuICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLm1vYmlsZUlucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICBiaW5kKHNlbGYubW9iaWxlSW5wdXQsIFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnNldERhdGUoZ2V0RXZlbnRUYXJnZXQoZSkudmFsdWUsIGZhbHNlLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgICAgICBpZiAoc2VsZi5pc09wZW4gPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbG9zZSgpO1xuICAgICAgICBzZWxmLm9wZW4oZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyaWdnZXJFdmVudChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaG9va3MgPSBzZWxmLmNvbmZpZ1tldmVudF07XG4gICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBob29rc1tpXSAmJiBpIDwgaG9va3MubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09IFwib25DaGFuZ2VcIikge1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImlucHV0XCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgICAgICBlLmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGF0ZVNlbGVjdGVkKGRhdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZi5zZWxlY3RlZERhdGVzW2ldLCBkYXRlKSA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSB8fCAhc2VsZi5tb250aE5hdilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMuZm9yRWFjaCgoeWVhckVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSk7XG4gICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoVG9TdHIoZC5nZXRNb250aCgpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbikgKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIudmFsdWUgPSBkLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHllYXJFbGVtZW50LnZhbHVlID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoIDw9IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxuICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlU3RyKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVzXG4gICAgICAgICAgICAubWFwKChkT2JqKSA9PiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgZm9ybWF0KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGQsIGksIGFycikgPT4gc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lbmFibGVUaW1lIHx8XG4gICAgICAgICAgICBhcnIuaW5kZXhPZihkKSA9PT0gaSlcbiAgICAgICAgICAgIC5qb2luKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIlxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jb25qdW5jdGlvblxuICAgICAgICAgICAgOiBzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlID0gdHJ1ZSkge1xuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlRm9ybWF0U3RyKSB7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID1cbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cilcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBnZXREYXRlU3RyKHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5hbHRGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICE9PSBmYWxzZSlcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uVmFsdWVVcGRhdGVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgIGNvbnN0IGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZXZlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBpc05leHRNb250aCA9IHNlbGYubmV4dE1vbnRoTmF2LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgICBjaGFuZ2VNb250aChpc1ByZXZNb250aCA/IC0xIDogMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi55ZWFyRWxlbWVudHMuaW5kZXhPZihldmVudFRhcmdldCkgPj0gMCkge1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGltZVdyYXBwZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlzS2V5RG93biA9IGUudHlwZSA9PT0gXCJrZXlkb3duXCIsIGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSksIGlucHV0ID0gZXZlbnRUYXJnZXQ7XG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBldmVudFRhcmdldCA9PT0gc2VsZi5hbVBNKSB7XG4gICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWluID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpLCBtYXggPSBwYXJzZUZsb2F0KGlucHV0LmdldEF0dHJpYnV0ZShcIm1heFwiKSksIHN0ZXAgPSBwYXJzZUZsb2F0KGlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpLCBjdXJWYWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCksIGRlbHRhID0gZS5kZWx0YSB8fFxuICAgICAgICAgICAgKGlzS2V5RG93biA/IChlLndoaWNoID09PSAzOCA/IDEgOiAtMSkgOiAwKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gY3VyVmFsdWUgKyBzdGVwICogZGVsdGE7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIG1heCArXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQoIWlzSG91ckVsZW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIC0xLCBzZWxmLmhvdXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xuICAgICAgICAgICAgICAgIGlmIChpc01pbnV0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgMSwgc2VsZi5ob3VyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICYmXG4gICAgICAgICAgICAgICAgaXNIb3VyRWxlbSAmJlxuICAgICAgICAgICAgICAgIChzdGVwID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gbmV3VmFsdWUgKyBjdXJWYWx1ZSA9PT0gMjNcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLmFicyhuZXdWYWx1ZSAtIGN1clZhbHVlKSA+IHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sMTBuLmFtUE1baW50KHNlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gc2VsZi5sMTBuLmFtUE1bMF0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG59XG5mdW5jdGlvbiBfZmxhdHBpY2tyKG5vZGVMaXN0LCBjb25maWcpIHtcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAuY2FsbChub2RlTGlzdClcbiAgICAgICAgLmZpbHRlcigoeCkgPT4geCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICBjb25zdCBpbnN0YW5jZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtb21pdFwiKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChub2RlLl9mbGF0cGlja3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gRmxhdHBpY2tySW5zdGFuY2Uobm9kZSwgY29uZmlnIHx8IHt9KTtcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKG5vZGUuX2ZsYXRwaWNrcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlcy5sZW5ndGggPT09IDEgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XG59XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIEhUTUxDb2xsZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIE5vZGVMaXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XG4gICAgfTtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbdGhpc10sIGNvbmZpZyk7XG4gICAgfTtcbn1cbnZhciBmbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Iod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3NlbGVjdG9yXSwgY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHNlbGVjdG9yLCBjb25maWcpO1xuICAgIH1cbn07XG5mbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IHt9O1xuZmxhdHBpY2tyLmwxMG5zID0ge1xuICAgIGVuOiBPYmplY3QuYXNzaWduKHt9LCBFbmdsaXNoKSxcbiAgICBkZWZhdWx0OiBPYmplY3QuYXNzaWduKHt9LCBFbmdsaXNoKSxcbn07XG5mbGF0cGlja3IubG9jYWxpemUgPSAobDEwbikgPT4ge1xuICAgIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCksIGwxMG4pO1xufTtcbmZsYXRwaWNrci5zZXREZWZhdWx0cyA9IChjb25maWcpID0+IHtcbiAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpLCBjb25maWcpO1xufTtcbmZsYXRwaWNrci5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHt9KTtcbmZsYXRwaWNrci5mb3JtYXREYXRlID0gY3JlYXRlRGF0ZUZvcm1hdHRlcih7fSk7XG5mbGF0cGlja3IuY29tcGFyZURhdGVzID0gY29tcGFyZURhdGVzO1xuaWYgKHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGpRdWVyeS5mbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XG4gICAgfTtcbn1cbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyAodHlwZW9mIGRheXMgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChkYXlzLCAxMCkgOiBkYXlzKSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xufVxuZXhwb3J0IGRlZmF1bHQgZmxhdHBpY2tyO1xuIiwiZXhwb3J0IGNvbnN0IGVuZ2xpc2ggPSB7XG4gICAgd2Vla2RheXM6IHtcbiAgICAgICAgc2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICBcIlN1bmRheVwiLFxuICAgICAgICAgICAgXCJNb25kYXlcIixcbiAgICAgICAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgICAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgIFwiRnJpZGF5XCIsXG4gICAgICAgICAgICBcIlNhdHVyZGF5XCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgICAgc2hvcnRoYW5kOiBbXG4gICAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICBcIkphbnVhcnlcIixcbiAgICAgICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgICAgIFwiTWFyY2hcIixcbiAgICAgICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICBcIkp1bmVcIixcbiAgICAgICAgICAgIFwiSnVseVwiLFxuICAgICAgICAgICAgXCJBdWd1c3RcIixcbiAgICAgICAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICAgICAgICBcIk9jdG9iZXJcIixcbiAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgICAgICAgIFwiRGVjZW1iZXJcIixcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGRheXNJbk1vbnRoOiBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG4gICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgb3JkaW5hbDogKG50aCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gbnRoICUgMTAwO1xuICAgICAgICBpZiAocyA+IDMgJiYgcyA8IDIxKVxuICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgICAgc3dpdGNoIChzICUgMTApIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmFuZ2VTZXBhcmF0b3I6IFwiIHRvIFwiLFxuICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcbiAgICBzY3JvbGxUaXRsZTogXCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsXG4gICAgdG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCIsXG4gICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcbiAgICB5ZWFyQXJpYUxhYmVsOiBcIlllYXJcIixcbiAgICBtb250aEFyaWFMYWJlbDogXCJNb250aFwiLFxuICAgIGhvdXJBcmlhTGFiZWw6IFwiSG91clwiLFxuICAgIG1pbnV0ZUFyaWFMYWJlbDogXCJNaW51dGVcIixcbiAgICB0aW1lXzI0aHI6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZ2xpc2g7XG4iLCJleHBvcnQgY29uc3QgSE9PS1MgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwib25DbG9zZVwiLFxuICAgIFwib25EYXlDcmVhdGVcIixcbiAgICBcIm9uRGVzdHJveVwiLFxuICAgIFwib25LZXlEb3duXCIsXG4gICAgXCJvbk1vbnRoQ2hhbmdlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uUGFyc2VDb25maWdcIixcbiAgICBcIm9uUmVhZHlcIixcbiAgICBcIm9uVmFsdWVVcGRhdGVcIixcbiAgICBcIm9uWWVhckNoYW5nZVwiLFxuICAgIFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIsXG5dO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIF9kaXNhYmxlOiBbXSxcbiAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICBhbGxvd0ludmFsaWRQcmVsb2FkOiBmYWxzZSxcbiAgICBhbHRGb3JtYXQ6IFwiRiBqLCBZXCIsXG4gICAgYWx0SW5wdXQ6IGZhbHNlLFxuICAgIGFsdElucHV0Q2xhc3M6IFwiZm9ybS1jb250cm9sIGlucHV0XCIsXG4gICAgYW5pbWF0ZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSA9PT0gLTEsXG4gICAgYXJpYURhdGVGb3JtYXQ6IFwiRiBqLCBZXCIsXG4gICAgYXV0b0ZpbGxEZWZhdWx0VGltZTogdHJ1ZSxcbiAgICBjbGlja09wZW5zOiB0cnVlLFxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgY29uanVuY3Rpb246IFwiLCBcIixcbiAgICBkYXRlRm9ybWF0OiBcIlktbS1kXCIsXG4gICAgZGVmYXVsdEhvdXI6IDEyLFxuICAgIGRlZmF1bHRNaW51dGU6IDAsXG4gICAgZGVmYXVsdFNlY29uZHM6IDAsXG4gICAgZGlzYWJsZTogW10sXG4gICAgZGlzYWJsZU1vYmlsZTogZmFsc2UsXG4gICAgZW5hYmxlU2Vjb25kczogZmFsc2UsXG4gICAgZW5hYmxlVGltZTogZmFsc2UsXG4gICAgZXJyb3JIYW5kbGVyOiAoZXJyKSA9PiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4oZXJyKSxcbiAgICBnZXRXZWVrOiAoZ2l2ZW5EYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShnaXZlbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMyAtICgoZGF0ZS5nZXREYXkoKSArIDYpICUgNykpO1xuICAgICAgICB2YXIgd2VlazEgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDQpO1xuICAgICAgICByZXR1cm4gKDEgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZCgoKGRhdGUuZ2V0VGltZSgpIC0gd2VlazEuZ2V0VGltZSgpKSAvIDg2NDAwMDAwIC1cbiAgICAgICAgICAgICAgICAzICtcbiAgICAgICAgICAgICAgICAoKHdlZWsxLmdldERheSgpICsgNikgJSA3KSkgL1xuICAgICAgICAgICAgICAgIDcpKTtcbiAgICB9LFxuICAgIGhvdXJJbmNyZW1lbnQ6IDEsXG4gICAgaWdub3JlZEZvY3VzRWxlbWVudHM6IFtdLFxuICAgIGlubGluZTogZmFsc2UsXG4gICAgbG9jYWxlOiBcImRlZmF1bHRcIixcbiAgICBtaW51dGVJbmNyZW1lbnQ6IDUsXG4gICAgbW9kZTogXCJzaW5nbGVcIixcbiAgICBtb250aFNlbGVjdG9yVHlwZTogXCJkcm9wZG93blwiLFxuICAgIG5leHRBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTEzLjIwNyA4LjQ3MmwtNy44NTQgNy44NTQtMC43MDctMC43MDcgNy4xNDYtNy4xNDYtNy4xNDYtNy4xNDggMC43MDctMC43MDcgNy44NTQgNy44NTR6JyAvPjwvc3ZnPlwiLFxuICAgIG5vQ2FsZW5kYXI6IGZhbHNlLFxuICAgIG5vdzogbmV3IERhdGUoKSxcbiAgICBvbkNoYW5nZTogW10sXG4gICAgb25DbG9zZTogW10sXG4gICAgb25EYXlDcmVhdGU6IFtdLFxuICAgIG9uRGVzdHJveTogW10sXG4gICAgb25LZXlEb3duOiBbXSxcbiAgICBvbk1vbnRoQ2hhbmdlOiBbXSxcbiAgICBvbk9wZW46IFtdLFxuICAgIG9uUGFyc2VDb25maWc6IFtdLFxuICAgIG9uUmVhZHk6IFtdLFxuICAgIG9uVmFsdWVVcGRhdGU6IFtdLFxuICAgIG9uWWVhckNoYW5nZTogW10sXG4gICAgb25QcmVDYWxlbmRhclBvc2l0aW9uOiBbXSxcbiAgICBwbHVnaW5zOiBbXSxcbiAgICBwb3NpdGlvbjogXCJhdXRvXCIsXG4gICAgcG9zaXRpb25FbGVtZW50OiB1bmRlZmluZWQsXG4gICAgcHJldkFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNNS4yMDcgOC40NzFsNy4xNDYgNy4xNDctMC43MDcgMC43MDctNy44NTMtNy44NTQgNy44NTQtNy44NTMgMC43MDcgMC43MDctNy4xNDcgNy4xNDZ6JyAvPjwvc3ZnPlwiLFxuICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogZmFsc2UsXG4gICAgc2hvd01vbnRoczogMSxcbiAgICBzdGF0aWM6IGZhbHNlLFxuICAgIHRpbWVfMjRocjogZmFsc2UsXG4gICAgd2Vla051bWJlcnM6IGZhbHNlLFxuICAgIHdyYXA6IGZhbHNlLFxufTtcbiIsImltcG9ydCB7IHRva2VuUmVnZXgsIHJldkZvcm1hdCwgZm9ybWF0cywgfSBmcm9tIFwiLi9mb3JtYXR0aW5nXCI7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gXCIuLi90eXBlcy9vcHRpb25zXCI7XG5pbXBvcnQgeyBlbmdsaXNoIH0gZnJvbSBcIi4uL2wxMG4vZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZURhdGVGb3JtYXR0ZXIgPSAoeyBjb25maWcgPSBkZWZhdWx0cywgbDEwbiA9IGVuZ2xpc2gsIGlzTW9iaWxlID0gZmFsc2UsIH0pID0+IChkYXRlT2JqLCBmcm10LCBvdmVycmlkZUxvY2FsZSkgPT4ge1xuICAgIGNvbnN0IGxvY2FsZSA9IG92ZXJyaWRlTG9jYWxlIHx8IGwxMG47XG4gICAgaWYgKGNvbmZpZy5mb3JtYXREYXRlICE9PSB1bmRlZmluZWQgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgIHJldHVybiBjb25maWcuZm9ybWF0RGF0ZShkYXRlT2JqLCBmcm10LCBsb2NhbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZnJtdFxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoYywgaSwgYXJyKSA9PiBmb3JtYXRzW2NdICYmIGFycltpIC0gMV0gIT09IFwiXFxcXFwiXG4gICAgICAgID8gZm9ybWF0c1tjXShkYXRlT2JqLCBsb2NhbGUsIGNvbmZpZylcbiAgICAgICAgOiBjICE9PSBcIlxcXFxcIlxuICAgICAgICAgICAgPyBjXG4gICAgICAgICAgICA6IFwiXCIpXG4gICAgICAgIC5qb2luKFwiXCIpO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVEYXRlUGFyc2VyID0gKHsgY29uZmlnID0gZGVmYXVsdHMsIGwxMG4gPSBlbmdsaXNoIH0pID0+IChkYXRlLCBnaXZlbkZvcm1hdCwgdGltZWxlc3MsIGN1c3RvbUxvY2FsZSkgPT4ge1xuICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGxvY2FsZSA9IGN1c3RvbUxvY2FsZSB8fCBsMTBuO1xuICAgIGxldCBwYXJzZWREYXRlO1xuICAgIGNvbnN0IGRhdGVPcmlnID0gZGF0ZTtcbiAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgIT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgZGF0ZS50b0ZpeGVkICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBnaXZlbkZvcm1hdCB8fCAoY29uZmlnIHx8IGRlZmF1bHRzKS5kYXRlRm9ybWF0O1xuICAgICAgICBjb25zdCBkYXRlc3RyID0gU3RyaW5nKGRhdGUpLnRyaW0oKTtcbiAgICAgICAgaWYgKGRhdGVzdHIgPT09IFwidG9kYXlcIikge1xuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aW1lbGVzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL1okLy50ZXN0KGRhdGVzdHIpIHx8XG4gICAgICAgICAgICAvR01UJC8udGVzdChkYXRlc3RyKSlcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZWxzZSBpZiAoY29uZmlnICYmIGNvbmZpZy5wYXJzZURhdGUpXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gY29uZmlnLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPVxuICAgICAgICAgICAgICAgICFjb25maWcgfHwgIWNvbmZpZy5ub0NhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgbGV0IG1hdGNoZWQsIG9wcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG1hdGNoSW5kZXggPSAwLCByZWdleFN0ciA9IFwiXCI7IGkgPCBmb3JtYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGZvcm1hdFtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JhY2tTbGFzaCA9IHRva2VuID09PSBcIlxcXFxcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBlc2NhcGVkID0gZm9ybWF0W2kgLSAxXSA9PT0gXCJcXFxcXCIgfHwgaXNCYWNrU2xhc2g7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuUmVnZXhbdG9rZW5dICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpLmV4ZWMoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hlZCA9IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHNbdG9rZW4gIT09IFwiWVwiID8gXCJwdXNoXCIgOiBcInVuc2hpZnRcIl0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiByZXZGb3JtYXRbdG9rZW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogbWF0Y2hbKyttYXRjaEluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0JhY2tTbGFzaClcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gXCIuXCI7XG4gICAgICAgICAgICAgICAgb3BzLmZvckVhY2goKHsgZm4sIHZhbCB9KSA9PiAocGFyc2VkRGF0ZSA9IGZuKHBhcnNlZERhdGUsIHZhbCwgbG9jYWxlKSB8fCBwYXJzZWREYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbWF0Y2hlZCA/IHBhcnNlZERhdGUgOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEocGFyc2VkRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSkpIHtcbiAgICAgICAgY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoYEludmFsaWQgZGF0ZSBwcm92aWRlZDogJHtkYXRlT3JpZ31gKSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aW1lbGVzcyA9PT0gdHJ1ZSlcbiAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gcGFyc2VkRGF0ZTtcbn07XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MgPSB0cnVlKSB7XG4gICAgaWYgKHRpbWVsZXNzICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUxLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLVxuICAgICAgICAgICAgbmV3IERhdGUoZGF0ZTIuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVRpbWVzKGRhdGUxLCBkYXRlMikge1xuICAgIHJldHVybiAoMzYwMCAqIChkYXRlMS5nZXRIb3VycygpIC0gZGF0ZTIuZ2V0SG91cnMoKSkgK1xuICAgICAgICA2MCAqIChkYXRlMS5nZXRNaW51dGVzKCkgLSBkYXRlMi5nZXRNaW51dGVzKCkpICtcbiAgICAgICAgZGF0ZTEuZ2V0U2Vjb25kcygpIC1cbiAgICAgICAgZGF0ZTIuZ2V0U2Vjb25kcygpKTtcbn1cbmV4cG9ydCBjb25zdCBpc0JldHdlZW4gPSAodHMsIHRzMSwgdHMyKSA9PiB7XG4gICAgcmV0dXJuIHRzID4gTWF0aC5taW4odHMxLCB0czIpICYmIHRzIDwgTWF0aC5tYXgodHMxLCB0czIpO1xufTtcbmV4cG9ydCBjb25zdCBkdXJhdGlvbiA9IHtcbiAgICBEQVk6IDg2NDAwMDAwLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0SG91cnMoY29uZmlnKSB7XG4gICAgbGV0IGhvdXJzID0gY29uZmlnLmRlZmF1bHRIb3VyO1xuICAgIGxldCBtaW51dGVzID0gY29uZmlnLmRlZmF1bHRNaW51dGU7XG4gICAgbGV0IHNlY29uZHMgPSBjb25maWcuZGVmYXVsdFNlY29uZHM7XG4gICAgaWYgKGNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbWluSG91ciA9IGNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IG1pbk1pbnV0ZXMgPSBjb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGNvbnN0IG1pblNlY29uZHMgPSBjb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgIGlmIChob3VycyA8IG1pbkhvdXIpIHtcbiAgICAgICAgICAgIGhvdXJzID0gbWluSG91cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT09IG1pbkhvdXIgJiYgbWludXRlcyA8IG1pbk1pbnV0ZXMpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW5NaW51dGVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VycyA9PT0gbWluSG91ciAmJiBtaW51dGVzID09PSBtaW5NaW51dGVzICYmIHNlY29uZHMgPCBtaW5TZWNvbmRzKVxuICAgICAgICAgICAgc2Vjb25kcyA9IGNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbWF4SHIgPSBjb25maWcubWF4RGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBtYXhNaW51dGVzID0gY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBtYXhIcik7XG4gICAgICAgIGlmIChob3VycyA9PT0gbWF4SHIpXG4gICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWF4TWludXRlcywgbWludXRlcyk7XG4gICAgICAgIGlmIChob3VycyA9PT0gbWF4SHIgJiYgbWludXRlcyA9PT0gbWF4TWludXRlcylcbiAgICAgICAgICAgIHNlY29uZHMgPSBjb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lLCBib29sKSB7XG4gICAgaWYgKGJvb2wgPT09IHRydWUpXG4gICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgY29uc3QgZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJcIjtcbiAgICBlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZiAoY29udGVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck5vZGUobm9kZSkge1xuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50KG5vZGUsIGNvbmRpdGlvbikge1xuICAgIGlmIChjb25kaXRpb24obm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnQobm9kZS5wYXJlbnROb2RlLCBjb25kaXRpb24pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTnVtYmVySW5wdXQoaW5wdXRDbGFzc05hbWUsIG9wdHMpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSwgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSwgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSwgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgOS4wXCIpID09PSAtMSkge1xuICAgICAgICBudW1JbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG51bUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgbnVtSW5wdXQucGF0dGVybiA9IFwiXFxcXGQqXCI7XG4gICAgfVxuICAgIGlmIChvcHRzICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdHMpXG4gICAgICAgICAgICBudW1JbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRzW2tleV0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dVcCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xuICAgIHJldHVybiB3cmFwcGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50VGFyZ2V0KGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaW50LCBwYWQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmNvbnN0IGRvTm90aGluZyA9ICgpID0+IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtb250aFRvU3RyID0gKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkgPT4gbG9jYWxlLm1vbnRoc1tzaG9ydGhhbmQgPyBcInNob3J0aGFuZFwiIDogXCJsb25naGFuZFwiXVttb250aE51bWJlcl07XG5leHBvcnQgY29uc3QgcmV2Rm9ybWF0ID0ge1xuICAgIEQ6IGRvTm90aGluZyxcbiAgICBGOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGhOYW1lLCBsb2NhbGUpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLmxvbmdoYW5kLmluZGV4T2YobW9udGhOYW1lKSk7XG4gICAgfSxcbiAgICBHOiAoZGF0ZU9iaiwgaG91cikgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgIH0sXG4gICAgSDogKGRhdGVPYmosIGhvdXIpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIEo6IChkYXRlT2JqLCBkYXkpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBLOiAoZGF0ZU9iaiwgYW1QTSwgbG9jYWxlKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyKSArXG4gICAgICAgICAgICAxMiAqIGludChuZXcgUmVnRXhwKGxvY2FsZS5hbVBNWzFdLCBcImlcIikudGVzdChhbVBNKSkpO1xuICAgIH0sXG4gICAgTTogZnVuY3Rpb24gKGRhdGVPYmosIHNob3J0TW9udGgsIGxvY2FsZSkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMuc2hvcnRoYW5kLmluZGV4T2Yoc2hvcnRNb250aCkpO1xuICAgIH0sXG4gICAgUzogKGRhdGVPYmosIHNlY29uZHMpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xuICAgIH0sXG4gICAgVTogKF8sIHVuaXhTZWNvbmRzKSA9PiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhTZWNvbmRzKSAqIDEwMDApLFxuICAgIFc6IGZ1bmN0aW9uIChkYXRlT2JqLCB3ZWVrTnVtLCBsb2NhbGUpIHtcbiAgICAgICAgY29uc3Qgd2Vla051bWJlciA9IHBhcnNlSW50KHdlZWtOdW0pO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCAwLCAyICsgKHdlZWtOdW1iZXIgLSAxKSAqIDcsIDAsIDAsIDAsIDApO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpICsgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcbiAgICBZOiAoZGF0ZU9iaiwgeWVhcikgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKHBhcnNlRmxvYXQoeWVhcikpO1xuICAgIH0sXG4gICAgWjogKF8sIElTT0RhdGUpID0+IG5ldyBEYXRlKElTT0RhdGUpLFxuICAgIGQ6IChkYXRlT2JqLCBkYXkpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBoOiAoZGF0ZU9iaiwgaG91cikgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xuICAgIH0sXG4gICAgaTogKGRhdGVPYmosIG1pbnV0ZXMpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRNaW51dGVzKHBhcnNlRmxvYXQobWludXRlcykpO1xuICAgIH0sXG4gICAgajogKGRhdGVPYmosIGRheSkgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcbiAgICB9LFxuICAgIGw6IGRvTm90aGluZyxcbiAgICBtOiAoZGF0ZU9iaiwgbW9udGgpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChwYXJzZUZsb2F0KG1vbnRoKSAtIDEpO1xuICAgIH0sXG4gICAgbjogKGRhdGVPYmosIG1vbnRoKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcbiAgICB9LFxuICAgIHM6IChkYXRlT2JqLCBzZWNvbmRzKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcbiAgICB9LFxuICAgIHU6IChfLCB1bml4TWlsbFNlY29uZHMpID0+IG5ldyBEYXRlKHBhcnNlRmxvYXQodW5peE1pbGxTZWNvbmRzKSksXG4gICAgdzogZG9Ob3RoaW5nLFxuICAgIHk6IChkYXRlT2JqLCB5ZWFyKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIoMjAwMCArIHBhcnNlRmxvYXQoeWVhcikpO1xuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHRva2VuUmVnZXggPSB7XG4gICAgRDogXCIoXFxcXHcrKVwiLFxuICAgIEY6IFwiKFxcXFx3KylcIixcbiAgICBHOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIEg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgSjogXCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixcbiAgICBLOiBcIlwiLFxuICAgIE06IFwiKFxcXFx3KylcIixcbiAgICBTOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIFU6IFwiKC4rKVwiLFxuICAgIFc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgWTogXCIoXFxcXGR7NH0pXCIsXG4gICAgWjogXCIoLispXCIsXG4gICAgZDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBoOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIGk6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgajogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBsOiBcIihcXFxcdyspXCIsXG4gICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBuOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIHM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgdTogXCIoLispXCIsXG4gICAgdzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICB5OiBcIihcXFxcZHsyfSlcIixcbn07XG5leHBvcnQgY29uc3QgZm9ybWF0cyA9IHtcbiAgICBaOiAoZGF0ZSkgPT4gZGF0ZS50b0lTT1N0cmluZygpLFxuICAgIEQ6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5zaG9ydGhhbmRbZm9ybWF0cy53KGRhdGUsIGxvY2FsZSwgb3B0aW9ucyldO1xuICAgIH0sXG4gICAgRjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xuICAgIH0sXG4gICAgRzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gcGFkKGZvcm1hdHMuaChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpKTtcbiAgICB9LFxuICAgIEg6IChkYXRlKSA9PiBwYWQoZGF0ZS5nZXRIb3VycygpKSxcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUub3JkaW5hbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGRhdGUuZ2V0RGF0ZSgpICsgbG9jYWxlLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICA6IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIH0sXG4gICAgSzogKGRhdGUsIGxvY2FsZSkgPT4gbG9jYWxlLmFtUE1baW50KGRhdGUuZ2V0SG91cnMoKSA+IDExKV0sXG4gICAgTTogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUsIGxvY2FsZSk7XG4gICAgfSxcbiAgICBTOiAoZGF0ZSkgPT4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKSxcbiAgICBVOiAoZGF0ZSkgPT4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwLFxuICAgIFc6IGZ1bmN0aW9uIChkYXRlLCBfLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmdldFdlZWsoZGF0ZSk7XG4gICAgfSxcbiAgICBZOiAoZGF0ZSkgPT4gcGFkKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCksXG4gICAgZDogKGRhdGUpID0+IHBhZChkYXRlLmdldERhdGUoKSksXG4gICAgaDogKGRhdGUpID0+IChkYXRlLmdldEhvdXJzKCkgJSAxMiA/IGRhdGUuZ2V0SG91cnMoKSAlIDEyIDogMTIpLFxuICAgIGk6IChkYXRlKSA9PiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpLFxuICAgIGo6IChkYXRlKSA9PiBkYXRlLmdldERhdGUoKSxcbiAgICBsOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMubG9uZ2hhbmRbZGF0ZS5nZXREYXkoKV07XG4gICAgfSxcbiAgICBtOiAoZGF0ZSkgPT4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgIG46IChkYXRlKSA9PiBkYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgIHM6IChkYXRlKSA9PiBkYXRlLmdldFNlY29uZHMoKSxcbiAgICB1OiAoZGF0ZSkgPT4gZGF0ZS5nZXRUaW1lKCksXG4gICAgdzogKGRhdGUpID0+IGRhdGUuZ2V0RGF5KCksXG4gICAgeTogKGRhdGUpID0+IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKSxcbn07XG4iLCJleHBvcnQgY29uc3QgcGFkID0gKG51bWJlciwgbGVuZ3RoID0gMikgPT4gYDAwMCR7bnVtYmVyfWAuc2xpY2UobGVuZ3RoICogLTEpO1xuZXhwb3J0IGNvbnN0IGludCA9IChib29sKSA9PiAoYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwKTtcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbiwgd2FpdCkge1xuICAgIGxldCB0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgd2FpdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBhcnJheWlmeSA9IChvYmopID0+IG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gb2JqIDogW29ial07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChrZXkpID0+ICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xufVxuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG52YXIgQ29ubmVjdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBDb25uZWN0b3Iob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0b3IpO1xuXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGNvbm5lY3RvciBvcHRpb25zLlxyXG4gICAgICovXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICB9LFxuICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgIGhvc3Q6IG51bGwsXG4gICAgICBrZXk6IG51bGwsXG4gICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgIH07XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG4gIC8qKlxyXG4gICAqIE1lcmdlIHRoZSBjdXN0b20gb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0cy5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb25uZWN0b3IsIFt7XG4gICAga2V5OiBcInNldE9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW4oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgQ1NSRiB0b2tlbiBmcm9tIHRoZSBwYWdlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjc3JmVG9rZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NyZlRva2VuKCkge1xuICAgICAgdmFyIHNlbGVjdG9yO1xuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jc3JmVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jc3JmVG9rZW47XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgJiYgKHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpKSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25uZWN0b3I7XG59KCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBiYXNpYyBjaGFubmVsLlxyXG4gKi9cbnZhciBDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbm5lbCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwibGlzdGVuRm9yV2hpc3BlclwiLFxuXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGEgd2hpc3BlciBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5vdGlmaWNhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYSB3aGlzcGVyIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nRm9yV2hpc3BlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3BMaXN0ZW5pbmcoJy5jbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbi8qKlxyXG4gKiBFdmVudCBuYW1lIGZvcm1hdHRlclxyXG4gKi9cbnZhciBFdmVudEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRXZlbnRGb3JtYXR0ZXIobmFtZXNwYWNlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Rm9ybWF0dGVyKTtcblxuICAgIHRoaXMuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gIH1cbiAgLyoqXHJcbiAgICogRm9ybWF0IHRoZSBnaXZlbiBldmVudCBuYW1lLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50Rm9ybWF0dGVyLCBbe1xuICAgIGtleTogXCJmb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0KGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2hhckF0KDApID09PSAnLicgfHwgZXZlbnQuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnN1YnN0cigxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBldmVudCBuYW1lc3BhY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldE5hbWVzcGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgX2luaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlckNoYW5uZWwpO1xuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gUHVzaGVyQ2hhbm5lbChwdXNoZXIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG5cbiAgICBfdGhpcy5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gYSBQdXNoZXIgY2hhbm5lbC5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYWxsIGV2ZW50cyBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuVG9BbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuVG9BbGwoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kX2dsb2JhbChmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0YXJ0c1dpdGgoJ3B1c2hlcjonKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBfdGhpczIub3B0aW9ucy5uYW1lc3BhY2UucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZEV2ZW50ID0gZXZlbnQuc3RhcnRzV2l0aChuYW1lc3BhY2UpID8gZXZlbnQuc3Vic3RyaW5nKG5hbWVzcGFjZS5sZW5ndGggKyAxKSA6ICcuJyArIGV2ZW50O1xuICAgICAgICBjYWxsYmFjayhmb3JtYXR0ZWRFdmVudCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYWxsIGV2ZW50cyBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvQWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb0FsbChjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kX2dsb2JhbCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZWQoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgIGNhbGxiYWNrKHN0YXR1cyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgYSBjaGFubmVsIHRvIGFuIGV2ZW50LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJDaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcblxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcihcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgX2luaGVyaXRzKFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKFwiY2xpZW50LVwiLmNvbmNhdChldmVudE5hbWUpLCBkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgcHJlc2VuY2UgY2hhbm5lbC5cclxuICovXG5cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlclByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gUHVzaGVyUHJlc2VuY2VDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwiaGVyZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soT2JqZWN0LmtleXMoZGF0YS5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5tZW1iZXJzW2tdO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxyXG4gICAqL1xuICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIC8qKlxyXG4gICAgICogVGhlIGV2ZW50IGNhbGxiYWNrcyBhcHBsaWVkIHRvIHRoZSBzb2NrZXQuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgIC8qKlxyXG4gICAgICogVXNlciBzdXBwbGllZCBjYWxsYmFja3MgZm9yIGV2ZW50cyBvbiB0aGlzIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICAgIF90aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgIF90aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG5cbiAgICBfdGhpcy5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gYSBTb2NrZXQuaW8gY2hhbm5lbC5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb0NoYW5uZWwsIFt7XG4gICAga2V5OiBcInN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdWJzY3JpYmUnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gY2hhbm5lbCBhbmQgdWJpbmQgZXZlbnQgY2FsbGJhY2tzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCd1bnN1YnNjcmliZScsIHtcbiAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudW5iaW5kRXZlbnQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZWQoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIGNhbGxiYWNrKHNvY2tldCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCB0byBhbiBldmVudCBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IGZ1bmN0aW9uIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09PSBjaGFubmVsICYmIF90aGlzMi5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBfdGhpczIubGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgICByZXR1cm4gY2IoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIHRoaXMuZXZlbnRzW2V2ZW50XSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuYmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCBmcm9tIGFsbCBzdG9yZWQgZXZlbnQgY2FsbGJhY2tzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMudW5iaW5kRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVW5iaW5kIHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBldmVudC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgIHJldHVybiBjYiAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNhbGxiYWNrIHx8IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCB0aGlzLmV2ZW50c1tldmVudF0pO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb1ByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBfU29ja2V0SW9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcblxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NsaWVudCBldmVudCcsIHtcbiAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICBldmVudDogXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvUHJpdmF0ZUNoYW5uZWw7XG59KFNvY2tldElvQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gcHJlc2VuY2UgY2hhbm5lbC5cclxuICovXG5cbnZhciBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NvY2tldElvUHJpdmF0ZUNoYW5uKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgX1NvY2tldElvUHJpdmF0ZUNoYW5uKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcblxuICBmdW5jdGlvbiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJoZXJlXCIsXG5cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgIGNhbGxiYWNrKG1lbWJlcnMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmpvaW5pbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbigncHJlc2VuY2U6bGVhdmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWw7XG59KFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgbnVsbCBjaGFubmVsLlxyXG4gKi9cblxudmFyIE51bGxDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoTnVsbENoYW5uZWwsIF9DaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE51bGxDaGFubmVsKTtcblxuICBmdW5jdGlvbiBOdWxsQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbENoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE51bGxDaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcblxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlIHRvIGEgY2hhbm5lbC5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7fSAvL1xuXG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGEgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7fSAvL1xuXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGEgc3Vic2NyaXB0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZWQoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQmluZCBhIGNoYW5uZWwgdG8gYW4gZXZlbnQuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bGxDaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJpdmF0ZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIE51bGxQcml2YXRlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhOdWxsUHJpdmF0ZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIE51bGxQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbFByaXZhdGVDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcblxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsUHJpdmF0ZUNoYW5uZWw7XG59KE51bGxDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJlc2VuY2UgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsUHJlc2VuY2VDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTnVsbENoYW5uZWwpIHtcbiAgX2luaGVyaXRzKE51bGxQcmVzZW5jZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsUHJlc2VuY2VDaGFubmVsKTtcblxuICBmdW5jdGlvbiBOdWxsUHJlc2VuY2VDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgIGtleTogXCJoZXJlXCIsXG5cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImpvaW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndoaXNwZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsUHJlc2VuY2VDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNyZWF0ZXMgYSBjb25uZWN0b3IgdG8gUHVzaGVyLlxyXG4gKi9cblxudmFyIFB1c2hlckNvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICBfaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlckNvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gUHVzaGVyQ29ubmVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDb25uZWN0b3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvKipcclxuICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmcmVzaCBQdXNoZXIgY29ubmVjdGlvbi5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSB0aGlzLm9wdGlvbnMuY2xpZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgZW5jcnlwdGVkIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWVdID0gbmV3IFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLWVuY3J5cHRlZC0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcmVzZW5jZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICBfdGhpczIubGVhdmVDaGFubmVsKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgUHVzaGVyIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubm5lY3RvciB0byBhIFNvY2tldC5pbyBzZXJ2ZXIuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgX2luaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNvY2tldElvQ29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBTb2NrZXRJb0Nvbm5lY3RvcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9Db25uZWN0b3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvKipcclxuICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmcmVzaCBTb2NrZXQuaW8gY29ubmVjdGlvbi5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb0Nvbm5lY3RvciwgW3tcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpbyA9IHRoaXMuZ2V0U29ja2V0SU8oKTtcbiAgICAgIHRoaXMuc29ja2V0ID0gaW8odGhpcy5vcHRpb25zLmhvc3QsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKF90aGlzMi5jaGFubmVscykuZm9yRWFjaChmdW5jdGlvbiAoY2hhbm5lbCkge1xuICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHNvY2tldC5pbyBtb2R1bGUgZnJvbSBnbG9iYWwgc2NvcGUgb3Igb3B0aW9ucy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U29ja2V0SU9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SU8oKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xpZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gaW87XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0LmlvIGNsaWVudCBub3QgZm91bmQuIFNob3VsZCBiZSBnbG9iYWxseSBhdmFpbGFibGUgb3IgcGFzc2VkIHZpYSBvcHRpb25zLmNsaWVudCcpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKS5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcml2YXRlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJpdmF0ZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcmVzZW5jZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByZXNlbmNlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGFubmVscyA9IFtuYW1lLCAncHJpdmF0ZS0nICsgbmFtZSwgJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgIGNoYW5uZWxzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgX3RoaXMzLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvY2tldC5pZDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IFNvY2tldGlvIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0SW9Db25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNyZWF0ZXMgYSBudWxsIGNvbm5lY3Rvci5cclxuICovXG5cbnZhciBOdWxsQ29ubmVjdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIF9pbmhlcml0cyhOdWxsQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE51bGxDb25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIE51bGxDb25uZWN0b3IoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDb25uZWN0b3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvKipcclxuICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgYSBmcmVzaCBjb25uZWN0aW9uLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE51bGxDb25uZWN0b3IsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHt9IC8vXG5cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbENoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsUHJpdmF0ZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByZXNlbmNlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsUHJlc2VuY2VDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7fSAvL1xuXG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChuYW1lKSB7fSAvL1xuXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuICdmYWtlLXNvY2tldC1pZCc7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkgey8vXG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE51bGxDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIHRoZSBwcmltYXJ5IEFQSSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBicm9hZGNhc3RpbmcuXHJcbiAqL1xuXG52YXIgRWNobyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gRWNobyhvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVjaG8pO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNvbm5lY3QoKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLndpdGhvdXRJbnRlcmNlcHRvcnMpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcmNlcHRvcnMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXHJcbiAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEVjaG8sIFt7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChfY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoX2NoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdwdXNoZXInKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3NvY2tldC5pbycpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgU29ja2V0SW9Db25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdudWxsJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBOdWxsQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyB0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IGZyb20gdGhlIEVjaG8gc2VydmVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKGNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5saXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJpdmF0ZShjaGFubmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBlbmNyeXB0ZWQgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmNyeXB0ZWRQcml2YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuY3J5cHRlZFByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmVuY3J5cHRlZFByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgU29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3Iuc29ja2V0SWQoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciAzcmQgcGFydHkgcmVxdWVzdCBpbnRlcmNlcHRpb3JzLiBUaGVzZSBhcmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5XHJcbiAgICAgKiBzZW5kIGEgY29ubmVjdGlvbnMgc29ja2V0IGlkIHRvIGEgTGFyYXZlbCBhcHAgd2l0aCBhIFgtU29ja2V0LUlkIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJJbnRlcmNlcHRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcnMoKSB7XG4gICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIFZ1ZSBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIFZ1ZS5odHRwLmludGVyY2VwdG9ycy5wdXNoKGZ1bmN0aW9uIChyZXF1ZXN0LCBuZXh0KSB7XG4gICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnWC1Tb2NrZXQtSUQnLCBfdGhpcy5zb2NrZXRJZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIEF4aW9zIEhUVFAgaW50ZXJjZXB0b3IgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICBjb25maWcuaGVhZGVyc1snWC1Tb2NrZXQtSWQnXSA9IF90aGlzMi5zb2NrZXRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGpRdWVyeSBBamF4UHJlZmlsdGVyIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uIChvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIHhocikge1xuICAgICAgICAgIGlmIChfdGhpczMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVjaG87XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVjaG87XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohXG4gKiBQdXNoZXIgSmF2YVNjcmlwdCBMaWJyYXJ5IHY3LjAuM1xuICogaHR0cHM6Ly9wdXNoZXIuY29tL1xuICpcbiAqIENvcHlyaWdodCAyMDIwLCBQdXNoZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5jZS5cbiAqL1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQdXNoZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFBhY2thZ2UgYmFzZTY0IGltcGxlbWVudHMgQmFzZTY0IGVuY29kaW5nIGFuZCBkZWNvZGluZy5cbiAqL1xuLy8gSW52YWxpZCBjaGFyYWN0ZXIgdXNlZCBpbiBkZWNvZGluZyB0byBpbmRpY2F0ZVxuLy8gdGhhdCB0aGUgY2hhcmFjdGVyIHRvIGRlY29kZSBpcyBvdXQgb2YgcmFuZ2Ugb2Zcbi8vIGFscGhhYmV0IGFuZCBjYW5ub3QgYmUgZGVjb2RlZC5cbnZhciBJTlZBTElEX0JZVEUgPSAyNTY7XG4vKipcbiAqIEltcGxlbWVudHMgc3RhbmRhcmQgQmFzZTY0IGVuY29kaW5nLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBDb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPKGRjaGVzdCk6IG1ldGhvZHMgdG8gZW5jb2RlIGNodW5rLWJ5LWNodW5rLlxuICAgIGZ1bmN0aW9uIENvZGVyKF9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgIGlmIChfcGFkZGluZ0NoYXJhY3RlciA9PT0gdm9pZCAwKSB7IF9wYWRkaW5nQ2hhcmFjdGVyID0gXCI9XCI7IH1cbiAgICAgICAgdGhpcy5fcGFkZGluZ0NoYXJhY3RlciA9IF9wYWRkaW5nQ2hhcmFjdGVyO1xuICAgIH1cbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGxlbmd0aCAqIDggKyA1KSAvIDYgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobGVuZ3RoICsgMikgLyAzICogNCB8IDA7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIG91dCA9IFwiXCI7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBkYXRhLmxlbmd0aCAtIDI7IGkgKz0gMykge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAoZGF0YVtpICsgMV0gPDwgOCkgfCAoZGF0YVtpICsgMl0pO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDAgKiA2KSAmIDYzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVmdCA9IGRhdGEubGVuZ3RoIC0gaTtcbiAgICAgICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYyA9IChkYXRhW2ldIDw8IDE2KSB8IChsZWZ0ID09PSAyID8gZGF0YVtpICsgMV0gPDwgOCA6IDApO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBpZiAobGVmdCA9PT0gMikge1xuICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAxICogNikgJiA2Myk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fcGFkZGluZ0NoYXJhY3RlciB8fCBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLm1heERlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA2ICsgNykgLyA4IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoIC8gNCAqIDMgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhEZWNvZGVkTGVuZ3RoKHMubGVuZ3RoIC0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKSk7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSB0aGlzLl9nZXRQYWRkaW5nTGVuZ3RoKHMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gcy5sZW5ndGggLSBwYWRkaW5nTGVuZ3RoO1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCkpO1xuICAgICAgICB2YXIgb3AgPSAwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBoYXZlQmFkID0gMDtcbiAgICAgICAgdmFyIHYwID0gMCwgdjEgPSAwLCB2MiA9IDAsIHYzID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDApKTtcbiAgICAgICAgICAgIHYxID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDEpKTtcbiAgICAgICAgICAgIHYyID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDIpKTtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MCA8PCAyKSB8ICh2MSA+Pj4gNCk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYyIDw8IDYpIHwgdjM7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYwICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MSAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYzICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdjAgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MiAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDMpIHtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGF2ZUJhZCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBjaGFyYWN0ZXJzIGZvciBkZWNvZGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLy8gU3RhbmRhcmQgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXMsXG4gICAgLy8gd2hpY2ggd2UgbmVlZCB0byBjb252ZXJ0IGJldHdlZW4uXG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICArICAgL1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQzICA0N1xuICAgIC8vXG4gICAgLy8gRW5jb2RlIDYgYml0cyBpbiBiIGludG8gYSBuZXcgY2hhcmFjdGVyLlxuICAgIENvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIC8vIEVuY29kaW5nIHVzZXMgY29uc3RhbnQgdGltZSBvcGVyYXRpb25zIGFzIGZvbGxvd3M6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIERlZmluZSBjb21wYXJpc29uIG9mIEEgd2l0aCBCIHVzaW5nIChBIC0gQikgPj4+IDg6XG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPiBCLCB0aGVuIHJlc3VsdCBpcyBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPD0gQiwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvL1xuICAgICAgICAvLyAyLiBEZWZpbmUgc2VsZWN0aW9uIG9mIEMgb3IgMCB1c2luZyBiaXR3aXNlIEFORDogWCAmIEM6XG4gICAgICAgIC8vICAgICAgICAgIGlmIFggPT0gMCwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvLyAgICAgICAgICBpZiBYICE9IDAsIHRoZW4gcmVzdWx0IGlzIENcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMy4gU3RhcnQgd2l0aCB0aGUgc21hbGxlc3QgY29tcGFyaXNvbiAoYiA+PSAwKSwgd2hpY2ggaXMgYWx3YXlzXG4gICAgICAgIC8vICAgIHRydWUsIHNvIHNldCB0aGUgcmVzdWx0IHRvIHRoZSBzdGFydGluZyBBU0NJSSB2YWx1ZSAoNjUpLlxuICAgICAgICAvL1xuICAgICAgICAvLyA0LiBDb250aW51ZSBjb21wYXJpbmcgYiB0byBoaWdoZXIgQVNDSUkgdmFsdWVzLCBhbmQgc2VsZWN0aW5nXG4gICAgICAgIC8vICAgIHplcm8gaWYgY29tcGFyaXNvbiBpc24ndCB0cnVlLCBvdGhlcndpc2Ugc2VsZWN0aW5nIGEgdmFsdWVcbiAgICAgICAgLy8gICAgdG8gYWRkIHRvIHJlc3VsdCwgd2hpY2g6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgIGEpIHVuZG9lcyB0aGUgcHJldmlvdXMgYWRkaXRpb25cbiAgICAgICAgLy8gICAgICAgICAgYikgcHJvdmlkZXMgbmV3IHZhbHVlIHRvIGFkZFxuICAgICAgICAvL1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDMpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDMpIC0gNjMgKyA0Nyk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyBEZWNvZGUgYSBjaGFyYWN0ZXIgY29kZSBpbnRvIGEgYnl0ZS5cbiAgICAvLyBNdXN0IHJldHVybiAyNTYgaWYgY2hhcmFjdGVyIGlzIG91dCBvZiBhbHBoYWJldCByYW5nZS5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvLyBEZWNvZGluZyB3b3JrcyBzaW1pbGFyIHRvIGVuY29kaW5nOiB1c2luZyB0aGUgc2FtZSBjb21wYXJpc29uXG4gICAgICAgIC8vIGZ1bmN0aW9uLCBidXQgbm93IGl0IHdvcmtzIG9uIHJhbmdlczogcmVzdWx0IGlzIGFsd2F5cyBpbmNyZW1lbnRlZFxuICAgICAgICAvLyBieSB2YWx1ZSwgYnV0IHRoaXMgdmFsdWUgYmVjb21lcyB6ZXJvIGlmIHRoZSByYW5nZSBpcyBub3RcbiAgICAgICAgLy8gc2F0aXNmaWVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBEZWNvZGluZyBzdGFydHMgd2l0aCBpbnZhbGlkIHZhbHVlLCAyNTYsIHdoaWNoIGlzIHRoZW5cbiAgICAgICAgLy8gc3VidHJhY3RlZCB3aGVuIHRoZSByYW5nZSBpcyBzYXRpc2ZpZWQuIElmIG5vbmUgb2YgdGhlIHJhbmdlc1xuICAgICAgICAvLyBhcHBseSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgMjU2LCB3aGljaCBpcyB0aGVuIGNoZWNrZWQgYnlcbiAgICAgICAgLy8gdGhlIGNhbGxlciB0byB0aHJvdyBlcnJvci5cbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTsgLy8gc3RhcnQgd2l0aCBpbnZhbGlkIGNoYXJhY3RlclxuICAgICAgICAvLyBjID09IDQzIChjID4gNDIgYW5kIGMgPCA0NClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQyIC0gYykgJiAoYyAtIDQ0KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDMgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gNDcgKGMgPiA0NiBhbmQgYyA8IDQ4KVxuICAgICAgICByZXN1bHQgKz0gKCgoNDYgLSBjKSAmIChjIC0gNDgpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0NyArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuX2dldFBhZGRpbmdMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICB2YXIgcGFkZGluZ0xlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChzW2ldICE9PSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPCA0IHx8IHBhZGRpbmdMZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBwYWRkaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWRkaW5nTGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIENvZGVyO1xufSgpKTtcbmV4cG9ydHMuQ29kZXIgPSBDb2RlcjtcbnZhciBzdGRDb2RlciA9IG5ldyBDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlKGRhdGEpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5mdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBzdGRDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogSW1wbGVtZW50cyBVUkwtc2FmZSBCYXNlNjQgZW5jb2RpbmcuXG4gKiAoU2FtZSBhcyBCYXNlNjQsIGJ1dCAnKycgaXMgcmVwbGFjZWQgd2l0aCAnLScsIGFuZCAnLycgd2l0aCAnXycpLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBVUkxTYWZlQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVSTFNhZmVDb2RlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVUkxTYWZlQ29kZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLy8gVVJMLXNhZmUgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXM6XG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICAtICAgX1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQ1ICA5NVxuICAgIC8vXG4gICAgVVJMU2FmZUNvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBiO1xuICAgICAgICAvLyBiID49IDBcbiAgICAgICAgcmVzdWx0ICs9IDY1O1xuICAgICAgICAvLyBiID4gMjVcbiAgICAgICAgcmVzdWx0ICs9ICgoMjUgLSBiKSA+Pj4gOCkgJiAoKDAgLSA2NSkgLSAyNiArIDk3KTtcbiAgICAgICAgLy8gYiA+IDUxXG4gICAgICAgIHJlc3VsdCArPSAoKDUxIC0gYikgPj4+IDgpICYgKCgyNiAtIDk3KSAtIDUyICsgNDgpO1xuICAgICAgICAvLyBiID4gNjFcbiAgICAgICAgcmVzdWx0ICs9ICgoNjEgLSBiKSA+Pj4gOCkgJiAoKDUyIC0gNDgpIC0gNjIgKyA0NSk7XG4gICAgICAgIC8vIGIgPiA2MlxuICAgICAgICByZXN1bHQgKz0gKCg2MiAtIGIpID4+PiA4KSAmICgoNjIgLSA0NSkgLSA2MyArIDk1KTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocmVzdWx0KTtcbiAgICB9O1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gSU5WQUxJRF9CWVRFO1xuICAgICAgICAvLyBjID09IDQ1IChjID4gNDQgYW5kIGMgPCA0NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ0IC0gYykgJiAoYyAtIDQ2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDUgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gOTUgKGMgPiA5NCBhbmQgYyA8IDk2KVxuICAgICAgICByZXN1bHQgKz0gKCgoOTQgLSBjKSAmIChjIC0gOTYpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA5NSArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gVVJMU2FmZUNvZGVyO1xufShDb2RlcikpO1xuZXhwb3J0cy5VUkxTYWZlQ29kZXIgPSBVUkxTYWZlQ29kZXI7XG52YXIgdXJsU2FmZUNvZGVyID0gbmV3IFVSTFNhZmVDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlVVJMU2FmZShkYXRhKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5lbmNvZGUoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZVVSTFNhZmUgPSBlbmNvZGVVUkxTYWZlO1xuZnVuY3Rpb24gZGVjb2RlVVJMU2FmZShzKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZVVSTFNhZmUgPSBkZWNvZGVVUkxTYWZlO1xuZXhwb3J0cy5lbmNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5lbmNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlZExlbmd0aChzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjQuanMubWFwXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIHV0ZjggaW1wbGVtZW50cyBVVEYtOCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbnZhciBJTlZBTElEX1VURjE2ID0gXCJ1dGY4OiBpbnZhbGlkIHN0cmluZ1wiO1xudmFyIElOVkFMSURfVVRGOCA9IFwidXRmODogaW52YWxpZCBzb3VyY2UgZW5jb2RpbmdcIjtcbi8qKlxuICogRW5jb2RlcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gVVRGLTggYnl0ZSBhcnJheS5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHJlc3VsdCBsZW5ndGggYW5kIGFsbG9jYXRlIG91dHB1dCBhcnJheS5cbiAgICAvLyBlbmNvZGVkTGVuZ3RoKCkgYWxzbyB2YWxpZGF0ZXMgc3RyaW5nIGFuZCB0aHJvd3MgZXJyb3JzLFxuICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgcmVwZWF0IHZhbGlkYXRpb24gaGVyZS5cbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZExlbmd0aChzKSk7XG4gICAgdmFyIHBvcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4YzAgfCBjID4+IDY7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IGMgJiAweDNmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGUwIHwgYyA+PiAxMjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKzsgLy8gZ2V0IG9uZSBtb3JlIGNoYXJhY3RlclxuICAgICAgICAgICAgYyA9IChjICYgMHgzZmYpIDw8IDEwO1xuICAgICAgICAgICAgYyB8PSBzLmNoYXJDb2RlQXQoaSkgJiAweDNmZjtcbiAgICAgICAgICAgIGMgKz0gMHgxMDAwMDtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGYwIHwgYyA+PiAxODtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gMTIpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyByZXF1aXJlZCB0byBlbmNvZGUgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04LlxuICogVGhyb3dzIGlmIHRoZSBzb3VyY2Ugc3RyaW5nIGhhcyBpbnZhbGlkIFVURi0xNiBlbmNvZGluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlZExlbmd0aChzKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8PSAweGRmZmYpIHtcbiAgICAgICAgICAgIGlmIChpID49IHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKzsgLy8gXCJlYXRcIiBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgcmVzdWx0ICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGVuY29kZWRMZW5ndGg7XG4vKipcbiAqIERlY29kZXMgdGhlIGdpdmVuIGJ5dGUgYXJyYXkgZnJvbSBVVEYtOCBpbnRvIGEgc3RyaW5nLlxuICogVGhyb3dzIGlmIGVuY29kaW5nIGlzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShhcnIpIHtcbiAgICB2YXIgY2hhcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYiA9IGFycltpXTtcbiAgICAgICAgaWYgKGIgJiAweDgwKSB7XG4gICAgICAgICAgICB2YXIgbWluID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGIgPCAweGUwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAxIG1vcmUgYnl0ZS5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MWYpIDw8IDYgfCAobjEgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYiA8IDB4ZjApIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkIDIgbW9yZSBieXRlcy5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgdmFyIG4yID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwIHx8IChuMiAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDBmKSA8PCAxMiB8IChuMSAmIDB4M2YpIDw8IDYgfCAobjIgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGY4KSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAzIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMyA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCB8fCAobjMgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTggfCAobjEgJiAweDNmKSA8PCAxMiB8IChuMiAmIDB4M2YpIDw8IDYgfCAobjMgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDEwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA8IG1pbiB8fCAoYiA+PSAweGQ4MDAgJiYgYiA8PSAweGRmZmYpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA+PSAweDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU3Vycm9nYXRlIHBhaXIuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiAtPSAweDEwMDAwO1xuICAgICAgICAgICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgfCAoYiA+PiAxMCkpKTtcbiAgICAgICAgICAgICAgICBiID0gMHhkYzAwIHwgKGIgJiAweDNmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjguanMubWFwXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyByZXF1aXJlZCBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIHJlcXVpcmUoJ3B1c2hlcicpLmRlZmF1bHQgZXRjLlxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLmRlZmF1bHQ7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL3NjcmlwdF9yZWNlaXZlcl9mYWN0b3J5LnRzXG52YXIgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JpcHRSZWNlaXZlckZhY3RvcnkocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIHRoaXMubGFzdElkID0gMDtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFNjcmlwdFJlY2VpdmVyRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLmxhc3RJZDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5wcmVmaXggKyBudW1iZXI7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lICsgJ1snICsgbnVtYmVyICsgJ10nO1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjYWxsYmFja1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpc1tudW1iZXJdID0gY2FsbGJhY2tXcmFwcGVyO1xuICAgICAgICByZXR1cm4geyBudW1iZXI6IG51bWJlciwgaWQ6IGlkLCBuYW1lOiBuYW1lLCBjYWxsYmFjazogY2FsbGJhY2tXcmFwcGVyIH07XG4gICAgfTtcbiAgICBTY3JpcHRSZWNlaXZlckZhY3RvcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICBkZWxldGUgdGhpc1tyZWNlaXZlci5udW1iZXJdO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcmlwdFJlY2VpdmVyRmFjdG9yeTtcbn0oKSk7XG5cbnZhciBTY3JpcHRSZWNlaXZlcnMgPSBuZXcgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KCdfcHVzaGVyX3NjcmlwdF8nLCAnUHVzaGVyLlNjcmlwdFJlY2VpdmVycycpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2RlZmF1bHRzLnRzXG52YXIgRGVmYXVsdHMgPSB7XG4gICAgVkVSU0lPTjogXCI3LjAuM1wiLFxuICAgIFBST1RPQ09MOiA3LFxuICAgIHdzUG9ydDogODAsXG4gICAgd3NzUG9ydDogNDQzLFxuICAgIHdzUGF0aDogJycsXG4gICAgaHR0cEhvc3Q6ICdzb2NranMucHVzaGVyLmNvbScsXG4gICAgaHR0cFBvcnQ6IDgwLFxuICAgIGh0dHBzUG9ydDogNDQzLFxuICAgIGh0dHBQYXRoOiAnL3B1c2hlcicsXG4gICAgc3RhdHNfaG9zdDogJ3N0YXRzLnB1c2hlci5jb20nLFxuICAgIGF1dGhFbmRwb2ludDogJy9wdXNoZXIvYXV0aCcsXG4gICAgYXV0aFRyYW5zcG9ydDogJ2FqYXgnLFxuICAgIGFjdGl2aXR5VGltZW91dDogMTIwMDAwLFxuICAgIHBvbmdUaW1lb3V0OiAzMDAwMCxcbiAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IDEwMDAwLFxuICAgIGNsdXN0ZXI6ICdtdDEnLFxuICAgIGNkbl9odHRwOiBcImh0dHA6Ly9qcy5wdXNoZXIuY29tXCIsXG4gICAgY2RuX2h0dHBzOiBcImh0dHBzOi8vanMucHVzaGVyLmNvbVwiLFxuICAgIGRlcGVuZGVuY3lfc3VmZml4OiBcIlwiXG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdHMgPSAoRGVmYXVsdHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2RlcGVuZGVuY3lfbG9hZGVyLnRzXG5cblxudmFyIGRlcGVuZGVuY3lfbG9hZGVyX0RlcGVuZGVuY3lMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lMb2FkZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnJlY2VpdmVycyA9IG9wdGlvbnMucmVjZWl2ZXJzIHx8IFNjcmlwdFJlY2VpdmVycztcbiAgICAgICAgdGhpcy5sb2FkaW5nID0ge307XG4gICAgfVxuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdICYmIHNlbGYubG9hZGluZ1tuYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3Qoc2VsZi5nZXRQYXRoKG5hbWUsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIHZhciByZWNlaXZlciA9IHNlbGYucmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXShlcnJvciwgc3VjY2Vzc0NhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBjZG47XG4gICAgICAgIHZhciBwcm90b2NvbCA9IHJ1bnRpbWUuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgaWYgKChvcHRpb25zICYmIG9wdGlvbnMudXNlVExTKSB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICAgICAgICAgIGNkbiA9IHRoaXMub3B0aW9ucy5jZG5faHR0cHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNkbi5yZXBsYWNlKC9cXC8qJC8sICcnKSArICcvJyArIHRoaXMub3B0aW9ucy52ZXJzaW9uO1xuICAgIH07XG4gICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0UGF0aCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJvb3Qob3B0aW9ucykgKyAnLycgKyBuYW1lICsgdGhpcy5vcHRpb25zLnN1ZmZpeCArICcuanMnO1xuICAgIH07XG4gICAgcmV0dXJuIERlcGVuZGVuY3lMb2FkZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVwZW5kZW5jeV9sb2FkZXIgPSAoZGVwZW5kZW5jeV9sb2FkZXJfRGVwZW5kZW5jeUxvYWRlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vZGVwZW5kZW5jaWVzLnRzXG5cblxuXG52YXIgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gbmV3IFNjcmlwdFJlY2VpdmVyRmFjdG9yeSgnX3B1c2hlcl9kZXBlbmRlbmNpZXMnLCAnUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycycpO1xudmFyIERlcGVuZGVuY2llcyA9IG5ldyBkZXBlbmRlbmN5X2xvYWRlcih7XG4gICAgY2RuX2h0dHA6IGRlZmF1bHRzLmNkbl9odHRwLFxuICAgIGNkbl9odHRwczogZGVmYXVsdHMuY2RuX2h0dHBzLFxuICAgIHZlcnNpb246IGRlZmF1bHRzLlZFUlNJT04sXG4gICAgc3VmZml4OiBkZWZhdWx0cy5kZXBlbmRlbmN5X3N1ZmZpeCxcbiAgICByZWNlaXZlcnM6IERlcGVuZGVuY2llc1JlY2VpdmVyc1xufSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdXJsX3N0b3JlLnRzXG52YXIgdXJsU3RvcmUgPSB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vcHVzaGVyLmNvbScsXG4gICAgdXJsczoge1xuICAgICAgICBhdXRoZW50aWNhdGlvbkVuZHBvaW50OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvYXV0aGVudGljYXRpbmdfdXNlcnMnXG4gICAgICAgIH0sXG4gICAgICAgIGphdmFzY3JpcHRRdWlja1N0YXJ0OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvamF2YXNjcmlwdF9xdWlja19zdGFydCdcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcmluZ0NsaWVudEV2ZW50czoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2NsaWVudF9hcGlfZ3VpZGUvY2xpZW50X2V2ZW50cyN0cmlnZ2VyLWV2ZW50cydcbiAgICAgICAgfSxcbiAgICAgICAgZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQ6IHtcbiAgICAgICAgICAgIGZ1bGxVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vcHVzaGVyL3B1c2hlci1qcy90cmVlL2NjNDkxMDE1MzcxYTRiZGU1NzQzZDFjODdhMGZiYWMwZmViNTMxOTUjZW5jcnlwdGVkLWNoYW5uZWwtc3VwcG9ydCdcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgYnVpbGRMb2dTdWZmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHVybFByZWZpeCA9ICdTZWU6JztcbiAgICB2YXIgdXJsT2JqID0gdXJsU3RvcmUudXJsc1trZXldO1xuICAgIGlmICghdXJsT2JqKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIHVybDtcbiAgICBpZiAodXJsT2JqLmZ1bGxVcmwpIHtcbiAgICAgICAgdXJsID0gdXJsT2JqLmZ1bGxVcmw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybE9iai5wYXRoKSB7XG4gICAgICAgIHVybCA9IHVybFN0b3JlLmJhc2VVcmwgKyB1cmxPYmoucGF0aDtcbiAgICB9XG4gICAgaWYgKCF1cmwpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gdXJsUHJlZml4ICsgXCIgXCIgKyB1cmw7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXJsX3N0b3JlID0gKHsgYnVpbGRMb2dTdWZmaXg6IGJ1aWxkTG9nU3VmZml4IH0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Vycm9ycy50c1xudmFyIF9fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIEJhZEV2ZW50TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhZEV2ZW50TmFtZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYWRFdmVudE5hbWUobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQmFkRXZlbnROYW1lO1xufShFcnJvcikpO1xuXG52YXIgUmVxdWVzdFRpbWVkT3V0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVxdWVzdFRpbWVkT3V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlcXVlc3RUaW1lZE91dChtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBSZXF1ZXN0VGltZWRPdXQ7XG59KEVycm9yKSk7XG5cbnZhciBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zcG9ydFByaW9yaXR5VG9vTG93LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93O1xufShFcnJvcikpO1xuXG52YXIgVHJhbnNwb3J0Q2xvc2VkID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNwb3J0Q2xvc2VkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydENsb3NlZChtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc3BvcnRDbG9zZWQ7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZEZlYXR1cmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVbnN1cHBvcnRlZEZlYXR1cmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRGZWF0dXJlKG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkRmVhdHVyZTtcbn0oRXJyb3IpKTtcblxudmFyIFVuc3VwcG9ydGVkVHJhbnNwb3J0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRUcmFuc3BvcnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRUcmFuc3BvcnQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVW5zdXBwb3J0ZWRUcmFuc3BvcnQ7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRTdHJhdGVneSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVbnN1cHBvcnRlZFN0cmF0ZWd5KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkU3RyYXRlZ3k7XG59KEVycm9yKSk7XG5cbnZhciBIVFRQQXV0aEVycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSFRUUEF1dGhFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVFRQQXV0aEVycm9yKHN0YXR1cywgbXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBIVFRQQXV0aEVycm9yO1xufShFcnJvcikpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvYXV0aC94aHJfYXV0aC50c1xuXG5cblxudmFyIGFqYXggPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCB4aHI7XG4gICAgeGhyID0gcnVudGltZS5jcmVhdGVYSFIoKTtcbiAgICB4aHIub3BlbignUE9TVCcsIHNlbGYub3B0aW9ucy5hdXRoRW5kcG9pbnQsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgZm9yICh2YXIgaGVhZGVyTmFtZSBpbiB0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzW2hlYWRlck5hbWVdKTtcbiAgICB9XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgSFRUUEF1dGhFcnJvcigyMDAsICdKU09OIHJldHVybmVkIGZyb20gYXV0aCBlbmRwb2ludCB3YXMgaW52YWxpZCwgeWV0IHN0YXR1cyBjb2RlIHdhcyAyMDAuIERhdGEgd2FzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQpLCB7IGF1dGg6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2F1dGhlbnRpY2F0aW9uRW5kcG9pbnQnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgSFRUUEF1dGhFcnJvcih4aHIuc3RhdHVzLCAnVW5hYmxlIHRvIHJldHJpZXZlIGF1dGggc3RyaW5nIGZyb20gYXV0aCBlbmRwb2ludCAtICcgK1xuICAgICAgICAgICAgICAgICAgICAoXCJyZWNlaXZlZCBzdGF0dXM6IFwiICsgeGhyLnN0YXR1cyArIFwiIGZyb20gXCIgKyBzZWxmLm9wdGlvbnMuYXV0aEVuZHBvaW50ICsgXCIuIFwiKSArXG4gICAgICAgICAgICAgICAgICAgIChcIkNsaWVudHMgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGpvaW4gcHJpdmF0ZSBvciBwcmVzZW5jZSBjaGFubmVscy4gXCIgKyBzdWZmaXgpKSwgeyBhdXRoOiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNlbmQodGhpcy5jb21wb3NlUXVlcnkoc29ja2V0SWQpKTtcbiAgICByZXR1cm4geGhyO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHhocl9hdXRoID0gKGFqYXgpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Jhc2U2NC50c1xuZnVuY3Rpb24gZW5jb2RlKHMpIHtcbiAgICByZXR1cm4gYnRvYSh1dG9iKHMpKTtcbn1cbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGI2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xudmFyIGI2NHRhYiA9IHt9O1xuZm9yICh2YXIgYmFzZTY0X2kgPSAwLCBsID0gYjY0Y2hhcnMubGVuZ3RoOyBiYXNlNjRfaSA8IGw7IGJhc2U2NF9pKyspIHtcbiAgICBiNjR0YWJbYjY0Y2hhcnMuY2hhckF0KGJhc2U2NF9pKV0gPSBiYXNlNjRfaTtcbn1cbnZhciBjYl91dG9iID0gZnVuY3Rpb24gKGMpIHtcbiAgICB2YXIgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIGNjIDwgMHg4MFxuICAgICAgICA/IGNcbiAgICAgICAgOiBjYyA8IDB4ODAwXG4gICAgICAgICAgICA/IGZyb21DaGFyQ29kZSgweGMwIHwgKGNjID4+PiA2KSkgKyBmcm9tQ2hhckNvZGUoMHg4MCB8IChjYyAmIDB4M2YpKVxuICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUoMHhlMCB8ICgoY2MgPj4+IDEyKSAmIDB4MGYpKSArXG4gICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoKGNjID4+PiA2KSAmIDB4M2YpKSArXG4gICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSk7XG59O1xudmFyIHV0b2IgPSBmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiB1LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csIGNiX3V0b2IpO1xufTtcbnZhciBjYl9lbmNvZGUgPSBmdW5jdGlvbiAoY2NjKSB7XG4gICAgdmFyIHBhZGxlbiA9IFswLCAyLCAxXVtjY2MubGVuZ3RoICUgM107XG4gICAgdmFyIG9yZCA9IChjY2MuY2hhckNvZGVBdCgwKSA8PCAxNikgfFxuICAgICAgICAoKGNjYy5sZW5ndGggPiAxID8gY2NjLmNoYXJDb2RlQXQoMSkgOiAwKSA8PCA4KSB8XG4gICAgICAgIChjY2MubGVuZ3RoID4gMiA/IGNjYy5jaGFyQ29kZUF0KDIpIDogMCk7XG4gICAgdmFyIGNoYXJzID0gW1xuICAgICAgICBiNjRjaGFycy5jaGFyQXQob3JkID4+PiAxOCksXG4gICAgICAgIGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiAxMikgJiA2MyksXG4gICAgICAgIHBhZGxlbiA+PSAyID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDYpICYgNjMpLFxuICAgICAgICBwYWRsZW4gPj0gMSA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdChvcmQgJiA2MylcbiAgICBdO1xuICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbn07XG52YXIgYnRvYSA9IHdpbmRvdy5idG9hIHx8XG4gICAgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVwbGFjZSgvW1xcc1xcU117MSwzfS9nLCBjYl9lbmNvZGUpO1xuICAgIH07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdGltZXJzL2Fic3RyYWN0X3RpbWVyLnRzXG52YXIgVGltZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVyKHNldCwgY2xlYXIsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyID0gY2xlYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXIgPSBjYWxsYmFjayhfdGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gICAgVGltZXIucHJvdG90eXBlLmlzUnVubmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgIT09IG51bGw7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuZW5zdXJlQWJvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRpbWVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFic3RyYWN0X3RpbWVyID0gKFRpbWVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy90aW1lcnMvaW5kZXgudHNcbnZhciB0aW1lcnNfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiB0aW1lcnNfY2xlYXJUaW1lb3V0KHRpbWVyKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG59XG5mdW5jdGlvbiB0aW1lcnNfY2xlYXJJbnRlcnZhbCh0aW1lcikge1xuICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbn1cbnZhciBPbmVPZmZUaW1lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdGltZXJzX2V4dGVuZHMoT25lT2ZmVGltZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT25lT2ZmVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzZXRUaW1lb3V0LCB0aW1lcnNfY2xlYXJUaW1lb3V0LCBkZWxheSwgZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBPbmVPZmZUaW1lcjtcbn0oYWJzdHJhY3RfdGltZXIpKTtcblxudmFyIFBlcmlvZGljVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRpbWVyc19leHRlbmRzKFBlcmlvZGljVGltZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGVyaW9kaWNUaW1lcihkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHNldEludGVydmFsLCB0aW1lcnNfY2xlYXJJbnRlcnZhbCwgZGVsYXksIGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBlcmlvZGljVGltZXI7XG59KGFic3RyYWN0X3RpbWVyKSk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlsLnRzXG5cbnZhciBVdGlsID0ge1xuICAgIG5vdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWZlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgT25lT2ZmVGltZXIoMCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgbWV0aG9kOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYm91bmRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtuYW1lXS5hcHBseShvYmplY3QsIGJvdW5kQXJndW1lbnRzLmNvbmNhdChhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXRpbCA9IChVdGlsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy9jb2xsZWN0aW9ucy50c1xuXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IHNvdXJjZXNbaV07XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgIGlmIChleHRlbnNpb25zW3Byb3BlcnR5XSAmJlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uc1twcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbmQodGFyZ2V0W3Byb3BlcnR5XSB8fCB7fSwgZXh0ZW5zaW9uc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGV4dGVuc2lvbnNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoKSB7XG4gICAgdmFyIG0gPSBbJ1B1c2hlciddO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLnB1c2goc2FmZUpTT05TdHJpbmdpZnkoYXJndW1lbnRzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG0uam9pbignIDogJyk7XG59XG5mdW5jdGlvbiBhcnJheUluZGV4T2YoYXJyYXksIGl0ZW0pIHtcbiAgICB2YXIgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gb2JqZWN0QXBwbHkob2JqZWN0LCBmKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgZihvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKF8sIGtleSkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG59XG5mdW5jdGlvbiBhcHBseShhcnJheSwgZiwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZi5jYWxsKGNvbnRleHQgfHwgd2luZG93LCBhcnJheVtpXSwgaSwgYXJyYXkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcChhcnJheSwgZikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGYoYXJyYXlbaV0sIGksIGFycmF5LCByZXN1bHQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IGYodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgICB0ZXN0ID1cbiAgICAgICAgdGVzdCB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXJPYmplY3Qob2JqZWN0LCB0ZXN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKCh0ZXN0ICYmIHRlc3QodmFsdWUsIGtleSwgb2JqZWN0LCByZXN1bHQpKSB8fCBCb29sZWFuKHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmbGF0dGVuKG9iamVjdCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGFueShhcnJheSwgdGVzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRlc3QoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY29sbGVjdGlvbnNfYWxsKGFycmF5LCB0ZXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlc3QoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zT2JqZWN0KGRhdGEpIHtcbiAgICByZXR1cm4gbWFwT2JqZWN0KGRhdGEsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBzYWZlSlNPTlN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgdmFyIHBhcmFtcyA9IGZpbHRlck9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgdmFyIHF1ZXJ5ID0gbWFwKGZsYXR0ZW4oZW5jb2RlUGFyYW1zT2JqZWN0KHBhcmFtcykpLCB1dGlsLm1ldGhvZCgnam9pbicsICc9JykpLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBkZWN5Y2xlT2JqZWN0KG9iamVjdCkge1xuICAgIHZhciBvYmplY3RzID0gW10sIHBhdGhzID0gW107XG4gICAgcmV0dXJuIChmdW5jdGlvbiBkZXJleih2YWx1ZSwgcGF0aCkge1xuICAgICAgICB2YXIgaSwgbmFtZSwgbnU7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RzW2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgJHJlZjogcGF0aHNbaV0gfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3RzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgICAgIG51ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVbaV0gPSBkZXJleih2YWx1ZVtpXSwgcGF0aCArICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVbbmFtZV0gPSBkZXJleih2YWx1ZVtuYW1lXSwgcGF0aCArICdbJyArIEpTT04uc3RyaW5naWZ5KG5hbWUpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnU7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pKG9iamVjdCwgJyQnKTtcbn1cbmZ1bmN0aW9uIHNhZmVKU09OU3RyaW5naWZ5KHNvdXJjZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzb3VyY2UpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGVjeWNsZU9iamVjdChzb3VyY2UpKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvbG9nZ2VyLnRzXG5cblxudmFyIGxvZ2dlcl9Mb2dnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvZ2dlcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxMb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZyh0aGlzLmdsb2JhbExvZywgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2dXYXJuLCBhcmdzKTtcbiAgICB9O1xuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2dFcnJvciwgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmdsb2JhbExvZ1dhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmdsb2JhbExvZ0Vycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nV2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoZGVmYXVsdExvZ2dpbmdGdW5jdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWVzc2FnZSA9IHN0cmluZ2lmeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAoY29yZV9wdXNoZXIubG9nKSB7XG4gICAgICAgICAgICBjb3JlX3B1c2hlci5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29yZV9wdXNoZXIubG9nVG9Db25zb2xlKSB7XG4gICAgICAgICAgICB2YXIgbG9nID0gZGVmYXVsdExvZ2dpbmdGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgbG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTG9nZ2VyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGxvZ2dlciA9IChuZXcgbG9nZ2VyX0xvZ2dlcigpKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2F1dGgvanNvbnBfYXV0aC50c1xuXG52YXIganNvbnAgPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuYXV0aE9wdGlvbnMuaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdUbyBzZW5kIGhlYWRlcnMgd2l0aCB0aGUgYXV0aCByZXF1ZXN0LCB5b3UgbXVzdCB1c2UgQUpBWCwgcmF0aGVyIHRoYW4gSlNPTlAuJyk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFja05hbWUgPSBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRC50b1N0cmluZygpO1xuICAgIGNvbnRleHQubmV4dEF1dGhDYWxsYmFja0lEKys7XG4gICAgdmFyIGRvY3VtZW50ID0gY29udGV4dC5nZXREb2N1bWVudCgpO1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb250ZXh0LmF1dGhfY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9O1xuICAgIHZhciBjYWxsYmFja19uYW1lID0gXCJQdXNoZXIuYXV0aF9jYWxsYmFja3NbJ1wiICsgY2FsbGJhY2tOYW1lICsgXCInXVwiO1xuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aEVuZHBvaW50ICtcbiAgICAgICAgICAgICc/Y2FsbGJhY2s9JyArXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tfbmFtZSkgK1xuICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZVF1ZXJ5KHNvY2tldElkKTtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5maXJzdENoaWxkKTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF9hdXRoID0gKGpzb25wKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVxdWVzdC50c1xudmFyIFNjcmlwdFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmlwdFJlcXVlc3Qoc3JjKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIH1cbiAgICBTY3JpcHRSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gJ0Vycm9yIGxvYWRpbmcgJyArIHNlbGYuc3JjO1xuICAgICAgICBzZWxmLnNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzZWxmLnNjcmlwdC5pZCA9IHJlY2VpdmVyLmlkO1xuICAgICAgICBzZWxmLnNjcmlwdC5zcmMgPSBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzZWxmLnNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2soZXJyb3JTdHJpbmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5zY3JpcHQuYXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQgJiZcbiAgICAgICAgICAgIC9vcGVyYS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQuaWQgPSByZWNlaXZlci5pZCArICdfZXJyb3InO1xuICAgICAgICAgICAgc2VsZi5lcnJvclNjcmlwdC50ZXh0ID0gcmVjZWl2ZXIubmFtZSArIFwiKCdcIiArIGVycm9yU3RyaW5nICsgXCInKTtcIjtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gc2VsZi5lcnJvclNjcmlwdC5hc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5zY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGlmIChzZWxmLmVycm9yU2NyaXB0KSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzZWxmLmVycm9yU2NyaXB0LCBzZWxmLnNjcmlwdC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjcmlwdFJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQub25sb2FkID0gdGhpcy5zY3JpcHQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCAmJiB0aGlzLnNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lcnJvclNjcmlwdCAmJiB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JTY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVycm9yU2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JTY3JpcHQgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcmlwdFJlcXVlc3Q7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2NyaXB0X3JlcXVlc3QgPSAoU2NyaXB0UmVxdWVzdCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vanNvbnBfcmVxdWVzdC50c1xuXG5cbnZhciBqc29ucF9yZXF1ZXN0X0pTT05QUmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgSlNPTlBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKHRoaXMuZGF0YSk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVybCArICcvJyArIHJlY2VpdmVyLm51bWJlciArICc/JyArIHF1ZXJ5O1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3QodXJsKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH07XG4gICAgSlNPTlBSZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSlNPTlBSZXF1ZXN0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGpzb25wX3JlcXVlc3QgPSAoanNvbnBfcmVxdWVzdF9KU09OUFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdGltZWxpbmUvanNvbnBfdGltZWxpbmUudHNcblxuXG52YXIgZ2V0QWdlbnQgPSBmdW5jdGlvbiAoc2VuZGVyLCB1c2VUTFMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY2hlbWUgPSAnaHR0cCcgKyAodXNlVExTID8gJ3MnIDogJycpICsgJzovLyc7XG4gICAgICAgIHZhciB1cmwgPSBzY2hlbWUgKyAoc2VuZGVyLmhvc3QgfHwgc2VuZGVyLm9wdGlvbnMuaG9zdCkgKyBzZW5kZXIub3B0aW9ucy5wYXRoO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHJ1bnRpbWUuY3JlYXRlSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHJ1bnRpbWUuU2NyaXB0UmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgU2NyaXB0UmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG4gICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICBzZW5kZXIuaG9zdCA9IHJlc3VsdC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH07XG59O1xudmFyIGpzb25wX3RpbWVsaW5lX2pzb25wID0ge1xuICAgIG5hbWU6ICdqc29ucCcsXG4gICAgZ2V0QWdlbnQ6IGdldEFnZW50XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfdGltZWxpbmUgPSAoanNvbnBfdGltZWxpbmVfanNvbnApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdXJsX3NjaGVtZXMudHNcblxuZnVuY3Rpb24gZ2V0R2VuZXJpY1VSTChiYXNlU2NoZW1lLCBwYXJhbXMsIHBhdGgpIHtcbiAgICB2YXIgc2NoZW1lID0gYmFzZVNjaGVtZSArIChwYXJhbXMudXNlVExTID8gJ3MnIDogJycpO1xuICAgIHZhciBob3N0ID0gcGFyYW1zLnVzZVRMUyA/IHBhcmFtcy5ob3N0VExTIDogcGFyYW1zLmhvc3ROb25UTFM7XG4gICAgcmV0dXJuIHNjaGVtZSArICc6Ly8nICsgaG9zdCArIHBhdGg7XG59XG5mdW5jdGlvbiBnZXRHZW5lcmljUGF0aChrZXksIHF1ZXJ5U3RyaW5nKSB7XG4gICAgdmFyIHBhdGggPSAnL2FwcC8nICsga2V5O1xuICAgIHZhciBxdWVyeSA9ICc/cHJvdG9jb2w9JyArXG4gICAgICAgIGRlZmF1bHRzLlBST1RPQ09MICtcbiAgICAgICAgJyZjbGllbnQ9anMnICtcbiAgICAgICAgJyZ2ZXJzaW9uPScgK1xuICAgICAgICBkZWZhdWx0cy5WRVJTSU9OICtcbiAgICAgICAgKHF1ZXJ5U3RyaW5nID8gJyYnICsgcXVlcnlTdHJpbmcgOiAnJyk7XG4gICAgcmV0dXJuIHBhdGggKyBxdWVyeTtcbn1cbnZhciB3cyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8ICcnKSArIGdldEdlbmVyaWNQYXRoKGtleSwgJ2ZsYXNoPWZhbHNlJyk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCd3cycsIHBhcmFtcywgcGF0aCk7XG4gICAgfVxufTtcbnZhciBodHRwID0ge1xuICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICB2YXIgcGF0aCA9IChwYXJhbXMuaHR0cFBhdGggfHwgJy9wdXNoZXInKSArIGdldEdlbmVyaWNQYXRoKGtleSk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCdodHRwJywgcGFyYW1zLCBwYXRoKTtcbiAgICB9XG59O1xudmFyIHNvY2tqcyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoJ2h0dHAnLCBwYXJhbXMsIHBhcmFtcy5odHRwUGF0aCB8fCAnL3B1c2hlcicpO1xuICAgIH0sXG4gICAgZ2V0UGF0aDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljUGF0aChrZXkpO1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LnRzXG5cbnZhciBjYWxsYmFja19yZWdpc3RyeV9DYWxsYmFja1JlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWxsYmFja1JlZ2lzdHJ5KCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICB9XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH07XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBrZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSA9IGZpbHRlcih0aGlzLl9jYWxsYmFja3NbbmFtZV0gfHwgW10sIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT09IGJpbmRpbmcuZm4pIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb250ZXh0ICYmIGNvbnRleHQgIT09IGJpbmRpbmcuY29udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlQWxsQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgIGFwcGx5KG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjYWxsYmFja19yZWdpc3RyeSA9IChjYWxsYmFja19yZWdpc3RyeV9DYWxsYmFja1JlZ2lzdHJ5KTtcbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gICAgcmV0dXJuICdfJyArIG5hbWU7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2Rpc3BhdGNoZXIudHNcblxuXG52YXIgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKGZhaWxUaHJvdWdoKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IGNhbGxiYWNrX3JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhaWxUaHJvdWdoID0gZmFpbFRocm91Z2g7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuYmluZF9nbG9iYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gZmlsdGVyKHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyB8fCBbXSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNhbGxiYWNrOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmRfYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5hcHBseShjYWxsYmFja3NbaV0uY29udGV4dCB8fCB3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZmFpbFRocm91Z2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmFpbFRocm91Z2goZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBEaXNwYXRjaGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRpc3BhdGNoZXIgPSAoZGlzcGF0Y2hlcl9EaXNwYXRjaGVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9jb25uZWN0aW9uLnRzXG52YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9UcmFuc3BvcnRDb25uZWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0cmFuc3BvcnRfY29ubmVjdGlvbl9leHRlbmRzKFRyYW5zcG9ydENvbm5lY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJhbnNwb3J0Q29ubmVjdGlvbihob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbml0aWFsaXplID0gcnVudGltZS50cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI7XG4gICAgICAgIF90aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBfdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9ICduZXcnO1xuICAgICAgICBfdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG4gICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IG9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0O1xuICAgICAgICBfdGhpcy5pZCA9IF90aGlzLnRpbWVsaW5lLmdlbmVyYXRlVW5pcXVlSUQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3MuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnN1cHBvcnRzUGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5ob29rcy5zdXBwb3J0c1BpbmcpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0IHx8IHRoaXMuc3RhdGUgIT09ICdpbml0aWFsaXplZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXJsID0gdGhpcy5ob29rcy51cmxzLmdldEluaXRpYWwodGhpcy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IHRoaXMuaG9va3MuZ2V0U29ja2V0KHVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZSgnY2xvc2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdDb25uZWN0aW5nJywgeyB0cmFuc3BvcnQ6IHRoaXMubmFtZSwgdXJsOiB1cmwgfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnb3BlbicgJiYgdGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQucGluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tzLmJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3MuYmVmb3JlT3Blbih0aGlzLnNvY2tldCwgdGhpcy5ob29rcy51cmxzLmdldFBhdGgodGhpcy5rZXksIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgeyB0eXBlOiAnV2ViU29ja2V0RXJyb3InLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIHRoaXMudGltZWxpbmUuZXJyb3IodGhpcy5idWlsZFRpbWVsaW5lTWVzc2FnZSh7IGVycm9yOiBlcnJvci50b1N0cmluZygpIH0pKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY2xvc2VkJywge1xuICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICByZWFzb246IGNsb3NlRXZlbnQucmVhc29uLFxuICAgICAgICAgICAgICAgIHdhc0NsZWFuOiBjbG9zZUV2ZW50Lndhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGl2aXR5Jyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbk9wZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMub25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMub25DbG9zZShjbG9zZUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uYWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25BY3Rpdml0eSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUudW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmVtaXQoc3RhdGUsIHBhcmFtcyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5idWlsZFRpbWVsaW5lTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoeyBjaWQ6IHRoaXMuaWQgfSwgbWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0Q29ubmVjdGlvbjtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb24gPSAodHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnQudHNcblxudmFyIHRyYW5zcG9ydF9UcmFuc3BvcnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydChob29rcykge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgfVxuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9va3MuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRfY29ubmVjdGlvbih0aGlzLmhvb2tzLCBuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc3BvcnQ7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0c190cmFuc3BvcnQgPSAodHJhbnNwb3J0X1RyYW5zcG9ydCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cbnZhciBXU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCh7XG4gICAgdXJsczogd3MsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZS5nZXRXZWJTb2NrZXRBUEkoKSk7XG4gICAgfSxcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihydW50aW1lLmdldFdlYlNvY2tldEFQSSgpKTtcbiAgICB9LFxuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5jcmVhdGVXZWJTb2NrZXQodXJsKTtcbiAgICB9XG59KTtcbnZhciBodHRwQ29uZmlndXJhdGlvbiA9IHtcbiAgICB1cmxzOiBodHRwLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG4gICAgc3VwcG9ydHNQaW5nOiB0cnVlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbnZhciBzdHJlYW1pbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlU3RyZWFtaW5nU29ja2V0KHVybCk7XG4gICAgfVxufSwgaHR0cENvbmZpZ3VyYXRpb24pO1xudmFyIHBvbGxpbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlUG9sbGluZ1NvY2tldCh1cmwpO1xuICAgIH1cbn0sIGh0dHBDb25maWd1cmF0aW9uKTtcbnZhciB4aHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLmlzWEhSU3VwcG9ydGVkKCk7XG4gICAgfVxufTtcbnZhciBYSFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoKGV4dGVuZCh7fSwgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGhyQ29uZmlndXJhdGlvbikpKTtcbnZhciBYSFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKTtcbnZhciBUcmFuc3BvcnRzID0ge1xuICAgIHdzOiBXU1RyYW5zcG9ydCxcbiAgICB4aHJfc3RyZWFtaW5nOiBYSFJTdHJlYW1pbmdUcmFuc3BvcnQsXG4gICAgeGhyX3BvbGxpbmc6IFhIUlBvbGxpbmdUcmFuc3BvcnRcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzID0gKFRyYW5zcG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cblxuXG52YXIgU29ja0pTVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KHtcbiAgICBmaWxlOiAnc29ja2pzJyxcbiAgICB1cmxzOiBzb2NranMsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiB0cnVlLFxuICAgIHN1cHBvcnRzUGluZzogZmFsc2UsXG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuU29ja0pTICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuU29ja0pTKHVybCwgbnVsbCwge1xuICAgICAgICAgICAganNfcGF0aDogRGVwZW5kZW5jaWVzLmdldFBhdGgoJ3NvY2tqcycsIHtcbiAgICAgICAgICAgICAgICB1c2VUTFM6IG9wdGlvbnMudXNlVExTXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGlnbm9yZV9udWxsX29yaWdpbjogb3B0aW9ucy5pZ25vcmVOdWxsT3JpZ2luXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYmVmb3JlT3BlbjogZnVuY3Rpb24gKHNvY2tldCwgcGF0aCkge1xuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pKTtcbiAgICB9XG59KTtcbnZhciB4ZHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgdmFyIHllcyA9IHJ1bnRpbWUuaXNYRFJTdXBwb3J0ZWQoZW52aXJvbm1lbnQudXNlVExTKTtcbiAgICAgICAgcmV0dXJuIHllcztcbiAgICB9XG59O1xudmFyIFhEUlN0cmVhbWluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCgoZXh0ZW5kKHt9LCBzdHJlYW1pbmdDb25maWd1cmF0aW9uLCB4ZHJDb25maWd1cmF0aW9uKSkpO1xudmFyIFhEUlBvbGxpbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoZXh0ZW5kKHt9LCBwb2xsaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpO1xudHJhbnNwb3J0cy54ZHJfc3RyZWFtaW5nID0gWERSU3RyZWFtaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy54ZHJfcG9sbGluZyA9IFhEUlBvbGxpbmdUcmFuc3BvcnQ7XG50cmFuc3BvcnRzLnNvY2tqcyA9IFNvY2tKU1RyYW5zcG9ydDtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydHNfdHJhbnNwb3J0cyA9ICh0cmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL25ldF9pbmZvLnRzXG52YXIgbmV0X2luZm9fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG52YXIgTmV0SW5mbyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgbmV0X2luZm9fZXh0ZW5kcyhOZXRJbmZvLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5ldEluZm8oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnb25saW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29mZmxpbmUnKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5ldEluZm8ucHJvdG90eXBlLmlzT25saW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5vbkxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBOZXRJbmZvO1xufShkaXNwYXRjaGVyKSk7XG5cbnZhciBuZXRfaW5mb19OZXR3b3JrID0gbmV3IE5ldEluZm8oKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL2Fzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIudHNcblxuXG52YXIgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl9Bc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcihtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMubWluUGluZ0RlbGF5ID0gb3B0aW9ucy5taW5QaW5nRGVsYXk7XG4gICAgICAgIHRoaXMubWF4UGluZ0RlbGF5ID0gb3B0aW9ucy5tYXhQaW5nRGVsYXk7XG4gICAgICAgIHRoaXMucGluZ0RlbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb25zID0gZXh0ZW5kKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHRoaXMucGluZ0RlbGF5XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMudHJhbnNwb3J0LmNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG4gICAgICAgIHZhciBvcGVuVGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24udW5iaW5kKCdvcGVuJywgb25PcGVuKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICAgICAgb3BlblRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsb3NlZCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA9PT0gMTAwMiB8fCBjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghY2xvc2VFdmVudC53YXNDbGVhbiAmJiBvcGVuVGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpZmVzcGFuID0gdXRpbC5ub3coKSAtIG9wZW5UaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgaWYgKGxpZmVzcGFuIDwgMiAqIF90aGlzLm1heFBpbmdEZWxheSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBpbmdEZWxheSA9IE1hdGgubWF4KGxpZmVzcGFuIC8gMiwgX3RoaXMubWluUGluZ0RlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbm5lY3Rpb24uYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH07XG4gICAgQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmlzQWxpdmUoKSAmJiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZChlbnZpcm9ubWVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIgPSAoYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl9Bc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vcHJvdG9jb2wvcHJvdG9jb2wudHNcbnZhciBQcm90b2NvbCA9IHtcbiAgICBkZWNvZGVNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VFdmVudC5kYXRhKTtcbiAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudERhdGEgPSBtZXNzYWdlRGF0YS5kYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwdXNoZXJFdmVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaGVyRXZlbnREYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlRGF0YS5ldmVudCxcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBtZXNzYWdlRGF0YS5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHB1c2hlckV2ZW50RGF0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS51c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgcHVzaGVyRXZlbnQudXNlcl9pZCA9IG1lc3NhZ2VEYXRhLnVzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHVzaGVyRXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IHsgdHlwZTogJ01lc3NhZ2VQYXJzZUVycm9yJywgZXJyb3I6IGUsIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVuY29kZU1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZlbnQpO1xuICAgIH0sXG4gICAgcHJvY2Vzc0hhbmRzaGFrZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFByb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdwdXNoZXI6Y29ubmVjdGlvbl9lc3RhYmxpc2hlZCcpIHtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZS5kYXRhLmFjdGl2aXR5X3RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnTm8gYWN0aXZpdHkgdGltZW91dCBzcGVjaWZpZWQgaW4gaGFuZHNoYWtlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY29ubmVjdGVkJyxcbiAgICAgICAgICAgICAgICBpZDogbWVzc2FnZS5kYXRhLnNvY2tldF9pZCxcbiAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0ICogMTAwMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmV2ZW50ID09PSAncHVzaGVyOmVycm9yJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuZ2V0Q2xvc2VBY3Rpb24obWVzc2FnZS5kYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdGhpcy5nZXRDbG9zZUVycm9yKG1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBoYW5kc2hha2UnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDbG9zZUFjdGlvbjogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQwMDApIHtcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPj0gMTAwMiAmJiBjbG9zZUV2ZW50LmNvZGUgPD0gMTAwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmFja29mZic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDQwMDApIHtcbiAgICAgICAgICAgIHJldHVybiAndGxzX29ubHknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQxMDApIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdiYWNrb2ZmJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JldHJ5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldENsb3NlRXJyb3I6IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgIT09IDEwMDAgJiYgY2xvc2VFdmVudC5jb2RlICE9PSAxMDAxKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNsb3NlRXZlbnQucmVhc29uIHx8IGNsb3NlRXZlbnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcm90b2NvbF9wcm90b2NvbCA9IChQcm90b2NvbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9jb25uZWN0aW9uLnRzXG52YXIgY29ubmVjdGlvbl9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cbnZhciBjb25uZWN0aW9uX0Nvbm5lY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGNvbm5lY3Rpb25fZXh0ZW5kcyhDb25uZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbm5lY3Rpb24oaWQsIHRyYW5zcG9ydCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pZCA9IGlkO1xuICAgICAgICBfdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IHRyYW5zcG9ydC5hY3Rpdml0eVRpbWVvdXQ7XG4gICAgICAgIF90aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChkYXRhKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmRfZXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuICAgICAgICB2YXIgZXZlbnQgPSB7IGV2ZW50OiBuYW1lLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICBldmVudC5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHNlbnQnLCBldmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQocHJvdG9jb2xfcHJvdG9jb2wuZW5jb2RlTWVzc2FnZShldmVudCkpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0LnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5waW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRfZXZlbnQoJ3B1c2hlcjpwaW5nJywge30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50ID0gcHJvdG9jb2xfcHJvdG9jb2wuZGVjb2RlTWVzc2FnZShtZXNzYWdlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHVzaGVyRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHJlY2QnLCBwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHVzaGVyRXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjplcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHB1c2hlckV2ZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjpwaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdwaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cG9uZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnYWN0aXZpdHknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50ICYmIGNsb3NlRXZlbnQuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDbG9zZUV2ZW50KGNsb3NlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb2JqZWN0QXBwbHkobGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LnVuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVDbG9zZUV2ZW50ID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHByb3RvY29sX3Byb3RvY29sLmdldENsb3NlQWN0aW9uKGNsb3NlRXZlbnQpO1xuICAgICAgICB2YXIgZXJyb3IgPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KGFjdGlvbiwgeyBhY3Rpb246IGFjdGlvbiwgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGlvbjtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29ubmVjdGlvbl9jb25uZWN0aW9uID0gKGNvbm5lY3Rpb25fQ29ubmVjdGlvbik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9oYW5kc2hha2UvaW5kZXgudHNcblxuXG5cbnZhciBoYW5kc2hha2VfSGFuZHNoYWtlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIYW5kc2hha2UodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgSGFuZHNoYWtlLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgX3RoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm90b2NvbF9wcm90b2NvbC5wcm9jZXNzSGFuZHNoYWtlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2goJ2Vycm9yJywgeyBlcnJvcjogZSB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2goJ2Nvbm5lY3RlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogbmV3IGNvbm5lY3Rpb25fY29ubmVjdGlvbihyZXN1bHQuaWQsIF90aGlzLnRyYW5zcG9ydCksXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogcmVzdWx0LmFjdGl2aXR5VGltZW91dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKHJlc3VsdC5hY3Rpb24sIHsgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsb3NlZCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICBfdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KSB8fCAnYmFja29mZic7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuICAgICAgICAgICAgX3RoaXMuZmluaXNoKGFjdGlvbiwgeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIHRoaXMub25DbG9zZWQpO1xuICAgIH07XG4gICAgSGFuZHNoYWtlLnByb3RvdHlwZS51bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQudW5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soZXh0ZW5kKHsgdHJhbnNwb3J0OiB0aGlzLnRyYW5zcG9ydCwgYWN0aW9uOiBhY3Rpb24gfSwgcGFyYW1zKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSGFuZHNoYWtlO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25faGFuZHNoYWtlID0gKGhhbmRzaGFrZV9IYW5kc2hha2UpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2F1dGgvcHVzaGVyX2F1dGhvcml6ZXIudHNcblxudmFyIHB1c2hlcl9hdXRob3JpemVyX1B1c2hlckF1dGhvcml6ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFB1c2hlckF1dGhvcml6ZXIoY2hhbm5lbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB2YXIgYXV0aFRyYW5zcG9ydCA9IG9wdGlvbnMuYXV0aFRyYW5zcG9ydDtcbiAgICAgICAgaWYgKHR5cGVvZiBydW50aW1lLmdldEF1dGhvcml6ZXJzKClbYXV0aFRyYW5zcG9ydF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBcIidcIiArIGF1dGhUcmFuc3BvcnQgKyBcIicgaXMgbm90IGEgcmVjb2duaXplZCBhdXRoIHRyYW5zcG9ydFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHlwZSA9IGF1dGhUcmFuc3BvcnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYXV0aE9wdGlvbnMgPSBvcHRpb25zLmF1dGggfHwge307XG4gICAgfVxuICAgIFB1c2hlckF1dGhvcml6ZXIucHJvdG90eXBlLmNvbXBvc2VRdWVyeSA9IGZ1bmN0aW9uIChzb2NrZXRJZCkge1xuICAgICAgICB2YXIgcXVlcnkgPSAnc29ja2V0X2lkPScgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2tldElkKSArXG4gICAgICAgICAgICAnJmNoYW5uZWxfbmFtZT0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNoYW5uZWwubmFtZSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5hdXRoT3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGkpICtcbiAgICAgICAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXV0aE9wdGlvbnMucGFyYW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfTtcbiAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnMgPVxuICAgICAgICAgICAgUHVzaGVyQXV0aG9yaXplci5hdXRob3JpemVycyB8fCBydW50aW1lLmdldEF1dGhvcml6ZXJzKCk7XG4gICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIHJ1bnRpbWUsIHNvY2tldElkLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gUHVzaGVyQXV0aG9yaXplcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwdXNoZXJfYXV0aG9yaXplciA9IChwdXNoZXJfYXV0aG9yaXplcl9QdXNoZXJBdXRob3JpemVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS90aW1lbGluZV9zZW5kZXIudHNcblxudmFyIHRpbWVsaW5lX3NlbmRlcl9UaW1lbGluZVNlbmRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZWxpbmVTZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIH1cbiAgICBUaW1lbGluZVNlbmRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh1c2VUTFMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZWxpbmUuc2VuZChydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0LmdldEFnZW50KHRoaXMsIHVzZVRMUyksIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBUaW1lbGluZVNlbmRlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0aW1lbGluZV9zZW5kZXIgPSAodGltZWxpbmVfc2VuZGVyX1RpbWVsaW5lU2VuZGVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9jaGFubmVsLnRzXG52YXIgY2hhbm5lbF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxudmFyIGNoYW5uZWxfQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgY2hhbm5lbF9leHRlbmRzKENoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ05vIGNhbGxiYWNrcyBvbiAnICsgbmFtZSArICcgZm9yICcgKyBldmVudCk7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7IGF1dGg6ICcnIH0pO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoZXZlbnQuaW5kZXhPZignY2xpZW50LScpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkRXZlbnROYW1lKFwiRXZlbnQgJ1wiICsgZXZlbnQgKyBcIicgZG9lcyBub3Qgc3RhcnQgd2l0aCAnY2xpZW50LSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ3RyaWdnZXJpbmdDbGllbnRFdmVudHMnKTtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiQ2xpZW50IGV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgY2hhbm5lbCAnc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcgZXZlbnQgLiBcIiArIHN1ZmZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoZXZlbnQsIGRhdGEsIHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnROYW1lLCBkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXplKHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncHVzaGVyOnN1YnNjcmlwdGlvbl9lcnJvcicsIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0F1dGhFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgaW5zdGFuY2VvZiBIVFRQQXV0aEVycm9yID8geyBzdGF0dXM6IGVycm9yLnN0YXR1cyB9IDoge30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6c3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgICAgICBhdXRoOiBkYXRhLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZGF0YS5jaGFubmVsX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoJ3B1c2hlcjp1bnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLmNhbmNlbFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUucmVpbnN0YXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIENoYW5uZWw7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNoYW5uZWxzX2NoYW5uZWwgPSAoY2hhbm5lbF9DaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwudHNcbnZhciBwcml2YXRlX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cbnZhciBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHByaXZhdGVfY2hhbm5lbF9leHRlbmRzKFByaXZhdGVDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFByaXZhdGVDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhdXRob3JpemVyID0gZmFjdG9yeS5jcmVhdGVBdXRob3JpemVyKHRoaXMsIHRoaXMucHVzaGVyLmNvbmZpZyk7XG4gICAgICAgIHJldHVybiBhdXRob3JpemVyLmF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFByaXZhdGVDaGFubmVsO1xufShjaGFubmVsc19jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcml2YXRlX2NoYW5uZWwgPSAocHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9tZW1iZXJzLnRzXG5cbnZhciBtZW1iZXJzX01lbWJlcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbWJlcnMoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgTWVtYmVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5tZW1iZXJzLCBpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGluZm86IHRoaXMubWVtYmVyc1tpZF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvYmplY3RBcHBseSh0aGlzLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXIsIGlkKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfdGhpcy5nZXQoaWQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5zZXRNeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMubXlJRCA9IGlkO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUub25TdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmhhc2g7XG4gICAgICAgIHRoaXMuY291bnQgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmNvdW50O1xuICAgICAgICB0aGlzLm1lID0gdGhpcy5nZXQodGhpcy5teUlEKTtcbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLmFkZE1lbWJlciA9IGZ1bmN0aW9uIChtZW1iZXJEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF0gPSBtZW1iZXJEYXRhLnVzZXJfaW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5yZW1vdmVNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubWVtYmVyc1ttZW1iZXJEYXRhLnVzZXJfaWRdO1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1iZXI7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLm15SUQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBNZW1iZXJzO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIG1lbWJlcnMgPSAobWVtYmVyc19NZW1iZXJzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLnRzXG52YXIgcHJlc2VuY2VfY2hhbm5lbF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cbnZhciBwcmVzZW5jZV9jaGFubmVsX1ByZXNlbmNlQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgcHJlc2VuY2VfY2hhbm5lbF9leHRlbmRzKFByZXNlbmNlQ2hhbm5lbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIHB1c2hlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWVtYmVycyA9IG5ldyBtZW1iZXJzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYXV0aG9yaXplLmNhbGwodGhpcywgc29ja2V0SWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgIGlmIChhdXRoRGF0YS5jaGFubmVsX2RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRoZW50aWNhdGlvbkVuZHBvaW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkludmFsaWQgYXV0aCByZXNwb25zZSBmb3IgY2hhbm5lbCAnXCIgKyBfdGhpcy5uYW1lICsgXCInLFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChcImV4cGVjdGVkICdjaGFubmVsX2RhdGEnIGZpZWxkLiBcIiArIHN1ZmZpeCkpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnSW52YWxpZCBhdXRoIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxEYXRhID0gSlNPTi5wYXJzZShhdXRoRGF0YS5jaGFubmVsX2RhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzLm1lbWJlcnMuc2V0TXlJRChjaGFubmVsRGF0YS51c2VyX2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIGlmIChldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUludGVybmFsRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICBpZiAoZXZlbnQudXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLnVzZXJfaWQgPSBldmVudC51c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmhhbmRsZUludGVybmFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX2FkZGVkJzpcbiAgICAgICAgICAgICAgICB2YXIgYWRkZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMuYWRkTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGFkZGVkTWVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfcmVtb3ZlZCc6XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMucmVtb3ZlTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgcmVtb3ZlZE1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbWJlcnMub25TdWJzY3JpcHRpb24oZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgdGhpcy5tZW1iZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmVzZXQoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNjb25uZWN0LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gUHJlc2VuY2VDaGFubmVsO1xufShwcml2YXRlX2NoYW5uZWwpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHByZXNlbmNlX2NoYW5uZWwgPSAocHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvdXRmOC9saWIvdXRmOC5qc1xudmFyIHV0ZjggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvYmFzZTY0L2xpYi9iYXNlNjQuanNcbnZhciBiYXNlNjQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2VuY3J5cHRlZF9jaGFubmVsLnRzXG52YXIgZW5jcnlwdGVkX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciBlbmNyeXB0ZWRfY2hhbm5lbF9FbmNyeXB0ZWRDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBlbmNyeXB0ZWRfY2hhbm5lbF9leHRlbmRzKEVuY3J5cHRlZENoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW5jcnlwdGVkQ2hhbm5lbChuYW1lLCBwdXNoZXIsIG5hY2wpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgcHVzaGVyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICBfdGhpcy5uYWNsID0gbmFjbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYXV0aG9yaXplLmNhbGwodGhpcywgc29ja2V0SWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNoYXJlZFNlY3JldCA9IGF1dGhEYXRhWydzaGFyZWRfc2VjcmV0J107XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFNlY3JldCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIk5vIHNoYXJlZF9zZWNyZXQga2V5IGluIGF1dGggcGF5bG9hZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWw6IFwiICsgX3RoaXMubmFtZSksIG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmtleSA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKHNoYXJlZFNlY3JldCk7XG4gICAgICAgICAgICBkZWxldGUgYXV0aERhdGFbJ3NoYXJlZF9zZWNyZXQnXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGF1dGhEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZEZlYXR1cmUoJ0NsaWVudCBldmVudHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGZvciBlbmNyeXB0ZWQgY2hhbm5lbHMnKTtcbiAgICB9O1xuICAgIEVuY3J5cHRlZENoYW5uZWwucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCB8fFxuICAgICAgICAgICAgZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcjonKSA9PT0gMCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudC5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUVuY3J5cHRlZEV2ZW50KGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFbmNyeXB0ZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1JlY2VpdmVkIGVuY3J5cHRlZCBldmVudCBiZWZvcmUga2V5IGhhcyBiZWVuIHJldHJpZXZlZCBmcm9tIHRoZSBhdXRoRW5kcG9pbnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEuY2lwaGVydGV4dCB8fCAhZGF0YS5ub25jZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmV4cGVjdGVkIGZvcm1hdCBmb3IgZW5jcnlwdGVkIGV2ZW50LCBleHBlY3RlZCBvYmplY3Qgd2l0aCBgY2lwaGVydGV4dGAgYW5kIGBub25jZWAgZmllbGRzLCBnb3Q6ICcgK1xuICAgICAgICAgICAgICAgIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaXBoZXJUZXh0ID0gT2JqZWN0KGJhc2U2NFtcImRlY29kZVwiXSkoZGF0YS5jaXBoZXJ0ZXh0KTtcbiAgICAgICAgaWYgKGNpcGhlclRleHQubGVuZ3RoIDwgdGhpcy5uYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IGNpcGhlcnRleHQgbGVuZ3RoIHRvIGJlIFwiICsgdGhpcy5uYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aCArIFwiLCBnb3Q6IFwiICsgY2lwaGVyVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub25jZSA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKGRhdGEubm9uY2UpO1xuICAgICAgICBpZiAobm9uY2UubGVuZ3RoIDwgdGhpcy5uYWNsLnNlY3JldGJveC5ub25jZUxlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IG5vbmNlIGxlbmd0aCB0byBiZSBcIiArIHRoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGggKyBcIiwgZ290OiBcIiArIG5vbmNlLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5uYWNsLnNlY3JldGJveC5vcGVuKGNpcGhlclRleHQsIG5vbmNlLCB0aGlzLmtleSk7XG4gICAgICAgIGlmIChieXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gZGVjcnlwdCBhbiBldmVudCwgcHJvYmFibHkgYmVjYXVzZSBpdCB3YXMgZW5jcnlwdGVkIHdpdGggYSBkaWZmZXJlbnQga2V5LiBGZXRjaGluZyBhIG5ldyBrZXkgZnJvbSB0aGUgYXV0aEVuZHBvaW50Li4uJyk7XG4gICAgICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgZnVuY3Rpb24gKGVycm9yLCBhdXRoRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJGYWlsZWQgdG8gbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGF1dGhFbmRwb2ludDogXCIgKyBhdXRoRGF0YSArIFwiLiBVbmFibGUgdG8gZmV0Y2ggbmV3IGtleSwgc28gZHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ5dGVzID0gX3RoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgX3RoaXMua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIGRlY3J5cHQgZXZlbnQgd2l0aCBuZXcga2V5LiBEcm9wcGluZyBlbmNyeXB0ZWQgZXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChldmVudCwgX3RoaXMuZ2V0RGF0YVRvRW1pdChieXRlcykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdChldmVudCwgdGhpcy5nZXREYXRhVG9FbWl0KGJ5dGVzKSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5nZXREYXRhVG9FbWl0ID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICAgIHZhciByYXcgPSBPYmplY3QodXRmOFtcImRlY29kZVwiXSkoYnl0ZXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFbmNyeXB0ZWRDaGFubmVsO1xufShwcml2YXRlX2NoYW5uZWwpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGVuY3J5cHRlZF9jaGFubmVsID0gKGVuY3J5cHRlZF9jaGFubmVsX0VuY3J5cHRlZENoYW5uZWwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vY29ubmVjdGlvbl9tYW5hZ2VyLnRzXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBjb25uZWN0aW9uX21hbmFnZXJfZXh0ZW5kcyhDb25uZWN0aW9uTWFuYWdlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uTWFuYWdlcihrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICBfdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMudGltZWxpbmUgPSBfdGhpcy5vcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICBfdGhpcy51c2luZ1RMUyA9IF90aGlzLm9wdGlvbnMudXNlVExTO1xuICAgICAgICBfdGhpcy5lcnJvckNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkRXJyb3JDYWxsYmFja3MoKTtcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbkNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkQ29ubmVjdGlvbkNhbGxiYWNrcyhfdGhpcy5lcnJvckNhbGxiYWNrcyk7XG4gICAgICAgIF90aGlzLmhhbmRzaGFrZUNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzKF90aGlzLmVycm9yQ2FsbGJhY2tzKTtcbiAgICAgICAgdmFyIE5ldHdvcmsgPSBydW50aW1lLmdldE5ldHdvcmsoKTtcbiAgICAgICAgTmV0d29yay5iaW5kKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29ubGluZScgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUgPT09ICdjb25uZWN0aW5nJyB8fCBfdGhpcy5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBOZXR3b3JrLmJpbmQoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29mZmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMudXBkYXRlU3RyYXRlZ3koKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbiB8fCB0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdmYWlsZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICAgIHRoaXMuc3RhcnRDb25uZWN0aW5nKCk7XG4gICAgICAgIHRoaXMuc2V0VW5hdmFpbGFibGVUaW1lcigpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kX2V2ZW50KG5hbWUsIGRhdGEsIGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5pc1VzaW5nVExTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2luZ1RMUztcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zdGFydENvbm5lY3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5ydW5uZXIgPSBfdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UuYWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0hhbmRzaGFrZUVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBoYW5kc2hha2UuZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpbWVsaW5lLmVycm9yKHsgaGFuZHNoYWtlRXJyb3I6IGhhbmRzaGFrZS5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kc2hha2VDYWxsYmFja3NbaGFuZHNoYWtlLmFjdGlvbl0oaGFuZHNoYWtlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucnVubmVyID0gdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5hYm9ydENvbm5lY3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgdGhpcy5ydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucnVubmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RJbnRlcm5hbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICB0aGlzLmNsZWFyUmV0cnlUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVN0cmF0ZWd5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5vcHRpb25zLmdldFN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcbiAgICAgICAgICAgIHVzZVRMUzogdGhpcy51c2luZ1RMU1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5yZXRyeUluID0gZnVuY3Rpb24gKGRlbGF5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGFjdGlvbjogJ3JldHJ5JywgZGVsYXk6IGRlbGF5IH0pO1xuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3RpbmdfaW4nLCBNYXRoLnJvdW5kKGRlbGF5IC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmV0cnlUaW1lciA9IG5ldyBPbmVPZmZUaW1lcihkZWxheSB8fCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICAgICAgX3RoaXMuY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclJldHJ5VGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJldHJ5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0VW5hdmFpbGFibGVUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51bmF2YWlsYWJsZVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy51bmF2YWlsYWJsZVRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVuYXZhaWxhYmxlVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kQWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucGluZygpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5lcnJvcih7IHBvbmdfdGltZWRfb3V0OiBfdGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0IH0pO1xuICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmVzZXRBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gJiYgIXRoaXMuY29ubmVjdGlvbi5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMuYWN0aXZpdHlUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RvcEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5idWlsZENvbm5lY3Rpb25DYWxsYmFja3MgPSBmdW5jdGlvbiAoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cG9uZycsIHt9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpdml0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hYmFuZG9uQ29ubmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRSZXRyeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5idWlsZEhhbmRzaGFrZUNhbGxiYWNrcyA9IGZ1bmN0aW9uIChlcnJvckNhbGxiYWNrcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCBlcnJvckNhbGxiYWNrcywge1xuICAgICAgICAgICAgY29ubmVjdGVkOiBmdW5jdGlvbiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZpdHlUaW1lb3V0ID0gTWF0aC5taW4oX3RoaXMub3B0aW9ucy5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5jb25uZWN0aW9uLmFjdGl2aXR5VGltZW91dCB8fCBJbmZpbml0eSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJVbmF2YWlsYWJsZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Q29ubmVjdGlvbihoYW5kc2hha2UuY29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgX3RoaXMuc29ja2V0X2lkID0gX3RoaXMuY29ubmVjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZSgnY29ubmVjdGVkJywgeyBzb2NrZXRfaWQ6IF90aGlzLnNvY2tldF9pZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRFcnJvckNhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpdGhFcnJvckVtaXR0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0bHNfb25seTogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXNpbmdUTFMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0cmF0ZWd5KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVmdXNlZDogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBiYWNrb2ZmOiB3aXRoRXJyb3JFbWl0dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZXRyeTogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0Q29ubmVjdGlvbiA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gICAgICAgIGZvciAodmFyIGV2ZW50IGluIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYWJhbmRvbkNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi51bmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChuZXdTdGF0ZSwgZGF0YSkge1xuICAgICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGVEZXNjcmlwdGlvbiA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlRGVzY3JpcHRpb24gPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGVEZXNjcmlwdGlvbiArPSAnIHdpdGggbmV3IHNvY2tldCBJRCAnICsgZGF0YS5zb2NrZXRfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1N0YXRlIGNoYW5nZWQnLCBwcmV2aW91c1N0YXRlICsgJyAtPiAnICsgbmV3U3RhdGVEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBzdGF0ZTogbmV3U3RhdGUsIHBhcmFtczogZGF0YSB9KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhdGVfY2hhbmdlJywgeyBwcmV2aW91czogcHJldmlvdXNTdGF0ZSwgY3VycmVudDogbmV3U3RhdGUgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQobmV3U3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2hvdWxkUmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAnY29ubmVjdGluZycgfHwgdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCc7XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGlvbk1hbmFnZXI7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25fbWFuYWdlciA9IChjb25uZWN0aW9uX21hbmFnZXJfQ29ubmVjdGlvbk1hbmFnZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2NoYW5uZWxzLnRzXG5cblxuXG5cbnZhciBjaGFubmVsc19DaGFubmVscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbHMoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyh0aGlzLmNoYW5uZWxzKTtcbiAgICB9O1xuICAgIENoYW5uZWxzLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5jaGFubmVscywgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFubmVscztcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjaGFubmVscyA9IChjaGFubmVsc19DaGFubmVscyk7XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtZW5jcnlwdGVkLScpID09PSAwKSB7XG4gICAgICAgIGlmIChwdXNoZXIuY29uZmlnLm5hY2wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBwdXNoZXIuY29uZmlnLm5hY2wpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJNc2cgPSAnVHJpZWQgdG8gc3Vic2NyaWJlIHRvIGEgcHJpdmF0ZS1lbmNyeXB0ZWQtIGNoYW5uZWwgYnV0IG5vIG5hY2wgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlJztcbiAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQnKTtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkRmVhdHVyZShlcnJNc2cgKyBcIi4gXCIgKyBzdWZmaXgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvZmFjdG9yeS50c1xuXG5cblxuXG5cblxuXG5cblxuXG52YXIgRmFjdG9yeSA9IHtcbiAgICBjcmVhdGVDaGFubmVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzKCk7XG4gICAgfSxcbiAgICBjcmVhdGVDb25uZWN0aW9uTWFuYWdlcjogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGNvbm5lY3Rpb25fbWFuYWdlcihrZXksIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzX2NoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9LFxuICAgIGNyZWF0ZVByaXZhdGVDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJpdmF0ZV9jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcmVzZW5jZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwcmVzZW5jZV9jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVFbmNyeXB0ZWRDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHJldHVybiBuZXcgZW5jcnlwdGVkX2NoYW5uZWwobmFtZSwgcHVzaGVyLCBuYWNsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVRpbWVsaW5lU2VuZGVyOiBmdW5jdGlvbiAodGltZWxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW1lbGluZV9zZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlQXV0aG9yaXplcjogZnVuY3Rpb24gKGNoYW5uZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0aG9yaXplcikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IHB1c2hlcl9hdXRob3JpemVyKGNoYW5uZWwsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlSGFuZHNoYWtlOiBmdW5jdGlvbiAodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IGNvbm5lY3Rpb25faGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyOiBmdW5jdGlvbiAobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcihtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBmYWN0b3J5ID0gKEZhY3RvcnkpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdHJhbnNwb3J0X21hbmFnZXIudHNcblxudmFyIHRyYW5zcG9ydF9tYW5hZ2VyX1RyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydE1hbmFnZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmxpdmVzTGVmdCA9IHRoaXMub3B0aW9ucy5saXZlcyB8fCBJbmZpbml0eTtcbiAgICB9XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuZ2V0QXNzaXN0YW50ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIodGhpcywgdHJhbnNwb3J0LCB7XG4gICAgICAgICAgICBtaW5QaW5nRGVsYXk6IHRoaXMub3B0aW9ucy5taW5QaW5nRGVsYXksXG4gICAgICAgICAgICBtYXhQaW5nRGVsYXk6IHRoaXMub3B0aW9ucy5tYXhQaW5nRGVsYXlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXZlc0xlZnQgPiAwO1xuICAgIH07XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUucmVwb3J0RGVhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGl2ZXNMZWZ0IC09IDE7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0TWFuYWdlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfbWFuYWdlciA9ICh0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3NlcXVlbnRpYWxfc3RyYXRlZ3kudHNcblxuXG5cbnZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VxdWVudGlhbFN0cmF0ZWd5KHN0cmF0ZWdpZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5sb29wID0gQm9vbGVhbihvcHRpb25zLmxvb3ApO1xuICAgICAgICB0aGlzLmZhaWxGYXN0ID0gQm9vbGVhbihvcHRpb25zLmZhaWxGYXN0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgICB0aGlzLnRpbWVvdXRMaW1pdCA9IG9wdGlvbnMudGltZW91dExpbWl0O1xuICAgIH1cbiAgICBTZXF1ZW50aWFsU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYW55KHRoaXMuc3RyYXRlZ2llcywgdXRpbC5tZXRob2QoJ2lzU3VwcG9ydGVkJykpO1xuICAgIH07XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IHRoaXMuc3RyYXRlZ2llcztcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMudGltZW91dDtcbiAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG4gICAgICAgIHZhciB0cnlOZXh0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgJSBzdHJhdGVnaWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBzdHJhdGVnaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgKiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVvdXRMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBfdGhpcy50aW1lb3V0TGltaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IF90aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiBfdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBydW5uZXIgPSB0aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiB0aGlzLmZhaWxGYXN0IH0sIHRyeU5leHRTdHJhdGVneSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS50cnlTdHJhdGVneSA9IGZ1bmN0aW9uIChzdHJhdGVneSwgbWluUHJpb3JpdHksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdGltZXIgPSBuZXcgT25lT2ZmVGltZXIob3B0aW9ucy50aW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBydW5uZXIgPSBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRpbWVyICYmIHRpbWVyLmlzUnVubmluZygpICYmICFvcHRpb25zLmZhaWxGYXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGhhbmRzaGFrZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFNlcXVlbnRpYWxTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5ID0gKHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2Jlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3kudHNcblxuXG52YXIgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KHN0cmF0ZWdpZXMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICB9XG4gICAgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbnkodGhpcy5zdHJhdGVnaWVzLCB1dGlsLm1ldGhvZCgnaXNTdXBwb3J0ZWQnKSk7XG4gICAgfTtcbiAgICBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY29ubmVjdCh0aGlzLnN0cmF0ZWdpZXMsIG1pblByaW9yaXR5LCBmdW5jdGlvbiAoaSwgcnVubmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyc1tpXS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KGhhbmRzaGFrZS50cmFuc3BvcnQucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3kgPSAoYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGNvbm5lY3Qoc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcikge1xuICAgIHZhciBydW5uZXJzID0gbWFwKHN0cmF0ZWdpZXMsIGZ1bmN0aW9uIChzdHJhdGVneSwgaSwgXywgcnMpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcihpLCBycykpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBhYm9ydFJ1bm5lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBhbGxSdW5uZXJzRmFpbGVkKHJ1bm5lcnMpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbnNfYWxsKHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVubmVyLmVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFib3J0UnVubmVyKHJ1bm5lcikge1xuICAgIGlmICghcnVubmVyLmVycm9yICYmICFydW5uZXIuYWJvcnRlZCkge1xuICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgcnVubmVyLmFib3J0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2NhY2hlZF9zdHJhdGVneS50c1xuXG5cblxuXG52YXIgY2FjaGVkX3N0cmF0ZWd5X0NhY2hlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWNoZWRTdHJhdGVneShzdHJhdGVneSwgdHJhbnNwb3J0cywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0cyA9IHRyYW5zcG9ydHM7XG4gICAgICAgIHRoaXMudHRsID0gb3B0aW9ucy50dGwgfHwgMTgwMCAqIDEwMDA7XG4gICAgICAgIHRoaXMudXNpbmdUTFMgPSBvcHRpb25zLnVzZVRMUztcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG4gICAgfVxuICAgIENhY2hlZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIENhY2hlZFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdXNpbmdUTFMgPSB0aGlzLnVzaW5nVExTO1xuICAgICAgICB2YXIgaW5mbyA9IGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IFt0aGlzLnN0cmF0ZWd5XTtcbiAgICAgICAgaWYgKGluZm8gJiYgaW5mby50aW1lc3RhbXAgKyB0aGlzLnR0bCA+PSB1dGlsLm5vdygpKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzW2luZm8udHJhbnNwb3J0XTtcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oe1xuICAgICAgICAgICAgICAgICAgICBjYWNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogaW5mby50cmFuc3BvcnQsXG4gICAgICAgICAgICAgICAgICAgIGxhdGVuY3k6IGluZm8ubGF0ZW5jeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0cmF0ZWdpZXMucHVzaChuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbdHJhbnNwb3J0XSwge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBpbmZvLmxhdGVuY3kgKiAyICsgMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgZmFpbEZhc3Q6IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0VGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgdmFyIHJ1bm5lciA9IHN0cmF0ZWdpZXNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIGNiKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJhdGVnaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBzdHJhdGVnaWVzLnBvcCgpLmNvbm5lY3QobWluUHJpb3JpdHksIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdG9yZVRyYW5zcG9ydENhY2hlKHVzaW5nVExTLCBoYW5kc2hha2UudHJhbnNwb3J0Lm5hbWUsIHV0aWwubm93KCkgLSBzdGFydFRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIENhY2hlZFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNhY2hlZF9zdHJhdGVneSA9IChjYWNoZWRfc3RyYXRlZ3lfQ2FjaGVkU3RyYXRlZ3kpO1xuZnVuY3Rpb24gZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpIHtcbiAgICByZXR1cm4gJ3B1c2hlclRyYW5zcG9ydCcgKyAodXNpbmdUTFMgPyAnVExTJyA6ICdOb25UTFMnKTtcbn1cbmZ1bmN0aW9uIGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2FjaGUgPSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgICAgICBpZiAoc2VyaWFsaXplZENhY2hlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZENhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZmx1c2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzdG9yZVRyYW5zcG9ydENhY2hlKHVzaW5nVExTLCB0cmFuc3BvcnQsIGxhdGVuY3kpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2VbZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpXSA9IHNhZmVKU09OU3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHV0aWwubm93KCksXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0OiB0cmFuc3BvcnQsXG4gICAgICAgICAgICAgICAgbGF0ZW5jeTogbGF0ZW5jeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2RlbGF5ZWRfc3RyYXRlZ3kudHNcblxudmFyIGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWxheWVkU3RyYXRlZ3koc3RyYXRlZ3ksIF9hKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSBfYS5kZWxheTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7IGRlbGF5OiBudW1iZXIgfTtcbiAgICB9XG4gICAgRGVsYXllZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIERlbGF5ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5zdHJhdGVneTtcbiAgICAgICAgdmFyIHJ1bm5lcjtcbiAgICAgICAgdmFyIHRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5kZWxheSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIERlbGF5ZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkZWxheWVkX3N0cmF0ZWd5ID0gKGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2lmX3N0cmF0ZWd5LnRzXG52YXIgSWZTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSWZTdHJhdGVneSh0ZXN0LCB0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaCkge1xuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgICAgICB0aGlzLnRydWVCcmFuY2ggPSB0cnVlQnJhbmNoO1xuICAgICAgICB0aGlzLmZhbHNlQnJhbmNoID0gZmFsc2VCcmFuY2g7XG4gICAgfVxuICAgIElmU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBJZlN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBJZlN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGlmX3N0cmF0ZWd5ID0gKElmU3RyYXRlZ3kpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZmlyc3RfY29ubmVjdGVkX3N0cmF0ZWd5LnRzXG52YXIgRmlyc3RDb25uZWN0ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlyc3RDb25uZWN0ZWRTdHJhdGVneShzdHJhdGVneSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuICAgIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG4gICAgRmlyc3RDb25uZWN0ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuICAgIHJldHVybiBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneSA9IChGaXJzdENvbm5lY3RlZFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RlZmF1bHRfc3RyYXRlZ3kudHNcblxuXG5cblxuXG5cblxuZnVuY3Rpb24gdGVzdFN1cHBvcnRzU3RyYXRlZ3koc3RyYXRlZ3kpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xufVxudmFyIGdldERlZmF1bHRTdHJhdGVneSA9IGZ1bmN0aW9uIChjb25maWcsIGJhc2VPcHRpb25zLCBkZWZpbmVUcmFuc3BvcnQpIHtcbiAgICB2YXIgZGVmaW5lZFRyYW5zcG9ydHMgPSB7fTtcbiAgICBmdW5jdGlvbiBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneShuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcikge1xuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0KGNvbmZpZywgbmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpO1xuICAgICAgICBkZWZpbmVkVHJhbnNwb3J0c1tuYW1lXSA9IHRyYW5zcG9ydDtcbiAgICAgICAgcmV0dXJuIHRyYW5zcG9ydDtcbiAgICB9XG4gICAgdmFyIHdzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlT3B0aW9ucywge1xuICAgICAgICBob3N0Tm9uVExTOiBjb25maWcud3NIb3N0ICsgJzonICsgY29uZmlnLndzUG9ydCxcbiAgICAgICAgaG9zdFRMUzogY29uZmlnLndzSG9zdCArICc6JyArIGNvbmZpZy53c3NQb3J0LFxuICAgICAgICBodHRwUGF0aDogY29uZmlnLndzUGF0aFxuICAgIH0pO1xuICAgIHZhciB3c3Nfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHdzX29wdGlvbnMsIHtcbiAgICAgICAgdXNlVExTOiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIHNvY2tqc19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZU9wdGlvbnMsIHtcbiAgICAgICAgaG9zdE5vblRMUzogY29uZmlnLmh0dHBIb3N0ICsgJzonICsgY29uZmlnLmh0dHBQb3J0LFxuICAgICAgICBob3N0VExTOiBjb25maWcuaHR0cEhvc3QgKyAnOicgKyBjb25maWcuaHR0cHNQb3J0LFxuICAgICAgICBodHRwUGF0aDogY29uZmlnLmh0dHBQYXRoXG4gICAgfSk7XG4gICAgdmFyIHRpbWVvdXRzID0ge1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICB0aW1lb3V0OiAxNTAwMCxcbiAgICAgICAgdGltZW91dExpbWl0OiA2MDAwMFxuICAgIH07XG4gICAgdmFyIHdzX21hbmFnZXIgPSBuZXcgdHJhbnNwb3J0X21hbmFnZXIoe1xuICAgICAgICBsaXZlczogMixcbiAgICAgICAgbWluUGluZ0RlbGF5OiAxMDAwMCxcbiAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlUaW1lb3V0XG4gICAgfSk7XG4gICAgdmFyIHN0cmVhbWluZ19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyKHtcbiAgICAgICAgbGl2ZXM6IDIsXG4gICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG4gICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5VGltZW91dFxuICAgIH0pO1xuICAgIHZhciB3c190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnd3MnLCAnd3MnLCAzLCB3c19vcHRpb25zLCB3c19tYW5hZ2VyKTtcbiAgICB2YXIgd3NzX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd3c3MnLCAnd3MnLCAzLCB3c3Nfb3B0aW9ucywgd3NfbWFuYWdlcik7XG4gICAgdmFyIHNvY2tqc190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnc29ja2pzJywgJ3NvY2tqcycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgeGhyX3N0cmVhbWluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGhyX3N0cmVhbWluZycsICd4aHJfc3RyZWFtaW5nJywgMSwgc29ja2pzX29wdGlvbnMsIHN0cmVhbWluZ19tYW5hZ2VyKTtcbiAgICB2YXIgeGRyX3N0cmVhbWluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGRyX3N0cmVhbWluZycsICd4ZHJfc3RyZWFtaW5nJywgMSwgc29ja2pzX29wdGlvbnMsIHN0cmVhbWluZ19tYW5hZ2VyKTtcbiAgICB2YXIgeGhyX3BvbGxpbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hocl9wb2xsaW5nJywgJ3hocl9wb2xsaW5nJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB4ZHJfcG9sbGluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGRyX3BvbGxpbmcnLCAneGRyX3BvbGxpbmcnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHdzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbd3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciB3c3NfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFt3c3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciBzb2NranNfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtzb2NranNfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciBzdHJlYW1pbmdfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtcbiAgICAgICAgbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0KSwgeGhyX3N0cmVhbWluZ190cmFuc3BvcnQsIHhkcl9zdHJlYW1pbmdfdHJhbnNwb3J0KVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgcG9sbGluZ19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW1xuICAgICAgICBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koeGhyX3BvbGxpbmdfdHJhbnNwb3J0KSwgeGhyX3BvbGxpbmdfdHJhbnNwb3J0LCB4ZHJfcG9sbGluZ190cmFuc3BvcnQpXG4gICAgXSwgdGltZW91dHMpO1xuICAgIHZhciBodHRwX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbXG4gICAgICAgIG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneShzdHJlYW1pbmdfbG9vcCksIG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5KFtcbiAgICAgICAgICAgIHN0cmVhbWluZ19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3kocG9sbGluZ19sb29wLCB7IGRlbGF5OiA0MDAwIH0pXG4gICAgICAgIF0pLCBwb2xsaW5nX2xvb3ApXG4gICAgXSwgdGltZW91dHMpO1xuICAgIHZhciBodHRwX2ZhbGxiYWNrX2xvb3AgPSBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koaHR0cF9sb29wKSwgaHR0cF9sb29wLCBzb2NranNfbG9vcCk7XG4gICAgdmFyIHdzU3RyYXRlZ3k7XG4gICAgaWYgKGJhc2VPcHRpb25zLnVzZVRMUykge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3koW1xuICAgICAgICAgICAgd3NfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KGh0dHBfZmFsbGJhY2tfbG9vcCwgeyBkZWxheTogMjAwMCB9KVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdzU3RyYXRlZ3kgPSBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneShbXG4gICAgICAgICAgICB3c19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3kod3NzX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSksXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneShodHRwX2ZhbGxiYWNrX2xvb3AsIHsgZGVsYXk6IDUwMDAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgY2FjaGVkX3N0cmF0ZWd5KG5ldyBmaXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3kobmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHdzX3RyYW5zcG9ydCksIHdzU3RyYXRlZ3ksIGh0dHBfZmFsbGJhY2tfbG9vcCkpLCBkZWZpbmVkVHJhbnNwb3J0cywge1xuICAgICAgICB0dGw6IDE4MDAwMDAsXG4gICAgICAgIHRpbWVsaW5lOiBiYXNlT3B0aW9ucy50aW1lbGluZSxcbiAgICAgICAgdXNlVExTOiBiYXNlT3B0aW9ucy51c2VUTFNcbiAgICB9KTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkZWZhdWx0X3N0cmF0ZWd5ID0gKGdldERlZmF1bHRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi90cmFuc3BvcnRzL3RyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyLnRzXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50aW1lbGluZS5pbmZvKHNlbGYuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuICAgICAgICB0cmFuc3BvcnQ6IHNlbGYubmFtZSArIChzZWxmLm9wdGlvbnMudXNlVExTID8gJ3MnIDogJycpXG4gICAgfSkpO1xuICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKCdpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxmLmhvb2tzLmZpbGUpIHtcbiAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgICAgIERlcGVuZGVuY2llcy5sb2FkKHNlbGYuaG9va3MuZmlsZSwgeyB1c2VUTFM6IHNlbGYub3B0aW9ucy51c2VUTFMgfSwgZnVuY3Rpb24gKGVycm9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHNlbGYuaG9va3MuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgfVxufSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9odHRwL2h0dHBfeGRvbWFpbl9yZXF1ZXN0LnRzXG5cbnZhciBodHRwX3hkb21haW5fcmVxdWVzdF9ob29rcyA9IHtcbiAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciB4ZHIgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCBuZXcgUmVxdWVzdFRpbWVkT3V0KCkpO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsIGUpO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhkci5yZXNwb25zZVRleHQgJiYgeGRyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoMjAwLCB4ZHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZmluaXNoZWQnLCAyMDApO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB4ZHI7XG4gICAgfSxcbiAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4ZHIpIHtcbiAgICAgICAgeGRyLm9udGltZW91dCA9IHhkci5vbmVycm9yID0geGRyLm9ucHJvZ3Jlc3MgPSB4ZHIub25sb2FkID0gbnVsbDtcbiAgICAgICAgeGRyLmFib3J0KCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfeGRvbWFpbl9yZXF1ZXN0ID0gKGh0dHBfeGRvbWFpbl9yZXF1ZXN0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9odHRwL2h0dHBfcmVxdWVzdC50c1xudmFyIGh0dHBfcmVxdWVzdF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxudmFyIE1BWF9CVUZGRVJfTEVOR1RIID0gMjU2ICogMTAyNDtcbnZhciBodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGh0dHBfcmVxdWVzdF9leHRlbmRzKEhUVFBSZXF1ZXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhUVFBSZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICBfdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIF90aGlzLnVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy54aHIgPSB0aGlzLmhvb2tzLmdldFJlcXVlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudW5sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBydW50aW1lLmFkZFVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueGhyLnNlbmQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVubG9hZGVyKSB7XG4gICAgICAgICAgICBydW50aW1lLnJlbW92ZVVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICAgICAgdGhpcy51bmxvYWRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmFib3J0UmVxdWVzdCh0aGlzLnhocik7XG4gICAgICAgICAgICB0aGlzLnhociA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKHN0YXR1cywgZGF0YSkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGNodW5rID0gdGhpcy5hZHZhbmNlQnVmZmVyKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGNodW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaHVuaycsIHsgc3RhdHVzOiBzdGF0dXMsIGRhdGE6IGNodW5rIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNCdWZmZXJUb29Mb25nKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2J1ZmZlcl90b29fbG9uZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuYWR2YW5jZUJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgdmFyIHVucmVhZERhdGEgPSBidWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHZhciBlbmRPZkxpbmVQb3NpdGlvbiA9IHVucmVhZERhdGEuaW5kZXhPZignXFxuJyk7XG4gICAgICAgIGlmIChlbmRPZkxpbmVQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gZW5kT2ZMaW5lUG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgcmV0dXJuIHVucmVhZERhdGEuc2xpY2UoMCwgZW5kT2ZMaW5lUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5pc0J1ZmZlclRvb0xvbmcgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBidWZmZXIubGVuZ3RoICYmIGJ1ZmZlci5sZW5ndGggPiBNQVhfQlVGRkVSX0xFTkdUSDtcbiAgICB9O1xuICAgIHJldHVybiBIVFRQUmVxdWVzdDtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9yZXF1ZXN0ID0gKGh0dHBfcmVxdWVzdF9IVFRQUmVxdWVzdCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9zdGF0ZS50c1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiQ09OTkVDVElOR1wiXSA9IDBdID0gXCJDT05ORUNUSU5HXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJPUEVOXCJdID0gMV0gPSBcIk9QRU5cIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNMT1NFRFwiXSA9IDNdID0gXCJDTE9TRURcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzdGF0ZSA9IChTdGF0ZSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3NvY2tldC50c1xuXG5cblxudmFyIGF1dG9JbmNyZW1lbnQgPSAxO1xudmFyIGh0dHBfc29ja2V0X0hUVFBTb2NrZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhUVFBTb2NrZXQoaG9va3MsIHVybCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHJhbmRvbU51bWJlcigxMDAwKSArICcvJyArIHJhbmRvbVN0cmluZyg4KTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGdldExvY2F0aW9uKHVybCk7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLkNPTk5FQ1RJTkc7XG4gICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuICAgIH1cbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFJhdyhKU09OLnN0cmluZ2lmeShbcGF5bG9hZF0pKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaG9va3Muc2VuZEhlYXJ0YmVhdCh0aGlzKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoY29kZSwgcmVhc29uLCB0cnVlKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnNlbmRSYXcgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuY3JlYXRlU29ja2V0UmVxdWVzdCgnUE9TVCcsIGdldFVuaXF1ZVVSTChnZXRTZW5kVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKS5zdGFydChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5vcGVuU3RyZWFtKCk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZVN0cmVhbSgpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5DTE9TRUQ7XG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMub25jbG9zZSh7XG4gICAgICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcbiAgICAgICAgICAgICAgICB3YXNDbGVhbjogd2FzQ2xlYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIGlmIChjaHVuay5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4pIHtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXlsb2FkO1xuICAgICAgICB2YXIgdHlwZSA9IGNodW5rLmRhdGEuc2xpY2UoMCwgMSk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAne30nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbihwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdudWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50KHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5vbkhlYXJ0YmVhdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKHBheWxvYWRbMF0sIHBheWxvYWRbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5DT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYXNlID0gcmVwbGFjZUhvc3QodGhpcy5sb2NhdGlvbi5iYXNlLCBvcHRpb25zLmhvc3RuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLk9QRU47XG4gICAgICAgICAgICBpZiAodGhpcy5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKDEwMDYsICdTZXJ2ZXIgbG9zdCBzZXNzaW9uJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuT1BFTiAmJiB0aGlzLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5vbm1lc3NhZ2UoeyBkYXRhOiBldmVudCB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25BY3Rpdml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25hY3Rpdml0eSkge1xuICAgICAgICAgICAgdGhpcy5vbmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMub25lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub3BlblN0cmVhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBydW50aW1lLmNyZWF0ZVNvY2tldFJlcXVlc3QoJ1BPU1QnLCBnZXRVbmlxdWVVUkwodGhpcy5ob29rcy5nZXRSZWNlaXZlVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnY2h1bmsnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgICAgIF90aGlzLm9uQ2h1bmsoY2h1bmspO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnZmluaXNoZWQnLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBfdGhpcy5ob29rcy5vbkZpbmlzaGVkKF90aGlzLCBzdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnYnVmZmVyX3Rvb19sb25nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoMTAwNiwgJ0NvdWxkIG5vdCBzdGFydCBzdHJlYW1pbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUuY2xvc2VTdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0udW5iaW5kX2FsbCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEhUVFBTb2NrZXQ7XG59KCkpO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24odXJsKSB7XG4gICAgdmFyIHBhcnRzID0gLyhbXlxcP10qKVxcLyooXFw/Py4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IHBhcnRzWzFdLFxuICAgICAgICBxdWVyeVN0cmluZzogcGFydHNbMl1cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U2VuZFVSTCh1cmwsIHNlc3Npb24pIHtcbiAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc2VuZCc7XG59XG5mdW5jdGlvbiBnZXRVbmlxdWVVUkwodXJsKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyAndD0nICsgK25ldyBEYXRlKCkgKyAnJm49JyArIGF1dG9JbmNyZW1lbnQrKztcbn1cbmZ1bmN0aW9uIHJlcGxhY2VIb3N0KHVybCwgaG9zdG5hbWUpIHtcbiAgICB2YXIgdXJsUGFydHMgPSAvKGh0dHBzPzpcXC9cXC8pKFteXFwvOl0rKSgoXFwvfDopPy4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB1cmxQYXJ0c1sxXSArIGhvc3RuYW1lICsgdXJsUGFydHNbM107XG59XG5mdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5mdW5jdGlvbiByYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmFuZG9tTnVtYmVyKDMyKS50b1N0cmluZygzMikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zb2NrZXQgPSAoaHR0cF9zb2NrZXRfSFRUUFNvY2tldCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3N0cmVhbWluZ19zb2NrZXQudHNcbnZhciBodHRwX3N0cmVhbWluZ19zb2NrZXRfaG9va3MgPSB7XG4gICAgZ2V0UmVjZWl2ZVVSTDogZnVuY3Rpb24gKHVybCwgc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc3RyZWFtaW5nJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBzb2NrZXQub25DbG9zZSgxMDA2LCAnQ29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoJyArIHN0YXR1cyArICcpJywgZmFsc2UpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3N0cmVhbWluZ19zb2NrZXQgPSAoaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9odHRwL2h0dHBfcG9sbGluZ19zb2NrZXQudHNcbnZhciBodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzZW5kSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKHNvY2tldCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc29ja2V0LnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3BvbGxpbmdfc29ja2V0ID0gKGh0dHBfcG9sbGluZ19zb2NrZXRfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cF94aHJfcmVxdWVzdC50c1xuXG52YXIgaHR0cF94aHJfcmVxdWVzdF9ob29rcyA9IHtcbiAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHJ1bnRpbWUuZ2V0WEhSQVBJKCk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuayh4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHhocjtcbiAgICB9LFxuICAgIGFib3J0UmVxdWVzdDogZnVuY3Rpb24gKHhocikge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfeGhyX3JlcXVlc3QgPSAoaHR0cF94aHJfcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvaHR0cC9odHRwLnRzXG5cblxuXG5cblxudmFyIEhUVFAgPSB7XG4gICAgY3JlYXRlU3RyZWFtaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3N0cmVhbWluZ19zb2NrZXQsIHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVQb2xsaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3BvbGxpbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0OiBmdW5jdGlvbiAoaG9va3MsIHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IGh0dHBfc29ja2V0KGhvb2tzLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlWEhSOiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hocl9yZXF1ZXN0LCBtZXRob2QsIHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVSZXF1ZXN0OiBmdW5jdGlvbiAoaG9va3MsIG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgaHR0cF9yZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfaHR0cCA9IChIVFRQKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2h0dHAvaHR0cC50c1xuXG5cbmh0dHBfaHR0cC5jcmVhdGVYRFIgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KGh0dHBfeGRvbWFpbl9yZXF1ZXN0LCBtZXRob2QsIHVybCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgd2ViX2h0dHBfaHR0cCA9IChodHRwX2h0dHApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvcnVudGltZS50c1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIFJ1bnRpbWUgPSB7XG4gICAgbmV4dEF1dGhDYWxsYmFja0lEOiAxLFxuICAgIGF1dGhfY2FsbGJhY2tzOiB7fSxcbiAgICBTY3JpcHRSZWNlaXZlcnM6IFNjcmlwdFJlY2VpdmVycyxcbiAgICBEZXBlbmRlbmNpZXNSZWNlaXZlcnM6IERlcGVuZGVuY2llc1JlY2VpdmVycyxcbiAgICBnZXREZWZhdWx0U3RyYXRlZ3k6IGRlZmF1bHRfc3RyYXRlZ3ksXG4gICAgVHJhbnNwb3J0czogdHJhbnNwb3J0c190cmFuc3BvcnRzLFxuICAgIHRyYW5zcG9ydENvbm5lY3Rpb25Jbml0aWFsaXplcjogdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXIsXG4gICAgSFRUUEZhY3Rvcnk6IHdlYl9odHRwX2h0dHAsXG4gICAgVGltZWxpbmVUcmFuc3BvcnQ6IGpzb25wX3RpbWVsaW5lLFxuICAgIGdldFhIUkFQSTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xuICAgIH0sXG4gICAgZ2V0V2ViU29ja2V0QVBJOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXQ7XG4gICAgfSxcbiAgICBzZXR1cDogZnVuY3Rpb24gKFB1c2hlckNsYXNzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5QdXNoZXIgPSBQdXNoZXJDbGFzcztcbiAgICAgICAgdmFyIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRG9jdW1lbnRCb2R5KFB1c2hlckNsYXNzLnJlYWR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF3aW5kb3cuSlNPTikge1xuICAgICAgICAgICAgRGVwZW5kZW5jaWVzLmxvYWQoJ2pzb24yJywge30sIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0sXG4gICAgZ2V0UHJvdG9jb2w6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICB9LFxuICAgIGdldEF1dGhvcml6ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGFqYXg6IHhocl9hdXRoLCBqc29ucDoganNvbnBfYXV0aCB9O1xuICAgIH0sXG4gICAgb25Eb2N1bWVudEJvZHk6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRG9jdW1lbnRCb2R5KGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVKU09OUFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBqc29ucF9yZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgfSxcbiAgICBjcmVhdGVTY3JpcHRSZXF1ZXN0OiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgc2NyaXB0X3JlcXVlc3Qoc3JjKTtcbiAgICB9LFxuICAgIGdldExvY2FsU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRYSFJBUEkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1pY3Jvc29mdFhIUigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgfSxcbiAgICBjcmVhdGVNaWNyb3NvZnRYSFI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0sXG4gICAgZ2V0TmV0d29yazogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV0X2luZm9fTmV0d29yaztcbiAgICB9LFxuICAgIGNyZWF0ZVdlYlNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFdlYlNvY2tldEFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVTb2NrZXRSZXF1ZXN0OiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNYSFJTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSFRUUEZhY3RvcnkuY3JlYXRlWEhSKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzWERSU3VwcG9ydGVkKHVybC5pbmRleE9mKCdodHRwczonKSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhEUihtZXRob2QsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnQ3Jvc3Mtb3JpZ2luIEhUVFAgcmVxdWVzdHMgYXJlIG5vdCBzdXBwb3J0ZWQnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1hIUlN1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4oQ29uc3RydWN0b3IpICYmIG5ldyBDb25zdHJ1Y3RvcigpLndpdGhDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGlzWERSU3VwcG9ydGVkOiBmdW5jdGlvbiAodXNlVExTKSB7XG4gICAgICAgIHZhciBwcm90b2NvbCA9IHVzZVRMUyA/ICdodHRwczonIDogJ2h0dHA6JztcbiAgICAgICAgdmFyIGRvY3VtZW50UHJvdG9jb2wgPSB0aGlzLmdldFByb3RvY29sKCk7XG4gICAgICAgIHJldHVybiAoQm9vbGVhbih3aW5kb3dbJ1hEb21haW5SZXF1ZXN0J10pICYmIGRvY3VtZW50UHJvdG9jb2wgPT09IHByb3RvY29sKTtcbiAgICB9LFxuICAgIGFkZFVubG9hZExpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVVbmxvYWRMaXN0ZW5lcjogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBydW50aW1lID0gKFJ1bnRpbWUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL2xldmVsLnRzXG52YXIgVGltZWxpbmVMZXZlbDtcbihmdW5jdGlvbiAoVGltZWxpbmVMZXZlbCkge1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkVSUk9SXCJdID0gM10gPSBcIkVSUk9SXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiSU5GT1wiXSA9IDZdID0gXCJJTkZPXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiREVCVUdcIl0gPSA3XSA9IFwiREVCVUdcIjtcbn0pKFRpbWVsaW5lTGV2ZWwgfHwgKFRpbWVsaW5lTGV2ZWwgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfbGV2ZWwgPSAoVGltZWxpbmVMZXZlbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdGltZWxpbmUvdGltZWxpbmUudHNcblxuXG5cbnZhciB0aW1lbGluZV9UaW1lbGluZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZWxpbmUoa2V5LCBzZXNzaW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnNlbnQgPSAwO1xuICAgICAgICB0aGlzLnVuaXF1ZUlEID0gMDtcbiAgICB9XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChsZXZlbCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKGxldmVsIDw9IHRoaXMub3B0aW9ucy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaChleHRlbmQoe30sIGV2ZW50LCB7IHRpbWVzdGFtcDogdXRpbC5ub3coKSB9KSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0ICYmIHRoaXMuZXZlbnRzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5FUlJPUiwgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuSU5GTywgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLkRFQlVHLCBldmVudCk7XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSBleHRlbmQoe1xuICAgICAgICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgICAgICAgYnVuZGxlOiB0aGlzLnNlbnQgKyAxLFxuICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIGxpYjogJ2pzJyxcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5vcHRpb25zLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogdGhpcy5vcHRpb25zLmZlYXR1cmVzLFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMuZXZlbnRzXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICBzZW5kZm4oZGF0YSwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmdlbmVyYXRlVW5pcXVlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5pcXVlSUQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pcXVlSUQ7XG4gICAgfTtcbiAgICByZXR1cm4gVGltZWxpbmU7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfdGltZWxpbmUgPSAodGltZWxpbmVfVGltZWxpbmUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvdHJhbnNwb3J0X3N0cmF0ZWd5LnRzXG5cblxuXG5cbnZhciB0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFN0cmF0ZWd5KG5hbWUsIHByaW9yaXR5LCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoe1xuICAgICAgICAgICAgdXNlVExTOiB0aGlzLm9wdGlvbnMudXNlVExTXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IFVuc3VwcG9ydGVkU3RyYXRlZ3koKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPCBtaW5Qcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdygpLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbih0aGlzLm5hbWUsIHRoaXMucHJpb3JpdHksIHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciBoYW5kc2hha2UgPSBudWxsO1xuICAgICAgICB2YXIgb25Jbml0aWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZHNoYWtlID0gZmFjdG9yeS5jcmVhdGVIYW5kc2hha2UodHJhbnNwb3J0LCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZFRyYW5zcG9ydDtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc3BvcnQgPSBzYWZlSlNPTlN0cmluZ2lmeSh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFRyYW5zcG9ydENsb3NlZChzZXJpYWxpemVkVHJhbnNwb3J0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgdHJhbnNwb3J0LmluaXRpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByaW9yaXR5IDwgcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kc2hha2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9zdHJhdGVneSA9ICh0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kpO1xuZnVuY3Rpb24gZmFpbEF0dGVtcHQoZXJyb3IsIGNhbGxiYWNrKSB7XG4gICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9O1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvc3RyYXRlZ3lfYnVpbGRlci50c1xuXG5cblxuXG5cbnZhciBzdHJhdGVneV9idWlsZGVyX1RyYW5zcG9ydHMgPSBydW50aW1lLlRyYW5zcG9ydHM7XG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9kZWZpbmVUcmFuc3BvcnQgPSBmdW5jdGlvbiAoY29uZmlnLCBuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcikge1xuICAgIHZhciB0cmFuc3BvcnRDbGFzcyA9IHN0cmF0ZWd5X2J1aWxkZXJfVHJhbnNwb3J0c1t0eXBlXTtcbiAgICBpZiAoIXRyYW5zcG9ydENsYXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZFRyYW5zcG9ydCh0eXBlKTtcbiAgICB9XG4gICAgdmFyIGVuYWJsZWQgPSAoIWNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cyB8fFxuICAgICAgICBhcnJheUluZGV4T2YoY29uZmlnLmVuYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICghY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cyB8fFxuICAgICAgICAgICAgYXJyYXlJbmRleE9mKGNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMsIG5hbWUpID09PSAtMSk7XG4gICAgdmFyIHRyYW5zcG9ydDtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IGlnbm9yZU51bGxPcmlnaW46IGNvbmZpZy5pZ25vcmVOdWxsT3JpZ2luIH0sIG9wdGlvbnMpO1xuICAgICAgICB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X3N0cmF0ZWd5KG5hbWUsIHByaW9yaXR5LCBtYW5hZ2VyID8gbWFuYWdlci5nZXRBc3Npc3RhbnQodHJhbnNwb3J0Q2xhc3MpIDogdHJhbnNwb3J0Q2xhc3MsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3J0ID0gc3RyYXRlZ3lfYnVpbGRlcl9VbnN1cHBvcnRlZFN0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNwb3J0O1xufTtcbnZhciBzdHJhdGVneV9idWlsZGVyX1Vuc3VwcG9ydGVkU3RyYXRlZ3kgPSB7XG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgY29ubmVjdDogZnVuY3Rpb24gKF8sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFVuc3VwcG9ydGVkU3RyYXRlZ3koKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25maWcudHNcblxuXG5mdW5jdGlvbiBnZXRDb25maWcob3B0cykge1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGFjdGl2aXR5VGltZW91dDogb3B0cy5hY3Rpdml0eVRpbWVvdXQgfHwgZGVmYXVsdHMuYWN0aXZpdHlUaW1lb3V0LFxuICAgICAgICBhdXRoRW5kcG9pbnQ6IG9wdHMuYXV0aEVuZHBvaW50IHx8IGRlZmF1bHRzLmF1dGhFbmRwb2ludCxcbiAgICAgICAgYXV0aFRyYW5zcG9ydDogb3B0cy5hdXRoVHJhbnNwb3J0IHx8IGRlZmF1bHRzLmF1dGhUcmFuc3BvcnQsXG4gICAgICAgIGNsdXN0ZXI6IG9wdHMuY2x1c3RlciB8fCBkZWZhdWx0cy5jbHVzdGVyLFxuICAgICAgICBodHRwUGF0aDogb3B0cy5odHRwUGF0aCB8fCBkZWZhdWx0cy5odHRwUGF0aCxcbiAgICAgICAgaHR0cFBvcnQ6IG9wdHMuaHR0cFBvcnQgfHwgZGVmYXVsdHMuaHR0cFBvcnQsXG4gICAgICAgIGh0dHBzUG9ydDogb3B0cy5odHRwc1BvcnQgfHwgZGVmYXVsdHMuaHR0cHNQb3J0LFxuICAgICAgICBwb25nVGltZW91dDogb3B0cy5wb25nVGltZW91dCB8fCBkZWZhdWx0cy5wb25nVGltZW91dCxcbiAgICAgICAgc3RhdHNIb3N0OiBvcHRzLnN0YXRzSG9zdCB8fCBkZWZhdWx0cy5zdGF0c19ob3N0LFxuICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IG9wdHMudW5hdmFpbGFibGVUaW1lb3V0IHx8IGRlZmF1bHRzLnVuYXZhaWxhYmxlVGltZW91dCxcbiAgICAgICAgd3NQYXRoOiBvcHRzLndzUGF0aCB8fCBkZWZhdWx0cy53c1BhdGgsXG4gICAgICAgIHdzUG9ydDogb3B0cy53c1BvcnQgfHwgZGVmYXVsdHMud3NQb3J0LFxuICAgICAgICB3c3NQb3J0OiBvcHRzLndzc1BvcnQgfHwgZGVmYXVsdHMud3NzUG9ydCxcbiAgICAgICAgZW5hYmxlU3RhdHM6IGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpLFxuICAgICAgICBodHRwSG9zdDogZ2V0SHR0cEhvc3Qob3B0cyksXG4gICAgICAgIHVzZVRMUzogc2hvdWxkVXNlVExTKG9wdHMpLFxuICAgICAgICB3c0hvc3Q6IGdldFdlYnNvY2tldEhvc3Qob3B0cylcbiAgICB9O1xuICAgIGlmICgnYXV0aCcgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgaWYgKCdhdXRob3JpemVyJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuYXV0aG9yaXplciA9IG9wdHMuYXV0aG9yaXplcjtcbiAgICBpZiAoJ2Rpc2FibGVkVHJhbnNwb3J0cycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cyA9IG9wdHMuZGlzYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnZW5hYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cyA9IG9wdHMuZW5hYmxlZFRyYW5zcG9ydHM7XG4gICAgaWYgKCdpZ25vcmVOdWxsT3JpZ2luJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuaWdub3JlTnVsbE9yaWdpbiA9IG9wdHMuaWdub3JlTnVsbE9yaWdpbjtcbiAgICBpZiAoJ3RpbWVsaW5lUGFyYW1zJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcudGltZWxpbmVQYXJhbXMgPSBvcHRzLnRpbWVsaW5lUGFyYW1zO1xuICAgIGlmICgnbmFjbCcgaW4gb3B0cykge1xuICAgICAgICBjb25maWcubmFjbCA9IG9wdHMubmFjbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmZ1bmN0aW9uIGdldEh0dHBIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy5odHRwSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy5odHRwSG9zdDtcbiAgICB9XG4gICAgaWYgKG9wdHMuY2x1c3Rlcikge1xuICAgICAgICByZXR1cm4gXCJzb2NranMtXCIgKyBvcHRzLmNsdXN0ZXIgKyBcIi5wdXNoZXIuY29tXCI7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0cy5odHRwSG9zdDtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3Qob3B0cykge1xuICAgIGlmIChvcHRzLndzSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy53c0hvc3Q7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihvcHRzLmNsdXN0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0V2Vic29ja2V0SG9zdEZyb21DbHVzdGVyKGRlZmF1bHRzLmNsdXN0ZXIpO1xufVxuZnVuY3Rpb24gZ2V0V2Vic29ja2V0SG9zdEZyb21DbHVzdGVyKGNsdXN0ZXIpIHtcbiAgICByZXR1cm4gXCJ3cy1cIiArIGNsdXN0ZXIgKyBcIi5wdXNoZXIuY29tXCI7XG59XG5mdW5jdGlvbiBzaG91bGRVc2VUTFMob3B0cykge1xuICAgIGlmIChydW50aW1lLmdldFByb3RvY29sKCkgPT09ICdodHRwczonKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChvcHRzLmZvcmNlVExTID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0RW5hYmxlU3RhdHNDb25maWcob3B0cykge1xuICAgIGlmICgnZW5hYmxlU3RhdHMnIGluIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMuZW5hYmxlU3RhdHM7XG4gICAgfVxuICAgIGlmICgnZGlzYWJsZVN0YXRzJyBpbiBvcHRzKSB7XG4gICAgICAgIHJldHVybiAhb3B0cy5kaXNhYmxlU3RhdHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9wdXNoZXIudHNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwdXNoZXJfUHVzaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0FwcEtleShhcHBfa2V5KTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICghb3B0aW9ucy5jbHVzdGVyICYmICEob3B0aW9ucy53c0hvc3QgfHwgb3B0aW9ucy5odHRwSG9zdCkpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2phdmFzY3JpcHRRdWlja1N0YXJ0Jyk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIllvdSBzaG91bGQgYWx3YXlzIHNwZWNpZnkgYSBjbHVzdGVyIHdoZW4gY29ubmVjdGluZy4gXCIgKyBzdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZGlzYWJsZVN0YXRzJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignVGhlIGRpc2FibGVTdGF0cyBvcHRpb24gaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBlbmFibGVTdGF0cycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5ID0gYXBwX2tleTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBnZXRDb25maWcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBmYWN0b3J5LmNyZWF0ZUNoYW5uZWxzKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIgPSBuZXcgZGlzcGF0Y2hlcigpO1xuICAgICAgICB0aGlzLnNlc3Npb25JRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gbmV3IHRpbWVsaW5lX3RpbWVsaW5lKHRoaXMua2V5LCB0aGlzLnNlc3Npb25JRCwge1xuICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5jb25maWcuY2x1c3RlcixcbiAgICAgICAgICAgIGZlYXR1cmVzOiBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMoKSxcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5jb25maWcudGltZWxpbmVQYXJhbXMgfHwge30sXG4gICAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgICAgICBsZXZlbDogdGltZWxpbmVfbGV2ZWwuSU5GTyxcbiAgICAgICAgICAgIHZlcnNpb246IGRlZmF1bHRzLlZFUlNJT05cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVTdGF0cykge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlciA9IGZhY3RvcnkuY3JlYXRlVGltZWxpbmVTZW5kZXIodGhpcy50aW1lbGluZSwge1xuICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMuY29uZmlnLnN0YXRzSG9zdCxcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3RpbWVsaW5lL3YyLycgKyBydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0Lm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnZXRTdHJhdGVneSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVudGltZS5nZXREZWZhdWx0U3RyYXRlZ3koX3RoaXMuY29uZmlnLCBvcHRpb25zLCBzdHJhdGVneV9idWlsZGVyX2RlZmluZVRyYW5zcG9ydCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGZhY3RvcnkuY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXIodGhpcy5rZXksIHtcbiAgICAgICAgICAgIGdldFN0cmF0ZWd5OiBnZXRTdHJhdGVneSxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLnRpbWVsaW5lLFxuICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLmNvbmZpZy5hY3Rpdml0eVRpbWVvdXQsXG4gICAgICAgICAgICBwb25nVGltZW91dDogdGhpcy5jb25maWcucG9uZ1RpbWVvdXQsXG4gICAgICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IHRoaXMuY29uZmlnLnVuYXZhaWxhYmxlVGltZW91dCxcbiAgICAgICAgICAgIHVzZVRMUzogQm9vbGVhbih0aGlzLmNvbmZpZy51c2VUTFMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGltZWxpbmVTZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lbGluZVNlbmRlci5zZW5kKF90aGlzLmNvbm5lY3Rpb24uaXNVc2luZ1RMUygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgaW50ZXJuYWwgPSBldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbCA9IF90aGlzLmNoYW5uZWwoZXZlbnQuY2hhbm5lbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdsb2JhbF9lbWl0dGVyLmVtaXQoZXZlbnQuZXZlbnQsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGFubmVscy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnZGlzY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFB1c2hlci5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgaW5zdGFuY2VzOiBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aCB9KTtcbiAgICAgICAgaWYgKFB1c2hlci5pc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQdXNoZXIucmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFB1c2hlci5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgUHVzaGVyLmluc3RhbmNlc1tpXS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5nZXRDbGllbnRGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGtleXMoZmlsdGVyT2JqZWN0KHsgd3M6IHJ1bnRpbWUuVHJhbnNwb3J0cy53cyB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaXNTdXBwb3J0ZWQoe30pO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmNoYW5uZWwgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5maW5kKG5hbWUpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5hbGxDaGFubmVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWxsKCk7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgICAgIHZhciB1c2luZ1RMUyA9IHRoaXMuY29ubmVjdGlvbi5pc1VzaW5nVExTKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVsaW5lU2VuZGVyID0gdGhpcy50aW1lbGluZVNlbmRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIgPSBuZXcgUGVyaW9kaWNUaW1lcig2MDAwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVNlbmRlci5zZW5kKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci51bmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYmluZF9nbG9iYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfYWxsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2FsbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2hhbm5lbE5hbWU7XG4gICAgICAgIGZvciAoY2hhbm5lbE5hbWUgaW4gdGhpcy5jaGFubmVscy5jaGFubmVscykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMuaGFzT3duUHJvcGVydHkoY2hhbm5lbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoY2hhbm5lbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xuICAgICAgICBpZiAoY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIGNoYW5uZWwuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjaGFubmVsLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoYW5uZWxfbmFtZSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjaGFubmVsX25hbWUpO1xuICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuY2FuY2VsU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFubmVsID0gdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgICAgIGlmIChjaGFubmVsICYmIGNoYW5uZWwuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kX2V2ZW50KGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zaG91bGRVc2VUTFMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy51c2VUTFM7XG4gICAgfTtcbiAgICBQdXNoZXIuaW5zdGFuY2VzID0gW107XG4gICAgUHVzaGVyLmlzUmVhZHkgPSBmYWxzZTtcbiAgICBQdXNoZXIubG9nVG9Db25zb2xlID0gZmFsc2U7XG4gICAgUHVzaGVyLlJ1bnRpbWUgPSBydW50aW1lO1xuICAgIFB1c2hlci5TY3JpcHRSZWNlaXZlcnMgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycztcbiAgICBQdXNoZXIuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gcnVudGltZS5EZXBlbmRlbmNpZXNSZWNlaXZlcnM7XG4gICAgUHVzaGVyLmF1dGhfY2FsbGJhY2tzID0gcnVudGltZS5hdXRoX2NhbGxiYWNrcztcbiAgICByZXR1cm4gUHVzaGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvcmVfcHVzaGVyID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAocHVzaGVyX1B1c2hlcik7XG5mdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93ICdZb3UgbXVzdCBwYXNzIHlvdXIgYXBwIGtleSB3aGVuIHlvdSBpbnN0YW50aWF0ZSBQdXNoZXIuJztcbiAgICB9XG59XG5ydW50aW1lLnNldHVwKHB1c2hlcl9QdXNoZXIpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sIm5hbWVzIjpbIndpbmRvdyIsIl8iLCJyZXF1aXJlIiwiU3dhbCIsIlBvcHBlciIsIiQiLCJqUXVlcnkiLCJhbmltYXRlIiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiRWNobyIsIlB1c2hlciIsImJyb2FkY2FzdGVyIiwia2V5IiwicHJvY2VzcyIsImVudiIsIk1JWF9BQkxZX1BVQkxJQ19LRVkiLCJ3c0hvc3QiLCJ3c1BvcnQiLCJkaXNhYmxlU3RhdHMiLCJlbmNyeXB0ZWQiLCJTd2FsTW9kYWwiLCJpY29uIiwidGl0bGUiLCJodG1sIiwiZmlyZSIsIlN3YWxDb25maXJtIiwiY29uZmlybUJ1dHRvblRleHQiLCJtZXRob2QiLCJwYXJhbXMiLCJjYWxsYmFjayIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsInJldmVyc2VCdXR0b25zIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwibGl2ZXdpcmUiLCJlbWl0IiwiU3dhbEFsZXJ0IiwidGltZW91dCIsIlRvYXN0IiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImRvY3VtZW50Iiwib24iLCJkYXRhIiwidGV4dCIsImNvbmZpcm1UZXh0IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXNzd29yZEVsZW0iLCJwYXJlbnQiLCJmaW5kIiwiY3VycmVudFR5cGUiLCJhdHRyIiwidG9nZ2xlQ2xhc3MiLCJwcm9wIiwidHlwZSIsInBlcm1pc3Npb25UcmVlIiwiaXMiLCJzaWJsaW5ncyIsInJlbW92ZUF0dHIiLCJlYWNoIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbnMiLCJmb3JtIiwiZW5hYmxlU3VibWl0QnV0dG9ucyIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImxvY2F0aW9uIiwiYXNzaWduIiwiY29uZmlnIiwic3dhbENvbmZpZyIsInJlbW92ZSIsImhhc2giLCJ0YXJnZXQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGFiIiwidG9vbHRpcCJdLCJzb3VyY2VSb290IjoiIn0=