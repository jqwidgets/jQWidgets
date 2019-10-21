import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxsortable';
import '../jqwidgets/jqxsplitter';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxkanban';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxKanbanComponent = /** @class */ (function () {
    function jqxKanbanComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['columnRenderer', 'columns', 'connectWith', 'headerHeight', 'headerWidth', 'height', 'itemRenderer', 'ready', 'rtl', 'source', 'resources', 'template', 'templateContent', 'theme', 'width'];
        // jqxKanbanComponent events
        this.onColumnAttrClicked = new EventEmitter();
        this.onColumnCollapsed = new EventEmitter();
        this.onColumnExpanded = new EventEmitter();
        this.onItemAttrClicked = new EventEmitter();
        this.onItemMoved = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxKanbanComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxKanbanComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKanban(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKanban(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKanban(this.properties[i])) {
                        this.host.jqxKanban(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxKanbanComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxKanbanComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxKanbanComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxKanbanComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxKanbanComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
    };
    jqxKanbanComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxKanbanComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxKanbanComponent.prototype.setOptions = function (options) {
        this.host.jqxKanban('setOptions', options);
    };
    // jqxKanbanComponent properties
    jqxKanbanComponent.prototype.columnRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columnRenderer', arg);
        }
        else {
            return this.host.jqxKanban('columnRenderer');
        }
    };
    jqxKanbanComponent.prototype.columns = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columns', arg);
        }
        else {
            return this.host.jqxKanban('columns');
        }
    };
    jqxKanbanComponent.prototype.connectWith = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('connectWith', arg);
        }
        else {
            return this.host.jqxKanban('connectWith');
        }
    };
    jqxKanbanComponent.prototype.headerHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerHeight', arg);
        }
        else {
            return this.host.jqxKanban('headerHeight');
        }
    };
    jqxKanbanComponent.prototype.headerWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerWidth', arg);
        }
        else {
            return this.host.jqxKanban('headerWidth');
        }
    };
    jqxKanbanComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('height', arg);
        }
        else {
            return this.host.jqxKanban('height');
        }
    };
    jqxKanbanComponent.prototype.itemRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('itemRenderer', arg);
        }
        else {
            return this.host.jqxKanban('itemRenderer');
        }
    };
    jqxKanbanComponent.prototype.ready = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('ready', arg);
        }
        else {
            return this.host.jqxKanban('ready');
        }
    };
    jqxKanbanComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('rtl', arg);
        }
        else {
            return this.host.jqxKanban('rtl');
        }
    };
    jqxKanbanComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('source', arg);
        }
        else {
            return this.host.jqxKanban('source');
        }
    };
    jqxKanbanComponent.prototype.resources = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('resources', arg);
        }
        else {
            return this.host.jqxKanban('resources');
        }
    };
    jqxKanbanComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('template', arg);
        }
        else {
            return this.host.jqxKanban('template');
        }
    };
    jqxKanbanComponent.prototype.templateContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('templateContent', arg);
        }
        else {
            return this.host.jqxKanban('templateContent');
        }
    };
    jqxKanbanComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('theme', arg);
        }
        else {
            return this.host.jqxKanban('theme');
        }
    };
    jqxKanbanComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('width', arg);
        }
        else {
            return this.host.jqxKanban('width');
        }
    };
    // jqxKanbanComponent functions
    jqxKanbanComponent.prototype.addItem = function (newItem) {
        this.host.jqxKanban('addItem', newItem);
    };
    jqxKanbanComponent.prototype.destroy = function () {
        this.host.jqxKanban('destroy');
    };
    jqxKanbanComponent.prototype.getColumn = function (dataField) {
        return this.host.jqxKanban('getColumn', dataField);
    };
    jqxKanbanComponent.prototype.getColumnItems = function (dataField) {
        return this.host.jqxKanban('getColumnItems', dataField);
    };
    jqxKanbanComponent.prototype.getItems = function () {
        return this.host.jqxKanban('getItems');
    };
    jqxKanbanComponent.prototype.removeItem = function (itemId) {
        this.host.jqxKanban('removeItem', itemId);
    };
    jqxKanbanComponent.prototype.updateItem = function (itemId, newContent) {
        this.host.jqxKanban('updateItem', itemId, newContent);
    };
    jqxKanbanComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('columnAttrClicked', function (eventData) { _this.onColumnAttrClicked.emit(eventData); });
        this.host.on('columnCollapsed', function (eventData) { _this.onColumnCollapsed.emit(eventData); });
        this.host.on('columnExpanded', function (eventData) { _this.onColumnExpanded.emit(eventData); });
        this.host.on('itemAttrClicked', function (eventData) { _this.onItemAttrClicked.emit(eventData); });
        this.host.on('itemMoved', function (eventData) { _this.onItemMoved.emit(eventData); });
    };
    jqxKanbanComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('columnRenderer'),
        tslib_1.__metadata("design:type", Function)
    ], jqxKanbanComponent.prototype, "attrColumnRenderer", void 0);
    tslib_1.__decorate([
        Input('columns'),
        tslib_1.__metadata("design:type", Array)
    ], jqxKanbanComponent.prototype, "attrColumns", void 0);
    tslib_1.__decorate([
        Input('connectWith'),
        tslib_1.__metadata("design:type", String)
    ], jqxKanbanComponent.prototype, "attrConnectWith", void 0);
    tslib_1.__decorate([
        Input('headerHeight'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrHeaderHeight", void 0);
    tslib_1.__decorate([
        Input('headerWidth'),
        tslib_1.__metadata("design:type", Number)
    ], jqxKanbanComponent.prototype, "attrHeaderWidth", void 0);
    tslib_1.__decorate([
        Input('itemRenderer'),
        tslib_1.__metadata("design:type", Function)
    ], jqxKanbanComponent.prototype, "attrItemRenderer", void 0);
    tslib_1.__decorate([
        Input('ready'),
        tslib_1.__metadata("design:type", Function)
    ], jqxKanbanComponent.prototype, "attrReady", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxKanbanComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('resources'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrResources", void 0);
    tslib_1.__decorate([
        Input('template'),
        tslib_1.__metadata("design:type", String)
    ], jqxKanbanComponent.prototype, "attrTemplate", void 0);
    tslib_1.__decorate([
        Input('templateContent'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrTemplateContent", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxKanbanComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxKanbanComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "onColumnAttrClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "onColumnCollapsed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "onColumnExpanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "onItemAttrClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxKanbanComponent.prototype, "onItemMoved", void 0);
    jqxKanbanComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxKanban',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxKanbanComponent);
    return jqxKanbanComponent;
}()); //jqxKanbanComponent
export { jqxKanbanComponent };
