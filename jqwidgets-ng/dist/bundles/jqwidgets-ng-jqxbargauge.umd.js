require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdraw');
require('../../jqwidgets-scripts/jqwidgets/jqxbargauge');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbargauge', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbargauge = {}), global.ng.core));
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
    var jqxBarGaugeComponent = /** @class */ (function () {
        function jqxBarGaugeComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
            // jqxBarGaugeComponent events
            this.onDrawEnd = new core.EventEmitter();
            this.onDrawStart = new core.EventEmitter();
            this.onInitialized = new core.EventEmitter();
            this.onTooltipClose = new core.EventEmitter();
            this.onTooltipOpen = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxBarGaugeComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxBarGaugeComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxBarGauge(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                            this.host.jqxBarGauge(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxBarGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxBarGaugeComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxBarGaugeComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxBarGaugeComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxBarGaugeComponent.prototype.createComponent = function (options) {
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
            if (typeof options.width === 'string' && options.width.indexOf('%') !== -1) {
                options.width = parseInt(options.width, 10) / 100 * this.host.parent().parent().parent().width();
            }
            if (typeof options.height === 'string' && options.height.indexOf('%') !== -1) {
                options.height = parseInt(options.height, 10) / 100 * this.host.parent().parent().parent().height();
            }
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
        };
        jqxBarGaugeComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxBarGaugeComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxBarGaugeComponent.prototype.setOptions = function (options) {
            this.host.jqxBarGauge('setOptions', options);
        };
        // jqxBarGaugeComponent properties
        jqxBarGaugeComponent.prototype.animationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('animationDuration', arg);
            }
            else {
                return this.host.jqxBarGauge('animationDuration');
            }
        };
        jqxBarGaugeComponent.prototype.backgroundColor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('backgroundColor', arg);
            }
            else {
                return this.host.jqxBarGauge('backgroundColor');
            }
        };
        jqxBarGaugeComponent.prototype.barSpacing = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('barSpacing', arg);
            }
            else {
                return this.host.jqxBarGauge('barSpacing');
            }
        };
        jqxBarGaugeComponent.prototype.baseValue = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('baseValue', arg);
            }
            else {
                return this.host.jqxBarGauge('baseValue');
            }
        };
        jqxBarGaugeComponent.prototype.colorScheme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('colorScheme', arg);
            }
            else {
                return this.host.jqxBarGauge('colorScheme');
            }
        };
        jqxBarGaugeComponent.prototype.customColorScheme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('customColorScheme', arg);
            }
            else {
                return this.host.jqxBarGauge('customColorScheme');
            }
        };
        jqxBarGaugeComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('disabled', arg);
            }
            else {
                return this.host.jqxBarGauge('disabled');
            }
        };
        jqxBarGaugeComponent.prototype.endAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('endAngle', arg);
            }
            else {
                return this.host.jqxBarGauge('endAngle');
            }
        };
        jqxBarGaugeComponent.prototype.formatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('formatFunction', arg);
            }
            else {
                return this.host.jqxBarGauge('formatFunction');
            }
        };
        jqxBarGaugeComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('height', arg);
            }
            else {
                return this.host.jqxBarGauge('height');
            }
        };
        jqxBarGaugeComponent.prototype.labels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('labels', arg);
            }
            else {
                return this.host.jqxBarGauge('labels');
            }
        };
        jqxBarGaugeComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('max', arg);
            }
            else {
                return this.host.jqxBarGauge('max');
            }
        };
        jqxBarGaugeComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('min', arg);
            }
            else {
                return this.host.jqxBarGauge('min');
            }
        };
        jqxBarGaugeComponent.prototype.relativeInnerRadius = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('relativeInnerRadius', arg);
            }
            else {
                return this.host.jqxBarGauge('relativeInnerRadius');
            }
        };
        jqxBarGaugeComponent.prototype.rendered = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('rendered', arg);
            }
            else {
                return this.host.jqxBarGauge('rendered');
            }
        };
        jqxBarGaugeComponent.prototype.startAngle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('startAngle', arg);
            }
            else {
                return this.host.jqxBarGauge('startAngle');
            }
        };
        jqxBarGaugeComponent.prototype.title = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('title', arg);
            }
            else {
                return this.host.jqxBarGauge('title');
            }
        };
        jqxBarGaugeComponent.prototype.tooltip = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('tooltip', arg);
            }
            else {
                return this.host.jqxBarGauge('tooltip');
            }
        };
        jqxBarGaugeComponent.prototype.useGradient = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('useGradient', arg);
            }
            else {
                return this.host.jqxBarGauge('useGradient');
            }
        };
        jqxBarGaugeComponent.prototype.values = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('values', arg);
            }
            else {
                return this.host.jqxBarGauge('values');
            }
        };
        jqxBarGaugeComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxBarGauge('width', arg);
            }
            else {
                return this.host.jqxBarGauge('width');
            }
        };
        // jqxBarGaugeComponent functions
        jqxBarGaugeComponent.prototype.refresh = function () {
            this.host.jqxBarGauge('refresh');
        };
        jqxBarGaugeComponent.prototype.render = function () {
            this.host.jqxBarGauge('render');
        };
        jqxBarGaugeComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxBarGauge('val', value);
            }
            else {
                return this.host.jqxBarGauge('val');
            }
        };
        jqxBarGaugeComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('drawEnd', function (eventData) { _this.onDrawEnd.emit(eventData); });
            this.host.on('drawStart', function (eventData) { _this.onDrawStart.emit(eventData); });
            this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
            this.host.on('tooltipClose', function (eventData) { _this.onTooltipClose.emit(eventData); });
            this.host.on('tooltipOpen', function (eventData) { _this.onTooltipOpen.emit(eventData); });
            this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
        };
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('backgroundColor'),
            __metadata("design:type", String)
        ], jqxBarGaugeComponent.prototype, "attrBackgroundColor", void 0);
        __decorate([
            core.Input('barSpacing'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrBarSpacing", void 0);
        __decorate([
            core.Input('baseValue'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrBaseValue", void 0);
        __decorate([
            core.Input('colorScheme'),
            __metadata("design:type", String)
        ], jqxBarGaugeComponent.prototype, "attrColorScheme", void 0);
        __decorate([
            core.Input('customColorScheme'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrCustomColorScheme", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxBarGaugeComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('endAngle'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrEndAngle", void 0);
        __decorate([
            core.Input('formatFunction'),
            __metadata("design:type", Function)
        ], jqxBarGaugeComponent.prototype, "attrFormatFunction", void 0);
        __decorate([
            core.Input('labels'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrLabels", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('relativeInnerRadius'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrRelativeInnerRadius", void 0);
        __decorate([
            core.Input('rendered'),
            __metadata("design:type", Function)
        ], jqxBarGaugeComponent.prototype, "attrRendered", void 0);
        __decorate([
            core.Input('startAngle'),
            __metadata("design:type", Number)
        ], jqxBarGaugeComponent.prototype, "attrStartAngle", void 0);
        __decorate([
            core.Input('title'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrTitle", void 0);
        __decorate([
            core.Input('tooltip'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrTooltip", void 0);
        __decorate([
            core.Input('useGradient'),
            __metadata("design:type", Boolean)
        ], jqxBarGaugeComponent.prototype, "attrUseGradient", void 0);
        __decorate([
            core.Input('values'),
            __metadata("design:type", Array)
        ], jqxBarGaugeComponent.prototype, "attrValues", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxBarGaugeComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onDrawEnd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onDrawStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onInitialized", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onTooltipClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onTooltipOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxBarGaugeComponent.prototype, "onValueChanged", void 0);
        jqxBarGaugeComponent = __decorate([
            core.Component({
                selector: 'jqxBarGauge',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxBarGaugeComponent);
        return jqxBarGaugeComponent;
    }()); //jqxBarGaugeComponent

    var jqxBarGaugeModule = /** @class */ (function () {
        function jqxBarGaugeModule() {
        }
        jqxBarGaugeModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxBarGaugeComponent],
                exports: [jqxBarGaugeComponent]
            })
        ], jqxBarGaugeModule);
        return jqxBarGaugeModule;
    }());

    exports.jqxBarGaugeComponent = jqxBarGaugeComponent;
    exports.jqxBarGaugeModule = jqxBarGaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxbargauge.umd.js.map
