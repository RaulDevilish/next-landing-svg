webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\nextjs_landing_page\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? 'Start Free Trial' : _ref$data$buttonText,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'package__card active' : 'package__card',
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0
      }
    }
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px'
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['30px', null, null, null, '40px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading'
    },
    '.package__name': {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal'
    }
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5'
      }
    }
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0'
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwicHgiLCJwcmljaW5nSGVhZGVyIiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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Z2VzL2luZGV4LmRlMjg0NzFiNGY4MjY4YWUzODZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xuICBkYXRhOiB7XG4gICAgaGVhZGVyLFxuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpY2VXaXRoVW5pdCxcbiAgICBidXR0b25UZXh0ID0gJ1N0YXJ0IEZyZWUgVHJpYWwnLFxuICAgIGFub3RoZXJPcHRpb24sXG4gICAgcG9pbnRzLFxuICB9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17aGVhZGVyID8gJ3BhY2thZ2VfX2NhcmQgYWN0aXZlJyA6ICdwYWNrYWdlX19jYXJkJ30gc3g9e3N0eWxlcy5wcmljaW5nQm94fT5cbiAgICAgIHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cbiAgICAgIDxCb3g+XG4gICAgICAgIFxuICAgICAgPC9Cb3g+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdCb3g6IHtcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXG4gICAgcDogWyczNXB4IDI1cHgnLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAnNzUlJywgJzEwMCUnXSxcbiAgICBtYjogJzQwcHgnLFxuICAgIG10OiAnNDBweCcsXG4gICAgbXg6IFswLCAnYXV0bycsIDBdLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnQnLFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IFsnMjhweCcsIG51bGwsIG51bGwsICczMnB4J10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMSxcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICctMTdweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0uMTRweCcsXG4gICAgcHg6ICcxMnB4JyxcbiAgfSxcbiAgcHJpY2luZ0hlYWRlcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIG1iOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgJy5wYWNrYWdlX19uYW1lJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiBbMSwgbnVsbCwgMl0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCAnMzBweCddLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgbWFyZ2luQm90dG9tOiAyLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHQ6IFs0LCA2XSxcbiAgICAnPiBzcGFuJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwbDogJzNweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG4gICAgbWI6IDMsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgJyYuY2xvc2VkJzoge1xuICAgICAgb3BhY2l0eTogMC41NSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogJyM3ODhGQjUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbXQ6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXG4gICAgJy5mcmVlX190cmFpbCc6IHtcbiAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgMV0sXG4gICAgICBwOiAnMjBweCAwIDAnLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==