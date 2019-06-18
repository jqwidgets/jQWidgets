require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbuttons', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbuttons = {}), global.ng.core));
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
    var jqxButtonComponent = /** @class */ (function () {
        function jqxButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'enableDefault', 'cursor', 'textPosition', 'textImageRelation', 'theme', 'template', 'width', 'value'];
            // jqxButtonComponent events
            this.onClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxButtonComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxButton(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                            this.host.jqxButton(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxButtonComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxButtonComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
            this.host = this.widgetObject['host'];
            this.__wireEvents__();
        };
        jqxButtonComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxButtonComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxButtonComponent.prototype.setOptions = function (options) {
            this.host.jqxButton('setOptions', options);
        };
        // jqxButtonComponent properties
        jqxButtonComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('disabled', arg);
            }
            else {
                return this.host.jqxButton('disabled');
            }
        };
        jqxButtonComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('height', arg);
            }
            else {
                return this.host.jqxButton('height');
            }
        };
        jqxButtonComponent.prototype.imgSrc = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('imgSrc', arg);
            }
            else {
                return this.host.jqxButton('imgSrc');
            }
        };
        jqxButtonComponent.prototype.imgWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('imgWidth', arg);
            }
            else {
                return this.host.jqxButton('imgWidth');
            }
        };
        jqxButtonComponent.prototype.imgHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('imgHeight', arg);
            }
            else {
                return this.host.jqxButton('imgHeight');
            }
        };
        jqxButtonComponent.prototype.imgPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('imgPosition', arg);
            }
            else {
                return this.host.jqxButton('imgPosition');
            }
        };
        jqxButtonComponent.prototype.roundedCorners = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('roundedCorners', arg);
            }
            else {
                return this.host.jqxButton('roundedCorners');
            }
        };
        jqxButtonComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('rtl', arg);
            }
            else {
                return this.host.jqxButton('rtl');
            }
        };
        jqxButtonComponent.prototype.enableDefault = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('enableDefault', arg);
            }
            else {
                return this.host.jqxButton('enableDefault');
            }
        };
        jqxButtonComponent.prototype.cursor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('cursor', arg);
            }
            else {
                return this.host.jqxButton('cursor');
            }
        };
        jqxButtonComponent.prototype.textPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('textPosition', arg);
            }
            else {
                return this.host.jqxButton('textPosition');
            }
        };
        jqxButtonComponent.prototype.textImageRelation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('textImageRelation', arg);
            }
            else {
                return this.host.jqxButton('textImageRelation');
            }
        };
        jqxButtonComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('theme', arg);
            }
            else {
                return this.host.jqxButton('theme');
            }
        };
        jqxButtonComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('template', arg);
            }
            else {
                return this.host.jqxButton('template');
            }
        };
        jqxButtonComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('width', arg);
            }
            else {
                return this.host.jqxButton('width');
            }
        };
        jqxButtonComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxButton('value', arg);
            }
            else {
                return this.host.jqxButton('value');
            }
        };
        // jqxButtonComponent functions
        jqxButtonComponent.prototype.destroy = function () {
            this.host.jqxButton('destroy');
        };
        jqxButtonComponent.prototype.focus = function () {
            this.host.jqxButton('focus');
        };
        jqxButtonComponent.prototype.render = function () {
            this.host.jqxButton('render');
        };
        jqxButtonComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxButton('val', value);
            }
            else {
                return this.host.jqxButton('val');
            }
        };
        jqxButtonComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxButtonComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('imgSrc'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrImgSrc", void 0);
        __decorate([
            core.Input('imgWidth'),
            __metadata("design:type", Object)
        ], jqxButtonComponent.prototype, "attrImgWidth", void 0);
        __decorate([
            core.Input('imgHeight'),
            __metadata("design:type", Object)
        ], jqxButtonComponent.prototype, "attrImgHeight", void 0);
        __decorate([
            core.Input('imgPosition'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrImgPosition", void 0);
        __decorate([
            core.Input('roundedCorners'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrRoundedCorners", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxButtonComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('enableDefault'),
            __metadata("design:type", Boolean)
        ], jqxButtonComponent.prototype, "attrEnableDefault", void 0);
        __decorate([
            core.Input('cursor'),
            __metadata("design:type", Boolean)
        ], jqxButtonComponent.prototype, "attrCursor", void 0);
        __decorate([
            core.Input('textPosition'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrTextPosition", void 0);
        __decorate([
            core.Input('textImageRelation'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrTextImageRelation", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", String)
        ], jqxButtonComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxButtonComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxButtonComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxButtonComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxButtonComponent.prototype, "onClick", void 0);
        jqxButtonComponent = __decorate([
            core.Component({
                selector: 'jqxButton',
                template: '<button><ng-content></ng-content></button>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxButtonComponent);
        return jqxButtonComponent;
    }()); //jqxButtonComponent

    var jqxButtonModule = /** @class */ (function () {
        function jqxButtonModule() {
        }
        jqxButtonModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxButtonComponent],
                exports: [jqxButtonComponent]
            })
        ], jqxButtonModule);
        return jqxButtonModule;
    }());

    exports.jqxButtonComponent = jqxButtonComponent;
    exports.jqxButtonModule = jqxButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxbuttons.umd.js.map
