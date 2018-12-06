require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxdropdownbutton');
require('../../jqwidgets/jqxwindow');
require('../../jqwidgets/jqxeditor');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxcolorpicker');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxeditor', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxeditor = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxEditorComponent; }),
        multi: true
    };
    var jqxEditorComponent = /** @class */ (function () {
        function jqxEditorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxEditorComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.ngOnInit = /**
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
        jqxEditorComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxEditor(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                                this.host.jqxEditor(this.properties[i], this[attrName]);
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
        jqxEditorComponent.prototype.arraysEqual = /**
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
        jqxEditorComponent.prototype.manageAttributes = /**
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
        jqxEditorComponent.prototype.moveClasses = /**
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
        jqxEditorComponent.prototype.moveStyles = /**
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
        jqxEditorComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
                this.host = this.widgetObject['host'];
                this.__wireEvents__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxEditorComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.__updateRect__ = /**
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
        jqxEditorComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(this.host.val());
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxEditorComponent.prototype.registerOnChange = /**
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
        jqxEditorComponent.prototype.registerOnTouched = /**
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
        jqxEditorComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxEditor('setOptions', options);
            };
        // jqxEditorComponent properties
        // jqxEditorComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.createCommand =
            // jqxEditorComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('createCommand', arg);
                }
                else {
                    return this.host.jqxEditor('createCommand');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('disabled', arg);
                }
                else {
                    return this.host.jqxEditor('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.editable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('editable', arg);
                }
                else {
                    return this.host.jqxEditor('editable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('height', arg);
                }
                else {
                    return this.host.jqxEditor('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.lineBreak = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('lineBreak', arg);
                }
                else {
                    return this.host.jqxEditor('lineBreak');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.localization = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('localization', arg);
                }
                else {
                    return this.host.jqxEditor('localization');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.pasteMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('pasteMode', arg);
                }
                else {
                    return this.host.jqxEditor('pasteMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('rtl', arg);
                }
                else {
                    return this.host.jqxEditor('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.stylesheets = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('stylesheets', arg);
                }
                else {
                    return this.host.jqxEditor('stylesheets');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('theme', arg);
                }
                else {
                    return this.host.jqxEditor('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.toolbarPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('toolbarPosition', arg);
                }
                else {
                    return this.host.jqxEditor('toolbarPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.tools = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('tools', arg);
                }
                else {
                    return this.host.jqxEditor('tools');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxEditorComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxEditor('width', arg);
                }
                else {
                    return this.host.jqxEditor('width');
                }
            };
        // jqxEditorComponent functions
        // jqxEditorComponent functions
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.destroy =
            // jqxEditorComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxEditor('destroy');
            };
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxEditor('focus');
            };
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.print = /**
         * @return {?}
         */
            function () {
                this.host.jqxEditor('print');
            };
        /**
         * @param {?} mode
         * @return {?}
         */
        jqxEditorComponent.prototype.setMode = /**
         * @param {?} mode
         * @return {?}
         */
            function (mode) {
                this.host.jqxEditor('setMode', mode);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxEditorComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxEditor('val', value);
                }
                else {
                    return this.host.jqxEditor('val');
                }
            };
        /**
         * @return {?}
         */
        jqxEditorComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
            };
        jqxEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxEditor',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxEditorComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxEditorComponent.propDecorators = {
            attrCreateCommand: [{ type: core.Input, args: ['createCommand',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEditable: [{ type: core.Input, args: ['editable',] }],
            attrLineBreak: [{ type: core.Input, args: ['lineBreak',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrPasteMode: [{ type: core.Input, args: ['pasteMode',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrStylesheets: [{ type: core.Input, args: ['stylesheets',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToolbarPosition: [{ type: core.Input, args: ['toolbarPosition',] }],
            attrTools: [{ type: core.Input, args: ['tools',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxEditorComponent;
    }()); //jqxEditorComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxEditorModule = /** @class */ (function () {
        function jqxEditorModule() {
        }
        jqxEditorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxEditorComponent],
                        exports: [jqxEditorComponent]
                    },] }
        ];
        return jqxEditorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxEditorComponent = jqxEditorComponent;
    exports.jqxEditorModule = jqxEditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

