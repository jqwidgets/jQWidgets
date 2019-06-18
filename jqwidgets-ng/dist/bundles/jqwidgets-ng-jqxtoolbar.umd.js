require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxlistbox');
require('../../jqwidgets-scripts/jqwidgets/jqxdropdownlist');
require('../../jqwidgets-scripts/jqwidgets/jqxcombobox');
require('../../jqwidgets-scripts/jqwidgets/jqxinput');
require('../../jqwidgets-scripts/jqwidgets/jqxtoolbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtoolbar', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtoolbar = {}), global.ng.core));
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
    var jqxToolBarComponent = /** @class */ (function () {
        function jqxToolBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
            // jqxToolBarComponent events
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxToolBarComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxToolBarComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxToolBar(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                            this.host.jqxToolBar(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxToolBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxToolBarComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxToolBarComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxToolBarComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxToolBarComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
        };
        jqxToolBarComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxToolBarComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxToolBarComponent.prototype.setOptions = function (options) {
            this.host.jqxToolBar('setOptions', options);
        };
        // jqxToolBarComponent properties
        jqxToolBarComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('disabled', arg);
            }
            else {
                return this.host.jqxToolBar('disabled');
            }
        };
        jqxToolBarComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('height', arg);
            }
            else {
                return this.host.jqxToolBar('height');
            }
        };
        jqxToolBarComponent.prototype.initTools = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('initTools', arg);
            }
            else {
                return this.host.jqxToolBar('initTools');
            }
        };
        jqxToolBarComponent.prototype.minimizeWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('minimizeWidth', arg);
            }
            else {
                return this.host.jqxToolBar('minimizeWidth');
            }
        };
        jqxToolBarComponent.prototype.minWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('minWidth', arg);
            }
            else {
                return this.host.jqxToolBar('minWidth');
            }
        };
        jqxToolBarComponent.prototype.maxWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('maxWidth', arg);
            }
            else {
                return this.host.jqxToolBar('maxWidth');
            }
        };
        jqxToolBarComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('rtl', arg);
            }
            else {
                return this.host.jqxToolBar('rtl');
            }
        };
        jqxToolBarComponent.prototype.tools = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('tools', arg);
            }
            else {
                return this.host.jqxToolBar('tools');
            }
        };
        jqxToolBarComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('theme', arg);
            }
            else {
                return this.host.jqxToolBar('theme');
            }
        };
        jqxToolBarComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToolBar('width', arg);
            }
            else {
                return this.host.jqxToolBar('width');
            }
        };
        // jqxToolBarComponent functions
        jqxToolBarComponent.prototype.addTool = function (type, position, separator, menuToolIninitialization) {
            this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
        };
        jqxToolBarComponent.prototype.disableTool = function (index, disable) {
            this.host.jqxToolBar('disableTool', index, disable);
        };
        jqxToolBarComponent.prototype.destroy = function () {
            this.host.jqxToolBar('destroy');
        };
        jqxToolBarComponent.prototype.destroyTool = function (index) {
            this.host.jqxToolBar('destroyTool', index);
        };
        jqxToolBarComponent.prototype.getTools = function () {
            return this.host.jqxToolBar('getTools');
        };
        jqxToolBarComponent.prototype.render = function () {
            this.host.jqxToolBar('render');
        };
        jqxToolBarComponent.prototype.refresh = function () {
            this.host.jqxToolBar('refresh');
        };
        jqxToolBarComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxToolBarComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('initTools'),
            __metadata("design:type", Function)
        ], jqxToolBarComponent.prototype, "attrInitTools", void 0);
        __decorate([
            core.Input('minimizeWidth'),
            __metadata("design:type", Number)
        ], jqxToolBarComponent.prototype, "attrMinimizeWidth", void 0);
        __decorate([
            core.Input('minWidth'),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "attrMinWidth", void 0);
        __decorate([
            core.Input('maxWidth'),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "attrMaxWidth", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxToolBarComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('tools'),
            __metadata("design:type", String)
        ], jqxToolBarComponent.prototype, "attrTools", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxToolBarComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxToolBarComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxToolBarComponent.prototype, "onOpen", void 0);
        jqxToolBarComponent = __decorate([
            core.Component({
                selector: 'jqxToolbar',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxToolBarComponent);
        return jqxToolBarComponent;
    }()); //jqxToolBarComponent

    var jqxToolBarModule = /** @class */ (function () {
        function jqxToolBarModule() {
        }
        jqxToolBarModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxToolBarComponent],
                exports: [jqxToolBarComponent]
            })
        ], jqxToolBarModule);
        return jqxToolBarModule;
    }());

    exports.jqxToolBarComponent = jqxToolBarComponent;
    exports.jqxToolBarModule = jqxToolBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtoolbar.umd.js.map
