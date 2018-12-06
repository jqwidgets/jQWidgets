require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdraw');
require('../../jqwidgets/jqxbargauge');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbargauge', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbargauge = {}),global.ng.core));
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
    var jqxBarGaugeComponent = /** @class */ (function () {
        function jqxBarGaugeComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
            // jqxBarGaugeComponent events
            this.onDrawEnd = new core.EventEmitter();
            this.onDrawStart = new core.EventEmitter();
            this.onInitialized = new core.EventEmitter();
            this.onTooltipClose = new core.EventEmitter();
            this.onTooltipOpen = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.ngOnInit = /**
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
        jqxBarGaugeComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxBarGauge(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                                this.host.jqxBarGauge(this.properties[i], this[attrName]);
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
        jqxBarGaugeComponent.prototype.arraysEqual = /**
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
        jqxBarGaugeComponent.prototype.manageAttributes = /**
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
        jqxBarGaugeComponent.prototype.moveClasses = /**
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
        jqxBarGaugeComponent.prototype.moveStyles = /**
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
        jqxBarGaugeComponent.prototype.createComponent = /**
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
                if (typeof options.width === 'string' && options.width.indexOf('%') !== -1) {
                    options.width = parseInt(options.width, 10) / 100 * this.host.parent().parent().parent().width();
                }
                if (typeof options.height === 'string' && options.height.indexOf('%') !== -1) {
                    options.height = parseInt(options.height, 10) / 100 * this.host.parent().parent().parent().height();
                }
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.__updateRect__ = /**
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
        jqxBarGaugeComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxBarGauge('setOptions', options);
            };
        // jqxBarGaugeComponent properties
        // jqxBarGaugeComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.animationDuration =
            // jqxBarGaugeComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('animationDuration', arg);
                }
                else {
                    return this.host.jqxBarGauge('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.backgroundColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('backgroundColor', arg);
                }
                else {
                    return this.host.jqxBarGauge('backgroundColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.barSpacing = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('barSpacing', arg);
                }
                else {
                    return this.host.jqxBarGauge('barSpacing');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.baseValue = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('baseValue', arg);
                }
                else {
                    return this.host.jqxBarGauge('baseValue');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.colorScheme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('colorScheme', arg);
                }
                else {
                    return this.host.jqxBarGauge('colorScheme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.customColorScheme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('customColorScheme', arg);
                }
                else {
                    return this.host.jqxBarGauge('customColorScheme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('disabled', arg);
                }
                else {
                    return this.host.jqxBarGauge('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.endAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('endAngle', arg);
                }
                else {
                    return this.host.jqxBarGauge('endAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.formatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('formatFunction', arg);
                }
                else {
                    return this.host.jqxBarGauge('formatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('height', arg);
                }
                else {
                    return this.host.jqxBarGauge('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.labels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('labels', arg);
                }
                else {
                    return this.host.jqxBarGauge('labels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('max', arg);
                }
                else {
                    return this.host.jqxBarGauge('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('min', arg);
                }
                else {
                    return this.host.jqxBarGauge('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.relativeInnerRadius = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('relativeInnerRadius', arg);
                }
                else {
                    return this.host.jqxBarGauge('relativeInnerRadius');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.rendered = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('rendered', arg);
                }
                else {
                    return this.host.jqxBarGauge('rendered');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.startAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('startAngle', arg);
                }
                else {
                    return this.host.jqxBarGauge('startAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.title = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('title', arg);
                }
                else {
                    return this.host.jqxBarGauge('title');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.tooltip = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('tooltip', arg);
                }
                else {
                    return this.host.jqxBarGauge('tooltip');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.useGradient = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('useGradient', arg);
                }
                else {
                    return this.host.jqxBarGauge('useGradient');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.values = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('values', arg);
                }
                else {
                    return this.host.jqxBarGauge('values');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBarGauge('width', arg);
                }
                else {
                    return this.host.jqxBarGauge('width');
                }
            };
        // jqxBarGaugeComponent functions
        // jqxBarGaugeComponent functions
        /**
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.refresh =
            // jqxBarGaugeComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxBarGauge('refresh');
            };
        /**
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxBarGauge('render');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxBarGauge('val', value);
                }
                else {
                    return this.host.jqxBarGauge('val');
                }
            };
        /**
         * @return {?}
         */
        jqxBarGaugeComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('drawEnd', function (eventData) { _this.onDrawEnd.emit(eventData); });
                this.host.on('drawStart', function (eventData) { _this.onDrawStart.emit(eventData); });
                this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
                this.host.on('tooltipClose', function (eventData) { _this.onTooltipClose.emit(eventData); });
                this.host.on('tooltipOpen', function (eventData) { _this.onTooltipOpen.emit(eventData); });
                this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
            };
        jqxBarGaugeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxBarGauge',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxBarGaugeComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxBarGaugeComponent.propDecorators = {
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrBackgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            attrBarSpacing: [{ type: core.Input, args: ['barSpacing',] }],
            attrBaseValue: [{ type: core.Input, args: ['baseValue',] }],
            attrColorScheme: [{ type: core.Input, args: ['colorScheme',] }],
            attrCustomColorScheme: [{ type: core.Input, args: ['customColorScheme',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEndAngle: [{ type: core.Input, args: ['endAngle',] }],
            attrFormatFunction: [{ type: core.Input, args: ['formatFunction',] }],
            attrLabels: [{ type: core.Input, args: ['labels',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrRelativeInnerRadius: [{ type: core.Input, args: ['relativeInnerRadius',] }],
            attrRendered: [{ type: core.Input, args: ['rendered',] }],
            attrStartAngle: [{ type: core.Input, args: ['startAngle',] }],
            attrTitle: [{ type: core.Input, args: ['title',] }],
            attrTooltip: [{ type: core.Input, args: ['tooltip',] }],
            attrUseGradient: [{ type: core.Input, args: ['useGradient',] }],
            attrValues: [{ type: core.Input, args: ['values',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onDrawEnd: [{ type: core.Output }],
            onDrawStart: [{ type: core.Output }],
            onInitialized: [{ type: core.Output }],
            onTooltipClose: [{ type: core.Output }],
            onTooltipOpen: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxBarGaugeComponent;
    }()); //jqxBarGaugeComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxBarGaugeModule = /** @class */ (function () {
        function jqxBarGaugeModule() {
        }
        jqxBarGaugeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxBarGaugeComponent],
                        exports: [jqxBarGaugeComponent]
                    },] }
        ];
        return jqxBarGaugeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxBarGaugeComponent = jqxBarGaugeComponent;
    exports.jqxBarGaugeModule = jqxBarGaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

