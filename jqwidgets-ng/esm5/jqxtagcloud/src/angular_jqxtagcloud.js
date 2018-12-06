import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtagcloud from '../../jqwidgets/jqxtagcloud';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTagCloudComponent = /** @class */ (function () {
    function jqxTagCloudComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
        // jqxTagCloudComponent events
        this.onBindingComplete = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.ngOnInit = /**
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
    jqxTagCloudComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
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
    jqxTagCloudComponent.prototype.arraysEqual = /**
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
    jqxTagCloudComponent.prototype.manageAttributes = /**
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
    jqxTagCloudComponent.prototype.moveClasses = /**
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
    jqxTagCloudComponent.prototype.moveStyles = /**
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
    jqxTagCloudComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTagCloudComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.__updateRect__ = /**
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
    jqxTagCloudComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTagCloud('setOptions', options);
    };
    // jqxTagCloudComponent properties
    // jqxTagCloudComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.alterTextCase = 
    // jqxTagCloudComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('alterTextCase', arg);
        }
        else {
            return this.host.jqxTagCloud('alterTextCase');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('disabled', arg);
        }
        else {
            return this.host.jqxTagCloud('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.displayLimit = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayLimit', arg);
        }
        else {
            return this.host.jqxTagCloud('displayLimit');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.displayMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayMember', arg);
        }
        else {
            return this.host.jqxTagCloud('displayMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.displayValue = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayValue', arg);
        }
        else {
            return this.host.jqxTagCloud('displayValue');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.fontSizeUnit = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('fontSizeUnit', arg);
        }
        else {
            return this.host.jqxTagCloud('fontSizeUnit');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('height', arg);
        }
        else {
            return this.host.jqxTagCloud('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.maxColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxColor', arg);
        }
        else {
            return this.host.jqxTagCloud('maxColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.maxFontSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('maxFontSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.maxValueToDisplay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('maxValueToDisplay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.minColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minColor', arg);
        }
        else {
            return this.host.jqxTagCloud('minColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.minFontSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('minFontSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.minValueToDisplay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('minValueToDisplay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('rtl', arg);
        }
        else {
            return this.host.jqxTagCloud('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.sortBy = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortBy', arg);
        }
        else {
            return this.host.jqxTagCloud('sortBy');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.sortOrder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortOrder', arg);
        }
        else {
            return this.host.jqxTagCloud('sortOrder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('source', arg);
        }
        else {
            return this.host.jqxTagCloud('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.tagRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('tagRenderer', arg);
        }
        else {
            return this.host.jqxTagCloud('tagRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.takeTopWeightedItems = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('takeTopWeightedItems', arg);
        }
        else {
            return this.host.jqxTagCloud('takeTopWeightedItems');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.textColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('textColor', arg);
        }
        else {
            return this.host.jqxTagCloud('textColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.urlBase = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlBase', arg);
        }
        else {
            return this.host.jqxTagCloud('urlBase');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.urlMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlMember', arg);
        }
        else {
            return this.host.jqxTagCloud('urlMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.valueMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('valueMember', arg);
        }
        else {
            return this.host.jqxTagCloud('valueMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTagCloudComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('width', arg);
        }
        else {
            return this.host.jqxTagCloud('width');
        }
    };
    // jqxTagCloudComponent functions
    // jqxTagCloudComponent functions
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.destroy = 
    // jqxTagCloudComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxTagCloud('destroy');
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    jqxTagCloudComponent.prototype.findTagIndex = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        return this.host.jqxTagCloud('findTagIndex', tag);
    };
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.getHiddenTagsList = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTagCloud('getHiddenTagsList');
    };
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.getRenderedTags = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTagCloud('getRenderedTags');
    };
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.getTagsList = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTagCloud('getTagsList');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTagCloudComponent.prototype.hideItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTagCloud('hideItem', index);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxTagCloudComponent.prototype.insertAt = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxTagCloud('insertAt', index, item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTagCloudComponent.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTagCloud('removeAt', index);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxTagCloudComponent.prototype.updateAt = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxTagCloud('updateAt', index, item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTagCloudComponent.prototype.showItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTagCloud('showItem', index);
    };
    /**
     * @return {?}
     */
    jqxTagCloudComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
    };
    jqxTagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTagCloud',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxTagCloudComponent.propDecorators = {
        attrAlterTextCase: [{ type: Input, args: ['alterTextCase',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDisplayLimit: [{ type: Input, args: ['displayLimit',] }],
        attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
        attrDisplayValue: [{ type: Input, args: ['displayValue',] }],
        attrFontSizeUnit: [{ type: Input, args: ['fontSizeUnit',] }],
        attrMaxColor: [{ type: Input, args: ['maxColor',] }],
        attrMaxFontSize: [{ type: Input, args: ['maxFontSize',] }],
        attrMaxValueToDisplay: [{ type: Input, args: ['maxValueToDisplay',] }],
        attrMinColor: [{ type: Input, args: ['minColor',] }],
        attrMinFontSize: [{ type: Input, args: ['minFontSize',] }],
        attrMinValueToDisplay: [{ type: Input, args: ['minValueToDisplay',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSortBy: [{ type: Input, args: ['sortBy',] }],
        attrSortOrder: [{ type: Input, args: ['sortOrder',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrTagRenderer: [{ type: Input, args: ['tagRenderer',] }],
        attrTakeTopWeightedItems: [{ type: Input, args: ['takeTopWeightedItems',] }],
        attrTextColor: [{ type: Input, args: ['textColor',] }],
        attrUrlBase: [{ type: Input, args: ['urlBase',] }],
        attrUrlMember: [{ type: Input, args: ['urlMember',] }],
        attrValueMember: [{ type: Input, args: ['valueMember',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onBindingComplete: [{ type: Output }],
        onItemClick: [{ type: Output }]
    };
    return jqxTagCloudComponent;
}()); //jqxTagCloudComponent
export { jqxTagCloudComponent };
if (false) {
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrAlterTextCase;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayLimit;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrDisplayValue;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrFontSizeUnit;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxFontSize;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMaxValueToDisplay;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinFontSize;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrMinValueToDisplay;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSortBy;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSortOrder;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrSource;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTagRenderer;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTakeTopWeightedItems;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrTextColor;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrUrlBase;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrUrlMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTagCloudComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTagCloudComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTagCloudComponent.prototype.properties;
    /** @type {?} */
    jqxTagCloudComponent.prototype.host;
    /** @type {?} */
    jqxTagCloudComponent.prototype.elementRef;
    /** @type {?} */
    jqxTagCloudComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTagCloudComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxTagCloudComponent.prototype.onItemClick;
    /* Skipping unhandled member: ;*/
}
