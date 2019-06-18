require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');
require('../../jqwidgets-scripts/jqwidgets/jqxrangeselector');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxrangeselector', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxrangeselector = {}), global.ng.core));
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
    var jqxRangeSelectorComponent = /** @class */ (function () {
        function jqxRangeSelectorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
            // jqxRangeSelectorComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxRangeSelectorComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                            this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxRangeSelectorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxRangeSelectorComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxRangeSelectorComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxRangeSelectorComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxRangeSelectorComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
        };
        jqxRangeSelectorComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxRangeSelectorComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxRangeSelectorComponent.prototype.setOptions = function (options) {
            this.host.jqxRangeSelector('setOptions', options);
        };
        // jqxRangeSelectorComponent properties
        jqxRangeSelectorComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('disabled', arg);
            }
            else {
                return this.host.jqxRangeSelector('disabled');
            }
        };
        jqxRangeSelectorComponent.prototype.groupLabelsFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('groupLabelsFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('height', arg);
            }
            else {
                return this.host.jqxRangeSelector('height');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsFormat = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsFormat', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsFormat');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsOnTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsOnTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsOnTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.markersFormat = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('markersFormat', arg);
            }
            else {
                return this.host.jqxRangeSelector('markersFormat');
            }
        };
        jqxRangeSelectorComponent.prototype.markersFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('markersFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('markersFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.majorTicksInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('majorTicksInterval', arg);
            }
            else {
                return this.host.jqxRangeSelector('majorTicksInterval');
            }
        };
        jqxRangeSelectorComponent.prototype.minorTicksInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('minorTicksInterval', arg);
            }
            else {
                return this.host.jqxRangeSelector('minorTicksInterval');
            }
        };
        jqxRangeSelectorComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('max', arg);
            }
            else {
                return this.host.jqxRangeSelector('max');
            }
        };
        jqxRangeSelectorComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('min', arg);
            }
            else {
                return this.host.jqxRangeSelector('min');
            }
        };
        jqxRangeSelectorComponent.prototype.moveOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('moveOnClick', arg);
            }
            else {
                return this.host.jqxRangeSelector('moveOnClick');
            }
        };
        jqxRangeSelectorComponent.prototype.padding = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('padding', arg);
            }
            else {
                return this.host.jqxRangeSelector('padding');
            }
        };
        jqxRangeSelectorComponent.prototype.range = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('range', arg);
            }
            else {
                return this.host.jqxRangeSelector('range');
            }
        };
        jqxRangeSelectorComponent.prototype.resizable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('resizable', arg);
            }
            else {
                return this.host.jqxRangeSelector('resizable');
            }
        };
        jqxRangeSelectorComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('rtl', arg);
            }
            else {
                return this.host.jqxRangeSelector('rtl');
            }
        };
        jqxRangeSelectorComponent.prototype.showGroupLabels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showGroupLabels', arg);
            }
            else {
                return this.host.jqxRangeSelector('showGroupLabels');
            }
        };
        jqxRangeSelectorComponent.prototype.showMinorTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMinorTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMinorTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.snapToTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('snapToTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('snapToTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.showMajorLabels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMajorLabels', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMajorLabels');
            }
        };
        jqxRangeSelectorComponent.prototype.showMarkers = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMarkers', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMarkers');
            }
        };
        jqxRangeSelectorComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('theme', arg);
            }
            else {
                return this.host.jqxRangeSelector('theme');
            }
        };
        jqxRangeSelectorComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('width', arg);
            }
            else {
                return this.host.jqxRangeSelector('width');
            }
        };
        // jqxRangeSelectorComponent functions
        jqxRangeSelectorComponent.prototype.destroy = function () {
            this.host.jqxRangeSelector('destroy');
        };
        jqxRangeSelectorComponent.prototype.getRange = function () {
            return this.host.jqxRangeSelector('getRange');
        };
        jqxRangeSelectorComponent.prototype.render = function () {
            this.host.jqxRangeSelector('render');
        };
        jqxRangeSelectorComponent.prototype.refresh = function () {
            this.host.jqxRangeSelector('refresh');
        };
        jqxRangeSelectorComponent.prototype.setRange = function (from, to) {
            this.host.jqxRangeSelector('setRange', from, to);
        };
        jqxRangeSelectorComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('groupLabelsFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrGroupLabelsFormatFunction", void 0);
        __decorate([
            core.Input('labelsFormat'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsFormat", void 0);
        __decorate([
            core.Input('labelsFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsFormatFunction", void 0);
        __decorate([
            core.Input('labelsOnTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsOnTicks", void 0);
        __decorate([
            core.Input('markersFormat'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrMarkersFormat", void 0);
        __decorate([
            core.Input('markersFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrMarkersFormatFunction", void 0);
        __decorate([
            core.Input('majorTicksInterval'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMajorTicksInterval", void 0);
        __decorate([
            core.Input('minorTicksInterval'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMinorTicksInterval", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('moveOnClick'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrMoveOnClick", void 0);
        __decorate([
            core.Input('padding'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrPadding", void 0);
        __decorate([
            core.Input('range'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrRange", void 0);
        __decorate([
            core.Input('resizable'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrResizable", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showGroupLabels'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowGroupLabels", void 0);
        __decorate([
            core.Input('showMinorTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMinorTicks", void 0);
        __decorate([
            core.Input('snapToTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrSnapToTicks", void 0);
        __decorate([
            core.Input('showMajorLabels'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMajorLabels", void 0);
        __decorate([
            core.Input('showMarkers'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMarkers", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "onChange", void 0);
        jqxRangeSelectorComponent = __decorate([
            core.Component({
                selector: 'jqxRangeSelector',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxRangeSelectorComponent);
        return jqxRangeSelectorComponent;
    }()); //jqxRangeSelectorComponent

    var jqxRangeSelectorModule = /** @class */ (function () {
        function jqxRangeSelectorModule() {
        }
        jqxRangeSelectorModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxRangeSelectorComponent],
                exports: [jqxRangeSelectorComponent]
            })
        ], jqxRangeSelectorModule);
        return jqxRangeSelectorModule;
    }());

    exports.jqxRangeSelectorComponent = jqxRangeSelectorComponent;
    exports.jqxRangeSelectorModule = jqxRangeSelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxrangeselector.umd.js.map
