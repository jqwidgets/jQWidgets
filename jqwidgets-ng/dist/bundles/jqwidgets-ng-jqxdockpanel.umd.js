require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdockpanel');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdockpanel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdockpanel = {}), global.ng.core));
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
    var jqxDockPanelComponent = /** @class */ (function () {
        function jqxDockPanelComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'lastchildfill', 'width'];
            // jqxDockPanelComponent events
            this.onLayout = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDockPanelComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxDockPanelComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDockPanel(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDockPanel(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDockPanel(this.properties[i])) {
                            this.host.jqxDockPanel(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDockPanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDockPanelComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDockPanelComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDockPanelComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDockPanelComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockPanel', options);
        };
        jqxDockPanelComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDockPanelComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDockPanelComponent.prototype.setOptions = function (options) {
            this.host.jqxDockPanel('setOptions', options);
        };
        // jqxDockPanelComponent properties
        jqxDockPanelComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDockPanel('disabled', arg);
            }
            else {
                return this.host.jqxDockPanel('disabled');
            }
        };
        jqxDockPanelComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDockPanel('height', arg);
            }
            else {
                return this.host.jqxDockPanel('height');
            }
        };
        jqxDockPanelComponent.prototype.lastchildfill = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDockPanel('lastchildfill', arg);
            }
            else {
                return this.host.jqxDockPanel('lastchildfill');
            }
        };
        jqxDockPanelComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDockPanel('width', arg);
            }
            else {
                return this.host.jqxDockPanel('width');
            }
        };
        // jqxDockPanelComponent functions
        jqxDockPanelComponent.prototype.refresh = function () {
            this.host.jqxDockPanel('refresh');
        };
        jqxDockPanelComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('layout', function (eventData) { _this.onLayout.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDockPanelComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('lastchildfill'),
            __metadata("design:type", Boolean)
        ], jqxDockPanelComponent.prototype, "attrLastchildfill", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDockPanelComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDockPanelComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDockPanelComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDockPanelComponent.prototype, "onLayout", void 0);
        jqxDockPanelComponent = __decorate([
            core.Component({
                selector: 'jqxDockPanel',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDockPanelComponent);
        return jqxDockPanelComponent;
    }()); //jqxDockPanelComponent

    var jqxDockPanelModule = /** @class */ (function () {
        function jqxDockPanelModule() {
        }
        jqxDockPanelModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDockPanelComponent],
                exports: [jqxDockPanelComponent]
            })
        ], jqxDockPanelModule);
        return jqxDockPanelModule;
    }());

    exports.jqxDockPanelComponent = jqxDockPanelComponent;
    exports.jqxDockPanelModule = jqxDockPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxdockpanel.umd.js.map
