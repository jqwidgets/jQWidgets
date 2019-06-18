import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxknob from '../../jqwidgets-scripts/jqwidgets/jqxknob';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhrbm9iLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGtub2IvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGtub2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFtQzFCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMseUJBQXlCLEVBQUMsd0JBQXdCLEVBQUMsOEJBQThCLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBOFVwViwwQkFBMEI7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF6VXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7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Y2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEtub2InLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeEtub2JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2snKSBhdHRyQWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2s6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93VmFsdWVDaGFuZ2VPbkRyYWcnKSBhdHRyQWxsb3dWYWx1ZUNoYW5nZU9uRHJhZzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbCcpIGF0dHJBbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsOiBib29sZWFuO1xuICAgQElucHV0KCdjaGFuZ2luZycpIGF0dHJDaGFuZ2luZzogKG9sZFZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXVtdLCBuZXdWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ11bXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZHJhZ0VuZEFuZ2xlJykgYXR0ckRyYWdFbmRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCdkcmFnU3RhcnRBbmdsZScpIGF0dHJEcmFnU3RhcnRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlhbCcpIGF0dHJEaWFsOiBqcXdpZGdldHMuS25vYkRpYWw7XG4gICBASW5wdXQoJ2VuZEFuZ2xlJykgYXR0ckVuZEFuZ2xlOiBudW1iZXI7XG4gICBASW5wdXQoJ2xhYmVscycpIGF0dHJMYWJlbHM6IGpxd2lkZ2V0cy5Lbm9iTGFiZWxzO1xuICAgQElucHV0KCdtYXJrcycpIGF0dHJNYXJrczoganF3aWRnZXRzLktub2JNYXJrcztcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogbnVtYmVyO1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBudW1iZXI7XG4gICBASW5wdXQoJ3Byb2dyZXNzQmFyJykgYXR0clByb2dyZXNzQmFyOiBqcXdpZGdldHMuS25vYlByb2dyZXNzQmFyO1xuICAgQElucHV0KCdwb2ludGVyJykgYXR0clBvaW50ZXI6IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlciB8IGpxd2lkZ2V0cy5Lbm9iUG9pbnRlcltdO1xuICAgQElucHV0KCdwb2ludGVyR3JhYkFjdGlvbicpIGF0dHJQb2ludGVyR3JhYkFjdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdyb3RhdGlvbicpIGF0dHJSb3RhdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzdGFydEFuZ2xlJykgYXR0clN0YXJ0QW5nbGU6IG51bWJlcjtcbiAgIEBJbnB1dCgnc3Bpbm5lcicpIGF0dHJTcGlubmVyOiBqcXdpZGdldHMuS25vYlNwaW5uZXI7XG4gICBASW5wdXQoJ3N0eWxlcycpIGF0dHJTdHlsZXM6IGpxd2lkZ2V0cy5Lbm9iU3R5bGU7XG4gICBASW5wdXQoJ3N0ZXAnKSBhdHRyU3RlcDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdzbmFwVG9TdGVwJykgYXR0clNuYXBUb1N0ZXA6IGJvb2xlYW47XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBhbnk7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2snLCdhbGxvd1ZhbHVlQ2hhbmdlT25EcmFnJywnYWxsb3dWYWx1ZUNoYW5nZU9uTW91c2VXaGVlbCcsJ2NoYW5naW5nJywnZHJhZ0VuZEFuZ2xlJywnZHJhZ1N0YXJ0QW5nbGUnLCdkaXNhYmxlZCcsJ2RpYWwnLCdlbmRBbmdsZScsJ2hlaWdodCcsJ2xhYmVscycsJ21hcmtzJywnbWluJywnbWF4JywncHJvZ3Jlc3NCYXInLCdwb2ludGVyJywncG9pbnRlckdyYWJBY3Rpb24nLCdyb3RhdGlvbicsJ3N0YXJ0QW5nbGUnLCdzcGlubmVyJywnc3R5bGVzJywnc3RlcCcsJ3NuYXBUb1N0ZXAnLCd2YWx1ZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEtub2I7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICBKUVhMaXRlKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9fdXBkYXRlUmVjdF9fKCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhLbm9iKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEtub2IodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEtub2InLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4S25vYignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhLbm9iQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFsbG93VmFsdWVDaGFuZ2VPbkNsaWNrKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25DbGljaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uQ2xpY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dWYWx1ZUNoYW5nZU9uRHJhZyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uRHJhZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignYWxsb3dWYWx1ZUNoYW5nZU9uRHJhZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdhbGxvd1ZhbHVlQ2hhbmdlT25Nb3VzZVdoZWVsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoYW5naW5nKGFyZz86IChvbGRWYWx1ZToganF3aWRnZXRzLktub2JDaGFuZ2luZ1snb2xkVmFsdWUnXSB8IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ11bXSwgbmV3VmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ25ld1ZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddW10pID0+IGJvb2xlYW4pOiAob2xkVmFsdWU6IGpxd2lkZ2V0cy5Lbm9iQ2hhbmdpbmdbJ29sZFZhbHVlJ10gfCBqcXdpZGdldHMuS25vYkNoYW5naW5nWydvbGRWYWx1ZSddW10sIG5ld1ZhbHVlOiBqcXdpZGdldHMuS25vYkNoYW5naW5nWyduZXdWYWx1ZSddIHwganF3aWRnZXRzLktub2JDaGFuZ2luZ1snbmV3VmFsdWUnXVtdKSA9PiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdjaGFuZ2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignY2hhbmdpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ0VuZEFuZ2xlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignZHJhZ0VuZEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdkcmFnRW5kQW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ1N0YXJ0QW5nbGUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdkcmFnU3RhcnRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignZHJhZ1N0YXJ0QW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaWFsKGFyZz86IGpxd2lkZ2V0cy5Lbm9iRGlhbCk6IGpxd2lkZ2V0cy5Lbm9iRGlhbCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignZGlhbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignZGlhbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ2VuZEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdlbmRBbmdsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYWJlbHMoYXJnPzoganF3aWRnZXRzLktub2JMYWJlbHMpOiBqcXdpZGdldHMuS25vYkxhYmVscyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignbGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdsYWJlbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWFya3MoYXJnPzoganF3aWRnZXRzLktub2JNYXJrcyk6IGpxd2lkZ2V0cy5Lbm9iTWFya3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ21hcmtzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdtYXJrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcm9ncmVzc0Jhcihhcmc/OiBqcXdpZGdldHMuS25vYlByb2dyZXNzQmFyKToganF3aWRnZXRzLktub2JQcm9ncmVzc0JhciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYigncHJvZ3Jlc3NCYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3Byb2dyZXNzQmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvaW50ZXIoYXJnPzoganF3aWRnZXRzLktub2JQb2ludGVyIHwganF3aWRnZXRzLktub2JQb2ludGVyW10pOiBqcXdpZGdldHMuS25vYlBvaW50ZXIgfCBqcXdpZGdldHMuS25vYlBvaW50ZXJbXSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYigncG9pbnRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigncG9pbnRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb2ludGVyR3JhYkFjdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3BvaW50ZXJHcmFiQWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdwb2ludGVyR3JhYkFjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3RhdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3JvdGF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdyb3RhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGFydEFuZ2xlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignc3RhcnRBbmdsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignc3RhcnRBbmdsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzcGlubmVyKGFyZz86IGpxd2lkZ2V0cy5Lbm9iU3Bpbm5lcik6IGpxd2lkZ2V0cy5Lbm9iU3Bpbm5lciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S25vYignc3Bpbm5lcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignc3Bpbm5lcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHlsZXMoYXJnPzoganF3aWRnZXRzLktub2JTdHlsZSk6IGpxd2lkZ2V0cy5Lbm9iU3R5bGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3N0eWxlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignc3R5bGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0ZXAoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCdzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNuYXBUb1N0ZXAoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEtub2IoJ3NuYXBUb1N0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEtub2IoJ3NuYXBUb1N0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCd2YWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYigndmFsdWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S25vYignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhLbm9iQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLbm9iKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IG51bWJlciB8IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLbm9iKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4S25vYkNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhLbm9iQ29tcG9uZW50XG4iXX0=