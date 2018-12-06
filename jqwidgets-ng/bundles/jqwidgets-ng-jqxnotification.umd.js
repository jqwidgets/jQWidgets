require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxnotification');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnotification', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnotification = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxNotificationComponent = /** @class */ (function () {
        function jqxNotificationComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
            // jqxNotificationComponent events
            this.onClose = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
            { type: core.Component, args: [{
                        selector: 'jqxNotification',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxNotificationComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxNotificationComponent.propDecorators = {
            attrAppendContainer: [{ type: core.Input, args: ['appendContainer',] }],
            attrAutoOpen: [{ type: core.Input, args: ['autoOpen',] }],
            attrAnimationOpenDelay: [{ type: core.Input, args: ['animationOpenDelay',] }],
            attrAnimationCloseDelay: [{ type: core.Input, args: ['animationCloseDelay',] }],
            attrAutoClose: [{ type: core.Input, args: ['autoClose',] }],
            attrAutoCloseDelay: [{ type: core.Input, args: ['autoCloseDelay',] }],
            attrBlink: [{ type: core.Input, args: ['blink',] }],
            attrBrowserBoundsOffset: [{ type: core.Input, args: ['browserBoundsOffset',] }],
            attrCloseOnClick: [{ type: core.Input, args: ['closeOnClick',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrHoverOpacity: [{ type: core.Input, args: ['hoverOpacity',] }],
            attrIcon: [{ type: core.Input, args: ['icon',] }],
            attrNotificationOffset: [{ type: core.Input, args: ['notificationOffset',] }],
            attrOpacity: [{ type: core.Input, args: ['opacity',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrShowCloseButton: [{ type: core.Input, args: ['showCloseButton',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onClick: [{ type: core.Output }],
            onOpen: [{ type: core.Output }]
        };
        return jqxNotificationComponent;
    }()); //jqxNotificationComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxNotificationModule = /** @class */ (function () {
        function jqxNotificationModule() {
        }
        jqxNotificationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxNotificationComponent],
                        exports: [jqxNotificationComponent]
                    },] }
        ];
        return jqxNotificationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxNotificationComponent = jqxNotificationComponent;
    exports.jqxNotificationModule = jqxNotificationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

