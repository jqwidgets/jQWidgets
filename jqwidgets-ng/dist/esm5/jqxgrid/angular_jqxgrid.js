import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxbuttongroup from '../../jqwidgets-scripts/jqwidgets/jqxbuttongroup';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxgrid from '../../jqwidgets-scripts/jqwidgets/jqxgrid';
import * as jqxgridedit from '../../jqwidgets-scripts/jqwidgets/jqxgrid.edit';
import * as jqxgridpager from '../../jqwidgets-scripts/jqwidgets/jqxgrid.pager';
import * as jqxgridselection from '../../jqwidgets-scripts/jqwidgets/jqxgrid.selection';
import * as jqxgridfilter from '../../jqwidgets-scripts/jqwidgets/jqxgrid.filter';
import * as jqxgridsort from '../../jqwidgets-scripts/jqwidgets/jqxgrid.sort';
import * as jqxgridstorage from '../../jqwidgets-scripts/jqwidgets/jqxgrid.storage';
import * as jqxgridgrouping from '../../jqwidgets-scripts/jqwidgets/jqxgrid.grouping';
import * as jqxgridexport from '../../jqwidgets-scripts/jqwidgets/jqxgrid.export';
import * as jqxgridcolumnsresiz from '../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsresize';
import * as jqxgridcolumnsreorder from '../../jqwidgets-scripts/jqwidgets/jqxgrid.columnsreorder';
import * as jqxgridaggregates from '../../jqwidgets-scripts/jqwidgets/jqxgrid.aggregates';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxGridComponent = /** @class */ (function () {
    function jqxGridComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'showcolumnlines', 'showrowlines', 'showcolumnheaderlines', 'adaptive', 'adaptivewidth', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'selectionmode', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'disabled', 'editable', 'editmode', 'filter', 'filterable', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'sortmode', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
        // jqxGridComponent events
        this.onBindingcomplete = new EventEmitter();
        this.onColumnresized = new EventEmitter();
        this.onColumnreordered = new EventEmitter();
        this.onColumnclick = new EventEmitter();
        this.onCellclick = new EventEmitter();
        this.onCelldoubleclick = new EventEmitter();
        this.onCellselect = new EventEmitter();
        this.onCellunselect = new EventEmitter();
        this.onCellvaluechanged = new EventEmitter();
        this.onCellbeginedit = new EventEmitter();
        this.onCellendedit = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onGroupschanged = new EventEmitter();
        this.onGroupexpand = new EventEmitter();
        this.onGroupcollapse = new EventEmitter();
        this.onPagechanged = new EventEmitter();
        this.onPagesizechanged = new EventEmitter();
        this.onRowclick = new EventEmitter();
        this.onRowdoubleclick = new EventEmitter();
        this.onRowselect = new EventEmitter();
        this.onRowunselect = new EventEmitter();
        this.onRowexpand = new EventEmitter();
        this.onRowcollapse = new EventEmitter();
        this.onSort = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ;
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        /** @type {?} */
        var html = '';
        /** @type {?} */
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            /** @type {?} */
            var result = JQXLite.jqx.parseSourceTag(this.container);
            if (this['attrColumns'] !== undefined) {
                ;
                options['source'] = result.source;
            }
            else {
                options['source'] = result.source;
                options['columns'] = result.columns;
            }
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                /** @type {?} */
                var result = JQXLite.jqx.parseSourceTag(this.container);
                /** @type {?} */
                var columns = this.host.jqxGrid('columns');
                if (columns.length === 0) {
                    this.host.jqxGrid({ source: result.source, columns: result.columns });
                }
                else {
                    this.host.jqxGrid({ source: result.source });
                }
            }
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxGridComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGrid(this.properties[i])) {
                        this.host.jqxGrid(this.properties[i], this[attrName]);
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
    jqxGridComponent.prototype.arraysEqual = /**
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
    jqxGridComponent.prototype.manageAttributes = /**
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
    jqxGridComponent.prototype.moveClasses = /**
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
    jqxGridComponent.prototype.moveStyles = /**
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
    jqxGridComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxGridComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.__updateRect__ = /**
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
    jqxGridComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxGrid('setOptions', options);
    };
    // jqxGridComponent properties
    // jqxGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.altrows = 
    // jqxGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altrows', arg);
        }
        else {
            return this.host.jqxGrid('altrows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.altstart = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstart', arg);
        }
        else {
            return this.host.jqxGrid('altstart');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.altstep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstep', arg);
        }
        else {
            return this.host.jqxGrid('altstep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autoshowloadelement = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowloadelement', arg);
        }
        else {
            return this.host.jqxGrid('autoshowloadelement');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autoshowfiltericon = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowfiltericon', arg);
        }
        else {
            return this.host.jqxGrid('autoshowfiltericon');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autoshowcolumnsmenubutton = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
        }
        else {
            return this.host.jqxGrid('autoshowcolumnsmenubutton');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showcolumnlines = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnlines');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showrowlines = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowlines', arg);
        }
        else {
            return this.host.jqxGrid('showrowlines');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showcolumnheaderlines = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnheaderlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnheaderlines');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.adaptive = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptive', arg);
        }
        else {
            return this.host.jqxGrid('adaptive');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.adaptivewidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptivewidth', arg);
        }
        else {
            return this.host.jqxGrid('adaptivewidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.clipboard = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('clipboard', arg);
        }
        else {
            return this.host.jqxGrid('clipboard');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.closeablegroups = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('closeablegroups', arg);
        }
        else {
            return this.host.jqxGrid('closeablegroups');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsmenuwidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenuwidth', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenuwidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnmenuopening = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuopening', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuopening');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnmenuclosing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuclosing', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuclosing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.cellhover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cellhover', arg);
        }
        else {
            return this.host.jqxGrid('cellhover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enablekeyboarddelete = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablekeyboarddelete', arg);
        }
        else {
            return this.host.jqxGrid('enablekeyboarddelete');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enableellipsis = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableellipsis', arg);
        }
        else {
            return this.host.jqxGrid('enableellipsis');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enablemousewheel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablemousewheel', arg);
        }
        else {
            return this.host.jqxGrid('enablemousewheel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enableanimations = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableanimations', arg);
        }
        else {
            return this.host.jqxGrid('enableanimations');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enabletooltips = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enabletooltips', arg);
        }
        else {
            return this.host.jqxGrid('enabletooltips');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enablehover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablehover', arg);
        }
        else {
            return this.host.jqxGrid('enablehover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.enablebrowserselection = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablebrowserselection', arg);
        }
        else {
            return this.host.jqxGrid('enablebrowserselection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.everpresentrowposition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowposition', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowposition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.everpresentrowheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowheight', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.everpresentrowactions = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactions', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactions');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.everpresentrowactionsmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactionsmode', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactionsmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.filterrowheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterrowheight', arg);
        }
        else {
            return this.host.jqxGrid('filterrowheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.filtermode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filtermode', arg);
        }
        else {
            return this.host.jqxGrid('filtermode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupsrenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupsrenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupcolumnrenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupcolumnrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupcolumnrenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupsexpandedbydefault = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsexpandedbydefault', arg);
        }
        else {
            return this.host.jqxGrid('groupsexpandedbydefault');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.handlekeyboardnavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('handlekeyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('handlekeyboardnavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagerrenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerrenderer', arg);
        }
        else {
            return this.host.jqxGrid('pagerrenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rtl', arg);
        }
        else {
            return this.host.jqxGrid('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showdefaultloadelement = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showdefaultloadelement', arg);
        }
        else {
            return this.host.jqxGrid('showdefaultloadelement');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showfiltercolumnbackground = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltercolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showfiltercolumnbackground');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showfiltermenuitems = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltermenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showfiltermenuitems');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showpinnedcolumnbackground = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showpinnedcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showpinnedcolumnbackground');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showsortcolumnbackground = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showsortcolumnbackground');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showsortmenuitems = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showsortmenuitems');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showgroupmenuitems = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showgroupmenuitems');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showrowdetailscolumn = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowdetailscolumn', arg);
        }
        else {
            return this.host.jqxGrid('showrowdetailscolumn');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showheader = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showheader', arg);
        }
        else {
            return this.host.jqxGrid('showheader');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showgroupsheader = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupsheader', arg);
        }
        else {
            return this.host.jqxGrid('showgroupsheader');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showaggregates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showaggregates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showgroupaggregates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showgroupaggregates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showeverpresentrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showeverpresentrow', arg);
        }
        else {
            return this.host.jqxGrid('showeverpresentrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showfilterrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfilterrow', arg);
        }
        else {
            return this.host.jqxGrid('showfilterrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showemptyrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showemptyrow', arg);
        }
        else {
            return this.host.jqxGrid('showemptyrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showstatusbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('showstatusbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.statusbarheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('statusbarheight', arg);
        }
        else {
            return this.host.jqxGrid('statusbarheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.showtoolbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showtoolbar', arg);
        }
        else {
            return this.host.jqxGrid('showtoolbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.selectionmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectionmode', arg);
        }
        else {
            return this.host.jqxGrid('selectionmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.updatefilterconditions = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterconditions', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterconditions');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.updatefilterpanel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterpanel', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterpanel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('theme', arg);
        }
        else {
            return this.host.jqxGrid('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.toolbarheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('toolbarheight', arg);
        }
        else {
            return this.host.jqxGrid('toolbarheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autoheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoheight', arg);
        }
        else {
            return this.host.jqxGrid('autoheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autorowheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autorowheight', arg);
        }
        else {
            return this.host.jqxGrid('autorowheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsheight', arg);
        }
        else {
            return this.host.jqxGrid('columnsheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.deferreddatafields = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('deferreddatafields', arg);
        }
        else {
            return this.host.jqxGrid('deferreddatafields');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupsheaderheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsheaderheight', arg);
        }
        else {
            return this.host.jqxGrid('groupsheaderheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupindentwidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupindentwidth', arg);
        }
        else {
            return this.host.jqxGrid('groupindentwidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('height', arg);
        }
        else {
            return this.host.jqxGrid('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagerheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerheight', arg);
        }
        else {
            return this.host.jqxGrid('pagerheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rowsheight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowsheight', arg);
        }
        else {
            return this.host.jqxGrid('rowsheight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.scrollbarsize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollbarsize', arg);
        }
        else {
            return this.host.jqxGrid('scrollbarsize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.scrollmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollmode', arg);
        }
        else {
            return this.host.jqxGrid('scrollmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.scrollfeedback = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollfeedback', arg);
        }
        else {
            return this.host.jqxGrid('scrollfeedback');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('width', arg);
        }
        else {
            return this.host.jqxGrid('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autosavestate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autosavestate', arg);
        }
        else {
            return this.host.jqxGrid('autosavestate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.autoloadstate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoloadstate', arg);
        }
        else {
            return this.host.jqxGrid('autoloadstate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columns = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columns', arg);
        }
        else {
            return this.host.jqxGrid('columns');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columngroups = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columngroups', arg);
        }
        else {
            return this.host.jqxGrid('columngroups');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsmenu = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenu', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenu');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsresize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsresize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsautoresize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsautoresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsautoresize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.columnsreorder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsreorder', arg);
        }
        else {
            return this.host.jqxGrid('columnsreorder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('disabled', arg);
        }
        else {
            return this.host.jqxGrid('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.editable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editable', arg);
        }
        else {
            return this.host.jqxGrid('editable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.editmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editmode', arg);
        }
        else {
            return this.host.jqxGrid('editmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.filter = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filter', arg);
        }
        else {
            return this.host.jqxGrid('filter');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.filterable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterable', arg);
        }
        else {
            return this.host.jqxGrid('filterable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groupable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupable', arg);
        }
        else {
            return this.host.jqxGrid('groupable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.groups = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groups', arg);
        }
        else {
            return this.host.jqxGrid('groups');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.horizontalscrollbarstep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarstep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.horizontalscrollbarlargestep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarlargestep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.initrowdetails = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('initrowdetails', arg);
        }
        else {
            return this.host.jqxGrid('initrowdetails');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.keyboardnavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('keyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('keyboardnavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('localization', arg);
        }
        else {
            return this.host.jqxGrid('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagesize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesize', arg);
        }
        else {
            return this.host.jqxGrid('pagesize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagesizeoptions = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesizeoptions', arg);
        }
        else {
            return this.host.jqxGrid('pagesizeoptions');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagermode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagermode', arg);
        }
        else {
            return this.host.jqxGrid('pagermode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pagerbuttonscount = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerbuttonscount', arg);
        }
        else {
            return this.host.jqxGrid('pagerbuttonscount');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.pageable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pageable', arg);
        }
        else {
            return this.host.jqxGrid('pageable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rowdetails = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetails', arg);
        }
        else {
            return this.host.jqxGrid('rowdetails');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rowdetailstemplate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetailstemplate', arg);
        }
        else {
            return this.host.jqxGrid('rowdetailstemplate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.ready = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('ready', arg);
        }
        else {
            return this.host.jqxGrid('ready');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rendered = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendered', arg);
        }
        else {
            return this.host.jqxGrid('rendered');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.renderstatusbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('renderstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('renderstatusbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rendertoolbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendertoolbar', arg);
        }
        else {
            return this.host.jqxGrid('rendertoolbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.rendergridrows = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendergridrows', arg);
        }
        else {
            return this.host.jqxGrid('rendergridrows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.sortable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortable', arg);
        }
        else {
            return this.host.jqxGrid('sortable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.sortmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortmode', arg);
        }
        else {
            return this.host.jqxGrid('sortmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.selectedrowindex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindex', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.selectedrowindexes = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindexes', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindexes');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('source', arg);
        }
        else {
            return this.host.jqxGrid('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.sorttogglestates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sorttogglestates', arg);
        }
        else {
            return this.host.jqxGrid('sorttogglestates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.updatedelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatedelay', arg);
        }
        else {
            return this.host.jqxGrid('updatedelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.virtualmode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('virtualmode', arg);
        }
        else {
            return this.host.jqxGrid('virtualmode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.verticalscrollbarstep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarstep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxGridComponent.prototype.verticalscrollbarlargestep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarlargestep');
        }
    };
    // jqxGridComponent functions
    // jqxGridComponent functions
    /**
     * @param {?=} type
     * @return {?}
     */
    jqxGridComponent.prototype.autoresizecolumns = 
    // jqxGridComponent functions
    /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumns', type);
    };
    /**
     * @param {?} dataField
     * @param {?=} type
     * @return {?}
     */
    jqxGridComponent.prototype.autoresizecolumn = /**
     * @param {?} dataField
     * @param {?=} type
     * @return {?}
     */
    function (dataField, type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.beginupdate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginupdate');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clear');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('destroy');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.endupdate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endupdate');
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.ensurerowvisible = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('focus');
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcolumnindex = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnindex', dataField);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcolumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumn', dataField);
    };
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    jqxGridComponent.prototype.getcolumnproperty = /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    function (dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.getrowid = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.getrowdata = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    jqxGridComponent.prototype.getrowdatabyid = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdatabyid', rowID);
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    jqxGridComponent.prototype.getrowboundindexbyid = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    };
    /**
     * @param {?} rowDisplayIndex
     * @return {?}
     */
    jqxGridComponent.prototype.getrowboundindex = /**
     * @param {?} rowDisplayIndex
     * @return {?}
     */
    function (rowDisplayIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getrows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrows');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getboundrows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getboundrows');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getdisplayrows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdisplayrows');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getdatainformation = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdatainformation');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getsortinformation = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortinformation');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getpaginginformation = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getpaginginformation');
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.hidecolumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hidecolumn', dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.hideloadelement = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hideloadelement');
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.hiderowdetails = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.iscolumnvisible = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnvisible', dataField);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.iscolumnpinned = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnpinned', dataField);
    };
    /**
     * @param {?} localizationobject
     * @return {?}
     */
    jqxGridComponent.prototype.localizestrings = /**
     * @param {?} localizationobject
     * @return {?}
     */
    function (localizationobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('localizestrings', localizationobject);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.pincolumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('pincolumn', dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.refreshdata = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshdata');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refresh');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('render');
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    jqxGridComponent.prototype.scrolloffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('scrolloffset', top, left);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.scrollposition = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('scrollposition');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.showloadelement = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showloadelement');
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.showrowdetails = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    };
    /**
     * @param {?} dataField
     * @param {?} index
     * @return {?}
     */
    jqxGridComponent.prototype.setcolumnindex = /**
     * @param {?} dataField
     * @param {?} index
     * @return {?}
     */
    function (dataField, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnindex', dataField, index);
    };
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    jqxGridComponent.prototype.setcolumnproperty = /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    function (dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.showcolumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showcolumn', dataField);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.unpincolumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unpincolumn', dataField);
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    jqxGridComponent.prototype.updatebounddata = /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updatebounddata', type);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.updating = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('updating');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getsortcolumn = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortcolumn');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.removesort = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removesort');
    };
    /**
     * @param {?} dataField
     * @param {?} sortOrder
     * @return {?}
     */
    jqxGridComponent.prototype.sortby = /**
     * @param {?} dataField
     * @param {?} sortOrder
     * @return {?}
     */
    function (dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('sortby', dataField, sortOrder);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.addgroup = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addgroup', dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.cleargroups = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('cleargroups');
    };
    /**
     * @param {?} group
     * @return {?}
     */
    jqxGridComponent.prototype.collapsegroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapsegroup', group);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.collapseallgroups = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapseallgroups');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.expandallgroups = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandallgroups');
    };
    /**
     * @param {?} group
     * @return {?}
     */
    jqxGridComponent.prototype.expandgroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandgroup', group);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getrootgroupscount = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrootgroupscount');
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxGridComponent.prototype.getgroup = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getgroup', groupIndex);
    };
    /**
     * @param {?} groupIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.insertgroup = /**
     * @param {?} groupIndex
     * @param {?} dataField
     * @return {?}
     */
    function (groupIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.iscolumngroupable = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumngroupable');
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxGridComponent.prototype.removegroupat = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroupat', groupIndex);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.removegroup = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroup', dataField);
    };
    /**
     * @param {?} dataField
     * @param {?} filterGroup
     * @param {?=} refreshGrid
     * @return {?}
     */
    jqxGridComponent.prototype.addfilter = /**
     * @param {?} dataField
     * @param {?} filterGroup
     * @param {?=} refreshGrid
     * @return {?}
     */
    function (dataField, filterGroup, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.applyfilters = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('applyfilters');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.clearfilters = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearfilters');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getfilterinformation = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getfilterinformation');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxGridComponent.prototype.getcolumnat = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnat', index);
    };
    /**
     * @param {?} dataField
     * @param {?} refreshGrid
     * @return {?}
     */
    jqxGridComponent.prototype.removefilter = /**
     * @param {?} dataField
     * @param {?} refreshGrid
     * @return {?}
     */
    function (dataField, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.refreshfilterrow = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshfilterrow');
    };
    /**
     * @param {?} pagenumber
     * @return {?}
     */
    jqxGridComponent.prototype.gotopage = /**
     * @param {?} pagenumber
     * @return {?}
     */
    function (pagenumber) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotopage', pagenumber);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.gotoprevpage = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotoprevpage');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.gotonextpage = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotonextpage');
    };
    /**
     * @param {?} rowIds
     * @param {?} data
     * @param {?=} rowPosition
     * @return {?}
     */
    jqxGridComponent.prototype.addrow = /**
     * @param {?} rowIds
     * @param {?} data
     * @param {?=} rowPosition
     * @return {?}
     */
    function (rowIds, data, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.begincelledit = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.beginrowedit = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.closemenu = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('closemenu');
    };
    /**
     * @param {?} rowIds
     * @return {?}
     */
    jqxGridComponent.prototype.deleterow = /**
     * @param {?} rowIds
     * @return {?}
     */
    function (rowIds) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('deleterow', rowIds);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} confirmChanges
     * @return {?}
     */
    jqxGridComponent.prototype.endcelledit = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} confirmChanges
     * @return {?}
     */
    function (rowBoundIndex, dataField, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} confirmChanges
     * @return {?}
     */
    jqxGridComponent.prototype.endrowedit = /**
     * @param {?} rowBoundIndex
     * @param {?} confirmChanges
     * @return {?}
     */
    function (rowBoundIndex, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} datafield
     * @return {?}
     */
    jqxGridComponent.prototype.getcell = /**
     * @param {?} rowBoundIndex
     * @param {?} datafield
     * @return {?}
     */
    function (rowBoundIndex, datafield) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxGridComponent.prototype.getcellatposition = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellatposition', left, top);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcelltext = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    };
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcelltextbyid = /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    function (rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    };
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcellvaluebyid = /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    function (rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.getcellvalue = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.isBindingCompleted = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('isBindingCompleted');
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.openmenu = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openmenu', dataField);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    jqxGridComponent.prototype.setcellvalue = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    function (rowBoundIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    };
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    jqxGridComponent.prototype.setcellvaluebyid = /**
     * @param {?} rowID
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    function (rowID, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} validationMessage
     * @return {?}
     */
    jqxGridComponent.prototype.showvalidationpopup = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} validationMessage
     * @return {?}
     */
    function (rowBoundIndex, dataField, validationMessage) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    };
    /**
     * @param {?} rowIds
     * @param {?} data
     * @return {?}
     */
    jqxGridComponent.prototype.updaterow = /**
     * @param {?} rowIds
     * @param {?} data
     * @return {?}
     */
    function (rowIds, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updaterow', rowIds, data);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.clearselection = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearselection');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getselectedrowindex = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindex');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getselectedrowindexes = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindexes');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getselectedcell = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcell');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getselectedcells = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcells');
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.selectcell = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.selectallrows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectallrows');
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.selectrow = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectrow', rowBoundIndex);
    };
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    jqxGridComponent.prototype.unselectrow = /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    };
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    jqxGridComponent.prototype.unselectcell = /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    };
    /**
     * @param {?} dataField
     * @param {?} aggregates
     * @return {?}
     */
    jqxGridComponent.prototype.getcolumnaggregateddata = /**
     * @param {?} dataField
     * @param {?} aggregates
     * @return {?}
     */
    function (dataField, aggregates) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.refreshaggregates = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshaggregates');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.renderaggregates = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('renderaggregates');
    };
    /**
     * @param {?} dataType
     * @param {?=} fileName
     * @param {?=} exportHeader
     * @param {?=} rows
     * @param {?=} exportHiddenColumns
     * @param {?=} serverURL
     * @param {?=} charSet
     * @return {?}
     */
    jqxGridComponent.prototype.exportdata = /**
     * @param {?} dataType
     * @param {?=} fileName
     * @param {?=} exportHeader
     * @param {?=} rows
     * @param {?=} exportHiddenColumns
     * @param {?=} serverURL
     * @param {?=} charSet
     * @return {?}
     */
    function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.getstate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getstate');
    };
    /**
     * @param {?} stateobject
     * @return {?}
     */
    jqxGridComponent.prototype.loadstate = /**
     * @param {?} stateobject
     * @return {?}
     */
    function (stateobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('loadstate', stateobject);
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.savestate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('savestate');
    };
    /**
     * @return {?}
     */
    jqxGridComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingcomplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingcomplete.emit(eventData); }));
        this.host.on('columnresized', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnresized.emit(eventData); }));
        this.host.on('columnreordered', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnreordered.emit(eventData); }));
        this.host.on('columnclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnclick.emit(eventData); }));
        this.host.on('cellclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellclick.emit(eventData); }));
        this.host.on('celldoubleclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCelldoubleclick.emit(eventData); }));
        this.host.on('cellselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellselect.emit(eventData); }));
        this.host.on('cellunselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellunselect.emit(eventData); }));
        this.host.on('cellvaluechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellvaluechanged.emit(eventData); }));
        this.host.on('cellbeginedit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellbeginedit.emit(eventData); }));
        this.host.on('cellendedit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellendedit.emit(eventData); }));
        this.host.on('filter', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onFilter.emit(eventData); }));
        this.host.on('groupschanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onGroupschanged.emit(eventData); }));
        this.host.on('groupexpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onGroupexpand.emit(eventData); }));
        this.host.on('groupcollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onGroupcollapse.emit(eventData); }));
        this.host.on('pagechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPagechanged.emit(eventData); }));
        this.host.on('pagesizechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPagesizechanged.emit(eventData); }));
        this.host.on('rowclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowclick.emit(eventData); }));
        this.host.on('rowdoubleclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowdoubleclick.emit(eventData); }));
        this.host.on('rowselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowselect.emit(eventData); }));
        this.host.on('rowunselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowunselect.emit(eventData); }));
        this.host.on('rowexpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowexpand.emit(eventData); }));
        this.host.on('rowcollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowcollapse.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSort.emit(eventData); }));
    };
    jqxGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxGrid',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxGridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxGridComponent.propDecorators = {
        attrAltrows: [{ type: Input, args: ['altrows',] }],
        attrAltstart: [{ type: Input, args: ['altstart',] }],
        attrAltstep: [{ type: Input, args: ['altstep',] }],
        attrAutoshowloadelement: [{ type: Input, args: ['autoshowloadelement',] }],
        attrAutoshowfiltericon: [{ type: Input, args: ['autoshowfiltericon',] }],
        attrAutoshowcolumnsmenubutton: [{ type: Input, args: ['autoshowcolumnsmenubutton',] }],
        attrShowcolumnlines: [{ type: Input, args: ['showcolumnlines',] }],
        attrShowrowlines: [{ type: Input, args: ['showrowlines',] }],
        attrShowcolumnheaderlines: [{ type: Input, args: ['showcolumnheaderlines',] }],
        attrAdaptive: [{ type: Input, args: ['adaptive',] }],
        attrAdaptivewidth: [{ type: Input, args: ['adaptivewidth',] }],
        attrClipboard: [{ type: Input, args: ['clipboard',] }],
        attrCloseablegroups: [{ type: Input, args: ['closeablegroups',] }],
        attrColumnsmenuwidth: [{ type: Input, args: ['columnsmenuwidth',] }],
        attrColumnmenuopening: [{ type: Input, args: ['columnmenuopening',] }],
        attrColumnmenuclosing: [{ type: Input, args: ['columnmenuclosing',] }],
        attrCellhover: [{ type: Input, args: ['cellhover',] }],
        attrEnablekeyboarddelete: [{ type: Input, args: ['enablekeyboarddelete',] }],
        attrEnableellipsis: [{ type: Input, args: ['enableellipsis',] }],
        attrEnablemousewheel: [{ type: Input, args: ['enablemousewheel',] }],
        attrEnableanimations: [{ type: Input, args: ['enableanimations',] }],
        attrEnabletooltips: [{ type: Input, args: ['enabletooltips',] }],
        attrEnablehover: [{ type: Input, args: ['enablehover',] }],
        attrEnablebrowserselection: [{ type: Input, args: ['enablebrowserselection',] }],
        attrEverpresentrowposition: [{ type: Input, args: ['everpresentrowposition',] }],
        attrEverpresentrowheight: [{ type: Input, args: ['everpresentrowheight',] }],
        attrEverpresentrowactions: [{ type: Input, args: ['everpresentrowactions',] }],
        attrEverpresentrowactionsmode: [{ type: Input, args: ['everpresentrowactionsmode',] }],
        attrFilterrowheight: [{ type: Input, args: ['filterrowheight',] }],
        attrFiltermode: [{ type: Input, args: ['filtermode',] }],
        attrGroupsrenderer: [{ type: Input, args: ['groupsrenderer',] }],
        attrGroupcolumnrenderer: [{ type: Input, args: ['groupcolumnrenderer',] }],
        attrGroupsexpandedbydefault: [{ type: Input, args: ['groupsexpandedbydefault',] }],
        attrHandlekeyboardnavigation: [{ type: Input, args: ['handlekeyboardnavigation',] }],
        attrPagerrenderer: [{ type: Input, args: ['pagerrenderer',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowdefaultloadelement: [{ type: Input, args: ['showdefaultloadelement',] }],
        attrShowfiltercolumnbackground: [{ type: Input, args: ['showfiltercolumnbackground',] }],
        attrShowfiltermenuitems: [{ type: Input, args: ['showfiltermenuitems',] }],
        attrShowpinnedcolumnbackground: [{ type: Input, args: ['showpinnedcolumnbackground',] }],
        attrShowsortcolumnbackground: [{ type: Input, args: ['showsortcolumnbackground',] }],
        attrShowsortmenuitems: [{ type: Input, args: ['showsortmenuitems',] }],
        attrShowgroupmenuitems: [{ type: Input, args: ['showgroupmenuitems',] }],
        attrShowrowdetailscolumn: [{ type: Input, args: ['showrowdetailscolumn',] }],
        attrShowheader: [{ type: Input, args: ['showheader',] }],
        attrShowgroupsheader: [{ type: Input, args: ['showgroupsheader',] }],
        attrShowaggregates: [{ type: Input, args: ['showaggregates',] }],
        attrShowgroupaggregates: [{ type: Input, args: ['showgroupaggregates',] }],
        attrShoweverpresentrow: [{ type: Input, args: ['showeverpresentrow',] }],
        attrShowfilterrow: [{ type: Input, args: ['showfilterrow',] }],
        attrShowemptyrow: [{ type: Input, args: ['showemptyrow',] }],
        attrShowstatusbar: [{ type: Input, args: ['showstatusbar',] }],
        attrStatusbarheight: [{ type: Input, args: ['statusbarheight',] }],
        attrShowtoolbar: [{ type: Input, args: ['showtoolbar',] }],
        attrSelectionmode: [{ type: Input, args: ['selectionmode',] }],
        attrUpdatefilterconditions: [{ type: Input, args: ['updatefilterconditions',] }],
        attrUpdatefilterpanel: [{ type: Input, args: ['updatefilterpanel',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToolbarheight: [{ type: Input, args: ['toolbarheight',] }],
        attrAutoheight: [{ type: Input, args: ['autoheight',] }],
        attrAutorowheight: [{ type: Input, args: ['autorowheight',] }],
        attrColumnsheight: [{ type: Input, args: ['columnsheight',] }],
        attrDeferreddatafields: [{ type: Input, args: ['deferreddatafields',] }],
        attrGroupsheaderheight: [{ type: Input, args: ['groupsheaderheight',] }],
        attrGroupindentwidth: [{ type: Input, args: ['groupindentwidth',] }],
        attrPagerheight: [{ type: Input, args: ['pagerheight',] }],
        attrRowsheight: [{ type: Input, args: ['rowsheight',] }],
        attrScrollbarsize: [{ type: Input, args: ['scrollbarsize',] }],
        attrScrollmode: [{ type: Input, args: ['scrollmode',] }],
        attrScrollfeedback: [{ type: Input, args: ['scrollfeedback',] }],
        attrAutosavestate: [{ type: Input, args: ['autosavestate',] }],
        attrAutoloadstate: [{ type: Input, args: ['autoloadstate',] }],
        attrColumns: [{ type: Input, args: ['columns',] }],
        attrColumngroups: [{ type: Input, args: ['columngroups',] }],
        attrColumnsmenu: [{ type: Input, args: ['columnsmenu',] }],
        attrColumnsresize: [{ type: Input, args: ['columnsresize',] }],
        attrColumnsautoresize: [{ type: Input, args: ['columnsautoresize',] }],
        attrColumnsreorder: [{ type: Input, args: ['columnsreorder',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEditable: [{ type: Input, args: ['editable',] }],
        attrEditmode: [{ type: Input, args: ['editmode',] }],
        attrFilter: [{ type: Input, args: ['filter',] }],
        attrFilterable: [{ type: Input, args: ['filterable',] }],
        attrGroupable: [{ type: Input, args: ['groupable',] }],
        attrGroups: [{ type: Input, args: ['groups',] }],
        attrHorizontalscrollbarstep: [{ type: Input, args: ['horizontalscrollbarstep',] }],
        attrHorizontalscrollbarlargestep: [{ type: Input, args: ['horizontalscrollbarlargestep',] }],
        attrInitrowdetails: [{ type: Input, args: ['initrowdetails',] }],
        attrKeyboardnavigation: [{ type: Input, args: ['keyboardnavigation',] }],
        attrLocalization: [{ type: Input, args: ['localization',] }],
        attrPagesize: [{ type: Input, args: ['pagesize',] }],
        attrPagesizeoptions: [{ type: Input, args: ['pagesizeoptions',] }],
        attrPagermode: [{ type: Input, args: ['pagermode',] }],
        attrPagerbuttonscount: [{ type: Input, args: ['pagerbuttonscount',] }],
        attrPageable: [{ type: Input, args: ['pageable',] }],
        attrRowdetails: [{ type: Input, args: ['rowdetails',] }],
        attrRowdetailstemplate: [{ type: Input, args: ['rowdetailstemplate',] }],
        attrReady: [{ type: Input, args: ['ready',] }],
        attrRendered: [{ type: Input, args: ['rendered',] }],
        attrRenderstatusbar: [{ type: Input, args: ['renderstatusbar',] }],
        attrRendertoolbar: [{ type: Input, args: ['rendertoolbar',] }],
        attrRendergridrows: [{ type: Input, args: ['rendergridrows',] }],
        attrSortable: [{ type: Input, args: ['sortable',] }],
        attrSortmode: [{ type: Input, args: ['sortmode',] }],
        attrSelectedrowindex: [{ type: Input, args: ['selectedrowindex',] }],
        attrSelectedrowindexes: [{ type: Input, args: ['selectedrowindexes',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrSorttogglestates: [{ type: Input, args: ['sorttogglestates',] }],
        attrUpdatedelay: [{ type: Input, args: ['updatedelay',] }],
        attrVirtualmode: [{ type: Input, args: ['virtualmode',] }],
        attrVerticalscrollbarstep: [{ type: Input, args: ['verticalscrollbarstep',] }],
        attrVerticalscrollbarlargestep: [{ type: Input, args: ['verticalscrollbarlargestep',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onBindingcomplete: [{ type: Output }],
        onColumnresized: [{ type: Output }],
        onColumnreordered: [{ type: Output }],
        onColumnclick: [{ type: Output }],
        onCellclick: [{ type: Output }],
        onCelldoubleclick: [{ type: Output }],
        onCellselect: [{ type: Output }],
        onCellunselect: [{ type: Output }],
        onCellvaluechanged: [{ type: Output }],
        onCellbeginedit: [{ type: Output }],
        onCellendedit: [{ type: Output }],
        onFilter: [{ type: Output }],
        onGroupschanged: [{ type: Output }],
        onGroupexpand: [{ type: Output }],
        onGroupcollapse: [{ type: Output }],
        onPagechanged: [{ type: Output }],
        onPagesizechanged: [{ type: Output }],
        onRowclick: [{ type: Output }],
        onRowdoubleclick: [{ type: Output }],
        onRowselect: [{ type: Output }],
        onRowunselect: [{ type: Output }],
        onRowexpand: [{ type: Output }],
        onRowcollapse: [{ type: Output }],
        onSort: [{ type: Output }]
    };
    return jqxGridComponent;
}()); //jqxGridComponent
export { jqxGridComponent };
if (false) {
    /** @type {?} */
    jqxGridComponent.prototype.attrAltrows;
    /** @type {?} */
    jqxGridComponent.prototype.attrAltstart;
    /** @type {?} */
    jqxGridComponent.prototype.attrAltstep;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutoshowloadelement;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutoshowfiltericon;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutoshowcolumnsmenubutton;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowcolumnlines;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowrowlines;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowcolumnheaderlines;
    /** @type {?} */
    jqxGridComponent.prototype.attrAdaptive;
    /** @type {?} */
    jqxGridComponent.prototype.attrAdaptivewidth;
    /** @type {?} */
    jqxGridComponent.prototype.attrClipboard;
    /** @type {?} */
    jqxGridComponent.prototype.attrCloseablegroups;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsmenuwidth;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnmenuopening;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnmenuclosing;
    /** @type {?} */
    jqxGridComponent.prototype.attrCellhover;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnablekeyboarddelete;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnableellipsis;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnablemousewheel;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnableanimations;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnabletooltips;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnablehover;
    /** @type {?} */
    jqxGridComponent.prototype.attrEnablebrowserselection;
    /** @type {?} */
    jqxGridComponent.prototype.attrEverpresentrowposition;
    /** @type {?} */
    jqxGridComponent.prototype.attrEverpresentrowheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrEverpresentrowactions;
    /** @type {?} */
    jqxGridComponent.prototype.attrEverpresentrowactionsmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrFilterrowheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrFiltermode;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupsrenderer;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupcolumnrenderer;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupsexpandedbydefault;
    /** @type {?} */
    jqxGridComponent.prototype.attrHandlekeyboardnavigation;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagerrenderer;
    /** @type {?} */
    jqxGridComponent.prototype.attrRtl;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowdefaultloadelement;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowfiltercolumnbackground;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowfiltermenuitems;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowpinnedcolumnbackground;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowsortcolumnbackground;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowsortmenuitems;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowgroupmenuitems;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowrowdetailscolumn;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowheader;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowgroupsheader;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowaggregates;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowgroupaggregates;
    /** @type {?} */
    jqxGridComponent.prototype.attrShoweverpresentrow;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowfilterrow;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowemptyrow;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowstatusbar;
    /** @type {?} */
    jqxGridComponent.prototype.attrStatusbarheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrShowtoolbar;
    /** @type {?} */
    jqxGridComponent.prototype.attrSelectionmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrUpdatefilterconditions;
    /** @type {?} */
    jqxGridComponent.prototype.attrUpdatefilterpanel;
    /** @type {?} */
    jqxGridComponent.prototype.attrTheme;
    /** @type {?} */
    jqxGridComponent.prototype.attrToolbarheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutoheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutorowheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrDeferreddatafields;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupsheaderheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupindentwidth;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagerheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrRowsheight;
    /** @type {?} */
    jqxGridComponent.prototype.attrScrollbarsize;
    /** @type {?} */
    jqxGridComponent.prototype.attrScrollmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrScrollfeedback;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutosavestate;
    /** @type {?} */
    jqxGridComponent.prototype.attrAutoloadstate;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumns;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumngroups;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsmenu;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsresize;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsautoresize;
    /** @type {?} */
    jqxGridComponent.prototype.attrColumnsreorder;
    /** @type {?} */
    jqxGridComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxGridComponent.prototype.attrEditable;
    /** @type {?} */
    jqxGridComponent.prototype.attrEditmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrFilter;
    /** @type {?} */
    jqxGridComponent.prototype.attrFilterable;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroupable;
    /** @type {?} */
    jqxGridComponent.prototype.attrGroups;
    /** @type {?} */
    jqxGridComponent.prototype.attrHorizontalscrollbarstep;
    /** @type {?} */
    jqxGridComponent.prototype.attrHorizontalscrollbarlargestep;
    /** @type {?} */
    jqxGridComponent.prototype.attrInitrowdetails;
    /** @type {?} */
    jqxGridComponent.prototype.attrKeyboardnavigation;
    /** @type {?} */
    jqxGridComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagesize;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagesizeoptions;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagermode;
    /** @type {?} */
    jqxGridComponent.prototype.attrPagerbuttonscount;
    /** @type {?} */
    jqxGridComponent.prototype.attrPageable;
    /** @type {?} */
    jqxGridComponent.prototype.attrRowdetails;
    /** @type {?} */
    jqxGridComponent.prototype.attrRowdetailstemplate;
    /** @type {?} */
    jqxGridComponent.prototype.attrReady;
    /** @type {?} */
    jqxGridComponent.prototype.attrRendered;
    /** @type {?} */
    jqxGridComponent.prototype.attrRenderstatusbar;
    /** @type {?} */
    jqxGridComponent.prototype.attrRendertoolbar;
    /** @type {?} */
    jqxGridComponent.prototype.attrRendergridrows;
    /** @type {?} */
    jqxGridComponent.prototype.attrSortable;
    /** @type {?} */
    jqxGridComponent.prototype.attrSortmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrSelectedrowindex;
    /** @type {?} */
    jqxGridComponent.prototype.attrSelectedrowindexes;
    /** @type {?} */
    jqxGridComponent.prototype.attrSource;
    /** @type {?} */
    jqxGridComponent.prototype.attrSorttogglestates;
    /** @type {?} */
    jqxGridComponent.prototype.attrUpdatedelay;
    /** @type {?} */
    jqxGridComponent.prototype.attrVirtualmode;
    /** @type {?} */
    jqxGridComponent.prototype.attrVerticalscrollbarstep;
    /** @type {?} */
    jqxGridComponent.prototype.attrVerticalscrollbarlargestep;
    /** @type {?} */
    jqxGridComponent.prototype.attrWidth;
    /** @type {?} */
    jqxGridComponent.prototype.attrHeight;
    /** @type {?} */
    jqxGridComponent.prototype.autoCreate;
    /** @type {?} */
    jqxGridComponent.prototype.properties;
    /** @type {?} */
    jqxGridComponent.prototype.host;
    /** @type {?} */
    jqxGridComponent.prototype.elementRef;
    /** @type {?} */
    jqxGridComponent.prototype.widgetObject;
    /** @type {?} */
    jqxGridComponent.prototype.content;
    /** @type {?} */
    jqxGridComponent.prototype.container;
    /** @type {?} */
    jqxGridComponent.prototype.onBindingcomplete;
    /** @type {?} */
    jqxGridComponent.prototype.onColumnresized;
    /** @type {?} */
    jqxGridComponent.prototype.onColumnreordered;
    /** @type {?} */
    jqxGridComponent.prototype.onColumnclick;
    /** @type {?} */
    jqxGridComponent.prototype.onCellclick;
    /** @type {?} */
    jqxGridComponent.prototype.onCelldoubleclick;
    /** @type {?} */
    jqxGridComponent.prototype.onCellselect;
    /** @type {?} */
    jqxGridComponent.prototype.onCellunselect;
    /** @type {?} */
    jqxGridComponent.prototype.onCellvaluechanged;
    /** @type {?} */
    jqxGridComponent.prototype.onCellbeginedit;
    /** @type {?} */
    jqxGridComponent.prototype.onCellendedit;
    /** @type {?} */
    jqxGridComponent.prototype.onFilter;
    /** @type {?} */
    jqxGridComponent.prototype.onGroupschanged;
    /** @type {?} */
    jqxGridComponent.prototype.onGroupexpand;
    /** @type {?} */
    jqxGridComponent.prototype.onGroupcollapse;
    /** @type {?} */
    jqxGridComponent.prototype.onPagechanged;
    /** @type {?} */
    jqxGridComponent.prototype.onPagesizechanged;
    /** @type {?} */
    jqxGridComponent.prototype.onRowclick;
    /** @type {?} */
    jqxGridComponent.prototype.onRowdoubleclick;
    /** @type {?} */
    jqxGridComponent.prototype.onRowselect;
    /** @type {?} */
    jqxGridComponent.prototype.onRowunselect;
    /** @type {?} */
    jqxGridComponent.prototype.onRowexpand;
    /** @type {?} */
    jqxGridComponent.prototype.onRowcollapse;
    /** @type {?} */
    jqxGridComponent.prototype.onSort;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhncmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGdyaWQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBbUMsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHOUk7SUFtSUcsMEJBQVksZ0JBQTRCO1FBVGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsb0JBQW9CLEVBQUMsMkJBQTJCLEVBQUMsaUJBQWlCLEVBQUMsY0FBYyxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxzQkFBc0IsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsc0JBQXNCLEVBQUMsdUJBQXVCLEVBQUMsMkJBQTJCLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLHFCQUFxQixFQUFDLHlCQUF5QixFQUFDLDBCQUEwQixFQUFDLGVBQWUsRUFBQyxLQUFLLEVBQUMsd0JBQXdCLEVBQUMsNEJBQTRCLEVBQUMscUJBQXFCLEVBQUMsNEJBQTRCLEVBQUMsMEJBQTBCLEVBQUMsbUJBQW1CLEVBQUMsb0JBQW9CLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLHFCQUFxQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsZUFBZSxF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OztJQUN4RCxrREFBbUU7O0lBQ25FLHNDQUFrRDs7SUFDbEQsZ0RBQXdEOztJQUN4RCwyQ0FBOEM7O0lBQzlDLDJDQUErQzs7SUFDL0MscURBQWtFOztJQUNsRSwwREFBNEU7O0lBQzVFLHFDQUEyQzs7SUFDM0Msc0NBQTZDOztJQUU3QyxzQ0FBaUQ7O0lBRWpELHNDQUE0OEQ7O0lBQzU4RCxnQ0FBVTs7SUFDVixzQ0FBdUI7O0lBQ3ZCLHdDQUFpQzs7SUFFakMsbUNBQWdCOztJQUNoQixxQ0FBMEI7O0lBc2dGMUIsNkNBQWlEOztJQUNqRCwyQ0FBK0M7O0lBQy9DLDZDQUFpRDs7SUFDakQseUNBQTZDOztJQUM3Qyx1Q0FBMkM7O0lBQzNDLDZDQUFpRDs7SUFDakQsd0NBQTRDOztJQUM1QywwQ0FBOEM7O0lBQzlDLDhDQUFrRDs7SUFDbEQsMkNBQStDOztJQUMvQyx5Q0FBNkM7O0lBQzdDLG9DQUF3Qzs7SUFDeEMsMkNBQStDOztJQUMvQyx5Q0FBNkM7O0lBQzdDLDJDQUErQzs7SUFDL0MseUNBQTZDOztJQUM3Qyw2Q0FBaUQ7O0lBQ2pELHNDQUEwQzs7SUFDMUMsNENBQWdEOztJQUNoRCx1Q0FBMkM7O0lBQzNDLHlDQUE2Qzs7SUFDN0MsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4R3JpZCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZFxue1xuICAgQElucHV0KCdhbHRyb3dzJykgYXR0ckFsdHJvd3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsdHN0YXJ0JykgYXR0ckFsdHN0YXJ0OiBudW1iZXI7XG4gICBASW5wdXQoJ2FsdHN0ZXAnKSBhdHRyQWx0c3RlcDogbnVtYmVyO1xuICAgQElucHV0KCdhdXRvc2hvd2xvYWRlbGVtZW50JykgYXR0ckF1dG9zaG93bG9hZGVsZW1lbnQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9zaG93ZmlsdGVyaWNvbicpIGF0dHJBdXRvc2hvd2ZpbHRlcmljb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9zaG93Y29sdW1uc21lbnVidXR0b24nKSBhdHRyQXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2NvbHVtbmxpbmVzJykgYXR0clNob3djb2x1bW5saW5lczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3Jvd2xpbmVzJykgYXR0clNob3dyb3dsaW5lczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2NvbHVtbmhlYWRlcmxpbmVzJykgYXR0clNob3djb2x1bW5oZWFkZXJsaW5lczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWRhcHRpdmUnKSBhdHRyQWRhcHRpdmU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FkYXB0aXZld2lkdGgnKSBhdHRyQWRhcHRpdmV3aWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdjbGlwYm9hcmQnKSBhdHRyQ2xpcGJvYXJkOiBib29sZWFuO1xuICAgQElucHV0KCdjbG9zZWFibGVncm91cHMnKSBhdHRyQ2xvc2VhYmxlZ3JvdXBzOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zbWVudXdpZHRoJykgYXR0ckNvbHVtbnNtZW51d2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgnY29sdW1ubWVudW9wZW5pbmcnKSBhdHRyQ29sdW1ubWVudW9wZW5pbmc6IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snaGVpZ2h0J10pID0+IGJvb2xlYW4gfCB2b2lkO1xuICAgQElucHV0KCdjb2x1bW5tZW51Y2xvc2luZycpIGF0dHJDb2x1bW5tZW51Y2xvc2luZzogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2VsbGhvdmVyJykgYXR0ckNlbGxob3ZlcjogKGNlbGxodG1sRWxlbWVudD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWydjZWxsaHRtbEVsZW1lbnQnXSwgeD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd4J10sIHk/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneSddKSA9PiB2b2lkO1xuICAgQElucHV0KCdlbmFibGVrZXlib2FyZGRlbGV0ZScpIGF0dHJFbmFibGVrZXlib2FyZGRlbGV0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlZWxsaXBzaXMnKSBhdHRyRW5hYmxlZWxsaXBzaXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZW1vdXNld2hlZWwnKSBhdHRyRW5hYmxlbW91c2V3aGVlbDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlYW5pbWF0aW9ucycpIGF0dHJFbmFibGVhbmltYXRpb25zOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGV0b29sdGlwcycpIGF0dHJFbmFibGV0b29sdGlwczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlaG92ZXInKSBhdHRyRW5hYmxlaG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWJyb3dzZXJzZWxlY3Rpb24nKSBhdHRyRW5hYmxlYnJvd3NlcnNlbGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZXZlcnByZXNlbnRyb3dwb3NpdGlvbicpIGF0dHJFdmVycHJlc2VudHJvd3Bvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2V2ZXJwcmVzZW50cm93aGVpZ2h0JykgYXR0ckV2ZXJwcmVzZW50cm93aGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2V2ZXJwcmVzZW50cm93YWN0aW9ucycpIGF0dHJFdmVycHJlc2VudHJvd2FjdGlvbnM6IHN0cmluZztcbiAgIEBJbnB1dCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZScpIGF0dHJFdmVycHJlc2VudHJvd2FjdGlvbnNtb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2ZpbHRlcnJvd2hlaWdodCcpIGF0dHJGaWx0ZXJyb3doZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZmlsdGVybW9kZScpIGF0dHJGaWx0ZXJtb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2dyb3Vwc3JlbmRlcmVyJykgYXR0ckdyb3Vwc3JlbmRlcmVyOiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ3RleHQnXSwgZ3JvdXA/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydncm91cCddLCBleHBhbmRlZD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2V4cGFuZGVkJ10sIGRhdGE/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydkYXRhJ10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnZ3JvdXBjb2x1bW5yZW5kZXJlcicpIGF0dHJHcm91cGNvbHVtbnJlbmRlcmVyOiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBjb2x1bW5yZW5kZXJlclsndGV4dCddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2dyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0JykgYXR0ckdyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0OiBib29sZWFuO1xuICAgQElucHV0KCdoYW5kbGVrZXlib2FyZG5hdmlnYXRpb24nKSBhdHRySGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uOiAoZXZlbnQ6IGpxd2lkZ2V0cy5HcmlkSGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uWydldmVudCddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdwYWdlcnJlbmRlcmVyJykgYXR0clBhZ2VycmVuZGVyZXI6ICgpID0+IGFueVtdO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZGVmYXVsdGxvYWRlbGVtZW50JykgYXR0clNob3dkZWZhdWx0bG9hZGVsZW1lbnQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kJykgYXR0clNob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZmlsdGVybWVudWl0ZW1zJykgYXR0clNob3dmaWx0ZXJtZW51aXRlbXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kJykgYXR0clNob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93c29ydGNvbHVtbmJhY2tncm91bmQnKSBhdHRyU2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93c29ydG1lbnVpdGVtcycpIGF0dHJTaG93c29ydG1lbnVpdGVtczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2dyb3VwbWVudWl0ZW1zJykgYXR0clNob3dncm91cG1lbnVpdGVtczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3Jvd2RldGFpbHNjb2x1bW4nKSBhdHRyU2hvd3Jvd2RldGFpbHNjb2x1bW46IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3doZWFkZXInKSBhdHRyU2hvd2hlYWRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2dyb3Vwc2hlYWRlcicpIGF0dHJTaG93Z3JvdXBzaGVhZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93YWdncmVnYXRlcycpIGF0dHJTaG93YWdncmVnYXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2dyb3VwYWdncmVnYXRlcycpIGF0dHJTaG93Z3JvdXBhZ2dyZWdhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZXZlcnByZXNlbnRyb3cnKSBhdHRyU2hvd2V2ZXJwcmVzZW50cm93OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZmlsdGVycm93JykgYXR0clNob3dmaWx0ZXJyb3c6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dlbXB0eXJvdycpIGF0dHJTaG93ZW1wdHlyb3c6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dzdGF0dXNiYXInKSBhdHRyU2hvd3N0YXR1c2JhcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3RhdHVzYmFyaGVpZ2h0JykgYXR0clN0YXR1c2JhcmhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdzaG93dG9vbGJhcicpIGF0dHJTaG93dG9vbGJhcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2VsZWN0aW9ubW9kZScpIGF0dHJTZWxlY3Rpb25tb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VwZGF0ZWZpbHRlcmNvbmRpdGlvbnMnKSBhdHRyVXBkYXRlZmlsdGVyY29uZGl0aW9uczogKHR5cGU/OiBzdHJpbmcsIGRlZmF1bHRjb25kaXRpb25zPzogYW55KSA9PiBhbnk7XG4gICBASW5wdXQoJ3VwZGF0ZWZpbHRlcnBhbmVsJykgYXR0clVwZGF0ZWZpbHRlcnBhbmVsOiAoZmlsdGVydHlwZWRyb3Bkb3duMT86IGFueSwgZmlsdGVydHlwZWRyb3Bkb3duMj86IGFueSwgZmlsdGVyb3BlcmF0b3Jkcm9wZG93bj86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDE/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQyPzogYW55LCBmaWx0ZXJidXR0b24/OiBhbnksIGNsZWFyYnV0dG9uPzogYW55LCBjb2x1bW5maWx0ZXI/OiBhbnksIGZpbHRlcnR5cGU/OiBhbnksIGZpbHRlcmNvbmRpdGlvbnM/OiBhbnkpID0+IGFueTtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbGJhcmhlaWdodCcpIGF0dHJUb29sYmFyaGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9oZWlnaHQnKSBhdHRyQXV0b2hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b3Jvd2hlaWdodCcpIGF0dHJBdXRvcm93aGVpZ2h0OiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zaGVpZ2h0JykgYXR0ckNvbHVtbnNoZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZGVmZXJyZWRkYXRhZmllbGRzJykgYXR0ckRlZmVycmVkZGF0YWZpZWxkczogQXJyYXk8c3RyaW5nPjtcbiAgIEBJbnB1dCgnZ3JvdXBzaGVhZGVyaGVpZ2h0JykgYXR0ckdyb3Vwc2hlYWRlcmhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdncm91cGluZGVudHdpZHRoJykgYXR0ckdyb3VwaW5kZW50d2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZXJoZWlnaHQnKSBhdHRyUGFnZXJoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncm93c2hlaWdodCcpIGF0dHJSb3dzaGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Njcm9sbGJhcnNpemUnKSBhdHRyU2Nyb2xsYmFyc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdzY3JvbGxtb2RlJykgYXR0clNjcm9sbG1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc2Nyb2xsZmVlZGJhY2snKSBhdHRyU2Nyb2xsZmVlZGJhY2s6IChyb3c6IGpxd2lkZ2V0cy5HcmlkU2Nyb2xsZmVlZGJhY2tbJ3JvdyddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2F1dG9zYXZlc3RhdGUnKSBhdHRyQXV0b3NhdmVzdGF0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b2xvYWRzdGF0ZScpIGF0dHJBdXRvbG9hZHN0YXRlOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zJykgYXR0ckNvbHVtbnM6IGpxd2lkZ2V0cy5HcmlkQ29sdW1uW107XG4gICBASW5wdXQoJ2NvbHVtbmdyb3VwcycpIGF0dHJDb2x1bW5ncm91cHM6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ2NvbHVtbnNtZW51JykgYXR0ckNvbHVtbnNtZW51OiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zcmVzaXplJykgYXR0ckNvbHVtbnNyZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNhdXRvcmVzaXplJykgYXR0ckNvbHVtbnNhdXRvcmVzaXplOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zcmVvcmRlcicpIGF0dHJDb2x1bW5zcmVvcmRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXRhYmxlJykgYXR0ckVkaXRhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0bW9kZScpIGF0dHJFZGl0bW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdmaWx0ZXInKSBhdHRyRmlsdGVyOiAoY2VsbFZhbHVlPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2NlbGxWYWx1ZSddLCByb3dEYXRhPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ3Jvd0RhdGEnXSwgZGF0YUZpZWxkPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RhdGFGaWVsZCddLCBmaWx0ZXJHcm91cD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydmaWx0ZXJHcm91cCddLCBkZWZhdWx0RmlsdGVyUmVzdWx0PzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RlZmF1bHRGaWx0ZXJSZXN1bHQnXSkgPT4gYW55O1xuICAgQElucHV0KCdmaWx0ZXJhYmxlJykgYXR0ckZpbHRlcmFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2dyb3VwYWJsZScpIGF0dHJHcm91cGFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2dyb3VwcycpIGF0dHJHcm91cHM6IEFycmF5PHN0cmluZz47XG4gICBASW5wdXQoJ2hvcml6b250YWxzY3JvbGxiYXJzdGVwJykgYXR0ckhvcml6b250YWxzY3JvbGxiYXJzdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ2hvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXAnKSBhdHRySG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcDogbnVtYmVyO1xuICAgQElucHV0KCdpbml0cm93ZGV0YWlscycpIGF0dHJJbml0cm93ZGV0YWlsczogKGluZGV4PzogbnVtYmVyLCBwYXJlbnRFbGVtZW50PzogYW55LCBncmlkRWxlbWVudD86IGFueSwgZGF0YXJlY29yZD86IGFueSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgna2V5Ym9hcmRuYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkbmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbG9jYWxpemF0aW9uJykgYXR0ckxvY2FsaXphdGlvbjoganF3aWRnZXRzLkdyaWRMb2NhbGl6YXRpb25vYmplY3Q7XG4gICBASW5wdXQoJ3BhZ2VzaXplJykgYXR0clBhZ2VzaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ3BhZ2VzaXplb3B0aW9ucycpIGF0dHJQYWdlc2l6ZW9wdGlvbnM6IEFycmF5PG51bWJlciB8IHN0cmluZz47XG4gICBASW5wdXQoJ3BhZ2VybW9kZScpIGF0dHJQYWdlcm1vZGU6ICdzaW1wbGUnIHwgJ2RlZmF1bHQnO1xuICAgQElucHV0KCdwYWdlcmJ1dHRvbnNjb3VudCcpIGF0dHJQYWdlcmJ1dHRvbnNjb3VudDogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlYWJsZScpIGF0dHJQYWdlYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgncm93ZGV0YWlscycpIGF0dHJSb3dkZXRhaWxzOiBib29sZWFuO1xuICAgQElucHV0KCdyb3dkZXRhaWxzdGVtcGxhdGUnKSBhdHRyUm93ZGV0YWlsc3RlbXBsYXRlOiBhbnk7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKHR5cGU6IGFueSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyc3RhdHVzYmFyJykgYXR0clJlbmRlcnN0YXR1c2JhcjogKHN0YXR1c2Jhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVyc3RhdHVzYmFyWydzdGF0dXNiYXInXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVydG9vbGJhcicpIGF0dHJSZW5kZXJ0b29sYmFyOiAodG9vbGJhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVydG9vbGJhclsndG9vbGJhciddKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJncmlkcm93cycpIGF0dHJSZW5kZXJncmlkcm93czogKHBhcmFtcz86IGFueSkgPT4gYW55O1xuICAgQElucHV0KCdzb3J0YWJsZScpIGF0dHJTb3J0YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc29ydG1vZGUnKSBhdHRyU29ydG1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc2VsZWN0ZWRyb3dpbmRleCcpIGF0dHJTZWxlY3RlZHJvd2luZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3NlbGVjdGVkcm93aW5kZXhlcycpIGF0dHJTZWxlY3RlZHJvd2luZGV4ZXM6IEFycmF5PG51bWJlcj47XG4gICBASW5wdXQoJ3NvdXJjZScpIGF0dHJTb3VyY2U6IGpxd2lkZ2V0cy5HcmlkU291cmNlO1xuICAgQElucHV0KCdzb3J0dG9nZ2xlc3RhdGVzJykgYXR0clNvcnR0b2dnbGVzdGF0ZXM6IHN0cmluZztcbiAgIEBJbnB1dCgndXBkYXRlZGVsYXknKSBhdHRyVXBkYXRlZGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgndmlydHVhbG1vZGUnKSBhdHRyVmlydHVhbG1vZGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3ZlcnRpY2Fsc2Nyb2xsYmFyc3RlcCcpIGF0dHJWZXJ0aWNhbHNjcm9sbGJhcnN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgndmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXAnKSBhdHRyVmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbHRyb3dzJywnYWx0c3RhcnQnLCdhbHRzdGVwJywnYXV0b3Nob3dsb2FkZWxlbWVudCcsJ2F1dG9zaG93ZmlsdGVyaWNvbicsJ2F1dG9zaG93Y29sdW1uc21lbnVidXR0b24nLCdzaG93Y29sdW1ubGluZXMnLCdzaG93cm93bGluZXMnLCdzaG93Y29sdW1uaGVhZGVybGluZXMnLCdhZGFwdGl2ZScsJ2FkYXB0aXZld2lkdGgnLCdjbGlwYm9hcmQnLCdjbG9zZWFibGVncm91cHMnLCdjb2x1bW5zbWVudXdpZHRoJywnY29sdW1ubWVudW9wZW5pbmcnLCdjb2x1bW5tZW51Y2xvc2luZycsJ2NlbGxob3ZlcicsJ2VuYWJsZWtleWJvYXJkZGVsZXRlJywnZW5hYmxlZWxsaXBzaXMnLCdlbmFibGVtb3VzZXdoZWVsJywnZW5hYmxlYW5pbWF0aW9ucycsJ2VuYWJsZXRvb2x0aXBzJywnZW5hYmxlaG92ZXInLCdlbmFibGVicm93c2Vyc2VsZWN0aW9uJywnZXZlcnByZXNlbnRyb3dwb3NpdGlvbicsJ2V2ZXJwcmVzZW50cm93aGVpZ2h0JywnZXZlcnByZXNlbnRyb3dhY3Rpb25zJywnZXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZScsJ2ZpbHRlcnJvd2hlaWdodCcsJ2ZpbHRlcm1vZGUnLCdncm91cHNyZW5kZXJlcicsJ2dyb3VwY29sdW1ucmVuZGVyZXInLCdncm91cHNleHBhbmRlZGJ5ZGVmYXVsdCcsJ2hhbmRsZWtleWJvYXJkbmF2aWdhdGlvbicsJ3BhZ2VycmVuZGVyZXInLCdydGwnLCdzaG93ZGVmYXVsdGxvYWRlbGVtZW50Jywnc2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQnLCdzaG93ZmlsdGVybWVudWl0ZW1zJywnc2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQnLCdzaG93c29ydGNvbHVtbmJhY2tncm91bmQnLCdzaG93c29ydG1lbnVpdGVtcycsJ3Nob3dncm91cG1lbnVpdGVtcycsJ3Nob3dyb3dkZXRhaWxzY29sdW1uJywnc2hvd2hlYWRlcicsJ3Nob3dncm91cHNoZWFkZXInLCdzaG93YWdncmVnYXRlcycsJ3Nob3dncm91cGFnZ3JlZ2F0ZXMnLCdzaG93ZXZlcnByZXNlbnRyb3cnLCdzaG93ZmlsdGVycm93Jywnc2hvd2VtcHR5cm93Jywnc2hvd3N0YXR1c2JhcicsJ3N0YXR1c2JhcmhlaWdodCcsJ3Nob3d0b29sYmFyJywnc2VsZWN0aW9ubW9kZScsJ3VwZGF0ZWZpbHRlcmNvbmRpdGlvbnMnLCd1cGRhdGVmaWx0ZXJwYW5lbCcsJ3RoZW1lJywndG9vbGJhcmhlaWdodCcsJ2F1dG9oZWlnaHQnLCdhdXRvcm93aGVpZ2h0JywnY29sdW1uc2hlaWdodCcsJ2RlZmVycmVkZGF0YWZpZWxkcycsJ2dyb3Vwc2hlYWRlcmhlaWdodCcsJ2dyb3VwaW5kZW50d2lkdGgnLCdoZWlnaHQnLCdwYWdlcmhlaWdodCcsJ3Jvd3NoZWlnaHQnLCdzY3JvbGxiYXJzaXplJywnc2Nyb2xsbW9kZScsJ3Njcm9sbGZlZWRiYWNrJywnd2lkdGgnLCdhdXRvc2F2ZXN0YXRlJywnYXV0b2xvYWRzdGF0ZScsJ2NvbHVtbnMnLCdjb2x1bW5ncm91cHMnLCdjb2x1bW5zbWVudScsJ2NvbHVtbnNyZXNpemUnLCdjb2x1bW5zYXV0b3Jlc2l6ZScsJ2NvbHVtbnNyZW9yZGVyJywnZGlzYWJsZWQnLCdlZGl0YWJsZScsJ2VkaXRtb2RlJywnZmlsdGVyJywnZmlsdGVyYWJsZScsJ2dyb3VwYWJsZScsJ2dyb3VwcycsJ2hvcml6b250YWxzY3JvbGxiYXJzdGVwJywnaG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcCcsJ2luaXRyb3dkZXRhaWxzJywna2V5Ym9hcmRuYXZpZ2F0aW9uJywnbG9jYWxpemF0aW9uJywncGFnZXNpemUnLCdwYWdlc2l6ZW9wdGlvbnMnLCdwYWdlcm1vZGUnLCdwYWdlcmJ1dHRvbnNjb3VudCcsJ3BhZ2VhYmxlJywncm93ZGV0YWlscycsJ3Jvd2RldGFpbHN0ZW1wbGF0ZScsJ3JlYWR5JywncmVuZGVyZWQnLCdyZW5kZXJzdGF0dXNiYXInLCdyZW5kZXJ0b29sYmFyJywncmVuZGVyZ3JpZHJvd3MnLCdzb3J0YWJsZScsJ3NvcnRtb2RlJywnc2VsZWN0ZWRyb3dpbmRleCcsJ3NlbGVjdGVkcm93aW5kZXhlcycsJ3NvdXJjZScsJ3NvcnR0b2dnbGVzdGF0ZXMnLCd1cGRhdGVkZWxheScsJ3ZpcnR1YWxtb2RlJywndmVydGljYWxzY3JvbGxiYXJzdGVwJywndmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXAnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4R3JpZDtcblxuICAgY29udGVudDogU3RyaW5nO1xuICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgfTsgXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgbGV0IGNoaWxkcmVuID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbikuZmluZCgndHInKTsgXG4gICAgICAgbGV0IGh0bWwgPSAnJzsgXG4gICAgICAgbGV0IG9wdGlvbnMgPSB7fTsgXG5cbiAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBodG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgdGhpcy5jb250ZW50ID0gaHRtbDtcblxuICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICBpZiAodGhpc1snYXR0ckNvbHVtbnMnXSAhPT0gdW5kZWZpbmVkKSB7ICBcbjsgICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuc291cmNlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgfVxuICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zWydzb3VyY2UnXSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snY29sdW1ucyddID0gcmVzdWx0LmNvbHVtbnM7XG4gICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7IFxuICAgICAgfVxuICAgfTsgXG5cbiBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IHRoaXMuY29udGFpbmVyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ucycpO1xuXG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh7IHNvdXJjZTogcmVzdWx0LnNvdXJjZSwgY29sdW1uczogcmVzdWx0LmNvbHVtbnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh7IHNvdXJjZTogcmVzdWx0LnNvdXJjZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB9O1xuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhHcmlkKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEdyaWQnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhHcmlkQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFsdHJvd3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWx0cm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYWx0cm93cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbHRzdGFydChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWx0c3RhcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHN0YXJ0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsdHN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b3Nob3dsb2FkZWxlbWVudChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2xvYWRlbGVtZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2xvYWRlbGVtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9zaG93ZmlsdGVyaWNvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2ZpbHRlcmljb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93ZmlsdGVyaWNvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93Y29sdW1uc21lbnVidXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93Y29sdW1uc21lbnVidXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2NvbHVtbmxpbmVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3djb2x1bW5saW5lcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2NvbHVtbmxpbmVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dyb3dsaW5lcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cm93bGluZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dyb3dsaW5lcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Y29sdW1uaGVhZGVybGluZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2NvbHVtbmhlYWRlcmxpbmVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Y29sdW1uaGVhZGVybGluZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWRhcHRpdmUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWRhcHRpdmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2FkYXB0aXZlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFkYXB0aXZld2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FkYXB0aXZld2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2FkYXB0aXZld2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xpcGJvYXJkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NsaXBib2FyZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY2xpcGJvYXJkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsb3NlYWJsZWdyb3Vwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbG9zZWFibGVncm91cHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2Nsb3NlYWJsZWdyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zbWVudXdpZHRoKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zbWVudXdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zbWVudXdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbm1lbnVvcGVuaW5nKGFyZz86IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snaGVpZ2h0J10pID0+IGJvb2xlYW4gfCB2b2lkKTogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbiB8IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ubWVudW9wZW5pbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbm1lbnVvcGVuaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbm1lbnVjbG9zaW5nKGFyZz86IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snaGVpZ2h0J10pID0+IGJvb2xlYW4pOiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2hlaWdodCddKSA9PiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbm1lbnVjbG9zaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5tZW51Y2xvc2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjZWxsaG92ZXIoYXJnPzogKGNlbGxodG1sRWxlbWVudD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWydjZWxsaHRtbEVsZW1lbnQnXSwgeD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd4J10sIHk/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneSddKSA9PiB2b2lkKTogKGNlbGxodG1sRWxlbWVudD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWydjZWxsaHRtbEVsZW1lbnQnXSwgeD86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd4J10sIHk/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneSddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NlbGxob3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY2VsbGhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWtleWJvYXJkZGVsZXRlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWtleWJvYXJkZGVsZXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVrZXlib2FyZGRlbGV0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVlbGxpcHNpcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVlbGxpcHNpcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlZWxsaXBzaXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlbW91c2V3aGVlbChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVtb3VzZXdoZWVsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVtb3VzZXdoZWVsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWFuaW1hdGlvbnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlYW5pbWF0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlYW5pbWF0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGV0b29sdGlwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGV0b29sdGlwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxldG9vbHRpcHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlaG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlaG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWJyb3dzZXJzZWxlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlYnJvd3NlcnNlbGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlYnJvd3NlcnNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBldmVycHJlc2VudHJvd3Bvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd3Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd3Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV2ZXJwcmVzZW50cm93aGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3doZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXZlcnByZXNlbnRyb3dhY3Rpb25zKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2FjdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93YWN0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBldmVycHJlc2VudHJvd2FjdGlvbnNtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2FjdGlvbnNtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2FjdGlvbnNtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcnJvd2hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVycm93aGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJyb3doZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVybW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVybW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVybW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cHNyZW5kZXJlcihhcmc/OiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ3RleHQnXSwgZ3JvdXA/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydncm91cCddLCBleHBhbmRlZD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2V4cGFuZGVkJ10sIGRhdGE/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydkYXRhJ10pID0+IHN0cmluZyk6ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsndGV4dCddLCBncm91cD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2dyb3VwJ10sIGV4cGFuZGVkPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZXhwYW5kZWQnXSwgZGF0YT86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2RhdGEnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc3JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNyZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cGNvbHVtbnJlbmRlcmVyKGFyZz86ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cGNvbHVtbnJlbmRlcmVyWyd0ZXh0J10pID0+IHN0cmluZyk6ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cGNvbHVtbnJlbmRlcmVyWyd0ZXh0J10pID0+IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGNvbHVtbnJlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGNvbHVtbnJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNleHBhbmRlZGJ5ZGVmYXVsdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoYW5kbGVrZXlib2FyZG5hdmlnYXRpb24oYXJnPzogKGV2ZW50OiBqcXdpZGdldHMuR3JpZEhhbmRsZWtleWJvYXJkbmF2aWdhdGlvblsnZXZlbnQnXSkgPT4gYm9vbGVhbik6IChldmVudDoganF3aWRnZXRzLkdyaWRIYW5kbGVrZXlib2FyZG5hdmlnYXRpb25bJ2V2ZW50J10pID0+IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdoYW5kbGVrZXlib2FyZG5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJyZW5kZXJlcihhcmc/OiAoKSA9PiBhbnlbXSk6ICgpID0+IGFueVtdIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VycmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VycmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dkZWZhdWx0bG9hZGVsZW1lbnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2RlZmF1bHRsb2FkZWxlbWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2RlZmF1bHRsb2FkZWxlbWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2ZpbHRlcm1lbnVpdGVtcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVybWVudWl0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVybWVudWl0ZW1zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cGlubmVkY29sdW1uYmFja2dyb3VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93c29ydGNvbHVtbmJhY2tncm91bmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c29ydGNvbHVtbmJhY2tncm91bmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3NvcnRtZW51aXRlbXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3NvcnRtZW51aXRlbXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzb3J0bWVudWl0ZW1zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dncm91cG1lbnVpdGVtcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBtZW51aXRlbXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cG1lbnVpdGVtcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93cm93ZGV0YWlsc2NvbHVtbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cm93ZGV0YWlsc2NvbHVtbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Jvd2RldGFpbHNjb2x1bW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2hlYWRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93aGVhZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93aGVhZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dncm91cHNoZWFkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3Vwc2hlYWRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3Vwc2hlYWRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93YWdncmVnYXRlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93YWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2FnZ3JlZ2F0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2dyb3VwYWdncmVnYXRlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBhZ2dyZWdhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBhZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dldmVycHJlc2VudHJvdyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZXZlcnByZXNlbnRyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dldmVycHJlc2VudHJvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZmlsdGVycm93KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2VtcHR5cm93KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dlbXB0eXJvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2VtcHR5cm93Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dzdGF0dXNiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3N0YXR1c2JhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3N0YXR1c2JhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0dXNiYXJoZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3N0YXR1c2JhcmhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc3RhdHVzYmFyaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3d0b29sYmFyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3d0b29sYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93dG9vbGJhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25tb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3Rpb25tb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3Rpb25tb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVwZGF0ZWZpbHRlcmNvbmRpdGlvbnMoYXJnPzogKHR5cGU/OiBzdHJpbmcsIGRlZmF1bHRjb25kaXRpb25zPzogYW55KSA9PiBhbnkpOiAodHlwZT86IHN0cmluZywgZGVmYXVsdGNvbmRpdGlvbnM/OiBhbnkpID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVmaWx0ZXJjb25kaXRpb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVmaWx0ZXJjb25kaXRpb25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVwZGF0ZWZpbHRlcnBhbmVsKGFyZz86IChmaWx0ZXJ0eXBlZHJvcGRvd24xPzogYW55LCBmaWx0ZXJ0eXBlZHJvcGRvd24yPzogYW55LCBmaWx0ZXJvcGVyYXRvcmRyb3Bkb3duPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMT86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDI/OiBhbnksIGZpbHRlcmJ1dHRvbj86IGFueSwgY2xlYXJidXR0b24/OiBhbnksIGNvbHVtbmZpbHRlcj86IGFueSwgZmlsdGVydHlwZT86IGFueSwgZmlsdGVyY29uZGl0aW9ucz86IGFueSkgPT4gYW55KTogKGZpbHRlcnR5cGVkcm9wZG93bjE/OiBhbnksIGZpbHRlcnR5cGVkcm9wZG93bjI/OiBhbnksIGZpbHRlcm9wZXJhdG9yZHJvcGRvd24/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQxPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMj86IGFueSwgZmlsdGVyYnV0dG9uPzogYW55LCBjbGVhcmJ1dHRvbj86IGFueSwgY29sdW1uZmlsdGVyPzogYW55LCBmaWx0ZXJ0eXBlPzogYW55LCBmaWx0ZXJjb25kaXRpb25zPzogYW55KSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZmlsdGVycGFuZWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWZpbHRlcnBhbmVsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbGJhcmhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndG9vbGJhcmhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndG9vbGJhcmhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvaGVpZ2h0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9oZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9oZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b3Jvd2hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvcm93aGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvcm93aGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNoZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGVmZXJyZWRkYXRhZmllbGRzKGFyZz86IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2RlZmVycmVkZGF0YWZpZWxkcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZGVmZXJyZWRkYXRhZmllbGRzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3Vwc2hlYWRlcmhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzaGVhZGVyaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNoZWFkZXJoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBpbmRlbnR3aWR0aChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBpbmRlbnR3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBpbmRlbnR3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcmhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm93c2hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncm93c2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncm93c2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxiYXJzaXplKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxiYXJzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxiYXJzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbG1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbG1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsZmVlZGJhY2soYXJnPzogKHJvdzoganF3aWRnZXRzLkdyaWRTY3JvbGxmZWVkYmFja1sncm93J10pID0+IHN0cmluZyk6IChyb3c6IGpxd2lkZ2V0cy5HcmlkU2Nyb2xsZmVlZGJhY2tbJ3JvdyddKSA9PiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsZmVlZGJhY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbGZlZWRiYWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b3NhdmVzdGF0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2F2ZXN0YXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2F2ZXN0YXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9sb2Fkc3RhdGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b2xvYWRzdGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b2xvYWRzdGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zKGFyZz86IGpxd2lkZ2V0cy5HcmlkQ29sdW1uW10pOiBqcXdpZGdldHMuR3JpZENvbHVtbltdIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uZ3JvdXBzKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbmdyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uZ3JvdXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNtZW51KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNtZW51JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zbWVudScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zcmVzaXplKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNyZXNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNyZXNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc2F1dG9yZXNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc2F1dG9yZXNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNhdXRvcmVzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNyZW9yZGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNyZW9yZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zcmVvcmRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdGFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZWRpdGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VkaXRhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXRtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlZGl0bW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZWRpdG1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyKGFyZz86IChjZWxsVmFsdWU/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnY2VsbFZhbHVlJ10sIHJvd0RhdGE/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsncm93RGF0YSddLCBkYXRhRmllbGQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGF0YUZpZWxkJ10sIGZpbHRlckdyb3VwPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2ZpbHRlckdyb3VwJ10sIGRlZmF1bHRGaWx0ZXJSZXN1bHQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGVmYXVsdEZpbHRlclJlc3VsdCddKSA9PiBhbnkpOiAoY2VsbFZhbHVlPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2NlbGxWYWx1ZSddLCByb3dEYXRhPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ3Jvd0RhdGEnXSwgZGF0YUZpZWxkPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RhdGFGaWVsZCddLCBmaWx0ZXJHcm91cD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydmaWx0ZXJHcm91cCddLCBkZWZhdWx0RmlsdGVyUmVzdWx0PzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RlZmF1bHRGaWx0ZXJSZXN1bHQnXSkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcmFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVyYWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVyYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cGFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBzKGFyZz86IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhvcml6b250YWxzY3JvbGxiYXJzdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdob3Jpem9udGFsc2Nyb2xsYmFyc3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0cm93ZGV0YWlscyhhcmc/OiAoaW5kZXg/OiBudW1iZXIsIHBhcmVudEVsZW1lbnQ/OiBhbnksIGdyaWRFbGVtZW50PzogYW55LCBkYXRhcmVjb3JkPzogYW55KSA9PiB2b2lkKTogKGluZGV4PzogbnVtYmVyLCBwYXJlbnRFbGVtZW50PzogYW55LCBncmlkRWxlbWVudD86IGFueSwgZGF0YXJlY29yZD86IGFueSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdpbml0cm93ZGV0YWlscycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaW5pdHJvd2RldGFpbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAga2V5Ym9hcmRuYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2tleWJvYXJkbmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgna2V5Ym9hcmRuYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxvY2FsaXphdGlvbihhcmc/OiBqcXdpZGdldHMuR3JpZExvY2FsaXphdGlvbm9iamVjdCk6IGpxd2lkZ2V0cy5HcmlkTG9jYWxpemF0aW9ub2JqZWN0IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2xvY2FsaXphdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VzaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXNpemVvcHRpb25zKGFyZz86IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VzaXplb3B0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXNpemVvcHRpb25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VybW9kZShhcmc/OiAnc2ltcGxlJyB8ICdkZWZhdWx0Jyk6ICdzaW1wbGUnIHwgJ2RlZmF1bHQnIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VybW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyYnV0dG9uc2NvdW50KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcmJ1dHRvbnNjb3VudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJidXR0b25zY291bnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZWFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZWFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd2RldGFpbHMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncm93ZGV0YWlscycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncm93ZGV0YWlscycpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dkZXRhaWxzdGVtcGxhdGUoYXJnPzogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd2RldGFpbHN0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncm93ZGV0YWlsc3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWR5KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlYWR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWFkeScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlZChhcmc/OiAodHlwZTogYW55KSA9PiB2b2lkKTogKHR5cGU6IGFueSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyc3RhdHVzYmFyKGFyZz86IChzdGF0dXNiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnN0YXR1c2Jhclsnc3RhdHVzYmFyJ10pID0+IHZvaWQpOiAoc3RhdHVzYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJzdGF0dXNiYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcnN0YXR1c2JhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyc3RhdHVzYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcnRvb2xiYXIoYXJnPzogKHRvb2xiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnRvb2xiYXJbJ3Rvb2xiYXInXSkgPT4gdm9pZCk6ICh0b29sYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJ0b29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVydG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVydG9vbGJhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJncmlkcm93cyhhcmc/OiAocGFyYW1zPzogYW55KSA9PiBhbnkpOiAocGFyYW1zPzogYW55KSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyZ3JpZHJvd3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcmdyaWRyb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnRhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnRhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3J0bW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc29ydG1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnRtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGVkcm93aW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGVkcm93aW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGVkcm93aW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0ZWRyb3dpbmRleGVzKGFyZz86IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGVkcm93aW5kZXhlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0ZWRyb3dpbmRleGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBqcXdpZGdldHMuR3JpZFNvdXJjZSk6IGpxd2lkZ2V0cy5HcmlkU291cmNlIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnR0b2dnbGVzdGF0ZXMoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnR0b2dnbGVzdGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnR0b2dnbGVzdGF0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXBkYXRlZGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWRlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVkZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aXJ0dWFsbW9kZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd2aXJ0dWFsbW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndmlydHVhbG1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmVydGljYWxzY3JvbGxiYXJzdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd2ZXJ0aWNhbHNjcm9sbGJhcnN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3ZlcnRpY2Fsc2Nyb2xsYmFyc3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB2ZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3ZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4R3JpZENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGF1dG9yZXNpemVjb2x1bW5zKHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9yZXNpemVjb2x1bW5zJywgdHlwZSk7XG4gICB9XG5cbiAgIGF1dG9yZXNpemVjb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9yZXNpemVjb2x1bW4nLCBkYXRhRmllbGQsIHR5cGUpO1xuICAgfVxuXG4gICBiZWdpbnVwZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2JlZ2ludXBkYXRlJyk7XG4gICB9XG5cbiAgIGNsZWFyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xlYXInKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZW5kdXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5kdXBkYXRlJyk7XG4gICB9XG5cbiAgIGVuc3VyZXJvd3Zpc2libGUocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbnN1cmVyb3d2aXNpYmxlJywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0Y29sdW1uaW5kZXgoZGF0YUZpZWxkOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNvbHVtbmluZGV4JywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKToganF3aWRnZXRzLkdyaWRHZXRDb2x1bW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNvbHVtbnByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y29sdW1ucHJvcGVydHknLCBkYXRhRmllbGQsIHByb3BlcnR5TmFtZSk7XG4gICB9XG5cbiAgIGdldHJvd2lkKHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93aWQnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgZ2V0cm93ZGF0YShyb3dCb3VuZEluZGV4OiBudW1iZXIpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd2RhdGEnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgZ2V0cm93ZGF0YWJ5aWQocm93SUQ6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93ZGF0YWJ5aWQnLCByb3dJRCk7XG4gICB9XG5cbiAgIGdldHJvd2JvdW5kaW5kZXhieWlkKHJvd0lEOiBzdHJpbmcpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd2JvdW5kaW5kZXhieWlkJywgcm93SUQpO1xuICAgfVxuXG4gICBnZXRyb3dib3VuZGluZGV4KHJvd0Rpc3BsYXlJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dib3VuZGluZGV4Jywgcm93RGlzcGxheUluZGV4KTtcbiAgIH1cblxuICAgZ2V0cm93cygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dzJyk7XG4gICB9XG5cbiAgIGdldGJvdW5kcm93cygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRib3VuZHJvd3MnKTtcbiAgIH1cblxuICAgZ2V0ZGlzcGxheXJvd3MoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0ZGlzcGxheXJvd3MnKTtcbiAgIH1cblxuICAgZ2V0ZGF0YWluZm9ybWF0aW9uKCk6IGpxd2lkZ2V0cy5HcmlkR2V0RGF0YUluZm9ybWF0aW9uIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRkYXRhaW5mb3JtYXRpb24nKTtcbiAgIH1cblxuICAgZ2V0c29ydGluZm9ybWF0aW9uKCk6IGpxd2lkZ2V0cy5HcmlkR2V0U29ydEluZm9ybWF0aW9uIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzb3J0aW5mb3JtYXRpb24nKTtcbiAgIH1cblxuICAgZ2V0cGFnaW5naW5mb3JtYXRpb24oKToganF3aWRnZXRzLkdyaWRHZXRQYWdpbmdJbmZvcm1hdGlvbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cGFnaW5naW5mb3JtYXRpb24nKTtcbiAgIH1cblxuICAgaGlkZWNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaGlkZWNvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGhpZGVsb2FkZWxlbWVudCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hpZGVsb2FkZWxlbWVudCcpO1xuICAgfVxuXG4gICBoaWRlcm93ZGV0YWlscyhyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hpZGVyb3dkZXRhaWxzJywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIGlzY29sdW1udmlzaWJsZShkYXRhRmllbGQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2lzY29sdW1udmlzaWJsZScsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGlzY29sdW1ucGlubmVkKGRhdGFGaWVsZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaXNjb2x1bW5waW5uZWQnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBsb2NhbGl6ZXN0cmluZ3MobG9jYWxpemF0aW9ub2JqZWN0OiBqcXdpZGdldHMuR3JpZExvY2FsaXphdGlvbm9iamVjdCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnbG9jYWxpemVzdHJpbmdzJywgbG9jYWxpemF0aW9ub2JqZWN0KTtcbiAgIH1cblxuICAgcGluY29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwaW5jb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICByZWZyZXNoZGF0YSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlZnJlc2hkYXRhJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICBzY3JvbGxvZmZzZXQodG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsb2Zmc2V0JywgdG9wLCBsZWZ0KTtcbiAgIH1cblxuICAgc2Nyb2xscG9zaXRpb24oKToganF3aWRnZXRzLkdyaWRTY3JvbGxQb3NpdGlvbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xscG9zaXRpb24nKTtcbiAgIH1cblxuICAgc2hvd2xvYWRlbGVtZW50KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2xvYWRlbGVtZW50Jyk7XG4gICB9XG5cbiAgIHNob3dyb3dkZXRhaWxzKHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Jvd2RldGFpbHMnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgc2V0Y29sdW1uaW5kZXgoZGF0YUZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NldGNvbHVtbmluZGV4JywgZGF0YUZpZWxkLCBpbmRleCk7XG4gICB9XG5cbiAgIHNldGNvbHVtbnByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IGFueSwgcHJvcGVydHlWYWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZXRjb2x1bW5wcm9wZXJ0eScsIGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgIH1cblxuICAgc2hvd2NvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2NvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHVucGluY29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1bnBpbmNvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHVwZGF0ZWJvdW5kZGF0YSh0eXBlPzogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVib3VuZGRhdGEnLCB0eXBlKTtcbiAgIH1cblxuICAgdXBkYXRpbmcoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRpbmcnKTtcbiAgIH1cblxuICAgZ2V0c29ydGNvbHVtbigpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNvcnRjb2x1bW4nKTtcbiAgIH1cblxuICAgcmVtb3Zlc29ydCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbW92ZXNvcnQnKTtcbiAgIH1cblxuICAgc29ydGJ5KGRhdGFGaWVsZDogc3RyaW5nLCBzb3J0T3JkZXI6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc29ydGJ5JywgZGF0YUZpZWxkLCBzb3J0T3JkZXIpO1xuICAgfVxuXG4gICBhZGRncm91cChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWRkZ3JvdXAnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBjbGVhcmdyb3VwcygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NsZWFyZ3JvdXBzJyk7XG4gICB9XG5cbiAgIGNvbGxhcHNlZ3JvdXAoZ3JvdXA6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sbGFwc2Vncm91cCcsIGdyb3VwKTtcbiAgIH1cblxuICAgY29sbGFwc2VhbGxncm91cHMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2xsYXBzZWFsbGdyb3VwcycpO1xuICAgfVxuXG4gICBleHBhbmRhbGxncm91cHMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdleHBhbmRhbGxncm91cHMnKTtcbiAgIH1cblxuICAgZXhwYW5kZ3JvdXAoZ3JvdXA6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXhwYW5kZ3JvdXAnLCBncm91cCk7XG4gICB9XG5cbiAgIGdldHJvb3Rncm91cHNjb3VudCgpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvb3Rncm91cHNjb3VudCcpO1xuICAgfVxuXG4gICBnZXRncm91cChncm91cEluZGV4OiBudW1iZXIpOiBqcXdpZGdldHMuR3JpZEdldEdyb3VwIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRncm91cCcsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBpbnNlcnRncm91cChncm91cEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdpbnNlcnRncm91cCcsIGdyb3VwSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGlzY29sdW1uZ3JvdXBhYmxlKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2lzY29sdW1uZ3JvdXBhYmxlJyk7XG4gICB9XG5cbiAgIHJlbW92ZWdyb3VwYXQoZ3JvdXBJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW1vdmVncm91cGF0JywgZ3JvdXBJbmRleCk7XG4gICB9XG5cbiAgIHJlbW92ZWdyb3VwKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW1vdmVncm91cCcsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGFkZGZpbHRlcihkYXRhRmllbGQ6IHN0cmluZywgZmlsdGVyR3JvdXA6IGFueSwgcmVmcmVzaEdyaWQ/OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGRmaWx0ZXInLCBkYXRhRmllbGQsIGZpbHRlckdyb3VwLCByZWZyZXNoR3JpZCk7XG4gICB9XG5cbiAgIGFwcGx5ZmlsdGVycygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FwcGx5ZmlsdGVycycpO1xuICAgfVxuXG4gICBjbGVhcmZpbHRlcnMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGVhcmZpbHRlcnMnKTtcbiAgIH1cblxuICAgZ2V0ZmlsdGVyaW5mb3JtYXRpb24oKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRmaWx0ZXJpbmZvcm1hdGlvbicpO1xuICAgfVxuXG4gICBnZXRjb2x1bW5hdChpbmRleDogbnVtYmVyKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjb2x1bW5hdCcsIGluZGV4KTtcbiAgIH1cblxuICAgcmVtb3ZlZmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCByZWZyZXNoR3JpZDogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVtb3ZlZmlsdGVyJywgZGF0YUZpZWxkLCByZWZyZXNoR3JpZCk7XG4gICB9XG5cbiAgIHJlZnJlc2hmaWx0ZXJyb3coKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWZyZXNoZmlsdGVycm93Jyk7XG4gICB9XG5cbiAgIGdvdG9wYWdlKHBhZ2VudW1iZXI6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ290b3BhZ2UnLCBwYWdlbnVtYmVyKTtcbiAgIH1cblxuICAgZ290b3ByZXZwYWdlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ290b3ByZXZwYWdlJyk7XG4gICB9XG5cbiAgIGdvdG9uZXh0cGFnZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dvdG9uZXh0cGFnZScpO1xuICAgfVxuXG4gICBhZGRyb3cocm93SWRzOiBhbnksIGRhdGE6IGFueSwgcm93UG9zaXRpb24/OiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FkZHJvdycsIHJvd0lkcywgZGF0YSwgcm93UG9zaXRpb24pO1xuICAgfVxuXG4gICBiZWdpbmNlbGxlZGl0KHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2JlZ2luY2VsbGVkaXQnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBiZWdpbnJvd2VkaXQocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdiZWdpbnJvd2VkaXQnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgY2xvc2VtZW51KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xvc2VtZW51Jyk7XG4gICB9XG5cbiAgIGRlbGV0ZXJvdyhyb3dJZHM6IHN0cmluZyB8IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2RlbGV0ZXJvdycsIHJvd0lkcyk7XG4gICB9XG5cbiAgIGVuZGNlbGxlZGl0KHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIGNvbmZpcm1DaGFuZ2VzOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmRjZWxsZWRpdCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCwgY29uZmlybUNoYW5nZXMpO1xuICAgfVxuXG4gICBlbmRyb3dlZGl0KHJvd0JvdW5kSW5kZXg6IG51bWJlciwgY29uZmlybUNoYW5nZXM6IGJvb2xlYW4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuZHJvd2VkaXQnLCByb3dCb3VuZEluZGV4LCBjb25maXJtQ2hhbmdlcyk7XG4gICB9XG5cbiAgIGdldGNlbGwocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhZmllbGQ6IHN0cmluZyk6IGpxd2lkZ2V0cy5HcmlkR2V0Q2VsbCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFmaWVsZCk7XG4gICB9XG5cbiAgIGdldGNlbGxhdHBvc2l0aW9uKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiBqcXdpZGdldHMuR3JpZEdldENlbGwge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGxhdHBvc2l0aW9uJywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgZ2V0Y2VsbHRleHQocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbHRleHQnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjZWxsdGV4dGJ5aWQocm93SUQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGx0ZXh0YnlpZCcsIHJvd0lELCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjZWxsdmFsdWVieWlkKHJvd0lEOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsdmFsdWVieWlkJywgcm93SUQsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNlbGx2YWx1ZShyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsdmFsdWUnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBpc0JpbmRpbmdDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaXNCaW5kaW5nQ29tcGxldGVkJyk7XG4gICB9XG5cbiAgIG9wZW5tZW51KGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdvcGVubWVudScsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHNldGNlbGx2YWx1ZShyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZXRjZWxsdmFsdWUnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQsIHZhbHVlKTtcbiAgIH1cblxuICAgc2V0Y2VsbHZhbHVlYnlpZChyb3dJRDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2V0Y2VsbHZhbHVlYnlpZCcsIHJvd0lELCBkYXRhRmllbGQsIHZhbHVlKTtcbiAgIH1cblxuICAgc2hvd3ZhbGlkYXRpb25wb3B1cChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93dmFsaWRhdGlvbnBvcHVwJywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkLCB2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICB9XG5cbiAgIHVwZGF0ZXJvdyhyb3dJZHM6IHN0cmluZyB8IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4sIGRhdGE6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlcm93Jywgcm93SWRzLCBkYXRhKTtcbiAgIH1cblxuICAgY2xlYXJzZWxlY3Rpb24oKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGVhcnNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBnZXRzZWxlY3RlZHJvd2luZGV4KCk6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c2VsZWN0ZWRyb3dpbmRleCcpO1xuICAgfVxuXG4gICBnZXRzZWxlY3RlZHJvd2luZGV4ZXMoKTogQXJyYXk8bnVtYmVyPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c2VsZWN0ZWRyb3dpbmRleGVzJyk7XG4gICB9XG5cbiAgIGdldHNlbGVjdGVkY2VsbCgpOiBqcXdpZGdldHMuR3JpZEdldFNlbGVjdGVkQ2VsbCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c2VsZWN0ZWRjZWxsJyk7XG4gICB9XG5cbiAgIGdldHNlbGVjdGVkY2VsbHMoKTogQXJyYXk8anF3aWRnZXRzLkdyaWRHZXRTZWxlY3RlZENlbGw+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzZWxlY3RlZGNlbGxzJyk7XG4gICB9XG5cbiAgIHNlbGVjdGNlbGwocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0Y2VsbCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHNlbGVjdGFsbHJvd3MoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RhbGxyb3dzJyk7XG4gICB9XG5cbiAgIHNlbGVjdHJvdyhyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdHJvdycsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICB1bnNlbGVjdHJvdyhyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Vuc2VsZWN0cm93Jywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0Y2VsbChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1bnNlbGVjdGNlbGwnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjb2x1bW5hZ2dyZWdhdGVkZGF0YShkYXRhRmllbGQ6IHN0cmluZywgYWdncmVnYXRlczogQXJyYXk8YW55Pik6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y29sdW1uYWdncmVnYXRlZGRhdGEnLCBkYXRhRmllbGQsIGFnZ3JlZ2F0ZXMpO1xuICAgfVxuXG4gICByZWZyZXNoYWdncmVnYXRlcygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlZnJlc2hhZ2dyZWdhdGVzJyk7XG4gICB9XG5cbiAgIHJlbmRlcmFnZ3JlZ2F0ZXMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJhZ2dyZWdhdGVzJyk7XG4gICB9XG5cbiAgIGV4cG9ydGRhdGEoZGF0YVR5cGU6IHN0cmluZywgZmlsZU5hbWU/OiBzdHJpbmcsIGV4cG9ydEhlYWRlcj86IGJvb2xlYW4sIHJvd3M/OiBBcnJheTxudW1iZXI+LCBleHBvcnRIaWRkZW5Db2x1bW5zPzogYm9vbGVhbiwgc2VydmVyVVJMPzogc3RyaW5nLCBjaGFyU2V0Pzogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdleHBvcnRkYXRhJywgZGF0YVR5cGUsIGZpbGVOYW1lLCBleHBvcnRIZWFkZXIsIHJvd3MsIGV4cG9ydEhpZGRlbkNvbHVtbnMsIHNlcnZlclVSTCwgY2hhclNldCk7XG4gICB9XG5cbiAgIGdldHN0YXRlKCk6IGpxd2lkZ2V0cy5HcmlkR2V0U3RhdGUge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHN0YXRlJyk7XG4gICB9XG5cbiAgIGxvYWRzdGF0ZShzdGF0ZW9iamVjdDogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdsb2Fkc3RhdGUnLCBzdGF0ZW9iamVjdCk7XG4gICB9XG5cbiAgIHNhdmVzdGF0ZSgpOiBqcXdpZGdldHMuR3JpZEdldFN0YXRlIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzYXZlc3RhdGUnKTtcbiAgIH1cblxuXG4gICAvLyBqcXhHcmlkQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ2NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sdW1ucmVzaXplZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbnJlb3JkZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbmNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbGRvdWJsZWNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGx1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGx2YWx1ZWNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsYmVnaW5lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbGVuZGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Hcm91cHNjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uR3JvdXBleHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Hcm91cGNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGFnZWNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QYWdlc2l6ZWNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3djbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd2RvdWJsZWNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93c2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93dW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dleHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3djb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdiaW5kaW5nY29tcGxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJpbmRpbmdjb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2x1bW5yZXNpemVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5yZXNpemVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbnJlb3JkZXJlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1ucmVvcmRlcmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbmNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5jbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsZG91YmxlY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxkb3VibGVjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGx1bnNlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbHVuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGx2YWx1ZWNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGx2YWx1ZWNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbGJlZ2luZWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbGJlZ2luZWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsZW5kZWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbGVuZGVkaXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZmlsdGVyJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25GaWx0ZXIuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZ3JvdXBzY2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uR3JvdXBzY2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdncm91cGV4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uR3JvdXBleHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZ3JvdXBjb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uR3JvdXBjb2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwYWdlY2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGFnZWNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGFnZXNpemVjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QYWdlc2l6ZWNoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93Y2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd2NsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd2RvdWJsZWNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dkb3VibGVjbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dzZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd3NlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3d1bnNlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93dW5zZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93ZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dleHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93Y29sbGFwc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd2NvbGxhcHNlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NvcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeEdyaWRDb21wb25lbnRcbiJdfQ==