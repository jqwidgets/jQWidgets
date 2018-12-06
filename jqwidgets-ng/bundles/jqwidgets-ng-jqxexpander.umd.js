require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxexpander');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxexpander', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxexpander = {}),global.ng.core));
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
    var jqxExpanderComponent = /** @class */ (function () {
        function jqxExpanderComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
            // jqxExpanderComponent events
            this.onCollapsing = new core.EventEmitter();
            this.onCollapsed = new core.EventEmitter();
            this.onExpanding = new core.EventEmitter();
            this.onExpanded = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.ngOnInit = /**
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
        jqxExpanderComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxExpander(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                                this.host.jqxExpander(this.properties[i], this[attrName]);
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
        jqxExpanderComponent.prototype.arraysEqual = /**
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
        jqxExpanderComponent.prototype.manageAttributes = /**
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
        jqxExpanderComponent.prototype.moveClasses = /**
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
        jqxExpanderComponent.prototype.moveStyles = /**
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
        jqxExpanderComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxExpanderComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.__updateRect__ = /**
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
        jqxExpanderComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxExpander('setOptions', options);
            };
        // jqxExpanderComponent properties
        // jqxExpanderComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.animationType =
            // jqxExpanderComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('animationType', arg);
                }
                else {
                    return this.host.jqxExpander('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.arrowPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('arrowPosition', arg);
                }
                else {
                    return this.host.jqxExpander('arrowPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.collapseAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('collapseAnimationDuration', arg);
                }
                else {
                    return this.host.jqxExpander('collapseAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('disabled', arg);
                }
                else {
                    return this.host.jqxExpander('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.expanded = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('expanded', arg);
                }
                else {
                    return this.host.jqxExpander('expanded');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.expandAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('expandAnimationDuration', arg);
                }
                else {
                    return this.host.jqxExpander('expandAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('height', arg);
                }
                else {
                    return this.host.jqxExpander('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.headerPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('headerPosition', arg);
                }
                else {
                    return this.host.jqxExpander('headerPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('initContent', arg);
                }
                else {
                    return this.host.jqxExpander('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('rtl', arg);
                }
                else {
                    return this.host.jqxExpander('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.showArrow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('showArrow', arg);
                }
                else {
                    return this.host.jqxExpander('showArrow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('theme', arg);
                }
                else {
                    return this.host.jqxExpander('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.toggleMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('toggleMode', arg);
                }
                else {
                    return this.host.jqxExpander('toggleMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxExpanderComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxExpander('width', arg);
                }
                else {
                    return this.host.jqxExpander('width');
                }
            };
        // jqxExpanderComponent functions
        // jqxExpanderComponent functions
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.collapse =
            // jqxExpanderComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxExpander('collapse');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('disable');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('destroy');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('enable');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.expand = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('expand');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('focus');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.getContent = /**
         * @return {?}
         */
            function () {
                return this.host.jqxExpander('getContent');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.getHeaderContent = /**
         * @return {?}
         */
            function () {
                return this.host.jqxExpander('getHeaderContent');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.invalidate = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('invalidate');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('refresh');
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxExpander('render');
            };
        /**
         * @param {?} headerContent
         * @return {?}
         */
        jqxExpanderComponent.prototype.setHeaderContent = /**
         * @param {?} headerContent
         * @return {?}
         */
            function (headerContent) {
                this.host.jqxExpander('setHeaderContent', headerContent);
            };
        /**
         * @param {?} content
         * @return {?}
         */
        jqxExpanderComponent.prototype.setContent = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                this.host.jqxExpander('setContent', content);
            };
        /**
         * @return {?}
         */
        jqxExpanderComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('collapsing', function (eventData) { _this.onCollapsing.emit(eventData); });
                this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
                this.host.on('expanding', function (eventData) { _this.onExpanding.emit(eventData); });
                this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
            };
        jqxExpanderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxExpander',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxExpanderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxExpanderComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrArrowPosition: [{ type: core.Input, args: ['arrowPosition',] }],
            attrCollapseAnimationDuration: [{ type: core.Input, args: ['collapseAnimationDuration',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrExpanded: [{ type: core.Input, args: ['expanded',] }],
            attrExpandAnimationDuration: [{ type: core.Input, args: ['expandAnimationDuration',] }],
            attrHeaderPosition: [{ type: core.Input, args: ['headerPosition',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrShowArrow: [{ type: core.Input, args: ['showArrow',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToggleMode: [{ type: core.Input, args: ['toggleMode',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onCollapsing: [{ type: core.Output }],
            onCollapsed: [{ type: core.Output }],
            onExpanding: [{ type: core.Output }],
            onExpanded: [{ type: core.Output }]
        };
        return jqxExpanderComponent;
    }()); //jqxExpanderComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxExpanderModule = /** @class */ (function () {
        function jqxExpanderModule() {
        }
        jqxExpanderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxExpanderComponent],
                        exports: [jqxExpanderComponent]
                    },] }
        ];
        return jqxExpanderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxExpanderComponent = jqxExpanderComponent;
    exports.jqxExpanderModule = jqxExpanderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

