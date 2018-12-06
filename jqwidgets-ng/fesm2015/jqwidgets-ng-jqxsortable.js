import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxsortable from '../../jqwidgets/jqxsortable';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxSortableComponent {
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
        this.host.on('activate', (eventData) => { this.onActivate.emit(eventData); });
        this.host.on('beforeStop', (eventData) => { this.onBeforeStop.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('deactivate', (eventData) => { this.onDeactivate.emit(eventData); });
        this.host.on('out', (eventData) => { this.onOut.emit(eventData); });
        this.host.on('over', (eventData) => { this.onOver.emit(eventData); });
        this.host.on('receive', (eventData) => { this.onReceive.emit(eventData); });
        this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
        this.host.on('start', (eventData) => { this.onStart.emit(eventData); });
        this.host.on('stop', (eventData) => { this.onStop.emit(eventData); });
        this.host.on('update', (eventData) => { this.onUpdate.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxSortableModule {
}
jqxSortableModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxSortableComponent],
                exports: [jqxSortableComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxSortableComponent, jqxSortableModule };

