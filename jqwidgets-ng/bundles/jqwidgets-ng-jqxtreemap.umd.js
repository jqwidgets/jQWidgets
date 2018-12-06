require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxtreemap');
require('../../jqwidgets/jqxtooltip');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtreemap', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtreemap = {}),global.ng.core));
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
    var jqxTreeMapComponent = /** @class */ (function () {
        function jqxTreeMapComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
            // jqxTreeMapComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTreeMapComponent.prototype.ngOnInit = /**
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
        jqxTreeMapComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeMap(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTreeMap(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTreeMap(this.properties[i])) {
                                this.host.jqxTreeMap(this.properties[i], this[attrName]);
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
        jqxTreeMapComponent.prototype.arraysEqual = /**
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
        jqxTreeMapComponent.prototype.manageAttributes = /**
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
        jqxTreeMapComponent.prototype.moveClasses = /**
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
        jqxTreeMapComponent.prototype.moveStyles = /**
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
        jqxTreeMapComponent.prototype.createComponent = /**
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
                this.host[0].style.marginLeft = '1px';
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTreeMapComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTreeMapComponent.prototype.__updateRect__ = /**
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
        jqxTreeMapComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTreeMap('setOptions', options);
            };
        // jqxTreeMapComponent properties
        // jqxTreeMapComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.baseColor =
            // jqxTreeMapComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('baseColor', arg);
                }
                else {
                    return this.host.jqxTreeMap('baseColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.colorRanges = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('colorRanges', arg);
                }
                else {
                    return this.host.jqxTreeMap('colorRanges');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.colorRange = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('colorRange', arg);
                }
                else {
                    return this.host.jqxTreeMap('colorRange');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.colorMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('colorMode', arg);
                }
                else {
                    return this.host.jqxTreeMap('colorMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('displayMember', arg);
                }
                else {
                    return this.host.jqxTreeMap('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('height', arg);
                }
                else {
                    return this.host.jqxTreeMap('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.hoverEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('hoverEnabled', arg);
                }
                else {
                    return this.host.jqxTreeMap('hoverEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.headerHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('headerHeight', arg);
                }
                else {
                    return this.host.jqxTreeMap('headerHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.legendLabel = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('legendLabel', arg);
                }
                else {
                    return this.host.jqxTreeMap('legendLabel');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.legendPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('legendPosition', arg);
                }
                else {
                    return this.host.jqxTreeMap('legendPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.legendScaleCallback = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('legendScaleCallback', arg);
                }
                else {
                    return this.host.jqxTreeMap('legendScaleCallback');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.renderCallbacks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('renderCallbacks', arg);
                }
                else {
                    return this.host.jqxTreeMap('renderCallbacks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.selectionEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('selectionEnabled', arg);
                }
                else {
                    return this.host.jqxTreeMap('selectionEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.showLegend = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('showLegend', arg);
                }
                else {
                    return this.host.jqxTreeMap('showLegend');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('source', arg);
                }
                else {
                    return this.host.jqxTreeMap('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('theme', arg);
                }
                else {
                    return this.host.jqxTreeMap('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('valueMember', arg);
                }
                else {
                    return this.host.jqxTreeMap('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeMapComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTreeMap('width', arg);
                }
                else {
                    return this.host.jqxTreeMap('width');
                }
            };
        // jqxTreeMapComponent functions
        // jqxTreeMapComponent functions
        /**
         * @return {?}
         */
        jqxTreeMapComponent.prototype.destroy =
            // jqxTreeMapComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxTreeMap('destroy');
            };
        /**
         * @return {?}
         */
        jqxTreeMapComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxTreeMap('render');
            };
        /**
         * @return {?}
         */
        jqxTreeMapComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            };
        jqxTreeMapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTreeMap',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxTreeMapComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTreeMapComponent.propDecorators = {
            attrBaseColor: [{ type: core.Input, args: ['baseColor',] }],
            attrColorRanges: [{ type: core.Input, args: ['colorRanges',] }],
            attrColorRange: [{ type: core.Input, args: ['colorRange',] }],
            attrColorMode: [{ type: core.Input, args: ['colorMode',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrHoverEnabled: [{ type: core.Input, args: ['hoverEnabled',] }],
            attrHeaderHeight: [{ type: core.Input, args: ['headerHeight',] }],
            attrLegendLabel: [{ type: core.Input, args: ['legendLabel',] }],
            attrLegendPosition: [{ type: core.Input, args: ['legendPosition',] }],
            attrLegendScaleCallback: [{ type: core.Input, args: ['legendScaleCallback',] }],
            attrRenderCallbacks: [{ type: core.Input, args: ['renderCallbacks',] }],
            attrSelectionEnabled: [{ type: core.Input, args: ['selectionEnabled',] }],
            attrShowLegend: [{ type: core.Input, args: ['showLegend',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }]
        };
        return jqxTreeMapComponent;
    }()); //jqxTreeMapComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTreeMapModule = /** @class */ (function () {
        function jqxTreeMapModule() {
        }
        jqxTreeMapModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxTreeMapComponent],
                        exports: [jqxTreeMapComponent]
                    },] }
        ];
        return jqxTreeMapModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTreeMapComponent = jqxTreeMapComponent;
    exports.jqxTreeMapModule = jqxTreeMapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

