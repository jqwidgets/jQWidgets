import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxRadioButtonComponent; }),
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
        this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); _this.onChangeCallback(_this.valueAttr); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
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
