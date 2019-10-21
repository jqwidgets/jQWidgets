import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxScrollBarComponent = /** @class */ (function () {
    function jqxScrollBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
        // jqxScrollBarComponent events
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxScrollBarComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxScrollBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxScrollBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxScrollBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxScrollBarComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxScrollBarComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxScrollBarComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
    };
    jqxScrollBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxScrollBarComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxScrollBarComponent.prototype.setOptions = function (options) {
        this.host.jqxScrollBar('setOptions', options);
    };
    // jqxScrollBarComponent properties
    jqxScrollBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('disabled', arg);
        }
        else {
            return this.host.jqxScrollBar('disabled');
        }
    };
    jqxScrollBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('height', arg);
        }
        else {
            return this.host.jqxScrollBar('height');
        }
    };
    jqxScrollBarComponent.prototype.largestep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('largestep', arg);
        }
        else {
            return this.host.jqxScrollBar('largestep');
        }
    };
    jqxScrollBarComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('min', arg);
        }
        else {
            return this.host.jqxScrollBar('min');
        }
    };
    jqxScrollBarComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('max', arg);
        }
        else {
            return this.host.jqxScrollBar('max');
        }
    };
    jqxScrollBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('rtl', arg);
        }
        else {
            return this.host.jqxScrollBar('rtl');
        }
    };
    jqxScrollBarComponent.prototype.step = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('step', arg);
        }
        else {
            return this.host.jqxScrollBar('step');
        }
    };
    jqxScrollBarComponent.prototype.showButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('showButtons', arg);
        }
        else {
            return this.host.jqxScrollBar('showButtons');
        }
    };
    jqxScrollBarComponent.prototype.thumbMinSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('thumbMinSize', arg);
        }
        else {
            return this.host.jqxScrollBar('thumbMinSize');
        }
    };
    jqxScrollBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('theme', arg);
        }
        else {
            return this.host.jqxScrollBar('theme');
        }
    };
    jqxScrollBarComponent.prototype.vertical = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('vertical', arg);
        }
        else {
            return this.host.jqxScrollBar('vertical');
        }
    };
    jqxScrollBarComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('value', arg);
        }
        else {
            return this.host.jqxScrollBar('value');
        }
    };
    jqxScrollBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('width', arg);
        }
        else {
            return this.host.jqxScrollBar('width');
        }
    };
    // jqxScrollBarComponent functions
    jqxScrollBarComponent.prototype.destroy = function () {
        this.host.jqxScrollBar('destroy');
    };
    jqxScrollBarComponent.prototype.isScrolling = function () {
        return this.host.jqxScrollBar('isScrolling');
    };
    jqxScrollBarComponent.prototype.setPosition = function (index) {
        this.host.jqxScrollBar('setPosition', index);
    };
    jqxScrollBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    jqxScrollBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollBarComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('largestep'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrLargestep", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollBarComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('step'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrStep", void 0);
    tslib_1.__decorate([
        Input('showButtons'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollBarComponent.prototype, "attrShowButtons", void 0);
    tslib_1.__decorate([
        Input('thumbMinSize'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrThumbMinSize", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxScrollBarComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('vertical'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollBarComponent.prototype, "attrVertical", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollBarComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollBarComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollBarComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollBarComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollBarComponent.prototype, "onValueChanged", void 0);
    jqxScrollBarComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxScrollBar',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxScrollBarComponent);
    return jqxScrollBarComponent;
}()); //jqxScrollBarComponent
export { jqxScrollBarComponent };
