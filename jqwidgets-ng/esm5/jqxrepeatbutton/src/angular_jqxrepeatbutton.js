import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxRepeatButtonComponent = /** @class */ (function () {
    function jqxRepeatButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxRepeatButtonComponent events
        this.onClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.ngOnInit = /**
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
    jqxRepeatButtonComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
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
    jqxRepeatButtonComponent.prototype.arraysEqual = /**
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
    jqxRepeatButtonComponent.prototype.manageAttributes = /**
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
    jqxRepeatButtonComponent.prototype.moveClasses = /**
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
    jqxRepeatButtonComponent.prototype.moveStyles = /**
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
    jqxRepeatButtonComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.__updateRect__ = /**
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
    jqxRepeatButtonComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxRepeatButton('setOptions', options);
    };
    // jqxRepeatButtonComponent properties
    // jqxRepeatButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.delay = 
    // jqxRepeatButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('delay', arg);
        }
        else {
            return this.host.jqxRepeatButton('delay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('disabled', arg);
        }
        else {
            return this.host.jqxRepeatButton('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('height', arg);
        }
        else {
            return this.host.jqxRepeatButton('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.imgSrc = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgSrc', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgSrc');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.imgWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgWidth', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.imgHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgHeight', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.imgPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.roundedCorners = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxRepeatButton('roundedCorners');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('rtl', arg);
        }
        else {
            return this.host.jqxRepeatButton('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.textPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('textPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.textImageRelation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxRepeatButton('textImageRelation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('theme', arg);
        }
        else {
            return this.host.jqxRepeatButton('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('template', arg);
        }
        else {
            return this.host.jqxRepeatButton('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.toggled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('toggled', arg);
        }
        else {
            return this.host.jqxRepeatButton('toggled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('width', arg);
        }
        else {
            return this.host.jqxRepeatButton('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('value', arg);
        }
        else {
            return this.host.jqxRepeatButton('value');
        }
    };
    // jqxRepeatButtonComponent functions
    // jqxRepeatButtonComponent functions
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.destroy = 
    // jqxRepeatButtonComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxRepeatButton('destroy');
    };
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxRepeatButton('focus');
    };
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxRepeatButton('render');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxRepeatButton('val', value);
        }
        else {
            return this.host.jqxRepeatButton('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxRepeatButtonComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
    };
    jqxRepeatButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxRepeatButton',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxRepeatButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxRepeatButtonComponent.propDecorators = {
        attrDelay: [{ type: Input, args: ['delay',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrImgSrc: [{ type: Input, args: ['imgSrc',] }],
        attrImgWidth: [{ type: Input, args: ['imgWidth',] }],
        attrImgHeight: [{ type: Input, args: ['imgHeight',] }],
        attrImgPosition: [{ type: Input, args: ['imgPosition',] }],
        attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTextPosition: [{ type: Input, args: ['textPosition',] }],
        attrTextImageRelation: [{ type: Input, args: ['textImageRelation',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrToggled: [{ type: Input, args: ['toggled',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClick: [{ type: Output }]
    };
    return jqxRepeatButtonComponent;
}()); //jqxRepeatButtonComponent
export { jqxRepeatButtonComponent };
if (false) {
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrDelay;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgSrc;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgWidth;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgHeight;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgPosition;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTextPosition;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTextImageRelation;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrToggled;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrValue;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.properties;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.host;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.onClick;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
