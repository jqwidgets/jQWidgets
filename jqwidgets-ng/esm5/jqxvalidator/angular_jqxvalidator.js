import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxvalidator';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxValidatorComponent = /** @class */ (function () {
    function jqxValidatorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrow', 'animation', 'animationDuration', 'closeOnClick', 'focus', 'hintType', 'onError', 'onSuccess', 'position', 'rules', 'rtl'];
        // jqxValidatorComponent events
        this.onValidationError = new EventEmitter();
        this.onValidationSuccess = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxValidatorComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxValidatorComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxValidator(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxValidator(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxValidator(this.properties[i])) {
                        this.host.jqxValidator(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxValidatorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxValidatorComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxValidatorComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxValidatorComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxValidatorComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
    };
    jqxValidatorComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxValidatorComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxValidatorComponent.prototype.setOptions = function (options) {
        this.host.jqxValidator('setOptions', options);
    };
    // jqxValidatorComponent properties
    jqxValidatorComponent.prototype.arrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('arrow', arg);
        }
        else {
            return this.host.jqxValidator('arrow');
        }
    };
    jqxValidatorComponent.prototype.animation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animation', arg);
        }
        else {
            return this.host.jqxValidator('animation');
        }
    };
    jqxValidatorComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animationDuration', arg);
        }
        else {
            return this.host.jqxValidator('animationDuration');
        }
    };
    jqxValidatorComponent.prototype.closeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('closeOnClick', arg);
        }
        else {
            return this.host.jqxValidator('closeOnClick');
        }
    };
    jqxValidatorComponent.prototype.focus = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('focus', arg);
        }
        else {
            return this.host.jqxValidator('focus');
        }
    };
    jqxValidatorComponent.prototype.hintType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('hintType', arg);
        }
        else {
            return this.host.jqxValidator('hintType');
        }
    };
    jqxValidatorComponent.prototype.onError = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onError', arg);
        }
        else {
            return this.host.jqxValidator('onError');
        }
    };
    jqxValidatorComponent.prototype.onSuccess = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onSuccess', arg);
        }
        else {
            return this.host.jqxValidator('onSuccess');
        }
    };
    jqxValidatorComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('position', arg);
        }
        else {
            return this.host.jqxValidator('position');
        }
    };
    jqxValidatorComponent.prototype.rules = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rules', arg);
        }
        else {
            return this.host.jqxValidator('rules');
        }
    };
    jqxValidatorComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rtl', arg);
        }
        else {
            return this.host.jqxValidator('rtl');
        }
    };
    // jqxValidatorComponent functions
    jqxValidatorComponent.prototype.hideHint = function (id) {
        this.host.jqxValidator('hideHint', id);
    };
    jqxValidatorComponent.prototype.hide = function () {
        this.host.jqxValidator('hide');
    };
    jqxValidatorComponent.prototype.updatePosition = function () {
        this.host.jqxValidator('updatePosition');
    };
    jqxValidatorComponent.prototype.validate = function (htmlElement) {
        this.host.jqxValidator('validate', htmlElement);
    };
    jqxValidatorComponent.prototype.validateInput = function (id) {
        this.host.jqxValidator('validateInput', id);
    };
    jqxValidatorComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('validationError', function (eventData) { _this.onValidationError.emit(eventData); });
        this.host.on('validationSuccess', function (eventData) { _this.onValidationSuccess.emit(eventData); });
    };
    jqxValidatorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('arrow'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxValidatorComponent.prototype, "attrArrow", void 0);
    tslib_1.__decorate([
        Input('animation'),
        tslib_1.__metadata("design:type", String)
    ], jqxValidatorComponent.prototype, "attrAnimation", void 0);
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxValidatorComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('closeOnClick'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxValidatorComponent.prototype, "attrCloseOnClick", void 0);
    tslib_1.__decorate([
        Input('focus'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxValidatorComponent.prototype, "attrFocus", void 0);
    tslib_1.__decorate([
        Input('hintType'),
        tslib_1.__metadata("design:type", String)
    ], jqxValidatorComponent.prototype, "attrHintType", void 0);
    tslib_1.__decorate([
        Input('onError'),
        tslib_1.__metadata("design:type", Function)
    ], jqxValidatorComponent.prototype, "attrOnError", void 0);
    tslib_1.__decorate([
        Input('onSuccess'),
        tslib_1.__metadata("design:type", Function)
    ], jqxValidatorComponent.prototype, "attrOnSuccess", void 0);
    tslib_1.__decorate([
        Input('position'),
        tslib_1.__metadata("design:type", String)
    ], jqxValidatorComponent.prototype, "attrPosition", void 0);
    tslib_1.__decorate([
        Input('rules'),
        tslib_1.__metadata("design:type", Array)
    ], jqxValidatorComponent.prototype, "attrRules", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxValidatorComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxValidatorComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxValidatorComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxValidatorComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxValidatorComponent.prototype, "onValidationError", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxValidatorComponent.prototype, "onValidationSuccess", void 0);
    jqxValidatorComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxValidator',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxValidatorComponent);
    return jqxValidatorComponent;
}()); //jqxValidatorComponent
export { jqxValidatorComponent };
