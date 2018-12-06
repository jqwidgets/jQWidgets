require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxrangeselector');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxrangeselector', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxrangeselector = {}),global.ng.core));
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
    var jqxRangeSelectorComponent = /** @class */ (function () {
        function jqxRangeSelectorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
            // jqxRangeSelectorComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.ngOnInit = /**
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
        jqxRangeSelectorComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                                this.host.jqxRangeSelector(this.properties[i], this[attrName]);
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
        jqxRangeSelectorComponent.prototype.arraysEqual = /**
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
        jqxRangeSelectorComponent.prototype.manageAttributes = /**
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
        jqxRangeSelectorComponent.prototype.moveClasses = /**
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
        jqxRangeSelectorComponent.prototype.moveStyles = /**
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
        jqxRangeSelectorComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.__updateRect__ = /**
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
        jqxRangeSelectorComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxRangeSelector('setOptions', options);
            };
        // jqxRangeSelectorComponent properties
        // jqxRangeSelectorComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.disabled =
            // jqxRangeSelectorComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('disabled', arg);
                }
                else {
                    return this.host.jqxRangeSelector('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.groupLabelsFormatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
                }
                else {
                    return this.host.jqxRangeSelector('groupLabelsFormatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('height', arg);
                }
                else {
                    return this.host.jqxRangeSelector('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.labelsFormat = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('labelsFormat', arg);
                }
                else {
                    return this.host.jqxRangeSelector('labelsFormat');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.labelsFormatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('labelsFormatFunction', arg);
                }
                else {
                    return this.host.jqxRangeSelector('labelsFormatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.labelsOnTicks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('labelsOnTicks', arg);
                }
                else {
                    return this.host.jqxRangeSelector('labelsOnTicks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.markersFormat = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('markersFormat', arg);
                }
                else {
                    return this.host.jqxRangeSelector('markersFormat');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.markersFormatFunction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('markersFormatFunction', arg);
                }
                else {
                    return this.host.jqxRangeSelector('markersFormatFunction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.majorTicksInterval = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('majorTicksInterval', arg);
                }
                else {
                    return this.host.jqxRangeSelector('majorTicksInterval');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.minorTicksInterval = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('minorTicksInterval', arg);
                }
                else {
                    return this.host.jqxRangeSelector('minorTicksInterval');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('max', arg);
                }
                else {
                    return this.host.jqxRangeSelector('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('min', arg);
                }
                else {
                    return this.host.jqxRangeSelector('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.moveOnClick = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('moveOnClick', arg);
                }
                else {
                    return this.host.jqxRangeSelector('moveOnClick');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.padding = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('padding', arg);
                }
                else {
                    return this.host.jqxRangeSelector('padding');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.range = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('range', arg);
                }
                else {
                    return this.host.jqxRangeSelector('range');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.resizable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('resizable', arg);
                }
                else {
                    return this.host.jqxRangeSelector('resizable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('rtl', arg);
                }
                else {
                    return this.host.jqxRangeSelector('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.showGroupLabels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('showGroupLabels', arg);
                }
                else {
                    return this.host.jqxRangeSelector('showGroupLabels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.showMinorTicks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('showMinorTicks', arg);
                }
                else {
                    return this.host.jqxRangeSelector('showMinorTicks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.snapToTicks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('snapToTicks', arg);
                }
                else {
                    return this.host.jqxRangeSelector('snapToTicks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.showMajorLabels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('showMajorLabels', arg);
                }
                else {
                    return this.host.jqxRangeSelector('showMajorLabels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.showMarkers = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('showMarkers', arg);
                }
                else {
                    return this.host.jqxRangeSelector('showMarkers');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('theme', arg);
                }
                else {
                    return this.host.jqxRangeSelector('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRangeSelector('width', arg);
                }
                else {
                    return this.host.jqxRangeSelector('width');
                }
            };
        // jqxRangeSelectorComponent functions
        // jqxRangeSelectorComponent functions
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.destroy =
            // jqxRangeSelectorComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxRangeSelector('destroy');
            };
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.getRange = /**
         * @return {?}
         */
            function () {
                return this.host.jqxRangeSelector('getRange');
            };
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxRangeSelector('render');
            };
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxRangeSelector('refresh');
            };
        /**
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.setRange = /**
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
            function (from, to) {
                this.host.jqxRangeSelector('setRange', from, to);
            };
        /**
         * @return {?}
         */
        jqxRangeSelectorComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            };
        jqxRangeSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxRangeSelector',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxRangeSelectorComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxRangeSelectorComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrGroupLabelsFormatFunction: [{ type: core.Input, args: ['groupLabelsFormatFunction',] }],
            attrLabelsFormat: [{ type: core.Input, args: ['labelsFormat',] }],
            attrLabelsFormatFunction: [{ type: core.Input, args: ['labelsFormatFunction',] }],
            attrLabelsOnTicks: [{ type: core.Input, args: ['labelsOnTicks',] }],
            attrMarkersFormat: [{ type: core.Input, args: ['markersFormat',] }],
            attrMarkersFormatFunction: [{ type: core.Input, args: ['markersFormatFunction',] }],
            attrMajorTicksInterval: [{ type: core.Input, args: ['majorTicksInterval',] }],
            attrMinorTicksInterval: [{ type: core.Input, args: ['minorTicksInterval',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMoveOnClick: [{ type: core.Input, args: ['moveOnClick',] }],
            attrPadding: [{ type: core.Input, args: ['padding',] }],
            attrRange: [{ type: core.Input, args: ['range',] }],
            attrResizable: [{ type: core.Input, args: ['resizable',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrShowGroupLabels: [{ type: core.Input, args: ['showGroupLabels',] }],
            attrShowMinorTicks: [{ type: core.Input, args: ['showMinorTicks',] }],
            attrSnapToTicks: [{ type: core.Input, args: ['snapToTicks',] }],
            attrShowMajorLabels: [{ type: core.Input, args: ['showMajorLabels',] }],
            attrShowMarkers: [{ type: core.Input, args: ['showMarkers',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxRangeSelectorComponent;
    }()); //jqxRangeSelectorComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxRangeSelectorModule = /** @class */ (function () {
        function jqxRangeSelectorModule() {
        }
        jqxRangeSelectorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxRangeSelectorComponent],
                        exports: [jqxRangeSelectorComponent]
                    },] }
        ];
        return jqxRangeSelectorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxRangeSelectorComponent = jqxRangeSelectorComponent;
    exports.jqxRangeSelectorModule = jqxRangeSelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

