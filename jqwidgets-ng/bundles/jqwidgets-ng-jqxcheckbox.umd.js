require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxcheckbox');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcheckbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcheckbox = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

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
    /** @type {?} */
    var noop = function () { };
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxCheckBoxComponent; }),
        multi: true
    };
    var jqxCheckBoxComponent = /** @class */ (function () {
        function jqxCheckBoxComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxCheckBoxComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onIndeterminate = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.ngOnInit = /**
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
        jqxCheckBoxComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxCheckBox(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                                this.host.jqxCheckBox(this.properties[i], this[attrName]);
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
        jqxCheckBoxComponent.prototype.arraysEqual = /**
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
        jqxCheckBoxComponent.prototype.manageAttributes = /**
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
        jqxCheckBoxComponent.prototype.moveClasses = /**
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
        jqxCheckBoxComponent.prototype.moveStyles = /**
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
        jqxCheckBoxComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
                options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) ;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeCallback = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouchedCallback = fn;
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxCheckBox('setOptions', options);
            };
        // jqxCheckBoxComponent properties
        // jqxCheckBoxComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.animationShowDelay =
            // jqxCheckBoxComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('animationShowDelay', arg);
                }
                else {
                    return this.host.jqxCheckBox('animationShowDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.animationHideDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('animationHideDelay', arg);
                }
                else {
                    return this.host.jqxCheckBox('animationHideDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.boxSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('boxSize', arg);
                }
                else {
                    return this.host.jqxCheckBox('boxSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.checked = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('checked', arg);
                }
                else {
                    return this.host.jqxCheckBox('checked');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('disabled', arg);
                }
                else {
                    return this.host.jqxCheckBox('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.enableContainerClick = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('enableContainerClick', arg);
                }
                else {
                    return this.host.jqxCheckBox('enableContainerClick');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.groupName = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('groupName', arg);
                }
                else {
                    return this.host.jqxCheckBox('groupName');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('height', arg);
                }
                else {
                    return this.host.jqxCheckBox('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.hasThreeStates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('hasThreeStates', arg);
                }
                else {
                    return this.host.jqxCheckBox('hasThreeStates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.locked = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('locked', arg);
                }
                else {
                    return this.host.jqxCheckBox('locked');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('rtl', arg);
                }
                else {
                    return this.host.jqxCheckBox('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('theme', arg);
                }
                else {
                    return this.host.jqxCheckBox('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxCheckBox('width', arg);
                }
                else {
                    return this.host.jqxCheckBox('width');
                }
            };
        // jqxCheckBoxComponent functions
        // jqxCheckBoxComponent functions
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.check =
            // jqxCheckBoxComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxCheckBox('check');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('disable');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('destroy');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('enable');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('focus');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.indeterminate = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('indeterminate');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('render');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('toggle');
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.uncheck = /**
         * @return {?}
         */
            function () {
                this.host.jqxCheckBox('uncheck');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxCheckBox('val', value);
                }
                else {
                    return this.host.jqxCheckBox('val');
                }
            };
        /**
         * @return {?}
         */
        jqxCheckBoxComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); });
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.checked);
                });
                this.host.on('indeterminate', function (eventData) { _this.onIndeterminate.emit(eventData); });
                this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
            };
        jqxCheckBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxCheckBox',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxCheckBoxComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxCheckBoxComponent.propDecorators = {
            attrAnimationShowDelay: [{ type: core.Input, args: ['animationShowDelay',] }],
            attrAnimationHideDelay: [{ type: core.Input, args: ['animationHideDelay',] }],
            attrBoxSize: [{ type: core.Input, args: ['boxSize',] }],
            attrChecked: [{ type: core.Input, args: ['checked',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableContainerClick: [{ type: core.Input, args: ['enableContainerClick',] }],
            attrGroupName: [{ type: core.Input, args: ['groupName',] }],
            attrHasThreeStates: [{ type: core.Input, args: ['hasThreeStates',] }],
            attrLocked: [{ type: core.Input, args: ['locked',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChecked: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onIndeterminate: [{ type: core.Output }],
            onUnchecked: [{ type: core.Output }]
        };
        return jqxCheckBoxComponent;
    }()); //jqxCheckBoxComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxCheckBoxModule = /** @class */ (function () {
        function jqxCheckBoxModule() {
        }
        jqxCheckBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxCheckBoxComponent],
                        exports: [jqxCheckBoxComponent]
                    },] }
        ];
        return jqxCheckBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxCheckBoxComponent = jqxCheckBoxComponent;
    exports.jqxCheckBoxModule = jqxCheckBoxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

