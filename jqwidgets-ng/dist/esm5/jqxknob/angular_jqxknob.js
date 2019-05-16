import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxknob from '../../jqwidgets-scripts/jqwidgets/jqxknob';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxKnobComponent = /** @class */ (function () {
    function jqxKnobComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
        // jqxKnobComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize((/**
         * @return {?}
         */
        function () {
            _this.__updateRect__();
        }));
    }
    /**
     * @return {?}
     */
    jqxKnobComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxKnobComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxKnobComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @return {?}
     */
    jqxKnobComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxKnobComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxKnobComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxKnobComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxKnobComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxKnobComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxKnobComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxKnob('setOptions', options);
    };
    // jqxKnobComponent properties
    // jqxKnobComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.allowValueChangeOnClick = 
    // jqxKnobComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.allowValueChangeOnDrag = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.allowValueChangeOnMouseWheel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.changing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.dragEndAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.dragStartAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.dial = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.endAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.labels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.marks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.progressBar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.pointer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.pointerGrabAction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.rotation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.startAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.spinner = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.styles = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('styles', arg);
        }
        else {
            return this.host.jqxKnob('styles');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.step = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.snapToStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKnobComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    };
    // jqxKnobComponent functions
    // jqxKnobComponent functions
    /**
     * @return {?}
     */
    jqxKnobComponent.prototype.destroy = 
    // jqxKnobComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxKnob('destroy');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxKnobComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxKnob('val', value);
        }
        else {
            return this.host.jqxKnob('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxKnobComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
    };
    jqxKnobComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxKnob',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxKnobComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxKnobComponent;
}()); //jqxKnobComponent
export { jqxKnobComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhrbm9iLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGtub2IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGtub2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXdDRywwQkFBWSxnQkFBNEI7UUFBeEMsaUJBS0M7UUFacUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyx5QkFBeUIsRUFBQyx3QkFBd0IsRUFBQyw4QkFBOEIsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBK1UxVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXpVckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTs7O1FBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztvQkFDdEcsUUFBUSxHQUFZLEtBQUs7Z0JBRTdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssRUFBRTs0QkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyRjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxTQUFTO3FCQUNYO29CQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDeEQ7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsc0NBQVc7Ozs7O0lBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsMkNBQWdCOzs7SUFBaEI7O1lBQ08sT0FBTyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELHNDQUFXOzs7OztJQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7O1lBQ2hELE9BQU8sR0FBUSxRQUFRLENBQUMsU0FBUztRQUNyQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxxQ0FBVTs7Ozs7SUFBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7O1lBQy9DLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELDBDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBYTtRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPO1NBQ1Q7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDbkQ7YUFDSTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLE9BQWE7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQseUNBQWM7OztJQUFkO1FBQ0csSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLE9BQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4QkFBOEI7Ozs7OztJQUM5QixrREFBdUI7Ozs7OztJQUF2QixVQUF3QixHQUFhO1FBQ2xDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0osQ0FBQzs7Ozs7SUFFRCxpREFBc0I7Ozs7SUFBdEIsVUFBdUIsR0FBYTtRQUNqQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUN0RDtJQUNKLENBQUM7Ozs7O0lBRUQsdURBQTRCOzs7O0lBQTVCLFVBQTZCLEdBQWE7UUFDdkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDNUQ7SUFDSixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxHQUEyTDtRQUNqTSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsR0FBWTtRQUN0QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5Q0FBYzs7OztJQUFkLFVBQWUsR0FBWTtRQUN4QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztJQUNKLENBQUM7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEdBQXdCO1FBQzFCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7SUFDSixDQUFDOzs7OztJQUVELG1DQUFROzs7O0lBQVIsVUFBUyxHQUFZO1FBQ2xCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxHQUFxQjtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxpQ0FBTTs7OztJQUFOLFVBQU8sR0FBMEI7UUFDOUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNKLENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEdBQXlCO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7SUFDSixDQUFDOzs7OztJQUVELDhCQUFHOzs7O0lBQUgsVUFBSSxHQUFZO1FBQ2IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNKLENBQUM7Ozs7O0lBRUQsOEJBQUc7Ozs7SUFBSCxVQUFJLEdBQVk7UUFDYixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0osQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksR0FBK0I7UUFDeEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQztJQUNKLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLEdBQXFEO1FBQzFELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7SUFDSixDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixHQUFZO1FBQzNCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsR0FBWTtRQUNsQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsR0FBWTtRQUNwQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxrQ0FBTzs7OztJQUFQLFVBQVEsR0FBMkI7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QztJQUNKLENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLEdBQXlCO1FBQzdCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSixDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxHQUFxQjtRQUN2QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsR0FBYTtRQUNyQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxnQ0FBSzs7OztJQUFMLFVBQU0sR0FBUztRQUNaLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7SUFDSixDQUFDOzs7OztJQUVELGdDQUFLOzs7O0lBQUwsVUFBTSxHQUFxQjtRQUN4QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0osQ0FBQztJQUdELDZCQUE2Qjs7Ozs7SUFDN0Isa0NBQU87Ozs7O0lBQVA7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDhCQUFHOzs7O0lBQUgsVUFBSSxLQUF1QjtRQUN4QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSixDQUFDO0lBQUEsQ0FBQzs7OztJQU1GLHlDQUFjOzs7SUFBZDtRQUFBLGlCQUVDO1FBREUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztRQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDbEYsQ0FBQzs7Z0JBdFhILFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLHNDQUFzQztpQkFDbkQ7Ozs7Z0JBTmdELFVBQVU7Ozs4Q0FVdkQsS0FBSyxTQUFDLHlCQUF5Qjs2Q0FDL0IsS0FBSyxTQUFDLHdCQUF3QjttREFDOUIsS0FBSyxTQUFDLDhCQUE4QjsrQkFDcEMsS0FBSyxTQUFDLFVBQVU7bUNBQ2hCLEtBQUssU0FBQyxjQUFjO3FDQUNwQixLQUFLLFNBQUMsZ0JBQWdCOytCQUN0QixLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLE1BQU07K0JBQ1osS0FBSyxTQUFDLFVBQVU7NkJBQ2hCLEtBQUssU0FBQyxRQUFROzRCQUNkLEtBQUssU0FBQyxPQUFPOzBCQUNiLEtBQUssU0FBQyxLQUFLOzBCQUNYLEtBQUssU0FBQyxLQUFLO2tDQUNYLEtBQUssU0FBQyxhQUFhOzhCQUNuQixLQUFLLFNBQUMsU0FBUzt3Q0FDZixLQUFLLFNBQUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsVUFBVTtpQ0FDaEIsS0FBSyxTQUFDLFlBQVk7OEJBQ2xCLEtBQUssU0FBQyxTQUFTOzZCQUNmLEtBQUssU0FBQyxRQUFROzJCQUNkLEtBQUssU0FBQyxNQUFNO2lDQUNaLEtBQUssU0FBQyxZQUFZOzRCQUNsQixLQUFLLFNBQUMsT0FBTzs0QkFDYixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTsyQkFpVm5CLE1BQU07O0lBTVYsdUJBQUM7Q0FBQSxBQXhYRCxJQXdYQyxDQUFDLGtCQUFrQjtTQW5YUCxnQkFBZ0I7OztJQUUxQix1REFBdUU7O0lBQ3ZFLHNEQUFxRTs7SUFDckUsNERBQWlGOztJQUNqRix3Q0FBdU47O0lBQ3ZOLDRDQUFnRDs7SUFDaEQsOENBQW9EOztJQUNwRCx3Q0FBeUM7O0lBQ3pDLG9DQUE0Qzs7SUFDNUMsd0NBQXdDOztJQUN4QyxzQ0FBa0Q7O0lBQ2xELHFDQUErQzs7SUFDL0MsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDJDQUFpRTs7SUFDakUsdUNBQStFOztJQUMvRSxpREFBMEQ7O0lBQzFELHdDQUF3Qzs7SUFDeEMsMENBQTRDOztJQUM1Qyx1Q0FBcUQ7O0lBQ3JELHNDQUFpRDs7SUFDakQsb0NBQXlDOztJQUN6QywwQ0FBNkM7O0lBQzdDLHFDQUErQjs7SUFDL0IscUNBQTJDOztJQUMzQyxzQ0FBNkM7O0lBRTdDLHNDQUFpRDs7SUFFakQsc0NBQW9WOztJQUNwVixnQ0FBVTs7SUFDVixzQ0FBdUI7O0lBQ3ZCLHdDQUFpQzs7SUE0VWpDLG9DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4S25vYicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4S25vYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbGxvd1ZhbHVlQ2hhbmdlT25DbGljaycpIGF0dHJBbGxvd1ZhbHVlQ2hhbmdlT25DbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWxsb3dWYWx1ZUNoYW5nZU9uRHJhZycpIGF0dHJBbGxvd1ZhbHVlQ2hhbmdlT25EcmFnOiBib29sZWFuO1xuICAgQElucHV0KCdhbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsJykgYXR0ckFsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWw6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NoYW5naW5nJykgYXR0ckNoYW5naW5nOiAob2xkVmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddW10sIG5ld1ZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXVtdKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdkcmFnRW5kQW5nbGUnKSBhdHRyRHJhZ0VuZEFuZ2xlOiBudW1iZXI7XG4gICBASW5wdXQoJ2RyYWdTdGFydEFuZ2xlJykgYXR0ckRyYWdTdGFydEFuZ2xlOiBudW1iZXI7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaWFsJykgYXR0ckRpYWw6IGpxd2lkZ2V0cy5Lbm9iRGlhbDtcbiAgIEBJbnB1dCgnZW5kQW5nbGUnKSBhdHRyRW5kQW5nbGU6IG51bWJlcjtcbiAgIEBJbnB1dCgnbGFiZWxzJykgYXR0ckxhYmVsczoganF3aWRnZXRzLktub2JMYWJlbHM7XG4gICBASW5wdXQoJ21hcmtzJykgYXR0ck1hcmtzOiBqcXdpZGdldHMuS25vYk1hcmtzO1xuICAgQElucHV0KCdtaW4nKSBhdHRyTWluOiBudW1iZXI7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IG51bWJlcjtcbiAgIEBJbnB1dCgncHJvZ3Jlc3NCYXInKSBhdHRyUHJvZ3Jlc3NCYXI6IGpxd2lkZ2V0cy5Lbm9iUHJvZ3Jlc3NCYXI7XG4gICBASW5wdXQoJ3BvaW50ZXInKSBhdHRyUG9pbnRlcjoganF3aWRnZXRzLktub2JQb2ludGVyIHwganF3aWRnZXRzLktub2JQb2ludGVyW107XG4gICBASW5wdXQoJ3BvaW50ZXJHcmFiQWN0aW9uJykgYXR0clBvaW50ZXJHcmFiQWN0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3JvdGF0aW9uJykgYXR0clJvdGF0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3N0YXJ0QW5nbGUnKSBhdHRyU3RhcnRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCdzcGlubmVyJykgYXR0clNwaW5uZXI6IGpxd2lkZ2V0cy5Lbm9iU3Bpbm5lcjtcbiAgIEBJbnB1dCgnc3R5bGVzJykgYXR0clN0eWxlczoganF3aWRnZXRzLktub2JTdHlsZTtcbiAgIEBJbnB1dCgnc3RlcCcpIGF0dHJTdGVwOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3NuYXBUb1N0ZXAnKSBhdHRyU25hcFRvU3RlcDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndmFsdWUnKSBhdHRyVmFsdWU6IGFueTtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbGxvd1ZhbHVlQ2hhbmdlT25DbGljaycsJ2FsbG93VmFsdWVDaGFuZ2VPbkRyYWcnLCdhbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsJywnY2hhbmdpbmcnLCdkcmFnRW5kQW5nbGUnLCdkcmFnU3RhcnRBbmdsZScsJ2Rpc2FibGVkJywnZGlhbCcsJ2VuZEFuZ2xlJywnaGVpZ2h0JywnbGFiZWxzJywnbWFya3MnLCdtaW4nLCdtYXgnLCdwcm9ncmVzc0JhcicsJ3BvaW50ZXInLCdwb2ludGVyR3JhYkFjdGlvbicsJ3JvdGF0aW9uJywnc3RhcnRBbmdsZScsJ3NwaW5uZXInLCdzdHlsZXMnLCdzdGVwJywnc25hcFRvU3RlcCcsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4S25vYjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIEpRWExpdGUod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeEtub2IodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4S25vYih0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4S25vYicsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLl9fdXBkYXRlUmVjdF9fKCk7XG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeEtub2JDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2soYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbkNsaWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25DbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd1ZhbHVlQ2hhbmdlT25EcmFnKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25EcmFnJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25EcmFnJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2FsbG93VmFsdWVDaGFuZ2VPbk1vdXNlV2hlZWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hhbmdpbmcoYXJnPzogKG9sZFZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXVtdLCBuZXdWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ11bXSkgPT4gYm9vbGVhbik6IChvbGRWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ11bXSwgbmV3VmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddW10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2NoYW5naW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdjaGFuZ2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnRW5kQW5nbGUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdkcmFnRW5kQW5nbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2RyYWdFbmRBbmdsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnU3RhcnRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2RyYWdTdGFydEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdkcmFnU3RhcnRBbmdsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpYWwoYXJnPzoganF3aWRnZXRzLktub2JEaWFsKToganF3aWRnZXRzLktub2JEaWFsIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdkaWFsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdkaWFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuZEFuZ2xlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignZW5kQW5nbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2VuZEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVscyhhcmc/OiBqcXdpZGdldHMuS25vYkxhYmVscyk6IGpxd2lkZ2V0cy5Lbm9iTGFiZWxzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdsYWJlbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2xhYmVscycpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXJrcyhhcmc/OiBqcXdpZGdldHMuS25vYk1hcmtzKToganF3aWRnZXRzLktub2JNYXJrcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignbWFya3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ21hcmtzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByb2dyZXNzQmFyKGFyZz86IGpxd2lkZ2V0cy5Lbm9iUHJvZ3Jlc3NCYXIpOiBqcXdpZGdldHMuS25vYlByb2dyZXNzQmFyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdwcm9ncmVzc0JhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigncHJvZ3Jlc3NCYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9pbnRlcihhcmc/OiBqcXdpZGdldHMuS25vYlBvaW50ZXIgfCBqcXdpZGdldHMuS25vYlBvaW50ZXJbXSk6IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlciB8IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlcltdIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdwb2ludGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdwb2ludGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvaW50ZXJHcmFiQWN0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYigncG9pbnRlckdyYWJBY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3BvaW50ZXJHcmFiQWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvdGF0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYigncm90YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3JvdGF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXJ0QW5nbGUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzdGFydEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdzdGFydEFuZ2xlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNwaW5uZXIoYXJnPzoganF3aWRnZXRzLktub2JTcGlubmVyKToganF3aWRnZXRzLktub2JTcGlubmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzcGlubmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdzcGlubmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0eWxlcyhhcmc/OiBqcXdpZGdldHMuS25vYlN0eWxlKToganF3aWRnZXRzLktub2JTdHlsZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignc3R5bGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdzdHlsZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RlcChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3N0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3N0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc25hcFRvU3RlcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignc25hcFRvU3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignc25hcFRvU3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEtub2JDb21wb25lbnQgZnVuY3Rpb25zXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhLbm9iQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeEtub2JDb21wb25lbnRcbiJdfQ==