require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcombobox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcombobox = {}), global.ng.core, global.ng.forms));
}(this, function (exports, core, forms) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /// <reference path="../../jqwidgets.d.ts" />
    var noop = function () { };
    var ɵ0 = noop;
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
        jqxComboBoxComponent.prototype.ngOnInit = function () {
        };
        jqxComboBoxComponent.prototype.ngAfterViewInit = function () {
            var children = JQXLite(this.elementRef.nativeElement.children).find('li');
            var html = '';
            var options = {};
            if (children.length > 0) {
                this.container = document.createElement('div');
                html = this.elementRef.nativeElement.innerHTML;
                this.container.appendChild(this.elementRef.nativeElement.firstChild);
                this.elementRef.nativeElement.innerHTML = html;
                this.content = html;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                options['source'] = result.items;
            }
            if (this.autoCreate) {
                this.createComponent(options);
            }
        };
        jqxComboBoxComponent.prototype.ngAfterViewChecked = function () {
            if (this.container) {
                if (this.content !== this.container.innerHTML) {
                    this.content = this.container.innerHTML;
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    this.host.jqxComboBox({ source: result.items });
                }
            }
        };
        jqxComboBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
        jqxComboBoxComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxComboBoxComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxComboBoxComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxComboBoxComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxComboBoxComponent.prototype.createComponent = function (options) {
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
        jqxComboBoxComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxComboBoxComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxComboBoxComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxComboBoxComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxComboBoxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxComboBoxComponent.prototype.setOptions = function (options) {
            this.host.jqxComboBox('setOptions', options);
        };
        // jqxComboBoxComponent properties
        jqxComboBoxComponent.prototype.animationType = function (arg) {
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
        jqxComboBoxComponent.prototype.autoComplete = function (arg) {
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
        jqxComboBoxComponent.prototype.autoOpen = function (arg) {
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
        jqxComboBoxComponent.prototype.autoItemsHeight = function (arg) {
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
        jqxComboBoxComponent.prototype.autoDropDownHeight = function (arg) {
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
        jqxComboBoxComponent.prototype.closeDelay = function (arg) {
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
        jqxComboBoxComponent.prototype.checkboxes = function (arg) {
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
        jqxComboBoxComponent.prototype.disabled = function (arg) {
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
        jqxComboBoxComponent.prototype.displayMember = function (arg) {
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
        jqxComboBoxComponent.prototype.dropDownHorizontalAlignment = function (arg) {
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
        jqxComboBoxComponent.prototype.dropDownVerticalAlignment = function (arg) {
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
        jqxComboBoxComponent.prototype.dropDownHeight = function (arg) {
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
        jqxComboBoxComponent.prototype.dropDownWidth = function (arg) {
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
        jqxComboBoxComponent.prototype.enableHover = function (arg) {
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
        jqxComboBoxComponent.prototype.enableSelection = function (arg) {
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
        jqxComboBoxComponent.prototype.enableBrowserBoundsDetection = function (arg) {
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
        jqxComboBoxComponent.prototype.height = function (arg) {
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
        jqxComboBoxComponent.prototype.itemHeight = function (arg) {
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
        jqxComboBoxComponent.prototype.multiSelect = function (arg) {
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
        jqxComboBoxComponent.prototype.minLength = function (arg) {
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
        jqxComboBoxComponent.prototype.openDelay = function (arg) {
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
        jqxComboBoxComponent.prototype.popupZIndex = function (arg) {
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
        jqxComboBoxComponent.prototype.placeHolder = function (arg) {
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
        jqxComboBoxComponent.prototype.remoteAutoComplete = function (arg) {
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
        jqxComboBoxComponent.prototype.remoteAutoCompleteDelay = function (arg) {
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
        jqxComboBoxComponent.prototype.renderer = function (arg) {
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
        jqxComboBoxComponent.prototype.renderSelectedItem = function (arg) {
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
        jqxComboBoxComponent.prototype.rtl = function (arg) {
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
        jqxComboBoxComponent.prototype.selectedIndex = function (arg) {
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
        jqxComboBoxComponent.prototype.showArrow = function (arg) {
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
        jqxComboBoxComponent.prototype.showCloseButtons = function (arg) {
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
        jqxComboBoxComponent.prototype.searchMode = function (arg) {
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
        jqxComboBoxComponent.prototype.search = function (arg) {
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
        jqxComboBoxComponent.prototype.source = function (arg) {
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
        jqxComboBoxComponent.prototype.scrollBarSize = function (arg) {
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
        jqxComboBoxComponent.prototype.template = function (arg) {
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
        jqxComboBoxComponent.prototype.theme = function (arg) {
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
        jqxComboBoxComponent.prototype.validateSelection = function (arg) {
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
        jqxComboBoxComponent.prototype.valueMember = function (arg) {
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
        jqxComboBoxComponent.prototype.width = function (arg) {
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
        jqxComboBoxComponent.prototype.addItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('addItem', item);
        };
        jqxComboBoxComponent.prototype.clearSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('clearSelection');
        };
        jqxComboBoxComponent.prototype.clear = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('clear');
        };
        jqxComboBoxComponent.prototype.close = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('close');
        };
        jqxComboBoxComponent.prototype.checkIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('checkIndex', index);
        };
        jqxComboBoxComponent.prototype.checkItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('checkItem', item);
        };
        jqxComboBoxComponent.prototype.checkAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('checkAll');
        };
        jqxComboBoxComponent.prototype.destroy = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('destroy');
        };
        jqxComboBoxComponent.prototype.disableItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('disableItem', item);
        };
        jqxComboBoxComponent.prototype.disableAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('disableAt', index);
        };
        jqxComboBoxComponent.prototype.enableItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('enableItem', item);
        };
        jqxComboBoxComponent.prototype.enableAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('enableAt', index);
        };
        jqxComboBoxComponent.prototype.ensureVisible = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('ensureVisible', index);
        };
        jqxComboBoxComponent.prototype.focus = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('focus');
        };
        jqxComboBoxComponent.prototype.getItem = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getItem', index);
        };
        jqxComboBoxComponent.prototype.getItemByValue = function (value) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getItemByValue', value);
        };
        jqxComboBoxComponent.prototype.getVisibleItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getVisibleItems');
        };
        jqxComboBoxComponent.prototype.getItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getItems');
        };
        jqxComboBoxComponent.prototype.getCheckedItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getCheckedItems');
        };
        jqxComboBoxComponent.prototype.getSelectedItem = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getSelectedItem');
        };
        jqxComboBoxComponent.prototype.getSelectedItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getSelectedItems');
        };
        jqxComboBoxComponent.prototype.getSelectedIndex = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('getSelectedIndex');
        };
        jqxComboBoxComponent.prototype.insertAt = function (item, index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('insertAt', item, index);
        };
        jqxComboBoxComponent.prototype.isOpened = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('isOpened');
        };
        jqxComboBoxComponent.prototype.indeterminateIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('indeterminateIndex', index);
        };
        jqxComboBoxComponent.prototype.indeterminateItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('indeterminateItem', item);
        };
        jqxComboBoxComponent.prototype.loadFromSelect = function (selectTagId) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('loadFromSelect', selectTagId);
        };
        jqxComboBoxComponent.prototype.open = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('open');
        };
        jqxComboBoxComponent.prototype.removeItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('removeItem', item);
        };
        jqxComboBoxComponent.prototype.removeAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('removeAt', index);
        };
        jqxComboBoxComponent.prototype.selectIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('selectIndex', index);
        };
        jqxComboBoxComponent.prototype.selectItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('selectItem', item);
        };
        jqxComboBoxComponent.prototype.searchString = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxComboBox('searchString');
        };
        jqxComboBoxComponent.prototype.updateItem = function (item, itemValue) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('updateItem', item, itemValue);
        };
        jqxComboBoxComponent.prototype.updateAt = function (item, index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('updateAt', item, index);
        };
        jqxComboBoxComponent.prototype.unselectIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('unselectIndex', index);
        };
        jqxComboBoxComponent.prototype.unselectItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('unselectItem', item);
        };
        jqxComboBoxComponent.prototype.uncheckIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('uncheckIndex', index);
        };
        jqxComboBoxComponent.prototype.uncheckItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('uncheckItem', item);
        };
        jqxComboBoxComponent.prototype.uncheckAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxComboBox('uncheckAll');
        };
        jqxComboBoxComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxComboBox('val', value);
            }
            else {
                return this.host.jqxComboBox('val');
            }
        };
        jqxComboBoxComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                if (eventData.args.item !== null)
                    _this.onChangeCallback(eventData.args.item.value); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
            this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
        };
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('autoComplete'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrAutoComplete", void 0);
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('autoItemsHeight'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrAutoItemsHeight", void 0);
        __decorate([
            core.Input('autoDropDownHeight'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrAutoDropDownHeight", void 0);
        __decorate([
            core.Input('closeDelay'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrCloseDelay", void 0);
        __decorate([
            core.Input('checkboxes'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrCheckboxes", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('dropDownHorizontalAlignment'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
        __decorate([
            core.Input('dropDownVerticalAlignment'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrDropDownVerticalAlignment", void 0);
        __decorate([
            core.Input('dropDownHeight'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrDropDownHeight", void 0);
        __decorate([
            core.Input('dropDownWidth'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrDropDownWidth", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('enableSelection'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrEnableSelection", void 0);
        __decorate([
            core.Input('enableBrowserBoundsDetection'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
        __decorate([
            core.Input('itemHeight'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrItemHeight", void 0);
        __decorate([
            core.Input('multiSelect'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrMultiSelect", void 0);
        __decorate([
            core.Input('minLength'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrMinLength", void 0);
        __decorate([
            core.Input('openDelay'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrOpenDelay", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('remoteAutoComplete'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrRemoteAutoComplete", void 0);
        __decorate([
            core.Input('remoteAutoCompleteDelay'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrRemoteAutoCompleteDelay", void 0);
        __decorate([
            core.Input('renderer'),
            __metadata("design:type", Function)
        ], jqxComboBoxComponent.prototype, "attrRenderer", void 0);
        __decorate([
            core.Input('renderSelectedItem'),
            __metadata("design:type", Function)
        ], jqxComboBoxComponent.prototype, "attrRenderSelectedItem", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('selectedIndex'),
            __metadata("design:type", Number)
        ], jqxComboBoxComponent.prototype, "attrSelectedIndex", void 0);
        __decorate([
            core.Input('showArrow'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrShowArrow", void 0);
        __decorate([
            core.Input('showCloseButtons'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "attrShowCloseButtons", void 0);
        __decorate([
            core.Input('searchMode'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrSearchMode", void 0);
        __decorate([
            core.Input('search'),
            __metadata("design:type", Function)
        ], jqxComboBoxComponent.prototype, "attrSearch", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('validateSelection'),
            __metadata("design:type", Function)
        ], jqxComboBoxComponent.prototype, "attrValidateSelection", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", String)
        ], jqxComboBoxComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxComboBoxComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onCheckChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxComboBoxComponent.prototype, "onUnselect", void 0);
        jqxComboBoxComponent = __decorate([
            core.Component({
                selector: 'jqxComboBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxComboBoxComponent);
        return jqxComboBoxComponent;
    }()); //jqxComboBoxComponent

    var jqxComboBoxModule = /** @class */ (function () {
        function jqxComboBoxModule() {
        }
        jqxComboBoxModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxComboBoxComponent],
                exports: [jqxComboBoxComponent]
            })
        ], jqxComboBoxModule);
        return jqxComboBoxModule;
    }());

    exports.jqxComboBoxComponent = jqxComboBoxComponent;
    exports.jqxComboBoxModule = jqxComboBoxModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxcombobox.umd.js.map
