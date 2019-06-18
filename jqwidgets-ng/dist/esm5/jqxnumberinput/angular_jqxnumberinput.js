import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxNumberInputComponent; }),
    multi: true
};
var jqxNumberInputComponent = /** @class */ (function () {
    function jqxNumberInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new EventEmitter();
        this.onTextchanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxNumberInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxNumberInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNumberInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNumberInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNumberInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxNumberInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxNumberInputComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    jqxNumberInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNumberInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNumberInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxNumberInput('val', value);
        }
    };
    jqxNumberInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxNumberInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxNumberInputComponent.prototype.setOptions = function (options) {
        this.host.jqxNumberInput('setOptions', options);
    };
    // jqxNumberInputComponent properties
    jqxNumberInputComponent.prototype.allowNull = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    };
    jqxNumberInputComponent.prototype.decimal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    };
    jqxNumberInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    };
    jqxNumberInputComponent.prototype.decimalDigits = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    };
    jqxNumberInputComponent.prototype.decimalSeparator = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    };
    jqxNumberInputComponent.prototype.digits = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    };
    jqxNumberInputComponent.prototype.groupSeparator = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    };
    jqxNumberInputComponent.prototype.groupSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    };
    jqxNumberInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    };
    jqxNumberInputComponent.prototype.inputMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    };
    jqxNumberInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    };
    jqxNumberInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    };
    jqxNumberInputComponent.prototype.negativeSymbol = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    };
    jqxNumberInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    };
    jqxNumberInputComponent.prototype.promptChar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    };
    jqxNumberInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    };
    jqxNumberInputComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    };
    jqxNumberInputComponent.prototype.spinMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    };
    jqxNumberInputComponent.prototype.spinButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    };
    jqxNumberInputComponent.prototype.spinButtonsWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    };
    jqxNumberInputComponent.prototype.spinButtonsStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    };
    jqxNumberInputComponent.prototype.symbol = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    };
    jqxNumberInputComponent.prototype.symbolPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    };
    jqxNumberInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    };
    jqxNumberInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    };
    jqxNumberInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    };
    jqxNumberInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    };
    jqxNumberInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    };
    // jqxNumberInputComponent functions
    jqxNumberInputComponent.prototype.clear = function () {
        this.host.jqxNumberInput('clear');
    };
    jqxNumberInputComponent.prototype.destroy = function () {
        this.host.jqxNumberInput('destroy');
    };
    jqxNumberInputComponent.prototype.focus = function () {
        this.host.jqxNumberInput('focus');
    };
    jqxNumberInputComponent.prototype.getDecimal = function () {
        return this.host.jqxNumberInput('getDecimal');
    };
    jqxNumberInputComponent.prototype.setDecimal = function (index) {
        this.host.jqxNumberInput('setDecimal', index);
    };
    jqxNumberInputComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxNumberInput('val', value);
        }
        else {
            return this.host.jqxNumberInput('val');
        }
    };
    ;
    jqxNumberInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    tslib_1.__decorate([
        Input('allowNull'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "attrAllowNull", void 0);
    tslib_1.__decorate([
        Input('decimal'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrDecimal", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('decimalDigits'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrDecimalDigits", void 0);
    tslib_1.__decorate([
        Input('decimalSeparator'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrDecimalSeparator", void 0);
    tslib_1.__decorate([
        Input('digits'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrDigits", void 0);
    tslib_1.__decorate([
        Input('groupSeparator'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrGroupSeparator", void 0);
    tslib_1.__decorate([
        Input('groupSize'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrGroupSize", void 0);
    tslib_1.__decorate([
        Input('inputMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrInputMode", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('negativeSymbol'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrNegativeSymbol", void 0);
    tslib_1.__decorate([
        Input('placeHolder'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrPlaceHolder", void 0);
    tslib_1.__decorate([
        Input('promptChar'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrPromptChar", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('readOnly'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "attrReadOnly", void 0);
    tslib_1.__decorate([
        Input('spinMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrSpinMode", void 0);
    tslib_1.__decorate([
        Input('spinButtons'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "attrSpinButtons", void 0);
    tslib_1.__decorate([
        Input('spinButtonsWidth'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNumberInputComponent.prototype, "attrSpinButtonsWidth", void 0);
    tslib_1.__decorate([
        Input('spinButtonsStep'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrSpinButtonsStep", void 0);
    tslib_1.__decorate([
        Input('symbol'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrSymbol", void 0);
    tslib_1.__decorate([
        Input('symbolPosition'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrSymbolPosition", void 0);
    tslib_1.__decorate([
        Input('textAlign'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrTextAlign", void 0);
    tslib_1.__decorate([
        Input('template'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrTemplate", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxNumberInputComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNumberInputComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "onTextchanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNumberInputComponent.prototype, "onValueChanged", void 0);
    jqxNumberInputComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxNumberInput',
            template: '<input>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxNumberInputComponent);
    return jqxNumberInputComponent;
}()); //jqxNumberInputComponent
export { jqxNumberInputComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhudW1iZXJpbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhudW1iZXJpbnB1dC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4bnVtYmVyaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxJQUFNLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQzs7QUFHdkIsSUFBTSxtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVNEO0lBeUNHLGlDQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxrQkFBa0IsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxpQkFBaUIsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBS2hXLHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxx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QjtRQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7O3lFQUE4QjtJQUM5QjtRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7O3dFQUFzQztJQUM5QztRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzsrREFBb0I7SUFDWDtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7O3VFQUE0QjtJQUNoQztRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztrRUFBdUI7SUFDdkI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7aUVBQXNCO0lBQ3hCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7OERBQW1CO0lBQ2xCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7OERBQTRCO0lBQzNCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7OERBQTRCO0lBQzFCO1FBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7OytEQUE2QjtJQUV2QjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzsrREFBNEI7SUF1WXZDO1FBQVQsTUFBTSxFQUFFOzs2REFBK0I7SUFDOUI7UUFBVCxNQUFNLEVBQUU7O2tFQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTs7bUVBQXFDO0lBeGFwQyx1QkFBdUI7UUFQbkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO2lEQTJDK0IsVUFBVTtPQXpDOUIsdUJBQXVCLENBZ2JuQztJQUFELDhCQUFDO0NBQUEsQUFoYkQsSUFnYkMsQ0FBQyx5QkFBeUI7U0FoYmQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4ganF4TnVtYmVySW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4TnVtYmVySW5wdXQnLFxuICAgIHRlbXBsYXRlOiAnPGlucHV0PicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4TnVtYmVySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIFxue1xuICAgQElucHV0KCdhbGxvd051bGwnKSBhdHRyQWxsb3dOdWxsOiBib29sZWFuO1xuICAgQElucHV0KCdkZWNpbWFsJykgYXR0ckRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2RlY2ltYWxEaWdpdHMnKSBhdHRyRGVjaW1hbERpZ2l0czogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdkZWNpbWFsU2VwYXJhdG9yJykgYXR0ckRlY2ltYWxTZXBhcmF0b3I6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnZGlnaXRzJykgYXR0ckRpZ2l0czogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdncm91cFNlcGFyYXRvcicpIGF0dHJHcm91cFNlcGFyYXRvcjogc3RyaW5nO1xuICAgQElucHV0KCdncm91cFNpemUnKSBhdHRyR3JvdXBTaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2lucHV0TW9kZScpIGF0dHJJbnB1dE1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ25lZ2F0aXZlU3ltYm9sJykgYXR0ck5lZ2F0aXZlU3ltYm9sOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BsYWNlSG9sZGVyJykgYXR0clBsYWNlSG9sZGVyOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3Byb21wdENoYXInKSBhdHRyUHJvbXB0Q2hhcjogc3RyaW5nO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdyZWFkT25seScpIGF0dHJSZWFkT25seTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3Bpbk1vZGUnKSBhdHRyU3Bpbk1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc3BpbkJ1dHRvbnMnKSBhdHRyU3BpbkJ1dHRvbnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NwaW5CdXR0b25zV2lkdGgnKSBhdHRyU3BpbkJ1dHRvbnNXaWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdzcGluQnV0dG9uc1N0ZXAnKSBhdHRyU3BpbkJ1dHRvbnNTdGVwOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3N5bWJvbCcpIGF0dHJTeW1ib2w6IHN0cmluZztcbiAgIEBJbnB1dCgnc3ltYm9sUG9zaXRpb24nKSBhdHRyU3ltYm9sUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgndGV4dEFsaWduJykgYXR0clRleHRBbGlnbjogc3RyaW5nO1xuICAgQElucHV0KCd0ZW1wbGF0ZScpIGF0dHJUZW1wbGF0ZTogc3RyaW5nO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FsbG93TnVsbCcsJ2RlY2ltYWwnLCdkaXNhYmxlZCcsJ2RlY2ltYWxEaWdpdHMnLCdkZWNpbWFsU2VwYXJhdG9yJywnZGlnaXRzJywnZ3JvdXBTZXBhcmF0b3InLCdncm91cFNpemUnLCdoZWlnaHQnLCdpbnB1dE1vZGUnLCdtaW4nLCdtYXgnLCduZWdhdGl2ZVN5bWJvbCcsJ3BsYWNlSG9sZGVyJywncHJvbXB0Q2hhcicsJ3J0bCcsJ3JlYWRPbmx5Jywnc3Bpbk1vZGUnLCdzcGluQnV0dG9ucycsJ3NwaW5CdXR0b25zV2lkdGgnLCdzcGluQnV0dG9uc1N0ZXAnLCdzeW1ib2wnLCdzeW1ib2xQb3NpdGlvbicsJ3RleHRBbGlnbicsJ3RlbXBsYXRlJywndGhlbWUnLCd2YWx1ZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeE51bWJlcklucHV0O1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4TnVtYmVySW5wdXQnLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMud2lkZ2V0T2JqZWN0Wydob3N0J107XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgndmFsJywgdmFsdWUpO1xuICAgICAgIH1cbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeE51bWJlcklucHV0Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFsbG93TnVsbChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2FsbG93TnVsbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2FsbG93TnVsbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWNpbWFsKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2RlY2ltYWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdkZWNpbWFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWNpbWFsRGlnaXRzKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2RlY2ltYWxEaWdpdHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdkZWNpbWFsRGlnaXRzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlY2ltYWxTZXBhcmF0b3IoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnZGVjaW1hbFNlcGFyYXRvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2RlY2ltYWxTZXBhcmF0b3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlnaXRzKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2RpZ2l0cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2RpZ2l0cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cFNlcGFyYXRvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdncm91cFNlcGFyYXRvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2dyb3VwU2VwYXJhdG9yJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3VwU2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdncm91cFNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdncm91cFNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbnB1dE1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnaW5wdXRNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnaW5wdXRNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBuZWdhdGl2ZVN5bWJvbChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCduZWdhdGl2ZVN5bWJvbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ25lZ2F0aXZlU3ltYm9sJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBsYWNlSG9sZGVyKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3BsYWNlSG9sZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgncGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJvbXB0Q2hhcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdwcm9tcHRDaGFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgncHJvbXB0Q2hhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVhZE9ubHkoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdyZWFkT25seScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3JlYWRPbmx5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNwaW5Nb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3NwaW5Nb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc3Bpbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BpbkJ1dHRvbnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCdzcGluQnV0dG9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3NwaW5CdXR0b25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNwaW5CdXR0b25zV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc3BpbkJ1dHRvbnNXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3NwaW5CdXR0b25zV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BpbkJ1dHRvbnNTdGVwKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3NwaW5CdXR0b25zU3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3NwaW5CdXR0b25zU3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzeW1ib2woYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc3ltYm9sJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc3ltYm9sJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN5bWJvbFBvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3N5bWJvbFBvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc3ltYm9sUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGV4dEFsaWduKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3RleHRBbGlnbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3RleHRBbGlnbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCd0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TnVtYmVySW5wdXQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4TnVtYmVySW5wdXRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnY2xlYXInKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0RGVjaW1hbCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnZ2V0RGVjaW1hbCcpO1xuICAgfVxuXG4gICBzZXREZWNpbWFsKGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgnc2V0RGVjaW1hbCcsIGluZGV4KTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE51bWJlcklucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOdW1iZXJJbnB1dCgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeE51bWJlcklucHV0Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVGV4dGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLnZhbHVlKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3RleHRjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25UZXh0Y2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLnZhbHVlKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgaWYgKGV2ZW50RGF0YS5hcmdzKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZXZlbnREYXRhLmFyZ3MudmFsdWUpOyB9KTtcbiAgIH1cblxufSAvL2pxeE51bWJlcklucHV0Q29tcG9uZW50XG4iXX0=