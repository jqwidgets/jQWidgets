require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdraw');
require('../../jqwidgets/jqxgauge');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxgauge', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxgauge = {}),global.ng.core));
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
    var jqxGaugeComponent = /** @class */ (function () {
        function jqxGaugeComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
            // jqxGaugeComponent events
            this.onValueChanging = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxGaugeComponent.prototype.ngOnInit = /**
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
        jqxGaugeComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxGauge(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                                this.host.jqxGauge(this.properties[i], this[attrName]);
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
        jqxGaugeComponent.prototype.arraysEqual = /**
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
        jqxGaugeComponent.prototype.manageAttributes = /**
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
        jqxGaugeComponent.prototype.moveClasses = /**
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
        jqxGaugeComponent.prototype.moveStyles = /**
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
        jqxGaugeComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxGaugeComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxGaugeComponent.prototype.__updateRect__ = /**
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
        jqxGaugeComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxGauge('setOptions', options);
            };
        // jqxGaugeComponent properties
        // jqxGaugeComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.animationDuration =
            // jqxGaugeComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('animationDuration', arg);
                }
                else {
                    return this.host.jqxGauge('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.border = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('border', arg);
                }
                else {
                    return this.host.jqxGauge('border');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.caption = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('caption', arg);
                }
                else {
                    return this.host.jqxGauge('caption');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.cap = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('cap', arg);
                }
                else {
                    return this.host.jqxGauge('cap');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.colorScheme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('colorScheme', arg);
                }
                else {
                    return this.host.jqxGauge('colorScheme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('disabled', arg);
                }
                else {
                    return this.host.jqxGauge('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.easing = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('easing', arg);
                }
                else {
                    return this.host.jqxGauge('easing');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.endAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('endAngle', arg);
                }
                else {
                    return this.host.jqxGauge('endAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('height', arg);
                }
                else {
                    return this.host.jqxGauge('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.int64 = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('int64', arg);
                }
                else {
                    return this.host.jqxGauge('int64');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.labels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('labels', arg);
                }
                else {
                    return this.host.jqxGauge('labels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('min', arg);
                }
                else {
                    return this.host.jqxGauge('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('max', arg);
                }
                else {
                    return this.host.jqxGauge('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.pointer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('pointer', arg);
                }
                else {
                    return this.host.jqxGauge('pointer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.radius = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('radius', arg);
                }
                else {
                    return this.host.jqxGauge('radius');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.ranges = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('ranges', arg);
                }
                else {
                    return this.host.jqxGauge('ranges');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.startAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('startAngle', arg);
                }
                else {
                    return this.host.jqxGauge('startAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.showRanges = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('showRanges', arg);
                }
                else {
                    return this.host.jqxGauge('showRanges');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.styles = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('styles', arg);
                }
                else {
                    return this.host.jqxGauge('styles');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.ticksMajor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('ticksMajor', arg);
                }
                else {
                    return this.host.jqxGauge('ticksMajor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.ticksMinor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('ticksMinor', arg);
                }
                else {
                    return this.host.jqxGauge('ticksMinor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.ticksDistance = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('ticksDistance', arg);
                }
                else {
                    return this.host.jqxGauge('ticksDistance');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('value', arg);
                }
                else {
                    return this.host.jqxGauge('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxGaugeComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxGauge('width', arg);
                }
                else {
                    return this.host.jqxGauge('width');
                }
            };
        // jqxGaugeComponent functions
        // jqxGaugeComponent functions
        /**
         * @return {?}
         */
        jqxGaugeComponent.prototype.disable =
            // jqxGaugeComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxGauge('disable');
            };
        /**
         * @return {?}
         */
        jqxGaugeComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxGauge('enable');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxGaugeComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxGauge('val', value);
                }
                else {
                    return this.host.jqxGauge('val');
                }
            };
        /**
         * @return {?}
         */
        jqxGaugeComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
                this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
            };
        jqxGaugeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxGauge',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxGaugeComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxGaugeComponent.propDecorators = {
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrBorder: [{ type: core.Input, args: ['border',] }],
            attrCaption: [{ type: core.Input, args: ['caption',] }],
            attrCap: [{ type: core.Input, args: ['cap',] }],
            attrColorScheme: [{ type: core.Input, args: ['colorScheme',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEasing: [{ type: core.Input, args: ['easing',] }],
            attrEndAngle: [{ type: core.Input, args: ['endAngle',] }],
            attrInt64: [{ type: core.Input, args: ['int64',] }],
            attrLabels: [{ type: core.Input, args: ['labels',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrPointer: [{ type: core.Input, args: ['pointer',] }],
            attrRadius: [{ type: core.Input, args: ['radius',] }],
            attrRanges: [{ type: core.Input, args: ['ranges',] }],
            attrStartAngle: [{ type: core.Input, args: ['startAngle',] }],
            attrShowRanges: [{ type: core.Input, args: ['showRanges',] }],
            attrStyles: [{ type: core.Input, args: ['styles',] }],
            attrTicksMajor: [{ type: core.Input, args: ['ticksMajor',] }],
            attrTicksMinor: [{ type: core.Input, args: ['ticksMinor',] }],
            attrTicksDistance: [{ type: core.Input, args: ['ticksDistance',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onValueChanging: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxGaugeComponent;
    }()); //jqxGaugeComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxGaugeModule = /** @class */ (function () {
        function jqxGaugeModule() {
        }
        jqxGaugeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxGaugeComponent],
                        exports: [jqxGaugeComponent]
                    },] }
        ];
        return jqxGaugeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxGaugeComponent = jqxGaugeComponent;
    exports.jqxGaugeModule = jqxGaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

