self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SobreMi/SobreMiStyles.js":
/*!*************************************************!*\
  !*** ./src/components/SobreMi/SobreMiStyles.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "SobreMiStyles__CarouselContainer",
  componentId: "sc-1sf7mzb-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SobreMiStyles__CarouselMobileScrollNode",
  componentId: "sc-1sf7mzb-1"
})(["@media ", "{display:flex;min-width:", "}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref) {
  var _final = _ref["final"];
  return _final ? "120%;" : "min-content";
});
var CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SobreMiStyles__CarouselItem",
  componentId: "sc-1sf7mzb-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.active === props.index ? "opacity: 1" : "opacity: 0.5";
});
var CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "SobreMiStyles__CarouselItemTitle",
  componentId: "sc-1sf7mzb-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.withConfig({
  displayName: "SobreMiStyles__CarouselItemImg",
  componentId: "sc-1sf7mzb-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "SobreMiStyles__CarouselItemText",
  componentId: "sc-1sf7mzb-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SobreMiStyles__CarouselButtons",
  componentId: "sc-1sf7mzb-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "SobreMiStyles__CarouselButton",
  componentId: "sc-1sf7mzb-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], function (props) {
  return props.active === props.index ? "1" : ".33";
}, function (props) {
  return props.active === props.index ? "scale(1.6)" : "scale(1)";
});
var CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "SobreMiStyles__CarouselButtonDot",
  componentId: "sc-1sf7mzb-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29icmVNaS9Tb2JyZU1pU3R5bGVzLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsQ29udGFpbmVyIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJmaW5hbCIsIkNhcm91c2VsSXRlbSIsIm1kIiwiYWN0aXZlIiwiaW5kZXgiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDRZQXNCbkIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBdEJjLENBQXZCO0FBK0JBLElBQU1DLHdCQUF3QixHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpREFDMUIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBRHFCLEVBR3BCO0FBQUEsTUFBR0UsTUFBSDtBQUFBLFNBQWVBLE1BQUssMEJBQXBCO0FBQUEsQ0FIb0IsQ0FBOUI7QUFPQSxJQUFNQyxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlTQUtkLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkssRUFBNUI7QUFBQSxDQUxTLEVBU2QsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBVFMsRUFxQm5CLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNRLE1BQU4sS0FBaUJSLEtBQUssQ0FBQ1MsS0FBdkIsZ0NBQVg7QUFBQSxDQXJCbUIsQ0FBbEI7QUF5QkEsSUFBTUMsaUJBQWlCLEdBQUdYLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDRXQVluQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQTVCO0FBQUEsQ0FaYyxFQWtCbkIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBbEJjLENBQXZCO0FBdUJBLElBQU1RLGVBQWUsR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEscUxBS2pCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQUxZLENBQXJCO0FBWUEsSUFBTVMsZ0JBQWdCLEdBQUdiLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDRPQU9sQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQTVCO0FBQUEsQ0FQYSxFQVlsQixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FaYSxDQUF0QjtBQWtCQSxJQUFNVSxlQUFlLEdBQUdkLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU1qQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FOWSxDQUFyQjtBQWFBLElBQU1XLGNBQWMsR0FBR2Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEseUpBT2QsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1EsTUFBTixLQUFpQlIsS0FBSyxDQUFDUyxLQUF2QixjQUFYO0FBQUEsQ0FQYyxFQVFaLFVBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNRLE1BQU4sS0FBaUJSLEtBQUssQ0FBQ1MsS0FBdkIsNEJBQVg7QUFBQSxDQVJZLENBQXBCO0FBZUEsSUFBTU0saUJBQWlCLEdBQUdoQixxRUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2EyYzlhNjljMGUzYmVkOGJlN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgcGFkZGluZzogMHJlbTtcbiAgbGlzdC1zdHlsZTpub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG5cbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgbWFyZ2luLWJvdHRvbTogODBweDtcblxuICAvL3JlbW92ZSBzY3JvbGxiYXJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXgtd2lkdGg6IDE5NnB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRTEzMUY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxuICBtYXJnaW4tbGVmdDogMjFweDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjg4cHg7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDNweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=