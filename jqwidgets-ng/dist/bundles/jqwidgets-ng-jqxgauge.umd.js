require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdraw');
require('../../jqwidgets-scripts/jqwidgets/jqxgauge');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxgauge', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxgauge = {}), global.ng.core));
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
    var jqxGaugeComponent = /** @class */ (function () {
        function jqxGaugeComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
            // jqxGaugeComponent events
            this.onValueChanging = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxGaugeComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxGaugeComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxGauge(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                            this.host.jqxGauge(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxGaugeComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxGaugeComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxGaugeComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxGaugeComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
        };
        jqxGaugeComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxGaugeComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxGaugeComponent.prototype.setOptions = function (options) {
            this.host.jqxGauge('setOptions', options);
        };
        // jqxGaugeComponent properties
        jqxGaugeComponent.prototype.animationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('animationDuration', arg);
            }
            else {
                return this.host.jqxGauge('animationDuration');
            }
        };
        jqxGaugeComponent.prototype.border = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('border', arg);
            }
            else {
                return this.host.jqxGauge('border');
            }
        };
        jqxGaugeComponent.prototype.caption = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('caption', arg);
            }
            else {
                return this.host.jqxGauge('caption');
            }
        };
        jqxGaugeComponent.prototype.cap = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('cap', arg);
            }
            else {
                return this.host.jqxGauge('cap');
            }
        };
        jqxGaugeComponent.prototype.colorScheme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('colorScheme', arg);
            }
            else {
                return this.host.jqxGauge('colorScheme');
            }
        };
        jqxGaugeComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('disabled', arg);
            }
            else {
                return this.host.jqxGauge('disabled');
            }
        };
        jqxGaugeComponent.prototype.easing = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('easing', arg);
            }
            else {
                return this.host.jqxGauge('easing');
            }
        };
        jqxGaugeComponent.prototype.endAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('endAngle', arg);
            }
            else {
                return this.host.jqxGauge('endAngle');
            }
        };
        jqxGaugeComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('height', arg);
            }
            else {
                return this.host.jqxGauge('height');
            }
        };
        jqxGaugeComponent.prototype.int64 = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('int64', arg);
            }
            else {
                return this.host.jqxGauge('int64');
            }
        };
        jqxGaugeComponent.prototype.labels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('labels', arg);
            }
            else {
                return this.host.jqxGauge('labels');
            }
        };
        jqxGaugeComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('min', arg);
            }
            else {
                return this.host.jqxGauge('min');
            }
        };
        jqxGaugeComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('max', arg);
            }
            else {
                return this.host.jqxGauge('max');
            }
        };
        jqxGaugeComponent.prototype.pointer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('pointer', arg);
            }
            else {
                return this.host.jqxGauge('pointer');
            }
        };
        jqxGaugeComponent.prototype.radius = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('radius', arg);
            }
            else {
                return this.host.jqxGauge('radius');
            }
        };
        jqxGaugeComponent.prototype.ranges = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('ranges', arg);
            }
            else {
                return this.host.jqxGauge('ranges');
            }
        };
        jqxGaugeComponent.prototype.startAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('startAngle', arg);
            }
            else {
                return this.host.jqxGauge('startAngle');
            }
        };
        jqxGaugeComponent.prototype.showRanges = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('showRanges', arg);
            }
            else {
                return this.host.jqxGauge('showRanges');
            }
        };
        jqxGaugeComponent.prototype.styles = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('styles', arg);
            }
            else {
                return this.host.jqxGauge('styles');
            }
        };
        jqxGaugeComponent.prototype.ticksMajor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('ticksMajor', arg);
            }
            else {
                return this.host.jqxGauge('ticksMajor');
            }
        };
        jqxGaugeComponent.prototype.ticksMinor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('ticksMinor', arg);
            }
            else {
                return this.host.jqxGauge('ticksMinor');
            }
        };
        jqxGaugeComponent.prototype.ticksDistance = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('ticksDistance', arg);
            }
            else {
                return this.host.jqxGauge('ticksDistance');
            }
        };
        jqxGaugeComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('value', arg);
            }
            else {
                return this.host.jqxGauge('value');
            }
        };
        jqxGaugeComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxGauge('width', arg);
            }
            else {
                return this.host.jqxGauge('width');
            }
        };
        // jqxGaugeComponent functions
        jqxGaugeComponent.prototype.disable = function () {
            this.host.jqxGauge('disable');
        };
        jqxGaugeComponent.prototype.enable = function () {
            this.host.jqxGauge('enable');
        };
        jqxGaugeComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxGauge('val', value);
            }
            else {
                return this.host.jqxGauge('val');
            }
        };
        jqxGaugeComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
            this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
        };
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('border'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrBorder", void 0);
        __decorate([
            core.Input('caption'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrCaption", void 0);
        __decorate([
            core.Input('cap'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrCap", void 0);
        __decorate([
            core.Input('colorScheme'),
            __metadata("design:type", String)
        ], jqxGaugeComponent.prototype, "attrColorScheme", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxGaugeComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('easing'),
            __metadata("design:type", String)
        ], jqxGaugeComponent.prototype, "attrEasing", void 0);
        __decorate([
            core.Input('endAngle'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrEndAngle", void 0);
        __decorate([
            core.Input('int64'),
            __metadata("design:type", Boolean)
        ], jqxGaugeComponent.prototype, "attrInt64", void 0);
        __decorate([
            core.Input('labels'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrLabels", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Number)
        ], jqxGaugeComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('pointer'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrPointer", void 0);
        __decorate([
            core.Input('radius'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrRadius", void 0);
        __decorate([
            core.Input('ranges'),
            __metadata("design:type", Array)
        ], jqxGaugeComponent.prototype, "attrRanges", void 0);
        __decorate([
            core.Input('startAngle'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrStartAngle", void 0);
        __decorate([
            core.Input('showRanges'),
            __metadata("design:type", Boolean)
        ], jqxGaugeComponent.prototype, "attrShowRanges", void 0);
        __decorate([
            core.Input('styles'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrStyles", void 0);
        __decorate([
            core.Input('ticksMajor'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrTicksMajor", void 0);
        __decorate([
            core.Input('ticksMinor'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrTicksMinor", void 0);
        __decorate([
            core.Input('ticksDistance'),
            __metadata("design:type", String)
        ], jqxGaugeComponent.prototype, "attrTicksDistance", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Number)
        ], jqxGaugeComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxGaugeComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "onValueChanging", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxGaugeComponent.prototype, "onValueChanged", void 0);
        jqxGaugeComponent = __decorate([
            core.Component({
                selector: 'jqxGauge',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxGaugeComponent);
        return jqxGaugeComponent;
    }()); //jqxGaugeComponent

    var jqxGaugeModule = /** @class */ (function () {
        function jqxGaugeModule() {
        }
        jqxGaugeModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxGaugeComponent],
                exports: [jqxGaugeComponent]
            })
        ], jqxGaugeModule);
        return jqxGaugeModule;
    }());

    exports.jqxGaugeComponent = jqxGaugeComponent;
    exports.jqxGaugeModule = jqxGaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxgauge.umd.js.map
