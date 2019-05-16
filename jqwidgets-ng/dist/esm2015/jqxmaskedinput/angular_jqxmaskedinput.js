import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxmaskedinput from '../../jqwidgets-scripts/jqwidgets/jqxmaskedinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => jqxMaskedInputComponent)),
    multi: true
};
export class jqxMaskedInputComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxMaskedInputComponent events
        this.onChange = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxMaskedInput('val', value);
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
        this.host.jqxMaskedInput('setOptions', options);
    }
    // jqxMaskedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('disabled', arg);
        }
        else {
            return this.host.jqxMaskedInput('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('height', arg);
        }
        else {
            return this.host.jqxMaskedInput('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mask(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('mask', arg);
        }
        else {
            return this.host.jqxMaskedInput('mask');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    promptChar(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('promptChar', arg);
        }
        else {
            return this.host.jqxMaskedInput('promptChar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('readOnly', arg);
        }
        else {
            return this.host.jqxMaskedInput('readOnly');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('rtl', arg);
        }
        else {
            return this.host.jqxMaskedInput('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('theme', arg);
        }
        else {
            return this.host.jqxMaskedInput('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('textAlign', arg);
        }
        else {
            return this.host.jqxMaskedInput('textAlign');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('value', arg);
        }
        else {
            return this.host.jqxMaskedInput('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('width', arg);
        }
        else {
            return this.host.jqxMaskedInput('width');
        }
    }
    // jqxMaskedInputComponent functions
    /**
     * @return {?}
     */
    clear() {
        this.host.jqxMaskedInput('clear');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxMaskedInput('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxMaskedInput('focus');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxMaskedInput('val', value);
        }
        else {
            return this.host.jqxMaskedInput('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.parent().on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); }));
        this.host.parent().on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); }));
    }
} //jqxMaskedInputComponent
jqxMaskedInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxMaskedInput',
                template: '<input>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxMaskedInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxMaskedInputComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrMask: [{ type: Input, args: ['mask',] }],
    attrPromptChar: [{ type: Input, args: ['promptChar',] }],
    attrReadOnly: [{ type: Input, args: ['readOnly',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTextAlign: [{ type: Input, args: ['textAlign',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrMask;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrPromptChar;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrTextAlign;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.properties;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.host;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxMaskedInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxMaskedInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.onChange;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhtYXNrZWRpbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhtYXNrZWRpbnB1dC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4bWFza2VkaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLElBQUk7OztBQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O01BR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFTRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBdUJqQyxZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSzlHLHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDOztRQXNPeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBcE8zQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxJQUFJ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O0lBQ3hDLGlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeE1hc2tlZElucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeE1hc2tlZElucHV0JyxcbiAgICB0ZW1wbGF0ZTogJzxpbnB1dD4nLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIGpxeE1hc2tlZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyBcbntcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ21hc2snKSBhdHRyTWFzazogc3RyaW5nO1xuICAgQElucHV0KCdwcm9tcHRDaGFyJykgYXR0clByb21wdENoYXI6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmVhZE9ubHknKSBhdHRyUmVhZE9ubHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RleHRBbGlnbicpIGF0dHJUZXh0QWxpZ246IHN0cmluZztcbiAgIEBJbnB1dCgndmFsdWUnKSBhdHRyVmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydkaXNhYmxlZCcsJ2hlaWdodCcsJ21hc2snLCdwcm9tcHRDaGFyJywncmVhZE9ubHknLCdydGwnLCd0aGVtZScsJ3RleHRBbGlnbicsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4TWFza2VkSW5wdXQ7XG5cbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhNYXNrZWRJbnB1dCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICBpZih0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhNYXNrZWRJbnB1dENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXNrKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ21hc2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCdtYXNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByb21wdENoYXIoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgncHJvbXB0Q2hhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3Byb21wdENoYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVhZE9ubHkoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCdyZWFkT25seScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3JlYWRPbmx5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRleHRBbGlnbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd0ZXh0QWxpZ24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd0ZXh0QWxpZ24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWFza2VkSW5wdXQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4TWFza2VkSW5wdXRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgnY2xlYXInKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgnZm9jdXMnKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1hc2tlZElucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNYXNrZWRJbnB1dCgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeE1hc2tlZElucHV0Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5wYXJlbnQoKS5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTsgfSk7XG4gICAgICB0aGlzLmhvc3QucGFyZW50KCkub24oJ3ZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7IH0pO1xuICAgfVxuXG59IC8vanF4TWFza2VkSW5wdXRDb21wb25lbnRcbiJdfQ==