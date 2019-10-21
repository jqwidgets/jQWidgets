import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
import { __spread, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxDateTimeInputComponent; }),
    multi: true
};
var jqxDateTimeInputComponent = /** @class */ (function () {
    function jqxDateTimeInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDateTimeInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onTextchanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxDateTimeInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDateTimeInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDateTimeInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDateTimeInput(this.properties[i])) {
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDateTimeInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDateTimeInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDateTimeInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxDateTimeInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDateTimeInputComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    jqxDateTimeInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDateTimeInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxDateTimeInputComponent.prototype, "ngValue", {
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
    jqxDateTimeInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxDateTimeInput('val', value);
        }
    };
    jqxDateTimeInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.setOptions = function (options) {
        this.host.jqxDateTimeInput('setOptions', options);
    };
    // jqxDateTimeInputComponent properties
    jqxDateTimeInputComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    };
    jqxDateTimeInputComponent.prototype.allowNullDate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    };
    jqxDateTimeInputComponent.prototype.allowKeyboardDelete = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    };
    jqxDateTimeInputComponent.prototype.clearString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    };
    jqxDateTimeInputComponent.prototype.culture = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    };
    jqxDateTimeInputComponent.prototype.closeDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.closeCalendarAfterSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownHorizontalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownVerticalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    };
    jqxDateTimeInputComponent.prototype.enableBrowserBoundsDetection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    };
    jqxDateTimeInputComponent.prototype.enableAbsoluteSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.firstDayOfWeek = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    };
    jqxDateTimeInputComponent.prototype.formatString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    };
    jqxDateTimeInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    };
    jqxDateTimeInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    };
    jqxDateTimeInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    };
    jqxDateTimeInputComponent.prototype.openDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    };
    jqxDateTimeInputComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    };
    jqxDateTimeInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    };
    jqxDateTimeInputComponent.prototype.readonly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    };
    jqxDateTimeInputComponent.prototype.showFooter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    };
    jqxDateTimeInputComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    };
    jqxDateTimeInputComponent.prototype.showWeekNumbers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    };
    jqxDateTimeInputComponent.prototype.showTimeButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    };
    jqxDateTimeInputComponent.prototype.showCalendarButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    };
    jqxDateTimeInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    };
    jqxDateTimeInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    };
    jqxDateTimeInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    };
    jqxDateTimeInputComponent.prototype.todayString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    };
    jqxDateTimeInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    };
    jqxDateTimeInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    };
    // jqxDateTimeInputComponent functions
    jqxDateTimeInputComponent.prototype.close = function () {
        this.host.jqxDateTimeInput('close');
    };
    jqxDateTimeInputComponent.prototype.destroy = function () {
        this.host.jqxDateTimeInput('destroy');
    };
    jqxDateTimeInputComponent.prototype.focus = function () {
        this.host.jqxDateTimeInput('focus');
    };
    jqxDateTimeInputComponent.prototype.getRange = function () {
        return this.host.jqxDateTimeInput('getRange');
    };
    jqxDateTimeInputComponent.prototype.getText = function () {
        return this.host.jqxDateTimeInput('getText');
    };
    jqxDateTimeInputComponent.prototype.getDate = function () {
        return this.host.jqxDateTimeInput('getDate');
    };
    jqxDateTimeInputComponent.prototype.getMaxDate = function () {
        return this.host.jqxDateTimeInput('getMaxDate');
    };
    jqxDateTimeInputComponent.prototype.getMinDate = function () {
        return this.host.jqxDateTimeInput('getMinDate');
    };
    jqxDateTimeInputComponent.prototype.open = function () {
        this.host.jqxDateTimeInput('open');
    };
    jqxDateTimeInputComponent.prototype.setRange = function (date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    };
    jqxDateTimeInputComponent.prototype.setMinDate = function (date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    };
    jqxDateTimeInputComponent.prototype.setMaxDate = function (date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    };
    jqxDateTimeInputComponent.prototype.setDate = function (date) {
        this.host.jqxDateTimeInput('setDate', date);
    };
    jqxDateTimeInputComponent.prototype.val = function (value, value2) {
        if (value !== undefined) {
            return this.host.jqxDateTimeInput('val', value, value2);
        }
        else {
            return this.host.jqxDateTimeInput('val');
        }
    };
    ;
    jqxDateTimeInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
    };
    jqxDateTimeInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('animationType'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrAnimationType", void 0);
    __decorate([
        Input('allowNullDate'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrAllowNullDate", void 0);
    __decorate([
        Input('allowKeyboardDelete'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrAllowKeyboardDelete", void 0);
    __decorate([
        Input('clearString'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrClearString", void 0);
    __decorate([
        Input('culture'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrCulture", void 0);
    __decorate([
        Input('closeDelay'),
        __metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrCloseDelay", void 0);
    __decorate([
        Input('closeCalendarAfterSelection'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrCloseCalendarAfterSelection", void 0);
    __decorate([
        Input('dropDownHorizontalAlignment'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
    __decorate([
        Input('dropDownVerticalAlignment'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrDropDownVerticalAlignment", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('enableBrowserBoundsDetection'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    __decorate([
        Input('enableAbsoluteSelection'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrEnableAbsoluteSelection", void 0);
    __decorate([
        Input('firstDayOfWeek'),
        __metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrFirstDayOfWeek", void 0);
    __decorate([
        Input('formatString'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrFormatString", void 0);
    __decorate([
        Input('min'),
        __metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrMin", void 0);
    __decorate([
        Input('max'),
        __metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrMax", void 0);
    __decorate([
        Input('openDelay'),
        __metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrOpenDelay", void 0);
    __decorate([
        Input('placeHolder'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrPlaceHolder", void 0);
    __decorate([
        Input('popupZIndex'),
        __metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrPopupZIndex", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('readonly'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrReadonly", void 0);
    __decorate([
        Input('showFooter'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowFooter", void 0);
    __decorate([
        Input('selectionMode'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrSelectionMode", void 0);
    __decorate([
        Input('showWeekNumbers'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowWeekNumbers", void 0);
    __decorate([
        Input('showTimeButton'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowTimeButton", void 0);
    __decorate([
        Input('showCalendarButton'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowCalendarButton", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('template'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTemplate", void 0);
    __decorate([
        Input('textAlign'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTextAlign", void 0);
    __decorate([
        Input('todayString'),
        __metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTodayString", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onTextchanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onValueChanged", void 0);
    jqxDateTimeInputComponent = __decorate([
        Component({
            selector: 'jqxDateTimeInput',
            template: '<input [(ngModel)]="ngValue">',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxDateTimeInputComponent);
    return jqxDateTimeInputComponent;
}()); //jqxDateTimeInputComponent

var jqxDateTimeInputModule = /** @class */ (function () {
    function jqxDateTimeInputModule() {
    }
    jqxDateTimeInputModule = __decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxDateTimeInputComponent],
            exports: [jqxDateTimeInputComponent]
        })
    ], jqxDateTimeInputModule);
    return jqxDateTimeInputModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDateTimeInputComponent, jqxDateTimeInputModule, ɵ0 };
