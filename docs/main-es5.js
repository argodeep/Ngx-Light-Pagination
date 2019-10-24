(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "../../dist/ngx-light-pagination/fesm2015/ngx-light-pagination.js": 
        /*!***************************************************************************************************!*\
          !*** D:/Open Source/library-workspace/dist/ngx-light-pagination/fesm2015/ngx-light-pagination.js ***!
          \***************************************************************************************************/
        /*! exports provided: NgxLightPaginationComponent, NgxLightPaginationModule, ɵa, ɵb, ɵc, ɵd */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLightPaginationComponent", function () { return NgxLightPaginationComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLightPaginationModule", function () { return NgxLightPaginationModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return UpArrowComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return DownArrowComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return RightArrowComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return LeftArrowComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var Pagination = /** @class */ (function () {
                function Pagination() {
                }
                return Pagination;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var NgxLightPaginationComponent = /** @class */ (function () {
                /**
                 * @param {?} elRef
                 * @param {?} differs
                 */
                function NgxLightPaginationComponent(elRef, differs) {
                    this.elRef = elRef;
                    this.differs = differs;
                    this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.paginatedPages = [];
                    this.invertColorString = '#fff';
                    this.differ = differs.find({}).create();
                }
                /**
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.ngOnInit = function () {
                    if (this.color) {
                        this.invertColorString = this.invertColor(this.color, true);
                    }
                    // this.setOption(this.paginationData.perPageItem)
                    this.setPagination(this.paginationData);
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['color']) {
                        if (this.color.length === 4 || this.color.length === 7) {
                            this.invertColorString = this.invertColor(this.color, true);
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.ngDoCheck = function () {
                    /** @type {?} */
                    var paginationChanges = this.differ.diff(this.paginationData);
                    if (paginationChanges) {
                        // this.setOption(this.paginationData.perPageItem)
                        this.setPagination(this.paginationData);
                    }
                };
                /**
                 * @param {?} paginationData
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.setPagination = function (paginationData) {
                    paginationData.paginationLength = 5;
                    /** @type {?} */
                    var pages = [paginationData.currentPage];
                    /** @type {?} */
                    var pointer = Math.floor(paginationData.paginationLength / 2);
                    /** @type {?} */
                    var totalPage = paginationData.totalPage === Math.ceil(paginationData.totalItem / paginationData.perPageItem) ? paginationData.totalPage : Math.ceil(paginationData.totalItem / paginationData.perPageItem);
                    /** @type {?} */
                    var minBuffer;
                    /** @type {?} */
                    var maxBuffer;
                    if (totalPage - paginationData.currentPage < pointer) {
                        minBuffer = (paginationData.paginationLength - 1) - (totalPage - paginationData.currentPage);
                        maxBuffer = totalPage - paginationData.currentPage;
                    }
                    else if (totalPage - paginationData.currentPage >= pointer && paginationData.currentPage - 1 >= pointer) {
                        minBuffer = paginationData.paginationLength - 1 - pointer;
                        maxBuffer = paginationData.paginationLength - minBuffer - 1;
                    }
                    else if (paginationData.currentPage - 1 < pointer) {
                        minBuffer = paginationData.currentPage - 1;
                        maxBuffer = paginationData.paginationLength - minBuffer - 1;
                    }
                    for (var i = paginationData.currentPage - minBuffer; i <= paginationData.currentPage + maxBuffer; i++) {
                        if (i > paginationData.currentPage && i <= paginationData.currentPage + maxBuffer) {
                            pages.push(i);
                        }
                        if (i > 0 && i < paginationData.currentPage && i >= paginationData.currentPage - minBuffer) {
                            pages.push(i);
                        }
                    }
                    this.paginatedPages = pages.sort(( /**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */function (a, b) { return a - b; })).slice();
                };
                // setOption(perPageItem) {
                //   this.perPageOption = [];
                //   const firstIndex = perPageItem;
                //   const secondIndex = perPageItem * 2;
                //   const thirdIndex = perPageItem * 3;
                //   if (firstIndex <= this.paginationData.totalItem) {
                //     this.perPageOption.push(firstIndex)
                //   }
                //   if (secondIndex <= this.paginationData.totalItem) {
                //     this.perPageOption.push(secondIndex)
                //   }
                //   if (thirdIndex <= this.paginationData.totalItem) {
                //     this.perPageOption.push(thirdIndex)
                //   }
                // }
                // hideDropdown() {
                //   this.dropdownOpened = false;
                //   setTimeout(e => {
                //     const block = this.elRef.nativeElement.querySelector('.dropdown-list-show');
                //     if (block) {
                //       block.classList.remove('dropdown-list-show');
                //       block.classList.add('dropdown-list');
                //     }
                //     const list = this.elRef.nativeElement.querySelector('.list-show');
                //     if (list) {
                //       list.classList.remove('list-show');
                //       list.classList.add('list')
                //     };
                //   }, 0);
                // }
                // showDropDown() {
                //   if (this.dropdownOpened === false) {
                //     this.dropdownOpened = true;
                //     const block = this.elRef.nativeElement.querySelector('.dropdown-list');
                //     if (block) {
                //       block.classList.remove('dropdown-list');
                //       block.classList.add('dropdown-list-show');
                //     }
                //     const list = this.elRef.nativeElement.querySelector('.list');
                //     if (list) {
                //       list.classList.remove('list');
                //       list.classList.add('list-show');
                //     };
                //   } else {
                //     this.hideDropdown();
                //   }
                // }
                /**
                 * @param {?} hex
                 * @param {?} bw
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.invertColor = function (hex, bw) {
                    if (hex.indexOf('#') === 0) {
                        hex = hex.slice(1);
                    }
                    // convert 3-digit hex to 6-digits.
                    if (hex.length === 3) {
                        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                    }
                    if (hex.length !== 6) {
                        throw new Error('Invalid HEX color.');
                    }
                    /** @type {?} */
                    var r = parseInt(hex.slice(0, 2), 16);
                    /** @type {?} */
                    var g = parseInt(hex.slice(2, 4), 16);
                    /** @type {?} */
                    var b = parseInt(hex.slice(4, 6), 16);
                    if (bw) {
                        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                            ? '#000000'
                            : '#FFFFFF';
                    }
                    // invert color components
                    r = (255 - r).toString(16);
                    g = (255 - g).toString(16);
                    b = (255 - b).toString(16);
                    // pad each with zeros and return
                    return '#' + this.padZero(r, null) + this.padZero(g, null) + this.padZero(b, null);
                };
                /**
                 * @param {?} str
                 * @param {?} len
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.padZero = function (str, len) {
                    len = len || 2;
                    /** @type {?} */
                    var zeros = new Array(len).join('0');
                    return (zeros + str).slice(-len);
                };
                /**
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.previous = function () {
                    if (this.paginationData.currentPage > 1) {
                        this.paginationData.currentPage = this.paginationData.currentPage - 1;
                        /** @type {?} */
                        var event = {
                            type: 'Previous Page',
                            data: this.paginationData.currentPage
                        };
                        this.onPageChange.emit(event);
                    }
                };
                /**
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.next = function () {
                    if (this.paginationData.currentPage - this.paginationData.totalPage < 0) {
                        this.paginationData.currentPage = this.paginationData.currentPage + 1;
                        /** @type {?} */
                        var event = {
                            type: 'Next Page',
                            data: this.paginationData.currentPage
                        };
                        this.onPageChange.emit(event);
                    }
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                NgxLightPaginationComponent.prototype.changePage = function (index) {
                    this.paginationData.currentPage = index;
                    /** @type {?} */
                    var event = {
                        type: 'Page Select',
                        data: index
                    };
                    this.onPageChange.emit(event);
                };
                return NgxLightPaginationComponent;
            }());
            NgxLightPaginationComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngx-light-pagination',
                            template: "<div class=\"wrapper-pagination\" *ngIf=\"paginatedPages.length > 0 && paginationData.perPageItem\">\r\n    <!-- Dropdown Block -->\r\n    <!-- <div class=\"dropdown-block\" *ngIf=\"perPageOption.length > 0\">\r\n        <span class=\"block\" [ngStyle]=\"{'color': color }\" style=\"height: 24px; flex-direction: row\" (click)='showDropDown()'\r\n            (clickOutside)='hideDropdown()'>\r\n            <span class=\"dropdown-text\">{{paginationData.perPageItem}} / page</span>\r\n            <span>\r\n                <down-arrow [color]=\"color && (color.length === 4 || color.length === 7) ? color : '#000'\"></down-arrow>\r\n            </span>\r\n        </span>\r\n        <div class=\"dropdown-list\"\r\n            [ngClass]=\"{'first-index': perPageOption.length === 1, 'second-index': perPageOption.length === 2, 'third-index': perPageOption.length === 3}\">\r\n            <ul class=\"list\">\r\n                <li *ngFor=\"let item of perPageOption\" (click)=\"hideDropdown(); perPageChange(item)\" class=\"perPage\"\r\n                    [ngClass]=\"{'perPageActive': item === paginationData.perPageItem}\">{{item}} / page</li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n    <!-- Pagination Block -->\r\n    <div class=\"block\"\r\n        [ngStyle]=\"{'background-color': invertColorString, 'color': color && (color.length === 4 || color.length === 7) ? color : '#000', 'opacity': paginationData.currentPage !== 1 ? 1 : 0.3 }\"\r\n        (click)=\"previous()\">\r\n        <left-arrow [color]=\"color && (color.length === 4 || color.length === 7) ? color : '#000'\"></left-arrow>\r\n    </div>\r\n    <div *ngFor=\"let page of paginatedPages; let i = index\">\r\n        <div class=\"block\" (click)=\"changePage(page)\"\r\n            [ngStyle]=\"{'background-color': page === paginationData.currentPage ? (color && (color.length === 4 || color.length === 7) ? color : '#000') : invertColorString, 'color': page === paginationData.currentPage ? invertColorString : (color && (color.length === 4 || color.length === 7) ? color : '#000')  }\"\r\n            style=\"width: 24px; height: 24px\">\r\n            {{page}}\r\n        </div>\r\n    </div>\r\n    <div class=\"block\"\r\n        [ngStyle]=\"{'background-color': invertColorString, 'color': color && (color.length === 4 || color.length === 7) ? color : '#000', 'opacity': paginationData.currentPage !== paginationData.totalPage ? 1 : 0.3 }\"\r\n        (click)=\"next()\">\r\n        <right-arrow [color]=\"color && (color.length === 4 || color.length === 7) ? color : '#000'\"></right-arrow>\r\n    </div>\r\n</div>",
                            styles: [".wrapper-pagination{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:row}.block{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:4px;margin:4px;border-radius:4px;font-family:Montserrat,sans-serif;font-weight:500;font-size:14px;box-shadow:0 .125rem .25rem rgba(0,0,0,.125)!important;cursor:pointer}.block:hover{box-shadow:0 .125rem .425rem rgba(0,0,0,.175)!important}.perPage{height:auto;padding:8px 36px 8px 8px;background-color:#fff;font-size:14px}.perPage:hover{background-color:#f5f3f3}.perPageActive{background-color:#f9f9f9}"]
                        }] }
            ];
            /** @nocollapse */
            NgxLightPaginationComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
            ]; };
            NgxLightPaginationComponent.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                paginationData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                onPageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var UpArrowComponent = /** @class */ (function () {
                function UpArrowComponent() {
                }
                /**
                 * @return {?}
                 */
                UpArrowComponent.prototype.ngOnInit = function () {
                };
                return UpArrowComponent;
            }());
            UpArrowComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'up-arrow',
                            template: "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 492.002 492.002\" style=\"enable-background:new 0 0 492.002 492.002;\" xml:space=\"preserve\" style=\"width: 14px; height: 14px; margin: 5px 5px 0px\">\n<g>\n\t<g>\n\t\t<path d=\"M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844    L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124    c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064    c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132    C494.624,356.041,494.624,338.965,484.136,328.473z\" [attr.fill]=\"color\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n"
                        }] }
            ];
            /** @nocollapse */
            UpArrowComponent.ctorParameters = function () { return []; };
            UpArrowComponent.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var DownArrowComponent = /** @class */ (function () {
                function DownArrowComponent() {
                }
                /**
                 * @return {?}
                 */
                DownArrowComponent.prototype.ngOnInit = function () {
                };
                return DownArrowComponent;
            }());
            DownArrowComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'down-arrow',
                            template: "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 491.996 491.996\" style=\"enable-background:new 0 0 491.996 491.996;\" xml:space=\"preserve\" style=\"width: 14px; height: 14px; margin: 5px 5px 0px\">\n<g>\n\t<g>\n\t\t<path d=\"M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224    C491.996,136.902,489.204,130.046,484.132,124.986z\" [attr.fill]=\"color\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n"
                        }] }
            ];
            /** @nocollapse */
            DownArrowComponent.ctorParameters = function () { return []; };
            DownArrowComponent.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RightArrowComponent = /** @class */ (function () {
                function RightArrowComponent() {
                }
                /**
                 * @return {?}
                 */
                RightArrowComponent.prototype.ngOnInit = function () {
                };
                return RightArrowComponent;
            }());
            RightArrowComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'right-arrow',
                            template: "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 492.004 492.004\" style=\"enable-background:new 0 0 492.004 492.004;\" xml:space=\"preserve\" style=\"width: 14px; height: 14px; margin: 5px 5px 0px\">\n<g>\n\t<g>\n\t\t<path d=\"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z\" [attr.fill]=\"color\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n"
                        }] }
            ];
            /** @nocollapse */
            RightArrowComponent.ctorParameters = function () { return []; };
            RightArrowComponent.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var LeftArrowComponent = /** @class */ (function () {
                function LeftArrowComponent() {
                }
                /**
                 * @return {?}
                 */
                LeftArrowComponent.prototype.ngOnInit = function () {
                };
                return LeftArrowComponent;
            }());
            LeftArrowComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'left-arrow',
                            template: "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 492 492\" style=\"enable-background:new 0 0 492 492;\" xml:space=\"preserve\" style=\"width: 14px; height: 14px; margin: 5px 5px 0px\">\n<g>\n\t<g>\n\t\t<path d=\"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z\" [attr.fill]=\"color\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n"
                        }] }
            ];
            /** @nocollapse */
            LeftArrowComponent.ctorParameters = function () { return []; };
            LeftArrowComponent.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // import { OutsideDirective } from './outside.directive';
            var NgxLightPaginationModule = /** @class */ (function () {
                function NgxLightPaginationModule() {
                }
                return NgxLightPaginationModule;
            }());
            NgxLightPaginationModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [
                                NgxLightPaginationComponent,
                                // OutsideDirective,
                                UpArrowComponent,
                                DownArrowComponent,
                                RightArrowComponent,
                                LeftArrowComponent
                            ],
                            imports: [
                                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                            ],
                            exports: [NgxLightPaginationComponent],
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=ngx-light-pagination.js.map
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!*********************************************************************************************************!*\
          !*** D:/Open Source/library-workspace/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; justify-content: center\">\r\n        <img src=\"assets/icon.png\" height=\"128px\">\r\n</div>\r\n<h3>Ngx Light Pagination Demo</h3>\r\n<h5><span style=\"background-color: yellow\">Less than 15 kb, No Dependencies</span></h5>\r\n<p>Total Item: <input type=\"number\" min=\"1\" [(ngModel)]=\"paginationMeta.totalItem\" (input)=\"logicHandler()\"></p>\r\n<p>Per Page Item: <input type=\"number\" min=\"1\" [max]=\"paginationMeta.totalItem\" [(ngModel)]=\"paginationMeta.perPageItem\"\r\n                (input)=\"logicHandler()\"></p>\r\n<p>Total Page: {{paginationMeta.totalPage == 'Infinity' ? 'N/A' : paginationMeta.totalPage}}</p>\r\n<p>Current Page: {{paginationMeta.currentPage == 'Infinity' ? 'N/A' : paginationMeta.currentPage}}</p>\r\n<ngx-light-pagination [color]=\"themeColor\" [paginationData]=\"paginationMeta\" (onPageChange)=\"paginationEvents($event)\"></ngx-light-pagination>\r\n<p>Pagination Event Type: <span>{{paginationEvent.type? paginationEvent.type : 'N/A'}}</span></p>\r\n<p>Pagination Event Data: <span>{{paginationEvent.data? paginationEvent.data : 'N/A'}}</span></p>\r\n<br>\r\n<p>Theme Color: <input type=\"text\" placeholder=\"use #AA00FF format\" [(ngModel)]=\"themeColor\" maxlength=\"7\"></p>\r\n<p><a href=\"https://www.color-hex.com/\" target=\"_blank\">Choose Color From Here</a></p>\r\n<br>\r\n<P><a style=\"background-color: lightblue; padding: 4px; text-decoration: none\" href=\"https://www.npmjs.com/package/ngx-light-pagination/\" target=\"_blank\">See installation guide </a></P>\r\n<P><a style=\"background-color: lightyellow; padding: 4px; text-decoration: none\" href=\"https://github.com/argodeep/Ngx-Light-Pagination/issues/new?assignees=argodeep&labels=documentation%2C+enhancement&template=feature_request.md&title=\" target=\"_blank\">Request feature here</a></P>\r\n<P><a style=\"background-color: lightgray; padding: 4px; text-decoration: none\" href=\"https://github.com/argodeep/Ngx-Light-Pagination/issues/new?assignees=argodeep&labels=bug&template=bug_report.md&title=\" target=\"_blank\">Report bugs/issues here</a></P>\r\n<div style=\"margin: 15px 0px 0px; font-family: 'Courier New', Courier, monospace;\">\r\n        <p>Icons made by\r\n                <a href=\"https://www.flaticon.com/authors/roundicons\" title=\"Roundicons\" style=\"margin: 0 4px\">\r\n                        Roundicons </a>\r\n                from\r\n                <a href=\"https://www.flaticon.com/\" title=\"Flaticon\" style=\"margin: 0 4px\"> www.flaticon.com</a>\r\n        </p>\r\n</div>");
            /***/ 
        }),
        /***/ "../../node_modules/tslib/tslib.es6.js": 
        /*!************************************************************************!*\
          !*** D:/Open Source/library-workspace/node_modules/tslib/tslib.es6.js ***!
          \************************************************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p,\na,\nh3,\nh5 {\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n}\n\ninput {\n  padding: 4px;\n}\n\nspan {\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n  background-color: lightgray;\n  padding: 4px;\n}\n\np {\n  font-size: 14px;\n}\n\nh5 {\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL215LWxpYi1kZW1vL3NyYy9hcHAvRDpcXE9wZW4gU291cmNlXFxsaWJyYXJ5LXdvcmtzcGFjZS9wcm9qZWN0c1xcbXktbGliLWRlbW9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9teS1saWItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlDLDhDQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7QUNDRDs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbXktbGliLWRlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5hLFxyXG5oMyxcclxuaDUge1xyXG5cdGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcblx0cGFkZGluZzogNHB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcblx0cGFkZGluZzogNHB4O1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59IiwicCxcbmEsXG5oMyxcbmg1IHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.themeColor = '#260F4A';
                    this.paginationMeta = {
                        perPageItem: 5,
                        totalItem: 50,
                        currentPage: 3,
                        totalPage: 10,
                    };
                    this.paginationEvent = {};
                }
                AppComponent.prototype.logicHandler = function () {
                    if (this.paginationMeta.perPageItem > this.paginationMeta.totalItem) {
                        this.paginationMeta.perPageItem = this.paginationMeta.totalItem;
                    }
                    this.paginationMeta.totalPage = Math.ceil(this.paginationMeta.totalItem / this.paginationMeta.perPageItem);
                    var value = Math.floor(Math.random() * Math.floor(this.paginationMeta.totalPage));
                    this.paginationMeta.currentPage = value === 0 ? 1 : value;
                };
                AppComponent.prototype.paginationEvents = function (event) {
                    this.paginationEvent = event;
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var ngx_light_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-light-pagination */ "../../dist/ngx-light-pagination/fesm2015/ngx-light-pagination.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        ngx_light_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxLightPaginationModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Open Source\library-workspace\projects\my-lib-demo\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map