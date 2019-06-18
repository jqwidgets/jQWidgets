require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxtooltip');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtooltip', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtooltip = {}), global.ng.core));
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
    var jqxTooltipComponent = /** @class */ (function () {
        function jqxTooltipComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
            // jqxTooltipComponent events
            this.onClose = new core.EventEmitter();
            this.onClosing = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onOpening = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTooltipComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTooltipComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTooltip(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                            this.host.jqxTooltip(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTooltipComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTooltipComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTooltipComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTooltipComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTooltipComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
        };
        jqxTooltipComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTooltipComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTooltipComponent.prototype.setOptions = function (options) {
            this.host.jqxTooltip('setOptions', options);
        };
        // jqxTooltipComponent properties
        jqxTooltipComponent.prototype.absolutePositionX = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('absolutePositionX', arg);
            }
            else {
                return this.host.jqxTooltip('absolutePositionX');
            }
        };
        jqxTooltipComponent.prototype.absolutePositionY = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('absolutePositionY', arg);
            }
            else {
                return this.host.jqxTooltip('absolutePositionY');
            }
        };
        jqxTooltipComponent.prototype.autoHide = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('autoHide', arg);
            }
            else {
                return this.host.jqxTooltip('autoHide');
            }
        };
        jqxTooltipComponent.prototype.autoHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('autoHideDelay', arg);
            }
            else {
                return this.host.jqxTooltip('autoHideDelay');
            }
        };
        jqxTooltipComponent.prototype.animationShowDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('animationShowDelay', arg);
            }
            else {
                return this.host.jqxTooltip('animationShowDelay');
            }
        };
        jqxTooltipComponent.prototype.animationHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('animationHideDelay', arg);
            }
            else {
                return this.host.jqxTooltip('animationHideDelay');
            }
        };
        jqxTooltipComponent.prototype.content = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('content', arg);
            }
            else {
                return this.host.jqxTooltip('content');
            }
        };
        jqxTooltipComponent.prototype.closeOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('closeOnClick', arg);
            }
            else {
                return this.host.jqxTooltip('closeOnClick');
            }
        };
        jqxTooltipComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('disabled', arg);
            }
            else {
                return this.host.jqxTooltip('disabled');
            }
        };
        jqxTooltipComponent.prototype.enableBrowserBoundsDetection = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
            }
            else {
                return this.host.jqxTooltip('enableBrowserBoundsDetection');
            }
        };
        jqxTooltipComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('height', arg);
            }
            else {
                return this.host.jqxTooltip('height');
            }
        };
        jqxTooltipComponent.prototype.left = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('left', arg);
            }
            else {
                return this.host.jqxTooltip('left');
            }
        };
        jqxTooltipComponent.prototype.name = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('name', arg);
            }
            else {
                return this.host.jqxTooltip('name');
            }
        };
        jqxTooltipComponent.prototype.opacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('opacity', arg);
            }
            else {
                return this.host.jqxTooltip('opacity');
            }
        };
        jqxTooltipComponent.prototype.position = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('position', arg);
            }
            else {
                return this.host.jqxTooltip('position');
            }
        };
        jqxTooltipComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('rtl', arg);
            }
            else {
                return this.host.jqxTooltip('rtl');
            }
        };
        jqxTooltipComponent.prototype.showDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('showDelay', arg);
            }
            else {
                return this.host.jqxTooltip('showDelay');
            }
        };
        jqxTooltipComponent.prototype.showArrow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('showArrow', arg);
            }
            else {
                return this.host.jqxTooltip('showArrow');
            }
        };
        jqxTooltipComponent.prototype.top = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('top', arg);
            }
            else {
                return this.host.jqxTooltip('top');
            }
        };
        jqxTooltipComponent.prototype.trigger = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('trigger', arg);
            }
            else {
                return this.host.jqxTooltip('trigger');
            }
        };
        jqxTooltipComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('theme', arg);
            }
            else {
                return this.host.jqxTooltip('theme');
            }
        };
        jqxTooltipComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTooltip('width', arg);
            }
            else {
                return this.host.jqxTooltip('width');
            }
        };
        // jqxTooltipComponent functions
        jqxTooltipComponent.prototype.close = function (index) {
            this.host.jqxTooltip('close', index);
        };
        jqxTooltipComponent.prototype.destroy = function () {
            this.host.jqxTooltip('destroy');
        };
        jqxTooltipComponent.prototype.open = function (left, top) {
            this.host.jqxTooltip('open', left, top);
        };
        jqxTooltipComponent.prototype.refresh = function () {
            this.host.jqxTooltip('refresh');
        };
        jqxTooltipComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('closing', function (eventData) { _this.onClosing.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('opening', function (eventData) { _this.onOpening.emit(eventData); });
        };
        __decorate([
            core.Input('absolutePositionX'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrAbsolutePositionX", void 0);
        __decorate([
            core.Input('absolutePositionY'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrAbsolutePositionY", void 0);
        __decorate([
            core.Input('autoHide'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrAutoHide", void 0);
        __decorate([
            core.Input('autoHideDelay'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrAutoHideDelay", void 0);
        __decorate([
            core.Input('animationShowDelay'),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "attrAnimationShowDelay", void 0);
        __decorate([
            core.Input('animationHideDelay'),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "attrAnimationHideDelay", void 0);
        __decorate([
            core.Input('content'),
            __metadata("design:type", String)
        ], jqxTooltipComponent.prototype, "attrContent", void 0);
        __decorate([
            core.Input('closeOnClick'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrCloseOnClick", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enableBrowserBoundsDetection'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
        __decorate([
            core.Input('left'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrLeft", void 0);
        __decorate([
            core.Input('name'),
            __metadata("design:type", String)
        ], jqxTooltipComponent.prototype, "attrName", void 0);
        __decorate([
            core.Input('opacity'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrOpacity", void 0);
        __decorate([
            core.Input('position'),
            __metadata("design:type", String)
        ], jqxTooltipComponent.prototype, "attrPosition", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showDelay'),
            __metadata("design:type", Number)
        ], jqxTooltipComponent.prototype, "attrShowDelay", void 0);
        __decorate([
            core.Input('showArrow'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "attrShowArrow", void 0);
        __decorate([
            core.Input('top'),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "attrTop", void 0);
        __decorate([
            core.Input('trigger'),
            __metadata("design:type", String)
        ], jqxTooltipComponent.prototype, "attrTrigger", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTooltipComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTooltipComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTooltipComponent.prototype, "onOpening", void 0);
        jqxTooltipComponent = __decorate([
            core.Component({
                selector: 'jqxTooltip',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTooltipComponent);
        return jqxTooltipComponent;
    }()); //jqxTooltipComponent

    var jqxTooltipModule = /** @class */ (function () {
        function jqxTooltipModule() {
        }
        jqxTooltipModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTooltipComponent],
                exports: [jqxTooltipComponent]
            })
        ], jqxTooltipModule);
        return jqxTooltipModule;
    }());

    exports.jqxTooltipComponent = jqxTooltipComponent;
    exports.jqxTooltipModule = jqxTooltipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtooltip.umd.js.map
