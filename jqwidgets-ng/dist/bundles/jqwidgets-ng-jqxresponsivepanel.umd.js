require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxresponsivepanel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxresponsivepanel = {}), global.ng.core));
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
    var jqxResponsivePanelComponent = /** @class */ (function () {
        function jqxResponsivePanelComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
            // jqxResponsivePanelComponent events
            this.onClose = new core.EventEmitter();
            this.onCollapse = new core.EventEmitter();
            this.onExpand = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxResponsivePanelComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxResponsivePanelComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                            this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxResponsivePanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxResponsivePanelComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxResponsivePanelComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxResponsivePanelComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxResponsivePanelComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
        };
        jqxResponsivePanelComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxResponsivePanelComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxResponsivePanelComponent.prototype.setOptions = function (options) {
            this.host.jqxResponsivePanel('setOptions', options);
        };
        // jqxResponsivePanelComponent properties
        jqxResponsivePanelComponent.prototype.animationDirection = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('animationDirection', arg);
            }
            else {
                return this.host.jqxResponsivePanel('animationDirection');
            }
        };
        jqxResponsivePanelComponent.prototype.animationHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('animationHideDelay', arg);
            }
            else {
                return this.host.jqxResponsivePanel('animationHideDelay');
            }
        };
        jqxResponsivePanelComponent.prototype.animationShowDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('animationShowDelay', arg);
            }
            else {
                return this.host.jqxResponsivePanel('animationShowDelay');
            }
        };
        jqxResponsivePanelComponent.prototype.animationType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('animationType', arg);
            }
            else {
                return this.host.jqxResponsivePanel('animationType');
            }
        };
        jqxResponsivePanelComponent.prototype.autoClose = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('autoClose', arg);
            }
            else {
                return this.host.jqxResponsivePanel('autoClose');
            }
        };
        jqxResponsivePanelComponent.prototype.collapseBreakpoint = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('collapseBreakpoint', arg);
            }
            else {
                return this.host.jqxResponsivePanel('collapseBreakpoint');
            }
        };
        jqxResponsivePanelComponent.prototype.collapseWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('collapseWidth', arg);
            }
            else {
                return this.host.jqxResponsivePanel('collapseWidth');
            }
        };
        jqxResponsivePanelComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('height', arg);
            }
            else {
                return this.host.jqxResponsivePanel('height');
            }
        };
        jqxResponsivePanelComponent.prototype.initContent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('initContent', arg);
            }
            else {
                return this.host.jqxResponsivePanel('initContent');
            }
        };
        jqxResponsivePanelComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('theme', arg);
            }
            else {
                return this.host.jqxResponsivePanel('theme');
            }
        };
        jqxResponsivePanelComponent.prototype.toggleButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('toggleButton', arg);
            }
            else {
                return this.host.jqxResponsivePanel('toggleButton');
            }
        };
        jqxResponsivePanelComponent.prototype.toggleButtonSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('toggleButtonSize', arg);
            }
            else {
                return this.host.jqxResponsivePanel('toggleButtonSize');
            }
        };
        jqxResponsivePanelComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxResponsivePanel('width', arg);
            }
            else {
                return this.host.jqxResponsivePanel('width');
            }
        };
        // jqxResponsivePanelComponent functions
        jqxResponsivePanelComponent.prototype.close = function () {
            this.host.jqxResponsivePanel('close');
        };
        jqxResponsivePanelComponent.prototype.destroy = function () {
            this.host.jqxResponsivePanel('destroy');
        };
        jqxResponsivePanelComponent.prototype.isCollapsed = function () {
            return this.host.jqxResponsivePanel('isCollapsed');
        };
        jqxResponsivePanelComponent.prototype.isOpened = function () {
            return this.host.jqxResponsivePanel('isOpened');
        };
        jqxResponsivePanelComponent.prototype.open = function () {
            this.host.jqxResponsivePanel('open');
        };
        jqxResponsivePanelComponent.prototype.refresh = function () {
            this.host.jqxResponsivePanel('refresh');
        };
        jqxResponsivePanelComponent.prototype.render = function () {
            this.host.jqxResponsivePanel('render');
        };
        jqxResponsivePanelComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
            this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        };
        __decorate([
            core.Input('animationDirection'),
            __metadata("design:type", String)
        ], jqxResponsivePanelComponent.prototype, "attrAnimationDirection", void 0);
        __decorate([
            core.Input('animationHideDelay'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrAnimationHideDelay", void 0);
        __decorate([
            core.Input('animationShowDelay'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrAnimationShowDelay", void 0);
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxResponsivePanelComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('autoClose'),
            __metadata("design:type", Boolean)
        ], jqxResponsivePanelComponent.prototype, "attrAutoClose", void 0);
        __decorate([
            core.Input('collapseBreakpoint'),
            __metadata("design:type", Number)
        ], jqxResponsivePanelComponent.prototype, "attrCollapseBreakpoint", void 0);
        __decorate([
            core.Input('collapseWidth'),
            __metadata("design:type", Number)
        ], jqxResponsivePanelComponent.prototype, "attrCollapseWidth", void 0);
        __decorate([
            core.Input('initContent'),
            __metadata("design:type", Function)
        ], jqxResponsivePanelComponent.prototype, "attrInitContent", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxResponsivePanelComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('toggleButton'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrToggleButton", void 0);
        __decorate([
            core.Input('toggleButtonSize'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrToggleButtonSize", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxResponsivePanelComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxResponsivePanelComponent.prototype, "onOpen", void 0);
        jqxResponsivePanelComponent = __decorate([
            core.Component({
                selector: 'jqxResponsivePanel',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxResponsivePanelComponent);
        return jqxResponsivePanelComponent;
    }()); //jqxResponsivePanelComponent

    var jqxResponsivePanelModule = /** @class */ (function () {
        function jqxResponsivePanelModule() {
        }
        jqxResponsivePanelModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxResponsivePanelComponent],
                exports: [jqxResponsivePanelComponent]
            })
        ], jqxResponsivePanelModule);
        return jqxResponsivePanelModule;
    }());

    exports.jqxResponsivePanelComponent = jqxResponsivePanelComponent;
    exports.jqxResponsivePanelModule = jqxResponsivePanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxresponsivepanel.umd.js.map
