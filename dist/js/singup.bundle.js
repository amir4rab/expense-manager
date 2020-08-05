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
/******/ 	__webpack_require__.p = "dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/js/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/js/signup.js":
/*!****************************!*\
  !*** ./build/js/signup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Ui {\n  constructor() {\n    this.uiList = [{\n      id: \"signUpSelectLang\",\n      inputs: [\"langEnRadioBtn\", \"langDeRadioBtn\", \"langFaRadioBtn\"],\n      index: 0\n    }, {\n      id: \"signUpSelectName\",\n      inputs: [\"nameInput\"],\n      index: 1\n    }, {\n      id: \"signUpSelectIncome\",\n      inputs: [\"incomeInput\", \"incomeCurrencySelection\"],\n      index: 2\n    }, {\n      id: \"signUpSelectExpensesMethod\",\n      inputs: [\"simpleExpensesMethodRadioBtn\", \"advanceExpensesMethodRadioBtn\"],\n      index: 3\n    }, {\n      id: \"signUpSelectSimpleExpensesMethod\",\n      inputs: [\"dailyExpensesInput\", \"monthlyExpensesInput\", \"yearlyExpensesInput\"],\n      index: 4\n    }];\n    this.activeIndex = 0;\n    this.indexMax = this.uiList.length;\n    this.uiList.forEach(page => {\n      page.inputs.forEach(input => {\n        if (input.includes(\"Input\")) {\n          document.getElementById(input).addEventListener(\"keyup\", this.inputKeydown.bind(this));\n        } else if (input.includes(\"RadioBtn\")) {\n          document.getElementById(input).addEventListener(\"click\", this.radioKeydown.bind(this));\n        } else if (input.includes(\"Selection\")) {\n          document.getElementById(input).addEventListener(\"select\", this.radioKeydown.bind(this));\n        }\n      });\n    });\n    this.validateInput();\n  }\n\n  BtnEventListener(fn) {\n    fn === \"next\" ? fn++ : fn--;\n    const el = document.getElementById(id);\n    el.addEventListener;\n  }\n\n  validateInput(input) {\n    const regexp = new RegExp(\"^(0|[1-9][0-9]*)$\");\n    console.log(regexp.test(\"0asd\"));\n  }\n\n  radioKeydown(e) {\n    console.log(e.target.value);\n  }\n\n  inputKeydown(e) {\n    console.log(e.target.value);\n    console.log(this);\n  }\n\n}\n\nclass App {\n  constructor() {\n    new Ui();\n  }\n\n}\n\nnew App(); // document.getElementsByClassName(\"progres-bar\")[0].children[0].style = \"width:100%\";\n\n//# sourceURL=webpack:///./build/js/signup.js?");

/***/ })

/******/ });