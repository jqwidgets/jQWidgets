require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxinput = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxInputComponent; }),
        multi: true
    };
    var jqxInputComponent = /** @class */ (function () {
        function jqxInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'dropDownWidth', 'displayMember', 'height', 'items', 'minLength', 'maxLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'rtl', 'searchMode', 'source', 'theme', 'valueMember', 'width', 'value'];
            this.initialLoad = true;
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxInputComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxInputComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxInput(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                            this.host.jqxInput(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxInputComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxInputComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxInputComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxInputComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
        };
        jqxInputComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxInputComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        Object.defineProperty(jqxInputComponent.prototype, "ngValue", {
            get: function () {
                if (this.widgetObject) {
                    var value = this.host.val();
                    if (typeof value === 'object')
                        return value.label;
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
        jqxInputComponent.prototype.writeValue = function (value) {
            var _this = this;
            if (this.widgetObject && value) {
                if (this.initialLoad) {
                    setTimeout(function (_) { return _this.host.jqxInput('val', value); });
                    this.initialLoad = false;
                }
                this.host.jqxInput('val', value);
            }
        };
        jqxInputComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxInputComponent.prototype.setOptions = function (options) {
            this.host.jqxInput('setOptions', options);
        };
        // jqxInputComponent properties
        jqxInputComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('disabled', arg);
            }
            else {
                return this.host.jqxInput('disabled');
            }
        };
        jqxInputComponent.prototype.dropDownWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('dropDownWidth', arg);
            }
            else {
                return this.host.jqxInput('dropDownWidth');
            }
        };
        jqxInputComponent.prototype.displayMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('displayMember', arg);
            }
            else {
                return this.host.jqxInput('displayMember');
            }
        };
        jqxInputComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('height', arg);
            }
            else {
                return this.host.jqxInput('height');
            }
        };
        jqxInputComponent.prototype.items = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('items', arg);
            }
            else {
                return this.host.jqxInput('items');
            }
        };
        jqxInputComponent.prototype.minLength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('minLength', arg);
            }
            else {
                return this.host.jqxInput('minLength');
            }
        };
        jqxInputComponent.prototype.maxLength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('maxLength', arg);
            }
            else {
                return this.host.jqxInput('maxLength');
            }
        };
        jqxInputComponent.prototype.opened = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('opened', arg);
            }
            else {
                return this.host.jqxInput('opened');
            }
        };
        jqxInputComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('placeHolder', arg);
            }
            else {
                return this.host.jqxInput('placeHolder');
            }
        };
        jqxInputComponent.prototype.popupZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('popupZIndex', arg);
            }
            else {
                return this.host.jqxInput('popupZIndex');
            }
        };
        jqxInputComponent.prototype.query = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('query', arg);
            }
            else {
                return this.host.jqxInput('query');
            }
        };
        jqxInputComponent.prototype.renderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('renderer', arg);
            }
            else {
                return this.host.jqxInput('renderer');
            }
        };
        jqxInputComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('rtl', arg);
            }
            else {
                return this.host.jqxInput('rtl');
            }
        };
        jqxInputComponent.prototype.searchMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('searchMode', arg);
            }
            else {
                return this.host.jqxInput('searchMode');
            }
        };
        jqxInputComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('source', arg);
            }
            else {
                return this.host.jqxInput('source');
            }
        };
        jqxInputComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('theme', arg);
            }
            else {
                return this.host.jqxInput('theme');
            }
        };
        jqxInputComponent.prototype.valueMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('valueMember', arg);
            }
            else {
                return this.host.jqxInput('valueMember');
            }
        };
        jqxInputComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('width', arg);
            }
            else {
                return this.host.jqxInput('width');
            }
        };
        jqxInputComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxInput('value', arg);
            }
            else {
                return this.host.jqxInput('value');
            }
        };
        // jqxInputComponent functions
        jqxInputComponent.prototype.destroy = function () {
            this.host.jqxInput('destroy');
        };
        jqxInputComponent.prototype.focus = function () {
            this.host.jqxInput('focus');
        };
        jqxInputComponent.prototype.selectAll = function () {
            this.host.jqxInput('selectAll');
        };
        jqxInputComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxInput('val', value);
            }
            else {
                return this.host.jqxInput('val');
            }
        };
        jqxInputComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxInputComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('dropDownWidth'),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "attrDropDownWidth", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('items'),
            __metadata("design:type", Number)
        ], jqxInputComponent.prototype, "attrItems", void 0);
        __decorate([
            core.Input('minLength'),
            __metadata("design:type", Number)
        ], jqxInputComponent.prototype, "attrMinLength", void 0);
        __decorate([
            core.Input('maxLength'),
            __metadata("design:type", Number)
        ], jqxInputComponent.prototype, "attrMaxLength", void 0);
        __decorate([
            core.Input('opened'),
            __metadata("design:type", Boolean)
        ], jqxInputComponent.prototype, "attrOpened", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Number)
        ], jqxInputComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('query'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrQuery", void 0);
        __decorate([
            core.Input('renderer'),
            __metadata("design:type", Function)
        ], jqxInputComponent.prototype, "attrRenderer", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxInputComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('searchMode'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrSearchMode", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", String)
        ], jqxInputComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxInputComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxInputComponent.prototype, "onSelect", void 0);
        jqxInputComponent = __decorate([
            core.Component({
                selector: 'jqxInput',
                template: '<input type="text" [(ngModel)]="ngValue">',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxInputComponent);
        return jqxInputComponent;
    }()); //jqxInputComponent

    var jqxInputModule = /** @class */ (function () {
        function jqxInputModule() {
        }
        jqxInputModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxInputComponent],
                exports: [jqxInputComponent]
            })
        ], jqxInputModule);
        return jqxInputModule;
    }());

    exports.jqxInputComponent = jqxInputComponent;
    exports.jqxInputModule = jqxInputModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxinput.umd.js.map
