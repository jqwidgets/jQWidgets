import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDragDropComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
        // jqxDragDropComponent functions
        // jqxDragDropComponent events
        this.ondragstart = new EventEmitter();
        this.ondragend = new EventEmitter();
        this.ondragging = new EventEmitter();
        this.ondroptargetenter = new EventEmitter();
        this.ondroptargetleave = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
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
        this.host.jqxDragDrop('setOptions', options);
    }
    // jqxDragDropComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    data(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropAction(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropTarget(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    feedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initFeedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onDragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onDragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onTargetDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onDropTargetEnter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onDropTargetLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    restricter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    revertDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.ondragend.emit(eventData); });
        this.host.on('dragging', (eventData) => { this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', (eventData) => { this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', (eventData) => { this.ondroptargetleave.emit(eventData); });
    }
} //jqxDragDropComponent
jqxDragDropComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDragDrop',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDragDropComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDragDropComponent.propDecorators = {
    attrAppendTo: [{ type: Input, args: ['appendTo',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDistance: [{ type: Input, args: ['distance',] }],
    attrData: [{ type: Input, args: ['data',] }],
    attrDropAction: [{ type: Input, args: ['dropAction',] }],
    attrDropTarget: [{ type: Input, args: ['dropTarget',] }],
    attrDragZIndex: [{ type: Input, args: ['dragZIndex',] }],
    attrFeedback: [{ type: Input, args: ['feedback',] }],
    attrInitFeedback: [{ type: Input, args: ['initFeedback',] }],
    attrOpacity: [{ type: Input, args: ['opacity',] }],
    attrOnDragEnd: [{ type: Input, args: ['onDragEnd',] }],
    attrOnDrag: [{ type: Input, args: ['onDrag',] }],
    attrOnDragStart: [{ type: Input, args: ['onDragStart',] }],
    attrOnTargetDrop: [{ type: Input, args: ['onTargetDrop',] }],
    attrOnDropTargetEnter: [{ type: Input, args: ['onDropTargetEnter',] }],
    attrOnDropTargetLeave: [{ type: Input, args: ['onDropTargetLeave',] }],
    attrRestricter: [{ type: Input, args: ['restricter',] }],
    attrRevert: [{ type: Input, args: ['revert',] }],
    attrRevertDuration: [{ type: Input, args: ['revertDuration',] }],
    attrTolerance: [{ type: Input, args: ['tolerance',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    ondragstart: [{ type: Output }],
    ondragend: [{ type: Output }],
    ondragging: [{ type: Output }],
    ondroptargetenter: [{ type: Output }],
    ondroptargetleave: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDragDropComponent.prototype.attrAppendTo;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDistance;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrData;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDropAction;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDropTarget;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrDragZIndex;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrFeedback;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrInitFeedback;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDragEnd;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDrag;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDragStart;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnTargetDrop;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDropTargetEnter;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrOnDropTargetLeave;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRestricter;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRevert;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrRevertDuration;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrTolerance;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDragDropComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDragDropComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDragDropComponent.prototype.properties;
    /** @type {?} */
    jqxDragDropComponent.prototype.host;
    /** @type {?} */
    jqxDragDropComponent.prototype.elementRef;
    /** @type {?} */
    jqxDragDropComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragstart;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragend;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondragging;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondroptargetenter;
    /** @type {?} */
    jqxDragDropComponent.prototype.ondroptargetleave;
    /* Skipping unhandled member: ;*/
}
