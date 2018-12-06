import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxknob from '../../jqwidgets/jqxknob';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxKnobComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
        // jqxKnobComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKnob(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                        this.host.jqxKnob(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
        this.__updateRect__();
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
        this.host.jqxKnob('setOptions', options);
    }
    // jqxKnobComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowValueChangeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowValueChangeOnDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowValueChangeOnMouseWheel(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    changing(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragEndAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dragStartAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dial(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    marks(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    progressBar(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pointerGrabAction(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rotation(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinner(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('styles', arg);
        }
        else {
            return this.host.jqxKnob('styles');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    snapToStep(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    }
    // jqxKnobComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxKnob('destroy');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxKnob('val', value);
        }
        else {
            return this.host.jqxKnob('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxKnobComponent
jqxKnobComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxKnob',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxKnobComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxKnobComponent.propDecorators = {
    attrAllowValueChangeOnClick: [{ type: Input, args: ['allowValueChangeOnClick',] }],
    attrAllowValueChangeOnDrag: [{ type: Input, args: ['allowValueChangeOnDrag',] }],
    attrAllowValueChangeOnMouseWheel: [{ type: Input, args: ['allowValueChangeOnMouseWheel',] }],
    attrChanging: [{ type: Input, args: ['changing',] }],
    attrDragEndAngle: [{ type: Input, args: ['dragEndAngle',] }],
    attrDragStartAngle: [{ type: Input, args: ['dragStartAngle',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDial: [{ type: Input, args: ['dial',] }],
    attrEndAngle: [{ type: Input, args: ['endAngle',] }],
    attrLabels: [{ type: Input, args: ['labels',] }],
    attrMarks: [{ type: Input, args: ['marks',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrProgressBar: [{ type: Input, args: ['progressBar',] }],
    attrPointer: [{ type: Input, args: ['pointer',] }],
    attrPointerGrabAction: [{ type: Input, args: ['pointerGrabAction',] }],
    attrRotation: [{ type: Input, args: ['rotation',] }],
    attrStartAngle: [{ type: Input, args: ['startAngle',] }],
    attrSpinner: [{ type: Input, args: ['spinner',] }],
    attrStyles: [{ type: Input, args: ['styles',] }],
    attrStep: [{ type: Input, args: ['step',] }],
    attrSnapToStep: [{ type: Input, args: ['snapToStep',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxKnobComponent.prototype.attrAllowValueChangeOnClick;
    /** @type {?} */
    jqxKnobComponent.prototype.attrAllowValueChangeOnDrag;
    /** @type {?} */
    jqxKnobComponent.prototype.attrAllowValueChangeOnMouseWheel;
    /** @type {?} */
    jqxKnobComponent.prototype.attrChanging;
    /** @type {?} */
    jqxKnobComponent.prototype.attrDragEndAngle;
    /** @type {?} */
    jqxKnobComponent.prototype.attrDragStartAngle;
    /** @type {?} */
    jqxKnobComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxKnobComponent.prototype.attrDial;
    /** @type {?} */
    jqxKnobComponent.prototype.attrEndAngle;
    /** @type {?} */
    jqxKnobComponent.prototype.attrLabels;
    /** @type {?} */
    jqxKnobComponent.prototype.attrMarks;
    /** @type {?} */
    jqxKnobComponent.prototype.attrMin;
    /** @type {?} */
    jqxKnobComponent.prototype.attrMax;
    /** @type {?} */
    jqxKnobComponent.prototype.attrProgressBar;
    /** @type {?} */
    jqxKnobComponent.prototype.attrPointer;
    /** @type {?} */
    jqxKnobComponent.prototype.attrPointerGrabAction;
    /** @type {?} */
    jqxKnobComponent.prototype.attrRotation;
    /** @type {?} */
    jqxKnobComponent.prototype.attrStartAngle;
    /** @type {?} */
    jqxKnobComponent.prototype.attrSpinner;
    /** @type {?} */
    jqxKnobComponent.prototype.attrStyles;
    /** @type {?} */
    jqxKnobComponent.prototype.attrStep;
    /** @type {?} */
    jqxKnobComponent.prototype.attrSnapToStep;
    /** @type {?} */
    jqxKnobComponent.prototype.attrValue;
    /** @type {?} */
    jqxKnobComponent.prototype.attrWidth;
    /** @type {?} */
    jqxKnobComponent.prototype.attrHeight;
    /** @type {?} */
    jqxKnobComponent.prototype.autoCreate;
    /** @type {?} */
    jqxKnobComponent.prototype.properties;
    /** @type {?} */
    jqxKnobComponent.prototype.host;
    /** @type {?} */
    jqxKnobComponent.prototype.elementRef;
    /** @type {?} */
    jqxKnobComponent.prototype.widgetObject;
    /** @type {?} */
    jqxKnobComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
