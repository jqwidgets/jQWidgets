import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxknob';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxKnobComponent = class jqxKnobComponent {
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
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxKnob('setOptions', options);
    }
    // jqxKnobComponent properties
    allowValueChangeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    }
    allowValueChangeOnDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    }
    allowValueChangeOnMouseWheel(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    }
    changing(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    }
    dragEndAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    }
    dragStartAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    }
    dial(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    }
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    }
    marks(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    }
    progressBar(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    }
    pointerGrabAction(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    }
    rotation(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    }
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    }
    spinner(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    }
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('styles', arg);
        }
        else {
            return this.host.jqxKnob('styles');
        }
    }
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    }
    snapToStep(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    }
    // jqxKnobComponent functions
    destroy() {
        this.host.jqxKnob('destroy');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxKnob('val', value);
        }
        else {
            return this.host.jqxKnob('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxKnobComponent
jqxKnobComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('allowValueChangeOnClick'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnClick", void 0);
tslib_1.__decorate([
    Input('allowValueChangeOnDrag'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnDrag", void 0);
tslib_1.__decorate([
    Input('allowValueChangeOnMouseWheel'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "attrAllowValueChangeOnMouseWheel", void 0);
tslib_1.__decorate([
    Input('changing'),
    tslib_1.__metadata("design:type", Function)
], jqxKnobComponent.prototype, "attrChanging", void 0);
tslib_1.__decorate([
    Input('dragEndAngle'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrDragEndAngle", void 0);
tslib_1.__decorate([
    Input('dragStartAngle'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrDragStartAngle", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('dial'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrDial", void 0);
tslib_1.__decorate([
    Input('endAngle'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrEndAngle", void 0);
tslib_1.__decorate([
    Input('labels'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrLabels", void 0);
tslib_1.__decorate([
    Input('marks'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrMarks", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('progressBar'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrProgressBar", void 0);
tslib_1.__decorate([
    Input('pointer'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrPointer", void 0);
tslib_1.__decorate([
    Input('pointerGrabAction'),
    tslib_1.__metadata("design:type", String)
], jqxKnobComponent.prototype, "attrPointerGrabAction", void 0);
tslib_1.__decorate([
    Input('rotation'),
    tslib_1.__metadata("design:type", String)
], jqxKnobComponent.prototype, "attrRotation", void 0);
tslib_1.__decorate([
    Input('startAngle'),
    tslib_1.__metadata("design:type", Number)
], jqxKnobComponent.prototype, "attrStartAngle", void 0);
tslib_1.__decorate([
    Input('spinner'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrSpinner", void 0);
tslib_1.__decorate([
    Input('styles'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrStyles", void 0);
tslib_1.__decorate([
    Input('step'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrStep", void 0);
tslib_1.__decorate([
    Input('snapToStep'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "attrSnapToStep", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxKnobComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxKnobComponent.prototype, "onChange", void 0);
jqxKnobComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxKnob',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxKnobComponent);
export { jqxKnobComponent };
