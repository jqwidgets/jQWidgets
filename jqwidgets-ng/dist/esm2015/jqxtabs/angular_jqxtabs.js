import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtabs from '../../jqwidgets-scripts/jqwidgets/jqxtabs';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTabsComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
        // jqxTabsComponent events
        this.onAdd = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelecting = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onTabclick = new EventEmitter();
        this.onUnselecting = new EventEmitter();
        this.onUnselected = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTabs(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                        this.host.jqxTabs(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
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
        this.host.jqxTabs('setOptions', options);
    }
    // jqxTabsComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('animationType', arg);
        }
        else {
            return this.host.jqxTabs('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('autoHeight', arg);
        }
        else {
            return this.host.jqxTabs('autoHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('closeButtonSize', arg);
        }
        else {
            return this.host.jqxTabs('closeButtonSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapsible(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('collapsible', arg);
        }
        else {
            return this.host.jqxTabs('collapsible');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contentTransitionDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('contentTransitionDuration', arg);
        }
        else {
            return this.host.jqxTabs('contentTransitionDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('disabled', arg);
        }
        else {
            return this.host.jqxTabs('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enabledHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enabledHover', arg);
        }
        else {
            return this.host.jqxTabs('enabledHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableScrollAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableScrollAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableScrollAnimation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableDropAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableDropAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableDropAnimation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('height', arg);
        }
        else {
            return this.host.jqxTabs('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initTabContent(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('initTabContent', arg);
        }
        else {
            return this.host.jqxTabs('initTabContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTabs('keyboardNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    next(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('next', arg);
        }
        else {
            return this.host.jqxTabs('next');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    previous(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('previous', arg);
        }
        else {
            return this.host.jqxTabs('previous');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('position', arg);
        }
        else {
            return this.host.jqxTabs('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    reorder(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('reorder', arg);
        }
        else {
            return this.host.jqxTabs('reorder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('rtl', arg);
        }
        else {
            return this.host.jqxTabs('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollAnimationDuration', arg);
        }
        else {
            return this.host.jqxTabs('scrollAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedItem(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectedItem', arg);
        }
        else {
            return this.host.jqxTabs('selectedItem');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionTracker(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectionTracker', arg);
        }
        else {
            return this.host.jqxTabs('selectionTracker');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollable(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollable', arg);
        }
        else {
            return this.host.jqxTabs('scrollable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollPosition', arg);
        }
        else {
            return this.host.jqxTabs('scrollPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollStep(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollStep', arg);
        }
        else {
            return this.host.jqxTabs('scrollStep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showCloseButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('showCloseButtons', arg);
        }
        else {
            return this.host.jqxTabs('showCloseButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('toggleMode', arg);
        }
        else {
            return this.host.jqxTabs('toggleMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('theme', arg);
        }
        else {
            return this.host.jqxTabs('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('width', arg);
        }
        else {
            return this.host.jqxTabs('width');
        }
    }
    // jqxTabsComponent functions
    /**
     * @param {?} index
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    addAt(index, title, content) {
        this.host.jqxTabs('addAt', index, title, content);
    }
    /**
     * @param {?} htmlElement1
     * @param {?} htmlElement2
     * @return {?}
     */
    addFirst(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
    }
    /**
     * @param {?} htmlElement1
     * @param {?=} htmlElement2
     * @return {?}
     */
    addLast(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
    }
    /**
     * @return {?}
     */
    collapse() {
        this.host.jqxTabs('collapse');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxTabs('disable');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    disableAt(index) {
        this.host.jqxTabs('disableAt', index);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxTabs('destroy');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ensureVisible(index) {
        this.host.jqxTabs('ensureVisible', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    enableAt(index) {
        this.host.jqxTabs('enableAt', index);
    }
    /**
     * @return {?}
     */
    expand() {
        this.host.jqxTabs('expand');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxTabs('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxTabs('focus');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getTitleAt(index) {
        return this.host.jqxTabs('getTitleAt', index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getContentAt(index) {
        return this.host.jqxTabs('getContentAt', index);
    }
    /**
     * @return {?}
     */
    getDisabledTabsCount() {
        return this.host.jqxTabs('getDisabledTabsCount');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hideCloseButtonAt(index) {
        this.host.jqxTabs('hideCloseButtonAt', index);
    }
    /**
     * @return {?}
     */
    hideAllCloseButtons() {
        this.host.jqxTabs('hideAllCloseButtons');
    }
    /**
     * @return {?}
     */
    length() {
        return this.host.jqxTabs('length');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        this.host.jqxTabs('removeAt', index);
    }
    /**
     * @return {?}
     */
    removeFirst() {
        this.host.jqxTabs('removeFirst');
    }
    /**
     * @return {?}
     */
    removeLast() {
        this.host.jqxTabs('removeLast');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    select(index) {
        this.host.jqxTabs('select', index);
    }
    /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    setContentAt(index, htmlElement) {
        this.host.jqxTabs('setContentAt', index, htmlElement);
    }
    /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    setTitleAt(index, htmlElement) {
        this.host.jqxTabs('setTitleAt', index, htmlElement);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showCloseButtonAt(index) {
        this.host.jqxTabs('showCloseButtonAt', index);
    }
    /**
     * @return {?}
     */
    showAllCloseButtons() {
        this.host.jqxTabs('showAllCloseButtons');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTabs('val', value);
        }
        else {
            return this.host.jqxTabs('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('add', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAdd.emit(eventData); }));
        this.host.on('collapsed', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCollapsed.emit(eventData); }));
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragStart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDragEnd.emit(eventData); }));
        this.host.on('expanded', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onExpanded.emit(eventData); }));
        this.host.on('removed', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRemoved.emit(eventData); }));
        this.host.on('selecting', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSelecting.emit(eventData); }));
        this.host.on('selected', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSelected.emit(eventData); }));
        this.host.on('tabclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onTabclick.emit(eventData); }));
        this.host.on('unselecting', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUnselecting.emit(eventData); }));
        this.host.on('unselected', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUnselected.emit(eventData); }));
    }
} //jqxTabsComponent
jqxTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTabs',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxTabsComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrAutoHeight: [{ type: Input, args: ['autoHeight',] }],
    attrCloseButtonSize: [{ type: Input, args: ['closeButtonSize',] }],
    attrCollapsible: [{ type: Input, args: ['collapsible',] }],
    attrContentTransitionDuration: [{ type: Input, args: ['contentTransitionDuration',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnabledHover: [{ type: Input, args: ['enabledHover',] }],
    attrEnableScrollAnimation: [{ type: Input, args: ['enableScrollAnimation',] }],
    attrEnableDropAnimation: [{ type: Input, args: ['enableDropAnimation',] }],
    attrInitTabContent: [{ type: Input, args: ['initTabContent',] }],
    attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
    attrNext: [{ type: Input, args: ['next',] }],
    attrPrevious: [{ type: Input, args: ['previous',] }],
    attrPosition: [{ type: Input, args: ['position',] }],
    attrReorder: [{ type: Input, args: ['reorder',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrScrollAnimationDuration: [{ type: Input, args: ['scrollAnimationDuration',] }],
    attrSelectedItem: [{ type: Input, args: ['selectedItem',] }],
    attrSelectionTracker: [{ type: Input, args: ['selectionTracker',] }],
    attrScrollable: [{ type: Input, args: ['scrollable',] }],
    attrScrollPosition: [{ type: Input, args: ['scrollPosition',] }],
    attrScrollStep: [{ type: Input, args: ['scrollStep',] }],
    attrShowCloseButtons: [{ type: Input, args: ['showCloseButtons',] }],
    attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onAdd: [{ type: Output }],
    onCollapsed: [{ type: Output }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onExpanded: [{ type: Output }],
    onRemoved: [{ type: Output }],
    onSelecting: [{ type: Output }],
    onSelected: [{ type: Output }],
    onTabclick: [{ type: Output }],
    onUnselecting: [{ type: Output }],
    onUnselected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxTabsComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxTabsComponent.prototype.attrAutoHeight;
    /** @type {?} */
    jqxTabsComponent.prototype.attrCloseButtonSize;
    /** @type {?} */
    jqxTabsComponent.prototype.attrCollapsible;
    /** @type {?} */
    jqxTabsComponent.prototype.attrContentTransitionDuration;
    /** @type {?} */
    jqxTabsComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTabsComponent.prototype.attrEnabledHover;
    /** @type {?} */
    jqxTabsComponent.prototype.attrEnableScrollAnimation;
    /** @type {?} */
    jqxTabsComponent.prototype.attrEnableDropAnimation;
    /** @type {?} */
    jqxTabsComponent.prototype.attrInitTabContent;
    /** @type {?} */
    jqxTabsComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxTabsComponent.prototype.attrNext;
    /** @type {?} */
    jqxTabsComponent.prototype.attrPrevious;
    /** @type {?} */
    jqxTabsComponent.prototype.attrPosition;
    /** @type {?} */
    jqxTabsComponent.prototype.attrReorder;
    /** @type {?} */
    jqxTabsComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTabsComponent.prototype.attrScrollAnimationDuration;
    /** @type {?} */
    jqxTabsComponent.prototype.attrSelectedItem;
    /** @type {?} */
    jqxTabsComponent.prototype.attrSelectionTracker;
    /** @type {?} */
    jqxTabsComponent.prototype.attrScrollable;
    /** @type {?} */
    jqxTabsComponent.prototype.attrScrollPosition;
    /** @type {?} */
    jqxTabsComponent.prototype.attrScrollStep;
    /** @type {?} */
    jqxTabsComponent.prototype.attrShowCloseButtons;
    /** @type {?} */
    jqxTabsComponent.prototype.attrToggleMode;
    /** @type {?} */
    jqxTabsComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTabsComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTabsComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTabsComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTabsComponent.prototype.properties;
    /** @type {?} */
    jqxTabsComponent.prototype.host;
    /** @type {?} */
    jqxTabsComponent.prototype.elementRef;
    /** @type {?} */
    jqxTabsComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTabsComponent.prototype.onAdd;
    /** @type {?} */
    jqxTabsComponent.prototype.onCollapsed;
    /** @type {?} */
    jqxTabsComponent.prototype.onDragStart;
    /** @type {?} */
    jqxTabsComponent.prototype.onDragEnd;
    /** @type {?} */
    jqxTabsComponent.prototype.onExpanded;
    /** @type {?} */
    jqxTabsComponent.prototype.onRemoved;
    /** @type {?} */
    jqxTabsComponent.prototype.onSelecting;
    /** @type {?} */
    jqxTabsComponent.prototype.onSelected;
    /** @type {?} */
    jqxTabsComponent.prototype.onTabclick;
    /** @type {?} */
    jqxTabsComponent.prototype.onUnselecting;
    /** @type {?} */
    jqxTabsComponent.prototype.onUnselected;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0YWJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRhYnMvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFxQzFCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsMkJBQTJCLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyx1QkFBdUIsRUFBQyxxQkFBcUIsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyx5QkFBeUIsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQStibmEsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLElB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LHNDQUF1Qjs7SUFDdkIsd0NBQWlDOztJQTRiakMsaUNBQXFDOztJQUNyQyx1Q0FBMkM7O0lBQzNDLHVDQUEyQzs7SUFDM0MscUNBQXlDOztJQUN6QyxzQ0FBMEM7O0lBQzFDLHFDQUF5Qzs7SUFDekMsdUNBQTJDOztJQUMzQyxzQ0FBMEM7O0lBQzFDLHNDQUEwQzs7SUFDMUMseUNBQTZDOztJQUM3Qyx3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRhYnMnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uVHlwZScpIGF0dHJBbmltYXRpb25UeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2F1dG9IZWlnaHQnKSBhdHRyQXV0b0hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2xvc2VCdXR0b25TaXplJykgYXR0ckNsb3NlQnV0dG9uU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdjb2xsYXBzaWJsZScpIGF0dHJDb2xsYXBzaWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGVudFRyYW5zaXRpb25EdXJhdGlvbicpIGF0dHJDb250ZW50VHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVkSG92ZXInKSBhdHRyRW5hYmxlZEhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVTY3JvbGxBbmltYXRpb24nKSBhdHRyRW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVEcm9wQW5pbWF0aW9uJykgYXR0ckVuYWJsZURyb3BBbmltYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2luaXRUYWJDb250ZW50JykgYXR0ckluaXRUYWJDb250ZW50OiAodGFiPzogbnVtYmVyKSA9PiB2b2lkO1xuICAgQElucHV0KCdrZXlib2FyZE5hdmlnYXRpb24nKSBhdHRyS2V5Ym9hcmROYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCduZXh0JykgYXR0ck5leHQ6IGFueTtcbiAgIEBJbnB1dCgncHJldmlvdXMnKSBhdHRyUHJldmlvdXM6IGFueTtcbiAgIEBJbnB1dCgncG9zaXRpb24nKSBhdHRyUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgncmVvcmRlcicpIGF0dHJSZW9yZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzY3JvbGxBbmltYXRpb25EdXJhdGlvbicpIGF0dHJTY3JvbGxBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdzZWxlY3RlZEl0ZW0nKSBhdHRyU2VsZWN0ZWRJdGVtOiBudW1iZXI7XG4gICBASW5wdXQoJ3NlbGVjdGlvblRyYWNrZXInKSBhdHRyU2VsZWN0aW9uVHJhY2tlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsYWJsZScpIGF0dHJTY3JvbGxhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdzY3JvbGxQb3NpdGlvbicpIGF0dHJTY3JvbGxQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzY3JvbGxTdGVwJykgYXR0clNjcm9sbFN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2hvd0Nsb3NlQnV0dG9ucycpIGF0dHJTaG93Q2xvc2VCdXR0b25zOiBib29sZWFuO1xuICAgQElucHV0KCd0b2dnbGVNb2RlJykgYXR0clRvZ2dsZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYXV0b0hlaWdodCcsJ2Nsb3NlQnV0dG9uU2l6ZScsJ2NvbGxhcHNpYmxlJywnY29udGVudFRyYW5zaXRpb25EdXJhdGlvbicsJ2Rpc2FibGVkJywnZW5hYmxlZEhvdmVyJywnZW5hYmxlU2Nyb2xsQW5pbWF0aW9uJywnZW5hYmxlRHJvcEFuaW1hdGlvbicsJ2hlaWdodCcsJ2luaXRUYWJDb250ZW50Jywna2V5Ym9hcmROYXZpZ2F0aW9uJywnbmV4dCcsJ3ByZXZpb3VzJywncG9zaXRpb24nLCdyZW9yZGVyJywncnRsJywnc2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24nLCdzZWxlY3RlZEl0ZW0nLCdzZWxlY3Rpb25UcmFja2VyJywnc2Nyb2xsYWJsZScsJ3Njcm9sbFBvc2l0aW9uJywnc2Nyb2xsU3RlcCcsJ3Nob3dDbG9zZUJ1dHRvbnMnLCd0b2dnbGVNb2RlJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhUYWJzO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFRhYnModGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnModGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4VGFicyh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicyh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VGFicycsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFRhYnNDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uVHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2FuaW1hdGlvblR5cGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnYXV0b0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnYXV0b0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZUJ1dHRvblNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdjbG9zZUJ1dHRvblNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2Nsb3NlQnV0dG9uU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xsYXBzaWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnY29sbGFwc2libGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2NvbGxhcHNpYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRlbnRUcmFuc2l0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdjb250ZW50VHJhbnNpdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdjb250ZW50VHJhbnNpdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlZEhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGVkSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZWRIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVTY3JvbGxBbmltYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZVNjcm9sbEFuaW1hdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnZW5hYmxlU2Nyb2xsQW5pbWF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZURyb3BBbmltYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZURyb3BBbmltYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZURyb3BBbmltYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdFRhYkNvbnRlbnQoYXJnPzogKHRhYj86IG51bWJlcikgPT4gdm9pZCk6ICh0YWI/OiBudW1iZXIpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2luaXRUYWJDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdpbml0VGFiQ29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZE5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5leHQoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCduZXh0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCduZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByZXZpb3VzKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygncHJldmlvdXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3ByZXZpb3VzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygncG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlb3JkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Jlb3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Jlb3JkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxBbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbEFuaW1hdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxBbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZEl0ZW0oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZWxlY3RlZEl0ZW0nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3NlbGVjdGVkSXRlbScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25UcmFja2VyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZWxlY3Rpb25UcmFja2VyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdzZWxlY3Rpb25UcmFja2VyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbGFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbGFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxQb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnc2Nyb2xsUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsU3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbFN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbFN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Nsb3NlQnV0dG9ucyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnc2hvd0Nsb3NlQnV0dG9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnc2hvd0Nsb3NlQnV0dG9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygndG9nZ2xlTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygndG9nZ2xlTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFRhYnNDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGRBdChpbmRleDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdhZGRBdCcsIGluZGV4LCB0aXRsZSwgY29udGVudCk7XG4gICB9XG5cbiAgIGFkZEZpcnN0KGh0bWxFbGVtZW50MTogYW55LCBodG1sRWxlbWVudDI6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2FkZEZpcnN0JywgaHRtbEVsZW1lbnQxLCBodG1sRWxlbWVudDIpO1xuICAgfVxuXG4gICBhZGRMYXN0KGh0bWxFbGVtZW50MTogYW55LCBodG1sRWxlbWVudDI/OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdhZGRMYXN0JywgaHRtbEVsZW1lbnQxLCBodG1sRWxlbWVudDIpO1xuICAgfVxuXG4gICBjb2xsYXBzZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdjb2xsYXBzZScpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2Rpc2FibGUnKTtcbiAgIH1cblxuICAgZGlzYWJsZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdkaXNhYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZGVzdHJveScpO1xuICAgfVxuXG4gICBlbnN1cmVWaXNpYmxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdlbnN1cmVWaXNpYmxlJywgaW5kZXgpO1xuICAgfVxuXG4gICBlbmFibGVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZW5hYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGV4cGFuZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdleHBhbmQnKTtcbiAgIH1cblxuICAgZW5hYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRUaXRsZUF0KGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdnZXRUaXRsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBnZXRDb250ZW50QXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2dldENvbnRlbnRBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgZ2V0RGlzYWJsZWRUYWJzQ291bnQoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnZ2V0RGlzYWJsZWRUYWJzQ291bnQnKTtcbiAgIH1cblxuICAgaGlkZUNsb3NlQnV0dG9uQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2hpZGVDbG9zZUJ1dHRvbkF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBoaWRlQWxsQ2xvc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2hpZGVBbGxDbG9zZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2xlbmd0aCcpO1xuICAgfVxuXG4gICByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygncmVtb3ZlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIHJlbW92ZUZpcnN0KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3JlbW92ZUZpcnN0Jyk7XG4gICB9XG5cbiAgIHJlbW92ZUxhc3QoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygncmVtb3ZlTGFzdCcpO1xuICAgfVxuXG4gICBzZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3NlbGVjdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2V0Q29udGVudEF0KGluZGV4OiBudW1iZXIsIGh0bWxFbGVtZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZXRDb250ZW50QXQnLCBpbmRleCwgaHRtbEVsZW1lbnQpO1xuICAgfVxuXG4gICBzZXRUaXRsZUF0KGluZGV4OiBudW1iZXIsIGh0bWxFbGVtZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZXRUaXRsZUF0JywgaW5kZXgsIGh0bWxFbGVtZW50KTtcbiAgIH1cblxuICAgc2hvd0Nsb3NlQnV0dG9uQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Nob3dDbG9zZUJ1dHRvbkF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBzaG93QWxsQ2xvc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Nob3dBbGxDbG9zZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhUYWJzQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sbGFwc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVGFiY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbnNlbGVjdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblVuc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhZGQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFkZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbGxhcHNlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnRW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnRW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2V4cGFuZGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmRlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyZW1vdmVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZW1vdmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdGluZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0aW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3RlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd0YWJjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVGFiY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndW5zZWxlY3RpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVuc2VsZWN0aW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Vuc2VsZWN0ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVuc2VsZWN0ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRhYnNDb21wb25lbnRcbiJdfQ==