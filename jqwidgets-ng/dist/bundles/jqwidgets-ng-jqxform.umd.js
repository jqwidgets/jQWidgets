require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/globalization/globalize');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxinput');
require('../../jqwidgets-scripts/jqwidgets/jqxpasswordinput');
require('../../jqwidgets-scripts/jqwidgets/jqxnumberinput');
require('../../jqwidgets-scripts/jqwidgets/jqxradiobutton');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');
require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');
require('../../jqwidgets-scripts/jqwidgets/jqxmaskedinput');
require('../../jqwidgets-scripts/jqwidgets/jqxcalendar');
require('../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput');
require('../../jqwidgets-scripts/jqwidgets/jqxform');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxform', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxform = {}), global.ng.core));
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
    var jqxFormComponent = /** @class */ (function () {
        function jqxFormComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['padding', 'backgroundColor', 'borderColor', 'value', 'template'];
            // jqxFormComponent events
            this.onFormDataChange = new core.EventEmitter();
            this.onButtonClick = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        jqxFormComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxFormComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxForm(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxForm(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxForm(this.properties[i])) {
                            this.host.jqxForm(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxFormComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxFormComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxFormComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxFormComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxFormComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxForm', options);
            this.__updateRect__();
        };
        jqxFormComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxFormComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
            this.refresh();
        };
        jqxFormComponent.prototype.setOptions = function (options) {
            this.host.jqxForm('setOptions', options);
        };
        // jqxFormComponent properties
        jqxFormComponent.prototype.padding = function (arg) {
            if (arg !== undefined) {
                this.host.jqxForm('padding', arg);
            }
            else {
                return this.host.jqxForm('padding');
            }
        };
        jqxFormComponent.prototype.backgroundColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxForm('backgroundColor', arg);
            }
            else {
                return this.host.jqxForm('backgroundColor');
            }
        };
        jqxFormComponent.prototype.borderColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxForm('borderColor', arg);
            }
            else {
                return this.host.jqxForm('borderColor');
            }
        };
        jqxFormComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxForm('value', arg);
            }
            else {
                return this.host.jqxForm('value');
            }
        };
        jqxFormComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxForm('template', arg);
            }
            else {
                return this.host.jqxForm('template');
            }
        };
        // jqxFormComponent functions
        jqxFormComponent.prototype.getInstance = function () {
            return this.host.jqxForm('getInstance');
        };
        jqxFormComponent.prototype.refresh = function () {
            this.host.jqxForm('refresh');
        };
        jqxFormComponent.prototype.destroy = function () {
            this.host.jqxForm('destroy');
        };
        jqxFormComponent.prototype.hideComponent = function (name) {
            this.host.jqxForm('hideComponent', name);
        };
        jqxFormComponent.prototype.showComponent = function (name) {
            this.host.jqxForm('showComponent', name);
        };
        jqxFormComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxForm('val', value);
            }
            else {
                return this.host.jqxForm('val');
            }
        };
        jqxFormComponent.prototype.submit = function (action, target, method) {
            this.host.jqxForm('submit', action, target, method);
        };
        jqxFormComponent.prototype.getComponentByName = function (name) {
            return this.host.jqxForm('getComponentByName', name);
        };
        jqxFormComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('formDataChange', function (eventData) { _this.onFormDataChange.emit(eventData); });
            this.host.on('buttonClick', function (eventData) { _this.onButtonClick.emit(eventData); });
        };
        __decorate([
            core.Input('padding'),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "attrPadding", void 0);
        __decorate([
            core.Input('backgroundColor'),
            __metadata("design:type", String)
        ], jqxFormComponent.prototype, "attrBackgroundColor", void 0);
        __decorate([
            core.Input('borderColor'),
            __metadata("design:type", String)
        ], jqxFormComponent.prototype, "attrBorderColor", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", Array)
        ], jqxFormComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxFormComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "onFormDataChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxFormComponent.prototype, "onButtonClick", void 0);
        jqxFormComponent = __decorate([
            core.Component({
                selector: 'jqxForm',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxFormComponent);
        return jqxFormComponent;
    }()); //jqxFormComponent

    var jqxFormModule = /** @class */ (function () {
        function jqxFormModule() {
        }
        jqxFormModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxFormComponent],
                exports: [jqxFormComponent]
            })
        ], jqxFormModule);
        return jqxFormModule;
    }());

    exports.jqxFormComponent = jqxFormComponent;
    exports.jqxFormModule = jqxFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxform.umd.js.map
