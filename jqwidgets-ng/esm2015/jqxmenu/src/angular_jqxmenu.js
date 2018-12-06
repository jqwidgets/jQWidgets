import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxMenuComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new EventEmitter();
        this.onItemclick = new EventEmitter();
        this.onShown = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
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
        this.host.jqxMenu('setOptions', options);
    }
    // jqxMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoCloseInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoSizeMainItems(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoCloseOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoOpenPopup(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoCloseOnMouseLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    clickToOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTopLevelArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    }
    // jqxMenuComponent functions
    /**
     * @param {?} itemID
     * @return {?}
     */
    closeItem(itemID) {
        this.host.jqxMenu('closeItem', itemID);
    }
    /**
     * @return {?}
     */
    close() {
        this.host.jqxMenu('close');
    }
    /**
     * @param {?} itemID
     * @param {?} value
     * @return {?}
     */
    disable(itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxMenu('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxMenu('focus');
    }
    /**
     * @return {?}
     */
    minimize() {
        this.host.jqxMenu('minimize');
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    open(left, top) {
        this.host.jqxMenu('open', left, top);
    }
    /**
     * @param {?} itemID
     * @return {?}
     */
    openItem(itemID) {
        this.host.jqxMenu('openItem', itemID);
    }
    /**
     * @return {?}
     */
    restore() {
        this.host.jqxMenu('restore');
    }
    /**
     * @param {?} item
     * @param {?} horizontaldirection
     * @param {?} verticaldirection
     * @return {?}
     */
    setItemOpenDirection(item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('closed', (eventData) => { this.onClosed.emit(eventData); });
        this.host.on('itemclick', (eventData) => { this.onItemclick.emit(eventData); });
        this.host.on('shown', (eventData) => { this.onShown.emit(eventData); });
    }
} //jqxMenuComponent
jqxMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxMenu',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxMenuComponent.propDecorators = {
    attrAnimationShowDuration: [{ type: Input, args: ['animationShowDuration',] }],
    attrAnimationHideDuration: [{ type: Input, args: ['animationHideDuration',] }],
    attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
    attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
    attrAutoCloseInterval: [{ type: Input, args: ['autoCloseInterval',] }],
    attrAutoSizeMainItems: [{ type: Input, args: ['autoSizeMainItems',] }],
    attrAutoCloseOnClick: [{ type: Input, args: ['autoCloseOnClick',] }],
    attrAutoOpenPopup: [{ type: Input, args: ['autoOpenPopup',] }],
    attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
    attrAutoCloseOnMouseLeave: [{ type: Input, args: ['autoCloseOnMouseLeave',] }],
    attrClickToOpen: [{ type: Input, args: ['clickToOpen',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrEasing: [{ type: Input, args: ['easing',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrMinimizeWidth: [{ type: Input, args: ['minimizeWidth',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrShowTopLevelArrows: [{ type: Input, args: ['showTopLevelArrows',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClosed: [{ type: Output }],
    onItemclick: [{ type: Output }],
    onShown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationShowDuration;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationHideDuration;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseInterval;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoSizeMainItems;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseOnClick;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoOpenPopup;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseOnMouseLeave;
    /** @type {?} */
    jqxMenuComponent.prototype.attrClickToOpen;
    /** @type {?} */
    jqxMenuComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxMenuComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxMenuComponent.prototype.attrEasing;
    /** @type {?} */
    jqxMenuComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxMenuComponent.prototype.attrMinimizeWidth;
    /** @type {?} */
    jqxMenuComponent.prototype.attrMode;
    /** @type {?} */
    jqxMenuComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxMenuComponent.prototype.attrRtl;
    /** @type {?} */
    jqxMenuComponent.prototype.attrShowTopLevelArrows;
    /** @type {?} */
    jqxMenuComponent.prototype.attrSource;
    /** @type {?} */
    jqxMenuComponent.prototype.attrTheme;
    /** @type {?} */
    jqxMenuComponent.prototype.attrWidth;
    /** @type {?} */
    jqxMenuComponent.prototype.attrHeight;
    /** @type {?} */
    jqxMenuComponent.prototype.autoCreate;
    /** @type {?} */
    jqxMenuComponent.prototype.properties;
    /** @type {?} */
    jqxMenuComponent.prototype.host;
    /** @type {?} */
    jqxMenuComponent.prototype.elementRef;
    /** @type {?} */
    jqxMenuComponent.prototype.widgetObject;
    /** @type {?} */
    jqxMenuComponent.prototype.onClosed;
    /** @type {?} */
    jqxMenuComponent.prototype.onItemclick;
    /** @type {?} */
    jqxMenuComponent.prototype.onShown;
    /* Skipping unhandled member: ;*/
}
