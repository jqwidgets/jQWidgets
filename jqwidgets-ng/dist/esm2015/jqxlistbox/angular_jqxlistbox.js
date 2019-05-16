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
    () => jqxListBoxComponent)),
    multi: true
};
export class jqxListBoxComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
                this.host.jqxListBox({ source: result.items });
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
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
        this.host.jqxListBox('setOptions', options);
    }
    // jqxListBoxComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('autoHeight', arg);
        }
        else {
            return this.host.jqxListBox('autoHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowDrag(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrag', arg);
        }
        else {
            return this.host.jqxListBox('allowDrag');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowDrop(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrop', arg);
        }
        else {
            return this.host.jqxListBox('allowDrop');
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
            this.host.jqxListBox('checkboxes', arg);
        }
        else {
            return this.host.jqxListBox('checkboxes');
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
            this.host.jqxListBox('disabled', arg);
        }
        else {
            return this.host.jqxListBox('disabled');
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
            this.host.jqxListBox('displayMember', arg);
        }
        else {
            return this.host.jqxListBox('displayMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropAction(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dropAction', arg);
        }
        else {
            return this.host.jqxListBox('dropAction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragStart(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragStart', arg);
        }
        else {
            return this.host.jqxListBox('dragStart');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragEnd(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragEnd', arg);
        }
        else {
            return this.host.jqxListBox('dragEnd');
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
            this.host.jqxListBox('enableHover', arg);
        }
        else {
            return this.host.jqxListBox('enableHover');
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
            this.host.jqxListBox('enableSelection', arg);
        }
        else {
            return this.host.jqxListBox('enableSelection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    equalItemsWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('equalItemsWidth', arg);
        }
        else {
            return this.host.jqxListBox('equalItemsWidth');
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
            this.host.jqxListBox('filterable', arg);
        }
        else {
            return this.host.jqxListBox('filterable');
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
            this.host.jqxListBox('filterHeight', arg);
        }
        else {
            return this.host.jqxListBox('filterHeight');
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
            this.host.jqxListBox('filterDelay', arg);
        }
        else {
            return this.host.jqxListBox('filterDelay');
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
            this.host.jqxListBox('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxListBox('filterPlaceHolder');
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
            this.host.jqxListBox('height', arg);
        }
        else {
            return this.host.jqxListBox('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hasThreeStates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxListBox('hasThreeStates');
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
            this.host.jqxListBox('itemHeight', arg);
        }
        else {
            return this.host.jqxListBox('itemHeight');
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
            this.host.jqxListBox('incrementalSearch', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearch');
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
            this.host.jqxListBox('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearchDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    multiple(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multiple', arg);
        }
        else {
            return this.host.jqxListBox('multiple');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    multipleextended(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multipleextended', arg);
        }
        else {
            return this.host.jqxListBox('multipleextended');
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
            this.host.jqxListBox('renderer', arg);
        }
        else {
            return this.host.jqxListBox('renderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rendered', arg);
        }
        else {
            return this.host.jqxListBox('rendered');
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
            this.host.jqxListBox('rtl', arg);
        }
        else {
            return this.host.jqxListBox('rtl');
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
            this.host.jqxListBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedIndexes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndexes', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndexes');
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
            this.host.jqxListBox('source', arg);
        }
        else {
            return this.host.jqxListBox('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxListBox('scrollBarSize');
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
            this.host.jqxListBox('searchMode', arg);
        }
        else {
            return this.host.jqxListBox('searchMode');
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
            this.host.jqxListBox('theme', arg);
        }
        else {
            return this.host.jqxListBox('theme');
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
            this.host.jqxListBox('valueMember', arg);
        }
        else {
            return this.host.jqxListBox('valueMember');
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
            this.host.jqxListBox('width', arg);
        }
        else {
            return this.host.jqxListBox('width');
        }
    }
    // jqxListBoxComponent functions
    /**
     * @param {?} Item
     * @return {?}
     */
    addItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('addItem', Item);
    }
    /**
     * @return {?}
     */
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('beginUpdate');
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clear');
    }
    /**
     * @return {?}
     */
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearSelection');
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    checkIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkIndex', Index);
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    checkItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkItem', Item);
    }
    /**
     * @return {?}
     */
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkAll');
    }
    /**
     * @return {?}
     */
    clearFilter() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearFilter');
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('destroy');
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    disableItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableItem', Item);
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    disableAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableAt', Index);
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    enableItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableItem', Item);
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    enableAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableAt', Index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    ensureVisible(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('ensureVisible', item);
    }
    /**
     * @return {?}
     */
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('endUpdate');
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('focus');
    }
    /**
     * @return {?}
     */
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItems');
    }
    /**
     * @return {?}
     */
    getSelectedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItems');
    }
    /**
     * @return {?}
     */
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getCheckedItems');
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    getItem(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItem', Index);
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    getItemByValue(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItemByValue', Item);
    }
    /**
     * @return {?}
     */
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItem');
    }
    /**
     * @return {?}
     */
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedIndex');
    }
    /**
     * @param {?} Item
     * @param {?} Index
     * @return {?}
     */
    insertAt(Item, Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('insertAt', Item, Index);
    }
    /**
     * @return {?}
     */
    invalidate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('invalidate');
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    indeterminateItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateItem', Item);
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    indeterminateIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateIndex', Index);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    loadFromSelect(selector) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('loadFromSelect', selector);
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    removeItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeItem', Item);
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    removeAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeAt', Index);
    }
    /**
     * @return {?}
     */
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('refresh');
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    selectItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectItem', Item);
    }
    /**
     * @param {?} Index
     * @return {?}
     */
    selectIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectIndex', Index);
    }
    /**
     * @param {?} Item
     * @param {?} Value
     * @return {?}
     */
    updateItem(Item, Value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateItem', Item, Value);
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
        this.host.jqxListBox('updateAt', item, index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectItem', item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckIndex', index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckItem', item);
    }
    /**
     * @return {?}
     */
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckAll');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxListBox('val', value);
        }
        else {
            return this.host.jqxListBox('val');
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
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.item.value); }));
        this.host.on('checkChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCheckChange.emit(eventData); }));
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragStart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragEnd.emit(eventData); }));
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
} //jqxListBoxComponent
jqxListBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxListBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxListBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhsaXN0Ym94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGxpc3Rib3gvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGxpc3Rib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFtQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkwsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVuRSxJQUFJOzs7QUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7OztNQUdoQixtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBU0QsTUFBTSxPQUFPLG1CQUFtQjs7OztJQWlEN0IsWUFBWSxnQkFBNEI7UUFabEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFD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OztJQUNsQyw4Q0FBdUQ7O0lBQ3ZELHdDQUEyQzs7SUFDM0MseUNBQTZDOztJQUU3Qyx5Q0FBaUQ7O0lBRWpELHlDQUE2ZTs7SUFDN2UsbUNBQVU7O0lBQ1YseUNBQXVCOztJQUN2QiwyQ0FBb0M7O0lBRXBDLHNDQUFnQjs7SUFDaEIsd0NBQTBCOzs7OztJQUMxQixnREFBNkM7Ozs7O0lBQzdDLCtDQUFrRDs7SUFpOUJsRCxnREFBaUQ7O0lBQ2pELHVDQUF3Qzs7SUFDeEMsNENBQTZDOztJQUM3QywwQ0FBMkM7O0lBQzNDLHdDQUF5Qzs7SUFDekMsdUNBQXdDOztJQUN4Qyx5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhMaXN0Qm94Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeExpc3RCb3gnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhMaXN0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCBcbntcbiAgIEBJbnB1dCgnYXV0b0hlaWdodCcpIGF0dHJBdXRvSGVpZ2h0OiBib29sZWFuO1xuICAgQElucHV0KCdhbGxvd0RyYWcnKSBhdHRyQWxsb3dEcmFnOiBib29sZWFuO1xuICAgQElucHV0KCdhbGxvd0Ryb3AnKSBhdHRyQWxsb3dEcm9wOiBib29sZWFuO1xuICAgQElucHV0KCdjaGVja2JveGVzJykgYXR0ckNoZWNrYm94ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNwbGF5TWVtYmVyJykgYXR0ckRpc3BsYXlNZW1iZXI6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcEFjdGlvbicpIGF0dHJEcm9wQWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2RyYWdTdGFydCcpIGF0dHJEcmFnU3RhcnQ6IChpdGVtOmpxd2lkZ2V0cy5MaXN0Qm94RHJhZ1N0YXJ0WydpdGVtJ10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2RyYWdFbmQnKSBhdHRyRHJhZ0VuZDogKGRyYWdJdGVtOiBqcXdpZGdldHMuTGlzdEJveERyYWdFbmRbJ2RyYWdJdGVtJ10sIGRyb3BJdGVtOiBqcXdpZGdldHMuTGlzdEJveERyYWdFbmRbJ2Ryb3BJdGVtJ10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVTZWxlY3Rpb24nKSBhdHRyRW5hYmxlU2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdlcXVhbEl0ZW1zV2lkdGgnKSBhdHRyRXF1YWxJdGVtc1dpZHRoOiBib29sZWFuO1xuICAgQElucHV0KCdmaWx0ZXJhYmxlJykgYXR0ckZpbHRlcmFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlckhlaWdodCcpIGF0dHJGaWx0ZXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZmlsdGVyRGVsYXknKSBhdHRyRmlsdGVyRGVsYXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZmlsdGVyUGxhY2VIb2xkZXInKSBhdHRyRmlsdGVyUGxhY2VIb2xkZXI6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnaGFzVGhyZWVTdGF0ZXMnKSBhdHRySGFzVGhyZWVTdGF0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2l0ZW1IZWlnaHQnKSBhdHRySXRlbUhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdpbmNyZW1lbnRhbFNlYXJjaCcpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaW5jcmVtZW50YWxTZWFyY2hEZWxheScpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaERlbGF5OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ211bHRpcGxlJykgYXR0ck11bHRpcGxlOiBib29sZWFuO1xuICAgQElucHV0KCdtdWx0aXBsZWV4dGVuZGVkJykgYXR0ck11bHRpcGxlZXh0ZW5kZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JlbmRlcmVyJykgYXR0clJlbmRlcmVyOiAoaW5kZXg6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsOiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZToganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKCkgPT4gYW55O1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzZWxlY3RlZEluZGV4JykgYXR0clNlbGVjdGVkSW5kZXg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnc2VsZWN0ZWRJbmRleGVzJykgYXR0clNlbGVjdGVkSW5kZXhlczogYW55O1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdzY3JvbGxCYXJTaXplJykgYXR0clNjcm9sbEJhclNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2VhcmNoTW9kZScpIGF0dHJTZWFyY2hNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXV0b0hlaWdodCcsJ2FsbG93RHJhZycsJ2FsbG93RHJvcCcsJ2NoZWNrYm94ZXMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXlNZW1iZXInLCdkcm9wQWN0aW9uJywnZHJhZ1N0YXJ0JywnZHJhZ0VuZCcsJ2VuYWJsZUhvdmVyJywnZW5hYmxlU2VsZWN0aW9uJywnZXF1YWxJdGVtc1dpZHRoJywnZmlsdGVyYWJsZScsJ2ZpbHRlckhlaWdodCcsJ2ZpbHRlckRlbGF5JywnZmlsdGVyUGxhY2VIb2xkZXInLCdoZWlnaHQnLCdoYXNUaHJlZVN0YXRlcycsJ2l0ZW1IZWlnaHQnLCdpbmNyZW1lbnRhbFNlYXJjaCcsJ2luY3JlbWVudGFsU2VhcmNoRGVsYXknLCdtdWx0aXBsZScsJ211bHRpcGxlZXh0ZW5kZWQnLCdyZW5kZXJlcicsJ3JlbmRlcmVkJywncnRsJywnc2VsZWN0ZWRJbmRleCcsJ3NlbGVjdGVkSW5kZXhlcycsJ3NvdXJjZScsJ3Njcm9sbEJhclNpemUnLCdzZWFyY2hNb2RlJywndGhlbWUnLCd2YWx1ZU1lbWJlcicsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeExpc3RCb3g7XG5cbiAgIGNvbnRlbnQ6IFN0cmluZztcbiAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgfTsgXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgbGV0IGNoaWxkcmVuID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbikuZmluZCgnbGknKTsgXG4gICAgICAgbGV0IGh0bWwgPSAnJzsgXG4gICAgICAgbGV0IG9wdGlvbnMgPSB7fTsgXG5cbiAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBodG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgdGhpcy5jb250ZW50ID0gaHRtbDtcblxuICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3NvdXJjZSddID0gcmVzdWx0Lml0ZW1zOyAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7IFxuICAgICAgfVxuICAgfTsgXG5cbiBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IHRoaXMuY29udGFpbmVyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goe3NvdXJjZTogcmVzdWx0Lml0ZW1zfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4TGlzdEJveCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhMaXN0Qm94KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhMaXN0Qm94Jywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmhvc3QudmFsKCkpO1xuICAgICAgIH1cbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4TGlzdEJveENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhdXRvSGVpZ2h0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2F1dG9IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2F1dG9IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dEcmFnKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2FsbG93RHJhZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnYWxsb3dEcmFnJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93RHJvcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdhbGxvd0Ryb3AnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2FsbG93RHJvcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGVja2JveGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2NoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2NoZWNrYm94ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3BsYXlNZW1iZXIoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2Rpc3BsYXlNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2Rpc3BsYXlNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcEFjdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZHJvcEFjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZHJvcEFjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnU3RhcnQoYXJnPzogKGl0ZW06anF3aWRnZXRzLkxpc3RCb3hEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbik6IChpdGVtOmpxd2lkZ2V0cy5MaXN0Qm94RHJhZ1N0YXJ0WydpdGVtJ10pID0+IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZHJhZ1N0YXJ0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkcmFnU3RhcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ0VuZChhcmc/OiAoZHJhZ0l0ZW06IGpxd2lkZ2V0cy5MaXN0Qm94RHJhZ0VuZFsnZHJhZ0l0ZW0nXSwgZHJvcEl0ZW06IGpxd2lkZ2V0cy5MaXN0Qm94RHJhZ0VuZFsnZHJvcEl0ZW0nXSkgPT4gYm9vbGVhbik6IChkcmFnSXRlbToganF3aWRnZXRzLkxpc3RCb3hEcmFnRW5kWydkcmFnSXRlbSddLCBkcm9wSXRlbToganF3aWRnZXRzLkxpc3RCb3hEcmFnRW5kWydkcm9wSXRlbSddKSA9PiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2RyYWdFbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2RyYWdFbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlSG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVNlbGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlbmFibGVTZWxlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuYWJsZVNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlcXVhbEl0ZW1zV2lkdGgoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZXF1YWxJdGVtc1dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlcXVhbEl0ZW1zV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZmlsdGVySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyRGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlckRlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmaWx0ZXJEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJQbGFjZUhvbGRlcihhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZmlsdGVyUGxhY2VIb2xkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2ZpbHRlclBsYWNlSG9sZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGFzVGhyZWVTdGF0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaGFzVGhyZWVTdGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2hhc1RocmVlU3RhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1IZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2l0ZW1IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2l0ZW1IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2goYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5jcmVtZW50YWxTZWFyY2gnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2luY3JlbWVudGFsU2VhcmNoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluY3JlbWVudGFsU2VhcmNoRGVsYXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2luY3JlbWVudGFsU2VhcmNoRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2luY3JlbWVudGFsU2VhcmNoRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbXVsdGlwbGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnbXVsdGlwbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ211bHRpcGxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG11bHRpcGxlZXh0ZW5kZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnbXVsdGlwbGVleHRlbmRlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnbXVsdGlwbGVleHRlbmRlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlcihhcmc/OiAoaW5kZXg6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ2luZGV4J10sIGxhYmVsOiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWydsYWJlbCddLCB2YWx1ZToganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsndmFsdWUnXSkgPT4gc3RyaW5nKTogKGluZGV4OiBqcXdpZGdldHMuTGlzdEJveFJlbmRlcmVyWydpbmRleCddLCBsYWJlbDoganF3aWRnZXRzLkxpc3RCb3hSZW5kZXJlclsnbGFiZWwnXSwgdmFsdWU6IGpxd2lkZ2V0cy5MaXN0Qm94UmVuZGVyZXJbJ3ZhbHVlJ10pID0+IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdyZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgncmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKCkgPT4gYW55KTogKCkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdyZW5kZXJlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0ZWRJbmRleChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0ZWRJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0ZWRJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZEluZGV4ZXMoYXJnPzogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NlbGVjdGVkSW5kZXhlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0ZWRJbmRleGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdzY3JvbGxCYXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlYXJjaE1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NlYXJjaE1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NlYXJjaE1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZU1lbWJlcihhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndmFsdWVNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ3ZhbHVlTWVtYmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhMaXN0Qm94Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkSXRlbShJdGVtOiBhbnkpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdhZGRJdGVtJywgSXRlbSk7XG4gICB9XG5cbiAgIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnYmVnaW5VcGRhdGUnKTtcbiAgIH1cblxuICAgY2xlYXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdjbGVhcicpO1xuICAgfVxuXG4gICBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2NsZWFyU2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGNoZWNrSW5kZXgoSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2hlY2tJbmRleCcsIEluZGV4KTtcbiAgIH1cblxuICAgY2hlY2tJdGVtKEl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2hlY2tJdGVtJywgSXRlbSk7XG4gICB9XG5cbiAgIGNoZWNrQWxsKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnY2hlY2tBbGwnKTtcbiAgIH1cblxuICAgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdjbGVhckZpbHRlcicpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkaXNhYmxlSXRlbShJdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2Rpc2FibGVJdGVtJywgSXRlbSk7XG4gICB9XG5cbiAgIGRpc2FibGVBdChJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdkaXNhYmxlQXQnLCBJbmRleCk7XG4gICB9XG5cbiAgIGVuYWJsZUl0ZW0oSXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlbmFibGVJdGVtJywgSXRlbSk7XG4gICB9XG5cbiAgIGVuYWJsZUF0KEluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2VuYWJsZUF0JywgSW5kZXgpO1xuICAgfVxuXG4gICBlbnN1cmVWaXNpYmxlKGl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnZW5zdXJlVmlzaWJsZScsIGl0ZW0pO1xuICAgfVxuXG4gICBlbmRVcGRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdlbmRVcGRhdGUnKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRJdGVtcygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdnZXRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRTZWxlY3RlZEl0ZW1zKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2dldFNlbGVjdGVkSXRlbXMnKTtcbiAgIH1cblxuICAgZ2V0Q2hlY2tlZEl0ZW1zKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2dldENoZWNrZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRJdGVtKEluZGV4OiBudW1iZXIpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RCb3goJ2dldEl0ZW0nLCBJbmRleCk7XG4gICB9XG5cbiAgIGdldEl0ZW1CeVZhbHVlKEl0ZW06IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZ2V0SXRlbUJ5VmFsdWUnLCBJdGVtKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0ZWRJdGVtKCk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdEJveCgnZ2V0U2VsZWN0ZWRJdGVtJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdnZXRTZWxlY3RlZEluZGV4Jyk7XG4gICB9XG5cbiAgIGluc2VydEF0KEl0ZW06IGFueSwgSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5zZXJ0QXQnLCBJdGVtLCBJbmRleCk7XG4gICB9XG5cbiAgIGludmFsaWRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdpbnZhbGlkYXRlJyk7XG4gICB9XG5cbiAgIGluZGV0ZXJtaW5hdGVJdGVtKEl0ZW06IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnaW5kZXRlcm1pbmF0ZUl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgaW5kZXRlcm1pbmF0ZUluZGV4KEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ2luZGV0ZXJtaW5hdGVJbmRleCcsIEluZGV4KTtcbiAgIH1cblxuICAgbG9hZEZyb21TZWxlY3Qoc2VsZWN0b3I6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnbG9hZEZyb21TZWxlY3QnLCBzZWxlY3Rvcik7XG4gICB9XG5cbiAgIHJlbW92ZUl0ZW0oSXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdyZW1vdmVJdGVtJywgSXRlbSk7XG4gICB9XG5cbiAgIHJlbW92ZUF0KEluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlbW92ZUF0JywgSW5kZXgpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgc2VsZWN0SXRlbShJdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3NlbGVjdEl0ZW0nLCBJdGVtKTtcbiAgIH1cblxuICAgc2VsZWN0SW5kZXgoSW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgnc2VsZWN0SW5kZXgnLCBJbmRleCk7XG4gICB9XG5cbiAgIHVwZGF0ZUl0ZW0oSXRlbTogYW55LCBWYWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd1cGRhdGVJdGVtJywgSXRlbSwgVmFsdWUpO1xuICAgfVxuXG4gICB1cGRhdGVBdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3VwZGF0ZUF0JywgaXRlbSwgaW5kZXgpO1xuICAgfVxuXG4gICB1bnNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3Vuc2VsZWN0SW5kZXgnLCBpbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3Vuc2VsZWN0SXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICB1bmNoZWNrSW5kZXgoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4TGlzdEJveCgndW5jaGVja0luZGV4JywgaW5kZXgpO1xuICAgfVxuXG4gICB1bmNoZWNrSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeExpc3RCb3goJ3VuY2hlY2tJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHVuY2hlY2tBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd1bmNoZWNrQWxsJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IG51bWJlciB8IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0Qm94KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4TGlzdEJveENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyBpZiAoZXZlbnREYXRhLmFyZ3MpIHRoaXMub25DaGFuZ2VDYWxsYmFjayhldmVudERhdGEuYXJncy5pdGVtLnZhbHVlKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoZWNrQ2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGVja0NoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnRW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnRW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4TGlzdEJveENvbXBvbmVudFxuIl19