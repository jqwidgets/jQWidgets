import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';
import * as jqxsplitter from '../../jqwidgets-scripts/jqwidgets/jqxsplitter';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxkanban from '../../jqwidgets-scripts/jqwidgets/jqxkanban';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
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
    /**
     * @return {?}
     */
    jqxKanbanComponent.prototype.ngOnInit = /**
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
    jqxKanbanComponent.prototype.ngOnChanges = /**
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxKanbanComponent.prototype.arraysEqual = /**
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
    jqxKanbanComponent.prototype.manageAttributes = /**
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
    jqxKanbanComponent.prototype.moveClasses = /**
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
    jqxKanbanComponent.prototype.moveStyles = /**
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
    jqxKanbanComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxKanbanComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxKanbanComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxKanbanComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxKanban('setOptions', options);
    };
    // jqxKanbanComponent properties
    // jqxKanbanComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.columnRenderer = 
    // jqxKanbanComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columnRenderer', arg);
        }
        else {
            return this.host.jqxKanban('columnRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.columns = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columns', arg);
        }
        else {
            return this.host.jqxKanban('columns');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.connectWith = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('connectWith', arg);
        }
        else {
            return this.host.jqxKanban('connectWith');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.headerHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerHeight', arg);
        }
        else {
            return this.host.jqxKanban('headerHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.headerWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerWidth', arg);
        }
        else {
            return this.host.jqxKanban('headerWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('height', arg);
        }
        else {
            return this.host.jqxKanban('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.itemRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('itemRenderer', arg);
        }
        else {
            return this.host.jqxKanban('itemRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.ready = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('ready', arg);
        }
        else {
            return this.host.jqxKanban('ready');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('rtl', arg);
        }
        else {
            return this.host.jqxKanban('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('source', arg);
        }
        else {
            return this.host.jqxKanban('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.resources = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('resources', arg);
        }
        else {
            return this.host.jqxKanban('resources');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('template', arg);
        }
        else {
            return this.host.jqxKanban('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.templateContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('templateContent', arg);
        }
        else {
            return this.host.jqxKanban('templateContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('theme', arg);
        }
        else {
            return this.host.jqxKanban('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxKanbanComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('width', arg);
        }
        else {
            return this.host.jqxKanban('width');
        }
    };
    // jqxKanbanComponent functions
    // jqxKanbanComponent functions
    /**
     * @param {?} newItem
     * @return {?}
     */
    jqxKanbanComponent.prototype.addItem = 
    // jqxKanbanComponent functions
    /**
     * @param {?} newItem
     * @return {?}
     */
    function (newItem) {
        this.host.jqxKanban('addItem', newItem);
    };
    /**
     * @return {?}
     */
    jqxKanbanComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxKanban('destroy');
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxKanbanComponent.prototype.getColumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        return this.host.jqxKanban('getColumn', dataField);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxKanbanComponent.prototype.getColumnItems = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        return this.host.jqxKanban('getColumnItems', dataField);
    };
    /**
     * @return {?}
     */
    jqxKanbanComponent.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return this.host.jqxKanban('getItems');
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    jqxKanbanComponent.prototype.removeItem = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        this.host.jqxKanban('removeItem', itemId);
    };
    /**
     * @param {?} itemId
     * @param {?} newContent
     * @return {?}
     */
    jqxKanbanComponent.prototype.updateItem = /**
     * @param {?} itemId
     * @param {?} newContent
     * @return {?}
     */
    function (itemId, newContent) {
        this.host.jqxKanban('updateItem', itemId, newContent);
    };
    /**
     * @return {?}
     */
    jqxKanbanComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('columnAttrClicked', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnAttrClicked.emit(eventData); }));
        this.host.on('columnCollapsed', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnCollapsed.emit(eventData); }));
        this.host.on('columnExpanded', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnExpanded.emit(eventData); }));
        this.host.on('itemAttrClicked', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onItemAttrClicked.emit(eventData); }));
        this.host.on('itemMoved', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onItemMoved.emit(eventData); }));
    };
    jqxKanbanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxKanban',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxKanbanComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxKanbanComponent.propDecorators = {
        attrColumnRenderer: [{ type: Input, args: ['columnRenderer',] }],
        attrColumns: [{ type: Input, args: ['columns',] }],
        attrConnectWith: [{ type: Input, args: ['connectWith',] }],
        attrHeaderHeight: [{ type: Input, args: ['headerHeight',] }],
        attrHeaderWidth: [{ type: Input, args: ['headerWidth',] }],
        attrItemRenderer: [{ type: Input, args: ['itemRenderer',] }],
        attrReady: [{ type: Input, args: ['ready',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrResources: [{ type: Input, args: ['resources',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTemplateContent: [{ type: Input, args: ['templateContent',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onColumnAttrClicked: [{ type: Output }],
        onColumnCollapsed: [{ type: Output }],
        onColumnExpanded: [{ type: Output }],
        onItemAttrClicked: [{ type: Output }],
        onItemMoved: [{ type: Output }]
    };
    return jqxKanbanComponent;
}()); //jqxKanbanComponent
export { jqxKanbanComponent };
if (false) {
    /** @type {?} */
    jqxKanbanComponent.prototype.attrColumnRenderer;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrColumns;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrConnectWith;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrHeaderHeight;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrHeaderWidth;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrItemRenderer;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrReady;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrRtl;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrSource;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrResources;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrTemplateContent;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrTheme;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrWidth;
    /** @type {?} */
    jqxKanbanComponent.prototype.attrHeight;
    /** @type {?} */
    jqxKanbanComponent.prototype.autoCreate;
    /** @type {?} */
    jqxKanbanComponent.prototype.properties;
    /** @type {?} */
    jqxKanbanComponent.prototype.host;
    /** @type {?} */
    jqxKanbanComponent.prototype.elementRef;
    /** @type {?} */
    jqxKanbanComponent.prototype.widgetObject;
    /** @type {?} */
    jqxKanbanComponent.prototype.onColumnAttrClicked;
    /** @type {?} */
    jqxKanbanComponent.prototype.onColumnCollapsed;
    /** @type {?} */
    jqxKanbanComponent.prototype.onColumnExpanded;
    /** @type {?} */
    jqxKanbanComponent.prototype.onItemAttrClicked;
    /** @type {?} */
    jqxKanbanComponent.prototype.onItemMoved;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhrYW5iYW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4a2FuYmFuLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhrYW5iYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQThCRyw0QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUEyUTdMLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBelF4QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUss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QUFLLFNBQUMsT0FBTzswQkFDYixLQUFLLFNBQUMsS0FBSzs2QkFDWCxLQUFLLFNBQUMsUUFBUTtnQ0FDZCxLQUFLLFNBQUMsV0FBVzsrQkFDakIsS0FBSyxTQUFDLFVBQVU7c0NBQ2hCLEtBQUssU0FBQyxpQkFBaUI7NEJBQ3ZCLEtBQUssU0FBQyxPQUFPOzRCQUNiLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhO3NDQTZRbkIsTUFBTTtvQ0FDTixNQUFNO21DQUNOLE1BQU07b0NBQ04sTUFBTTs4QkFDTixNQUFNOztJQVVWLHlCQUFDO0NBQUEsQUFsVEQsSUFrVEMsQ0FBQyxvQkFBb0I7U0E3U1Qsa0JBQWtCOzs7SUFFNUIsZ0RBQXFPOztJQUNyTyx5Q0FBOEQ7O0lBQzlELDZDQUE4Qzs7SUFDOUMsOENBQXlEOztJQUN6RCw2Q0FBOEM7O0lBQzlDLDhDQUF1TTs7SUFDdk0sdUNBQXNDOztJQUN0QyxxQ0FBK0I7O0lBQy9CLHdDQUFpQzs7SUFDakMsMkNBQXVDOztJQUN2QywwQ0FBd0M7O0lBQ3hDLGlEQUFtRDs7SUFDbkQsdUNBQWtDOztJQUNsQyx1Q0FBMkM7O0lBQzNDLHdDQUE2Qzs7SUFFN0Msd0NBQWlEOztJQUVqRCx3Q0FBdU07O0lBQ3ZNLGtDQUFVOztJQUNWLHdDQUF1Qjs7SUFDdkIsMENBQW1DOztJQXdRbkMsaURBQW1EOztJQUNuRCwrQ0FBaUQ7O0lBQ2pELDhDQUFnRDs7SUFDaEQsK0NBQWlEOztJQUNqRCx5Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEthbmJhbicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4S2FuYmFuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2NvbHVtblJlbmRlcmVyJykgYXR0ckNvbHVtblJlbmRlcmVyOiAoZWxlbWVudD86IGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5SZW5kZXJlclsnZWxlbWVudCddLCBjb2xsYXBzZWRFbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2xsYXBzZWRFbGVtZW50J10sIGNvbHVtbj86IGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5SZW5kZXJlclsnY29sdW1uJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2NvbHVtbnMnKSBhdHRyQ29sdW1uczogQXJyYXk8anF3aWRnZXRzLkthbmJhbkNvbHVtbnM+O1xuICAgQElucHV0KCdjb25uZWN0V2l0aCcpIGF0dHJDb25uZWN0V2l0aDogc3RyaW5nO1xuICAgQElucHV0KCdoZWFkZXJIZWlnaHQnKSBhdHRySGVhZGVySGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2hlYWRlcldpZHRoJykgYXR0ckhlYWRlcldpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoJ2l0ZW1SZW5kZXJlcicpIGF0dHJJdGVtUmVuZGVyZXI6IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsnZWxlbWVudCddLCBpdGVtPzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsnaXRlbSddLCByZXNvdXJjZT86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ3Jlc291cmNlJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3Jlc291cmNlcycpIGF0dHJSZXNvdXJjZXM6IGFueTtcbiAgIEBJbnB1dCgndGVtcGxhdGUnKSBhdHRyVGVtcGxhdGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGVtcGxhdGVDb250ZW50JykgYXR0clRlbXBsYXRlQ29udGVudDogYW55O1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2NvbHVtblJlbmRlcmVyJywnY29sdW1ucycsJ2Nvbm5lY3RXaXRoJywnaGVhZGVySGVpZ2h0JywnaGVhZGVyV2lkdGgnLCdoZWlnaHQnLCdpdGVtUmVuZGVyZXInLCdyZWFkeScsJ3J0bCcsJ3NvdXJjZScsJ3Jlc291cmNlcycsJ3RlbXBsYXRlJywndGVtcGxhdGVDb250ZW50JywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhLYW5iYW47XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4S2FuYmFuKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4S2FuYmFuKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4odGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEthbmJhbicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4S2FuYmFuQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGNvbHVtblJlbmRlcmVyKGFyZz86IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydlbGVtZW50J10sIGNvbGxhcHNlZEVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuQ29sdW1uUmVuZGVyZXJbJ2NvbGxhcHNlZEVsZW1lbnQnXSwgY29sdW1uPzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2x1bW4nXSkgPT4gdm9pZCk6IChlbGVtZW50PzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydlbGVtZW50J10sIGNvbGxhcHNlZEVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuQ29sdW1uUmVuZGVyZXJbJ2NvbGxhcHNlZEVsZW1lbnQnXSwgY29sdW1uPzoganF3aWRnZXRzLkthbmJhbkNvbHVtblJlbmRlcmVyWydjb2x1bW4nXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5SZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5SZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5zPik6IEFycmF5PGpxd2lkZ2V0cy5LYW5iYW5Db2x1bW5zPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdjb2x1bW5zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2NvbHVtbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29ubmVjdFdpdGgoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Nvbm5lY3RXaXRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Nvbm5lY3RXaXRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlYWRlckhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2hlYWRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWFkZXJXaWR0aChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVyV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaGVhZGVyV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1SZW5kZXJlcihhcmc/OiAoZWxlbWVudD86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ2VsZW1lbnQnXSwgaXRlbT86IGpxd2lkZ2V0cy5LYW5iYW5JdGVtUmVuZGVyZXJbJ2l0ZW0nXSwgcmVzb3VyY2U/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydyZXNvdXJjZSddKSA9PiB2b2lkKTogKGVsZW1lbnQ/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydlbGVtZW50J10sIGl0ZW0/OiBqcXdpZGdldHMuS2FuYmFuSXRlbVJlbmRlcmVyWydpdGVtJ10sIHJlc291cmNlPzoganF3aWRnZXRzLkthbmJhbkl0ZW1SZW5kZXJlclsncmVzb3VyY2UnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdpdGVtUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignaXRlbVJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWR5KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3JlYWR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3JlYWR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbignc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNvdXJjZXMoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3Jlc291cmNlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4S2FuYmFuKCdyZXNvdXJjZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRlbXBsYXRlQ29udGVudChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigndGVtcGxhdGVDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3RlbXBsYXRlQ29udGVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4S2FuYmFuQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkSXRlbShuZXdJdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2FkZEl0ZW0nLCBuZXdJdGVtKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZ2V0Q29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKToganF3aWRnZXRzLkthbmJhbkNvbHVtbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2dldENvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldENvbHVtbkl0ZW1zKGRhdGFGaWVsZDogc3RyaW5nKTogQXJyYXk8anF3aWRnZXRzLkthbmJhblNvdXJjZT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhLYW5iYW4oJ2dldENvbHVtbkl0ZW1zJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0SXRlbXMoKToganF3aWRnZXRzLkthbmJhblNvdXJjZSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEthbmJhbignZ2V0SXRlbXMnKTtcbiAgIH1cblxuICAgcmVtb3ZlSXRlbShpdGVtSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEthbmJhbigncmVtb3ZlSXRlbScsIGl0ZW1JZCk7XG4gICB9XG5cbiAgIHVwZGF0ZUl0ZW0oaXRlbUlkOiBzdHJpbmcsIG5ld0NvbnRlbnQ6IGpxd2lkZ2V0cy5LYW5iYW5VcGRhdGVJdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4S2FuYmFuKCd1cGRhdGVJdGVtJywgaXRlbUlkLCBuZXdDb250ZW50KTtcbiAgIH1cblxuXG4gICAvLyBqcXhLYW5iYW5Db21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25Db2x1bW5BdHRyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbkNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbkV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbUF0dHJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbU1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1uQXR0ckNsaWNrZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtbkF0dHJDbGlja2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbkNvbGxhcHNlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1uQ29sbGFwc2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbkV4cGFuZGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5FeHBhbmRlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtQXR0ckNsaWNrZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1BdHRyQ2xpY2tlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtTW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1Nb3ZlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4S2FuYmFuQ29tcG9uZW50XG4iXX0=