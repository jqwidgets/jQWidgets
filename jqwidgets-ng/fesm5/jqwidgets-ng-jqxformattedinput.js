import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxformattedinput';
import { __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxFormattedInputComponent; }),
    multi: true
};
var jqxFormattedInputComponent = /** @class */ (function () {
    function jqxFormattedInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxFormattedInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onRadixChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxFormattedInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxFormattedInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFormattedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFormattedInput(this.properties[i])) {
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxFormattedInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxFormattedInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxFormattedInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxFormattedInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxFormattedInputComponent.prototype.createComponent = function (options) {
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
        if (this.attrRtl !== true) {
            if (this.attrSpinButtons === false) {
                this.host.children()[1].remove();
            }
            if (this.attrDropDown !== true) {
                this.host.children()[1].remove();
            }
        }
        else if (this.attrRtl === true) {
            this.host.children()[1].remove();
            this.host.children()[1].remove();
            if (this.attrSpinButtons !== false) {
                this.host.prepend('<div></div>');
            }
            if (this.attrDropDown === true) {
                this.host.prepend('<div></div>');
            }
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFormattedInput', options);
    };
    jqxFormattedInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxFormattedInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxFormattedInputComponent.prototype, "ngValue", {
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
    jqxFormattedInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxFormattedInput('val', value);
        }
    };
    jqxFormattedInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxFormattedInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxFormattedInputComponent.prototype.setOptions = function (options) {
        this.host.jqxFormattedInput('setOptions', options);
    };
    // jqxFormattedInputComponent properties
    jqxFormattedInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('disabled', arg);
        }
        else {
            return this.host.jqxFormattedInput('disabled');
        }
    };
    jqxFormattedInputComponent.prototype.decimalNotation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxFormattedInput('decimalNotation');
        }
    };
    jqxFormattedInputComponent.prototype.dropDown = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDown', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDown');
        }
    };
    jqxFormattedInputComponent.prototype.dropDownWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDownWidth');
        }
    };
    jqxFormattedInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('height', arg);
        }
        else {
            return this.host.jqxFormattedInput('height');
        }
    };
    jqxFormattedInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('min', arg);
        }
        else {
            return this.host.jqxFormattedInput('min');
        }
    };
    jqxFormattedInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('max', arg);
        }
        else {
            return this.host.jqxFormattedInput('max');
        }
    };
    jqxFormattedInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('placeHolder', arg);
        }
        else {
            return this.host.jqxFormattedInput('placeHolder');
        }
    };
    jqxFormattedInputComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxFormattedInput('popupZIndex');
        }
    };
    jqxFormattedInputComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxFormattedInput('roundedCorners');
        }
    };
    jqxFormattedInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('rtl', arg);
        }
        else {
            return this.host.jqxFormattedInput('rtl');
        }
    };
    jqxFormattedInputComponent.prototype.radix = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('radix', arg);
        }
        else {
            return this.host.jqxFormattedInput('radix');
        }
    };
    jqxFormattedInputComponent.prototype.spinButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtons', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtons');
        }
    };
    jqxFormattedInputComponent.prototype.spinButtonsStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtonsStep');
        }
    };
    jqxFormattedInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('template', arg);
        }
        else {
            return this.host.jqxFormattedInput('template');
        }
    };
    jqxFormattedInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('theme', arg);
        }
        else {
            return this.host.jqxFormattedInput('theme');
        }
    };
    jqxFormattedInputComponent.prototype.upperCase = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('upperCase', arg);
        }
        else {
            return this.host.jqxFormattedInput('upperCase');
        }
    };
    jqxFormattedInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('value', arg);
        }
        else {
            return this.host.jqxFormattedInput('value');
        }
    };
    jqxFormattedInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('width', arg);
        }
        else {
            return this.host.jqxFormattedInput('width');
        }
    };
    // jqxFormattedInputComponent functions
    jqxFormattedInputComponent.prototype.close = function () {
        this.host.jqxFormattedInput('close');
    };
    jqxFormattedInputComponent.prototype.destroy = function () {
        this.host.jqxFormattedInput('destroy');
    };
    jqxFormattedInputComponent.prototype.focus = function () {
        this.host.jqxFormattedInput('focus');
    };
    jqxFormattedInputComponent.prototype.open = function () {
        this.host.jqxFormattedInput('open');
    };
    jqxFormattedInputComponent.prototype.render = function () {
        this.host.jqxFormattedInput('render');
    };
    jqxFormattedInputComponent.prototype.refresh = function () {
        this.host.jqxFormattedInput('refresh');
    };
    jqxFormattedInputComponent.prototype.selectAll = function () {
        this.host.jqxFormattedInput('selectAll');
    };
    jqxFormattedInputComponent.prototype.selectFirst = function () {
        this.host.jqxFormattedInput('selectFirst');
    };
    jqxFormattedInputComponent.prototype.selectLast = function () {
        this.host.jqxFormattedInput('selectLast');
    };
    jqxFormattedInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxFormattedInput('val', value);
        }
        else {
            return this.host.jqxFormattedInput('val');
        }
    };
    ;
    jqxFormattedInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('radixChange', function (eventData) { _this.onRadixChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    jqxFormattedInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('decimalNotation'),
        __metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrDecimalNotation", void 0);
    __decorate([
        Input('dropDown'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrDropDown", void 0);
    __decorate([
        Input('dropDownWidth'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrDropDownWidth", void 0);
    __decorate([
        Input('min'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrMin", void 0);
    __decorate([
        Input('max'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrMax", void 0);
    __decorate([
        Input('placeHolder'),
        __metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrPlaceHolder", void 0);
    __decorate([
        Input('popupZIndex'),
        __metadata("design:type", Number)
    ], jqxFormattedInputComponent.prototype, "attrPopupZIndex", void 0);
    __decorate([
        Input('roundedCorners'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrRoundedCorners", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('radix'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrRadix", void 0);
    __decorate([
        Input('spinButtons'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrSpinButtons", void 0);
    __decorate([
        Input('spinButtonsStep'),
        __metadata("design:type", Number)
    ], jqxFormattedInputComponent.prototype, "attrSpinButtonsStep", void 0);
    __decorate([
        Input('template'),
        __metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrTemplate", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('upperCase'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrUpperCase", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onRadixChange", void 0);
    jqxFormattedInputComponent = __decorate([
        Component({
            selector: 'jqxFormattedInput',
            template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxFormattedInputComponent);
    return jqxFormattedInputComponent;
}()); //jqxFormattedInputComponent

var jqxFormattedInputModule = /** @class */ (function () {
    function jqxFormattedInputModule() {
    }
    jqxFormattedInputModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxFormattedInputComponent],
            exports: [jqxFormattedInputComponent]
        })
    ], jqxFormattedInputModule);
    return jqxFormattedInputModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxFormattedInputComponent, jqxFormattedInputModule, ɵ0 };
