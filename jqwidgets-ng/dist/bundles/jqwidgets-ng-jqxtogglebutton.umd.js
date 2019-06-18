require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtogglebutton', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtogglebutton = {}), global.ng.core));
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
    var jqxToggleButtonComponent = /** @class */ (function () {
        function jqxToggleButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
            // jqxToggleButtonComponent events
            this.onClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxToggleButtonComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxToggleButtonComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxToggleButton(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                            this.host.jqxToggleButton(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxToggleButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxToggleButtonComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxToggleButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxToggleButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxToggleButtonComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
        };
        jqxToggleButtonComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxToggleButtonComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxToggleButtonComponent.prototype.setOptions = function (options) {
            this.host.jqxToggleButton('setOptions', options);
        };
        // jqxToggleButtonComponent properties
        jqxToggleButtonComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('disabled', arg);
            }
            else {
                return this.host.jqxToggleButton('disabled');
            }
        };
        jqxToggleButtonComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('height', arg);
            }
            else {
                return this.host.jqxToggleButton('height');
            }
        };
        jqxToggleButtonComponent.prototype.imgSrc = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('imgSrc', arg);
            }
            else {
                return this.host.jqxToggleButton('imgSrc');
            }
        };
        jqxToggleButtonComponent.prototype.imgWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('imgWidth', arg);
            }
            else {
                return this.host.jqxToggleButton('imgWidth');
            }
        };
        jqxToggleButtonComponent.prototype.imgHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('imgHeight', arg);
            }
            else {
                return this.host.jqxToggleButton('imgHeight');
            }
        };
        jqxToggleButtonComponent.prototype.imgPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('imgPosition', arg);
            }
            else {
                return this.host.jqxToggleButton('imgPosition');
            }
        };
        jqxToggleButtonComponent.prototype.roundedCorners = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('roundedCorners', arg);
            }
            else {
                return this.host.jqxToggleButton('roundedCorners');
            }
        };
        jqxToggleButtonComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('rtl', arg);
            }
            else {
                return this.host.jqxToggleButton('rtl');
            }
        };
        jqxToggleButtonComponent.prototype.textPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('textPosition', arg);
            }
            else {
                return this.host.jqxToggleButton('textPosition');
            }
        };
        jqxToggleButtonComponent.prototype.textImageRelation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('textImageRelation', arg);
            }
            else {
                return this.host.jqxToggleButton('textImageRelation');
            }
        };
        jqxToggleButtonComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('theme', arg);
            }
            else {
                return this.host.jqxToggleButton('theme');
            }
        };
        jqxToggleButtonComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('template', arg);
            }
            else {
                return this.host.jqxToggleButton('template');
            }
        };
        jqxToggleButtonComponent.prototype.toggled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('toggled', arg);
            }
            else {
                return this.host.jqxToggleButton('toggled');
            }
        };
        jqxToggleButtonComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('width', arg);
            }
            else {
                return this.host.jqxToggleButton('width');
            }
        };
        jqxToggleButtonComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxToggleButton('value', arg);
            }
            else {
                return this.host.jqxToggleButton('value');
            }
        };
        // jqxToggleButtonComponent functions
        jqxToggleButtonComponent.prototype.check = function () {
            this.host.jqxToggleButton('check');
        };
        jqxToggleButtonComponent.prototype.destroy = function () {
            this.host.jqxToggleButton('destroy');
        };
        jqxToggleButtonComponent.prototype.focus = function () {
            this.host.jqxToggleButton('focus');
        };
        jqxToggleButtonComponent.prototype.render = function () {
            this.host.jqxToggleButton('render');
        };
        jqxToggleButtonComponent.prototype.toggle = function () {
            this.host.jqxToggleButton('toggle');
        };
        jqxToggleButtonComponent.prototype.unCheck = function () {
            this.host.jqxToggleButton('unCheck');
        };
        jqxToggleButtonComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxToggleButton('val', value);
            }
            else {
                return this.host.jqxToggleButton('val');
            }
        };
        jqxToggleButtonComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxToggleButtonComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('imgSrc'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrImgSrc", void 0);
        __decorate([
            core.Input('imgWidth'),
            __metadata("design:type", Object)
        ], jqxToggleButtonComponent.prototype, "attrImgWidth", void 0);
        __decorate([
            core.Input('imgHeight'),
            __metadata("design:type", Object)
        ], jqxToggleButtonComponent.prototype, "attrImgHeight", void 0);
        __decorate([
            core.Input('imgPosition'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrImgPosition", void 0);
        __decorate([
            core.Input('roundedCorners'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrRoundedCorners", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxToggleButtonComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('textPosition'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrTextPosition", void 0);
        __decorate([
            core.Input('textImageRelation'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrTextImageRelation", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('toggled'),
            __metadata("design:type", Boolean)
        ], jqxToggleButtonComponent.prototype, "attrToggled", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", String)
        ], jqxToggleButtonComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxToggleButtonComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxToggleButtonComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxToggleButtonComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxToggleButtonComponent.prototype, "onClick", void 0);
        jqxToggleButtonComponent = __decorate([
            core.Component({
                selector: 'jqxToggleButton',
                template: '<button><ng-content></ng-content></button>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxToggleButtonComponent);
        return jqxToggleButtonComponent;
    }()); //jqxToggleButtonComponent

    var jqxToggleButtonModule = /** @class */ (function () {
        function jqxToggleButtonModule() {
        }
        jqxToggleButtonModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxToggleButtonComponent],
                exports: [jqxToggleButtonComponent]
            })
        ], jqxToggleButtonModule);
        return jqxToggleButtonModule;
    }());

    exports.jqxToggleButtonComponent = jqxToggleButtonComponent;
    exports.jqxToggleButtonModule = jqxToggleButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtogglebutton.umd.js.map
