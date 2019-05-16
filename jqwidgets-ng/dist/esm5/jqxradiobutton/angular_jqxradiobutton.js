import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () { });
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return jqxRadioButtonComponent; })),
    multi: true
};
var jqxRadioButtonComponent = /** @class */ (function () {
    function jqxRadioButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRadioButtonComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onUnchecked = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
        this.valueAttr = this.host[0].parentElement.getAttribute('value');
        if (options.checked === true)
            this.onChangeCallback(this.valueAttr);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxRadioButton('setOptions', options);
    };
    // jqxRadioButtonComponent properties
    // jqxRadioButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.animationShowDelay = 
    // jqxRadioButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationShowDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.animationHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationHideDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.boxSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('boxSize', arg);
        }
        else {
            return this.host.jqxRadioButton('boxSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.checked = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('checked', arg);
        }
        else {
            return this.host.jqxRadioButton('checked');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('disabled', arg);
        }
        else {
            return this.host.jqxRadioButton('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.enableContainerClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('enableContainerClick', arg);
        }
        else {
            return this.host.jqxRadioButton('enableContainerClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.groupName = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('groupName', arg);
        }
        else {
            return this.host.jqxRadioButton('groupName');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.hasThreeStates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('hasThreeStates', arg);
        }
        else {
            return this.host.jqxRadioButton('hasThreeStates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('height', arg);
        }
        else {
            return this.host.jqxRadioButton('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('rtl', arg);
        }
        else {
            return this.host.jqxRadioButton('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('theme', arg);
        }
        else {
            return this.host.jqxRadioButton('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('width', arg);
        }
        else {
            return this.host.jqxRadioButton('width');
        }
    };
    // jqxRadioButtonComponent functions
    // jqxRadioButtonComponent functions
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.check = 
    // jqxRadioButtonComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('check');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('disable');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('destroy');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('enable');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('focus');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('render');
    };
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.uncheck = /**
     * @return {?}
     */
    function () {
        this.host.jqxRadioButton('uncheck');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxRadioButton('val', value);
        }
        else {
            return this.host.jqxRadioButton('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxRadioButtonComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('checked', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChecked.emit(eventData); _this.onChangeCallback(_this.valueAttr); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
        this.host.on('unchecked', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUnchecked.emit(eventData); }));
    };
    jqxRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxRadioButton',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxRadioButtonComponent.propDecorators = {
        attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
        attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
        attrBoxSize: [{ type: Input, args: ['boxSize',] }],
        attrChecked: [{ type: Input, args: ['checked',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnableContainerClick: [{ type: Input, args: ['enableContainerClick',] }],
        attrGroupName: [{ type: Input, args: ['groupName',] }],
        attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChecked: [{ type: Output }],
        onChange: [{ type: Output }],
        onUnchecked: [{ type: Output }]
    };
    return jqxRadioButtonComponent;
}()); //jqxRadioButtonComponent
export { jqxRadioButtonComponent };
if (false) {
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrBoxSize;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrChecked;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrEnableContainerClick;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrGroupName;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.properties;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.valueAttr;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.host;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxRadioButtonComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxRadioButtonComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onChecked;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onChange;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onUnchecked;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyYWRpb2J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhyYWRpb2J1dHRvbi8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4cmFkaW9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEosT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVuRSxJQUFJOzs7QUFBRyxjQUFRLENBQUMsQ0FBQTs7O0lBR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsRUFBQztJQUN0RCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBRUQ7SUFpQ0csaUNBQVksZ0JBQTRCO1FBWGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsc0JBQXNCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBTTdLLHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDOztRQXVReEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBdFF4QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixD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QUFLOzRCQUNYLEtBQUssU0FBQyxPQUFPOzRCQUNiLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhOzRCQWdSbkIsTUFBTTsyQkFDTixNQUFNOzhCQUNOLE1BQU07O0lBUVYsOEJBQUM7Q0FBQSxBQWhURCxJQWdUQyxDQUFDLHlCQUF5QjtTQXpTZCx1QkFBdUI7OztJQUVqQyx5REFBNEQ7O0lBQzVELHlEQUE0RDs7SUFDNUQsOENBQStDOztJQUMvQyw4Q0FBdUM7O0lBQ3ZDLCtDQUF5Qzs7SUFDekMsMkRBQWlFOztJQUNqRSxnREFBMEM7O0lBQzFDLHFEQUFxRDs7SUFDckQsMENBQStCOztJQUMvQiw0Q0FBa0M7O0lBQ2xDLDRDQUEyQzs7SUFDM0MsNkNBQTZDOztJQUU3Qyw2Q0FBaUQ7O0lBRWpELDZDQUFxTDs7SUFDckwsNENBQWU7O0lBQ2YsdUNBQVU7O0lBQ1YsNkNBQXVCOztJQUN2QiwrQ0FBd0M7Ozs7O0lBRXhDLG9EQUE2Qzs7Ozs7SUFDN0MsbURBQWtEOztJQXVRbEQsNENBQXlDOztJQUN6QywyQ0FBd0M7O0lBQ3hDLDhDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeFJhZGlvQnV0dG9uQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFJhZGlvQnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4UmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIFxue1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RGVsYXknKSBhdHRyQW5pbWF0aW9uU2hvd0RlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEZWxheScpIGF0dHJBbmltYXRpb25IaWRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgnYm94U2l6ZScpIGF0dHJCb3hTaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2NoZWNrZWQnKSBhdHRyQ2hlY2tlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUNvbnRhaW5lckNsaWNrJykgYXR0ckVuYWJsZUNvbnRhaW5lckNsaWNrOiBib29sZWFuO1xuICAgQElucHV0KCdncm91cE5hbWUnKSBhdHRyR3JvdXBOYW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ2hhc1RocmVlU3RhdGVzJykgYXR0ckhhc1RocmVlU3RhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvblNob3dEZWxheScsJ2FuaW1hdGlvbkhpZGVEZWxheScsJ2JveFNpemUnLCdjaGVja2VkJywnZGlzYWJsZWQnLCdlbmFibGVDb250YWluZXJDbGljaycsJ2dyb3VwTmFtZScsJ2hhc1RocmVlU3RhdGVzJywnaGVpZ2h0JywncnRsJywndGhlbWUnLCd3aWR0aCddO1xuICAgdmFsdWVBdHRyOiBhbnk7XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFJhZGlvQnV0dG9uO1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24odGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UmFkaW9CdXR0b24nLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy52YWx1ZUF0dHIgPSB0aGlzLmhvc3RbMF0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICBpZiAob3B0aW9ucy5jaGVja2VkID09PSB0cnVlKSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZUF0dHIpO1xuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICB9XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhSYWRpb0J1dHRvbkNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25TaG93RGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignYW5pbWF0aW9uU2hvd0RlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignYW5pbWF0aW9uU2hvd0RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkhpZGVEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdhbmltYXRpb25IaWRlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdhbmltYXRpb25IaWRlRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYm94U2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdib3hTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignYm94U2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGVja2VkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignY2hlY2tlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUNvbnRhaW5lckNsaWNrKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignZW5hYmxlQ29udGFpbmVyQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdlbmFibGVDb250YWluZXJDbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cE5hbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignZ3JvdXBOYW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignZ3JvdXBOYW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhhc1RocmVlU3RhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignaGFzVGhyZWVTdGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdoYXNUaHJlZVN0YXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhSYWRpb0J1dHRvbkNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNoZWNrKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdjaGVjaycpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZW5hYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJhZGlvQnV0dG9uKCdlbmFibGUnKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbigncmVuZGVyJyk7XG4gICB9XG5cbiAgIHVuY2hlY2soKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3VuY2hlY2snKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogYm9vbGVhbik6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSYWRpb0J1dHRvbigndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmFkaW9CdXR0b24oJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhSYWRpb0J1dHRvbkNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbmNoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGVja2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGVja2VkLmVtaXQoZXZlbnREYXRhKTsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWVBdHRyKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3VuY2hlY2tlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVW5jaGVja2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhSYWRpb0J1dHRvbkNvbXBvbmVudFxuIl19