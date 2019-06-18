require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');
require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');
require('../../jqwidgets-scripts/jqwidgets/jqxcolorpicker');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcolorpicker', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcolorpicker = {}), global.ng.core));
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
    var jqxColorPickerComponent = /** @class */ (function () {
        function jqxColorPickerComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['color', 'colorMode', 'disabled', 'height', 'showTransparent', 'width'];
            // jqxColorPickerComponent events
            this.onColorchange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxColorPickerComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxColorPickerComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxColorPicker(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxColorPicker(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxColorPicker(this.properties[i])) {
                            this.host.jqxColorPicker(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxColorPickerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxColorPickerComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxColorPickerComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxColorPickerComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxColorPickerComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
        };
        jqxColorPickerComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxColorPickerComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxColorPickerComponent.prototype.setOptions = function (options) {
            this.host.jqxColorPicker('setOptions', options);
        };
        // jqxColorPickerComponent properties
        jqxColorPickerComponent.prototype.color = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('color', arg);
            }
            else {
                return this.host.jqxColorPicker('color');
            }
        };
        jqxColorPickerComponent.prototype.colorMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('colorMode', arg);
            }
            else {
                return this.host.jqxColorPicker('colorMode');
            }
        };
        jqxColorPickerComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('disabled', arg);
            }
            else {
                return this.host.jqxColorPicker('disabled');
            }
        };
        jqxColorPickerComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('height', arg);
            }
            else {
                return this.host.jqxColorPicker('height');
            }
        };
        jqxColorPickerComponent.prototype.showTransparent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('showTransparent', arg);
            }
            else {
                return this.host.jqxColorPicker('showTransparent');
            }
        };
        jqxColorPickerComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxColorPicker('width', arg);
            }
            else {
                return this.host.jqxColorPicker('width');
            }
        };
        // jqxColorPickerComponent functions
        jqxColorPickerComponent.prototype.getColor = function () {
            return this.host.jqxColorPicker('getColor');
        };
        jqxColorPickerComponent.prototype.setColor = function (color) {
            this.host.jqxColorPicker('setColor', color);
        };
        jqxColorPickerComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('colorchange', function (eventData) { _this.onColorchange.emit(eventData); });
        };
        __decorate([
            core.Input('color'),
            __metadata("design:type", String)
        ], jqxColorPickerComponent.prototype, "attrColor", void 0);
        __decorate([
            core.Input('colorMode'),
            __metadata("design:type", String)
        ], jqxColorPickerComponent.prototype, "attrColorMode", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxColorPickerComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('showTransparent'),
            __metadata("design:type", Boolean)
        ], jqxColorPickerComponent.prototype, "attrShowTransparent", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxColorPickerComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxColorPickerComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxColorPickerComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxColorPickerComponent.prototype, "onColorchange", void 0);
        jqxColorPickerComponent = __decorate([
            core.Component({
                selector: 'jqxColorPicker',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxColorPickerComponent);
        return jqxColorPickerComponent;
    }()); //jqxColorPickerComponent

    var jqxColorPickerModule = /** @class */ (function () {
        function jqxColorPickerModule() {
        }
        jqxColorPickerModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxColorPickerComponent],
                exports: [jqxColorPickerComponent]
            })
        ], jqxColorPickerModule);
        return jqxColorPickerModule;
    }());

    exports.jqxColorPickerComponent = jqxColorPickerComponent;
    exports.jqxColorPickerModule = jqxColorPickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxcolorpicker.umd.js.map
