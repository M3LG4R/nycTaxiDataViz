/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
 // d3.json("/data/taxi_data.json").then( data => console.log(data));

window.addEventListener('DOMContentLoaded', function (e) {
  var slider = document.getElementById("time-slider");
  var output = document.getElementById("slider-value");
  var typeButton = document.getElementById("toggle-type");
  var carButton = document.getElementById("toggle-car");
  var time = document.getElementById("time-info");
  var hours = (parseInt(slider.value) + 11) % 12 + 1;
  var suffix = parseInt(slider.value) >= 12 ? 'PM' : 'AM'; // Display the default slider value

  output.value = slider.value;
  time.innerHTML = slider.value === "24" ? "Whole day" : hours.toString() + ":00 " + suffix; // Update the current slider value (each time you drag the slider handle)

  slider.oninput = function () {
    output.value = this.value;
    hours = (parseInt(slider.value) + 11) % 12 + 1;
    suffix = parseInt(slider.value) >= 12 ? 'PM' : 'AM';
    time.innerHTML = slider.value === "24" ? "Whole day" : hours.toString() + ":00 " + suffix;
  };

  typeButton.onclick = function () {
    typeButton.value === "Pick Ups" ? typeButton.value = "Drop Offs" : typeButton.value = "Pick Ups";
    typeButton.innerHTML === "Pick Ups" ? typeButton.innerHTML = "Drop Offs" : typeButton.innerHTML = "Pick Ups";
  };

  carButton.onclick = function () {
    carButton.value === "Taxi" ? carButton.value = "App Cars" : carButton.value = "Taxi";
    carButton.innerHTML === "Taxi" ? carButton.innerHTML = "App Cars" : carButton.innerHTML = "Taxi";
  };

  typeButton.innerHTML = typeButton.value;
  carButton.innerHTML = carButton.value;
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm91dHB1dCIsInR5cGVCdXR0b24iLCJjYXJCdXR0b24iLCJ0aW1lIiwiaG91cnMiLCJwYXJzZUludCIsInZhbHVlIiwic3VmZml4IiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJvbmlucHV0Iiwib25jbGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pELE1BQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQSxNQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFiO0FBQ0EsTUFBSUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBakI7QUFDQSxNQUFJRyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBLE1BQUlJLElBQUksR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQVg7QUFDQSxNQUFJSyxLQUFLLEdBQUksQ0FBQ0MsUUFBUSxDQUFDUixNQUFNLENBQUNTLEtBQVIsQ0FBUixHQUF5QixFQUExQixJQUFnQyxFQUFoQyxHQUFxQyxDQUFsRDtBQUNBLE1BQUlDLE1BQU0sR0FBSUYsUUFBUSxDQUFDUixNQUFNLENBQUNTLEtBQVIsQ0FBUixJQUEwQixFQUEzQixHQUFnQyxJQUFoQyxHQUF1QyxJQUFwRCxDQVBpRCxDQVNoRDs7QUFDQU4sUUFBTSxDQUFDTSxLQUFQLEdBQWVULE1BQU0sQ0FBQ1MsS0FBdEI7QUFDREgsTUFBSSxDQUFDSyxTQUFMLEdBQWlCWCxNQUFNLENBQUNTLEtBQVAsS0FBaUIsSUFBakIsR0FBd0IsV0FBeEIsR0FBc0NGLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixNQUFuQixHQUE0QkYsTUFBbkYsQ0FYaUQsQ0FZakQ7O0FBQ0FWLFFBQU0sQ0FBQ2EsT0FBUCxHQUFpQixZQUFXO0FBQzFCVixVQUFNLENBQUNNLEtBQVAsR0FBZSxLQUFLQSxLQUFwQjtBQUNBRixTQUFLLEdBQUksQ0FBQ0MsUUFBUSxDQUFDUixNQUFNLENBQUNTLEtBQVIsQ0FBUixHQUF5QixFQUExQixJQUFnQyxFQUFoQyxHQUFxQyxDQUE5QztBQUNBQyxVQUFNLEdBQUlGLFFBQVEsQ0FBQ1IsTUFBTSxDQUFDUyxLQUFSLENBQVIsSUFBMEIsRUFBM0IsR0FBZ0MsSUFBaEMsR0FBdUMsSUFBaEQ7QUFDQUgsUUFBSSxDQUFDSyxTQUFMLEdBQWlCWCxNQUFNLENBQUNTLEtBQVAsS0FBaUIsSUFBakIsR0FBd0IsV0FBeEIsR0FBc0NGLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixNQUFuQixHQUE0QkYsTUFBbkY7QUFDRCxHQUxEOztBQU1BTixZQUFVLENBQUNVLE9BQVgsR0FBcUIsWUFBVztBQUM1QlYsY0FBVSxDQUFDSyxLQUFYLEtBQXFCLFVBQXJCLEdBQWtDTCxVQUFVLENBQUNLLEtBQVgsR0FBbUIsV0FBckQsR0FBbUVMLFVBQVUsQ0FBQ0ssS0FBWCxHQUFtQixVQUF0RjtBQUNBTCxjQUFVLENBQUNPLFNBQVgsS0FBeUIsVUFBekIsR0FBc0NQLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QixXQUE3RCxHQUEyRVAsVUFBVSxDQUFDTyxTQUFYLEdBQXVCLFVBQWxHO0FBQ0gsR0FIRDs7QUFLQU4sV0FBUyxDQUFDUyxPQUFWLEdBQW9CLFlBQVc7QUFDM0JULGFBQVMsQ0FBQ0ksS0FBVixLQUFvQixNQUFwQixHQUE2QkosU0FBUyxDQUFDSSxLQUFWLEdBQWtCLFVBQS9DLEdBQTRESixTQUFTLENBQUNJLEtBQVYsR0FBa0IsTUFBOUU7QUFDQUosYUFBUyxDQUFDTSxTQUFWLEtBQXdCLE1BQXhCLEdBQWlDTixTQUFTLENBQUNNLFNBQVYsR0FBc0IsVUFBdkQsR0FBb0VOLFNBQVMsQ0FBQ00sU0FBVixHQUFzQixNQUExRjtBQUNILEdBSEQ7O0FBS0FQLFlBQVUsQ0FBQ08sU0FBWCxHQUF1QlAsVUFBVSxDQUFDSyxLQUFsQztBQUNBSixXQUFTLENBQUNNLFNBQVYsR0FBc0JOLFNBQVMsQ0FBQ0ksS0FBaEM7QUFDQyxDQS9CRCxFOzs7Ozs7Ozs7OztBQ0hBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbi8vIGQzLmpzb24oXCIvZGF0YS90YXhpX2RhdGEuanNvblwiKS50aGVuKCBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbnZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWUtc2xpZGVyXCIpO1xudmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyLXZhbHVlXCIpO1xudmFyIHR5cGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS10eXBlXCIpO1xudmFyIGNhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWNhclwiKTtcbnZhciB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lLWluZm9cIik7XG5sZXQgaG91cnMgPSAoKHBhcnNlSW50KHNsaWRlci52YWx1ZSkgKyAxMSkgJSAxMiArIDEpO1xubGV0IHN1ZmZpeCA9IChwYXJzZUludChzbGlkZXIudmFsdWUpID49IDEyKT8gJ1BNJyA6ICdBTSc7XG5cbiAvLyBEaXNwbGF5IHRoZSBkZWZhdWx0IHNsaWRlciB2YWx1ZVxuIG91dHB1dC52YWx1ZSA9IHNsaWRlci52YWx1ZTtcbnRpbWUuaW5uZXJIVE1MID0gc2xpZGVyLnZhbHVlID09PSBcIjI0XCIgPyBcIldob2xlIGRheVwiIDogaG91cnMudG9TdHJpbmcoKSArIFwiOjAwIFwiICsgc3VmZml4O1xuLy8gVXBkYXRlIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZSAoZWFjaCB0aW1lIHlvdSBkcmFnIHRoZSBzbGlkZXIgaGFuZGxlKVxuc2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgb3V0cHV0LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgaG91cnMgPSAoKHBhcnNlSW50KHNsaWRlci52YWx1ZSkgKyAxMSkgJSAxMiArIDEpO1xuICBzdWZmaXggPSAocGFyc2VJbnQoc2xpZGVyLnZhbHVlKSA+PSAxMik/ICdQTScgOiAnQU0nO1xuICB0aW1lLmlubmVySFRNTCA9IHNsaWRlci52YWx1ZSA9PT0gXCIyNFwiID8gXCJXaG9sZSBkYXlcIiA6IGhvdXJzLnRvU3RyaW5nKCkgKyBcIjowMCBcIiArIHN1ZmZpeDtcbn1cbnR5cGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHR5cGVCdXR0b24udmFsdWUgPT09IFwiUGljayBVcHNcIiA/IHR5cGVCdXR0b24udmFsdWUgPSBcIkRyb3AgT2Zmc1wiIDogdHlwZUJ1dHRvbi52YWx1ZSA9IFwiUGljayBVcHNcIjtcbiAgICB0eXBlQnV0dG9uLmlubmVySFRNTCA9PT0gXCJQaWNrIFVwc1wiID8gdHlwZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkRyb3AgT2Zmc1wiIDogdHlwZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBpY2sgVXBzXCI7XG59XG5cbmNhckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY2FyQnV0dG9uLnZhbHVlID09PSBcIlRheGlcIiA/IGNhckJ1dHRvbi52YWx1ZSA9IFwiQXBwIENhcnNcIiA6IGNhckJ1dHRvbi52YWx1ZSA9IFwiVGF4aVwiO1xuICAgIGNhckJ1dHRvbi5pbm5lckhUTUwgPT09IFwiVGF4aVwiID8gY2FyQnV0dG9uLmlubmVySFRNTCA9IFwiQXBwIENhcnNcIiA6IGNhckJ1dHRvbi5pbm5lckhUTUwgPSBcIlRheGlcIjtcbn1cblxudHlwZUJ1dHRvbi5pbm5lckhUTUwgPSB0eXBlQnV0dG9uLnZhbHVlO1xuY2FyQnV0dG9uLmlubmVySFRNTCA9IGNhckJ1dHRvbi52YWx1ZTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=