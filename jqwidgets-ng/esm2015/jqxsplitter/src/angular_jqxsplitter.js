import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxsplitter from '../../jqwidgets/jqxsplitter';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxSplitterComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'orientation', 'panels', 'resizable', 'splitBarSize', 'showSplitBar', 'theme', 'width'];
        // jqxSplitterComponent events
        this.onCollapsed = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStart = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
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
        this.host.jqxSplitter('setOptions', options);
    }
    // jqxSplitterComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('disabled', arg);
        }
        else {
            return this.host.jqxSplitter('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('height', arg);
        }
        else {
            return this.host.jqxSplitter('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('orientation', arg);
        }
        else {
            return this.host.jqxSplitter('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    panels(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('panels', arg);
        }
        else {
            return this.host.jqxSplitter('panels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('resizable', arg);
        }
        else {
            return this.host.jqxSplitter('resizable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    splitBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('splitBarSize', arg);
        }
        else {
            return this.host.jqxSplitter('splitBarSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showSplitBar(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('showSplitBar', arg);
        }
        else {
            return this.host.jqxSplitter('showSplitBar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('theme', arg);
        }
        else {
            return this.host.jqxSplitter('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('width', arg);
        }
        else {
            return this.host.jqxSplitter('width');
        }
    }
    // jqxSplitterComponent functions
    /**
     * @return {?}
     */
    collapse() {
        this.host.jqxSplitter('collapse');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxSplitter('destroy');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxSplitter('disable');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxSplitter('enable');
    }
    /**
     * @return {?}
     */
    expand() {
        this.host.jqxSplitter('expand');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxSplitter('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxSplitter('refresh');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('resizeStart', (eventData) => { this.onResizeStart.emit(eventData); });
    }
} //jqxSplitterComponent
jqxSplitterComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxSplitter',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxSplitterComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxSplitterComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrPanels: [{ type: Input, args: ['panels',] }],
    attrResizable: [{ type: Input, args: ['resizable',] }],
    attrSplitBarSize: [{ type: Input, args: ['splitBarSize',] }],
    attrShowSplitBar: [{ type: Input, args: ['showSplitBar',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onCollapsed: [{ type: Output }],
    onExpanded: [{ type: Output }],
    onResize: [{ type: Output }],
    onResizeStart: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxSplitterComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrPanels;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrResizable;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrSplitBarSize;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrShowSplitBar;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrTheme;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrWidth;
    /** @type {?} */
    jqxSplitterComponent.prototype.attrHeight;
    /** @type {?} */
    jqxSplitterComponent.prototype.autoCreate;
    /** @type {?} */
    jqxSplitterComponent.prototype.properties;
    /** @type {?} */
    jqxSplitterComponent.prototype.host;
    /** @type {?} */
    jqxSplitterComponent.prototype.elementRef;
    /** @type {?} */
    jqxSplitterComponent.prototype.widgetObject;
    /** @type {?} */
    jqxSplitterComponent.prototype.onCollapsed;
    /** @type {?} */
    jqxSplitterComponent.prototype.onExpanded;
    /** @type {?} */
    jqxSplitterComponent.prototype.onResize;
    /** @type {?} */
    jqxSplitterComponent.prototype.onResizeStart;
    /* Skipping unhandled member: ;*/
}
