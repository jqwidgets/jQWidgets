require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxribbon');
require('../../jqwidgets-scripts/jqwidgets/jqxmenu');
require('../../jqwidgets-scripts/jqwidgets/jqxlayout');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxlayout', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxlayout = {}), global.ng.core));
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
    var jqxLayoutComponent = /** @class */ (function () {
        function jqxLayoutComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
            // jqxLayoutComponent events
            this.onPin = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onUnpin = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxLayoutComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxLayoutComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxLayout(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxLayout(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxLayout(this.properties[i])) {
                            this.host.jqxLayout(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxLayoutComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxLayoutComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxLayoutComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxLayoutComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxLayoutComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLayout', options);
        };
        jqxLayoutComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxLayoutComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxLayoutComponent.prototype.setOptions = function (options) {
            this.host.jqxLayout('setOptions', options);
        };
        // jqxLayoutComponent properties
        jqxLayoutComponent.prototype.contextMenu = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('contextMenu', arg);
            }
            else {
                return this.host.jqxLayout('contextMenu');
            }
        };
        jqxLayoutComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('height', arg);
            }
            else {
                return this.host.jqxLayout('height');
            }
        };
        jqxLayoutComponent.prototype.layout = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('layout', arg);
            }
            else {
                return this.host.jqxLayout('layout');
            }
        };
        jqxLayoutComponent.prototype.minGroupHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('minGroupHeight', arg);
            }
            else {
                return this.host.jqxLayout('minGroupHeight');
            }
        };
        jqxLayoutComponent.prototype.minGroupWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('minGroupWidth', arg);
            }
            else {
                return this.host.jqxLayout('minGroupWidth');
            }
        };
        jqxLayoutComponent.prototype.resizable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('resizable', arg);
            }
            else {
                return this.host.jqxLayout('resizable');
            }
        };
        jqxLayoutComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('rtl', arg);
            }
            else {
                return this.host.jqxLayout('rtl');
            }
        };
        jqxLayoutComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('theme', arg);
            }
            else {
                return this.host.jqxLayout('theme');
            }
        };
        jqxLayoutComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxLayout('width', arg);
            }
            else {
                return this.host.jqxLayout('width');
            }
        };
        // jqxLayoutComponent functions
        jqxLayoutComponent.prototype.destroy = function () {
            this.host.jqxLayout('destroy');
        };
        jqxLayoutComponent.prototype.loadLayout = function (Layout) {
            this.host.jqxLayout('loadLayout', Layout);
        };
        jqxLayoutComponent.prototype.refresh = function () {
            this.host.jqxLayout('refresh');
        };
        jqxLayoutComponent.prototype.render = function () {
            this.host.jqxLayout('render');
        };
        jqxLayoutComponent.prototype.saveLayout = function () {
            return this.host.jqxLayout('saveLayout');
        };
        jqxLayoutComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
            this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
            this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
        };
        __decorate([
            core.Input('contextMenu'),
            __metadata("design:type", Boolean)
        ], jqxLayoutComponent.prototype, "attrContextMenu", void 0);
        __decorate([
            core.Input('layout'),
            __metadata("design:type", Array)
        ], jqxLayoutComponent.prototype, "attrLayout", void 0);
        __decorate([
            core.Input('minGroupHeight'),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "attrMinGroupHeight", void 0);
        __decorate([
            core.Input('minGroupWidth'),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "attrMinGroupWidth", void 0);
        __decorate([
            core.Input('resizable'),
            __metadata("design:type", Boolean)
        ], jqxLayoutComponent.prototype, "attrResizable", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxLayoutComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxLayoutComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxLayoutComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "onPin", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "onResize", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxLayoutComponent.prototype, "onUnpin", void 0);
        jqxLayoutComponent = __decorate([
            core.Component({
                selector: 'jqxLayout',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxLayoutComponent);
        return jqxLayoutComponent;
    }()); //jqxLayoutComponent

    var jqxLayoutModule = /** @class */ (function () {
        function jqxLayoutModule() {
        }
        jqxLayoutModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxLayoutComponent],
                exports: [jqxLayoutComponent]
            })
        ], jqxLayoutModule);
        return jqxLayoutModule;
    }());

    exports.jqxLayoutComponent = jqxLayoutComponent;
    exports.jqxLayoutModule = jqxLayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxlayout.umd.js.map
