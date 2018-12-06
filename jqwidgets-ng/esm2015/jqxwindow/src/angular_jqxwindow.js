import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxWindowComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
        // jqxWindowComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onMoving = new EventEmitter();
        this.onMoved = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onResizing = new EventEmitter();
        this.onResized = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxWindow(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                        this.host.jqxWindow(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
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
        this.host.jqxWindow('setOptions', options);
    }
    // jqxWindowComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('autoOpen', arg);
        }
        else {
            return this.host.jqxWindow('autoOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('animationType', arg);
        }
        else {
            return this.host.jqxWindow('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapsed(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapsed', arg);
        }
        else {
            return this.host.jqxWindow('collapsed');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('collapseAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('content', arg);
        }
        else {
            return this.host.jqxWindow('content');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('closeAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonSize', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeButtonAction(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonAction', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonAction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cancelButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('cancelButton', arg);
        }
        else {
            return this.host.jqxWindow('cancelButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragArea(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('dragArea', arg);
        }
        else {
            return this.host.jqxWindow('dragArea');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    draggable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('draggable', arg);
        }
        else {
            return this.host.jqxWindow('draggable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('disabled', arg);
        }
        else {
            return this.host.jqxWindow('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('height', arg);
        }
        else {
            return this.host.jqxWindow('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('initContent', arg);
        }
        else {
            return this.host.jqxWindow('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('isModal', arg);
        }
        else {
            return this.host.jqxWindow('isModal');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardCloseKey(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardCloseKey', arg);
        }
        else {
            return this.host.jqxWindow('keyboardCloseKey');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxWindow('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minHeight', arg);
        }
        else {
            return this.host.jqxWindow('minHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxHeight', arg);
        }
        else {
            return this.host.jqxWindow('maxHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minWidth', arg);
        }
        else {
            return this.host.jqxWindow('minWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxWidth', arg);
        }
        else {
            return this.host.jqxWindow('maxWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    modalOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalOpacity', arg);
        }
        else {
            return this.host.jqxWindow('modalOpacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    modalZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    modalBackgroundZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalBackgroundZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalBackgroundZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    okButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('okButton', arg);
        }
        else {
            return this.host.jqxWindow('okButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('position', arg);
        }
        else {
            return this.host.jqxWindow('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('rtl', arg);
        }
        else {
            return this.host.jqxWindow('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('resizable', arg);
        }
        else {
            return this.host.jqxWindow('resizable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('showAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCloseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCloseButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showCollapseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCollapseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCollapseButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('theme', arg);
        }
        else {
            return this.host.jqxWindow('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('title', arg);
        }
        else {
            return this.host.jqxWindow('title');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('width', arg);
        }
        else {
            return this.host.jqxWindow('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('zIndex', arg);
        }
        else {
            return this.host.jqxWindow('zIndex');
        }
    }
    // jqxWindowComponent functions
    /**
     * @return {?}
     */
    bringToFront() {
        this.host.jqxWindow('bringToFront');
    }
    /**
     * @return {?}
     */
    close() {
        this.host.jqxWindow('close');
    }
    /**
     * @return {?}
     */
    collapse() {
        this.host.jqxWindow('collapse');
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.host.jqxWindow('closeAll');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxWindow('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxWindow('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxWindow('enable');
    }
    /**
     * @return {?}
     */
    expand() {
        this.host.jqxWindow('expand');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxWindow('focus');
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this.host.jqxWindow('isOpen');
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    move(top, left) {
        this.host.jqxWindow('move', top, left);
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxWindow('open');
    }
    /**
     * @return {?}
     */
    hide() {
        this.host.jqxWindow('hide');
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    resize(top, left) {
        this.host.jqxWindow('resize', top, left);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    setTitle(title) {
        this.host.jqxWindow('setTitle', title);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        this.host.jqxWindow('setContent', content);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('moving', (eventData) => { this.onMoving.emit(eventData); });
        this.host.on('moved', (eventData) => { this.onMoved.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('resizing', (eventData) => { this.onResizing.emit(eventData); });
        this.host.on('resized', (eventData) => { this.onResized.emit(eventData); });
    }
} //jqxWindowComponent
jqxWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxWindow',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxWindowComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxWindowComponent.propDecorators = {
    attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrCollapsed: [{ type: Input, args: ['collapsed',] }],
    attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
    attrContent: [{ type: Input, args: ['content',] }],
    attrCloseAnimationDuration: [{ type: Input, args: ['closeAnimationDuration',] }],
    attrCloseButtonSize: [{ type: Input, args: ['closeButtonSize',] }],
    attrCloseButtonAction: [{ type: Input, args: ['closeButtonAction',] }],
    attrCancelButton: [{ type: Input, args: ['cancelButton',] }],
    attrDragArea: [{ type: Input, args: ['dragArea',] }],
    attrDraggable: [{ type: Input, args: ['draggable',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrIsModal: [{ type: Input, args: ['isModal',] }],
    attrKeyboardCloseKey: [{ type: Input, args: ['keyboardCloseKey',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrMinHeight: [{ type: Input, args: ['minHeight',] }],
    attrMaxHeight: [{ type: Input, args: ['maxHeight',] }],
    attrMinWidth: [{ type: Input, args: ['minWidth',] }],
    attrMaxWidth: [{ type: Input, args: ['maxWidth',] }],
    attrModalOpacity: [{ type: Input, args: ['modalOpacity',] }],
    attrModalZIndex: [{ type: Input, args: ['modalZIndex',] }],
    attrModalBackgroundZIndex: [{ type: Input, args: ['modalBackgroundZIndex',] }],
    attrOkButton: [{ type: Input, args: ['okButton',] }],
    attrPosition: [{ type: Input, args: ['position',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrResizable: [{ type: Input, args: ['resizable',] }],
    attrShowAnimationDuration: [{ type: Input, args: ['showAnimationDuration',] }],
    attrShowCloseButton: [{ type: Input, args: ['showCloseButton',] }],
    attrShowCollapseButton: [{ type: Input, args: ['showCollapseButton',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTitle: [{ type: Input, args: ['title',] }],
    attrZIndex: [{ type: Input, args: ['zIndex',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClose: [{ type: Output }],
    onCollapse: [{ type: Output }],
    onExpand: [{ type: Output }],
    onMoving: [{ type: Output }],
    onMoved: [{ type: Output }],
    onOpen: [{ type: Output }],
    onResizing: [{ type: Output }],
    onResized: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxWindowComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxWindowComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCollapsed;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCollapseAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrContent;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseButtonSize;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCloseButtonAction;
    /** @type {?} */
    jqxWindowComponent.prototype.attrCancelButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDragArea;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDraggable;
    /** @type {?} */
    jqxWindowComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxWindowComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxWindowComponent.prototype.attrIsModal;
    /** @type {?} */
    jqxWindowComponent.prototype.attrKeyboardCloseKey;
    /** @type {?} */
    jqxWindowComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMinHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMaxHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMinWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrMaxWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalOpacity;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrModalBackgroundZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrOkButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrPosition;
    /** @type {?} */
    jqxWindowComponent.prototype.attrRtl;
    /** @type {?} */
    jqxWindowComponent.prototype.attrResizable;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowAnimationDuration;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowCloseButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrShowCollapseButton;
    /** @type {?} */
    jqxWindowComponent.prototype.attrTheme;
    /** @type {?} */
    jqxWindowComponent.prototype.attrTitle;
    /** @type {?} */
    jqxWindowComponent.prototype.attrZIndex;
    /** @type {?} */
    jqxWindowComponent.prototype.attrWidth;
    /** @type {?} */
    jqxWindowComponent.prototype.attrHeight;
    /** @type {?} */
    jqxWindowComponent.prototype.autoCreate;
    /** @type {?} */
    jqxWindowComponent.prototype.properties;
    /** @type {?} */
    jqxWindowComponent.prototype.host;
    /** @type {?} */
    jqxWindowComponent.prototype.elementRef;
    /** @type {?} */
    jqxWindowComponent.prototype.widgetObject;
    /** @type {?} */
    jqxWindowComponent.prototype.onClose;
    /** @type {?} */
    jqxWindowComponent.prototype.onCollapse;
    /** @type {?} */
    jqxWindowComponent.prototype.onExpand;
    /** @type {?} */
    jqxWindowComponent.prototype.onMoving;
    /** @type {?} */
    jqxWindowComponent.prototype.onMoved;
    /** @type {?} */
    jqxWindowComponent.prototype.onOpen;
    /** @type {?} */
    jqxWindowComponent.prototype.onResizing;
    /** @type {?} */
    jqxWindowComponent.prototype.onResized;
    /* Skipping unhandled member: ;*/
}
