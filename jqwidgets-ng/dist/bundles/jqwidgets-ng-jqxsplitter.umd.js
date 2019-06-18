require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxsplitter');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxsplitter', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxsplitter = {}), global.ng.core));
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
    var jqxSplitterComponent = /** @class */ (function () {
        function jqxSplitterComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'orientation', 'panels', 'resizable', 'splitBarSize', 'showSplitBar', 'theme', 'width'];
            // jqxSplitterComponent events
            this.onCollapsed = new core.EventEmitter();
            this.onExpanded = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onResizeStart = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxSplitterComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxSplitterComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxSplitter(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                            this.host.jqxSplitter(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxSplitterComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxSplitterComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxSplitterComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxSplitterComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxSplitterComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
        };
        jqxSplitterComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxSplitterComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxSplitterComponent.prototype.setOptions = function (options) {
            this.host.jqxSplitter('setOptions', options);
        };
        // jqxSplitterComponent properties
        jqxSplitterComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('disabled', arg);
            }
            else {
                return this.host.jqxSplitter('disabled');
            }
        };
        jqxSplitterComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('height', arg);
            }
            else {
                return this.host.jqxSplitter('height');
            }
        };
        jqxSplitterComponent.prototype.orientation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('orientation', arg);
            }
            else {
                return this.host.jqxSplitter('orientation');
            }
        };
        jqxSplitterComponent.prototype.panels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('panels', arg);
            }
            else {
                return this.host.jqxSplitter('panels');
            }
        };
        jqxSplitterComponent.prototype.resizable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('resizable', arg);
            }
            else {
                return this.host.jqxSplitter('resizable');
            }
        };
        jqxSplitterComponent.prototype.splitBarSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('splitBarSize', arg);
            }
            else {
                return this.host.jqxSplitter('splitBarSize');
            }
        };
        jqxSplitterComponent.prototype.showSplitBar = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('showSplitBar', arg);
            }
            else {
                return this.host.jqxSplitter('showSplitBar');
            }
        };
        jqxSplitterComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('theme', arg);
            }
            else {
                return this.host.jqxSplitter('theme');
            }
        };
        jqxSplitterComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSplitter('width', arg);
            }
            else {
                return this.host.jqxSplitter('width');
            }
        };
        // jqxSplitterComponent functions
        jqxSplitterComponent.prototype.collapse = function () {
            this.host.jqxSplitter('collapse');
        };
        jqxSplitterComponent.prototype.destroy = function () {
            this.host.jqxSplitter('destroy');
        };
        jqxSplitterComponent.prototype.disable = function () {
            this.host.jqxSplitter('disable');
        };
        jqxSplitterComponent.prototype.enable = function () {
            this.host.jqxSplitter('enable');
        };
        jqxSplitterComponent.prototype.expand = function () {
            this.host.jqxSplitter('expand');
        };
        jqxSplitterComponent.prototype.render = function () {
            this.host.jqxSplitter('render');
        };
        jqxSplitterComponent.prototype.refresh = function () {
            this.host.jqxSplitter('refresh');
        };
        jqxSplitterComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
            this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
            this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
            this.host.on('resizeStart', function (eventData) { _this.onResizeStart.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxSplitterComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('orientation'),
            __metadata("design:type", String)
        ], jqxSplitterComponent.prototype, "attrOrientation", void 0);
        __decorate([
            core.Input('panels'),
            __metadata("design:type", Array)
        ], jqxSplitterComponent.prototype, "attrPanels", void 0);
        __decorate([
            core.Input('resizable'),
            __metadata("design:type", Boolean)
        ], jqxSplitterComponent.prototype, "attrResizable", void 0);
        __decorate([
            core.Input('splitBarSize'),
            __metadata("design:type", Number)
        ], jqxSplitterComponent.prototype, "attrSplitBarSize", void 0);
        __decorate([
            core.Input('showSplitBar'),
            __metadata("design:type", Boolean)
        ], jqxSplitterComponent.prototype, "attrShowSplitBar", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxSplitterComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxSplitterComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "onCollapsed", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "onExpanded", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "onResize", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSplitterComponent.prototype, "onResizeStart", void 0);
        jqxSplitterComponent = __decorate([
            core.Component({
                selector: 'jqxSplitter',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxSplitterComponent);
        return jqxSplitterComponent;
    }()); //jqxSplitterComponent

    var jqxSplitterModule = /** @class */ (function () {
        function jqxSplitterModule() {
        }
        jqxSplitterModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxSplitterComponent],
                exports: [jqxSplitterComponent]
            })
        ], jqxSplitterModule);
        return jqxSplitterModule;
    }());

    exports.jqxSplitterComponent = jqxSplitterComponent;
    exports.jqxSplitterModule = jqxSplitterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxsplitter.umd.js.map
