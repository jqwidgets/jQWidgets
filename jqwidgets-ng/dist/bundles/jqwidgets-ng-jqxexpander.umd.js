require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxexpander');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxexpander', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxexpander = {}), global.ng.core));
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
    var jqxExpanderComponent = /** @class */ (function () {
        function jqxExpanderComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
            // jqxExpanderComponent events
            this.onCollapsing = new core.EventEmitter();
            this.onCollapsed = new core.EventEmitter();
            this.onExpanding = new core.EventEmitter();
            this.onExpanded = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxExpanderComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxExpanderComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxExpander(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                            this.host.jqxExpander(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxExpanderComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxExpanderComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxExpanderComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxExpanderComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxExpanderComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
        };
        jqxExpanderComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxExpanderComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxExpanderComponent.prototype.setOptions = function (options) {
            this.host.jqxExpander('setOptions', options);
        };
        // jqxExpanderComponent properties
        jqxExpanderComponent.prototype.animationType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('animationType', arg);
            }
            else {
                return this.host.jqxExpander('animationType');
            }
        };
        jqxExpanderComponent.prototype.arrowPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('arrowPosition', arg);
            }
            else {
                return this.host.jqxExpander('arrowPosition');
            }
        };
        jqxExpanderComponent.prototype.collapseAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('collapseAnimationDuration', arg);
            }
            else {
                return this.host.jqxExpander('collapseAnimationDuration');
            }
        };
        jqxExpanderComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('disabled', arg);
            }
            else {
                return this.host.jqxExpander('disabled');
            }
        };
        jqxExpanderComponent.prototype.expanded = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('expanded', arg);
            }
            else {
                return this.host.jqxExpander('expanded');
            }
        };
        jqxExpanderComponent.prototype.expandAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('expandAnimationDuration', arg);
            }
            else {
                return this.host.jqxExpander('expandAnimationDuration');
            }
        };
        jqxExpanderComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('height', arg);
            }
            else {
                return this.host.jqxExpander('height');
            }
        };
        jqxExpanderComponent.prototype.headerPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('headerPosition', arg);
            }
            else {
                return this.host.jqxExpander('headerPosition');
            }
        };
        jqxExpanderComponent.prototype.initContent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('initContent', arg);
            }
            else {
                return this.host.jqxExpander('initContent');
            }
        };
        jqxExpanderComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('rtl', arg);
            }
            else {
                return this.host.jqxExpander('rtl');
            }
        };
        jqxExpanderComponent.prototype.showArrow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('showArrow', arg);
            }
            else {
                return this.host.jqxExpander('showArrow');
            }
        };
        jqxExpanderComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('theme', arg);
            }
            else {
                return this.host.jqxExpander('theme');
            }
        };
        jqxExpanderComponent.prototype.toggleMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('toggleMode', arg);
            }
            else {
                return this.host.jqxExpander('toggleMode');
            }
        };
        jqxExpanderComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxExpander('width', arg);
            }
            else {
                return this.host.jqxExpander('width');
            }
        };
        // jqxExpanderComponent functions
        jqxExpanderComponent.prototype.collapse = function () {
            this.host.jqxExpander('collapse');
        };
        jqxExpanderComponent.prototype.disable = function () {
            this.host.jqxExpander('disable');
        };
        jqxExpanderComponent.prototype.destroy = function () {
            this.host.jqxExpander('destroy');
        };
        jqxExpanderComponent.prototype.enable = function () {
            this.host.jqxExpander('enable');
        };
        jqxExpanderComponent.prototype.expand = function () {
            this.host.jqxExpander('expand');
        };
        jqxExpanderComponent.prototype.focus = function () {
            this.host.jqxExpander('focus');
        };
        jqxExpanderComponent.prototype.getContent = function () {
            return this.host.jqxExpander('getContent');
        };
        jqxExpanderComponent.prototype.getHeaderContent = function () {
            return this.host.jqxExpander('getHeaderContent');
        };
        jqxExpanderComponent.prototype.invalidate = function () {
            this.host.jqxExpander('invalidate');
        };
        jqxExpanderComponent.prototype.refresh = function () {
            this.host.jqxExpander('refresh');
        };
        jqxExpanderComponent.prototype.render = function () {
            this.host.jqxExpander('render');
        };
        jqxExpanderComponent.prototype.setHeaderContent = function (headerContent) {
            this.host.jqxExpander('setHeaderContent', headerContent);
        };
        jqxExpanderComponent.prototype.setContent = function (content) {
            this.host.jqxExpander('setContent', content);
        };
        jqxExpanderComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('collapsing', function (eventData) { _this.onCollapsing.emit(eventData); });
            this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
            this.host.on('expanding', function (eventData) { _this.onExpanding.emit(eventData); });
            this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
        };
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxExpanderComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('arrowPosition'),
            __metadata("design:type", String)
        ], jqxExpanderComponent.prototype, "attrArrowPosition", void 0);
        __decorate([
            core.Input('collapseAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxExpanderComponent.prototype, "attrCollapseAnimationDuration", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxExpanderComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('expanded'),
            __metadata("design:type", Boolean)
        ], jqxExpanderComponent.prototype, "attrExpanded", void 0);
        __decorate([
            core.Input('expandAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxExpanderComponent.prototype, "attrExpandAnimationDuration", void 0);
        __decorate([
            core.Input('headerPosition'),
            __metadata("design:type", String)
        ], jqxExpanderComponent.prototype, "attrHeaderPosition", void 0);
        __decorate([
            core.Input('initContent'),
            __metadata("design:type", Function)
        ], jqxExpanderComponent.prototype, "attrInitContent", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxExpanderComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showArrow'),
            __metadata("design:type", Boolean)
        ], jqxExpanderComponent.prototype, "attrShowArrow", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxExpanderComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('toggleMode'),
            __metadata("design:type", String)
        ], jqxExpanderComponent.prototype, "attrToggleMode", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxExpanderComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "onCollapsing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "onCollapsed", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "onExpanding", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxExpanderComponent.prototype, "onExpanded", void 0);
        jqxExpanderComponent = __decorate([
            core.Component({
                selector: 'jqxExpander',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxExpanderComponent);
        return jqxExpanderComponent;
    }()); //jqxExpanderComponent

    var jqxExpanderModule = /** @class */ (function () {
        function jqxExpanderModule() {
        }
        jqxExpanderModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxExpanderComponent],
                exports: [jqxExpanderComponent]
            })
        ], jqxExpanderModule);
        return jqxExpanderModule;
    }());

    exports.jqxExpanderComponent = jqxExpanderComponent;
    exports.jqxExpanderModule = jqxExpanderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxexpander.umd.js.map
