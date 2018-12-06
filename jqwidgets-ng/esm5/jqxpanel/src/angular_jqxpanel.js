import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets/jqxpanel';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
var jqxPanelComponent = /** @class */ (function () {
    function jqxPanelComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.ngOnInit = /**
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
    jqxPanelComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                        this.host.jqxPanel(this.properties[i], this[attrName]);
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
    jqxPanelComponent.prototype.arraysEqual = /**
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
    jqxPanelComponent.prototype.manageAttributes = /**
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
    jqxPanelComponent.prototype.moveClasses = /**
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
    jqxPanelComponent.prototype.moveStyles = /**
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
    jqxPanelComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPanelComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.__updateRect__ = /**
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
    jqxPanelComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxPanel('setOptions', options);
    };
    // jqxPanelComponent properties
    // jqxPanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.autoUpdate = 
    // jqxPanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('autoUpdate', arg);
        }
        else {
            return this.host.jqxPanel('autoUpdate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('disabled', arg);
        }
        else {
            return this.host.jqxPanel('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('height', arg);
        }
        else {
            return this.host.jqxPanel('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('rtl', arg);
        }
        else {
            return this.host.jqxPanel('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.sizeMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('sizeMode', arg);
        }
        else {
            return this.host.jqxPanel('sizeMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.scrollBarSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('scrollBarSize', arg);
        }
        else {
            return this.host.jqxPanel('scrollBarSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('theme', arg);
        }
        else {
            return this.host.jqxPanel('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPanelComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('width', arg);
        }
        else {
            return this.host.jqxPanel('width');
        }
    };
    // jqxPanelComponent functions
    // jqxPanelComponent functions
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    jqxPanelComponent.prototype.append = 
    // jqxPanelComponent functions
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    function (HTMLElement) {
        this.host.jqxPanel('append', HTMLElement);
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.clearcontent = /**
     * @return {?}
     */
    function () {
        this.host.jqxPanel('clearcontent');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxPanel('destroy');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxPanel('focus');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.getScrollHeight = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPanel('getScrollHeight');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.getVScrollPosition = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPanel('getVScrollPosition');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.getScrollWidth = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPanel('getScrollWidth');
    };
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.getHScrollPosition = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPanel('getHScrollPosition');
    };
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    jqxPanelComponent.prototype.prepend = /**
     * @param {?} HTMLElement
     * @return {?}
     */
    function (HTMLElement) {
        this.host.jqxPanel('prepend', HTMLElement);
    };
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    jqxPanelComponent.prototype.remove = /**
     * @param {?} HTMLElement
     * @return {?}
     */
    function (HTMLElement) {
        this.host.jqxPanel('remove', HTMLElement);
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxPanelComponent.prototype.scrollTo = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        this.host.jqxPanel('scrollTo', left, top);
    };
    // jqxPanelComponent events
    // jqxPanelComponent events
    /**
     * @return {?}
     */
    jqxPanelComponent.prototype.__wireEvents__ = 
    // jqxPanelComponent events
    /**
     * @return {?}
     */
    function () {
    };
    jqxPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxPanel',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxPanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxPanelComponent.propDecorators = {
        attrAutoUpdate: [{ type: Input, args: ['autoUpdate',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSizeMode: [{ type: Input, args: ['sizeMode',] }],
        attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }]
    };
    return jqxPanelComponent;
}()); //jqxPanelComponent
export { jqxPanelComponent };
if (false) {
    /** @type {?} */
    jqxPanelComponent.prototype.attrAutoUpdate;
    /** @type {?} */
    jqxPanelComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxPanelComponent.prototype.attrRtl;
    /** @type {?} */
    jqxPanelComponent.prototype.attrSizeMode;
    /** @type {?} */
    jqxPanelComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxPanelComponent.prototype.attrTheme;
    /** @type {?} */
    jqxPanelComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPanelComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPanelComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPanelComponent.prototype.properties;
    /** @type {?} */
    jqxPanelComponent.prototype.host;
    /** @type {?} */
    jqxPanelComponent.prototype.elementRef;
    /** @type {?} */
    jqxPanelComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
