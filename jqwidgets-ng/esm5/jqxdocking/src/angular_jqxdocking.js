import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxdocking from '../../jqwidgets/jqxdocking';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDockingComponent = /** @class */ (function () {
    function jqxDockingComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.ngOnInit = /**
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
    jqxDockingComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                        this.host.jqxDocking(this.properties[i], this[attrName]);
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
    jqxDockingComponent.prototype.arraysEqual = /**
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
    jqxDockingComponent.prototype.manageAttributes = /**
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
    jqxDockingComponent.prototype.moveClasses = /**
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
    jqxDockingComponent.prototype.moveStyles = /**
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
    jqxDockingComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDockingComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.__updateRect__ = /**
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
    jqxDockingComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDocking('setOptions', options);
    };
    // jqxDockingComponent properties
    // jqxDockingComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.cookies = 
    // jqxDockingComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.cookieOptions = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.floatingWindowOpacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.keyboardNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.mode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.orientation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.windowsMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingComponent.prototype.windowsOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    };
    // jqxDockingComponent functions
    // jqxDockingComponent functions
    /**
     * @param {?} windowId
     * @param {?} mode
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    jqxDockingComponent.prototype.addWindow = 
    // jqxDockingComponent functions
    /**
     * @param {?} windowId
     * @param {?} mode
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    function (windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.closeWindow = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.collapseWindow = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('destroy');
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.disableWindowResize = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('disable');
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.exportLayout = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDocking('exportLayout');
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('enable');
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.expandWindow = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.enableWindowResize = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('focus');
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.hideAllCloseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('hideAllCloseButtons');
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.hideAllCollapseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('hideAllCollapseButtons');
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.hideCollapseButton = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.hideCloseButton = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    };
    /**
     * @param {?} Json
     * @return {?}
     */
    jqxDockingComponent.prototype.importLayout = /**
     * @param {?} Json
     * @return {?}
     */
    function (Json) {
        this.host.jqxDocking('importLayout', Json);
    };
    /**
     * @param {?} windowId
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    jqxDockingComponent.prototype.move = /**
     * @param {?} windowId
     * @param {?} panel
     * @param {?} position
     * @return {?}
     */
    function (windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.pinWindow = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    };
    /**
     * @param {?} windowId
     * @param {?} mode
     * @return {?}
     */
    jqxDockingComponent.prototype.setWindowMode = /**
     * @param {?} windowId
     * @param {?} mode
     * @return {?}
     */
    function (windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.showCloseButton = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.showCollapseButton = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    };
    /**
     * @param {?} windowId
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    jqxDockingComponent.prototype.setWindowPosition = /**
     * @param {?} windowId
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.showAllCloseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('showAllCloseButtons');
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.showAllCollapseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxDocking('showAllCollapseButtons');
    };
    /**
     * @param {?} windowId
     * @return {?}
     */
    jqxDockingComponent.prototype.unpinWindow = /**
     * @param {?} windowId
     * @return {?}
     */
    function (windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    };
    /**
     * @return {?}
     */
    jqxDockingComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
    };
    jqxDockingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDocking',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDockingComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDockingComponent.propDecorators = {
        attrCookies: [{ type: Input, args: ['cookies',] }],
        attrCookieOptions: [{ type: Input, args: ['cookieOptions',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrFloatingWindowOpacity: [{ type: Input, args: ['floatingWindowOpacity',] }],
        attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
        attrMode: [{ type: Input, args: ['mode',] }],
        attrOrientation: [{ type: Input, args: ['orientation',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWindowsMode: [{ type: Input, args: ['windowsMode',] }],
        attrWindowsOffset: [{ type: Input, args: ['windowsOffset',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }]
    };
    return jqxDockingComponent;
}()); //jqxDockingComponent
export { jqxDockingComponent };
if (false) {
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookies;
    /** @type {?} */
    jqxDockingComponent.prototype.attrCookieOptions;
    /** @type {?} */
    jqxDockingComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDockingComponent.prototype.attrFloatingWindowOpacity;
    /** @type {?} */
    jqxDockingComponent.prototype.attrKeyboardNavigation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxDockingComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsMode;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWindowsOffset;
    /** @type {?} */
    jqxDockingComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingComponent.prototype.properties;
    /** @type {?} */
    jqxDockingComponent.prototype.host;
    /** @type {?} */
    jqxDockingComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragStart;
    /** @type {?} */
    jqxDockingComponent.prototype.onDragEnd;
    /* Skipping unhandled member: ;*/
}
