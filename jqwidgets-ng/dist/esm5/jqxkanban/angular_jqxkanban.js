import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';
import * as jqxsplitter from '../../jqwidgets-scripts/jqwidgets/jqxsplitter';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxkanban from '../../jqwidgets-scripts/jqwidgets/jqxkanban';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhrYW5iYW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4a2FuYmFuLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhrYW5iYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUF5QkcsNEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUEwUXZNLDRCQUE0QjtRQUNsQix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXpReEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVGLHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUks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QUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBc0I7SUFDZDtRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7O21FQUEwQjtJQUNuQztRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7O3lEQUFtQjtJQUNsQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7O3lEQUE0QjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzswREFBNkI7SUFFdkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7MERBQTRCO0lBNlF2QztRQUFULE1BQU0sRUFBRTs7bUVBQTBDO0lBQ3pDO1FBQVQsTUFBTSxFQUFFOztpRUFBd0M7SUFDdkM7UUFBVCxNQUFNLEVBQUU7O2dFQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTs7aUVBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzsyREFBa0M7SUFuU2pDLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7aURBMkIrQixVQUFVO09BekI5QixrQkFBa0IsQ0E2UzlCO0lBQUQseUJBQUM7Q0FBQSxBQTdTRCxJQTZTQyxDQUFDLG9CQUFvQjtTQTdTVCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEthbmJhbicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4S2FuYmFuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2NvbHVtblJlbmRlcmVyJykgYXR0ckNvbHVtblJlbmRlcmVyOiAoZWxlbWVudD86IGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5SZW5kZXJlclsnZWxlbWVudCddLCBjb2xsYXBzZWRFbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2xsYXBzZWRFbGVtZW50J10sIGNvbHVtbj86IGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5SZW5kZXJlclsnY29sdW1uJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2NvbHVtbnMnKSBhdHRyQ29sdW1uczogQXJyYXk8anF3aWRnZXRzLkthbmJhbkNvbHVtbnM+O1xuICAgQElucHV0KCdjb25uZWN0V2l0aCcpIGF0dHJDb25uZWN0V2l0aDogc3RyaW5nO1xuICAgQElucHV0KCdoZWFkZXJIZWlnaHQnKSBhdHRySGVhZGVySGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2hlYWRlcldpZHRoJykgYXR0ckhlYWRlcldpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoJ2l0ZW1SZW5kZXJlcicpIGF0dHJJdGVtUmVuZGVyZXI6IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsnZWxlbWVudCddLCBpdGVtPzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsnaXRlbSddLCByZXNvdXJjZT86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ3Jlc291cmNlJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3Jlc291cmNlcycpIGF0dHJSZXNvdXJjZXM6IGFueTtcbiAgIEBJbnB1dCgndGVtcGxhdGUnKSBhdHRyVGVtcGxhdGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGVtcGxhdGVDb250ZW50JykgYXR0clRlbXBsYXRlQ29udGVudDogYW55O1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2NvbHVtblJlbmRlcmVyJywnY29sdW1ucycsJ2Nvbm5lY3RXaXRoJywnaGVhZGVySGVpZ2h0JywnaGVhZGVyV2lkdGgnLCdoZWlnaHQnLCdpdGVtUmVuZGVyZXInLCdyZWFkeScsJ3J0bCcsJ3NvdXJjZScsJ3Jlc291cmNlcycsJ3RlbXBsYXRlJywndGVtcGxhdGVDb250ZW50JywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhLYW5iYW47XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4S2FuYmFuKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4S2FuYmFuKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEthbmJhbicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4S2FuYmFuQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGNvbHVtblJlbmRlcmVyKGFyZz86IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydlbGVtZW50J10sIGNvbGxhcHNlZEVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuQ29sdW1uUmVuZGVyZXJbJ2NvbGxhcHNlZEVsZW1lbnQnXSwgY29sdW1uPzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2x1bW4nXSkgPT4gdm9pZCk6IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydlbGVtZW50J10sIGNvbGxhcHNlZEVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuQ29sdW1uUmVuZGVyZXJbJ2NvbGxhcHNlZEVsZW1lbnQnXSwgY29sdW1uPzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2x1bW4nXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5SZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5SZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5zPik6IEFycmF5PGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5zPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2NvbHVtbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29ubmVjdFdpdGgoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Nvbm5lY3RXaXRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Nvbm5lY3RXaXRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlYWRlckhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2hlYWRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWFkZXJXaWR0aChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVyV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVyV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1SZW5kZXJlcihhcmc/OiAoZWxlbWVudD86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ2VsZW1lbnQnXSwgaXRlbT86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ2l0ZW0nXSwgcmVzb3VyY2U/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydyZXNvdXJjZSddKSA9PiB2b2lkKTogKGVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydlbGVtZW50J10sIGl0ZW0/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydpdGVtJ10sIHJlc291cmNlPzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsncmVzb3VyY2UnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdpdGVtUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaXRlbVJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWR5KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3JlYWR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3JlYWR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNvdXJjZXMoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3Jlc291cmNlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S2FuYmFuKCdyZXNvdXJjZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRlbXBsYXRlQ29udGVudChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigndGVtcGxhdGVDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlQ29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4S2FuYmFuQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkSXRlbShuZXdJdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2FkZEl0ZW0nLCBuZXdJdGVtKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZ2V0Q29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKToganF3aWRnZXRzLkthbmJhbkNvbHVtbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2dldENvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldENvbHVtbkl0ZW1zKGRhdGFGaWVsZDogc3RyaW5nKTogQXJyYXk8anF3aWRnZXRzLkthbmJhblNvdXJjZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2dldENvbHVtbkl0ZW1zJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0SXRlbXMoKToganF3aWRnZXRzLkthbmJhblNvdXJjZSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignZ2V0SXRlbXMnKTtcbiAgIH1cblxuICAgcmVtb3ZlSXRlbShpdGVtSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigncmVtb3ZlSXRlbScsIGl0ZW1JZCk7XG4gICB9XG5cbiAgIHVwZGF0ZUl0ZW0oaXRlbUlkOiBzdHJpbmcsIG5ld0NvbnRlbnQ6IGpxd2lkZ2V0cy5LYW5iYW5VcGRhdGVJdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCd1cGRhdGVJdGVtJywgaXRlbUlkLCBuZXdDb250ZW50KTtcbiAgIH1cblxuXG4gICAvLyBqcXhLYW5iYW5Db21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25Db2x1bW5BdHRyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbkNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbkV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbUF0dHJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbU1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1uQXR0ckNsaWNrZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtbkF0dHJDbGlja2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbkNvbGxhcHNlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1uQ29sbGFwc2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbkV4cGFuZGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5FeHBhbmRlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtQXR0ckNsaWNrZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1BdHRyQ2xpY2tlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtTW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1Nb3ZlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4S2FuYmFuQ29tcG9uZW50XG4iXX0=