import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxformattedinput from '../../jqwidgets-scripts/jqwidgets/jqxformattedinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('decimalNotation'),
        tslib_1.__metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrDecimalNotation", void 0);
    tslib_1.__decorate([
        Input('dropDown'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrDropDown", void 0);
    tslib_1.__decorate([
        Input('dropDownWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrDropDownWidth", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('placeHolder'),
        tslib_1.__metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrPlaceHolder", void 0);
    tslib_1.__decorate([
        Input('popupZIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxFormattedInputComponent.prototype, "attrPopupZIndex", void 0);
    tslib_1.__decorate([
        Input('roundedCorners'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrRoundedCorners", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('radix'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrRadix", void 0);
    tslib_1.__decorate([
        Input('spinButtons'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrSpinButtons", void 0);
    tslib_1.__decorate([
        Input('spinButtonsStep'),
        tslib_1.__metadata("design:type", Number)
    ], jqxFormattedInputComponent.prototype, "attrSpinButtonsStep", void 0);
    tslib_1.__decorate([
        Input('template'),
        tslib_1.__metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrTemplate", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxFormattedInputComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('upperCase'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "attrUpperCase", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFormattedInputComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFormattedInputComponent.prototype, "onRadixChange", void 0);
    jqxFormattedInputComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxFormattedInput',
            template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxFormattedInputComponent);
    return jqxFormattedInputComponent;
}()); //jqxFormattedInputComponent
export { jqxFormattedInputComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhmb3JtYXR0ZWRpbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhmb3JtYXR0ZWRpbnB1dC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Zm9ybWF0dGVkaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxJQUFNLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQzs7QUFHdkIsSUFBTSxtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVNEO0lBZ0NHLG9DQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBS3hPLHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDO1FBb1dsRCxvQ0FBb0M7UUFDMUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBclcxQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDO0lBRUYsZ0RBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0csSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO2dCQUU5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEVBQUU7NEJBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMvRjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLFNBQVM7cUJBQ1g7b0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDbEU7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQztJQUVELGdEQUFXLEdBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQscURBQWdCLEdBQWhCO1FBQ0csSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnREFBVyxHQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7UUFDcEQsSUFBSSxPQUFPLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0NBQVUsR0FBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7UUFDbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0RBQWUsR0FBZixVQUFnQixPQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssS0FBSyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNwQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLEtBQUssRUFBRTtnQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEM7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwQztTQUNKO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXpGLENBQUM7SUFFRCxpREFBWSxHQUFaLFVBQWEsT0FBYTtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtREFBYyxHQUFkO1FBQ0csSUFBRyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxzQkFBSSwrQ0FBTzthQUFYO1lBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzthQUVELFVBQVksS0FBVTtZQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztRQUNMLENBQUM7OztPQU5BO0lBUUQsK0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDakIsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVELHFEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHNEQUFpQixHQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELCtDQUFVLEdBQVYsVUFBVyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsNkNBQVEsR0FBUixVQUFTLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7SUFDSixDQUFDO0lBRUQsb0RBQWUsR0FBZixVQUFnQixHQUFZO1FBQ3pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDtJQUNKLENBQUM7SUFFRCw2Q0FBUSxHQUFSLFVBQVMsR0FBYTtRQUNuQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7SUFFRCxrREFBYSxHQUFiLFVBQWMsR0FBcUI7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdkQ7SUFDSixDQUFDO0lBRUQsMkNBQU0sR0FBTixVQUFPLEdBQXFCO1FBQ3pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0osQ0FBQztJQUVELHdDQUFHLEdBQUgsVUFBSSxHQUFxQjtRQUN0QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNKLENBQUM7SUFFRCx3Q0FBRyxHQUFILFVBQUksR0FBcUI7UUFDdEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLEdBQVk7UUFDckIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckQ7SUFDSixDQUFDO0lBRUQsZ0RBQVcsR0FBWCxVQUFZLEdBQVk7UUFDckIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckQ7SUFDSixDQUFDO0lBRUQsbURBQWMsR0FBZCxVQUFlLEdBQWE7UUFDekIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0osQ0FBQztJQUVELHdDQUFHLEdBQUgsVUFBSSxHQUFhO1FBQ2QsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsMENBQUssR0FBTCxVQUFNLEdBQXFCO1FBQ3hCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBQ0osQ0FBQztJQUVELGdEQUFXLEdBQVgsVUFBWSxHQUFhO1FBQ3RCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0osQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsR0FBWTtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7SUFDSixDQUFDO0lBRUQsNkNBQVEsR0FBUixVQUFTLEdBQVk7UUFDbEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7SUFDSixDQUFDO0lBRUQsMENBQUssR0FBTCxVQUFNLEdBQVk7UUFDZixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztJQUNKLENBQUM7SUFFRCw4Q0FBUyxHQUFULFVBQVUsR0FBYTtRQUNwQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDtJQUNKLENBQUM7SUFFRCwwQ0FBSyxHQUFMLFVBQU0sR0FBZTtRQUNsQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztJQUNKLENBQUM7SUFFRCwwQ0FBSyxHQUFMLFVBQU0sR0FBcUI7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDO0lBR0QsdUNBQXVDO0lBQ3ZDLDBDQUFLLEdBQUw7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0Q0FBTyxHQUFQO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHlDQUFJLEdBQUo7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNENBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDhDQUFTLEdBQVQ7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQVUsR0FBVjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFHLEdBQUgsVUFBSSxLQUF1QjtRQUN4QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFTRixtREFBYyxHQUFkO1FBQUEsaUJBS0M7UUFKRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJO1lBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJO1lBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SixDQUFDO0lBM1lrQjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztvRUFBdUI7SUFDZjtRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7OzJFQUE2QjtJQUNuQztRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztvRUFBdUI7SUFDakI7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7eUVBQW9DO0lBQzdDO1FBQWIsS0FBSyxDQUFDLEtBQUssQ0FBQzs7K0RBQTBCO0lBQ3pCO1FBQWIsS0FBSyxDQUFDLEtBQUssQ0FBQzs7K0RBQTBCO0lBQ2pCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O3VFQUF5QjtJQUN4QjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzt1RUFBeUI7SUFDckI7UUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzswRUFBNkI7SUFDdkM7UUFBYixLQUFLLENBQUMsS0FBSyxDQUFDOzsrREFBa0I7SUFDZjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7O2lFQUE0QjtJQUNyQjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzt1RUFBMEI7SUFDckI7UUFBekIsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzsyRUFBNkI7SUFDbkM7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7b0VBQXNCO0lBQ3hCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7aUVBQW1CO0lBQ2Q7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7cUVBQXdCO0lBQzNCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7aUVBQTRCO0lBQzNCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7aUVBQTRCO0lBQzFCO1FBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7O2tFQUE2QjtJQUV2QjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOztrRUFBNEI7SUE2V3ZDO1FBQVQsTUFBTSxFQUFFOztnRUFBK0I7SUFDOUI7UUFBVCxNQUFNLEVBQUU7OytEQUE4QjtJQUM3QjtRQUFULE1BQU0sRUFBRTs7OERBQTZCO0lBQzVCO1FBQVQsTUFBTSxFQUFFOztxRUFBb0M7SUF0WW5DLDBCQUEwQjtRQVB0QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSw0RUFBNEU7WUFDdEYsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7WUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztpREFrQytCLFVBQVU7T0FoQzlCLDBCQUEwQixDQStZdEM7SUFBRCxpQ0FBQztDQUFBLEFBL1lELElBK1lDLENBQUMsNEJBQTRCO1NBL1lqQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhGb3JtYXR0ZWRJbnB1dENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhGb3JtYXR0ZWRJbnB1dCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmdWYWx1ZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj4nLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIGpxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyBcbntcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2RlY2ltYWxOb3RhdGlvbicpIGF0dHJEZWNpbWFsTm90YXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd24nKSBhdHRyRHJvcERvd246IGJvb2xlYW47XG4gICBASW5wdXQoJ2Ryb3BEb3duV2lkdGgnKSBhdHRyRHJvcERvd25XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtaW4nKSBhdHRyTWluOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncGxhY2VIb2xkZXInKSBhdHRyUGxhY2VIb2xkZXI6IHN0cmluZztcbiAgIEBJbnB1dCgncG9wdXBaSW5kZXgnKSBhdHRyUG9wdXBaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgncm91bmRlZENvcm5lcnMnKSBhdHRyUm91bmRlZENvcm5lcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JhZGl4JykgYXR0clJhZGl4OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3NwaW5CdXR0b25zJykgYXR0clNwaW5CdXR0b25zOiBib29sZWFuO1xuICAgQElucHV0KCdzcGluQnV0dG9uc1N0ZXAnKSBhdHRyU3BpbkJ1dHRvbnNTdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ3RlbXBsYXRlJykgYXR0clRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VwcGVyQ2FzZScpIGF0dHJVcHBlckNhc2U6IGJvb2xlYW47XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnZGlzYWJsZWQnLCdkZWNpbWFsTm90YXRpb24nLCdkcm9wRG93bicsJ2Ryb3BEb3duV2lkdGgnLCdoZWlnaHQnLCdtaW4nLCdtYXgnLCdwbGFjZUhvbGRlcicsJ3BvcHVwWkluZGV4Jywncm91bmRlZENvcm5lcnMnLCdydGwnLCdyYWRpeCcsJ3NwaW5CdXR0b25zJywnc3BpbkJ1dHRvbnNTdGVwJywndGVtcGxhdGUnLCd0aGVtZScsJ3VwcGVyQ2FzZScsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4Rm9ybWF0dGVkSW5wdXQ7XG5cbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICBpZiAodGhpcy5hdHRyUnRsICE9PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXR0clNwaW5CdXR0b25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hpbGRyZW4oKVsxXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuYXR0ckRyb3BEb3duICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaG9zdC5jaGlsZHJlbigpWzFdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdHRyUnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmNoaWxkcmVuKClbMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5ob3N0LmNoaWxkcmVuKClbMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuYXR0clNwaW5CdXR0b25zICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aGlzLmhvc3QucHJlcGVuZCgnPGRpdj48L2Rpdj4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuYXR0ckRyb3BEb3duID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaG9zdC5wcmVwZW5kKCc8ZGl2PjwvZGl2PicpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEZvcm1hdHRlZElucHV0Jywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIGdldCBuZ1ZhbHVlKCk6IGFueSB7XG4gICAgICAgaWYgKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ob3N0LnZhbCgpO1xuICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgfVxuICAgICAgIHJldHVybiAnJztcbiAgIH1cblxuICAgc2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgIGlmICh0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgIH1cbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4Rm9ybWF0dGVkSW5wdXRDb21wb25lbnQgcHJvcGVydGllc1xuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlY2ltYWxOb3RhdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkZWNpbWFsTm90YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkZWNpbWFsTm90YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcERvd24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkcm9wRG93bicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Ryb3BEb3duJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duV2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnZHJvcERvd25XaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Ryb3BEb3duV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGxhY2VIb2xkZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncGxhY2VIb2xkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdwbGFjZUhvbGRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3B1cFpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdwb3B1cFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3BvcHVwWkluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvdW5kZWRDb3JuZXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncm91bmRlZENvcm5lcnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdyb3VuZGVkQ29ybmVycycpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmFkaXgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncmFkaXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdyYWRpeCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzcGluQnV0dG9ucyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NwaW5CdXR0b25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnc3BpbkJ1dHRvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BpbkJ1dHRvbnNTdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NwaW5CdXR0b25zU3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NwaW5CdXR0b25zU3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXBwZXJDYXNlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndXBwZXJDYXNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndXBwZXJDYXNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlKGFyZz86IHVuZGVmaW5lZCk6IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndmFsdWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Nsb3NlJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIG9wZW4oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ29wZW4nKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NlbGVjdEFsbCcpO1xuICAgfVxuXG4gICBzZWxlY3RGaXJzdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnc2VsZWN0Rmlyc3QnKTtcbiAgIH1cblxuICAgc2VsZWN0TGFzdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnc2VsZWN0TGFzdCcpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBudW1iZXIgfCBzdHJpbmcpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4Rm9ybWF0dGVkSW5wdXRDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SYWRpeENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgaWYgKGV2ZW50RGF0YS5hcmdzKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZXZlbnREYXRhLmFyZ3MudmFsdWUpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ29wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmFkaXhDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJhZGl4Q2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgaWYgKGV2ZW50RGF0YS5hcmdzKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soZXZlbnREYXRhLmFyZ3MudmFsdWUpOyB9KTtcbiAgIH1cblxufSAvL2pxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50XG4iXX0=