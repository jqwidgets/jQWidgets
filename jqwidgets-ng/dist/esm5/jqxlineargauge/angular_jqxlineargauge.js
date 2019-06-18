import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxgauge from '../../jqwidgets-scripts/jqwidgets/jqxgauge';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxLinearGaugeComponent = /** @class */ (function () {
    function jqxLinearGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'background', 'colorScheme', 'disabled', 'easing', 'height', 'int64', 'labels', 'min', 'max', 'orientation', 'pointer', 'rangesOffset', 'rangeSize', 'ranges', 'showRanges', 'scaleStyle', 'scaleLength', 'ticksOffset', 'ticksPosition', 'ticksMinor', 'ticksMajor', 'value', 'width'];
        // jqxLinearGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxLinearGaugeComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinearGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinearGauge(this.properties[i])) {
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxLinearGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxLinearGaugeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxLinearGaugeComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxLinearGaugeComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxLinearGaugeComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
    };
    jqxLinearGaugeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxLinearGaugeComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxLinearGaugeComponent.prototype.setOptions = function (options) {
        this.host.jqxLinearGauge('setOptions', options);
    };
    // jqxLinearGaugeComponent properties
    jqxLinearGaugeComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxLinearGauge('animationDuration');
        }
    };
    jqxLinearGaugeComponent.prototype.background = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('background', arg);
        }
        else {
            return this.host.jqxLinearGauge('background');
        }
    };
    jqxLinearGaugeComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxLinearGauge('colorScheme');
        }
    };
    jqxLinearGaugeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('disabled', arg);
        }
        else {
            return this.host.jqxLinearGauge('disabled');
        }
    };
    jqxLinearGaugeComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('easing', arg);
        }
        else {
            return this.host.jqxLinearGauge('easing');
        }
    };
    jqxLinearGaugeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('height', arg);
        }
        else {
            return this.host.jqxLinearGauge('height');
        }
    };
    jqxLinearGaugeComponent.prototype.int64 = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('int64', arg);
        }
        else {
            return this.host.jqxLinearGauge('int64');
        }
    };
    jqxLinearGaugeComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('labels', arg);
        }
        else {
            return this.host.jqxLinearGauge('labels');
        }
    };
    jqxLinearGaugeComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('min', arg);
        }
        else {
            return this.host.jqxLinearGauge('min');
        }
    };
    jqxLinearGaugeComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('max', arg);
        }
        else {
            return this.host.jqxLinearGauge('max');
        }
    };
    jqxLinearGaugeComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('orientation', arg);
        }
        else {
            return this.host.jqxLinearGauge('orientation');
        }
    };
    jqxLinearGaugeComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('pointer', arg);
        }
        else {
            return this.host.jqxLinearGauge('pointer');
        }
    };
    jqxLinearGaugeComponent.prototype.rangesOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangesOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangesOffset');
        }
    };
    jqxLinearGaugeComponent.prototype.rangeSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangeSize', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangeSize');
        }
    };
    jqxLinearGaugeComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ranges', arg);
        }
        else {
            return this.host.jqxLinearGauge('ranges');
        }
    };
    jqxLinearGaugeComponent.prototype.showRanges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('showRanges', arg);
        }
        else {
            return this.host.jqxLinearGauge('showRanges');
        }
    };
    jqxLinearGaugeComponent.prototype.scaleStyle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleStyle', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleStyle');
        }
    };
    jqxLinearGaugeComponent.prototype.scaleLength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleLength', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleLength');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksOffset');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksPosition', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksPosition');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksMinor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMinor');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksMajor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMajor');
        }
    };
    jqxLinearGaugeComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('value', arg);
        }
        else {
            return this.host.jqxLinearGauge('value');
        }
    };
    jqxLinearGaugeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('width', arg);
        }
        else {
            return this.host.jqxLinearGauge('width');
        }
    };
    // jqxLinearGaugeComponent functions
    jqxLinearGaugeComponent.prototype.disable = function () {
        this.host.jqxLinearGauge('disable');
    };
    jqxLinearGaugeComponent.prototype.enable = function () {
        this.host.jqxLinearGauge('enable');
    };
    jqxLinearGaugeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxLinearGauge('val', value);
        }
        else {
            return this.host.jqxLinearGauge('val');
        }
    };
    ;
    jqxLinearGaugeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('background'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrBackground", void 0);
    tslib_1.__decorate([
        Input('colorScheme'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrColorScheme", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('easing'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrEasing", void 0);
    tslib_1.__decorate([
        Input('int64'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrInt64", void 0);
    tslib_1.__decorate([
        Input('labels'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrLabels", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('orientation'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrOrientation", void 0);
    tslib_1.__decorate([
        Input('pointer'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrPointer", void 0);
    tslib_1.__decorate([
        Input('rangesOffset'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrRangesOffset", void 0);
    tslib_1.__decorate([
        Input('rangeSize'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrRangeSize", void 0);
    tslib_1.__decorate([
        Input('ranges'),
        tslib_1.__metadata("design:type", Array)
    ], jqxLinearGaugeComponent.prototype, "attrRanges", void 0);
    tslib_1.__decorate([
        Input('showRanges'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrShowRanges", void 0);
    tslib_1.__decorate([
        Input('scaleStyle'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrScaleStyle", void 0);
    tslib_1.__decorate([
        Input('scaleLength'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrScaleLength", void 0);
    tslib_1.__decorate([
        Input('ticksOffset'),
        tslib_1.__metadata("design:type", Array)
    ], jqxLinearGaugeComponent.prototype, "attrTicksOffset", void 0);
    tslib_1.__decorate([
        Input('ticksPosition'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrTicksPosition", void 0);
    tslib_1.__decorate([
        Input('ticksMinor'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrTicksMinor", void 0);
    tslib_1.__decorate([
        Input('ticksMajor'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrTicksMajor", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "onValueChanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "onValueChanged", void 0);
    jqxLinearGaugeComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxLinearGauge',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxLinearGaugeComponent);
    return jqxLinearGaugeComponent;
}()); //jqxLinearGaugeComponent
export { jqxLinearGaugeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhsaW5lYXJnYXVnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhsaW5lYXJnYXVnZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4bGluZWFyZ2F1Z2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFrQ0csaUNBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsbUJBQW1CLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBc1U5UyxpQ0FBaUM7UUFDdkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWxVM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLDZDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENB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MUIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQW9DK0IsVUFBVTtPQWxDOUIsdUJBQXVCLENBNFduQztJQUFELDhCQUFDO0NBQUEsQUE1V0QsSUE0V0MsQ0FBQyx5QkFBeUI7U0E1V2QsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhMaW5lYXJHYXVnZScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4TGluZWFyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFja2dyb3VuZCcpIGF0dHJCYWNrZ3JvdW5kOiBqcXdpZGdldHMuTGluZWFyR2F1Z2VCYWNrZ3JvdW5kO1xuICAgQElucHV0KCdjb2xvclNjaGVtZScpIGF0dHJDb2xvclNjaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWFzaW5nJykgYXR0ckVhc2luZzogc3RyaW5nO1xuICAgQElucHV0KCdpbnQ2NCcpIGF0dHJJbnQ2NDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbGFiZWxzJykgYXR0ckxhYmVsczoganF3aWRnZXRzLkxpbmVhckdhdWdlTGFiZWxzIHwganF3aWRnZXRzLkxpbmVhckdhdWdlTGFiZWxzW107XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IG51bWJlcjtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogbnVtYmVyO1xuICAgQElucHV0KCdvcmllbnRhdGlvbicpIGF0dHJPcmllbnRhdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdwb2ludGVyJykgYXR0clBvaW50ZXI6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZVBvaW50ZXI7XG4gICBASW5wdXQoJ3Jhbmdlc09mZnNldCcpIGF0dHJSYW5nZXNPZmZzZXQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncmFuZ2VTaXplJykgYXR0clJhbmdlU2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdyYW5nZXMnKSBhdHRyUmFuZ2VzOiBBcnJheTxqcXdpZGdldHMuTGluZWFyR2F1Z2VSYW5nZXM+O1xuICAgQElucHV0KCdzaG93UmFuZ2VzJykgYXR0clNob3dSYW5nZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NjYWxlU3R5bGUnKSBhdHRyU2NhbGVTdHlsZTogYW55O1xuICAgQElucHV0KCdzY2FsZUxlbmd0aCcpIGF0dHJTY2FsZUxlbmd0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCd0aWNrc09mZnNldCcpIGF0dHJUaWNrc09mZnNldDogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbiAgIEBJbnB1dCgndGlja3NQb3NpdGlvbicpIGF0dHJUaWNrc1Bvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RpY2tzTWlub3InKSBhdHRyVGlja3NNaW5vcjoganF3aWRnZXRzLkxpbmVhckdhdWdlVGlja3M7XG4gICBASW5wdXQoJ3RpY2tzTWFqb3InKSBhdHRyVGlja3NNYWpvcjoganF3aWRnZXRzLkxpbmVhckdhdWdlVGlja3M7XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uRHVyYXRpb24nLCdiYWNrZ3JvdW5kJywnY29sb3JTY2hlbWUnLCdkaXNhYmxlZCcsJ2Vhc2luZycsJ2hlaWdodCcsJ2ludDY0JywnbGFiZWxzJywnbWluJywnbWF4Jywnb3JpZW50YXRpb24nLCdwb2ludGVyJywncmFuZ2VzT2Zmc2V0JywncmFuZ2VTaXplJywncmFuZ2VzJywnc2hvd1JhbmdlcycsJ3NjYWxlU3R5bGUnLCdzY2FsZUxlbmd0aCcsJ3RpY2tzT2Zmc2V0JywndGlja3NQb3NpdGlvbicsJ3RpY2tzTWlub3InLCd0aWNrc01ham9yJywndmFsdWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhMaW5lYXJHYXVnZTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhMaW5lYXJHYXVnZScsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhMaW5lYXJHYXVnZUNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdhbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJhY2tncm91bmQoYXJnPzoganF3aWRnZXRzLkxpbmVhckdhdWdlQmFja2dyb3VuZCk6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZUJhY2tncm91bmQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdiYWNrZ3JvdW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnYmFja2dyb3VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xvclNjaGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdjb2xvclNjaGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ2NvbG9yU2NoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlYXNpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnZWFzaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnZWFzaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW50NjQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdpbnQ2NCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ2ludDY0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxhYmVscyhhcmc/OiBqcXdpZGdldHMuTGluZWFyR2F1Z2VMYWJlbHMgfCBqcXdpZGdldHMuTGluZWFyR2F1Z2VMYWJlbHNbXSk6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZUxhYmVscyB8IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZUxhYmVsc1tdIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnbGFiZWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnbGFiZWxzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcmllbnRhdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdvcmllbnRhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ29yaWVudGF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvaW50ZXIoYXJnPzoganF3aWRnZXRzLkxpbmVhckdhdWdlUG9pbnRlcik6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZVBvaW50ZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdwb2ludGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgncG9pbnRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByYW5nZXNPZmZzZXQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgncmFuZ2VzT2Zmc2V0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgncmFuZ2VzT2Zmc2V0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhbmdlU2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdyYW5nZVNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdyYW5nZVNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmFuZ2VzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5MaW5lYXJHYXVnZVJhbmdlcz4pOiBBcnJheTxqcXdpZGdldHMuTGluZWFyR2F1Z2VSYW5nZXM+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgncmFuZ2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgncmFuZ2VzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dSYW5nZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdzaG93UmFuZ2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnc2hvd1JhbmdlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY2FsZVN0eWxlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3NjYWxlU3R5bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdzY2FsZVN0eWxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjYWxlTGVuZ3RoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3NjYWxlTGVuZ3RoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnc2NhbGVMZW5ndGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGlja3NPZmZzZXQoYXJnPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCd0aWNrc09mZnNldCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3RpY2tzT2Zmc2V0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpY2tzUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgndGlja3NQb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3RpY2tzUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGlja3NNaW5vcihhcmc/OiBqcXdpZGdldHMuTGluZWFyR2F1Z2VUaWNrcyk6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZVRpY2tzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgndGlja3NNaW5vcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3RpY2tzTWlub3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGlja3NNYWpvcihhcmc/OiBqcXdpZGdldHMuTGluZWFyR2F1Z2VUaWNrcyk6IGpxd2lkZ2V0cy5MaW5lYXJHYXVnZVRpY2tzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgndGlja3NNYWpvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3RpY2tzTWFqb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4TGluZWFyR2F1Z2VDb21wb25lbnQgZnVuY3Rpb25zXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeExpbmVhckdhdWdlKCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgnZW5hYmxlJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IG51bWJlciB8IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaW5lYXJHYXVnZSgndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGluZWFyR2F1Z2UoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhMaW5lYXJHYXVnZUNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2YWx1ZUNoYW5naW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WYWx1ZUNoYW5naW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhMaW5lYXJHYXVnZUNvbXBvbmVudFxuIl19