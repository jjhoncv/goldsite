/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/site/App.tsx":
/*!**************************!*\
  !*** ./src/site/App.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/layout.module.scss */ "./src/site/styles/layout.module.scss");



var App = function App(_ref) {
  var queryClient = _ref.queryClient,
      state = _ref.state,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_query__WEBPACK_IMPORTED_MODULE_1__.Hydrate, {
    state: state
  }, children));
};

/***/ }),

/***/ "./src/site/components/Contact/Contact.tsx":
/*!*************************************************!*\
  !*** ./src/site/components/Contact/Contact.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/components/Header */ "./src/site/shared/components/Header/index.ts");


var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Contact Page")));
};

/***/ }),

/***/ "./src/site/components/Contact/index.ts":
/*!**********************************************!*\
  !*** ./src/site/components/Contact/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contact": () => (/* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_0__.Contact)
/* harmony export */ });
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/site/components/Contact/Contact.tsx");


/***/ }),

/***/ "./src/site/components/Home/Home.tsx":
/*!*******************************************!*\
  !*** ./src/site/components/Home/Home.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _shared_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/components/Header */ "./src/site/shared/components/Header/index.ts");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/users */ "./src/site/services/users.ts");
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.module.scss */ "./src/site/components/Home/Home.module.scss");





var Home = function Home() {
  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)("users", _services_users__WEBPACK_IMPORTED_MODULE_3__.fetchUsers),
      data = _useQuery.data,
      status = _useQuery.status; // console.log("home view");


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: _Home_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title
  }, " 2sss 2Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, status === "error" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error fetching data"), status === "loading" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Fetching data..."), status === "success" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data === null || data === void 0 ? void 0 : data.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      key: user.id
    }, user.name);
  })))));
};

/***/ }),

/***/ "./src/site/components/Home/index.ts":
/*!*******************************************!*\
  !*** ./src/site/components/Home/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Home)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/site/components/Home/Home.tsx");


/***/ }),

/***/ "./src/site/components/Product/Product.tsx":
/*!*************************************************!*\
  !*** ./src/site/components/Product/Product.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product */ "./src/site/services/product.ts");
/* harmony import */ var _shared_components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/Header */ "./src/site/shared/components/Header/index.ts");
/* harmony import */ var _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/NotFound */ "./src/site/shared/components/NotFound/index.ts");
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/browser */ "./src/site/utils/browser.ts");









var Product = function Product() {
  var _data$data, _data$data2, _data$data3;

  if (_utils_browser__WEBPACK_IMPORTED_MODULE_7__.isErrorApp) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_NotFound__WEBPACK_IMPORTED_MODULE_6__.NotFound, null);

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)(),
      id = _useParams.id;

  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(["product", id], /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0,_services_product__WEBPACK_IMPORTED_MODULE_4__.fetchProduct)(id));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      data = _useQuery.data,
      status = _useQuery.status; // console.log({ data2 });


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_Header__WEBPACK_IMPORTED_MODULE_5__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "App"
  }, status === "error" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Error fetching data"), status === "loading" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Fetching data..."), status === "success" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", null, data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("strong", null, data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.price)))));
};

/***/ }),

/***/ "./src/site/components/Product/index.ts":
/*!**********************************************!*\
  !*** ./src/site/components/Product/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_0__.Product)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/site/components/Product/Product.tsx");


/***/ }),

/***/ "./src/site/components/Search/Search.tsx":
/*!***********************************************!*\
  !*** ./src/site/components/Search/Search.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search */ "./src/site/services/search.ts");
/* harmony import */ var _shared_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/Header */ "./src/site/shared/components/Header/index.ts");





var Search = function Search() {
  var q = "";

  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(["search", q], function () {
    return (0,_services_search__WEBPACK_IMPORTED_MODULE_2__.fetchSearch)(q);
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, status === "error" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error fetching data"), status === "loading" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Fetching data..."), status === "success" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data === null || data === void 0 ? void 0 : data.map(function (item, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      key: item.id
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/product/" + item.id
    }, "Detail"));
  })))));
};

/***/ }),

/***/ "./src/site/components/Search/index.ts":
/*!*********************************************!*\
  !*** ./src/site/components/Search/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* reexport safe */ _Search__WEBPACK_IMPORTED_MODULE_0__.Search)
/* harmony export */ });
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./src/site/components/Search/Search.tsx");


/***/ }),

/***/ "./src/site/pages/contact.tsx":
/*!************************************!*\
  !*** ./src/site/pages/contact.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact */ "./src/site/components/Contact/index.ts");
/* harmony import */ var _shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/index.ts");
/* harmony import */ var _shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/PublicRoot */ "./src/site/shared/components/PublicRoot/index.ts");








var Index = function Index(_ref) {
  var hasSession = _ref.hasSession;
  console.log("contact view");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, hasSession ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__.ProtectedRoot, {
    Template: _components_Contact__WEBPACK_IMPORTED_MODULE_4__.Contact
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__.PublicRoot, {
    Template: _components_Contact__WEBPACK_IMPORTED_MODULE_4__.Contact
  }));
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var queryClient, hasSession;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
            console.log("contact server"); // await queryClient.prefetchQuery("users", fetchUsers);

            hasSession = true;
            return _context.abrupt("return", {
              props: {
                hasSession: hasSession
              },
              state: (0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps() {
    return _ref2.apply(this, arguments);
  };
}();

var ContactPage = {
  getServerSideProps: getServerSideProps,
  Index: Index
};

/***/ }),

/***/ "./src/site/pages/error.tsx":
/*!**********************************!*\
  !*** ./src/site/pages/error.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPage": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/NotFound */ "./src/site/shared/components/NotFound/index.ts");
/* harmony import */ var _shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/index.ts");
/* harmony import */ var _shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/PublicRoot */ "./src/site/shared/components/PublicRoot/index.ts");








var Index = function Index(_ref) {
  var hasSession = _ref.hasSession;
  console.log("not Found");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, hasSession ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__.ProtectedRoot, {
    Template: _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_4__.NotFound
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__.PublicRoot, {
    Template: _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_4__.NotFound
  }));
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var queryClient, hasSession;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient(); // await queryClient.prefetchQuery("users", fetchUsers);

            hasSession = true;
            return _context.abrupt("return", {
              props: {
                hasSession: hasSession
              },
              state: (0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps() {
    return _ref2.apply(this, arguments);
  };
}();

var ErrorPage = {
  getServerSideProps: getServerSideProps,
  Index: Index
};

/***/ }),

/***/ "./src/site/pages/home.tsx":
/*!*********************************!*\
  !*** ./src/site/pages/home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home */ "./src/site/components/Home/index.ts");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users */ "./src/site/services/users.ts");
/* harmony import */ var _shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/index.ts");
/* harmony import */ var _shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/PublicRoot */ "./src/site/shared/components/PublicRoot/index.ts");









var Index = function Index(_ref) {
  var hasSession = _ref.hasSession;
  console.log("home view");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, hasSession ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_6__.ProtectedRoot, {
    Template: _components_Home__WEBPACK_IMPORTED_MODULE_4__.Home
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_7__.PublicRoot, {
    Template: _components_Home__WEBPACK_IMPORTED_MODULE_4__.Home
  }));
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var queryClient, hasSession;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("home server");
            queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
            _context.next = 4;
            return queryClient.prefetchQuery("users", _services_users__WEBPACK_IMPORTED_MODULE_5__.fetchUsers);

          case 4:
            hasSession = true;
            return _context.abrupt("return", {
              props: {
                hasSession: hasSession
              },
              state: (0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps() {
    return _ref2.apply(this, arguments);
  };
}();

var HomePage = {
  getServerSideProps: getServerSideProps,
  Index: Index
};

/***/ }),

/***/ "./src/site/pages/index.ts":
/*!*********************************!*\
  !*** ./src/site/pages/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* reexport safe */ _contact__WEBPACK_IMPORTED_MODULE_0__.ContactPage),
/* harmony export */   "ErrorPage": () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_4__.ErrorPage),
/* harmony export */   "HomePage": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_3__.HomePage),
/* harmony export */   "ProductPage": () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_1__.ProductPage),
/* harmony export */   "SearchPage": () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_2__.SearchPage)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/site/pages/contact.tsx");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/site/pages/product.tsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/site/pages/search.tsx");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/site/pages/home.tsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./src/site/pages/error.tsx");






/***/ }),

/***/ "./src/site/pages/product.tsx":
/*!************************************!*\
  !*** ./src/site/pages/product.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Product */ "./src/site/components/Product/index.ts");
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product */ "./src/site/services/product.ts");
/* harmony import */ var _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/NotFound */ "./src/site/shared/components/NotFound/index.ts");
/* harmony import */ var _shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/index.ts");
/* harmony import */ var _shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/PublicRoot */ "./src/site/shared/components/PublicRoot/index.ts");










var Index = function Index(_ref) {
  var hasSession = _ref.hasSession,
      hasError = _ref.hasError;
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_NotFound__WEBPACK_IMPORTED_MODULE_6__.NotFound, null);
  console.log("product view");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, hasSession ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_7__.ProtectedRoot, {
    Template: _components_Product__WEBPACK_IMPORTED_MODULE_4__.Product
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_8__.PublicRoot, {
    Template: _components_Product__WEBPACK_IMPORTED_MODULE_4__.Product
  }));
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req) {
    var queryClient, hasSession, hasError, id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
            hasSession = true;
            hasError = false;
            id = req.path.split("/").pop();
            _context.next = 6;
            return queryClient.prefetchQuery(["product", id], function () {
              return (0,_services_product__WEBPACK_IMPORTED_MODULE_5__.fetchProduct)(id);
            });

          case 6:
            console.log("product server");
            return _context.abrupt("return", {
              props: {
                hasSession: hasSession,
                hasError: hasError
              },
              state: (0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var ProductPage = {
  getServerSideProps: getServerSideProps,
  Index: Index
};

/***/ }),

/***/ "./src/site/pages/search.tsx":
/*!***********************************!*\
  !*** ./src/site/pages/search.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _shared_components_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/NotFound */ "./src/site/shared/components/NotFound/index.ts");
/* harmony import */ var _shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/index.ts");
/* harmony import */ var _shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/PublicRoot */ "./src/site/shared/components/PublicRoot/index.ts");
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/search */ "./src/site/services/search.ts");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Search */ "./src/site/components/Search/index.ts");










var Index = function Index(_ref) {
  var hasSession = _ref.hasSession,
      hasError = _ref.hasError;
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_NotFound__WEBPACK_IMPORTED_MODULE_4__.NotFound, null);
  console.log("search view");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, hasSession ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_ProtectedRoot__WEBPACK_IMPORTED_MODULE_5__.ProtectedRoot, {
    Template: _components_Search__WEBPACK_IMPORTED_MODULE_8__.Search
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shared_components_PublicRoot__WEBPACK_IMPORTED_MODULE_6__.PublicRoot, {
    Template: _components_Search__WEBPACK_IMPORTED_MODULE_8__.Search
  }));
};

var getServerSideProps = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req) {
    var _req$query, _req$query$q;

    var queryClient, hasSession, hasError, q;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
            hasSession = true;
            hasError = false;
            q = ((_req$query = req.query) === null || _req$query === void 0 ? void 0 : (_req$query$q = _req$query.q) === null || _req$query$q === void 0 ? void 0 : _req$query$q.toString()) || "";
            _context.next = 6;
            return queryClient.prefetchQuery(["search", q], function () {
              return (0,_services_search__WEBPACK_IMPORTED_MODULE_7__.fetchSearch)(q);
            });

          case 6:
            return _context.abrupt("return", {
              props: {
                hasSession: hasSession,
                hasError: hasError
              },
              state: (0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getServerSideProps(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var SearchPage = {
  getServerSideProps: getServerSideProps,
  Index: Index
};

/***/ }),

/***/ "./src/site/routers/ProductRouter.tsx":
/*!********************************************!*\
  !*** ./src/site/routers/ProductRouter.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRouter": () => (/* binding */ ProductRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/site/routers/routes.tsx");



var ProductRouter = function ProductRouter() {
  var _routes$find, _routes$find$routes, _routes$find$routes$f, _routes$find$routes$f2;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_1__.routes === null || _routes__WEBPACK_IMPORTED_MODULE_1__.routes === void 0 ? void 0 : (_routes$find = _routes__WEBPACK_IMPORTED_MODULE_1__.routes.find(function (r) {
    return r.path === "*";
  })) === null || _routes$find === void 0 ? void 0 : (_routes$find$routes = _routes$find.routes) === null || _routes$find$routes === void 0 ? void 0 : (_routes$find$routes$f = _routes$find$routes.find(function (r) {
    return r.path === "product/*";
  })) === null || _routes$find$routes$f === void 0 ? void 0 : (_routes$find$routes$f2 = _routes$find$routes$f.routes) === null || _routes$find$routes$f2 === void 0 ? void 0 : _routes$find$routes$f2.map(function (route, key) {
    var path = route.path,
        index = route.index,
        C1 = route.IndexComponent,
        props = route.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      index: index,
      key: key,
      path: path,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C1, props)
    });
  }));
};

/***/ }),

/***/ "./src/site/routers/RootRouter.tsx":
/*!*****************************************!*\
  !*** ./src/site/routers/RootRouter.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootRouter": () => (/* binding */ RootRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");


var RootRouter = function RootRouter(_ref) {
  var routes = _ref.routes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, routes && (routes === null || routes === void 0 ? void 0 : routes.map(function (route, key) {
    var _route$routes;

    var path = route.path,
        index = route.index,
        C1 = route.IndexComponent,
        props = route.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
      index: index,
      key: key,
      path: path,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C1, props)
    }, (route === null || route === void 0 ? void 0 : route.routes) && (route === null || route === void 0 ? void 0 : (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.map(function (route2, key2) {
      var path2 = route2.path,
          index2 = route2.index,
          C2 = route2.IndexComponent,
          props2 = route2.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
        key: key2,
        index: index2,
        path: path2,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C2, props2)
      });
    })));
  })));
};

/***/ }),

/***/ "./src/site/routers/SiteRouter.tsx":
/*!*****************************************!*\
  !*** ./src/site/routers/SiteRouter.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteRouter": () => (/* binding */ SiteRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/site/routers/routes.tsx");



var SiteRouter = function SiteRouter() {
  var _routes$find, _routes$find$routes;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_1__.routes === null || _routes__WEBPACK_IMPORTED_MODULE_1__.routes === void 0 ? void 0 : (_routes$find = _routes__WEBPACK_IMPORTED_MODULE_1__.routes.find(function (r) {
    return r.path === "*";
  })) === null || _routes$find === void 0 ? void 0 : (_routes$find$routes = _routes$find.routes) === null || _routes$find$routes === void 0 ? void 0 : _routes$find$routes.map(function (route, key) {
    var _route$routes;

    var path = route.path,
        index = route.index,
        C1 = route.IndexComponent,
        props = route.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
      key: key,
      index: index,
      path: path,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C1, props)
    }, (route === null || route === void 0 ? void 0 : route.routes) && (route === null || route === void 0 ? void 0 : (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.map(function (route2, key) {
      var path2 = route2.path,
          index2 = route2.index,
          C2 = route2.IndexComponent,
          props2 = route2.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
        key: key,
        index: index2,
        path: path2,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C2, props2)
      });
    })));
  }));
};

/***/ }),

/***/ "./src/site/routers/index.ts":
/*!***********************************!*\
  !*** ./src/site/routers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRouter": () => (/* reexport safe */ _ProductRouter__WEBPACK_IMPORTED_MODULE_0__.ProductRouter),
/* harmony export */   "RootRouter": () => (/* reexport safe */ _RootRouter__WEBPACK_IMPORTED_MODULE_1__.RootRouter),
/* harmony export */   "SiteRouter": () => (/* reexport safe */ _SiteRouter__WEBPACK_IMPORTED_MODULE_2__.SiteRouter)
/* harmony export */ });
/* harmony import */ var _ProductRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductRouter */ "./src/site/routers/ProductRouter.tsx");
/* harmony import */ var _RootRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RootRouter */ "./src/site/routers/RootRouter.tsx");
/* harmony import */ var _SiteRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteRouter */ "./src/site/routers/SiteRouter.tsx");




/***/ }),

/***/ "./src/site/routers/routes.tsx":
/*!*************************************!*\
  !*** ./src/site/routers/routes.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages */ "./src/site/pages/index.ts");
/* harmony import */ var _ProductRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductRouter */ "./src/site/routers/ProductRouter.tsx");
/* harmony import */ var _SiteRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteRouter */ "./src/site/routers/SiteRouter.tsx");



var routes = [{
  path: "*",
  IndexComponent: _SiteRouter__WEBPACK_IMPORTED_MODULE_2__.SiteRouter,
  routes: [{
    path: "search",
    fetchData: _pages__WEBPACK_IMPORTED_MODULE_0__.SearchPage.getServerSideProps,
    IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.SearchPage.Index
  }, {
    path: "contact",
    IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.ContactPage.Index
  }, {
    path: "product/*",
    IndexComponent: _ProductRouter__WEBPACK_IMPORTED_MODULE_1__.ProductRouter,
    routes: [{
      path: ":id",
      fetchData: _pages__WEBPACK_IMPORTED_MODULE_0__.ProductPage.getServerSideProps,
      IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.ProductPage.Index
    }, {
      path: "*",
      IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.ErrorPage.Index
    }]
  }, {
    index: true,
    fetchData: _pages__WEBPACK_IMPORTED_MODULE_0__.HomePage.getServerSideProps,
    IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.HomePage.Index
  }, {
    path: "*",
    IndexComponent: _pages__WEBPACK_IMPORTED_MODULE_0__.ErrorPage.Index
  }]
}];

/***/ }),

/***/ "./src/site/services/product.ts":
/*!**************************************!*\
  !*** ./src/site/services/product.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProduct": () => (/* binding */ fetchProduct)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var fetchProduct = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var args,
        _yield$axios,
        data,
        code,
        _e$response,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            _context.prev = 1;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:3000/api/products/" + args);

          case 4:
            _yield$axios = _context.sent;
            data = _yield$axios.data;
            code = _yield$axios.status;
            return _context.abrupt("return", data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              data: null,
              status: false,
              code: (_context.t0 === null || _context.t0 === void 0 ? void 0 : (_e$response = _context.t0.response) === null || _e$response === void 0 ? void 0 : _e$response.status) || 404
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function fetchProduct() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/site/services/search.ts":
/*!*************************************!*\
  !*** ./src/site/services/search.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSearch": () => (/* binding */ fetchSearch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var fetchSearch = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var q,
        _yield$axios,
        data,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()("https://jsonplaceholder.typicode.com/posts");

          case 3:
            _yield$axios = _context.sent;
            data = _yield$axios.data;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchSearch() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/site/services/users.ts":
/*!************************************!*\
  !*** ./src/site/services/users.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUsers": () => (/* binding */ fetchUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var fetchUsers = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var _yield$axios, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()("https://jsonplaceholder.typicode.com/users");

          case 2:
            _yield$axios = _context.sent;
            data = _yield$axios.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchUsers() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/site/shared/components/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./src/site/shared/components/Header/Header.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./src/site/shared/components/Header/Header.module.scss");



var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].menuOptions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/search"
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Categorys", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/categorie/men"
  }, "Men")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/categorie/boy"
  }, "Boy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/categorie/girl"
  }, "Girl")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact"
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerTopUser
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].menuOptions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/admin"
  }, "Admin")))));
};

/***/ }),

/***/ "./src/site/shared/components/Header/index.ts":
/*!****************************************************!*\
  !*** ./src/site/shared/components/Header/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/site/shared/components/Header/Header.tsx");


/***/ }),

/***/ "./src/site/shared/components/NotFound/NotFound.tsx":
/*!**********************************************************!*\
  !*** ./src/site/shared/components/NotFound/NotFound.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFound": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/Header */ "./src/site/shared/components/Header/index.ts");


var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "NotFound")));
};

/***/ }),

/***/ "./src/site/shared/components/NotFound/index.ts":
/*!******************************************************!*\
  !*** ./src/site/shared/components/NotFound/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFound": () => (/* reexport safe */ _NotFound__WEBPACK_IMPORTED_MODULE_0__.NotFound)
/* harmony export */ });
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./src/site/shared/components/NotFound/NotFound.tsx");


/***/ }),

/***/ "./src/site/shared/components/ProtectedRoot/ProtectedRoot.tsx":
/*!********************************************************************!*\
  !*** ./src/site/shared/components/ProtectedRoot/ProtectedRoot.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoot": () => (/* binding */ ProtectedRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");


var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
var ProtectedRoot = function ProtectedRoot(_ref) {
  var data = _ref.data,
      Template = _ref.Template;
  return (
    /*#__PURE__*/
    // <QueryClientProvider client={queryClient}>
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template, {
      data: data
    }) // </QueryClientProvider>

  );
};

/***/ }),

/***/ "./src/site/shared/components/ProtectedRoot/index.ts":
/*!***********************************************************!*\
  !*** ./src/site/shared/components/ProtectedRoot/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoot": () => (/* reexport safe */ _ProtectedRoot__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoot)
/* harmony export */ });
/* harmony import */ var _ProtectedRoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtectedRoot */ "./src/site/shared/components/ProtectedRoot/ProtectedRoot.tsx");


/***/ }),

/***/ "./src/site/shared/components/PublicRoot/PublicRoot.tsx":
/*!**************************************************************!*\
  !*** ./src/site/shared/components/PublicRoot/PublicRoot.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoot": () => (/* binding */ PublicRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");


var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
var PublicRoot = function PublicRoot(_ref) {
  var data = _ref.data,
      Template = _ref.Template;
  return (
    /*#__PURE__*/
    // <QueryClientProvider client={queryClient}>
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(Template, {
      data: data
    }) // </QueryClientProvider>

  );
};

/***/ }),

/***/ "./src/site/shared/components/PublicRoot/index.ts":
/*!********************************************************!*\
  !*** ./src/site/shared/components/PublicRoot/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoot": () => (/* reexport safe */ _PublicRoot__WEBPACK_IMPORTED_MODULE_0__.PublicRoot)
/* harmony export */ });
/* harmony import */ var _PublicRoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicRoot */ "./src/site/shared/components/PublicRoot/PublicRoot.tsx");


/***/ }),

/***/ "./src/site/ssr/browser.tsx":
/*!**********************************!*\
  !*** ./src/site/ssr/browser.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../App */ "./src/site/App.tsx");
/* harmony import */ var _routers_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../routers/routes */ "./src/site/routers/routes.tsx");
/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routers */ "./src/site/routers/index.ts");







var dehydratedState = window.__REACT_QUERY_STATE__;
var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.App, {
  queryClient: queryClient,
  state: dehydratedState
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routers__WEBPACK_IMPORTED_MODULE_5__.RootRouter, {
  routes: _routers_routes__WEBPACK_IMPORTED_MODULE_4__.routes
}))), document.getElementById("app"));

/***/ }),

/***/ "./src/site/utils/browser.ts":
/*!***********************************!*\
  !*** ./src/site/utils/browser.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isErrorApp": () => (/* binding */ isErrorApp),
/* harmony export */   "queryState": () => (/* binding */ queryState)
/* harmony export */ });
var isBrowser = typeof window !== "undefined";
var queryState = isBrowser && window.__REACT_QUERY_STATE__;
var isErrorApp = isBrowser && queryState === "ERROR";

/***/ }),

/***/ "./src/site/components/Home/Home.module.scss":
/*!***************************************************!*\
  !*** ./src/site/components/Home/Home.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"title":"o7FXpDuyzJLcySz3Eu8SVw=="});

/***/ }),

/***/ "./src/site/shared/components/Header/Header.module.scss":
/*!**************************************************************!*\
  !*** ./src/site/shared/components/Header/Header.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"headerTop":"ZkR8uCDhbTSdtYeqTXZd3g==","headerTopMenu":"My69UBl3SpTZdtMRb6Ywvg==","headerTopUser":"NOfKOWB4c02sU1CEnpuM+w==","menuOptions":"_4b3dGfh9UlGqFhFrB2wQrw=="});

/***/ }),

/***/ "./src/site/styles/layout.module.scss":
/*!********************************************!*\
  !*** ./src/site/styles/layout.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb"] = self["webpackChunkweb"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/site/ssr/browser.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljL3N0YXRpY3MvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUVBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7O0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQURBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTs7QUFFQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQU1BO0FBS0E7QUFBQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFNQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFIQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUpBOztBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFKQTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUlBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7O0FBQUE7QUFNQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFKQTs7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU5BO0FBQUE7QUFRQTtBQUFBOztBQVJBO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTs7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBSUE7O0FBRUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU5BO0FBQUE7QUFPQTtBQUFBOztBQVBBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7O0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUdBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUdBO0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQVNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFUQTtBQWdCQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQWpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUhBOztBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFDQTtBQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFFQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBR0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FFaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9BcHAudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvcGFnZXMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvcGFnZXMvZXJyb3IudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3BhZ2VzL3Byb2R1Y3QudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3BhZ2VzL3NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvcm91dGVycy9Qcm9kdWN0Um91dGVyLnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9yb3V0ZXJzL1Jvb3RSb3V0ZXIudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3JvdXRlcnMvU2l0ZVJvdXRlci50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvcm91dGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9yb3V0ZXJzL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvc2VydmljZXMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9zZXJ2aWNlcy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvc2VydmljZXMvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvc2hhcmVkL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvc2hhcmVkL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQudHN4Iiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3NoYXJlZC9jb21wb25lbnRzL1Byb3RlY3RlZFJvb3QvUHJvdGVjdGVkUm9vdC50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvc2hhcmVkL2NvbXBvbmVudHMvUHVibGljUm9vdC9QdWJsaWNSb290LnRzeCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9zc3IvYnJvd3Nlci50c3giLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL3NpdGUvdXRpbHMvYnJvd3Nlci50cyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9jb21wb25lbnRzL0hvbWUvSG9tZS5tb2R1bGUuc2Nzcz84MTExIiwid2VicGFjazovL3dlYi8uL3NyYy9zaXRlL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3M/Y2NiZCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2l0ZS9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzPzEyNWUiLCJ3ZWJwYWNrOi8vd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBIeWRyYXRlLCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBxdWVyeUNsaWVudDogYW55O1xuICBzdGF0ZT86IHN0cmluZztcbn1cblxuaW1wb3J0IFwiLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IHF1ZXJ5Q2xpZW50LCBzdGF0ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPEh5ZHJhdGUgc3RhdGU9e3N0YXRlfT57Y2hpbGRyZW59PC9IeWRyYXRlPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT5Db250YWN0IFBhZ2U8L2gxPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gXCIuLy4uLy4uL3NlcnZpY2VzL3VzZXJzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSG9tZS5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShcInVzZXJzXCIsIGZldGNoVXNlcnMpO1xuICAvLyBjb25zb2xlLmxvZyhcImhvbWUgdmlld1wiKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IDJzc3MgMkhvbWU8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8cD5FcnJvciBmZXRjaGluZyBkYXRhPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiA8cD5GZXRjaGluZyBkYXRhLi4uPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZGF0YT8ubWFwKCh1c2VyOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8cCBrZXk9e3VzZXIuaWR9Pnt1c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBmZXRjaFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvTm90Rm91bmRcIjtcbmltcG9ydCB7IGlzRXJyb3JBcHAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYnJvd3NlclwiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcbiAgaWYgKGlzRXJyb3JBcHApIHJldHVybiA8Tm90Rm91bmQgLz47XG5cbiAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xuXG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShbXCJwcm9kdWN0XCIsIGlkXSwgYXN5bmMgKCkgPT5cbiAgICBmZXRjaFByb2R1Y3QoaWQpXG4gICk7XG5cbiAgLy8gY29uc29sZS5sb2coeyBkYXRhMiB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPlByb2R1Y3Q8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8cD5FcnJvciBmZXRjaGluZyBkYXRhPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiA8cD5GZXRjaGluZyBkYXRhLi4uPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+e2RhdGE/LmRhdGE/Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e2RhdGE/LmRhdGE/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHN0cm9uZz57ZGF0YT8uZGF0YT8ucHJpY2V9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NlYXJjaFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBxID0gXCJcIjtcbiAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KFtcInNlYXJjaFwiLCBxXSwgKCkgPT4gZmV0Y2hTZWFyY2gocSkpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+U2VhcmNoPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiA8cD5FcnJvciBmZXRjaGluZyBkYXRhPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiA8cD5GZXRjaGluZyBkYXRhLi4uPC9wPn1cbiAgICAgICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtOiBhbnksIGlkOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e2l0ZW0uaWR9PntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9wcm9kdWN0L1wiICsgaXRlbS5pZH0+RGV0YWlsPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBkZWh5ZHJhdGUsIFF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm9vdCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9Qcm90ZWN0ZWRSb290XCI7XG5pbXBvcnQgeyBQdWJsaWNSb290IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL1B1YmxpY1Jvb3RcIjtcblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDPGFueT4gPSAoeyBoYXNTZXNzaW9uIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJjb250YWN0IHZpZXdcIik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoYXNTZXNzaW9uID8gKFxuICAgICAgICA8UHJvdGVjdGVkUm9vdCBUZW1wbGF0ZT17Q29udGFjdH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQdWJsaWNSb290IFRlbXBsYXRlPXtDb250YWN0fSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgY29uc29sZS5sb2coXCJjb250YWN0IHNlcnZlclwiKTtcblxuICAvLyBhd2FpdCBxdWVyeUNsaWVudC5wcmVmZXRjaFF1ZXJ5KFwidXNlcnNcIiwgZmV0Y2hVc2Vycyk7XG4gIGNvbnN0IGhhc1Nlc3Npb24gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBoYXNTZXNzaW9uLFxuICAgIH0sXG4gICAgc3RhdGU6IGRlaHlkcmF0ZShxdWVyeUNsaWVudCksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFBhZ2UgPSB7IGdldFNlcnZlclNpZGVQcm9wcywgSW5kZXggfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZGVoeWRyYXRlLCBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvTm90Rm91bmRcIjtcbmltcG9ydCB7IFByb3RlY3RlZFJvb3QgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvUHJvdGVjdGVkUm9vdFwiO1xuaW1wb3J0IHsgUHVibGljUm9vdCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9QdWJsaWNSb290XCI7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzxhbnk+ID0gKHsgaGFzU2Vzc2lvbiB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibm90IEZvdW5kXCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGFzU2Vzc2lvbiA/IChcbiAgICAgICAgPFByb3RlY3RlZFJvb3QgVGVtcGxhdGU9e05vdEZvdW5kfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFB1YmxpY1Jvb3QgVGVtcGxhdGU9e05vdEZvdW5kfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuICAvLyBhd2FpdCBxdWVyeUNsaWVudC5wcmVmZXRjaFF1ZXJ5KFwidXNlcnNcIiwgZmV0Y2hVc2Vycyk7XG4gIGNvbnN0IGhhc1Nlc3Npb24gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBoYXNTZXNzaW9uLFxuICAgIH0sXG4gICAgc3RhdGU6IGRlaHlkcmF0ZShxdWVyeUNsaWVudCksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgRXJyb3JQYWdlID0geyBnZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZGV4IH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkZWh5ZHJhdGUsIFF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2Vyc1wiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm9vdCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9Qcm90ZWN0ZWRSb290XCI7XG5pbXBvcnQgeyBQdWJsaWNSb290IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL1B1YmxpY1Jvb3RcIjtcblxuY29uc3QgSW5kZXg6IFJlYWN0LkZDPGFueT4gPSAoeyBoYXNTZXNzaW9uIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJob21lIHZpZXdcIik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoYXNTZXNzaW9uID8gKFxuICAgICAgICA8UHJvdGVjdGVkUm9vdCBUZW1wbGF0ZT17SG9tZX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQdWJsaWNSb290IFRlbXBsYXRlPXtIb21lfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJob21lIHNlcnZlclwiKTtcblxuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG4gIGF3YWl0IHF1ZXJ5Q2xpZW50LnByZWZldGNoUXVlcnkoXCJ1c2Vyc1wiLCBmZXRjaFVzZXJzKTtcbiAgY29uc3QgaGFzU2Vzc2lvbiA9IHRydWU7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhhc1Nlc3Npb24sXG4gICAgfSxcbiAgICBzdGF0ZTogZGVoeWRyYXRlKHF1ZXJ5Q2xpZW50KSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9IHsgZ2V0U2VydmVyU2lkZVByb3BzLCBJbmRleCB9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vY29udGFjdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ob21lXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lcnJvclwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGVoeWRyYXRlLCBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0XCI7XG5pbXBvcnQgeyBmZXRjaFByb2R1Y3QgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvTm90Rm91bmRcIjtcbmltcG9ydCB7IFByb3RlY3RlZFJvb3QgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbXBvbmVudHMvUHJvdGVjdGVkUm9vdFwiO1xuaW1wb3J0IHsgUHVibGljUm9vdCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9QdWJsaWNSb290XCI7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzxhbnk+ID0gKHsgaGFzU2Vzc2lvbiwgaGFzRXJyb3IgfSkgPT4ge1xuICBpZiAoaGFzRXJyb3IpIHJldHVybiA8Tm90Rm91bmQgLz47XG4gIGNvbnNvbGUubG9nKFwicHJvZHVjdCB2aWV3XCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoYXNTZXNzaW9uID8gKFxuICAgICAgICA8UHJvdGVjdGVkUm9vdCBUZW1wbGF0ZT17UHJvZHVjdH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQdWJsaWNSb290IFRlbXBsYXRlPXtQcm9kdWN0fSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuICBjb25zdCBoYXNTZXNzaW9uID0gdHJ1ZTtcbiAgY29uc3QgaGFzRXJyb3IgPSBmYWxzZTtcblxuICBjb25zdCBpZCA9IHJlcS5wYXRoLnNwbGl0KFwiL1wiKS5wb3AoKTtcblxuICBhd2FpdCBxdWVyeUNsaWVudC5wcmVmZXRjaFF1ZXJ5KFtcInByb2R1Y3RcIiwgaWRdLCAoKSA9PiBmZXRjaFByb2R1Y3QoaWQpKTtcblxuICBjb25zb2xlLmxvZyhcInByb2R1Y3Qgc2VydmVyXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhhc1Nlc3Npb24sXG4gICAgICBoYXNFcnJvcixcbiAgICB9LFxuICAgIHN0YXRlOiBkZWh5ZHJhdGUocXVlcnlDbGllbnQpLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQYWdlID0geyBnZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZGV4IH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGRlaHlkcmF0ZSwgUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBOb3RGb3VuZCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9Ob3RGb3VuZFwiO1xuaW1wb3J0IHsgUHJvdGVjdGVkUm9vdCB9IGZyb20gXCIuLi9zaGFyZWQvY29tcG9uZW50cy9Qcm90ZWN0ZWRSb290XCI7XG5pbXBvcnQgeyBQdWJsaWNSb290IH0gZnJvbSBcIi4uL3NoYXJlZC9jb21wb25lbnRzL1B1YmxpY1Jvb3RcIjtcbmltcG9ydCB7IGZldGNoU2VhcmNoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5cbmNvbnN0IEluZGV4OiBSZWFjdC5GQzxhbnk+ID0gKHsgaGFzU2Vzc2lvbiwgaGFzRXJyb3IgfSkgPT4ge1xuICBpZiAoaGFzRXJyb3IpIHJldHVybiA8Tm90Rm91bmQgLz47XG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHZpZXdcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2hhc1Nlc3Npb24gPyAoXG4gICAgICAgIDxQcm90ZWN0ZWRSb290IFRlbXBsYXRlPXtTZWFyY2h9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8UHVibGljUm9vdCBUZW1wbGF0ZT17U2VhcmNofSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuICBjb25zdCBoYXNTZXNzaW9uID0gdHJ1ZTtcbiAgY29uc3QgaGFzRXJyb3IgPSBmYWxzZTtcblxuICBjb25zdCBxID0gcmVxLnF1ZXJ5Py5xPy50b1N0cmluZygpIHx8IFwiXCI7XG4gIGF3YWl0IHF1ZXJ5Q2xpZW50LnByZWZldGNoUXVlcnkoW1wic2VhcmNoXCIsIHFdLCAoKSA9PiBmZXRjaFNlYXJjaChxKSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJzZWFyY2ggc2VydmVyXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhhc1Nlc3Npb24sXG4gICAgICBoYXNFcnJvcixcbiAgICB9LFxuICAgIHN0YXRlOiBkZWh5ZHJhdGUocXVlcnlDbGllbnQpLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhZ2UgPSB7IGdldFNlcnZlclNpZGVQcm9wcywgSW5kZXggfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuL3JvdXRlc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdFJvdXRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVzPlxuICAgICAge3JvdXRlc1xuICAgICAgICA/LmZpbmQoKHIpID0+IHIucGF0aCA9PT0gXCIqXCIpXG4gICAgICAgID8ucm91dGVzPy5maW5kKChyKSA9PiByLnBhdGggPT09IFwicHJvZHVjdC8qXCIpXG4gICAgICAgID8ucm91dGVzPy5tYXAoKHJvdXRlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBwYXRoLCBpbmRleCwgSW5kZXhDb21wb25lbnQ6IEMxLCBwcm9wcyB9ID0gcm91dGU7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBlbGVtZW50PXs8QzEgey4uLnByb3BzfSAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9Sb3V0ZXM+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBJUm91dGUgfSBmcm9tIFwiLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9yb3V0ZS5pbnRlcmZhY2VcIjtcblxuaW50ZXJmYWNlIFJvb3RSb3V0ZXJQcm9wcyB7XG4gIHJvdXRlcz86IElSb3V0ZVtdO1xufVxuXG5leHBvcnQgY29uc3QgUm9vdFJvdXRlcjogUmVhY3QuRkM8Um9vdFJvdXRlclByb3BzPiA9ICh7IHJvdXRlcyB9KSA9PiAoXG4gIDxSb3V0ZXM+XG4gICAge3JvdXRlcyAmJlxuICAgICAgcm91dGVzPy5tYXAoKHJvdXRlOiBhbnksIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGluZGV4LCBJbmRleENvbXBvbmVudDogQzEsIHByb3BzIH0gPSByb3V0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgIGVsZW1lbnQ9ezxDMSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyb3V0ZT8ucm91dGVzICYmXG4gICAgICAgICAgICAgIHJvdXRlPy5yb3V0ZXM/Lm1hcCgocm91dGUyOiBhbnksIGtleTI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgyLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4MixcbiAgICAgICAgICAgICAgICAgIEluZGV4Q29tcG9uZW50OiBDMixcbiAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wczIsXG4gICAgICAgICAgICAgICAgfSA9IHJvdXRlMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5Mn1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4Mn1cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aDJ9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxDMiB7Li4ucHJvcHMyfSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICA8L1JvdXRlcz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJvdXRlcywgUm91dGUsIE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi9yb3V0ZXNcIjtcblxuZXhwb3J0IGNvbnN0IFNpdGVSb3V0ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcz5cbiAgICAgIHtyb3V0ZXNcbiAgICAgICAgPy5maW5kKChyKSA9PiByLnBhdGggPT09IFwiKlwiKVxuICAgICAgICA/LnJvdXRlcz8ubWFwKChyb3V0ZTogYW55LCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcGF0aCwgaW5kZXgsIEluZGV4Q29tcG9uZW50OiBDMSwgcHJvcHMgfSA9IHJvdXRlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgZWxlbWVudD17PEMxIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyb3V0ZT8ucm91dGVzICYmXG4gICAgICAgICAgICAgICAgcm91dGU/LnJvdXRlcz8ubWFwKChyb3V0ZTI6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aDIsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleDIsXG4gICAgICAgICAgICAgICAgICAgIEluZGV4Q29tcG9uZW50OiBDMixcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzMixcbiAgICAgICAgICAgICAgICAgIH0gPSByb3V0ZTI7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXgyfVxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGgyfVxuICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxDMiB7Li4ucHJvcHMyfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgIDwvUm91dGVzPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL1Byb2R1Y3RSb3V0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1Jvb3RSb3V0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NpdGVSb3V0ZXJcIjtcbiIsImltcG9ydCB7XG4gIFNlYXJjaFBhZ2UsXG4gIENvbnRhY3RQYWdlLFxuICBQcm9kdWN0UGFnZSxcbiAgSG9tZVBhZ2UsXG4gIEVycm9yUGFnZSxcbn0gZnJvbSBcIi4vLi4vcGFnZXNcIjtcblxuaW1wb3J0IHsgSVJvdXRlIH0gZnJvbSBcIi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvcm91dGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBQcm9kdWN0Um91dGVyIH0gZnJvbSBcIi4vUHJvZHVjdFJvdXRlclwiO1xuaW1wb3J0IHsgU2l0ZVJvdXRlciB9IGZyb20gXCIuL1NpdGVSb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogSVJvdXRlW10gPSBbXG4gIHtcbiAgICBwYXRoOiBcIipcIixcbiAgICBJbmRleENvbXBvbmVudDogU2l0ZVJvdXRlcixcbiAgICByb3V0ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJzZWFyY2hcIixcbiAgICAgICAgZmV0Y2hEYXRhOiBTZWFyY2hQYWdlLmdldFNlcnZlclNpZGVQcm9wcyxcbiAgICAgICAgSW5kZXhDb21wb25lbnQ6IFNlYXJjaFBhZ2UuSW5kZXgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgICAgSW5kZXhDb21wb25lbnQ6IENvbnRhY3RQYWdlLkluZGV4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJwcm9kdWN0LypcIixcbiAgICAgICAgSW5kZXhDb21wb25lbnQ6IFByb2R1Y3RSb3V0ZXIsXG4gICAgICAgIHJvdXRlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgICAgICAgICBmZXRjaERhdGE6IFByb2R1Y3RQYWdlLmdldFNlcnZlclNpZGVQcm9wcyxcbiAgICAgICAgICAgIEluZGV4Q29tcG9uZW50OiBQcm9kdWN0UGFnZS5JbmRleCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgICAgICAgSW5kZXhDb21wb25lbnQ6IEVycm9yUGFnZS5JbmRleCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgIGZldGNoRGF0YTogSG9tZVBhZ2UuZ2V0U2VydmVyU2lkZVByb3BzLFxuICAgICAgICBJbmRleENvbXBvbmVudDogSG9tZVBhZ2UuSW5kZXgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIipcIixcbiAgICAgICAgSW5kZXhDb21wb25lbnQ6IEVycm9yUGFnZS5JbmRleCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBtc2dSZXNwb25zZSB7XG4gIGRhdGE6IHt9IHwgbnVsbDtcbiAgc3RhdHVzOiB0cnVlIHwgZmFsc2U7XG4gIGNvZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jIChhcmdzID0gXCJcIikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzOiBjb2RlIH0gPSBhd2FpdCBheGlvcyhcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cy9cIiArIGFyZ3NcbiAgICApO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgIGNvZGU6IGU/LnJlc3BvbnNlPy5zdGF0dXMgfHwgNDA0LFxuICAgIH0gYXMgbXNnUmVzcG9uc2U7XG4gIH1cbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaCA9IGFzeW5jIChxID0gXCJcIikgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVG9wfT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51T3B0aW9uc30+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPlNlYXJjaDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENhdGVnb3J5c1xuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL2NhdGVnb3JpZS9tZW5cIn0+TWVuPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL2NhdGVnb3JpZS9ib3lcIn0+Qm95PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL2NhdGVnb3JpZS9naXJsXCJ9Pkdpcmw8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUb3BVc2VyfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVPcHRpb25zfT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2FkbWluXCI+QWRtaW48L2E+XG4gICAgICAgICAgICB7LyogPExpbmsgdG89XCIvYWRtaW5cIj5BZG1pbjwvTGluaz4gKi99XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPk5vdEZvdW5kPC9oMT5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBQcm90ZWN0ZWRSb290UHJvcHMgfSBmcm9tIFwiLi9Qcm90ZWN0ZWRSb290LmludGVyZmFjZVwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgUHJvdGVjdGVkUm9vdDogUmVhY3QuRkM8UHJvdGVjdGVkUm9vdFByb3BzPiA9ICh7XG4gIGRhdGEsXG4gIFRlbXBsYXRlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgIDxUZW1wbGF0ZSBkYXRhPXtkYXRhfSAvPlxuICAgIC8vIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBQdWJsaWNSb290UHJvcHMgfSBmcm9tIFwiLi9QdWJsaWNSb290LmludGVyZmFjZVwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgUHVibGljUm9vdDogUmVhY3QuRkM8UHVibGljUm9vdFByb3BzPiA9ICh7IGRhdGEsIFRlbXBsYXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAvLyA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICA8VGVtcGxhdGUgZGF0YT17ZGF0YX0gLz5cbiAgICAvLyA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vLi4vQXBwXCI7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi8uLi9yb3V0ZXJzL3JvdXRlc1wiO1xuaW1wb3J0IHsgUm9vdFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXJzXCI7XG5cbmNvbnN0IGRlaHlkcmF0ZWRTdGF0ZSA9ICh3aW5kb3cgYXMgYW55KS5fX1JFQUNUX1FVRVJZX1NUQVRFX187XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCBxdWVyeUNsaWVudD17cXVlcnlDbGllbnR9IHN0YXRlPXtkZWh5ZHJhdGVkU3RhdGV9PlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvb3RSb3V0ZXIgcm91dGVzPXtyb3V0ZXN9IC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L0FwcD4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbmV4cG9ydCBjb25zdCBxdWVyeVN0YXRlID0gaXNCcm93c2VyICYmICh3aW5kb3cgYXMgYW55KS5fX1JFQUNUX1FVRVJZX1NUQVRFX187XG5cbmV4cG9ydCBjb25zdCBpc0Vycm9yQXBwID0gaXNCcm93c2VyICYmIHF1ZXJ5U3RhdGUgPT09IFwiRVJST1JcIjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widGl0bGVcIjpcIm83RlhwRHV5ekpMY3lTejNFdThTVnc9PVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhlYWRlclRvcFwiOlwiWmtSOHVDRGhiVFNkdFllcVRYWmQzZz09XCIsXCJoZWFkZXJUb3BNZW51XCI6XCJNeTY5VUJsM1NwVFpkdE1SYjZZd3ZnPT1cIixcImhlYWRlclRvcFVzZXJcIjpcIk5PZktPV0I0YzAyc1UxQ0VucHVNK3c9PVwiLFwibWVudU9wdGlvbnNcIjpcIl80YjNkR2ZoOVVsR3FGaEZyQjJ3UXJ3PT1cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2ViXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NpdGUvc3NyL2Jyb3dzZXIudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=