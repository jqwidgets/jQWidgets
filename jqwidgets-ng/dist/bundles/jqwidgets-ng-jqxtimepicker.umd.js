(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtimepicker', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtimepicker = {}), global.ng.core));
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
    var jqxTimePickerComponent = /** @class */ (function () {
        function jqxTimePickerComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoSwitchToMinutes', 'disabled', 'footer', 'footerTemplate', 'format', 'minuteInterval', 'name', 'readonly', 'selection', 'theme', 'unfocusable', 'value', 'view'];
            // jqxTimePickerComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTimePickerComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTimePickerComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTimePicker(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTimePicker(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTimePicker(this.properties[i])) {
                            this.host.jqxTimePicker(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTimePickerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTimePickerComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTimePickerComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTimePickerComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTimePickerComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTimePicker', options);
        };
        jqxTimePickerComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTimePickerComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTimePickerComponent.prototype.setOptions = function (options) {
            this.host.jqxTimePicker('setOptions', options);
        };
        // jqxTimePickerComponent properties
        jqxTimePickerComponent.prototype.autoSwitchToMinutes = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('autoSwitchToMinutes', arg);
            }
            else {
                return this.host.jqxTimePicker('autoSwitchToMinutes');
            }
        };
        jqxTimePickerComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('disabled', arg);
            }
            else {
                return this.host.jqxTimePicker('disabled');
            }
        };
        jqxTimePickerComponent.prototype.footer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('footer', arg);
            }
            else {
                return this.host.jqxTimePicker('footer');
            }
        };
        jqxTimePickerComponent.prototype.footerTemplate = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('footerTemplate', arg);
            }
            else {
                return this.host.jqxTimePicker('footerTemplate');
            }
        };
        jqxTimePickerComponent.prototype.format = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('format', arg);
            }
            else {
                return this.host.jqxTimePicker('format');
            }
        };
        jqxTimePickerComponent.prototype.minuteInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('minuteInterval', arg);
            }
            else {
                return this.host.jqxTimePicker('minuteInterval');
            }
        };
        jqxTimePickerComponent.prototype.name = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('name', arg);
            }
            else {
                return this.host.jqxTimePicker('name');
            }
        };
        jqxTimePickerComponent.prototype.readonly = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('readonly', arg);
            }
            else {
                return this.host.jqxTimePicker('readonly');
            }
        };
        jqxTimePickerComponent.prototype.selection = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('selection', arg);
            }
            else {
                return this.host.jqxTimePicker('selection');
            }
        };
        jqxTimePickerComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('theme', arg);
            }
            else {
                return this.host.jqxTimePicker('theme');
            }
        };
        jqxTimePickerComponent.prototype.unfocusable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('unfocusable', arg);
            }
            else {
                return this.host.jqxTimePicker('unfocusable');
            }
        };
        jqxTimePickerComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('value', arg);
            }
            else {
                return this.host.jqxTimePicker('value');
            }
        };
        jqxTimePickerComponent.prototype.view = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTimePicker('view', arg);
            }
            else {
                return this.host.jqxTimePicker('view');
            }
        };
        // jqxTimePickerComponent functions
        jqxTimePickerComponent.prototype.setHours = function (hours) {
            this.host.jqxTimePicker('setHours', hours);
        };
        jqxTimePickerComponent.prototype.setMinutes = function (minutes) {
            this.host.jqxTimePicker('setMinutes', minutes);
        };
        jqxTimePickerComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        __decorate([
            core.Input('autoSwitchToMinutes'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "attrAutoSwitchToMinutes", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('footer'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "attrFooter", void 0);
        __decorate([
            core.Input('footerTemplate'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrFooterTemplate", void 0);
        __decorate([
            core.Input('format'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrFormat", void 0);
        __decorate([
            core.Input('minuteInterval'),
            __metadata("design:type", Number)
        ], jqxTimePickerComponent.prototype, "attrMinuteInterval", void 0);
        __decorate([
            core.Input('name'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrName", void 0);
        __decorate([
            core.Input('readonly'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "attrReadonly", void 0);
        __decorate([
            core.Input('selection'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrSelection", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('unfocusable'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "attrUnfocusable", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Date)
        ], jqxTimePickerComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('view'),
            __metadata("design:type", String)
        ], jqxTimePickerComponent.prototype, "attrView", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTimePickerComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTimePickerComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTimePickerComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTimePickerComponent.prototype, "onChange", void 0);
        jqxTimePickerComponent = __decorate([
            core.Component({
                selector: 'jqxTimePicker',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTimePickerComponent);
        return jqxTimePickerComponent;
    }()); //jqxTimePickerComponent

    var jqxTimePickerModule = /** @class */ (function () {
        function jqxTimePickerModule() {
        }
        jqxTimePickerModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTimePickerComponent],
                exports: [jqxTimePickerComponent]
            })
        ], jqxTimePickerModule);
        return jqxTimePickerModule;
    }());

    exports.jqxTimePickerComponent = jqxTimePickerComponent;
    exports.jqxTimePickerModule = jqxTimePickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtimepicker.umd.js.map
