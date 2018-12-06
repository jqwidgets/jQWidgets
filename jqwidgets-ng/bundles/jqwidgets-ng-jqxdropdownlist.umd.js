require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdropdownlist', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdropdownlist = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxDropDownListComponent; }),
        multi: true
    };
    var jqxDropDownListComponent = /** @class */ (function () {
        function jqxDropDownListComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxDropDownListComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.ngAfterViewInit = /**
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
        jqxDropDownListComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.container) {
                    if (this.content !== this.container.innerHTML) {
                        this.content = this.container.innerHTML;
                        /** @type {?} */
                        var result = JQXLite.jqx.parseSourceTag(this.container);
                        this.host.jqxDropDownList({ source: result.items });
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxDropDownListComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxDropDownList(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                                this.host.jqxDropDownList(this.properties[i], this[attrName]);
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
        jqxDropDownListComponent.prototype.arraysEqual = /**
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
        jqxDropDownListComponent.prototype.manageAttributes = /**
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
        jqxDropDownListComponent.prototype.moveClasses = /**
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
        jqxDropDownListComponent.prototype.moveStyles = /**
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
        jqxDropDownListComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxDropDownListComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.__updateRect__ = /**
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
        jqxDropDownListComponent.prototype.writeValue = /**
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
        jqxDropDownListComponent.prototype.registerOnChange = /**
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
        jqxDropDownListComponent.prototype.registerOnTouched = /**
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
        jqxDropDownListComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxDropDownList('setOptions', options);
            };
        // jqxDropDownListComponent properties
        // jqxDropDownListComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.autoOpen =
            // jqxDropDownListComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('autoOpen', arg);
                }
                else {
                    return this.host.jqxDropDownList('autoOpen');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.autoDropDownHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('autoDropDownHeight', arg);
                }
                else {
                    return this.host.jqxDropDownList('autoDropDownHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.animationType = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('animationType', arg);
                }
                else {
                    return this.host.jqxDropDownList('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.checkboxes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('checkboxes', arg);
                }
                else {
                    return this.host.jqxDropDownList('checkboxes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.closeDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('closeDelay', arg);
                }
                else {
                    return this.host.jqxDropDownList('closeDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('disabled', arg);
                }
                else {
                    return this.host.jqxDropDownList('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('displayMember', arg);
                }
                else {
                    return this.host.jqxDropDownList('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.dropDownHorizontalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
                }
                else {
                    return this.host.jqxDropDownList('dropDownHorizontalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.dropDownVerticalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
                }
                else {
                    return this.host.jqxDropDownList('dropDownVerticalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.dropDownHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('dropDownHeight', arg);
                }
                else {
                    return this.host.jqxDropDownList('dropDownHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.dropDownWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('dropDownWidth', arg);
                }
                else {
                    return this.host.jqxDropDownList('dropDownWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.enableSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('enableSelection', arg);
                }
                else {
                    return this.host.jqxDropDownList('enableSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.enableBrowserBoundsDetection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
                }
                else {
                    return this.host.jqxDropDownList('enableBrowserBoundsDetection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('enableHover', arg);
                }
                else {
                    return this.host.jqxDropDownList('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.filterable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('filterable', arg);
                }
                else {
                    return this.host.jqxDropDownList('filterable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.filterHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('filterHeight', arg);
                }
                else {
                    return this.host.jqxDropDownList('filterHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.filterDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('filterDelay', arg);
                }
                else {
                    return this.host.jqxDropDownList('filterDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.filterPlaceHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('filterPlaceHolder', arg);
                }
                else {
                    return this.host.jqxDropDownList('filterPlaceHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('height', arg);
                }
                else {
                    return this.host.jqxDropDownList('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.incrementalSearch = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('incrementalSearch', arg);
                }
                else {
                    return this.host.jqxDropDownList('incrementalSearch');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.incrementalSearchDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('incrementalSearchDelay', arg);
                }
                else {
                    return this.host.jqxDropDownList('incrementalSearchDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.itemHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('itemHeight', arg);
                }
                else {
                    return this.host.jqxDropDownList('itemHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.openDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('openDelay', arg);
                }
                else {
                    return this.host.jqxDropDownList('openDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('placeHolder', arg);
                }
                else {
                    return this.host.jqxDropDownList('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.popupZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('popupZIndex', arg);
                }
                else {
                    return this.host.jqxDropDownList('popupZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('rtl', arg);
                }
                else {
                    return this.host.jqxDropDownList('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.renderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('renderer', arg);
                }
                else {
                    return this.host.jqxDropDownList('renderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.selectionRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('selectionRenderer', arg);
                }
                else {
                    return this.host.jqxDropDownList('selectionRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.searchMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('searchMode', arg);
                }
                else {
                    return this.host.jqxDropDownList('searchMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('source', arg);
                }
                else {
                    return this.host.jqxDropDownList('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.selectedIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('selectedIndex', arg);
                }
                else {
                    return this.host.jqxDropDownList('selectedIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('theme', arg);
                }
                else {
                    return this.host.jqxDropDownList('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('template', arg);
                }
                else {
                    return this.host.jqxDropDownList('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('valueMember', arg);
                }
                else {
                    return this.host.jqxDropDownList('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDropDownList('width', arg);
                }
                else {
                    return this.host.jqxDropDownList('width');
                }
            };
        // jqxDropDownListComponent functions
        // jqxDropDownListComponent functions
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.addItem =
            // jqxDropDownListComponent functions
            /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('addItem', item);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('clearSelection');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('clear');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('close');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.checkIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('checkIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.checkItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('checkItem', item);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.checkAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('checkAll');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.clearFilter = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('clearFilter');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('destroy');
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.disableItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('disableItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.disableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('disableAt', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.enableItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('enableItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('enableAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.ensureVisible = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('ensureVisible', index);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('focus');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getItem', index);
            };
        /**
         * @param {?} itemValue
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getItemByValue = /**
         * @param {?} itemValue
         * @return {?}
         */
            function (itemValue) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getItemByValue', itemValue);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getItems');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getCheckedItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getCheckedItems');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getSelectedItem = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getSelectedItem');
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.getSelectedIndex = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('getSelectedIndex');
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.insertAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('insertAt', item, index);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.isOpened = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDropDownList('isOpened');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.indeterminateIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('indeterminateIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.indeterminateItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('indeterminateItem', item);
            };
        /**
         * @param {?} arg
         * @return {?}
         */
        jqxDropDownListComponent.prototype.loadFromSelect = /**
         * @param {?} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('loadFromSelect', arg);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('open');
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.removeItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('removeItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.removeAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('removeAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.selectIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('selectIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.selectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('selectItem', item);
            };
        /**
         * @param {?} content
         * @return {?}
         */
        jqxDropDownListComponent.prototype.setContent = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('setContent', content);
            };
        /**
         * @param {?} newItem
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.updateItem = /**
         * @param {?} newItem
         * @param {?} item
         * @return {?}
         */
            function (newItem, item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('updateItem', newItem, item);
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.updateAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('updateAt', item, index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.unselectIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('unselectIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.unselectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('unselectItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxDropDownListComponent.prototype.uncheckIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('uncheckIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxDropDownListComponent.prototype.uncheckItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('uncheckItem', item);
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.uncheckAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDropDownList('uncheckAll');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxDropDownListComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxDropDownList('val', value);
                }
                else {
                    return this.host.jqxDropDownList('val');
                }
            };
        /**
         * @return {?}
         */
        jqxDropDownListComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.item.value);
                });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
                this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
            };
        jqxDropDownListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxDropDownList',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxDropDownListComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxDropDownListComponent.propDecorators = {
            attrAutoOpen: [{ type: core.Input, args: ['autoOpen',] }],
            attrAutoDropDownHeight: [{ type: core.Input, args: ['autoDropDownHeight',] }],
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrCheckboxes: [{ type: core.Input, args: ['checkboxes',] }],
            attrCloseDelay: [{ type: core.Input, args: ['closeDelay',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrDropDownHorizontalAlignment: [{ type: core.Input, args: ['dropDownHorizontalAlignment',] }],
            attrDropDownVerticalAlignment: [{ type: core.Input, args: ['dropDownVerticalAlignment',] }],
            attrDropDownHeight: [{ type: core.Input, args: ['dropDownHeight',] }],
            attrDropDownWidth: [{ type: core.Input, args: ['dropDownWidth',] }],
            attrEnableSelection: [{ type: core.Input, args: ['enableSelection',] }],
            attrEnableBrowserBoundsDetection: [{ type: core.Input, args: ['enableBrowserBoundsDetection',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrFilterable: [{ type: core.Input, args: ['filterable',] }],
            attrFilterHeight: [{ type: core.Input, args: ['filterHeight',] }],
            attrFilterDelay: [{ type: core.Input, args: ['filterDelay',] }],
            attrFilterPlaceHolder: [{ type: core.Input, args: ['filterPlaceHolder',] }],
            attrIncrementalSearch: [{ type: core.Input, args: ['incrementalSearch',] }],
            attrIncrementalSearchDelay: [{ type: core.Input, args: ['incrementalSearchDelay',] }],
            attrItemHeight: [{ type: core.Input, args: ['itemHeight',] }],
            attrOpenDelay: [{ type: core.Input, args: ['openDelay',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrRenderer: [{ type: core.Input, args: ['renderer',] }],
            attrSelectionRenderer: [{ type: core.Input, args: ['selectionRenderer',] }],
            attrSearchMode: [{ type: core.Input, args: ['searchMode',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrSelectedIndex: [{ type: core.Input, args: ['selectedIndex',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onCheckChange: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onUnselect: [{ type: core.Output }]
        };
        return jqxDropDownListComponent;
    }()); //jqxDropDownListComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDropDownListModule = /** @class */ (function () {
        function jqxDropDownListModule() {
        }
        jqxDropDownListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxDropDownListComponent],
                        exports: [jqxDropDownListComponent]
                    },] }
        ];
        return jqxDropDownListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxDropDownListComponent = jqxDropDownListComponent;
    exports.jqxDropDownListModule = jqxDropDownListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

