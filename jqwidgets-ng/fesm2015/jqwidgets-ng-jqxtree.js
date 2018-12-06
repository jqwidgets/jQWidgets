import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets/jqxpanel';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
import * as jqxtree from '../../jqwidgets/jqxtree';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxTreeComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxTreeModule {
}
jqxTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxTreeComponent],
                exports: [jqxTreeComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxTreeComponent, jqxTreeModule };

