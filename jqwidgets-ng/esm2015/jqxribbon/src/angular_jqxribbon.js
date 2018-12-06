import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxribbon from '../../jqwidgets/jqxribbon';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxRibbonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'reorder', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
        // jqxRibbonComponent events
        this.onChange = new EventEmitter();
        this.onReorder = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
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
        this.host.jqxRibbon('setOptions', options);
    }
    // jqxRibbonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationType', arg);
        }
        else {
            return this.host.jqxRibbon('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationDelay', arg);
        }
        else {
            return this.host.jqxRibbon('animationDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('disabled', arg);
        }
        else {
            return this.host.jqxRibbon('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('height', arg);
        }
        else {
            return this.host.jqxRibbon('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('initContent', arg);
        }
        else {
            return this.host.jqxRibbon('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('mode', arg);
        }
        else {
            return this.host.jqxRibbon('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupCloseMode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('popupCloseMode', arg);
        }
        else {
            return this.host.jqxRibbon('popupCloseMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('position', arg);
        }
        else {
            return this.host.jqxRibbon('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    reorder(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('reorder', arg);
        }
        else {
            return this.host.jqxRibbon('reorder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('rtl', arg);
        }
        else {
            return this.host.jqxRibbon('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectedIndex', arg);
        }
        else {
            return this.host.jqxRibbon('selectedIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectionMode', arg);
        }
        else {
            return this.host.jqxRibbon('selectionMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollPosition', arg);
        }
        else {
            return this.host.jqxRibbon('scrollPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollStep(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollStep', arg);
        }
        else {
            return this.host.jqxRibbon('scrollStep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollDelay', arg);
        }
        else {
            return this.host.jqxRibbon('scrollDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('theme', arg);
        }
        else {
            return this.host.jqxRibbon('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('width', arg);
        }
        else {
            return this.host.jqxRibbon('width');
        }
    }
    // jqxRibbonComponent functions
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    addAt(index, item) {
        this.host.jqxRibbon('addAt', index, item);
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.host.jqxRibbon('clearSelection');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    disableAt(index) {
        this.host.jqxRibbon('disableAt', index);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxRibbon('destroy');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    enableAt(index) {
        this.host.jqxRibbon('enableAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hideAt(index) {
        this.host.jqxRibbon('hideAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        this.host.jqxRibbon('removeAt', index);
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxRibbon('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxRibbon('refresh');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectAt(index) {
        this.host.jqxRibbon('selectAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showAt(index) {
        this.host.jqxRibbon('showAt', index);
    }
    /**
     * @param {?} index
     * @param {?} layout
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    setPopupLayout(index, layout, width, height) {
        this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    updateAt(index, item) {
        this.host.jqxRibbon('updateAt', index, item);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRibbon('val', value);
        }
        else {
            return this.host.jqxRibbon('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('reorder', (eventData) => { this.onReorder.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
} //jqxRibbonComponent
jqxRibbonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxRibbon',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxRibbonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxRibbonComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrAnimationDelay: [{ type: Input, args: ['animationDelay',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrPopupCloseMode: [{ type: Input, args: ['popupCloseMode',] }],
    attrPosition: [{ type: Input, args: ['position',] }],
    attrReorder: [{ type: Input, args: ['reorder',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSelectedIndex: [{ type: Input, args: ['selectedIndex',] }],
    attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
    attrScrollPosition: [{ type: Input, args: ['scrollPosition',] }],
    attrScrollStep: [{ type: Input, args: ['scrollStep',] }],
    attrScrollDelay: [{ type: Input, args: ['scrollDelay',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onReorder: [{ type: Output }],
    onSelect: [{ type: Output }],
    onUnselect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxRibbonComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrAnimationDelay;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrPopupCloseMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrPosition;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrReorder;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrSelectedIndex;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollPosition;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollStep;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrScrollDelay;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRibbonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRibbonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRibbonComponent.prototype.properties;
    /** @type {?} */
    jqxRibbonComponent.prototype.host;
    /** @type {?} */
    jqxRibbonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRibbonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxRibbonComponent.prototype.onChange;
    /** @type {?} */
    jqxRibbonComponent.prototype.onReorder;
    /** @type {?} */
    jqxRibbonComponent.prototype.onSelect;
    /** @type {?} */
    jqxRibbonComponent.prototype.onUnselect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
