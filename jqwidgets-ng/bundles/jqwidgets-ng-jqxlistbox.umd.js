require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdragdrop');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxlistbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxlistbox = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxListBoxComponent; }),
        multi: true
    };
    var jqxListBoxComponent = /** @class */ (function () {
        function jqxListBoxComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxListBoxComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.ngAfterViewInit = /**
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
        jqxListBoxComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.container) {
                    if (this.content !== this.container.innerHTML) {
                        this.content = this.container.innerHTML;
                        /** @type {?} */
                        var result = JQXLite.jqx.parseSourceTag(this.container);
                        this.host.jqxListBox({ source: result.items });
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxListBoxComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxListBox(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                                this.host.jqxListBox(this.properties[i], this[attrName]);
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
        jqxListBoxComponent.prototype.arraysEqual = /**
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
        jqxListBoxComponent.prototype.manageAttributes = /**
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
        jqxListBoxComponent.prototype.moveClasses = /**
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
        jqxListBoxComponent.prototype.moveStyles = /**
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
        jqxListBoxComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxListBoxComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.__updateRect__ = /**
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
        jqxListBoxComponent.prototype.writeValue = /**
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
        jqxListBoxComponent.prototype.registerOnChange = /**
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
        jqxListBoxComponent.prototype.registerOnTouched = /**
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
        jqxListBoxComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxListBox('setOptions', options);
            };
        // jqxListBoxComponent properties
        // jqxListBoxComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.autoHeight =
            // jqxListBoxComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('autoHeight', arg);
                }
                else {
                    return this.host.jqxListBox('autoHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.allowDrag = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('allowDrag', arg);
                }
                else {
                    return this.host.jqxListBox('allowDrag');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.allowDrop = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('allowDrop', arg);
                }
                else {
                    return this.host.jqxListBox('allowDrop');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.checkboxes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('checkboxes', arg);
                }
                else {
                    return this.host.jqxListBox('checkboxes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('disabled', arg);
                }
                else {
                    return this.host.jqxListBox('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('displayMember', arg);
                }
                else {
                    return this.host.jqxListBox('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.dropAction = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('dropAction', arg);
                }
                else {
                    return this.host.jqxListBox('dropAction');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.dragStart = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('dragStart', arg);
                }
                else {
                    return this.host.jqxListBox('dragStart');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.dragEnd = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('dragEnd', arg);
                }
                else {
                    return this.host.jqxListBox('dragEnd');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('enableHover', arg);
                }
                else {
                    return this.host.jqxListBox('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.enableSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('enableSelection', arg);
                }
                else {
                    return this.host.jqxListBox('enableSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.equalItemsWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('equalItemsWidth', arg);
                }
                else {
                    return this.host.jqxListBox('equalItemsWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.filterable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('filterable', arg);
                }
                else {
                    return this.host.jqxListBox('filterable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.filterHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('filterHeight', arg);
                }
                else {
                    return this.host.jqxListBox('filterHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.filterDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('filterDelay', arg);
                }
                else {
                    return this.host.jqxListBox('filterDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.filterPlaceHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('filterPlaceHolder', arg);
                }
                else {
                    return this.host.jqxListBox('filterPlaceHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('height', arg);
                }
                else {
                    return this.host.jqxListBox('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.hasThreeStates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('hasThreeStates', arg);
                }
                else {
                    return this.host.jqxListBox('hasThreeStates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.itemHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('itemHeight', arg);
                }
                else {
                    return this.host.jqxListBox('itemHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.incrementalSearch = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('incrementalSearch', arg);
                }
                else {
                    return this.host.jqxListBox('incrementalSearch');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.incrementalSearchDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('incrementalSearchDelay', arg);
                }
                else {
                    return this.host.jqxListBox('incrementalSearchDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.multiple = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('multiple', arg);
                }
                else {
                    return this.host.jqxListBox('multiple');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.multipleextended = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('multipleextended', arg);
                }
                else {
                    return this.host.jqxListBox('multipleextended');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.renderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('renderer', arg);
                }
                else {
                    return this.host.jqxListBox('renderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.rendered = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('rendered', arg);
                }
                else {
                    return this.host.jqxListBox('rendered');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('rtl', arg);
                }
                else {
                    return this.host.jqxListBox('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.selectedIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('selectedIndex', arg);
                }
                else {
                    return this.host.jqxListBox('selectedIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.selectedIndexes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('selectedIndexes', arg);
                }
                else {
                    return this.host.jqxListBox('selectedIndexes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('source', arg);
                }
                else {
                    return this.host.jqxListBox('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxListBox('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.searchMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('searchMode', arg);
                }
                else {
                    return this.host.jqxListBox('searchMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('theme', arg);
                }
                else {
                    return this.host.jqxListBox('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('valueMember', arg);
                }
                else {
                    return this.host.jqxListBox('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListBoxComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxListBox('width', arg);
                }
                else {
                    return this.host.jqxListBox('width');
                }
            };
        // jqxListBoxComponent functions
        // jqxListBoxComponent functions
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.addItem =
            // jqxListBoxComponent functions
            /**
             * @param {?} Item
             * @return {?}
             */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('addItem', Item);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.beginUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('beginUpdate');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('clear');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('clearSelection');
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.checkIndex = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('checkIndex', Index);
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.checkItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('checkItem', Item);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.checkAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('checkAll');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.clearFilter = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('clearFilter');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('destroy');
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.disableItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('disableItem', Item);
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.disableAt = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('disableAt', Index);
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.enableItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('enableItem', Item);
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.enableAt = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('enableAt', Index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxListBoxComponent.prototype.ensureVisible = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('ensureVisible', item);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.endUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('endUpdate');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('focus');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.getItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getItems');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.getSelectedItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getSelectedItems');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.getCheckedItems = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getCheckedItems');
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.getItem = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getItem', Index);
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.getItemByValue = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getItemByValue', Item);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.getSelectedItem = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getSelectedItem');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.getSelectedIndex = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxListBox('getSelectedIndex');
            };
        /**
         * @param {?} Item
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.insertAt = /**
         * @param {?} Item
         * @param {?} Index
         * @return {?}
         */
            function (Item, Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('insertAt', Item, Index);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.invalidate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('invalidate');
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.indeterminateItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('indeterminateItem', Item);
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.indeterminateIndex = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('indeterminateIndex', Index);
            };
        /**
         * @param {?} selector
         * @return {?}
         */
        jqxListBoxComponent.prototype.loadFromSelect = /**
         * @param {?} selector
         * @return {?}
         */
            function (selector) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('loadFromSelect', selector);
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.removeItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('removeItem', Item);
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.removeAt = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('removeAt', Index);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('render');
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('refresh');
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListBoxComponent.prototype.selectItem = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('selectItem', Item);
            };
        /**
         * @param {?} Index
         * @return {?}
         */
        jqxListBoxComponent.prototype.selectIndex = /**
         * @param {?} Index
         * @return {?}
         */
            function (Index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('selectIndex', Index);
            };
        /**
         * @param {?} Item
         * @param {?} Value
         * @return {?}
         */
        jqxListBoxComponent.prototype.updateItem = /**
         * @param {?} Item
         * @param {?} Value
         * @return {?}
         */
            function (Item, Value) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('updateItem', Item, Value);
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        jqxListBoxComponent.prototype.updateAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('updateAt', item, index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxListBoxComponent.prototype.unselectIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('unselectIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxListBoxComponent.prototype.unselectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('unselectItem', item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxListBoxComponent.prototype.uncheckIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('uncheckIndex', index);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        jqxListBoxComponent.prototype.uncheckItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('uncheckItem', item);
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.uncheckAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxListBox('uncheckAll');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxListBoxComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxListBox('val', value);
                }
                else {
                    return this.host.jqxListBox('val');
                }
            };
        /**
         * @return {?}
         */
        jqxListBoxComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.item.value);
                });
                this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
                this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
                this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
                this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
                this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
            };
        jqxListBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxListBox',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxListBoxComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxListBoxComponent.propDecorators = {
            attrAutoHeight: [{ type: core.Input, args: ['autoHeight',] }],
            attrAllowDrag: [{ type: core.Input, args: ['allowDrag',] }],
            attrAllowDrop: [{ type: core.Input, args: ['allowDrop',] }],
            attrCheckboxes: [{ type: core.Input, args: ['checkboxes',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrDropAction: [{ type: core.Input, args: ['dropAction',] }],
            attrDragStart: [{ type: core.Input, args: ['dragStart',] }],
            attrDragEnd: [{ type: core.Input, args: ['dragEnd',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrEnableSelection: [{ type: core.Input, args: ['enableSelection',] }],
            attrEqualItemsWidth: [{ type: core.Input, args: ['equalItemsWidth',] }],
            attrFilterable: [{ type: core.Input, args: ['filterable',] }],
            attrFilterHeight: [{ type: core.Input, args: ['filterHeight',] }],
            attrFilterDelay: [{ type: core.Input, args: ['filterDelay',] }],
            attrFilterPlaceHolder: [{ type: core.Input, args: ['filterPlaceHolder',] }],
            attrHasThreeStates: [{ type: core.Input, args: ['hasThreeStates',] }],
            attrItemHeight: [{ type: core.Input, args: ['itemHeight',] }],
            attrIncrementalSearch: [{ type: core.Input, args: ['incrementalSearch',] }],
            attrIncrementalSearchDelay: [{ type: core.Input, args: ['incrementalSearchDelay',] }],
            attrMultiple: [{ type: core.Input, args: ['multiple',] }],
            attrMultipleextended: [{ type: core.Input, args: ['multipleextended',] }],
            attrRenderer: [{ type: core.Input, args: ['renderer',] }],
            attrRendered: [{ type: core.Input, args: ['rendered',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSelectedIndex: [{ type: core.Input, args: ['selectedIndex',] }],
            attrSelectedIndexes: [{ type: core.Input, args: ['selectedIndexes',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrSearchMode: [{ type: core.Input, args: ['searchMode',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onCheckChange: [{ type: core.Output }],
            onDragStart: [{ type: core.Output }],
            onDragEnd: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onUnselect: [{ type: core.Output }]
        };
        return jqxListBoxComponent;
    }()); //jqxListBoxComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxListBoxModule = /** @class */ (function () {
        function jqxListBoxModule() {
        }
        jqxListBoxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxListBoxComponent],
                        exports: [jqxListBoxComponent]
                    },] }
        ];
        return jqxListBoxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxListBoxComponent = jqxListBoxComponent;
    exports.jqxListBoxModule = jqxListBoxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

