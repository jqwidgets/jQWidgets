require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxbulletchart');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbulletchart', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbulletchart = {}),global.ng.core));
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
    var jqxBulletChartComponent = /** @class */ (function () {
        function jqxBulletChartComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'barSize', 'description', 'disabled', 'height', 'labelsFormat', 'labelsFormatFunction', 'orientation', 'pointer', 'rtl', 'ranges', 'showTooltip', 'target', 'ticks', 'title', 'tooltipFormatFunction', 'width'];
            // jqxBulletChartComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.ngOnInit = /**
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
        jqxBulletChartComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxBulletChart(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxBulletChart(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxBulletChart(this.properties[i])) {
                                this.host.jqxBulletChart(this.properties[i], this[attrName]);
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
        jqxBulletChartComponent.prototype.arraysEqual = /**
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
        jqxBulletChartComponent.prototype.manageAttributes = /**
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
        jqxBulletChartComponent.prototype.moveClasses = /**
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
        jqxBulletChartComponent.prototype.moveStyles = /**
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
        jqxBulletChartComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxBulletChartComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.__updateRect__ = /**
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
        jqxBulletChartComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxBulletChart('setOptions', options);
            };
        // jqxBulletChartComponent properties
        // jqxBulletChartComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.animationDuration =
            // jqxBulletChartComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('animationDuration', arg);
                }
                else {
                    return this.host.jqxBulletChart('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.barSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('barSize', arg);
                }
                else {
                    return this.host.jqxBulletChart('barSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.description = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('description', arg);
                }
                else {
                    return this.host.jqxBulletChart('description');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('disabled', arg);
                }
                else {
                    return this.host.jqxBulletChart('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('height', arg);
                }
                else {
                    return this.host.jqxBulletChart('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.labelsFormat = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('labelsFormat', arg);
                }
                else {
                    return this.host.jqxBulletChart('labelsFormat');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.labelsFormatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('labelsFormatFunction', arg);
                }
                else {
                    return this.host.jqxBulletChart('labelsFormatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.orientation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('orientation', arg);
                }
                else {
                    return this.host.jqxBulletChart('orientation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.pointer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('pointer', arg);
                }
                else {
                    return this.host.jqxBulletChart('pointer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('rtl', arg);
                }
                else {
                    return this.host.jqxBulletChart('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.ranges = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('ranges', arg);
                }
                else {
                    return this.host.jqxBulletChart('ranges');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.showTooltip = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('showTooltip', arg);
                }
                else {
                    return this.host.jqxBulletChart('showTooltip');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.target = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('target', arg);
                }
                else {
                    return this.host.jqxBulletChart('target');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.ticks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('ticks', arg);
                }
                else {
                    return this.host.jqxBulletChart('ticks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.title = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('title', arg);
                }
                else {
                    return this.host.jqxBulletChart('title');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.tooltipFormatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('tooltipFormatFunction', arg);
                }
                else {
                    return this.host.jqxBulletChart('tooltipFormatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxBulletChartComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxBulletChart('width', arg);
                }
                else {
                    return this.host.jqxBulletChart('width');
                }
            };
        // jqxBulletChartComponent functions
        // jqxBulletChartComponent functions
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.destroy =
            // jqxBulletChartComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxBulletChart('destroy');
            };
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxBulletChart('render');
            };
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxBulletChart('refresh');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxBulletChartComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxBulletChart('val', value);
                }
                else {
                    return this.host.jqxBulletChart('val');
                }
            };
        /**
         * @return {?}
         */
        jqxBulletChartComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            };
        jqxBulletChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxBulletChart',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxBulletChartComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxBulletChartComponent.propDecorators = {
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrBarSize: [{ type: core.Input, args: ['barSize',] }],
            attrDescription: [{ type: core.Input, args: ['description',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrLabelsFormat: [{ type: core.Input, args: ['labelsFormat',] }],
            attrLabelsFormatFunction: [{ type: core.Input, args: ['labelsFormatFunction',] }],
            attrOrientation: [{ type: core.Input, args: ['orientation',] }],
            attrPointer: [{ type: core.Input, args: ['pointer',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrRanges: [{ type: core.Input, args: ['ranges',] }],
            attrShowTooltip: [{ type: core.Input, args: ['showTooltip',] }],
            attrTarget: [{ type: core.Input, args: ['target',] }],
            attrTicks: [{ type: core.Input, args: ['ticks',] }],
            attrTitle: [{ type: core.Input, args: ['title',] }],
            attrTooltipFormatFunction: [{ type: core.Input, args: ['tooltipFormatFunction',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxBulletChartComponent;
    }()); //jqxBulletChartComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxBulletChartModule = /** @class */ (function () {
        function jqxBulletChartModule() {
        }
        jqxBulletChartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxBulletChartComponent],
                        exports: [jqxBulletChartComponent]
                    },] }
        ];
        return jqxBulletChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxBulletChartComponent = jqxBulletChartComponent;
    exports.jqxBulletChartModule = jqxBulletChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

