import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxslider';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
};
let jqxSliderComponent = class jqxSliderComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['buttonsPosition', 'disabled', 'height', 'layout', 'mode', 'minorTicksFrequency', 'minorTickSize', 'max', 'min', 'orientation', 'rangeSlider', 'rtl', 'step', 'showTicks', 'showMinorTicks', 'showTickLabels', 'showButtons', 'showRange', 'template', 'theme', 'ticksPosition', 'ticksFrequency', 'tickSize', 'tickLabelFormatFunction', 'tooltip', 'tooltipHideDelay', 'tooltipPosition', 'tooltipFormatFunction', 'value', 'values', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSliderComponent events
        this.onChange = new EventEmitter();
        this.onSlide = new EventEmitter();
        this.onSlideStart = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
        this.elementRef = containerElement;
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSlider(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                        this.host.jqxSlider(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    get ngValue() {
        if (this.widgetObject) {
            const value = this.host.val();
            return value;
        }
        return '';
    }
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxSlider('setOptions', options);
    }
    // jqxSliderComponent properties
    buttonsPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('buttonsPosition', arg);
        }
        else {
            return this.host.jqxSlider('buttonsPosition');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('disabled', arg);
        }
        else {
            return this.host.jqxSlider('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('height', arg);
        }
        else {
            return this.host.jqxSlider('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('layout', arg);
        }
        else {
            return this.host.jqxSlider('layout');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('mode', arg);
        }
        else {
            return this.host.jqxSlider('mode');
        }
    }
    minorTicksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTicksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('minorTicksFrequency');
        }
    }
    minorTickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTickSize', arg);
        }
        else {
            return this.host.jqxSlider('minorTickSize');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('max', arg);
        }
        else {
            return this.host.jqxSlider('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('min', arg);
        }
        else {
            return this.host.jqxSlider('min');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('orientation', arg);
        }
        else {
            return this.host.jqxSlider('orientation');
        }
    }
    rangeSlider(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rangeSlider', arg);
        }
        else {
            return this.host.jqxSlider('rangeSlider');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rtl', arg);
        }
        else {
            return this.host.jqxSlider('rtl');
        }
    }
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('step', arg);
        }
        else {
            return this.host.jqxSlider('step');
        }
    }
    showTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTicks', arg);
        }
        else {
            return this.host.jqxSlider('showTicks');
        }
    }
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showMinorTicks', arg);
        }
        else {
            return this.host.jqxSlider('showMinorTicks');
        }
    }
    showTickLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTickLabels', arg);
        }
        else {
            return this.host.jqxSlider('showTickLabels');
        }
    }
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showButtons', arg);
        }
        else {
            return this.host.jqxSlider('showButtons');
        }
    }
    showRange(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showRange', arg);
        }
        else {
            return this.host.jqxSlider('showRange');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('template', arg);
        }
        else {
            return this.host.jqxSlider('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('theme', arg);
        }
        else {
            return this.host.jqxSlider('theme');
        }
    }
    ticksPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksPosition', arg);
        }
        else {
            return this.host.jqxSlider('ticksPosition');
        }
    }
    ticksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('ticksFrequency');
        }
    }
    tickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickSize', arg);
        }
        else {
            return this.host.jqxSlider('tickSize');
        }
    }
    tickLabelFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickLabelFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tickLabelFormatFunction');
        }
    }
    tooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltip', arg);
        }
        else {
            return this.host.jqxSlider('tooltip');
        }
    }
    tooltipHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipHideDelay', arg);
        }
        else {
            return this.host.jqxSlider('tooltipHideDelay');
        }
    }
    tooltipPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipPosition', arg);
        }
        else {
            return this.host.jqxSlider('tooltipPosition');
        }
    }
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tooltipFormatFunction');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('value', arg);
        }
        else {
            return this.host.jqxSlider('value');
        }
    }
    values(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('values', arg);
        }
        else {
            return this.host.jqxSlider('values');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('width', arg);
        }
        else {
            return this.host.jqxSlider('width');
        }
    }
    // jqxSliderComponent functions
    destroy() {
        this.host.jqxSlider('destroy');
    }
    decrementValue() {
        this.host.jqxSlider('decrementValue');
    }
    disable() {
        this.host.jqxSlider('disable');
    }
    enable() {
        this.host.jqxSlider('enable');
    }
    focus() {
        this.host.jqxSlider('focus');
    }
    getValue() {
        return this.host.jqxSlider('getValue');
    }
    incrementValue() {
        this.host.jqxSlider('incrementValue');
    }
    setValue(index) {
        this.host.jqxSlider('setValue', index);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSlider('val', value);
        }
        else {
            return this.host.jqxSlider('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('slide', (eventData) => { this.onSlide.emit(eventData); });
        this.host.on('slideStart', (eventData) => { this.onSlideStart.emit(eventData); });
        this.host.on('slideEnd', (eventData) => { this.onSlideEnd.emit(eventData); });
    }
}; //jqxSliderComponent
jqxSliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('buttonsPosition'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrButtonsPosition", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('layout'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrLayout", void 0);
tslib_1.__decorate([
    Input('mode'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrMode", void 0);
tslib_1.__decorate([
    Input('minorTicksFrequency'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrMinorTicksFrequency", void 0);
tslib_1.__decorate([
    Input('minorTickSize'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrMinorTickSize", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('orientation'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrOrientation", void 0);
tslib_1.__decorate([
    Input('rangeSlider'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrRangeSlider", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('step'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrStep", void 0);
tslib_1.__decorate([
    Input('showTicks'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrShowTicks", void 0);
tslib_1.__decorate([
    Input('showMinorTicks'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrShowMinorTicks", void 0);
tslib_1.__decorate([
    Input('showTickLabels'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrShowTickLabels", void 0);
tslib_1.__decorate([
    Input('showButtons'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrShowButtons", void 0);
tslib_1.__decorate([
    Input('showRange'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrShowRange", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('ticksPosition'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrTicksPosition", void 0);
tslib_1.__decorate([
    Input('ticksFrequency'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrTicksFrequency", void 0);
tslib_1.__decorate([
    Input('tickSize'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrTickSize", void 0);
tslib_1.__decorate([
    Input('tickLabelFormatFunction'),
    tslib_1.__metadata("design:type", Function)
], jqxSliderComponent.prototype, "attrTickLabelFormatFunction", void 0);
tslib_1.__decorate([
    Input('tooltip'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "attrTooltip", void 0);
tslib_1.__decorate([
    Input('tooltipHideDelay'),
    tslib_1.__metadata("design:type", Number)
], jqxSliderComponent.prototype, "attrTooltipHideDelay", void 0);
tslib_1.__decorate([
    Input('tooltipPosition'),
    tslib_1.__metadata("design:type", String)
], jqxSliderComponent.prototype, "attrTooltipPosition", void 0);
tslib_1.__decorate([
    Input('tooltipFormatFunction'),
    tslib_1.__metadata("design:type", Function)
], jqxSliderComponent.prototype, "attrTooltipFormatFunction", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('values'),
    tslib_1.__metadata("design:type", Array)
], jqxSliderComponent.prototype, "attrValues", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSliderComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlide", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlideStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSliderComponent.prototype, "onSlideEnd", void 0);
jqxSliderComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxSlider',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxSliderComponent);
export { jqxSliderComponent };
export { ɵ0 };
