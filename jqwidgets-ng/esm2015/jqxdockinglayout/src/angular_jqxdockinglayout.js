import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxribbon from '../../jqwidgets/jqxribbon';
import * as jqxlayout from '../../jqwidgets/jqxlayout';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxdockinglayout from '../../jqwidgets/jqxdockinglayout';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDockingLayoutComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
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
        this.host.jqxDockingLayout('setOptions', options);
    }
    // jqxDockingLayoutComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minGroupHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minGroupWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    }
    // jqxDockingLayoutComponent functions
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} position
     * @param {?} panelType
     * @param {?} title
     * @param {?} content
     * @param {?} initContent
     * @return {?}
     */
    addFloatGroup(width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxDockingLayout('destroy');
    }
    /**
     * @param {?} layout
     * @return {?}
     */
    loadLayout(layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxDockingLayout('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxDockingLayout('render');
    }
    /**
     * @return {?}
     */
    saveLayout() {
        return this.host.jqxDockingLayout('saveLayout');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('dock', (eventData) => { this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', (eventData) => { this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', (eventData) => { this.onFloat.emit(eventData); });
        this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
    }
} //jqxDockingLayoutComponent
jqxDockingLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDockingLayout',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDockingLayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDockingLayoutComponent.propDecorators = {
    attrContextMenu: [{ type: Input, args: ['contextMenu',] }],
    attrLayout: [{ type: Input, args: ['layout',] }],
    attrMinGroupHeight: [{ type: Input, args: ['minGroupHeight',] }],
    attrMinGroupWidth: [{ type: Input, args: ['minGroupWidth',] }],
    attrResizable: [{ type: Input, args: ['resizable',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onDock: [{ type: Output }],
    onFloatGroupClosed: [{ type: Output }],
    onFloat: [{ type: Output }],
    onPin: [{ type: Output }],
    onResize: [{ type: Output }],
    onUnpin: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrContextMenu;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrLayout;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrResizable;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.properties;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.host;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onDock;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloatGroupClosed;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloat;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onPin;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onResize;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onUnpin;
    /* Skipping unhandled member: ;*/
}
