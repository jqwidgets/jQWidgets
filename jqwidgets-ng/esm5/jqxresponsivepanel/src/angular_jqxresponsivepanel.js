import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxresponsivepanel from '../../jqwidgets/jqxresponsivepanel';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxResponsivePanelComponent = /** @class */ (function () {
    function jqxResponsivePanelComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.ngOnInit = /**
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
    jqxResponsivePanelComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
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
    jqxResponsivePanelComponent.prototype.arraysEqual = /**
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
    jqxResponsivePanelComponent.prototype.manageAttributes = /**
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
    jqxResponsivePanelComponent.prototype.moveClasses = /**
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
    jqxResponsivePanelComponent.prototype.moveStyles = /**
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
    jqxResponsivePanelComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.__updateRect__ = /**
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
    jqxResponsivePanelComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxResponsivePanel('setOptions', options);
    };
    // jqxResponsivePanelComponent properties
    // jqxResponsivePanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationDirection = 
    // jqxResponsivePanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationShowDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.animationType = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.autoClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.collapseBreakpoint = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.collapseWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.toggleButton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.toggleButtonSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    };
    // jqxResponsivePanelComponent functions
    // jqxResponsivePanelComponent functions
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.close = 
    // jqxResponsivePanelComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('close');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('destroy');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.isCollapsed = /**
     * @return {?}
     */
    function () {
        return this.host.jqxResponsivePanel('isCollapsed');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.host.jqxResponsivePanel('isOpened');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('open');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('refresh');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxResponsivePanel('render');
    };
    /**
     * @return {?}
     */
    jqxResponsivePanelComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxResponsivePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxResponsivePanel',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxResponsivePanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxResponsivePanelComponent.propDecorators = {
        attrAnimationDirection: [{ type: Input, args: ['animationDirection',] }],
        attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
        attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAutoClose: [{ type: Input, args: ['autoClose',] }],
        attrCollapseBreakpoint: [{ type: Input, args: ['collapseBreakpoint',] }],
        attrCollapseWidth: [{ type: Input, args: ['collapseWidth',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToggleButton: [{ type: Input, args: ['toggleButton',] }],
        attrToggleButtonSize: [{ type: Input, args: ['toggleButtonSize',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onCollapse: [{ type: Output }],
        onExpand: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxResponsivePanelComponent;
}()); //jqxResponsivePanelComponent
export { jqxResponsivePanelComponent };
if (false) {
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationDirection;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrAutoClose;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrCollapseBreakpoint;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrCollapseWidth;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrTheme;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrToggleButton;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrToggleButtonSize;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrWidth;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.attrHeight;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.autoCreate;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.properties;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.host;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.elementRef;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.widgetObject;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onClose;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onCollapse;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onExpand;
    /** @type {?} */
    jqxResponsivePanelComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
