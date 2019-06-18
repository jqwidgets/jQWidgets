require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdropdownbutton', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdropdownbutton = {}), global.ng.core));
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
    var jqxDropDownButtonComponent = /** @class */ (function () {
        function jqxDropDownButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width'];
            // jqxDropDownButtonComponent events
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDropDownButtonComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxDropDownButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                            this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDropDownButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDropDownButtonComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDropDownButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDropDownButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDropDownButtonComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
        };
        jqxDropDownButtonComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDropDownButtonComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDropDownButtonComponent.prototype.setOptions = function (options) {
            this.host.jqxDropDownButton('setOptions', options);
        };
        // jqxDropDownButtonComponent properties
        jqxDropDownButtonComponent.prototype.animationType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('animationType', arg);
            }
            else {
                return this.host.jqxDropDownButton('animationType');
            }
        };
        jqxDropDownButtonComponent.prototype.arrowSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('arrowSize', arg);
            }
            else {
                return this.host.jqxDropDownButton('arrowSize');
            }
        };
        jqxDropDownButtonComponent.prototype.autoOpen = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('autoOpen', arg);
            }
            else {
                return this.host.jqxDropDownButton('autoOpen');
            }
        };
        jqxDropDownButtonComponent.prototype.closeDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('closeDelay', arg);
            }
            else {
                return this.host.jqxDropDownButton('closeDelay');
            }
        };
        jqxDropDownButtonComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('disabled', arg);
            }
            else {
                return this.host.jqxDropDownButton('disabled');
            }
        };
        jqxDropDownButtonComponent.prototype.dropDownHorizontalAlignment = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
            }
            else {
                return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
            }
        };
        jqxDropDownButtonComponent.prototype.dropDownVerticalAlignment = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
            }
            else {
                return this.host.jqxDropDownButton('dropDownVerticalAlignment');
            }
        };
        jqxDropDownButtonComponent.prototype.dropDownWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('dropDownWidth', arg);
            }
            else {
                return this.host.jqxDropDownButton('dropDownWidth');
            }
        };
        jqxDropDownButtonComponent.prototype.enableBrowserBoundsDetection = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
            }
            else {
                return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
            }
        };
        jqxDropDownButtonComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('height', arg);
            }
            else {
                return this.host.jqxDropDownButton('height');
            }
        };
        jqxDropDownButtonComponent.prototype.initContent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('initContent', arg);
            }
            else {
                return this.host.jqxDropDownButton('initContent');
            }
        };
        jqxDropDownButtonComponent.prototype.openDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('openDelay', arg);
            }
            else {
                return this.host.jqxDropDownButton('openDelay');
            }
        };
        jqxDropDownButtonComponent.prototype.popupZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('popupZIndex', arg);
            }
            else {
                return this.host.jqxDropDownButton('popupZIndex');
            }
        };
        jqxDropDownButtonComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('rtl', arg);
            }
            else {
                return this.host.jqxDropDownButton('rtl');
            }
        };
        jqxDropDownButtonComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('template', arg);
            }
            else {
                return this.host.jqxDropDownButton('template');
            }
        };
        jqxDropDownButtonComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('theme', arg);
            }
            else {
                return this.host.jqxDropDownButton('theme');
            }
        };
        jqxDropDownButtonComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDropDownButton('width', arg);
            }
            else {
                return this.host.jqxDropDownButton('width');
            }
        };
        // jqxDropDownButtonComponent functions
        jqxDropDownButtonComponent.prototype.close = function () {
            this.host.jqxDropDownButton('close');
        };
        jqxDropDownButtonComponent.prototype.destroy = function () {
            this.host.jqxDropDownButton('destroy');
        };
        jqxDropDownButtonComponent.prototype.focus = function () {
            this.host.jqxDropDownButton('focus');
        };
        jqxDropDownButtonComponent.prototype.getContent = function () {
            return this.host.jqxDropDownButton('getContent');
        };
        jqxDropDownButtonComponent.prototype.isOpened = function () {
            return this.host.jqxDropDownButton('isOpened');
        };
        jqxDropDownButtonComponent.prototype.open = function () {
            this.host.jqxDropDownButton('open');
        };
        jqxDropDownButtonComponent.prototype.setContent = function (content) {
            this.host.jqxDropDownButton('setContent', content);
        };
        jqxDropDownButtonComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        };
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxDropDownButtonComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('arrowSize'),
            __metadata("design:type", Number)
        ], jqxDropDownButtonComponent.prototype, "attrArrowSize", void 0);
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxDropDownButtonComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('closeDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownButtonComponent.prototype, "attrCloseDelay", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDropDownButtonComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('dropDownHorizontalAlignment'),
            __metadata("design:type", String)
        ], jqxDropDownButtonComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
        __decorate([
            core.Input('dropDownVerticalAlignment'),
            __metadata("design:type", String)
        ], jqxDropDownButtonComponent.prototype, "attrDropDownVerticalAlignment", void 0);
        __decorate([
            core.Input('dropDownWidth'),
            __metadata("design:type", Object)
        ], jqxDropDownButtonComponent.prototype, "attrDropDownWidth", void 0);
        __decorate([
            core.Input('enableBrowserBoundsDetection'),
            __metadata("design:type", Boolean)
        ], jqxDropDownButtonComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
        __decorate([
            core.Input('initContent'),
            __metadata("design:type", Function)
        ], jqxDropDownButtonComponent.prototype, "attrInitContent", void 0);
        __decorate([
            core.Input('openDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownButtonComponent.prototype, "attrOpenDelay", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Number)
        ], jqxDropDownButtonComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxDropDownButtonComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxDropDownButtonComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxDropDownButtonComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDropDownButtonComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDropDownButtonComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDropDownButtonComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownButtonComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownButtonComponent.prototype, "onOpen", void 0);
        jqxDropDownButtonComponent = __decorate([
            core.Component({
                selector: 'jqxDropDownButton',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDropDownButtonComponent);
        return jqxDropDownButtonComponent;
    }()); //jqxDropDownButtonComponent

    var jqxDropDownButtonModule = /** @class */ (function () {
        function jqxDropDownButtonModule() {
        }
        jqxDropDownButtonModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDropDownButtonComponent],
                exports: [jqxDropDownButtonComponent]
            })
        ], jqxDropDownButtonModule);
        return jqxDropDownButtonModule;
    }());

    exports.jqxDropDownButtonComponent = jqxDropDownButtonComponent;
    exports.jqxDropDownButtonModule = jqxDropDownButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxdropdownbutton.umd.js.map
