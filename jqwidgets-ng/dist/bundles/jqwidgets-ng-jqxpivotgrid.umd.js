require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxmenu');
require('../../jqwidgets-scripts/jqwidgets/jqxwindow');
require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
require('../../jqwidgets-scripts/jqwidgets/jqxinput');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');
require('../../jqwidgets-scripts/jqwidgets/jqxpivot');
require('../../jqwidgets-scripts/jqwidgets/jqxpivotgrid');
require('../../jqwidgets-scripts/jqwidgets/jqxpivotdesigner');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpivotgrid', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpivotgrid = {}), global.ng.core));
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
    var jqxPivotGridComponent = /** @class */ (function () {
        function jqxPivotGridComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['source', 'localization', 'scrollBarsEnabled', 'selectionEnabled', 'multipleSelectionEnabled', 'treeStyleRows', 'autoResize', 'itemsRenderer', 'cellsRenderer'];
            // jqxPivotGridComponent events
            this.onPivotitemexpanding = new core.EventEmitter();
            this.onPivotitemexpanded = new core.EventEmitter();
            this.onPivotitemcollapsing = new core.EventEmitter();
            this.onPivotitemcollapsed = new core.EventEmitter();
            this.onSortchanging = new core.EventEmitter();
            this.onSortchanged = new core.EventEmitter();
            this.onSortremoving = new core.EventEmitter();
            this.onSortremoved = new core.EventEmitter();
            this.onPivotitemselectionchanged = new core.EventEmitter();
            this.onPivotcellmousedown = new core.EventEmitter();
            this.onPivotcellmouseup = new core.EventEmitter();
            this.onPivotcellclick = new core.EventEmitter();
            this.onPivotcelldblclick = new core.EventEmitter();
            this.onPivotitemmousedown = new core.EventEmitter();
            this.onPivotitemmouseup = new core.EventEmitter();
            this.onPivotitemclick = new core.EventEmitter();
            this.onPivotitemdblclick = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        jqxPivotGridComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxPivotGridComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotGrid(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxPivotGrid(this.properties[i])) {
                            this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxPivotGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxPivotGridComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxPivotGridComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxPivotGridComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxPivotGridComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotGrid', options);
            this.__updateRect__();
        };
        jqxPivotGridComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxPivotGridComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
            this.refresh();
        };
        jqxPivotGridComponent.prototype.setOptions = function (options) {
            this.host.jqxPivotGrid('setOptions', options);
        };
        // jqxPivotGridComponent properties
        jqxPivotGridComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('source', arg);
            }
            else {
                return this.host.jqxPivotGrid('source');
            }
        };
        jqxPivotGridComponent.prototype.localization = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('localization', arg);
            }
            else {
                return this.host.jqxPivotGrid('localization');
            }
        };
        jqxPivotGridComponent.prototype.scrollBarsEnabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('scrollBarsEnabled', arg);
            }
            else {
                return this.host.jqxPivotGrid('scrollBarsEnabled');
            }
        };
        jqxPivotGridComponent.prototype.selectionEnabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('selectionEnabled', arg);
            }
            else {
                return this.host.jqxPivotGrid('selectionEnabled');
            }
        };
        jqxPivotGridComponent.prototype.multipleSelectionEnabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
            }
            else {
                return this.host.jqxPivotGrid('multipleSelectionEnabled');
            }
        };
        jqxPivotGridComponent.prototype.treeStyleRows = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('treeStyleRows', arg);
            }
            else {
                return this.host.jqxPivotGrid('treeStyleRows');
            }
        };
        jqxPivotGridComponent.prototype.autoResize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('autoResize', arg);
            }
            else {
                return this.host.jqxPivotGrid('autoResize');
            }
        };
        jqxPivotGridComponent.prototype.itemsRenderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('itemsRenderer', arg);
            }
            else {
                return this.host.jqxPivotGrid('itemsRenderer');
            }
        };
        jqxPivotGridComponent.prototype.cellsRenderer = function (arg) {
            if (arg !== undefined) {
                this.host.jqxPivotGrid('cellsRenderer', arg);
            }
            else {
                return this.host.jqxPivotGrid('cellsRenderer');
            }
        };
        // jqxPivotGridComponent functions
        jqxPivotGridComponent.prototype.getInstance = function () {
            return this.host.jqxPivotGrid('getInstance');
        };
        jqxPivotGridComponent.prototype.refresh = function () {
            this.host.jqxPivotGrid('refresh');
        };
        jqxPivotGridComponent.prototype.getPivotRows = function () {
            return this.host.jqxPivotGrid('getPivotRows');
        };
        jqxPivotGridComponent.prototype.getPivotColumns = function () {
            return this.host.jqxPivotGrid('getPivotColumns');
        };
        jqxPivotGridComponent.prototype.getPivotCells = function () {
            return this.host.jqxPivotGrid('getPivotCells');
        };
        jqxPivotGridComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('pivotitemexpanding', function (eventData) { _this.onPivotitemexpanding.emit(eventData); });
            this.host.on('pivotitemexpanded', function (eventData) { _this.onPivotitemexpanded.emit(eventData); });
            this.host.on('pivotitemcollapsing', function (eventData) { _this.onPivotitemcollapsing.emit(eventData); });
            this.host.on('pivotitemcollapsed', function (eventData) { _this.onPivotitemcollapsed.emit(eventData); });
            this.host.on('sortchanging', function (eventData) { _this.onSortchanging.emit(eventData); });
            this.host.on('sortchanged', function (eventData) { _this.onSortchanged.emit(eventData); });
            this.host.on('sortremoving', function (eventData) { _this.onSortremoving.emit(eventData); });
            this.host.on('sortremoved', function (eventData) { _this.onSortremoved.emit(eventData); });
            this.host.on('pivotitemselectionchanged', function (eventData) { _this.onPivotitemselectionchanged.emit(eventData); });
            this.host.on('pivotcellmousedown', function (eventData) { _this.onPivotcellmousedown.emit(eventData); });
            this.host.on('pivotcellmouseup', function (eventData) { _this.onPivotcellmouseup.emit(eventData); });
            this.host.on('pivotcellclick', function (eventData) { _this.onPivotcellclick.emit(eventData); });
            this.host.on('pivotcelldblclick', function (eventData) { _this.onPivotcelldblclick.emit(eventData); });
            this.host.on('pivotitemmousedown', function (eventData) { _this.onPivotitemmousedown.emit(eventData); });
            this.host.on('pivotitemmouseup', function (eventData) { _this.onPivotitemmouseup.emit(eventData); });
            this.host.on('pivotitemclick', function (eventData) { _this.onPivotitemclick.emit(eventData); });
            this.host.on('pivotitemdblclick', function (eventData) { _this.onPivotitemdblclick.emit(eventData); });
        };
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('scrollBarsEnabled'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "attrScrollBarsEnabled", void 0);
        __decorate([
            core.Input('selectionEnabled'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "attrSelectionEnabled", void 0);
        __decorate([
            core.Input('multipleSelectionEnabled'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "attrMultipleSelectionEnabled", void 0);
        __decorate([
            core.Input('treeStyleRows'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "attrTreeStyleRows", void 0);
        __decorate([
            core.Input('autoResize'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "attrAutoResize", void 0);
        __decorate([
            core.Input('itemsRenderer'),
            __metadata("design:type", Function)
        ], jqxPivotGridComponent.prototype, "attrItemsRenderer", void 0);
        __decorate([
            core.Input('cellsRenderer'),
            __metadata("design:type", Function)
        ], jqxPivotGridComponent.prototype, "attrCellsRenderer", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxPivotGridComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemexpanding", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemexpanded", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemcollapsing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemcollapsed", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onSortchanging", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onSortchanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onSortremoving", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onSortremoved", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemselectionchanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotcellmousedown", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotcellmouseup", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotcellclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotcelldblclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemmousedown", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemmouseup", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxPivotGridComponent.prototype, "onPivotitemdblclick", void 0);
        jqxPivotGridComponent = __decorate([
            core.Component({
                selector: 'jqxPivotGrid',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxPivotGridComponent);
        return jqxPivotGridComponent;
    }()); //jqxPivotGridComponent

    var jqxPivotGridModule = /** @class */ (function () {
        function jqxPivotGridModule() {
        }
        jqxPivotGridModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxPivotGridComponent],
                exports: [jqxPivotGridComponent]
            })
        ], jqxPivotGridModule);
        return jqxPivotGridModule;
    }());

    exports.jqxPivotGridComponent = jqxPivotGridComponent;
    exports.jqxPivotGridModule = jqxPivotGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxpivotgrid.umd.js.map
