require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxscrollbar', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxscrollbar = {}), global.ng.core));
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
    var jqxScrollBarComponent = /** @class */ (function () {
        function jqxScrollBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
            // jqxScrollBarComponent events
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxScrollBarComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxScrollBarComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxScrollBar(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                            this.host.jqxScrollBar(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxScrollBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxScrollBarComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxScrollBarComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxScrollBarComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxScrollBarComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
        };
        jqxScrollBarComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxScrollBarComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxScrollBarComponent.prototype.setOptions = function (options) {
            this.host.jqxScrollBar('setOptions', options);
        };
        // jqxScrollBarComponent properties
        jqxScrollBarComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('disabled', arg);
            }
            else {
                return this.host.jqxScrollBar('disabled');
            }
        };
        jqxScrollBarComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('height', arg);
            }
            else {
                return this.host.jqxScrollBar('height');
            }
        };
        jqxScrollBarComponent.prototype.largestep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('largestep', arg);
            }
            else {
                return this.host.jqxScrollBar('largestep');
            }
        };
        jqxScrollBarComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('min', arg);
            }
            else {
                return this.host.jqxScrollBar('min');
            }
        };
        jqxScrollBarComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('max', arg);
            }
            else {
                return this.host.jqxScrollBar('max');
            }
        };
        jqxScrollBarComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('rtl', arg);
            }
            else {
                return this.host.jqxScrollBar('rtl');
            }
        };
        jqxScrollBarComponent.prototype.step = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('step', arg);
            }
            else {
                return this.host.jqxScrollBar('step');
            }
        };
        jqxScrollBarComponent.prototype.showButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('showButtons', arg);
            }
            else {
                return this.host.jqxScrollBar('showButtons');
            }
        };
        jqxScrollBarComponent.prototype.thumbMinSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('thumbMinSize', arg);
            }
            else {
                return this.host.jqxScrollBar('thumbMinSize');
            }
        };
        jqxScrollBarComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('theme', arg);
            }
            else {
                return this.host.jqxScrollBar('theme');
            }
        };
        jqxScrollBarComponent.prototype.vertical = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('vertical', arg);
            }
            else {
                return this.host.jqxScrollBar('vertical');
            }
        };
        jqxScrollBarComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('value', arg);
            }
            else {
                return this.host.jqxScrollBar('value');
            }
        };
        jqxScrollBarComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollBar('width', arg);
            }
            else {
                return this.host.jqxScrollBar('width');
            }
        };
        // jqxScrollBarComponent functions
        jqxScrollBarComponent.prototype.destroy = function () {
            this.host.jqxScrollBar('destroy');
        };
        jqxScrollBarComponent.prototype.isScrolling = function () {
            return this.host.jqxScrollBar('isScrolling');
        };
        jqxScrollBarComponent.prototype.setPosition = function (index) {
            this.host.jqxScrollBar('setPosition', index);
        };
        jqxScrollBarComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxScrollBarComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('largestep'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrLargestep", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxScrollBarComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('step'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrStep", void 0);
        __decorate([
            core.Input('showButtons'),
            __metadata("design:type", Boolean)
        ], jqxScrollBarComponent.prototype, "attrShowButtons", void 0);
        __decorate([
            core.Input('thumbMinSize'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrThumbMinSize", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxScrollBarComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('vertical'),
            __metadata("design:type", Boolean)
        ], jqxScrollBarComponent.prototype, "attrVertical", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Number)
        ], jqxScrollBarComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxScrollBarComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxScrollBarComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxScrollBarComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxScrollBarComponent.prototype, "onValueChanged", void 0);
        jqxScrollBarComponent = __decorate([
            core.Component({
                selector: 'jqxScrollBar',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxScrollBarComponent);
        return jqxScrollBarComponent;
    }()); //jqxScrollBarComponent

    var jqxScrollBarModule = /** @class */ (function () {
        function jqxScrollBarModule() {
        }
        jqxScrollBarModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxScrollBarComponent],
                exports: [jqxScrollBarComponent]
            })
        ], jqxScrollBarModule);
        return jqxScrollBarModule;
    }());

    exports.jqxScrollBarComponent = jqxScrollBarComponent;
    exports.jqxScrollBarModule = jqxScrollBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxscrollbar.umd.js.map
