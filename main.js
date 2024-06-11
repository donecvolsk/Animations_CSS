/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collaps.js
class Collaps {
  constructor() {
    this.container = document.querySelector(".container-collaps");
    this.btn = this.container.querySelector(".collaps-control");
    this.collapsWinduw = this.container.querySelector(".collaps-items");
  }
  clickBtn() {
    const click = () => {
      this.collapsWinduw.classList.toggle("closed");
    };
    this.btn.addEventListener("click", click);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const collaps = new Collaps();
collaps.clickBtn();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;