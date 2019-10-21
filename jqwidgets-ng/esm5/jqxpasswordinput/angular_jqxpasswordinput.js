import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxpasswordinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxPasswordInputComponent; }),
    multi: true
};
var jqxPasswordInputComponent = /** @class */ (function () {
    function jqxPasswordInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxPasswordInputComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxPasswordInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxPasswordInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxPasswordInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxPasswordInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxPasswordInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxPasswordInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxPasswordInputComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
    };
    jqxPasswordInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxPasswordInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxPasswordInputComponent.prototype, "ngValue", {
        get: function () {
            if (this.widgetObject) {
                var value = this.host.val();
                return value;
            }
            return '';
        },
        set: function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    jqxPasswordInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxPasswordInput('val', value);
        }
    };
    jqxPasswordInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxPasswordInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxPasswordInputComponent.prototype.setOptions = function (options) {
        this.host.jqxPasswordInput('setOptions', options);
    };
    // jqxPasswordInputComponent properties
    jqxPasswordInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('disabled', arg);
        }
        else {
            return this.host.jqxPasswordInput('disabled');
        }
    };
    jqxPasswordInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('height', arg);
        }
        else {
            return this.host.jqxPasswordInput('height');
        }
    };
    jqxPasswordInputComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('localization', arg);
        }
        else {
            return this.host.jqxPasswordInput('localization');
        }
    };
    jqxPasswordInputComponent.prototype.maxLength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('maxLength', arg);
        }
        else {
            return this.host.jqxPasswordInput('maxLength');
        }
    };
    jqxPasswordInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('placeHolder', arg);
        }
        else {
            return this.host.jqxPasswordInput('placeHolder');
        }
    };
    jqxPasswordInputComponent.prototype.passwordStrength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('passwordStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('passwordStrength');
        }
    };
    jqxPasswordInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('rtl', arg);
        }
        else {
            return this.host.jqxPasswordInput('rtl');
        }
    };
    jqxPasswordInputComponent.prototype.strengthColors = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthColors', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthColors');
        }
    };
    jqxPasswordInputComponent.prototype.showStrength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrength');
        }
    };
    jqxPasswordInputComponent.prototype.showStrengthPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrengthPosition', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrengthPosition');
        }
    };
    jqxPasswordInputComponent.prototype.strengthTypeRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthTypeRenderer', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthTypeRenderer');
        }
    };
    jqxPasswordInputComponent.prototype.showPasswordIcon = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showPasswordIcon', arg);
        }
        else {
            return this.host.jqxPasswordInput('showPasswordIcon');
        }
    };
    jqxPasswordInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('theme', arg);
        }
        else {
            return this.host.jqxPasswordInput('theme');
        }
    };
    jqxPasswordInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('width', arg);
        }
        else {
            return this.host.jqxPasswordInput('width');
        }
    };
    // jqxPasswordInputComponent functions
    jqxPasswordInputComponent.prototype.render = function () {
        this.host.jqxPasswordInput('render');
    };
    jqxPasswordInputComponent.prototype.refresh = function () {
        this.host.jqxPasswordInput('refresh');
    };
    jqxPasswordInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxPasswordInput('val', value);
        }
        else {
            return this.host.jqxPasswordInput('val');
        }
    };
    ;
    jqxPasswordInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    jqxPasswordInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPasswordInputComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('localization'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrLocalization", void 0);
    tslib_1.__decorate([
        Input('maxLength'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrMaxLength", void 0);
    tslib_1.__decorate([
        Input('placeHolder'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrPlaceHolder", void 0);
    tslib_1.__decorate([
        Input('passwordStrength'),
        tslib_1.__metadata("design:type", Function)
    ], jqxPasswordInputComponent.prototype, "attrPasswordStrength", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPasswordInputComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('strengthColors'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrStrengthColors", void 0);
    tslib_1.__decorate([
        Input('showStrength'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPasswordInputComponent.prototype, "attrShowStrength", void 0);
    tslib_1.__decorate([
        Input('showStrengthPosition'),
        tslib_1.__metadata("design:type", String)
    ], jqxPasswordInputComponent.prototype, "attrShowStrengthPosition", void 0);
    tslib_1.__decorate([
        Input('strengthTypeRenderer'),
        tslib_1.__metadata("design:type", Function)
    ], jqxPasswordInputComponent.prototype, "attrStrengthTypeRenderer", void 0);
    tslib_1.__decorate([
        Input('showPasswordIcon'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPasswordInputComponent.prototype, "attrShowPasswordIcon", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxPasswordInputComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPasswordInputComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPasswordInputComponent.prototype, "onChange", void 0);
    jqxPasswordInputComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxPasswordInput',
            template: '<input type="password" [(ngModel)]="ngValue">',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxPasswordInputComponent);
    return jqxPasswordInputComponent;
}()); //jqxPasswordInputComponent
export { jqxPasswordInputComponent };
export { ɵ0 };
