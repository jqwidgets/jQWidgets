import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcombobox';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComboBoxComponent),
    multi: true
};
let jqxComboBoxComponent = class jqxComboBoxComponent {
    constructor(containerElement) {
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
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('li');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            let result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    }
    ;
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                let result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxComboBox({ source: result.items });
            }
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
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
    }
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComboBox', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxComboBox('setOptions', options);
    }
    // jqxComboBoxComponent properties
    animationType(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('animationType', arg);
        }
        else {
            return this.host.jqxComboBox('animationType');
        }
    }
    autoComplete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoComplete', arg);
        }
        else {
            return this.host.jqxComboBox('autoComplete');
        }
    }
    autoOpen(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoOpen', arg);
        }
        else {
            return this.host.jqxComboBox('autoOpen');
        }
    }
    autoItemsHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoItemsHeight', arg);
        }
        else {
            return this.host.jqxComboBox('autoItemsHeight');
        }
    }
    autoDropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoDropDownHeight', arg);
        }
        else {
            return this.host.jqxComboBox('autoDropDownHeight');
        }
    }
    closeDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('closeDelay', arg);
        }
        else {
            return this.host.jqxComboBox('closeDelay');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('checkboxes', arg);
        }
        else {
            return this.host.jqxComboBox('checkboxes');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('disabled', arg);
        }
        else {
            return this.host.jqxComboBox('disabled');
        }
    }
    displayMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('displayMember', arg);
        }
        else {
            return this.host.jqxComboBox('displayMember');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownVerticalAlignment');
        }
    }
    dropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownHeight', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownHeight');
        }
    }
    dropDownWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownWidth', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownWidth');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableHover', arg);
        }
        else {
            return this.host.jqxComboBox('enableHover');
        }
    }
    enableSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableSelection', arg);
        }
        else {
            return this.host.jqxComboBox('enableSelection');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxComboBox('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('height', arg);
        }
        else {
            return this.host.jqxComboBox('height');
        }
    }
    itemHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('itemHeight', arg);
        }
        else {
            return this.host.jqxComboBox('itemHeight');
        }
    }
    multiSelect(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('multiSelect', arg);
        }
        else {
            return this.host.jqxComboBox('multiSelect');
        }
    }
    minLength(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('minLength', arg);
        }
        else {
            return this.host.jqxComboBox('minLength');
        }
    }
    openDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('openDelay', arg);
        }
        else {
            return this.host.jqxComboBox('openDelay');
        }
    }
    popupZIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('popupZIndex', arg);
        }
        else {
            return this.host.jqxComboBox('popupZIndex');
        }
    }
    placeHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('placeHolder', arg);
        }
        else {
            return this.host.jqxComboBox('placeHolder');
        }
    }
    remoteAutoComplete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('remoteAutoComplete', arg);
        }
        else {
            return this.host.jqxComboBox('remoteAutoComplete');
        }
    }
    remoteAutoCompleteDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('remoteAutoCompleteDelay', arg);
        }
        else {
            return this.host.jqxComboBox('remoteAutoCompleteDelay');
        }
    }
    renderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('renderer', arg);
        }
        else {
            return this.host.jqxComboBox('renderer');
        }
    }
    renderSelectedItem(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('renderSelectedItem', arg);
        }
        else {
            return this.host.jqxComboBox('renderSelectedItem');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('rtl', arg);
        }
        else {
            return this.host.jqxComboBox('rtl');
        }
    }
    selectedIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxComboBox('selectedIndex');
        }
    }
    showArrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('showArrow', arg);
        }
        else {
            return this.host.jqxComboBox('showArrow');
        }
    }
    showCloseButtons(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('showCloseButtons', arg);
        }
        else {
            return this.host.jqxComboBox('showCloseButtons');
        }
    }
    searchMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('searchMode', arg);
        }
        else {
            return this.host.jqxComboBox('searchMode');
        }
    }
    search(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('search', arg);
        }
        else {
            return this.host.jqxComboBox('search');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('source', arg);
        }
        else {
            return this.host.jqxComboBox('source');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxComboBox('scrollBarSize');
        }
    }
    template(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('template', arg);
        }
        else {
            return this.host.jqxComboBox('template');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('theme', arg);
        }
        else {
            return this.host.jqxComboBox('theme');
        }
    }
    validateSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('validateSelection', arg);
        }
        else {
            return this.host.jqxComboBox('validateSelection');
        }
    }
    valueMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('valueMember', arg);
        }
        else {
            return this.host.jqxComboBox('valueMember');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('width', arg);
        }
        else {
            return this.host.jqxComboBox('width');
        }
    }
    // jqxComboBoxComponent functions
    addItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('addItem', item);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('clearSelection');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('clear');
    }
    close() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('close');
    }
    checkIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkIndex', index);
    }
    checkItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkItem', item);
    }
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkAll');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('destroy');
    }
    disableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('disableItem', item);
    }
    disableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('disableAt', index);
    }
    enableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('enableItem', item);
    }
    enableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('enableAt', index);
    }
    ensureVisible(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('ensureVisible', index);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('focus');
    }
    getItem(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItem', index);
    }
    getItemByValue(value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItemByValue', value);
    }
    getVisibleItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getVisibleItems');
    }
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItems');
    }
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getCheckedItems');
    }
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedItem');
    }
    getSelectedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedItems');
    }
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedIndex');
    }
    insertAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('insertAt', item, index);
    }
    isOpened() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('isOpened');
    }
    indeterminateIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('indeterminateIndex', index);
    }
    indeterminateItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('indeterminateItem', item);
    }
    loadFromSelect(selectTagId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('loadFromSelect', selectTagId);
    }
    open() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('open');
    }
    removeItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('removeItem', item);
    }
    removeAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('removeAt', index);
    }
    selectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('selectIndex', index);
    }
    selectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('selectItem', item);
    }
    searchString() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('searchString');
    }
    updateItem(item, itemValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('updateItem', item, itemValue);
    }
    updateAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('updateAt', item, index);
    }
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('unselectIndex', index);
    }
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('unselectItem', item);
    }
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckIndex', index);
    }
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckItem', item);
    }
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxComboBox('val', value);
        }
        else {
            return this.host.jqxComboBox('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            if (eventData.args.item !== null)
                this.onChangeCallback(eventData.args.item.value); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
}; //jqxComboBoxComponent
jqxComboBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('animationType'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrAnimationType", void 0);
tslib_1.__decorate([
    Input('autoComplete'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoComplete", void 0);
tslib_1.__decorate([
    Input('autoOpen'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoOpen", void 0);
tslib_1.__decorate([
    Input('autoItemsHeight'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoItemsHeight", void 0);
tslib_1.__decorate([
    Input('autoDropDownHeight'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoDropDownHeight", void 0);
tslib_1.__decorate([
    Input('closeDelay'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrCloseDelay", void 0);
tslib_1.__decorate([
    Input('checkboxes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrCheckboxes", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('displayMember'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrDisplayMember", void 0);
tslib_1.__decorate([
    Input('dropDownHorizontalAlignment'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
tslib_1.__decorate([
    Input('dropDownVerticalAlignment'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrDropDownVerticalAlignment", void 0);
tslib_1.__decorate([
    Input('dropDownHeight'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrDropDownHeight", void 0);
tslib_1.__decorate([
    Input('dropDownWidth'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrDropDownWidth", void 0);
tslib_1.__decorate([
    Input('enableHover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableHover", void 0);
tslib_1.__decorate([
    Input('enableSelection'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableSelection", void 0);
tslib_1.__decorate([
    Input('enableBrowserBoundsDetection'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
tslib_1.__decorate([
    Input('itemHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrItemHeight", void 0);
tslib_1.__decorate([
    Input('multiSelect'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrMultiSelect", void 0);
tslib_1.__decorate([
    Input('minLength'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrMinLength", void 0);
tslib_1.__decorate([
    Input('openDelay'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrOpenDelay", void 0);
tslib_1.__decorate([
    Input('popupZIndex'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrPopupZIndex", void 0);
tslib_1.__decorate([
    Input('placeHolder'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrPlaceHolder", void 0);
tslib_1.__decorate([
    Input('remoteAutoComplete'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrRemoteAutoComplete", void 0);
tslib_1.__decorate([
    Input('remoteAutoCompleteDelay'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrRemoteAutoCompleteDelay", void 0);
tslib_1.__decorate([
    Input('renderer'),
    tslib_1.__metadata("design:type", Function)
], jqxComboBoxComponent.prototype, "attrRenderer", void 0);
tslib_1.__decorate([
    Input('renderSelectedItem'),
    tslib_1.__metadata("design:type", Function)
], jqxComboBoxComponent.prototype, "attrRenderSelectedItem", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('selectedIndex'),
    tslib_1.__metadata("design:type", Number)
], jqxComboBoxComponent.prototype, "attrSelectedIndex", void 0);
tslib_1.__decorate([
    Input('showArrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrShowArrow", void 0);
tslib_1.__decorate([
    Input('showCloseButtons'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrShowCloseButtons", void 0);
tslib_1.__decorate([
    Input('searchMode'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrSearchMode", void 0);
tslib_1.__decorate([
    Input('search'),
    tslib_1.__metadata("design:type", Function)
], jqxComboBoxComponent.prototype, "attrSearch", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('scrollBarSize'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrScrollBarSize", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('validateSelection'),
    tslib_1.__metadata("design:type", Function)
], jqxComboBoxComponent.prototype, "attrValidateSelection", void 0);
tslib_1.__decorate([
    Input('valueMember'),
    tslib_1.__metadata("design:type", String)
], jqxComboBoxComponent.prototype, "attrValueMember", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxComboBoxComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onBindingComplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onCheckChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxComboBoxComponent.prototype, "onUnselect", void 0);
jqxComboBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxComboBox',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxComboBoxComponent);
export { jqxComboBoxComponent };
export { ɵ0 };
