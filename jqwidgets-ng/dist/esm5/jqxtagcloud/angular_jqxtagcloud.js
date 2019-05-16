import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtagcloud from '../../jqwidgets-scripts/jqwidgets/jqxtagcloud';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
        this.host.on('itemClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onItemClick.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0YWdjbG91ZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXh0YWdjbG91ZC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4dGFnY2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXVDRyw4QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsc0JBQXNCLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQStWM1Usc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUExVnhDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRiwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxD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Ly8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhUYWdDbG91ZCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4VGFnQ2xvdWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYWx0ZXJUZXh0Q2FzZScpIGF0dHJBbHRlclRleHRDYXNlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNwbGF5TGltaXQnKSBhdHRyRGlzcGxheUxpbWl0OiBudW1iZXI7XG4gICBASW5wdXQoJ2Rpc3BsYXlNZW1iZXInKSBhdHRyRGlzcGxheU1lbWJlcjogc3RyaW5nO1xuICAgQElucHV0KCdkaXNwbGF5VmFsdWUnKSBhdHRyRGlzcGxheVZhbHVlOiBib29sZWFuO1xuICAgQElucHV0KCdmb250U2l6ZVVuaXQnKSBhdHRyRm9udFNpemVVbml0OiBzdHJpbmc7XG4gICBASW5wdXQoJ21heENvbG9yJykgYXR0ck1heENvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ21heEZvbnRTaXplJykgYXR0ck1heEZvbnRTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ21heFZhbHVlVG9EaXNwbGF5JykgYXR0ck1heFZhbHVlVG9EaXNwbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ21pbkNvbG9yJykgYXR0ck1pbkNvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ21pbkZvbnRTaXplJykgYXR0ck1pbkZvbnRTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ21pblZhbHVlVG9EaXNwbGF5JykgYXR0ck1pblZhbHVlVG9EaXNwbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NvcnRCeScpIGF0dHJTb3J0Qnk6IHN0cmluZztcbiAgIEBJbnB1dCgnc29ydE9yZGVyJykgYXR0clNvcnRPcmRlcjogc3RyaW5nO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBqcXdpZGdldHMuVGFnQ2xvdWRTb3VyY2U7XG4gICBASW5wdXQoJ3RhZ1JlbmRlcmVyJykgYXR0clRhZ1JlbmRlcmVyOiAoaXRlbURhdGE6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWydpdGVtRGF0YSddLCBtaW5WYWx1ZToganF3aWRnZXRzLlRhZ0Nsb3VkVGFnUmVuZGVyZXJbJ21pblZhbHVlJ10sIHZhbHVlUmFuZ2U6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWyd2YWx1ZVJhbmdlJ10pID0+IGFueTtcbiAgIEBJbnB1dCgndGFrZVRvcFdlaWdodGVkSXRlbXMnKSBhdHRyVGFrZVRvcFdlaWdodGVkSXRlbXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RleHRDb2xvcicpIGF0dHJUZXh0Q29sb3I6IHN0cmluZztcbiAgIEBJbnB1dCgndXJsQmFzZScpIGF0dHJVcmxCYXNlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VybE1lbWJlcicpIGF0dHJVcmxNZW1iZXI6IHN0cmluZztcbiAgIEBJbnB1dCgndmFsdWVNZW1iZXInKSBhdHRyVmFsdWVNZW1iZXI6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbHRlclRleHRDYXNlJywnZGlzYWJsZWQnLCdkaXNwbGF5TGltaXQnLCdkaXNwbGF5TWVtYmVyJywnZGlzcGxheVZhbHVlJywnZm9udFNpemVVbml0JywnaGVpZ2h0JywnbWF4Q29sb3InLCdtYXhGb250U2l6ZScsJ21heFZhbHVlVG9EaXNwbGF5JywnbWluQ29sb3InLCdtaW5Gb250U2l6ZScsJ21pblZhbHVlVG9EaXNwbGF5JywncnRsJywnc29ydEJ5Jywnc29ydE9yZGVyJywnc291cmNlJywndGFnUmVuZGVyZXInLCd0YWtlVG9wV2VpZ2h0ZWRJdGVtcycsJ3RleHRDb2xvcicsJ3VybEJhc2UnLCd1cmxNZW1iZXInLCd2YWx1ZU1lbWJlcicsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFRhZ0Nsb3VkO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhUYWdDbG91ZCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFRhZ0Nsb3VkJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFRhZ0Nsb3VkQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFsdGVyVGV4dENhc2UoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnYWx0ZXJUZXh0Q2FzZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2FsdGVyVGV4dENhc2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc3BsYXlMaW1pdChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNwbGF5TGltaXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNwbGF5TGltaXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzcGxheU1lbWJlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNwbGF5TWVtYmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnZGlzcGxheU1lbWJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNwbGF5VmFsdWUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNwbGF5VmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkaXNwbGF5VmFsdWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9udFNpemVVbml0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2ZvbnRTaXplVW5pdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2ZvbnRTaXplVW5pdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heENvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21heENvbG9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWF4Q29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4Rm9udFNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWF4Rm9udFNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtYXhGb250U2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXhWYWx1ZVRvRGlzcGxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtYXhWYWx1ZVRvRGlzcGxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21heFZhbHVlVG9EaXNwbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbkNvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21pbkNvbG9yJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWluQ29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluRm9udFNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnbWluRm9udFNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtaW5Gb250U2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5WYWx1ZVRvRGlzcGxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdtaW5WYWx1ZVRvRGlzcGxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ21pblZhbHVlVG9EaXNwbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3J0QnkoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnc29ydEJ5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnc29ydEJ5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnRPcmRlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzb3J0T3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdzb3J0T3JkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGpxd2lkZ2V0cy5UYWdDbG91ZFNvdXJjZSk6IGpxd2lkZ2V0cy5UYWdDbG91ZFNvdXJjZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0YWdSZW5kZXJlcihhcmc/OiAoaXRlbURhdGE6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWydpdGVtRGF0YSddLCBtaW5WYWx1ZToganF3aWRnZXRzLlRhZ0Nsb3VkVGFnUmVuZGVyZXJbJ21pblZhbHVlJ10sIHZhbHVlUmFuZ2U6IGpxd2lkZ2V0cy5UYWdDbG91ZFRhZ1JlbmRlcmVyWyd2YWx1ZVJhbmdlJ10pID0+IGFueSk6IChpdGVtRGF0YToganF3aWRnZXRzLlRhZ0Nsb3VkVGFnUmVuZGVyZXJbJ2l0ZW1EYXRhJ10sIG1pblZhbHVlOiBqcXdpZGdldHMuVGFnQ2xvdWRUYWdSZW5kZXJlclsnbWluVmFsdWUnXSwgdmFsdWVSYW5nZToganF3aWRnZXRzLlRhZ0Nsb3VkVGFnUmVuZGVyZXJbJ3ZhbHVlUmFuZ2UnXSkgPT4gYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndGFnUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd0YWdSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0YWtlVG9wV2VpZ2h0ZWRJdGVtcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3Rha2VUb3BXZWlnaHRlZEl0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndGFrZVRvcFdlaWdodGVkSXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGV4dENvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3RleHRDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3RleHRDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cmxCYXNlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3VybEJhc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd1cmxCYXNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVybE1lbWJlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd1cmxNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd1cmxNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWVNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgndmFsdWVNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd2YWx1ZU1lbWJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4VGFnQ2xvdWRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZpbmRUYWdJbmRleCh0YWc6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdmaW5kVGFnSW5kZXgnLCB0YWcpO1xuICAgfVxuXG4gICBnZXRIaWRkZW5UYWdzTGlzdCgpOiBBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2dldEhpZGRlblRhZ3NMaXN0Jyk7XG4gICB9XG5cbiAgIGdldFJlbmRlcmVkVGFncygpOiBBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2dldFJlbmRlcmVkVGFncycpO1xuICAgfVxuXG4gICBnZXRUYWdzTGlzdCgpOiBBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ2dldFRhZ3NMaXN0Jyk7XG4gICB9XG5cbiAgIGhpZGVJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWdDbG91ZCgnaGlkZUl0ZW0nLCBpbmRleCk7XG4gICB9XG5cbiAgIGluc2VydEF0KGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdpbnNlcnRBdCcsIGluZGV4LCBpdGVtKTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhZ0Nsb3VkKCdyZW1vdmVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgdXBkYXRlQXQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3VwZGF0ZUF0JywgaW5kZXgsIGl0ZW0pO1xuICAgfVxuXG4gICBzaG93SXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFnQ2xvdWQoJ3Nob3dJdGVtJywgaW5kZXgpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFRhZ0Nsb3VkQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaXRlbUNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25JdGVtQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRhZ0Nsb3VkQ29tcG9uZW50XG4iXX0=