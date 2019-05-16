import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxpasswordinput from '../../jqwidgets-scripts/jqwidgets/jqxpasswordinput';
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
    function () { return jqxPasswordInputComponent; })),
    multi: true
};
var jqxPasswordInputComponent = /** @class */ (function () {
    function jqxPasswordInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxPasswordInputComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.ngOnInit = /**
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
    jqxPasswordInputComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
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
    jqxPasswordInputComponent.prototype.arraysEqual = /**
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
    jqxPasswordInputComponent.prototype.manageAttributes = /**
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
    jqxPasswordInputComponent.prototype.moveClasses = /**
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
    jqxPasswordInputComponent.prototype.moveStyles = /**
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
    jqxPasswordInputComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxPasswordInputComponent.prototype, "ngValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.widgetObject) {
                /** @type {?} */
                var value = this.host.val();
                return value;
            }
            return '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.host.jqxPasswordInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.registerOnChange = /**
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
    jqxPasswordInputComponent.prototype.registerOnTouched = /**
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
    jqxPasswordInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxPasswordInput('setOptions', options);
    };
    // jqxPasswordInputComponent properties
    // jqxPasswordInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.disabled = 
    // jqxPasswordInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('disabled', arg);
        }
        else {
            return this.host.jqxPasswordInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('height', arg);
        }
        else {
            return this.host.jqxPasswordInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('localization', arg);
        }
        else {
            return this.host.jqxPasswordInput('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.maxLength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('maxLength', arg);
        }
        else {
            return this.host.jqxPasswordInput('maxLength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('placeHolder', arg);
        }
        else {
            return this.host.jqxPasswordInput('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.passwordStrength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('passwordStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('passwordStrength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('rtl', arg);
        }
        else {
            return this.host.jqxPasswordInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.strengthColors = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthColors', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthColors');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.showStrength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.showStrengthPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrengthPosition', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrengthPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.strengthTypeRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthTypeRenderer', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthTypeRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.showPasswordIcon = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showPasswordIcon', arg);
        }
        else {
            return this.host.jqxPasswordInput('showPasswordIcon');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('theme', arg);
        }
        else {
            return this.host.jqxPasswordInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('width', arg);
        }
        else {
            return this.host.jqxPasswordInput('width');
        }
    };
    // jqxPasswordInputComponent functions
    // jqxPasswordInputComponent functions
    /**
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.render = 
    // jqxPasswordInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxPasswordInput('render');
    };
    /**
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxPasswordInput('refresh');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxPasswordInput('val', value);
        }
        else {
            return this.host.jqxPasswordInput('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxPasswordInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); }));
    };
    jqxPasswordInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxPasswordInput',
                    template: '<input type="password" [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxPasswordInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxPasswordInputComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrLocalization: [{ type: Input, args: ['localization',] }],
        attrMaxLength: [{ type: Input, args: ['maxLength',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrPasswordStrength: [{ type: Input, args: ['passwordStrength',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrStrengthColors: [{ type: Input, args: ['strengthColors',] }],
        attrShowStrength: [{ type: Input, args: ['showStrength',] }],
        attrShowStrengthPosition: [{ type: Input, args: ['showStrengthPosition',] }],
        attrStrengthTypeRenderer: [{ type: Input, args: ['strengthTypeRenderer',] }],
        attrShowPasswordIcon: [{ type: Input, args: ['showPasswordIcon',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }]
    };
    return jqxPasswordInputComponent;
}()); //jqxPasswordInputComponent
export { jqxPasswordInputComponent };
if (false) {
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrMaxLength;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrPasswordStrength;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrStrengthColors;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrShowStrength;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrShowStrengthPosition;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrStrengthTypeRenderer;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrShowPasswordIcon;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.properties;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.host;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxPasswordInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxPasswordInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxPasswordInputComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwYXNzd29yZGlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHBhc3N3b3JkaW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHBhc3N3b3JkaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEosT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVuRSxJQUFJOzs7QUFBRyxjQUFRLENBQUMsQ0FBQTs7O0lBR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBRUQ7SUFrQ0csbUNBQVksZ0JBQTRCO1FBVmxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLHNCQUFzQixFQUFDLHNCQUFzQixFQUFDLGtCQUFrQixFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQUt4TixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQzs7UUFnUnhDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBN1FyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRyxJQUFJ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UUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTsyQkF3Um5CLE1BQU07O0lBTVYsZ0NBQUM7Q0FBQSxBQXRURCxJQXNUQyxDQUFDLDJCQUEyQjtTQS9TaEIseUJBQXlCOzs7SUFFbkMsaURBQXlDOztJQUN6QyxxREFBNkU7O0lBQzdFLGtEQUFtRDs7SUFDbkQsb0RBQXVEOztJQUN2RCx5REFBd1E7O0lBQ3hRLDRDQUErQjs7SUFDL0IsdURBQW1GOztJQUNuRixxREFBaUQ7O0lBQ2pELDZEQUFnRTs7SUFDaEUsNkRBQTRSOztJQUM1Uix5REFBeUQ7O0lBQ3pELDhDQUFrQzs7SUFDbEMsOENBQTJDOztJQUMzQywrQ0FBNkM7O0lBRTdDLCtDQUFpRDs7SUFFakQsK0NBQWdPOztJQUNoTyx5Q0FBVTs7SUFDViwrQ0FBdUI7O0lBQ3ZCLGlEQUEwQzs7Ozs7SUFFMUMsc0RBQTZDOzs7OztJQUM3QyxxREFBa0Q7O0lBZ1JsRCw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhQYXNzd29yZElucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFBhc3N3b3JkSW5wdXQnLFxuICAgIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFsobmdNb2RlbCldPVwibmdWYWx1ZVwiPicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4UGFzc3dvcmRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMgXG57XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdsb2NhbGl6YXRpb24nKSBhdHRyTG9jYWxpemF0aW9uOiBqcXdpZGdldHMuUGFzc3dvcmRJbnB1dExvY2FsaXphdGlvbjtcbiAgIEBJbnB1dCgnbWF4TGVuZ3RoJykgYXR0ck1heExlbmd0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdwbGFjZUhvbGRlcicpIGF0dHJQbGFjZUhvbGRlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdwYXNzd29yZFN0cmVuZ3RoJykgYXR0clBhc3N3b3JkU3RyZW5ndGg6IChwYXNzd29yZDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ3Bhc3N3b3JkJ10sIGNoYXJhY3RlcnM6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRQYXNzd29yZFN0cmVuZ3RoWydjaGFyYWN0ZXJzJ10sIGRlZmF1bHRTdHJlbmd0aDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ2RlZmF1bHRTdHJlbmd0aCddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3N0cmVuZ3RoQ29sb3JzJykgYXR0clN0cmVuZ3RoQ29sb3JzOiBqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoQ29sb3JzO1xuICAgQElucHV0KCdzaG93U3RyZW5ndGgnKSBhdHRyU2hvd1N0cmVuZ3RoOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93U3RyZW5ndGhQb3NpdGlvbicpIGF0dHJTaG93U3RyZW5ndGhQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzdHJlbmd0aFR5cGVSZW5kZXJlcicpIGF0dHJTdHJlbmd0aFR5cGVSZW5kZXJlcjogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhUeXBlUmVuZGVyZXJbJ3Bhc3N3b3JkJ10sIGNoYXJhY3RlcnM6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnY2hhcmFjdGVycyddLCBkZWZhdWx0U3RyZW5ndGg6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnc2hvd1Bhc3N3b3JkSWNvbicpIGF0dHJTaG93UGFzc3dvcmRJY29uOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywnaGVpZ2h0JywnbG9jYWxpemF0aW9uJywnbWF4TGVuZ3RoJywncGxhY2VIb2xkZXInLCdwYXNzd29yZFN0cmVuZ3RoJywncnRsJywnc3RyZW5ndGhDb2xvcnMnLCdzaG93U3RyZW5ndGgnLCdzaG93U3RyZW5ndGhQb3NpdGlvbicsJ3N0cmVuZ3RoVHlwZVJlbmRlcmVyJywnc2hvd1Bhc3N3b3JkSWNvbicsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UGFzc3dvcmRJbnB1dDtcblxuICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UGFzc3dvcmRJbnB1dCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBnZXQgbmdWYWx1ZSgpOiBhbnkge1xuICAgICAgIGlmICh0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaG9zdC52YWwoKTtcbiAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gJyc7XG4gICB9XG5cbiAgIHNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICBpZiAodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhQYXNzd29yZElucHV0Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGpxd2lkZ2V0cy5QYXNzd29yZElucHV0TG9jYWxpemF0aW9uKToganF3aWRnZXRzLlBhc3N3b3JkSW5wdXRMb2NhbGl6YXRpb24ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ2xvY2FsaXphdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heExlbmd0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ21heExlbmd0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnbWF4TGVuZ3RoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBsYWNlSG9sZGVyKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgncGxhY2VIb2xkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3BsYWNlSG9sZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhc3N3b3JkU3RyZW5ndGgoYXJnPzogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsncGFzc3dvcmQnXSwgY2hhcmFjdGVyczpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ2NoYXJhY3RlcnMnXSwgZGVmYXVsdFN0cmVuZ3RoOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0UGFzc3dvcmRTdHJlbmd0aFsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZyk6IChwYXNzd29yZDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ3Bhc3N3b3JkJ10sIGNoYXJhY3RlcnM6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRQYXNzd29yZFN0cmVuZ3RoWydjaGFyYWN0ZXJzJ10sIGRlZmF1bHRTdHJlbmd0aDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFBhc3N3b3JkU3RyZW5ndGhbJ2RlZmF1bHRTdHJlbmd0aCddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Bhc3N3b3JkU3RyZW5ndGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3Bhc3N3b3JkU3RyZW5ndGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHJlbmd0aENvbG9ycyhhcmc/OiBqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoQ29sb3JzKToganF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aENvbG9ycyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc3RyZW5ndGhDb2xvcnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3N0cmVuZ3RoQ29sb3JzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dTdHJlbmd0aChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc2hvd1N0cmVuZ3RoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93U3RyZW5ndGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1N0cmVuZ3RoUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93U3RyZW5ndGhQb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnc2hvd1N0cmVuZ3RoUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RyZW5ndGhUeXBlUmVuZGVyZXIoYXJnPzogKHBhc3N3b3JkOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhUeXBlUmVuZGVyZXJbJ3Bhc3N3b3JkJ10sIGNoYXJhY3RlcnM6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnY2hhcmFjdGVycyddLCBkZWZhdWx0U3RyZW5ndGg6anF3aWRnZXRzLlBhc3N3b3JkSW5wdXRTdHJlbmd0aFR5cGVSZW5kZXJlclsnZGVmYXVsdFN0cmVuZ3RoJ10pID0+IHN0cmluZyk6IChwYXNzd29yZDpqcXdpZGdldHMuUGFzc3dvcmRJbnB1dFN0cmVuZ3RoVHlwZVJlbmRlcmVyWydwYXNzd29yZCddLCBjaGFyYWN0ZXJzOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhUeXBlUmVuZGVyZXJbJ2NoYXJhY3RlcnMnXSwgZGVmYXVsdFN0cmVuZ3RoOmpxd2lkZ2V0cy5QYXNzd29yZElucHV0U3RyZW5ndGhUeXBlUmVuZGVyZXJbJ2RlZmF1bHRTdHJlbmd0aCddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3N0cmVuZ3RoVHlwZVJlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzdHJlbmd0aFR5cGVSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93UGFzc3dvcmRJY29uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93UGFzc3dvcmRJY29uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdzaG93UGFzc3dvcmRJY29uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGFzc3dvcmRJbnB1dCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBhc3N3b3JkSW5wdXQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4UGFzc3dvcmRJbnB1dENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQYXNzd29yZElucHV0KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4UGFzc3dvcmRJbnB1dENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhQYXNzd29yZElucHV0Q29tcG9uZW50XG4iXX0=