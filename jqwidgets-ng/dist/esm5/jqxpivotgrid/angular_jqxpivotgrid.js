import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxpivot from '../../jqwidgets-scripts/jqwidgets/jqxpivot';
import * as jqxpivotgrid from '../../jqwidgets-scripts/jqwidgets/jqxpivotgrid';
import * as jqxpivotdesigner from '../../jqwidgets-scripts/jqwidgets/jqxpivotdesigner';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxPivotGridComponent = /** @class */ (function () {
    function jqxPivotGridComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['source', 'localization', 'scrollBarsEnabled', 'selectionEnabled', 'multipleSelectionEnabled', 'treeStyleRows', 'autoResize', 'itemsRenderer', 'cellsRenderer'];
        // jqxPivotGridComponent events
        this.onPivotitemexpanding = new EventEmitter();
        this.onPivotitemexpanded = new EventEmitter();
        this.onPivotitemcollapsing = new EventEmitter();
        this.onPivotitemcollapsed = new EventEmitter();
        this.onSortchanging = new EventEmitter();
        this.onSortchanged = new EventEmitter();
        this.onSortremoving = new EventEmitter();
        this.onSortremoved = new EventEmitter();
        this.onPivotitemselectionchanged = new EventEmitter();
        this.onPivotcellmousedown = new EventEmitter();
        this.onPivotcellmouseup = new EventEmitter();
        this.onPivotcellclick = new EventEmitter();
        this.onPivotcelldblclick = new EventEmitter();
        this.onPivotitemmousedown = new EventEmitter();
        this.onPivotitemmouseup = new EventEmitter();
        this.onPivotitemclick = new EventEmitter();
        this.onPivotitemdblclick = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(function () {
            _this.__updateRect__();
        });
    }
    jqxPivotGridComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxPivotGridComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPivotGrid(this.properties[i])) {
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxPivotGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxPivotGridComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxPivotGridComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxPivotGridComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxPivotGridComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotGrid', options);
        this.__updateRect__();
    };
    jqxPivotGridComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxPivotGridComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    jqxPivotGridComponent.prototype.setOptions = function (options) {
        this.host.jqxPivotGrid('setOptions', options);
    };
    // jqxPivotGridComponent properties
    jqxPivotGridComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('source', arg);
        }
        else {
            return this.host.jqxPivotGrid('source');
        }
    };
    jqxPivotGridComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('localization', arg);
        }
        else {
            return this.host.jqxPivotGrid('localization');
        }
    };
    jqxPivotGridComponent.prototype.scrollBarsEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('scrollBarsEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('scrollBarsEnabled');
        }
    };
    jqxPivotGridComponent.prototype.selectionEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('selectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('selectionEnabled');
        }
    };
    jqxPivotGridComponent.prototype.multipleSelectionEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('multipleSelectionEnabled');
        }
    };
    jqxPivotGridComponent.prototype.treeStyleRows = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('treeStyleRows', arg);
        }
        else {
            return this.host.jqxPivotGrid('treeStyleRows');
        }
    };
    jqxPivotGridComponent.prototype.autoResize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('autoResize', arg);
        }
        else {
            return this.host.jqxPivotGrid('autoResize');
        }
    };
    jqxPivotGridComponent.prototype.itemsRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('itemsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('itemsRenderer');
        }
    };
    jqxPivotGridComponent.prototype.cellsRenderer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('cellsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('cellsRenderer');
        }
    };
    // jqxPivotGridComponent functions
    jqxPivotGridComponent.prototype.getInstance = function () {
        return this.host.jqxPivotGrid('getInstance');
    };
    jqxPivotGridComponent.prototype.refresh = function () {
        this.host.jqxPivotGrid('refresh');
    };
    jqxPivotGridComponent.prototype.getPivotRows = function () {
        return this.host.jqxPivotGrid('getPivotRows');
    };
    jqxPivotGridComponent.prototype.getPivotColumns = function () {
        return this.host.jqxPivotGrid('getPivotColumns');
    };
    jqxPivotGridComponent.prototype.getPivotCells = function () {
        return this.host.jqxPivotGrid('getPivotCells');
    };
    jqxPivotGridComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('pivotitemexpanding', function (eventData) { _this.onPivotitemexpanding.emit(eventData); });
        this.host.on('pivotitemexpanded', function (eventData) { _this.onPivotitemexpanded.emit(eventData); });
        this.host.on('pivotitemcollapsing', function (eventData) { _this.onPivotitemcollapsing.emit(eventData); });
        this.host.on('pivotitemcollapsed', function (eventData) { _this.onPivotitemcollapsed.emit(eventData); });
        this.host.on('sortchanging', function (eventData) { _this.onSortchanging.emit(eventData); });
        this.host.on('sortchanged', function (eventData) { _this.onSortchanged.emit(eventData); });
        this.host.on('sortremoving', function (eventData) { _this.onSortremoving.emit(eventData); });
        this.host.on('sortremoved', function (eventData) { _this.onSortremoved.emit(eventData); });
        this.host.on('pivotitemselectionchanged', function (eventData) { _this.onPivotitemselectionchanged.emit(eventData); });
        this.host.on('pivotcellmousedown', function (eventData) { _this.onPivotcellmousedown.emit(eventData); });
        this.host.on('pivotcellmouseup', function (eventData) { _this.onPivotcellmouseup.emit(eventData); });
        this.host.on('pivotcellclick', function (eventData) { _this.onPivotcellclick.emit(eventData); });
        this.host.on('pivotcelldblclick', function (eventData) { _this.onPivotcelldblclick.emit(eventData); });
        this.host.on('pivotitemmousedown', function (eventData) { _this.onPivotitemmousedown.emit(eventData); });
        this.host.on('pivotitemmouseup', function (eventData) { _this.onPivotitemmouseup.emit(eventData); });
        this.host.on('pivotitemclick', function (eventData) { _this.onPivotitemclick.emit(eventData); });
        this.host.on('pivotitemdblclick', function (eventData) { _this.onPivotitemdblclick.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('localization'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "attrLocalization", void 0);
    tslib_1.__decorate([
        Input('scrollBarsEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "attrScrollBarsEnabled", void 0);
    tslib_1.__decorate([
        Input('selectionEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "attrSelectionEnabled", void 0);
    tslib_1.__decorate([
        Input('multipleSelectionEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "attrMultipleSelectionEnabled", void 0);
    tslib_1.__decorate([
        Input('treeStyleRows'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "attrTreeStyleRows", void 0);
    tslib_1.__decorate([
        Input('autoResize'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "attrAutoResize", void 0);
    tslib_1.__decorate([
        Input('itemsRenderer'),
        tslib_1.__metadata("design:type", Function)
    ], jqxPivotGridComponent.prototype, "attrItemsRenderer", void 0);
    tslib_1.__decorate([
        Input('cellsRenderer'),
        tslib_1.__metadata("design:type", Function)
    ], jqxPivotGridComponent.prototype, "attrCellsRenderer", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPivotGridComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemexpanding", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemexpanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemcollapsing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemcollapsed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onSortchanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onSortchanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onSortremoving", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onSortremoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemselectionchanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotcellmousedown", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotcellmouseup", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotcellclick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotcelldblclick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemmousedown", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemmouseup", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemclick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPivotGridComponent.prototype, "onPivotitemdblclick", void 0);
    jqxPivotGridComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxPivotGrid',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxPivotGridComponent);
    return jqxPivotGridComponent;
}()); //jqxPivotGridComponent
export { jqxPivotGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwaXZvdGdyaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cGl2b3RncmlkLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhwaXZvdGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFxQkcsK0JBQVksZ0JBQTRCO1FBQXhDLGlCQUtDO1FBWnFCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxtQkFBbUIsRUFBQyxrQkFBa0IsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxlQUFlLENBQUMsQ0FBQztRQXVOaEwsK0JBQStCO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdDQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7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bkM7UUFBVCxNQUFNLEVBQUU7O2lFQUFxQztJQUNwQztRQUFULE1BQU0sRUFBRTs7Z0VBQW9DO0lBQ25DO1FBQVQsTUFBTSxFQUFFOzs4RUFBa0Q7SUFDakQ7UUFBVCxNQUFNLEVBQUU7O3VFQUEyQztJQUMxQztRQUFULE1BQU0sRUFBRTs7cUVBQXlDO0lBQ3hDO1FBQVQsTUFBTSxFQUFFOzttRUFBdUM7SUFDdEM7UUFBVCxNQUFNLEVBQUU7O3NFQUEwQztJQUN6QztRQUFULE1BQU0sRUFBRTs7dUVBQTJDO0lBQzFDO1FBQVQsTUFBTSxFQUFFOztxRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7O21FQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTs7c0VBQTBDO0lBeFB6QyxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQXVCK0IsVUFBVTtPQXJCOUIscUJBQXFCLENBOFFqQztJQUFELDRCQUFDO0NBQUEsQUE5UUQsSUE4UUMsQ0FBQyx1QkFBdUI7U0E5UVoscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhQaXZvdEdyaWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFBpdm90R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGFueTtcbiAgIEBJbnB1dCgnc2Nyb2xsQmFyc0VuYWJsZWQnKSBhdHRyU2Nyb2xsQmFyc0VuYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGlvbkVuYWJsZWQnKSBhdHRyU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJykgYXR0ck11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndHJlZVN0eWxlUm93cycpIGF0dHJUcmVlU3R5bGVSb3dzOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvUmVzaXplJykgYXR0ckF1dG9SZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2l0ZW1zUmVuZGVyZXInKSBhdHRySXRlbXNSZW5kZXJlcjogKHBpdm90SXRlbToganF3aWRnZXRzLlBpdm90R3JpZEl0ZW1zUmVuZGVyZXJbJ3Bpdm90SXRlbSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2NlbGxzUmVuZGVyZXInKSBhdHRyQ2VsbHNSZW5kZXJlcjogKHBpdm90Q2VsbDoganF3aWRnZXRzLlBpdm90R3JpZENlbGxzUmVuZGVyZXJbJ3Bpdm90Q2VsbCddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnc291cmNlJywnbG9jYWxpemF0aW9uJywnc2Nyb2xsQmFyc0VuYWJsZWQnLCdzZWxlY3Rpb25FbmFibGVkJywnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJywndHJlZVN0eWxlUm93cycsJ2F1dG9SZXNpemUnLCdpdGVtc1JlbmRlcmVyJywnY2VsbHNSZW5kZXJlciddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhQaXZvdEdyaWQ7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICBKUVhMaXRlKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9fdXBkYXRlUmVjdF9fKCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UGl2b3RHcmlkJywgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFBpdm90R3JpZENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdsb2NhbGl6YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhcnNFbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3Njcm9sbEJhcnNFbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3Njcm9sbEJhcnNFbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGlvbkVuYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnc2VsZWN0aW9uRW5hYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRyZWVTdHlsZVJvd3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgndHJlZVN0eWxlUm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCd0cmVlU3R5bGVSb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9SZXNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnYXV0b1Jlc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdhdXRvUmVzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1zUmVuZGVyZXIoYXJnPzogKHBpdm90SXRlbToganF3aWRnZXRzLlBpdm90R3JpZEl0ZW1zUmVuZGVyZXJbJ3Bpdm90SXRlbSddKSA9PiBzdHJpbmcpOiAocGl2b3RJdGVtOiBqcXdpZGdldHMuUGl2b3RHcmlkSXRlbXNSZW5kZXJlclsncGl2b3RJdGVtJ10pID0+IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdpdGVtc1JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2l0ZW1zUmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2VsbHNSZW5kZXJlcihhcmc/OiAocGl2b3RDZWxsOiBqcXdpZGdldHMuUGl2b3RHcmlkQ2VsbHNSZW5kZXJlclsncGl2b3RDZWxsJ10pID0+IHN0cmluZyk6IChwaXZvdENlbGw6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDZWxsc1JlbmRlcmVyWydwaXZvdENlbGwnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2NlbGxzUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnY2VsbHNSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFBpdm90R3JpZENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGdldEluc3RhbmNlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnZ2V0SW5zdGFuY2UnKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RSb3dzKCk6IGpxd2lkZ2V0cy5QaXZvdEdyaWRSb3dzIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdnZXRQaXZvdFJvd3MnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RDb2x1bW5zKCk6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDb2x1bW5zIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdnZXRQaXZvdENvbHVtbnMnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RDZWxscygpOiBqcXdpZGdldHMuUGl2b3RHcmlkQ2VsbHMge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2dldFBpdm90Q2VsbHMnKTtcbiAgIH1cblxuXG4gICAvLyBqcXhQaXZvdEdyaWRDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1leHBhbmRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1leHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWNvbGxhcHNpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1jb2xsYXBzZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0Y2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0Y2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRyZW1vdmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRyZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtc2VsZWN0aW9uY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbG1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbG1vdXNldXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGNlbGxjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbGRibGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtbW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtbW91c2V1cCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtZGJsY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1leHBhbmRpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWV4cGFuZGluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1leHBhbmRlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtZXhwYW5kZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtY29sbGFwc2luZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtY29sbGFwc2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1jb2xsYXBzZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWNvbGxhcHNlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0Y2hhbmdpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnRjaGFuZ2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0Y2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydGNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydHJlbW92aW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0cmVtb3ZpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydHJlbW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnRyZW1vdmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbXNlbGVjdGlvbmNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbXNlbGVjdGlvbmNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsbW91c2Vkb3duJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGNlbGxtb3VzZWRvd24uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsbW91c2V1cCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RjZWxsbW91c2V1cC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGNlbGxjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RjZWxsY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsZGJsY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90Y2VsbGRibGNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbW1vdXNlZG93bicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtbW91c2Vkb3duLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbW1vdXNldXAnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbW1vdXNldXAuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbWRibGNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGl0ZW1kYmxjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UGl2b3RHcmlkQ29tcG9uZW50XG4iXX0=