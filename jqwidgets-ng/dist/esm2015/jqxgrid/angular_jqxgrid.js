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
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxGridComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
    ngOnInit() {
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        /** @type {?} */
        let html = '';
        /** @type {?} */
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            /** @type {?} */
            let result = JQXLite.jqx.parseSourceTag(this.container);
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
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                /** @type {?} */
                let result = JQXLite.jqx.parseSourceTag(this.container);
                /** @type {?} */
                let columns = this.host.jqxGrid('columns');
                if (columns.length === 0) {
                    this.host.jqxGrid({ source: result.source, columns: result.columns });
                }
                else {
                    this.host.jqxGrid({ source: result.source });
                }
            }
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);
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
        this.host.jqxGrid('setOptions', options);
    }
    // jqxGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    altrows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altrows', arg);
        }
        else {
            return this.host.jqxGrid('altrows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    altstart(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstart', arg);
        }
        else {
            return this.host.jqxGrid('altstart');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    altstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstep', arg);
        }
        else {
            return this.host.jqxGrid('altstep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoshowloadelement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowloadelement', arg);
        }
        else {
            return this.host.jqxGrid('autoshowloadelement');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoshowfiltericon(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowfiltericon', arg);
        }
        else {
            return this.host.jqxGrid('autoshowfiltericon');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoshowcolumnsmenubutton(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
        }
        else {
            return this.host.jqxGrid('autoshowcolumnsmenubutton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showcolumnlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnlines');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showrowlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowlines', arg);
        }
        else {
            return this.host.jqxGrid('showrowlines');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showcolumnheaderlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnheaderlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnheaderlines');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    adaptive(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptive', arg);
        }
        else {
            return this.host.jqxGrid('adaptive');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    adaptivewidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptivewidth', arg);
        }
        else {
            return this.host.jqxGrid('adaptivewidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    clipboard(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('clipboard', arg);
        }
        else {
            return this.host.jqxGrid('clipboard');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeablegroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('closeablegroups', arg);
        }
        else {
            return this.host.jqxGrid('closeablegroups');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsmenuwidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenuwidth', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenuwidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnmenuopening(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuopening', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuopening');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnmenuclosing(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuclosing', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuclosing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cellhover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cellhover', arg);
        }
        else {
            return this.host.jqxGrid('cellhover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enablekeyboarddelete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablekeyboarddelete', arg);
        }
        else {
            return this.host.jqxGrid('enablekeyboarddelete');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableellipsis(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableellipsis', arg);
        }
        else {
            return this.host.jqxGrid('enableellipsis');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enablemousewheel(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablemousewheel', arg);
        }
        else {
            return this.host.jqxGrid('enablemousewheel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableanimations(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableanimations', arg);
        }
        else {
            return this.host.jqxGrid('enableanimations');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enabletooltips(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enabletooltips', arg);
        }
        else {
            return this.host.jqxGrid('enabletooltips');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enablehover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablehover', arg);
        }
        else {
            return this.host.jqxGrid('enablehover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enablebrowserselection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablebrowserselection', arg);
        }
        else {
            return this.host.jqxGrid('enablebrowserselection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    everpresentrowposition(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowposition', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowposition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    everpresentrowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowheight', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    everpresentrowactions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactions', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactions');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    everpresentrowactionsmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactionsmode', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactionsmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterrowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterrowheight', arg);
        }
        else {
            return this.host.jqxGrid('filterrowheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filtermode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filtermode', arg);
        }
        else {
            return this.host.jqxGrid('filtermode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupsrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupsrenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupcolumnrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupcolumnrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupcolumnrenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupsexpandedbydefault(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsexpandedbydefault', arg);
        }
        else {
            return this.host.jqxGrid('groupsexpandedbydefault');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    handlekeyboardnavigation(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('handlekeyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('handlekeyboardnavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagerrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerrenderer', arg);
        }
        else {
            return this.host.jqxGrid('pagerrenderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rtl', arg);
        }
        else {
            return this.host.jqxGrid('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showdefaultloadelement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showdefaultloadelement', arg);
        }
        else {
            return this.host.jqxGrid('showdefaultloadelement');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showfiltercolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltercolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showfiltercolumnbackground');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showfiltermenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltermenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showfiltermenuitems');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showpinnedcolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showpinnedcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showpinnedcolumnbackground');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showsortcolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showsortcolumnbackground');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showsortmenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showsortmenuitems');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showgroupmenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showgroupmenuitems');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showrowdetailscolumn(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowdetailscolumn', arg);
        }
        else {
            return this.host.jqxGrid('showrowdetailscolumn');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showheader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showheader', arg);
        }
        else {
            return this.host.jqxGrid('showheader');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showgroupsheader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupsheader', arg);
        }
        else {
            return this.host.jqxGrid('showgroupsheader');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showaggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showaggregates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showgroupaggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showgroupaggregates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showeverpresentrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showeverpresentrow', arg);
        }
        else {
            return this.host.jqxGrid('showeverpresentrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showfilterrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfilterrow', arg);
        }
        else {
            return this.host.jqxGrid('showfilterrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showemptyrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showemptyrow', arg);
        }
        else {
            return this.host.jqxGrid('showemptyrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showstatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('showstatusbar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    statusbarheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('statusbarheight', arg);
        }
        else {
            return this.host.jqxGrid('statusbarheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showtoolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showtoolbar', arg);
        }
        else {
            return this.host.jqxGrid('showtoolbar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectionmode', arg);
        }
        else {
            return this.host.jqxGrid('selectionmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    updatefilterconditions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterconditions', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterconditions');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    updatefilterpanel(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterpanel', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterpanel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('theme', arg);
        }
        else {
            return this.host.jqxGrid('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolbarheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('toolbarheight', arg);
        }
        else {
            return this.host.jqxGrid('toolbarheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoheight', arg);
        }
        else {
            return this.host.jqxGrid('autoheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autorowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autorowheight', arg);
        }
        else {
            return this.host.jqxGrid('autorowheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsheight', arg);
        }
        else {
            return this.host.jqxGrid('columnsheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    deferreddatafields(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('deferreddatafields', arg);
        }
        else {
            return this.host.jqxGrid('deferreddatafields');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupsheaderheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsheaderheight', arg);
        }
        else {
            return this.host.jqxGrid('groupsheaderheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupindentwidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupindentwidth', arg);
        }
        else {
            return this.host.jqxGrid('groupindentwidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('height', arg);
        }
        else {
            return this.host.jqxGrid('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagerheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerheight', arg);
        }
        else {
            return this.host.jqxGrid('pagerheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rowsheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowsheight', arg);
        }
        else {
            return this.host.jqxGrid('rowsheight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollbarsize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollbarsize', arg);
        }
        else {
            return this.host.jqxGrid('scrollbarsize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollmode', arg);
        }
        else {
            return this.host.jqxGrid('scrollmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollfeedback(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollfeedback', arg);
        }
        else {
            return this.host.jqxGrid('scrollfeedback');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('width', arg);
        }
        else {
            return this.host.jqxGrid('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autosavestate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autosavestate', arg);
        }
        else {
            return this.host.jqxGrid('autosavestate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoloadstate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoloadstate', arg);
        }
        else {
            return this.host.jqxGrid('autoloadstate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columns', arg);
        }
        else {
            return this.host.jqxGrid('columns');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columngroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columngroups', arg);
        }
        else {
            return this.host.jqxGrid('columngroups');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsmenu(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenu', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenu');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsresize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsresize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsautoresize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsautoresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsautoresize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsreorder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsreorder', arg);
        }
        else {
            return this.host.jqxGrid('columnsreorder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('disabled', arg);
        }
        else {
            return this.host.jqxGrid('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editable', arg);
        }
        else {
            return this.host.jqxGrid('editable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editmode', arg);
        }
        else {
            return this.host.jqxGrid('editmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filter(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filter', arg);
        }
        else {
            return this.host.jqxGrid('filter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterable', arg);
        }
        else {
            return this.host.jqxGrid('filterable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupable', arg);
        }
        else {
            return this.host.jqxGrid('groupable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groups', arg);
        }
        else {
            return this.host.jqxGrid('groups');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    horizontalscrollbarstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarstep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    horizontalscrollbarlargestep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarlargestep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initrowdetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('initrowdetails', arg);
        }
        else {
            return this.host.jqxGrid('initrowdetails');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    keyboardnavigation(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('keyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('keyboardnavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    localization(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('localization', arg);
        }
        else {
            return this.host.jqxGrid('localization');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagesize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesize', arg);
        }
        else {
            return this.host.jqxGrid('pagesize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagesizeoptions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesizeoptions', arg);
        }
        else {
            return this.host.jqxGrid('pagesizeoptions');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagermode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagermode', arg);
        }
        else {
            return this.host.jqxGrid('pagermode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pagerbuttonscount(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerbuttonscount', arg);
        }
        else {
            return this.host.jqxGrid('pagerbuttonscount');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pageable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pageable', arg);
        }
        else {
            return this.host.jqxGrid('pageable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rowdetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetails', arg);
        }
        else {
            return this.host.jqxGrid('rowdetails');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rowdetailstemplate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetailstemplate', arg);
        }
        else {
            return this.host.jqxGrid('rowdetailstemplate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ready(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('ready', arg);
        }
        else {
            return this.host.jqxGrid('ready');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendered', arg);
        }
        else {
            return this.host.jqxGrid('rendered');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderstatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('renderstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('renderstatusbar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendertoolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendertoolbar', arg);
        }
        else {
            return this.host.jqxGrid('rendertoolbar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendergridrows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendergridrows', arg);
        }
        else {
            return this.host.jqxGrid('rendergridrows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sortable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortable', arg);
        }
        else {
            return this.host.jqxGrid('sortable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sortmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortmode', arg);
        }
        else {
            return this.host.jqxGrid('sortmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedrowindex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindex', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectedrowindexes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindexes', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindexes');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('source', arg);
        }
        else {
            return this.host.jqxGrid('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sorttogglestates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sorttogglestates', arg);
        }
        else {
            return this.host.jqxGrid('sorttogglestates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    updatedelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatedelay', arg);
        }
        else {
            return this.host.jqxGrid('updatedelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    virtualmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('virtualmode', arg);
        }
        else {
            return this.host.jqxGrid('virtualmode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    verticalscrollbarstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarstep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    verticalscrollbarlargestep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarlargestep');
        }
    }
    // jqxGridComponent functions
    /**
     * @param {?=} type
     * @return {?}
     */
    autoresizecolumns(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumns', type);
    }
    /**
     * @param {?} dataField
     * @param {?=} type
     * @return {?}
     */
    autoresizecolumn(dataField, type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    }
    /**
     * @return {?}
     */
    beginupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginupdate');
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clear');
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('destroy');
    }
    /**
     * @return {?}
     */
    endupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endupdate');
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    ensurerowvisible(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('focus');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    getcolumnindex(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnindex', dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    getcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumn', dataField);
    }
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    getcolumnproperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    getrowid(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    getrowdata(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    getrowdatabyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdatabyid', rowID);
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    getrowboundindexbyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    }
    /**
     * @param {?} rowDisplayIndex
     * @return {?}
     */
    getrowboundindex(rowDisplayIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    }
    /**
     * @return {?}
     */
    getrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrows');
    }
    /**
     * @return {?}
     */
    getboundrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getboundrows');
    }
    /**
     * @return {?}
     */
    getdisplayrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdisplayrows');
    }
    /**
     * @return {?}
     */
    getdatainformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdatainformation');
    }
    /**
     * @return {?}
     */
    getsortinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortinformation');
    }
    /**
     * @return {?}
     */
    getpaginginformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getpaginginformation');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    hidecolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hidecolumn', dataField);
    }
    /**
     * @return {?}
     */
    hideloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hideloadelement');
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    hiderowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    iscolumnvisible(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnvisible', dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    iscolumnpinned(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnpinned', dataField);
    }
    /**
     * @param {?} localizationobject
     * @return {?}
     */
    localizestrings(localizationobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('localizestrings', localizationobject);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    pincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('pincolumn', dataField);
    }
    /**
     * @return {?}
     */
    refreshdata() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshdata');
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('render');
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    scrolloffset(top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('scrolloffset', top, left);
    }
    /**
     * @return {?}
     */
    scrollposition() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('scrollposition');
    }
    /**
     * @return {?}
     */
    showloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showloadelement');
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    showrowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    }
    /**
     * @param {?} dataField
     * @param {?} index
     * @return {?}
     */
    setcolumnindex(dataField, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnindex', dataField, index);
    }
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    setcolumnproperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    showcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showcolumn', dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    unpincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unpincolumn', dataField);
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    updatebounddata(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updatebounddata', type);
    }
    /**
     * @return {?}
     */
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('updating');
    }
    /**
     * @return {?}
     */
    getsortcolumn() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortcolumn');
    }
    /**
     * @return {?}
     */
    removesort() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removesort');
    }
    /**
     * @param {?} dataField
     * @param {?} sortOrder
     * @return {?}
     */
    sortby(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('sortby', dataField, sortOrder);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    addgroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addgroup', dataField);
    }
    /**
     * @return {?}
     */
    cleargroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('cleargroups');
    }
    /**
     * @param {?} group
     * @return {?}
     */
    collapsegroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapsegroup', group);
    }
    /**
     * @return {?}
     */
    collapseallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapseallgroups');
    }
    /**
     * @return {?}
     */
    expandallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandallgroups');
    }
    /**
     * @param {?} group
     * @return {?}
     */
    expandgroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandgroup', group);
    }
    /**
     * @return {?}
     */
    getrootgroupscount() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrootgroupscount');
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    getgroup(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getgroup', groupIndex);
    }
    /**
     * @param {?} groupIndex
     * @param {?} dataField
     * @return {?}
     */
    insertgroup(groupIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    }
    /**
     * @return {?}
     */
    iscolumngroupable() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumngroupable');
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    removegroupat(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroupat', groupIndex);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    removegroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroup', dataField);
    }
    /**
     * @param {?} dataField
     * @param {?} filterGroup
     * @param {?=} refreshGrid
     * @return {?}
     */
    addfilter(dataField, filterGroup, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    }
    /**
     * @return {?}
     */
    applyfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('applyfilters');
    }
    /**
     * @return {?}
     */
    clearfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearfilters');
    }
    /**
     * @return {?}
     */
    getfilterinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getfilterinformation');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getcolumnat(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnat', index);
    }
    /**
     * @param {?} dataField
     * @param {?} refreshGrid
     * @return {?}
     */
    removefilter(dataField, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    }
    /**
     * @return {?}
     */
    refreshfilterrow() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshfilterrow');
    }
    /**
     * @param {?} pagenumber
     * @return {?}
     */
    gotopage(pagenumber) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotopage', pagenumber);
    }
    /**
     * @return {?}
     */
    gotoprevpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotoprevpage');
    }
    /**
     * @return {?}
     */
    gotonextpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotonextpage');
    }
    /**
     * @param {?} rowIds
     * @param {?} data
     * @param {?=} rowPosition
     * @return {?}
     */
    addrow(rowIds, data, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    begincelledit(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    beginrowedit(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    }
    /**
     * @return {?}
     */
    closemenu() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('closemenu');
    }
    /**
     * @param {?} rowIds
     * @return {?}
     */
    deleterow(rowIds) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('deleterow', rowIds);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} confirmChanges
     * @return {?}
     */
    endcelledit(rowBoundIndex, dataField, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} confirmChanges
     * @return {?}
     */
    endrowedit(rowBoundIndex, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} datafield
     * @return {?}
     */
    getcell(rowBoundIndex, datafield) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    getcellatposition(left, top) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellatposition', left, top);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    getcelltext(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    }
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    getcelltextbyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    }
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @return {?}
     */
    getcellvaluebyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    getcellvalue(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    }
    /**
     * @return {?}
     */
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('isBindingCompleted');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    openmenu(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openmenu', dataField);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    setcellvalue(rowBoundIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    }
    /**
     * @param {?} rowID
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    setcellvaluebyid(rowID, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @param {?} validationMessage
     * @return {?}
     */
    showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    }
    /**
     * @param {?} rowIds
     * @param {?} data
     * @return {?}
     */
    updaterow(rowIds, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updaterow', rowIds, data);
    }
    /**
     * @return {?}
     */
    clearselection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearselection');
    }
    /**
     * @return {?}
     */
    getselectedrowindex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindex');
    }
    /**
     * @return {?}
     */
    getselectedrowindexes() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindexes');
    }
    /**
     * @return {?}
     */
    getselectedcell() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcell');
    }
    /**
     * @return {?}
     */
    getselectedcells() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcells');
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    selectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    }
    /**
     * @return {?}
     */
    selectallrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectallrows');
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    selectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectrow', rowBoundIndex);
    }
    /**
     * @param {?} rowBoundIndex
     * @return {?}
     */
    unselectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    }
    /**
     * @param {?} rowBoundIndex
     * @param {?} dataField
     * @return {?}
     */
    unselectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    }
    /**
     * @param {?} dataField
     * @param {?} aggregates
     * @return {?}
     */
    getcolumnaggregateddata(dataField, aggregates) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    }
    /**
     * @return {?}
     */
    refreshaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshaggregates');
    }
    /**
     * @return {?}
     */
    renderaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('renderaggregates');
    }
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
    exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    }
    /**
     * @return {?}
     */
    getstate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getstate');
    }
    /**
     * @param {?} stateobject
     * @return {?}
     */
    loadstate(stateobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('loadstate', stateobject);
    }
    /**
     * @return {?}
     */
    savestate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('savestate');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('bindingcomplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingcomplete.emit(eventData); }));
        this.host.on('columnresized', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onColumnresized.emit(eventData); }));
        this.host.on('columnreordered', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onColumnreordered.emit(eventData); }));
        this.host.on('columnclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onColumnclick.emit(eventData); }));
        this.host.on('cellclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellclick.emit(eventData); }));
        this.host.on('celldoubleclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCelldoubleclick.emit(eventData); }));
        this.host.on('cellselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellselect.emit(eventData); }));
        this.host.on('cellunselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellunselect.emit(eventData); }));
        this.host.on('cellvaluechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellvaluechanged.emit(eventData); }));
        this.host.on('cellbeginedit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellbeginedit.emit(eventData); }));
        this.host.on('cellendedit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellendedit.emit(eventData); }));
        this.host.on('filter', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onFilter.emit(eventData); }));
        this.host.on('groupschanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onGroupschanged.emit(eventData); }));
        this.host.on('groupexpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onGroupexpand.emit(eventData); }));
        this.host.on('groupcollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onGroupcollapse.emit(eventData); }));
        this.host.on('pagechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPagechanged.emit(eventData); }));
        this.host.on('pagesizechanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPagesizechanged.emit(eventData); }));
        this.host.on('rowclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowclick.emit(eventData); }));
        this.host.on('rowdoubleclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowdoubleclick.emit(eventData); }));
        this.host.on('rowselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowselect.emit(eventData); }));
        this.host.on('rowunselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowunselect.emit(eventData); }));
        this.host.on('rowexpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowexpand.emit(eventData); }));
        this.host.on('rowcollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowcollapse.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSort.emit(eventData); }));
    }
} //jqxGridComponent
jqxGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxGrid',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxGridComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhncmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGdyaWQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFtQyxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVE5SSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBOEgxQixZQUFZLGdCQUE0QjtRQVRsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLHFCQUFxQixFQUFDLG9CQUFvQixFQUFDLDJCQUEyQixFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyx1QkFBdUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHNCQUFzQixFQUFDLHVCQUF1QixFQUFDLDJCQUEyQixFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxxQkFBcUIsRUFBQyx5QkFBeUIsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLHdCQUF3QixFQUFDLDRCQUE0QixFQUFDLHFCQUFxQixFQUFDLDRCQUE0QixFQUFDLDBCQUEwQixFQUFDLG1CQUFtQixFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxxQkFBcUIsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVB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Z0NBQVU7O0lBQ1Ysc0NBQXVCOztJQUN2Qix3Q0FBaUM7O0lBRWpDLG1DQUFnQjs7SUFDaEIscUNBQTBCOztJQXNnRjFCLDZDQUFpRDs7SUFDakQsMkNBQStDOztJQUMvQyw2Q0FBaUQ7O0lBQ2pELHlDQUE2Qzs7SUFDN0MsdUNBQTJDOztJQUMzQyw2Q0FBaUQ7O0lBQ2pELHdDQUE0Qzs7SUFDNUMsMENBQThDOztJQUM5Qyw4Q0FBa0Q7O0lBQ2xELDJDQUErQzs7SUFDL0MseUNBQTZDOztJQUM3QyxvQ0FBd0M7O0lBQ3hDLDJDQUErQzs7SUFDL0MseUNBQTZDOztJQUM3QywyQ0FBK0M7O0lBQy9DLHlDQUE2Qzs7SUFDN0MsNkNBQWlEOztJQUNqRCxzQ0FBMEM7O0lBQzFDLDRDQUFnRDs7SUFDaEQsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLHVDQUEyQzs7SUFDM0MseUNBQTZDOztJQUM3QyxrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEdyaWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWRcbntcbiAgIEBJbnB1dCgnYWx0cm93cycpIGF0dHJBbHRyb3dzOiBib29sZWFuO1xuICAgQElucHV0KCdhbHRzdGFydCcpIGF0dHJBbHRzdGFydDogbnVtYmVyO1xuICAgQElucHV0KCdhbHRzdGVwJykgYXR0ckFsdHN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXV0b3Nob3dsb2FkZWxlbWVudCcpIGF0dHJBdXRvc2hvd2xvYWRlbGVtZW50OiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvc2hvd2ZpbHRlcmljb24nKSBhdHRyQXV0b3Nob3dmaWx0ZXJpY29uOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uJykgYXR0ckF1dG9zaG93Y29sdW1uc21lbnVidXR0b246IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3djb2x1bW5saW5lcycpIGF0dHJTaG93Y29sdW1ubGluZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dyb3dsaW5lcycpIGF0dHJTaG93cm93bGluZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3djb2x1bW5oZWFkZXJsaW5lcycpIGF0dHJTaG93Y29sdW1uaGVhZGVybGluZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FkYXB0aXZlJykgYXR0ckFkYXB0aXZlOiBib29sZWFuO1xuICAgQElucHV0KCdhZGFwdGl2ZXdpZHRoJykgYXR0ckFkYXB0aXZld2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgnY2xpcGJvYXJkJykgYXR0ckNsaXBib2FyZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2xvc2VhYmxlZ3JvdXBzJykgYXR0ckNsb3NlYWJsZWdyb3VwczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc21lbnV3aWR0aCcpIGF0dHJDb2x1bW5zbWVudXdpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbHVtbm1lbnVvcGVuaW5nJykgYXR0ckNvbHVtbm1lbnVvcGVuaW5nOiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2hlaWdodCddKSA9PiBib29sZWFuIHwgdm9pZDtcbiAgIEBJbnB1dCgnY29sdW1ubWVudWNsb3NpbmcnKSBhdHRyQ29sdW1ubWVudWNsb3Npbmc6IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snaGVpZ2h0J10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2NlbGxob3ZlcicpIGF0dHJDZWxsaG92ZXI6IChjZWxsaHRtbEVsZW1lbnQ/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsnY2VsbGh0bWxFbGVtZW50J10sIHg/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneCddLCB5PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3knXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZW5hYmxla2V5Ym9hcmRkZWxldGUnKSBhdHRyRW5hYmxla2V5Ym9hcmRkZWxldGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWVsbGlwc2lzJykgYXR0ckVuYWJsZWVsbGlwc2lzOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVtb3VzZXdoZWVsJykgYXR0ckVuYWJsZW1vdXNld2hlZWw6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWFuaW1hdGlvbnMnKSBhdHRyRW5hYmxlYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxldG9vbHRpcHMnKSBhdHRyRW5hYmxldG9vbHRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWhvdmVyJykgYXR0ckVuYWJsZWhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVicm93c2Vyc2VsZWN0aW9uJykgYXR0ckVuYWJsZWJyb3dzZXJzZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2V2ZXJwcmVzZW50cm93cG9zaXRpb24nKSBhdHRyRXZlcnByZXNlbnRyb3dwb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdldmVycHJlc2VudHJvd2hlaWdodCcpIGF0dHJFdmVycHJlc2VudHJvd2hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdldmVycHJlc2VudHJvd2FjdGlvbnMnKSBhdHRyRXZlcnByZXNlbnRyb3dhY3Rpb25zOiBzdHJpbmc7XG4gICBASW5wdXQoJ2V2ZXJwcmVzZW50cm93YWN0aW9uc21vZGUnKSBhdHRyRXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdmaWx0ZXJyb3doZWlnaHQnKSBhdHRyRmlsdGVycm93aGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2ZpbHRlcm1vZGUnKSBhdHRyRmlsdGVybW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdncm91cHNyZW5kZXJlcicpIGF0dHJHcm91cHNyZW5kZXJlcjogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWyd0ZXh0J10sIGdyb3VwPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZ3JvdXAnXSwgZXhwYW5kZWQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydleHBhbmRlZCddLCBkYXRhPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZGF0YSddKSA9PiBzdHJpbmc7XG4gICBASW5wdXQoJ2dyb3VwY29sdW1ucmVuZGVyZXInKSBhdHRyR3JvdXBjb2x1bW5yZW5kZXJlcjogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3VwY29sdW1ucmVuZGVyZXJbJ3RleHQnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdncm91cHNleHBhbmRlZGJ5ZGVmYXVsdCcpIGF0dHJHcm91cHNleHBhbmRlZGJ5ZGVmYXVsdDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uJykgYXR0ckhhbmRsZWtleWJvYXJkbmF2aWdhdGlvbjogKGV2ZW50OiBqcXdpZGdldHMuR3JpZEhhbmRsZWtleWJvYXJkbmF2aWdhdGlvblsnZXZlbnQnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgncGFnZXJyZW5kZXJlcicpIGF0dHJQYWdlcnJlbmRlcmVyOiAoKSA9PiBhbnlbXTtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2RlZmF1bHRsb2FkZWxlbWVudCcpIGF0dHJTaG93ZGVmYXVsdGxvYWRlbGVtZW50OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZCcpIGF0dHJTaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2ZpbHRlcm1lbnVpdGVtcycpIGF0dHJTaG93ZmlsdGVybWVudWl0ZW1zOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93cGlubmVkY29sdW1uYmFja2dyb3VuZCcpIGF0dHJTaG93cGlubmVkY29sdW1uYmFja2dyb3VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kJykgYXR0clNob3dzb3J0Y29sdW1uYmFja2dyb3VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3NvcnRtZW51aXRlbXMnKSBhdHRyU2hvd3NvcnRtZW51aXRlbXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dncm91cG1lbnVpdGVtcycpIGF0dHJTaG93Z3JvdXBtZW51aXRlbXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dyb3dkZXRhaWxzY29sdW1uJykgYXR0clNob3dyb3dkZXRhaWxzY29sdW1uOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93aGVhZGVyJykgYXR0clNob3doZWFkZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dncm91cHNoZWFkZXInKSBhdHRyU2hvd2dyb3Vwc2hlYWRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2FnZ3JlZ2F0ZXMnKSBhdHRyU2hvd2FnZ3JlZ2F0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dncm91cGFnZ3JlZ2F0ZXMnKSBhdHRyU2hvd2dyb3VwYWdncmVnYXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2V2ZXJwcmVzZW50cm93JykgYXR0clNob3dldmVycHJlc2VudHJvdzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2ZpbHRlcnJvdycpIGF0dHJTaG93ZmlsdGVycm93OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93ZW1wdHlyb3cnKSBhdHRyU2hvd2VtcHR5cm93OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93c3RhdHVzYmFyJykgYXR0clNob3dzdGF0dXNiYXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3N0YXR1c2JhcmhlaWdodCcpIGF0dHJTdGF0dXNiYXJoZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2hvd3Rvb2xiYXInKSBhdHRyU2hvd3Rvb2xiYXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGlvbm1vZGUnKSBhdHRyU2VsZWN0aW9ubW9kZTogc3RyaW5nO1xuICAgQElucHV0KCd1cGRhdGVmaWx0ZXJjb25kaXRpb25zJykgYXR0clVwZGF0ZWZpbHRlcmNvbmRpdGlvbnM6ICh0eXBlPzogc3RyaW5nLCBkZWZhdWx0Y29uZGl0aW9ucz86IGFueSkgPT4gYW55O1xuICAgQElucHV0KCd1cGRhdGVmaWx0ZXJwYW5lbCcpIGF0dHJVcGRhdGVmaWx0ZXJwYW5lbDogKGZpbHRlcnR5cGVkcm9wZG93bjE/OiBhbnksIGZpbHRlcnR5cGVkcm9wZG93bjI/OiBhbnksIGZpbHRlcm9wZXJhdG9yZHJvcGRvd24/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQxPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMj86IGFueSwgZmlsdGVyYnV0dG9uPzogYW55LCBjbGVhcmJ1dHRvbj86IGFueSwgY29sdW1uZmlsdGVyPzogYW55LCBmaWx0ZXJ0eXBlPzogYW55LCBmaWx0ZXJjb25kaXRpb25zPzogYW55KSA9PiBhbnk7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xiYXJoZWlnaHQnKSBhdHRyVG9vbGJhcmhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdhdXRvaGVpZ2h0JykgYXR0ckF1dG9oZWlnaHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9yb3doZWlnaHQnKSBhdHRyQXV0b3Jvd2hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc2hlaWdodCcpIGF0dHJDb2x1bW5zaGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2RlZmVycmVkZGF0YWZpZWxkcycpIGF0dHJEZWZlcnJlZGRhdGFmaWVsZHM6IEFycmF5PHN0cmluZz47XG4gICBASW5wdXQoJ2dyb3Vwc2hlYWRlcmhlaWdodCcpIGF0dHJHcm91cHNoZWFkZXJoZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZ3JvdXBpbmRlbnR3aWR0aCcpIGF0dHJHcm91cGluZGVudHdpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoJ3BhZ2VyaGVpZ2h0JykgYXR0clBhZ2VyaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3Jvd3NoZWlnaHQnKSBhdHRyUm93c2hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdzY3JvbGxiYXJzaXplJykgYXR0clNjcm9sbGJhcnNpemU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnc2Nyb2xsbW9kZScpIGF0dHJTY3JvbGxtb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Njcm9sbGZlZWRiYWNrJykgYXR0clNjcm9sbGZlZWRiYWNrOiAocm93OiBqcXdpZGdldHMuR3JpZFNjcm9sbGZlZWRiYWNrWydyb3cnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdhdXRvc2F2ZXN0YXRlJykgYXR0ckF1dG9zYXZlc3RhdGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9sb2Fkc3RhdGUnKSBhdHRyQXV0b2xvYWRzdGF0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1ucycpIGF0dHJDb2x1bW5zOiBqcXdpZGdldHMuR3JpZENvbHVtbltdO1xuICAgQElucHV0KCdjb2x1bW5ncm91cHMnKSBhdHRyQ29sdW1uZ3JvdXBzOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdjb2x1bW5zbWVudScpIGF0dHJDb2x1bW5zbWVudTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc3Jlc2l6ZScpIGF0dHJDb2x1bW5zcmVzaXplOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zYXV0b3Jlc2l6ZScpIGF0dHJDb2x1bW5zYXV0b3Jlc2l6ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc3Jlb3JkZXInKSBhdHRyQ29sdW1uc3Jlb3JkZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0YWJsZScpIGF0dHJFZGl0YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdG1vZGUnKSBhdHRyRWRpdG1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnZmlsdGVyJykgYXR0ckZpbHRlcjogKGNlbGxWYWx1ZT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydjZWxsVmFsdWUnXSwgcm93RGF0YT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydyb3dEYXRhJ10sIGRhdGFGaWVsZD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkYXRhRmllbGQnXSwgZmlsdGVyR3JvdXA/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZmlsdGVyR3JvdXAnXSwgZGVmYXVsdEZpbHRlclJlc3VsdD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkZWZhdWx0RmlsdGVyUmVzdWx0J10pID0+IGFueTtcbiAgIEBJbnB1dCgnZmlsdGVyYWJsZScpIGF0dHJGaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdncm91cGFibGUnKSBhdHRyR3JvdXBhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdncm91cHMnKSBhdHRyR3JvdXBzOiBBcnJheTxzdHJpbmc+O1xuICAgQElucHV0KCdob3Jpem9udGFsc2Nyb2xsYmFyc3RlcCcpIGF0dHJIb3Jpem9udGFsc2Nyb2xsYmFyc3RlcDogbnVtYmVyO1xuICAgQElucHV0KCdob3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwJykgYXR0ckhvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnaW5pdHJvd2RldGFpbHMnKSBhdHRySW5pdHJvd2RldGFpbHM6IChpbmRleD86IG51bWJlciwgcGFyZW50RWxlbWVudD86IGFueSwgZ3JpZEVsZW1lbnQ/OiBhbnksIGRhdGFyZWNvcmQ/OiBhbnkpID0+IHZvaWQ7XG4gICBASW5wdXQoJ2tleWJvYXJkbmF2aWdhdGlvbicpIGF0dHJLZXlib2FyZG5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGpxd2lkZ2V0cy5HcmlkTG9jYWxpemF0aW9ub2JqZWN0O1xuICAgQElucHV0KCdwYWdlc2l6ZScpIGF0dHJQYWdlc2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlc2l6ZW9wdGlvbnMnKSBhdHRyUGFnZXNpemVvcHRpb25zOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+O1xuICAgQElucHV0KCdwYWdlcm1vZGUnKSBhdHRyUGFnZXJtb2RlOiAnc2ltcGxlJyB8ICdkZWZhdWx0JztcbiAgIEBJbnB1dCgncGFnZXJidXR0b25zY291bnQnKSBhdHRyUGFnZXJidXR0b25zY291bnQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZWFibGUnKSBhdHRyUGFnZWFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jvd2RldGFpbHMnKSBhdHRyUm93ZGV0YWlsczogYm9vbGVhbjtcbiAgIEBJbnB1dCgncm93ZGV0YWlsc3RlbXBsYXRlJykgYXR0clJvd2RldGFpbHN0ZW1wbGF0ZTogYW55O1xuICAgQElucHV0KCdyZWFkeScpIGF0dHJSZWFkeTogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyZWQnKSBhdHRyUmVuZGVyZWQ6ICh0eXBlOiBhbnkpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcnN0YXR1c2JhcicpIGF0dHJSZW5kZXJzdGF0dXNiYXI6IChzdGF0dXNiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnN0YXR1c2Jhclsnc3RhdHVzYmFyJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcnRvb2xiYXInKSBhdHRyUmVuZGVydG9vbGJhcjogKHRvb2xiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnRvb2xiYXJbJ3Rvb2xiYXInXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyZ3JpZHJvd3MnKSBhdHRyUmVuZGVyZ3JpZHJvd3M6IChwYXJhbXM/OiBhbnkpID0+IGFueTtcbiAgIEBJbnB1dCgnc29ydGFibGUnKSBhdHRyU29ydGFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NvcnRtb2RlJykgYXR0clNvcnRtb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3NlbGVjdGVkcm93aW5kZXgnKSBhdHRyU2VsZWN0ZWRyb3dpbmRleDogbnVtYmVyO1xuICAgQElucHV0KCdzZWxlY3RlZHJvd2luZGV4ZXMnKSBhdHRyU2VsZWN0ZWRyb3dpbmRleGVzOiBBcnJheTxudW1iZXI+O1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBqcXdpZGdldHMuR3JpZFNvdXJjZTtcbiAgIEBJbnB1dCgnc29ydHRvZ2dsZXN0YXRlcycpIGF0dHJTb3J0dG9nZ2xlc3RhdGVzOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VwZGF0ZWRlbGF5JykgYXR0clVwZGF0ZWRlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ3ZpcnR1YWxtb2RlJykgYXR0clZpcnR1YWxtb2RlOiBib29sZWFuO1xuICAgQElucHV0KCd2ZXJ0aWNhbHNjcm9sbGJhcnN0ZXAnKSBhdHRyVmVydGljYWxzY3JvbGxiYXJzdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ3ZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwJykgYXR0clZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYWx0cm93cycsJ2FsdHN0YXJ0JywnYWx0c3RlcCcsJ2F1dG9zaG93bG9hZGVsZW1lbnQnLCdhdXRvc2hvd2ZpbHRlcmljb24nLCdhdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uJywnc2hvd2NvbHVtbmxpbmVzJywnc2hvd3Jvd2xpbmVzJywnc2hvd2NvbHVtbmhlYWRlcmxpbmVzJywnYWRhcHRpdmUnLCdhZGFwdGl2ZXdpZHRoJywnY2xpcGJvYXJkJywnY2xvc2VhYmxlZ3JvdXBzJywnY29sdW1uc21lbnV3aWR0aCcsJ2NvbHVtbm1lbnVvcGVuaW5nJywnY29sdW1ubWVudWNsb3NpbmcnLCdjZWxsaG92ZXInLCdlbmFibGVrZXlib2FyZGRlbGV0ZScsJ2VuYWJsZWVsbGlwc2lzJywnZW5hYmxlbW91c2V3aGVlbCcsJ2VuYWJsZWFuaW1hdGlvbnMnLCdlbmFibGV0b29sdGlwcycsJ2VuYWJsZWhvdmVyJywnZW5hYmxlYnJvd3NlcnNlbGVjdGlvbicsJ2V2ZXJwcmVzZW50cm93cG9zaXRpb24nLCdldmVycHJlc2VudHJvd2hlaWdodCcsJ2V2ZXJwcmVzZW50cm93YWN0aW9ucycsJ2V2ZXJwcmVzZW50cm93YWN0aW9uc21vZGUnLCdmaWx0ZXJyb3doZWlnaHQnLCdmaWx0ZXJtb2RlJywnZ3JvdXBzcmVuZGVyZXInLCdncm91cGNvbHVtbnJlbmRlcmVyJywnZ3JvdXBzZXhwYW5kZWRieWRlZmF1bHQnLCdoYW5kbGVrZXlib2FyZG5hdmlnYXRpb24nLCdwYWdlcnJlbmRlcmVyJywncnRsJywnc2hvd2RlZmF1bHRsb2FkZWxlbWVudCcsJ3Nob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kJywnc2hvd2ZpbHRlcm1lbnVpdGVtcycsJ3Nob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kJywnc2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kJywnc2hvd3NvcnRtZW51aXRlbXMnLCdzaG93Z3JvdXBtZW51aXRlbXMnLCdzaG93cm93ZGV0YWlsc2NvbHVtbicsJ3Nob3doZWFkZXInLCdzaG93Z3JvdXBzaGVhZGVyJywnc2hvd2FnZ3JlZ2F0ZXMnLCdzaG93Z3JvdXBhZ2dyZWdhdGVzJywnc2hvd2V2ZXJwcmVzZW50cm93Jywnc2hvd2ZpbHRlcnJvdycsJ3Nob3dlbXB0eXJvdycsJ3Nob3dzdGF0dXNiYXInLCdzdGF0dXNiYXJoZWlnaHQnLCdzaG93dG9vbGJhcicsJ3NlbGVjdGlvbm1vZGUnLCd1cGRhdGVmaWx0ZXJjb25kaXRpb25zJywndXBkYXRlZmlsdGVycGFuZWwnLCd0aGVtZScsJ3Rvb2xiYXJoZWlnaHQnLCdhdXRvaGVpZ2h0JywnYXV0b3Jvd2hlaWdodCcsJ2NvbHVtbnNoZWlnaHQnLCdkZWZlcnJlZGRhdGFmaWVsZHMnLCdncm91cHNoZWFkZXJoZWlnaHQnLCdncm91cGluZGVudHdpZHRoJywnaGVpZ2h0JywncGFnZXJoZWlnaHQnLCdyb3dzaGVpZ2h0Jywnc2Nyb2xsYmFyc2l6ZScsJ3Njcm9sbG1vZGUnLCdzY3JvbGxmZWVkYmFjaycsJ3dpZHRoJywnYXV0b3NhdmVzdGF0ZScsJ2F1dG9sb2Fkc3RhdGUnLCdjb2x1bW5zJywnY29sdW1uZ3JvdXBzJywnY29sdW1uc21lbnUnLCdjb2x1bW5zcmVzaXplJywnY29sdW1uc2F1dG9yZXNpemUnLCdjb2x1bW5zcmVvcmRlcicsJ2Rpc2FibGVkJywnZWRpdGFibGUnLCdlZGl0bW9kZScsJ2ZpbHRlcicsJ2ZpbHRlcmFibGUnLCdncm91cGFibGUnLCdncm91cHMnLCdob3Jpem9udGFsc2Nyb2xsYmFyc3RlcCcsJ2hvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXAnLCdpbml0cm93ZGV0YWlscycsJ2tleWJvYXJkbmF2aWdhdGlvbicsJ2xvY2FsaXphdGlvbicsJ3BhZ2VzaXplJywncGFnZXNpemVvcHRpb25zJywncGFnZXJtb2RlJywncGFnZXJidXR0b25zY291bnQnLCdwYWdlYWJsZScsJ3Jvd2RldGFpbHMnLCdyb3dkZXRhaWxzdGVtcGxhdGUnLCdyZWFkeScsJ3JlbmRlcmVkJywncmVuZGVyc3RhdHVzYmFyJywncmVuZGVydG9vbGJhcicsJ3JlbmRlcmdyaWRyb3dzJywnc29ydGFibGUnLCdzb3J0bW9kZScsJ3NlbGVjdGVkcm93aW5kZXgnLCdzZWxlY3RlZHJvd2luZGV4ZXMnLCdzb3VyY2UnLCdzb3J0dG9nZ2xlc3RhdGVzJywndXBkYXRlZGVsYXknLCd2aXJ0dWFsbW9kZScsJ3ZlcnRpY2Fsc2Nyb2xsYmFyc3RlcCcsJ3ZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEdyaWQ7XG5cbiAgIGNvbnRlbnQ6IFN0cmluZztcbiAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgIH07IFxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgIGxldCBjaGlsZHJlbiA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pLmZpbmQoJ3RyJyk7IFxuICAgICAgIGxldCBodG1sID0gJyc7IFxuICAgICAgIGxldCBvcHRpb25zID0ge307IFxuXG4gICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgIHRoaXMuY29udGVudCA9IGh0bWw7XG5cbiAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgaWYgKHRoaXNbJ2F0dHJDb2x1bW5zJ10gIT09IHVuZGVmaW5lZCkgeyAgXG47ICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3NvdXJjZSddID0gcmVzdWx0LnNvdXJjZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuc291cmNlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ2NvbHVtbnMnXSA9IHJlc3VsdC5jb2x1bW5zO1xuICAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnMnKTtcblxuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UsIGNvbHVtbnM6IHJlc3VsdC5jb2x1bW5zIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhHcmlkKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhHcmlkJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4R3JpZENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbHRyb3dzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHJvd3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHJvd3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWx0c3RhcnQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FsdHN0YXJ0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRzdGFydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbHRzdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9zaG93bG9hZGVsZW1lbnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3dsb2FkZWxlbWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3dsb2FkZWxlbWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvc2hvd2ZpbHRlcmljb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3dmaWx0ZXJpY29uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2ZpbHRlcmljb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3djb2x1bW5saW5lcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Y29sdW1ubGluZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3djb2x1bW5saW5lcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93cm93bGluZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Jvd2xpbmVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cm93bGluZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2NvbHVtbmhlYWRlcmxpbmVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3djb2x1bW5oZWFkZXJsaW5lcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2NvbHVtbmhlYWRlcmxpbmVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFkYXB0aXZlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FkYXB0aXZlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGFwdGl2ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhZGFwdGl2ZXdpZHRoKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGFwdGl2ZXdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGFwdGl2ZXdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsaXBib2FyZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGlwYm9hcmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NsaXBib2FyZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZWFibGVncm91cHMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xvc2VhYmxlZ3JvdXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjbG9zZWFibGVncm91cHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc21lbnV3aWR0aChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc21lbnV3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc21lbnV3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5tZW51b3BlbmluZyhhcmc/OiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2hlaWdodCddKSA9PiBib29sZWFuIHwgdm9pZCk6IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snaGVpZ2h0J10pID0+IGJvb2xlYW4gfCB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbm1lbnVvcGVuaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5tZW51b3BlbmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5tZW51Y2xvc2luZyhhcmc/OiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2hlaWdodCddKSA9PiBib29sZWFuKTogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5tZW51Y2xvc2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ubWVudWNsb3NpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2VsbGhvdmVyKGFyZz86IChjZWxsaHRtbEVsZW1lbnQ/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsnY2VsbGh0bWxFbGVtZW50J10sIHg/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneCddLCB5PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3knXSkgPT4gdm9pZCk6IChjZWxsaHRtbEVsZW1lbnQ/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsnY2VsbGh0bWxFbGVtZW50J10sIHg/OiBqcXdpZGdldHMuR3JpZENlbGxob3ZlclsneCddLCB5PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3knXSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjZWxsaG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NlbGxob3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVrZXlib2FyZGRlbGV0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVrZXlib2FyZGRlbGV0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxla2V5Ym9hcmRkZWxldGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlZWxsaXBzaXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlZWxsaXBzaXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWVsbGlwc2lzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZW1vdXNld2hlZWwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlbW91c2V3aGVlbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlbW91c2V3aGVlbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVhbmltYXRpb25zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWFuaW1hdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWFuaW1hdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxldG9vbHRpcHMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxldG9vbHRpcHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZXRvb2x0aXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVob3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVicm93c2Vyc2VsZWN0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWJyb3dzZXJzZWxlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWJyb3dzZXJzZWxlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXZlcnByZXNlbnRyb3dwb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dwb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dwb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBldmVycHJlc2VudHJvd2hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3doZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93aGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV2ZXJwcmVzZW50cm93YWN0aW9ucyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2FjdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zbW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJyb3doZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcnJvd2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVycm93aGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcm1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcm1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcm1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBzcmVuZGVyZXIoYXJnPzogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWyd0ZXh0J10sIGdyb3VwPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZ3JvdXAnXSwgZXhwYW5kZWQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydleHBhbmRlZCddLCBkYXRhPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZGF0YSddKSA9PiBzdHJpbmcpOiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ3RleHQnXSwgZ3JvdXA/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydncm91cCddLCBleHBhbmRlZD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2V4cGFuZGVkJ10sIGRhdGE/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydkYXRhJ10pID0+IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNyZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzcmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBjb2x1bW5yZW5kZXJlcihhcmc/OiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBjb2x1bW5yZW5kZXJlclsndGV4dCddKSA9PiBzdHJpbmcpOiAodGV4dD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBjb2x1bW5yZW5kZXJlclsndGV4dCddKSA9PiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBjb2x1bW5yZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBjb2x1bW5yZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cHNleHBhbmRlZGJ5ZGVmYXVsdChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNleHBhbmRlZGJ5ZGVmYXVsdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzZXhwYW5kZWRieWRlZmF1bHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uKGFyZz86IChldmVudDoganF3aWRnZXRzLkdyaWRIYW5kbGVrZXlib2FyZG5hdmlnYXRpb25bJ2V2ZW50J10pID0+IGJvb2xlYW4pOiAoZXZlbnQ6IGpxd2lkZ2V0cy5HcmlkSGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uWydldmVudCddKSA9PiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hhbmRsZWtleWJvYXJkbmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VycmVuZGVyZXIoYXJnPzogKCkgPT4gYW55W10pOiAoKSA9PiBhbnlbXSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcnJlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcnJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZGVmYXVsdGxvYWRlbGVtZW50KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dkZWZhdWx0bG9hZGVsZW1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dkZWZhdWx0bG9hZGVsZW1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dmaWx0ZXJtZW51aXRlbXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcm1lbnVpdGVtcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcm1lbnVpdGVtcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93cGlubmVkY29sdW1uYmFja2dyb3VuZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cGlubmVkY29sdW1uYmFja2dyb3VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzb3J0Y29sdW1uYmFja2dyb3VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3NvcnRjb2x1bW5iYWNrZ3JvdW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dzb3J0bWVudWl0ZW1zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzb3J0bWVudWl0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c29ydG1lbnVpdGVtcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Z3JvdXBtZW51aXRlbXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3VwbWVudWl0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBtZW51aXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3Jvd2RldGFpbHNjb2x1bW4oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Jvd2RldGFpbHNjb2x1bW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dyb3dkZXRhaWxzY29sdW1uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3doZWFkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2hlYWRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2hlYWRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Z3JvdXBzaGVhZGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cHNoZWFkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cHNoZWFkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2FnZ3JlZ2F0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2FnZ3JlZ2F0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dhZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dncm91cGFnZ3JlZ2F0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3VwYWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3VwYWdncmVnYXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZXZlcnByZXNlbnRyb3coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2V2ZXJwcmVzZW50cm93JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZXZlcnByZXNlbnRyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2ZpbHRlcnJvdyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVycm93JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVycm93Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dlbXB0eXJvdyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZW1wdHlyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dlbXB0eXJvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93c3RhdHVzYmFyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzdGF0dXNiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzdGF0dXNiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdHVzYmFyaGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzdGF0dXNiYXJoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3N0YXR1c2JhcmhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93dG9vbGJhcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93dG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Rvb2xiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9ubW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0aW9ubW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0aW9ubW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cGRhdGVmaWx0ZXJjb25kaXRpb25zKGFyZz86ICh0eXBlPzogc3RyaW5nLCBkZWZhdWx0Y29uZGl0aW9ucz86IGFueSkgPT4gYW55KTogKHR5cGU/OiBzdHJpbmcsIGRlZmF1bHRjb25kaXRpb25zPzogYW55KSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZmlsdGVyY29uZGl0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZmlsdGVyY29uZGl0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cGRhdGVmaWx0ZXJwYW5lbChhcmc/OiAoZmlsdGVydHlwZWRyb3Bkb3duMT86IGFueSwgZmlsdGVydHlwZWRyb3Bkb3duMj86IGFueSwgZmlsdGVyb3BlcmF0b3Jkcm9wZG93bj86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDE/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQyPzogYW55LCBmaWx0ZXJidXR0b24/OiBhbnksIGNsZWFyYnV0dG9uPzogYW55LCBjb2x1bW5maWx0ZXI/OiBhbnksIGZpbHRlcnR5cGU/OiBhbnksIGZpbHRlcmNvbmRpdGlvbnM/OiBhbnkpID0+IGFueSk6IChmaWx0ZXJ0eXBlZHJvcGRvd24xPzogYW55LCBmaWx0ZXJ0eXBlZHJvcGRvd24yPzogYW55LCBmaWx0ZXJvcGVyYXRvcmRyb3Bkb3duPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMT86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDI/OiBhbnksIGZpbHRlcmJ1dHRvbj86IGFueSwgY2xlYXJidXR0b24/OiBhbnksIGNvbHVtbmZpbHRlcj86IGFueSwgZmlsdGVydHlwZT86IGFueSwgZmlsdGVyY29uZGl0aW9ucz86IGFueSkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWZpbHRlcnBhbmVsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVmaWx0ZXJwYW5lbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xiYXJoZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Rvb2xiYXJoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Rvb2xiYXJoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b2hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9yb3doZWlnaHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Jvd2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Jvd2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zaGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlZmVycmVkZGF0YWZpZWxkcyhhcmc/OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdkZWZlcnJlZGRhdGFmaWVsZHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2RlZmVycmVkZGF0YWZpZWxkcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cHNoZWFkZXJoZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc2hlYWRlcmhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzaGVhZGVyaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3VwaW5kZW50d2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwaW5kZW50d2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwaW5kZW50d2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlcmhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VyaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd3NoZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd3NoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd3NoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsYmFyc2l6ZShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsYmFyc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsYmFyc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbGZlZWRiYWNrKGFyZz86IChyb3c6IGpxd2lkZ2V0cy5HcmlkU2Nyb2xsZmVlZGJhY2tbJ3JvdyddKSA9PiBzdHJpbmcpOiAocm93OiBqcXdpZGdldHMuR3JpZFNjcm9sbGZlZWRiYWNrWydyb3cnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbGZlZWRiYWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxmZWVkYmFjaycpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9zYXZlc3RhdGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3NhdmVzdGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3NhdmVzdGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvbG9hZHN0YXRlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9sb2Fkc3RhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9sb2Fkc3RhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1ucyhhcmc/OiBqcXdpZGdldHMuR3JpZENvbHVtbltdKToganF3aWRnZXRzLkdyaWRDb2x1bW5bXSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbmdyb3Vwcyhhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5ncm91cHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbmdyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zbWVudShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zbWVudScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc21lbnUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc3Jlc2l6ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zcmVzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zcmVzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNhdXRvcmVzaXplKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNhdXRvcmVzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zYXV0b3Jlc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zcmVvcmRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zcmVvcmRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc3Jlb3JkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXRhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VkaXRhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlZGl0YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0bW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZWRpdG1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VkaXRtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcihhcmc/OiAoY2VsbFZhbHVlPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2NlbGxWYWx1ZSddLCByb3dEYXRhPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ3Jvd0RhdGEnXSwgZGF0YUZpZWxkPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RhdGFGaWVsZCddLCBmaWx0ZXJHcm91cD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydmaWx0ZXJHcm91cCddLCBkZWZhdWx0RmlsdGVyUmVzdWx0PzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2RlZmF1bHRGaWx0ZXJSZXN1bHQnXSkgPT4gYW55KTogKGNlbGxWYWx1ZT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydjZWxsVmFsdWUnXSwgcm93RGF0YT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydyb3dEYXRhJ10sIGRhdGFGaWVsZD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkYXRhRmllbGQnXSwgZmlsdGVyR3JvdXA/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZmlsdGVyR3JvdXAnXSwgZGVmYXVsdEZpbHRlclJlc3VsdD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkZWZhdWx0RmlsdGVyUmVzdWx0J10pID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcmFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcmFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwYWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3Vwcyhhcmc/OiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBob3Jpem9udGFsc2Nyb2xsYmFyc3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2hvcml6b250YWxzY3JvbGxiYXJzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2hvcml6b250YWxzY3JvbGxiYXJsYXJnZXN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdHJvd2RldGFpbHMoYXJnPzogKGluZGV4PzogbnVtYmVyLCBwYXJlbnRFbGVtZW50PzogYW55LCBncmlkRWxlbWVudD86IGFueSwgZGF0YXJlY29yZD86IGFueSkgPT4gdm9pZCk6IChpbmRleD86IG51bWJlciwgcGFyZW50RWxlbWVudD86IGFueSwgZ3JpZEVsZW1lbnQ/OiBhbnksIGRhdGFyZWNvcmQ/OiBhbnkpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaW5pdHJvd2RldGFpbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2luaXRyb3dkZXRhaWxzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGtleWJvYXJkbmF2aWdhdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdrZXlib2FyZG5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2tleWJvYXJkbmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzoganF3aWRnZXRzLkdyaWRMb2NhbGl6YXRpb25vYmplY3QpOiBqcXdpZGdldHMuR3JpZExvY2FsaXphdGlvbm9iamVjdCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdsb2NhbGl6YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2xvY2FsaXphdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlc2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VzaXplb3B0aW9ucyhhcmc/OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlc2l6ZW9wdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VzaXplb3B0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlcm1vZGUoYXJnPzogJ3NpbXBsZScgfCAnZGVmYXVsdCcpOiAnc2ltcGxlJyB8ICdkZWZhdWx0JyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcm1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VybW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlcmJ1dHRvbnNjb3VudChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJidXR0b25zY291bnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VyYnV0dG9uc2NvdW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dkZXRhaWxzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd2RldGFpbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd2RldGFpbHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm93ZGV0YWlsc3RlbXBsYXRlKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dkZXRhaWxzdGVtcGxhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Jvd2RldGFpbHN0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkeShhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWFkeScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncmVhZHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKHR5cGU6IGFueSkgPT4gdm9pZCk6ICh0eXBlOiBhbnkpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcmVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcnN0YXR1c2Jhcihhcmc/OiAoc3RhdHVzYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJzdGF0dXNiYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkKTogKHN0YXR1c2Jhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVyc3RhdHVzYmFyWydzdGF0dXNiYXInXSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJzdGF0dXNiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcnN0YXR1c2JhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJ0b29sYmFyKGFyZz86ICh0b29sYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJ0b29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQpOiAodG9vbGJhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVydG9vbGJhclsndG9vbGJhciddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcnRvb2xiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcnRvb2xiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZ3JpZHJvd3MoYXJnPzogKHBhcmFtcz86IGFueSkgPT4gYW55KTogKHBhcmFtcz86IGFueSkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcmdyaWRyb3dzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJncmlkcm93cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3J0YWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc29ydGFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc29ydG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnRtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0bW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZHJvd2luZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RlZHJvd2luZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RlZHJvd2luZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGVkcm93aW5kZXhlcyhhcmc/OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RlZHJvd2luZGV4ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGVkcm93aW5kZXhlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3VyY2UoYXJnPzoganF3aWRnZXRzLkdyaWRTb3VyY2UpOiBqcXdpZGdldHMuR3JpZFNvdXJjZSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3J0dG9nZ2xlc3RhdGVzKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0dG9nZ2xlc3RhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0dG9nZ2xlc3RhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVwZGF0ZWRlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVkZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmlydHVhbG1vZGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndmlydHVhbG1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3ZpcnR1YWxtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZlcnRpY2Fsc2Nyb2xsYmFyc3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndmVydGljYWxzY3JvbGxiYXJzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd2ZXJ0aWNhbHNjcm9sbGJhcnN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3ZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd2ZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEdyaWRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhdXRvcmVzaXplY29sdW1ucyh0eXBlPzogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvcmVzaXplY29sdW1ucycsIHR5cGUpO1xuICAgfVxuXG4gICBhdXRvcmVzaXplY29sdW1uKGRhdGFGaWVsZDogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvcmVzaXplY29sdW1uJywgZGF0YUZpZWxkLCB0eXBlKTtcbiAgIH1cblxuICAgYmVnaW51cGRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdiZWdpbnVwZGF0ZScpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NsZWFyJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGVuZHVwZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuZHVwZGF0ZScpO1xuICAgfVxuXG4gICBlbnN1cmVyb3d2aXNpYmxlKHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5zdXJlcm93dmlzaWJsZScsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldGNvbHVtbmluZGV4KGRhdGFGaWVsZDogc3RyaW5nKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjb2x1bW5pbmRleCcsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IGpxd2lkZ2V0cy5HcmlkR2V0Q29sdW1uIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjb2x1bW5wcm9wZXJ0eShkYXRhRmllbGQ6IHN0cmluZywgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNvbHVtbnByb3BlcnR5JywgZGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUpO1xuICAgfVxuXG4gICBnZXRyb3dpZChyb3dCb3VuZEluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd2lkJywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIGdldHJvd2RhdGEocm93Qm91bmRJbmRleDogbnVtYmVyKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dkYXRhJywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIGdldHJvd2RhdGFieWlkKHJvd0lEOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd2RhdGFieWlkJywgcm93SUQpO1xuICAgfVxuXG4gICBnZXRyb3dib3VuZGluZGV4YnlpZChyb3dJRDogc3RyaW5nKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dib3VuZGluZGV4YnlpZCcsIHJvd0lEKTtcbiAgIH1cblxuICAgZ2V0cm93Ym91bmRpbmRleChyb3dEaXNwbGF5SW5kZXg6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93Ym91bmRpbmRleCcsIHJvd0Rpc3BsYXlJbmRleCk7XG4gICB9XG5cbiAgIGdldHJvd3MoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93cycpO1xuICAgfVxuXG4gICBnZXRib3VuZHJvd3MoKTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Ym91bmRyb3dzJyk7XG4gICB9XG5cbiAgIGdldGRpc3BsYXlyb3dzKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGRpc3BsYXlyb3dzJyk7XG4gICB9XG5cbiAgIGdldGRhdGFpbmZvcm1hdGlvbigpOiBqcXdpZGdldHMuR3JpZEdldERhdGFJbmZvcm1hdGlvbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0ZGF0YWluZm9ybWF0aW9uJyk7XG4gICB9XG5cbiAgIGdldHNvcnRpbmZvcm1hdGlvbigpOiBqcXdpZGdldHMuR3JpZEdldFNvcnRJbmZvcm1hdGlvbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c29ydGluZm9ybWF0aW9uJyk7XG4gICB9XG5cbiAgIGdldHBhZ2luZ2luZm9ybWF0aW9uKCk6IGpxd2lkZ2V0cy5HcmlkR2V0UGFnaW5nSW5mb3JtYXRpb24ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHBhZ2luZ2luZm9ybWF0aW9uJyk7XG4gICB9XG5cbiAgIGhpZGVjb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hpZGVjb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBoaWRlbG9hZGVsZW1lbnQoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdoaWRlbG9hZGVsZW1lbnQnKTtcbiAgIH1cblxuICAgaGlkZXJvd2RldGFpbHMocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdoaWRlcm93ZGV0YWlscycsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBpc2NvbHVtbnZpc2libGUoZGF0YUZpZWxkOiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdpc2NvbHVtbnZpc2libGUnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBpc2NvbHVtbnBpbm5lZChkYXRhRmllbGQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2lzY29sdW1ucGlubmVkJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgbG9jYWxpemVzdHJpbmdzKGxvY2FsaXphdGlvbm9iamVjdDoganF3aWRnZXRzLkdyaWRMb2NhbGl6YXRpb25vYmplY3QpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2xvY2FsaXplc3RyaW5ncycsIGxvY2FsaXphdGlvbm9iamVjdCk7XG4gICB9XG5cbiAgIHBpbmNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGluY29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgcmVmcmVzaGRhdGEoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWZyZXNoZGF0YScpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXInKTtcbiAgIH1cblxuICAgc2Nyb2xsb2Zmc2V0KHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbG9mZnNldCcsIHRvcCwgbGVmdCk7XG4gICB9XG5cbiAgIHNjcm9sbHBvc2l0aW9uKCk6IGpxd2lkZ2V0cy5HcmlkU2Nyb2xsUG9zaXRpb24ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbHBvc2l0aW9uJyk7XG4gICB9XG5cbiAgIHNob3dsb2FkZWxlbWVudCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dsb2FkZWxlbWVudCcpO1xuICAgfVxuXG4gICBzaG93cm93ZGV0YWlscyhyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dyb3dkZXRhaWxzJywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIHNldGNvbHVtbmluZGV4KGRhdGFGaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZXRjb2x1bW5pbmRleCcsIGRhdGFGaWVsZCwgaW5kZXgpO1xuICAgfVxuXG4gICBzZXRjb2x1bW5wcm9wZXJ0eShkYXRhRmllbGQ6IHN0cmluZywgcHJvcGVydHlOYW1lOiBhbnksIHByb3BlcnR5VmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2V0Y29sdW1ucHJvcGVydHknLCBkYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gICB9XG5cbiAgIHNob3djb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3djb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICB1bnBpbmNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgndW5waW5jb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICB1cGRhdGVib3VuZGRhdGEodHlwZT86IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlYm91bmRkYXRhJywgdHlwZSk7XG4gICB9XG5cbiAgIHVwZGF0aW5nKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0aW5nJyk7XG4gICB9XG5cbiAgIGdldHNvcnRjb2x1bW4oKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzb3J0Y29sdW1uJyk7XG4gICB9XG5cbiAgIHJlbW92ZXNvcnQoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW1vdmVzb3J0Jyk7XG4gICB9XG5cbiAgIHNvcnRieShkYXRhRmllbGQ6IHN0cmluZywgc29ydE9yZGVyOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnRieScsIGRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgIH1cblxuICAgYWRkZ3JvdXAoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FkZGdyb3VwJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgY2xlYXJncm91cHMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGVhcmdyb3VwcycpO1xuICAgfVxuXG4gICBjb2xsYXBzZWdyb3VwKGdyb3VwOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbGxhcHNlZ3JvdXAnLCBncm91cCk7XG4gICB9XG5cbiAgIGNvbGxhcHNlYWxsZ3JvdXBzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sbGFwc2VhbGxncm91cHMnKTtcbiAgIH1cblxuICAgZXhwYW5kYWxsZ3JvdXBzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZXhwYW5kYWxsZ3JvdXBzJyk7XG4gICB9XG5cbiAgIGV4cGFuZGdyb3VwKGdyb3VwOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V4cGFuZGdyb3VwJywgZ3JvdXApO1xuICAgfVxuXG4gICBnZXRyb290Z3JvdXBzY291bnQoKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb290Z3JvdXBzY291bnQnKTtcbiAgIH1cblxuICAgZ2V0Z3JvdXAoZ3JvdXBJbmRleDogbnVtYmVyKToganF3aWRnZXRzLkdyaWRHZXRHcm91cCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Z3JvdXAnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgaW5zZXJ0Z3JvdXAoZ3JvdXBJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaW5zZXJ0Z3JvdXAnLCBncm91cEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBpc2NvbHVtbmdyb3VwYWJsZSgpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdpc2NvbHVtbmdyb3VwYWJsZScpO1xuICAgfVxuXG4gICByZW1vdmVncm91cGF0KGdyb3VwSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVtb3ZlZ3JvdXBhdCcsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICByZW1vdmVncm91cChkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVtb3ZlZ3JvdXAnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBhZGRmaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIGZpbHRlckdyb3VwOiBhbnksIHJlZnJlc2hHcmlkPzogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWRkZmlsdGVyJywgZGF0YUZpZWxkLCBmaWx0ZXJHcm91cCwgcmVmcmVzaEdyaWQpO1xuICAgfVxuXG4gICBhcHBseWZpbHRlcnMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhcHBseWZpbHRlcnMnKTtcbiAgIH1cblxuICAgY2xlYXJmaWx0ZXJzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xlYXJmaWx0ZXJzJyk7XG4gICB9XG5cbiAgIGdldGZpbHRlcmluZm9ybWF0aW9uKCk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0ZmlsdGVyaW5mb3JtYXRpb24nKTtcbiAgIH1cblxuICAgZ2V0Y29sdW1uYXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y29sdW1uYXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIHJlbW92ZWZpbHRlcihkYXRhRmllbGQ6IHN0cmluZywgcmVmcmVzaEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbW92ZWZpbHRlcicsIGRhdGFGaWVsZCwgcmVmcmVzaEdyaWQpO1xuICAgfVxuXG4gICByZWZyZXNoZmlsdGVycm93KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVmcmVzaGZpbHRlcnJvdycpO1xuICAgfVxuXG4gICBnb3RvcGFnZShwYWdlbnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dvdG9wYWdlJywgcGFnZW51bWJlcik7XG4gICB9XG5cbiAgIGdvdG9wcmV2cGFnZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dvdG9wcmV2cGFnZScpO1xuICAgfVxuXG4gICBnb3RvbmV4dHBhZ2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdnb3RvbmV4dHBhZ2UnKTtcbiAgIH1cblxuICAgYWRkcm93KHJvd0lkczogYW55LCBkYXRhOiBhbnksIHJvd1Bvc2l0aW9uPzogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGRyb3cnLCByb3dJZHMsIGRhdGEsIHJvd1Bvc2l0aW9uKTtcbiAgIH1cblxuICAgYmVnaW5jZWxsZWRpdChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdiZWdpbmNlbGxlZGl0Jywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgYmVnaW5yb3dlZGl0KHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYmVnaW5yb3dlZGl0Jywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIGNsb3NlbWVudSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2Nsb3NlbWVudScpO1xuICAgfVxuXG4gICBkZWxldGVyb3cocm93SWRzOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdkZWxldGVyb3cnLCByb3dJZHMpO1xuICAgfVxuXG4gICBlbmRjZWxsZWRpdChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nLCBjb25maXJtQ2hhbmdlczogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5kY2VsbGVkaXQnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQsIGNvbmZpcm1DaGFuZ2VzKTtcbiAgIH1cblxuICAgZW5kcm93ZWRpdChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGNvbmZpcm1DaGFuZ2VzOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmRyb3dlZGl0Jywgcm93Qm91bmRJbmRleCwgY29uZmlybUNoYW5nZXMpO1xuICAgfVxuXG4gICBnZXRjZWxsKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YWZpZWxkOiBzdHJpbmcpOiBqcXdpZGdldHMuR3JpZEdldENlbGwge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGwnLCByb3dCb3VuZEluZGV4LCBkYXRhZmllbGQpO1xuICAgfVxuXG4gICBnZXRjZWxsYXRwb3NpdGlvbihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKToganF3aWRnZXRzLkdyaWRHZXRDZWxsIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsYXRwb3NpdGlvbicsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIGdldGNlbGx0ZXh0KHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGx0ZXh0Jywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y2VsbHRleHRieWlkKHJvd0lEOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsdGV4dGJ5aWQnLCByb3dJRCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y2VsbHZhbHVlYnlpZChyb3dJRDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbHZhbHVlYnlpZCcsIHJvd0lELCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjZWxsdmFsdWUocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbHZhbHVlJywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaXNCaW5kaW5nQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2lzQmluZGluZ0NvbXBsZXRlZCcpO1xuICAgfVxuXG4gICBvcGVubWVudShkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnb3Blbm1lbnUnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBzZXRjZWxsdmFsdWUocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2V0Y2VsbHZhbHVlJywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkLCB2YWx1ZSk7XG4gICB9XG5cbiAgIHNldGNlbGx2YWx1ZWJ5aWQocm93SUQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NldGNlbGx2YWx1ZWJ5aWQnLCByb3dJRCwgZGF0YUZpZWxkLCB2YWx1ZSk7XG4gICB9XG5cbiAgIHNob3d2YWxpZGF0aW9ucG9wdXAocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3ZhbGlkYXRpb25wb3B1cCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgfVxuXG4gICB1cGRhdGVyb3cocm93SWRzOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCBkYXRhOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZXJvdycsIHJvd0lkcywgZGF0YSk7XG4gICB9XG5cbiAgIGNsZWFyc2VsZWN0aW9uKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xlYXJzZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgZ2V0c2VsZWN0ZWRyb3dpbmRleCgpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNlbGVjdGVkcm93aW5kZXgnKTtcbiAgIH1cblxuICAgZ2V0c2VsZWN0ZWRyb3dpbmRleGVzKCk6IEFycmF5PG51bWJlcj4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNlbGVjdGVkcm93aW5kZXhlcycpO1xuICAgfVxuXG4gICBnZXRzZWxlY3RlZGNlbGwoKToganF3aWRnZXRzLkdyaWRHZXRTZWxlY3RlZENlbGwge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNlbGVjdGVkY2VsbCcpO1xuICAgfVxuXG4gICBnZXRzZWxlY3RlZGNlbGxzKCk6IEFycmF5PGpxd2lkZ2V0cy5HcmlkR2V0U2VsZWN0ZWRDZWxsPiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c2VsZWN0ZWRjZWxscycpO1xuICAgfVxuXG4gICBzZWxlY3RjZWxsKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGNlbGwnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBzZWxlY3RhbGxyb3dzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0YWxscm93cycpO1xuICAgfVxuXG4gICBzZWxlY3Ryb3cocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3Ryb3cnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgdW5zZWxlY3Ryb3cocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1bnNlbGVjdHJvdycsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICB1bnNlbGVjdGNlbGwocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgndW5zZWxlY3RjZWxsJywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y29sdW1uYWdncmVnYXRlZGRhdGEoZGF0YUZpZWxkOiBzdHJpbmcsIGFnZ3JlZ2F0ZXM6IEFycmF5PGFueT4pOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNvbHVtbmFnZ3JlZ2F0ZWRkYXRhJywgZGF0YUZpZWxkLCBhZ2dyZWdhdGVzKTtcbiAgIH1cblxuICAgcmVmcmVzaGFnZ3JlZ2F0ZXMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZWZyZXNoYWdncmVnYXRlcycpO1xuICAgfVxuXG4gICByZW5kZXJhZ2dyZWdhdGVzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyYWdncmVnYXRlcycpO1xuICAgfVxuXG4gICBleHBvcnRkYXRhKGRhdGFUeXBlOiBzdHJpbmcsIGZpbGVOYW1lPzogc3RyaW5nLCBleHBvcnRIZWFkZXI/OiBib29sZWFuLCByb3dzPzogQXJyYXk8bnVtYmVyPiwgZXhwb3J0SGlkZGVuQ29sdW1ucz86IGJvb2xlYW4sIHNlcnZlclVSTD86IHN0cmluZywgY2hhclNldD86IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZXhwb3J0ZGF0YScsIGRhdGFUeXBlLCBmaWxlTmFtZSwgZXhwb3J0SGVhZGVyLCByb3dzLCBleHBvcnRIaWRkZW5Db2x1bW5zLCBzZXJ2ZXJVUkwsIGNoYXJTZXQpO1xuICAgfVxuXG4gICBnZXRzdGF0ZSgpOiBqcXdpZGdldHMuR3JpZEdldFN0YXRlIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzdGF0ZScpO1xuICAgfVxuXG4gICBsb2Fkc3RhdGUoc3RhdGVvYmplY3Q6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnbG9hZHN0YXRlJywgc3RhdGVvYmplY3QpO1xuICAgfVxuXG4gICBzYXZlc3RhdGUoKToganF3aWRnZXRzLkdyaWRHZXRTdGF0ZSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2F2ZXN0YXRlJyk7XG4gICB9XG5cblxuICAgLy8ganF4R3JpZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdjb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtbnJlc2l6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5yZW9yZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5jbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxkb3VibGVjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsdmFsdWVjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbGJlZ2luZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxlbmRlZGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uR3JvdXBzY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkdyb3VwZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uR3JvdXBjb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBhZ2VjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGFnZXNpemVjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93Y2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dkb3VibGVjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd3NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd3Vuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93ZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93Y29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ2NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nY29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1ucmVzaXplZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1ucmVzaXplZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2x1bW5yZW9yZGVyZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtbnJlb3JkZXJlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2x1bW5jbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1uY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbGNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbGRvdWJsZWNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsZG91YmxlY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbHNlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbHNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsdW5zZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGx1bnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsdmFsdWVjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsdmFsdWVjaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxiZWdpbmVkaXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxiZWdpbmVkaXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbGVuZGVkaXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxlbmRlZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2ZpbHRlcicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRmlsdGVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2dyb3Vwc2NoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkdyb3Vwc2NoYW5nZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZ3JvdXBleHBhbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkdyb3VwZXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2dyb3VwY29sbGFwc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkdyb3VwY29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGFnZWNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBhZ2VjaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3BhZ2VzaXplY2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGFnZXNpemVjaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd2NsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3djbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dkb3VibGVjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93ZG91YmxlY2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93c2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dzZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93dW5zZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd3Vuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd2V4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93ZXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd2NvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3djb2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhHcmlkQ29tcG9uZW50XG4iXX0=