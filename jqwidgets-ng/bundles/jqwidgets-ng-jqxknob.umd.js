require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdraw');
require('../../jqwidgets/jqxknob');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxknob', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxknob = {}),global.ng.core));
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
    var jqxKnobComponent = /** @class */ (function () {
        function jqxKnobComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
            // jqxKnobComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        /**
         * @return {?}
         */
        jqxKnobComponent.prototype.ngOnInit = /**
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
        jqxKnobComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxKnob(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                                this.host.jqxKnob(this.properties[i], this[attrName]);
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
        jqxKnobComponent.prototype.arraysEqual = /**
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
        jqxKnobComponent.prototype.manageAttributes = /**
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
        jqxKnobComponent.prototype.moveClasses = /**
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
        jqxKnobComponent.prototype.moveStyles = /**
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
        jqxKnobComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
                this.__updateRect__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxKnobComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxKnobComponent.prototype.__updateRect__ = /**
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
        jqxKnobComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxKnob('setOptions', options);
            };
        // jqxKnobComponent properties
        // jqxKnobComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.allowValueChangeOnClick =
            // jqxKnobComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('allowValueChangeOnClick', arg);
                }
                else {
                    return this.host.jqxKnob('allowValueChangeOnClick');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.allowValueChangeOnDrag = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('allowValueChangeOnDrag', arg);
                }
                else {
                    return this.host.jqxKnob('allowValueChangeOnDrag');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.allowValueChangeOnMouseWheel = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
                }
                else {
                    return this.host.jqxKnob('allowValueChangeOnMouseWheel');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.changing = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('changing', arg);
                }
                else {
                    return this.host.jqxKnob('changing');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.dragEndAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('dragEndAngle', arg);
                }
                else {
                    return this.host.jqxKnob('dragEndAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.dragStartAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('dragStartAngle', arg);
                }
                else {
                    return this.host.jqxKnob('dragStartAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('disabled', arg);
                }
                else {
                    return this.host.jqxKnob('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.dial = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('dial', arg);
                }
                else {
                    return this.host.jqxKnob('dial');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.endAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('endAngle', arg);
                }
                else {
                    return this.host.jqxKnob('endAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('height', arg);
                }
                else {
                    return this.host.jqxKnob('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.labels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('labels', arg);
                }
                else {
                    return this.host.jqxKnob('labels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.marks = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('marks', arg);
                }
                else {
                    return this.host.jqxKnob('marks');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('min', arg);
                }
                else {
                    return this.host.jqxKnob('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('max', arg);
                }
                else {
                    return this.host.jqxKnob('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.progressBar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('progressBar', arg);
                }
                else {
                    return this.host.jqxKnob('progressBar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.pointer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('pointer', arg);
                }
                else {
                    return this.host.jqxKnob('pointer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.pointerGrabAction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('pointerGrabAction', arg);
                }
                else {
                    return this.host.jqxKnob('pointerGrabAction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.rotation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('rotation', arg);
                }
                else {
                    return this.host.jqxKnob('rotation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.startAngle = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('startAngle', arg);
                }
                else {
                    return this.host.jqxKnob('startAngle');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.spinner = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('spinner', arg);
                }
                else {
                    return this.host.jqxKnob('spinner');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.styles = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('styles', arg);
                }
                else {
                    return this.host.jqxKnob('styles');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.step = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('step', arg);
                }
                else {
                    return this.host.jqxKnob('step');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.snapToStep = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('snapToStep', arg);
                }
                else {
                    return this.host.jqxKnob('snapToStep');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('value', arg);
                }
                else {
                    return this.host.jqxKnob('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKnobComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKnob('width', arg);
                }
                else {
                    return this.host.jqxKnob('width');
                }
            };
        // jqxKnobComponent functions
        // jqxKnobComponent functions
        /**
         * @return {?}
         */
        jqxKnobComponent.prototype.destroy =
            // jqxKnobComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxKnob('destroy');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxKnobComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxKnob('val', value);
                }
                else {
                    return this.host.jqxKnob('val');
                }
            };
        /**
         * @return {?}
         */
        jqxKnobComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            };
        jqxKnobComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxKnob',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxKnobComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxKnobComponent.propDecorators = {
            attrAllowValueChangeOnClick: [{ type: core.Input, args: ['allowValueChangeOnClick',] }],
            attrAllowValueChangeOnDrag: [{ type: core.Input, args: ['allowValueChangeOnDrag',] }],
            attrAllowValueChangeOnMouseWheel: [{ type: core.Input, args: ['allowValueChangeOnMouseWheel',] }],
            attrChanging: [{ type: core.Input, args: ['changing',] }],
            attrDragEndAngle: [{ type: core.Input, args: ['dragEndAngle',] }],
            attrDragStartAngle: [{ type: core.Input, args: ['dragStartAngle',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDial: [{ type: core.Input, args: ['dial',] }],
            attrEndAngle: [{ type: core.Input, args: ['endAngle',] }],
            attrLabels: [{ type: core.Input, args: ['labels',] }],
            attrMarks: [{ type: core.Input, args: ['marks',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrProgressBar: [{ type: core.Input, args: ['progressBar',] }],
            attrPointer: [{ type: core.Input, args: ['pointer',] }],
            attrPointerGrabAction: [{ type: core.Input, args: ['pointerGrabAction',] }],
            attrRotation: [{ type: core.Input, args: ['rotation',] }],
            attrStartAngle: [{ type: core.Input, args: ['startAngle',] }],
            attrSpinner: [{ type: core.Input, args: ['spinner',] }],
            attrStyles: [{ type: core.Input, args: ['styles',] }],
            attrStep: [{ type: core.Input, args: ['step',] }],
            attrSnapToStep: [{ type: core.Input, args: ['snapToStep',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxKnobComponent;
    }()); //jqxKnobComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxKnobModule = /** @class */ (function () {
        function jqxKnobModule() {
        }
        jqxKnobModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxKnobComponent],
                        exports: [jqxKnobComponent]
                    },] }
        ];
        return jqxKnobModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxKnobComponent = jqxKnobComponent;
    exports.jqxKnobModule = jqxKnobModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

