import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxScrollBarComponent = /** @class */ (function () {
    function jqxScrollBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
        // jqxScrollBarComponent events
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxScrollBarComponent.prototype.ngOnInit = /**
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
    jqxScrollBarComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
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
    jqxScrollBarComponent.prototype.arraysEqual = /**
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
    jqxScrollBarComponent.prototype.manageAttributes = /**
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
    jqxScrollBarComponent.prototype.moveClasses = /**
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
    jqxScrollBarComponent.prototype.moveStyles = /**
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
    jqxScrollBarComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxScrollBarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxScrollBarComponent.prototype.__updateRect__ = /**
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
    jqxScrollBarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxScrollBar('setOptions', options);
    };
    // jqxScrollBarComponent properties
    // jqxScrollBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.disabled = 
    // jqxScrollBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('disabled', arg);
        }
        else {
            return this.host.jqxScrollBar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('height', arg);
        }
        else {
            return this.host.jqxScrollBar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.largestep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('largestep', arg);
        }
        else {
            return this.host.jqxScrollBar('largestep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('min', arg);
        }
        else {
            return this.host.jqxScrollBar('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('max', arg);
        }
        else {
            return this.host.jqxScrollBar('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('rtl', arg);
        }
        else {
            return this.host.jqxScrollBar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.step = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('step', arg);
        }
        else {
            return this.host.jqxScrollBar('step');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.showButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('showButtons', arg);
        }
        else {
            return this.host.jqxScrollBar('showButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.thumbMinSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('thumbMinSize', arg);
        }
        else {
            return this.host.jqxScrollBar('thumbMinSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('theme', arg);
        }
        else {
            return this.host.jqxScrollBar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.vertical = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('vertical', arg);
        }
        else {
            return this.host.jqxScrollBar('vertical');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('value', arg);
        }
        else {
            return this.host.jqxScrollBar('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxScrollBarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('width', arg);
        }
        else {
            return this.host.jqxScrollBar('width');
        }
    };
    // jqxScrollBarComponent functions
    // jqxScrollBarComponent functions
    /**
     * @return {?}
     */
    jqxScrollBarComponent.prototype.destroy = 
    // jqxScrollBarComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxScrollBar('destroy');
    };
    /**
     * @return {?}
     */
    jqxScrollBarComponent.prototype.isScrolling = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScrollBar('isScrolling');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxScrollBarComponent.prototype.setPosition = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxScrollBar('setPosition', index);
    };
    /**
     * @return {?}
     */
    jqxScrollBarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    jqxScrollBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxScrollBar',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxScrollBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxScrollBarComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrLargestep: [{ type: Input, args: ['largestep',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrStep: [{ type: Input, args: ['step',] }],
        attrShowButtons: [{ type: Input, args: ['showButtons',] }],
        attrThumbMinSize: [{ type: Input, args: ['thumbMinSize',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrVertical: [{ type: Input, args: ['vertical',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onValueChanged: [{ type: Output }]
    };
    return jqxScrollBarComponent;
}()); //jqxScrollBarComponent
export { jqxScrollBarComponent };
if (false) {
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrLargestep;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrMin;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrMax;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrStep;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrShowButtons;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrThumbMinSize;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrVertical;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrValue;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxScrollBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxScrollBarComponent.prototype.properties;
    /** @type {?} */
    jqxScrollBarComponent.prototype.host;
    /** @type {?} */
    jqxScrollBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxScrollBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxScrollBarComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
}
