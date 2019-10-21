import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxtoolbar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxToolBarComponent = /** @class */ (function () {
    function jqxToolBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        // jqxToolBarComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxToolBarComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxToolBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxToolBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxToolBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxToolBarComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxToolBarComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxToolBarComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
    };
    jqxToolBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxToolBarComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxToolBarComponent.prototype.setOptions = function (options) {
        this.host.jqxToolBar('setOptions', options);
    };
    // jqxToolBarComponent properties
    jqxToolBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('disabled', arg);
        }
        else {
            return this.host.jqxToolBar('disabled');
        }
    };
    jqxToolBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('height', arg);
        }
        else {
            return this.host.jqxToolBar('height');
        }
    };
    jqxToolBarComponent.prototype.initTools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('initTools', arg);
        }
        else {
            return this.host.jqxToolBar('initTools');
        }
    };
    jqxToolBarComponent.prototype.minimizeWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minimizeWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minimizeWidth');
        }
    };
    jqxToolBarComponent.prototype.minWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minWidth');
        }
    };
    jqxToolBarComponent.prototype.maxWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('maxWidth', arg);
        }
        else {
            return this.host.jqxToolBar('maxWidth');
        }
    };
    jqxToolBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('rtl', arg);
        }
        else {
            return this.host.jqxToolBar('rtl');
        }
    };
    jqxToolBarComponent.prototype.tools = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('tools', arg);
        }
        else {
            return this.host.jqxToolBar('tools');
        }
    };
    jqxToolBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('theme', arg);
        }
        else {
            return this.host.jqxToolBar('theme');
        }
    };
    jqxToolBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('width', arg);
        }
        else {
            return this.host.jqxToolBar('width');
        }
    };
    // jqxToolBarComponent functions
    jqxToolBarComponent.prototype.addTool = function (type, position, separator, menuToolIninitialization) {
        this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    };
    jqxToolBarComponent.prototype.disableTool = function (index, disable) {
        this.host.jqxToolBar('disableTool', index, disable);
    };
    jqxToolBarComponent.prototype.destroy = function () {
        this.host.jqxToolBar('destroy');
    };
    jqxToolBarComponent.prototype.destroyTool = function (index) {
        this.host.jqxToolBar('destroyTool', index);
    };
    jqxToolBarComponent.prototype.getTools = function () {
        return this.host.jqxToolBar('getTools');
    };
    jqxToolBarComponent.prototype.render = function () {
        this.host.jqxToolBar('render');
    };
    jqxToolBarComponent.prototype.refresh = function () {
        this.host.jqxToolBar('refresh');
    };
    jqxToolBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxToolBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxToolBarComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('initTools'),
        tslib_1.__metadata("design:type", Function)
    ], jqxToolBarComponent.prototype, "attrInitTools", void 0);
    tslib_1.__decorate([
        Input('minimizeWidth'),
        tslib_1.__metadata("design:type", Number)
    ], jqxToolBarComponent.prototype, "attrMinimizeWidth", void 0);
    tslib_1.__decorate([
        Input('minWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "attrMinWidth", void 0);
    tslib_1.__decorate([
        Input('maxWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "attrMaxWidth", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxToolBarComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('tools'),
        tslib_1.__metadata("design:type", String)
    ], jqxToolBarComponent.prototype, "attrTools", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxToolBarComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxToolBarComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxToolBarComponent.prototype, "onOpen", void 0);
    jqxToolBarComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxToolbar',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxToolBarComponent);
    return jqxToolBarComponent;
}()); //jqxToolBarComponent
export { jqxToolBarComponent };
