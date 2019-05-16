import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
import * as jqxtree from '../../jqwidgets-scripts/jqwidgets/jqxtree';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTreeComponent {
    /**
     * @param {?} containerElement
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
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
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxTree('setOptions', options);
    }
    // jqxTreeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    checkboxes(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    incrementalSearch(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    }
    // jqxTreeComponent functions
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    addBefore(item, id) {
        this.host.jqxTree('addBefore', item, id);
    }
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    addAfter(item, id) {
        this.host.jqxTree('addAfter', item, id);
    }
    /**
     * @param {?} item
     * @param {?} id
     * @return {?}
     */
    addTo(item, id) {
        this.host.jqxTree('addTo', item, id);
    }
    /**
     * @return {?}
     */
    clear() {
        this.host.jqxTree('clear');
    }
    /**
     * @return {?}
     */
    checkAll() {
        this.host.jqxTree('checkAll');
    }
    /**
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    checkItem(item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    }
    /**
     * @return {?}
     */
    collapseAll() {
        this.host.jqxTree('collapseAll');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    collapseItem(item) {
        this.host.jqxTree('collapseItem', item);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxTree('destroy');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    disableItem(item) {
        this.host.jqxTree('disableItem', item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    ensureVisible(item) {
        this.host.jqxTree('ensureVisible', item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    enableItem(item) {
        this.host.jqxTree('enableItem', item);
    }
    /**
     * @return {?}
     */
    enableAll() {
        this.host.jqxTree('enableAll');
    }
    /**
     * @return {?}
     */
    expandAll() {
        this.host.jqxTree('expandAll');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    expandItem(item) {
        this.host.jqxTree('expandItem', item);
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxTree('focus');
    }
    /**
     * @return {?}
     */
    getCheckedItems() {
        return this.host.jqxTree('getCheckedItems');
    }
    /**
     * @return {?}
     */
    getUncheckedItems() {
        return this.host.jqxTree('getUncheckedItems');
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.host.jqxTree('getItems');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getItem(element) {
        return this.host.jqxTree('getItem', element);
    }
    /**
     * @return {?}
     */
    getSelectedItem() {
        return this.host.jqxTree('getSelectedItem');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getPrevItem(item) {
        return this.host.jqxTree('getPrevItem', item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getNextItem(item) {
        return this.host.jqxTree('getNextItem', item);
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    hitTest(left, top) {
        return this.host.jqxTree('hitTest', left, top);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this.host.jqxTree('removeItem', item);
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxTree('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxTree('refresh');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.host.jqxTree('selectItem', item);
    }
    /**
     * @return {?}
     */
    uncheckAll() {
        this.host.jqxTree('uncheckAll');
    }
    /**
     * @param {?} item
     * @return {?}
     */
    uncheckItem(item) {
        this.host.jqxTree('uncheckItem', item);
    }
    /**
     * @param {?} item
     * @param {?} newItem
     * @return {?}
     */
    updateItem(item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('added', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAdded.emit(eventData); }));
        this.host.on('checkChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCheckChange.emit(eventData); }));
        this.host.on('collapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCollapse.emit(eventData); }));
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
        this.host.on('expand', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onExpand.emit(eventData); }));
        this.host.on('itemClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onItemClick.emit(eventData); }));
        this.host.on('removed', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRemoved.emit(eventData); }));
        this.host.on('select', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSelect.emit(eventData); }));
    }
} //jqxTreeComponent
jqxTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTree',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTreeComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxTreeComponent.propDecorators = {
    attrAnimationShowDuration: [{ type: Input, args: ['animationShowDuration',] }],
    attrAnimationHideDuration: [{ type: Input, args: ['animationHideDuration',] }],
    attrAllowDrag: [{ type: Input, args: ['allowDrag',] }],
    attrAllowDrop: [{ type: Input, args: ['allowDrop',] }],
    attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
    attrDragStart: [{ type: Input, args: ['dragStart',] }],
    attrDragEnd: [{ type: Input, args: ['dragEnd',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEasing: [{ type: Input, args: ['easing',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
    attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrToggleIndicatorSize: [{ type: Input, args: ['toggleIndicatorSize',] }],
    attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onAdded: [{ type: Output }],
    onCheckChange: [{ type: Output }],
    onCollapse: [{ type: Output }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onExpand: [{ type: Output }],
    onItemClick: [{ type: Output }],
    onRemoved: [{ type: Output }],
    onSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxTreeComponent.prototype.attrAnimationShowDuration;
    /** @type {?} */
    jqxTreeComponent.prototype.attrAnimationHideDuration;
    /** @type {?} */
    jqxTreeComponent.prototype.attrAllowDrag;
    /** @type {?} */
    jqxTreeComponent.prototype.attrAllowDrop;
    /** @type {?} */
    jqxTreeComponent.prototype.attrCheckboxes;
    /** @type {?} */
    jqxTreeComponent.prototype.attrDragStart;
    /** @type {?} */
    jqxTreeComponent.prototype.attrDragEnd;
    /** @type {?} */
    jqxTreeComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTreeComponent.prototype.attrEasing;
    /** @type {?} */
    jqxTreeComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxTreeComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxTreeComponent.prototype.attrIncrementalSearch;
    /** @type {?} */
    jqxTreeComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxTreeComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTreeComponent.prototype.attrSource;
    /** @type {?} */
    jqxTreeComponent.prototype.attrToggleIndicatorSize;
    /** @type {?} */
    jqxTreeComponent.prototype.attrToggleMode;
    /** @type {?} */
    jqxTreeComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTreeComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTreeComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTreeComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTreeComponent.prototype.properties;
    /** @type {?} */
    jqxTreeComponent.prototype.host;
    /** @type {?} */
    jqxTreeComponent.prototype.elementRef;
    /** @type {?} */
    jqxTreeComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTreeComponent.prototype.onAdded;
    /** @type {?} */
    jqxTreeComponent.prototype.onCheckChange;
    /** @type {?} */
    jqxTreeComponent.prototype.onCollapse;
    /** @type {?} */
    jqxTreeComponent.prototype.onDragStart;
    /** @type {?} */
    jqxTreeComponent.prototype.onDragEnd;
    /** @type {?} */
    jqxTreeComponent.prototype.onExpand;
    /** @type {?} */
    jqxTreeComponent.prototype.onItemClick;
    /** @type {?} */
    jqxTreeComponent.prototype.onRemoved;
    /** @type {?} */
    jqxTreeComponent.prototype.onSelect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRyZWUvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUE4QjFCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQTJaalMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE3WnJDLElBQUksQ0FBQyxVQUFVLEdB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LEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbEYsQ0FBQztFQUVGLGtCQUFrQjs7WUEvY25CLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLHNDQUFzQzthQUNuRDs7OztZQU5nRCxVQUFVOzs7d0NBVXZELEtBQUssU0FBQyx1QkFBdUI7d0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7NEJBQzdCLEtBQUssU0FBQyxXQUFXOzRCQUNqQixLQUFLLFNBQUMsV0FBVzs2QkFDakIsS0FBSyxTQUFDLFlBQVk7NEJBQ2xCLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsU0FBUzsyQkFDZixLQUFLLFNBQUMsVUFBVTt5QkFDaEIsS0FBSyxTQUFDLFFBQVE7OEJBQ2QsS0FBSyxTQUFDLGFBQWE7aUNBQ25CLEtBQUssU0FBQyxnQkFBZ0I7b0NBQ3RCLEtBQUssU0FBQyxtQkFBbUI7cUNBQ3pCLEtBQUssU0FBQyxvQkFBb0I7c0JBQzFCLEtBQUssU0FBQyxLQUFLO3lCQUNYLEtBQUssU0FBQyxRQUFRO3NDQUNkLEtBQUssU0FBQyxxQkFBcUI7NkJBQzNCLEtBQUssU0FBQyxZQUFZO3dCQUNsQixLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt5QkFFZCxLQUFLLFNBQUMsYUFBYTtzQkE2Wm5CLE1BQU07NEJBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNOzs7O0lBMWJQLHFEQUFrRTs7SUFDbEUscURBQWtFOztJQUNsRSx5Q0FBMkM7O0lBQzNDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUM3Qyx5Q0FBc0Y7O0lBQ3RGLHVDQUF5UTs7SUFDelEsd0NBQXlDOztJQUN6QyxzQ0FBb0M7O0lBQ3BDLDJDQUErQzs7SUFDL0MsOENBQXFEOztJQUNyRCxpREFBMkQ7O0lBQzNELGtEQUE2RDs7SUFDN0QsbUNBQStCOztJQUMvQixzQ0FBaUM7O0lBQ2pDLG1EQUE4RDs7SUFDOUQsMENBQTRDOztJQUM1QyxxQ0FBa0M7O0lBQ2xDLHFDQUEyQzs7SUFDM0Msc0NBQTZDOztJQUU3QyxzQ0FBaUQ7O0lBRWpELHNDQUEyUzs7SUFDM1MsZ0NBQVU7O0lBQ1Ysc0NBQXVCOztJQUN2Qix3Q0FBaUM7O0lBd1pqQyxtQ0FBdUM7O0lBQ3ZDLHlDQUE2Qzs7SUFDN0Msc0NBQTBDOztJQUMxQyx1Q0FBMkM7O0lBQzNDLHFDQUF5Qzs7SUFDekMsb0NBQXdDOztJQUN4Qyx1Q0FBMkM7O0lBQzNDLHFDQUF5Qzs7SUFDekMsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhUcmVlJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicpIGF0dHJBbmltYXRpb25TaG93RHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJykgYXR0ckFuaW1hdGlvbkhpZGVEdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdhbGxvd0RyYWcnKSBhdHRyQWxsb3dEcmFnOiBib29sZWFuO1xuICAgQElucHV0KCdhbGxvd0Ryb3AnKSBhdHRyQWxsb3dEcm9wOiBib29sZWFuO1xuICAgQElucHV0KCdjaGVja2JveGVzJykgYXR0ckNoZWNrYm94ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2RyYWdTdGFydCcpIGF0dHJEcmFnU3RhcnQ6IChpdGVtOiBqcXdpZGdldHMuVHJlZURyYWdTdGFydFsnaXRlbSddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdkcmFnRW5kJykgYXR0ckRyYWdFbmQ6IChkcmFnSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJhZ0l0ZW0nXSwgZHJvcEl0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BJdGVtJ10sIGFyZ3M/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2FyZ3MnXSwgZHJvcFBvc2l0aW9uPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wUG9zaXRpb24nXSwgdHJlZT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsndHJlZSddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWFzaW5nJykgYXR0ckVhc2luZzogc3RyaW5nO1xuICAgQElucHV0KCdlbmFibGVIb3ZlcicpIGF0dHJFbmFibGVIb3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaGFzVGhyZWVTdGF0ZXMnKSBhdHRySGFzVGhyZWVTdGF0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2luY3JlbWVudGFsU2VhcmNoJykgYXR0ckluY3JlbWVudGFsU2VhcmNoOiBib29sZWFuO1xuICAgQElucHV0KCdrZXlib2FyZE5hdmlnYXRpb24nKSBhdHRyS2V5Ym9hcmROYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3RvZ2dsZUluZGljYXRvclNpemUnKSBhdHRyVG9nZ2xlSW5kaWNhdG9yU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCd0b2dnbGVNb2RlJykgYXR0clRvZ2dsZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25TaG93RHVyYXRpb24nLCdhbmltYXRpb25IaWRlRHVyYXRpb24nLCdhbGxvd0RyYWcnLCdhbGxvd0Ryb3AnLCdjaGVja2JveGVzJywnZHJhZ1N0YXJ0JywnZHJhZ0VuZCcsJ2Rpc2FibGVkJywnZWFzaW5nJywnZW5hYmxlSG92ZXInLCdoZWlnaHQnLCdoYXNUaHJlZVN0YXRlcycsJ2luY3JlbWVudGFsU2VhcmNoJywna2V5Ym9hcmROYXZpZ2F0aW9uJywncnRsJywnc291cmNlJywndG9nZ2xlSW5kaWNhdG9yU2l6ZScsJ3RvZ2dsZU1vZGUnLCd0aGVtZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFRyZWU7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4VHJlZSh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhUcmVlKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhUcmVlJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4VHJlZUNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25TaG93RHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhbmltYXRpb25TaG93RHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25IaWRlRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhbmltYXRpb25IaWRlRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd0RyYWcoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FsbG93RHJhZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnYWxsb3dEcmFnJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93RHJvcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYWxsb3dEcm9wJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdhbGxvd0Ryb3AnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hlY2tib3hlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY2hlY2tib3hlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnY2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnU3RhcnQoYXJnPzogKGl0ZW06IGpxd2lkZ2V0cy5UcmVlRHJhZ1N0YXJ0WydpdGVtJ10pID0+IGJvb2xlYW4pOiAoaXRlbToganF3aWRnZXRzLlRyZWVEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZHJhZ1N0YXJ0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdkcmFnU3RhcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ0VuZChhcmc/OiAoZHJhZ0l0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2RyYWdJdGVtJ10sIGRyb3BJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wSXRlbSddLCBhcmdzPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydhcmdzJ10sIGRyb3BQb3NpdGlvbj86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcFBvc2l0aW9uJ10sIHRyZWU/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ3RyZWUnXSkgPT4gYm9vbGVhbik6IChkcmFnSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJhZ0l0ZW0nXSwgZHJvcEl0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BJdGVtJ10sIGFyZ3M/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2FyZ3MnXSwgZHJvcFBvc2l0aW9uPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wUG9zaXRpb24nXSwgdHJlZT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsndHJlZSddKSA9PiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdkcmFnRW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdkcmFnRW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWFzaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZWFzaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdlYXNpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlSG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoYXNUaHJlZVN0YXRlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnaGFzVGhyZWVTdGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2hhc1RocmVlU3RhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluY3JlbWVudGFsU2VhcmNoKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdpbmNyZW1lbnRhbFNlYXJjaCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnaW5jcmVtZW50YWxTZWFyY2gnKTtcbiAgICAgIH1cbiAgIH1cblxuICAga2V5Ym9hcmROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdrZXlib2FyZE5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZ2dsZUluZGljYXRvclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd0b2dnbGVJbmRpY2F0b3JTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd0b2dnbGVJbmRpY2F0b3JTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZ2dsZU1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd0b2dnbGVNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd0b2dnbGVNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4VHJlZUNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZEJlZm9yZShpdGVtOiBhbnksIGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhZGRCZWZvcmUnLCBpdGVtLCBpZCk7XG4gICB9XG5cbiAgIGFkZEFmdGVyKGl0ZW06IGFueSwgaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FkZEFmdGVyJywgaXRlbSwgaWQpO1xuICAgfVxuXG4gICBhZGRUbyhpdGVtOiBhbnksIGlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYWRkVG8nLCBpdGVtLCBpZCk7XG4gICB9XG5cbiAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NsZWFyJyk7XG4gICB9XG5cbiAgIGNoZWNrQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NoZWNrQWxsJyk7XG4gICB9XG5cbiAgIGNoZWNrSXRlbShpdGVtOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjaGVja0l0ZW0nLCBpdGVtLCBjaGVja2VkKTtcbiAgIH1cblxuICAgY29sbGFwc2VBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY29sbGFwc2VBbGwnKTtcbiAgIH1cblxuICAgY29sbGFwc2VJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NvbGxhcHNlSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZGlzYWJsZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZGlzYWJsZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZW5zdXJlVmlzaWJsZShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdlbnN1cmVWaXNpYmxlJywgaXRlbSk7XG4gICB9XG5cbiAgIGVuYWJsZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZW5hYmxlSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBlbmFibGVBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZW5hYmxlQWxsJyk7XG4gICB9XG5cbiAgIGV4cGFuZEFsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdleHBhbmRBbGwnKTtcbiAgIH1cblxuICAgZXhwYW5kSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdleHBhbmRJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldENoZWNrZWRJdGVtcygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUl0ZW0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0Q2hlY2tlZEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldFVuY2hlY2tlZEl0ZW1zKCk6IEFycmF5PGpxd2lkZ2V0cy5UcmVlSXRlbT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRVbmNoZWNrZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRJdGVtcygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUl0ZW0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0SXRlbXMnKTtcbiAgIH1cblxuICAgZ2V0SXRlbShlbGVtZW50OiBhbnkpOiBqcXdpZGdldHMuVHJlZUl0ZW0ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRJdGVtJywgZWxlbWVudCk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGVkSXRlbSgpOiBqcXdpZGdldHMuVHJlZUl0ZW0ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRTZWxlY3RlZEl0ZW0nKTtcbiAgIH1cblxuICAgZ2V0UHJldkl0ZW0oaXRlbTogYW55KToganF3aWRnZXRzLlRyZWVJdGVtIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0UHJldkl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZ2V0TmV4dEl0ZW0oaXRlbTogYW55KToganF3aWRnZXRzLlRyZWVJdGVtIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0TmV4dEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgaGl0VGVzdChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnaGl0VGVzdCcsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIHJlbW92ZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgncmVtb3ZlSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZWxlY3RJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3NlbGVjdEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgdW5jaGVja0FsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd1bmNoZWNrQWxsJyk7XG4gICB9XG5cbiAgIHVuY2hlY2tJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3VuY2hlY2tJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHVwZGF0ZUl0ZW0oaXRlbTogYW55LCBuZXdJdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd1cGRhdGVJdGVtJywgaXRlbSwgbmV3SXRlbSk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4VHJlZUNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25JdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYWRkZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFkZGVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoZWNrQ2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGVja0NoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ1N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ0VuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ0VuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdleHBhbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkV4cGFuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1DbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyZW1vdmVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZW1vdmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhUcmVlQ29tcG9uZW50XG4iXX0=