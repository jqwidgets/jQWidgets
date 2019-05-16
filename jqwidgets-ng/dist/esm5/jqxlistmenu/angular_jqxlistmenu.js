import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistmenu from '../../jqwidgets-scripts/jqwidgets/jqxlistmenu';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
var jqxListMenuComponent = /** @class */ (function () {
    function jqxListMenuComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['alwaysShowNavigationArrows', 'animationType', 'animationDuration', 'autoSeparators', 'backLabel', 'disabled', 'enableScrolling', 'filterCallback', 'height', 'headerAnimationDuration', 'placeHolder', 'readOnly', 'rtl', 'roundedCorners', 'showNavigationArrows', 'showFilter', 'showHeader', 'showBackButton', 'theme', 'width'];
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxListMenuComponent.prototype.ngOnInit = /**
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
    jqxListMenuComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
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
    jqxListMenuComponent.prototype.arraysEqual = /**
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
    jqxListMenuComponent.prototype.manageAttributes = /**
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
    jqxListMenuComponent.prototype.moveClasses = /**
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
    jqxListMenuComponent.prototype.moveStyles = /**
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
    jqxListMenuComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxListMenuComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxListMenuComponent.prototype.__updateRect__ = /**
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
    jqxListMenuComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxListMenu('setOptions', options);
    };
    // jqxListMenuComponent properties
    // jqxListMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.alwaysShowNavigationArrows = 
    // jqxListMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('alwaysShowNavigationArrows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.animationType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationType', arg);
        }
        else {
            return this.host.jqxListMenu('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.animationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.autoSeparators = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('autoSeparators', arg);
        }
        else {
            return this.host.jqxListMenu('autoSeparators');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.backLabel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('backLabel', arg);
        }
        else {
            return this.host.jqxListMenu('backLabel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('disabled', arg);
        }
        else {
            return this.host.jqxListMenu('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.enableScrolling = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('enableScrolling', arg);
        }
        else {
            return this.host.jqxListMenu('enableScrolling');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.filterCallback = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('filterCallback', arg);
        }
        else {
            return this.host.jqxListMenu('filterCallback');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('height', arg);
        }
        else {
            return this.host.jqxListMenu('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.headerAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('headerAnimationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('headerAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('placeHolder', arg);
        }
        else {
            return this.host.jqxListMenu('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.readOnly = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('readOnly', arg);
        }
        else {
            return this.host.jqxListMenu('readOnly');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('rtl', arg);
        }
        else {
            return this.host.jqxListMenu('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.roundedCorners = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('roundedCorners', arg);
        }
        else {
            return this.host.jqxListMenu('roundedCorners');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.showNavigationArrows = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('showNavigationArrows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.showFilter = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showFilter', arg);
        }
        else {
            return this.host.jqxListMenu('showFilter');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.showHeader = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showHeader', arg);
        }
        else {
            return this.host.jqxListMenu('showHeader');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.showBackButton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showBackButton', arg);
        }
        else {
            return this.host.jqxListMenu('showBackButton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('theme', arg);
        }
        else {
            return this.host.jqxListMenu('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxListMenuComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('width', arg);
        }
        else {
            return this.host.jqxListMenu('width');
        }
    };
    // jqxListMenuComponent functions
    // jqxListMenuComponent functions
    /**
     * @return {?}
     */
    jqxListMenuComponent.prototype.back = 
    // jqxListMenuComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxListMenu('back');
    };
    /**
     * @param {?} Item
     * @return {?}
     */
    jqxListMenuComponent.prototype.changePage = /**
     * @param {?} Item
     * @return {?}
     */
    function (Item) {
        this.host.jqxListMenu('changePage', Item);
    };
    /**
     * @return {?}
     */
    jqxListMenuComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxListMenu('destroy');
    };
    /**
     * @return {?}
     */
    jqxListMenuComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
    };
    jqxListMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxListMenu',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxListMenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxListMenuComponent.propDecorators = {
        attrAlwaysShowNavigationArrows: [{ type: Input, args: ['alwaysShowNavigationArrows',] }],
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrAutoSeparators: [{ type: Input, args: ['autoSeparators',] }],
        attrBackLabel: [{ type: Input, args: ['backLabel',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnableScrolling: [{ type: Input, args: ['enableScrolling',] }],
        attrFilterCallback: [{ type: Input, args: ['filterCallback',] }],
        attrHeaderAnimationDuration: [{ type: Input, args: ['headerAnimationDuration',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrReadOnly: [{ type: Input, args: ['readOnly',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
        attrShowNavigationArrows: [{ type: Input, args: ['showNavigationArrows',] }],
        attrShowFilter: [{ type: Input, args: ['showFilter',] }],
        attrShowHeader: [{ type: Input, args: ['showHeader',] }],
        attrShowBackButton: [{ type: Input, args: ['showBackButton',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }]
    };
    return jqxListMenuComponent;
}()); //jqxListMenuComponent
export { jqxListMenuComponent };
if (false) {
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAlwaysShowNavigationArrows;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAutoSeparators;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrBackLabel;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrEnableScrolling;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrFilterCallback;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrHeaderAnimationDuration;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrRtl;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowNavigationArrows;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowFilter;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowHeader;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowBackButton;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrTheme;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrWidth;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrHeight;
    /** @type {?} */
    jqxListMenuComponent.prototype.autoCreate;
    /** @type {?} */
    jqxListMenuComponent.prototype.properties;
    /** @type {?} */
    jqxListMenuComponent.prototype.host;
    /** @type {?} */
    jqxListMenuComponent.prototype.elementRef;
    /** @type {?} */
    jqxListMenuComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhsaXN0bWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhsaXN0bWVudS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4bGlzdG1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRzdHO0lBbUNHLDhCQUFZLGdCQUE0QjtRQVBsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLDRCQUE0QixFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyx5QkFBeUIsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxzQkFBc0IsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztRQU12VSxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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WUFBWTtpQ0FDbEIsS0FBSyxTQUFDLFlBQVk7cUNBQ2xCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxPQUFPOzRCQUNiLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhOztJQXdTdkIsMkJBQUM7Q0FBQSxBQXBVRCxJQW9VQyxDQUFDLHNCQUFzQjtTQS9UWCxvQkFBb0I7OztJQUU5Qiw4REFBNkU7O0lBQzdFLGlEQUFrRDs7SUFDbEQscURBQW1FOztJQUNuRSxrREFBcUQ7O0lBQ3JELDZDQUFtRDs7SUFDbkQsNENBQXlDOztJQUN6QyxtREFBdUQ7O0lBQ3ZELGtEQUFxSzs7SUFDckssMkRBQStFOztJQUMvRSwrQ0FBdUQ7O0lBQ3ZELDRDQUF5Qzs7SUFDekMsdUNBQStCOztJQUMvQixrREFBcUQ7O0lBQ3JELHdEQUFpRTs7SUFDakUsOENBQTZDOztJQUM3Qyw4Q0FBNkM7O0lBQzdDLGtEQUFxRDs7SUFDckQseUNBQWtDOztJQUNsQyx5Q0FBMkM7O0lBQzNDLDBDQUE2Qzs7SUFFN0MsMENBQWlEOztJQUVqRCwwQ0FBMFU7O0lBQzFVLG9DQUFVOztJQUNWLDBDQUF1Qjs7SUFDdkIsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhMaXN0TWVudScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4TGlzdE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYWx3YXlzU2hvd05hdmlnYXRpb25BcnJvd3MnKSBhdHRyQWx3YXlzU2hvd05hdmlnYXRpb25BcnJvd3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGF0dHJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdhdXRvU2VwYXJhdG9ycycpIGF0dHJBdXRvU2VwYXJhdG9yczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYmFja0xhYmVsJykgYXR0ckJhY2tMYWJlbDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlU2Nyb2xsaW5nJykgYXR0ckVuYWJsZVNjcm9sbGluZzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmlsdGVyQ2FsbGJhY2snKSBhdHRyRmlsdGVyQ2FsbGJhY2s6ICh0ZXh0Ompxd2lkZ2V0cy5MaXN0TWVudUZpbHRlckNhbGxiYWNrWyd0ZXh0J10sIHNlYXJjaFZhbHVlOmpxd2lkZ2V0cy5MaXN0TWVudUZpbHRlckNhbGxiYWNrWydzZWFyY2hWYWx1ZSddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdoZWFkZXJBbmltYXRpb25EdXJhdGlvbicpIGF0dHJIZWFkZXJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdwbGFjZUhvbGRlcicpIGF0dHJQbGFjZUhvbGRlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdyZWFkT25seScpIGF0dHJSZWFkT25seTogYm9vbGVhbjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncm91bmRlZENvcm5lcnMnKSBhdHRyUm91bmRlZENvcm5lcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dOYXZpZ2F0aW9uQXJyb3dzJykgYXR0clNob3dOYXZpZ2F0aW9uQXJyb3dzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93RmlsdGVyJykgYXR0clNob3dGaWx0ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dIZWFkZXInKSBhdHRyU2hvd0hlYWRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0JhY2tCdXR0b24nKSBhdHRyU2hvd0JhY2tCdXR0b246IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYWx3YXlzU2hvd05hdmlnYXRpb25BcnJvd3MnLCdhbmltYXRpb25UeXBlJywnYW5pbWF0aW9uRHVyYXRpb24nLCdhdXRvU2VwYXJhdG9ycycsJ2JhY2tMYWJlbCcsJ2Rpc2FibGVkJywnZW5hYmxlU2Nyb2xsaW5nJywnZmlsdGVyQ2FsbGJhY2snLCdoZWlnaHQnLCdoZWFkZXJBbmltYXRpb25EdXJhdGlvbicsJ3BsYWNlSG9sZGVyJywncmVhZE9ubHknLCdydGwnLCdyb3VuZGVkQ29ybmVycycsJ3Nob3dOYXZpZ2F0aW9uQXJyb3dzJywnc2hvd0ZpbHRlcicsJ3Nob3dIZWFkZXInLCdzaG93QmFja0J1dHRvbicsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4TGlzdE1lbnU7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4TGlzdE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeExpc3RNZW51KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4TGlzdE1lbnUnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4TGlzdE1lbnVDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWx3YXlzU2hvd05hdmlnYXRpb25BcnJvd3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdhbHdheXNTaG93TmF2aWdhdGlvbkFycm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2Fsd2F5c1Nob3dOYXZpZ2F0aW9uQXJyb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnYW5pbWF0aW9uVHlwZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnYW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvU2VwYXJhdG9ycyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2F1dG9TZXBhcmF0b3JzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnYXV0b1NlcGFyYXRvcnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFja0xhYmVsKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2JhY2tMYWJlbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2JhY2tMYWJlbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlU2Nyb2xsaW5nKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnZW5hYmxlU2Nyb2xsaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnZW5hYmxlU2Nyb2xsaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlckNhbGxiYWNrKGFyZz86ICh0ZXh0Ompxd2lkZ2V0cy5MaXN0TWVudUZpbHRlckNhbGxiYWNrWyd0ZXh0J10sIHNlYXJjaFZhbHVlOmpxd2lkZ2V0cy5MaXN0TWVudUZpbHRlckNhbGxiYWNrWydzZWFyY2hWYWx1ZSddKSA9PiBib29sZWFuKTogKHRleHQ6anF3aWRnZXRzLkxpc3RNZW51RmlsdGVyQ2FsbGJhY2tbJ3RleHQnXSwgc2VhcmNoVmFsdWU6anF3aWRnZXRzLkxpc3RNZW51RmlsdGVyQ2FsbGJhY2tbJ3NlYXJjaFZhbHVlJ10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdmaWx0ZXJDYWxsYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2ZpbHRlckNhbGxiYWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVhZGVyQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnaGVhZGVyQW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdoZWFkZXJBbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwbGFjZUhvbGRlcihhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdwbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3BsYWNlSG9sZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWRPbmx5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgncmVhZE9ubHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdyZWFkT25seScpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm91bmRlZENvcm5lcnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdyb3VuZGVkQ29ybmVycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3JvdW5kZWRDb3JuZXJzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dOYXZpZ2F0aW9uQXJyb3dzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnc2hvd05hdmlnYXRpb25BcnJvd3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdzaG93TmF2aWdhdGlvbkFycm93cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93RmlsdGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnc2hvd0ZpbHRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3Nob3dGaWx0ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0hlYWRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3Nob3dIZWFkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdzaG93SGVhZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dCYWNrQnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnc2hvd0JhY2tCdXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeExpc3RNZW51KCdzaG93QmFja0J1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhMaXN0TWVudUNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGJhY2soKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TGlzdE1lbnUoJ2JhY2snKTtcbiAgIH1cblxuICAgY2hhbmdlUGFnZShJdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhMaXN0TWVudSgnY2hhbmdlUGFnZScsIEl0ZW0pO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeExpc3RNZW51KCdkZXN0cm95Jyk7XG4gICB9XG5cblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG5cbiAgIH1cblxufSAvL2pxeExpc3RNZW51Q29tcG9uZW50XG4iXX0=