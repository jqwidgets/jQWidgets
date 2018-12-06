import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxListBoxComponent; }),
    multi: true
};
var jqxListBoxComponent = /** @class */ (function () {
    function jqxListBoxComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxListBoxComponent events
        this.onBindingComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
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
    ;
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
    ;
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
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    ;
    /**
     * @return {?}
     */
    jqxListBoxComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.item.value); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    jqxListBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxListBox',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxListBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxListBoxComponent.propDecorators = {
        attrAutoHeight: [{ type: Input, args: ['autoHeight',] }],
        attrAllowDrag: [{ type: Input, args: ['allowDrag',] }],
        attrAllowDrop: [{ type: Input, args: ['allowDrop',] }],
        attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
        attrDropAction: [{ type: Input, args: ['dropAction',] }],
        attrDragStart: [{ type: Input, args: ['dragStart',] }],
        attrDragEnd: [{ type: Input, args: ['dragEnd',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrEnableSelection: [{ type: Input, args: ['enableSelection',] }],
        attrEqualItemsWidth: [{ type: Input, args: ['equalItemsWidth',] }],
        attrFilterable: [{ type: Input, args: ['filterable',] }],
        attrFilterHeight: [{ type: Input, args: ['filterHeight',] }],
        attrFilterDelay: [{ type: Input, args: ['filterDelay',] }],
        attrFilterPlaceHolder: [{ type: Input, args: ['filterPlaceHolder',] }],
        attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
        attrItemHeight: [{ type: Input, args: ['itemHeight',] }],
        attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
        attrIncrementalSearchDelay: [{ type: Input, args: ['incrementalSearchDelay',] }],
        attrMultiple: [{ type: Input, args: ['multiple',] }],
        attrMultipleextended: [{ type: Input, args: ['multipleextended',] }],
        attrRenderer: [{ type: Input, args: ['renderer',] }],
        attrRendered: [{ type: Input, args: ['rendered',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSelectedIndex: [{ type: Input, args: ['selectedIndex',] }],
        attrSelectedIndexes: [{ type: Input, args: ['selectedIndexes',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
        attrSearchMode: [{ type: Input, args: ['searchMode',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValueMember: [{ type: Input, args: ['valueMember',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onBindingComplete: [{ type: Output }],
        onChange: [{ type: Output }],
        onCheckChange: [{ type: Output }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onSelect: [{ type: Output }],
        onUnselect: [{ type: Output }]
    };
    return jqxListBoxComponent;
}()); //jqxListBoxComponent
export { jqxListBoxComponent };
if (false) {
    /** @type {?} */
    jqxListBoxComponent.prototype.attrAutoHeight;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrAllowDrag;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrAllowDrop;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrCheckboxes;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrDropAction;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrDragStart;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrDragEnd;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrEnableSelection;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrEqualItemsWidth;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrFilterable;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrFilterHeight;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrFilterDelay;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrFilterPlaceHolder;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrItemHeight;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrIncrementalSearch;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrIncrementalSearchDelay;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrMultiple;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrMultipleextended;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrRenderer;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrRendered;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrRtl;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrSelectedIndex;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrSelectedIndexes;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrSource;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrSearchMode;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrTheme;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrWidth;
    /** @type {?} */
    jqxListBoxComponent.prototype.attrHeight;
    /** @type {?} */
    jqxListBoxComponent.prototype.autoCreate;
    /** @type {?} */
    jqxListBoxComponent.prototype.properties;
    /** @type {?} */
    jqxListBoxComponent.prototype.host;
    /** @type {?} */
    jqxListBoxComponent.prototype.elementRef;
    /** @type {?} */
    jqxListBoxComponent.prototype.widgetObject;
    /** @type {?} */
    jqxListBoxComponent.prototype.content;
    /** @type {?} */
    jqxListBoxComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    jqxListBoxComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxListBoxComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxListBoxComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxListBoxComponent.prototype.onChange;
    /** @type {?} */
    jqxListBoxComponent.prototype.onCheckChange;
    /** @type {?} */
    jqxListBoxComponent.prototype.onDragStart;
    /** @type {?} */
    jqxListBoxComponent.prototype.onDragEnd;
    /** @type {?} */
    jqxListBoxComponent.prototype.onSelect;
    /** @type {?} */
    jqxListBoxComponent.prototype.onUnselect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
