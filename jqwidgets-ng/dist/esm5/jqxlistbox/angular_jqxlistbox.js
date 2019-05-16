import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
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
    function () { return jqxListBoxComponent; })),
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
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.item.value); }));
        this.host.on('checkChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCheckChange.emit(eventData); }));
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDragStart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDragEnd.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhsaXN0Ym94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGxpc3Rib3gvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGxpc3Rib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBbUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25MLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFbkUsSUFBSTs7O0FBQUcsY0FBUSxDQUFDLENBQUE7OztJQUdoQixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDZDtBQUVEO0lBd0RHLDZCQUFZLGdCQUE0QjtRQVpsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsWUFBWSxFQUFDLG1CQUFtQixFQUFDLHdCQUF3QixFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxP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ZSxtQ0FBVTs7SUFDVix5Q0FBdUI7O0lBQ3ZCLDJDQUFvQzs7SUFFcEMsc0NBQWdCOztJQUNoQix3Q0FBMEI7Ozs7O0lBQzFCLGdEQUE2Qzs7Ozs7SUFDN0MsK0NBQWtEOztJQWk5QmxELGdEQUFpRDs7SUFDakQsdUNBQXdDOztJQUN4Qyw0Q0FBNkM7O0lBQzdDLDBDQUEyQzs7SUFDM0Msd0NBQXlDOztJQUN6Qyx1Q0FBd0M7O0lBQ3hDLHlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeExpc3RCb3hDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4TGlzdEJveCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIGpxeExpc3RCb3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIFxue1xuICAgQElucHV0KCdhdXRvSGVpZ2h0JykgYXR0ckF1dG9IZWlnaHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93RHJhZycpIGF0dHJBbGxvd0RyYWc6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93RHJvcCcpIGF0dHJBbGxvd0Ryb3A6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NoZWNrYm94ZXMnKSBhdHRyQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc3BsYXlNZW1iZXInKSBhdHRyRGlzcGxheU1lbWJlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdkcm9wQWN0aW9uJykgYXR0ckRyb3BBY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgnZHJhZ1N0YXJ0JykgYXR0ckRyYWdTdGFydDogKGl0ZW06anF3aWRnZXRzLkxpc3RCb3hEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZHJhZ0VuZCcpIGF0dHJEcmFnRW5kOiAoZHJhZ0l0ZW06IGpxd2lkZ2V0cy5MaXN0Qm94RHJhZ0VuZFsnZHJhZ0l0ZW0nXSwgZHJvcEl0ZW06IGpxd2lkZ2V0cy5MaXN0Qm94RHJhZ0VuZFsnZHJvcEl0ZW0nXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZVNlbGVjdGlvbicpIGF0dHJFbmFibGVTZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2VxdWFsSXRlbXNXaWR0aCcpIGF0dHJFcXVhbEl0ZW1zV2lkdGg6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlcmFibGUnKSBhdHRyRmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmlsdGVySGVpZ2h0JykgYXR0ckZpbHRlckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdmaWx0ZXJEZWxheScpIGF0dHJGaWx0ZXJEZWxheTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdmaWx0ZXJQbGFjZUhvbGRlcicpIGF0dHJGaWx0ZXJQbGFjZUhvbGRlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdoYXNUaHJlZVN0YXRlcycpIGF0dHJIYXNUaHJlZVN0YXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaXRlbUhlaWdodCcpIGF0dHJJdGVtSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2luY3JlbWVudGFsU2VhcmNoJykgYXR0ckluY3JlbWVudGFsU2VhcmNoOiBib29sZWFuO1xuICAgQElucHV0KCdpbmNyZW1lbnRhbFNlYXJjaERlbGF5JykgYXR0ckluY3JlbWVudGFsU2VhcmNoRGVsYXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnbXVsdGlwbGUnKSBhdHRyTXVsdGlwbGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ211bHRpcGxlZXh0ZW5kZWQnKSBhdHRyTXVsdGlwbGVleHRlbmRlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVuZGVyZXInKSBhdHRyUmVuZGVyZXI6IChpbmRleDoganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsnaW5kZXgnXSwgbGFiZWw6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ2xhYmVsJ10sIHZhbHVlOiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWyd2YWx1ZSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3JlbmRlcmVkJykgYXR0clJlbmRlcmVkOiAoKSA9PiBhbnk7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGVkSW5kZXgnKSBhdHRyU2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdzZWxlY3RlZEluZGV4ZXMnKSBhdHRyU2VsZWN0ZWRJbmRleGVzOiBhbnk7XG4gICBASW5wdXQoJ3NvdXJjZScpIGF0dHJTb3VyY2U6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ3Njcm9sbEJhclNpemUnKSBhdHRyU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdzZWFyY2hNb2RlJykgYXR0clNlYXJjaE1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndmFsdWVNZW1iZXInKSBhdHRyVmFsdWVNZW1iZXI6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhdXRvSGVpZ2h0JywnYWxsb3dEcmFnJywnYWxsb3dEcm9wJywnY2hlY2tib3hlcycsJ2Rpc2FibGVkJywnZGlzcGxheU1lbWJlcicsJ2Ryb3BBY3Rpb24nLCdkcmFnU3RhcnQnLCdkcmFnRW5kJywnZW5hYmxlSG92ZXInLCdlbmFibGVTZWxlY3Rpb24nLCdlcXVhbEl0ZW1zV2lkdGgnLCdmaWx0ZXJhYmxlJywnZmlsdGVySGVpZ2h0JywnZmlsdGVyRGVsYXknLCdmaWx0ZXJQbGFjZUhvbGRlcicsJ2hlaWdodCcsJ2hhc1RocmVlU3RhdGVzJywnaXRlbUhlaWdodCcsJ2luY3JlbWVudGFsU2VhcmNoJywnaW5jcmVtZW50YWxTZWFyY2hEZWxheScsJ211bHRpcGxlJywnbXVsdGlwbGVleHRlbmRlZCcsJ3JlbmRlcmVyJywncmVuZGVyZWQnLCdydGwnLCdzZWxlY3RlZEluZGV4Jywnc2VsZWN0ZWRJbmRleGVzJywnc291cmNlJywnc2Nyb2xsQmFyU2l6ZScsJ3NlYXJjaE1vZGUnLCd0aGVtZScsJ3ZhbHVlTWVtYmVyJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4TGlzdEJveDtcblxuICAgY29udGVudDogU3RyaW5nO1xuICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICB9OyBcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICBsZXQgY2hpbGRyZW4gPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKS5maW5kKCdsaScpOyBcbiAgICAgICBsZXQgaHRtbCA9ICcnOyBcbiAgICAgICBsZXQgb3B0aW9ucyA9IHt9OyBcblxuICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIGh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBodG1sO1xuXG4gICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuaXRlbXM7ICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTsgXG4gICAgICB9XG4gICB9OyBcblxuIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCh7c291cmNlOiByZXN1bHQuaXRlbXN9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9O1xuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhMaXN0Qm94KHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeExpc3RCb3godGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3godGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeExpc3RCb3gnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhMaXN0Qm94Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGF1dG9IZWlnaHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnYXV0b0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnYXV0b0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd0RyYWcoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnYWxsb3dEcmFnJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdhbGxvd0RyYWcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dEcm9wKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2FsbG93RHJvcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnYWxsb3dEcm9wJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoZWNrYm94ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2hlY2tib3hlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzcGxheU1lbWJlcihhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGlzcGxheU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGlzcGxheU1lbWJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wQWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkcm9wQWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkcm9wQWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdTdGFydChhcmc/OiAoaXRlbTpqcXdpZGdldHMuTGlzdEJveERyYWdTdGFydFsnaXRlbSddKSA9PiBib29sZWFuKTogKGl0ZW06anF3aWRnZXRzLkxpc3RCb3hEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkcmFnU3RhcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2RyYWdTdGFydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnRW5kKGFyZz86IChkcmFnSXRlbToganF3aWRnZXRzLkxpc3RCb3hEcmFnRW5kWydkcmFnSXRlbSddLCBkcm9wSXRlbToganF3aWRnZXRzLkxpc3RCb3hEcmFnRW5kWydkcm9wSXRlbSddKSA9PiBib29sZWFuKTogKGRyYWdJdGVtOiBqcXdpZGdldHMuTGlzdEJveERyYWdFbmRbJ2RyYWdJdGVtJ10sIGRyb3BJdGVtOiBqcXdpZGdldHMuTGlzdEJveERyYWdFbmRbJ2Ryb3BJdGVtJ10pID0+IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZHJhZ0VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZHJhZ0VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZW5hYmxlSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlU2VsZWN0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuYWJsZVNlbGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZW5hYmxlU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVxdWFsSXRlbXNXaWR0aChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlcXVhbEl0ZW1zV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VxdWFsSXRlbXNXaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlcmFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlcmFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJEZWxheShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZmlsdGVyRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlckRlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlclBsYWNlSG9sZGVyKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJQbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZmlsdGVyUGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoYXNUaHJlZVN0YXRlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdoYXNUaHJlZVN0YXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnaGFzVGhyZWVTdGF0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXRlbUhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaXRlbUhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnaXRlbUhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbmNyZW1lbnRhbFNlYXJjaChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdpbmNyZW1lbnRhbFNlYXJjaCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5jcmVtZW50YWxTZWFyY2gnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2hEZWxheShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5jcmVtZW50YWxTZWFyY2hEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5jcmVtZW50YWxTZWFyY2hEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBtdWx0aXBsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdtdWx0aXBsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnbXVsdGlwbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbXVsdGlwbGVleHRlbmRlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdtdWx0aXBsZWV4dGVuZGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdtdWx0aXBsZWV4dGVuZGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmVyKGFyZz86IChpbmRleDoganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsnaW5kZXgnXSwgbGFiZWw6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ2xhYmVsJ10sIHZhbHVlOiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWyd2YWx1ZSddKSA9PiBzdHJpbmcpOiAoaW5kZXg6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsOiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZToganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdyZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlZChhcmc/OiAoKSA9PiBhbnkpOiAoKSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgncmVuZGVyZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbmRlcmVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZEluZGV4KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzZWxlY3RlZEluZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzZWxlY3RlZEluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGVkSW5kZXhlcyhhcmc/OiBhbnkpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0ZWRJbmRleGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzZWxlY3RlZEluZGV4ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3Njcm9sbEJhclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3Njcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VhcmNoTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VhcmNoTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VhcmNoTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlTWVtYmVyKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd2YWx1ZU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgndmFsdWVNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeExpc3RCb3hDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGRJdGVtKEl0ZW06IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2FkZEl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdiZWdpblVwZGF0ZScpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2NsZWFyJyk7XG4gICB9XG5cbiAgIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2hlY2tJbmRleChJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdjaGVja0luZGV4JywgSW5kZXgpO1xuICAgfVxuXG4gICBjaGVja0l0ZW0oSXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdjaGVja0l0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgY2hlY2tBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdjaGVja0FsbCcpO1xuICAgfVxuXG4gICBjbGVhckZpbHRlcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2NsZWFyRmlsdGVyJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGRpc2FibGVJdGVtKEl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGlzYWJsZUl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgZGlzYWJsZUF0KEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2Rpc2FibGVBdCcsIEluZGV4KTtcbiAgIH1cblxuICAgZW5hYmxlSXRlbShJdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuYWJsZUl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgZW5hYmxlQXQoSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZW5hYmxlQXQnLCBJbmRleCk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlbnN1cmVWaXNpYmxlJywgaXRlbSk7XG4gICB9XG5cbiAgIGVuZFVwZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuZFVwZGF0ZScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldEl0ZW1zKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2dldEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGVkSXRlbXMoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZ2V0U2VsZWN0ZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRDaGVja2VkSXRlbXMoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZ2V0Q2hlY2tlZEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldEl0ZW0oSW5kZXg6IG51bWJlcik6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZ2V0SXRlbScsIEluZGV4KTtcbiAgIH1cblxuICAgZ2V0SXRlbUJ5VmFsdWUoSXRlbTogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdnZXRJdGVtQnlWYWx1ZScsIEl0ZW0pO1xuICAgfVxuXG4gICBnZXRTZWxlY3RlZEl0ZW0oKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdnZXRTZWxlY3RlZEl0ZW0nKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2dldFNlbGVjdGVkSW5kZXgnKTtcbiAgIH1cblxuICAgaW5zZXJ0QXQoSXRlbTogYW55LCBJbmRleDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdpbnNlcnRBdCcsIEl0ZW0sIEluZGV4KTtcbiAgIH1cblxuICAgaW52YWxpZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ludmFsaWRhdGUnKTtcbiAgIH1cblxuICAgaW5kZXRlcm1pbmF0ZUl0ZW0oSXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdpbmRldGVybWluYXRlSXRlbScsIEl0ZW0pO1xuICAgfVxuXG4gICBpbmRldGVybWluYXRlSW5kZXgoSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5kZXRlcm1pbmF0ZUluZGV4JywgSW5kZXgpO1xuICAgfVxuXG4gICBsb2FkRnJvbVNlbGVjdChzZWxlY3Rvcjogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdsb2FkRnJvbVNlbGVjdCcsIHNlbGVjdG9yKTtcbiAgIH1cblxuICAgcmVtb3ZlSXRlbShJdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbW92ZUl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgncmVtb3ZlQXQnLCBJbmRleCk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZWxlY3RJdGVtKEl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0SXRlbScsIEl0ZW0pO1xuICAgfVxuXG4gICBzZWxlY3RJbmRleChJbmRleDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzZWxlY3RJbmRleCcsIEluZGV4KTtcbiAgIH1cblxuICAgdXBkYXRlSXRlbShJdGVtOiBhbnksIFZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3VwZGF0ZUl0ZW0nLCBJdGVtLCBWYWx1ZSk7XG4gICB9XG5cbiAgIHVwZGF0ZUF0KGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndXBkYXRlQXQnLCBpdGVtLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndW5zZWxlY3RJbmRleCcsIGluZGV4KTtcbiAgIH1cblxuICAgdW5zZWxlY3RJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndW5zZWxlY3RJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHVuY2hlY2tJbmRleChpbmRleDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd1bmNoZWNrSW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuY2hlY2tJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndW5jaGVja0l0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgdW5jaGVja0FsbCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3VuY2hlY2tBbGwnKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhMaXN0Qm94Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdiaW5kaW5nQ29tcGxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJpbmRpbmdDb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLml0ZW0udmFsdWUpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoZWNrQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdTdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdFbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdFbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndW5zZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhMaXN0Qm94Q29tcG9uZW50XG4iXX0=