require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxtextarea');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtextarea', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtextarea = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxTextAreaComponent; }),
        multi: true
    };
    var jqxTextAreaComponent = /** @class */ (function () {
        function jqxTextAreaComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'displayMember', 'dropDownWidth', 'height', 'items', 'maxLength', 'minLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'roundedCorners', 'rtl', 'scrollBarSize', 'searchMode', 'source', 'theme', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxTextAreaComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTextAreaComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTextAreaComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTextArea(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                            this.host.jqxTextArea(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTextAreaComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTextAreaComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTextAreaComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTextAreaComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTextAreaComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
        };
        jqxTextAreaComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTextAreaComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTextAreaComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                if (value !== null && value !== undefined)
                    this.host.jqxTextArea('val', value);
            }
        };
        jqxTextAreaComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxTextAreaComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxTextAreaComponent.prototype.setOptions = function (options) {
            this.host.jqxTextArea('setOptions', options);
        };
        // jqxTextAreaComponent properties
        jqxTextAreaComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('disabled', arg);
            }
            else {
                return this.host.jqxTextArea('disabled');
            }
        };
        jqxTextAreaComponent.prototype.displayMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('displayMember', arg);
            }
            else {
                return this.host.jqxTextArea('displayMember');
            }
        };
        jqxTextAreaComponent.prototype.dropDownWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('dropDownWidth', arg);
            }
            else {
                return this.host.jqxTextArea('dropDownWidth');
            }
        };
        jqxTextAreaComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('height', arg);
            }
            else {
                return this.host.jqxTextArea('height');
            }
        };
        jqxTextAreaComponent.prototype.items = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('items', arg);
            }
            else {
                return this.host.jqxTextArea('items');
            }
        };
        jqxTextAreaComponent.prototype.maxLength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('maxLength', arg);
            }
            else {
                return this.host.jqxTextArea('maxLength');
            }
        };
        jqxTextAreaComponent.prototype.minLength = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('minLength', arg);
            }
            else {
                return this.host.jqxTextArea('minLength');
            }
        };
        jqxTextAreaComponent.prototype.opened = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('opened', arg);
            }
            else {
                return this.host.jqxTextArea('opened');
            }
        };
        jqxTextAreaComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('placeHolder', arg);
            }
            else {
                return this.host.jqxTextArea('placeHolder');
            }
        };
        jqxTextAreaComponent.prototype.popupZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('popupZIndex', arg);
            }
            else {
                return this.host.jqxTextArea('popupZIndex');
            }
        };
        jqxTextAreaComponent.prototype.query = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('query', arg);
            }
            else {
                return this.host.jqxTextArea('query');
            }
        };
        jqxTextAreaComponent.prototype.renderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('renderer', arg);
            }
            else {
                return this.host.jqxTextArea('renderer');
            }
        };
        jqxTextAreaComponent.prototype.roundedCorners = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('roundedCorners', arg);
            }
            else {
                return this.host.jqxTextArea('roundedCorners');
            }
        };
        jqxTextAreaComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('rtl', arg);
            }
            else {
                return this.host.jqxTextArea('rtl');
            }
        };
        jqxTextAreaComponent.prototype.scrollBarSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('scrollBarSize', arg);
            }
            else {
                return this.host.jqxTextArea('scrollBarSize');
            }
        };
        jqxTextAreaComponent.prototype.searchMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('searchMode', arg);
            }
            else {
                return this.host.jqxTextArea('searchMode');
            }
        };
        jqxTextAreaComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('source', arg);
            }
            else {
                return this.host.jqxTextArea('source');
            }
        };
        jqxTextAreaComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('theme', arg);
            }
            else {
                return this.host.jqxTextArea('theme');
            }
        };
        jqxTextAreaComponent.prototype.valueMember = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('valueMember', arg);
            }
            else {
                return this.host.jqxTextArea('valueMember');
            }
        };
        jqxTextAreaComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTextArea('width', arg);
            }
            else {
                return this.host.jqxTextArea('width');
            }
        };
        // jqxTextAreaComponent functions
        jqxTextAreaComponent.prototype.destroy = function () {
            this.host.jqxTextArea('destroy');
        };
        jqxTextAreaComponent.prototype.focus = function () {
            this.host.jqxTextArea('focus');
        };
        jqxTextAreaComponent.prototype.refresh = function () {
            this.host.jqxTextArea('refresh');
        };
        jqxTextAreaComponent.prototype.render = function () {
            this.host.jqxTextArea('render');
        };
        jqxTextAreaComponent.prototype.selectAll = function () {
            this.host.jqxTextArea('selectAll');
        };
        jqxTextAreaComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxTextArea('val', value);
            }
            else {
                return this.host.jqxTextArea('val');
            }
        };
        jqxTextAreaComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
            this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTextAreaComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('dropDownWidth'),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "attrDropDownWidth", void 0);
        __decorate([
            core.Input('items'),
            __metadata("design:type", Number)
        ], jqxTextAreaComponent.prototype, "attrItems", void 0);
        __decorate([
            core.Input('maxLength'),
            __metadata("design:type", Number)
        ], jqxTextAreaComponent.prototype, "attrMaxLength", void 0);
        __decorate([
            core.Input('minLength'),
            __metadata("design:type", Number)
        ], jqxTextAreaComponent.prototype, "attrMinLength", void 0);
        __decorate([
            core.Input('opened'),
            __metadata("design:type", Boolean)
        ], jqxTextAreaComponent.prototype, "attrOpened", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Number)
        ], jqxTextAreaComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('query'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrQuery", void 0);
        __decorate([
            core.Input('renderer'),
            __metadata("design:type", Function)
        ], jqxTextAreaComponent.prototype, "attrRenderer", void 0);
        __decorate([
            core.Input('roundedCorners'),
            __metadata("design:type", Boolean)
        ], jqxTextAreaComponent.prototype, "attrRoundedCorners", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTextAreaComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Number)
        ], jqxTextAreaComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('searchMode'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrSearchMode", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", String)
        ], jqxTextAreaComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTextAreaComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTextAreaComponent.prototype, "onSelect", void 0);
        jqxTextAreaComponent = __decorate([
            core.Component({
                selector: 'jqxTextArea',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTextAreaComponent);
        return jqxTextAreaComponent;
    }()); //jqxTextAreaComponent

    var jqxTextAreaModule = /** @class */ (function () {
        function jqxTextAreaModule() {
        }
        jqxTextAreaModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxTextAreaComponent],
                exports: [jqxTextAreaComponent]
            })
        ], jqxTextAreaModule);
        return jqxTextAreaModule;
    }());

    exports.jqxTextAreaComponent = jqxTextAreaComponent;
    exports.jqxTextAreaModule = jqxTextAreaModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtextarea.umd.js.map
