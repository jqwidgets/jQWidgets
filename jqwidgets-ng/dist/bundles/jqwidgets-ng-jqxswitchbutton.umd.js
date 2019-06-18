require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxswitchbutton');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxswitchbutton', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxswitchbutton = {}), global.ng.core, global.ng.forms));
}(this, function (exports, core, forms) { 'use strict';

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
    var noop = function () { };
    var ɵ0 = noop;
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxSwitchButtonComponent; }),
        multi: true
    };
    var jqxSwitchButtonComponent = /** @class */ (function () {
        function jqxSwitchButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'rtl', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxSwitchButtonComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxSwitchButtonComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxSwitchButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                            this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxSwitchButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxSwitchButtonComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxSwitchButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxSwitchButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxSwitchButtonComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
        };
        jqxSwitchButtonComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxSwitchButtonComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxSwitchButtonComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxSwitchButtonComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxSwitchButtonComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxSwitchButtonComponent.prototype.setOptions = function (options) {
            this.host.jqxSwitchButton('setOptions', options);
        };
        // jqxSwitchButtonComponent properties
        jqxSwitchButtonComponent.prototype.checked = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('checked', arg);
            }
            else {
                return this.host.jqxSwitchButton('checked');
            }
        };
        jqxSwitchButtonComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('disabled', arg);
            }
            else {
                return this.host.jqxSwitchButton('disabled');
            }
        };
        jqxSwitchButtonComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('height', arg);
            }
            else {
                return this.host.jqxSwitchButton('height');
            }
        };
        jqxSwitchButtonComponent.prototype.orientation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('orientation', arg);
            }
            else {
                return this.host.jqxSwitchButton('orientation');
            }
        };
        jqxSwitchButtonComponent.prototype.onLabel = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('onLabel', arg);
            }
            else {
                return this.host.jqxSwitchButton('onLabel');
            }
        };
        jqxSwitchButtonComponent.prototype.offLabel = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('offLabel', arg);
            }
            else {
                return this.host.jqxSwitchButton('offLabel');
            }
        };
        jqxSwitchButtonComponent.prototype.thumbSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('thumbSize', arg);
            }
            else {
                return this.host.jqxSwitchButton('thumbSize');
            }
        };
        jqxSwitchButtonComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('rtl', arg);
            }
            else {
                return this.host.jqxSwitchButton('rtl');
            }
        };
        jqxSwitchButtonComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSwitchButton('width', arg);
            }
            else {
                return this.host.jqxSwitchButton('width');
            }
        };
        // jqxSwitchButtonComponent functions
        jqxSwitchButtonComponent.prototype.check = function () {
            this.host.jqxSwitchButton('check');
        };
        jqxSwitchButtonComponent.prototype.disable = function () {
            this.host.jqxSwitchButton('disable');
        };
        jqxSwitchButtonComponent.prototype.enable = function () {
            this.host.jqxSwitchButton('enable');
        };
        jqxSwitchButtonComponent.prototype.toggle = function () {
            this.host.jqxSwitchButton('toggle');
        };
        jqxSwitchButtonComponent.prototype.uncheck = function () {
            this.host.jqxSwitchButton('uncheck');
        };
        jqxSwitchButtonComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxSwitchButton('val', value);
            }
            else {
                return this.host.jqxSwitchButton('val');
            }
        };
        jqxSwitchButtonComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
            this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
        };
        __decorate([
            core.Input('checked'),
            __metadata("design:type", Boolean)
        ], jqxSwitchButtonComponent.prototype, "attrChecked", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxSwitchButtonComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('orientation'),
            __metadata("design:type", String)
        ], jqxSwitchButtonComponent.prototype, "attrOrientation", void 0);
        __decorate([
            core.Input('onLabel'),
            __metadata("design:type", String)
        ], jqxSwitchButtonComponent.prototype, "attrOnLabel", void 0);
        __decorate([
            core.Input('offLabel'),
            __metadata("design:type", String)
        ], jqxSwitchButtonComponent.prototype, "attrOffLabel", void 0);
        __decorate([
            core.Input('thumbSize'),
            __metadata("design:type", String)
        ], jqxSwitchButtonComponent.prototype, "attrThumbSize", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxSwitchButtonComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxSwitchButtonComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxSwitchButtonComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxSwitchButtonComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSwitchButtonComponent.prototype, "onChecked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSwitchButtonComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSwitchButtonComponent.prototype, "onUnchecked", void 0);
        jqxSwitchButtonComponent = __decorate([
            core.Component({
                selector: 'jqxSwitchButton',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxSwitchButtonComponent);
        return jqxSwitchButtonComponent;
    }()); //jqxSwitchButtonComponent

    var jqxSwitchButtonModule = /** @class */ (function () {
        function jqxSwitchButtonModule() {
        }
        jqxSwitchButtonModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxSwitchButtonComponent],
                exports: [jqxSwitchButtonComponent]
            })
        ], jqxSwitchButtonModule);
        return jqxSwitchButtonModule;
    }());

    exports.jqxSwitchButtonComponent = jqxSwitchButtonComponent;
    exports.jqxSwitchButtonModule = jqxSwitchButtonModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxswitchbutton.umd.js.map
