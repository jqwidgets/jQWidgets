require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxnotification');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnotification', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnotification = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /// <reference path="../../jqwidgets.d.ts" />
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
        jqxNotificationComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxNotificationComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
        jqxNotificationComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxNotificationComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxNotificationComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxNotificationComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxNotificationComponent.prototype.createComponent = function (options) {
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
        jqxNotificationComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxNotificationComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxNotificationComponent.prototype.setOptions = function (options) {
            this.host.jqxNotification('setOptions', options);
        };
        // jqxNotificationComponent properties
        jqxNotificationComponent.prototype.appendContainer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('appendContainer', arg);
            }
            else {
                return this.host.jqxNotification('appendContainer');
            }
        };
        jqxNotificationComponent.prototype.autoOpen = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('autoOpen', arg);
            }
            else {
                return this.host.jqxNotification('autoOpen');
            }
        };
        jqxNotificationComponent.prototype.animationOpenDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('animationOpenDelay', arg);
            }
            else {
                return this.host.jqxNotification('animationOpenDelay');
            }
        };
        jqxNotificationComponent.prototype.animationCloseDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('animationCloseDelay', arg);
            }
            else {
                return this.host.jqxNotification('animationCloseDelay');
            }
        };
        jqxNotificationComponent.prototype.autoClose = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('autoClose', arg);
            }
            else {
                return this.host.jqxNotification('autoClose');
            }
        };
        jqxNotificationComponent.prototype.autoCloseDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('autoCloseDelay', arg);
            }
            else {
                return this.host.jqxNotification('autoCloseDelay');
            }
        };
        jqxNotificationComponent.prototype.blink = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('blink', arg);
            }
            else {
                return this.host.jqxNotification('blink');
            }
        };
        jqxNotificationComponent.prototype.browserBoundsOffset = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('browserBoundsOffset', arg);
            }
            else {
                return this.host.jqxNotification('browserBoundsOffset');
            }
        };
        jqxNotificationComponent.prototype.closeOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('closeOnClick', arg);
            }
            else {
                return this.host.jqxNotification('closeOnClick');
            }
        };
        jqxNotificationComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('disabled', arg);
            }
            else {
                return this.host.jqxNotification('disabled');
            }
        };
        jqxNotificationComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('height', arg);
            }
            else {
                return this.host.jqxNotification('height');
            }
        };
        jqxNotificationComponent.prototype.hoverOpacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('hoverOpacity', arg);
            }
            else {
                return this.host.jqxNotification('hoverOpacity');
            }
        };
        jqxNotificationComponent.prototype.icon = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('icon', arg);
            }
            else {
                return this.host.jqxNotification('icon');
            }
        };
        jqxNotificationComponent.prototype.notificationOffset = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('notificationOffset', arg);
            }
            else {
                return this.host.jqxNotification('notificationOffset');
            }
        };
        jqxNotificationComponent.prototype.opacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('opacity', arg);
            }
            else {
                return this.host.jqxNotification('opacity');
            }
        };
        jqxNotificationComponent.prototype.position = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('position', arg);
            }
            else {
                return this.host.jqxNotification('position');
            }
        };
        jqxNotificationComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('rtl', arg);
            }
            else {
                return this.host.jqxNotification('rtl');
            }
        };
        jqxNotificationComponent.prototype.showCloseButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('showCloseButton', arg);
            }
            else {
                return this.host.jqxNotification('showCloseButton');
            }
        };
        jqxNotificationComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('template', arg);
            }
            else {
                return this.host.jqxNotification('template');
            }
        };
        jqxNotificationComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('theme', arg);
            }
            else {
                return this.host.jqxNotification('theme');
            }
        };
        jqxNotificationComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNotification('width', arg);
            }
            else {
                return this.host.jqxNotification('width');
            }
        };
        // jqxNotificationComponent functions
        jqxNotificationComponent.prototype.closeAll = function () {
            this.host.jqxNotification('closeAll');
        };
        jqxNotificationComponent.prototype.closeLast = function () {
            this.host.jqxNotification('closeLast');
        };
        jqxNotificationComponent.prototype.destroy = function () {
            this.host.jqxNotification('destroy');
        };
        jqxNotificationComponent.prototype.open = function () {
            this.host.jqxNotification('open');
        };
        jqxNotificationComponent.prototype.refresh = function () {
            this.host.jqxNotification('refresh');
        };
        jqxNotificationComponent.prototype.render = function () {
            this.host.jqxNotification('render');
        };
        jqxNotificationComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        };
        __decorate([
            core.Input('appendContainer'),
            __metadata("design:type", String)
        ], jqxNotificationComponent.prototype, "attrAppendContainer", void 0);
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('animationOpenDelay'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrAnimationOpenDelay", void 0);
        __decorate([
            core.Input('animationCloseDelay'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrAnimationCloseDelay", void 0);
        __decorate([
            core.Input('autoClose'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrAutoClose", void 0);
        __decorate([
            core.Input('autoCloseDelay'),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "attrAutoCloseDelay", void 0);
        __decorate([
            core.Input('blink'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrBlink", void 0);
        __decorate([
            core.Input('browserBoundsOffset'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrBrowserBoundsOffset", void 0);
        __decorate([
            core.Input('closeOnClick'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrCloseOnClick", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('hoverOpacity'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrHoverOpacity", void 0);
        __decorate([
            core.Input('icon'),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "attrIcon", void 0);
        __decorate([
            core.Input('notificationOffset'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrNotificationOffset", void 0);
        __decorate([
            core.Input('opacity'),
            __metadata("design:type", Number)
        ], jqxNotificationComponent.prototype, "attrOpacity", void 0);
        __decorate([
            core.Input('position'),
            __metadata("design:type", String)
        ], jqxNotificationComponent.prototype, "attrPosition", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showCloseButton'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "attrShowCloseButton", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxNotificationComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxNotificationComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxNotificationComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "onClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNotificationComponent.prototype, "onOpen", void 0);
        jqxNotificationComponent = __decorate([
            core.Component({
                selector: 'jqxNotification',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxNotificationComponent);
        return jqxNotificationComponent;
    }()); //jqxNotificationComponent

    var jqxNotificationModule = /** @class */ (function () {
        function jqxNotificationModule() {
        }
        jqxNotificationModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxNotificationComponent],
                exports: [jqxNotificationComponent]
            })
        ], jqxNotificationModule);
        return jqxNotificationModule;
    }());

    exports.jqxNotificationComponent = jqxNotificationComponent;
    exports.jqxNotificationModule = jqxNotificationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxnotification.umd.js.map
