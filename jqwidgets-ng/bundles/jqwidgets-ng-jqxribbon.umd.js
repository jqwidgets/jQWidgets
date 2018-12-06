require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxribbon');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxribbon', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxribbon = {}),global.ng.core));
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
    var jqxRibbonComponent = /** @class */ (function () {
        function jqxRibbonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'reorder', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
            // jqxRibbonComponent events
            this.onChange = new core.EventEmitter();
            this.onReorder = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.ngOnInit = /**
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
        jqxRibbonComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxRibbon(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                                this.host.jqxRibbon(this.properties[i], this[attrName]);
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
        jqxRibbonComponent.prototype.arraysEqual = /**
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
        jqxRibbonComponent.prototype.manageAttributes = /**
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
        jqxRibbonComponent.prototype.moveClasses = /**
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
        jqxRibbonComponent.prototype.moveStyles = /**
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
        jqxRibbonComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxRibbonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.__updateRect__ = /**
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
        jqxRibbonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxRibbon('setOptions', options);
            };
        // jqxRibbonComponent properties
        // jqxRibbonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.animationType =
            // jqxRibbonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('animationType', arg);
                }
                else {
                    return this.host.jqxRibbon('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.animationDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('animationDelay', arg);
                }
                else {
                    return this.host.jqxRibbon('animationDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('disabled', arg);
                }
                else {
                    return this.host.jqxRibbon('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('height', arg);
                }
                else {
                    return this.host.jqxRibbon('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('initContent', arg);
                }
                else {
                    return this.host.jqxRibbon('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.mode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('mode', arg);
                }
                else {
                    return this.host.jqxRibbon('mode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.popupCloseMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('popupCloseMode', arg);
                }
                else {
                    return this.host.jqxRibbon('popupCloseMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.position = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('position', arg);
                }
                else {
                    return this.host.jqxRibbon('position');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.reorder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('reorder', arg);
                }
                else {
                    return this.host.jqxRibbon('reorder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('rtl', arg);
                }
                else {
                    return this.host.jqxRibbon('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.selectedIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('selectedIndex', arg);
                }
                else {
                    return this.host.jqxRibbon('selectedIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.selectionMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('selectionMode', arg);
                }
                else {
                    return this.host.jqxRibbon('selectionMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.scrollPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('scrollPosition', arg);
                }
                else {
                    return this.host.jqxRibbon('scrollPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.scrollStep = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('scrollStep', arg);
                }
                else {
                    return this.host.jqxRibbon('scrollStep');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.scrollDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('scrollDelay', arg);
                }
                else {
                    return this.host.jqxRibbon('scrollDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('theme', arg);
                }
                else {
                    return this.host.jqxRibbon('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRibbonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRibbon('width', arg);
                }
                else {
                    return this.host.jqxRibbon('width');
                }
            };
        // jqxRibbonComponent functions
        // jqxRibbonComponent functions
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxRibbonComponent.prototype.addAt =
            // jqxRibbonComponent functions
            /**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            function (index, item) {
                this.host.jqxRibbon('addAt', index, item);
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                this.host.jqxRibbon('clearSelection');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.disableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('disableAt', index);
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxRibbon('destroy');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('enableAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.hideAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('hideAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.removeAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('removeAt', index);
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxRibbon('render');
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxRibbon('refresh');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.selectAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('selectAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxRibbonComponent.prototype.showAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxRibbon('showAt', index);
            };
        /**
         * @param {?} index
         * @param {?} layout
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        jqxRibbonComponent.prototype.setPopupLayout = /**
         * @param {?} index
         * @param {?} layout
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (index, layout, width, height) {
                this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxRibbonComponent.prototype.updateAt = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                this.host.jqxRibbon('updateAt', index, item);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxRibbonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxRibbon('val', value);
                }
                else {
                    return this.host.jqxRibbon('val');
                }
            };
        /**
         * @return {?}
         */
        jqxRibbonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
                this.host.on('reorder', function (eventData) { _this.onReorder.emit(eventData); });
                this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
                this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
            };
        jqxRibbonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxRibbon',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxRibbonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxRibbonComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAnimationDelay: [{ type: core.Input, args: ['animationDelay',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrMode: [{ type: core.Input, args: ['mode',] }],
            attrPopupCloseMode: [{ type: core.Input, args: ['popupCloseMode',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrReorder: [{ type: core.Input, args: ['reorder',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSelectedIndex: [{ type: core.Input, args: ['selectedIndex',] }],
            attrSelectionMode: [{ type: core.Input, args: ['selectionMode',] }],
            attrScrollPosition: [{ type: core.Input, args: ['scrollPosition',] }],
            attrScrollStep: [{ type: core.Input, args: ['scrollStep',] }],
            attrScrollDelay: [{ type: core.Input, args: ['scrollDelay',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onReorder: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onUnselect: [{ type: core.Output }]
        };
        return jqxRibbonComponent;
    }()); //jqxRibbonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxRibbonModule = /** @class */ (function () {
        function jqxRibbonModule() {
        }
        jqxRibbonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxRibbonComponent],
                        exports: [jqxRibbonComponent]
                    },] }
        ];
        return jqxRibbonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxRibbonComponent = jqxRibbonComponent;
    exports.jqxRibbonModule = jqxRibbonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

