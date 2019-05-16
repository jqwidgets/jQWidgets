import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => jqxDropDownListComponent)),
    multi: true
};
export class jqxDropDownListComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDropDownListComponent events
        this.onBindingComplete = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let children = JQXLite(this.elementRef.nativeElement.children).find('li');
        /** @type {?} */
        let html = '';
        /** @type {?} */
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            /** @type {?} */
            let result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                /** @type {?} */
                let result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxDropDownList({ source: result.items });
            }
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
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
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
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
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxDropDownList('setOptions', options);
    }
    // jqxDropDownListComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoOpen(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownList('autoOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoDropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoDropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('autoDropDownHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('animationType', arg);
        }
        else {
            return this.host.jqxDropDownList('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('checkboxes', arg);
        }
        else {
            return this.host.jqxDropDownList('checkboxes');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('closeDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('disabled', arg);
        }
        else {
            return this.host.jqxDropDownList('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('displayMember', arg);
        }
        else {
            return this.host.jqxDropDownList('displayMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownHorizontalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHorizontalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownVerticalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownVerticalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableSelection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableSelection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableBrowserBoundsDetection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableBrowserBoundsDetection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableHover', arg);
        }
        else {
            return this.host.jqxDropDownList('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterable', arg);
        }
        else {
            return this.host.jqxDropDownList('filterable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('filterHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('filterDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterPlaceHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('filterPlaceHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('height', arg);
        }
        else {
            return this.host.jqxDropDownList('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearch', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearch');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    incrementalSearchDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearchDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    itemHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('itemHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('itemHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    openDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('openDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('placeHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('rtl', arg);
        }
        else {
            return this.host.jqxDropDownList('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('renderer', arg);
        }
        else {
            return this.host.jqxDropDownList('renderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectionRenderer', arg);
        }
        else {
            return this.host.jqxDropDownList('selectionRenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    searchMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('searchMode', arg);
        }
        else {
            return this.host.jqxDropDownList('searchMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('source', arg);
        }
        else {
            return this.host.jqxDropDownList('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectedIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('selectedIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('theme', arg);
        }
        else {
            return this.host.jqxDropDownList('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('template', arg);
        }
        else {
            return this.host.jqxDropDownList('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    valueMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('valueMember', arg);
        }
        else {
            return this.host.jqxDropDownList('valueMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('width', arg);
        }
        else {
            return this.host.jqxDropDownList('width');
        }
    }
    // jqxDropDownListComponent functions
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('addItem', item);
    }
    /**
     * @return {?}
     */
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearSelection');
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clear');
    }
    /**
     * @return {?}
     */
    close() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('close');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    checkIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    checkItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkItem', item);
    }
    /**
     * @return {?}
     */
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkAll');
    }
    /**
     * @return {?}
     */
    clearFilter() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearFilter');
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('destroy');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    disableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableItem', item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    disableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableAt', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    enableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableItem', item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    enableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ensureVisible(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('ensureVisible', index);
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('focus');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getItem(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItem', index);
    }
    /**
     * @param {?} itemValue
     * @return {?}
     */
    getItemByValue(itemValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItemByValue', itemValue);
    }
    /**
     * @return {?}
     */
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItems');
    }
    /**
     * @return {?}
     */
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getCheckedItems');
    }
    /**
     * @return {?}
     */
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedItem');
    }
    /**
     * @return {?}
     */
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedIndex');
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    insertAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('insertAt', item, index);
    }
    /**
     * @return {?}
     */
    isOpened() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('isOpened');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    indeterminateIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    indeterminateItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateItem', item);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    loadFromSelect(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('loadFromSelect', arg);
    }
    /**
     * @return {?}
     */
    open() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('open');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeItem', item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectItem', item);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('setContent', content);
    }
    /**
     * @param {?} newItem
     * @param {?} item
     * @return {?}
     */
    updateItem(newItem, item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateItem', newItem, item);
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    updateAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateAt', item, index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectItem', item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckItem', item);
    }
    /**
     * @return {?}
     */
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckAll');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxDropDownList('val', value);
        }
        else {
            return this.host.jqxDropDownList('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingComplete.emit(eventData); }));
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onClose.emit(eventData); }));
        this.host.on('checkChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCheckChange.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.item.value); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOpen.emit(eventData); }));
        this.host.on('select', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSelect.emit(eventData); }));
        this.host.on('unselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUnselect.emit(eventData); }));
    }
} //jqxDropDownListComponent
jqxDropDownListComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDropDownList',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxDropDownListComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDropDownListComponent.propDecorators = {
    attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
    attrAutoDropDownHeight: [{ type: Input, args: ['autoDropDownHeight',] }],
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
    attrCloseDelay: [{ type: Input, args: ['closeDelay',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
    attrDropDownHorizontalAlignment: [{ type: Input, args: ['dropDownHorizontalAlignment',] }],
    attrDropDownVerticalAlignment: [{ type: Input, args: ['dropDownVerticalAlignment',] }],
    attrDropDownHeight: [{ type: Input, args: ['dropDownHeight',] }],
    attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
    attrEnableSelection: [{ type: Input, args: ['enableSelection',] }],
    attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrFilterable: [{ type: Input, args: ['filterable',] }],
    attrFilterHeight: [{ type: Input, args: ['filterHeight',] }],
    attrFilterDelay: [{ type: Input, args: ['filterDelay',] }],
    attrFilterPlaceHolder: [{ type: Input, args: ['filterPlaceHolder',] }],
    attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
    attrIncrementalSearchDelay: [{ type: Input, args: ['incrementalSearchDelay',] }],
    attrItemHeight: [{ type: Input, args: ['itemHeight',] }],
    attrOpenDelay: [{ type: Input, args: ['openDelay',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrRenderer: [{ type: Input, args: ['renderer',] }],
    attrSelectionRenderer: [{ type: Input, args: ['selectionRenderer',] }],
    attrSearchMode: [{ type: Input, args: ['searchMode',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrSelectedIndex: [{ type: Input, args: ['selectedIndex',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrValueMember: [{ type: Input, args: ['valueMember',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onBindingComplete: [{ type: Output }],
    onClose: [{ type: Output }],
    onCheckChange: [{ type: Output }],
    onChange: [{ type: Output }],
    onOpen: [{ type: Output }],
    onSelect: [{ type: Output }],
    onUnselect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrAutoDropDownHeight;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrCheckboxes;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrCloseDelay;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDropDownHorizontalAlignment;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDropDownVerticalAlignment;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDropDownHeight;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrEnableSelection;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrFilterable;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrFilterHeight;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrFilterDelay;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrFilterPlaceHolder;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrIncrementalSearch;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrIncrementalSearchDelay;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrItemHeight;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrOpenDelay;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrRenderer;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrSelectionRenderer;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrSearchMode;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrSource;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrSelectedIndex;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDropDownListComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDropDownListComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDropDownListComponent.prototype.properties;
    /** @type {?} */
    jqxDropDownListComponent.prototype.host;
    /** @type {?} */
    jqxDropDownListComponent.prototype.elementRef;
    /** @type {?} */
    jqxDropDownListComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDropDownListComponent.prototype.content;
    /** @type {?} */
    jqxDropDownListComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    jqxDropDownListComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxDropDownListComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onClose;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onCheckChange;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onChange;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onOpen;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onSelect;
    /** @type {?} */
    jqxDropDownListComponent.prototype.onUnselect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcm9wZG93bmxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4ZHJvcGRvd25saXN0LyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhkcm9wZG93bmxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFtQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkwsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVuRSxJQUFJOzs7QUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7OztNQUdoQixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztJQUN2RCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBU0QsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQWtEbEMsWUFBWSxnQkFBNEI7UUFabEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyw2QkFBNkIsRUFBQywyQkFBMkIsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsOEJBQThCLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyx3QkFBd0IsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMs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Qzs7SUFDNUMsOENBQXdDOztJQUN4QyxxREFBa0Q7O0lBQ2xELDZDQUFrQzs7SUFDbEMsZ0RBQXdDOztJQUN4QyxtREFBOEM7O0lBQzlDLDZDQUEyQzs7SUFDM0MsOENBQTZDOztJQUU3Qyw4Q0FBaUQ7O0lBRWpELDhDQUFxakI7O0lBQ3JqQix3Q0FBVTs7SUFDViw4Q0FBdUI7O0lBQ3ZCLGdEQUF5Qzs7SUFFekMsMkNBQWdCOztJQUNoQiw2Q0FBMEI7Ozs7O0lBQzFCLHFEQUE2Qzs7Ozs7SUFDN0Msb0RBQWtEOztJQTQ4QmxELHFEQUFpRDs7SUFDakQsMkNBQXVDOztJQUN2QyxpREFBNkM7O0lBQzdDLDRDQUF3Qzs7SUFDeEMsMENBQXNDOztJQUN0Qyw0Q0FBd0M7O0lBQ3hDLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeERyb3BEb3duTGlzdENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEcm9wRG93bkxpc3QnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEcm9wRG93bkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIFxue1xuICAgQElucHV0KCdhdXRvT3BlbicpIGF0dHJBdXRvT3BlbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b0Ryb3BEb3duSGVpZ2h0JykgYXR0ckF1dG9Ecm9wRG93bkhlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYW5pbWF0aW9uVHlwZScpIGF0dHJBbmltYXRpb25UeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2NoZWNrYm94ZXMnKSBhdHRyQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2xvc2VEZWxheScpIGF0dHJDbG9zZURlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNwbGF5TWVtYmVyJykgYXR0ckRpc3BsYXlNZW1iZXI6IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JykgYXR0ckRyb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudDogc3RyaW5nO1xuICAgQElucHV0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JykgYXR0ckRyb3BEb3duVmVydGljYWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd25IZWlnaHQnKSBhdHRyRHJvcERvd25IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd25XaWR0aCcpIGF0dHJEcm9wRG93bldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2VuYWJsZVNlbGVjdGlvbicpIGF0dHJFbmFibGVTZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKSBhdHRyRW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlcmFibGUnKSBhdHRyRmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmlsdGVySGVpZ2h0JykgYXR0ckZpbHRlckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdmaWx0ZXJEZWxheScpIGF0dHJGaWx0ZXJEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdmaWx0ZXJQbGFjZUhvbGRlcicpIGF0dHJGaWx0ZXJQbGFjZUhvbGRlcjogc3RyaW5nO1xuICAgQElucHV0KCdpbmNyZW1lbnRhbFNlYXJjaCcpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaW5jcmVtZW50YWxTZWFyY2hEZWxheScpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaERlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2l0ZW1IZWlnaHQnKSBhdHRySXRlbUhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdvcGVuRGVsYXknKSBhdHRyT3BlbkRlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ3BsYWNlSG9sZGVyJykgYXR0clBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BvcHVwWkluZGV4JykgYXR0clBvcHVwWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JlbmRlcmVyJykgYXR0clJlbmRlcmVyOiAoaW5kZXg/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdzZWxlY3Rpb25SZW5kZXJlcicpIGF0dHJTZWxlY3Rpb25SZW5kZXJlcjogKGVsZW1lbnQ/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2VsZW1lbnQnXSwgaW5kZXg/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFNlbGVjdGlvblJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RTZWxlY3Rpb25SZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdzZWFyY2hNb2RlJykgYXR0clNlYXJjaE1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgnc2VsZWN0ZWRJbmRleCcpIGF0dHJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RlbXBsYXRlJykgYXR0clRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXV0b09wZW4nLCdhdXRvRHJvcERvd25IZWlnaHQnLCdhbmltYXRpb25UeXBlJywnY2hlY2tib3hlcycsJ2Nsb3NlRGVsYXknLCdkaXNhYmxlZCcsJ2Rpc3BsYXlNZW1iZXInLCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnLCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywnZHJvcERvd25IZWlnaHQnLCdkcm9wRG93bldpZHRoJywnZW5hYmxlU2VsZWN0aW9uJywnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicsJ2VuYWJsZUhvdmVyJywnZmlsdGVyYWJsZScsJ2ZpbHRlckhlaWdodCcsJ2ZpbHRlckRlbGF5JywnZmlsdGVyUGxhY2VIb2xkZXInLCdoZWlnaHQnLCdpbmNyZW1lbnRhbFNlYXJjaCcsJ2luY3JlbWVudGFsU2VhcmNoRGVsYXknLCdpdGVtSGVpZ2h0Jywnb3BlbkRlbGF5JywncGxhY2VIb2xkZXInLCdwb3B1cFpJbmRleCcsJ3J0bCcsJ3JlbmRlcmVyJywnc2VsZWN0aW9uUmVuZGVyZXInLCdzZWFyY2hNb2RlJywnc291cmNlJywnc2VsZWN0ZWRJbmRleCcsJ3RoZW1lJywndGVtcGxhdGUnLCd2YWx1ZU1lbWJlcicsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeERyb3BEb3duTGlzdDtcblxuICAgY29udGVudDogU3RyaW5nO1xuICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICB9OyBcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICBsZXQgY2hpbGRyZW4gPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKS5maW5kKCdsaScpOyBcbiAgICAgICBsZXQgaHRtbCA9ICcnOyBcbiAgICAgICBsZXQgb3B0aW9ucyA9IHt9OyBcblxuICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIGh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBodG1sO1xuXG4gICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuaXRlbXM7ICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTsgXG4gICAgICB9XG4gICB9OyBcblxuIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KHtzb3VyY2U6IHJlc3VsdC5pdGVtc30pO1xuICAgICAgICB9XG4gICAgfVxuICAgIH07XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhEcm9wRG93bkxpc3QnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERyb3BEb3duTGlzdENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhdXRvT3Blbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2F1dG9PcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2F1dG9PcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9Ecm9wRG93bkhlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2F1dG9Ecm9wRG93bkhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdhdXRvRHJvcERvd25IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uVHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hlY2tib3hlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2NoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnY2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZURlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2Nsb3NlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnY2xvc2VEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3BsYXlNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZGlzcGxheU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdkaXNwbGF5TWVtYmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duVmVydGljYWxBbGlnbm1lbnQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duSGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2Ryb3BEb3duSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2Ryb3BEb3duSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duV2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZHJvcERvd25XaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdkcm9wRG93bldpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVNlbGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2VuYWJsZVNlbGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdlbmFibGVTZWxlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcmFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdmaWx0ZXJhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2ZpbHRlcmFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2ZpbHRlckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdmaWx0ZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZmlsdGVyRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZmlsdGVyRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyUGxhY2VIb2xkZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZmlsdGVyUGxhY2VIb2xkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZmlsdGVyUGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2goYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdpbmNyZW1lbnRhbFNlYXJjaCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdpbmNyZW1lbnRhbFNlYXJjaCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbmNyZW1lbnRhbFNlYXJjaERlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2luY3JlbWVudGFsU2VhcmNoRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaW5jcmVtZW50YWxTZWFyY2hEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBpdGVtSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2l0ZW1IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaXRlbUhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcGVuRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnb3BlbkRlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ29wZW5EZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwbGFjZUhvbGRlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdwbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdwbGFjZUhvbGRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3B1cFpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdwb3B1cFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdwb3B1cFpJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmVyKGFyZz86IChpbmRleD86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RSZW5kZXJlclsnaW5kZXgnXSwgbGFiZWw/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0UmVuZGVyZXJbJ2xhYmVsJ10sIHZhbHVlPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFJlbmRlcmVyWyd2YWx1ZSddKSA9PiBzdHJpbmcpOiAoaW5kZXg/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgncmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgncmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uUmVuZGVyZXIoYXJnPzogKGVsZW1lbnQ/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2VsZW1lbnQnXSwgaW5kZXg/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFNlbGVjdGlvblJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RTZWxlY3Rpb25SZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nKTogKGVsZW1lbnQ/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2VsZW1lbnQnXSwgaW5kZXg/OiBqcXdpZGdldHMuRHJvcERvd25MaXN0U2VsZWN0aW9uUmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsPzoganF3aWRnZXRzLkRyb3BEb3duTGlzdFNlbGVjdGlvblJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZT86IGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RTZWxlY3Rpb25SZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnc2VsZWN0aW9uUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnc2VsZWN0aW9uUmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VhcmNoTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdzZWFyY2hNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3NlYXJjaE1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZEluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3NlbGVjdGVkSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnc2VsZWN0ZWRJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZU1lbWJlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd2YWx1ZU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd2YWx1ZU1lbWJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeERyb3BEb3duTGlzdENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZEl0ZW0oaXRlbToganF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2FkZEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2NsZWFyU2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGNsZWFyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdjbGVhcicpO1xuICAgfVxuXG4gICBjbG9zZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnY2xvc2UnKTtcbiAgIH1cblxuICAgY2hlY2tJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2NoZWNrSW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIGNoZWNrSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnY2hlY2tJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGNoZWNrQWxsKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdjaGVja0FsbCcpO1xuICAgfVxuXG4gICBjbGVhckZpbHRlcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnY2xlYXJGaWx0ZXInKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkaXNhYmxlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZGlzYWJsZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZGlzYWJsZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZGlzYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBlbmFibGVJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdlbmFibGVJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGVuYWJsZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZW5hYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdlbnN1cmVWaXNpYmxlJywgaW5kZXgpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0SXRlbShpbmRleDogbnVtYmVyKToganF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZ2V0SXRlbScsIGluZGV4KTtcbiAgIH1cblxuICAgZ2V0SXRlbUJ5VmFsdWUoaXRlbVZhbHVlOiBzdHJpbmcpOiBqcXdpZGdldHMuRHJvcERvd25MaXN0SXRlbSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdnZXRJdGVtQnlWYWx1ZScsIGl0ZW1WYWx1ZSk7XG4gICB9XG5cbiAgIGdldEl0ZW1zKCk6IEFycmF5PGpxd2lkZ2V0cy5Ecm9wRG93bkxpc3RJdGVtPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdnZXRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRDaGVja2VkSXRlbXMoKTogQXJyYXk8anF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2dldENoZWNrZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRTZWxlY3RlZEl0ZW0oKToganF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnZ2V0U2VsZWN0ZWRJdGVtJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ2dldFNlbGVjdGVkSW5kZXgnKTtcbiAgIH1cblxuICAgaW5zZXJ0QXQoaXRlbToganF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaW5zZXJ0QXQnLCBpdGVtLCBpbmRleCk7XG4gICB9XG5cbiAgIGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaXNPcGVuZWQnKTtcbiAgIH1cblxuICAgaW5kZXRlcm1pbmF0ZUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaW5kZXRlcm1pbmF0ZUluZGV4JywgaW5kZXgpO1xuICAgfVxuXG4gICBpbmRldGVybWluYXRlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnaW5kZXRlcm1pbmF0ZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgbG9hZEZyb21TZWxlY3QoYXJnOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgnbG9hZEZyb21TZWxlY3QnLCBhcmcpO1xuICAgfVxuXG4gICBvcGVuKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdvcGVuJyk7XG4gICB9XG5cbiAgIHJlbW92ZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3JlbW92ZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdyZW1vdmVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdzZWxlY3RJbmRleCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2VsZWN0SXRlbShpdGVtOiBqcXdpZGdldHMuRHJvcERvd25MaXN0SXRlbSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCdzZWxlY3RJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3NldENvbnRlbnQnLCBjb250ZW50KTtcbiAgIH1cblxuICAgdXBkYXRlSXRlbShuZXdJdGVtOiBqcXdpZGdldHMuRHJvcERvd25MaXN0SXRlbSwgaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3VwZGF0ZUl0ZW0nLCBuZXdJdGVtLCBpdGVtKTtcbiAgIH1cblxuICAgdXBkYXRlQXQoaXRlbToganF3aWRnZXRzLkRyb3BEb3duTGlzdEl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgndXBkYXRlQXQnLCBpdGVtLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd1bnNlbGVjdEluZGV4JywgaW5kZXgpO1xuICAgfVxuXG4gICB1bnNlbGVjdEl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3Vuc2VsZWN0SXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICB1bmNoZWNrSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd1bmNoZWNrSW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuY2hlY2tJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd1bmNoZWNrSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICB1bmNoZWNrQWxsKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4RHJvcERvd25MaXN0KCd1bmNoZWNrQWxsJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcm9wRG93bkxpc3QoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyb3BEb3duTGlzdCgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeERyb3BEb3duTGlzdENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdiaW5kaW5nQ29tcGxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJpbmRpbmdDb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoZWNrQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgaWYgKGV2ZW50RGF0YS5hcmdzKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZXZlbnREYXRhLmFyZ3MuaXRlbS52YWx1ZSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4RHJvcERvd25MaXN0Q29tcG9uZW50XG4iXX0=