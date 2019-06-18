require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxnavbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnavbar', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnavbar = {}), global.ng.core));
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
    var jqxNavBarComponent = /** @class */ (function () {
        function jqxNavBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
            // jqxNavBarComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxNavBarComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxNavBarComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxNavBar(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                            this.host.jqxNavBar(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxNavBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxNavBarComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxNavBarComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxNavBarComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxNavBarComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
        };
        jqxNavBarComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxNavBarComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxNavBarComponent.prototype.setOptions = function (options) {
            this.host.jqxNavBar('setOptions', options);
        };
        // jqxNavBarComponent properties
        jqxNavBarComponent.prototype.columns = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('columns', arg);
            }
            else {
                return this.host.jqxNavBar('columns');
            }
        };
        jqxNavBarComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('disabled', arg);
            }
            else {
                return this.host.jqxNavBar('disabled');
            }
        };
        jqxNavBarComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('height', arg);
            }
            else {
                return this.host.jqxNavBar('height');
            }
        };
        jqxNavBarComponent.prototype.minimized = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('minimized', arg);
            }
            else {
                return this.host.jqxNavBar('minimized');
            }
        };
        jqxNavBarComponent.prototype.minimizeButtonPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('minimizeButtonPosition', arg);
            }
            else {
                return this.host.jqxNavBar('minimizeButtonPosition');
            }
        };
        jqxNavBarComponent.prototype.minimizedHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('minimizedHeight', arg);
            }
            else {
                return this.host.jqxNavBar('minimizedHeight');
            }
        };
        jqxNavBarComponent.prototype.minimizedTitle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('minimizedTitle', arg);
            }
            else {
                return this.host.jqxNavBar('minimizedTitle');
            }
        };
        jqxNavBarComponent.prototype.orientation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('orientation', arg);
            }
            else {
                return this.host.jqxNavBar('orientation');
            }
        };
        jqxNavBarComponent.prototype.popupAnimationDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('popupAnimationDelay', arg);
            }
            else {
                return this.host.jqxNavBar('popupAnimationDelay');
            }
        };
        jqxNavBarComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('rtl', arg);
            }
            else {
                return this.host.jqxNavBar('rtl');
            }
        };
        jqxNavBarComponent.prototype.selection = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('selection', arg);
            }
            else {
                return this.host.jqxNavBar('selection');
            }
        };
        jqxNavBarComponent.prototype.selectedItem = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('selectedItem', arg);
            }
            else {
                return this.host.jqxNavBar('selectedItem');
            }
        };
        jqxNavBarComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('theme', arg);
            }
            else {
                return this.host.jqxNavBar('theme');
            }
        };
        jqxNavBarComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNavBar('width', arg);
            }
            else {
                return this.host.jqxNavBar('width');
            }
        };
        // jqxNavBarComponent functions
        jqxNavBarComponent.prototype.close = function () {
            this.host.jqxNavBar('close');
        };
        jqxNavBarComponent.prototype.destroy = function () {
            this.host.jqxNavBar('destroy');
        };
        jqxNavBarComponent.prototype.getSelectedIndex = function () {
            return this.host.jqxNavBar('getSelectedIndex');
        };
        jqxNavBarComponent.prototype.open = function () {
            this.host.jqxNavBar('open');
        };
        jqxNavBarComponent.prototype.selectAt = function (index) {
            this.host.jqxNavBar('selectAt', index);
        };
        jqxNavBarComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        __decorate([
            core.Input('columns'),
            __metadata("design:type", Array)
        ], jqxNavBarComponent.prototype, "attrColumns", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxNavBarComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('minimized'),
            __metadata("design:type", Boolean)
        ], jqxNavBarComponent.prototype, "attrMinimized", void 0);
        __decorate([
            core.Input('minimizeButtonPosition'),
            __metadata("design:type", String)
        ], jqxNavBarComponent.prototype, "attrMinimizeButtonPosition", void 0);
        __decorate([
            core.Input('minimizedHeight'),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "attrMinimizedHeight", void 0);
        __decorate([
            core.Input('minimizedTitle'),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "attrMinimizedTitle", void 0);
        __decorate([
            core.Input('orientation'),
            __metadata("design:type", String)
        ], jqxNavBarComponent.prototype, "attrOrientation", void 0);
        __decorate([
            core.Input('popupAnimationDelay'),
            __metadata("design:type", Number)
        ], jqxNavBarComponent.prototype, "attrPopupAnimationDelay", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxNavBarComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('selection'),
            __metadata("design:type", Boolean)
        ], jqxNavBarComponent.prototype, "attrSelection", void 0);
        __decorate([
            core.Input('selectedItem'),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "attrSelectedItem", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxNavBarComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxNavBarComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNavBarComponent.prototype, "onChange", void 0);
        jqxNavBarComponent = __decorate([
            core.Component({
                selector: 'jqxNavBar',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxNavBarComponent);
        return jqxNavBarComponent;
    }()); //jqxNavBarComponent

    var jqxNavBarModule = /** @class */ (function () {
        function jqxNavBarModule() {
        }
        jqxNavBarModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxNavBarComponent],
                exports: [jqxNavBarComponent]
            })
        ], jqxNavBarModule);
        return jqxNavBarModule;
    }());

    exports.jqxNavBarComponent = jqxNavBarComponent;
    exports.jqxNavBarModule = jqxNavBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxnavbar.umd.js.map
