require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollview');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxscrollview', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxscrollview = {}), global.ng.core));
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
    var jqxScrollViewComponent = /** @class */ (function () {
        function jqxScrollViewComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
            // jqxScrollViewComponent events
            this.onPageChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxScrollViewComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxScrollViewComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxScrollView(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                            this.host.jqxScrollView(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxScrollViewComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxScrollViewComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxScrollViewComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxScrollViewComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxScrollViewComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
        };
        jqxScrollViewComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxScrollViewComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxScrollViewComponent.prototype.setOptions = function (options) {
            this.host.jqxScrollView('setOptions', options);
        };
        // jqxScrollViewComponent properties
        jqxScrollViewComponent.prototype.animationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('animationDuration', arg);
            }
            else {
                return this.host.jqxScrollView('animationDuration');
            }
        };
        jqxScrollViewComponent.prototype.bounceEnabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('bounceEnabled', arg);
            }
            else {
                return this.host.jqxScrollView('bounceEnabled');
            }
        };
        jqxScrollViewComponent.prototype.buttonsOffset = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('buttonsOffset', arg);
            }
            else {
                return this.host.jqxScrollView('buttonsOffset');
            }
        };
        jqxScrollViewComponent.prototype.currentPage = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('currentPage', arg);
            }
            else {
                return this.host.jqxScrollView('currentPage');
            }
        };
        jqxScrollViewComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('disabled', arg);
            }
            else {
                return this.host.jqxScrollView('disabled');
            }
        };
        jqxScrollViewComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('height', arg);
            }
            else {
                return this.host.jqxScrollView('height');
            }
        };
        jqxScrollViewComponent.prototype.moveThreshold = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('moveThreshold', arg);
            }
            else {
                return this.host.jqxScrollView('moveThreshold');
            }
        };
        jqxScrollViewComponent.prototype.showButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('showButtons', arg);
            }
            else {
                return this.host.jqxScrollView('showButtons');
            }
        };
        jqxScrollViewComponent.prototype.slideShow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('slideShow', arg);
            }
            else {
                return this.host.jqxScrollView('slideShow');
            }
        };
        jqxScrollViewComponent.prototype.slideDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('slideDuration', arg);
            }
            else {
                return this.host.jqxScrollView('slideDuration');
            }
        };
        jqxScrollViewComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('theme', arg);
            }
            else {
                return this.host.jqxScrollView('theme');
            }
        };
        jqxScrollViewComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('width', arg);
            }
            else {
                return this.host.jqxScrollView('width');
            }
        };
        // jqxScrollViewComponent functions
        jqxScrollViewComponent.prototype.back = function () {
            this.host.jqxScrollView('back');
        };
        jqxScrollViewComponent.prototype.changePage = function (index) {
            this.host.jqxScrollView('changePage', index);
        };
        jqxScrollViewComponent.prototype.forward = function () {
            this.host.jqxScrollView('forward');
        };
        jqxScrollViewComponent.prototype.refresh = function () {
            this.host.jqxScrollView('refresh');
        };
        jqxScrollViewComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
        };
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('bounceEnabled'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrBounceEnabled", void 0);
        __decorate([
            core.Input('buttonsOffset'),
            __metadata("design:type", Array)
        ], jqxScrollViewComponent.prototype, "attrButtonsOffset", void 0);
        __decorate([
            core.Input('currentPage'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrCurrentPage", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('moveThreshold'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrMoveThreshold", void 0);
        __decorate([
            core.Input('showButtons'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrShowButtons", void 0);
        __decorate([
            core.Input('slideShow'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrSlideShow", void 0);
        __decorate([
            core.Input('slideDuration'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrSlideDuration", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxScrollViewComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "onPageChanged", void 0);
        jqxScrollViewComponent = __decorate([
            core.Component({
                selector: 'jqxScrollView',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxScrollViewComponent);
        return jqxScrollViewComponent;
    }()); //jqxScrollViewComponent

    var jqxScrollViewModule = /** @class */ (function () {
        function jqxScrollViewModule() {
        }
        jqxScrollViewModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxScrollViewComponent],
                exports: [jqxScrollViewComponent]
            })
        ], jqxScrollViewModule);
        return jqxScrollViewModule;
    }());

    exports.jqxScrollViewComponent = jqxScrollViewComponent;
    exports.jqxScrollViewModule = jqxScrollViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxscrollview.umd.js.map
