require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxInputComponent; }),
        multi: true
    };
    var jqxInputComponent = /** @class */ (function () {
        function jqxInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'dropDownWidth', 'displayMember', 'height', 'items', 'minLength', 'maxLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'rtl', 'searchMode', 'source', 'theme', 'valueMember', 'width', 'value'];
            this.initialLoad = true;
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxInputComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.ngOnInit = /**
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
        jqxInputComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxInput(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                                this.host.jqxInput(this.properties[i], this[attrName]);
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
        jqxInputComponent.prototype.arraysEqual = /**
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
        jqxInputComponent.prototype.manageAttributes = /**
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
        jqxInputComponent.prototype.moveClasses = /**
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
        jqxInputComponent.prototype.moveStyles = /**
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
        jqxInputComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxInputComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        Object.defineProperty(jqxInputComponent.prototype, "ngValue", {
            get: /**
             * @return {?}
             */ function () {
                if (this.widgetObject) {
                    /** @type {?} */
                    var value = this.host.val();
                    if (typeof value === 'object')
                        return value.label;
                    return value;
                }
                return '';
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        jqxInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (this.widgetObject && value) {
                    if (this.initialLoad) {
                        setTimeout(function (_) { return _this.host.jqxInput('val', value); });
                        this.initialLoad = false;
                    }
                    this.host.jqxInput('val', value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxInputComponent.prototype.registerOnChange = /**
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
        jqxInputComponent.prototype.registerOnTouched = /**
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
        jqxInputComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxInput('setOptions', options);
            };
        // jqxInputComponent properties
        // jqxInputComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.disabled =
            // jqxInputComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('disabled', arg);
                }
                else {
                    return this.host.jqxInput('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.dropDownWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('dropDownWidth', arg);
                }
                else {
                    return this.host.jqxInput('dropDownWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('displayMember', arg);
                }
                else {
                    return this.host.jqxInput('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('height', arg);
                }
                else {
                    return this.host.jqxInput('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.items = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('items', arg);
                }
                else {
                    return this.host.jqxInput('items');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.minLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('minLength', arg);
                }
                else {
                    return this.host.jqxInput('minLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.maxLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('maxLength', arg);
                }
                else {
                    return this.host.jqxInput('maxLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.opened = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('opened', arg);
                }
                else {
                    return this.host.jqxInput('opened');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('placeHolder', arg);
                }
                else {
                    return this.host.jqxInput('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.popupZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('popupZIndex', arg);
                }
                else {
                    return this.host.jqxInput('popupZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.query = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('query', arg);
                }
                else {
                    return this.host.jqxInput('query');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.renderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('renderer', arg);
                }
                else {
                    return this.host.jqxInput('renderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('rtl', arg);
                }
                else {
                    return this.host.jqxInput('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.searchMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('searchMode', arg);
                }
                else {
                    return this.host.jqxInput('searchMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('source', arg);
                }
                else {
                    return this.host.jqxInput('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('theme', arg);
                }
                else {
                    return this.host.jqxInput('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('valueMember', arg);
                }
                else {
                    return this.host.jqxInput('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('width', arg);
                }
                else {
                    return this.host.jqxInput('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxInputComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxInput('value', arg);
                }
                else {
                    return this.host.jqxInput('value');
                }
            };
        // jqxInputComponent functions
        // jqxInputComponent functions
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.destroy =
            // jqxInputComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxInput('destroy');
            };
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxInput('focus');
            };
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.selectAll = /**
         * @return {?}
         */
            function () {
                this.host.jqxInput('selectAll');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxInputComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxInput('val', value);
                }
                else {
                    return this.host.jqxInput('val');
                }
            };
        /**
         * @return {?}
         */
        jqxInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('select', function (eventData) {
                    _this.onSelect.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
            };
        jqxInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxInput',
                        template: '<input type="text" [(ngModel)]="ngValue">',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxInputComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDropDownWidth: [{ type: core.Input, args: ['dropDownWidth',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrItems: [{ type: core.Input, args: ['items',] }],
            attrMinLength: [{ type: core.Input, args: ['minLength',] }],
            attrMaxLength: [{ type: core.Input, args: ['maxLength',] }],
            attrOpened: [{ type: core.Input, args: ['opened',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrQuery: [{ type: core.Input, args: ['query',] }],
            attrRenderer: [{ type: core.Input, args: ['renderer',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSearchMode: [{ type: core.Input, args: ['searchMode',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onSelect: [{ type: core.Output }]
        };
        return jqxInputComponent;
    }()); //jqxInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxInputModule = /** @class */ (function () {
        function jqxInputModule() {
        }
        jqxInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxInputComponent],
                        exports: [jqxInputComponent]
                    },] }
        ];
        return jqxInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxInputComponent = jqxInputComponent;
    exports.jqxInputModule = jqxInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

