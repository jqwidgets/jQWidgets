import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxvalidator from '../../jqwidgets/jqxvalidator';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxValidatorComponent = /** @class */ (function () {
    function jqxValidatorComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrow', 'animation', 'animationDuration', 'closeOnClick', 'focus', 'hintType', 'onError', 'onSuccess', 'position', 'rules', 'rtl'];
        // jqxValidatorComponent events
        this.onValidationError = new EventEmitter();
        this.onValidationSuccess = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxValidatorComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxValidator(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxValidator(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxValidator(this.properties[i])) {
                        this.host.jqxValidator(this.properties[i], this[attrName]);
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
    jqxValidatorComponent.prototype.arraysEqual = /**
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
    jqxValidatorComponent.prototype.manageAttributes = /**
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
    jqxValidatorComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxValidatorComponent.prototype.moveStyles = /**
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
    jqxValidatorComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxValidatorComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxValidatorComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxValidator('setOptions', options);
    };
    // jqxValidatorComponent properties
    // jqxValidatorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.arrow = 
    // jqxValidatorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('arrow', arg);
        }
        else {
            return this.host.jqxValidator('arrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.animation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animation', arg);
        }
        else {
            return this.host.jqxValidator('animation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.animationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animationDuration', arg);
        }
        else {
            return this.host.jqxValidator('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.closeOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('closeOnClick', arg);
        }
        else {
            return this.host.jqxValidator('closeOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.focus = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('focus', arg);
        }
        else {
            return this.host.jqxValidator('focus');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.hintType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('hintType', arg);
        }
        else {
            return this.host.jqxValidator('hintType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.onError = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onError', arg);
        }
        else {
            return this.host.jqxValidator('onError');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.onSuccess = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onSuccess', arg);
        }
        else {
            return this.host.jqxValidator('onSuccess');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('position', arg);
        }
        else {
            return this.host.jqxValidator('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.rules = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rules', arg);
        }
        else {
            return this.host.jqxValidator('rules');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxValidatorComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rtl', arg);
        }
        else {
            return this.host.jqxValidator('rtl');
        }
    };
    // jqxValidatorComponent functions
    // jqxValidatorComponent functions
    /**
     * @param {?} id
     * @return {?}
     */
    jqxValidatorComponent.prototype.hideHint = 
    // jqxValidatorComponent functions
    /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.host.jqxValidator('hideHint', id);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.host.jqxValidator('hide');
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        this.host.jqxValidator('updatePosition');
    };
    /**
     * @param {?=} htmlElement
     * @return {?}
     */
    jqxValidatorComponent.prototype.validate = /**
     * @param {?=} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        this.host.jqxValidator('validate', htmlElement);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    jqxValidatorComponent.prototype.validateInput = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.host.jqxValidator('validateInput', id);
    };
    /**
     * @return {?}
     */
    jqxValidatorComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('validationError', function (eventData) { _this.onValidationError.emit(eventData); });
        this.host.on('validationSuccess', function (eventData) { _this.onValidationSuccess.emit(eventData); });
    };
    jqxValidatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxValidator',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxValidatorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxValidatorComponent.propDecorators = {
        attrArrow: [{ type: Input, args: ['arrow',] }],
        attrAnimation: [{ type: Input, args: ['animation',] }],
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrCloseOnClick: [{ type: Input, args: ['closeOnClick',] }],
        attrFocus: [{ type: Input, args: ['focus',] }],
        attrHintType: [{ type: Input, args: ['hintType',] }],
        attrOnError: [{ type: Input, args: ['onError',] }],
        attrOnSuccess: [{ type: Input, args: ['onSuccess',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRules: [{ type: Input, args: ['rules',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onValidationError: [{ type: Output }],
        onValidationSuccess: [{ type: Output }]
    };
    return jqxValidatorComponent;
}()); //jqxValidatorComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxValidatorModule = /** @class */ (function () {
    function jqxValidatorModule() {
    }
    jqxValidatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxValidatorComponent],
                    exports: [jqxValidatorComponent]
                },] }
    ];
    return jqxValidatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxValidatorComponent, jqxValidatorModule };

