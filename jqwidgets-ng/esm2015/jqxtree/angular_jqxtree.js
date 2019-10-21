import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxpanel';
import '../jqwidgets/jqxdragdrop';
import '../jqwidgets/jqxtree';
import '../jqwidgets/jqxcheckbox';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxTreeComponent = class jqxTreeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTree('setOptions', options);
    }
    // jqxTreeComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    }
    allowDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    }
    allowDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    }
    checkboxes(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    }
    dragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    }
    dragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    }
    incrementalSearch(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    }
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    }
    // jqxTreeComponent functions
    addBefore(item, id) {
        this.host.jqxTree('addBefore', item, id);
    }
    addAfter(item, id) {
        this.host.jqxTree('addAfter', item, id);
    }
    addTo(item, id) {
        this.host.jqxTree('addTo', item, id);
    }
    clear() {
        this.host.jqxTree('clear');
    }
    checkAll() {
        this.host.jqxTree('checkAll');
    }
    checkItem(item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    }
    collapseAll() {
        this.host.jqxTree('collapseAll');
    }
    collapseItem(item) {
        this.host.jqxTree('collapseItem', item);
    }
    destroy() {
        this.host.jqxTree('destroy');
    }
    disableItem(item) {
        this.host.jqxTree('disableItem', item);
    }
    ensureVisible(item) {
        this.host.jqxTree('ensureVisible', item);
    }
    enableItem(item) {
        this.host.jqxTree('enableItem', item);
    }
    enableAll() {
        this.host.jqxTree('enableAll');
    }
    expandAll() {
        this.host.jqxTree('expandAll');
    }
    expandItem(item) {
        this.host.jqxTree('expandItem', item);
    }
    focus() {
        this.host.jqxTree('focus');
    }
    getCheckedItems() {
        return this.host.jqxTree('getCheckedItems');
    }
    getUncheckedItems() {
        return this.host.jqxTree('getUncheckedItems');
    }
    getItems() {
        return this.host.jqxTree('getItems');
    }
    getItem(element) {
        return this.host.jqxTree('getItem', element);
    }
    getSelectedItem() {
        return this.host.jqxTree('getSelectedItem');
    }
    getPrevItem(item) {
        return this.host.jqxTree('getPrevItem', item);
    }
    getNextItem(item) {
        return this.host.jqxTree('getNextItem', item);
    }
    hitTest(left, top) {
        return this.host.jqxTree('hitTest', left, top);
    }
    removeItem(item) {
        this.host.jqxTree('removeItem', item);
    }
    render() {
        this.host.jqxTree('render');
    }
    refresh() {
        this.host.jqxTree('refresh');
    }
    selectItem(item) {
        this.host.jqxTree('selectItem', item);
    }
    uncheckAll() {
        this.host.jqxTree('uncheckAll');
    }
    uncheckItem(item) {
        this.host.jqxTree('uncheckItem', item);
    }
    updateItem(item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('added', (eventData) => { this.onAdded.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
    }
}; //jqxTreeComponent
jqxTreeComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('animationShowDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
tslib_1.__decorate([
    Input('animationHideDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
tslib_1.__decorate([
    Input('allowDrag'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
tslib_1.__decorate([
    Input('allowDrop'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
tslib_1.__decorate([
    Input('checkboxes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
tslib_1.__decorate([
    Input('dragStart'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeComponent.prototype, "attrDragStart", void 0);
tslib_1.__decorate([
    Input('dragEnd'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeComponent.prototype, "attrDragEnd", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('easing'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrEasing", void 0);
tslib_1.__decorate([
    Input('enableHover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrEnableHover", void 0);
tslib_1.__decorate([
    Input('hasThreeStates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
tslib_1.__decorate([
    Input('incrementalSearch'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
tslib_1.__decorate([
    Input('keyboardNavigation'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('toggleIndicatorSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
tslib_1.__decorate([
    Input('toggleMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrToggleMode", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onAdded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCheckChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onExpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onSelect", void 0);
jqxTreeComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxTree',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxTreeComponent);
export { jqxTreeComponent };
