import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxknob';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxKnobComponent = /** @class */ (function () {
    function jqxKnobComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
        // jqxKnobComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(function () {
            _this.__updateRect__();
        });
    }
    jqxKnobComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxKnobComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    jqxKnobComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxKnobComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxKnobComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxKnobComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxKnobComponent.prototype.createComponent = function (options) {
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
    jqxKnobComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxKnobComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxKnobComponent.prototype.setOptions = function (options) {
        this.host.jqxKnob('setOptions', options);
    };
    // jqxKnobComponent properties
    jqxKnobComponent.prototype.allowValueChangeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    };
    jqxKnobComponent.prototype.allowValueChangeOnDrag = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    };
    jqxKnobComponent.prototype.allowValueChangeOnMouseWheel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    };
    jqxKnobComponent.prototype.changing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    };
    jqxKnobComponent.prototype.dragEndAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    };
    jqxKnobComponent.prototype.dragStartAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    };
    jqxKnobComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    };
    jqxKnobComponent.prototype.dial = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    };
    jqxKnobComponent.prototype.endAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    };
    jqxKnobComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    };
    jqxKnobComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    };
    jqxKnobComponent.prototype.marks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    };
    jqxKnobComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    };
    jqxKnobComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    };
    jqxKnobComponent.prototype.progressBar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    };
    jqxKnobComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    };
    jqxKnobComponent.prototype.pointerGrabAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    };
    jqxKnobComponent.prototype.rotation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    };
    jqxKnobComponent.prototype.startAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    };
    jqxKnobComponent.prototype.spinner = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    };
    jqxKnobComponent.prototype.styles = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('styles', arg);
        }
        else {
            return this.host.jqxKnob('styles');
        }
    };
    jqxKnobComponent.prototype.step = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    };
    jqxKnobComponent.prototype.snapToStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    };
    jqxKnobComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    };
    jqxKnobComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    };
    // jqxKnobComponent functions
    jqxKnobComponent.prototype.destroy = function () {
        this.host.jqxKnob('destroy');
    };
    jqxKnobComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxKnob('val', value);
        }
        else {
            return this.host.jqxKnob('val');
        }
    };
    ;
    jqxKnobComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    jqxKnobComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('allowValueChangeOnClick'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "attrAllowValueChangeOnClick", void 0);
    __decorate([
        Input('allowValueChangeOnDrag'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "attrAllowValueChangeOnDrag", void 0);
    __decorate([
        Input('allowValueChangeOnMouseWheel'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "attrAllowValueChangeOnMouseWheel", void 0);
    __decorate([
        Input('changing'),
        __metadata("design:type", Function)
    ], jqxKnobComponent.prototype, "attrChanging", void 0);
    __decorate([
        Input('dragEndAngle'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrDragEndAngle", void 0);
    __decorate([
        Input('dragStartAngle'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrDragStartAngle", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('dial'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrDial", void 0);
    __decorate([
        Input('endAngle'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrEndAngle", void 0);
    __decorate([
        Input('labels'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrLabels", void 0);
    __decorate([
        Input('marks'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrMarks", void 0);
    __decorate([
        Input('min'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrMin", void 0);
    __decorate([
        Input('max'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrMax", void 0);
    __decorate([
        Input('progressBar'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrProgressBar", void 0);
    __decorate([
        Input('pointer'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrPointer", void 0);
    __decorate([
        Input('pointerGrabAction'),
        __metadata("design:type", String)
    ], jqxKnobComponent.prototype, "attrPointerGrabAction", void 0);
    __decorate([
        Input('rotation'),
        __metadata("design:type", String)
    ], jqxKnobComponent.prototype, "attrRotation", void 0);
    __decorate([
        Input('startAngle'),
        __metadata("design:type", Number)
    ], jqxKnobComponent.prototype, "attrStartAngle", void 0);
    __decorate([
        Input('spinner'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrSpinner", void 0);
    __decorate([
        Input('styles'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrStyles", void 0);
    __decorate([
        Input('step'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrStep", void 0);
    __decorate([
        Input('snapToStep'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "attrSnapToStep", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxKnobComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxKnobComponent.prototype, "onChange", void 0);
    jqxKnobComponent = __decorate([
        Component({
            selector: 'jqxKnob',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxKnobComponent);
    return jqxKnobComponent;
}()); //jqxKnobComponent

var jqxKnobModule = /** @class */ (function () {
    function jqxKnobModule() {
    }
    jqxKnobModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxKnobComponent],
            exports: [jqxKnobComponent]
        })
    ], jqxKnobModule);
    return jqxKnobModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxKnobComponent, jqxKnobModule };
