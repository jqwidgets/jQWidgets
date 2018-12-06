import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxdropdownbutton from '../../jqwidgets/jqxdropdownbutton';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDropDownButtonComponent = /** @class */ (function () {
    function jqxDropDownButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width'];
        // jqxDropDownButtonComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.ngOnInit = /**
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
    jqxDropDownButtonComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
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
    jqxDropDownButtonComponent.prototype.arraysEqual = /**
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
    jqxDropDownButtonComponent.prototype.manageAttributes = /**
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
    jqxDropDownButtonComponent.prototype.moveClasses = /**
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
    jqxDropDownButtonComponent.prototype.moveStyles = /**
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
    jqxDropDownButtonComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.__updateRect__ = /**
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
    jqxDropDownButtonComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDropDownButton('setOptions', options);
    };
    // jqxDropDownButtonComponent properties
    // jqxDropDownButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.animationType = 
    // jqxDropDownButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('animationType', arg);
        }
        else {
            return this.host.jqxDropDownButton('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.arrowSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('arrowSize', arg);
        }
        else {
            return this.host.jqxDropDownButton('arrowSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.autoOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownButton('autoOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.closeDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('closeDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('disabled', arg);
        }
        else {
            return this.host.jqxDropDownButton('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.dropDownHorizontalAlignment = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.dropDownVerticalAlignment = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownVerticalAlignment');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.dropDownWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.enableBrowserBoundsDetection = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('height', arg);
        }
        else {
            return this.host.jqxDropDownButton('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('initContent', arg);
        }
        else {
            return this.host.jqxDropDownButton('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.openDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('openDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.popupZIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownButton('popupZIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('rtl', arg);
        }
        else {
            return this.host.jqxDropDownButton('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('template', arg);
        }
        else {
            return this.host.jqxDropDownButton('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('theme', arg);
        }
        else {
            return this.host.jqxDropDownButton('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('width', arg);
        }
        else {
            return this.host.jqxDropDownButton('width');
        }
    };
    // jqxDropDownButtonComponent functions
    // jqxDropDownButtonComponent functions
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.close = 
    // jqxDropDownButtonComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxDropDownButton('close');
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxDropDownButton('destroy');
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxDropDownButton('focus');
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.getContent = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDropDownButton('getContent');
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDropDownButton('isOpened');
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxDropDownButton('open');
    };
    /**
     * @param {?} content
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.setContent = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.host.jqxDropDownButton('setContent', content);
    };
    /**
     * @return {?}
     */
    jqxDropDownButtonComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDropDownButton',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDropDownButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDropDownButtonComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrArrowSize: [{ type: Input, args: ['arrowSize',] }],
        attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
        attrCloseDelay: [{ type: Input, args: ['closeDelay',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDropDownHorizontalAlignment: [{ type: Input, args: ['dropDownHorizontalAlignment',] }],
        attrDropDownVerticalAlignment: [{ type: Input, args: ['dropDownVerticalAlignment',] }],
        attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
        attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrOpenDelay: [{ type: Input, args: ['openDelay',] }],
        attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxDropDownButtonComponent;
}()); //jqxDropDownButtonComponent
export { jqxDropDownButtonComponent };
if (false) {
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrArrowSize;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrCloseDelay;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownHorizontalAlignment;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownVerticalAlignment;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrOpenDelay;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.properties;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.host;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.onClose;
    /** @type {?} */
    jqxDropDownButtonComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
