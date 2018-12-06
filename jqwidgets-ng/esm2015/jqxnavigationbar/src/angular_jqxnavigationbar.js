import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxnavigationbar from '../../jqwidgets/jqxnavigationbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxNavigationBarComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxNavigationBarComponent events
        this.onCollapsingItem = new EventEmitter();
        this.onCollapsedItem = new EventEmitter();
        this.onExpandingItem = new EventEmitter();
        this.onExpandedItem = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
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
        this.host.jqxNavigationBar('setOptions', options);
    }
    // jqxNavigationBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('animationType', arg);
        }
        else {
            return this.host.jqxNavigationBar('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('arrowPosition', arg);
        }
        else {
            return this.host.jqxNavigationBar('arrowPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('collapseAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('disabled', arg);
        }
        else {
            return this.host.jqxNavigationBar('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    expandMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    expandedIndexes(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandedIndexes', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandedIndexes');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('height', arg);
        }
        else {
            return this.host.jqxNavigationBar('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('initContent', arg);
        }
        else {
            return this.host.jqxNavigationBar('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('rtl', arg);
        }
        else {
            return this.host.jqxNavigationBar('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('showArrow', arg);
        }
        else {
            return this.host.jqxNavigationBar('showArrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('theme', arg);
        }
        else {
            return this.host.jqxNavigationBar('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('toggleMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('toggleMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('width', arg);
        }
        else {
            return this.host.jqxNavigationBar('width');
        }
    }
    // jqxNavigationBarComponent functions
    /**
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    add(header, content) {
        this.host.jqxNavigationBar('add', header, content);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    collapseAt(index) {
        this.host.jqxNavigationBar('collapseAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    disableAt(index) {
        this.host.jqxNavigationBar('disableAt', index);
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxNavigationBar('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxNavigationBar('destroy');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    expandAt(index) {
        this.host.jqxNavigationBar('expandAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    enableAt(index) {
        this.host.jqxNavigationBar('enableAt', index);
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxNavigationBar('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxNavigationBar('focus');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getHeaderContentAt(index) {
        return this.host.jqxNavigationBar('getHeaderContentAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getContentAt(index) {
        return this.host.jqxNavigationBar('getContentAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hideArrowAt(index) {
        this.host.jqxNavigationBar('hideArrowAt', index);
    }
    /**
     * @return {?}
     */
    invalidate() {
        this.host.jqxNavigationBar('invalidate');
    }
    /**
     * @param {?} Index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    insert(Index, header, content) {
        this.host.jqxNavigationBar('insert', Index, header, content);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxNavigationBar('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxNavigationBar('render');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.host.jqxNavigationBar('remove', index);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    setContentAt(index, item) {
        this.host.jqxNavigationBar('setContentAt', index, item);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    setHeaderContentAt(index, item) {
        this.host.jqxNavigationBar('setHeaderContentAt', index, item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showArrowAt(index) {
        this.host.jqxNavigationBar('showArrowAt', index);
    }
    /**
     * @param {?} index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    update(index, header, content) {
        this.host.jqxNavigationBar('update', index, header, content);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNavigationBar('val', value);
        }
        else {
            return this.host.jqxNavigationBar('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('collapsingItem', (eventData) => { this.onCollapsingItem.emit(eventData); });
        this.host.on('collapsedItem', (eventData) => { this.onCollapsedItem.emit(eventData); });
        this.host.on('expandingItem', (eventData) => { this.onExpandingItem.emit(eventData); });
        this.host.on('expandedItem', (eventData) => { this.onExpandedItem.emit(eventData); });
    }
} //jqxNavigationBarComponent
jqxNavigationBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxNavigationBar',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxNavigationBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxNavigationBarComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrArrowPosition: [{ type: Input, args: ['arrowPosition',] }],
    attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrExpandAnimationDuration: [{ type: Input, args: ['expandAnimationDuration',] }],
    attrExpandMode: [{ type: Input, args: ['expandMode',] }],
    attrExpandedIndexes: [{ type: Input, args: ['expandedIndexes',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrShowArrow: [{ type: Input, args: ['showArrow',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onCollapsingItem: [{ type: Output }],
    onCollapsedItem: [{ type: Output }],
    onExpandingItem: [{ type: Output }],
    onExpandedItem: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrArrowPosition;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrCollapseAnimationDuration;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandAnimationDuration;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandMode;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandedIndexes;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrToggleMode;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.properties;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.host;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onCollapsingItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onCollapsedItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onExpandingItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onExpandedItem;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
