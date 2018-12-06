import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxsortable from '../../jqwidgets/jqxsortable';
import * as jqxsplitter from '../../jqwidgets/jqxsplitter';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxkanban from '../../jqwidgets/jqxkanban';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxKanbanComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
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
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxKanban('setOptions', options);
    }
    // jqxKanbanComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columnRenderer', arg);
        }
        else {
            return this.host.jqxKanban('columnRenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columns(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columns', arg);
        }
        else {
            return this.host.jqxKanban('columns');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('connectWith', arg);
        }
        else {
            return this.host.jqxKanban('connectWith');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerHeight', arg);
        }
        else {
            return this.host.jqxKanban('headerHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    headerWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerWidth', arg);
        }
        else {
            return this.host.jqxKanban('headerWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('height', arg);
        }
        else {
            return this.host.jqxKanban('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    itemRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('itemRenderer', arg);
        }
        else {
            return this.host.jqxKanban('itemRenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('ready', arg);
        }
        else {
            return this.host.jqxKanban('ready');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('rtl', arg);
        }
        else {
            return this.host.jqxKanban('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('source', arg);
        }
        else {
            return this.host.jqxKanban('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('resources', arg);
        }
        else {
            return this.host.jqxKanban('resources');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('template', arg);
        }
        else {
            return this.host.jqxKanban('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    templateContent(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('templateContent', arg);
        }
        else {
            return this.host.jqxKanban('templateContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('theme', arg);
        }
        else {
            return this.host.jqxKanban('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('width', arg);
        }
        else {
            return this.host.jqxKanban('width');
        }
    }
    // jqxKanbanComponent functions
    /**
     * @param {?} newItem
     * @return {?}
     */
    addItem(newItem) {
        this.host.jqxKanban('addItem', newItem);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxKanban('destroy');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    getColumn(dataField) {
        return this.host.jqxKanban('getColumn', dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    getColumnItems(dataField) {
        return this.host.jqxKanban('getColumnItems', dataField);
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.host.jqxKanban('getItems');
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    removeItem(itemId) {
        this.host.jqxKanban('removeItem', itemId);
    }
    /**
     * @param {?} itemId
     * @param {?} newContent
     * @return {?}
     */
    updateItem(itemId, newContent) {
        this.host.jqxKanban('updateItem', itemId, newContent);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('columnAttrClicked', (eventData) => { this.onColumnAttrClicked.emit(eventData); });
        this.host.on('columnCollapsed', (eventData) => { this.onColumnCollapsed.emit(eventData); });
        this.host.on('columnExpanded', (eventData) => { this.onColumnExpanded.emit(eventData); });
        this.host.on('itemAttrClicked', (eventData) => { this.onItemAttrClicked.emit(eventData); });
        this.host.on('itemMoved', (eventData) => { this.onItemMoved.emit(eventData); });
    }
} //jqxKanbanComponent
jqxKanbanComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxKanban',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxKanbanComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
