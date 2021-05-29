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
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;
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
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__.default({
  broadcaster: 'pusher',
  key: "2fe77bbfa3777ff3eb11",
  cluster: "ap1",
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

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
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__.default,
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
    en: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__.default),
    default: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__.default),
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
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/backend","css/frontend","css/tailwind","/js/vendor"], () => (__webpack_exec__("./resources/js/frontend/app.js"), __webpack_exec__("./resources/sass/tailwind/app.scss"), __webpack_exec__("./resources/sass/frontend/app.scss"), __webpack_exec__("./resources/sass/backend/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJnb24tZGVzaWduLXN5c3RlbS1mcmVlL2Fzc2V0cy9qcy9hcmdvbi1kZXNpZ24tc3lzdGVtLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL2wxMG4vZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3R5cGVzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS91dGlscy9kYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy90YWlsd2luZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9mcm9udGVuZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9iYWNrZW5kL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIl8iLCJyZXF1aXJlIiwiU3dhbCIsIlBvcHBlciIsIiQiLCJqUXVlcnkiLCJhbmltYXRlIiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiUHVzaGVyIiwiRWNobyIsImJyb2FkY2FzdGVyIiwia2V5IiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJTd2FsTW9kYWwiLCJpY29uIiwidGl0bGUiLCJodG1sIiwiZmlyZSIsIlN3YWxDb25maXJtIiwiY29uZmlybUJ1dHRvblRleHQiLCJtZXRob2QiLCJwYXJhbXMiLCJjYWxsYmFjayIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsInJldmVyc2VCdXR0b25zIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwibGl2ZXdpcmUiLCJlbWl0IiwiU3dhbEFsZXJ0IiwidGltZW91dCIsIlRvYXN0IiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIm9uT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImRvY3VtZW50Iiwib24iLCJkYXRhIiwidGV4dCIsImNvbmZpcm1UZXh0IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJpcyIsInNpYmxpbmdzIiwiZmluZCIsImF0dHIiLCJyZW1vdmVBdHRyIiwiZWFjaCIsImRpc2FibGVTdWJtaXRCdXR0b25zIiwiZm9ybSIsImVuYWJsZVN1Ym1pdEJ1dHRvbnMiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbEJ1dHRvblRleHQiLCJsb2NhdGlvbiIsImFzc2lnbiIsImNvbmZpZyIsInN3YWxDb25maWciLCJyZW1vdmUiLCJoYXNoIiwidGFyZ2V0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRhYiIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsa09BQWtPLCtCQUErQiw2QkFBNkIsaUNBQWlDLGdDQUFnQyx5QkFBeUIsTUFBTSxrQkFBa0IsdUJBQXVCLHdDQUF3Qyx1QkFBdUIseUJBQXlCLHlCQUF5QixNQUFNLGtCQUFrQix1QkFBdUIsd0NBQXdDLHVCQUF1Qix5QkFBeUIsZ01BQWdNLGlDQUFpQywrR0FBK0cscUdBQXFHLG1EQUFtRCx1S0FBdUssRUFBRSxFQUFFLDRTQUE0UywwREFBMEQsOHhCQUE4eEIsdVRBQXVULDZEQUE2RCx1QkFBdUIsZ0VBQWdFLHlDQUF5Qyx5SEFBeUgsNENBQTRDLEVBQUUsMkJBQTJCLFlBQVksd0RBQXdELDZCQUE2QixxQ0FBcUMsRUFBRSwyQkFBMkIsc0JBQXNCLGFBQWEsK0JBQStCLHFDQUFxQyx5QkFBeUIsbUNBQW1DLDhCQUE4QiwrQkFBK0IsZ0JBQWdCLGdDQUFnQyxpQ0FBaUMsYUFBYSxNQUFNLHNCQUFzQixxREFBcUQsaU9BQWlPLGdDQUFnQyxnR0FBZ0csc1NBQXNTLDJCQUEyQixtREFBbUQsT0FBTyxpUUFBaVEsRUFBRSx3QkFBd0IsK0NBQStDLG9EQUFvRCxnQ0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBYTtBQUNsQyxzQ0FBc0MsZ0RBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsMEJBQTBCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdjdEbEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWhCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEYrRDtBQUNuQjtBQUNGO0FBQ25DLDhCQUE4QixVQUFVLG9EQUFRLFNBQVMsa0RBQU8scUJBQXFCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBTztBQUNuQyxVQUFVLGdEQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTywyQkFBMkIsVUFBVSxvREFBUSxTQUFTLGtEQUFPLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvREFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxtQkFBbUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFVO0FBQzlCLGdDQUFnQyxtREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVM7QUFDekM7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFNBQVM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEb0M7QUFDcEM7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQkFBaUIsMkNBQUc7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSwyQ0FBRztBQUNsQixLQUFLO0FBQ0wsaUJBQWlCLDJDQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFDQUFxQywyQ0FBRztBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQiwyQ0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLDJDQUFHO0FBQ3BCLGlCQUFpQiwyQ0FBRztBQUNwQjtBQUNBLGlCQUFpQiwyQ0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLDJDQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JTywwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7OztBQ1RNO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQzUvQ3BCOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUt1QjtBQUM3QixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4QkFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCLGVBQWUsOEJBQW1CO0FBQ2xDLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCLGdDQUFnQyw4QkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBbUI7QUFDOUIsaURBQWlELGlDQUFpQztBQUNsRiwwRUFBMEUsOEJBQW1CLDJCQUEyQixtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hELFdBQVcsOEJBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUIsaUNBQWlDLCtEQUErRDtBQUM3SDtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUFtQixDQUFDLDhCQUFtQjtBQUN4RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FB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Q0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLHVCQUF1QixFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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Q0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsNkNBQTZDO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSw0Q0FBNEM7QUFDakg7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFELHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsOEJBQThCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVUsd0JBQXdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUIsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiIvanMvZnJvbnRlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYmlnX2ltYWdlLG5hdmJhcl9pbml0aWFsaXplZCx0cmFuc3BhcmVudD0hMCx0cmFuc3BhcmVudERlbW89ITAsZml4ZWRUb3A9ITEsYmFja2dyb3VuZE9yYW5nZT0hMSx0b2dnbGVfaW5pdGlhbGl6ZWQ9ITEsJGRhdGVwaWNrZXI9JChcIi5kYXRlcGlja2VyXCIpLCRjb2xsYXBzZT0kKFwiLm5hdmJhciAuY29sbGFwc2VcIiksJGh0bWw9JChcImh0bWxcIiksJHRhZ3NpbnB1dD0kKFwiLnRhZ3NpbnB1dFwiKTtmdW5jdGlvbiBoaWRlTmF2YmFyQ29sbGFwc2UoZSl7ZS5hZGRDbGFzcyhcImNvbGxhcHNpbmctb3V0XCIpfWZ1bmN0aW9uIGhpZGRlbk5hdmJhckNvbGxhcHNlKGUpe2UucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nLW91dFwiKX1mdW5jdGlvbiBkZWJvdW5jZSh0LG8scil7dmFyIG47cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPWFyZ3VtZW50cztjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bj1udWxsLHJ8fHQuYXBwbHkoZSxhKX0sbyksciYmIW4mJnQuYXBwbHkoZSxhKX19ZnVuY3Rpb24gZGVib3VuY2UodCxvLHIpe3ZhciBuO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1hcmd1bWVudHM7Y2xlYXJUaW1lb3V0KG4pLG49c2V0VGltZW91dChmdW5jdGlvbigpe249bnVsbCxyfHx0LmFwcGx5KGUsYSl9LG8pLHImJiFuJiZ0LmFwcGx5KGUsYSl9fS0xPG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpPygkKFwiLndyYXBwZXIgLmxvZ2luLXBhZ2UsIC5yZWdpc3Rlci1wYWdlLCAuY2FyZFwiKS5wZXJmZWN0U2Nyb2xsYmFyKCksMCE9JChcIi50YWItY29udGVudCAudGFibGUtcmVzcG9uc2l2ZVwiKS5sZW5ndGgmJiQoXCIudGFibGUtcmVzcG9uc2l2ZVwiKS5lYWNoKGZ1bmN0aW9uKCl7bmV3IFBlcmZlY3RTY3JvbGxiYXIoJCh0aGlzKVswXSl9KSwkaHRtbC5hZGRDbGFzcyhcInBlcmZlY3Qtc2Nyb2xsYmFyLW9uXCIpKTokaHRtbC5hZGRDbGFzcyhcInBlcmZlY3Qtc2Nyb2xsYmFyLW9mZlwiKSwkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0sIFtyZWw9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpLCQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7Y29sb3JfY2xhc3M9JCh0aGlzKS5kYXRhKFwiY29sb3JcIiksJCh0aGlzKS5wb3BvdmVyKHt0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlci0nK2NvbG9yX2NsYXNzKydcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J30pfSk7dmFyIGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmUxXCIpLHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmUyXCIpLG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmUzXCIpLHI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmU0XCIpLG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmU1XCIpLGw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmU2XCIpLHM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmU3XCIpLGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcXVhcmU4XCIpOzAhPSQoXCIuc3F1YXJlXCIpLmxlbmd0aCYmJChkb2N1bWVudCkubW91c2Vtb3ZlKGZ1bmN0aW9uKGUpe3Bvc1g9ZXZlbnQuY2xpZW50WC13aW5kb3cuaW5uZXJXaWR0aC8yLHBvc1k9ZXZlbnQuY2xpZW50WS13aW5kb3cuaW5uZXJXaWR0aC82LGEuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLHQuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLG8uc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLHIuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLG4uc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLGwuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjA1KnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wNSpwb3NZK1wiZGVnKVwiLHMuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjAyKnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wMipwb3NZK1wiZGVnKVwiLGkuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoXCIrLjAyKnBvc1grXCJkZWcpIHJvdGF0ZVgoXCIrLS4wMipwb3NZK1wiZGVnKVwifSksQXJnb25LaXQuaW5pdE5hdmJhckltYWdlKCksJG5hdmJhcj0kKFwiLm5hdmJhcltjb2xvci1vbi1zY3JvbGxdXCIpLHNjcm9sbF9kaXN0YW5jZT0kbmF2YmFyLmF0dHIoXCJjb2xvci1vbi1zY3JvbGxcIil8fDUwMCwwIT0kKFwiLm5hdmJhcltjb2xvci1vbi1zY3JvbGxdXCIpLmxlbmd0aCYmKEFyZ29uS2l0LmNoZWNrU2Nyb2xsRm9yVHJhbnNwYXJlbnROYXZiYXIoKSwkKHdpbmRvdykub24oXCJzY3JvbGxcIixBcmdvbktpdC5jaGVja1Njcm9sbEZvclRyYW5zcGFyZW50TmF2YmFyKSksJChcIi5mb3JtLWNvbnRyb2xcIikub24oXCJmb2N1c1wiLGZ1bmN0aW9uKCl7JCh0aGlzKS5wYXJlbnQoXCIuaW5wdXQtZ3JvdXBcIikuYWRkQ2xhc3MoXCJpbnB1dC1ncm91cC1mb2N1c1wiKX0pLm9uKFwiYmx1clwiLGZ1bmN0aW9uKCl7JCh0aGlzKS5wYXJlbnQoXCIuaW5wdXQtZ3JvdXBcIikucmVtb3ZlQ2xhc3MoXCJpbnB1dC1ncm91cC1mb2N1c1wiKX0pLCQoXCIuYm9vdHN0cmFwLXN3aXRjaFwiKS5lYWNoKGZ1bmN0aW9uKCl7JHRoaXM9JCh0aGlzKSxkYXRhX29uX2xhYmVsPSR0aGlzLmRhdGEoXCJvbi1sYWJlbFwiKXx8XCJcIixkYXRhX29mZl9sYWJlbD0kdGhpcy5kYXRhKFwib2ZmLWxhYmVsXCIpfHxcIlwiLCR0aGlzLmJvb3RzdHJhcFN3aXRjaCh7b25UZXh0OmRhdGFfb25fbGFiZWwsb2ZmVGV4dDpkYXRhX29mZl9sYWJlbH0pfSksJChcIi5jYXJvdXNlbFwiKS5jYXJvdXNlbCh7aW50ZXJ2YWw6ITF9KSwkKFwiLmRhdGVwaWNrZXJcIilbMF0mJiQoXCIuZGF0ZXBpY2tlclwiKS5lYWNoKGZ1bmN0aW9uKCl7JChcIi5kYXRlcGlja2VyXCIpLmRhdGVwaWNrZXIoe2Rpc2FibGVUb3VjaEtleWJvYXJkOiEwLGF1dG9jbG9zZTohMX0pfSksZmxhdHBpY2tyKFwiLmZsYXRwaWNrclwiLHt9KSxmbGF0cGlja3IoXCIucmFuZ2VcIix7bW9kZTpcInJhbmdlXCJ9KSxmbGF0cGlja3IoXCIuZGF0ZXRpbWVwaWNrZXJcIix7ZW5hYmxlVGltZTohMCxkYXRlRm9ybWF0OlwiWS1tLWQgSDppXCJ9KSxBcmdvbktpdC5pbml0U2xpZGVycygpfSksJGNvbGxhcHNlLmxlbmd0aCYmKCRjb2xsYXBzZS5vbih7XCJoaWRlLmJzLmNvbGxhcHNlXCI6ZnVuY3Rpb24oKXtoaWRlTmF2YmFyQ29sbGFwc2UoJGNvbGxhcHNlKX19KSwkY29sbGFwc2Uub24oe1wiaGlkZGVuLmJzLmNvbGxhcHNlXCI6ZnVuY3Rpb24oKXtoaWRkZW5OYXZiYXJDb2xsYXBzZSgkY29sbGFwc2UpfX0pKSxBcmdvbktpdD17bWlzYzp7bmF2YmFyX21lbnVfdmlzaWJsZTowfSxjaGVja1Njcm9sbEZvclRyYW5zcGFyZW50TmF2YmFyOmRlYm91bmNlKGZ1bmN0aW9uKCl7JChkb2N1bWVudCkuc2Nyb2xsVG9wKCk+c2Nyb2xsX2Rpc3RhbmNlP3RyYW5zcGFyZW50JiYodHJhbnNwYXJlbnQ9ITEsJChcIi5uYXZiYXJbY29sb3Itb24tc2Nyb2xsXVwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci10cmFuc3BhcmVudFwiKSk6dHJhbnNwYXJlbnR8fCh0cmFuc3BhcmVudD0hMCwkKFwiLm5hdmJhcltjb2xvci1vbi1zY3JvbGxdXCIpLmFkZENsYXNzKFwibmF2YmFyLXRyYW5zcGFyZW50XCIpKX0sMTcpLGluaXROYXZiYXJJbWFnZTpmdW5jdGlvbigpe3ZhciBlPSQoXCIubmF2YmFyXCIpLmZpbmQoXCIubmF2YmFyLXRyYW5zbGF0ZVwiKS5zaWJsaW5ncyhcIi5uYXZiYXItY29sbGFwc2VcIiksYT1lLmRhdGEoXCJuYXYtaW1hZ2VcIik7JCh3aW5kb3cpLndpZHRoKCk8OTkxfHwkKFwiYm9keVwiKS5oYXNDbGFzcyhcImJ1cmdlci1tZW51XCIpP251bGwhPWEmJmUuY3NzKFwiYmFja2dyb3VuZFwiLFwidXJsKCdcIithK1wiJylcIikucmVtb3ZlQXR0cihcImRhdGEtbmF2LWltYWdlXCIpLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLFwiY292ZXJcIikuYWRkQ2xhc3MoXCJoYXMtaW1hZ2VcIik6bnVsbCE9YSYmZS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCJcIikuYXR0cihcImRhdGEtbmF2LWltYWdlXCIsXCJcIithKS5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIixcIlwiKS5yZW1vdmVDbGFzcyhcImhhcy1pbWFnZVwiKX0saW5pdERhdGVQaWNrZXI6ZnVuY3Rpb24oKXswIT0kZGF0ZXBpY2tlci5sZW5ndGgmJiRkYXRlcGlja2VyLmRhdGV0aW1lcGlja2VyKHtpY29uczp7dGltZTpcInRpbS1pY29ucyBpY29uLXdhdGNoLXRpbWVcIixkYXRlOlwidGltLWljb25zIGljb24tY2FsZW5kYXItNjBcIix1cDpcImZhIGZhLWNoZXZyb24tdXBcIixkb3duOlwiZmEgZmEtY2hldnJvbi1kb3duXCIscHJldmlvdXM6XCJ0aW0taWNvbnMgaWNvbi1taW5pbWFsLWxlZnRcIixuZXh0OlwidGltLWljb25zIGljb24tbWluaW1hbC1yaWdodFwiLHRvZGF5OlwiZmEgZmEtc2NyZWVuc2hvdFwiLGNsZWFyOlwiZmEgZmEtdHJhc2hcIixjbG9zZTpcImZhIGZhLXJlbW92ZVwifX0pfSxpbml0U2xpZGVyczpmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyUmVndWxhclwiKTswIT0kKFwiI3NsaWRlclJlZ3VsYXJcIikubGVuZ3RoJiZub1VpU2xpZGVyLmNyZWF0ZShlLHtzdGFydDo0MCxjb25uZWN0OlshMCwhMV0scmFuZ2U6e21pbjowLG1heDoxMDB9fSk7dmFyIGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJEb3VibGVcIik7MCE9JChcIiNzbGlkZXJEb3VibGVcIikubGVuZ3RoJiZub1VpU2xpZGVyLmNyZWF0ZShhLHtzdGFydDpbMjAsNjBdLGNvbm5lY3Q6ITAscmFuZ2U6e21pbjowLG1heDoxMDB9fSl9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9zaXRlX2tpdF9mcmVlL2Fzc2V0cy9qcy9raXQtZnJlZS5qcy5tYXAiLCJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xud2luZG93LlN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxudHJ5IHtcbiAgICB3aW5kb3cuUG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJykuZGVmYXVsdDtcbiAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgICB3aW5kb3cuYW5pbWF0ZSA9IHJlcXVpcmUoJ2FuaW1hdGUuY3NzJyk7XG5cbiAgICByZXF1aXJlKCdib290c3RyYXAnKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbmltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobyc7XG5cbndpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxud2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4gICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZLFxuICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXG4gICAgZW5jcnlwdGVkOiB0cnVlXG59KTtcbiIsImNvbnN0IFN3YWxNb2RhbCA9IChpY29uLCB0aXRsZSwgaHRtbCkgPT4ge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIGljb24sXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBodG1sXG4gICAgfSlcbn1cblxuY29uc3QgU3dhbENvbmZpcm0gPSAoaWNvbiwgdGl0bGUsIGh0bWwsIGNvbmZpcm1CdXR0b25UZXh0LCBtZXRob2QsIHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgICBpY29uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaHRtbCxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0LFxuICAgICAgICByZXZlcnNlQnV0dG9uczogdHJ1ZSxcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubGl2ZXdpcmUuZW1pdChtZXRob2QsIHBhcmFtcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5saXZld2lyZS5lbWl0KGNhbGxiYWNrKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgU3dhbEFsZXJ0ID0gKGljb24sIHRpdGxlLCB0aW1lb3V0ID0gNzAwMCkgPT4ge1xuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgICAgIHRvYXN0OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiB0aW1lb3V0LFxuICAgICAgICBvbk9wZW46IHRvYXN0ID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICBpY29uLFxuICAgICAgICB0aXRsZVxuICAgIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdzd2FsOm1vZGFsJywgZGF0YSA9PiB7XG4gICAgICAgIFN3YWxNb2RhbChkYXRhLmljb24sIGRhdGEudGl0bGUsIGRhdGEudGV4dClcbiAgICB9KVxuXG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdzd2FsOmNvbmZpcm0nLCBkYXRhID0+IHtcbiAgICAgICAgU3dhbENvbmZpcm0oZGF0YS5pY29uLCBkYXRhLnRpdGxlLCBkYXRhLnRleHQsIGRhdGEuY29uZmlybVRleHQsIGRhdGEubWV0aG9kLCBkYXRhLnBhcmFtcywgZGF0YS5jYWxsYmFjaylcbiAgICB9KVxuXG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdzd2FsOmFsZXJ0JywgZGF0YSA9PiB7XG4gICAgICAgIFN3YWxBbGVydChkYXRhLmljb24sIGRhdGEudGl0bGUsIGRhdGEudGltZW91dClcbiAgICB9KVxuXG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdwbGFjZS1iZXRzLXB1dGknLCBkYXRhID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdXRpLXBvb2wnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19oZWFydEJlYXQnLCAnYW5pbWF0ZV9fcmVwZWF0LTMnKTtcbiAgICB9KVxuXG4gICAgd2luZG93LmxpdmV3aXJlLm9uKCdwbGFjZS1iZXRzLXB1bGEnLCBkYXRhID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdWxhLXBvb2wnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19oZWFydEJlYXQnLCAnYW5pbWF0ZV9fcmVwZWF0LTMnKTtcbiAgICB9KVxufSlcbiIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuLi9ib290c3RyYXAnKTtcbnJlcXVpcmUoJy4uL3BsdWdpbnMnKTtcbnJlcXVpcmUoJ2ZsYXRwaWNrcicpO1xucmVxdWlyZSgnLi9hbGVydCcpO1xucmVxdWlyZSgnYXJnb24tZGVzaWduLXN5c3RlbS1mcmVlL2Fzc2V0cy9qcy9hcmdvbi1kZXNpZ24tc3lzdGVtLm1pbi5qcycpO1xuLy8gd2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgYmxvY2sgb2YgY29kZSBtYXkgYmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyIHlvdXJcbiAqIFZ1ZSBjb21wb25lbnRzLiBJdCB3aWxsIHJlY3Vyc2l2ZWx5IHNjYW4gdGhpcyBkaXJlY3RvcnkgZm9yIHRoZSBWdWVcbiAqIGNvbXBvbmVudHMgYW5kIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXIgdGhlbSB3aXRoIHRoZWlyIFwiYmFzZW5hbWVcIi5cbiAqXG4gKiBFZy4gLi9jb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQudnVlIC0+IDxleGFtcGxlLWNvbXBvbmVudD48L2V4YW1wbGUtY29tcG9uZW50PlxuICovXG5cbi8vIGNvbnN0IGZpbGVzID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC52dWUkL2kpXG4vLyBmaWxlcy5rZXlzKCkubWFwKGtleSA9PiBWdWUuY29tcG9uZW50KGtleS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF0sIGZpbGVzKGtleSkuZGVmYXVsdCkpXG5cbi8vVnVlLmNvbXBvbmVudCgnZXhhbXBsZS1jb21wb25lbnQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC52dWUnKS5kZWZhdWx0KTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG4vL1xuLy8gY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4vLyAgICAgZWw6ICcjYXBwJyxcbi8vIH0pO1xuLy9cbiIsIi8qKlxuICogUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxuICovXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDaGVja2JveCB0cmVlIGZvciBwZXJtaXNzaW9uIHNlbGVjdGluZ1xuICAgICAqL1xuICAgICQoJyN0cmVlIDpjaGVja2JveCcpLm9uKCdjbGljayBjaGFuZ2UnLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgaWYoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygndWwnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ3VsJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucmVtb3ZlQXR0cignY2hlY2tlZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyN0cmVlIDpjaGVja2JveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHN1Ym1pdCBpbnB1dHMgaW4gdGhlIGdpdmVuIGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIHN1Ym1pdCBpbnB1dHMgaW4gYSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGFsbCBzdWJtaXQgYnV0dG9ucyBvbmNlIGNsaWNrZWRcbiAgICAgKi9cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uZmlybWF0aW9uIHRvIGEgZGVsZXRlIGJ1dHRvbi9mb3JtXG4gICAgICovXG4gICAgJCgnYm9keScpXG4gICAgICAgIC5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1kZWxldGUtaXRlbV0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9Y29uZmlybS1pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz8nLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDb250aW51ZScsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVTdWJtaXRCdXR0b25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtLWl0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIGFuICdhcmUgeW91IHN1cmUnIHBvcC11cCB0byBhbnkgYnV0dG9uL2xpbmtcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQ29udGludWUnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3N1Ym1pdCcsICdmb3JtW2RhdGEtY29uZmlybV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQgYW4gJ2FyZSB5b3Ugc3VyZScgcG9wLXVwIHRvIGFueSBidXR0b24vbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgY29uZmlnID0gICQodGhpcykuZGF0YSgnY29uZmlybScpO1xuICAgICAgICAgICAgbGV0IHN3YWxDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy50aXRsZSB8fCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiBjb25maWcuc2hvd0NhbmNlbEJ1dHRvbiB8fCB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maWcuY29uZmlybUJ1dHRvblRleHQgfHwgJ0NvbnRpbnVlJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjb25maWcuY2FuY2VsQnV0dG9uVGV4dCB8fCAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBpY29uOiBjb25maWcuaWNvbiB8fCAnaW5mbycsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgU3dhbC5maXJlKHN3YWxDb25maWcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCAnLmNsb3NlLWFsZXJ0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJChcIi5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgIC8vIFJlbWVtYmVyIHRhYiBvbiBwYWdlIGxvYWRcbiAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBhW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgaGFzaCA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUgPyBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBoYXNoKSA6IGxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgIH0pO1xuXG4gICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgICAkKCcubmF2LWxpbmtbaHJlZj1cIicraGFzaCsnXCJdJykudGFiKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIHRvb2x0aXBzIGV2ZXJ5d2hlcmVcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyBkZWZhdWx0cyBhcyBkZWZhdWx0T3B0aW9ucywgSE9PS1MsIH0gZnJvbSBcIi4vdHlwZXMvb3B0aW9uc1wiO1xuaW1wb3J0IEVuZ2xpc2ggZnJvbSBcIi4vbDEwbi9kZWZhdWx0XCI7XG5pbXBvcnQgeyBhcnJheWlmeSwgZGVib3VuY2UsIGludCwgcGFkIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGNsZWFyTm9kZSwgY3JlYXRlRWxlbWVudCwgY3JlYXRlTnVtYmVySW5wdXQsIGZpbmRQYXJlbnQsIHRvZ2dsZUNsYXNzLCBnZXRFdmVudFRhcmdldCwgfSBmcm9tIFwiLi91dGlscy9kb21cIjtcbmltcG9ydCB7IGNvbXBhcmVEYXRlcywgY3JlYXRlRGF0ZVBhcnNlciwgY3JlYXRlRGF0ZUZvcm1hdHRlciwgZHVyYXRpb24sIGlzQmV0d2VlbiwgZ2V0RGVmYXVsdEhvdXJzLCB9IGZyb20gXCIuL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgeyB0b2tlblJlZ2V4LCBtb250aFRvU3RyIH0gZnJvbSBcIi4vdXRpbHMvZm9ybWF0dGluZ1wiO1xuaW1wb3J0IFwiLi91dGlscy9wb2x5ZmlsbHNcIjtcbmNvbnN0IERFQk9VTkNFRF9DSEFOR0VfTVMgPSAzMDA7XG5mdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xuICAgIGNvbnN0IHNlbGYgPSB7XG4gICAgICAgIGNvbmZpZzogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSxcbiAgICAgICAgbDEwbjogRW5nbGlzaCxcbiAgICB9O1xuICAgIHNlbGYucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7IGNvbmZpZzogc2VsZi5jb25maWcsIGwxMG46IHNlbGYubDEwbiB9KTtcbiAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xuICAgIHNlbGYucGx1Z2luRWxlbWVudHMgPSBbXTtcbiAgICBzZWxmLmxvYWRlZFBsdWdpbnMgPSBbXTtcbiAgICBzZWxmLl9iaW5kID0gYmluZDtcbiAgICBzZWxmLl9zZXRIb3Vyc0Zyb21EYXRlID0gc2V0SG91cnNGcm9tRGF0ZTtcbiAgICBzZWxmLl9wb3NpdGlvbkNhbGVuZGFyID0gcG9zaXRpb25DYWxlbmRhcjtcbiAgICBzZWxmLmNoYW5nZU1vbnRoID0gY2hhbmdlTW9udGg7XG4gICAgc2VsZi5jaGFuZ2VZZWFyID0gY2hhbmdlWWVhcjtcbiAgICBzZWxmLmNsZWFyID0gY2xlYXI7XG4gICAgc2VsZi5jbG9zZSA9IGNsb3NlO1xuICAgIHNlbGYuX2NyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50O1xuICAgIHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgc2VsZi5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgc2VsZi5qdW1wVG9EYXRlID0ganVtcFRvRGF0ZTtcbiAgICBzZWxmLm9wZW4gPSBvcGVuO1xuICAgIHNlbGYucmVkcmF3ID0gcmVkcmF3O1xuICAgIHNlbGYuc2V0ID0gc2V0O1xuICAgIHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XG4gICAgc2VsZi50b2dnbGUgPSB0b2dnbGU7XG4gICAgZnVuY3Rpb24gc2V0dXBIZWxwZXJGdW5jdGlvbnMoKSB7XG4gICAgICAgIHNlbGYudXRpbHMgPSB7XG4gICAgICAgICAgICBnZXREYXlzSW5Nb250aChtb250aCA9IHNlbGYuY3VycmVudE1vbnRoLCB5ciA9IHNlbGYuY3VycmVudFllYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDEgJiYgKCh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDApIHx8IHlyICUgNDAwID09PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI5O1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmwxMG4uZGF5c0luTW9udGhbbW9udGhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gc2VsZi5pbnB1dCA9IGVsZW1lbnQ7XG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHBhcnNlQ29uZmlnKCk7XG4gICAgICAgIHNldHVwTG9jYWxlKCk7XG4gICAgICAgIHNldHVwSW5wdXRzKCk7XG4gICAgICAgIHNldHVwRGF0ZXMoKTtcbiAgICAgICAgc2V0dXBIZWxwZXJGdW5jdGlvbnMoKTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgYmluZEV2ZW50cygpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCB8fCBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubm9DYWxlbmRhciA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRDYWxlbmRhcldpZHRoKCk7XG4gICAgICAgIGNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlICYmIGlzU2FmYXJpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25SZWFkeVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuLmJpbmQoc2VsZik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldENhbGVuZGFyV2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHNlbGYuY29uZmlnO1xuICAgICAgICBpZiAoY29uZmlnLndlZWtOdW1iZXJzID09PSBmYWxzZSAmJiBjb25maWcuc2hvd01vbnRocyA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5ub0NhbGVuZGFyICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheXNXaWR0aCA9IChzZWxmLmRheXMub2Zmc2V0V2lkdGggKyAxKSAqIGNvbmZpZy5zaG93TW9udGhzO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuc3R5bGUud2lkdGggPSBkYXlzV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1dpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi53ZWVrV3JhcHBlci5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHREYXRlID0gc2VsZi5jb25maWcubWluRGF0ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKG5ldyBEYXRlKCksIHNlbGYuY29uZmlnLm1pbkRhdGUpID49IDBcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRzID0gZ2V0RGVmYXVsdEhvdXJzKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAgIGRlZmF1bHREYXRlLnNldEhvdXJzKGRlZmF1bHRzLmhvdXJzLCBkZWZhdWx0cy5taW51dGVzLCBkZWZhdWx0cy5zZWNvbmRzLCBkZWZhdWx0RGF0ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbZGVmYXVsdERhdGVdO1xuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBkZWZhdWx0RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSAhPT0gXCJibHVyXCIpIHtcbiAgICAgICAgICAgIHRpbWVXcmFwcGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHNlbGYuX2lucHV0LnZhbHVlO1xuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgaWYgKHNlbGYuX2lucHV0LnZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFtcG0ybWlsaXRhcnkoaG91ciwgYW1QTSkge1xuICAgICAgICByZXR1cm4gKGhvdXIgJSAxMikgKyAxMiAqIGludChhbVBNID09PSBzZWxmLmwxMG4uYW1QTVsxXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xuICAgICAgICBzd2l0Y2ggKGhvdXIgJSAyNCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tSW5wdXRzKCkge1xuICAgICAgICBpZiAoc2VsZi5ob3VyRWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IHNlbGYubWludXRlRWxlbWVudCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgaG91cnMgPSAocGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZS5zbGljZSgtMiksIDEwKSB8fCAwKSAlIDI0LCBtaW51dGVzID0gKHBhcnNlSW50KHNlbGYubWludXRlRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjAsIHNlY29uZHMgPSBzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAocGFyc2VJbnQoc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MFxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhvdXJzID0gYW1wbTJtaWxpdGFyeShob3Vycywgc2VsZi5hbVBNLnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaW1pdE1pbkhvdXJzID0gc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSwgdHJ1ZSkgPT09XG4gICAgICAgICAgICAgICAgICAgIDApO1xuICAgICAgICBjb25zdCBsaW1pdE1heEhvdXJzID0gc2VsZi5jb25maWcubWF4VGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWF4RGF0ZSwgdHJ1ZSkgPT09XG4gICAgICAgICAgICAgICAgICAgIDApO1xuICAgICAgICBpZiAobGltaXRNYXhIb3Vycykge1xuICAgICAgICAgICAgY29uc3QgbWF4VGltZSA9IHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4VGltZVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZTtcbiAgICAgICAgICAgIGhvdXJzID0gTWF0aC5taW4oaG91cnMsIG1heFRpbWUuZ2V0SG91cnMoKSk7XG4gICAgICAgICAgICBpZiAoaG91cnMgPT09IG1heFRpbWUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWludXRlcywgbWF4VGltZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPT09IG1heFRpbWUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLm1pbihzZWNvbmRzLCBtYXhUaW1lLmdldFNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbWl0TWluSG91cnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pblRpbWUgPSBzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pblRpbWVcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGU7XG4gICAgICAgICAgICBob3VycyA9IE1hdGgubWF4KGhvdXJzLCBtaW5UaW1lLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgaWYgKGhvdXJzID09PSBtaW5UaW1lLmdldEhvdXJzKCkgJiYgbWludXRlcyA8IG1pblRpbWUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW5UaW1lLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgIGlmIChtaW51dGVzID09PSBtaW5UaW1lLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5tYXgoc2Vjb25kcywgbWluVGltZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlT2JqIHx8IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqO1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gICAgICAgIGlmIChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZi5ob3VyRWxlbWVudCB8fCAhc2VsZi5taW51dGVFbGVtZW50IHx8IHNlbGYuaXNNb2JpbGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRoclxuICAgICAgICAgICAgPyAoKDEyICsgaG91cnMpICUgMTIpICsgMTIgKiBpbnQoaG91cnMgJSAxMiA9PT0gMClcbiAgICAgICAgICAgIDogaG91cnMpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNW2ludChob3VycyA+PSAxMildO1xuICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uWWVhcklucHV0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZXZlbnRUYXJnZXQudmFsdWUpICsgKGV2ZW50LmRlbHRhIHx8IDApO1xuICAgICAgICBpZiAoeWVhciAvIDEwMDAgPiAxIHx8XG4gICAgICAgICAgICAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIS9bXlxcZF0vLnRlc3QoeWVhci50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICAgIGNoYW5nZVllYXIoeWVhcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYmluZChlbGVtZW50LCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHJldHVybiBldmVudC5mb3JFYWNoKChldikgPT4gYmluZChlbGVtZW50LCBldiwgaGFuZGxlciwgb3B0aW9ucykpO1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZm9yRWFjaCgoZWwpID0+IGJpbmQoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHNlbGYuX2hhbmRsZXJzLnB1c2goe1xuICAgICAgICAgICAgcmVtb3ZlOiAoKSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZSgpIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy53cmFwKSB7XG4gICAgICAgICAgICBbXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJ0b2dnbGVcIiwgXCJjbGVhclwiXS5mb3JFYWNoKChldnQpID0+IHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke2V2dH1dYCksIChlbCkgPT4gYmluZChlbCwgXCJjbGlja1wiLCBzZWxmW2V2dF0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICBzZXR1cE1vYmlsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKG9uUmVzaXplLCA1MCk7XG4gICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSA9IGRlYm91bmNlKHRyaWdnZXJDaGFuZ2UsIERFQk9VTkNFRF9DSEFOR0VfTVMpO1xuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICYmICEvaVBob25lfGlQYWR8aVBvZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpXG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlcihnZXRFdmVudFRhcmdldChlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuaW5saW5lICYmICFzZWxmLmNvbmZpZy5zdGF0aWMpXG4gICAgICAgICAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2VkUmVzaXplKTtcbiAgICAgICAgaWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcInRvdWNoc3RhcnRcIiwgZG9jdW1lbnRDbGljayk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcIm1vdXNlZG93blwiLCBkb2N1bWVudENsaWNrKTtcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwiZm9jdXNcIiwgZG9jdW1lbnRDbGljaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcImNsaWNrXCIsIG9uTW9udGhOYXZDbGljayk7XG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcImtleXVwXCIsIFwiaW5jcmVtZW50XCJdLCBvblllYXJJbnB1dCk7XG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJjbGlja1wiLCBzZWxlY3REYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbFRleHQgPSAoZSkgPT4gZ2V0RXZlbnRUYXJnZXQoZSkuc2VsZWN0KCk7XG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgW1wiaW5jcmVtZW50XCJdLCB1cGRhdGVUaW1lKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImJsdXJcIiwgdXBkYXRlVGltZSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwiY2xpY2tcIiwgdGltZUluY3JlbWVudCk7XG4gICAgICAgICAgICBiaW5kKFtzZWxmLmhvdXJFbGVtZW50LCBzZWxmLm1pbnV0ZUVsZW1lbnRdLCBbXCJmb2N1c1wiLCBcImNsaWNrXCJdLCBzZWxUZXh0KTtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuc2Vjb25kRWxlbWVudCwgXCJmb2N1c1wiLCAoKSA9PiBzZWxmLnNlY29uZEVsZW1lbnQgJiYgc2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCgpKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5hbVBNLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJibHVyXCIsIG9uQmx1cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24ganVtcFRvRGF0ZShqdW1wRGF0ZSwgdHJpZ2dlckNoYW5nZSkge1xuICAgICAgICBjb25zdCBqdW1wVG8gPSBqdW1wRGF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHNlbGYucGFyc2VEYXRlKGp1bXBEYXRlKVxuICAgICAgICAgICAgOiBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fFxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93KTtcbiAgICAgICAgY29uc3Qgb2xkWWVhciA9IHNlbGYuY3VycmVudFllYXI7XG4gICAgICAgIGNvbnN0IG9sZE1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoanVtcFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0ganVtcFRvLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBqdW1wVG8uZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5tZXNzYWdlID0gXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsganVtcFRvO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmIHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAmJlxuICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgIT09IG9sZFllYXIgfHwgc2VsZi5jdXJyZW50TW9udGggIT09IG9sZE1vbnRoKSkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aW1lSW5jcmVtZW50KGUpIHtcbiAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgaWYgKH5ldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImFycm93XCIpKVxuICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQoZSwgZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSA/IDEgOiAtMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluY3JlbWVudE51bUlucHV0KGUsIGRlbHRhLCBpbnB1dEVsZW0pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZSAmJiBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dEVsZW0gfHxcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUgJiYgdGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gY3JlYXRlRXZlbnQoXCJpbmNyZW1lbnRcIik7XG4gICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgICAgIGlucHV0ICYmIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkTW9udGhOYXYoKSk7XG4gICAgICAgICAgICBzZWxmLmlubmVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1pbm5lckNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2Vla1dyYXBwZXIsIHdlZWtOdW1iZXJzIH0gPSBidWlsZFdlZWtzKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IHdlZWtOdW1iZXJzO1xuICAgICAgICAgICAgICAgIHNlbGYud2Vla1dyYXBwZXIgPSB3ZWVrV3JhcHBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItckNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtkYXlzKCkpO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWRheXNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5pbm5lckNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkVGltZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFuaW1hdGVcIiwgc2VsZi5jb25maWcuYW5pbWF0ZSA9PT0gdHJ1ZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwibXVsdGlNb250aFwiLCBzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSk7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICBjb25zdCBjdXN0b21BcHBlbmQgPSBzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lIHx8IHNlbGYuY29uZmlnLnN0YXRpYykge1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmlubGluZSA/IFwiaW5saW5lXCIgOiBcInN0YXRpY1wiKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1c3RvbUFwcGVuZCAmJiBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIHNlbGYuX2lucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5hcHBlbmRUby5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuYWx0SW5wdXQpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hcHBlbmRUb1xuICAgICAgICAgICAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXkoY2xhc3NOYW1lLCBkYXRlLCBkYXlOdW1iZXIsIGkpIHtcbiAgICAgICAgY29uc3QgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSwgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGRheUVsZW1lbnQuZGF0ZU9iaiA9IGRhdGU7XG4gICAgICAgIGRheUVsZW1lbnQuJGkgPSBpO1xuICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLm5vdykgPT09IDApIHtcbiAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSA9IGRheUVsZW1lbnQ7XG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUlzRW5hYmxlZCkge1xuICAgICAgICAgICAgZGF5RWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgaWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gZGF5RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwic3RhcnRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJlbmRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0sIHRydWUpID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJuZXh0TW9udGhEYXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSlcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5zaG93TW9udGhzID09PSAxICYmXG4gICAgICAgICAgICBjbGFzc05hbWUgIT09IFwicHJldk1vbnRoRGF5XCIgJiZcbiAgICAgICAgICAgIGRheU51bWJlciAlIDcgPT09IDEpIHtcbiAgICAgICAgICAgIHNlbGYud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci1kYXknPlwiICsgc2VsZi5jb25maWcuZ2V0V2VlayhkYXRlKSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXlFbGVtKHRhcmdldE5vZGUpIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgb25Nb3VzZU92ZXIodGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEZpcnN0QXZhaWxhYmxlRGF5KGRlbHRhKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBkZWx0YSA+IDAgPyAwIDogc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDE7XG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZGVsdGEgPiAwID8gc2VsZi5jb25maWcuc2hvd01vbnRocyA6IC0xO1xuICAgICAgICBmb3IgKGxldCBtID0gc3RhcnRNb250aDsgbSAhPSBlbmRNb250aDsgbSArPSBkZWx0YSkge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZGVsdGEgPiAwID8gMCA6IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IGRlbHRhID4gMCA/IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCA6IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgIT0gZW5kSW5kZXg7IGkgKz0gZGVsdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmIGlzRW5hYmxlZChjLmRhdGVPYmopKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROZXh0QXZhaWxhYmxlRGF5KGN1cnJlbnQsIGRlbHRhKSB7XG4gICAgICAgIGNvbnN0IGdpdmVuTW9udGggPSBjdXJyZW50LmNsYXNzTmFtZS5pbmRleE9mKFwiTW9udGhcIikgPT09IC0xXG4gICAgICAgICAgICA/IGN1cnJlbnQuZGF0ZU9iai5nZXRNb250aCgpXG4gICAgICAgICAgICA6IHNlbGYuY3VycmVudE1vbnRoO1xuICAgICAgICBjb25zdCBlbmRNb250aCA9IGRlbHRhID4gMCA/IHNlbGYuY29uZmlnLnNob3dNb250aHMgOiAtMTtcbiAgICAgICAgY29uc3QgbG9vcERlbHRhID0gZGVsdGEgPiAwID8gMSA6IC0xO1xuICAgICAgICBmb3IgKGxldCBtID0gZ2l2ZW5Nb250aCAtIHNlbGYuY3VycmVudE1vbnRoOyBtICE9IGVuZE1vbnRoOyBtICs9IGxvb3BEZWx0YSkge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gZ2l2ZW5Nb250aCAtIHNlbGYuY3VycmVudE1vbnRoID09PSBtXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50LiRpICsgZGVsdGFcbiAgICAgICAgICAgICAgICA6IGRlbHRhIDwgMFxuICAgICAgICAgICAgICAgICAgICA/IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgY29uc3QgbnVtTW9udGhEYXlzID0gbW9udGguY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMCAmJiBpIDwgbnVtTW9udGhEYXlzICYmIGkgIT0gKGRlbHRhID4gMCA/IG51bU1vbnRoRGF5cyA6IC0xKTsgaSArPSBsb29wRGVsdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZChjLmRhdGVPYmopICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGN1cnJlbnQuJGkgLSBpKSA+PSBNYXRoLmFicyhkZWx0YSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c09uRGF5RWxlbShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGxvb3BEZWx0YSk7XG4gICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkobG9vcERlbHRhKSwgMCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudCwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGRheUZvY3VzZWQgPSBpc0luVmlldyhkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICBjb25zdCBzdGFydEVsZW0gPSBjdXJyZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgOiBkYXlGb2N1c2VkXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgOiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJiBpc0luVmlldyhzZWxmLnNlbGVjdGVkRGF0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5zZWxlY3RlZERhdGVFbGVtXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi50b2RheURhdGVFbGVtICE9PSB1bmRlZmluZWQgJiYgaXNJblZpZXcoc2VsZi50b2RheURhdGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLnRvZGF5RGF0ZUVsZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0Rmlyc3RBdmFpbGFibGVEYXkob2Zmc2V0ID4gMCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChzdGFydEVsZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5faW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZGF5Rm9jdXNlZCkge1xuICAgICAgICAgICAgZm9jdXNPbkRheUVsZW0oc3RhcnRFbGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdldE5leHRBdmFpbGFibGVEYXkoc3RhcnRFbGVtLCBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhEYXlzKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCkgLSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgKyA3KSAlIDc7XG4gICAgICAgIGNvbnN0IHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChtb250aCAtIDEgKyAxMikgJSAxMiwgeWVhcik7XG4gICAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aChtb250aCwgeWVhciksIGRheXMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBpc011bHRpTW9udGggPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSwgcHJldk1vbnRoRGF5Q2xhc3MgPSBpc011bHRpTW9udGggPyBcInByZXZNb250aERheSBoaWRkZW5cIiA6IFwicHJldk1vbnRoRGF5XCIsIG5leHRNb250aERheUNsYXNzID0gaXNNdWx0aU1vbnRoID8gXCJuZXh0TW9udGhEYXkgaGlkZGVuXCIgOiBcIm5leHRNb250aERheVwiO1xuICAgICAgICBsZXQgZGF5TnVtYmVyID0gcHJldk1vbnRoRGF5cyArIDEgLSBmaXJzdE9mTW9udGgsIGRheUluZGV4ID0gMDtcbiAgICAgICAgZm9yICg7IGRheU51bWJlciA8PSBwcmV2TW9udGhEYXlzOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkocHJldk1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoZGF5TnVtYmVyID0gMTsgZGF5TnVtYmVyIDw9IGRheXNJbk1vbnRoOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoeWVhciwgbW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aCAmJlxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEgfHwgZGF5SW5kZXggJSA3ICE9PSAwKTsgZGF5TnVtKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KG5leHRNb250aERheUNsYXNzLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIGRheU51bSAlIGRheXNJbk1vbnRoKSwgZGF5TnVtLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXlDb250YWluZXJcIik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlzKTtcbiAgICAgICAgcmV0dXJuIGRheUNvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGREYXlzKCkge1xuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhck5vZGUoc2VsZi5kYXlzQ29udGFpbmVyKTtcbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMpXG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi53ZWVrTnVtYmVycyk7XG4gICAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5jb25maWcuc2hvd01vbnRoczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgZC5zZXRNb250aChzZWxmLmN1cnJlbnRNb250aCArIGkpO1xuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChidWlsZE1vbnRoRGF5cyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgb25Nb3VzZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoU3dpdGNoKCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlICE9PSBcImRyb3Bkb3duXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNob3VsZEJ1aWxkTW9udGggPSBmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICBtb250aCA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhKHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgIG1vbnRoID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRCdWlsZE1vbnRoKGkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBjcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIFwiZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhcIik7XG4gICAgICAgICAgICBtb250aC52YWx1ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIGkpLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG1vbnRoLnRleHRDb250ZW50ID0gbW9udGhUb1N0cihpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbik7XG4gICAgICAgICAgICBtb250aC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgaWYgKHNlbGYuY3VycmVudE1vbnRoID09PSBpKSB7XG4gICAgICAgICAgICAgICAgbW9udGguc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aFwiKTtcbiAgICAgICAgY29uc3QgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGxldCBtb250aEVsZW1lbnQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiY3VyLW1vbnRoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHNcIik7XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLm1vbnRoQXJpYUxhYmVsKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lciwgXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1vbnRoID0gcGFyc2VJbnQodGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aChzZWxlY3RlZE1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudCA9IHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiLCB7IHRhYmluZGV4OiBcIi0xXCIgfSk7XG4gICAgICAgIGNvbnN0IHllYXJFbGVtZW50ID0geWVhcklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgIHllYXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLnllYXJBcmlhTGFiZWwpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSkge1xuICAgICAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSkge1xuICAgICAgICAgICAgeWVhckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHllYXJFbGVtZW50LmRpc2FibGVkID1cbiAgICAgICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO1xuICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQobW9udGhFbGVtZW50KTtcbiAgICAgICAgY3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoY3VycmVudE1vbnRoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoTmF2RnJhZ21lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgeWVhckVsZW1lbnQsXG4gICAgICAgICAgICBtb250aEVsZW1lbnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhzKCkge1xuICAgICAgICBjbGVhck5vZGUoc2VsZi5tb250aE5hdik7XG4gICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQoc2VsZi5wcmV2TW9udGhOYXYpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocykge1xuICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG0gPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBtLS07KSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IGJ1aWxkTW9udGgoKTtcbiAgICAgICAgICAgIHNlbGYueWVhckVsZW1lbnRzLnB1c2gobW9udGgueWVhckVsZW1lbnQpO1xuICAgICAgICAgICAgc2VsZi5tb250aEVsZW1lbnRzLnB1c2gobW9udGgubW9udGhFbGVtZW50KTtcbiAgICAgICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQobW9udGguY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYubmV4dE1vbnRoTmF2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcbiAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhzXCIpO1xuICAgICAgICBzZWxmLnllYXJFbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xuICAgICAgICBzZWxmLnByZXZNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5wcmV2QXJyb3c7XG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xuICAgICAgICBidWlsZE1vbnRocygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyxcbiAgICAgICAgICAgIHNldChib29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgIT09IGJvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5wcmV2TW9udGhOYXYsIFwiZmxhdHBpY2tyLWRpc2FibGVkXCIsIGJvb2wpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9faGlkZVByZXZNb250aEFycm93ID0gYm9vbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3csXG4gICAgICAgICAgICBzZXQoYm9vbCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYubmV4dE1vbnRoTmF2LCBcImZsYXRwaWNrci1kaXNhYmxlZFwiLCBib29sKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0gc2VsZi55ZWFyRWxlbWVudHNbMF07XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgcmV0dXJuIHNlbGYubW9udGhOYXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzVGltZVwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IGdldERlZmF1bHRIb3VycyhzZWxmLmNvbmZpZyk7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcbiAgICAgICAgY29uc3QgaG91cklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItaG91clwiLCB7XG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogc2VsZi5sMTBuLmhvdXJBcmlhTGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50ID0gaG91cklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgIGNvbnN0IG1pbnV0ZUlucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItbWludXRlXCIsIHtcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBzZWxmLmwxMG4ubWludXRlQXJpYUxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ID0gbWludXRlSW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC50YWJJbmRleCA9IHNlbGYubWludXRlRWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKClcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcudGltZV8yNGhyXG4gICAgICAgICAgICAgICAgPyBkZWZhdWx0cy5ob3Vyc1xuICAgICAgICAgICAgICAgIDogbWlsaXRhcnkyYW1wbShkZWZhdWx0cy5ob3VycykpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcbiAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpXG4gICAgICAgICAgICA6IGRlZmF1bHRzLm1pbnV0ZXMpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5jb25maWcuaG91ckluY3JlbWVudC50b1N0cmluZygpKTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjBcIiA6IFwiMVwiKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIyM1wiIDogXCIxMlwiKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyXCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjU5XCIpO1xuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMlwiKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbnB1dCk7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobWludXRlSW5wdXQpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcudGltZV8yNGhyKVxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMpIHtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzU2Vjb25kc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZElucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50ID0gc2Vjb25kSW5wdXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0cy5zZWNvbmRzKTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsIHNlbGYubWludXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKTtcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjU5XCIpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjJcIik7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy50aW1lXzI0aHIpIHtcbiAgICAgICAgICAgIHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIHNlbGYubDEwbi5hbVBNW2ludCgoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcbiAgICAgICAgICAgICAgICA/IHNlbGYuaG91ckVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyKSA+IDExKV0pO1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRpdGxlID0gc2VsZi5sMTBuLnRvZ2dsZVRpdGxlO1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZi50aW1lQ29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZFdlZWtkYXlzKCkge1xuICAgICAgICBpZiAoIXNlbGYud2Vla2RheUNvbnRhaW5lcilcbiAgICAgICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla2RheXNcIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNsZWFyTm9kZShzZWxmLndlZWtkYXlDb250YWluZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgaS0tOykge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5Y29udGFpbmVyXCIpO1xuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlV2Vla2RheXMoKTtcbiAgICAgICAgcmV0dXJuIHNlbGYud2Vla2RheUNvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlV2Vla2RheXMoKSB7XG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWs7XG4gICAgICAgIGxldCB3ZWVrZGF5cyA9IFsuLi5zZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kXTtcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCAmJiBmaXJzdERheU9mV2VlayA8IHdlZWtkYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgd2Vla2RheXMgPSBbXG4gICAgICAgICAgICAgICAgLi4ud2Vla2RheXMuc3BsaWNlKGZpcnN0RGF5T2ZXZWVrLCB3ZWVrZGF5cy5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIC4uLndlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlayksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpLS07KSB7XG4gICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIuY2hpbGRyZW5baV0uaW5uZXJIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9J2ZsYXRwaWNrci13ZWVrZGF5Jz5cbiAgICAgICAgJHt3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdmbGF0cGlja3Itd2Vla2RheSc+XCIpfVxuICAgICAgPC9zcGFuPlxuICAgICAgYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZFdlZWtzKCkge1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcbiAgICAgICAgY29uc3Qgd2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XG4gICAgICAgIGNvbnN0IHdlZWtOdW1iZXJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrc1wiKTtcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcnMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1dyYXBwZXIsXG4gICAgICAgICAgICB3ZWVrTnVtYmVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlTW9udGgodmFsdWUsIGlzT2Zmc2V0ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBkZWx0YSA9IGlzT2Zmc2V0ID8gdmFsdWUgOiB2YWx1ZSAtIHNlbGYuY3VycmVudE1vbnRoO1xuICAgICAgICBpZiAoKGRlbHRhIDwgMCAmJiBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoICs9IGRlbHRhO1xuICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggPiAxMSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gKHNlbGYuY3VycmVudE1vbnRoICsgMTIpICUgMTI7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXIodHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZSwgdG9Jbml0aWFsID0gdHJ1ZSkge1xuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGYuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGYuX2luaXRpYWxEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IGdldERlZmF1bHRIb3VycyhzZWxmLmNvbmZpZyk7XG4gICAgICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudClcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLl9pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGVzdHJveVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHNlbGYuX2hhbmRsZXJzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgc2VsZi5faGFuZGxlcnNbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYubW9iaWxlSW5wdXQpO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIubGFzdENoaWxkICYmIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlci5maXJzdENoaWxkLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XG4gICAgICAgICAgICBkZWxldGUgc2VsZi5hbHRJbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5pbnB1dCkge1xuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gc2VsZi5pbnB1dC5fdHlwZTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgW1xuICAgICAgICAgICAgXCJfc2hvd1RpbWVJbnB1dFwiLFxuICAgICAgICAgICAgXCJsYXRlc3RTZWxlY3RlZERhdGVPYmpcIixcbiAgICAgICAgICAgIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgXCJfaGlkZVByZXZNb250aEFycm93XCIsXG4gICAgICAgICAgICBcIl9faGlkZU5leHRNb250aEFycm93XCIsXG4gICAgICAgICAgICBcIl9faGlkZVByZXZNb250aEFycm93XCIsXG4gICAgICAgICAgICBcImlzTW9iaWxlXCIsXG4gICAgICAgICAgICBcImlzT3BlblwiLFxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXG4gICAgICAgICAgICBcIm1pbkRhdGVIYXNUaW1lXCIsXG4gICAgICAgICAgICBcIm1heERhdGVIYXNUaW1lXCIsXG4gICAgICAgICAgICBcImRheXNcIixcbiAgICAgICAgICAgIFwiZGF5c0NvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJfaW5wdXRcIixcbiAgICAgICAgICAgIFwiX3Bvc2l0aW9uRWxlbWVudFwiLFxuICAgICAgICAgICAgXCJpbm5lckNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmF2XCIsXG4gICAgICAgICAgICBcInRvZGF5RGF0ZUVsZW1cIixcbiAgICAgICAgICAgIFwiY2FsZW5kYXJDb250YWluZXJcIixcbiAgICAgICAgICAgIFwid2Vla2RheUNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJwcmV2TW9udGhOYXZcIixcbiAgICAgICAgICAgIFwibmV4dE1vbnRoTmF2XCIsXG4gICAgICAgICAgICBcIm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcImN1cnJlbnRNb250aEVsZW1lbnRcIixcbiAgICAgICAgICAgIFwiY3VycmVudFllYXJFbGVtZW50XCIsXG4gICAgICAgICAgICBcIm5hdmlnYXRpb25DdXJyZW50TW9udGhcIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxuICAgICAgICAgICAgXCJjb25maWdcIixcbiAgICAgICAgXS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNDYWxlbmRhckVsZW0oZWxlbSkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZWxlbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLmlubGluZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2FsZW5kYXJFbGVtZW50ID0gaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNJbnB1dCA9IGV2ZW50VGFyZ2V0ID09PSBzZWxmLmlucHV0IHx8XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXQgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQuY29udGFpbnMoZXZlbnRUYXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgKGUucGF0aCAmJlxuICAgICAgICAgICAgICAgICAgICBlLnBhdGguaW5kZXhPZiAmJlxuICAgICAgICAgICAgICAgICAgICAofmUucGF0aC5pbmRleE9mKHNlbGYuaW5wdXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvc3RGb2N1cyA9IGUudHlwZSA9PT0gXCJibHVyXCJcbiAgICAgICAgICAgICAgICA/IGlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICAgICAgICAgOiAhaXNJbnB1dCAmJlxuICAgICAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIWlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc0lnbm9yZWQgPSAhc2VsZi5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuc29tZSgoZWxlbSkgPT4gZWxlbS5jb250YWlucyhldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgaWYgKGxvc3RGb2N1cyAmJiBpc0lnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZyAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlWWVhcihuZXdZZWFyKSB7XG4gICAgICAgIGlmICghbmV3WWVhciB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgbmV3WWVhciA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmIG5ld1llYXIgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdZZWFyTnVtID0gbmV3WWVhciwgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gbmV3WWVhck51bTtcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IG5ld1llYXJOdW0gfHwgc2VsZi5jdXJyZW50WWVhcjtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1pbihzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5tYXgoc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV3WWVhcikge1xuICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgIGJ1aWxkTW9udGhTd2l0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZSwgdGltZWxlc3MgPSB0cnVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZGF0ZVRvQ2hlY2sgPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCB1bmRlZmluZWQsIHRpbWVsZXNzKTtcbiAgICAgICAgaWYgKChzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5taW5EYXRlSGFzVGltZSkgPCAwKSB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuZW5hYmxlICYmIHNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChkYXRlVG9DaGVjayA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBib29sID0gISFzZWxmLmNvbmZpZy5lbmFibGUsIGFycmF5ID0gKF9hID0gc2VsZi5jb25maWcuZW5hYmxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBzZWxmLmNvbmZpZy5kaXNhYmxlO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgZDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkID0gYXJyYXlbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGQoZGF0ZVRvQ2hlY2spKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICAgICAgZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gc2VsZi5wYXJzZURhdGUoZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkICYmIHBhcnNlZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA/IGJvb2xcbiAgICAgICAgICAgICAgICAgICAgOiAhYm9vbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGQuZnJvbSAmJlxuICAgICAgICAgICAgICAgIGQudG8gJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPj0gZC5mcm9tLmdldFRpbWUoKSAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA8PSBkLnRvLmdldFRpbWUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWJvb2w7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzSW5WaWV3KGVsZW0pIHtcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgICBjb25zdCBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICBpZiAoaXNJbnB1dCAmJlxuICAgICAgICAgICAgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwIHx8IHNlbGYuX2lucHV0LnZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgICAgICAgICAhKGUucmVsYXRlZFRhcmdldCAmJiBpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgICAgc2VsZi5zZXREYXRlKHNlbGYuX2lucHV0LnZhbHVlLCB0cnVlLCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dFxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0XG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICBjb25zdCBpc0lucHV0ID0gc2VsZi5jb25maWcud3JhcFxuICAgICAgICAgICAgPyBlbGVtZW50LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KVxuICAgICAgICAgICAgOiBldmVudFRhcmdldCA9PT0gc2VsZi5faW5wdXQ7XG4gICAgICAgIGNvbnN0IGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xuICAgICAgICBjb25zdCBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xuICAgICAgICBjb25zdCBhbGxvd0lubGluZUtleWRvd24gPSBzZWxmLmNvbmZpZy5pbmxpbmUgJiYgaXNJbnB1dCAmJiAhYWxsb3dJbnB1dDtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgaXNJbnB1dCkge1xuICAgICAgICAgICAgaWYgKGFsbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFsdElucHV0XG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ2FsZW5kYXJFbGVtKGV2ZW50VGFyZ2V0KSB8fFxuICAgICAgICAgICAgYWxsb3dLZXlkb3duIHx8XG4gICAgICAgICAgICBhbGxvd0lubGluZUtleWRvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVGltZU9iaiA9ICEhc2VsZi50aW1lQ29udGFpbmVyICYmXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdERhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiYgIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqICYmICFpc0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWxsb3dJbnB1dCA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgaXNJblZpZXcoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZS5rZXlDb2RlID09PSAzOSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY3RybEtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZS5rZXlDb2RlID09PSA0MCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5pbnB1dCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQgPT09IHNlbGYuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGdldEZpcnN0QXZhaWxhYmxlRGF5KDEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1RpbWVPYmopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhICogNyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQgPT09IHNlbGYuY3VycmVudFllYXJFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgc2VsZi5ob3VyRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5wbHVnaW5FbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBlbGVtcy5pbmRleE9mKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGVsZW1zW2kgKyAoZS5zaGlmdEtleSA/IC0xIDogMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFyZ2V0IHx8IHNlbGYuX2lucHV0KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5jb250YWlucyhldmVudFRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKTpcbiAgICAgICAgICAgICAgICBjYXNlIHNlbGYubDEwbi5hbVBNWzBdLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmwxMG4uYW1QTVswXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApOlxuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzFdO1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSW5wdXQgfHwgaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbktleURvd25cIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZU92ZXIoZWxlbSkge1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICAgKGVsZW0gJiZcbiAgICAgICAgICAgICAgICAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSkpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBob3ZlckRhdGUgPSBlbGVtXG4gICAgICAgICAgICA/IGVsZW0uZGF0ZU9iai5nZXRUaW1lKClcbiAgICAgICAgICAgIDogc2VsZi5kYXlzLmZpcnN0RWxlbWVudENoaWxkLmRhdGVPYmouZ2V0VGltZSgpLCBpbml0aWFsRGF0ZSA9IHNlbGYucGFyc2VEYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgdW5kZWZpbmVkLCB0cnVlKS5nZXRUaW1lKCksIHJhbmdlU3RhcnREYXRlID0gTWF0aC5taW4oaG92ZXJEYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSwgcmFuZ2VFbmREYXRlID0gTWF0aC5tYXgoaG92ZXJEYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKTtcbiAgICAgICAgbGV0IGNvbnRhaW5zRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1pblJhbmdlID0gMCwgbWF4UmFuZ2UgPSAwO1xuICAgICAgICBmb3IgKGxldCB0ID0gcmFuZ2VTdGFydERhdGU7IHQgPCByYW5nZUVuZERhdGU7IHQgKz0gZHVyYXRpb24uREFZKSB7XG4gICAgICAgICAgICBpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkID1cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnNEaXNhYmxlZCB8fCAodCA+IHJhbmdlU3RhcnREYXRlICYmIHQgPCByYW5nZUVuZERhdGUpO1xuICAgICAgICAgICAgICAgIGlmICh0IDwgaW5pdGlhbERhdGUgJiYgKCFtaW5SYW5nZSB8fCB0ID4gbWluUmFuZ2UpKVxuICAgICAgICAgICAgICAgICAgICBtaW5SYW5nZSA9IHQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodCA+IGluaXRpYWxEYXRlICYmICghbWF4UmFuZ2UgfHwgdCA8IG1heFJhbmdlKSlcbiAgICAgICAgICAgICAgICAgICAgbWF4UmFuZ2UgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgc2VsZi5jb25maWcuc2hvd01vbnRoczsgbSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbW9udGguY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5RWxlbSA9IG1vbnRoLmNoaWxkcmVuW2ldLCBkYXRlID0gZGF5RWxlbS5kYXRlT2JqO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dE9mUmFuZ2UgPSAobWluUmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA8IG1pblJhbmdlKSB8fFxuICAgICAgICAgICAgICAgICAgICAobWF4UmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA+IG1heFJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0T2ZSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWluc0Rpc2FibGVkICYmICFvdXRPZlJhbmdlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBbXCJzdGFydFJhbmdlXCIsIFwiaW5SYW5nZVwiLCBcImVuZFJhbmdlXCIsIFwibm90QWxsb3dlZFwiXS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChob3ZlckRhdGUgPD0gc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN0YXJ0UmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImVuZFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcInN0YXJ0UmFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluaXRpYWxEYXRlID4gaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBtaW5SYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1heFJhbmdlID09PSAwIHx8IHRpbWVzdGFtcCA8PSBtYXhSYW5nZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQmV0d2Vlbih0aW1lc3RhbXAsIGluaXRpYWxEYXRlLCBob3ZlckRhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9wZW4oZSwgcG9zaXRpb25FbGVtZW50ID0gc2VsZi5fcG9zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi5faW5wdXQuZGlzYWJsZWQgfHwgc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2FzT3BlbiA9IHNlbGYuaXNPcGVuO1xuICAgICAgICBzZWxmLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIGlmICghd2FzT3Blbikge1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUgJiYgc2VsZi5jb25maWcubm9DYWxlbmRhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsbG93SW5wdXQgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAgICAgKGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAhc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpLCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XG4gICAgICAgIHJldHVybiAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZU9iaiA9IChzZWxmLmNvbmZpZ1tgXyR7dHlwZX1EYXRlYF0gPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KSk7XG4gICAgICAgICAgICBjb25zdCBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW2BfJHt0eXBlID09PSBcIm1pblwiID8gXCJtYXhcIiA6IFwibWluXCJ9RGF0ZWBdO1xuICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGZbdHlwZSA9PT0gXCJtaW5cIiA/IFwibWluRGF0ZUhhc1RpbWVcIiA6IFwibWF4RGF0ZUhhc1RpbWVcIl0gPVxuICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldEhvdXJzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0U2Vjb25kcygpID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBzZWxmLnNlbGVjdGVkRGF0ZXMuZmlsdGVyKChkKSA9PiBpc0VuYWJsZWQoZCkpO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAmJiB0eXBlID09PSBcIm1pblwiKVxuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnRbdHlwZV0gPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0eXBlKTtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgICEhaW52ZXJzZURhdGVPYmogJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmogIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZURhdGVPYmouZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcbiAgICAgICAgY29uc3QgYm9vbE9wdHMgPSBbXG4gICAgICAgICAgICBcIndyYXBcIixcbiAgICAgICAgICAgIFwid2Vla051bWJlcnNcIixcbiAgICAgICAgICAgIFwiYWxsb3dJbnB1dFwiLFxuICAgICAgICAgICAgXCJhbGxvd0ludmFsaWRQcmVsb2FkXCIsXG4gICAgICAgICAgICBcImNsaWNrT3BlbnNcIixcbiAgICAgICAgICAgIFwidGltZV8yNGhyXCIsXG4gICAgICAgICAgICBcImVuYWJsZVRpbWVcIixcbiAgICAgICAgICAgIFwibm9DYWxlbmRhclwiLFxuICAgICAgICAgICAgXCJhbHRJbnB1dFwiLFxuICAgICAgICAgICAgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcbiAgICAgICAgICAgIFwiaW5saW5lXCIsXG4gICAgICAgICAgICBcInN0YXRpY1wiLFxuICAgICAgICAgICAgXCJlbmFibGVTZWNvbmRzXCIsXG4gICAgICAgICAgICBcImRpc2FibGVNb2JpbGVcIixcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgdXNlckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSksIGluc3RhbmNlQ29uZmlnKTtcbiAgICAgICAgY29uc3QgZm9ybWF0cyA9IHt9O1xuICAgICAgICBzZWxmLmNvbmZpZy5wYXJzZURhdGUgPSB1c2VyQ29uZmlnLnBhcnNlRGF0ZTtcbiAgICAgICAgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSA9IHVzZXJDb25maWcuZm9ybWF0RGF0ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuY29uZmlnLl9lbmFibGUsXG4gICAgICAgICAgICBzZXQ6IChkYXRlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9lbmFibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImRpc2FibGVcIiwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBzZWxmLmNvbmZpZy5fZGlzYWJsZSxcbiAgICAgICAgICAgIHNldDogKGRhdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGltZU1vZGUgPSB1c2VyQ29uZmlnLm1vZGUgPT09IFwidGltZVwiO1xuICAgICAgICBpZiAoIXVzZXJDb25maWcuZGF0ZUZvcm1hdCAmJiAodXNlckNvbmZpZy5lbmFibGVUaW1lIHx8IHRpbWVNb2RlKSkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdERhdGVGb3JtYXQgPSBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0IHx8IGRlZmF1bHRPcHRpb25zLmRhdGVGb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXRzLmRhdGVGb3JtYXQgPVxuICAgICAgICAgICAgICAgIHVzZXJDb25maWcubm9DYWxlbmRhciB8fCB0aW1lTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IFwiSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0RGF0ZUZvcm1hdCArIFwiIEg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmXG4gICAgICAgICAgICAodXNlckNvbmZpZy5lbmFibGVUaW1lIHx8IHRpbWVNb2RlKSAmJlxuICAgICAgICAgICAgIXVzZXJDb25maWcuYWx0Rm9ybWF0KSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QWx0Rm9ybWF0ID0gZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuYWx0Rm9ybWF0IHx8IGRlZmF1bHRPcHRpb25zLmFsdEZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdHMuYWx0Rm9ybWF0ID1cbiAgICAgICAgICAgICAgICB1c2VyQ29uZmlnLm5vQ2FsZW5kYXIgfHwgdGltZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgPyBcImg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlMgS1wiIDogXCIgS1wiKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRBbHRGb3JtYXQgKyBgIGg6aSR7dXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIn0gS2A7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1pbkRhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBzZWxmLmNvbmZpZy5fbWluRGF0ZSxcbiAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1pblwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtYXhEYXRlXCIsIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4gc2VsZi5jb25maWcuX21heERhdGUsXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIiksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtaW5NYXhUaW1lU2V0dGVyID0gKHR5cGUpID0+ICh2YWwpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW3R5cGUgPT09IFwibWluXCIgPyBcIl9taW5UaW1lXCIgOiBcIl9tYXhUaW1lXCJdID0gc2VsZi5wYXJzZURhdGUodmFsLCBcIkg6aTpTXCIpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluVGltZVwiLCB7XG4gICAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYuY29uZmlnLl9taW5UaW1lLFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhUaW1lU2V0dGVyKFwibWluXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcIm1heFRpbWVcIiwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiBzZWxmLmNvbmZpZy5fbWF4VGltZSxcbiAgICAgICAgICAgIHNldDogbWluTWF4VGltZVNldHRlcihcIm1heFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLm1vZGUgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMsIHVzZXJDb25maWcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvb2xPcHRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSBcInRydWVcIjtcbiAgICAgICAgSE9PS1MuZmlsdGVyKChob29rKSA9PiBzZWxmLmNvbmZpZ1tob29rXSAhPT0gdW5kZWZpbmVkKS5mb3JFYWNoKChob29rKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tob29rXSA9IGFycmF5aWZ5KHNlbGYuY29uZmlnW2hvb2tdIHx8IFtdKS5tYXAoYmluZFRvSW5zdGFuY2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5pc01vYmlsZSA9XG4gICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZU1vYmlsZSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5pbmxpbmUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZSAmJlxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJlxuICAgICAgICAgICAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW5Db25mID0gc2VsZi5jb25maWcucGx1Z2luc1tpXShzZWxmKSB8fCB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBsdWdpbkNvbmYpIHtcbiAgICAgICAgICAgICAgICBpZiAoSE9PS1MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IGFycmF5aWZ5KHBsdWdpbkNvbmZba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYmluZFRvSW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHNlbGYuY29uZmlnW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdXNlckNvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1trZXldID0gcGx1Z2luQ29uZltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdXNlckNvbmZpZy5hbHRJbnB1dENsYXNzKSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzID1cbiAgICAgICAgICAgICAgICBnZXRJbnB1dEVsZW0oKS5jbGFzc05hbWUgKyBcIiBcIiArIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25QYXJzZUNvbmZpZ1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRFbGVtKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5jb25maWcud3JhcFxuICAgICAgICAgICAgPyBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnB1dF1cIilcbiAgICAgICAgICAgIDogZWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBMb2NhbGUoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlICE9PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKGBmbGF0cGlja3I6IGludmFsaWQgbG9jYWxlICR7c2VsZi5jb25maWcubG9jYWxlfWApKTtcbiAgICAgICAgc2VsZi5sMTBuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCksICh0eXBlb2Ygc2VsZi5jb25maWcubG9jYWxlID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmxvY2FsZVxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgPyBmbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSk7XG4gICAgICAgIHRva2VuUmVnZXguSyA9IGAoJHtzZWxmLmwxMG4uYW1QTVswXX18JHtzZWxmLmwxMG4uYW1QTVsxXX18JHtzZWxmLmwxMG4uYW1QTVswXS50b0xvd2VyQ2FzZSgpfXwke3NlbGYubDEwbi5hbVBNWzFdLnRvTG93ZXJDYXNlKCl9KWA7XG4gICAgICAgIGNvbnN0IHVzZXJDb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlQ29uZmlnKSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLnRpbWVfMjRociA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy50aW1lXzI0aHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcudGltZV8yNGhyID0gc2VsZi5sMTBuLnRpbWVfMjRocjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmZvcm1hdERhdGUgPSBjcmVhdGVEYXRlRm9ybWF0dGVyKHNlbGYpO1xuICAgICAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoeyBjb25maWc6IHNlbGYuY29uZmlnLCBsMTBuOiBzZWxmLmwxMG4gfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FsZW5kYXIoY3VzdG9tUG9zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcucG9zaXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgc2VsZi5jb25maWcucG9zaXRpb24oc2VsZiwgY3VzdG9tUG9zaXRpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIik7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uRWxlbWVudCA9IGN1c3RvbVBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFySGVpZ2h0ID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2hpbGRyZW4sICgoYWNjLCBjaGlsZCkgPT4gYWNjICsgY2hpbGQub2Zmc2V0SGVpZ2h0KSwgMCksIGNhbGVuZGFyV2lkdGggPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldFdpZHRoLCBjb25maWdQb3MgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbi5zcGxpdChcIiBcIiksIGNvbmZpZ1Bvc1ZlcnRpY2FsID0gY29uZmlnUG9zWzBdLCBjb25maWdQb3NIb3Jpem9udGFsID0gY29uZmlnUG9zLmxlbmd0aCA+IDEgPyBjb25maWdQb3NbMV0gOiBudWxsLCBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZGlzdGFuY2VGcm9tQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gaW5wdXRCb3VuZHMuYm90dG9tLCBzaG93T25Ub3AgPSBjb25maWdQb3NWZXJ0aWNhbCA9PT0gXCJhYm92ZVwiIHx8XG4gICAgICAgICAgICAoY29uZmlnUG9zVmVydGljYWwgIT09IFwiYmVsb3dcIiAmJlxuICAgICAgICAgICAgICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wID4gY2FsZW5kYXJIZWlnaHQpO1xuICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgK1xuICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wICtcbiAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd1RvcFwiLCAhc2hvd09uVG9wKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLmxlZnQ7XG4gICAgICAgIGxldCBpc0NlbnRlciA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNSaWdodCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgbGVmdCAtPSAoY2FsZW5kYXJXaWR0aCAtIGlucHV0Qm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgICAgICBpc0NlbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBsZWZ0IC09IGNhbGVuZGFyV2lkdGggLSBpbnB1dEJvdW5kcy53aWR0aDtcbiAgICAgICAgICAgIGlzUmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dMZWZ0XCIsICFpc0NlbnRlciAmJiAhaXNSaWdodCk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dDZW50ZXJcIiwgaXNDZW50ZXIpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93UmlnaHRcIiwgaXNSaWdodCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggLVxuICAgICAgICAgICAgKHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLnJpZ2h0KTtcbiAgICAgICAgY29uc3QgcmlnaHRNb3N0ID0gbGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgY2VudGVyTW9zdCA9IHJpZ2h0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJpZ2h0TW9zdFwiLCByaWdodE1vc3QpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgICAgIGlmICghcmlnaHRNb3N0KSB7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghY2VudGVyTW9zdCkge1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gYCR7cmlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnRTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICBpZiAoZG9jID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYm9keVdpZHRoID0gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJMZWZ0ID0gTWF0aC5tYXgoMCwgYm9keVdpZHRoIC8gMiAtIGNhbGVuZGFyV2lkdGggLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlckJlZm9yZSA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmJlZm9yZVwiO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyQWZ0ZXIgPSBcIi5mbGF0cGlja3ItY2FsZW5kYXIuY2VudGVyTW9zdDphZnRlclwiO1xuICAgICAgICAgICAgY29uc3QgY2VudGVySW5kZXggPSBkb2MuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyU3R5bGUgPSBge2xlZnQ6JHtpbnB1dEJvdW5kcy5sZWZ0fXB4O3JpZ2h0OmF1dG87fWA7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJpZ2h0TW9zdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImNlbnRlck1vc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBkb2MuaW5zZXJ0UnVsZShgJHtjZW50ZXJCZWZvcmV9LCR7Y2VudGVyQWZ0ZXJ9JHtjZW50ZXJTdHlsZX1gLCBjZW50ZXJJbmRleCk7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtjZW50ZXJMZWZ0fXB4YDtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREb2N1bWVudFN0eWxlU2hlZXQoKSB7XG4gICAgICAgIGxldCBlZGl0YWJsZVNoZWV0ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2hlZXQuY3NzUnVsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGl0YWJsZVNoZWV0ID0gc2hlZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWRpdGFibGVTaGVldCAhPSBudWxsID8gZWRpdGFibGVTaGVldCA6IGNyZWF0ZVN0eWxlU2hlZXQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldCgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICByZXR1cm4gc3R5bGUuc2hlZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgIGJ1aWxkRGF5cygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb2N1c0FuZENsb3NlKCkge1xuICAgICAgICBzZWxmLl9pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgIT09IC0xIHx8XG4gICAgICAgICAgICBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYuY2xvc2UsIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlbGVjdERhdGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0YWJsZSA9IChkYXkpID0+IGRheS5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpICYmXG4gICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSAmJlxuICAgICAgICAgICAgIWRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICBjb25zdCB0ID0gZmluZFBhcmVudChnZXRFdmVudFRhcmdldChlKSwgaXNTZWxlY3RhYmxlKTtcbiAgICAgICAgaWYgKHQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUodGFyZ2V0LmRhdGVPYmouZ2V0VGltZSgpKSk7XG4gICAgICAgIGNvbnN0IHNob3VsZENoYW5nZU1vbnRoID0gKHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpIDwgc2VsZi5jdXJyZW50TW9udGggfHxcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpID5cbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCArIHNlbGYuY29uZmlnLnNob3dNb250aHMgLSAxKSAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiO1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSB0YXJnZXQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiKVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGVjdGVkRGF0ZV07XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwibXVsdGlwbGVcIikge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGlzRGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKHBhcnNlSW50KHNlbGVjdGVkSW5kZXgpLCAxKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB0cnVlKSAhPT0gMClcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydCgoYSwgYikgPT4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgIGlmIChzaG91bGRDaGFuZ2VNb250aCkge1xuICAgICAgICAgICAgY29uc3QgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgaWYgKGlzTmV3WWVhcikge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgICAgIGlmICghc2hvdWxkQ2hhbmdlTW9udGggJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSlcbiAgICAgICAgICAgIGZvY3VzT25EYXlFbGVtKHRhcmdldCk7XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSAmJiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgIGlmIChzaW5nbGUgfHwgcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgIH1cbiAgICBjb25zdCBDQUxMQkFDS1MgPSB7XG4gICAgICAgIGxvY2FsZTogW3NldHVwTG9jYWxlLCB1cGRhdGVXZWVrZGF5c10sXG4gICAgICAgIHNob3dNb250aHM6IFtidWlsZE1vbnRocywgc2V0Q2FsZW5kYXJXaWR0aCwgYnVpbGRXZWVrZGF5c10sXG4gICAgICAgIG1pbkRhdGU6IFtqdW1wVG9EYXRlXSxcbiAgICAgICAgbWF4RGF0ZTogW2p1bXBUb0RhdGVdLFxuICAgICAgICBjbGlja09wZW5zOiBbXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImNsaWNrXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHNldChvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwgJiYgdHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgb3B0aW9uKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChDQUxMQkFDS1Nba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBDQUxMQkFDS1Nba2V5XS5mb3JFYWNoKCh4KSA9PiB4KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKENBTExCQUNLU1tvcHRpb25dICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgQ0FMTEJBQ0tTW29wdGlvbl0uZm9yRWFjaCgoeCkgPT4geCgpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKEhPT0tTLmluZGV4T2Yob3B0aW9uKSA+IC0xKVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW29wdGlvbl0gPSBhcnJheWlmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgdXBkYXRlVmFsdWUodHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUsIGZvcm1hdCkge1xuICAgICAgICBsZXQgZGF0ZXMgPSBbXTtcbiAgICAgICAgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGUubWFwKChkKSA9PiBzZWxmLnBhcnNlRGF0ZShkLCBmb3JtYXQpKTtcbiAgICAgICAgZWxzZSBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgaW5wdXREYXRlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNpbmdsZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGRhdGUpID0+IHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKGBJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6ICR7SlNPTi5zdHJpbmdpZnkoaW5wdXREYXRlKX1gKSk7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IChzZWxmLmNvbmZpZy5hbGxvd0ludmFsaWRQcmVsb2FkXG4gICAgICAgICAgICA/IGRhdGVzXG4gICAgICAgICAgICA6IGRhdGVzLmZpbHRlcigoZCkgPT4gZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNFbmFibGVkKGQsIGZhbHNlKSkpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoKGEsIGIpID0+IGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UgPSBmYWxzZSwgZm9ybWF0ID0gc2VsZi5jb25maWcuZGF0ZUZvcm1hdCkge1xuICAgICAgICBpZiAoKGRhdGUgIT09IDAgJiYgIWRhdGUpIHx8IChkYXRlIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0ZS5sZW5ndGggPT09IDApKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XG4gICAgICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXNbc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICBqdW1wVG9EYXRlKHVuZGVmaW5lZCwgdHJpZ2dlckNoYW5nZSk7XG4gICAgICAgIHNldEhvdXJzRnJvbURhdGUoKTtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSlcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXJzZURhdGVSdWxlcyhhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgIC5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgICAgICAgICAgcnVsZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYXJzZURhdGUocnVsZSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIHJ1bGUuZnJvbSAmJlxuICAgICAgICAgICAgICAgIHJ1bGUudG8pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogc2VsZi5wYXJzZURhdGUocnVsZS5mcm9tLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICB0bzogc2VsZi5wYXJzZURhdGUocnVsZS50bywgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBEYXRlcygpIHtcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgIHNlbGYubm93ID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubm93KSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBwcmVsb2FkZWREYXRlID0gc2VsZi5jb25maWcuZGVmYXVsdERhdGUgfHxcbiAgICAgICAgICAgICgoc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5ub2RlTmFtZSA9PT0gXCJURVhUQVJFQVwiKSAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGxhY2Vob2xkZXIgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlID09PSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgOiBzZWxmLmlucHV0LnZhbHVlKTtcbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpXG4gICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUocHJlbG9hZGVkRGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgIHNlbGYuX2luaXRpYWxEYXRlID1cbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF1cbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdztcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGYuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5UaW1lID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubWluVGltZSwgXCJIOmlcIik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhUaW1lID0gc2VsZi5wYXJzZURhdGUoc2VsZi5jb25maWcubWF4VGltZSwgXCJIOmlcIik7XG4gICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgPVxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpID4gMCk7XG4gICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgPVxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpID4gMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuICAgICAgICBzZWxmLmlucHV0ID0gZ2V0SW5wdXRFbGVtKCk7XG4gICAgICAgIGlmICghc2VsZi5pbnB1dCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaW5wdXQuX3R5cGUgPSBzZWxmLmlucHV0LnR5cGU7XG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5pbnB1dDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzKTtcbiAgICAgICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5hbHRJbnB1dDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnJlcXVpcmVkID0gc2VsZi5pbnB1dC5yZXF1aXJlZDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudGFiSW5kZXggPSBzZWxmLmlucHV0LnRhYkluZGV4O1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmFsdElucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcInJlYWRvbmx5XCIpO1xuICAgICAgICBzZWxmLl9wb3NpdGlvbkVsZW1lbnQgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5faW5wdXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwTW9iaWxlKCkge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICA/IFwidGltZVwiXG4gICAgICAgICAgICAgICAgOiBcImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgIDogXCJkYXRlXCI7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICBzZWxmLm1vYmlsZUZvcm1hdFN0ciA9XG4gICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgID8gXCJZLW0tZFxcXFxUSDppOlNcIlxuICAgICAgICAgICAgICAgIDogaW5wdXRUeXBlID09PSBcImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiSDppOlNcIjtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSlcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQubWF4ID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLm1heERhdGUsIFwiWS1tLWRcIik7XG4gICAgICAgIGlmIChzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBTdHJpbmcoc2VsZi5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKTtcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgYmluZChzZWxmLm1vYmlsZUlucHV0LCBcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zZXREYXRlKGdldEV2ZW50VGFyZ2V0KGUpLnZhbHVlLCBmYWxzZSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgc2VsZi5vcGVuKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGhvb2tzID0gc2VsZi5jb25maWdbZXZlbnRdO1xuICAgICAgICBpZiAoaG9va3MgIT09IHVuZGVmaW5lZCAmJiBob29rcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaG9va3NbaV0gJiYgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGhvb2tzW2ldKHNlbGYuc2VsZWN0ZWREYXRlcywgc2VsZi5pbnB1dC52YWx1ZSwgc2VsZiwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ID09PSBcIm9uQ2hhbmdlXCIpIHtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJpbnB1dFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZS5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0RhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGYuc2VsZWN0ZWREYXRlc1tpXSwgZGF0ZSkgPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgfHwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiAoY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPj0gMCAmJlxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPD0gMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUgfHwgIXNlbGYubW9udGhOYXYpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYueWVhckVsZW1lbnRzLmZvckVhY2goKHllYXJFbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpO1xuICAgICAgICAgICAgZC5zZXRNb250aChzZWxmLmN1cnJlbnRNb250aCArIGkpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMgPiAxIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgICAgICBtb250aFRvU3RyKGQuZ2V0TW9udGgoKSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnZhbHVlID0gZC5nZXRNb250aCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC52YWx1ZSA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCArIDEgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKClcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVN0cihmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlc1xuICAgICAgICAgICAgLm1hcCgoZE9iaikgPT4gc2VsZi5mb3JtYXREYXRlKGRPYmosIGZvcm1hdCkpXG4gICAgICAgICAgICAuZmlsdGVyKChkLCBpLCBhcnIpID0+IHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fFxuICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSB8fFxuICAgICAgICAgICAgYXJyLmluZGV4T2YoZCkgPT09IGkpXG4gICAgICAgICAgICAuam9pbihzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcuY29uanVuY3Rpb25cbiAgICAgICAgICAgIDogc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9XG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IGdldERhdGVTdHIoc2VsZi5jb25maWcuYWx0Rm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAhPT0gZmFsc2UpXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblZhbHVlVXBkYXRlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vbnRoTmF2Q2xpY2soZSkge1xuICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICBjb25zdCBpc1ByZXZNb250aCA9IHNlbGYucHJldk1vbnRoTmF2LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaXNOZXh0TW9udGggPSBzZWxmLm5leHRNb250aE5hdi5jb250YWlucyhldmVudFRhcmdldCk7XG4gICAgICAgIGlmIChpc1ByZXZNb250aCB8fCBpc05leHRNb250aCkge1xuICAgICAgICAgICAgY2hhbmdlTW9udGgoaXNQcmV2TW9udGggPyAtMSA6IDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYueWVhckVsZW1lbnRzLmluZGV4T2YoZXZlbnRUYXJnZXQpID49IDApIHtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dEb3duXCIpKSB7XG4gICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRpbWVXcmFwcGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpLCBpbnB1dCA9IGV2ZW50VGFyZ2V0O1xuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZXZlbnRUYXJnZXQgPT09IHNlbGYuYW1QTSkge1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtpbnQoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBzZWxmLmwxMG4uYW1QTVswXSldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpKSwgbWF4ID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpLCBzdGVwID0gcGFyc2VGbG9hdChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSwgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLCBkZWx0YSA9IGUuZGVsdGEgfHxcbiAgICAgICAgICAgIChpc0tleURvd24gPyAoZS53aGljaCA9PT0gMzggPyAxIDogLTEpIDogMCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGN1clZhbHVlICsgc3RlcCAqIGRlbHRhO1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0LnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgaXNIb3VyRWxlbSA9IGlucHV0ID09PSBzZWxmLmhvdXJFbGVtZW50LCBpc01pbnV0ZUVsZW0gPSBpbnB1dCA9PT0gc2VsZi5taW51dGVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBtYXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50KCFpc0hvdXJFbGVtKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KGlzSG91ckVsZW0pICYmIGludCghc2VsZi5hbVBNKSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAtMSwgc2VsZi5ob3VyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQgPyBuZXdWYWx1ZSAtIG1heCAtIGludCghc2VsZi5hbVBNKSA6IG1pbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIDEsIHNlbGYuaG91ckVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAmJlxuICAgICAgICAgICAgICAgIGlzSG91ckVsZW0gJiZcbiAgICAgICAgICAgICAgICAoc3RlcCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW2ludChzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IHNlbGYubDEwbi5hbVBNWzBdKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHBhZChuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gX2ZsYXRwaWNrcihub2RlTGlzdCwgY29uZmlnKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwobm9kZUxpc3QpXG4gICAgICAgIC5maWx0ZXIoKHgpID0+IHggaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgY29uc3QgaW5zdGFuY2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAobm9kZS5fZmxhdHBpY2tyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaChub2RlLl9mbGF0cGlja3IpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZXMubGVuZ3RoID09PSAxID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBIVE1MQ29sbGVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBOb2RlTGlzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mbGF0cGlja3IgPSBOb2RlTGlzdC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgIH07XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xuICAgIH07XG59XG52YXIgZmxhdHBpY2tyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKFtzZWxlY3Rvcl0sIGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKTtcbiAgICB9XG59O1xuZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSB7fTtcbmZsYXRwaWNrci5sMTBucyA9IHtcbiAgICBlbjogT2JqZWN0LmFzc2lnbih7fSwgRW5nbGlzaCksXG4gICAgZGVmYXVsdDogT2JqZWN0LmFzc2lnbih7fSwgRW5nbGlzaCksXG59O1xuZmxhdHBpY2tyLmxvY2FsaXplID0gKGwxMG4pID0+IHtcbiAgICBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQpLCBsMTBuKTtcbn07XG5mbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSAoY29uZmlnKSA9PiB7XG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSwgY29uZmlnKTtcbn07XG5mbGF0cGlja3IucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7fSk7XG5mbGF0cGlja3IuZm9ybWF0RGF0ZSA9IGNyZWF0ZURhdGVGb3JtYXR0ZXIoe30pO1xuZmxhdHBpY2tyLmNvbXBhcmVEYXRlcyA9IGNvbXBhcmVEYXRlcztcbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBqUXVlcnkuZm4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBqUXVlcnkuZm4uZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xuICAgIH07XG59XG5EYXRlLnByb3RvdHlwZS5mcF9pbmNyID0gZnVuY3Rpb24gKGRheXMpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpICsgKHR5cGVvZiBkYXlzID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGF5cywgMTApIDogZGF5cykpO1xufTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luZG93LmZsYXRwaWNrciA9IGZsYXRwaWNrcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZsYXRwaWNrcjtcbiIsImV4cG9ydCBjb25zdCBlbmdsaXNoID0ge1xuICAgIHdlZWtkYXlzOiB7XG4gICAgICAgIHNob3J0aGFuZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgXCJTdW5kYXlcIixcbiAgICAgICAgICAgIFwiTW9uZGF5XCIsXG4gICAgICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICAgICAgXCJTYXR1cmRheVwiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICBcIkRlY1wiLFxuICAgICAgICBdLFxuICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgICAgICBcIkRlY2VtYmVyXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBkYXlzSW5Nb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxuICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxuICAgIG9yZGluYWw6IChudGgpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IG50aCAlIDEwMDtcbiAgICAgICAgaWYgKHMgPiAzICYmIHMgPCAyMSlcbiAgICAgICAgICAgIHJldHVybiBcInRoXCI7XG4gICAgICAgIHN3aXRjaCAocyAlIDEwKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RcIjtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcInRoXCI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJhbmdlU2VwYXJhdG9yOiBcIiB0byBcIixcbiAgICB3ZWVrQWJicmV2aWF0aW9uOiBcIldrXCIsXG4gICAgc2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxuICAgIHRvZ2dsZVRpdGxlOiBcIkNsaWNrIHRvIHRvZ2dsZVwiLFxuICAgIGFtUE06IFtcIkFNXCIsIFwiUE1cIl0sXG4gICAgeWVhckFyaWFMYWJlbDogXCJZZWFyXCIsXG4gICAgbW9udGhBcmlhTGFiZWw6IFwiTW9udGhcIixcbiAgICBob3VyQXJpYUxhYmVsOiBcIkhvdXJcIixcbiAgICBtaW51dGVBcmlhTGFiZWw6IFwiTWludXRlXCIsXG4gICAgdGltZV8yNGhyOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBlbmdsaXNoO1xuIiwiZXhwb3J0IGNvbnN0IEhPT0tTID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcIm9uQ2xvc2VcIixcbiAgICBcIm9uRGF5Q3JlYXRlXCIsXG4gICAgXCJvbkRlc3Ryb3lcIixcbiAgICBcIm9uS2V5RG93blwiLFxuICAgIFwib25Nb250aENoYW5nZVwiLFxuICAgIFwib25PcGVuXCIsXG4gICAgXCJvblBhcnNlQ29uZmlnXCIsXG4gICAgXCJvblJlYWR5XCIsXG4gICAgXCJvblZhbHVlVXBkYXRlXCIsXG4gICAgXCJvblllYXJDaGFuZ2VcIixcbiAgICBcIm9uUHJlQ2FsZW5kYXJQb3NpdGlvblwiLFxuXTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBfZGlzYWJsZTogW10sXG4gICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgYWxsb3dJbnZhbGlkUHJlbG9hZDogZmFsc2UsXG4gICAgYWx0Rm9ybWF0OiBcIkYgaiwgWVwiLFxuICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICBhbHRJbnB1dENsYXNzOiBcImZvcm0tY29udHJvbCBpbnB1dFwiLFxuICAgIGFuaW1hdGU6IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxuICAgIGFyaWFEYXRlRm9ybWF0OiBcIkYgaiwgWVwiLFxuICAgIGF1dG9GaWxsRGVmYXVsdFRpbWU6IHRydWUsXG4gICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIGNvbmp1bmN0aW9uOiBcIiwgXCIsXG4gICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgIGRlZmF1bHRIb3VyOiAxMixcbiAgICBkZWZhdWx0TWludXRlOiAwLFxuICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxuICAgIGRpc2FibGU6IFtdLFxuICAgIGRpc2FibGVNb2JpbGU6IGZhbHNlLFxuICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxuICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxuICAgIGVycm9ySGFuZGxlcjogKGVycikgPT4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKGVyciksXG4gICAgZ2V0V2VlazogKGdpdmVuRGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDMgLSAoKGRhdGUuZ2V0RGF5KCkgKyA2KSAlIDcpKTtcbiAgICAgICAgdmFyIHdlZWsxID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCA0KTtcbiAgICAgICAgcmV0dXJuICgxICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoKChkYXRlLmdldFRpbWUoKSAtIHdlZWsxLmdldFRpbWUoKSkgLyA4NjQwMDAwMCAtXG4gICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgKCh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykpIC9cbiAgICAgICAgICAgICAgICA3KSk7XG4gICAgfSxcbiAgICBob3VySW5jcmVtZW50OiAxLFxuICAgIGlnbm9yZWRGb2N1c0VsZW1lbnRzOiBbXSxcbiAgICBpbmxpbmU6IGZhbHNlLFxuICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXG4gICAgbWludXRlSW5jcmVtZW50OiA1LFxuICAgIG1vZGU6IFwic2luZ2xlXCIsXG4gICAgbW9udGhTZWxlY3RvclR5cGU6IFwiZHJvcGRvd25cIixcbiAgICBuZXh0QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixcbiAgICBub0NhbGVuZGFyOiBmYWxzZSxcbiAgICBub3c6IG5ldyBEYXRlKCksXG4gICAgb25DaGFuZ2U6IFtdLFxuICAgIG9uQ2xvc2U6IFtdLFxuICAgIG9uRGF5Q3JlYXRlOiBbXSxcbiAgICBvbkRlc3Ryb3k6IFtdLFxuICAgIG9uS2V5RG93bjogW10sXG4gICAgb25Nb250aENoYW5nZTogW10sXG4gICAgb25PcGVuOiBbXSxcbiAgICBvblBhcnNlQ29uZmlnOiBbXSxcbiAgICBvblJlYWR5OiBbXSxcbiAgICBvblZhbHVlVXBkYXRlOiBbXSxcbiAgICBvblllYXJDaGFuZ2U6IFtdLFxuICAgIG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjogW10sXG4gICAgcGx1Z2luczogW10sXG4gICAgcG9zaXRpb246IFwiYXV0b1wiLFxuICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcbiAgICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGZhbHNlLFxuICAgIHNob3dNb250aHM6IDEsXG4gICAgc3RhdGljOiBmYWxzZSxcbiAgICB0aW1lXzI0aHI6IGZhbHNlLFxuICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICB3cmFwOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgeyB0b2tlblJlZ2V4LCByZXZGb3JtYXQsIGZvcm1hdHMsIH0gZnJvbSBcIi4vZm9ybWF0dGluZ1wiO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tIFwiLi4vdHlwZXMvb3B0aW9uc1wiO1xuaW1wb3J0IHsgZW5nbGlzaCB9IGZyb20gXCIuLi9sMTBuL2RlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBjcmVhdGVEYXRlRm9ybWF0dGVyID0gKHsgY29uZmlnID0gZGVmYXVsdHMsIGwxMG4gPSBlbmdsaXNoLCBpc01vYmlsZSA9IGZhbHNlLCB9KSA9PiAoZGF0ZU9iaiwgZnJtdCwgb3ZlcnJpZGVMb2NhbGUpID0+IHtcbiAgICBjb25zdCBsb2NhbGUgPSBvdmVycmlkZUxvY2FsZSB8fCBsMTBuO1xuICAgIGlmIChjb25maWcuZm9ybWF0RGF0ZSAhPT0gdW5kZWZpbmVkICYmICFpc01vYmlsZSkge1xuICAgICAgICByZXR1cm4gY29uZmlnLmZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCwgbG9jYWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZybXRcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGMsIGksIGFycikgPT4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIlxuICAgICAgICA/IGZvcm1hdHNbY10oZGF0ZU9iaiwgbG9jYWxlLCBjb25maWcpXG4gICAgICAgIDogYyAhPT0gXCJcXFxcXCJcbiAgICAgICAgICAgID8gY1xuICAgICAgICAgICAgOiBcIlwiKVxuICAgICAgICAuam9pbihcIlwiKTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRGF0ZVBhcnNlciA9ICh7IGNvbmZpZyA9IGRlZmF1bHRzLCBsMTBuID0gZW5nbGlzaCB9KSA9PiAoZGF0ZSwgZ2l2ZW5Gb3JtYXQsIHRpbWVsZXNzLCBjdXN0b21Mb2NhbGUpID0+IHtcbiAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBsb2NhbGUgPSBjdXN0b21Mb2NhbGUgfHwgbDEwbjtcbiAgICBsZXQgcGFyc2VkRGF0ZTtcbiAgICBjb25zdCBkYXRlT3JpZyA9IGRhdGU7XG4gICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmXG4gICAgICAgIGRhdGUudG9GaXhlZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gZ2l2ZW5Gb3JtYXQgfHwgKGNvbmZpZyB8fCBkZWZhdWx0cykuZGF0ZUZvcm1hdDtcbiAgICAgICAgY29uc3QgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XG4gICAgICAgIGlmIChkYXRlc3RyID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGltZWxlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9aJC8udGVzdChkYXRlc3RyKSB8fFxuICAgICAgICAgICAgL0dNVCQvLnRlc3QoZGF0ZXN0cikpXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZyAmJiBjb25maWcucGFyc2VEYXRlKVxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IGNvbmZpZy5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWREYXRlID1cbiAgICAgICAgICAgICAgICAhY29uZmlnIHx8ICFjb25maWcubm9DYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSwgMCwgMCwgMCwgMClcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICAgICAgICAgIGxldCBtYXRjaGVkLCBvcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXRjaEluZGV4ID0gMCwgcmVnZXhTdHIgPSBcIlwiOyBpIDwgZm9ybWF0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBmb3JtYXRbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgaXNCYWNrU2xhc2ggPSB0b2tlbiA9PT0gXCJcXFxcXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgZXNjYXBlZCA9IGZvcm1hdFtpIC0gMV0gPT09IFwiXFxcXFwiIHx8IGlzQmFja1NsYXNoO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlblJlZ2V4W3Rva2VuXSAmJiAhZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICByZWdleFN0ciArPSB0b2tlblJlZ2V4W3Rva2VuXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKS5leGVjKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoZWQgPSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuICE9PSBcIllcIiA/IFwicHVzaFwiIDogXCJ1bnNoaWZ0XCJdKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcmV2Rm9ybWF0W3Rva2VuXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWw6IG1hdGNoWysrbWF0Y2hJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IFwiLlwiO1xuICAgICAgICAgICAgICAgIG9wcy5mb3JFYWNoKCh7IGZuLCB2YWwgfSkgPT4gKHBhcnNlZERhdGUgPSBmbihwYXJzZWREYXRlLCB2YWwsIGxvY2FsZSkgfHwgcGFyc2VkRGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG1hdGNoZWQgPyBwYXJzZWREYXRlIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghKHBhcnNlZERhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihwYXJzZWREYXRlLmdldFRpbWUoKSkpKSB7XG4gICAgICAgIGNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKGBJbnZhbGlkIGRhdGUgcHJvdmlkZWQ6ICR7ZGF0ZU9yaWd9YCkpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGltZWxlc3MgPT09IHRydWUpXG4gICAgICAgIHBhcnNlZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHBhcnNlZERhdGU7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVEYXRlcyhkYXRlMSwgZGF0ZTIsIHRpbWVsZXNzID0gdHJ1ZSkge1xuICAgIGlmICh0aW1lbGVzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZShkYXRlMS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApIC1cbiAgICAgICAgICAgIG5ldyBEYXRlKGRhdGUyLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUaW1lcyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gKDM2MDAgKiAoZGF0ZTEuZ2V0SG91cnMoKSAtIGRhdGUyLmdldEhvdXJzKCkpICtcbiAgICAgICAgNjAgKiAoZGF0ZTEuZ2V0TWludXRlcygpIC0gZGF0ZTIuZ2V0TWludXRlcygpKSArXG4gICAgICAgIGRhdGUxLmdldFNlY29uZHMoKSAtXG4gICAgICAgIGRhdGUyLmdldFNlY29uZHMoKSk7XG59XG5leHBvcnQgY29uc3QgaXNCZXR3ZWVuID0gKHRzLCB0czEsIHRzMikgPT4ge1xuICAgIHJldHVybiB0cyA+IE1hdGgubWluKHRzMSwgdHMyKSAmJiB0cyA8IE1hdGgubWF4KHRzMSwgdHMyKTtcbn07XG5leHBvcnQgY29uc3QgZHVyYXRpb24gPSB7XG4gICAgREFZOiA4NjQwMDAwMCxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEhvdXJzKGNvbmZpZykge1xuICAgIGxldCBob3VycyA9IGNvbmZpZy5kZWZhdWx0SG91cjtcbiAgICBsZXQgbWludXRlcyA9IGNvbmZpZy5kZWZhdWx0TWludXRlO1xuICAgIGxldCBzZWNvbmRzID0gY29uZmlnLmRlZmF1bHRTZWNvbmRzO1xuICAgIGlmIChjb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG1pbkhvdXIgPSBjb25maWcubWluRGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBtaW5NaW51dGVzID0gY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBjb25zdCBtaW5TZWNvbmRzID0gY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICBpZiAoaG91cnMgPCBtaW5Ib3VyKSB7XG4gICAgICAgICAgICBob3VycyA9IG1pbkhvdXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09PSBtaW5Ib3VyICYmIG1pbnV0ZXMgPCBtaW5NaW51dGVzKSB7XG4gICAgICAgICAgICBtaW51dGVzID0gbWluTWludXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT09IG1pbkhvdXIgJiYgbWludXRlcyA9PT0gbWluTWludXRlcyAmJiBzZWNvbmRzIDwgbWluU2Vjb25kcylcbiAgICAgICAgICAgIHNlY29uZHMgPSBjb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIGlmIChjb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG1heEhyID0gY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgbWF4TWludXRlcyA9IGNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3VycywgbWF4SHIpO1xuICAgICAgICBpZiAoaG91cnMgPT09IG1heEhyKVxuICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1heE1pbnV0ZXMsIG1pbnV0ZXMpO1xuICAgICAgICBpZiAoaG91cnMgPT09IG1heEhyICYmIG1pbnV0ZXMgPT09IG1heE1pbnV0ZXMpXG4gICAgICAgICAgICBzZWNvbmRzID0gY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpO1xuICAgIH1cbiAgICByZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcyB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xuICAgIGlmIChib29sID09PSB0cnVlKVxuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICAgIGNvbnN0IGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XG4gICAgZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaWYgKGNvbnRlbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKVxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudChub2RlLCBjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpXG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgY29uZGl0aW9uKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU51bWJlcklucHV0KGlucHV0Q2xhc3NOYW1lLCBvcHRzKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJudW1JbnB1dFdyYXBwZXJcIiksIG51bUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibnVtSW5wdXQgXCIgKyBpbnB1dENsYXNzTmFtZSksIGFycm93VXAgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93VXBcIiksIGFycm93RG93biA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dEb3duXCIpO1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDkuMFwiKSA9PT0gLTEpIHtcbiAgICAgICAgbnVtSW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIG51bUlucHV0LnBhdHRlcm4gPSBcIlxcXFxkKlwiO1xuICAgIH1cbiAgICBpZiAob3B0cyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRzKVxuICAgICAgICAgICAgbnVtSW5wdXQuc2V0QXR0cmlidXRlKGtleSwgb3B0c1trZXldKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93VXApO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dEb3duKTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFRhcmdldChldmVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgICAgIHJldHVybiBwYXRoWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGludCwgcGFkIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5jb25zdCBkb05vdGhpbmcgPSAoKSA9PiB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbW9udGhUb1N0ciA9IChtb250aE51bWJlciwgc2hvcnRoYW5kLCBsb2NhbGUpID0+IGxvY2FsZS5tb250aHNbc2hvcnRoYW5kID8gXCJzaG9ydGhhbmRcIiA6IFwibG9uZ2hhbmRcIl1bbW9udGhOdW1iZXJdO1xuZXhwb3J0IGNvbnN0IHJldkZvcm1hdCA9IHtcbiAgICBEOiBkb05vdGhpbmcsXG4gICAgRjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoTmFtZSwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xuICAgIH0sXG4gICAgRzogKGRhdGVPYmosIGhvdXIpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIEg6IChkYXRlT2JqLCBob3VyKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XG4gICAgfSxcbiAgICBKOiAoZGF0ZU9iaiwgZGF5KSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgIH0sXG4gICAgSzogKGRhdGVPYmosIGFtUE0sIGxvY2FsZSkgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKChkYXRlT2JqLmdldEhvdXJzKCkgJSAxMikgK1xuICAgICAgICAgICAgMTIgKiBpbnQobmV3IFJlZ0V4cChsb2NhbGUuYW1QTVsxXSwgXCJpXCIpLnRlc3QoYW1QTSkpKTtcbiAgICB9LFxuICAgIE06IGZ1bmN0aW9uIChkYXRlT2JqLCBzaG9ydE1vbnRoLCBsb2NhbGUpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLnNob3J0aGFuZC5pbmRleE9mKHNob3J0TW9udGgpKTtcbiAgICB9LFxuICAgIFM6IChkYXRlT2JqLCBzZWNvbmRzKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcbiAgICB9LFxuICAgIFU6IChfLCB1bml4U2Vjb25kcykgPT4gbmV3IERhdGUocGFyc2VGbG9hdCh1bml4U2Vjb25kcykgKiAxMDAwKSxcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZU9iaiwgd2Vla051bSwgbG9jYWxlKSB7XG4gICAgICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgMCwgMiArICh3ZWVrTnVtYmVyIC0gMSkgKiA3LCAwLCAwLCAwLCAwKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSArIGxvY2FsZS5maXJzdERheU9mV2Vlayk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG4gICAgWTogKGRhdGVPYmosIHllYXIpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRGdWxsWWVhcihwYXJzZUZsb2F0KHllYXIpKTtcbiAgICB9LFxuICAgIFo6IChfLCBJU09EYXRlKSA9PiBuZXcgRGF0ZShJU09EYXRlKSxcbiAgICBkOiAoZGF0ZU9iaiwgZGF5KSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xuICAgIH0sXG4gICAgaDogKGRhdGVPYmosIGhvdXIpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIGk6IChkYXRlT2JqLCBtaW51dGVzKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0TWludXRlcyhwYXJzZUZsb2F0KG1pbnV0ZXMpKTtcbiAgICB9LFxuICAgIGo6IChkYXRlT2JqLCBkYXkpID0+IHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBsOiBkb05vdGhpbmcsXG4gICAgbTogKGRhdGVPYmosIG1vbnRoKSA9PiB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcbiAgICB9LFxuICAgIG46IChkYXRlT2JqLCBtb250aCkgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgfSxcbiAgICBzOiAoZGF0ZU9iaiwgc2Vjb25kcykgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgfSxcbiAgICB1OiAoXywgdW5peE1pbGxTZWNvbmRzKSA9PiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhNaWxsU2Vjb25kcykpLFxuICAgIHc6IGRvTm90aGluZyxcbiAgICB5OiAoZGF0ZU9iaiwgeWVhcikgPT4ge1xuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKDIwMDAgKyBwYXJzZUZsb2F0KHllYXIpKTtcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCB0b2tlblJlZ2V4ID0ge1xuICAgIEQ6IFwiKFxcXFx3KylcIixcbiAgICBGOiBcIihcXFxcdyspXCIsXG4gICAgRzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBIOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIEo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXFxcXHcrXCIsXG4gICAgSzogXCJcIixcbiAgICBNOiBcIihcXFxcdyspXCIsXG4gICAgUzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBVOiBcIiguKylcIixcbiAgICBXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIFk6IFwiKFxcXFxkezR9KVwiLFxuICAgIFo6IFwiKC4rKVwiLFxuICAgIGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgaDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBpOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgbDogXCIoXFxcXHcrKVwiLFxuICAgIG06IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgbjogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBzOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIHU6IFwiKC4rKVwiLFxuICAgIHc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgeTogXCIoXFxcXGR7Mn0pXCIsXG59O1xuZXhwb3J0IGNvbnN0IGZvcm1hdHMgPSB7XG4gICAgWjogKGRhdGUpID0+IGRhdGUudG9JU09TdHJpbmcoKSxcbiAgICBEOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMuc2hvcnRoYW5kW2Zvcm1hdHMudyhkYXRlLCBsb2NhbGUsIG9wdGlvbnMpXTtcbiAgICB9LFxuICAgIEY6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZm9ybWF0cy5uKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykgLSAxLCBmYWxzZSwgbG9jYWxlKTtcbiAgICB9LFxuICAgIEc6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHBhZChmb3JtYXRzLmgoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSk7XG4gICAgfSxcbiAgICBIOiAoZGF0ZSkgPT4gcGFkKGRhdGUuZ2V0SG91cnMoKSksXG4gICAgSjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm9yZGluYWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgOiBkYXRlLmdldERhdGUoKTtcbiAgICB9LFxuICAgIEs6IChkYXRlLCBsb2NhbGUpID0+IGxvY2FsZS5hbVBNW2ludChkYXRlLmdldEhvdXJzKCkgPiAxMSldLFxuICAgIE06IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZGF0ZS5nZXRNb250aCgpLCB0cnVlLCBsb2NhbGUpO1xuICAgIH0sXG4gICAgUzogKGRhdGUpID0+IHBhZChkYXRlLmdldFNlY29uZHMoKSksXG4gICAgVTogKGRhdGUpID0+IGRhdGUuZ2V0VGltZSgpIC8gMTAwMCxcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZSwgXywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXRXZWVrKGRhdGUpO1xuICAgIH0sXG4gICAgWTogKGRhdGUpID0+IHBhZChkYXRlLmdldEZ1bGxZZWFyKCksIDQpLFxuICAgIGQ6IChkYXRlKSA9PiBwYWQoZGF0ZS5nZXREYXRlKCkpLFxuICAgIGg6IChkYXRlKSA9PiAoZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyKSxcbiAgICBpOiAoZGF0ZSkgPT4gcGFkKGRhdGUuZ2V0TWludXRlcygpKSxcbiAgICBqOiAoZGF0ZSkgPT4gZGF0ZS5nZXREYXRlKCksXG4gICAgbDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzLmxvbmdoYW5kW2RhdGUuZ2V0RGF5KCldO1xuICAgIH0sXG4gICAgbTogKGRhdGUpID0+IHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBuOiAoZGF0ZSkgPT4gZGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICBzOiAoZGF0ZSkgPT4gZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgdTogKGRhdGUpID0+IGRhdGUuZ2V0VGltZSgpLFxuICAgIHc6IChkYXRlKSA9PiBkYXRlLmdldERheSgpLFxuICAgIHk6IChkYXRlKSA9PiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMiksXG59O1xuIiwiZXhwb3J0IGNvbnN0IHBhZCA9IChudW1iZXIsIGxlbmd0aCA9IDIpID0+IGAwMDAke251bWJlcn1gLnNsaWNlKGxlbmd0aCAqIC0xKTtcbmV4cG9ydCBjb25zdCBpbnQgPSAoYm9vbCkgPT4gKGJvb2wgPT09IHRydWUgPyAxIDogMCk7XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHdhaXQpIHtcbiAgICBsZXQgdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHdhaXQpO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgYXJyYXlpZnkgPSAob2JqKSA9PiBvYmogaW5zdGFuY2VvZiBBcnJheSA/IG9iaiA6IFtvYmpdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2YgYXJncykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5KSA9PiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbn1cbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxudmFyIENvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb25uZWN0b3Igb3B0aW9ucy5cclxuICAgICAqL1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgYXV0aDoge1xuICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgfSxcbiAgICAgIGF1dGhFbmRwb2ludDogJy9icm9hZGNhc3RpbmcvYXV0aCcsXG4gICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4gICAgICBjc3JmVG9rZW46IG51bGwsXG4gICAgICBob3N0OiBudWxsLFxuICAgICAga2V5OiBudWxsLFxuICAgICAgbmFtZXNwYWNlOiAnQXBwLkV2ZW50cydcbiAgICB9O1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuICAvKipcclxuICAgKiBNZXJnZSB0aGUgY3VzdG9tIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdHMuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJzZXRPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5jc3JmVG9rZW4oKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuY3NyZlRva2VuKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIENTUkYgdG9rZW4gZnJvbSB0aGUgcGFnZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY3NyZlRva2VuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNzcmZUb2tlbigpIHtcbiAgICAgIHZhciBzZWxlY3RvcjtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snTGFyYXZlbCddICYmIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbikge1xuICAgICAgICByZXR1cm4gd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY3NyZlRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgYmFzaWMgY2hhbm5lbC5cclxuICovXG52YXIgQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAga2V5OiBcImxpc3RlbkZvcldoaXNwZXJcIixcblxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhIHdoaXNwZXIgZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLmNsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJub3RpZmljYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5JbGx1bWluYXRlXFxcXE5vdGlmaWNhdGlvbnNcXFxcRXZlbnRzXFxcXEJyb2FkY2FzdE5vdGlmaWNhdGlvbkNyZWF0ZWQnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGEgd2hpc3BlciBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0ZvcldoaXNwZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ0ZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9wTGlzdGVuaW5nKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFubmVsO1xufSgpO1xuXG4vKipcclxuICogRXZlbnQgbmFtZSBmb3JtYXR0ZXJcclxuICovXG52YXIgRXZlbnRGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50Rm9ybWF0dGVyKG5hbWVzcGFjZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudEZvcm1hdHRlcik7XG5cbiAgICB0aGlzLnNldE5hbWVzcGFjZShuYW1lc3BhY2UpO1xuICB9XG4gIC8qKlxyXG4gICAqIEZvcm1hdCB0aGUgZ2l2ZW4gZXZlbnQgbmFtZS5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudEZvcm1hdHRlciwgW3tcbiAgICBrZXk6IFwiZm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nIHx8IGV2ZW50LmNoYXJBdCgwKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5uYW1lc3BhY2UgKyAnLicgKyBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgZXZlbnQgbmFtZXNwYWNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXROYW1lc3BhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TmFtZXNwYWNlKHZhbHVlKSB7XG4gICAgICB0aGlzLm5hbWVzcGFjZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudEZvcm1hdHRlcjtcbn0oKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlckNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJDaGFubmVsKTtcblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFB1c2hlckNoYW5uZWwocHVzaGVyLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuXG4gICAgX3RoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIGEgUHVzaGVyIGNoYW5uZWwuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIFB1c2hlciBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bnN1YnNjcmliZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX2Vycm9yJywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICBjYWxsYmFjayhzdGF0dXMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgcHJpdmF0ZSBjaGFubmVsLlxyXG4gKi9cblxudmFyIFB1c2hlclByaXZhdGVDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFB1c2hlclByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBQdXNoZXJQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFB1c2hlclByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoXCJjbGllbnQtXCIuY29uY2F0KGV2ZW50TmFtZSksIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlclByaXZhdGVDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlckVuY3J5cHRlZFByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcIndoaXNwZXJcIixcblxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcihcImNsaWVudC1cIi5jb25jYXQoZXZlbnROYW1lKSwgZGF0YSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHVzaGVyRW5jcnlwdGVkUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByZXNlbmNlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgUHVzaGVyUHJlc2VuY2VDaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJQcmVzZW5jZUNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiBcImhlcmVcIixcblxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSB0aGUgbWVtYmVyIGxpc3QgY2hhbmdlcy5cclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGEubWVtYmVyc1trXTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIHNvbWVvbmUgam9pbmluZyB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiam9pbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2hpc3BlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKFwiY2xpZW50LVwiLmNvbmNhdChldmVudE5hbWUpLCBkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQdXNoZXJQcmVzZW5jZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9DaGFubmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoU29ja2V0SW9DaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb0NoYW5uZWwpO1xuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cclxuICAgKi9cbiAgZnVuY3Rpb24gU29ja2V0SW9DaGFubmVsKHNvY2tldCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCBjYWxsYmFja3MgYXBwbGllZCB0byB0aGUgc29ja2V0LlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5ldmVudHMgPSB7fTtcbiAgICAvKipcclxuICAgICAqIFVzZXIgc3VwcGxpZWQgY2FsbGJhY2tzIGZvciBldmVudHMgb24gdGhpcyBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgICBfdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICBfdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuXG4gICAgX3RoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogU3Vic2NyaWJlIHRvIGEgU29ja2V0LmlvIGNoYW5uZWwuXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbnN1YnNjcmliZSBmcm9tIGNoYW5uZWwgYW5kIHViaW5kIGV2ZW50IGNhbGxiYWNrcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5zdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVuYmluZEV2ZW50KHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBjYWxsYmFjayhzb2NrZXQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgdG8gYW4gZXZlbnQgYW5kIHN0b3JlIHRoZSBjYWxsYmFjay5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IFtdO1xuXG4gICAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBmdW5jdGlvbiAoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICAgIGlmIChfdGhpczIubmFtZSA9PT0gY2hhbm5lbCAmJiBfdGhpczIubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgX3RoaXMyLmxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNiKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCB0aGlzLmV2ZW50c1tldmVudF0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBVbmJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgZnJvbSBhbGwgc3RvcmVkIGV2ZW50IGNhbGxiYWNrcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMzLnVuYmluZEV2ZW50KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFVuYmluZCB0aGUgbGlzdGVuZXJzIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdIHx8IFtdO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmZpbHRlcihmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICByZXR1cm4gY2IgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjYWxsYmFjayB8fCB0aGlzLmxpc3RlbmVyc1tldmVudF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgdGhpcy5ldmVudHNbZXZlbnRdKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29ja2V0SW9DaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcml2YXRlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NvY2tldElvQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgZXZlbnQ6IFwiY2xpZW50LVwiLmNvbmNhdChldmVudE5hbWUpLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsO1xufShTb2NrZXRJb0NoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIHByZXNlbmNlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICBfaW5oZXJpdHMoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIF9Tb2NrZXRJb1ByaXZhdGVDaGFubik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwiaGVyZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3ByZXNlbmNlOnN1YnNjcmliZWQnLCBmdW5jdGlvbiAobWVtYmVycykge1xuICAgICAgICBjYWxsYmFjayhtZW1iZXJzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnVzZXJfaW5mbztcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIHNvbWVvbmUgam9pbmluZyB0aGUgY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiam9pbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmxlYXZpbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgX2luaGVyaXRzKE51bGxDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbENoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDaGFubmVsKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG5cbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSB0byBhIGNoYW5uZWwuXHJcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge30gLy9cblxuICAgIC8qKlxyXG4gICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuc3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge30gLy9cblxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgYW55dGltZSBhIHN1YnNjcmlwdGlvbiBzdWNjZWVkcy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVkKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEJpbmQgYSBjaGFubmVsIHRvIGFuIGV2ZW50LlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIHByaXZhdGUgY2hhbm5lbC5cclxuICovXG5cbnZhciBOdWxsUHJpdmF0ZUNoYW5uZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9OdWxsQ2hhbm5lbCkge1xuICBfaW5oZXJpdHMoTnVsbFByaXZhdGVDaGFubmVsLCBfTnVsbENoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbFByaXZhdGVDaGFubmVsKTtcblxuICBmdW5jdGlvbiBOdWxsUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxQcml2YXRlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVsbFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG5cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVsbFByaXZhdGVDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIHByZXNlbmNlIGNoYW5uZWwuXHJcbiAqL1xuXG52YXIgTnVsbFByZXNlbmNlQ2hhbm5lbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIF9pbmhlcml0cyhOdWxsUHJlc2VuY2VDaGFubmVsLCBfTnVsbENoYW5uZWwpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTnVsbFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbFByZXNlbmNlQ2hhbm5lbCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTnVsbFByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICBrZXk6IFwiaGVyZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJqb2luaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aGlzcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVsbFByZXNlbmNlQ2hhbm5lbDtcbn0oTnVsbENoYW5uZWwpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubmVjdG9yIHRvIFB1c2hlci5cclxuICovXG5cbnZhciBQdXNoZXJDb25uZWN0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgX2luaGVyaXRzKFB1c2hlckNvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQdXNoZXJDb25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggUHVzaGVyIGNvbm5lY3Rpb24uXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUHVzaGVyQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucHVzaGVyID0gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKS5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGVuY3J5cHRlZCBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuY3J5cHRlZFByaXZhdGVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuY3J5cHRlZFByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtZW5jcnlwdGVkLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJFbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtZW5jcnlwdGVkLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS1lbmNyeXB0ZWQtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJlc2VuY2VDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJlc2VuY2VDaGFubmVsKHRoaXMucHVzaGVyLCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgX3RoaXMyLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IFB1c2hlciBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFB1c2hlckNvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIGNvbm5uZWN0b3IgdG8gYSBTb2NrZXQuaW8gc2VydmVyLlxyXG4gKi9cblxudmFyIFNvY2tldElvQ29ubmVjdG9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIF9pbmhlcml0cyhTb2NrZXRJb0Nvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gU29ja2V0SW9Db25uZWN0b3IoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggU29ja2V0LmlvIGNvbm5lY3Rpb24uXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU29ja2V0SW9Db25uZWN0b3IsIFt7XG4gICAga2V5OiBcImNvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhfdGhpczIuY2hhbm5lbHMpLmZvckVhY2goZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBzb2NrZXQuaW8gbW9kdWxlIGZyb20gZ2xvYmFsIHNjb3BlIG9yIG9wdGlvbnMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFNvY2tldElPXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElPKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY2xpZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGlvO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvY2tldC5pbyBjbGllbnQgbm90IGZvdW5kLiBTaG91bGQgYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIG9yIHBhc3NlZCB2aWEgb3B0aW9ucy5jbGllbnQnKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgU29ja2V0SW9DaGFubmVsKHRoaXMuc29ja2V0LCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJpdmF0ZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKHRoaXMuc29ja2V0LCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicHJlc2VuY2VDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIF90aGlzMy5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChuYW1lKSB7XG4gICAgICBpZiAodGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic29ja2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQuaWQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCBTb2NrZXRpbyBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgbnVsbCBjb25uZWN0b3IuXHJcbiAqL1xuXG52YXIgTnVsbENvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICBfaW5oZXJpdHMoTnVsbENvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOdWxsQ29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBOdWxsQ29ubmVjdG9yKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cclxuICAgICAqL1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZnJlc2ggY29ubmVjdGlvbi5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhOdWxsQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7fSAvL1xuXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbENoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbFByaXZhdGVDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwcmVzZW5jZUNoYW5uZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgTnVsbFByZXNlbmNlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge30gLy9cblxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxlYXZlQ2hhbm5lbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge30gLy9cblxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzb2NrZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgIHJldHVybiAnZmFrZS1zb2NrZXQtaWQnO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHsvL1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOdWxsQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyB0aGUgcHJpbWFyeSBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggYnJvYWRjYXN0aW5nLlxyXG4gKi9cblxudmFyIEVjaG8gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXHJcbiAgICovXG4gIGZ1bmN0aW9uIEVjaG8ob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFY2hvKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jb25uZWN0KCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy53aXRob3V0SW50ZXJjZXB0b3JzKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVySW50ZXJjZXB0b3JzKCk7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFY2hvLCBbe1xuICAgIGtleTogXCJjaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwoX2NoYW5uZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5jaGFubmVsKF9jaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29ubmVjdGlvbi5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAncHVzaGVyJykge1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBQdXNoZXJDb25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdzb2NrZXQuaW8nKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFNvY2tldElvQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnbnVsbCcpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgTnVsbENvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgdGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyKHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdCBmcm9tIHRoZSBFY2hvIHNlcnZlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzY29ubmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgdGhpcy5jb25uZWN0b3IuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiam9pblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luKGNoYW5uZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsZWF2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShjaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rvci5sZWF2ZShjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGVhdmVDaGFubmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlQ2hhbm5lbChjaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rvci5sZWF2ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpc3RlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IubGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInByaXZhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCBhIHByaXZhdGUgZW5jcnlwdGVkIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5jcnlwdGVkUHJpdmF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNyeXB0ZWRQcml2YXRlKGNoYW5uZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5lbmNyeXB0ZWRQcml2YXRlQ2hhbm5lbChjaGFubmVsKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIFNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNvY2tldElkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgM3JkIHBhcnR5IHJlcXVlc3QgaW50ZXJjZXB0aW9ycy4gVGhlc2UgYXJlIHVzZWQgdG8gYXV0b21hdGljYWxseVxyXG4gICAgICogc2VuZCBhIGNvbm5lY3Rpb25zIHNvY2tldCBpZCB0byBhIExhcmF2ZWwgYXBwIHdpdGggYSBYLVNvY2tldC1JZCBoZWFkZXIuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlZ2lzdGVySW50ZXJjZXB0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJjZXB0b3JzKCkge1xuICAgICAgaWYgKHR5cGVvZiBWdWUgPT09ICdmdW5jdGlvbicgJiYgVnVlLmh0dHApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGF4aW9zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBWdWUgSFRUUCBpbnRlcmNlcHRvciB0byBhZGQgdGhlIFgtU29ja2V0LUlEIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICBpZiAoX3RoaXMuc29ja2V0SWQoKSkge1xuICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBBeGlvcyBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBqUXVlcnkgQWpheFByZWZpbHRlciB0byBhZGQgdGhlIFgtU29ja2V0LUlEIGhlYWRlci5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVnaXN0ZXJqUXVlcnlBamF4U2V0dXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiBqUXVlcnkuYWpheCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBqUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbiAob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCB4aHIpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVNvY2tldC1JZCcsIF90aGlzMy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFY2hvO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFY2hvO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qIVxuICogUHVzaGVyIEphdmFTY3JpcHQgTGlicmFyeSB2Ny4wLjNcbiAqIGh0dHBzOi8vcHVzaGVyLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgUHVzaGVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2VuY2UuXG4gKi9cblxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlB1c2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIGJhc2U2NCBpbXBsZW1lbnRzIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbi8vIEludmFsaWQgY2hhcmFjdGVyIHVzZWQgaW4gZGVjb2RpbmcgdG8gaW5kaWNhdGVcbi8vIHRoYXQgdGhlIGNoYXJhY3RlciB0byBkZWNvZGUgaXMgb3V0IG9mIHJhbmdlIG9mXG4vLyBhbHBoYWJldCBhbmQgY2Fubm90IGJlIGRlY29kZWQuXG52YXIgSU5WQUxJRF9CWVRFID0gMjU2O1xuLyoqXG4gKiBJbXBsZW1lbnRzIHN0YW5kYXJkIEJhc2U2NCBlbmNvZGluZy5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyhkY2hlc3QpOiBtZXRob2RzIHRvIGVuY29kZSBjaHVuay1ieS1jaHVuay5cbiAgICBmdW5jdGlvbiBDb2RlcihfcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICBpZiAoX3BhZGRpbmdDaGFyYWN0ZXIgPT09IHZvaWQgMCkgeyBfcGFkZGluZ0NoYXJhY3RlciA9IFwiPVwiOyB9XG4gICAgICAgIHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgPSBfcGFkZGluZ0NoYXJhY3RlcjtcbiAgICB9XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA4ICsgNSkgLyA2IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGxlbmd0aCArIDIpIC8gMyAqIDQgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBvdXQgPSBcIlwiO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgZGF0YS5sZW5ndGggLSAyOyBpICs9IDMpIHtcbiAgICAgICAgICAgIHZhciBjID0gKGRhdGFbaV0gPDwgMTYpIHwgKGRhdGFbaSArIDFdIDw8IDgpIHwgKGRhdGFbaSArIDJdKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDEgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAwICogNikgJiA2Myk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZnQgPSBkYXRhLmxlbmd0aCAtIGk7XG4gICAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAobGVmdCA9PT0gMiA/IGRhdGFbaSArIDFdIDw8IDggOiAwKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgaWYgKGxlZnQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAobGVuZ3RoICogNiArIDcpIC8gOCB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbmd0aCAvIDQgKiAzIHwgMDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4RGVjb2RlZExlbmd0aChzLmxlbmd0aCAtIHRoaXMuX2dldFBhZGRpbmdMZW5ndGgocykpO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWRkaW5nTGVuZ3RoID0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoIC0gcGFkZGluZ0xlbmd0aDtcbiAgICAgICAgdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KHRoaXMubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpKTtcbiAgICAgICAgdmFyIG9wID0gMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgaGF2ZUJhZCA9IDA7XG4gICAgICAgIHZhciB2MCA9IDAsIHYxID0gMCwgdjIgPSAwLCB2MyA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICB2MCA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAwKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYyICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgdjEgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMSkpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYwIDw8IDIpIHwgKHYxID4+PiA0KTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjAgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYxICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdjIgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMikpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAzKSB7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjIgPDwgNikgfCB2MztcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjMgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhdmVCYWQgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgY2hhcmFjdGVycyBmb3IgZGVjb2RpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIC8vIFN0YW5kYXJkIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzLFxuICAgIC8vIHdoaWNoIHdlIG5lZWQgdG8gY29udmVydCBiZXR3ZWVuLlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgKyAgIC9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0MyAgNDdcbiAgICAvL1xuICAgIC8vIEVuY29kZSA2IGJpdHMgaW4gYiBpbnRvIGEgbmV3IGNoYXJhY3Rlci5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAvLyBFbmNvZGluZyB1c2VzIGNvbnN0YW50IHRpbWUgb3BlcmF0aW9ucyBhcyBmb2xsb3dzOlxuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBEZWZpbmUgY29tcGFyaXNvbiBvZiBBIHdpdGggQiB1c2luZyAoQSAtIEIpID4+PiA4OlxuICAgICAgICAvLyAgICAgICAgICBpZiBBID4gQiwgdGhlbiByZXN1bHQgaXMgcG9zaXRpdmUgaW50ZWdlclxuICAgICAgICAvLyAgICAgICAgICBpZiBBIDw9IEIsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMi4gRGVmaW5lIHNlbGVjdGlvbiBvZiBDIG9yIDAgdXNpbmcgYml0d2lzZSBBTkQ6IFggJiBDOlxuICAgICAgICAvLyAgICAgICAgICBpZiBYID09IDAsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy8gICAgICAgICAgaWYgWCAhPSAwLCB0aGVuIHJlc3VsdCBpcyBDXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDMuIFN0YXJ0IHdpdGggdGhlIHNtYWxsZXN0IGNvbXBhcmlzb24gKGIgPj0gMCksIHdoaWNoIGlzIGFsd2F5c1xuICAgICAgICAvLyAgICB0cnVlLCBzbyBzZXQgdGhlIHJlc3VsdCB0byB0aGUgc3RhcnRpbmcgQVNDSUkgdmFsdWUgKDY1KS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gNC4gQ29udGludWUgY29tcGFyaW5nIGIgdG8gaGlnaGVyIEFTQ0lJIHZhbHVlcywgYW5kIHNlbGVjdGluZ1xuICAgICAgICAvLyAgICB6ZXJvIGlmIGNvbXBhcmlzb24gaXNuJ3QgdHJ1ZSwgb3RoZXJ3aXNlIHNlbGVjdGluZyBhIHZhbHVlXG4gICAgICAgIC8vICAgIHRvIGFkZCB0byByZXN1bHQsIHdoaWNoOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICBhKSB1bmRvZXMgdGhlIHByZXZpb3VzIGFkZGl0aW9uXG4gICAgICAgIC8vICAgICAgICAgIGIpIHByb3ZpZGVzIG5ldyB2YWx1ZSB0byBhZGRcbiAgICAgICAgLy9cbiAgICAgICAgdmFyIHJlc3VsdCA9IGI7XG4gICAgICAgIC8vIGIgPj0gMFxuICAgICAgICByZXN1bHQgKz0gNjU7XG4gICAgICAgIC8vIGIgPiAyNVxuICAgICAgICByZXN1bHQgKz0gKCgyNSAtIGIpID4+PiA4KSAmICgoMCAtIDY1KSAtIDI2ICsgOTcpO1xuICAgICAgICAvLyBiID4gNTFcbiAgICAgICAgcmVzdWx0ICs9ICgoNTEgLSBiKSA+Pj4gOCkgJiAoKDI2IC0gOTcpIC0gNTIgKyA0OCk7XG4gICAgICAgIC8vIGIgPiA2MVxuICAgICAgICByZXN1bHQgKz0gKCg2MSAtIGIpID4+PiA4KSAmICgoNTIgLSA0OCkgLSA2MiArIDQzKTtcbiAgICAgICAgLy8gYiA+IDYyXG4gICAgICAgIHJlc3VsdCArPSAoKDYyIC0gYikgPj4+IDgpICYgKCg2MiAtIDQzKSAtIDYzICsgNDcpO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShyZXN1bHQpO1xuICAgIH07XG4gICAgLy8gRGVjb2RlIGEgY2hhcmFjdGVyIGNvZGUgaW50byBhIGJ5dGUuXG4gICAgLy8gTXVzdCByZXR1cm4gMjU2IGlmIGNoYXJhY3RlciBpcyBvdXQgb2YgYWxwaGFiZXQgcmFuZ2UuXG4gICAgQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gRGVjb2Rpbmcgd29ya3Mgc2ltaWxhciB0byBlbmNvZGluZzogdXNpbmcgdGhlIHNhbWUgY29tcGFyaXNvblxuICAgICAgICAvLyBmdW5jdGlvbiwgYnV0IG5vdyBpdCB3b3JrcyBvbiByYW5nZXM6IHJlc3VsdCBpcyBhbHdheXMgaW5jcmVtZW50ZWRcbiAgICAgICAgLy8gYnkgdmFsdWUsIGJ1dCB0aGlzIHZhbHVlIGJlY29tZXMgemVybyBpZiB0aGUgcmFuZ2UgaXMgbm90XG4gICAgICAgIC8vIHNhdGlzZmllZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRGVjb2Rpbmcgc3RhcnRzIHdpdGggaW52YWxpZCB2YWx1ZSwgMjU2LCB3aGljaCBpcyB0aGVuXG4gICAgICAgIC8vIHN1YnRyYWN0ZWQgd2hlbiB0aGUgcmFuZ2UgaXMgc2F0aXNmaWVkLiBJZiBub25lIG9mIHRoZSByYW5nZXNcbiAgICAgICAgLy8gYXBwbHksIHRoZSBmdW5jdGlvbiByZXR1cm5zIDI1Niwgd2hpY2ggaXMgdGhlbiBjaGVja2VkIGJ5XG4gICAgICAgIC8vIHRoZSBjYWxsZXIgdG8gdGhyb3cgZXJyb3IuXG4gICAgICAgIHZhciByZXN1bHQgPSBJTlZBTElEX0JZVEU7IC8vIHN0YXJ0IHdpdGggaW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gYyA9PSA0MyAoYyA+IDQyIGFuZCBjIDwgNDQpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0MiAtIGMpICYgKGMgLSA0NCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQzICsgNjIpO1xuICAgICAgICAvLyBjID09IDQ3IChjID4gNDYgYW5kIGMgPCA0OClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ2IC0gYykgJiAoYyAtIDQ4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDcgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLl9nZXRQYWRkaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSAwO1xuICAgICAgICBpZiAodGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc1tpXSAhPT0gdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMubGVuZ3RoIDwgNCB8fCBwYWRkaW5nTGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgcGFkZGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFkZGluZ0xlbmd0aDtcbiAgICB9O1xuICAgIHJldHVybiBDb2Rlcjtcbn0oKSk7XG5leHBvcnRzLkNvZGVyID0gQ29kZXI7XG52YXIgc3RkQ29kZXIgPSBuZXcgQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmVuY29kZShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuZnVuY3Rpb24gZGVjb2RlKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vKipcbiAqIEltcGxlbWVudHMgVVJMLXNhZmUgQmFzZTY0IGVuY29kaW5nLlxuICogKFNhbWUgYXMgQmFzZTY0LCBidXQgJysnIGlzIHJlcGxhY2VkIHdpdGggJy0nLCBhbmQgJy8nIHdpdGggJ18nKS5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgVVJMU2FmZUNvZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVUkxTYWZlQ29kZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVVJMU2FmZUNvZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8vIFVSTC1zYWZlIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzOlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgLSAgIF9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0NSAgOTVcbiAgICAvL1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDUpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDUpIC0gNjMgKyA5NSk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICBVUkxTYWZlQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTtcbiAgICAgICAgLy8gYyA9PSA0NSAoYyA+IDQ0IGFuZCBjIDwgNDYpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0NCAtIGMpICYgKGMgLSA0NikpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ1ICsgNjIpO1xuICAgICAgICAvLyBjID09IDk1IChjID4gOTQgYW5kIGMgPCA5NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk0IC0gYykgJiAoYyAtIDk2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTUgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIFVSTFNhZmVDb2Rlcjtcbn0oQ29kZXIpKTtcbmV4cG9ydHMuVVJMU2FmZUNvZGVyID0gVVJMU2FmZUNvZGVyO1xudmFyIHVybFNhZmVDb2RlciA9IG5ldyBVUkxTYWZlQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZVVSTFNhZmUoZGF0YSkge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGVVUkxTYWZlID0gZW5jb2RlVVJMU2FmZTtcbmZ1bmN0aW9uIGRlY29kZVVSTFNhZmUocykge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGVVUkxTYWZlID0gZGVjb2RlVVJMU2FmZTtcbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMubWF4RGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMuZGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmRlY29kZWRMZW5ndGgocyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0LmpzLm1hcFxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSB1dGY4IGltcGxlbWVudHMgVVRGLTggZW5jb2RpbmcgYW5kIGRlY29kaW5nLlxuICovXG52YXIgSU5WQUxJRF9VVEYxNiA9IFwidXRmODogaW52YWxpZCBzdHJpbmdcIjtcbnZhciBJTlZBTElEX1VURjggPSBcInV0Zjg6IGludmFsaWQgc291cmNlIGVuY29kaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04IGJ5dGUgYXJyYXkuXG4gKiBUaHJvd3MgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaGFzIGludmFsaWQgVVRGLTE2IGVuY29kaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUocykge1xuICAgIC8vIENhbGN1bGF0ZSByZXN1bHQgbGVuZ3RoIGFuZCBhbGxvY2F0ZSBvdXRwdXQgYXJyYXkuXG4gICAgLy8gZW5jb2RlZExlbmd0aCgpIGFsc28gdmFsaWRhdGVzIHN0cmluZyBhbmQgdGhyb3dzIGVycm9ycyxcbiAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHJlcGVhdCB2YWxpZGF0aW9uIGhlcmUuXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGVuY29kZWRMZW5ndGgocykpO1xuICAgIHZhciBwb3MgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGMwIHwgYyA+PiA2O1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHhkODAwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhlMCB8IGMgPj4gMTI7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7IC8vIGdldCBvbmUgbW9yZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGMgPSAoYyAmIDB4M2ZmKSA8PCAxMDtcbiAgICAgICAgICAgIGMgfD0gcy5jaGFyQ29kZUF0KGkpICYgMHgzZmY7XG4gICAgICAgICAgICBjICs9IDB4MTAwMDA7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhmMCB8IGMgPj4gMTg7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDEyKSAmIDB4M2Y7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgcmVxdWlyZWQgdG8gZW5jb2RlIHRoZSBnaXZlbiBzdHJpbmcgaW50byBVVEYtOC5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZWRMZW5ndGgocykge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPD0gMHhkZmZmKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7IC8vIFwiZWF0XCIgbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHJlc3VsdCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGMTYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmVuY29kZWRMZW5ndGggPSBlbmNvZGVkTGVuZ3RoO1xuLyoqXG4gKiBEZWNvZGVzIHRoZSBnaXZlbiBieXRlIGFycmF5IGZyb20gVVRGLTggaW50byBhIHN0cmluZy5cbiAqIFRocm93cyBpZiBlbmNvZGluZyBpcyBpbnZhbGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoYXJyKSB7XG4gICAgdmFyIGNoYXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGIgPSBhcnJbaV07XG4gICAgICAgIGlmIChiICYgMHg4MCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChiIDwgMHhlMCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMSBtb3JlIGJ5dGUuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDFmKSA8PCA2IHwgKG4xICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGYwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAyIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTIgfCAobjEgJiAweDNmKSA8PCA2IHwgKG4yICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiIDwgMHhmOCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMyBtb3JlIGJ5dGVzLlxuICAgICAgICAgICAgICAgIGlmIChpID49IGFyci5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjIgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjMgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODAgfHwgKG4yICYgMHhjMCkgIT09IDB4ODAgfHwgKG4zICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MGYpIDw8IDE4IHwgKG4xICYgMHgzZikgPDwgMTIgfCAobjIgJiAweDNmKSA8PCA2IHwgKG4zICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHgxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPCBtaW4gfHwgKGIgPj0gMHhkODAwICYmIGIgPD0gMHhkZmZmKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPj0gMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBwYWlyLlxuICAgICAgICAgICAgICAgIGlmIChiID4gMHgxMGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICBjaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwIHwgKGIgPj4gMTApKSk7XG4gICAgICAgICAgICAgICAgYiA9IDB4ZGMwMCB8IChiICYgMHgzZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4LmpzLm1hcFxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gcmVxdWlyZWQgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyByZXF1aXJlKCdwdXNoZXInKS5kZWZhdWx0IGV0Yy5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKS5kZWZhdWx0O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeS50c1xudmFyIFNjcmlwdFJlY2VpdmVyRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KHByZWZpeCwgbmFtZSkge1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDA7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBTY3JpcHRSZWNlaXZlckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxhc3RJZCsrO1xuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5sYXN0SWQ7XG4gICAgICAgIHZhciBpZCA9IHRoaXMucHJlZml4ICsgbnVtYmVyO1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZSArICdbJyArIG51bWJlciArICddJztcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgY2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXNbbnVtYmVyXSA9IGNhbGxiYWNrV3JhcHBlcjtcbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyOiBudW1iZXIsIGlkOiBpZCwgbmFtZTogbmFtZSwgY2FsbGJhY2s6IGNhbGxiYWNrV3JhcHBlciB9O1xuICAgIH07XG4gICAgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAocmVjZWl2ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbcmVjZWl2ZXIubnVtYmVyXTtcbiAgICB9O1xuICAgIHJldHVybiBTY3JpcHRSZWNlaXZlckZhY3Rvcnk7XG59KCkpO1xuXG52YXIgU2NyaXB0UmVjZWl2ZXJzID0gbmV3IFNjcmlwdFJlY2VpdmVyRmFjdG9yeSgnX3B1c2hlcl9zY3JpcHRfJywgJ1B1c2hlci5TY3JpcHRSZWNlaXZlcnMnKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9kZWZhdWx0cy50c1xudmFyIERlZmF1bHRzID0ge1xuICAgIFZFUlNJT046IFwiNy4wLjNcIixcbiAgICBQUk9UT0NPTDogNyxcbiAgICB3c1BvcnQ6IDgwLFxuICAgIHdzc1BvcnQ6IDQ0MyxcbiAgICB3c1BhdGg6ICcnLFxuICAgIGh0dHBIb3N0OiAnc29ja2pzLnB1c2hlci5jb20nLFxuICAgIGh0dHBQb3J0OiA4MCxcbiAgICBodHRwc1BvcnQ6IDQ0MyxcbiAgICBodHRwUGF0aDogJy9wdXNoZXInLFxuICAgIHN0YXRzX2hvc3Q6ICdzdGF0cy5wdXNoZXIuY29tJyxcbiAgICBhdXRoRW5kcG9pbnQ6ICcvcHVzaGVyL2F1dGgnLFxuICAgIGF1dGhUcmFuc3BvcnQ6ICdhamF4JyxcbiAgICBhY3Rpdml0eVRpbWVvdXQ6IDEyMDAwMCxcbiAgICBwb25nVGltZW91dDogMzAwMDAsXG4gICAgdW5hdmFpbGFibGVUaW1lb3V0OiAxMDAwMCxcbiAgICBjbHVzdGVyOiAnbXQxJyxcbiAgICBjZG5faHR0cDogXCJodHRwOi8vanMucHVzaGVyLmNvbVwiLFxuICAgIGNkbl9odHRwczogXCJodHRwczovL2pzLnB1c2hlci5jb21cIixcbiAgICBkZXBlbmRlbmN5X3N1ZmZpeDogXCJcIlxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRlZmF1bHRzID0gKERlZmF1bHRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9kZXBlbmRlbmN5X2xvYWRlci50c1xuXG5cbnZhciBkZXBlbmRlbmN5X2xvYWRlcl9EZXBlbmRlbmN5TG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TG9hZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZWNlaXZlcnMgPSBvcHRpb25zLnJlY2VpdmVycyB8fCBTY3JpcHRSZWNlaXZlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHt9O1xuICAgIH1cbiAgICBEZXBlbmRlbmN5TG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYubG9hZGluZ1tuYW1lXSAmJiBzZWxmLmxvYWRpbmdbbmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gcnVudGltZS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHNlbGYuZ2V0UGF0aChuYW1lLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBzZWxmLnJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlcnMucmVtb3ZlKHJlY2VpdmVyKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBzZWxmLmxvYWRpbmdbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmxvYWRpbmdbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbiAod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0oZXJyb3IsIHN1Y2Nlc3NDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChyZWNlaXZlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgY2RuO1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSBydW50aW1lLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGlmICgob3B0aW9ucyAmJiBvcHRpb25zLnVzZVRMUykgfHwgcHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHBzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2RuID0gdGhpcy5vcHRpb25zLmNkbl9odHRwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZG4ucmVwbGFjZSgvXFwvKiQvLCAnJykgKyAnLycgKyB0aGlzLm9wdGlvbnMudmVyc2lvbjtcbiAgICB9O1xuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmdldFBhdGggPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb290KG9wdGlvbnMpICsgJy8nICsgbmFtZSArIHRoaXMub3B0aW9ucy5zdWZmaXggKyAnLmpzJztcbiAgICB9O1xuICAgIHJldHVybiBEZXBlbmRlbmN5TG9hZGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRlcGVuZGVuY3lfbG9hZGVyID0gKGRlcGVuZGVuY3lfbG9hZGVyX0RlcGVuZGVuY3lMb2FkZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2RlcGVuZGVuY2llcy50c1xuXG5cblxudmFyIERlcGVuZGVuY2llc1JlY2VpdmVycyA9IG5ldyBTY3JpcHRSZWNlaXZlckZhY3RvcnkoJ19wdXNoZXJfZGVwZW5kZW5jaWVzJywgJ1B1c2hlci5EZXBlbmRlbmNpZXNSZWNlaXZlcnMnKTtcbnZhciBEZXBlbmRlbmNpZXMgPSBuZXcgZGVwZW5kZW5jeV9sb2FkZXIoe1xuICAgIGNkbl9odHRwOiBkZWZhdWx0cy5jZG5faHR0cCxcbiAgICBjZG5faHR0cHM6IGRlZmF1bHRzLmNkbl9odHRwcyxcbiAgICB2ZXJzaW9uOiBkZWZhdWx0cy5WRVJTSU9OLFxuICAgIHN1ZmZpeDogZGVmYXVsdHMuZGVwZW5kZW5jeV9zdWZmaXgsXG4gICAgcmVjZWl2ZXJzOiBEZXBlbmRlbmNpZXNSZWNlaXZlcnNcbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3VybF9zdG9yZS50c1xudmFyIHVybFN0b3JlID0ge1xuICAgIGJhc2VVcmw6ICdodHRwczovL3B1c2hlci5jb20nLFxuICAgIHVybHM6IHtcbiAgICAgICAgYXV0aGVudGljYXRpb25FbmRwb2ludDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2F1dGhlbnRpY2F0aW5nX3VzZXJzJ1xuICAgICAgICB9LFxuICAgICAgICBqYXZhc2NyaXB0UXVpY2tTdGFydDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2phdmFzY3JpcHRfcXVpY2tfc3RhcnQnXG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJpbmdDbGllbnRFdmVudHM6IHtcbiAgICAgICAgICAgIHBhdGg6ICcvZG9jcy9jbGllbnRfYXBpX2d1aWRlL2NsaWVudF9ldmVudHMjdHJpZ2dlci1ldmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIGVuY3J5cHRlZENoYW5uZWxTdXBwb3J0OiB7XG4gICAgICAgICAgICBmdWxsVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1c2hlci9wdXNoZXItanMvdHJlZS9jYzQ5MTAxNTM3MWE0YmRlNTc0M2QxYzg3YTBmYmFjMGZlYjUzMTk1I2VuY3J5cHRlZC1jaGFubmVsLXN1cHBvcnQnXG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIGJ1aWxkTG9nU3VmZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB1cmxQcmVmaXggPSAnU2VlOic7XG4gICAgdmFyIHVybE9iaiA9IHVybFN0b3JlLnVybHNba2V5XTtcbiAgICBpZiAoIXVybE9iailcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciB1cmw7XG4gICAgaWYgKHVybE9iai5mdWxsVXJsKSB7XG4gICAgICAgIHVybCA9IHVybE9iai5mdWxsVXJsO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmxPYmoucGF0aCkge1xuICAgICAgICB1cmwgPSB1cmxTdG9yZS5iYXNlVXJsICsgdXJsT2JqLnBhdGg7XG4gICAgfVxuICAgIGlmICghdXJsKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHVybFByZWZpeCArIFwiIFwiICsgdXJsO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHVybF9zdG9yZSA9ICh7IGJ1aWxkTG9nU3VmZml4OiBidWlsZExvZ1N1ZmZpeCB9KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9lcnJvcnMudHNcbnZhciBfX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBCYWRFdmVudE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYWRFdmVudE5hbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFkRXZlbnROYW1lKG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEJhZEV2ZW50TmFtZTtcbn0oRXJyb3IpKTtcblxudmFyIFJlcXVlc3RUaW1lZE91dCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlcXVlc3RUaW1lZE91dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0VGltZWRPdXQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUmVxdWVzdFRpbWVkT3V0O1xufShFcnJvcikpO1xuXG52YXIgVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3cgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc3BvcnRQcmlvcml0eVRvb0xvdywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyhtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdztcbn0oRXJyb3IpKTtcblxudmFyIFRyYW5zcG9ydENsb3NlZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zcG9ydENsb3NlZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRDbG9zZWQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNwb3J0Q2xvc2VkO1xufShFcnJvcikpO1xuXG52YXIgVW5zdXBwb3J0ZWRGZWF0dXJlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRGZWF0dXJlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkRmVhdHVyZShtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBVbnN1cHBvcnRlZEZlYXR1cmU7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZFRyYW5zcG9ydCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3VwcG9ydGVkVHJhbnNwb3J0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkVHJhbnNwb3J0KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkVHJhbnNwb3J0O1xufShFcnJvcikpO1xuXG52YXIgVW5zdXBwb3J0ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3VwcG9ydGVkU3RyYXRlZ3ksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRTdHJhdGVneShtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBVbnN1cHBvcnRlZFN0cmF0ZWd5O1xufShFcnJvcikpO1xuXG52YXIgSFRUUEF1dGhFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUVFBBdXRoRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSFRUUEF1dGhFcnJvcihzdGF0dXMsIG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSFRUUEF1dGhFcnJvcjtcbn0oRXJyb3IpKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2F1dGgveGhyX2F1dGgudHNcblxuXG5cbnZhciBhamF4ID0gZnVuY3Rpb24gKGNvbnRleHQsIHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcywgeGhyO1xuICAgIHhociA9IHJ1bnRpbWUuY3JlYXRlWEhSKCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBzZWxmLm9wdGlvbnMuYXV0aEVuZHBvaW50LCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGZvciAodmFyIGhlYWRlck5hbWUgaW4gdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIHRoaXMuYXV0aE9wdGlvbnMuaGVhZGVyc1toZWFkZXJOYW1lXSk7XG4gICAgfVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoMjAwLCAnSlNPTiByZXR1cm5lZCBmcm9tIGF1dGggZW5kcG9pbnQgd2FzIGludmFsaWQsIHlldCBzdGF0dXMgY29kZSB3YXMgMjAwLiBEYXRhIHdhczogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUZXh0KSwgeyBhdXRoOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRoZW50aWNhdGlvbkVuZHBvaW50Jyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoeGhyLnN0YXR1cywgJ1VuYWJsZSB0byByZXRyaWV2ZSBhdXRoIHN0cmluZyBmcm9tIGF1dGggZW5kcG9pbnQgLSAnICtcbiAgICAgICAgICAgICAgICAgICAgKFwicmVjZWl2ZWQgc3RhdHVzOiBcIiArIHhoci5zdGF0dXMgKyBcIiBmcm9tIFwiICsgc2VsZi5vcHRpb25zLmF1dGhFbmRwb2ludCArIFwiLiBcIikgK1xuICAgICAgICAgICAgICAgICAgICAoXCJDbGllbnRzIG11c3QgYmUgYXV0aGVudGljYXRlZCB0byBqb2luIHByaXZhdGUgb3IgcHJlc2VuY2UgY2hhbm5lbHMuIFwiICsgc3VmZml4KSksIHsgYXV0aDogJycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKHRoaXMuY29tcG9zZVF1ZXJ5KHNvY2tldElkKSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB4aHJfYXV0aCA9IChhamF4KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9iYXNlNjQudHNcbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgcmV0dXJuIGJ0b2EodXRvYihzKSk7XG59XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBiNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbnZhciBiNjR0YWIgPSB7fTtcbmZvciAodmFyIGJhc2U2NF9pID0gMCwgbCA9IGI2NGNoYXJzLmxlbmd0aDsgYmFzZTY0X2kgPCBsOyBiYXNlNjRfaSsrKSB7XG4gICAgYjY0dGFiW2I2NGNoYXJzLmNoYXJBdChiYXNlNjRfaSldID0gYmFzZTY0X2k7XG59XG52YXIgY2JfdXRvYiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBjYyA8IDB4ODBcbiAgICAgICAgPyBjXG4gICAgICAgIDogY2MgPCAweDgwMFxuICAgICAgICAgICAgPyBmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSlcbiAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gNikgJiAweDNmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpO1xufTtcbnZhciB1dG9iID0gZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gdS5yZXBsYWNlKC9bXlxceDAwLVxceDdGXS9nLCBjYl91dG9iKTtcbn07XG52YXIgY2JfZW5jb2RlID0gZnVuY3Rpb24gKGNjYykge1xuICAgIHZhciBwYWRsZW4gPSBbMCwgMiwgMV1bY2NjLmxlbmd0aCAlIDNdO1xuICAgIHZhciBvcmQgPSAoY2NjLmNoYXJDb2RlQXQoMCkgPDwgMTYpIHxcbiAgICAgICAgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOCkgfFxuICAgICAgICAoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApO1xuICAgIHZhciBjaGFycyA9IFtcbiAgICAgICAgYjY0Y2hhcnMuY2hhckF0KG9yZCA+Pj4gMTgpLFxuICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuICAgICAgICBwYWRsZW4gPj0gMiA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiA2KSAmIDYzKSxcbiAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpXG4gICAgXTtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG59O1xudmFyIGJ0b2EgPSB3aW5kb3cuYnRvYSB8fFxuICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgY2JfZW5jb2RlKTtcbiAgICB9O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3RpbWVycy9hYnN0cmFjdF90aW1lci50c1xudmFyIFRpbWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW1lcihzZXQsIGNsZWFyLCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhciA9IGNsZWFyO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVyID0gY2FsbGJhY2soX3RoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuICAgIFRpbWVyLnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyICE9PSBudWxsO1xuICAgIH07XG4gICAgVGltZXIucHJvdG90eXBlLmVuc3VyZUFib3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUaW1lcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhYnN0cmFjdF90aW1lciA9IChUaW1lcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdGltZXJzL2luZGV4LnRzXG52YXIgdGltZXJzX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gdGltZXJzX2NsZWFyVGltZW91dCh0aW1lcikge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xufVxuZnVuY3Rpb24gdGltZXJzX2NsZWFySW50ZXJ2YWwodGltZXIpIHtcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG59XG52YXIgT25lT2ZmVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRpbWVyc19leHRlbmRzKE9uZU9mZlRpbWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9uZU9mZlRpbWVyKGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgc2V0VGltZW91dCwgdGltZXJzX2NsZWFyVGltZW91dCwgZGVsYXksIGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gT25lT2ZmVGltZXI7XG59KGFic3RyYWN0X3RpbWVyKSk7XG5cbnZhciBQZXJpb2RpY1RpbWVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0aW1lcnNfZXh0ZW5kcyhQZXJpb2RpY1RpbWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBlcmlvZGljVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzZXRJbnRlcnZhbCwgdGltZXJzX2NsZWFySW50ZXJ2YWwsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBQZXJpb2RpY1RpbWVyO1xufShhYnN0cmFjdF90aW1lcikpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbC50c1xuXG52YXIgVXRpbCA9IHtcbiAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKERhdGUubm93KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVmZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IE9uZU9mZlRpbWVyKDAsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIG1ldGhvZDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJvdW5kQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RbbmFtZV0uYXBwbHkob2JqZWN0LCBib3VuZEFyZ3VtZW50cy5jb25jYXQoYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHV0aWwgPSAoVXRpbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvY29sbGVjdGlvbnMudHNcblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBzb3VyY2VzW2ldO1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBleHRlbnNpb25zKSB7XG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uc1twcm9wZXJ0eV0gJiZcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gZXh0ZW5kKHRhcmdldFtwcm9wZXJ0eV0gfHwge30sIGV4dGVuc2lvbnNbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbnNpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KCkge1xuICAgIHZhciBtID0gWydQdXNoZXInXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG0ucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbS5wdXNoKHNhZmVKU09OU3RyaW5naWZ5KGFyZ3VtZW50c1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtLmpvaW4oJyA6ICcpO1xufVxuZnVuY3Rpb24gYXJyYXlJbmRleE9mKGFycmF5LCBpdGVtKSB7XG4gICAgdmFyIG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICBpZiAoYXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIG9iamVjdEFwcGx5KG9iamVjdCwgZikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGYob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZnVuY3Rpb24gYXBwbHkoYXJyYXksIGYsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGYuY2FsbChjb250ZXh0IHx8IHdpbmRvdywgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXAoYXJyYXksIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChmKGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtYXBPYmplY3Qob2JqZWN0LCBmKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBmKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gICAgdGVzdCA9XG4gICAgICAgIHRlc3QgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyT2JqZWN0KG9iamVjdCwgdGVzdCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICgodGVzdCAmJiB0ZXN0KHZhbHVlLCBrZXksIG9iamVjdCwgcmVzdWx0KSkgfHwgQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmxhdHRlbihvYmplY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBhbnkoYXJyYXksIHRlc3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3Rpb25zX2FsbChhcnJheSwgdGVzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuY29kZVBhcmFtc09iamVjdChkYXRhKSB7XG4gICAgcmV0dXJuIG1hcE9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2FmZUpTT05TdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSkge1xuICAgIHZhciBwYXJhbXMgPSBmaWx0ZXJPYmplY3QoZGF0YSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHZhciBxdWVyeSA9IG1hcChmbGF0dGVuKGVuY29kZVBhcmFtc09iamVjdChwYXJhbXMpKSwgdXRpbC5tZXRob2QoJ2pvaW4nLCAnPScpKS5qb2luKCcmJyk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gZGVjeWNsZU9iamVjdChvYmplY3QpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdLCBwYXRocyA9IFtdO1xuICAgIHJldHVybiAoZnVuY3Rpb24gZGVyZXoodmFsdWUsIHBhdGgpIHtcbiAgICAgICAgdmFyIGksIG5hbWUsIG51O1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0c1tpXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IHBhdGhzW2ldIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBudSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51W2ldID0gZGVyZXoodmFsdWVbaV0sIHBhdGggKyAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51W25hbWVdID0gZGVyZXoodmFsdWVbbmFtZV0sIHBhdGggKyAnWycgKyBKU09OLnN0cmluZ2lmeShuYW1lKSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51O1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KShvYmplY3QsICckJyk7XG59XG5mdW5jdGlvbiBzYWZlSlNPTlN0cmluZ2lmeShzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc291cmNlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRlY3ljbGVPYmplY3Qoc291cmNlKSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2xvZ2dlci50c1xuXG5cbnZhciBsb2dnZXJfTG9nZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2csIGFyZ3MpO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nV2FybiwgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nRXJyb3IsIGFyZ3MpO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5nbG9iYWxMb2dXYXJuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5nbG9iYWxMb2dFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZ1dhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGRlZmF1bHRMb2dnaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBzdHJpbmdpZnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKGNvcmVfcHVzaGVyLmxvZykge1xuICAgICAgICAgICAgY29yZV9wdXNoZXIubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvcmVfcHVzaGVyLmxvZ1RvQ29uc29sZSkge1xuICAgICAgICAgICAgdmFyIGxvZyA9IGRlZmF1bHRMb2dnaW5nRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExvZ2dlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBsb2dnZXIgPSAobmV3IGxvZ2dlcl9Mb2dnZXIoKSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9hdXRoL2pzb25wX2F1dGgudHNcblxudmFyIGpzb25wID0gZnVuY3Rpb24gKGNvbnRleHQsIHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsb2dnZXIud2FybignVG8gc2VuZCBoZWFkZXJzIHdpdGggdGhlIGF1dGggcmVxdWVzdCwgeW91IG11c3QgdXNlIEFKQVgsIHJhdGhlciB0aGFuIEpTT05QLicpO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2tOYW1lID0gY29udGV4dC5uZXh0QXV0aENhbGxiYWNrSUQudG9TdHJpbmcoKTtcbiAgICBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRCsrO1xuICAgIHZhciBkb2N1bWVudCA9IGNvbnRleHQuZ2V0RG9jdW1lbnQoKTtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29udGV4dC5hdXRoX2NhbGxiYWNrc1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICB2YXIgY2FsbGJhY2tfbmFtZSA9IFwiUHVzaGVyLmF1dGhfY2FsbGJhY2tzWydcIiArIGNhbGxiYWNrTmFtZSArIFwiJ11cIjtcbiAgICBzY3JpcHQuc3JjID1cbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dGhFbmRwb2ludCArXG4gICAgICAgICAgICAnP2NhbGxiYWNrPScgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGNhbGxiYWNrX25hbWUpICtcbiAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VRdWVyeShzb2NrZXRJZCk7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfYXV0aCA9IChqc29ucCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vc2NyaXB0X3JlcXVlc3QudHNcbnZhciBTY3JpcHRSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JpcHRSZXF1ZXN0KHNyYykge1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB9XG4gICAgU2NyaXB0UmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBlcnJvclN0cmluZyA9ICdFcnJvciBsb2FkaW5nICcgKyBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2VsZi5zY3JpcHQuaWQgPSByZWNlaXZlci5pZDtcbiAgICAgICAgc2VsZi5zY3JpcHQuc3JjID0gc2VsZi5zcmM7XG4gICAgICAgIHNlbGYuc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2VsZi5zY3JpcHQuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgIGlmIChzZWxmLnNjcmlwdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFzeW5jID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50ICYmXG4gICAgICAgICAgICAvb3BlcmEvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0LmlkID0gcmVjZWl2ZXIuaWQgKyAnX2Vycm9yJztcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQudGV4dCA9IHJlY2VpdmVyLm5hbWUgKyBcIignXCIgKyBlcnJvclN0cmluZyArIFwiJyk7XCI7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5hc3luYyA9IHNlbGYuZXJyb3JTY3JpcHQuYXN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNlbGYuc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICBpZiAoc2VsZi5lcnJvclNjcmlwdCkge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5lcnJvclNjcmlwdCwgc2VsZi5zY3JpcHQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JpcHRSZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY3JpcHQgJiYgdGhpcy5zY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXJyb3JTY3JpcHQgJiYgdGhpcy5lcnJvclNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lcnJvclNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yU2NyaXB0ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTY3JpcHRSZXF1ZXN0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNjcmlwdF9yZXF1ZXN0ID0gKFNjcmlwdFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2pzb25wX3JlcXVlc3QudHNcblxuXG52YXIganNvbnBfcmVxdWVzdF9KU09OUFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpTT05QUmVxdWVzdCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gYnVpbGRRdWVyeVN0cmluZyh0aGlzLmRhdGEpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy51cmwgKyAnLycgKyByZWNlaXZlci5udW1iZXIgKyAnPycgKyBxdWVyeTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcnVudGltZS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHVybCk7XG4gICAgICAgIHRoaXMucmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9O1xuICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpTT05QUmVxdWVzdDtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF9yZXF1ZXN0ID0gKGpzb25wX3JlcXVlc3RfSlNPTlBSZXF1ZXN0KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RpbWVsaW5lL2pzb25wX3RpbWVsaW5lLnRzXG5cblxudmFyIGdldEFnZW50ID0gZnVuY3Rpb24gKHNlbmRlciwgdXNlVExTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NoZW1lID0gJ2h0dHAnICsgKHVzZVRMUyA/ICdzJyA6ICcnKSArICc6Ly8nO1xuICAgICAgICB2YXIgdXJsID0gc2NoZW1lICsgKHNlbmRlci5ob3N0IHx8IHNlbmRlci5vcHRpb25zLmhvc3QpICsgc2VuZGVyLm9wdGlvbnMucGF0aDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZUpTT05QUmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIFNjcmlwdFJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgc2VuZGVyLmhvc3QgPSByZXN1bHQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9O1xufTtcbnZhciBqc29ucF90aW1lbGluZV9qc29ucCA9IHtcbiAgICBuYW1lOiAnanNvbnAnLFxuICAgIGdldEFnZW50OiBnZXRBZ2VudFxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGpzb25wX3RpbWVsaW5lID0gKGpzb25wX3RpbWVsaW5lX2pzb25wKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3VybF9zY2hlbWVzLnRzXG5cbmZ1bmN0aW9uIGdldEdlbmVyaWNVUkwoYmFzZVNjaGVtZSwgcGFyYW1zLCBwYXRoKSB7XG4gICAgdmFyIHNjaGVtZSA9IGJhc2VTY2hlbWUgKyAocGFyYW1zLnVzZVRMUyA/ICdzJyA6ICcnKTtcbiAgICB2YXIgaG9zdCA9IHBhcmFtcy51c2VUTFMgPyBwYXJhbXMuaG9zdFRMUyA6IHBhcmFtcy5ob3N0Tm9uVExTO1xuICAgIHJldHVybiBzY2hlbWUgKyAnOi8vJyArIGhvc3QgKyBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0R2VuZXJpY1BhdGgoa2V5LCBxdWVyeVN0cmluZykge1xuICAgIHZhciBwYXRoID0gJy9hcHAvJyArIGtleTtcbiAgICB2YXIgcXVlcnkgPSAnP3Byb3RvY29sPScgK1xuICAgICAgICBkZWZhdWx0cy5QUk9UT0NPTCArXG4gICAgICAgICcmY2xpZW50PWpzJyArXG4gICAgICAgICcmdmVyc2lvbj0nICtcbiAgICAgICAgZGVmYXVsdHMuVkVSU0lPTiArXG4gICAgICAgIChxdWVyeVN0cmluZyA/ICcmJyArIHF1ZXJ5U3RyaW5nIDogJycpO1xuICAgIHJldHVybiBwYXRoICsgcXVlcnk7XG59XG52YXIgd3MgPSB7XG4gICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBwYXRoID0gKHBhcmFtcy5odHRwUGF0aCB8fCAnJykgKyBnZXRHZW5lcmljUGF0aChrZXksICdmbGFzaD1mYWxzZScpO1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTCgnd3MnLCBwYXJhbXMsIHBhdGgpO1xuICAgIH1cbn07XG52YXIgaHR0cCA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8ICcvcHVzaGVyJykgKyBnZXRHZW5lcmljUGF0aChrZXkpO1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTCgnaHR0cCcsIHBhcmFtcywgcGF0aCk7XG4gICAgfVxufTtcbnZhciBzb2NranMgPSB7XG4gICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCdodHRwJywgcGFyYW1zLCBwYXJhbXMuaHR0cFBhdGggfHwgJy9wdXNoZXInKTtcbiAgICB9LFxuICAgIGdldFBhdGg6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1BhdGgoa2V5KTtcbiAgICB9XG59O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS50c1xuXG52YXIgY2FsbGJhY2tfcmVnaXN0cnlfQ2FsbGJhY2tSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FsbGJhY2tSZWdpc3RyeSgpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgfVxuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDoga2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgYXBwbHkobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbbmFtZV0gPSBmaWx0ZXIodGhpcy5fY2FsbGJhY2tzW25hbWVdIHx8IFtdLCBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKGNhbGxiYWNrICYmIGNhbGxiYWNrICE9PSBiaW5kaW5nLmZuKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBiaW5kaW5nLmNvbnRleHQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZUFsbENhbGxiYWNrcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2FsbGJhY2tfcmVnaXN0cnkgPSAoY2FsbGJhY2tfcmVnaXN0cnlfQ2FsbGJhY2tSZWdpc3RyeSk7XG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuICAgIHJldHVybiAnXycgKyBuYW1lO1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2V2ZW50cy9kaXNwYXRjaGVyLnRzXG5cblxudmFyIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcihmYWlsVGhyb3VnaCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBjYWxsYmFja19yZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWlsVGhyb3VnaCA9IGZhaWxUaHJvdWdoO1xuICAgIH1cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IGZpbHRlcih0aGlzLmdsb2JhbF9jYWxsYmFja3MgfHwgW10sIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYWxsYmFjazsgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uZm4uYXBwbHkoY2FsbGJhY2tzW2ldLmNvbnRleHQgfHwgd2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZhaWxUaHJvdWdoKSB7XG4gICAgICAgICAgICB0aGlzLmZhaWxUaHJvdWdoKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkaXNwYXRjaGVyID0gKGRpc3BhdGNoZXJfRGlzcGF0Y2hlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnRfY29ubmVjdGlvbi50c1xudmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fZXh0ZW5kcyhUcmFuc3BvcnRDb25uZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydENvbm5lY3Rpb24oaG9va3MsIG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaW5pdGlhbGl6ZSA9IHJ1bnRpbWUudHJhbnNwb3J0Q29ubmVjdGlvbkluaXRpYWxpemVyO1xuICAgICAgICBfdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSAnbmV3JztcbiAgICAgICAgX3RoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICBfdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSBvcHRpb25zLmFjdGl2aXR5VGltZW91dDtcbiAgICAgICAgX3RoaXMuaWQgPSBfdGhpcy50aW1lbGluZS5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhvb2tzLmhhbmRsZXNBY3Rpdml0eUNoZWNrcyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1BpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3Muc3VwcG9ydHNQaW5nKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCB8fCB0aGlzLnN0YXRlICE9PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVybCA9IHRoaXMuaG9va3MudXJscy5nZXRJbml0aWFsKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSB0aGlzLmhvb2tzLmdldFNvY2tldCh1cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnQ29ubmVjdGluZycsIHsgdHJhbnNwb3J0OiB0aGlzLm5hbWUsIHVybDogdXJsIH0pO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nICYmIHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnBpbmcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ob29rcy5iZWZvcmVPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmJlZm9yZU9wZW4odGhpcy5zb2NrZXQsIHRoaXMuaG9va3MudXJscy5nZXRQYXRoKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2UoeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiBjbG9zZUV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICB3YXNDbGVhbjogY2xvc2VFdmVudC53YXNDbGVhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjbG9zZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25BY3Rpdml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpdml0eScpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMub25PcGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBfdGhpcy5vbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh0aGlzLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5lbWl0KHN0YXRlLCBwYXJhbXMpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYnVpbGRUaW1lbGluZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHsgY2lkOiB0aGlzLmlkIH0sIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydENvbm5lY3Rpb247XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uID0gKHRyYW5zcG9ydF9jb25uZWN0aW9uX1RyYW5zcG9ydENvbm5lY3Rpb24pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdHJhbnNwb3J0LnRzXG5cbnZhciB0cmFuc3BvcnRfVHJhbnNwb3J0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnQoaG9va3MpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgIH1cbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvb2tzLmlzU3VwcG9ydGVkKGVudmlyb25tZW50KTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgdHJhbnNwb3J0X2Nvbm5lY3Rpb24odGhpcy5ob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydHNfdHJhbnNwb3J0ID0gKHRyYW5zcG9ydF9UcmFuc3BvcnQpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG52YXIgV1NUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoe1xuICAgIHVybHM6IHdzLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG4gICAgc3VwcG9ydHNQaW5nOiBmYWxzZSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bnRpbWUuZ2V0V2ViU29ja2V0QVBJKCkpO1xuICAgIH0sXG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZS5nZXRXZWJTb2NrZXRBUEkoKSk7XG4gICAgfSxcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuY3JlYXRlV2ViU29ja2V0KHVybCk7XG4gICAgfVxufSk7XG52YXIgaHR0cENvbmZpZ3VyYXRpb24gPSB7XG4gICAgdXJsczogaHR0cCxcbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IGZhbHNlLFxuICAgIHN1cHBvcnRzUGluZzogdHJ1ZSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG52YXIgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiA9IGV4dGVuZCh7XG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLkhUVFBGYWN0b3J5LmNyZWF0ZVN0cmVhbWluZ1NvY2tldCh1cmwpO1xuICAgIH1cbn0sIGh0dHBDb25maWd1cmF0aW9uKTtcbnZhciBwb2xsaW5nQ29uZmlndXJhdGlvbiA9IGV4dGVuZCh7XG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLkhUVFBGYWN0b3J5LmNyZWF0ZVBvbGxpbmdTb2NrZXQodXJsKTtcbiAgICB9XG59LCBodHRwQ29uZmlndXJhdGlvbik7XG52YXIgeGhyQ29uZmlndXJhdGlvbiA9IHtcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5pc1hIUlN1cHBvcnRlZCgpO1xuICAgIH1cbn07XG52YXIgWEhSU3RyZWFtaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KChleHRlbmQoe30sIHN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKSk7XG52YXIgWEhSUG9sbGluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydChleHRlbmQoe30sIHBvbGxpbmdDb25maWd1cmF0aW9uLCB4aHJDb25maWd1cmF0aW9uKSk7XG52YXIgVHJhbnNwb3J0cyA9IHtcbiAgICB3czogV1NUcmFuc3BvcnQsXG4gICAgeGhyX3N0cmVhbWluZzogWEhSU3RyZWFtaW5nVHJhbnNwb3J0LFxuICAgIHhocl9wb2xsaW5nOiBYSFJQb2xsaW5nVHJhbnNwb3J0XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0cyA9IChUcmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG5cblxudmFyIFNvY2tKU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCh7XG4gICAgZmlsZTogJ3NvY2tqcycsXG4gICAgdXJsczogc29ja2pzLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogdHJ1ZSxcbiAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LlNvY2tKUyAhPT0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93LlNvY2tKUyh1cmwsIG51bGwsIHtcbiAgICAgICAgICAgIGpzX3BhdGg6IERlcGVuZGVuY2llcy5nZXRQYXRoKCdzb2NranMnLCB7XG4gICAgICAgICAgICAgICAgdXNlVExTOiBvcHRpb25zLnVzZVRMU1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpZ25vcmVfbnVsbF9vcmlnaW46IG9wdGlvbnMuaWdub3JlTnVsbE9yaWdpblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uIChzb2NrZXQsIHBhdGgpIHtcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KSk7XG4gICAgfVxufSk7XG52YXIgeGRyQ29uZmlndXJhdGlvbiA9IHtcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG4gICAgICAgIHZhciB5ZXMgPSBydW50aW1lLmlzWERSU3VwcG9ydGVkKGVudmlyb25tZW50LnVzZVRMUyk7XG4gICAgICAgIHJldHVybiB5ZXM7XG4gICAgfVxufTtcbnZhciBYRFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoKGV4dGVuZCh7fSwgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpKTtcbnZhciBYRFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhkckNvbmZpZ3VyYXRpb24pKTtcbnRyYW5zcG9ydHMueGRyX3N0cmVhbWluZyA9IFhEUlN0cmVhbWluZ1RyYW5zcG9ydDtcbnRyYW5zcG9ydHMueGRyX3BvbGxpbmcgPSBYRFJQb2xsaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy5zb2NranMgPSBTb2NrSlNUcmFuc3BvcnQ7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzX3RyYW5zcG9ydHMgPSAodHJhbnNwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9uZXRfaW5mby50c1xudmFyIG5ldF9pbmZvX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxudmFyIE5ldEluZm8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIG5ldF9pbmZvX2V4dGVuZHMoTmV0SW5mbywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOZXRJbmZvKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29ubGluZScpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdvZmZsaW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBOZXRJbmZvLnByb3RvdHlwZS5pc09ubGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmV0SW5mbztcbn0oZGlzcGF0Y2hlcikpO1xuXG52YXIgbmV0X2luZm9fTmV0d29yayA9IG5ldyBOZXRJbmZvKCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy9hc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyLnRzXG5cblxudmFyIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm1pblBpbmdEZWxheSA9IG9wdGlvbnMubWluUGluZ0RlbGF5O1xuICAgICAgICB0aGlzLm1heFBpbmdEZWxheSA9IG9wdGlvbnMubWF4UGluZ0RlbGF5O1xuICAgICAgICB0aGlzLnBpbmdEZWxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLnBpbmdEZWxheVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgb3BlblRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgIHZhciBvbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgICAgIG9wZW5UaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgY29ubmVjdGlvbi51bmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDIgfHwgY2xvc2VFdmVudC5jb2RlID09PSAxMDAzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNsb3NlRXZlbnQud2FzQ2xlYW4gJiYgb3BlblRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHZhciBsaWZlc3BhbiA9IHV0aWwubm93KCkgLSBvcGVuVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGlmIChsaWZlc3BhbiA8IDIgKiBfdGhpcy5tYXhQaW5nRGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5waW5nRGVsYXkgPSBNYXRoLm1heChsaWZlc3BhbiAvIDIsIF90aGlzLm1pblBpbmdEZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9O1xuICAgIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pc0FsaXZlKCkgJiYgdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyID0gKGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL3Byb3RvY29sL3Byb3RvY29sLnRzXG52YXIgUHJvdG9jb2wgPSB7XG4gICAgZGVjb2RlTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlRXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB2YXIgcHVzaGVyRXZlbnREYXRhID0gbWVzc2FnZURhdGEuZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHVzaGVyRXZlbnREYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50RGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZURhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudCA9IHtcbiAgICAgICAgICAgICAgICBldmVudDogbWVzc2FnZURhdGEuZXZlbnQsXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogbWVzc2FnZURhdGEuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBwdXNoZXJFdmVudERhdGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50LnVzZXJfaWQgPSBtZXNzYWdlRGF0YS51c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHB1c2hlckV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyB7IHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsIGVycm9yOiBlLCBkYXRhOiBtZXNzYWdlRXZlbnQuZGF0YSB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBlbmNvZGVNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2ZW50KTtcbiAgICB9LFxuICAgIHByb2Nlc3NIYW5kc2hha2U6IGZ1bmN0aW9uIChtZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBQcm90b2NvbC5kZWNvZGVNZXNzYWdlKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgIGlmIChtZXNzYWdlLmV2ZW50ID09PSAncHVzaGVyOmNvbm5lY3Rpb25fZXN0YWJsaXNoZWQnKSB7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ05vIGFjdGl2aXR5IHRpbWVvdXQgc3BlY2lmaWVkIGluIGhhbmRzaGFrZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2UuZGF0YS5zb2NrZXRfaWQsXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiBtZXNzYWdlLmRhdGEuYWN0aXZpdHlfdGltZW91dCAqIDEwMDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5ldmVudCA9PT0gJ3B1c2hlcjplcnJvcicpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmdldENsb3NlQWN0aW9uKG1lc3NhZ2UuZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMuZ2V0Q2xvc2VFcnJvcihtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgaGFuZHNoYWtlJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2xvc2VBY3Rpb246IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MDAwKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlID49IDEwMDIgJiYgY2xvc2VFdmVudC5jb2RlIDw9IDEwMDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tvZmYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlID09PSA0MDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Rsc19vbmx5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZnVzZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQyMDApIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFja29mZic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdyZXRyeSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZnVzZWQnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDbG9zZUVycm9yOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlICE9PSAxMDAwICYmIGNsb3NlRXZlbnQuY29kZSAhPT0gMTAwMSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUHVzaGVyRXJyb3InLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogY2xvc2VFdmVudC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjbG9zZUV2ZW50LnJlYXNvbiB8fCBjbG9zZUV2ZW50Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHJvdG9jb2xfcHJvdG9jb2wgPSAoUHJvdG9jb2wpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi50c1xudmFyIGNvbm5lY3Rpb25fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG52YXIgY29ubmVjdGlvbl9Db25uZWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBjb25uZWN0aW9uX2V4dGVuZHMoQ29ubmVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uKGlkLCB0cmFuc3BvcnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSBpZDtcbiAgICAgICAgX3RoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICBfdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSB0cmFuc3BvcnQuYWN0aXZpdHlUaW1lb3V0O1xuICAgICAgICBfdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoZGF0YSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0geyBldmVudDogbmFtZSwgZGF0YTogZGF0YSB9O1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdFdmVudCBzZW50JywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHByb3RvY29sX3Byb3RvY29sLmVuY29kZU1lc3NhZ2UoZXZlbnQpKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydC5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cGluZycsIHt9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoZXJFdmVudCA9IHByb3RvY29sX3Byb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTWVzc2FnZVBhcnNlRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlRXZlbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHB1c2hlckV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdFdmVudCByZWNkJywgcHVzaGVyRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHB1c2hlckV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6ZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUHVzaGVyRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwdXNoZXJFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBvbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdtZXNzYWdlJywgcHVzaGVyRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpdml0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2FjdGl2aXR5Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlZDogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VFdmVudCAmJiBjbG9zZUV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2xvc2VFdmVudChjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydC51bmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvYmplY3RBcHBseShsaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lciwgZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydC5iaW5kKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xvc2VFdmVudCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KTtcbiAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChhY3Rpb24sIHsgYWN0aW9uOiBhY3Rpb24sIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3Rpb247XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25fY29ubmVjdGlvbiA9IChjb25uZWN0aW9uX0Nvbm5lY3Rpb24pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vaGFuZHNoYWtlL2luZGV4LnRzXG5cblxuXG52YXIgaGFuZHNoYWtlX0hhbmRzaGFrZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcbiAgICBIYW5kc2hha2UucHJvdG90eXBlLmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub25NZXNzYWdlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIF90aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvdG9jb2xfcHJvdG9jb2wucHJvY2Vzc0hhbmRzaGFrZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKCdlcnJvcicsIHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5hY3Rpb24gPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKCdjb25uZWN0ZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IG5ldyBjb25uZWN0aW9uX2Nvbm5lY3Rpb24ocmVzdWx0LmlkLCBfdGhpcy50cmFuc3BvcnQpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHJlc3VsdC5hY3Rpdml0eVRpbWVvdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaChyZXN1bHQuYWN0aW9uLCB7IGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCkgfHwgJ2JhY2tvZmYnO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgIF90aGlzLmZpbmlzaChhY3Rpb24sIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUudW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC51bmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgdGhpcy5vbkNsb3NlZCk7XG4gICAgfTtcbiAgICBIYW5kc2hha2UucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uIChhY3Rpb24sIHBhcmFtcykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKGV4dGVuZCh7IHRyYW5zcG9ydDogdGhpcy50cmFuc3BvcnQsIGFjdGlvbjogYWN0aW9uIH0sIHBhcmFtcykpO1xuICAgIH07XG4gICAgcmV0dXJuIEhhbmRzaGFrZTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb25uZWN0aW9uX2hhbmRzaGFrZSA9IChoYW5kc2hha2VfSGFuZHNoYWtlKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL3B1c2hlcl9hdXRob3JpemVyLnRzXG5cbnZhciBwdXNoZXJfYXV0aG9yaXplcl9QdXNoZXJBdXRob3JpemVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoZXJBdXRob3JpemVyKGNoYW5uZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdmFyIGF1dGhUcmFuc3BvcnQgPSBvcHRpb25zLmF1dGhUcmFuc3BvcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgcnVudGltZS5nZXRBdXRob3JpemVycygpW2F1dGhUcmFuc3BvcnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgXCInXCIgKyBhdXRoVHJhbnNwb3J0ICsgXCInIGlzIG5vdCBhIHJlY29nbml6ZWQgYXV0aCB0cmFuc3BvcnRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR5cGUgPSBhdXRoVHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmF1dGhPcHRpb25zID0gb3B0aW9ucy5hdXRoIHx8IHt9O1xuICAgIH1cbiAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5jb21wb3NlUXVlcnkgPSBmdW5jdGlvbiAoc29ja2V0SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ3NvY2tldF9pZD0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzb2NrZXRJZCkgK1xuICAgICAgICAgICAgJyZjaGFubmVsX25hbWU9JyArXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jaGFubmVsLm5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuYXV0aE9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICBxdWVyeSArPVxuICAgICAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChpKSArXG4gICAgICAgICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmF1dGhPcHRpb25zLnBhcmFtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG4gICAgUHVzaGVyQXV0aG9yaXplci5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzID1cbiAgICAgICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnMgfHwgcnVudGltZS5nZXRBdXRob3JpemVycygpO1xuICAgICAgICBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBydW50aW1lLCBzb2NrZXRJZCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFB1c2hlckF1dGhvcml6ZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHVzaGVyX2F1dGhvcml6ZXIgPSAocHVzaGVyX2F1dGhvcml6ZXJfUHVzaGVyQXV0aG9yaXplcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdGltZWxpbmUvdGltZWxpbmVfc2VuZGVyLnRzXG5cbnZhciB0aW1lbGluZV9zZW5kZXJfVGltZWxpbmVTZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVsaW5lU2VuZGVyKHRpbWVsaW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgVGltZWxpbmVTZW5kZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodXNlVExTLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVsaW5lLnNlbmQocnVudGltZS5UaW1lbGluZVRyYW5zcG9ydC5nZXRBZ2VudCh0aGlzLCB1c2VUTFMpLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gVGltZWxpbmVTZW5kZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfc2VuZGVyID0gKHRpbWVsaW5lX3NlbmRlcl9UaW1lbGluZVNlbmRlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvY2hhbm5lbC50c1xudmFyIGNoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciBjaGFubmVsX0NoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGNoYW5uZWxfZXh0ZW5kcyhDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdObyBjYWxsYmFja3Mgb24gJyArIG5hbWUgKyAnIGZvciAnICsgZXZlbnQpO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgeyBhdXRoOiAnJyB9KTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4T2YoJ2NsaWVudC0nKSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhZEV2ZW50TmFtZShcIkV2ZW50ICdcIiArIGV2ZW50ICsgXCInIGRvZXMgbm90IHN0YXJ0IHdpdGggJ2NsaWVudC0nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCd0cmlnZ2VyaW5nQ2xpZW50RXZlbnRzJyk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkNsaWVudCBldmVudCB0cmlnZ2VyZWQgYmVmb3JlIGNoYW5uZWwgJ3N1YnNjcmlwdGlvbl9zdWNjZWVkZWQnIGV2ZW50IC4gXCIgKyBzdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KGV2ZW50LCBkYXRhLCB0aGlzLm5hbWUpO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBdXRoRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIGVycm9yIGluc3RhbmNlb2YgSFRUUEF1dGhFcnJvciA/IHsgc3RhdHVzOiBlcnJvci5zdGF0dXMgfSA6IHt9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogZGF0YS5hdXRoLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGRhdGEuY2hhbm5lbF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6dW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5jYW5jZWxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFubmVsO1xufShkaXNwYXRjaGVyKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjaGFubmVsc19jaGFubmVsID0gKGNoYW5uZWxfQ2hhbm5lbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLnRzXG52YXIgcHJpdmF0ZV9jaGFubmVsX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG52YXIgcHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBwcml2YXRlX2NoYW5uZWxfZXh0ZW5kcyhQcml2YXRlQ2hhbm5lbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQcml2YXRlQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYXV0aG9yaXplciA9IGZhY3RvcnkuY3JlYXRlQXV0aG9yaXplcih0aGlzLCB0aGlzLnB1c2hlci5jb25maWcpO1xuICAgICAgICByZXR1cm4gYXV0aG9yaXplci5hdXRob3JpemUoc29ja2V0SWQsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcbn0oY2hhbm5lbHNfY2hhbm5lbCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHJpdmF0ZV9jaGFubmVsID0gKHByaXZhdGVfY2hhbm5lbF9Qcml2YXRlQ2hhbm5lbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvbWVtYmVycy50c1xuXG52YXIgbWVtYmVyc19NZW1iZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZW1iZXJzKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIE1lbWJlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMubWVtYmVycywgaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLm1lbWJlcnNbaWRdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBpZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soX3RoaXMuZ2V0KGlkKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUuc2V0TXlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLm15SUQgPSBpZDtcbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLm9uU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5oYXNoO1xuICAgICAgICB0aGlzLmNvdW50ID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5jb3VudDtcbiAgICAgICAgdGhpcy5tZSA9IHRoaXMuZ2V0KHRoaXMubXlJRCk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5hZGRNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuICAgICAgICBpZiAodGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVtYmVyc1ttZW1iZXJEYXRhLnVzZXJfaWRdID0gbWVtYmVyRGF0YS51c2VyX2luZm87XG4gICAgICAgIHJldHVybiB0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUucmVtb3ZlTWVtYmVyID0gZnVuY3Rpb24gKG1lbWJlckRhdGEpIHtcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1lbWJlcnNbbWVtYmVyRGF0YS51c2VyX2lkXTtcbiAgICAgICAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtYmVyO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5teUlEID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTWVtYmVycztcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBtZW1iZXJzID0gKG1lbWJlcnNfTWVtYmVycyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC50c1xudmFyIHByZXNlbmNlX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG52YXIgcHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHByZXNlbmNlX2NoYW5uZWxfZXh0ZW5kcyhQcmVzZW5jZUNoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lLCBwdXNoZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm1lbWJlcnMgPSBuZXcgbWVtYmVycygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmF1dGhvcml6ZS5jYWxsKHRoaXMsIHNvY2tldElkLCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aERhdGEuY2hhbm5lbF9kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnYXV0aGVudGljYXRpb25FbmRwb2ludCcpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJJbnZhbGlkIGF1dGggcmVzcG9uc2UgZm9yIGNoYW5uZWwgJ1wiICsgX3RoaXMubmFtZSArIFwiJyxcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCJleHBlY3RlZCAnY2hhbm5lbF9kYXRhJyBmaWVsZC4gXCIgKyBzdWZmaXgpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soJ0ludmFsaWQgYXV0aCByZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGFubmVsRGF0YSA9IEpTT04ucGFyc2UoYXV0aERhdGEuY2hhbm5lbF9kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5tZW1iZXJzLnNldE15SUQoY2hhbm5lbERhdGEudXNlcl9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnRlcm5hbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS51c2VyX2lkID0gZXZlbnQudXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVJbnRlcm5hbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOm1lbWJlcl9hZGRlZCc6XG4gICAgICAgICAgICAgICAgdmFyIGFkZGVkTWVtYmVyID0gdGhpcy5tZW1iZXJzLmFkZE1lbWJlcihkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBhZGRlZE1lbWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX3JlbW92ZWQnOlxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVkTWVtYmVyID0gdGhpcy5tZW1iZXJzLnJlbW92ZU1lbWJlcihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIHJlbW92ZWRNZW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW1iZXJzLm9uU3Vic2NyaXB0aW9uKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIHRoaXMubWVtYmVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJlc2V0KCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzY29ubmVjdC5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDtcbn0ocHJpdmF0ZV9jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcmVzZW5jZV9jaGFubmVsID0gKHByZXNlbmNlX2NoYW5uZWxfUHJlc2VuY2VDaGFubmVsKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL3V0ZjgvbGliL3V0ZjguanNcbnZhciB1dGY4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2Jhc2U2NC9saWIvYmFzZTY0LmpzXG52YXIgYmFzZTY0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9lbmNyeXB0ZWRfY2hhbm5lbC50c1xudmFyIGVuY3J5cHRlZF9jaGFubmVsX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgZW5jcnlwdGVkX2NoYW5uZWxfRW5jcnlwdGVkQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgZW5jcnlwdGVkX2NoYW5uZWxfZXh0ZW5kcyhFbmNyeXB0ZWRDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIHB1c2hlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgX3RoaXMubmFjbCA9IG5hY2w7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmF1dGhvcml6ZS5jYWxsKHRoaXMsIHNvY2tldElkLCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaGFyZWRTZWNyZXQgPSBhdXRoRGF0YVsnc2hhcmVkX3NlY3JldCddO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRTZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyBzaGFyZWRfc2VjcmV0IGtleSBpbiBhdXRoIHBheWxvYWQgZm9yIGVuY3J5cHRlZCBjaGFubmVsOiBcIiArIF90aGlzLm5hbWUpLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5rZXkgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShzaGFyZWRTZWNyZXQpO1xuICAgICAgICAgICAgZGVsZXRlIGF1dGhEYXRhWydzaGFyZWRfc2VjcmV0J107XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBhdXRoRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRGZWF0dXJlKCdDbGllbnQgZXZlbnRzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWxzJyk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDAgfHxcbiAgICAgICAgICAgIGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXI6JykgPT09IDApIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGFuZGxlRXZlbnQuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVFbmNyeXB0ZWRFdmVudChldmVudE5hbWUsIGRhdGEpO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRW5jcnlwdGVkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBlbmNyeXB0ZWQgZXZlbnQgYmVmb3JlIGtleSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYXV0aEVuZHBvaW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhLmNpcGhlcnRleHQgfHwgIWRhdGEubm9uY2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5leHBlY3RlZCBmb3JtYXQgZm9yIGVuY3J5cHRlZCBldmVudCwgZXhwZWN0ZWQgb2JqZWN0IHdpdGggYGNpcGhlcnRleHRgIGFuZCBgbm9uY2VgIGZpZWxkcywgZ290OiAnICtcbiAgICAgICAgICAgICAgICBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2lwaGVyVGV4dCA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKGRhdGEuY2lwaGVydGV4dCk7XG4gICAgICAgIGlmIChjaXBoZXJUZXh0Lmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBjaXBoZXJ0ZXh0IGxlbmd0aCB0byBiZSBcIiArIHRoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGggKyBcIiwgZ290OiBcIiArIGNpcGhlclRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9uY2UgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShkYXRhLm5vbmNlKTtcbiAgICAgICAgaWYgKG5vbmNlLmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBub25jZSBsZW5ndGggdG8gYmUgXCIgKyB0aGlzLm5hY2wuc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoICsgXCIsIGdvdDogXCIgKyBub25jZS5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBieXRlcyA9IHRoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgdGhpcy5rZXkpO1xuICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGRlY3J5cHQgYW4gZXZlbnQsIHByb2JhYmx5IGJlY2F1c2UgaXQgd2FzIGVuY3J5cHRlZCB3aXRoIGEgZGlmZmVyZW50IGtleS4gRmV0Y2hpbmcgYSBuZXcga2V5IGZyb20gdGhlIGF1dGhFbmRwb2ludC4uLicpO1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpemUodGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhdXRoRW5kcG9pbnQ6IFwiICsgYXV0aERhdGEgKyBcIi4gVW5hYmxlIHRvIGZldGNoIG5ldyBrZXksIHNvIGRyb3BwaW5nIGVuY3J5cHRlZCBldmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBieXRlcyA9IF90aGlzLm5hY2wuc2VjcmV0Ym94Lm9wZW4oY2lwaGVyVGV4dCwgbm9uY2UsIF90aGlzLmtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGJ5dGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkZhaWxlZCB0byBkZWNyeXB0IGV2ZW50IHdpdGggbmV3IGtleS4gRHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIF90aGlzLmdldERhdGFUb0VtaXQoYnl0ZXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIHRoaXMuZ2V0RGF0YVRvRW1pdChieXRlcykpO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuZ2V0RGF0YVRvRW1pdCA9IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgcmF3ID0gT2JqZWN0KHV0ZjhbXCJkZWNvZGVcIl0pKGJ5dGVzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRW5jcnlwdGVkQ2hhbm5lbDtcbn0ocHJpdmF0ZV9jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlbmNyeXB0ZWRfY2hhbm5lbCA9IChlbmNyeXB0ZWRfY2hhbm5lbF9FbmNyeXB0ZWRDaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL2Nvbm5lY3Rpb25fbWFuYWdlci50c1xudmFyIGNvbm5lY3Rpb25fbWFuYWdlcl9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxudmFyIGNvbm5lY3Rpb25fbWFuYWdlcl9Db25uZWN0aW9uTWFuYWdlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgY29ubmVjdGlvbl9tYW5hZ2VyX2V4dGVuZHMoQ29ubmVjdGlvbk1hbmFnZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbk1hbmFnZXIoa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLnRpbWVsaW5lID0gX3RoaXMub3B0aW9ucy50aW1lbGluZTtcbiAgICAgICAgX3RoaXMudXNpbmdUTFMgPSBfdGhpcy5vcHRpb25zLnVzZVRMUztcbiAgICAgICAgX3RoaXMuZXJyb3JDYWxsYmFja3MgPSBfdGhpcy5idWlsZEVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIF90aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MgPSBfdGhpcy5idWlsZENvbm5lY3Rpb25DYWxsYmFja3MoX3RoaXMuZXJyb3JDYWxsYmFja3MpO1xuICAgICAgICBfdGhpcy5oYW5kc2hha2VDYWxsYmFja3MgPSBfdGhpcy5idWlsZEhhbmRzaGFrZUNhbGxiYWNrcyhfdGhpcy5lcnJvckNhbGxiYWNrcyk7XG4gICAgICAgIHZhciBOZXR3b3JrID0gcnVudGltZS5nZXROZXR3b3JrKCk7XG4gICAgICAgIE5ldHdvcmsuYmluZCgnb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86ICdvbmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLnN0YXRlID09PSAnY29ubmVjdGluZycgfHwgX3RoaXMuc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgTmV0d29yay5iaW5kKCdvZmZsaW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86ICdvZmZsaW5lJyB9KTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLnVwZGF0ZVN0cmF0ZWd5KCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gfHwgdGhpcy5ydW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZmFpbGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnY29ubmVjdGluZycpO1xuICAgICAgICB0aGlzLnN0YXJ0Q29ubmVjdGluZygpO1xuICAgICAgICB0aGlzLnNldFVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZF9ldmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChuYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuaXNVc2luZ1RMUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNpbmdUTFM7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RhcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucnVubmVyID0gX3RoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlLmFjdGlvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdIYW5kc2hha2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogaGFuZHNoYWtlLmVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aW1lbGluZS5lcnJvcih7IGhhbmRzaGFrZUVycm9yOiBoYW5kc2hha2UuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZHNoYWtlQ2FsbGJhY2tzW2hhbmRzaGFrZS5hY3Rpb25dKGhhbmRzaGFrZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYWJvcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ydW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0SW50ZXJuYWxseSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcbiAgICAgICAgdGhpcy5jbGVhclJldHJ5VGltZXIoKTtcbiAgICAgICAgdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmFiYW5kb25Db25uZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdHJhdGVneSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMub3B0aW9ucy5nZXRTdHJhdGVneSh7XG4gICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMudGltZWxpbmUsXG4gICAgICAgICAgICB1c2VUTFM6IHRoaXMudXNpbmdUTFNcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmV0cnlJbiA9IGZ1bmN0aW9uIChkZWxheSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBhY3Rpb246ICdyZXRyeScsIGRlbGF5OiBkZWxheSB9KTtcbiAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0aW5nX2luJywgTWF0aC5yb3VuZChkZWxheSAvIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBuZXcgT25lT2ZmVGltZXIoZGVsYXkgfHwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJSZXRyeVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXRyeVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgdGhpcy5yZXRyeVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNldFVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMudW5hdmFpbGFibGVUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZSgndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJVbmF2YWlsYWJsZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51bmF2YWlsYWJsZVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnVuYXZhaWxhYmxlVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnBpbmcoKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5wb25nVGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuZXJyb3IoeyBwb25nX3RpbWVkX291dDogX3RoaXMub3B0aW9ucy5wb25nVGltZW91dCB9KTtcbiAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uICYmICF0aGlzLmNvbm5lY3Rpb24uaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLmFjdGl2aXR5VGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNlbmRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnN0b3BBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzID0gZnVuY3Rpb24gKGVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGVycm9yQ2FsbGJhY2tzLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBvbmcnLCB7fSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2hvdWxkUmV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRIYW5kc2hha2VDYWxsYmFja3MgPSBmdW5jdGlvbiAoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIGNvbm5lY3RlZDogZnVuY3Rpb24gKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IE1hdGgubWluKF90aGlzLm9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuY29ubmVjdGlvbi5hY3Rpdml0eVRpbWVvdXQgfHwgSW5maW5pdHkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldENvbm5lY3Rpb24oaGFuZHNoYWtlLmNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldF9pZCA9IF90aGlzLmNvbm5lY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlU3RhdGUoJ2Nvbm5lY3RlZCcsIHsgc29ja2V0X2lkOiBfdGhpcy5zb2NrZXRfaWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmJ1aWxkRXJyb3JDYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aXRoRXJyb3JFbWl0dGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7IHR5cGU6ICdXZWJTb2NrZXRFcnJvcicsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGxzX29ubHk6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVzaW5nVExTID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlZnVzZWQ6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYmFja29mZjogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigxMDAwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmV0cnk6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNldENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmFiYW5kb25Db25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgZm9yICh2YXIgZXZlbnQgaW4gdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24udW5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAobmV3U3RhdGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlRGVzY3JpcHRpb24gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZURlc2NyaXB0aW9uID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlRGVzY3JpcHRpb24gKz0gJyB3aXRoIG5ldyBzb2NrZXQgSUQgJyArIGRhdGEuc29ja2V0X2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTdGF0ZSBjaGFuZ2VkJywgcHJldmlvdXNTdGF0ZSArICcgLT4gJyArIG5ld1N0YXRlRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgc3RhdGU6IG5ld1N0YXRlLCBwYXJhbXM6IGRhdGEgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlX2NoYW5nZScsIHsgcHJldmlvdXM6IHByZXZpb3VzU3RhdGUsIGN1cnJlbnQ6IG5ld1N0YXRlIH0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KG5ld1N0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNob3VsZFJldHJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnO1xuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3Rpb25NYW5hZ2VyO1xufShkaXNwYXRjaGVyKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb25uZWN0aW9uX21hbmFnZXIgPSAoY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9jaGFubmVscy50c1xuXG5cblxuXG52YXIgY2hhbm5lbHNfQ2hhbm5lbHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWxzKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuICAgIENoYW5uZWxzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9O1xuICAgIENoYW5uZWxzLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXModGhpcy5jaGFubmVscyk7XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9iamVjdEFwcGx5KHRoaXMuY2hhbm5lbHMsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgICAgICAgICBjaGFubmVsLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhbm5lbHM7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2hhbm5lbHMgPSAoY2hhbm5lbHNfQ2hhbm5lbHMpO1xuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLWVuY3J5cHRlZC0nKSA9PT0gMCkge1xuICAgICAgICBpZiAocHVzaGVyLmNvbmZpZy5uYWNsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVFbmNyeXB0ZWRDaGFubmVsKG5hbWUsIHB1c2hlciwgcHVzaGVyLmNvbmZpZy5uYWNsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyTXNnID0gJ1RyaWVkIHRvIHN1YnNjcmliZSB0byBhIHByaXZhdGUtZW5jcnlwdGVkLSBjaGFubmVsIGJ1dCBubyBuYWNsIGltcGxlbWVudGF0aW9uIGF2YWlsYWJsZSc7XG4gICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2VuY3J5cHRlZENoYW5uZWxTdXBwb3J0Jyk7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZEZlYXR1cmUoZXJyTXNnICsgXCIuIFwiICsgc3VmZml4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZVByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL2ZhY3RvcnkudHNcblxuXG5cblxuXG5cblxuXG5cblxudmFyIEZhY3RvcnkgPSB7XG4gICAgY3JlYXRlQ2hhbm5lbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVscygpO1xuICAgIH0sXG4gICAgY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXI6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX21hbmFnZXIoa2V5LCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVsc19jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcml2YXRlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuICAgICAgICByZXR1cm4gbmV3IHByaXZhdGVfY2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlUHJlc2VuY2VDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJlc2VuY2VfY2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlRW5jcnlwdGVkQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlciwgbmFjbCkge1xuICAgICAgICByZXR1cm4gbmV3IGVuY3J5cHRlZF9jaGFubmVsKG5hbWUsIHB1c2hlciwgbmFjbCk7XG4gICAgfSxcbiAgICBjcmVhdGVUaW1lbGluZVNlbmRlcjogZnVuY3Rpb24gKHRpbWVsaW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGltZWxpbmVfc2VuZGVyKHRpbWVsaW5lLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUF1dGhvcml6ZXI6IGZ1bmN0aW9uIChjaGFubmVsLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dGhvcml6ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmF1dGhvcml6ZXIoY2hhbm5lbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBwdXNoZXJfYXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUhhbmRzaGFrZTogZnVuY3Rpb24gKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX2hhbmRzaGFrZSh0cmFuc3BvcnQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNyZWF0ZUFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjogZnVuY3Rpb24gKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZmFjdG9yeSA9IChGYWN0b3J5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9tYW5hZ2VyLnRzXG5cbnZhciB0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRNYW5hZ2VyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5saXZlc0xlZnQgPSB0aGlzLm9wdGlvbnMubGl2ZXMgfHwgSW5maW5pdHk7XG4gICAgfVxuICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmdldEFzc2lzdGFudCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKHRoaXMsIHRyYW5zcG9ydCwge1xuICAgICAgICAgICAgbWluUGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWluUGluZ0RlbGF5LFxuICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWF4UGluZ0RlbGF5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGl2ZXNMZWZ0ID4gMDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLnJlcG9ydERlYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpdmVzTGVmdCAtPSAxO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydE1hbmFnZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0X21hbmFnZXIgPSAodHJhbnNwb3J0X21hbmFnZXJfVHJhbnNwb3J0TWFuYWdlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9zZXF1ZW50aWFsX3N0cmF0ZWd5LnRzXG5cblxuXG52YXIgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlcXVlbnRpYWxTdHJhdGVneShzdHJhdGVnaWVzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IHN0cmF0ZWdpZXM7XG4gICAgICAgIHRoaXMubG9vcCA9IEJvb2xlYW4ob3B0aW9ucy5sb29wKTtcbiAgICAgICAgdGhpcy5mYWlsRmFzdCA9IEJvb2xlYW4ob3B0aW9ucy5mYWlsRmFzdCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgdGhpcy50aW1lb3V0TGltaXQgPSBvcHRpb25zLnRpbWVvdXRMaW1pdDtcbiAgICB9XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWwubWV0aG9kKCdpc1N1cHBvcnRlZCcpKTtcbiAgICB9O1xuICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSB0aGlzLnN0cmF0ZWdpZXM7XG4gICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQ7XG4gICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuICAgICAgICB2YXIgdHJ5TmV4dFN0cmF0ZWd5ID0gZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICUgc3RyYXRlZ2llcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50IDwgc3RyYXRlZ2llcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB0aW1lb3V0ICogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50aW1lb3V0TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gTWF0aC5taW4odGltZW91dCwgX3RoaXMudGltZW91dExpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBfdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogX3RoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcnVubmVyID0gdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUudHJ5U3RyYXRlZ3kgPSBmdW5jdGlvbiAoc3RyYXRlZ3ksIG1pblByaW9yaXR5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgcnVubmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKG9wdGlvbnMudGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiB0aW1lciAmJiB0aW1lci5pc1J1bm5pbmcoKSAmJiAhb3B0aW9ucy5mYWlsRmFzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBTZXF1ZW50aWFsU3RyYXRlZ3k7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2VxdWVudGlhbF9zdHJhdGVneSA9IChzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9iZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5LnRzXG5cblxudmFyIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShzdHJhdGVnaWVzKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IHN0cmF0ZWdpZXM7XG4gICAgfVxuICAgIEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYW55KHRoaXMuc3RyYXRlZ2llcywgdXRpbC5tZXRob2QoJ2lzU3VwcG9ydGVkJykpO1xuICAgIH07XG4gICAgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3QodGhpcy5zdHJhdGVnaWVzLCBtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGksIHJ1bm5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIHJ1bm5lcnNbaV0uZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFJ1bm5lcnNGYWlsZWQocnVubmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShoYW5kc2hha2UudHJhbnNwb3J0LnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5ID0gKGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSk7XG5mdW5jdGlvbiBjb25uZWN0KHN0cmF0ZWdpZXMsIG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIpIHtcbiAgICB2YXIgcnVubmVycyA9IG1hcChzdHJhdGVnaWVzLCBmdW5jdGlvbiAoc3RyYXRlZ3ksIGksIF8sIHJzKSB7XG4gICAgICAgIHJldHVybiBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIoaSwgcnMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXBwbHkocnVubmVycywgYWJvcnRSdW5uZXIpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25zX2FsbChydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bm5lci5lcnJvcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhYm9ydFJ1bm5lcihydW5uZXIpIHtcbiAgICBpZiAoIXJ1bm5lci5lcnJvciAmJiAhcnVubmVyLmFib3J0ZWQpIHtcbiAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgIHJ1bm5lci5hYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9jYWNoZWRfc3RyYXRlZ3kudHNcblxuXG5cblxudmFyIGNhY2hlZF9zdHJhdGVneV9DYWNoZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVkU3RyYXRlZ3koc3RyYXRlZ3ksIHRyYW5zcG9ydHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydHMgPSB0cmFuc3BvcnRzO1xuICAgICAgICB0aGlzLnR0bCA9IG9wdGlvbnMudHRsIHx8IDE4MDAgKiAxMDAwO1xuICAgICAgICB0aGlzLnVzaW5nVExTID0gb3B0aW9ucy51c2VUTFM7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuICAgIH1cbiAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHVzaW5nVExTID0gdGhpcy51c2luZ1RMUztcbiAgICAgICAgdmFyIGluZm8gPSBmZXRjaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKTtcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSBbdGhpcy5zdHJhdGVneV07XG4gICAgICAgIGlmIChpbmZvICYmIGluZm8udGltZXN0YW1wICsgdGhpcy50dGwgPj0gdXRpbC5ub3coKSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1tpbmZvLnRyYW5zcG9ydF07XG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IGluZm8udHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgICAgICBsYXRlbmN5OiBpbmZvLmxhdGVuY3lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdHJhdGVnaWVzLnB1c2gobmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW3RyYW5zcG9ydF0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogaW5mby5sYXRlbmN5ICogMiArIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIGZhaWxGYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydFRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgIHZhciBydW5uZXIgPSBzdHJhdGVnaWVzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiBjYihlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmbHVzaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyYXRlZ2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ2llcy5wb3AoKS5jb25uZWN0KG1pblByaW9yaXR5LCBjYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgaGFuZHNoYWtlLnRyYW5zcG9ydC5uYW1lLCB1dGlsLm5vdygpIC0gc3RhcnRUaW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBDYWNoZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjYWNoZWRfc3RyYXRlZ3kgPSAoY2FjaGVkX3N0cmF0ZWd5X0NhY2hlZFN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGdldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKSB7XG4gICAgcmV0dXJuICdwdXNoZXJUcmFuc3BvcnQnICsgKHVzaW5nVExTID8gJ1RMUycgOiAnTm9uVExTJyk7XG59XG5mdW5jdGlvbiBmZXRjaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZENhY2hlID0gc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldO1xuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRDYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgdHJhbnNwb3J0LCBsYXRlbmN5KSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV0gPSBzYWZlSlNPTlN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB1dGlsLm5vdygpLFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogdHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgIGxhdGVuY3k6IGxhdGVuY3lcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmbHVzaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9kZWxheWVkX3N0cmF0ZWd5LnRzXG5cbnZhciBkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVsYXllZFN0cmF0ZWd5KHN0cmF0ZWd5LCBfYSkge1xuICAgICAgICB2YXIgbnVtYmVyID0gX2EuZGVsYXk7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0geyBkZWxheTogbnVtYmVyIH07XG4gICAgfVxuICAgIERlbGF5ZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBEZWxheWVkU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG4gICAgICAgIHZhciBydW5uZXI7XG4gICAgICAgIHZhciB0aW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMuZGVsYXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBEZWxheWVkU3RyYXRlZ3k7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVsYXllZF9zdHJhdGVneSA9IChkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9pZl9zdHJhdGVneS50c1xudmFyIElmU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIElmU3RyYXRlZ3kodGVzdCwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpIHtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy50cnVlQnJhbmNoID0gdHJ1ZUJyYW5jaDtcbiAgICAgICAgdGhpcy5mYWxzZUJyYW5jaCA9IGZhbHNlQnJhbmNoO1xuICAgIH1cbiAgICBJZlN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG4gICAgSWZTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gSWZTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBpZl9zdHJhdGVneSA9IChJZlN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2ZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneS50c1xudmFyIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3koc3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cbiAgICBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgaGFuZHNoYWtlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcbiAgICByZXR1cm4gRmlyc3RDb25uZWN0ZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBmaXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3kgPSAoRmlyc3RDb25uZWN0ZWRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kZWZhdWx0X3N0cmF0ZWd5LnRzXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbn1cbnZhciBnZXREZWZhdWx0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoY29uZmlnLCBiYXNlT3B0aW9ucywgZGVmaW5lVHJhbnNwb3J0KSB7XG4gICAgdmFyIGRlZmluZWRUcmFuc3BvcnRzID0ge307XG4gICAgZnVuY3Rpb24gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3kobmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydChjb25maWcsIG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKTtcbiAgICAgICAgZGVmaW5lZFRyYW5zcG9ydHNbbmFtZV0gPSB0cmFuc3BvcnQ7XG4gICAgICAgIHJldHVybiB0cmFuc3BvcnQ7XG4gICAgfVxuICAgIHZhciB3c19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZU9wdGlvbnMsIHtcbiAgICAgICAgaG9zdE5vblRMUzogY29uZmlnLndzSG9zdCArICc6JyArIGNvbmZpZy53c1BvcnQsXG4gICAgICAgIGhvc3RUTFM6IGNvbmZpZy53c0hvc3QgKyAnOicgKyBjb25maWcud3NzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy53c1BhdGhcbiAgICB9KTtcbiAgICB2YXIgd3NzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB3c19vcHRpb25zLCB7XG4gICAgICAgIHVzZVRMUzogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBzb2NranNfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VPcHRpb25zLCB7XG4gICAgICAgIGhvc3ROb25UTFM6IGNvbmZpZy5odHRwSG9zdCArICc6JyArIGNvbmZpZy5odHRwUG9ydCxcbiAgICAgICAgaG9zdFRMUzogY29uZmlnLmh0dHBIb3N0ICsgJzonICsgY29uZmlnLmh0dHBzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy5odHRwUGF0aFxuICAgIH0pO1xuICAgIHZhciB0aW1lb3V0cyA9IHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgdGltZW91dDogMTUwMDAsXG4gICAgICAgIHRpbWVvdXRMaW1pdDogNjAwMDBcbiAgICB9O1xuICAgIHZhciB3c19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyKHtcbiAgICAgICAgbGl2ZXM6IDIsXG4gICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG4gICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5VGltZW91dFxuICAgIH0pO1xuICAgIHZhciBzdHJlYW1pbmdfbWFuYWdlciA9IG5ldyB0cmFuc3BvcnRfbWFuYWdlcih7XG4gICAgICAgIGxpdmVzOiAyLFxuICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuICAgICAgICBtYXhQaW5nRGVsYXk6IGNvbmZpZy5hY3Rpdml0eVRpbWVvdXRcbiAgICB9KTtcbiAgICB2YXIgd3NfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3dzJywgJ3dzJywgMywgd3Nfb3B0aW9ucywgd3NfbWFuYWdlcik7XG4gICAgdmFyIHdzc190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnd3NzJywgJ3dzJywgMywgd3NzX29wdGlvbnMsIHdzX21hbmFnZXIpO1xuICAgIHZhciBzb2NranNfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3NvY2tqcycsICdzb2NranMnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hocl9zdHJlYW1pbmcnLCAneGhyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhkcl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9zdHJlYW1pbmcnLCAneGRyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhocl9wb2xsaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4aHJfcG9sbGluZycsICd4aHJfcG9sbGluZycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgeGRyX3BvbGxpbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9wb2xsaW5nJywgJ3hkcl9wb2xsaW5nJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB3c19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW3dzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgd3NzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbd3NzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc29ja2pzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbc29ja2pzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc3RyZWFtaW5nX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbXG4gICAgICAgIG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh4aHJfc3RyZWFtaW5nX3RyYW5zcG9ydCksIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0LCB4ZHJfc3RyZWFtaW5nX3RyYW5zcG9ydClcbiAgICBdLCB0aW1lb3V0cyk7XG4gICAgdmFyIHBvbGxpbmdfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtcbiAgICAgICAgbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHhocl9wb2xsaW5nX3RyYW5zcG9ydCksIHhocl9wb2xsaW5nX3RyYW5zcG9ydCwgeGRyX3BvbGxpbmdfdHJhbnNwb3J0KVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW1xuICAgICAgICBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koc3RyZWFtaW5nX2xvb3ApLCBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneShbXG4gICAgICAgICAgICBzdHJlYW1pbmdfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KHBvbGxpbmdfbG9vcCwgeyBkZWxheTogNDAwMCB9KVxuICAgICAgICBdKSwgcG9sbGluZ19sb29wKVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9mYWxsYmFja19sb29wID0gbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KGh0dHBfbG9vcCksIGh0dHBfbG9vcCwgc29ja2pzX2xvb3ApO1xuICAgIHZhciB3c1N0cmF0ZWd5O1xuICAgIGlmIChiYXNlT3B0aW9ucy51c2VUTFMpIHtcbiAgICAgICAgd3NTdHJhdGVneSA9IG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5KFtcbiAgICAgICAgICAgIHdzX2xvb3AsXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneShodHRwX2ZhbGxiYWNrX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3koW1xuICAgICAgICAgICAgd3NfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KHdzc19sb29wLCB7IGRlbGF5OiAyMDAwIH0pLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3koaHR0cF9mYWxsYmFja19sb29wLCB7IGRlbGF5OiA1MDAwIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGNhY2hlZF9zdHJhdGVneShuZXcgZmlyc3RfY29ubmVjdGVkX3N0cmF0ZWd5KG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh3c190cmFuc3BvcnQpLCB3c1N0cmF0ZWd5LCBodHRwX2ZhbGxiYWNrX2xvb3ApKSwgZGVmaW5lZFRyYW5zcG9ydHMsIHtcbiAgICAgICAgdHRsOiAxODAwMDAwLFxuICAgICAgICB0aW1lbGluZTogYmFzZU9wdGlvbnMudGltZWxpbmUsXG4gICAgICAgIHVzZVRMUzogYmFzZU9wdGlvbnMudXNlVExTXG4gICAgfSk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdF9zdHJhdGVneSA9IChnZXREZWZhdWx0U3RyYXRlZ3kpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplci50c1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudGltZWxpbmUuaW5mbyhzZWxmLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcbiAgICAgICAgdHJhbnNwb3J0OiBzZWxmLm5hbWUgKyAoc2VsZi5vcHRpb25zLnVzZVRMUyA/ICdzJyA6ICcnKVxuICAgIH0pKTtcbiAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZi5ob29rcy5maWxlKSB7XG4gICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemluZycpO1xuICAgICAgICBEZXBlbmRlbmNpZXMubG9hZChzZWxmLmhvb2tzLmZpbGUsIHsgdXNlVExTOiBzZWxmLm9wdGlvbnMudXNlVExTIH0sIGZ1bmN0aW9uIChlcnJvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgIH1cbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvaHR0cC9odHRwX3hkb21haW5fcmVxdWVzdC50c1xuXG52YXIgaHR0cF94ZG9tYWluX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgeGRyID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgbmV3IFJlcXVlc3RUaW1lZE91dCgpKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuaygyMDAsIHhkci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgMjAwKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geGRyO1xuICAgIH0sXG4gICAgYWJvcnRSZXF1ZXN0OiBmdW5jdGlvbiAoeGRyKSB7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSB4ZHIub25lcnJvciA9IHhkci5vbnByb2dyZXNzID0geGRyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHhkci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hkb21haW5fcmVxdWVzdCA9IChodHRwX3hkb21haW5fcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3JlcXVlc3QudHNcbnZhciBodHRwX3JlcXVlc3RfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cbnZhciBNQVhfQlVGRkVSX0xFTkdUSCA9IDI1NiAqIDEwMjQ7XG52YXIgaHR0cF9yZXF1ZXN0X0hUVFBSZXF1ZXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBodHRwX3JlcXVlc3RfZXh0ZW5kcyhIVFRQUmVxdWVzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVFRQUmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaG9va3MgPSBob29rcztcbiAgICAgICAgX3RoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICBfdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMueGhyID0gdGhpcy5ob29rcy5nZXRSZXF1ZXN0KHRoaXMpO1xuICAgICAgICB0aGlzLnVubG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcnVudGltZS5hZGRVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcbiAgICAgICAgdGhpcy54aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnhoci5zZW5kKHBheWxvYWQpO1xuICAgIH07XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51bmxvYWRlcikge1xuICAgICAgICAgICAgcnVudGltZS5yZW1vdmVVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcbiAgICAgICAgICAgIHRoaXMudW5sb2FkZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhocikge1xuICAgICAgICAgICAgdGhpcy5ob29rcy5hYm9ydFJlcXVlc3QodGhpcy54aHIpO1xuICAgICAgICAgICAgdGhpcy54aHIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChzdGF0dXMsIGRhdGEpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBjaHVuayA9IHRoaXMuYWR2YW5jZUJ1ZmZlcihkYXRhKTtcbiAgICAgICAgICAgIGlmIChjaHVuaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2h1bmsnLCB7IHN0YXR1czogc3RhdHVzLCBkYXRhOiBjaHVuayB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQnVmZmVyVG9vTG9uZyhkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidWZmZXJfdG9vX2xvbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmFkdmFuY2VCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgIHZhciB1bnJlYWREYXRhID0gYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24pO1xuICAgICAgICB2YXIgZW5kT2ZMaW5lUG9zaXRpb24gPSB1bnJlYWREYXRhLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICBpZiAoZW5kT2ZMaW5lUG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IGVuZE9mTGluZVBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgIHJldHVybiB1bnJlYWREYXRhLnNsaWNlKDAsIGVuZE9mTGluZVBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuaXNCdWZmZXJUb29Mb25nID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gYnVmZmVyLmxlbmd0aCAmJiBidWZmZXIubGVuZ3RoID4gTUFYX0JVRkZFUl9MRU5HVEg7XG4gICAgfTtcbiAgICByZXR1cm4gSFRUUFJlcXVlc3Q7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfcmVxdWVzdCA9IChodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvc3RhdGUudHNcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNPTk5FQ1RJTkdcIl0gPSAwXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFN0YXRlW1N0YXRlW1wiT1BFTlwiXSA9IDFdID0gXCJPUEVOXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDTE9TRURcIl0gPSAzXSA9IFwiQ0xPU0VEXCI7XG59KShTdGF0ZSB8fCAoU3RhdGUgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3RhdGUgPSAoU3RhdGUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zb2NrZXQudHNcblxuXG5cbnZhciBhdXRvSW5jcmVtZW50ID0gMTtcbnZhciBodHRwX3NvY2tldF9IVFRQU29ja2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIVFRQU29ja2V0KGhvb2tzLCB1cmwpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICB0aGlzLnNlc3Npb24gPSByYW5kb21OdW1iZXIoMTAwMCkgKyAnLycgKyByYW5kb21TdHJpbmcoOCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBnZXRMb2NhdGlvbih1cmwpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5DT05ORUNUSU5HO1xuICAgICAgICB0aGlzLm9wZW5TdHJlYW0oKTtcbiAgICB9XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRSYXcoSlNPTi5zdHJpbmdpZnkoW3BheWxvYWRdKSk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhvb2tzLnNlbmRIZWFydGJlYXQodGhpcyk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKGNvZGUsIHJlYXNvbiwgdHJ1ZSk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kUmF3ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuT1BFTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW50aW1lLmNyZWF0ZVNvY2tldFJlcXVlc3QoJ1BPU1QnLCBnZXRVbmlxdWVVUkwoZ2V0U2VuZFVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSkuc3RhcnQocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsb3NlU3RyZWFtKCk7XG4gICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24sIHdhc0NsZWFuKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGUuQ0xPU0VEO1xuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2xvc2Uoe1xuICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgd2FzQ2xlYW46IHdhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICBpZiAoY2h1bmsuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF5bG9hZDtcbiAgICAgICAgdmFyIHR5cGUgPSBjaHVuay5kYXRhLnNsaWNlKDAsIDEpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ3t9Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW4ocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF5bG9hZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnQocGF5bG9hZFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3Mub25IZWFydGJlYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZShwYXlsb2FkWzBdLCBwYXlsb2FkWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuQ09OTkVDVElORykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFzZSA9IHJlcGxhY2VIb3N0KHRoaXMubG9jYXRpb24uYmFzZSwgb3B0aW9ucy5ob3N0bmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5PUEVOO1xuICAgICAgICAgICAgaWYgKHRoaXMub25vcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgxMDA2LCAnU2VydmVyIGxvc3Qgc2Vzc2lvbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4gJiYgdGhpcy5vbm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25tZXNzYWdlKHsgZGF0YTogZXZlbnQgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uQWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uYWN0aXZpdHkpIHtcbiAgICAgICAgICAgIHRoaXMub25hY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMub25lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9wZW5TdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gcnVudGltZS5jcmVhdGVTb2NrZXRSZXF1ZXN0KCdQT1NUJywgZ2V0VW5pcXVlVVJMKHRoaXMuaG9va3MuZ2V0UmVjZWl2ZVVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2NodW5rJywgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkNodW5rKGNodW5rKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2ZpbmlzaGVkJywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgX3RoaXMuaG9va3Mub25GaW5pc2hlZChfdGhpcywgc3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2J1ZmZlcl90b29fbG9uZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNsb3NlKDEwMDYsICdDb3VsZCBub3Qgc3RhcnQgc3RyZWFtaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlU3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLnVuYmluZF9hbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIVFRQU29ja2V0O1xufSgpKTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uKHVybCkge1xuICAgIHZhciBwYXJ0cyA9IC8oW15cXD9dKilcXC8qKFxcPz8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBwYXJ0c1sxXSxcbiAgICAgICAgcXVlcnlTdHJpbmc6IHBhcnRzWzJdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFNlbmRVUkwodXJsLCBzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3NlbmQnO1xufVxuZnVuY3Rpb24gZ2V0VW5pcXVlVVJMKHVybCkge1xuICAgIHZhciBzZXBhcmF0b3IgPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgJ3Q9JyArICtuZXcgRGF0ZSgpICsgJyZuPScgKyBhdXRvSW5jcmVtZW50Kys7XG59XG5mdW5jdGlvbiByZXBsYWNlSG9zdCh1cmwsIGhvc3RuYW1lKSB7XG4gICAgdmFyIHVybFBhcnRzID0gLyhodHRwcz86XFwvXFwvKShbXlxcLzpdKykoKFxcL3w6KT8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4gdXJsUGFydHNbMV0gKyBob3N0bmFtZSArIHVybFBhcnRzWzNdO1xufVxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbU51bWJlcigzMikudG9TdHJpbmcoMzIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfc29ja2V0ID0gKGh0dHBfc29ja2V0X0hUVFBTb2NrZXQpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zdHJlYW1pbmdfc29ja2V0LnRzXG52YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3N0cmVhbWluZycgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIHNlbmRIZWFydGJlYXQ6IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgc29ja2V0LnNlbmRSYXcoJ1tdJyk7XG4gICAgfSxcbiAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoc29ja2V0LCBzdGF0dXMpIHtcbiAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0ID0gKGh0dHBfc3RyZWFtaW5nX3NvY2tldF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3BvbGxpbmdfc29ja2V0LnRzXG52YXIgaHR0cF9wb2xsaW5nX3NvY2tldF9ob29rcyA9IHtcbiAgICBnZXRSZWNlaXZlVVJMOiBmdW5jdGlvbiAodXJsLCBzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB1cmwuYmFzZSArICcvJyArIHNlc3Npb24gKyAnL3hocicgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHNvY2tldC5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNvY2tldC5vbkNsb3NlKDEwMDYsICdDb25uZWN0aW9uIGludGVycnVwdGVkICgnICsgc3RhdHVzICsgJyknLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9wb2xsaW5nX3NvY2tldCA9IChodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvaXNvbW9ycGhpYy9odHRwL2h0dHBfeGhyX3JlcXVlc3QudHNcblxudmFyIGh0dHBfeGhyX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBydW50aW1lLmdldFhIUkFQSSgpO1xuICAgICAgICB2YXIgeGhyID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdmaW5pc2hlZCcsIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB4aHI7XG4gICAgfSxcbiAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hocl9yZXF1ZXN0ID0gKGh0dHBfeGhyX3JlcXVlc3RfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cC50c1xuXG5cblxuXG5cbnZhciBIVFRQID0ge1xuICAgIGNyZWF0ZVN0cmVhbWluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTb2NrZXQoaHR0cF9zdHJlYW1pbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUG9sbGluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTb2NrZXQoaHR0cF9wb2xsaW5nX3NvY2tldCwgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNvY2tldDogZnVuY3Rpb24gKGhvb2tzLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBodHRwX3NvY2tldChob29rcywgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoaHR0cF94aHJfcmVxdWVzdCwgbWV0aG9kLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUmVxdWVzdDogZnVuY3Rpb24gKGhvb2tzLCBtZXRob2QsIHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IGh0dHBfcmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX2h0dHAgPSAoSFRUUCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9odHRwL2h0dHAudHNcblxuXG5odHRwX2h0dHAuY3JlYXRlWERSID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hkb21haW5fcmVxdWVzdCwgbWV0aG9kLCB1cmwpO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHdlYl9odHRwX2h0dHAgPSAoaHR0cF9odHRwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3J1bnRpbWUudHNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBSdW50aW1lID0ge1xuICAgIG5leHRBdXRoQ2FsbGJhY2tJRDogMSxcbiAgICBhdXRoX2NhbGxiYWNrczoge30sXG4gICAgU2NyaXB0UmVjZWl2ZXJzOiBTY3JpcHRSZWNlaXZlcnMsXG4gICAgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzOiBEZXBlbmRlbmNpZXNSZWNlaXZlcnMsXG4gICAgZ2V0RGVmYXVsdFN0cmF0ZWd5OiBkZWZhdWx0X3N0cmF0ZWd5LFxuICAgIFRyYW5zcG9ydHM6IHRyYW5zcG9ydHNfdHJhbnNwb3J0cyxcbiAgICB0cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI6IHRyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyLFxuICAgIEhUVFBGYWN0b3J5OiB3ZWJfaHR0cF9odHRwLFxuICAgIFRpbWVsaW5lVHJhbnNwb3J0OiBqc29ucF90aW1lbGluZSxcbiAgICBnZXRYSFJBUEk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbiAgICB9LFxuICAgIGdldFdlYlNvY2tldEFQSTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuICAgIH0sXG4gICAgc2V0dXA6IGZ1bmN0aW9uIChQdXNoZXJDbGFzcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuUHVzaGVyID0gUHVzaGVyQ2xhc3M7XG4gICAgICAgIHZhciBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkRvY3VtZW50Qm9keShQdXNoZXJDbGFzcy5yZWFkeSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghd2luZG93LkpTT04pIHtcbiAgICAgICAgICAgIERlcGVuZGVuY2llcy5sb2FkKCdqc29uMicsIHt9LCBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldERvY3VtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9LFxuICAgIGdldFByb3RvY29sOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgfSxcbiAgICBnZXRBdXRob3JpemVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBhamF4OiB4aHJfYXV0aCwganNvbnA6IGpzb25wX2F1dGggfTtcbiAgICB9LFxuICAgIG9uRG9jdW1lbnRCb2R5OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRvY3VtZW50Qm9keShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlSlNPTlBSZXF1ZXN0OiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcganNvbnBfcmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgIH0sXG4gICAgY3JlYXRlU2NyaXB0UmVxdWVzdDogZnVuY3Rpb24gKHNyYykge1xuICAgICAgICByZXR1cm4gbmV3IHNjcmlwdF9yZXF1ZXN0KHNyYyk7XG4gICAgfSxcbiAgICBnZXRMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYSFI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WEhSQVBJKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNaWNyb3NvZnRYSFIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlWE1MSHR0cFJlcXVlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIH0sXG4gICAgY3JlYXRlTWljcm9zb2Z0WEhSOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9LFxuICAgIGdldE5ldHdvcms6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldF9pbmZvX05ldHdvcms7XG4gICAgfSxcbiAgICBjcmVhdGVXZWJTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRXZWJTb2NrZXRBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0UmVxdWVzdDogZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzWEhSU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhIUihtZXRob2QsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1hEUlN1cHBvcnRlZCh1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5IVFRQRmFjdG9yeS5jcmVhdGVYRFIobWV0aG9kLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0Nyb3NzLW9yaWdpbiBIVFRQIHJlcXVlc3RzIGFyZSBub3Qgc3VwcG9ydGVkJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNYSFJTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcbiAgICAgICAgcmV0dXJuIChCb29sZWFuKENvbnN0cnVjdG9yKSAmJiBuZXcgQ29uc3RydWN0b3IoKS53aXRoQ3JlZGVudGlhbHMgIT09IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpc1hEUlN1cHBvcnRlZDogZnVuY3Rpb24gKHVzZVRMUykge1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSB1c2VUTFMgPyAnaHR0cHM6JyA6ICdodHRwOic7XG4gICAgICAgIHZhciBkb2N1bWVudFByb3RvY29sID0gdGhpcy5nZXRQcm90b2NvbCgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4od2luZG93WydYRG9tYWluUmVxdWVzdCddKSAmJiBkb2N1bWVudFByb3RvY29sID09PSBwcm90b2NvbCk7XG4gICAgfSxcbiAgICBhZGRVbmxvYWRMaXN0ZW5lcjogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlVW5sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmRldGFjaEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcnVudGltZSA9IChSdW50aW1lKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS9sZXZlbC50c1xudmFyIFRpbWVsaW5lTGV2ZWw7XG4oZnVuY3Rpb24gKFRpbWVsaW5lTGV2ZWwpIHtcbiAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJFUlJPUlwiXSA9IDNdID0gXCJFUlJPUlwiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIklORk9cIl0gPSA2XSA9IFwiSU5GT1wiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkRFQlVHXCJdID0gN10gPSBcIkRFQlVHXCI7XG59KShUaW1lbGluZUxldmVsIHx8IChUaW1lbGluZUxldmVsID0ge30pKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRpbWVsaW5lX2xldmVsID0gKFRpbWVsaW5lTGV2ZWwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL3RpbWVsaW5lLnRzXG5cblxuXG52YXIgdGltZWxpbmVfVGltZWxpbmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVsaW5lKGtleSwgc2Vzc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5zZW50ID0gMDtcbiAgICAgICAgdGhpcy51bmlxdWVJRCA9IDA7XG4gICAgfVxuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobGV2ZWwsIGV2ZW50KSB7XG4gICAgICAgIGlmIChsZXZlbCA8PSB0aGlzLm9wdGlvbnMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXh0ZW5kKHt9LCBldmVudCwgeyB0aW1lc3RhbXA6IHV0aWwubm93KCkgfSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdCAmJiB0aGlzLmV2ZW50cy5sZW5ndGggPiB0aGlzLm9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuRVJST1IsIGV2ZW50KTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLklORk8sIGV2ZW50KTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5ERUJVRywgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5sZW5ndGggPT09IDA7XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gZXh0ZW5kKHtcbiAgICAgICAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgICAgICAgIGJ1bmRsZTogdGhpcy5zZW50ICsgMSxcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICBsaWI6ICdqcycsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMub3B0aW9ucy5jbHVzdGVyLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHRoaXMub3B0aW9ucy5mZWF0dXJlcyxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLmV2ZW50c1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgc2VuZGZuKGRhdGEsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5nZW5lcmF0ZVVuaXF1ZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlEKys7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlEO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbWVsaW5lO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRpbWVsaW5lX3RpbWVsaW5lID0gKHRpbWVsaW5lX1RpbWVsaW5lKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3RyYW5zcG9ydF9zdHJhdGVneS50c1xuXG5cblxuXG52YXIgdHJhbnNwb3J0X3N0cmF0ZWd5X1RyYW5zcG9ydFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRTdHJhdGVneShuYW1lLCBwcmlvcml0eSwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuICAgIFRyYW5zcG9ydFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmlzU3VwcG9ydGVkKHtcbiAgICAgICAgICAgIHVzZVRMUzogdGhpcy5vcHRpb25zLnVzZVRMU1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBVbnN1cHBvcnRlZFN0cmF0ZWd5KCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByaW9yaXR5IDwgbWluUHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWlsQXR0ZW1wdChuZXcgVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3coKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0LmNyZWF0ZUNvbm5lY3Rpb24odGhpcy5uYW1lLCB0aGlzLnByaW9yaXR5LCB0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgaGFuZHNoYWtlID0gbnVsbDtcbiAgICAgICAgdmFyIG9uSW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LmNvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRzaGFrZSA9IGZhY3RvcnkuY3JlYXRlSGFuZHNoYWtlKHRyYW5zcG9ydCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRUcmFuc3BvcnQ7XG4gICAgICAgICAgICBzZXJpYWxpemVkVHJhbnNwb3J0ID0gc2FmZUpTT05TdHJpbmdpZnkodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBUcmFuc3BvcnRDbG9zZWQoc2VyaWFsaXplZFRyYW5zcG9ydCkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdvcGVuJywgb25PcGVuKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgICAgIHRyYW5zcG9ydC5pbml0aWFsaXplKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmlvcml0eSA8IHApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc3BvcnRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfc3RyYXRlZ3kgPSAodHJhbnNwb3J0X3N0cmF0ZWd5X1RyYW5zcG9ydFN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGZhaWxBdHRlbXB0KGVycm9yLCBjYWxsYmFjaykge1xuICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG4gICAgfTtcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3N0cmF0ZWd5X2J1aWxkZXIudHNcblxuXG5cblxuXG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9UcmFuc3BvcnRzID0gcnVudGltZS5UcmFuc3BvcnRzO1xudmFyIHN0cmF0ZWd5X2J1aWxkZXJfZGVmaW5lVHJhbnNwb3J0ID0gZnVuY3Rpb24gKGNvbmZpZywgbmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICB2YXIgdHJhbnNwb3J0Q2xhc3MgPSBzdHJhdGVneV9idWlsZGVyX1RyYW5zcG9ydHNbdHlwZV07XG4gICAgaWYgKCF0cmFuc3BvcnRDbGFzcykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRUcmFuc3BvcnQodHlwZSk7XG4gICAgfVxuICAgIHZhciBlbmFibGVkID0gKCFjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgYXJyYXlJbmRleE9mKGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cywgbmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAoIWNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgICAgIGFycmF5SW5kZXhPZihjb25maWcuZGlzYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSA9PT0gLTEpO1xuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBpZ25vcmVOdWxsT3JpZ2luOiBjb25maWcuaWdub3JlTnVsbE9yaWdpbiB9LCBvcHRpb25zKTtcbiAgICAgICAgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9zdHJhdGVneShuYW1lLCBwcmlvcml0eSwgbWFuYWdlciA/IG1hbmFnZXIuZ2V0QXNzaXN0YW50KHRyYW5zcG9ydENsYXNzKSA6IHRyYW5zcG9ydENsYXNzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyYW5zcG9ydCA9IHN0cmF0ZWd5X2J1aWxkZXJfVW5zdXBwb3J0ZWRTdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9VbnN1cHBvcnRlZFN0cmF0ZWd5ID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIChfLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBVbnN1cHBvcnRlZFN0cmF0ZWd5KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uICgpIHsgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29uZmlnLnRzXG5cblxuZnVuY3Rpb24gZ2V0Q29uZmlnKG9wdHMpIHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG9wdHMuYWN0aXZpdHlUaW1lb3V0IHx8IGRlZmF1bHRzLmFjdGl2aXR5VGltZW91dCxcbiAgICAgICAgYXV0aEVuZHBvaW50OiBvcHRzLmF1dGhFbmRwb2ludCB8fCBkZWZhdWx0cy5hdXRoRW5kcG9pbnQsXG4gICAgICAgIGF1dGhUcmFuc3BvcnQ6IG9wdHMuYXV0aFRyYW5zcG9ydCB8fCBkZWZhdWx0cy5hdXRoVHJhbnNwb3J0LFxuICAgICAgICBjbHVzdGVyOiBvcHRzLmNsdXN0ZXIgfHwgZGVmYXVsdHMuY2x1c3RlcixcbiAgICAgICAgaHR0cFBhdGg6IG9wdHMuaHR0cFBhdGggfHwgZGVmYXVsdHMuaHR0cFBhdGgsXG4gICAgICAgIGh0dHBQb3J0OiBvcHRzLmh0dHBQb3J0IHx8IGRlZmF1bHRzLmh0dHBQb3J0LFxuICAgICAgICBodHRwc1BvcnQ6IG9wdHMuaHR0cHNQb3J0IHx8IGRlZmF1bHRzLmh0dHBzUG9ydCxcbiAgICAgICAgcG9uZ1RpbWVvdXQ6IG9wdHMucG9uZ1RpbWVvdXQgfHwgZGVmYXVsdHMucG9uZ1RpbWVvdXQsXG4gICAgICAgIHN0YXRzSG9zdDogb3B0cy5zdGF0c0hvc3QgfHwgZGVmYXVsdHMuc3RhdHNfaG9zdCxcbiAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiBvcHRzLnVuYXZhaWxhYmxlVGltZW91dCB8fCBkZWZhdWx0cy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgIHdzUGF0aDogb3B0cy53c1BhdGggfHwgZGVmYXVsdHMud3NQYXRoLFxuICAgICAgICB3c1BvcnQ6IG9wdHMud3NQb3J0IHx8IGRlZmF1bHRzLndzUG9ydCxcbiAgICAgICAgd3NzUG9ydDogb3B0cy53c3NQb3J0IHx8IGRlZmF1bHRzLndzc1BvcnQsXG4gICAgICAgIGVuYWJsZVN0YXRzOiBnZXRFbmFibGVTdGF0c0NvbmZpZyhvcHRzKSxcbiAgICAgICAgaHR0cEhvc3Q6IGdldEh0dHBIb3N0KG9wdHMpLFxuICAgICAgICB1c2VUTFM6IHNob3VsZFVzZVRMUyhvcHRzKSxcbiAgICAgICAgd3NIb3N0OiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpXG4gICAgfTtcbiAgICBpZiAoJ2F1dGgnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5hdXRoID0gb3B0cy5hdXRoO1xuICAgIGlmICgnYXV0aG9yaXplcicgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmF1dGhvcml6ZXIgPSBvcHRzLmF1dGhvcml6ZXI7XG4gICAgaWYgKCdkaXNhYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmRpc2FibGVkVHJhbnNwb3J0cztcbiAgICBpZiAoJ2VuYWJsZWRUcmFuc3BvcnRzJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmVuYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnaWdub3JlTnVsbE9yaWdpbicgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmlnbm9yZU51bGxPcmlnaW4gPSBvcHRzLmlnbm9yZU51bGxPcmlnaW47XG4gICAgaWYgKCd0aW1lbGluZVBhcmFtcycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLnRpbWVsaW5lUGFyYW1zID0gb3B0cy50aW1lbGluZVBhcmFtcztcbiAgICBpZiAoJ25hY2wnIGluIG9wdHMpIHtcbiAgICAgICAgY29uZmlnLm5hY2wgPSBvcHRzLm5hY2w7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5mdW5jdGlvbiBnZXRIdHRwSG9zdChvcHRzKSB7XG4gICAgaWYgKG9wdHMuaHR0cEhvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMuaHR0cEhvc3Q7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFwic29ja2pzLVwiICsgb3B0cy5jbHVzdGVyICsgXCIucHVzaGVyLmNvbVwiO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdHMuaHR0cEhvc3Q7XG59XG5mdW5jdGlvbiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy53c0hvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMud3NIb3N0O1xuICAgIH1cbiAgICBpZiAob3B0cy5jbHVzdGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRXZWJzb2NrZXRIb3N0RnJvbUNsdXN0ZXIob3B0cy5jbHVzdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihkZWZhdWx0cy5jbHVzdGVyKTtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihjbHVzdGVyKSB7XG4gICAgcmV0dXJuIFwid3MtXCIgKyBjbHVzdGVyICsgXCIucHVzaGVyLmNvbVwiO1xufVxuZnVuY3Rpb24gc2hvdWxkVXNlVExTKG9wdHMpIHtcbiAgICBpZiAocnVudGltZS5nZXRQcm90b2NvbCgpID09PSAnaHR0cHM6Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0cy5mb3JjZVRMUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpIHtcbiAgICBpZiAoJ2VuYWJsZVN0YXRzJyBpbiBvcHRzKSB7XG4gICAgICAgIHJldHVybiBvcHRzLmVuYWJsZVN0YXRzO1xuICAgIH1cbiAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0cykge1xuICAgICAgICByZXR1cm4gIW9wdHMuZGlzYWJsZVN0YXRzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvcHVzaGVyLnRzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcHVzaGVyX1B1c2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMuY2x1c3RlciAmJiAhKG9wdGlvbnMud3NIb3N0IHx8IG9wdGlvbnMuaHR0cEhvc3QpKSB7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdqYXZhc2NyaXB0UXVpY2tTdGFydCcpO1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJZb3Ugc2hvdWxkIGFsd2F5cyBzcGVjaWZ5IGEgY2x1c3RlciB3aGVuIGNvbm5lY3RpbmcuIFwiICsgc3VmZml4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1RoZSBkaXNhYmxlU3RhdHMgb3B0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZW5hYmxlU3RhdHMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleSA9IGFwcF9rZXk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gZ2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gZmFjdG9yeS5jcmVhdGVDaGFubmVscygpO1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyID0gbmV3IGRpc3BhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG5ldyB0aW1lbGluZV90aW1lbGluZSh0aGlzLmtleSwgdGhpcy5zZXNzaW9uSUQsIHtcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMuY29uZmlnLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogUHVzaGVyLmdldENsaWVudEZlYXR1cmVzKCksXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMuY29uZmlnLnRpbWVsaW5lUGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICAgICAgbGV2ZWw6IHRpbWVsaW5lX2xldmVsLklORk8sXG4gICAgICAgICAgICB2ZXJzaW9uOiBkZWZhdWx0cy5WRVJTSU9OXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlU3RhdHMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXIgPSBmYWN0b3J5LmNyZWF0ZVRpbWVsaW5lU2VuZGVyKHRoaXMudGltZWxpbmUsIHtcbiAgICAgICAgICAgICAgICBob3N0OiB0aGlzLmNvbmZpZy5zdGF0c0hvc3QsXG4gICAgICAgICAgICAgICAgcGF0aDogJy90aW1lbGluZS92Mi8nICsgcnVudGltZS5UaW1lbGluZVRyYW5zcG9ydC5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2V0U3RyYXRlZ3kgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWUuZ2V0RGVmYXVsdFN0cmF0ZWd5KF90aGlzLmNvbmZpZywgb3B0aW9ucywgc3RyYXRlZ3lfYnVpbGRlcl9kZWZpbmVUcmFuc3BvcnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBmYWN0b3J5LmNyZWF0ZUNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMua2V5LCB7XG4gICAgICAgICAgICBnZXRTdHJhdGVneTogZ2V0U3RyYXRlZ3ksXG4gICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcbiAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogdGhpcy5jb25maWcuYWN0aXZpdHlUaW1lb3V0LFxuICAgICAgICAgICAgcG9uZ1RpbWVvdXQ6IHRoaXMuY29uZmlnLnBvbmdUaW1lb3V0LFxuICAgICAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiB0aGlzLmNvbmZpZy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgICAgICB1c2VUTFM6IEJvb2xlYW4odGhpcy5jb25maWcudXNlVExTKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZUFsbCgpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZWxpbmVTZW5kZXIuc2VuZChfdGhpcy5jb25uZWN0aW9uLmlzVXNpbmdUTFMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICAgICAgdmFyIGludGVybmFsID0gZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMDtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBfdGhpcy5jaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWwuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nbG9iYWxfZW1pdHRlci5lbWl0KGV2ZW50LmV2ZW50LCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0aW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Rpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5uZWxzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBQdXNoZXIuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGluc3RhbmNlczogUHVzaGVyLmluc3RhbmNlcy5sZW5ndGggfSk7XG4gICAgICAgIGlmIChQdXNoZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUHVzaGVyLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBQdXNoZXIuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gUHVzaGVyLmluc3RhbmNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIFB1c2hlci5pbnN0YW5jZXNbaV0uY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBrZXlzKGZpbHRlck9iamVjdCh7IHdzOiBydW50aW1lLlRyYW5zcG9ydHMud3MgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmlzU3VwcG9ydGVkKHt9KTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5jaGFubmVsID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuZmluZChuYW1lKTtcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYWxsQ2hhbm5lbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFsbCgpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNpbmdUTFMgPSB0aGlzLmNvbm5lY3Rpb24uaXNVc2luZ1RMUygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lbGluZVNlbmRlciA9IHRoaXMudGltZWxpbmVTZW5kZXI7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbmV3IFBlcmlvZGljVGltZXIoNjAwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVTZW5kZXIuc2VuZCh1c2luZ1RMUyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kX2FsbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9hbGwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoYW5uZWxOYW1lO1xuICAgICAgICBmb3IgKGNoYW5uZWxOYW1lIGluIHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzLmNoYW5uZWxzLmhhc093blByb3BlcnR5KGNoYW5uZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKGNoYW5uZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2hhbm5lbF9uYW1lKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcbiAgICAgICAgaWYgKGNoYW5uZWwuc3Vic2NyaXB0aW9uUGVuZGluZyAmJiBjaGFubmVsLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY2hhbm5lbC5yZWluc3RhdGVTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmZpbmQoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgaWYgKGNoYW5uZWwgJiYgY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nKSB7XG4gICAgICAgICAgICBjaGFubmVsLmNhbmNlbFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc2VuZF9ldmVudCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc2hvdWxkVXNlVExTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXNlVExTO1xuICAgIH07XG4gICAgUHVzaGVyLmluc3RhbmNlcyA9IFtdO1xuICAgIFB1c2hlci5pc1JlYWR5ID0gZmFsc2U7XG4gICAgUHVzaGVyLmxvZ1RvQ29uc29sZSA9IGZhbHNlO1xuICAgIFB1c2hlci5SdW50aW1lID0gcnVudGltZTtcbiAgICBQdXNoZXIuU2NyaXB0UmVjZWl2ZXJzID0gcnVudGltZS5TY3JpcHRSZWNlaXZlcnM7XG4gICAgUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycyA9IHJ1bnRpbWUuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzO1xuICAgIFB1c2hlci5hdXRoX2NhbGxiYWNrcyA9IHJ1bnRpbWUuYXV0aF9jYWxsYmFja3M7XG4gICAgcmV0dXJuIFB1c2hlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb3JlX3B1c2hlciA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHB1c2hlcl9QdXNoZXIpO1xuZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyAnWW91IG11c3QgcGFzcyB5b3VyIGFwcCBrZXkgd2hlbiB5b3UgaW5zdGFudGlhdGUgUHVzaGVyLic7XG4gICAgfVxufVxucnVudGltZS5zZXR1cChwdXNoZXJfUHVzaGVyKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=