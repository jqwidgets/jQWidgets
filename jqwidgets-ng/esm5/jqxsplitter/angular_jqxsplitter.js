import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsplitter';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxSplitterComponent = /** @class */ (function () {
    function jqxSplitterComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'orientation', 'panels', 'resizable', 'splitBarSize', 'showSplitBar', 'theme', 'width'];
        // jqxSplitterComponent events
        this.onCollapsed = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStart = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxSplitterComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxSplitterComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxSplitterComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxSplitterComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxSplitterComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxSplitterComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxSplitterComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
    };
    jqxSplitterComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxSplitterComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxSplitterComponent.prototype.setOptions = function (options) {
        this.host.jqxSplitter('setOptions', options);
    };
    // jqxSplitterComponent properties
    jqxSplitterComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('disabled', arg);
        }
        else {
            return this.host.jqxSplitter('disabled');
        }
    };
    jqxSplitterComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('height', arg);
        }
        else {
            return this.host.jqxSplitter('height');
        }
    };
    jqxSplitterComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('orientation', arg);
        }
        else {
            return this.host.jqxSplitter('orientation');
        }
    };
    jqxSplitterComponent.prototype.panels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('panels', arg);
        }
        else {
            return this.host.jqxSplitter('panels');
        }
    };
    jqxSplitterComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('resizable', arg);
        }
        else {
            return this.host.jqxSplitter('resizable');
        }
    };
    jqxSplitterComponent.prototype.splitBarSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('splitBarSize', arg);
        }
        else {
            return this.host.jqxSplitter('splitBarSize');
        }
    };
    jqxSplitterComponent.prototype.showSplitBar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('showSplitBar', arg);
        }
        else {
            return this.host.jqxSplitter('showSplitBar');
        }
    };
    jqxSplitterComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('theme', arg);
        }
        else {
            return this.host.jqxSplitter('theme');
        }
    };
    jqxSplitterComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('width', arg);
        }
        else {
            return this.host.jqxSplitter('width');
        }
    };
    // jqxSplitterComponent functions
    jqxSplitterComponent.prototype.collapse = function () {
        this.host.jqxSplitter('collapse');
    };
    jqxSplitterComponent.prototype.destroy = function () {
        this.host.jqxSplitter('destroy');
    };
    jqxSplitterComponent.prototype.disable = function () {
        this.host.jqxSplitter('disable');
    };
    jqxSplitterComponent.prototype.enable = function () {
        this.host.jqxSplitter('enable');
    };
    jqxSplitterComponent.prototype.expand = function () {
        this.host.jqxSplitter('expand');
    };
    jqxSplitterComponent.prototype.render = function () {
        this.host.jqxSplitter('render');
    };
    jqxSplitterComponent.prototype.refresh = function () {
        this.host.jqxSplitter('refresh');
    };
    jqxSplitterComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
        this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
        this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
        this.host.on('resizeStart', function (eventData) { _this.onResizeStart.emit(eventData); });
    };
    jqxSplitterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSplitterComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('orientation'),
        tslib_1.__metadata("design:type", String)
    ], jqxSplitterComponent.prototype, "attrOrientation", void 0);
    tslib_1.__decorate([
        Input('panels'),
        tslib_1.__metadata("design:type", Array)
    ], jqxSplitterComponent.prototype, "attrPanels", void 0);
    tslib_1.__decorate([
        Input('resizable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSplitterComponent.prototype, "attrResizable", void 0);
    tslib_1.__decorate([
        Input('splitBarSize'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSplitterComponent.prototype, "attrSplitBarSize", void 0);
    tslib_1.__decorate([
        Input('showSplitBar'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSplitterComponent.prototype, "attrShowSplitBar", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxSplitterComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSplitterComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "onCollapsed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "onExpanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "onResize", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSplitterComponent.prototype, "onResizeStart", void 0);
    jqxSplitterComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxSplitter',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxSplitterComponent);
    return jqxSplitterComponent;
}()); //jqxSplitterComponent
export { jqxSplitterComponent };
