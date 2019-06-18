require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');
require('../../jqwidgets-scripts/jqwidgets/jqxpasswordinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpasswordinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpasswordinput = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxPasswordInputComponent; }),
        multi: true
    };
    var jqxPasswordInputComponent = /** @class */ (function () {
        function jqxPasswordInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxPasswordInputComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxPasswordInputComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxPasswordInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                            this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxPasswordInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxPasswordInputComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxPasswordInputComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxPasswordInputComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxPasswordInputComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
        };
        jqxPasswordInputComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxPasswordInputComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        Object.defineProperty(jqxPasswordInputComponent.prototype, "ngValue", {
            get: function () {
                if (this.widgetObject) {
                    var value = this.host.val();
                    return value;
                }
                return '';
            },
            set: function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        jqxPasswordInputComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.host.jqxPasswordInput('val', value);
            }
        };
        jqxPasswordInputComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxPasswordInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxPasswordInputComponent.prototype.setOptions = function (options) {
            this.host.jqxPasswordInput('setOptions', options);
        };
        // jqxPasswordInputComponent properties
        jqxPasswordInputComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('disabled', arg);
            }
            else {
                return this.host.jqxPasswordInput('disabled');
            }
        };
        jqxPasswordInputComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('height', arg);
            }
            else {
                return this.host.jqxPasswordInput('height');
            }
        };
        jqxPasswordInputComponent.prototype.localization = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('localization', arg);
            }
            else {
                return this.host.jqxPasswordInput('localization');
            }
        };
        jqxPasswordInputComponent.prototype.maxLength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('maxLength', arg);
            }
            else {
                return this.host.jqxPasswordInput('maxLength');
            }
        };
        jqxPasswordInputComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('placeHolder', arg);
            }
            else {
                return this.host.jqxPasswordInput('placeHolder');
            }
        };
        jqxPasswordInputComponent.prototype.passwordStrength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('passwordStrength', arg);
            }
            else {
                return this.host.jqxPasswordInput('passwordStrength');
            }
        };
        jqxPasswordInputComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('rtl', arg);
            }
            else {
                return this.host.jqxPasswordInput('rtl');
            }
        };
        jqxPasswordInputComponent.prototype.strengthColors = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('strengthColors', arg);
            }
            else {
                return this.host.jqxPasswordInput('strengthColors');
            }
        };
        jqxPasswordInputComponent.prototype.showStrength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('showStrength', arg);
            }
            else {
                return this.host.jqxPasswordInput('showStrength');
            }
        };
        jqxPasswordInputComponent.prototype.showStrengthPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('showStrengthPosition', arg);
            }
            else {
                return this.host.jqxPasswordInput('showStrengthPosition');
            }
        };
        jqxPasswordInputComponent.prototype.strengthTypeRenderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('strengthTypeRenderer', arg);
            }
            else {
                return this.host.jqxPasswordInput('strengthTypeRenderer');
            }
        };
        jqxPasswordInputComponent.prototype.showPasswordIcon = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('showPasswordIcon', arg);
            }
            else {
                return this.host.jqxPasswordInput('showPasswordIcon');
            }
        };
        jqxPasswordInputComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('theme', arg);
            }
            else {
                return this.host.jqxPasswordInput('theme');
            }
        };
        jqxPasswordInputComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPasswordInput('width', arg);
            }
            else {
                return this.host.jqxPasswordInput('width');
            }
        };
        // jqxPasswordInputComponent functions
        jqxPasswordInputComponent.prototype.render = function () {
            this.host.jqxPasswordInput('render');
        };
        jqxPasswordInputComponent.prototype.refresh = function () {
            this.host.jqxPasswordInput('refresh');
        };
        jqxPasswordInputComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxPasswordInput('val', value);
            }
            else {
                return this.host.jqxPasswordInput('val');
            }
        };
        jqxPasswordInputComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxPasswordInputComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('maxLength'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrMaxLength", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('passwordStrength'),
            __metadata("design:type", Function)
        ], jqxPasswordInputComponent.prototype, "attrPasswordStrength", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxPasswordInputComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('strengthColors'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrStrengthColors", void 0);
        __decorate([
            core.Input('showStrength'),
            __metadata("design:type", Boolean)
        ], jqxPasswordInputComponent.prototype, "attrShowStrength", void 0);
        __decorate([
            core.Input('showStrengthPosition'),
            __metadata("design:type", String)
        ], jqxPasswordInputComponent.prototype, "attrShowStrengthPosition", void 0);
        __decorate([
            core.Input('strengthTypeRenderer'),
            __metadata("design:type", Function)
        ], jqxPasswordInputComponent.prototype, "attrStrengthTypeRenderer", void 0);
        __decorate([
            core.Input('showPasswordIcon'),
            __metadata("design:type", Boolean)
        ], jqxPasswordInputComponent.prototype, "attrShowPasswordIcon", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxPasswordInputComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxPasswordInputComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPasswordInputComponent.prototype, "onChange", void 0);
        jqxPasswordInputComponent = __decorate([
            core.Component({
                selector: 'jqxPasswordInput',
                template: '<input type="password" [(ngModel)]="ngValue">',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxPasswordInputComponent);
        return jqxPasswordInputComponent;
    }()); //jqxPasswordInputComponent

    var jqxPasswordInputModule = /** @class */ (function () {
        function jqxPasswordInputModule() {
        }
        jqxPasswordInputModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxPasswordInputComponent],
                exports: [jqxPasswordInputComponent]
            })
        ], jqxPasswordInputModule);
        return jqxPasswordInputModule;
    }());

    exports.jqxPasswordInputComponent = jqxPasswordInputComponent;
    exports.jqxPasswordInputModule = jqxPasswordInputModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxpasswordinput.umd.js.map
