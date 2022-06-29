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
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 75
    }
  }, "/Monthly")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    "aria-label": "button text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, buttonText), anotherOption && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    sx: {
      color: 'black'
    },
    variant: "textButton",
    className: "free__trial",
    "aria-label": "anothe option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, anotherOption))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJsaXN0SXRlbSIsInByaWNlIiwiYnV0dG9uR3JvdXAiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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TUFBRCxFQUFTLENBQVQsQ0FMSTtBQU1kZixPQUFDLEVBQUU7QUFOVztBQUhMO0FBN0ZBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWEzZmQ2ZGM3NmU2ODk2YzI1NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlQ2FyZCh7XG4gIGRhdGE6IHtcbiAgICBoZWFkZXIsXG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmljZVdpdGhVbml0LFxuICAgIGJ1dHRvblRleHQgPSAnU3RhcnQgRnJlZSBUcmlhbCcsXG4gICAgYW5vdGhlck9wdGlvbixcbiAgICBwb2ludHMsXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtoZWFkZXIgPyAncGFja2FnZV9fY2FyZCBhY3RpdmUnIDogJ3BhY2thZ2VfX2NhcmQnfSBzeD17c3R5bGVzLnByaWNpbmdCb3h9PlxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxuICAgICAgPEJveD5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9J3BhY2thZ2VfX2hlYWRlcicgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cbiAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9J3BhY2thZ2VfX25hbWUnIHZhcmlhbnQ9J3RpdGxlJz5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz0ncCc+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxMaXN0IGl0ZW1zPXtwb2ludHN9IGNoaWxkU3R5bGU9e3N0eWxlcy5saXN0SXRlbX0+PC9MaXN0PlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3BhY2thZ2VfX3ByaWNlJyBzeD17c3R5bGVzLnByaWNlfT57cHJpY2VXaXRoVW5pdH08c3Bhbj4vTW9udGhseTwvc3Bhbj48L1RleHQ+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyBhcmlhLWxhYmVsPSdidXR0b24gdGV4dCc+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgICAgICAge2Fub3RoZXJPcHRpb24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBzeD17e2NvbG9yOiAnYmxhY2snfX0gdmFyaWFudD0ndGV4dEJ1dHRvbicgY2xhc3NOYW1lPSdmcmVlX190cmlhbCcgYXJpYS1sYWJlbD0nYW5vdGhlIG9wdGlvbic+e2Fub3RoZXJPcHRpb259PC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcHJpY2luZ0JveDoge1xuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgICBwOiBbJzM1cHggMjVweCcsIG51bGwsIG51bGwsICc0MHB4J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc3NSUnLCAnMTAwJSddLFxuICAgIG1iOiAnNDBweCcsXG4gICAgbXQ6ICc0MHB4JyxcbiAgICBteDogWzAsICdhdXRvJywgMF0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudCcsXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogWycyOHB4JywgbnVsbCwgbnVsbCwgJzMycHgnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJy0xN3B4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLS4xNHB4JyxcbiAgICBweDogJzEycHgnLFxuICB9LFxuICBwcmljaW5nSGVhZGVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgbWI6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICc0MHB4J10sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgfSxcbiAgICAnLnBhY2thZ2VfX25hbWUnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcbiAgICB9LFxuICB9LFxuICBwcmljZToge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsICczMHB4J10sXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICBtYXJnaW5Cb3R0b206IDIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwdDogWzQsIDZdLFxuICAgICc+IHNwYW4nOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBsOiAnM3B4JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcbiAgICBtYjogMyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgY29sb3I6ICd0ZXh0JyxcbiAgICAnJi5jbG9zZWQnOiB7XG4gICAgICBvcGFjaXR5OiAwLjU1LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGNvbG9yOiAnIzc4OEZCNScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbkdyb3VwOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnXSxcbiAgICAnLmZyZWVfX3RyYWlsJzoge1xuICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCAxXSxcbiAgICAgIHA6ICcyMHB4IDAgMCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9