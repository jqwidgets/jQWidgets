require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxheatmap'); 
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxheatmap', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxheatmap = {}), global.ng.core));
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
    var jqxHeatMapComponent = /** @class */ (function () {
        function jqxHeatMapComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['xAxis', 'yAxis', 'paletteSettings', 'legendSettings', 'source', 'title', 'width', 'tooltipRender'];
            this.elementRef = containerElement;
        }
        jqxHeatMapComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxHeatMapComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxHeatMap(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxHeatMap(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxHeatMap(this.properties[i])) {
                            this.host.jqxHeatMap(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxHeatMapComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxHeatMapComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxHeatMapComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxHeatMapComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxHeatMapComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxHeatMap', options);
        };
        jqxHeatMapComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxHeatMapComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxHeatMapComponent.prototype.setOptions = function (options) {
            this.host.jqxHeatMap('setOptions', options);
        };
        // jqxHeatMapComponent properties
        jqxHeatMapComponent.prototype.xAxis = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('xAxis', arg);
            }
            else {
                return this.host.jqxHeatMap('xAxis');
            }
        };
        jqxHeatMapComponent.prototype.yAxis = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('yAxis', arg);
            }
            else {
                return this.host.jqxHeatMap('yAxis');
            }
        };
        jqxHeatMapComponent.prototype.paletteSettings = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('paletteSettings', arg);
            }
            else {
                return this.host.jqxHeatMap('paletteSettings');
            }
        };
        jqxHeatMapComponent.prototype.legendSettings = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('legendSettings', arg);
            }
            else {
                return this.host.jqxHeatMap('legendSettings');
            }
        };
        jqxHeatMapComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('source', arg);
            }
            else {
                return this.host.jqxHeatMap('source');
            }
        };
        jqxHeatMapComponent.prototype.title = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('title', arg);
            }
            else {
                return this.host.jqxHeatMap('title');
            }
        };
        jqxHeatMapComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('width', arg);
            }
            else {
                return this.host.jqxHeatMap('width');
            }
        };
        jqxHeatMapComponent.prototype.tooltipRender = function (arg) {
            if (arg !== undefined) {
                this.host.jqxHeatMap('tooltipRender', arg);
            }
            else {
                return this.host.jqxHeatMap('tooltipRender');
            }
        };
        // jqxHeatMapComponent functions
        jqxHeatMapComponent.prototype.destroy = function () {
            this.host.jqxHeatMap('destroy');
        };
        jqxHeatMapComponent.prototype.setLegendPosition = function (position) {
            this.host.jqxHeatMap('setLegendPosition', position);
        };
        jqxHeatMapComponent.prototype.setOpposedXAxisPosition = function (opposedPosition) {
            this.host.jqxHeatMap('setOpposedXAxisPosition', opposedPosition);
        };
        jqxHeatMapComponent.prototype.setOpposedYAxisPosition = function (opposedPosition) {
            this.host.jqxHeatMap('setOpposedYAxisPosition', opposedPosition);
        };
        jqxHeatMapComponent.prototype.reverseXAxisPosition = function (isInversed) {
            this.host.jqxHeatMap('reverseXAxisPosition', isInversed);
        };
        jqxHeatMapComponent.prototype.reverseYAxisPosition = function (isInversed) {
            this.host.jqxHeatMap('reverseYAxisPosition', isInversed);
        };
        jqxHeatMapComponent.prototype.setPaletteType = function (type) {
            this.host.jqxHeatMap('setPaletteType', type);
        };
        // jqxHeatMapComponent events
        jqxHeatMapComponent.prototype.__wireEvents__ = function () {
        };
        __decorate([
            core.Input('xAxis'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrXAxis", void 0);
        __decorate([
            core.Input('yAxis'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrYAxis", void 0);
        __decorate([
            core.Input('paletteSettings'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrPaletteSettings", void 0);
        __decorate([
            core.Input('legendSettings'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrLegendSettings", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Array)
        ], jqxHeatMapComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('title'),
            __metadata("design:type", String)
        ], jqxHeatMapComponent.prototype, "attrTitle", void 0);
        __decorate([
            core.Input('tooltipRender'),
            __metadata("design:type", Function)
        ], jqxHeatMapComponent.prototype, "attrTooltipRender", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxHeatMapComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxHeatMapComponent.prototype, "autoCreate", void 0);
        jqxHeatMapComponent = __decorate([
            core.Component({
                selector: 'jqxHeatMap',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxHeatMapComponent);
        return jqxHeatMapComponent;
    }()); //jqxHeatMapComponent

    var jqxHeatMapModule = /** @class */ (function () {
        function jqxHeatMapModule() {
        }
        jqxHeatMapModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxHeatMapComponent],
                exports: [jqxHeatMapComponent]
            })
        ], jqxHeatMapModule);
        return jqxHeatMapModule;
    }());

    exports.jqxHeatMapComponent = jqxHeatMapComponent;
    exports.jqxHeatMapModule = jqxHeatMapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxheatmap.umd.js.map
