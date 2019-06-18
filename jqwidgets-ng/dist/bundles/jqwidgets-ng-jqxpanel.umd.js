require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxpanel');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpanel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpanel = {}), global.ng.core));
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
    var jqxPanelComponent = /** @class */ (function () {
        function jqxPanelComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
            this.elementRef = containerElement;
        }
        jqxPanelComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxPanelComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxPanel(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                            this.host.jqxPanel(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxPanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxPanelComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxPanelComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxPanelComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxPanelComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
        };
        jqxPanelComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxPanelComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxPanelComponent.prototype.setOptions = function (options) {
            this.host.jqxPanel('setOptions', options);
        };
        // jqxPanelComponent properties
        jqxPanelComponent.prototype.autoUpdate = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('autoUpdate', arg);
            }
            else {
                return this.host.jqxPanel('autoUpdate');
            }
        };
        jqxPanelComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('disabled', arg);
            }
            else {
                return this.host.jqxPanel('disabled');
            }
        };
        jqxPanelComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('height', arg);
            }
            else {
                return this.host.jqxPanel('height');
            }
        };
        jqxPanelComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('rtl', arg);
            }
            else {
                return this.host.jqxPanel('rtl');
            }
        };
        jqxPanelComponent.prototype.sizeMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('sizeMode', arg);
            }
            else {
                return this.host.jqxPanel('sizeMode');
            }
        };
        jqxPanelComponent.prototype.scrollBarSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('scrollBarSize', arg);
            }
            else {
                return this.host.jqxPanel('scrollBarSize');
            }
        };
        jqxPanelComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('theme', arg);
            }
            else {
                return this.host.jqxPanel('theme');
            }
        };
        jqxPanelComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPanel('width', arg);
            }
            else {
                return this.host.jqxPanel('width');
            }
        };
        // jqxPanelComponent functions
        jqxPanelComponent.prototype.append = function (HTMLElement) {
            this.host.jqxPanel('append', HTMLElement);
        };
        jqxPanelComponent.prototype.clearcontent = function () {
            this.host.jqxPanel('clearcontent');
        };
        jqxPanelComponent.prototype.destroy = function () {
            this.host.jqxPanel('destroy');
        };
        jqxPanelComponent.prototype.focus = function () {
            this.host.jqxPanel('focus');
        };
        jqxPanelComponent.prototype.getScrollHeight = function () {
            return this.host.jqxPanel('getScrollHeight');
        };
        jqxPanelComponent.prototype.getVScrollPosition = function () {
            return this.host.jqxPanel('getVScrollPosition');
        };
        jqxPanelComponent.prototype.getScrollWidth = function () {
            return this.host.jqxPanel('getScrollWidth');
        };
        jqxPanelComponent.prototype.getHScrollPosition = function () {
            return this.host.jqxPanel('getHScrollPosition');
        };
        jqxPanelComponent.prototype.prepend = function (HTMLElement) {
            this.host.jqxPanel('prepend', HTMLElement);
        };
        jqxPanelComponent.prototype.remove = function (HTMLElement) {
            this.host.jqxPanel('remove', HTMLElement);
        };
        jqxPanelComponent.prototype.scrollTo = function (left, top) {
            this.host.jqxPanel('scrollTo', left, top);
        };
        // jqxPanelComponent events
        jqxPanelComponent.prototype.__wireEvents__ = function () {
        };
        __decorate([
            core.Input('autoUpdate'),
            __metadata("design:type", Boolean)
        ], jqxPanelComponent.prototype, "attrAutoUpdate", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxPanelComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxPanelComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('sizeMode'),
            __metadata("design:type", String)
        ], jqxPanelComponent.prototype, "attrSizeMode", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Object)
        ], jqxPanelComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxPanelComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxPanelComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxPanelComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxPanelComponent.prototype, "autoCreate", void 0);
        jqxPanelComponent = __decorate([
            core.Component({
                selector: 'jqxPanel',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxPanelComponent);
        return jqxPanelComponent;
    }()); //jqxPanelComponent

    var jqxPanelModule = /** @class */ (function () {
        function jqxPanelModule() {
        }
        jqxPanelModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxPanelComponent],
                exports: [jqxPanelComponent]
            })
        ], jqxPanelModule);
        return jqxPanelModule;
    }());

    exports.jqxPanelComponent = jqxPanelComponent;
    exports.jqxPanelModule = jqxPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxpanel.umd.js.map
