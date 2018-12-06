import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxvalidator from '../../jqwidgets/jqxvalidator';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxValidatorComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
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
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxValidator('setOptions', options);
    }
    // jqxValidatorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    arrow(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('arrow', arg);
        }
        else {
            return this.host.jqxValidator('arrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animation(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animation', arg);
        }
        else {
            return this.host.jqxValidator('animation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('animationDuration', arg);
        }
        else {
            return this.host.jqxValidator('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('closeOnClick', arg);
        }
        else {
            return this.host.jqxValidator('closeOnClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    focus(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('focus', arg);
        }
        else {
            return this.host.jqxValidator('focus');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hintType(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('hintType', arg);
        }
        else {
            return this.host.jqxValidator('hintType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onError(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onError', arg);
        }
        else {
            return this.host.jqxValidator('onError');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onSuccess(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('onSuccess', arg);
        }
        else {
            return this.host.jqxValidator('onSuccess');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('position', arg);
        }
        else {
            return this.host.jqxValidator('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rules(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rules', arg);
        }
        else {
            return this.host.jqxValidator('rules');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxValidator('rtl', arg);
        }
        else {
            return this.host.jqxValidator('rtl');
        }
    }
    // jqxValidatorComponent functions
    /**
     * @param {?} id
     * @return {?}
     */
    hideHint(id) {
        this.host.jqxValidator('hideHint', id);
    }
    /**
     * @return {?}
     */
    hide() {
        this.host.jqxValidator('hide');
    }
    /**
     * @return {?}
     */
    updatePosition() {
        this.host.jqxValidator('updatePosition');
    }
    /**
     * @param {?=} htmlElement
     * @return {?}
     */
    validate(htmlElement) {
        this.host.jqxValidator('validate', htmlElement);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    validateInput(id) {
        this.host.jqxValidator('validateInput', id);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('validationError', (eventData) => { this.onValidationError.emit(eventData); });
        this.host.on('validationSuccess', (eventData) => { this.onValidationSuccess.emit(eventData); });
    }
} //jqxValidatorComponent
jqxValidatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxValidator',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxValidatorComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
if (false) {
    /** @type {?} */
    jqxValidatorComponent.prototype.attrArrow;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrAnimation;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrCloseOnClick;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrFocus;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrHintType;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrOnError;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrOnSuccess;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrPosition;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrRules;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrRtl;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrWidth;
    /** @type {?} */
    jqxValidatorComponent.prototype.attrHeight;
    /** @type {?} */
    jqxValidatorComponent.prototype.autoCreate;
    /** @type {?} */
    jqxValidatorComponent.prototype.properties;
    /** @type {?} */
    jqxValidatorComponent.prototype.host;
    /** @type {?} */
    jqxValidatorComponent.prototype.elementRef;
    /** @type {?} */
    jqxValidatorComponent.prototype.widgetObject;
    /** @type {?} */
    jqxValidatorComponent.prototype.onValidationError;
    /** @type {?} */
    jqxValidatorComponent.prototype.onValidationSuccess;
    /* Skipping unhandled member: ;*/
}
