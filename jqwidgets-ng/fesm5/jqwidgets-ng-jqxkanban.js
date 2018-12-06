import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxsortable from '../../jqwidgets/jqxsortable';
import * as jqxsplitter from '../../jqwidgets/jqxsplitter';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxkanban from '../../jqwidgets/jqxkanban';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        this.host.on('columnAttrClicked', function (eventData) { _this.onColumnAttrClicked.emit(eventData); });
        this.host.on('columnCollapsed', function (eventData) { _this.onColumnCollapsed.emit(eventData); });
        this.host.on('columnExpanded', function (eventData) { _this.onColumnExpanded.emit(eventData); });
        this.host.on('itemAttrClicked', function (eventData) { _this.onItemAttrClicked.emit(eventData); });
        this.host.on('itemMoved', function (eventData) { _this.onItemMoved.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxKanbanModule = /** @class */ (function () {
    function jqxKanbanModule() {
    }
    jqxKanbanModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxKanbanComponent],
                    exports: [jqxKanbanComponent]
                },] }
    ];
    return jqxKanbanModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxKanbanComponent, jqxKanbanModule };

