import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxknob from '../../jqwidgets-scripts/jqwidgets/jqxknob';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        JQXLite(window).resize((/**
         * @return {?}
         */
        () => {
            this.__updateRect__();
        }));
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
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhrbm9iLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGtub2IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGtub2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFtQzFCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMseUJBQXlCLEVBQUMsd0JBQXdCLEVBQUMsOEJBQThCLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQStVMVUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF6VXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07OztRQUFDLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixXQUFX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ZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhLbm9iJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhLbm9iQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FsbG93VmFsdWVDaGFuZ2VPbkNsaWNrJykgYXR0ckFsbG93VmFsdWVDaGFuZ2VPbkNsaWNrOiBib29sZWFuO1xuICAgQElucHV0KCdhbGxvd1ZhbHVlQ2hhbmdlT25EcmFnJykgYXR0ckFsbG93VmFsdWVDaGFuZ2VPbkRyYWc6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWwnKSBhdHRyQWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2hhbmdpbmcnKSBhdHRyQ2hhbmdpbmc6IChvbGRWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ11bXSwgbmV3VmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddW10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2RyYWdFbmRBbmdsZScpIGF0dHJEcmFnRW5kQW5nbGU6IG51bWJlcjtcbiAgIEBJbnB1dCgnZHJhZ1N0YXJ0QW5nbGUnKSBhdHRyRHJhZ1N0YXJ0QW5nbGU6IG51bWJlcjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2RpYWwnKSBhdHRyRGlhbDoganF3aWRnZXRzLktub2JEaWFsO1xuICAgQElucHV0KCdlbmRBbmdsZScpIGF0dHJFbmRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCdsYWJlbHMnKSBhdHRyTGFiZWxzOiBqcXdpZGdldHMuS25vYkxhYmVscztcbiAgIEBJbnB1dCgnbWFya3MnKSBhdHRyTWFya3M6IGpxd2lkZ2V0cy5Lbm9iTWFya3M7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IG51bWJlcjtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogbnVtYmVyO1xuICAgQElucHV0KCdwcm9ncmVzc0JhcicpIGF0dHJQcm9ncmVzc0JhcjoganF3aWRnZXRzLktub2JQcm9ncmVzc0JhcjtcbiAgIEBJbnB1dCgncG9pbnRlcicpIGF0dHJQb2ludGVyOiBqcXdpZGdldHMuS25vYlBvaW50ZXIgfCBqcXdpZGdldHMuS25vYlBvaW50ZXJbXTtcbiAgIEBJbnB1dCgncG9pbnRlckdyYWJBY3Rpb24nKSBhdHRyUG9pbnRlckdyYWJBY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgncm90YXRpb24nKSBhdHRyUm90YXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnc3RhcnRBbmdsZScpIGF0dHJTdGFydEFuZ2xlOiBudW1iZXI7XG4gICBASW5wdXQoJ3NwaW5uZXInKSBhdHRyU3Bpbm5lcjoganF3aWRnZXRzLktub2JTcGlubmVyO1xuICAgQElucHV0KCdzdHlsZXMnKSBhdHRyU3R5bGVzOiBqcXdpZGdldHMuS25vYlN0eWxlO1xuICAgQElucHV0KCdzdGVwJykgYXR0clN0ZXA6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnc25hcFRvU3RlcCcpIGF0dHJTbmFwVG9TdGVwOiBib29sZWFuO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogYW55O1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FsbG93VmFsdWVDaGFuZ2VPbkNsaWNrJywnYWxsb3dWYWx1ZUNoYW5nZU9uRHJhZycsJ2FsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWwnLCdjaGFuZ2luZycsJ2RyYWdFbmRBbmdsZScsJ2RyYWdTdGFydEFuZ2xlJywnZGlzYWJsZWQnLCdkaWFsJywnZW5kQW5nbGUnLCdoZWlnaHQnLCdsYWJlbHMnLCdtYXJrcycsJ21pbicsJ21heCcsJ3Byb2dyZXNzQmFyJywncG9pbnRlcicsJ3BvaW50ZXJHcmFiQWN0aW9uJywncm90YXRpb24nLCdzdGFydEFuZ2xlJywnc3Bpbm5lcicsJ3N0eWxlcycsJ3N0ZXAnLCdzbmFwVG9TdGVwJywndmFsdWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhLbm9iO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgICAgSlFYTGl0ZSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4S25vYih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhLbm9iKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhLbm9iJywgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4S25vYkNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbGxvd1ZhbHVlQ2hhbmdlT25DbGljayhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbkNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93VmFsdWVDaGFuZ2VPbkRyYWcoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbkRyYWcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbkRyYWcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGFuZ2luZyhhcmc/OiAob2xkVmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddW10sIG5ld1ZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXVtdKSA9PiBib29sZWFuKTogKG9sZFZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXVtdLCBuZXdWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ11bXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignY2hhbmdpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2NoYW5naW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdFbmRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2RyYWdFbmRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignZHJhZ0VuZEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdTdGFydEFuZ2xlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignZHJhZ1N0YXJ0QW5nbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2RyYWdTdGFydEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlhbChhcmc/OiBqcXdpZGdldHMuS25vYkRpYWwpOiBqcXdpZGdldHMuS25vYkRpYWwge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2RpYWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2RpYWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5kQW5nbGUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdlbmRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignZW5kQW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzKGFyZz86IGpxd2lkZ2V0cy5Lbm9iTGFiZWxzKToganF3aWRnZXRzLktub2JMYWJlbHMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2xhYmVscycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignbGFiZWxzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1hcmtzKGFyZz86IGpxd2lkZ2V0cy5Lbm9iTWFya3MpOiBqcXdpZGdldHMuS25vYk1hcmtzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdtYXJrcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignbWFya3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJvZ3Jlc3NCYXIoYXJnPzoganF3aWRnZXRzLktub2JQcm9ncmVzc0Jhcik6IGpxd2lkZ2V0cy5Lbm9iUHJvZ3Jlc3NCYXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3Byb2dyZXNzQmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdwcm9ncmVzc0JhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb2ludGVyKGFyZz86IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlciB8IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlcltdKToganF3aWRnZXRzLktub2JQb2ludGVyIHwganF3aWRnZXRzLktub2JQb2ludGVyW10ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3BvaW50ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3BvaW50ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9pbnRlckdyYWJBY3Rpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdwb2ludGVyR3JhYkFjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigncG9pbnRlckdyYWJBY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm90YXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdyb3RhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigncm90YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhcnRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3N0YXJ0QW5nbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3N0YXJ0QW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3Bpbm5lcihhcmc/OiBqcXdpZGdldHMuS25vYlNwaW5uZXIpOiBqcXdpZGdldHMuS25vYlNwaW5uZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3NwaW5uZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3NwaW5uZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3R5bGVzKGFyZz86IGpxd2lkZ2V0cy5Lbm9iU3R5bGUpOiBqcXdpZGdldHMuS25vYlN0eWxlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzdHlsZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3N0eWxlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGVwKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignc3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignc3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzbmFwVG9TdGVwKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzbmFwVG9TdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdzbmFwVG9TdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYigndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4S25vYkNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4S25vYignZGVzdHJveScpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBudW1iZXIgfCBzdHJpbmcpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeEtub2JDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4S25vYkNvbXBvbmVudFxuIl19