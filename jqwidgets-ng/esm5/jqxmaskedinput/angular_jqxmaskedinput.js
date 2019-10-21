import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxmaskedinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxMaskedInputComponent; }),
    multi: true
};
var jqxMaskedInputComponent = /** @class */ (function () {
    function jqxMaskedInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxMaskedInputComponent events
        this.onChange = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxMaskedInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxMaskedInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMaskedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMaskedInput(this.properties[i])) {
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxMaskedInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxMaskedInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxMaskedInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxMaskedInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxMaskedInputComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
    };
    jqxMaskedInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxMaskedInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxMaskedInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxMaskedInput('val', value);
        }
    };
    jqxMaskedInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxMaskedInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxMaskedInputComponent.prototype.setOptions = function (options) {
        this.host.jqxMaskedInput('setOptions', options);
    };
    // jqxMaskedInputComponent properties
    jqxMaskedInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('disabled', arg);
        }
        else {
            return this.host.jqxMaskedInput('disabled');
        }
    };
    jqxMaskedInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('height', arg);
        }
        else {
            return this.host.jqxMaskedInput('height');
        }
    };
    jqxMaskedInputComponent.prototype.mask = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('mask', arg);
        }
        else {
            return this.host.jqxMaskedInput('mask');
        }
    };
    jqxMaskedInputComponent.prototype.promptChar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('promptChar', arg);
        }
        else {
            return this.host.jqxMaskedInput('promptChar');
        }
    };
    jqxMaskedInputComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('readOnly', arg);
        }
        else {
            return this.host.jqxMaskedInput('readOnly');
        }
    };
    jqxMaskedInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('rtl', arg);
        }
        else {
            return this.host.jqxMaskedInput('rtl');
        }
    };
    jqxMaskedInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('theme', arg);
        }
        else {
            return this.host.jqxMaskedInput('theme');
        }
    };
    jqxMaskedInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('textAlign', arg);
        }
        else {
            return this.host.jqxMaskedInput('textAlign');
        }
    };
    jqxMaskedInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('value', arg);
        }
        else {
            return this.host.jqxMaskedInput('value');
        }
    };
    jqxMaskedInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('width', arg);
        }
        else {
            return this.host.jqxMaskedInput('width');
        }
    };
    // jqxMaskedInputComponent functions
    jqxMaskedInputComponent.prototype.clear = function () {
        this.host.jqxMaskedInput('clear');
    };
    jqxMaskedInputComponent.prototype.destroy = function () {
        this.host.jqxMaskedInput('destroy');
    };
    jqxMaskedInputComponent.prototype.focus = function () {
        this.host.jqxMaskedInput('focus');
    };
    jqxMaskedInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxMaskedInput('val', value);
        }
        else {
            return this.host.jqxMaskedInput('val');
        }
    };
    ;
    jqxMaskedInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.parent().on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.parent().on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    jqxMaskedInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMaskedInputComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('mask'),
        tslib_1.__metadata("design:type", String)
    ], jqxMaskedInputComponent.prototype, "attrMask", void 0);
    tslib_1.__decorate([
        Input('promptChar'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "attrPromptChar", void 0);
    tslib_1.__decorate([
        Input('readOnly'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMaskedInputComponent.prototype, "attrReadOnly", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMaskedInputComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxMaskedInputComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('textAlign'),
        tslib_1.__metadata("design:type", String)
    ], jqxMaskedInputComponent.prototype, "attrTextAlign", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMaskedInputComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxMaskedInputComponent.prototype, "onValueChanged", void 0);
    jqxMaskedInputComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxMaskedInput',
            template: '<input>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxMaskedInputComponent);
    return jqxMaskedInputComponent;
}()); //jqxMaskedInputComponent
export { jqxMaskedInputComponent };
export { ɵ0 };
