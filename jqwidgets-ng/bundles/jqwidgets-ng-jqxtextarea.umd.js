require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxtextarea');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtextarea', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtextarea = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxTextAreaComponent; }),
        multi: true
    };
    var jqxTextAreaComponent = /** @class */ (function () {
        function jqxTextAreaComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'displayMember', 'dropDownWidth', 'height', 'items', 'maxLength', 'minLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'roundedCorners', 'rtl', 'scrollBarSize', 'searchMode', 'source', 'theme', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxTextAreaComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.ngOnInit = /**
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
        jqxTextAreaComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTextArea(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                                this.host.jqxTextArea(this.properties[i], this[attrName]);
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
        jqxTextAreaComponent.prototype.arraysEqual = /**
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
        jqxTextAreaComponent.prototype.manageAttributes = /**
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
        jqxTextAreaComponent.prototype.moveClasses = /**
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
        jqxTextAreaComponent.prototype.moveStyles = /**
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
        jqxTextAreaComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTextAreaComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.__updateRect__ = /**
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
        jqxTextAreaComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    if (value !== null && value !== undefined)
                        this.host.jqxTextArea('val', value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxTextAreaComponent.prototype.registerOnChange = /**
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
        jqxTextAreaComponent.prototype.registerOnTouched = /**
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
        jqxTextAreaComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTextArea('setOptions', options);
            };
        // jqxTextAreaComponent properties
        // jqxTextAreaComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.disabled =
            // jqxTextAreaComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('disabled', arg);
                }
                else {
                    return this.host.jqxTextArea('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('displayMember', arg);
                }
                else {
                    return this.host.jqxTextArea('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.dropDownWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('dropDownWidth', arg);
                }
                else {
                    return this.host.jqxTextArea('dropDownWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('height', arg);
                }
                else {
                    return this.host.jqxTextArea('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.items = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('items', arg);
                }
                else {
                    return this.host.jqxTextArea('items');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.maxLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('maxLength', arg);
                }
                else {
                    return this.host.jqxTextArea('maxLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.minLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('minLength', arg);
                }
                else {
                    return this.host.jqxTextArea('minLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.opened = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('opened', arg);
                }
                else {
                    return this.host.jqxTextArea('opened');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('placeHolder', arg);
                }
                else {
                    return this.host.jqxTextArea('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.popupZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('popupZIndex', arg);
                }
                else {
                    return this.host.jqxTextArea('popupZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.query = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('query', arg);
                }
                else {
                    return this.host.jqxTextArea('query');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.renderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('renderer', arg);
                }
                else {
                    return this.host.jqxTextArea('renderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.roundedCorners = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('roundedCorners', arg);
                }
                else {
                    return this.host.jqxTextArea('roundedCorners');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('rtl', arg);
                }
                else {
                    return this.host.jqxTextArea('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxTextArea('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.searchMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('searchMode', arg);
                }
                else {
                    return this.host.jqxTextArea('searchMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('source', arg);
                }
                else {
                    return this.host.jqxTextArea('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('theme', arg);
                }
                else {
                    return this.host.jqxTextArea('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('valueMember', arg);
                }
                else {
                    return this.host.jqxTextArea('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTextAreaComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTextArea('width', arg);
                }
                else {
                    return this.host.jqxTextArea('width');
                }
            };
        // jqxTextAreaComponent functions
        // jqxTextAreaComponent functions
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.destroy =
            // jqxTextAreaComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxTextArea('destroy');
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxTextArea('focus');
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxTextArea('refresh');
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxTextArea('render');
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.selectAll = /**
         * @return {?}
         */
            function () {
                this.host.jqxTextArea('selectAll');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxTextAreaComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxTextArea('val', value);
                }
                else {
                    return this.host.jqxTextArea('val');
                }
            };
        /**
         * @return {?}
         */
        jqxTextAreaComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
                this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
            };
        jqxTextAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTextArea',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxTextAreaComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTextAreaComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrDropDownWidth: [{ type: core.Input, args: ['dropDownWidth',] }],
            attrItems: [{ type: core.Input, args: ['items',] }],
            attrMaxLength: [{ type: core.Input, args: ['maxLength',] }],
            attrMinLength: [{ type: core.Input, args: ['minLength',] }],
            attrOpened: [{ type: core.Input, args: ['opened',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrQuery: [{ type: core.Input, args: ['query',] }],
            attrRenderer: [{ type: core.Input, args: ['renderer',] }],
            attrRoundedCorners: [{ type: core.Input, args: ['roundedCorners',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrSearchMode: [{ type: core.Input, args: ['searchMode',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onSelect: [{ type: core.Output }]
        };
        return jqxTextAreaComponent;
    }()); //jqxTextAreaComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTextAreaModule = /** @class */ (function () {
        function jqxTextAreaModule() {
        }
        jqxTextAreaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxTextAreaComponent],
                        exports: [jqxTextAreaComponent]
                    },] }
        ];
        return jqxTextAreaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTextAreaComponent = jqxTextAreaComponent;
    exports.jqxTextAreaModule = jqxTextAreaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

