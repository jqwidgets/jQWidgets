import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxpivot from '../../jqwidgets/jqxpivot';
import * as jqxpivotgrid from '../../jqwidgets/jqxpivotgrid';
import * as jqxpivotdesigner from '../../jqwidgets/jqxpivotdesigner';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxPivotGridComponent {
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
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
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
        this.host.on('pivotitemexpanding', (eventData) => { this.onPivotitemexpanding.emit(eventData); });
        this.host.on('pivotitemexpanded', (eventData) => { this.onPivotitemexpanded.emit(eventData); });
        this.host.on('pivotitemcollapsing', (eventData) => { this.onPivotitemcollapsing.emit(eventData); });
        this.host.on('pivotitemcollapsed', (eventData) => { this.onPivotitemcollapsed.emit(eventData); });
        this.host.on('sortchanging', (eventData) => { this.onSortchanging.emit(eventData); });
        this.host.on('sortchanged', (eventData) => { this.onSortchanged.emit(eventData); });
        this.host.on('sortremoving', (eventData) => { this.onSortremoving.emit(eventData); });
        this.host.on('sortremoved', (eventData) => { this.onSortremoved.emit(eventData); });
        this.host.on('pivotitemselectionchanged', (eventData) => { this.onPivotitemselectionchanged.emit(eventData); });
        this.host.on('pivotcellmousedown', (eventData) => { this.onPivotcellmousedown.emit(eventData); });
        this.host.on('pivotcellmouseup', (eventData) => { this.onPivotcellmouseup.emit(eventData); });
        this.host.on('pivotcellclick', (eventData) => { this.onPivotcellclick.emit(eventData); });
        this.host.on('pivotcelldblclick', (eventData) => { this.onPivotcelldblclick.emit(eventData); });
        this.host.on('pivotitemmousedown', (eventData) => { this.onPivotitemmousedown.emit(eventData); });
        this.host.on('pivotitemmouseup', (eventData) => { this.onPivotitemmouseup.emit(eventData); });
        this.host.on('pivotitemclick', (eventData) => { this.onPivotitemclick.emit(eventData); });
        this.host.on('pivotitemdblclick', (eventData) => { this.onPivotitemdblclick.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxPivotGridModule {
}
jqxPivotGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxPivotGridComponent],
                exports: [jqxPivotGridComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxPivotGridComponent, jqxPivotGridModule };

