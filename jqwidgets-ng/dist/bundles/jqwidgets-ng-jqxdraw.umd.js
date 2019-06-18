require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdraw');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdraw', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdraw = {}), global.ng.core));
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
    var jqxDrawComponent = /** @class */ (function () {
        function jqxDrawComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['renderEngine'];
            this.elementRef = containerElement;
        }
        jqxDrawComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxDrawComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDraw(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDraw(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDraw(this.properties[i])) {
                            this.host.jqxDraw(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDrawComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDrawComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDrawComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDrawComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDrawComponent.prototype.createComponent = function (options) {
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
            this.host.append('div');
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
        };
        jqxDrawComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDrawComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDrawComponent.prototype.setOptions = function (options) {
            this.host.jqxDraw('setOptions', options);
        };
        // jqxDrawComponent properties
        jqxDrawComponent.prototype.renderEngine = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDraw('renderEngine', arg);
            }
            else {
                return this.host.jqxDraw('renderEngine');
            }
        };
        // jqxDrawComponent functions
        jqxDrawComponent.prototype.attr = function (element, attributes) {
            this.host.jqxDraw('attr', element, attributes);
        };
        jqxDrawComponent.prototype.circle = function (cx, cy, r, attributes) {
            return this.host.jqxDraw('circle', cx, cy, r, attributes);
        };
        jqxDrawComponent.prototype.clear = function () {
            this.host.jqxDraw('clear');
        };
        jqxDrawComponent.prototype.getAttr = function (element, attributes) {
            return this.host.jqxDraw('getAttr', element, attributes);
        };
        jqxDrawComponent.prototype.getSize = function () {
            return this.host.jqxDraw('getSize');
        };
        jqxDrawComponent.prototype.line = function (x1, y1, x2, y2, attributes) {
            return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
        };
        jqxDrawComponent.prototype.measureText = function (text, angle, attributes) {
            return this.host.jqxDraw('measureText', text, angle, attributes);
        };
        jqxDrawComponent.prototype.on = function (element, event, func) {
            this.host.jqxDraw('on', element, event, func);
        };
        jqxDrawComponent.prototype.off = function (element, event, func) {
            this.host.jqxDraw('off', element, event, func);
        };
        jqxDrawComponent.prototype.path = function (path, attributes) {
            return this.host.jqxDraw('path', path, attributes);
        };
        jqxDrawComponent.prototype.pieslice = function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
            return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
        };
        jqxDrawComponent.prototype.refresh = function () {
            this.host.jqxDraw('refresh');
        };
        jqxDrawComponent.prototype.rect = function (x, y, width, height, attributes) {
            return this.host.jqxDraw('rect', x, y, width, height, attributes);
        };
        jqxDrawComponent.prototype.saveAsJPEG = function (image, url) {
            this.host.jqxDraw('saveAsJPEG', image, url);
        };
        jqxDrawComponent.prototype.saveAsPNG = function (image, url) {
            this.host.jqxDraw('saveAsPNG', image, url);
        };
        jqxDrawComponent.prototype.text = function (text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
            return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
        };
        // jqxDrawComponent events
        jqxDrawComponent.prototype.__wireEvents__ = function () {
        };
        __decorate([
            core.Input('renderEngine'),
            __metadata("design:type", String)
        ], jqxDrawComponent.prototype, "attrRenderEngine", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDrawComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDrawComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDrawComponent.prototype, "autoCreate", void 0);
        jqxDrawComponent = __decorate([
            core.Component({
                selector: 'jqxDraw',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDrawComponent);
        return jqxDrawComponent;
    }()); //jqxDrawComponent

    var jqxDrawModule = /** @class */ (function () {
        function jqxDrawModule() {
        }
        jqxDrawModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDrawComponent],
                exports: [jqxDrawComponent]
            })
        ], jqxDrawModule);
        return jqxDrawModule;
    }());

    exports.jqxDrawComponent = jqxDrawComponent;
    exports.jqxDrawModule = jqxDrawModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxdraw.umd.js.map
