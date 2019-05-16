import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxdocking from '../../jqwidgets-scripts/jqwidgets/jqxdocking';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('dragStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDragStart.emit(eventData); }));
        this.host.on('dragEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDragEnd.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkb2NraW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRvY2tpbmcvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRvY2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTRCRyw2QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsZUFBZSxDQUFDLENBQUM7O1FBbVVuTCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE5VHRDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRix5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMs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QUMsVUFBVTs0Q0FDaEIsS0FBSyxTQUFDLHVCQUF1Qjt5Q0FDN0IsS0FBSyxTQUFDLG9CQUFvQjsyQkFDMUIsS0FBSyxTQUFDLE1BQU07a0NBQ1osS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxLQUFLOzRCQUNYLEtBQUssU0FBQyxPQUFPO2tDQUNiLEtBQUssU0FBQyxhQUFhO29DQUNuQixLQUFLLFNBQUMsZUFBZTs0QkFDckIsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFFBQVE7NkJBRWQsS0FBSyxTQUFDLGFBQWE7OEJBcVVuQixNQUFNOzRCQUNOLE1BQU07O0lBT1YsMEJBQUM7Q0FBQSxBQWxXRCxJQWtXQyxDQUFDLHFCQUFxQjtTQTdWVixtQkFBbUI7OztJQUU3QiwwQ0FBdUM7O0lBQ3ZDLGdEQUEwRTs7SUFDMUUsMkNBQXlDOztJQUN6Qyx3REFBa0U7O0lBQ2xFLHFEQUE2RDs7SUFDN0QsdUNBQWdDOztJQUNoQyw4Q0FBOEM7O0lBQzlDLHNDQUErQjs7SUFDL0Isd0NBQWtDOztJQUNsQyw4Q0FBOEM7O0lBQzlDLGdEQUFrRDs7SUFDbEQsd0NBQTJDOztJQUMzQyx5Q0FBNkM7O0lBRTdDLHlDQUFpRDs7SUFFakQseUNBQTZMOztJQUM3TCxtQ0FBVTs7SUFDVix5Q0FBdUI7O0lBQ3ZCLDJDQUFvQzs7SUFnVXBDLDBDQUEyQzs7SUFDM0Msd0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEb2NraW5nJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEb2NraW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2Nvb2tpZXMnKSBhdHRyQ29va2llczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29va2llT3B0aW9ucycpIGF0dHJDb29raWVPcHRpb25zOiBqcXdpZGdldHMuRG9ja2luZ0Nvb2tpZU9wdGlvbnM7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdmbG9hdGluZ1dpbmRvd09wYWNpdHknKSBhdHRyRmxvYXRpbmdXaW5kb3dPcGFjaXR5OiBudW1iZXI7XG4gICBASW5wdXQoJ2tleWJvYXJkTmF2aWdhdGlvbicpIGF0dHJLZXlib2FyZE5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ21vZGUnKSBhdHRyTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdvcmllbnRhdGlvbicpIGF0dHJPcmllbnRhdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aW5kb3dzTW9kZScpIGF0dHJXaW5kb3dzTW9kZTogb2JqZWN0O1xuICAgQElucHV0KCd3aW5kb3dzT2Zmc2V0JykgYXR0cldpbmRvd3NPZmZzZXQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydjb29raWVzJywnY29va2llT3B0aW9ucycsJ2Rpc2FibGVkJywnZmxvYXRpbmdXaW5kb3dPcGFjaXR5JywnaGVpZ2h0Jywna2V5Ym9hcmROYXZpZ2F0aW9uJywnbW9kZScsJ29yaWVudGF0aW9uJywncnRsJywndGhlbWUnLCd3aWR0aCcsJ3dpbmRvd3NNb2RlJywnd2luZG93c09mZnNldCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhEb2NraW5nO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERvY2tpbmcodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4RG9ja2luZyh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZyh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RG9ja2luZycsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERvY2tpbmdDb21wb25lbnQgcHJvcGVydGllc1xuICAgY29va2llcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnY29va2llcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnY29va2llcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb29raWVPcHRpb25zKGFyZz86IGpxd2lkZ2V0cy5Eb2NraW5nQ29va2llT3B0aW9ucyk6IGpxd2lkZ2V0cy5Eb2NraW5nQ29va2llT3B0aW9ucyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnY29va2llT3B0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnY29va2llT3B0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZsb2F0aW5nV2luZG93T3BhY2l0eShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Zsb2F0aW5nV2luZG93T3BhY2l0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnZmxvYXRpbmdXaW5kb3dPcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGtleWJvYXJkTmF2aWdhdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygna2V5Ym9hcmROYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdrZXlib2FyZE5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ21vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ21vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3JpZW50YXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdvcmllbnRhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnb3JpZW50YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aW5kb3dzTW9kZShhcmc/OiBvYmplY3QpOiBvYmplY3Qge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpbmRvd3NNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aW5kb3dzTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aW5kb3dzT2Zmc2V0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnd2luZG93c09mZnNldCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnd2luZG93c09mZnNldCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeERvY2tpbmdDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGRXaW5kb3cod2luZG93SWQ6IHN0cmluZywgbW9kZTogYW55LCBwYW5lbDogbnVtYmVyLCBwb3NpdGlvbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnYWRkV2luZG93Jywgd2luZG93SWQsIG1vZGUsIHBhbmVsLCBwb3NpdGlvbik7XG4gICB9XG5cbiAgIGNsb3NlV2luZG93KHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjbG9zZVdpbmRvdycsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgY29sbGFwc2VXaW5kb3cod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2NvbGxhcHNlV2luZG93Jywgd2luZG93SWQpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZGlzYWJsZVdpbmRvd1Jlc2l6ZSh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZGlzYWJsZVdpbmRvd1Jlc2l6ZScsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGV4cG9ydExheW91dCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdleHBvcnRMYXlvdXQnKTtcbiAgIH1cblxuICAgZW5hYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2VuYWJsZScpO1xuICAgfVxuXG4gICBleHBhbmRXaW5kb3cod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2V4cGFuZFdpbmRvdycsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgZW5hYmxlV2luZG93UmVzaXplKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdlbmFibGVXaW5kb3dSZXNpemUnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGhpZGVBbGxDbG9zZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaGlkZUFsbENsb3NlQnV0dG9ucycpO1xuICAgfVxuXG4gICBoaWRlQWxsQ29sbGFwc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hpZGVBbGxDb2xsYXBzZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgaGlkZUNvbGxhcHNlQnV0dG9uKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoaWRlQ29sbGFwc2VCdXR0b24nLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGhpZGVDbG9zZUJ1dHRvbih3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaGlkZUNsb3NlQnV0dG9uJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBpbXBvcnRMYXlvdXQoSnNvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaW1wb3J0TGF5b3V0JywgSnNvbik7XG4gICB9XG5cbiAgIG1vdmUod2luZG93SWQ6IHN0cmluZywgcGFuZWw6IG51bWJlciwgcG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ21vdmUnLCB3aW5kb3dJZCwgcGFuZWwsIHBvc2l0aW9uKTtcbiAgIH1cblxuICAgcGluV2luZG93KHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdwaW5XaW5kb3cnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIHNldFdpbmRvd01vZGUod2luZG93SWQ6IHN0cmluZywgbW9kZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2V0V2luZG93TW9kZScsIHdpbmRvd0lkLCBtb2RlKTtcbiAgIH1cblxuICAgc2hvd0Nsb3NlQnV0dG9uKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzaG93Q2xvc2VCdXR0b24nLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIHNob3dDb2xsYXBzZUJ1dHRvbih3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2hvd0NvbGxhcHNlQnV0dG9uJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBzZXRXaW5kb3dQb3NpdGlvbih3aW5kb3dJZDogc3RyaW5nLCB0b3A6IGFueSwgbGVmdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2V0V2luZG93UG9zaXRpb24nLCB3aW5kb3dJZCwgdG9wLCBsZWZ0KTtcbiAgIH1cblxuICAgc2hvd0FsbENsb3NlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzaG93QWxsQ2xvc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIHNob3dBbGxDb2xsYXBzZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnc2hvd0FsbENvbGxhcHNlQnV0dG9ucycpO1xuICAgfVxuXG4gICB1bnBpbldpbmRvdyh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygndW5waW5XaW5kb3cnLCB3aW5kb3dJZCk7XG4gICB9XG5cblxuICAgLy8ganF4RG9ja2luZ0NvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnRW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnRW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhEb2NraW5nQ29tcG9uZW50XG4iXX0=