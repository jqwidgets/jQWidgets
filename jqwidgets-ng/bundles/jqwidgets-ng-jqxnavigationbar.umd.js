require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxnavigationbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnavigationbar', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnavigationbar = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxNavigationBarComponent = /** @class */ (function () {
        function jqxNavigationBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
            // jqxNavigationBarComponent events
            this.onCollapsingItem = new core.EventEmitter();
            this.onCollapsedItem = new core.EventEmitter();
            this.onExpandingItem = new core.EventEmitter();
            this.onExpandedItem = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate) {
                    this.createComponent();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.host) {
                    for (var i = 0; i < this.properties.length; i++) {
                        /** @type {?} */
                        var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                        /** @type {?} */
                        var areEqual = false;
                        if (this[attrName] !== undefined) {
                            if (typeof this[attrName] === 'object') {
                                if (this[attrName] instanceof Array) {
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                                this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                            }
                        }
                    }
                }
            };
        /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.arraysEqual = /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
            function (attrValue, hostValue) {
                if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
                    return false;
                }
                if (attrValue.length != hostValue.length) {
                    return false;
                }
                for (var i = 0; i < attrValue.length; i++) {
                    if (attrValue[i] !== hostValue[i]) {
                        return false;
                    }
                }
                return true;
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.manageAttributes = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var options = {};
                for (var i = 0; i < this.properties.length; i++) {
                    /** @type {?} */
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    if (this[attrName] !== undefined) {
                        options[this.properties[i]] = this[attrName];
                    }
                }
                return options;
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.moveClasses = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                var _a;
                /** @type {?} */
                var classes = parentEl.classList;
                if (classes.length > 0) {
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
                }
                parentEl.className = '';
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.moveStyles = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                /** @type {?} */
                var style = parentEl.style.cssText;
                childEl.style.cssText = style;
                parentEl.style.cssText = '';
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.createComponent = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                if (this.host) {
                    return;
                }
                if (options) {
                    JQXLite.extend(options, this.manageAttributes());
                }
                else {
                    options = this.manageAttributes();
                }
                this.host = JQXLite(this.elementRef.nativeElement.firstChild);
                this.moveClasses(this.elementRef.nativeElement, this.host[0]);
                this.moveStyles(this.elementRef.nativeElement, this.host[0]);
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxNavigationBar('setOptions', options);
            };
        // jqxNavigationBarComponent properties
        // jqxNavigationBarComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.animationType =
            // jqxNavigationBarComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('animationType', arg);
                }
                else {
                    return this.host.jqxNavigationBar('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.arrowPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('arrowPosition', arg);
                }
                else {
                    return this.host.jqxNavigationBar('arrowPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.collapseAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('collapseAnimationDuration', arg);
                }
                else {
                    return this.host.jqxNavigationBar('collapseAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('disabled', arg);
                }
                else {
                    return this.host.jqxNavigationBar('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.expandAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('expandAnimationDuration', arg);
                }
                else {
                    return this.host.jqxNavigationBar('expandAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.expandMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('expandMode', arg);
                }
                else {
                    return this.host.jqxNavigationBar('expandMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.expandedIndexes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('expandedIndexes', arg);
                }
                else {
                    return this.host.jqxNavigationBar('expandedIndexes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('height', arg);
                }
                else {
                    return this.host.jqxNavigationBar('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('initContent', arg);
                }
                else {
                    return this.host.jqxNavigationBar('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('rtl', arg);
                }
                else {
                    return this.host.jqxNavigationBar('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.showArrow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('showArrow', arg);
                }
                else {
                    return this.host.jqxNavigationBar('showArrow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('theme', arg);
                }
                else {
                    return this.host.jqxNavigationBar('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.toggleMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('toggleMode', arg);
                }
                else {
                    return this.host.jqxNavigationBar('toggleMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNavigationBar('width', arg);
                }
                else {
                    return this.host.jqxNavigationBar('width');
                }
            };
        // jqxNavigationBarComponent functions
        // jqxNavigationBarComponent functions
        /**
         * @param {?} header
         * @param {?} content
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.add =
            // jqxNavigationBarComponent functions
            /**
             * @param {?} header
             * @param {?} content
             * @return {?}
             */
            function (header, content) {
                this.host.jqxNavigationBar('add', header, content);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.collapseAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('collapseAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.disableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('disableAt', index);
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('disable');
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('destroy');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.expandAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('expandAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('enableAt', index);
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('enable');
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('focus');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.getHeaderContentAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return this.host.jqxNavigationBar('getHeaderContentAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.getContentAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return this.host.jqxNavigationBar('getContentAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.hideArrowAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('hideArrowAt', index);
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.invalidate = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('invalidate');
            };
        /**
         * @param {?} Index
         * @param {?} header
         * @param {?} content
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.insert = /**
         * @param {?} Index
         * @param {?} header
         * @param {?} content
         * @return {?}
         */
            function (Index, header, content) {
                this.host.jqxNavigationBar('insert', Index, header, content);
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('refresh');
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxNavigationBar('render');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.remove = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('remove', index);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.setContentAt = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                this.host.jqxNavigationBar('setContentAt', index, item);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.setHeaderContentAt = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                this.host.jqxNavigationBar('setHeaderContentAt', index, item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.showArrowAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNavigationBar('showArrowAt', index);
            };
        /**
         * @param {?} index
         * @param {?} header
         * @param {?} content
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.update = /**
         * @param {?} index
         * @param {?} header
         * @param {?} content
         * @return {?}
         */
            function (index, header, content) {
                this.host.jqxNavigationBar('update', index, header, content);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxNavigationBar('val', value);
                }
                else {
                    return this.host.jqxNavigationBar('val');
                }
            };
        /**
         * @return {?}
         */
        jqxNavigationBarComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('collapsingItem', function (eventData) { _this.onCollapsingItem.emit(eventData); });
                this.host.on('collapsedItem', function (eventData) { _this.onCollapsedItem.emit(eventData); });
                this.host.on('expandingItem', function (eventData) { _this.onExpandingItem.emit(eventData); });
                this.host.on('expandedItem', function (eventData) { _this.onExpandedItem.emit(eventData); });
            };
        jqxNavigationBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxNavigationBar',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxNavigationBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxNavigationBarComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrArrowPosition: [{ type: core.Input, args: ['arrowPosition',] }],
            attrCollapseAnimationDuration: [{ type: core.Input, args: ['collapseAnimationDuration',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrExpandAnimationDuration: [{ type: core.Input, args: ['expandAnimationDuration',] }],
            attrExpandMode: [{ type: core.Input, args: ['expandMode',] }],
            attrExpandedIndexes: [{ type: core.Input, args: ['expandedIndexes',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrShowArrow: [{ type: core.Input, args: ['showArrow',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToggleMode: [{ type: core.Input, args: ['toggleMode',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onCollapsingItem: [{ type: core.Output }],
            onCollapsedItem: [{ type: core.Output }],
            onExpandingItem: [{ type: core.Output }],
            onExpandedItem: [{ type: core.Output }]
        };
        return jqxNavigationBarComponent;
    }()); //jqxNavigationBarComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxNavigationBarModule = /** @class */ (function () {
        function jqxNavigationBarModule() {
        }
        jqxNavigationBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxNavigationBarComponent],
                        exports: [jqxNavigationBarComponent]
                    },] }
        ];
        return jqxNavigationBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxNavigationBarComponent = jqxNavigationBarComponent;
    exports.jqxNavigationBarModule = jqxNavigationBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

