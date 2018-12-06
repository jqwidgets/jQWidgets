import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollview from '../../jqwidgets/jqxscrollview';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxScrollViewComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
        // jqxScrollViewComponent events
        this.onPageChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
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
        this.host.jqxScrollView('setOptions', options);
    }
    // jqxScrollViewComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('animationDuration', arg);
        }
        else {
            return this.host.jqxScrollView('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    bounceEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('bounceEnabled', arg);
        }
        else {
            return this.host.jqxScrollView('bounceEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    buttonsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('buttonsOffset', arg);
        }
        else {
            return this.host.jqxScrollView('buttonsOffset');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    currentPage(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('currentPage', arg);
        }
        else {
            return this.host.jqxScrollView('currentPage');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('disabled', arg);
        }
        else {
            return this.host.jqxScrollView('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('height', arg);
        }
        else {
            return this.host.jqxScrollView('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    moveThreshold(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('moveThreshold', arg);
        }
        else {
            return this.host.jqxScrollView('moveThreshold');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('showButtons', arg);
        }
        else {
            return this.host.jqxScrollView('showButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    slideShow(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideShow', arg);
        }
        else {
            return this.host.jqxScrollView('slideShow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    slideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideDuration', arg);
        }
        else {
            return this.host.jqxScrollView('slideDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('theme', arg);
        }
        else {
            return this.host.jqxScrollView('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('width', arg);
        }
        else {
            return this.host.jqxScrollView('width');
        }
    }
    // jqxScrollViewComponent functions
    /**
     * @return {?}
     */
    back() {
        this.host.jqxScrollView('back');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    changePage(index) {
        this.host.jqxScrollView('changePage', index);
    }
    /**
     * @return {?}
     */
    forward() {
        this.host.jqxScrollView('forward');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxScrollView('refresh');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('pageChanged', (eventData) => { this.onPageChanged.emit(eventData); });
    }
} //jqxScrollViewComponent
jqxScrollViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxScrollView',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxScrollViewComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxScrollViewComponent.propDecorators = {
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrBounceEnabled: [{ type: Input, args: ['bounceEnabled',] }],
    attrButtonsOffset: [{ type: Input, args: ['buttonsOffset',] }],
    attrCurrentPage: [{ type: Input, args: ['currentPage',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrMoveThreshold: [{ type: Input, args: ['moveThreshold',] }],
    attrShowButtons: [{ type: Input, args: ['showButtons',] }],
    attrSlideShow: [{ type: Input, args: ['slideShow',] }],
    attrSlideDuration: [{ type: Input, args: ['slideDuration',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onPageChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrBounceEnabled;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrButtonsOffset;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrCurrentPage;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrMoveThreshold;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrShowButtons;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrSlideShow;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrSlideDuration;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrTheme;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrWidth;
    /** @type {?} */
    jqxScrollViewComponent.prototype.attrHeight;
    /** @type {?} */
    jqxScrollViewComponent.prototype.autoCreate;
    /** @type {?} */
    jqxScrollViewComponent.prototype.properties;
    /** @type {?} */
    jqxScrollViewComponent.prototype.host;
    /** @type {?} */
    jqxScrollViewComponent.prototype.elementRef;
    /** @type {?} */
    jqxScrollViewComponent.prototype.widgetObject;
    /** @type {?} */
    jqxScrollViewComponent.prototype.onPageChanged;
    /* Skipping unhandled member: ;*/
}
