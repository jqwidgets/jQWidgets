import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxribbon';
import '../jqwidgets/jqxlayout';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxdockinglayout';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxDockingLayoutComponent = /** @class */ (function () {
    function jqxDockingLayoutComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxDockingLayoutComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDockingLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDockingLayoutComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDockingLayoutComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDockingLayoutComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxDockingLayoutComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDockingLayoutComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
    };
    jqxDockingLayoutComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDockingLayoutComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDockingLayoutComponent.prototype.setOptions = function (options) {
        this.host.jqxDockingLayout('setOptions', options);
    };
    // jqxDockingLayoutComponent properties
    jqxDockingLayoutComponent.prototype.contextMenu = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    };
    jqxDockingLayoutComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    };
    jqxDockingLayoutComponent.prototype.layout = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    };
    jqxDockingLayoutComponent.prototype.minGroupHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    };
    jqxDockingLayoutComponent.prototype.minGroupWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    };
    jqxDockingLayoutComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    };
    jqxDockingLayoutComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    };
    jqxDockingLayoutComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    };
    jqxDockingLayoutComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    };
    // jqxDockingLayoutComponent functions
    jqxDockingLayoutComponent.prototype.addFloatGroup = function (width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    };
    jqxDockingLayoutComponent.prototype.destroy = function () {
        this.host.jqxDockingLayout('destroy');
    };
    jqxDockingLayoutComponent.prototype.loadLayout = function (layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    };
    jqxDockingLayoutComponent.prototype.refresh = function () {
        this.host.jqxDockingLayout('refresh');
    };
    jqxDockingLayoutComponent.prototype.render = function () {
        this.host.jqxDockingLayout('render');
    };
    jqxDockingLayoutComponent.prototype.saveLayout = function () {
        return this.host.jqxDockingLayout('saveLayout');
    };
    jqxDockingLayoutComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('dock', function (eventData) { _this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', function (eventData) { _this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', function (eventData) { _this.onFloat.emit(eventData); });
        this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
        this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
        this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
    };
    jqxDockingLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('contextMenu'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingLayoutComponent.prototype, "attrContextMenu", void 0);
    tslib_1.__decorate([
        Input('layout'),
        tslib_1.__metadata("design:type", Array)
    ], jqxDockingLayoutComponent.prototype, "attrLayout", void 0);
    tslib_1.__decorate([
        Input('minGroupHeight'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "attrMinGroupHeight", void 0);
    tslib_1.__decorate([
        Input('minGroupWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "attrMinGroupWidth", void 0);
    tslib_1.__decorate([
        Input('resizable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingLayoutComponent.prototype, "attrResizable", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingLayoutComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxDockingLayoutComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingLayoutComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onDock", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onFloatGroupClosed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onFloat", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onPin", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onResize", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingLayoutComponent.prototype, "onUnpin", void 0);
    jqxDockingLayoutComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxDockingLayout',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxDockingLayoutComponent);
    return jqxDockingLayoutComponent;
}()); //jqxDockingLayoutComponent
export { jqxDockingLayoutComponent };
