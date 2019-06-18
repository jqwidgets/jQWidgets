require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnumberinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnumberinput = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxNumberInputComponent; }),
        multi: true
    };
    var jqxNumberInputComponent = /** @class */ (function () {
        function jqxNumberInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxNumberInputComponent events
            this.onChange = new core.EventEmitter();
            this.onTextchanged = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxNumberInputComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxNumberInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxNumberInput(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                            this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxNumberInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxNumberInputComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxNumberInputComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxNumberInputComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxNumberInputComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
            this.host = this.widgetObject['host'];
            this.__wireEvents__();
        };
        jqxNumberInputComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxNumberInputComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxNumberInputComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.host.jqxNumberInput('val', value);
            }
        };
        jqxNumberInputComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxNumberInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxNumberInputComponent.prototype.setOptions = function (options) {
            this.host.jqxNumberInput('setOptions', options);
        };
        // jqxNumberInputComponent properties
        jqxNumberInputComponent.prototype.allowNull = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('allowNull', arg);
            }
            else {
                return this.host.jqxNumberInput('allowNull');
            }
        };
        jqxNumberInputComponent.prototype.decimal = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimal', arg);
            }
            else {
                return this.host.jqxNumberInput('decimal');
            }
        };
        jqxNumberInputComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('disabled', arg);
            }
            else {
                return this.host.jqxNumberInput('disabled');
            }
        };
        jqxNumberInputComponent.prototype.decimalDigits = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimalDigits', arg);
            }
            else {
                return this.host.jqxNumberInput('decimalDigits');
            }
        };
        jqxNumberInputComponent.prototype.decimalSeparator = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimalSeparator', arg);
            }
            else {
                return this.host.jqxNumberInput('decimalSeparator');
            }
        };
        jqxNumberInputComponent.prototype.digits = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('digits', arg);
            }
            else {
                return this.host.jqxNumberInput('digits');
            }
        };
        jqxNumberInputComponent.prototype.groupSeparator = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('groupSeparator', arg);
            }
            else {
                return this.host.jqxNumberInput('groupSeparator');
            }
        };
        jqxNumberInputComponent.prototype.groupSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('groupSize', arg);
            }
            else {
                return this.host.jqxNumberInput('groupSize');
            }
        };
        jqxNumberInputComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('height', arg);
            }
            else {
                return this.host.jqxNumberInput('height');
            }
        };
        jqxNumberInputComponent.prototype.inputMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('inputMode', arg);
            }
            else {
                return this.host.jqxNumberInput('inputMode');
            }
        };
        jqxNumberInputComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('min', arg);
            }
            else {
                return this.host.jqxNumberInput('min');
            }
        };
        jqxNumberInputComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('max', arg);
            }
            else {
                return this.host.jqxNumberInput('max');
            }
        };
        jqxNumberInputComponent.prototype.negativeSymbol = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('negativeSymbol', arg);
            }
            else {
                return this.host.jqxNumberInput('negativeSymbol');
            }
        };
        jqxNumberInputComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('placeHolder', arg);
            }
            else {
                return this.host.jqxNumberInput('placeHolder');
            }
        };
        jqxNumberInputComponent.prototype.promptChar = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('promptChar', arg);
            }
            else {
                return this.host.jqxNumberInput('promptChar');
            }
        };
        jqxNumberInputComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('rtl', arg);
            }
            else {
                return this.host.jqxNumberInput('rtl');
            }
        };
        jqxNumberInputComponent.prototype.readOnly = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('readOnly', arg);
            }
            else {
                return this.host.jqxNumberInput('readOnly');
            }
        };
        jqxNumberInputComponent.prototype.spinMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinMode', arg);
            }
            else {
                return this.host.jqxNumberInput('spinMode');
            }
        };
        jqxNumberInputComponent.prototype.spinButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtons', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtons');
            }
        };
        jqxNumberInputComponent.prototype.spinButtonsWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtonsWidth', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtonsWidth');
            }
        };
        jqxNumberInputComponent.prototype.spinButtonsStep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtonsStep', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtonsStep');
            }
        };
        jqxNumberInputComponent.prototype.symbol = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('symbol', arg);
            }
            else {
                return this.host.jqxNumberInput('symbol');
            }
        };
        jqxNumberInputComponent.prototype.symbolPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('symbolPosition', arg);
            }
            else {
                return this.host.jqxNumberInput('symbolPosition');
            }
        };
        jqxNumberInputComponent.prototype.textAlign = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('textAlign', arg);
            }
            else {
                return this.host.jqxNumberInput('textAlign');
            }
        };
        jqxNumberInputComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('template', arg);
            }
            else {
                return this.host.jqxNumberInput('template');
            }
        };
        jqxNumberInputComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('theme', arg);
            }
            else {
                return this.host.jqxNumberInput('theme');
            }
        };
        jqxNumberInputComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('value', arg);
            }
            else {
                return this.host.jqxNumberInput('value');
            }
        };
        jqxNumberInputComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('width', arg);
            }
            else {
                return this.host.jqxNumberInput('width');
            }
        };
        // jqxNumberInputComponent functions
        jqxNumberInputComponent.prototype.clear = function () {
            this.host.jqxNumberInput('clear');
        };
        jqxNumberInputComponent.prototype.destroy = function () {
            this.host.jqxNumberInput('destroy');
        };
        jqxNumberInputComponent.prototype.focus = function () {
            this.host.jqxNumberInput('focus');
        };
        jqxNumberInputComponent.prototype.getDecimal = function () {
            return this.host.jqxNumberInput('getDecimal');
        };
        jqxNumberInputComponent.prototype.setDecimal = function (index) {
            this.host.jqxNumberInput('setDecimal', index);
        };
        jqxNumberInputComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxNumberInput('val', value);
            }
            else {
                return this.host.jqxNumberInput('val');
            }
        };
        jqxNumberInputComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
            this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
            this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
        };
        __decorate([
            core.Input('allowNull'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrAllowNull", void 0);
        __decorate([
            core.Input('decimal'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimal", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('decimalDigits'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimalDigits", void 0);
        __decorate([
            core.Input('decimalSeparator'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimalSeparator", void 0);
        __decorate([
            core.Input('digits'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDigits", void 0);
        __decorate([
            core.Input('groupSeparator'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrGroupSeparator", void 0);
        __decorate([
            core.Input('groupSize'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrGroupSize", void 0);
        __decorate([
            core.Input('inputMode'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrInputMode", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('negativeSymbol'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrNegativeSymbol", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('promptChar'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrPromptChar", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('readOnly'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrReadOnly", void 0);
        __decorate([
            core.Input('spinMode'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSpinMode", void 0);
        __decorate([
            core.Input('spinButtons'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrSpinButtons", void 0);
        __decorate([
            core.Input('spinButtonsWidth'),
            __metadata("design:type", Number)
        ], jqxNumberInputComponent.prototype, "attrSpinButtonsWidth", void 0);
        __decorate([
            core.Input('spinButtonsStep'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrSpinButtonsStep", void 0);
        __decorate([
            core.Input('symbol'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSymbol", void 0);
        __decorate([
            core.Input('symbolPosition'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSymbolPosition", void 0);
        __decorate([
            core.Input('textAlign'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTextAlign", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onTextchanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onValueChanged", void 0);
        jqxNumberInputComponent = __decorate([
            core.Component({
                selector: 'jqxNumberInput',
                template: '<input>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxNumberInputComponent);
        return jqxNumberInputComponent;
    }()); //jqxNumberInputComponent

    var jqxNumberInputModule = /** @class */ (function () {
        function jqxNumberInputModule() {
        }
        jqxNumberInputModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxNumberInputComponent],
                exports: [jqxNumberInputComponent]
            })
        ], jqxNumberInputModule);
        return jqxNumberInputModule;
    }());

    exports.jqxNumberInputComponent = jqxNumberInputComponent;
    exports.jqxNumberInputModule = jqxNumberInputModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxnumberinput.umd.js.map
