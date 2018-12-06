import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxpasswordinput from '../../jqwidgets/jqxpasswordinput';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxmaskedinput from '../../jqwidgets/jqxmaskedinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxform from '../../jqwidgets/jqxform';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxFormComponent = /** @class */ (function () {
    function jqxFormComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['padding', 'backgroundColor', 'borderColor', 'value', 'template'];
        // jqxFormComponent events
        this.onFormDataChange = new EventEmitter();
        this.onButtonClick = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(function () {
            _this.__updateRect__();
        });
    }
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.ngOnInit = /**
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
    jqxFormComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxForm(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxForm(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxForm(this.properties[i])) {
                        this.host.jqxForm(this.properties[i], this[attrName]);
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
    jqxFormComponent.prototype.arraysEqual = /**
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
    jqxFormComponent.prototype.manageAttributes = /**
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
    jqxFormComponent.prototype.moveClasses = /**
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
    jqxFormComponent.prototype.moveStyles = /**
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
    jqxFormComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxForm', options);
        this.__updateRect__();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxFormComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxFormComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxForm('setOptions', options);
    };
    // jqxFormComponent properties
    // jqxFormComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.padding = 
    // jqxFormComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('padding', arg);
        }
        else {
            return this.host.jqxForm('padding');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.backgroundColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('backgroundColor', arg);
        }
        else {
            return this.host.jqxForm('backgroundColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.borderColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('borderColor', arg);
        }
        else {
            return this.host.jqxForm('borderColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('value', arg);
        }
        else {
            return this.host.jqxForm('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxForm('template', arg);
        }
        else {
            return this.host.jqxForm('template');
        }
    };
    // jqxFormComponent functions
    // jqxFormComponent functions
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.getInstance = 
    // jqxFormComponent functions
    /**
     * @return {?}
     */
    function () {
        return this.host.jqxForm('getInstance');
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxForm('refresh');
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxForm('destroy');
    };
    /**
     * @param {?} name
     * @return {?}
     */
    jqxFormComponent.prototype.hideComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.host.jqxForm('hideComponent', name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    jqxFormComponent.prototype.showComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.host.jqxForm('showComponent', name);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxFormComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxForm('val', value);
        }
        else {
            return this.host.jqxForm('val');
        }
    };
    ;
    /**
     * @param {?=} action
     * @param {?=} target
     * @param {?=} method
     * @return {?}
     */
    jqxFormComponent.prototype.submit = /**
     * @param {?=} action
     * @param {?=} target
     * @param {?=} method
     * @return {?}
     */
    function (action, target, method) {
        this.host.jqxForm('submit', action, target, method);
    };
    /**
     * @param {?=} name
     * @return {?}
     */
    jqxFormComponent.prototype.getComponentByName = /**
     * @param {?=} name
     * @return {?}
     */
    function (name) {
        return this.host.jqxForm('getComponentByName', name);
    };
    /**
     * @return {?}
     */
    jqxFormComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('formDataChange', function (eventData) { _this.onFormDataChange.emit(eventData); });
        this.host.on('buttonClick', function (eventData) { _this.onButtonClick.emit(eventData); });
    };
    jqxFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxForm',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxFormComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxFormComponent.propDecorators = {
        attrPadding: [{ type: Input, args: ['padding',] }],
        attrBackgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        attrBorderColor: [{ type: Input, args: ['borderColor',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onFormDataChange: [{ type: Output }],
        onButtonClick: [{ type: Output }]
    };
    return jqxFormComponent;
}()); //jqxFormComponent
export { jqxFormComponent };
if (false) {
    /** @type {?} */
    jqxFormComponent.prototype.attrPadding;
    /** @type {?} */
    jqxFormComponent.prototype.attrBackgroundColor;
    /** @type {?} */
    jqxFormComponent.prototype.attrBorderColor;
    /** @type {?} */
    jqxFormComponent.prototype.attrValue;
    /** @type {?} */
    jqxFormComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxFormComponent.prototype.attrWidth;
    /** @type {?} */
    jqxFormComponent.prototype.attrHeight;
    /** @type {?} */
    jqxFormComponent.prototype.autoCreate;
    /** @type {?} */
    jqxFormComponent.prototype.properties;
    /** @type {?} */
    jqxFormComponent.prototype.host;
    /** @type {?} */
    jqxFormComponent.prototype.elementRef;
    /** @type {?} */
    jqxFormComponent.prototype.widgetObject;
    /** @type {?} */
    jqxFormComponent.prototype.onFormDataChange;
    /** @type {?} */
    jqxFormComponent.prototype.onButtonClick;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
