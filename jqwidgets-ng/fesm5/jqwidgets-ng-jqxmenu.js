import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        this.host.on('closed', function (eventData) { _this.onClosed.emit(eventData); });
        this.host.on('itemclick', function (eventData) { _this.onItemclick.emit(eventData); });
        this.host.on('shown', function (eventData) { _this.onShown.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxMenuModule = /** @class */ (function () {
    function jqxMenuModule() {
    }
    jqxMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxMenuComponent],
                    exports: [jqxMenuComponent]
                },] }
    ];
    return jqxMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxMenuComponent, jqxMenuModule };

