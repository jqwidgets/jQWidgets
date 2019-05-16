import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxMenuComponent = /** @class */ (function () {
    function jqxMenuComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new EventEmitter();
        this.onItemclick = new EventEmitter();
        this.onShown = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.ngOnInit = /**
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
    jqxMenuComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
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
    jqxMenuComponent.prototype.arraysEqual = /**
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
    jqxMenuComponent.prototype.manageAttributes = /**
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
    jqxMenuComponent.prototype.moveClasses = /**
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
    jqxMenuComponent.prototype.moveStyles = /**
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
    jqxMenuComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxMenuComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.__updateRect__ = /**
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
    jqxMenuComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxMenu('setOptions', options);
    };
    // jqxMenuComponent properties
    // jqxMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.animationShowDuration = 
    // jqxMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.animationHideDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.animationHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.animationShowDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoCloseInterval = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoSizeMainItems = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoCloseOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoOpenPopup = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.autoCloseOnMouseLeave = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.clickToOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.easing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.keyboardNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.minimizeWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.mode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.popupZIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.showTopLevelArrows = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMenuComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    };
    // jqxMenuComponent functions
    // jqxMenuComponent functions
    /**
     * @param {?} itemID
     * @return {?}
     */
    jqxMenuComponent.prototype.closeItem = 
    // jqxMenuComponent functions
    /**
     * @param {?} itemID
     * @return {?}
     */
    function (itemID) {
        this.host.jqxMenu('closeItem', itemID);
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.host.jqxMenu('close');
    };
    /**
     * @param {?} itemID
     * @param {?} value
     * @return {?}
     */
    jqxMenuComponent.prototype.disable = /**
     * @param {?} itemID
     * @param {?} value
     * @return {?}
     */
    function (itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxMenu('destroy');
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxMenu('focus');
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.minimize = /**
     * @return {?}
     */
    function () {
        this.host.jqxMenu('minimize');
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxMenuComponent.prototype.open = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        this.host.jqxMenu('open', left, top);
    };
    /**
     * @param {?} itemID
     * @return {?}
     */
    jqxMenuComponent.prototype.openItem = /**
     * @param {?} itemID
     * @return {?}
     */
    function (itemID) {
        this.host.jqxMenu('openItem', itemID);
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.restore = /**
     * @return {?}
     */
    function () {
        this.host.jqxMenu('restore');
    };
    /**
     * @param {?} item
     * @param {?} horizontaldirection
     * @param {?} verticaldirection
     * @return {?}
     */
    jqxMenuComponent.prototype.setItemOpenDirection = /**
     * @param {?} item
     * @param {?} horizontaldirection
     * @param {?} verticaldirection
     * @return {?}
     */
    function (item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    };
    /**
     * @return {?}
     */
    jqxMenuComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('closed', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClosed.emit(eventData); }));
        this.host.on('itemclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onItemclick.emit(eventData); }));
        this.host.on('shown', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onShown.emit(eventData); }));
    };
    jqxMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxMenu',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxMenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxMenuComponent.propDecorators = {
        attrAnimationShowDuration: [{ type: Input, args: ['animationShowDuration',] }],
        attrAnimationHideDuration: [{ type: Input, args: ['animationHideDuration',] }],
        attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
        attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
        attrAutoCloseInterval: [{ type: Input, args: ['autoCloseInterval',] }],
        attrAutoSizeMainItems: [{ type: Input, args: ['autoSizeMainItems',] }],
        attrAutoCloseOnClick: [{ type: Input, args: ['autoCloseOnClick',] }],
        attrAutoOpenPopup: [{ type: Input, args: ['autoOpenPopup',] }],
        attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
        attrAutoCloseOnMouseLeave: [{ type: Input, args: ['autoCloseOnMouseLeave',] }],
        attrClickToOpen: [{ type: Input, args: ['clickToOpen',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrEasing: [{ type: Input, args: ['easing',] }],
        attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
        attrMinimizeWidth: [{ type: Input, args: ['minimizeWidth',] }],
        attrMode: [{ type: Input, args: ['mode',] }],
        attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowTopLevelArrows: [{ type: Input, args: ['showTopLevelArrows',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClosed: [{ type: Output }],
        onItemclick: [{ type: Output }],
        onShown: [{ type: Output }]
    };
    return jqxMenuComponent;
}()); //jqxMenuComponent
export { jqxMenuComponent };
if (false) {
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationShowDuration;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationHideDuration;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseInterval;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoSizeMainItems;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseOnClick;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoOpenPopup;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxMenuComponent.prototype.attrAutoCloseOnMouseLeave;
    /** @type {?} */
    jqxMenuComponent.prototype.attrClickToOpen;
    /** @type {?} */
    jqxMenuComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxMenuComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxMenuComponent.prototype.attrEasing;
    /** @type {?} */
    jqxMenuComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxMenuComponent.prototype.attrMinimizeWidth;
    /** @type {?} */
    jqxMenuComponent.prototype.attrMode;
    /** @type {?} */
    jqxMenuComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxMenuComponent.prototype.attrRtl;
    /** @type {?} */
    jqxMenuComponent.prototype.attrShowTopLevelArrows;
    /** @type {?} */
    jqxMenuComponent.prototype.attrSource;
    /** @type {?} */
    jqxMenuComponent.prototype.attrTheme;
    /** @type {?} */
    jqxMenuComponent.prototype.attrWidth;
    /** @type {?} */
    jqxMenuComponent.prototype.attrHeight;
    /** @type {?} */
    jqxMenuComponent.prototype.autoCreate;
    /** @type {?} */
    jqxMenuComponent.prototype.properties;
    /** @type {?} */
    jqxMenuComponent.prototype.host;
    /** @type {?} */
    jqxMenuComponent.prototype.elementRef;
    /** @type {?} */
    jqxMenuComponent.prototype.widgetObject;
    /** @type {?} */
    jqxMenuComponent.prototype.onClosed;
    /** @type {?} */
    jqxMenuComponent.prototype.onItemclick;
    /** @type {?} */
    jqxMenuComponent.prototype.onShown;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhtZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeG1lbnUvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeG1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXVDRywwQkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyx1QkFBdUIsRUFBQyx1QkFBdUIsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxrQkFBa0IsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBK1Y5WCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUEzVnBDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMs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QzdELDZDQUEyRDs7SUFDM0Qsb0NBQWdDOztJQUNoQywyQ0FBdUQ7O0lBQ3ZELG1DQUErQjs7SUFDL0Isa0RBQTZEOztJQUM3RCxzQ0FBaUM7O0lBQ2pDLHFDQUFrQzs7SUFDbEMscUNBQTJDOztJQUMzQyxzQ0FBNkM7O0lBRTdDLHNDQUFpRDs7SUFFakQsc0NBQXdZOztJQUN4WSxnQ0FBVTs7SUFDVixzQ0FBdUI7O0lBQ3ZCLHdDQUFpQzs7SUE0VmpDLG9DQUF3Qzs7SUFDeEMsdUNBQTJDOztJQUMzQyxtQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeE1lbnUnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJykgYXR0ckFuaW1hdGlvblNob3dEdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdhbmltYXRpb25IaWRlRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uSGlkZUR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEZWxheScpIGF0dHJBbmltYXRpb25IaWRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgnYW5pbWF0aW9uU2hvd0RlbGF5JykgYXR0ckFuaW1hdGlvblNob3dEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdhdXRvQ2xvc2VJbnRlcnZhbCcpIGF0dHJBdXRvQ2xvc2VJbnRlcnZhbDogbnVtYmVyO1xuICAgQElucHV0KCdhdXRvU2l6ZU1haW5JdGVtcycpIGF0dHJBdXRvU2l6ZU1haW5JdGVtczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b0Nsb3NlT25DbGljaycpIGF0dHJBdXRvQ2xvc2VPbkNsaWNrOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvT3BlblBvcHVwJykgYXR0ckF1dG9PcGVuUG9wdXA6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9PcGVuJykgYXR0ckF1dG9PcGVuOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvQ2xvc2VPbk1vdXNlTGVhdmUnKSBhdHRyQXV0b0Nsb3NlT25Nb3VzZUxlYXZlOiBib29sZWFuO1xuICAgQElucHV0KCdjbGlja1RvT3BlbicpIGF0dHJDbGlja1RvT3BlbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlYXNpbmcnKSBhdHRyRWFzaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2tleWJvYXJkTmF2aWdhdGlvbicpIGF0dHJLZXlib2FyZE5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ21pbmltaXplV2lkdGgnKSBhdHRyTWluaW1pemVXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtb2RlJykgYXR0ck1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgncG9wdXBaSW5kZXgnKSBhdHRyUG9wdXBaSW5kZXg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd1RvcExldmVsQXJyb3dzJykgYXR0clNob3dUb3BMZXZlbEFycm93czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvblNob3dEdXJhdGlvbicsJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicsJ2FuaW1hdGlvbkhpZGVEZWxheScsJ2FuaW1hdGlvblNob3dEZWxheScsJ2F1dG9DbG9zZUludGVydmFsJywnYXV0b1NpemVNYWluSXRlbXMnLCdhdXRvQ2xvc2VPbkNsaWNrJywnYXV0b09wZW5Qb3B1cCcsJ2F1dG9PcGVuJywnYXV0b0Nsb3NlT25Nb3VzZUxlYXZlJywnY2xpY2tUb09wZW4nLCdkaXNhYmxlZCcsJ2VuYWJsZUhvdmVyJywnZWFzaW5nJywnaGVpZ2h0Jywna2V5Ym9hcmROYXZpZ2F0aW9uJywnbWluaW1pemVXaWR0aCcsJ21vZGUnLCdwb3B1cFpJbmRleCcsJ3J0bCcsJ3Nob3dUb3BMZXZlbEFycm93cycsJ3NvdXJjZScsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4TWVudTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhNZW51KHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeE1lbnUnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhNZW51Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblNob3dEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkhpZGVEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkhpZGVEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uSGlkZURlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvblNob3dEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uU2hvd0RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9DbG9zZUludGVydmFsKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlSW50ZXJ2YWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9DbG9zZUludGVydmFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9TaXplTWFpbkl0ZW1zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvU2l6ZU1haW5JdGVtcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b1NpemVNYWluSXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0Nsb3NlT25DbGljayhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlT25DbGljaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlT25DbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvT3BlblBvcHVwKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlblBvcHVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlblBvcHVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9PcGVuKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b09wZW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0Nsb3NlT25Nb3VzZUxlYXZlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VPbk1vdXNlTGVhdmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbGlja1RvT3Blbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnY2xpY2tUb09wZW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2NsaWNrVG9PcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlSG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlYXNpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdlYXNpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2Vhc2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZE5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbmltaXplV2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdtaW5pbWl6ZVdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdtaW5pbWl6ZVdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvcHVwWkluZGV4KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgncG9wdXBaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3BvcHVwWkluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1RvcExldmVsQXJyb3dzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdzaG93VG9wTGV2ZWxBcnJvd3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3Nob3dUb3BMZXZlbEFycm93cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeE1lbnVDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjbG9zZUl0ZW0oaXRlbUlEOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdjbG9zZUl0ZW0nLCBpdGVtSUQpO1xuICAgfVxuXG4gICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdjbG9zZScpO1xuICAgfVxuXG4gICBkaXNhYmxlKGl0ZW1JRDogbnVtYmVyIHwgc3RyaW5nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Rpc2FibGUnLCBpdGVtSUQsIHZhbHVlKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIG1pbmltaXplKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ21pbmltaXplJyk7XG4gICB9XG5cbiAgIG9wZW4obGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ29wZW4nLCBsZWZ0LCB0b3ApO1xuICAgfVxuXG4gICBvcGVuSXRlbShpdGVtSUQ6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ29wZW5JdGVtJywgaXRlbUlEKTtcbiAgIH1cblxuICAgcmVzdG9yZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdyZXN0b3JlJyk7XG4gICB9XG5cbiAgIHNldEl0ZW1PcGVuRGlyZWN0aW9uKGl0ZW06IG51bWJlciB8IHN0cmluZywgaG9yaXpvbnRhbGRpcmVjdGlvbjogc3RyaW5nLCB2ZXJ0aWNhbGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnc2V0SXRlbU9wZW5EaXJlY3Rpb24nLCBpdGVtLCBob3Jpem9udGFsZGlyZWN0aW9uLCB2ZXJ0aWNhbGRpcmVjdGlvbik7XG4gICB9XG5cblxuICAgLy8ganF4TWVudUNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkl0ZW1jbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNob3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2xvc2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaXRlbWNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25JdGVtY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc2hvd24nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNob3duLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhNZW51Q29tcG9uZW50XG4iXX0=