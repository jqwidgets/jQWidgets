import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxslider from '../../jqwidgets/jqxslider';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = () => { };
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
};
class jqxSliderComponent {
    /**
     * @param {?} containerElement
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
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
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @return {?}
     */
    get ngValue() {
        if (this.widgetObject) {
            /** @type {?} */
            const value = this.host.val();
            return value;
        }
        return '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxSlider('setOptions', options);
    }
    // jqxSliderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    buttonsPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('buttonsPosition', arg);
        }
        else {
            return this.host.jqxSlider('buttonsPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('disabled', arg);
        }
        else {
            return this.host.jqxSlider('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('height', arg);
        }
        else {
            return this.host.jqxSlider('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('layout', arg);
        }
        else {
            return this.host.jqxSlider('layout');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('mode', arg);
        }
        else {
            return this.host.jqxSlider('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minorTicksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTicksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('minorTicksFrequency');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minorTickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTickSize', arg);
        }
        else {
            return this.host.jqxSlider('minorTickSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('max', arg);
        }
        else {
            return this.host.jqxSlider('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('min', arg);
        }
        else {
            return this.host.jqxSlider('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('orientation', arg);
        }
        else {
            return this.host.jqxSlider('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rangeSlider(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rangeSlider', arg);
        }
        else {
            return this.host.jqxSlider('rangeSlider');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rtl', arg);
        }
        else {
            return this.host.jqxSlider('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('step', arg);
        }
        else {
            return this.host.jqxSlider('step');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTicks', arg);
        }
        else {
            return this.host.jqxSlider('showTicks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showMinorTicks', arg);
        }
        else {
            return this.host.jqxSlider('showMinorTicks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTickLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTickLabels', arg);
        }
        else {
            return this.host.jqxSlider('showTickLabels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showButtons', arg);
        }
        else {
            return this.host.jqxSlider('showButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showRange(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showRange', arg);
        }
        else {
            return this.host.jqxSlider('showRange');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('template', arg);
        }
        else {
            return this.host.jqxSlider('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('theme', arg);
        }
        else {
            return this.host.jqxSlider('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticksPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksPosition', arg);
        }
        else {
            return this.host.jqxSlider('ticksPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('ticksFrequency');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickSize', arg);
        }
        else {
            return this.host.jqxSlider('tickSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tickLabelFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickLabelFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tickLabelFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltip', arg);
        }
        else {
            return this.host.jqxSlider('tooltip');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltipHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipHideDelay', arg);
        }
        else {
            return this.host.jqxSlider('tooltipHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltipPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipPosition', arg);
        }
        else {
            return this.host.jqxSlider('tooltipPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tooltipFormatFunction');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('value', arg);
        }
        else {
            return this.host.jqxSlider('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    values(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('values', arg);
        }
        else {
            return this.host.jqxSlider('values');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('width', arg);
        }
        else {
            return this.host.jqxSlider('width');
        }
    }
    // jqxSliderComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxSlider('destroy');
    }
    /**
     * @return {?}
     */
    decrementValue() {
        this.host.jqxSlider('decrementValue');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxSlider('disable');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxSlider('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxSlider('focus');
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.host.jqxSlider('getValue');
    }
    /**
     * @return {?}
     */
    incrementValue() {
        this.host.jqxSlider('incrementValue');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setValue(index) {
        this.host.jqxSlider('setValue', index);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSlider('val', value);
        }
        else {
            return this.host.jqxSlider('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('slide', (eventData) => { this.onSlide.emit(eventData); });
        this.host.on('slideStart', (eventData) => { this.onSlideStart.emit(eventData); });
        this.host.on('slideEnd', (eventData) => { this.onSlideEnd.emit(eventData); });
    }
} //jqxSliderComponent
jqxSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxSlider',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxSliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxSliderComponent.propDecorators = {
    attrButtonsPosition: [{ type: Input, args: ['buttonsPosition',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrLayout: [{ type: Input, args: ['layout',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrMinorTicksFrequency: [{ type: Input, args: ['minorTicksFrequency',] }],
    attrMinorTickSize: [{ type: Input, args: ['minorTickSize',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrRangeSlider: [{ type: Input, args: ['rangeSlider',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrStep: [{ type: Input, args: ['step',] }],
    attrShowTicks: [{ type: Input, args: ['showTicks',] }],
    attrShowMinorTicks: [{ type: Input, args: ['showMinorTicks',] }],
    attrShowTickLabels: [{ type: Input, args: ['showTickLabels',] }],
    attrShowButtons: [{ type: Input, args: ['showButtons',] }],
    attrShowRange: [{ type: Input, args: ['showRange',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTicksPosition: [{ type: Input, args: ['ticksPosition',] }],
    attrTicksFrequency: [{ type: Input, args: ['ticksFrequency',] }],
    attrTickSize: [{ type: Input, args: ['tickSize',] }],
    attrTickLabelFormatFunction: [{ type: Input, args: ['tickLabelFormatFunction',] }],
    attrTooltip: [{ type: Input, args: ['tooltip',] }],
    attrTooltipHideDelay: [{ type: Input, args: ['tooltipHideDelay',] }],
    attrTooltipPosition: [{ type: Input, args: ['tooltipPosition',] }],
    attrTooltipFormatFunction: [{ type: Input, args: ['tooltipFormatFunction',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrValues: [{ type: Input, args: ['values',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onSlide: [{ type: Output }],
    onSlideStart: [{ type: Output }],
    onSlideEnd: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxSliderModule {
}
jqxSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule
                ],
                declarations: [jqxSliderComponent],
                exports: [jqxSliderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxSliderComponent, jqxSliderModule };

