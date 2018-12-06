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
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxPivotGridModule = /** @class */ (function () {
    function jqxPivotGridModule() {
    }
    jqxPivotGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxPivotGridComponent],
                    exports: [jqxPivotGridComponent]
                },] }
    ];
    return jqxPivotGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxPivotGridComponent, jqxPivotGridModule };

