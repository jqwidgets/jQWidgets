import * as jqxcore from '../../jqwidgets/jqxcore';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
var jqxPivotDesignerComponent = /** @class */ (function () {
    function jqxPivotDesignerComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['type', 'target'];
        this.elementRef = containerElement;
        JQXLite(window).resize(function () {
            _this.__updateRect__();
        });
    }
    /**
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.ngOnInit = /**
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
    jqxPivotDesignerComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotDesigner(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPivotDesigner(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPivotDesigner(this.properties[i])) {
                        this.host.jqxPivotDesigner(this.properties[i], this[attrName]);
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
    jqxPivotDesignerComponent.prototype.arraysEqual = /**
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
    jqxPivotDesignerComponent.prototype.manageAttributes = /**
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
    jqxPivotDesignerComponent.prototype.moveClasses = /**
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
    jqxPivotDesignerComponent.prototype.moveStyles = /**
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
    jqxPivotDesignerComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotDesigner', options);
        this.__updateRect__();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.__updateRect__ = /**
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
    jqxPivotDesignerComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxPivotDesigner('setOptions', options);
    };
    // jqxPivotDesignerComponent properties
    // jqxPivotDesignerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.type = 
    // jqxPivotDesignerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotDesigner('type', arg);
        }
        else {
            return this.host.jqxPivotDesigner('type');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.target = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotDesigner('target', arg);
        }
        else {
            return this.host.jqxPivotDesigner('target');
        }
    };
    // jqxPivotDesignerComponent functions
    // jqxPivotDesignerComponent functions
    /**
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.refresh = 
    // jqxPivotDesignerComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxPivotDesigner('refresh');
    };
    // jqxPivotDesignerComponent events
    // jqxPivotDesignerComponent events
    /**
     * @return {?}
     */
    jqxPivotDesignerComponent.prototype.__wireEvents__ = 
    // jqxPivotDesignerComponent events
    /**
     * @return {?}
     */
    function () {
    };
    jqxPivotDesignerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxPivotDesigner',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxPivotDesignerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxPivotDesignerComponent.propDecorators = {
        attrType: [{ type: Input, args: ['type',] }],
        attrTarget: [{ type: Input, args: ['target',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }]
    };
    return jqxPivotDesignerComponent;
}()); //jqxPivotDesignerComponent
export { jqxPivotDesignerComponent };
if (false) {
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.attrType;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.attrTarget;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.properties;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.host;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.elementRef;
    /** @type {?} */
    jqxPivotDesignerComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
