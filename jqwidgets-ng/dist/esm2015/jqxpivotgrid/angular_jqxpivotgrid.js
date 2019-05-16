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
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxPivotGridComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
        () => {
            this.__updateRect__();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
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
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
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
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxPivotGrid('setOptions', options);
    }
    // jqxPivotGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('source', arg);
        }
        else {
            return this.host.jqxPivotGrid('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('localization', arg);
        }
        else {
            return this.host.jqxPivotGrid('localization');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollBarsEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('scrollBarsEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('scrollBarsEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('selectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('selectionEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    multipleSelectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('multipleSelectionEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    treeStyleRows(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('treeStyleRows', arg);
        }
        else {
            return this.host.jqxPivotGrid('treeStyleRows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoResize(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('autoResize', arg);
        }
        else {
            return this.host.jqxPivotGrid('autoResize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    itemsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('itemsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('itemsRenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cellsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('cellsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('cellsRenderer');
        }
    }
    // jqxPivotGridComponent functions
    /**
     * @return {?}
     */
    getInstance() {
        return this.host.jqxPivotGrid('getInstance');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxPivotGrid('refresh');
    }
    /**
     * @return {?}
     */
    getPivotRows() {
        return this.host.jqxPivotGrid('getPivotRows');
    }
    /**
     * @return {?}
     */
    getPivotColumns() {
        return this.host.jqxPivotGrid('getPivotColumns');
    }
    /**
     * @return {?}
     */
    getPivotCells() {
        return this.host.jqxPivotGrid('getPivotCells');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('pivotitemexpanding', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemexpanding.emit(eventData); }));
        this.host.on('pivotitemexpanded', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemexpanded.emit(eventData); }));
        this.host.on('pivotitemcollapsing', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemcollapsing.emit(eventData); }));
        this.host.on('pivotitemcollapsed', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemcollapsed.emit(eventData); }));
        this.host.on('sortchanging', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSortchanging.emit(eventData); }));
        this.host.on('sortchanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSortchanged.emit(eventData); }));
        this.host.on('sortremoving', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSortremoving.emit(eventData); }));
        this.host.on('sortremoved', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSortremoved.emit(eventData); }));
        this.host.on('pivotitemselectionchanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemselectionchanged.emit(eventData); }));
        this.host.on('pivotcellmousedown', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotcellmousedown.emit(eventData); }));
        this.host.on('pivotcellmouseup', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotcellmouseup.emit(eventData); }));
        this.host.on('pivotcellclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotcellclick.emit(eventData); }));
        this.host.on('pivotcelldblclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotcelldblclick.emit(eventData); }));
        this.host.on('pivotitemmousedown', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemmousedown.emit(eventData); }));
        this.host.on('pivotitemmouseup', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemmouseup.emit(eventData); }));
        this.host.on('pivotitemclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemclick.emit(eventData); }));
        this.host.on('pivotitemdblclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPivotitemdblclick.emit(eventData); }));
    }
} //jqxPivotGridComponent
jqxPivotGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxPivotGrid',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxPivotGridComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhwaXZvdGdyaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cGl2b3RncmlkLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhwaXZvdGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFxQi9CLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxtQkFBbUIsRUFBQyxrQkFBa0IsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxlQUFlLENBQUMsQ0FBQzs7UUF3TnRLLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdDQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7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N0Msc0RBQTJEOztJQUMzRCxxREFBeUQ7O0lBQ3pELDZEQUF5RTs7SUFDekUsa0RBQW1EOztJQUNuRCwrQ0FBNkM7O0lBQzdDLGtEQUFnSDs7SUFDaEgsa0RBQWdIOztJQUNoSCwwQ0FBMkM7O0lBQzNDLDJDQUE2Qzs7SUFFN0MsMkNBQWlEOztJQUVqRCwyQ0FBZ0w7O0lBQ2hMLHFDQUFVOztJQUNWLDJDQUF1Qjs7SUFDdkIsNkNBQXNDOztJQXFOdEMscURBQW9EOztJQUNwRCxvREFBbUQ7O0lBQ25ELHNEQUFxRDs7SUFDckQscURBQW9EOztJQUNwRCwrQ0FBOEM7O0lBQzlDLDhDQUE2Qzs7SUFDN0MsK0NBQThDOztJQUM5Qyw4Q0FBNkM7O0lBQzdDLDREQUEyRDs7SUFDM0QscURBQW9EOztJQUNwRCxtREFBa0Q7O0lBQ2xELGlEQUFnRDs7SUFDaEQsb0RBQW1EOztJQUNuRCxxREFBb0Q7O0lBQ3BELG1EQUFrRDs7SUFDbEQsaURBQWdEOztJQUNoRCxvREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFBpdm90R3JpZCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4UGl2b3RHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ3NvdXJjZScpIGF0dHJTb3VyY2U6IGFueTtcbiAgIEBJbnB1dCgnbG9jYWxpemF0aW9uJykgYXR0ckxvY2FsaXphdGlvbjogYW55O1xuICAgQElucHV0KCdzY3JvbGxCYXJzRW5hYmxlZCcpIGF0dHJTY3JvbGxCYXJzRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2VsZWN0aW9uRW5hYmxlZCcpIGF0dHJTZWxlY3Rpb25FbmFibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQnKSBhdHRyTXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkOiBib29sZWFuO1xuICAgQElucHV0KCd0cmVlU3R5bGVSb3dzJykgYXR0clRyZWVTdHlsZVJvd3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9SZXNpemUnKSBhdHRyQXV0b1Jlc2l6ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaXRlbXNSZW5kZXJlcicpIGF0dHJJdGVtc1JlbmRlcmVyOiAocGl2b3RJdGVtOiBqcXdpZGdldHMuUGl2b3RHcmlkSXRlbXNSZW5kZXJlclsncGl2b3RJdGVtJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnY2VsbHNSZW5kZXJlcicpIGF0dHJDZWxsc1JlbmRlcmVyOiAocGl2b3RDZWxsOiBqcXdpZGdldHMuUGl2b3RHcmlkQ2VsbHNSZW5kZXJlclsncGl2b3RDZWxsJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydzb3VyY2UnLCdsb2NhbGl6YXRpb24nLCdzY3JvbGxCYXJzRW5hYmxlZCcsJ3NlbGVjdGlvbkVuYWJsZWQnLCdtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQnLCd0cmVlU3R5bGVSb3dzJywnYXV0b1Jlc2l6ZScsJ2l0ZW1zUmVuZGVyZXInLCdjZWxsc1JlbmRlcmVyJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFBpdm90R3JpZDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIEpRWExpdGUod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX191cGRhdGVSZWN0X18oKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhQaXZvdEdyaWQnLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4UGl2b3RHcmlkQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2xvY2FsaXphdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsQmFyc0VuYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnc2Nyb2xsQmFyc0VuYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnc2Nyb2xsQmFyc0VuYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uRW5hYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdzZWxlY3Rpb25FbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3NlbGVjdGlvbkVuYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbXVsdGlwbGVTZWxlY3Rpb25FbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ211bHRpcGxlU2VsZWN0aW9uRW5hYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdtdWx0aXBsZVNlbGVjdGlvbkVuYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdHJlZVN0eWxlUm93cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCd0cmVlU3R5bGVSb3dzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ3RyZWVTdHlsZVJvd3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b1Jlc2l6ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdhdXRvUmVzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2F1dG9SZXNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXRlbXNSZW5kZXJlcihhcmc/OiAocGl2b3RJdGVtOiBqcXdpZGdldHMuUGl2b3RHcmlkSXRlbXNSZW5kZXJlclsncGl2b3RJdGVtJ10pID0+IHN0cmluZyk6IChwaXZvdEl0ZW06IGpxd2lkZ2V0cy5QaXZvdEdyaWRJdGVtc1JlbmRlcmVyWydwaXZvdEl0ZW0nXSkgPT4gc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2l0ZW1zUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnaXRlbXNSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjZWxsc1JlbmRlcmVyKGFyZz86IChwaXZvdENlbGw6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDZWxsc1JlbmRlcmVyWydwaXZvdENlbGwnXSkgPT4gc3RyaW5nKTogKHBpdm90Q2VsbDoganF3aWRnZXRzLlBpdm90R3JpZENlbGxzUmVuZGVyZXJbJ3Bpdm90Q2VsbCddKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnY2VsbHNSZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdjZWxsc1JlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4UGl2b3RHcmlkQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZ2V0SW5zdGFuY2UoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UGl2b3RHcmlkKCdnZXRJbnN0YW5jZScpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICBnZXRQaXZvdFJvd3MoKToganF3aWRnZXRzLlBpdm90R3JpZFJvd3Mge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2dldFBpdm90Um93cycpO1xuICAgfVxuXG4gICBnZXRQaXZvdENvbHVtbnMoKToganF3aWRnZXRzLlBpdm90R3JpZENvbHVtbnMge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhQaXZvdEdyaWQoJ2dldFBpdm90Q29sdW1ucycpO1xuICAgfVxuXG4gICBnZXRQaXZvdENlbGxzKCk6IGpxd2lkZ2V0cy5QaXZvdEdyaWRDZWxscyB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFBpdm90R3JpZCgnZ2V0UGl2b3RDZWxscycpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFBpdm90R3JpZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWV4cGFuZGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtY29sbGFwc2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90aXRlbWNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRjaGFuZ2luZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnRjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU29ydHJlbW92aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU29ydHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1zZWxlY3Rpb25jaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RjZWxsbW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RjZWxsbW91c2V1cCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBpdm90Y2VsbGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RjZWxsZGJsY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1tb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1tb3VzZXVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGl2b3RpdGVtY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaXZvdGl0ZW1kYmxjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbWV4cGFuZGluZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtZXhwYW5kaW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbWV4cGFuZGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGl0ZW1leHBhbmRlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1jb2xsYXBzaW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGl0ZW1jb2xsYXBzaW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90aXRlbWNvbGxhcHNlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtY29sbGFwc2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NvcnRjaGFuZ2luZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydGNoYW5naW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NvcnRjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0Y2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0cmVtb3ZpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnRyZW1vdmluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0cmVtb3ZlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydHJlbW92ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtc2VsZWN0aW9uY2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtc2VsZWN0aW9uY2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGNlbGxtb3VzZWRvd24nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90Y2VsbG1vdXNlZG93bi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGNlbGxtb3VzZXVwJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGNlbGxtb3VzZXVwLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Bpdm90Y2VsbGNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGNlbGxjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGNlbGxkYmxjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RjZWxsZGJsY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtbW91c2Vkb3duJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaXZvdGl0ZW1tb3VzZWRvd24uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtbW91c2V1cCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtbW91c2V1cC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwaXZvdGl0ZW1jbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGl2b3RpdGVtY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGl2b3RpdGVtZGJsY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBpdm90aXRlbWRibGNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhQaXZvdEdyaWRDb21wb25lbnRcbiJdfQ==