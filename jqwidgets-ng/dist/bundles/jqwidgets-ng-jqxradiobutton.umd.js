require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxradiobutton', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxradiobutton = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxRadioButtonComponent; }),
        multi: true
    };
    var jqxRadioButtonComponent = /** @class */ (function () {
        function jqxRadioButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxRadioButtonComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxRadioButtonComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxRadioButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxRadioButton(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                            this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxRadioButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxRadioButtonComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxRadioButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxRadioButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxRadioButtonComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
            this.valueAttr = this.host[0].parentElement.getAttribute('value');
            if (options.checked === true)
                this.onChangeCallback(this.valueAttr);
        };
        jqxRadioButtonComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxRadioButtonComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxRadioButtonComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) ;
        };
        jqxRadioButtonComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxRadioButtonComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxRadioButtonComponent.prototype.setOptions = function (options) {
            this.host.jqxRadioButton('setOptions', options);
        };
        // jqxRadioButtonComponent properties
        jqxRadioButtonComponent.prototype.animationShowDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('animationShowDelay', arg);
            }
            else {
                return this.host.jqxRadioButton('animationShowDelay');
            }
        };
        jqxRadioButtonComponent.prototype.animationHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('animationHideDelay', arg);
            }
            else {
                return this.host.jqxRadioButton('animationHideDelay');
            }
        };
        jqxRadioButtonComponent.prototype.boxSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('boxSize', arg);
            }
            else {
                return this.host.jqxRadioButton('boxSize');
            }
        };
        jqxRadioButtonComponent.prototype.checked = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('checked', arg);
            }
            else {
                return this.host.jqxRadioButton('checked');
            }
        };
        jqxRadioButtonComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('disabled', arg);
            }
            else {
                return this.host.jqxRadioButton('disabled');
            }
        };
        jqxRadioButtonComponent.prototype.enableContainerClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('enableContainerClick', arg);
            }
            else {
                return this.host.jqxRadioButton('enableContainerClick');
            }
        };
        jqxRadioButtonComponent.prototype.groupName = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('groupName', arg);
            }
            else {
                return this.host.jqxRadioButton('groupName');
            }
        };
        jqxRadioButtonComponent.prototype.hasThreeStates = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('hasThreeStates', arg);
            }
            else {
                return this.host.jqxRadioButton('hasThreeStates');
            }
        };
        jqxRadioButtonComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('height', arg);
            }
            else {
                return this.host.jqxRadioButton('height');
            }
        };
        jqxRadioButtonComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('rtl', arg);
            }
            else {
                return this.host.jqxRadioButton('rtl');
            }
        };
        jqxRadioButtonComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('theme', arg);
            }
            else {
                return this.host.jqxRadioButton('theme');
            }
        };
        jqxRadioButtonComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRadioButton('width', arg);
            }
            else {
                return this.host.jqxRadioButton('width');
            }
        };
        // jqxRadioButtonComponent functions
        jqxRadioButtonComponent.prototype.check = function () {
            this.host.jqxRadioButton('check');
        };
        jqxRadioButtonComponent.prototype.disable = function () {
            this.host.jqxRadioButton('disable');
        };
        jqxRadioButtonComponent.prototype.destroy = function () {
            this.host.jqxRadioButton('destroy');
        };
        jqxRadioButtonComponent.prototype.enable = function () {
            this.host.jqxRadioButton('enable');
        };
        jqxRadioButtonComponent.prototype.focus = function () {
            this.host.jqxRadioButton('focus');
        };
        jqxRadioButtonComponent.prototype.render = function () {
            this.host.jqxRadioButton('render');
        };
        jqxRadioButtonComponent.prototype.uncheck = function () {
            this.host.jqxRadioButton('uncheck');
        };
        jqxRadioButtonComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxRadioButton('val', value);
            }
            else {
                return this.host.jqxRadioButton('val');
            }
        };
        jqxRadioButtonComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); _this.onChangeCallback(_this.valueAttr); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
        };
        __decorate([
            core.Input('animationShowDelay'),
            __metadata("design:type", Number)
        ], jqxRadioButtonComponent.prototype, "attrAnimationShowDelay", void 0);
        __decorate([
            core.Input('animationHideDelay'),
            __metadata("design:type", Number)
        ], jqxRadioButtonComponent.prototype, "attrAnimationHideDelay", void 0);
        __decorate([
            core.Input('boxSize'),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "attrBoxSize", void 0);
        __decorate([
            core.Input('checked'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "attrChecked", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enableContainerClick'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "attrEnableContainerClick", void 0);
        __decorate([
            core.Input('groupName'),
            __metadata("design:type", String)
        ], jqxRadioButtonComponent.prototype, "attrGroupName", void 0);
        __decorate([
            core.Input('hasThreeStates'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "attrHasThreeStates", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxRadioButtonComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxRadioButtonComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "onChecked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxRadioButtonComponent.prototype, "onUnchecked", void 0);
        jqxRadioButtonComponent = __decorate([
            core.Component({
                selector: 'jqxRadioButton',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxRadioButtonComponent);
        return jqxRadioButtonComponent;
    }()); //jqxRadioButtonComponent

    var jqxRadioButtonModule = /** @class */ (function () {
        function jqxRadioButtonModule() {
        }
        jqxRadioButtonModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxRadioButtonComponent],
                exports: [jqxRadioButtonComponent]
            })
        ], jqxRadioButtonModule);
        return jqxRadioButtonModule;
    }());

    exports.jqxRadioButtonComponent = jqxRadioButtonComponent;
    exports.jqxRadioButtonModule = jqxRadioButtonModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxradiobutton.umd.js.map
