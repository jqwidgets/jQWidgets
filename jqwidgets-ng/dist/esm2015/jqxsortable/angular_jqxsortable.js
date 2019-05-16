import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxSortableComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
        // jqxSortableComponent events
        this.onActivate = new EventEmitter();
        this.onBeforeStop = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onOut = new EventEmitter();
        this.onOver = new EventEmitter();
        this.onReceive = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onStart = new EventEmitter();
        this.onStop = new EventEmitter();
        this.onUpdate = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSortable(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                        this.host.jqxSortable(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
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
        this.host.jqxSortable('setOptions', options);
    }
    // jqxSortableComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('appendTo', arg);
        }
        else {
            return this.host.jqxSortable('appendTo');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    axis(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('axis', arg);
        }
        else {
            return this.host.jqxSortable('axis');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cancel(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cancel', arg);
        }
        else {
            return this.host.jqxSortable('cancel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('connectWith', arg);
        }
        else {
            return this.host.jqxSortable('connectWith');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    containment(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('containment', arg);
        }
        else {
            return this.host.jqxSortable('containment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cursor(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursor', arg);
        }
        else {
            return this.host.jqxSortable('cursor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cursorAt(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursorAt', arg);
        }
        else {
            return this.host.jqxSortable('cursorAt');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('delay', arg);
        }
        else {
            return this.host.jqxSortable('delay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('disabled', arg);
        }
        else {
            return this.host.jqxSortable('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('distance', arg);
        }
        else {
            return this.host.jqxSortable('distance');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropOnEmpty(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('dropOnEmpty', arg);
        }
        else {
            return this.host.jqxSortable('dropOnEmpty');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    forceHelperSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forceHelperSize', arg);
        }
        else {
            return this.host.jqxSortable('forceHelperSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    forcePlaceholderSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forcePlaceholderSize', arg);
        }
        else {
            return this.host.jqxSortable('forcePlaceholderSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    grid(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('grid', arg);
        }
        else {
            return this.host.jqxSortable('grid');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    handle(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('handle', arg);
        }
        else {
            return this.host.jqxSortable('handle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    helper(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('helper', arg);
        }
        else {
            return this.host.jqxSortable('helper');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('items', arg);
        }
        else {
            return this.host.jqxSortable('items');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('opacity', arg);
        }
        else {
            return this.host.jqxSortable('opacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeholderShow(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('placeholderShow', arg);
        }
        else {
            return this.host.jqxSortable('placeholderShow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('revert', arg);
        }
        else {
            return this.host.jqxSortable('revert');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scroll(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scroll', arg);
        }
        else {
            return this.host.jqxSortable('scroll');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollSensitivity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSensitivity', arg);
        }
        else {
            return this.host.jqxSortable('scrollSensitivity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollSpeed(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSpeed', arg);
        }
        else {
            return this.host.jqxSortable('scrollSpeed');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('tolerance', arg);
        }
        else {
            return this.host.jqxSortable('tolerance');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('zIndex', arg);
        }
        else {
            return this.host.jqxSortable('zIndex');
        }
    }
    // jqxSortableComponent functions
    /**
     * @return {?}
     */
    cancelMethod() {
        this.host.jqxSortable('cancelMethod');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxSortable('destroy');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxSortable('disable');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxSortable('enable');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxSortable('refresh');
    }
    /**
     * @return {?}
     */
    refreshPositions() {
        this.host.jqxSortable('refreshPositions');
    }
    /**
     * @param {?} object
     * @return {?}
     */
    serialize(object) {
        return this.host.jqxSortable('serialize', object);
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.host.jqxSortable('toArray');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('activate', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onActivate.emit(eventData); }));
        this.host.on('beforeStop', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBeforeStop.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); }));
        this.host.on('deactivate', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDeactivate.emit(eventData); }));
        this.host.on('out', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOut.emit(eventData); }));
        this.host.on('over', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOver.emit(eventData); }));
        this.host.on('receive', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onReceive.emit(eventData); }));
        this.host.on('remove', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRemove.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSort.emit(eventData); }));
        this.host.on('start', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onStart.emit(eventData); }));
        this.host.on('stop', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onStop.emit(eventData); }));
        this.host.on('update', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUpdate.emit(eventData); }));
    }
} //jqxSortableComponent
jqxSortableComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxSortable',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxSortableComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxSortableComponent.propDecorators = {
    attrAppendTo: [{ type: Input, args: ['appendTo',] }],
    attrAxis: [{ type: Input, args: ['axis',] }],
    attrCancel: [{ type: Input, args: ['cancel',] }],
    attrConnectWith: [{ type: Input, args: ['connectWith',] }],
    attrContainment: [{ type: Input, args: ['containment',] }],
    attrCursor: [{ type: Input, args: ['cursor',] }],
    attrCursorAt: [{ type: Input, args: ['cursorAt',] }],
    attrDelay: [{ type: Input, args: ['delay',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDistance: [{ type: Input, args: ['distance',] }],
    attrDropOnEmpty: [{ type: Input, args: ['dropOnEmpty',] }],
    attrForceHelperSize: [{ type: Input, args: ['forceHelperSize',] }],
    attrForcePlaceholderSize: [{ type: Input, args: ['forcePlaceholderSize',] }],
    attrGrid: [{ type: Input, args: ['grid',] }],
    attrHandle: [{ type: Input, args: ['handle',] }],
    attrHelper: [{ type: Input, args: ['helper',] }],
    attrItems: [{ type: Input, args: ['items',] }],
    attrOpacity: [{ type: Input, args: ['opacity',] }],
    attrPlaceholderShow: [{ type: Input, args: ['placeholderShow',] }],
    attrRevert: [{ type: Input, args: ['revert',] }],
    attrScroll: [{ type: Input, args: ['scroll',] }],
    attrScrollSensitivity: [{ type: Input, args: ['scrollSensitivity',] }],
    attrScrollSpeed: [{ type: Input, args: ['scrollSpeed',] }],
    attrTolerance: [{ type: Input, args: ['tolerance',] }],
    attrZIndex: [{ type: Input, args: ['zIndex',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onActivate: [{ type: Output }],
    onBeforeStop: [{ type: Output }],
    onChange: [{ type: Output }],
    onDeactivate: [{ type: Output }],
    onOut: [{ type: Output }],
    onOver: [{ type: Output }],
    onReceive: [{ type: Output }],
    onRemove: [{ type: Output }],
    onSort: [{ type: Output }],
    onStart: [{ type: Output }],
    onStop: [{ type: Output }],
    onUpdate: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxSortableComponent.prototype.attrAppendTo;
    /** @type {?} */
    jqxSortableComponent.prototype.attrAxis;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCancel;
    /** @type {?} */
    jqxSortableComponent.prototype.attrConnectWith;
    /** @type {?} */
    jqxSortableComponent.prototype.attrContainment;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCursor;
    /** @type {?} */
    jqxSortableComponent.prototype.attrCursorAt;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDelay;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDistance;
    /** @type {?} */
    jqxSortableComponent.prototype.attrDropOnEmpty;
    /** @type {?} */
    jqxSortableComponent.prototype.attrForceHelperSize;
    /** @type {?} */
    jqxSortableComponent.prototype.attrForcePlaceholderSize;
    /** @type {?} */
    jqxSortableComponent.prototype.attrGrid;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHandle;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHelper;
    /** @type {?} */
    jqxSortableComponent.prototype.attrItems;
    /** @type {?} */
    jqxSortableComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxSortableComponent.prototype.attrPlaceholderShow;
    /** @type {?} */
    jqxSortableComponent.prototype.attrRevert;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScroll;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScrollSensitivity;
    /** @type {?} */
    jqxSortableComponent.prototype.attrScrollSpeed;
    /** @type {?} */
    jqxSortableComponent.prototype.attrTolerance;
    /** @type {?} */
    jqxSortableComponent.prototype.attrZIndex;
    /** @type {?} */
    jqxSortableComponent.prototype.attrWidth;
    /** @type {?} */
    jqxSortableComponent.prototype.attrHeight;
    /** @type {?} */
    jqxSortableComponent.prototype.autoCreate;
    /** @type {?} */
    jqxSortableComponent.prototype.properties;
    /** @type {?} */
    jqxSortableComponent.prototype.host;
    /** @type {?} */
    jqxSortableComponent.prototype.elementRef;
    /** @type {?} */
    jqxSortableComponent.prototype.widgetObject;
    /** @type {?} */
    jqxSortableComponent.prototype.onActivate;
    /** @type {?} */
    jqxSortableComponent.prototype.onBeforeStop;
    /** @type {?} */
    jqxSortableComponent.prototype.onChange;
    /** @type {?} */
    jqxSortableComponent.prototype.onDeactivate;
    /** @type {?} */
    jqxSortableComponent.prototype.onOut;
    /** @type {?} */
    jqxSortableComponent.prototype.onOver;
    /** @type {?} */
    jqxSortableComponent.prototype.onReceive;
    /** @type {?} */
    jqxSortableComponent.prototype.onRemove;
    /** @type {?} */
    jqxSortableComponent.prototype.onSort;
    /** @type {?} */
    jqxSortableComponent.prototype.onStart;
    /** @type {?} */
    jqxSortableComponent.prototype.onStop;
    /** @type {?} */
    jqxSortableComponent.prototype.onUpdate;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhzb3J0YWJsZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4c29ydGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFxQzlCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxzQkFBc0IsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxRQUFRLENBQUMsQ0FBQzs7UUErVnJULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFD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SSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztRQUFFLENBQUMsU0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7UUFBRSxDQUFDLFNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbEYsQ0FBQztFQUVGLHNCQUFzQjs7WUFoYXZCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHNDQUFzQzthQUNuRDs7OztZQU5nRCxVQUFVOzs7MkJBVXZELEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsTUFBTTt5QkFDWixLQUFLLFNBQUMsUUFBUTs4QkFDZCxLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUssU0FBQyxRQUFROzJCQUNkLEtBQUssU0FBQyxVQUFVO3dCQUNoQixLQUFLLFNBQUMsT0FBTzsyQkFDYixLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLFVBQVU7OEJBQ2hCLEtBQUssU0FBQyxhQUFhO2tDQUNuQixLQUFLLFNBQUMsaUJBQWlCO3VDQUN2QixLQUFLLFNBQUMsc0JBQXNCO3VCQUM1QixLQUFLLFNBQUMsTUFBTTt5QkFDWixLQUFLLFNBQUMsUUFBUTt5QkFDZCxLQUFLLFNBQUMsUUFBUTt3QkFDZCxLQUFLLFNBQUMsT0FBTzswQkFDYixLQUFLLFNBQUMsU0FBUztrQ0FDZixLQUFLLFNBQUMsaUJBQWlCO3lCQUN2QixLQUFLLFNBQUMsUUFBUTt5QkFDZCxLQUFLLFNBQUMsUUFBUTtvQ0FDZCxLQUFLLFNBQUMsbUJBQW1COzhCQUN6QixLQUFLLFNBQUMsYUFBYTs0QkFDbkIsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3lCQUVkLEtBQUssU0FBQyxhQUFhO3lCQWlXbkIsTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07MkJBQ04sTUFBTTtvQkFDTixNQUFNO3FCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO3FCQUNOLE1BQU07c0JBQ04sTUFBTTtxQkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUF4WVAsNENBQXdDOztJQUN4Qyx3Q0FBeUM7O0lBQ3pDLDBDQUFvQzs7SUFDcEMsK0NBQXdEOztJQUN4RCwrQ0FBd0Q7O0lBQ3hELDBDQUFvQzs7SUFDcEMsNENBQTREOztJQUM1RCx5Q0FBa0M7O0lBQ2xDLDRDQUF5Qzs7SUFDekMsNENBQXdDOztJQUN4QywrQ0FBK0M7O0lBQy9DLG1EQUF1RDs7SUFDdkQsd0RBQWlFOztJQUNqRSx3Q0FBdUM7O0lBQ3ZDLDBDQUE4Qzs7SUFDOUMsMENBQWlHOztJQUNqRyx5Q0FBa0M7O0lBQ2xDLDJDQUFnRDs7SUFDaEQsbURBQWdFOztJQUNoRSwwQ0FBOEM7O0lBQzlDLDBDQUFxQzs7SUFDckMscURBQTBEOztJQUMxRCwrQ0FBOEM7O0lBQzlDLDZDQUEwQzs7SUFDMUMsMENBQW9DOztJQUNwQyx5Q0FBMkM7O0lBQzNDLDBDQUE2Qzs7SUFFN0MsMENBQWlEOztJQUVqRCwwQ0FBK1Q7O0lBQy9ULG9DQUFVOztJQUNWLDBDQUF1Qjs7SUFDdkIsNENBQXFDOztJQTRWckMsMENBQTBDOztJQUMxQyw0Q0FBNEM7O0lBQzVDLHdDQUF3Qzs7SUFDeEMsNENBQTRDOztJQUM1QyxxQ0FBcUM7O0lBQ3JDLHNDQUFzQzs7SUFDdEMseUNBQXlDOztJQUN6Qyx3Q0FBd0M7O0lBQ3hDLHNDQUFzQzs7SUFDdEMsdUNBQXVDOztJQUN2QyxzQ0FBc0M7O0lBQ3RDLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4U29ydGFibGUnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFNvcnRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FwcGVuZFRvJykgYXR0ckFwcGVuZFRvOiBzdHJpbmc7XG4gICBASW5wdXQoJ2F4aXMnKSBhdHRyQXhpczogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdjYW5jZWwnKSBhdHRyQ2FuY2VsOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Nvbm5lY3RXaXRoJykgYXR0ckNvbm5lY3RXaXRoOiBzdHJpbmcgfCBib29sZWFuO1xuICAgQElucHV0KCdjb250YWlubWVudCcpIGF0dHJDb250YWlubWVudDogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnY3Vyc29yJykgYXR0ckN1cnNvcjogc3RyaW5nO1xuICAgQElucHV0KCdjdXJzb3JBdCcpIGF0dHJDdXJzb3JBdDoganF3aWRnZXRzLlNvcnRhYmxlQ3Vyc29yQXQ7XG4gICBASW5wdXQoJ2RlbGF5JykgYXR0ckRlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaXN0YW5jZScpIGF0dHJEaXN0YW5jZTogbnVtYmVyO1xuICAgQElucHV0KCdkcm9wT25FbXB0eScpIGF0dHJEcm9wT25FbXB0eTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9yY2VIZWxwZXJTaXplJykgYXR0ckZvcmNlSGVscGVyU2l6ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9yY2VQbGFjZWhvbGRlclNpemUnKSBhdHRyRm9yY2VQbGFjZWhvbGRlclNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2dyaWQnKSBhdHRyR3JpZDogQXJyYXk8bnVtYmVyPjtcbiAgIEBJbnB1dCgnaGFuZGxlJykgYXR0ckhhbmRsZTogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnaGVscGVyJykgYXR0ckhlbHBlcjogKG9yaWdpbmFsRXZlbnQ/OiBhbnksIGNvbnRlbnQ/OiBhbnkpID0+IHZvaWQgfCAnb3JpZ2luYWwnIHwgJ2Nsb25lJztcbiAgIEBJbnB1dCgnaXRlbXMnKSBhdHRySXRlbXM6IHN0cmluZztcbiAgIEBJbnB1dCgnb3BhY2l0eScpIGF0dHJPcGFjaXR5OiBudW1iZXIgfCBib29sZWFuO1xuICAgQElucHV0KCdwbGFjZWhvbGRlclNob3cnKSBhdHRyUGxhY2Vob2xkZXJTaG93OiBzdHJpbmcgfCBib29sZWFuO1xuICAgQElucHV0KCdyZXZlcnQnKSBhdHRyUmV2ZXJ0OiBudW1iZXIgfCBib29sZWFuO1xuICAgQElucHV0KCdzY3JvbGwnKSBhdHRyU2Nyb2xsOiBib29sZWFuO1xuICAgQElucHV0KCdzY3JvbGxTZW5zaXRpdml0eScpIGF0dHJTY3JvbGxTZW5zaXRpdml0eTogbnVtYmVyO1xuICAgQElucHV0KCdzY3JvbGxTcGVlZCcpIGF0dHJTY3JvbGxTcGVlZDogbnVtYmVyO1xuICAgQElucHV0KCd0b2xlcmFuY2UnKSBhdHRyVG9sZXJhbmNlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3pJbmRleCcpIGF0dHJaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhcHBlbmRUbycsJ2F4aXMnLCdjYW5jZWwnLCdjb25uZWN0V2l0aCcsJ2NvbnRhaW5tZW50JywnY3Vyc29yJywnY3Vyc29yQXQnLCdkZWxheScsJ2Rpc2FibGVkJywnZGlzdGFuY2UnLCdkcm9wT25FbXB0eScsJ2ZvcmNlSGVscGVyU2l6ZScsJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJywnZ3JpZCcsJ2hhbmRsZScsJ2hlbHBlcicsJ2l0ZW1zJywnb3BhY2l0eScsJ3BsYWNlaG9sZGVyU2hvdycsJ3JldmVydCcsJ3Njcm9sbCcsJ3Njcm9sbFNlbnNpdGl2aXR5Jywnc2Nyb2xsU3BlZWQnLCd0b2xlcmFuY2UnLCd6SW5kZXgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4U29ydGFibGU7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4U29ydGFibGUodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4U29ydGFibGUnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4U29ydGFibGVDb21wb25lbnQgcHJvcGVydGllc1xuICAgYXBwZW5kVG8oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnYXBwZW5kVG8nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdhcHBlbmRUbycpO1xuICAgICAgfVxuICAgfVxuXG4gICBheGlzKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2F4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdheGlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNhbmNlbChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjYW5jZWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29ubmVjdFdpdGgoYXJnPzogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjb25uZWN0V2l0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Nvbm5lY3RXaXRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRhaW5tZW50KGFyZz86IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY29udGFpbm1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjb250YWlubWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdXJzb3IoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY3Vyc29yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY3Vyc29yJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGN1cnNvckF0KGFyZz86IGpxd2lkZ2V0cy5Tb3J0YWJsZUN1cnNvckF0KToganF3aWRnZXRzLlNvcnRhYmxlQ3Vyc29yQXQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjdXJzb3JBdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2N1cnNvckF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2RlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3RhbmNlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rpc3RhbmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGlzdGFuY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcE9uRW1wdHkoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkcm9wT25FbXB0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Ryb3BPbkVtcHR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvcmNlSGVscGVyU2l6ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2ZvcmNlSGVscGVyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2ZvcmNlSGVscGVyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3JjZVBsYWNlaG9sZGVyU2l6ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZm9yY2VQbGFjZWhvbGRlclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JpZChhcmc/OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2dyaWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdncmlkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhhbmRsZShhcmc/OiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2hhbmRsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2hhbmRsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWxwZXIoYXJnPzogKG9yaWdpbmFsRXZlbnQ/OiBhbnksIGNvbnRlbnQ/OiBhbnkpID0+IHZvaWQgfCAnb3JpZ2luYWwnIHwgJ2Nsb25lJyk6IChvcmlnaW5hbEV2ZW50PzogYW55LCBjb250ZW50PzogYW55KSA9PiB2b2lkIHwgJ29yaWdpbmFsJyB8ICdjbG9uZScge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoZWxwZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoZWxwZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXRlbXMoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaXRlbXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdpdGVtcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcGFjaXR5KGFyZz86IG51bWJlciB8IGJvb2xlYW4pOiBudW1iZXIgfCBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnb3BhY2l0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ29wYWNpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGxhY2Vob2xkZXJTaG93KGFyZz86IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgncGxhY2Vob2xkZXJTaG93JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgncGxhY2Vob2xkZXJTaG93Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJldmVydChhcmc/OiBudW1iZXIgfCBib29sZWFuKTogbnVtYmVyIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3JldmVydCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3JldmVydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsU2Vuc2l0aXZpdHkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsU2Vuc2l0aXZpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGxTZW5zaXRpdml0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxTcGVlZChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGxTcGVlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3Njcm9sbFNwZWVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvbGVyYW5jZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd0b2xlcmFuY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd0b2xlcmFuY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgekluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3pJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3pJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFNvcnRhYmxlQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY2FuY2VsTWV0aG9kKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjYW5jZWxNZXRob2QnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZW5hYmxlJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVmcmVzaFBvc2l0aW9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgncmVmcmVzaFBvc2l0aW9ucycpO1xuICAgfVxuXG4gICBzZXJpYWxpemUob2JqZWN0OiB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2VyaWFsaXplJywgb2JqZWN0KTtcbiAgIH1cblxuICAgdG9BcnJheSgpOiBBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3RvQXJyYXknKTtcbiAgIH1cblxuXG4gICAvLyBqcXhTb3J0YWJsZUNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQmVmb3JlU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVjZWl2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhY3RpdmF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQWN0aXZhdGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYmVmb3JlU3RvcCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmVmb3JlU3RvcC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkZWFjdGl2YXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EZWFjdGl2YXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ291dCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3V0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ292ZXInLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk92ZXIuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVjZWl2ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVjZWl2ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyZW1vdmUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlbW92ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzdG9wJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TdG9wLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3VwZGF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVXBkYXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhTb3J0YWJsZUNvbXBvbmVudFxuIl19