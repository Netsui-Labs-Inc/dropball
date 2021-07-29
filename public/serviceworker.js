(self["webpackChunk"] = self["webpackChunk"] || []).push([["/serviceworker"],{

/***/ "./resources/js/serviceworker.js":
/*!***************************************!*\
  !*** ./resources/js/serviceworker.js ***!
  \***************************************/
/***/ (function() {

var _this = this;

var staticCacheName = "pwa-v" + new Date().getTime();
var filesToCache = ['/offline', '/css/app.css', '/css/frontend.css', '/css/tailwind.css', '/js/app.js', '/js/frontend.js', '/js/vendor.js', '/js/manifest.js', '/images/icons/icon-72x72.png', '/images/icons/icon-96x96.png', '/images/icons/icon-128x128.png', '/images/icons/icon-144x144.png', '/images/icons/icon-152x152.png', '/images/icons/icon-192x192.png', '/images/icons/icon-384x384.png', '/images/icons/icon-512x512.png']; // Cache on install

self.addEventListener("install", function (event) {
  _this.skipWaiting();

  event.waitUntil(caches.open(staticCacheName).then(function (cache) {
    return cache.addAll(filesToCache);
  }));
}); // Clear cache on activate

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.filter(function (cacheName) {
      return cacheName.startsWith("pwa-");
    }).filter(function (cacheName) {
      return cacheName !== staticCacheName;
    }).map(function (cacheName) {
      return caches["delete"](cacheName);
    }));
  }));
}); // Serve from Cache

self.addEventListener("fetch", function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  })["catch"](function () {
    return caches.match('offline');
  }));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/serviceworker.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2VydmljZXdvcmtlci5qcyJdLCJuYW1lcyI6WyJzdGF0aWNDYWNoZU5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsImZpbGVzVG9DYWNoZSIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJza2lwV2FpdGluZyIsIndhaXRVbnRpbCIsImNhY2hlcyIsIm9wZW4iLCJ0aGVuIiwiY2FjaGUiLCJhZGRBbGwiLCJrZXlzIiwiY2FjaGVOYW1lcyIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJjYWNoZU5hbWUiLCJzdGFydHNXaXRoIiwibWFwIiwicmVzcG9uZFdpdGgiLCJtYXRjaCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsZUFBZSxHQUFHLFVBQVUsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWhDO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLENBQ2YsVUFEZSxFQUVmLGNBRmUsRUFHZixtQkFIZSxFQUlmLG1CQUplLEVBS2YsWUFMZSxFQU1mLGlCQU5lLEVBT2YsZUFQZSxFQVFmLGlCQVJlLEVBU2YsOEJBVGUsRUFVZiw4QkFWZSxFQVdmLGdDQVhlLEVBWWYsZ0NBWmUsRUFhZixnQ0FiZSxFQWNmLGdDQWRlLEVBZWYsZ0NBZmUsRUFnQmYsZ0NBaEJlLENBQW5CLEMsQ0FtQkE7O0FBQ0FDLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBQUMsS0FBSyxFQUFJO0FBQ3RDLE9BQUksQ0FBQ0MsV0FBTDs7QUFDQUQsT0FBSyxDQUFDRSxTQUFOLENBQ0lDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVixlQUFaLEVBQ0tXLElBREwsQ0FDVSxVQUFBQyxLQUFLLEVBQUk7QUFDWCxXQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVYsWUFBYixDQUFQO0FBQ0gsR0FITCxDQURKO0FBTUgsQ0FSRCxFLENBVUE7O0FBQ0FDLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsVUFBQUMsS0FBSyxFQUFJO0FBQ3ZDQSxPQUFLLENBQUNFLFNBQU4sQ0FDSUMsTUFBTSxDQUFDSyxJQUFQLEdBQWNILElBQWQsQ0FBbUIsVUFBQUksVUFBVSxFQUFJO0FBQzdCLFdBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUNIRixVQUFVLENBQ0xHLE1BREwsQ0FDWSxVQUFBQyxTQUFTO0FBQUEsYUFBS0EsU0FBUyxDQUFDQyxVQUFWLENBQXFCLE1BQXJCLENBQUw7QUFBQSxLQURyQixFQUVLRixNQUZMLENBRVksVUFBQUMsU0FBUztBQUFBLGFBQUtBLFNBQVMsS0FBS25CLGVBQW5CO0FBQUEsS0FGckIsRUFHS3FCLEdBSEwsQ0FHUyxVQUFBRixTQUFTO0FBQUEsYUFBSVYsTUFBTSxVQUFOLENBQWNVLFNBQWQsQ0FBSjtBQUFBLEtBSGxCLENBREcsQ0FBUDtBQU1ILEdBUEQsQ0FESjtBQVVILENBWEQsRSxDQWFBOztBQUNBZixJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUFDLEtBQUssRUFBSTtBQUNwQ0EsT0FBSyxDQUFDZ0IsV0FBTixDQUNJYixNQUFNLENBQUNjLEtBQVAsQ0FBYWpCLEtBQUssQ0FBQ2tCLE9BQW5CLEVBQ0tiLElBREwsQ0FDVSxVQUFBYyxRQUFRLEVBQUk7QUFDZCxXQUFPQSxRQUFRLElBQUlDLEtBQUssQ0FBQ3BCLEtBQUssQ0FBQ2tCLE9BQVAsQ0FBeEI7QUFDSCxHQUhMLFdBSVcsWUFBTTtBQUNULFdBQU9mLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhLFNBQWIsQ0FBUDtBQUNILEdBTkwsQ0FESjtBQVNILENBVkQsRSIsImZpbGUiOiIvc2VydmljZXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzdGF0aWNDYWNoZU5hbWUgPSBcInB3YS12XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbnZhciBmaWxlc1RvQ2FjaGUgPSBbXG4gICAgJy9vZmZsaW5lJyxcbiAgICAnL2Nzcy9hcHAuY3NzJyxcbiAgICAnL2Nzcy9mcm9udGVuZC5jc3MnLFxuICAgICcvY3NzL3RhaWx3aW5kLmNzcycsXG4gICAgJy9qcy9hcHAuanMnLFxuICAgICcvanMvZnJvbnRlbmQuanMnLFxuICAgICcvanMvdmVuZG9yLmpzJyxcbiAgICAnL2pzL21hbmlmZXN0LmpzJyxcbiAgICAnL2ltYWdlcy9pY29ucy9pY29uLTcyeDcyLnBuZycsXG4gICAgJy9pbWFnZXMvaWNvbnMvaWNvbi05Nng5Ni5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tMTI4eDEyOC5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tMTQ0eDE0NC5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tMTUyeDE1Mi5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tMTkyeDE5Mi5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tMzg0eDM4NC5wbmcnLFxuICAgICcvaW1hZ2VzL2ljb25zL2ljb24tNTEyeDUxMi5wbmcnLFxuXTtcblxuLy8gQ2FjaGUgb24gaW5zdGFsbFxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCBldmVudCA9PiB7XG4gICAgdGhpcy5za2lwV2FpdGluZygpO1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgY2FjaGVzLm9wZW4oc3RhdGljQ2FjaGVOYW1lKVxuICAgICAgICAgICAgLnRoZW4oY2FjaGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoZmlsZXNUb0NhY2hlKTtcbiAgICAgICAgICAgIH0pXG4gICAgKVxufSk7XG5cbi8vIENsZWFyIGNhY2hlIG9uIGFjdGl2YXRlXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgY2FjaGVzLmtleXMoKS50aGVuKGNhY2hlTmFtZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGNhY2hlTmFtZXNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihjYWNoZU5hbWUgPT4gKGNhY2hlTmFtZS5zdGFydHNXaXRoKFwicHdhLVwiKSkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoY2FjaGVOYW1lID0+IChjYWNoZU5hbWUgIT09IHN0YXRpY0NhY2hlTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoY2FjaGVOYW1lID0+IGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG4vLyBTZXJ2ZSBmcm9tIENhY2hlXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCBldmVudCA9PiB7XG4gICAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgICAgIGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZSB8fCBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXMubWF0Y2goJ29mZmxpbmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9