import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () { });
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return jqxComboBoxComponent; })),
    multi: true
};
var jqxComboBoxComponent = /** @class */ (function () {
    function jqxComboBoxComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'height', 'itemHeight', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'source', 'scrollBarSize', 'template', 'theme', 'validateSelection', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComboBoxComponent events
        this.onBindingComplete = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
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
    ;
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
    ;
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
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    ;
    /**
     * @return {?}
     */
    jqxComboBoxComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
        this.host.on('checkChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCheckChange.emit(eventData); }));
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClose.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            if (eventData.args.item !== null)
                _this.onChangeCallback(eventData.args.item.value); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onOpen.emit(eventData); }));
        this.host.on('select', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSelect.emit(eventData); }));
        this.host.on('unselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUnselect.emit(eventData); }));
    };
    jqxComboBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxComboBox',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxComboBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxComboBoxComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAutoComplete: [{ type: Input, args: ['autoComplete',] }],
        attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
        attrAutoItemsHeight: [{ type: Input, args: ['autoItemsHeight',] }],
        attrAutoDropDownHeight: [{ type: Input, args: ['autoDropDownHeight',] }],
        attrCloseDelay: [{ type: Input, args: ['closeDelay',] }],
        attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
        attrDropDownHorizontalAlignment: [{ type: Input, args: ['dropDownHorizontalAlignment',] }],
        attrDropDownVerticalAlignment: [{ type: Input, args: ['dropDownVerticalAlignment',] }],
        attrDropDownHeight: [{ type: Input, args: ['dropDownHeight',] }],
        attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrEnableSelection: [{ type: Input, args: ['enableSelection',] }],
        attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
        attrItemHeight: [{ type: Input, args: ['itemHeight',] }],
        attrMultiSelect: [{ type: Input, args: ['multiSelect',] }],
        attrMinLength: [{ type: Input, args: ['minLength',] }],
        attrOpenDelay: [{ type: Input, args: ['openDelay',] }],
        attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrRemoteAutoComplete: [{ type: Input, args: ['remoteAutoComplete',] }],
        attrRemoteAutoCompleteDelay: [{ type: Input, args: ['remoteAutoCompleteDelay',] }],
        attrRenderer: [{ type: Input, args: ['renderer',] }],
        attrRenderSelectedItem: [{ type: Input, args: ['renderSelectedItem',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSelectedIndex: [{ type: Input, args: ['selectedIndex',] }],
        attrShowArrow: [{ type: Input, args: ['showArrow',] }],
        attrShowCloseButtons: [{ type: Input, args: ['showCloseButtons',] }],
        attrSearchMode: [{ type: Input, args: ['searchMode',] }],
        attrSearch: [{ type: Input, args: ['search',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValidateSelection: [{ type: Input, args: ['validateSelection',] }],
        attrValueMember: [{ type: Input, args: ['valueMember',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onBindingComplete: [{ type: Output }],
        onCheckChange: [{ type: Output }],
        onClose: [{ type: Output }],
        onChange: [{ type: Output }],
        onOpen: [{ type: Output }],
        onSelect: [{ type: Output }],
        onUnselect: [{ type: Output }]
    };
    return jqxComboBoxComponent;
}()); //jqxComboBoxComponent
export { jqxComboBoxComponent };
if (false) {
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrAutoComplete;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrAutoItemsHeight;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrAutoDropDownHeight;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrCloseDelay;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrCheckboxes;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDropDownHorizontalAlignment;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDropDownVerticalAlignment;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDropDownHeight;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrEnableSelection;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrItemHeight;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrMultiSelect;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrMinLength;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrOpenDelay;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrRemoteAutoComplete;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrRemoteAutoCompleteDelay;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrRenderer;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrRenderSelectedItem;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrRtl;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrSelectedIndex;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrShowCloseButtons;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrSearchMode;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrSearch;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrSource;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrTheme;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrValidateSelection;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrWidth;
    /** @type {?} */
    jqxComboBoxComponent.prototype.attrHeight;
    /** @type {?} */
    jqxComboBoxComponent.prototype.autoCreate;
    /** @type {?} */
    jqxComboBoxComponent.prototype.properties;
    /** @type {?} */
    jqxComboBoxComponent.prototype.host;
    /** @type {?} */
    jqxComboBoxComponent.prototype.elementRef;
    /** @type {?} */
    jqxComboBoxComponent.prototype.widgetObject;
    /** @type {?} */
    jqxComboBoxComponent.prototype.content;
    /** @type {?} */
    jqxComboBoxComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    jqxComboBoxComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxComboBoxComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onCheckChange;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onClose;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onChange;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onOpen;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onSelect;
    /** @type {?} */
    jqxComboBoxComponent.prototype.onUnselect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjb21ib2JveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjb21ib2JveC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y29tYm9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBbUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25MLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFbkUsSUFBSTs7O0FBQUcsY0FBUSxDQUFDLENBQUE7OztJQUdoQixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDZDtBQUVEO0lBOERHLDhCQUFZLGdCQUE0QjtRQVpsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLG9CQUFvQixFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyw2QkFBNkIsRUFBQywyQkFBMkIsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLDhCQUE4QixFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxvQkFBb0IsRUFBQyx5QkFBeUIsRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLFFB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QixpREFBa0Q7O0lBQ2xELDZDQUEyQzs7SUFDM0Msb0RBQXlEOztJQUN6RCw4Q0FBNEM7O0lBQzVDLDBDQUErRjs7SUFDL0YsMENBQWlDOztJQUNqQyxpREFBMkQ7O0lBQzNELDRDQUF3Qzs7SUFDeEMseUNBQWtDOztJQUNsQyxxREFBNkg7O0lBQzdILCtDQUE4Qzs7SUFDOUMseUNBQTJDOztJQUMzQywwQ0FBNkM7O0lBRTdDLDBDQUFpRDs7SUFFakQsMENBQWlvQjs7SUFDam9CLG9DQUFVOztJQUNWLDBDQUF1Qjs7SUFDdkIsNENBQXFDOztJQUVyQyx1Q0FBZ0I7O0lBQ2hCLHlDQUEwQjs7Ozs7SUFDMUIsaURBQTZDOzs7OztJQUM3QyxnREFBa0Q7O0lBc2hDbEQsaURBQWlEOztJQUNqRCw2Q0FBNkM7O0lBQzdDLHVDQUF1Qzs7SUFDdkMsd0NBQXdDOztJQUN4QyxzQ0FBc0M7O0lBQ3RDLHdDQUF3Qzs7SUFDeEMsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4ganF4Q29tYm9Cb3hDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4Q29tYm9Cb3gnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhDb21ib0JveENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQgXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhdXRvQ29tcGxldGUnKSBhdHRyQXV0b0NvbXBsZXRlOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvT3BlbicpIGF0dHJBdXRvT3BlbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b0l0ZW1zSGVpZ2h0JykgYXR0ckF1dG9JdGVtc0hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b0Ryb3BEb3duSGVpZ2h0JykgYXR0ckF1dG9Ecm9wRG93bkhlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2xvc2VEZWxheScpIGF0dHJDbG9zZURlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2NoZWNrYm94ZXMnKSBhdHRyQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc3BsYXlNZW1iZXInKSBhdHRyRGlzcGxheU1lbWJlcjogc3RyaW5nO1xuICAgQElucHV0KCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnKSBhdHRyRHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50OiBzdHJpbmc7XG4gICBASW5wdXQoJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnKSBhdHRyRHJvcERvd25WZXJ0aWNhbEFsaWdubWVudDogc3RyaW5nO1xuICAgQElucHV0KCdkcm9wRG93bkhlaWdodCcpIGF0dHJEcm9wRG93bkhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdkcm9wRG93bldpZHRoJykgYXR0ckRyb3BEb3duV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZVNlbGVjdGlvbicpIGF0dHJFbmFibGVTZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKSBhdHRyRW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaXRlbUhlaWdodCcpIGF0dHJJdGVtSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ211bHRpU2VsZWN0JykgYXR0ck11bHRpU2VsZWN0OiBib29sZWFuO1xuICAgQElucHV0KCdtaW5MZW5ndGgnKSBhdHRyTWluTGVuZ3RoOiBudW1iZXI7XG4gICBASW5wdXQoJ29wZW5EZWxheScpIGF0dHJPcGVuRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncG9wdXBaSW5kZXgnKSBhdHRyUG9wdXBaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgncGxhY2VIb2xkZXInKSBhdHRyUGxhY2VIb2xkZXI6IHN0cmluZztcbiAgIEBJbnB1dCgncmVtb3RlQXV0b0NvbXBsZXRlJykgYXR0clJlbW90ZUF1dG9Db21wbGV0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVtb3RlQXV0b0NvbXBsZXRlRGVsYXknKSBhdHRyUmVtb3RlQXV0b0NvbXBsZXRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncmVuZGVyZXInKSBhdHRyUmVuZGVyZXI6IChpbmRleD86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlcmVyWydpbmRleCddLCBsYWJlbD86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlcmVyWyd2YWx1ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3JlbmRlclNlbGVjdGVkSXRlbScpIGF0dHJSZW5kZXJTZWxlY3RlZEl0ZW06IChpbmRleD86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlclNlbGVjdGVkSXRlbVsnaW5kZXgnXSwgaXRlbT86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlclNlbGVjdGVkSXRlbVsnaXRlbSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGVkSW5kZXgnKSBhdHRyU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICAgQElucHV0KCdzaG93QXJyb3cnKSBhdHRyU2hvd0Fycm93OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Q2xvc2VCdXR0b25zJykgYXR0clNob3dDbG9zZUJ1dHRvbnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlYXJjaE1vZGUnKSBhdHRyU2VhcmNoTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzZWFyY2gnKSBhdHRyU2VhcmNoOiAoc2VhcmNoU3RyaW5nPzoganF3aWRnZXRzLkNvbWJvQm94U2VhcmNoWydzZWFyY2hTdHJpbmcnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCdzY3JvbGxCYXJTaXplJykgYXR0clNjcm9sbEJhclNpemU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgndGVtcGxhdGUnKSBhdHRyVGVtcGxhdGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndmFsaWRhdGVTZWxlY3Rpb24nKSBhdHRyVmFsaWRhdGVTZWxlY3Rpb246IChpdGVtVmFsdWU/OiBqcXdpZGdldHMuQ29tYm9Cb3hWYWxpZGF0ZVNlbGVjdGlvblsnaXRlbVZhbHVlJ10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uVHlwZScsJ2F1dG9Db21wbGV0ZScsJ2F1dG9PcGVuJywnYXV0b0l0ZW1zSGVpZ2h0JywnYXV0b0Ryb3BEb3duSGVpZ2h0JywnY2xvc2VEZWxheScsJ2NoZWNrYm94ZXMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXlNZW1iZXInLCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnLCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywnZHJvcERvd25IZWlnaHQnLCdkcm9wRG93bldpZHRoJywnZW5hYmxlSG92ZXInLCdlbmFibGVTZWxlY3Rpb24nLCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJywnaGVpZ2h0JywnaXRlbUhlaWdodCcsJ211bHRpU2VsZWN0JywnbWluTGVuZ3RoJywnb3BlbkRlbGF5JywncG9wdXBaSW5kZXgnLCdwbGFjZUhvbGRlcicsJ3JlbW90ZUF1dG9Db21wbGV0ZScsJ3JlbW90ZUF1dG9Db21wbGV0ZURlbGF5JywncmVuZGVyZXInLCdyZW5kZXJTZWxlY3RlZEl0ZW0nLCdydGwnLCdzZWxlY3RlZEluZGV4Jywnc2hvd0Fycm93Jywnc2hvd0Nsb3NlQnV0dG9ucycsJ3NlYXJjaE1vZGUnLCdzZWFyY2gnLCdzb3VyY2UnLCdzY3JvbGxCYXJTaXplJywndGVtcGxhdGUnLCd0aGVtZScsJ3ZhbGlkYXRlU2VsZWN0aW9uJywndmFsdWVNZW1iZXInLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhDb21ib0JveDtcblxuICAgY29udGVudDogU3RyaW5nO1xuICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICB9OyBcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICBsZXQgY2hpbGRyZW4gPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKS5maW5kKCdsaScpOyBcbiAgICAgICBsZXQgaHRtbCA9ICcnOyBcbiAgICAgICBsZXQgb3B0aW9ucyA9IHt9OyBcblxuICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIGh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBodG1sO1xuXG4gICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuaXRlbXM7ICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTsgXG4gICAgICB9XG4gICB9OyBcblxuIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goe3NvdXJjZTogcmVzdWx0Lml0ZW1zfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4Q29tYm9Cb3godGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeENvbWJvQm94KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4Q29tYm9Cb3gnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4Q29tYm9Cb3hDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uVHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2FuaW1hdGlvblR5cGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhbmltYXRpb25UeXBlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9Db21wbGV0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0NvbXBsZXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0NvbXBsZXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9PcGVuKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhdXRvT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2F1dG9PcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9JdGVtc0hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0l0ZW1zSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0l0ZW1zSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9Ecm9wRG93bkhlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0Ryb3BEb3duSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b0Ryb3BEb3duSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsb3NlRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjbG9zZURlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2xvc2VEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGVja2JveGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjaGVja2JveGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNwbGF5TWVtYmVyKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzcGxheU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Rpc3BsYXlNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duVmVydGljYWxBbGlnbm1lbnQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wRG93bkhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Ryb3BEb3duSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcERvd25XaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Ryb3BEb3duV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkcm9wRG93bldpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVNlbGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlU2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpdGVtSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnaXRlbUhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2l0ZW1IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbXVsdGlTZWxlY3QoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ211bHRpU2VsZWN0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnbXVsdGlTZWxlY3QnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluTGVuZ3RoKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnbWluTGVuZ3RoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnbWluTGVuZ3RoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9wZW5EZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ29wZW5EZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ29wZW5EZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3B1cFpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3BvcHVwWkluZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncG9wdXBaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGxhY2VIb2xkZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdwbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3BsYWNlSG9sZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbW90ZUF1dG9Db21wbGV0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVtb3RlQXV0b0NvbXBsZXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVtb3RlQXV0b0NvbXBsZXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbW90ZUF1dG9Db21wbGV0ZURlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVtb3RlQXV0b0NvbXBsZXRlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdyZW1vdGVBdXRvQ29tcGxldGVEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlcihhcmc/OiAoaW5kZXg/OiBqcXdpZGdldHMuQ29tYm9Cb3hSZW5kZXJlclsnaW5kZXgnXSwgbGFiZWw/OiBqcXdpZGdldHMuQ29tYm9Cb3hSZW5kZXJlclsnbGFiZWwnXSwgdmFsdWU/OiBqcXdpZGdldHMuQ29tYm9Cb3hSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nKTogKGluZGV4PzoganF3aWRnZXRzLkNvbWJvQm94UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkNvbWJvQm94UmVuZGVyZXJbJ2xhYmVsJ10sIHZhbHVlPzoganF3aWRnZXRzLkNvbWJvQm94UmVuZGVyZXJbJ3ZhbHVlJ10pID0+IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdyZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJTZWxlY3RlZEl0ZW0oYXJnPzogKGluZGV4PzoganF3aWRnZXRzLkNvbWJvQm94UmVuZGVyU2VsZWN0ZWRJdGVtWydpbmRleCddLCBpdGVtPzoganF3aWRnZXRzLkNvbWJvQm94UmVuZGVyU2VsZWN0ZWRJdGVtWydpdGVtJ10pID0+IHN0cmluZyk6IChpbmRleD86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlclNlbGVjdGVkSXRlbVsnaW5kZXgnXSwgaXRlbT86IGpxd2lkZ2V0cy5Db21ib0JveFJlbmRlclNlbGVjdGVkSXRlbVsnaXRlbSddKSA9PiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbmRlclNlbGVjdGVkSXRlbScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbmRlclNlbGVjdGVkSXRlbScpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZEluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc2VsZWN0ZWRJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlbGVjdGVkSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Fycm93KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzaG93QXJyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzaG93QXJyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Nsb3NlQnV0dG9ucyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc2hvd0Nsb3NlQnV0dG9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3Nob3dDbG9zZUJ1dHRvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VhcmNoTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlYXJjaE1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWFyY2hNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlYXJjaChhcmc/OiAoc2VhcmNoU3RyaW5nPzoganF3aWRnZXRzLkNvbWJvQm94U2VhcmNoWydzZWFyY2hTdHJpbmcnXSkgPT4gdm9pZCk6IChzZWFyY2hTdHJpbmc/OiBqcXdpZGdldHMuQ29tYm9Cb3hTZWFyY2hbJ3NlYXJjaFN0cmluZyddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWFyY2gnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWFyY2gnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc2Nyb2xsQmFyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbGlkYXRlU2VsZWN0aW9uKGFyZz86IChpdGVtVmFsdWU/OiBqcXdpZGdldHMuQ29tYm9Cb3hWYWxpZGF0ZVNlbGVjdGlvblsnaXRlbVZhbHVlJ10pID0+IGJvb2xlYW4pOiAoaXRlbVZhbHVlPzoganF3aWRnZXRzLkNvbWJvQm94VmFsaWRhdGVTZWxlY3Rpb25bJ2l0ZW1WYWx1ZSddKSA9PiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd2YWxpZGF0ZVNlbGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3ZhbGlkYXRlU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlTWVtYmVyKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndmFsdWVNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCd2YWx1ZU1lbWJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhDb21ib0JveENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZEl0ZW0oaXRlbTogYW55KTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2FkZEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xlYXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2xlYXInKTtcbiAgIH1cblxuICAgY2xvc2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2xvc2UnKTtcbiAgIH1cblxuICAgY2hlY2tJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2hlY2tJbmRleCcsIGluZGV4KTtcbiAgIH1cblxuICAgY2hlY2tJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2NoZWNrSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBjaGVja0FsbCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjaGVja0FsbCcpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZGlzYWJsZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzYWJsZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZGlzYWJsZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkaXNhYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGVuYWJsZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBlbmFibGVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Vuc3VyZVZpc2libGUnLCBpbmRleCk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldEl0ZW0oaW5kZXg6IG51bWJlcik6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2dldEl0ZW0nLCBpbmRleCk7XG4gICB9XG5cbiAgIGdldEl0ZW1CeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdnZXRJdGVtQnlWYWx1ZScsIHZhbHVlKTtcbiAgIH1cblxuICAgZ2V0VmlzaWJsZUl0ZW1zKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdnZXRWaXNpYmxlSXRlbXMnKTtcbiAgIH1cblxuICAgZ2V0SXRlbXMoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2dldEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldENoZWNrZWRJdGVtcygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0Q2hlY2tlZEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGVkSXRlbSgpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdnZXRTZWxlY3RlZEl0ZW0nKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0ZWRJdGVtcygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0U2VsZWN0ZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRTZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2dldFNlbGVjdGVkSW5kZXgnKTtcbiAgIH1cblxuICAgaW5zZXJ0QXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2luc2VydEF0JywgaXRlbSwgaW5kZXgpO1xuICAgfVxuXG4gICBpc09wZW5lZCgpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnaXNPcGVuZWQnKTtcbiAgIH1cblxuICAgaW5kZXRlcm1pbmF0ZUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdpbmRldGVybWluYXRlSW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIGluZGV0ZXJtaW5hdGVJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2luZGV0ZXJtaW5hdGVJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGxvYWRGcm9tU2VsZWN0KHNlbGVjdFRhZ0lkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdsb2FkRnJvbVNlbGVjdCcsIHNlbGVjdFRhZ0lkKTtcbiAgIH1cblxuICAgb3BlbigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdvcGVuJyk7XG4gICB9XG5cbiAgIHJlbW92ZUl0ZW0oaXRlbTogYW55KTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbW92ZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdyZW1vdmVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlbGVjdEluZGV4JywgaW5kZXgpO1xuICAgfVxuXG4gICBzZWxlY3RJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlbGVjdEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgc2VhcmNoU3RyaW5nKCk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlYXJjaFN0cmluZycpO1xuICAgfVxuXG4gICB1cGRhdGVJdGVtKGl0ZW06IGFueSwgaXRlbVZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1cGRhdGVJdGVtJywgaXRlbSwgaXRlbVZhbHVlKTtcbiAgIH1cblxuICAgdXBkYXRlQXQoaXRlbTogYW55LCBpbmRleDogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndXBkYXRlQXQnLCBpdGVtLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3Vuc2VsZWN0SW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bnNlbGVjdEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgdW5jaGVja0luZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bmNoZWNrSW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuY2hlY2tJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3VuY2hlY2tJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHVuY2hlY2tBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndW5jaGVja0FsbCcpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBzdHJpbmcpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4Q29tYm9Cb3hDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25CaW5kaW5nQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGVja0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoZWNrQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmKGV2ZW50RGF0YS5hcmdzKSBpZihldmVudERhdGEuYXJncy5pdGVtICE9PSBudWxsKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZXZlbnREYXRhLmFyZ3MuaXRlbS52YWx1ZSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4Q29tYm9Cb3hDb21wb25lbnRcbiJdfQ==