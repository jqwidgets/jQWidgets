require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownbutton');
require('../../jqwidgets-scripts/jqwidgets/jqxwindow');
require('../../jqwidgets-scripts/jqwidgets/jqxeditor');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');
require('../../jqwidgets-scripts/jqwidgets/jqxcolorpicker');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxeditor', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxeditor = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxEditorComponent; }),
        multi: true
    };
    var jqxEditorComponent = /** @class */ (function () {
        function jqxEditorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxEditorComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxEditorComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxEditorComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxEditor(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                            this.host.jqxEditor(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxEditorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxEditorComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxEditorComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxEditorComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxEditorComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
            this.host = this.widgetObject['host'];
            this.__wireEvents__();
        };
        jqxEditorComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxEditorComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxEditorComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxEditorComponent.prototype.setOptions = function (options) {
            this.host.jqxEditor('setOptions', options);
        };
        // jqxEditorComponent properties
        jqxEditorComponent.prototype.createCommand = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('createCommand', arg);
            }
            else {
                return this.host.jqxEditor('createCommand');
            }
        };
        jqxEditorComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('disabled', arg);
            }
            else {
                return this.host.jqxEditor('disabled');
            }
        };
        jqxEditorComponent.prototype.editable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('editable', arg);
            }
            else {
                return this.host.jqxEditor('editable');
            }
        };
        jqxEditorComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('height', arg);
            }
            else {
                return this.host.jqxEditor('height');
            }
        };
        jqxEditorComponent.prototype.lineBreak = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('lineBreak', arg);
            }
            else {
                return this.host.jqxEditor('lineBreak');
            }
        };
        jqxEditorComponent.prototype.localization = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('localization', arg);
            }
            else {
                return this.host.jqxEditor('localization');
            }
        };
        jqxEditorComponent.prototype.pasteMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('pasteMode', arg);
            }
            else {
                return this.host.jqxEditor('pasteMode');
            }
        };
        jqxEditorComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('rtl', arg);
            }
            else {
                return this.host.jqxEditor('rtl');
            }
        };
        jqxEditorComponent.prototype.stylesheets = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('stylesheets', arg);
            }
            else {
                return this.host.jqxEditor('stylesheets');
            }
        };
        jqxEditorComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('theme', arg);
            }
            else {
                return this.host.jqxEditor('theme');
            }
        };
        jqxEditorComponent.prototype.toolbarPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('toolbarPosition', arg);
            }
            else {
                return this.host.jqxEditor('toolbarPosition');
            }
        };
        jqxEditorComponent.prototype.tools = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('tools', arg);
            }
            else {
                return this.host.jqxEditor('tools');
            }
        };
        jqxEditorComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxEditor('width', arg);
            }
            else {
                return this.host.jqxEditor('width');
            }
        };
        // jqxEditorComponent functions
        jqxEditorComponent.prototype.destroy = function () {
            this.host.jqxEditor('destroy');
        };
        jqxEditorComponent.prototype.focus = function () {
            this.host.jqxEditor('focus');
        };
        jqxEditorComponent.prototype.print = function () {
            this.host.jqxEditor('print');
        };
        jqxEditorComponent.prototype.setMode = function (mode) {
            this.host.jqxEditor('setMode', mode);
        };
        jqxEditorComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxEditor('val', value);
            }
            else {
                return this.host.jqxEditor('val');
            }
        };
        jqxEditorComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        };
        __decorate([
            core.Input('createCommand'),
            __metadata("design:type", Function)
        ], jqxEditorComponent.prototype, "attrCreateCommand", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxEditorComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('editable'),
            __metadata("design:type", Boolean)
        ], jqxEditorComponent.prototype, "attrEditable", void 0);
        __decorate([
            core.Input('lineBreak'),
            __metadata("design:type", String)
        ], jqxEditorComponent.prototype, "attrLineBreak", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxEditorComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('pasteMode'),
            __metadata("design:type", String)
        ], jqxEditorComponent.prototype, "attrPasteMode", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxEditorComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('stylesheets'),
            __metadata("design:type", Array)
        ], jqxEditorComponent.prototype, "attrStylesheets", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxEditorComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('toolbarPosition'),
            __metadata("design:type", String)
        ], jqxEditorComponent.prototype, "attrToolbarPosition", void 0);
        __decorate([
            core.Input('tools'),
            __metadata("design:type", String)
        ], jqxEditorComponent.prototype, "attrTools", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxEditorComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxEditorComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxEditorComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxEditorComponent.prototype, "onChange", void 0);
        jqxEditorComponent = __decorate([
            core.Component({
                selector: 'jqxEditor',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxEditorComponent);
        return jqxEditorComponent;
    }()); //jqxEditorComponent

    var jqxEditorModule = /** @class */ (function () {
        function jqxEditorModule() {
        }
        jqxEditorModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxEditorComponent],
                exports: [jqxEditorComponent]
            })
        ], jqxEditorModule);
        return jqxEditorModule;
    }());

    exports.jqxEditorComponent = jqxEditorComponent;
    exports.jqxEditorModule = jqxEditorModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxeditor.umd.js.map
