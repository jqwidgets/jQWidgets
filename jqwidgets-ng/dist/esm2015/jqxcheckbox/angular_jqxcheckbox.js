import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
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
    () => jqxCheckBoxComponent)),
    multi: true
};
export class jqxCheckBoxComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCheckBoxComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onIndeterminate = new EventEmitter();
        this.onUnchecked = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
        options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
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
        this.host.jqxCheckBox('setOptions', options);
    }
    // jqxCheckBoxComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationShowDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationHideDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('boxSize', arg);
        }
        else {
            return this.host.jqxCheckBox('boxSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('checked', arg);
        }
        else {
            return this.host.jqxCheckBox('checked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('disabled', arg);
        }
        else {
            return this.host.jqxCheckBox('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('enableContainerClick', arg);
        }
        else {
            return this.host.jqxCheckBox('enableContainerClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('groupName', arg);
        }
        else {
            return this.host.jqxCheckBox('groupName');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('height', arg);
        }
        else {
            return this.host.jqxCheckBox('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxCheckBox('hasThreeStates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    locked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('locked', arg);
        }
        else {
            return this.host.jqxCheckBox('locked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('rtl', arg);
        }
        else {
            return this.host.jqxCheckBox('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('theme', arg);
        }
        else {
            return this.host.jqxCheckBox('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('width', arg);
        }
        else {
            return this.host.jqxCheckBox('width');
        }
    }
    // jqxCheckBoxComponent functions
    /**
     * @return {?}
     */
    check() {
        this.host.jqxCheckBox('check');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxCheckBox('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxCheckBox('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxCheckBox('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxCheckBox('focus');
    }
    /**
     * @return {?}
     */
    indeterminate() {
        this.host.jqxCheckBox('indeterminate');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxCheckBox('render');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.host.jqxCheckBox('toggle');
    }
    /**
     * @return {?}
     */
    uncheck() {
        this.host.jqxCheckBox('uncheck');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxCheckBox('val', value);
        }
        else {
            return this.host.jqxCheckBox('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('checked', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChecked.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.checked); }));
        this.host.on('indeterminate', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onIndeterminate.emit(eventData); }));
        this.host.on('unchecked', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUnchecked.emit(eventData); }));
    }
} //jqxCheckBoxComponent
jqxCheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxCheckBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxCheckBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxCheckBoxComponent.propDecorators = {
    attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
    attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
    attrBoxSize: [{ type: Input, args: ['boxSize',] }],
    attrChecked: [{ type: Input, args: ['checked',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableContainerClick: [{ type: Input, args: ['enableContainerClick',] }],
    attrGroupName: [{ type: Input, args: ['groupName',] }],
    attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
    attrLocked: [{ type: Input, args: ['locked',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChecked: [{ type: Output }],
    onChange: [{ type: Output }],
    onIndeterminate: [{ type: Output }],
    onUnchecked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrBoxSize;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrChecked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrEnableContainerClick;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrGroupName;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrLocked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrRtl;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrTheme;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrWidth;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrHeight;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.autoCreate;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.properties;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.host;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.elementRef;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxCheckBoxComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxCheckBoxComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onChecked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onChange;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onIndeterminate;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onUnchecked;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjaGVja2JveC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLElBQUk7OztBQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O01BR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFTRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBMEI5QixZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLHNCQUFzQixFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFLdEwsc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFxQixJQUFJLENBQUM7O1FBc1J4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsZ0JBQVcs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bEQ7Ozs7WUFqQmdELFVBQVU7OztxQ0FxQnZELEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQyxvQkFBb0I7MEJBQzFCLEtBQUssU0FBQyxTQUFTOzBCQUNmLEtBQUssU0FBQyxTQUFTOzJCQUNmLEtBQUssU0FBQyxVQUFVO3VDQUNoQixLQUFLLFNBQUMsc0JBQXNCOzRCQUM1QixLQUFLLFNBQUMsV0FBVztpQ0FDakIsS0FBSyxTQUFDLGdCQUFnQjt5QkFDdEIsS0FBSyxTQUFDLFFBQVE7c0JBQ2QsS0FBSyxTQUFDLEtBQUs7d0JBQ1gsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7eUJBRWQsS0FBSyxTQUFDLGFBQWE7d0JBOFJuQixNQUFNO3VCQUNOLE1BQU07OEJBQ04sTUFBTTswQkFDTixNQUFNOzs7O0lBL1NQLHNEQUE0RDs7SUFDNUQsc0RBQTREOztJQUM1RCwyQ0FBK0M7O0lBQy9DLDJDQUE4Qzs7SUFDOUMsNENBQXlDOztJQUN6Qyx3REFBaUU7O0lBQ2pFLDZDQUEwQzs7SUFDMUMsa0RBQXFEOztJQUNyRCwwQ0FBcUM7O0lBQ3JDLHVDQUErQjs7SUFDL0IseUNBQWtDOztJQUNsQyx5Q0FBMkM7O0lBQzNDLDBDQUE2Qzs7SUFFN0MsMENBQWlEOztJQUVqRCwwQ0FBOEw7O0lBQzlMLG9DQUFVOztJQUNWLDBDQUF1Qjs7SUFDdkIsNENBQXFDOzs7OztJQUVyQyxpREFBNkM7Ozs7O0lBQzdDLGdEQUFrRDs7SUFzUmxELHlDQUF5Qzs7SUFDekMsd0NBQXdDOztJQUN4QywrQ0FBK0M7O0lBQy9DLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeENoZWNrQm94Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeENoZWNrQm94JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4Q2hlY2tCb3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIFxue1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RGVsYXknKSBhdHRyQW5pbWF0aW9uU2hvd0RlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEZWxheScpIGF0dHJBbmltYXRpb25IaWRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgnYm94U2l6ZScpIGF0dHJCb3hTaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2NoZWNrZWQnKSBhdHRyQ2hlY2tlZDogYm9vbGVhbiB8IG51bGw7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVDb250YWluZXJDbGljaycpIGF0dHJFbmFibGVDb250YWluZXJDbGljazogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZ3JvdXBOYW1lJykgYXR0ckdyb3VwTmFtZTogc3RyaW5nO1xuICAgQElucHV0KCdoYXNUaHJlZVN0YXRlcycpIGF0dHJIYXNUaHJlZVN0YXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbG9ja2VkJykgYXR0ckxvY2tlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25TaG93RGVsYXknLCdhbmltYXRpb25IaWRlRGVsYXknLCdib3hTaXplJywnY2hlY2tlZCcsJ2Rpc2FibGVkJywnZW5hYmxlQ29udGFpbmVyQ2xpY2snLCdncm91cE5hbWUnLCdoZWlnaHQnLCdoYXNUaHJlZVN0YXRlcycsJ2xvY2tlZCcsJ3J0bCcsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4Q2hlY2tCb3g7XG5cbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhDaGVja0JveCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hlY2tCb3godGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4Q2hlY2tCb3godGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhDaGVja0JveCcsIG9wdGlvbnMpO1xuXG4gICAgICBvcHRpb25zLmNoZWNrZWQgIT09IHVuZGVmaW5lZCA/IHRoaXMub25DaGFuZ2VDYWxsYmFjayhvcHRpb25zLmNoZWNrZWQpIDogdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGZhbHNlKTtcbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4Q2hlY2tCb3hDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uU2hvd0RlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2FuaW1hdGlvblNob3dEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2FuaW1hdGlvblNob3dEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25IaWRlRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnYW5pbWF0aW9uSGlkZURlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnYW5pbWF0aW9uSGlkZURlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJveFNpemUoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnYm94U2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2JveFNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hlY2tlZChhcmc/OiBib29sZWFuIHwgbnVsbCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnY2hlY2tlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUNvbnRhaW5lckNsaWNrKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnZW5hYmxlQ29udGFpbmVyQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoZWNrQm94KCdlbmFibGVDb250YWluZXJDbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cE5hbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnZ3JvdXBOYW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnZ3JvdXBOYW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoZWNrQm94KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGFzVGhyZWVTdGF0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdoYXNUaHJlZVN0YXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2hhc1RocmVlU3RhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxvY2tlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2xvY2tlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ2xvY2tlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoZWNrQm94KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoZWNrQm94KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4Q2hlY2tCb3hDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjaGVjaygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnY2hlY2snKTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnZGlzYWJsZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgnZW5hYmxlJyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdmb2N1cycpO1xuICAgfVxuXG4gICBpbmRldGVybWluYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoZWNrQm94KCdpbmRldGVybWluYXRlJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGVja0JveCgndG9nZ2xlJyk7XG4gICB9XG5cbiAgIHVuY2hlY2soKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ3VuY2hlY2snKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogYm9vbGVhbik6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGVja0JveCgndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hlY2tCb3goJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhDaGVja0JveENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25JbmRldGVybWluYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVW5jaGVja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hlY2tlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLmNoZWNrZWQpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaW5kZXRlcm1pbmF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uSW5kZXRlcm1pbmF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd1bmNoZWNrZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVuY2hlY2tlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4Q2hlY2tCb3hDb21wb25lbnRcbiJdfQ==