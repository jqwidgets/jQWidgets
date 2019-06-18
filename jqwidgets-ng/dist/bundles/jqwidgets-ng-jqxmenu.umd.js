require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxmenu');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxmenu', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxmenu = {}), global.ng.core));
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
    var jqxMenuComponent = /** @class */ (function () {
        function jqxMenuComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
            // jqxMenuComponent events
            this.onClosed = new core.EventEmitter();
            this.onItemclick = new core.EventEmitter();
            this.onShown = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxMenuComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxMenuComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
        jqxMenuComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxMenuComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxMenuComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxMenuComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxMenuComponent.prototype.createComponent = function (options) {
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
        jqxMenuComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxMenuComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxMenuComponent.prototype.setOptions = function (options) {
            this.host.jqxMenu('setOptions', options);
        };
        // jqxMenuComponent properties
        jqxMenuComponent.prototype.animationShowDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('animationShowDuration', arg);
            }
            else {
                return this.host.jqxMenu('animationShowDuration');
            }
        };
        jqxMenuComponent.prototype.animationHideDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('animationHideDuration', arg);
            }
            else {
                return this.host.jqxMenu('animationHideDuration');
            }
        };
        jqxMenuComponent.prototype.animationHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('animationHideDelay', arg);
            }
            else {
                return this.host.jqxMenu('animationHideDelay');
            }
        };
        jqxMenuComponent.prototype.animationShowDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('animationShowDelay', arg);
            }
            else {
                return this.host.jqxMenu('animationShowDelay');
            }
        };
        jqxMenuComponent.prototype.autoCloseInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoCloseInterval', arg);
            }
            else {
                return this.host.jqxMenu('autoCloseInterval');
            }
        };
        jqxMenuComponent.prototype.autoSizeMainItems = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoSizeMainItems', arg);
            }
            else {
                return this.host.jqxMenu('autoSizeMainItems');
            }
        };
        jqxMenuComponent.prototype.autoCloseOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoCloseOnClick', arg);
            }
            else {
                return this.host.jqxMenu('autoCloseOnClick');
            }
        };
        jqxMenuComponent.prototype.autoOpenPopup = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoOpenPopup', arg);
            }
            else {
                return this.host.jqxMenu('autoOpenPopup');
            }
        };
        jqxMenuComponent.prototype.autoOpen = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoOpen', arg);
            }
            else {
                return this.host.jqxMenu('autoOpen');
            }
        };
        jqxMenuComponent.prototype.autoCloseOnMouseLeave = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('autoCloseOnMouseLeave', arg);
            }
            else {
                return this.host.jqxMenu('autoCloseOnMouseLeave');
            }
        };
        jqxMenuComponent.prototype.clickToOpen = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('clickToOpen', arg);
            }
            else {
                return this.host.jqxMenu('clickToOpen');
            }
        };
        jqxMenuComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('disabled', arg);
            }
            else {
                return this.host.jqxMenu('disabled');
            }
        };
        jqxMenuComponent.prototype.enableHover = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('enableHover', arg);
            }
            else {
                return this.host.jqxMenu('enableHover');
            }
        };
        jqxMenuComponent.prototype.easing = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('easing', arg);
            }
            else {
                return this.host.jqxMenu('easing');
            }
        };
        jqxMenuComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('height', arg);
            }
            else {
                return this.host.jqxMenu('height');
            }
        };
        jqxMenuComponent.prototype.keyboardNavigation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('keyboardNavigation', arg);
            }
            else {
                return this.host.jqxMenu('keyboardNavigation');
            }
        };
        jqxMenuComponent.prototype.minimizeWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('minimizeWidth', arg);
            }
            else {
                return this.host.jqxMenu('minimizeWidth');
            }
        };
        jqxMenuComponent.prototype.mode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('mode', arg);
            }
            else {
                return this.host.jqxMenu('mode');
            }
        };
        jqxMenuComponent.prototype.popupZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('popupZIndex', arg);
            }
            else {
                return this.host.jqxMenu('popupZIndex');
            }
        };
        jqxMenuComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('rtl', arg);
            }
            else {
                return this.host.jqxMenu('rtl');
            }
        };
        jqxMenuComponent.prototype.showTopLevelArrows = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('showTopLevelArrows', arg);
            }
            else {
                return this.host.jqxMenu('showTopLevelArrows');
            }
        };
        jqxMenuComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('source', arg);
            }
            else {
                return this.host.jqxMenu('source');
            }
        };
        jqxMenuComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('theme', arg);
            }
            else {
                return this.host.jqxMenu('theme');
            }
        };
        jqxMenuComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxMenu('width', arg);
            }
            else {
                return this.host.jqxMenu('width');
            }
        };
        // jqxMenuComponent functions
        jqxMenuComponent.prototype.closeItem = function (itemID) {
            this.host.jqxMenu('closeItem', itemID);
        };
        jqxMenuComponent.prototype.close = function () {
            this.host.jqxMenu('close');
        };
        jqxMenuComponent.prototype.disable = function (itemID, value) {
            this.host.jqxMenu('disable', itemID, value);
        };
        jqxMenuComponent.prototype.destroy = function () {
            this.host.jqxMenu('destroy');
        };
        jqxMenuComponent.prototype.focus = function () {
            this.host.jqxMenu('focus');
        };
        jqxMenuComponent.prototype.minimize = function () {
            this.host.jqxMenu('minimize');
        };
        jqxMenuComponent.prototype.open = function (left, top) {
            this.host.jqxMenu('open', left, top);
        };
        jqxMenuComponent.prototype.openItem = function (itemID) {
            this.host.jqxMenu('openItem', itemID);
        };
        jqxMenuComponent.prototype.restore = function () {
            this.host.jqxMenu('restore');
        };
        jqxMenuComponent.prototype.setItemOpenDirection = function (item, horizontaldirection, verticaldirection) {
            this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
        };
        jqxMenuComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('closed', function (eventData) { _this.onClosed.emit(eventData); });
            this.host.on('itemclick', function (eventData) { _this.onItemclick.emit(eventData); });
            this.host.on('shown', function (eventData) { _this.onShown.emit(eventData); });
        };
        __decorate([
            core.Input('animationShowDuration'),
            __metadata("design:type", Number)
        ], jqxMenuComponent.prototype, "attrAnimationShowDuration", void 0);
        __decorate([
            core.Input('animationHideDuration'),
            __metadata("design:type", Number)
        ], jqxMenuComponent.prototype, "attrAnimationHideDuration", void 0);
        __decorate([
            core.Input('animationHideDelay'),
            __metadata("design:type", Number)
        ], jqxMenuComponent.prototype, "attrAnimationHideDelay", void 0);
        __decorate([
            core.Input('animationShowDelay'),
            __metadata("design:type", Number)
        ], jqxMenuComponent.prototype, "attrAnimationShowDelay", void 0);
        __decorate([
            core.Input('autoCloseInterval'),
            __metadata("design:type", Number)
        ], jqxMenuComponent.prototype, "attrAutoCloseInterval", void 0);
        __decorate([
            core.Input('autoSizeMainItems'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrAutoSizeMainItems", void 0);
        __decorate([
            core.Input('autoCloseOnClick'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrAutoCloseOnClick", void 0);
        __decorate([
            core.Input('autoOpenPopup'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrAutoOpenPopup", void 0);
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('autoCloseOnMouseLeave'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrAutoCloseOnMouseLeave", void 0);
        __decorate([
            core.Input('clickToOpen'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrClickToOpen", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('easing'),
            __metadata("design:type", String)
        ], jqxMenuComponent.prototype, "attrEasing", void 0);
        __decorate([
            core.Input('keyboardNavigation'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrKeyboardNavigation", void 0);
        __decorate([
            core.Input('minimizeWidth'),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "attrMinimizeWidth", void 0);
        __decorate([
            core.Input('mode'),
            __metadata("design:type", String)
        ], jqxMenuComponent.prototype, "attrMode", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showTopLevelArrows'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "attrShowTopLevelArrows", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxMenuComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxMenuComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "onClosed", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "onItemclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxMenuComponent.prototype, "onShown", void 0);
        jqxMenuComponent = __decorate([
            core.Component({
                selector: 'jqxMenu',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxMenuComponent);
        return jqxMenuComponent;
    }()); //jqxMenuComponent

    var jqxMenuModule = /** @class */ (function () {
        function jqxMenuModule() {
        }
        jqxMenuModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxMenuComponent],
                exports: [jqxMenuComponent]
            })
        ], jqxMenuModule);
        return jqxMenuModule;
    }());

    exports.jqxMenuComponent = jqxMenuComponent;
    exports.jqxMenuModule = jqxMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxmenu.umd.js.map
