import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtabs from '../../jqwidgets/jqxtabs';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('add', (eventData) => { this.onAdd.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('selecting', (eventData) => { this.onSelecting.emit(eventData); });
        this.host.on('selected', (eventData) => { this.onSelected.emit(eventData); });
        this.host.on('tabclick', (eventData) => { this.onTabclick.emit(eventData); });
        this.host.on('unselecting', (eventData) => { this.onUnselecting.emit(eventData); });
        this.host.on('unselected', (eventData) => { this.onUnselected.emit(eventData); });
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
