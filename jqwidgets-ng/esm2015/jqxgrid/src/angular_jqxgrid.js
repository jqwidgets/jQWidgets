import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets/jqxdata.export';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxbuttongroup from '../../jqwidgets/jqxbuttongroup';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxgrid from '../../jqwidgets/jqxgrid';
import * as jqxgridedit from '../../jqwidgets/jqxgrid.edit';
import * as jqxgridpager from '../../jqwidgets/jqxgrid.pager';
import * as jqxgridselection from '../../jqwidgets/jqxgrid.selection';
import * as jqxgridfilter from '../../jqwidgets/jqxgrid.filter';
import * as jqxgridsort from '../../jqwidgets/jqxgrid.sort';
import * as jqxgridstorage from '../../jqwidgets/jqxgrid.storage';
import * as jqxgridgrouping from '../../jqwidgets/jqxgrid.grouping';
import * as jqxgridexport from '../../jqwidgets/jqxgrid.export';
import * as jqxgridcolumnsresiz from '../../jqwidgets/jqxgrid.columnsresize';
import * as jqxgridcolumnsreorder from '../../jqwidgets/jqxgrid.columnsreorder';
import * as jqxgridaggregates from '../../jqwidgets/jqxgrid.aggregates';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('bindingcomplete', (eventData) => { this.onBindingcomplete.emit(eventData); });
        this.host.on('columnresized', (eventData) => { this.onColumnresized.emit(eventData); });
        this.host.on('columnreordered', (eventData) => { this.onColumnreordered.emit(eventData); });
        this.host.on('columnclick', (eventData) => { this.onColumnclick.emit(eventData); });
        this.host.on('cellclick', (eventData) => { this.onCellclick.emit(eventData); });
        this.host.on('celldoubleclick', (eventData) => { this.onCelldoubleclick.emit(eventData); });
        this.host.on('cellselect', (eventData) => { this.onCellselect.emit(eventData); });
        this.host.on('cellunselect', (eventData) => { this.onCellunselect.emit(eventData); });
        this.host.on('cellvaluechanged', (eventData) => { this.onCellvaluechanged.emit(eventData); });
        this.host.on('cellbeginedit', (eventData) => { this.onCellbeginedit.emit(eventData); });
        this.host.on('cellendedit', (eventData) => { this.onCellendedit.emit(eventData); });
        this.host.on('filter', (eventData) => { this.onFilter.emit(eventData); });
        this.host.on('groupschanged', (eventData) => { this.onGroupschanged.emit(eventData); });
        this.host.on('groupexpand', (eventData) => { this.onGroupexpand.emit(eventData); });
        this.host.on('groupcollapse', (eventData) => { this.onGroupcollapse.emit(eventData); });
        this.host.on('pagechanged', (eventData) => { this.onPagechanged.emit(eventData); });
        this.host.on('pagesizechanged', (eventData) => { this.onPagesizechanged.emit(eventData); });
        this.host.on('rowclick', (eventData) => { this.onRowclick.emit(eventData); });
        this.host.on('rowdoubleclick', (eventData) => { this.onRowdoubleclick.emit(eventData); });
        this.host.on('rowselect', (eventData) => { this.onRowselect.emit(eventData); });
        this.host.on('rowunselect', (eventData) => { this.onRowunselect.emit(eventData); });
        this.host.on('rowexpand', (eventData) => { this.onRowexpand.emit(eventData); });
        this.host.on('rowcollapse', (eventData) => { this.onRowcollapse.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
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
