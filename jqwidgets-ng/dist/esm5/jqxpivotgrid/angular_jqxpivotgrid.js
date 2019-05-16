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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
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
        JQXLite(window).resize((/**
         * @return {?}
         */
        function () {
            _this.__updateRect__();
        }));
    }
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxPivotGridComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxPivotGridComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxPivotGridComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxPivotGridComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPivotGridComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxPivotGridComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxPivotGridComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxPivotGrid('setOptions', options);
    };
    // jqxPivotGridComponent properties
    // jqxPivotGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.source = 
    // jqxPivotGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('source', arg);
        }
        else {
            return this.host.jqxPivotGrid('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('localization', arg);
        }
        else {
            return this.host.jqxPivotGrid('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.scrollBarsEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('scrollBarsEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('scrollBarsEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.selectionEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('selectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('selectionEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.multipleSelectionEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('multipleSelectionEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.treeStyleRows = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('treeStyleRows', arg);
        }
        else {
            return this.host.jqxPivotGrid('treeStyleRows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.autoResize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('autoResize', arg);
        }
        else {
            return this.host.jqxPivotGrid('autoResize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.itemsRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('itemsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('itemsRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxPivotGridComponent.prototype.cellsRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('cellsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('cellsRenderer');
        }
    };
    // jqxPivotGridComponent functions
    // jqxPivotGridComponent functions
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.getInstance = 
    // jqxPivotGridComponent functions
    /**
     * @return {?}
     */
    function () {
        return this.host.jqxPivotGrid('getInstance');
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxPivotGrid('refresh');
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.getPivotRows = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPivotGrid('getPivotRows');
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.getPivotColumns = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPivotGrid('getPivotColumns');
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.getPivotCells = /**
     * @return {?}
     */
    function () {
        return this.host.jqxPivotGrid('getPivotCells');
    };
    /**
     * @return {?}
     */
    jqxPivotGridComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('pivotitemexpanding', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemexpanding.emit(eventData); }));
        this.host.on('pivotitemexpanded', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemexpanded.emit(eventData); }));
        this.host.on('pivotitemcollapsing', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemcollapsing.emit(eventData); }));
        this.host.on('pivotitemcollapsed', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemcollapsed.emit(eventData); }));
        this.host.on('sortchanging', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSortchanging.emit(eventData); }));
        this.host.on('sortchanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSortchanged.emit(eventData); }));
        this.host.on('sortremoving', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSortremoving.emit(eventData); }));
        this.host.on('sortremoved', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSortremoved.emit(eventData); }));
        this.host.on('pivotitemselectionchanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemselectionchanged.emit(eventData); }));
        this.host.on('pivotcellmousedown', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotcellmousedown.emit(eventData); }));
        this.host.on('pivotcellmouseup', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotcellmouseup.emit(eventData); }));
        this.host.on('pivotcellclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotcellclick.emit(eventData); }));
        this.host.on('pivotcelldblclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotcelldblclick.emit(eventData); }));
        this.host.on('pivotitemmousedown', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemmousedown.emit(eventData); }));
        this.host.on('pivotitemmouseup', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemmouseup.emit(eventData); }));
        this.host.on('pivotitemclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemclick.emit(eventData); }));
        this.host.on('pivotitemdblclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPivotitemdblclick.emit(eventData); }));
    };
    jqxPivotGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxPivotGrid',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxPivotGridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxPivotGridComponent.propDecorators = {
        attrSource: [{ type: Input, args: ['source',] }],
        attrLocalization: [{ type: Input, args: ['localization',] }],
        attrScrollBarsEnabled: [{ type: Input, args: ['scrollBarsEnabled',] }],
        attrSelectionEnabled: [{ type: Input, args: ['selectionEnabled',] }],
        attrMultipleSelectionEnabled: [{ type: Input, args: ['multipleSelectionEnabled',] }],
        attrTreeStyleRows: [{ type: Input, args: ['treeStyleRows',] }],
        attrAutoResize: [{ type: Input, args: ['autoResize',] }],
        attrItemsRenderer: [{ type: Input, args: ['itemsRenderer',] }],
        attrCellsRenderer: [{ type: Input, args: ['cellsRenderer',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onPivotitemexpanding: [{ type: Output }],
        onPivotitemexpanded: [{ type: Output }],
        onPivotitemcollapsing: [{ type: Output }],
        onPivotitemcollapsed: [{ type: Output }],
        onSortchanging: [{ type: Output }],
        onSortchanged: [{ type: Output }],
        onSortremoving: [{ type: Output }],
        onSortremoved: [{ type: Output }],
        onPivotitemselectionchanged: [{ type: Output }],
        onPivotcellmousedown: [{ type: Output }],
        onPivotcellmouseup: [{ type: Output }],
        onPivotcellclick: [{ type: Output }],
        onPivotcelldblclick: [{ type: Output }],
        onPivotitemmousedown: [{ type: Output }],
        onPivotitemmouseup: [{ type: Output }],
        onPivotitemclick: [{ type: Output }],
        onPivotitemdblclick: [{ type: Output }]
    };
    return jqxPivotGridComponent;
}()); //jqxPivotGridComponent
export { jqxPivotGridComponent };
if (false) {
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrSource;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrScrollBarsEnabled;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrSelectionEnabled;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrMultipleSelectionEnabled;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrTreeStyleRows;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrAutoResize;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrItemsRenderer;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrCellsRenderer;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPivotGridComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPivotGridComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPivotGridComponent.prototype.properties;
    /** @type {?} */
    jqxPivotGridComponent.prototype.host;
    /** @type {?} */
    jqxPivotGridComponent.prototype.elementRef;
    /** @type {?} */
    jqxPivotGridComponent.prototype.widgetObject;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemexpanding;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemexpanded;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemcollapsing;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemcollapsed;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onSortchanging;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onSortchanged;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onSortremoving;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onSortremoved;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemselectionchanged;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotcellmousedown;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotcellmouseup;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotcellclick;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotcelldblclick;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemmousedown;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemmouseup;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemclick;
    /** @type {?} */
    jqxPivotGridComponent.prototype.onPivotitemdblclick;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwaXZvdGdyaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cGl2b3RncmlkLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhwaXZvdGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTBCRywrQkFBWSxnQkFBNEI7UUFBeEMsaUJBS0M7UUFacUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLGtCQUFrQixFQUFDLDBCQUEwQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGVBQWUsQ0FBQyxDQUFDOztRQXdOdEsseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsZ0NBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0Qyx3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QUNOLE1BQU07cUNBQ04sTUFBTTttQ0FDTixNQUFNO3NDQUNOLE1BQU07O0lBc0JWLDRCQUFDO0NBQUEsQUFuUkQsSUFtUkMsQ0FBQyx1QkFBdUI7U0E5UVoscUJBQXFCOzs7SUFFL0IsMkNBQWlDOztJQUNqQyxpREFBNkM7O0lBQzdDLHNEQUEyRDs7SUFDM0QscURBQXlEOztJQUN6RCw2REFBeUU7O0lBQ3pFLGtEQUFtRDs7SUFDbkQsK0NBQTZDOztJQUM3QyxrREFBZ0g7O0lBQ2hILGtEQUFnSDs7SUFDaEgsMENBQTJDOztJQUMzQywyQ0FBNkM7O0lBRTdDLDJDQUFpRDs7SUFFakQsMkNBQWdMOztJQUNoTCxxQ0FBVTs7SUFDViwyQ0FBdUI7O0lBQ3ZCLDZDQUFzQzs7SUFxTnRDLHFEQUFvRDs7SUFDcEQsb0RBQW1EOztJQUNuRCxzREFBcUQ7O0lBQ3JELHFEQUFvRDs7SUFDcEQsK0NBQThDOztJQUM5Qyw4Q0FBNkM7O0lBQzdDLCtDQUE4Qzs7SUFDOUMsOENBQTZDOztJQUM3Qyw0REFBMkQ7O0lBQzNELHFEQUFvRDs7SUFDcEQsbURBQWtEOztJQUNsRCxpREFBZ0Q7O0lBQ2hELG9EQUFtRDs7SUFDbkQscURBQW9EOztJQUNwRCxtREFBa0Q7O0lBQ2xELGlEQUFnRDs7SUFDaEQsb0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhQaXZvdEdyaWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFBpdm90R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGFueTtcbiAgIEBJbnB1dCgnc2Nyb2xsQmFyc0VuYWJsZWQnKSBhdHRyU2Nyb2xsQmFyc0VuYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGlvbkVuYWJsZWQnKSBhdHRyU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJykgYXR0ck11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgndHJlZVN0eWxlUm93cycpIGF0dHJUcmVlU3R5bGVSb3dzOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvUmVzaXplJykgYXR0ckF1dG9SZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2l0ZW1zUmVuZGVyZXInKSBhdHRySXRlbXNSZW5kZXJlcjogKHBpdm90SXRlbToganF3aWRnZXRzLlBpdm90R3JpZEl0ZW1zUmVuZGVyZXJbJ3Bpdm90SXRlbSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2NlbGxzUmVuZGVyZXInKSBhdHRyQ2VsbHNSZW5kZXJlcjogKHBpdm90Q2VsbDoganF3aWRnZXRzLlBpdm90R3JpZENlbGxzUmVuZGVyZXJbJ3Bpdm90Q2VsbCddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnc291cmNlJywnbG9jYWxpemF0aW9uJywnc2Nyb2xsQmFyc0VuYWJsZWQnLCdzZWxlY3Rpb25FbmFibGVkJywnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJywndHJlZVN0eWxlUm93cycsJ2F1dG9SZXNpemUnLCdpdGVtc1JlbmRlcmVyJywnY2VsbHNSZW5kZXJlciddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhQaXZvdEdyaWQ7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICBKUVhMaXRlKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9fdXBkYXRlUmVjdF9fKCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4UGl2b3RHcmlkJywgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFBpdm90R3JpZENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdsb2NhbGl6YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhcnNFbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3Njcm9sbEJhcnNFbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3Njcm9sbEJhcnNFbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGlvbkVuYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnc2VsZWN0aW9uRW5hYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG11bHRpcGxlU2VsZWN0aW9uRW5hYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRyZWVTdHlsZVJvd3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgndHJlZVN0eWxlUm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCd0cmVlU3R5bGVSb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9SZXNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnYXV0b1Jlc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdhdXRvUmVzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1zUmVuZGVyZXIoYXJnPzogKHBpdm90SXRlbToganF3aWRnZXRzLlBpdm90R3JpZEl0ZW1zUmVuZGVyZXJbJ3Bpdm90SXRlbSddKSA9PiBzdHJpbmcpOiAocGl2b3RJdGVtOiBqcXdpZGdldHMuUGl2b3RHcmlkSXRlbXNSZW5kZXJlclsncGl2b3RJdGVtJ10pID0+IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdpdGVtc1JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2l0ZW1zUmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2VsbHNSZW5kZXJlcihhcmc/OiAocGl2b3RDZWxsOiBqcXdpZGdldHMuUGl2b3RHcmlkQ2VsbHNSZW5kZXJlclsncGl2b3RDZWxsJ10pID0+IHN0cmluZyk6IChwaXZvdENlbGw6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDZWxsc1JlbmRlcmVyWydwaXZvdENlbGwnXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2NlbGxzUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnY2VsbHNSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFBpdm90R3JpZENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGdldEluc3RhbmNlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnZ2V0SW5zdGFuY2UnKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RSb3dzKCk6IGpxd2lkZ2V0cy5QaXZvdEdyaWRSb3dzIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdnZXRQaXZvdFJvd3MnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RDb2x1bW5zKCk6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDb2x1bW5zIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdnZXRQaXZvdENvbHVtbnMnKTtcbiAgIH1cblxuICAgZ2V0UGl2b3RDZWxscygpOiBqcXdpZGdldHMuUGl2b3RHcmlkQ2VsbHMge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2dldFBpdm90Q2VsbHMnKTtcbiAgIH1cblxuXG4gICAvLyBqcXhQaXZvdEdyaWRDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1leHBhbmRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1leHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWNvbGxhcHNpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1jb2xsYXBzZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0Y2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0Y2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRyZW1vdmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRyZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtc2VsZWN0aW9uY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbG1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbG1vdXNldXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGNlbGxjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbGRibGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtbW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtbW91c2V1cCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtZGJsY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1leHBhbmRpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWV4cGFuZGluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1leHBhbmRlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtZXhwYW5kZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtY29sbGFwc2luZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtY29sbGFwc2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1jb2xsYXBzZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWNvbGxhcHNlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0Y2hhbmdpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnRjaGFuZ2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0Y2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydGNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydHJlbW92aW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0cmVtb3ZpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydHJlbW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnRyZW1vdmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbXNlbGVjdGlvbmNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbXNlbGVjdGlvbmNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsbW91c2Vkb3duJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGNlbGxtb3VzZWRvd24uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsbW91c2V1cCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RjZWxsbW91c2V1cC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGNlbGxjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RjZWxsY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RjZWxsZGJsY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90Y2VsbGRibGNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbW1vdXNlZG93bicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtbW91c2Vkb3duLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbW1vdXNldXAnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbW1vdXNldXAuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbWRibGNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGl0ZW1kYmxjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UGl2b3RHcmlkQ29tcG9uZW50XG4iXX0=