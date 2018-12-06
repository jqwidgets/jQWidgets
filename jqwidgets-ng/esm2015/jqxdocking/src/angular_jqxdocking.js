import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxdocking from '../../jqwidgets/jqxdocking';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDockingComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                        this.host.jqxDocking(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
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
        this.host.jqxDocking('setOptions', options);
    }
    // jqxDockingComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    cookies(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cookieOptions(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    floatingWindowOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    windowsMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    windowsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    }
    // jqxDockingComponent functions
    /**
     * @param {?} windowId
     * @param {?} mode
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    addWindow(windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    closeWindow(windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    collapseWindow(windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxDocking('destroy');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    disableWindowResize(windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxDocking('disable');
    }
    /**
     * @return {?}
     */
    exportLayout() {
        return this.host.jqxDocking('exportLayout');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxDocking('enable');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    expandWindow(windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    enableWindowResize(windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxDocking('focus');
    }
    /**
     * @return {?}
     */
    hideAllCloseButtons() {
        this.host.jqxDocking('hideAllCloseButtons');
    }
    /**
     * @return {?}
     */
    hideAllCollapseButtons() {
        this.host.jqxDocking('hideAllCollapseButtons');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    hideCollapseButton(windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    hideCloseButton(windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    }
    /**
     * @param {?} Json
     * @return {?}
     */
    importLayout(Json) {
        this.host.jqxDocking('importLayout', Json);
    }
    /**
     * @param {?} windowId
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    move(windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    pinWindow(windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    }
    /**
     * @param {?} windowId
     * @param {?} mode
     * @return {?}
     */
    setWindowMode(windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    showCloseButton(windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    showCollapseButton(windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    }
    /**
     * @param {?} windowId
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    setWindowPosition(windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    }
    /**
     * @return {?}
     */
    showAllCloseButtons() {
        this.host.jqxDocking('showAllCloseButtons');
    }
    /**
     * @return {?}
     */
    showAllCollapseButtons() {
        this.host.jqxDocking('showAllCollapseButtons');
    }
    /**
     * @param {?} windowId
     * @return {?}
     */
    unpinWindow(windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
    }
} //jqxDockingComponent
jqxDockingComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDocking',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDockingComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDockingComponent.propDecorators = {
    attrCookies: [{ type: Input, args: ['cookies',] }],
    attrCookieOptions: [{ type: Input, args: ['cookieOptions',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrFloatingWindowOpacity: [{ type: Input, args: ['floatingWindowOpacity',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWindowsMode: [{ type: Input, args: ['windowsMode',] }],
    attrWindowsOffset: [{ type: Input, args: ['windowsOffset',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookies;
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookieOptions;
    /** @type {?} */
    jqxDockingComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDockingComponent.prototype.attrFloatingWindowOpacity;
    /** @type {?} */
    jqxDockingComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsOffset;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingComponent.prototype.properties;
    /** @type {?} */
    jqxDockingComponent.prototype.host;
    /** @type {?} */
    jqxDockingComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragStart;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragEnd;
    /* Skipping unhandled member: ;*/
}
