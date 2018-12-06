import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxnotification from '../../jqwidgets/jqxnotification';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxNotificationComponent = /** @class */ (function () {
    function jqxNotificationComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
        // jqxNotificationComponent events
        this.onClose = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.ngOnInit = /**
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
    jqxNotificationComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                        this.host.jqxNotification(this.properties[i], this[attrName]);
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
    jqxNotificationComponent.prototype.arraysEqual = /**
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
    jqxNotificationComponent.prototype.manageAttributes = /**
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
    jqxNotificationComponent.prototype.moveClasses = /**
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
    jqxNotificationComponent.prototype.moveStyles = /**
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
    jqxNotificationComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxNotificationComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.__updateRect__ = /**
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
    jqxNotificationComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxNotification('setOptions', options);
    };
    // jqxNotificationComponent properties
    // jqxNotificationComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.appendContainer = 
    // jqxNotificationComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('appendContainer', arg);
        }
        else {
            return this.host.jqxNotification('appendContainer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.autoOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoOpen', arg);
        }
        else {
            return this.host.jqxNotification('autoOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.animationOpenDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationOpenDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.animationCloseDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationCloseDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.autoClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoClose', arg);
        }
        else {
            return this.host.jqxNotification('autoClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.autoCloseDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('autoCloseDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.blink = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('blink', arg);
        }
        else {
            return this.host.jqxNotification('blink');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.browserBoundsOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('browserBoundsOffset', arg);
        }
        else {
            return this.host.jqxNotification('browserBoundsOffset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.closeOnClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('closeOnClick', arg);
        }
        else {
            return this.host.jqxNotification('closeOnClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('disabled', arg);
        }
        else {
            return this.host.jqxNotification('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('height', arg);
        }
        else {
            return this.host.jqxNotification('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.hoverOpacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('hoverOpacity', arg);
        }
        else {
            return this.host.jqxNotification('hoverOpacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.icon = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('icon', arg);
        }
        else {
            return this.host.jqxNotification('icon');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.notificationOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('notificationOffset', arg);
        }
        else {
            return this.host.jqxNotification('notificationOffset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.opacity = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('opacity', arg);
        }
        else {
            return this.host.jqxNotification('opacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('position', arg);
        }
        else {
            return this.host.jqxNotification('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('rtl', arg);
        }
        else {
            return this.host.jqxNotification('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.showCloseButton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('showCloseButton', arg);
        }
        else {
            return this.host.jqxNotification('showCloseButton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('template', arg);
        }
        else {
            return this.host.jqxNotification('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('theme', arg);
        }
        else {
            return this.host.jqxNotification('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNotificationComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('width', arg);
        }
        else {
            return this.host.jqxNotification('width');
        }
    };
    // jqxNotificationComponent functions
    // jqxNotificationComponent functions
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.closeAll = 
    // jqxNotificationComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('closeAll');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.closeLast = /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('closeLast');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('destroy');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('open');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('refresh');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxNotification('render');
    };
    /**
     * @return {?}
     */
    jqxNotificationComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxNotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxNotification',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxNotificationComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxNotificationComponent.propDecorators = {
        attrAppendContainer: [{ type: Input, args: ['appendContainer',] }],
        attrAutoOpen: [{ type: Input, args: ['autoOpen',] }],
        attrAnimationOpenDelay: [{ type: Input, args: ['animationOpenDelay',] }],
        attrAnimationCloseDelay: [{ type: Input, args: ['animationCloseDelay',] }],
        attrAutoClose: [{ type: Input, args: ['autoClose',] }],
        attrAutoCloseDelay: [{ type: Input, args: ['autoCloseDelay',] }],
        attrBlink: [{ type: Input, args: ['blink',] }],
        attrBrowserBoundsOffset: [{ type: Input, args: ['browserBoundsOffset',] }],
        attrCloseOnClick: [{ type: Input, args: ['closeOnClick',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrHoverOpacity: [{ type: Input, args: ['hoverOpacity',] }],
        attrIcon: [{ type: Input, args: ['icon',] }],
        attrNotificationOffset: [{ type: Input, args: ['notificationOffset',] }],
        attrOpacity: [{ type: Input, args: ['opacity',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowCloseButton: [{ type: Input, args: ['showCloseButton',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onClick: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxNotificationComponent;
}()); //jqxNotificationComponent
export { jqxNotificationComponent };
if (false) {
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAppendContainer;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAutoOpen;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAnimationOpenDelay;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAnimationCloseDelay;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAutoClose;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrAutoCloseDelay;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrBlink;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrBrowserBoundsOffset;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrCloseOnClick;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrHoverOpacity;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrIcon;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrNotificationOffset;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrOpacity;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrPosition;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrRtl;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrShowCloseButton;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrTheme;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrWidth;
    /** @type {?} */
    jqxNotificationComponent.prototype.attrHeight;
    /** @type {?} */
    jqxNotificationComponent.prototype.autoCreate;
    /** @type {?} */
    jqxNotificationComponent.prototype.properties;
    /** @type {?} */
    jqxNotificationComponent.prototype.host;
    /** @type {?} */
    jqxNotificationComponent.prototype.elementRef;
    /** @type {?} */
    jqxNotificationComponent.prototype.widgetObject;
    /** @type {?} */
    jqxNotificationComponent.prototype.onClose;
    /** @type {?} */
    jqxNotificationComponent.prototype.onClick;
    /** @type {?} */
    jqxNotificationComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
