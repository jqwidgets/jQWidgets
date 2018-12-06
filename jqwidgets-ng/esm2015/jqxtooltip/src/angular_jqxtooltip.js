import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTooltipComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
        // jqxTooltipComponent events
        this.onClose = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpening = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
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
        this.host.jqxTooltip('setOptions', options);
    }
    // jqxTooltipComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    absolutePositionX(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionX', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionX');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    absolutePositionY(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionY', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionY');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoHide(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHide', arg);
        }
        else {
            return this.host.jqxTooltip('autoHide');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('autoHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationShowDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('content', arg);
        }
        else {
            return this.host.jqxTooltip('content');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('closeOnClick', arg);
        }
        else {
            return this.host.jqxTooltip('closeOnClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('disabled', arg);
        }
        else {
            return this.host.jqxTooltip('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxTooltip('enableBrowserBoundsDetection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('height', arg);
        }
        else {
            return this.host.jqxTooltip('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    left(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('left', arg);
        }
        else {
            return this.host.jqxTooltip('left');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    name(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('name', arg);
        }
        else {
            return this.host.jqxTooltip('name');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('opacity', arg);
        }
        else {
            return this.host.jqxTooltip('opacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('position', arg);
        }
        else {
            return this.host.jqxTooltip('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('rtl', arg);
        }
        else {
            return this.host.jqxTooltip('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showDelay', arg);
        }
        else {
            return this.host.jqxTooltip('showDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showArrow', arg);
        }
        else {
            return this.host.jqxTooltip('showArrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    top(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('top', arg);
        }
        else {
            return this.host.jqxTooltip('top');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    trigger(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('trigger', arg);
        }
        else {
            return this.host.jqxTooltip('trigger');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('theme', arg);
        }
        else {
            return this.host.jqxTooltip('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('width', arg);
        }
        else {
            return this.host.jqxTooltip('width');
        }
    }
    // jqxTooltipComponent functions
    /**
     * @param {?=} index
     * @return {?}
     */
    close(index) {
        this.host.jqxTooltip('close', index);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxTooltip('destroy');
    }
    /**
     * @param {?=} left
     * @param {?=} top
     * @return {?}
     */
    open(left, top) {
        this.host.jqxTooltip('open', left, top);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxTooltip('refresh');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('closing', (eventData) => { this.onClosing.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('opening', (eventData) => { this.onOpening.emit(eventData); });
    }
} //jqxTooltipComponent
jqxTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTooltip',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTooltipComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxTooltipComponent.propDecorators = {
    attrAbsolutePositionX: [{ type: Input, args: ['absolutePositionX',] }],
    attrAbsolutePositionY: [{ type: Input, args: ['absolutePositionY',] }],
    attrAutoHide: [{ type: Input, args: ['autoHide',] }],
    attrAutoHideDelay: [{ type: Input, args: ['autoHideDelay',] }],
    attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
    attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
    attrContent: [{ type: Input, args: ['content',] }],
    attrCloseOnClick: [{ type: Input, args: ['closeOnClick',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
    attrLeft: [{ type: Input, args: ['left',] }],
    attrName: [{ type: Input, args: ['name',] }],
    attrOpacity: [{ type: Input, args: ['opacity',] }],
    attrPosition: [{ type: Input, args: ['position',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrShowDelay: [{ type: Input, args: ['showDelay',] }],
    attrShowArrow: [{ type: Input, args: ['showArrow',] }],
    attrTop: [{ type: Input, args: ['top',] }],
    attrTrigger: [{ type: Input, args: ['trigger',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClose: [{ type: Output }],
    onClosing: [{ type: Output }],
    onOpen: [{ type: Output }],
    onOpening: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAbsolutePositionX;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAbsolutePositionY;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAutoHide;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAutoHideDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrContent;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrCloseOnClick;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrLeft;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrName;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrPosition;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrShowDelay;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTop;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTrigger;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTooltipComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTooltipComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTooltipComponent.prototype.properties;
    /** @type {?} */
    jqxTooltipComponent.prototype.host;
    /** @type {?} */
    jqxTooltipComponent.prototype.elementRef;
    /** @type {?} */
    jqxTooltipComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTooltipComponent.prototype.onClose;
    /** @type {?} */
    jqxTooltipComponent.prototype.onClosing;
    /** @type {?} */
    jqxTooltipComponent.prototype.onOpen;
    /** @type {?} */
    jqxTooltipComponent.prototype.onOpening;
    /* Skipping unhandled member: ;*/
}
