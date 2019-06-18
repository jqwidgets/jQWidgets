require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxvalidator');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxvalidator', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxvalidator = {}), global.ng.core));
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
    var jqxValidatorComponent = /** @class */ (function () {
        function jqxValidatorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['arrow', 'animation', 'animationDuration', 'closeOnClick', 'focus', 'hintType', 'onError', 'onSuccess', 'position', 'rules', 'rtl'];
            // jqxValidatorComponent events
            this.onValidationError = new core.EventEmitter();
            this.onValidationSuccess = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxValidatorComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxValidatorComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxValidator(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxValidator(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxValidator(this.properties[i])) {
                            this.host.jqxValidator(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxValidatorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxValidatorComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxValidatorComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxValidatorComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxValidatorComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxValidator', options);
        };
        jqxValidatorComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxValidatorComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxValidatorComponent.prototype.setOptions = function (options) {
            this.host.jqxValidator('setOptions', options);
        };
        // jqxValidatorComponent properties
        jqxValidatorComponent.prototype.arrow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('arrow', arg);
            }
            else {
                return this.host.jqxValidator('arrow');
            }
        };
        jqxValidatorComponent.prototype.animation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('animation', arg);
            }
            else {
                return this.host.jqxValidator('animation');
            }
        };
        jqxValidatorComponent.prototype.animationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('animationDuration', arg);
            }
            else {
                return this.host.jqxValidator('animationDuration');
            }
        };
        jqxValidatorComponent.prototype.closeOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('closeOnClick', arg);
            }
            else {
                return this.host.jqxValidator('closeOnClick');
            }
        };
        jqxValidatorComponent.prototype.focus = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('focus', arg);
            }
            else {
                return this.host.jqxValidator('focus');
            }
        };
        jqxValidatorComponent.prototype.hintType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('hintType', arg);
            }
            else {
                return this.host.jqxValidator('hintType');
            }
        };
        jqxValidatorComponent.prototype.onError = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('onError', arg);
            }
            else {
                return this.host.jqxValidator('onError');
            }
        };
        jqxValidatorComponent.prototype.onSuccess = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('onSuccess', arg);
            }
            else {
                return this.host.jqxValidator('onSuccess');
            }
        };
        jqxValidatorComponent.prototype.position = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('position', arg);
            }
            else {
                return this.host.jqxValidator('position');
            }
        };
        jqxValidatorComponent.prototype.rules = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('rules', arg);
            }
            else {
                return this.host.jqxValidator('rules');
            }
        };
        jqxValidatorComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxValidator('rtl', arg);
            }
            else {
                return this.host.jqxValidator('rtl');
            }
        };
        // jqxValidatorComponent functions
        jqxValidatorComponent.prototype.hideHint = function (id) {
            this.host.jqxValidator('hideHint', id);
        };
        jqxValidatorComponent.prototype.hide = function () {
            this.host.jqxValidator('hide');
        };
        jqxValidatorComponent.prototype.updatePosition = function () {
            this.host.jqxValidator('updatePosition');
        };
        jqxValidatorComponent.prototype.validate = function (htmlElement) {
            this.host.jqxValidator('validate', htmlElement);
        };
        jqxValidatorComponent.prototype.validateInput = function (id) {
            this.host.jqxValidator('validateInput', id);
        };
        jqxValidatorComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('validationError', function (eventData) { _this.onValidationError.emit(eventData); });
            this.host.on('validationSuccess', function (eventData) { _this.onValidationSuccess.emit(eventData); });
        };
        __decorate([
            core.Input('arrow'),
            __metadata("design:type", Boolean)
        ], jqxValidatorComponent.prototype, "attrArrow", void 0);
        __decorate([
            core.Input('animation'),
            __metadata("design:type", String)
        ], jqxValidatorComponent.prototype, "attrAnimation", void 0);
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Number)
        ], jqxValidatorComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('closeOnClick'),
            __metadata("design:type", Boolean)
        ], jqxValidatorComponent.prototype, "attrCloseOnClick", void 0);
        __decorate([
            core.Input('focus'),
            __metadata("design:type", Boolean)
        ], jqxValidatorComponent.prototype, "attrFocus", void 0);
        __decorate([
            core.Input('hintType'),
            __metadata("design:type", String)
        ], jqxValidatorComponent.prototype, "attrHintType", void 0);
        __decorate([
            core.Input('onError'),
            __metadata("design:type", Function)
        ], jqxValidatorComponent.prototype, "attrOnError", void 0);
        __decorate([
            core.Input('onSuccess'),
            __metadata("design:type", Function)
        ], jqxValidatorComponent.prototype, "attrOnSuccess", void 0);
        __decorate([
            core.Input('position'),
            __metadata("design:type", String)
        ], jqxValidatorComponent.prototype, "attrPosition", void 0);
        __decorate([
            core.Input('rules'),
            __metadata("design:type", Array)
        ], jqxValidatorComponent.prototype, "attrRules", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxValidatorComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxValidatorComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxValidatorComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxValidatorComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxValidatorComponent.prototype, "onValidationError", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxValidatorComponent.prototype, "onValidationSuccess", void 0);
        jqxValidatorComponent = __decorate([
            core.Component({
                selector: 'jqxValidator',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxValidatorComponent);
        return jqxValidatorComponent;
    }()); //jqxValidatorComponent

    var jqxValidatorModule = /** @class */ (function () {
        function jqxValidatorModule() {
        }
        jqxValidatorModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxValidatorComponent],
                exports: [jqxValidatorComponent]
            })
        ], jqxValidatorModule);
        return jqxValidatorModule;
    }());

    exports.jqxValidatorComponent = jqxValidatorComponent;
    exports.jqxValidatorModule = jqxValidatorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxvalidator.umd.js.map
