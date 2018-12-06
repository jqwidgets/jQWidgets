require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxcombobox');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcombobox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcombobox = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxComboBoxComponent; }),
        multi: true
    };
    var jqxComboBoxComponent = /** @class */ (function () {
        function jqxComboBoxComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'height', 'itemHeight', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'source', 'scrollBarSize', 'template', 'theme', 'validateSelection', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxComboBoxComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var children = JQXLite(this.elementRef.nativeElement.children).find('li');
                /** @type {?} */
                var html = '';
                /** @type {?} */
                var options = {};
                if (children.length > 0) {
                    this.container = document.createElement('div');
                    html = this.elementRef.nativeElement.innerHTML;
                    this.container.appendChild(this.elementRef.nativeElement.firstChild);
                    this.elementRef.nativeElement.innerHTML = html;
                    this.content = html;
                    /** @type {?} */
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    options['source'] = result.items;
                }
                if (this.autoCreate) {
                    this.createComponent(options);
                }
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.container) {
                    if (this.content !== this.container.innerHTML) {
                        this.content = this.container.innerHTML;
                        /** @type {?} */
                        var result = JQXLite.jqx.parseSourceTag(this.container);
                        this.host.jqxComboBox({ source: result.items });
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxComboBoxComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxComboBox(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxComboBox(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxComboBox(this.properties[i])) {
                                this.host.jqxComboBox(this.properties[i], this[attrName]);
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
        jqxComboBoxComponent.prototype.arraysEqual = /**
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
        jqxComboBoxComponent.prototype.manageAttributes = /**
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
        jqxComboBoxComponent.prototype.moveClasses = /**
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
        jqxComboBoxComponent.prototype.moveStyles = /**
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
        jqxComboBoxComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComboBox', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxComboBoxComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.__updateRect__ = /**
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
        jqxComboBoxComponent.prototype.writeValue = /**
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
        jqxComboBoxComponent.prototype.registerOnChange = /**
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
        jqxComboBoxComponent.prototype.registerOnTouched = /**
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
        jqxComboBoxComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxComboBox('setOptions', options);
            };
        // jqxComboBoxComponent properties
        // jqxComboBoxComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.animationType =
            // jqxComboBoxComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('animationType', arg);
                }
                else {
                    return this.host.jqxComboBox('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.autoComplete = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('autoComplete', arg);
                }
                else {
                    return this.host.jqxComboBox('autoComplete');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.autoOpen = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('autoOpen', arg);
                }
                else {
                    return this.host.jqxComboBox('autoOpen');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.autoItemsHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('autoItemsHeight', arg);
                }
                else {
                    return this.host.jqxComboBox('autoItemsHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.autoDropDownHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('autoDropDownHeight', arg);
                }
                else {
                    return this.host.jqxComboBox('autoDropDownHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.closeDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('closeDelay', arg);
                }
                else {
                    return this.host.jqxComboBox('closeDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.checkboxes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('checkboxes', arg);
                }
                else {
                    return this.host.jqxComboBox('checkboxes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('disabled', arg);
                }
                else {
                    return this.host.jqxComboBox('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('displayMember', arg);
                }
                else {
                    return this.host.jqxComboBox('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.dropDownHorizontalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('dropDownHorizontalAlignment', arg);
                }
                else {
                    return this.host.jqxComboBox('dropDownHorizontalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.dropDownVerticalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('dropDownVerticalAlignment', arg);
                }
                else {
                    return this.host.jqxComboBox('dropDownVerticalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.dropDownHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('dropDownHeight', arg);
                }
                else {
                    return this.host.jqxComboBox('dropDownHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.dropDownWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('dropDownWidth', arg);
                }
                else {
                    return this.host.jqxComboBox('dropDownWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('enableHover', arg);
                }
                else {
                    return this.host.jqxComboBox('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.enableSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('enableSelection', arg);
                }
                else {
                    return this.host.jqxComboBox('enableSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.enableBrowserBoundsDetection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('enableBrowserBoundsDetection', arg);
                }
                else {
                    return this.host.jqxComboBox('enableBrowserBoundsDetection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('height', arg);
                }
                else {
                    return this.host.jqxComboBox('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.itemHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('itemHeight', arg);
                }
                else {
                    return this.host.jqxComboBox('itemHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.multiSelect = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('multiSelect', arg);
                }
                else {
                    return this.host.jqxComboBox('multiSelect');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.minLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('minLength', arg);
                }
                else {
                    return this.host.jqxComboBox('minLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.openDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('openDelay', arg);
                }
                else {
                    return this.host.jqxComboBox('openDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.popupZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('popupZIndex', arg);
                }
                else {
                    return this.host.jqxComboBox('popupZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('placeHolder', arg);
                }
                else {
                    return this.host.jqxComboBox('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.remoteAutoComplete = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('remoteAutoComplete', arg);
                }
                else {
                    return this.host.jqxComboBox('remoteAutoComplete');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.remoteAutoCompleteDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('remoteAutoCompleteDelay', arg);
                }
                else {
                    return this.host.jqxComboBox('remoteAutoCompleteDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.renderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('renderer', arg);
                }
                else {
                    return this.host.jqxComboBox('renderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.renderSelectedItem = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('renderSelectedItem', arg);
                }
                else {
                    return this.host.jqxComboBox('renderSelectedItem');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('rtl', arg);
                }
                else {
                    return this.host.jqxComboBox('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.selectedIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('selectedIndex', arg);
                }
                else {
                    return this.host.jqxComboBox('selectedIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.showArrow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('showArrow', arg);
                }
                else {
                    return this.host.jqxComboBox('showArrow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.showCloseButtons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('showCloseButtons', arg);
                }
                else {
                    return this.host.jqxComboBox('showCloseButtons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.searchMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('searchMode', arg);
                }
                else {
                    return this.host.jqxComboBox('searchMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.search = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('search', arg);
                }
                else {
                    return this.host.jqxComboBox('search');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('source', arg);
                }
                else {
                    return this.host.jqxComboBox('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxComboBox('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('template', arg);
                }
                else {
                    return this.host.jqxComboBox('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('theme', arg);
                }
                else {
                    return this.host.jqxComboBox('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.validateSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('validateSelection', arg);
                }
                else {
                    return this.host.jqxComboBox('validateSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('valueMember', arg);
                }
                else {
                    return this.host.jqxComboBox('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxComboBoxComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxComboBox('width', arg);
                }
                else {
                    return this.host.jqxComboBox('width');
                }
            };
        // jqxComboBoxComponent functions
        // jqxComboBoxComponent functions
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.addItem =
            // jqxComboBoxComponent functions
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('addItem', item);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('clearSelection');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('clear');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('close');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.checkIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('checkIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.checkItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('checkItem', item);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.checkAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('checkAll');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('destroy');
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.disableItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('disableItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.disableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('disableAt', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.enableItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('enableItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('enableAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.ensureVisible = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('ensureVisible', index);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('focus');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getItem', index);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getItemByValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getItemByValue', value);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getVisibleItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getVisibleItems');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getItems');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getCheckedItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getCheckedItems');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getSelectedItem = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getSelectedItem');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getSelectedItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getSelectedItems');
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.getSelectedIndex = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('getSelectedIndex');
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.insertAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('insertAt', item, index);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.isOpened = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('isOpened');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.indeterminateIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('indeterminateIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.indeterminateItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('indeterminateItem', item);
            };
        /**
         * @param {?} selectTagId
         * @return {?}
         */
        jqxComboBoxComponent.prototype.loadFromSelect = /**
         * @param {?} selectTagId
         * @return {?}
         */
            function (selectTagId) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('loadFromSelect', selectTagId);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('open');
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.removeItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('removeItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.removeAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('removeAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.selectIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('selectIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.selectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('selectItem', item);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.searchString = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxComboBox('searchString');
            };
        /**
         * @param {?} item
         * @param {?} itemValue
         * @return {?}
         */
        jqxComboBoxComponent.prototype.updateItem = /**
         * @param {?} item
         * @param {?} itemValue
         * @return {?}
         */
            function (item, itemValue) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('updateItem', item, itemValue);
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.updateAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('updateAt', item, index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.unselectIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('unselectIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.unselectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('unselectItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxComboBoxComponent.prototype.uncheckIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('uncheckIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxComboBoxComponent.prototype.uncheckItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('uncheckItem', item);
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.uncheckAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxComboBox('uncheckAll');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxComboBoxComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxComboBox('val', value);
                }
                else {
                    return this.host.jqxComboBox('val');
                }
            };
        /**
         * @return {?}
         */
        jqxComboBoxComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        if (eventData.args.item !== null)
                            _this.onChangeCallback(eventData.args.item.value);
                });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
                this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
            };
        jqxComboBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxComboBox',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxComboBoxComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxComboBoxComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAutoComplete: [{ type: core.Input, args: ['autoComplete',] }],
            attrAutoOpen: [{ type: core.Input, args: ['autoOpen',] }],
            attrAutoItemsHeight: [{ type: core.Input, args: ['autoItemsHeight',] }],
            attrAutoDropDownHeight: [{ type: core.Input, args: ['autoDropDownHeight',] }],
            attrCloseDelay: [{ type: core.Input, args: ['closeDelay',] }],
            attrCheckboxes: [{ type: core.Input, args: ['checkboxes',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrDropDownHorizontalAlignment: [{ type: core.Input, args: ['dropDownHorizontalAlignment',] }],
            attrDropDownVerticalAlignment: [{ type: core.Input, args: ['dropDownVerticalAlignment',] }],
            attrDropDownHeight: [{ type: core.Input, args: ['dropDownHeight',] }],
            attrDropDownWidth: [{ type: core.Input, args: ['dropDownWidth',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrEnableSelection: [{ type: core.Input, args: ['enableSelection',] }],
            attrEnableBrowserBoundsDetection: [{ type: core.Input, args: ['enableBrowserBoundsDetection',] }],
            attrItemHeight: [{ type: core.Input, args: ['itemHeight',] }],
            attrMultiSelect: [{ type: core.Input, args: ['multiSelect',] }],
            attrMinLength: [{ type: core.Input, args: ['minLength',] }],
            attrOpenDelay: [{ type: core.Input, args: ['openDelay',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrRemoteAutoComplete: [{ type: core.Input, args: ['remoteAutoComplete',] }],
            attrRemoteAutoCompleteDelay: [{ type: core.Input, args: ['remoteAutoCompleteDelay',] }],
            attrRenderer: [{ type: core.Input, args: ['renderer',] }],
            attrRenderSelectedItem: [{ type: core.Input, args: ['renderSelectedItem',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSelectedIndex: [{ type: core.Input, args: ['selectedIndex',] }],
            attrShowArrow: [{ type: core.Input, args: ['showArrow',] }],
            attrShowCloseButtons: [{ type: core.Input, args: ['showCloseButtons',] }],
            attrSearchMode: [{ type: core.Input, args: ['searchMode',] }],
            attrSearch: [{ type: core.Input, args: ['search',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValidateSelection: [{ type: core.Input, args: ['validateSelection',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onCheckChange: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onUnselect: [{ type: core.Output }]
        };
        return jqxComboBoxComponent;
    }()); //jqxComboBoxComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxComboBoxModule = /** @class */ (function () {
        function jqxComboBoxModule() {
        }
        jqxComboBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxComboBoxComponent],
                        exports: [jqxComboBoxComponent]
                    },] }
        ];
        return jqxComboBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxComboBoxComponent = jqxComboBoxComponent;
    exports.jqxComboBoxModule = jqxComboBoxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

