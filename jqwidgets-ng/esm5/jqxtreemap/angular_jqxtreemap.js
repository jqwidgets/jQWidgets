import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtreemap';
import '../jqwidgets/jqxtooltip';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxTreeMapComponent = /** @class */ (function () {
    function jqxTreeMapComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
        // jqxTreeMapComponent events
        this.onBindingComplete = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxTreeMapComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxTreeMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeMap(this.properties[i])) {
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTreeMapComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTreeMapComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTreeMapComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxTreeMapComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxTreeMapComponent.prototype.createComponent = function (options) {
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
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
    };
    jqxTreeMapComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTreeMapComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTreeMapComponent.prototype.setOptions = function (options) {
        this.host.jqxTreeMap('setOptions', options);
    };
    // jqxTreeMapComponent properties
    jqxTreeMapComponent.prototype.baseColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('baseColor', arg);
        }
        else {
            return this.host.jqxTreeMap('baseColor');
        }
    };
    jqxTreeMapComponent.prototype.colorRanges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRanges', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRanges');
        }
    };
    jqxTreeMapComponent.prototype.colorRange = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRange', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRange');
        }
    };
    jqxTreeMapComponent.prototype.colorMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorMode', arg);
        }
        else {
            return this.host.jqxTreeMap('colorMode');
        }
    };
    jqxTreeMapComponent.prototype.displayMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('displayMember', arg);
        }
        else {
            return this.host.jqxTreeMap('displayMember');
        }
    };
    jqxTreeMapComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('height', arg);
        }
        else {
            return this.host.jqxTreeMap('height');
        }
    };
    jqxTreeMapComponent.prototype.hoverEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('hoverEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('hoverEnabled');
        }
    };
    jqxTreeMapComponent.prototype.headerHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('headerHeight', arg);
        }
        else {
            return this.host.jqxTreeMap('headerHeight');
        }
    };
    jqxTreeMapComponent.prototype.legendLabel = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendLabel', arg);
        }
        else {
            return this.host.jqxTreeMap('legendLabel');
        }
    };
    jqxTreeMapComponent.prototype.legendPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendPosition', arg);
        }
        else {
            return this.host.jqxTreeMap('legendPosition');
        }
    };
    jqxTreeMapComponent.prototype.legendScaleCallback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendScaleCallback', arg);
        }
        else {
            return this.host.jqxTreeMap('legendScaleCallback');
        }
    };
    jqxTreeMapComponent.prototype.renderCallbacks = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('renderCallbacks', arg);
        }
        else {
            return this.host.jqxTreeMap('renderCallbacks');
        }
    };
    jqxTreeMapComponent.prototype.selectionEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('selectionEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('selectionEnabled');
        }
    };
    jqxTreeMapComponent.prototype.showLegend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('showLegend', arg);
        }
        else {
            return this.host.jqxTreeMap('showLegend');
        }
    };
    jqxTreeMapComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('source', arg);
        }
        else {
            return this.host.jqxTreeMap('source');
        }
    };
    jqxTreeMapComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('theme', arg);
        }
        else {
            return this.host.jqxTreeMap('theme');
        }
    };
    jqxTreeMapComponent.prototype.valueMember = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('valueMember', arg);
        }
        else {
            return this.host.jqxTreeMap('valueMember');
        }
    };
    jqxTreeMapComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('width', arg);
        }
        else {
            return this.host.jqxTreeMap('width');
        }
    };
    // jqxTreeMapComponent functions
    jqxTreeMapComponent.prototype.destroy = function () {
        this.host.jqxTreeMap('destroy');
    };
    jqxTreeMapComponent.prototype.render = function () {
        this.host.jqxTreeMap('render');
    };
    jqxTreeMapComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
    };
    jqxTreeMapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('baseColor'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrBaseColor", void 0);
    tslib_1.__decorate([
        Input('colorRanges'),
        tslib_1.__metadata("design:type", Array)
    ], jqxTreeMapComponent.prototype, "attrColorRanges", void 0);
    tslib_1.__decorate([
        Input('colorRange'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTreeMapComponent.prototype, "attrColorRange", void 0);
    tslib_1.__decorate([
        Input('colorMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrColorMode", void 0);
    tslib_1.__decorate([
        Input('displayMember'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrDisplayMember", void 0);
    tslib_1.__decorate([
        Input('hoverEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeMapComponent.prototype, "attrHoverEnabled", void 0);
    tslib_1.__decorate([
        Input('headerHeight'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTreeMapComponent.prototype, "attrHeaderHeight", void 0);
    tslib_1.__decorate([
        Input('legendLabel'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrLegendLabel", void 0);
    tslib_1.__decorate([
        Input('legendPosition'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "attrLegendPosition", void 0);
    tslib_1.__decorate([
        Input('legendScaleCallback'),
        tslib_1.__metadata("design:type", Function)
    ], jqxTreeMapComponent.prototype, "attrLegendScaleCallback", void 0);
    tslib_1.__decorate([
        Input('renderCallbacks'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "attrRenderCallbacks", void 0);
    tslib_1.__decorate([
        Input('selectionEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeMapComponent.prototype, "attrSelectionEnabled", void 0);
    tslib_1.__decorate([
        Input('showLegend'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeMapComponent.prototype, "attrShowLegend", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('valueMember'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeMapComponent.prototype, "attrValueMember", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeMapComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeMapComponent.prototype, "onBindingComplete", void 0);
    jqxTreeMapComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxTreeMap',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxTreeMapComponent);
    return jqxTreeMapComponent;
}()); //jqxTreeMapComponent
export { jqxTreeMapComponent };
