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
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let jqxGridComponent = class jqxGridComponent {
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
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
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
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                let result = JQXLite.jqx.parseSourceTag(this.container);
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
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxGrid('setOptions', options);
    }
    // jqxGridComponent properties
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
    autoresizecolumns(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumns', type);
    }
    autoresizecolumn(dataField, type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    }
    beginupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginupdate');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clear');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('destroy');
    }
    endupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endupdate');
    }
    ensurerowvisible(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('focus');
    }
    getcolumnindex(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnindex', dataField);
    }
    getcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumn', dataField);
    }
    getcolumnproperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    }
    getrowid(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    }
    getrowdata(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    }
    getrowdatabyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdatabyid', rowID);
    }
    getrowboundindexbyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    }
    getrowboundindex(rowDisplayIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    }
    getrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrows');
    }
    getboundrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getboundrows');
    }
    getdisplayrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdisplayrows');
    }
    getdatainformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdatainformation');
    }
    getsortinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortinformation');
    }
    getpaginginformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getpaginginformation');
    }
    hidecolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hidecolumn', dataField);
    }
    hideloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hideloadelement');
    }
    hiderowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    }
    iscolumnvisible(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnvisible', dataField);
    }
    iscolumnpinned(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnpinned', dataField);
    }
    localizestrings(localizationobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('localizestrings', localizationobject);
    }
    pincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('pincolumn', dataField);
    }
    refreshdata() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshdata');
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refresh');
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('render');
    }
    scrolloffset(top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('scrolloffset', top, left);
    }
    scrollposition() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('scrollposition');
    }
    showloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showloadelement');
    }
    showrowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    }
    setcolumnindex(dataField, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnindex', dataField, index);
    }
    setcolumnproperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    }
    showcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showcolumn', dataField);
    }
    unpincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unpincolumn', dataField);
    }
    updatebounddata(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updatebounddata', type);
    }
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('updating');
    }
    getsortcolumn() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortcolumn');
    }
    removesort() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removesort');
    }
    sortby(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('sortby', dataField, sortOrder);
    }
    addgroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addgroup', dataField);
    }
    cleargroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('cleargroups');
    }
    collapsegroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapsegroup', group);
    }
    collapseallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapseallgroups');
    }
    expandallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandallgroups');
    }
    expandgroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandgroup', group);
    }
    getrootgroupscount() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrootgroupscount');
    }
    getgroup(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getgroup', groupIndex);
    }
    insertgroup(groupIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    }
    iscolumngroupable() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumngroupable');
    }
    removegroupat(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroupat', groupIndex);
    }
    removegroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroup', dataField);
    }
    addfilter(dataField, filterGroup, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    }
    applyfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('applyfilters');
    }
    clearfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearfilters');
    }
    getfilterinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getfilterinformation');
    }
    getcolumnat(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnat', index);
    }
    removefilter(dataField, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    }
    refreshfilterrow() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshfilterrow');
    }
    gotopage(pagenumber) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotopage', pagenumber);
    }
    gotoprevpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotoprevpage');
    }
    gotonextpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotonextpage');
    }
    addrow(rowIds, data, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    }
    begincelledit(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    }
    beginrowedit(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    }
    closemenu() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('closemenu');
    }
    deleterow(rowIds) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('deleterow', rowIds);
    }
    endcelledit(rowBoundIndex, dataField, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    }
    endrowedit(rowBoundIndex, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    }
    getcell(rowBoundIndex, datafield) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    }
    getcellatposition(left, top) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellatposition', left, top);
    }
    getcelltext(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    }
    getcelltextbyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    }
    getcellvaluebyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    }
    getcellvalue(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    }
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('isBindingCompleted');
    }
    openmenu(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openmenu', dataField);
    }
    setcellvalue(rowBoundIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    }
    setcellvaluebyid(rowID, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    }
    showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    }
    updaterow(rowIds, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updaterow', rowIds, data);
    }
    clearselection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearselection');
    }
    getselectedrowindex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindex');
    }
    getselectedrowindexes() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindexes');
    }
    getselectedcell() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcell');
    }
    getselectedcells() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcells');
    }
    selectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    }
    selectallrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectallrows');
    }
    selectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectrow', rowBoundIndex);
    }
    unselectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    }
    unselectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    }
    getcolumnaggregateddata(dataField, aggregates) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    }
    refreshaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshaggregates');
    }
    renderaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('renderaggregates');
    }
    exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    }
    getstate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getstate');
    }
    loadstate(stateobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('loadstate', stateobject);
    }
    savestate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('savestate');
    }
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
}; //jqxGridComponent
tslib_1.__decorate([
    Input('altrows'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAltrows", void 0);
tslib_1.__decorate([
    Input('altstart'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrAltstart", void 0);
tslib_1.__decorate([
    Input('altstep'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrAltstep", void 0);
tslib_1.__decorate([
    Input('autoshowloadelement'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutoshowloadelement", void 0);
tslib_1.__decorate([
    Input('autoshowfiltericon'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutoshowfiltericon", void 0);
tslib_1.__decorate([
    Input('autoshowcolumnsmenubutton'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutoshowcolumnsmenubutton", void 0);
tslib_1.__decorate([
    Input('showcolumnlines'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowcolumnlines", void 0);
tslib_1.__decorate([
    Input('showrowlines'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowrowlines", void 0);
tslib_1.__decorate([
    Input('showcolumnheaderlines'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowcolumnheaderlines", void 0);
tslib_1.__decorate([
    Input('adaptive'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAdaptive", void 0);
tslib_1.__decorate([
    Input('adaptivewidth'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrAdaptivewidth", void 0);
tslib_1.__decorate([
    Input('clipboard'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrClipboard", void 0);
tslib_1.__decorate([
    Input('closeablegroups'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrCloseablegroups", void 0);
tslib_1.__decorate([
    Input('columnsmenuwidth'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrColumnsmenuwidth", void 0);
tslib_1.__decorate([
    Input('columnmenuopening'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrColumnmenuopening", void 0);
tslib_1.__decorate([
    Input('columnmenuclosing'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrColumnmenuclosing", void 0);
tslib_1.__decorate([
    Input('cellhover'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrCellhover", void 0);
tslib_1.__decorate([
    Input('enablekeyboarddelete'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnablekeyboarddelete", void 0);
tslib_1.__decorate([
    Input('enableellipsis'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnableellipsis", void 0);
tslib_1.__decorate([
    Input('enablemousewheel'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnablemousewheel", void 0);
tslib_1.__decorate([
    Input('enableanimations'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnableanimations", void 0);
tslib_1.__decorate([
    Input('enabletooltips'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnabletooltips", void 0);
tslib_1.__decorate([
    Input('enablehover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnablehover", void 0);
tslib_1.__decorate([
    Input('enablebrowserselection'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEnablebrowserselection", void 0);
tslib_1.__decorate([
    Input('everpresentrowposition'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrEverpresentrowposition", void 0);
tslib_1.__decorate([
    Input('everpresentrowheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrEverpresentrowheight", void 0);
tslib_1.__decorate([
    Input('everpresentrowactions'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrEverpresentrowactions", void 0);
tslib_1.__decorate([
    Input('everpresentrowactionsmode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrEverpresentrowactionsmode", void 0);
tslib_1.__decorate([
    Input('filterrowheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrFilterrowheight", void 0);
tslib_1.__decorate([
    Input('filtermode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrFiltermode", void 0);
tslib_1.__decorate([
    Input('groupsrenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrGroupsrenderer", void 0);
tslib_1.__decorate([
    Input('groupcolumnrenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrGroupcolumnrenderer", void 0);
tslib_1.__decorate([
    Input('groupsexpandedbydefault'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrGroupsexpandedbydefault", void 0);
tslib_1.__decorate([
    Input('handlekeyboardnavigation'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrHandlekeyboardnavigation", void 0);
tslib_1.__decorate([
    Input('pagerrenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrPagerrenderer", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('showdefaultloadelement'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowdefaultloadelement", void 0);
tslib_1.__decorate([
    Input('showfiltercolumnbackground'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowfiltercolumnbackground", void 0);
tslib_1.__decorate([
    Input('showfiltermenuitems'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowfiltermenuitems", void 0);
tslib_1.__decorate([
    Input('showpinnedcolumnbackground'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowpinnedcolumnbackground", void 0);
tslib_1.__decorate([
    Input('showsortcolumnbackground'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowsortcolumnbackground", void 0);
tslib_1.__decorate([
    Input('showsortmenuitems'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowsortmenuitems", void 0);
tslib_1.__decorate([
    Input('showgroupmenuitems'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowgroupmenuitems", void 0);
tslib_1.__decorate([
    Input('showrowdetailscolumn'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowrowdetailscolumn", void 0);
tslib_1.__decorate([
    Input('showheader'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowheader", void 0);
tslib_1.__decorate([
    Input('showgroupsheader'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowgroupsheader", void 0);
tslib_1.__decorate([
    Input('showaggregates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowaggregates", void 0);
tslib_1.__decorate([
    Input('showgroupaggregates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowgroupaggregates", void 0);
tslib_1.__decorate([
    Input('showeverpresentrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShoweverpresentrow", void 0);
tslib_1.__decorate([
    Input('showfilterrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowfilterrow", void 0);
tslib_1.__decorate([
    Input('showemptyrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowemptyrow", void 0);
tslib_1.__decorate([
    Input('showstatusbar'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowstatusbar", void 0);
tslib_1.__decorate([
    Input('statusbarheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrStatusbarheight", void 0);
tslib_1.__decorate([
    Input('showtoolbar'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrShowtoolbar", void 0);
tslib_1.__decorate([
    Input('selectionmode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrSelectionmode", void 0);
tslib_1.__decorate([
    Input('updatefilterconditions'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrUpdatefilterconditions", void 0);
tslib_1.__decorate([
    Input('updatefilterpanel'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrUpdatefilterpanel", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toolbarheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrToolbarheight", void 0);
tslib_1.__decorate([
    Input('autoheight'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutoheight", void 0);
tslib_1.__decorate([
    Input('autorowheight'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutorowheight", void 0);
tslib_1.__decorate([
    Input('columnsheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrColumnsheight", void 0);
tslib_1.__decorate([
    Input('deferreddatafields'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrDeferreddatafields", void 0);
tslib_1.__decorate([
    Input('groupsheaderheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrGroupsheaderheight", void 0);
tslib_1.__decorate([
    Input('groupindentwidth'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrGroupindentwidth", void 0);
tslib_1.__decorate([
    Input('pagerheight'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrPagerheight", void 0);
tslib_1.__decorate([
    Input('rowsheight'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrRowsheight", void 0);
tslib_1.__decorate([
    Input('scrollbarsize'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrScrollbarsize", void 0);
tslib_1.__decorate([
    Input('scrollmode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrScrollmode", void 0);
tslib_1.__decorate([
    Input('scrollfeedback'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrScrollfeedback", void 0);
tslib_1.__decorate([
    Input('autosavestate'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutosavestate", void 0);
tslib_1.__decorate([
    Input('autoloadstate'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrAutoloadstate", void 0);
tslib_1.__decorate([
    Input('columns'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrColumns", void 0);
tslib_1.__decorate([
    Input('columngroups'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrColumngroups", void 0);
tslib_1.__decorate([
    Input('columnsmenu'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrColumnsmenu", void 0);
tslib_1.__decorate([
    Input('columnsresize'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrColumnsresize", void 0);
tslib_1.__decorate([
    Input('columnsautoresize'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrColumnsautoresize", void 0);
tslib_1.__decorate([
    Input('columnsreorder'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrColumnsreorder", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('editable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrEditable", void 0);
tslib_1.__decorate([
    Input('editmode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrEditmode", void 0);
tslib_1.__decorate([
    Input('filter'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrFilter", void 0);
tslib_1.__decorate([
    Input('filterable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrFilterable", void 0);
tslib_1.__decorate([
    Input('groupable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrGroupable", void 0);
tslib_1.__decorate([
    Input('groups'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrGroups", void 0);
tslib_1.__decorate([
    Input('horizontalscrollbarstep'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrHorizontalscrollbarstep", void 0);
tslib_1.__decorate([
    Input('horizontalscrollbarlargestep'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrHorizontalscrollbarlargestep", void 0);
tslib_1.__decorate([
    Input('initrowdetails'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrInitrowdetails", void 0);
tslib_1.__decorate([
    Input('keyboardnavigation'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrKeyboardnavigation", void 0);
tslib_1.__decorate([
    Input('localization'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrLocalization", void 0);
tslib_1.__decorate([
    Input('pagesize'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrPagesize", void 0);
tslib_1.__decorate([
    Input('pagesizeoptions'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrPagesizeoptions", void 0);
tslib_1.__decorate([
    Input('pagermode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrPagermode", void 0);
tslib_1.__decorate([
    Input('pagerbuttonscount'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrPagerbuttonscount", void 0);
tslib_1.__decorate([
    Input('pageable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrPageable", void 0);
tslib_1.__decorate([
    Input('rowdetails'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrRowdetails", void 0);
tslib_1.__decorate([
    Input('rowdetailstemplate'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrRowdetailstemplate", void 0);
tslib_1.__decorate([
    Input('ready'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrReady", void 0);
tslib_1.__decorate([
    Input('rendered'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrRendered", void 0);
tslib_1.__decorate([
    Input('renderstatusbar'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrRenderstatusbar", void 0);
tslib_1.__decorate([
    Input('rendertoolbar'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrRendertoolbar", void 0);
tslib_1.__decorate([
    Input('rendergridrows'),
    tslib_1.__metadata("design:type", Function)
], jqxGridComponent.prototype, "attrRendergridrows", void 0);
tslib_1.__decorate([
    Input('sortable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrSortable", void 0);
tslib_1.__decorate([
    Input('sortmode'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrSortmode", void 0);
tslib_1.__decorate([
    Input('selectedrowindex'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrSelectedrowindex", void 0);
tslib_1.__decorate([
    Input('selectedrowindexes'),
    tslib_1.__metadata("design:type", Array)
], jqxGridComponent.prototype, "attrSelectedrowindexes", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('sorttogglestates'),
    tslib_1.__metadata("design:type", String)
], jqxGridComponent.prototype, "attrSorttogglestates", void 0);
tslib_1.__decorate([
    Input('updatedelay'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrUpdatedelay", void 0);
tslib_1.__decorate([
    Input('virtualmode'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "attrVirtualmode", void 0);
tslib_1.__decorate([
    Input('verticalscrollbarstep'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrVerticalscrollbarstep", void 0);
tslib_1.__decorate([
    Input('verticalscrollbarlargestep'),
    tslib_1.__metadata("design:type", Number)
], jqxGridComponent.prototype, "attrVerticalscrollbarlargestep", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxGridComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onBindingcomplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onColumnresized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onColumnreordered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onColumnclick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellclick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCelldoubleclick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellselect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellunselect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellvaluechanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellbeginedit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onCellendedit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onFilter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onGroupschanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onGroupexpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onGroupcollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onPagechanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onPagesizechanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowclick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowdoubleclick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowselect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowunselect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowexpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onRowcollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxGridComponent.prototype, "onSort", void 0);
jqxGridComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxGrid',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxGridComponent);
export { jqxGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhncmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGdyaWQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW1DLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTlJLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBOEgxQixZQUFZLGdCQUE0QjtRQVRsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLHFCQUFxQixFQUFDLG9CQUFvQixFQUFDLDJCQUEyQixFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyx1QkFBdUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHNCQUFzQixFQUFDLHVCQUF1QixFQUFDLDJCQUEyQixFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxxQkFBcUIsRUFBQyx5QkFBeUIsRUFBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLHdCQUF3QixFQUFDLDRCQUE0QixFQUFDLHFCQUFxQixFQUFDLDRCQUE0QixFQUFDLDBCQUEwQixFQUFDLG1CQUFtQixFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxxQkFBcUIsRUFBQyxvQkFBb0IsRUFBQyxl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QjtBQTFwRjVCLGdCQUFnQjtJQUw1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsc0NBQXNDO0tBQ25ELENBQUM7NkNBZ0krQixVQUFVO0dBOUg5QixnQkFBZ0IsQ0F1ckY1QjtTQXZyRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhHcmlkJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkXG57XG4gICBASW5wdXQoJ2FsdHJvd3MnKSBhdHRyQWx0cm93czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWx0c3RhcnQnKSBhdHRyQWx0c3RhcnQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnYWx0c3RlcCcpIGF0dHJBbHRzdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9zaG93bG9hZGVsZW1lbnQnKSBhdHRyQXV0b3Nob3dsb2FkZWxlbWVudDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b3Nob3dmaWx0ZXJpY29uJykgYXR0ckF1dG9zaG93ZmlsdGVyaWNvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbicpIGF0dHJBdXRvc2hvd2NvbHVtbnNtZW51YnV0dG9uOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Y29sdW1ubGluZXMnKSBhdHRyU2hvd2NvbHVtbmxpbmVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93cm93bGluZXMnKSBhdHRyU2hvd3Jvd2xpbmVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Y29sdW1uaGVhZGVybGluZXMnKSBhdHRyU2hvd2NvbHVtbmhlYWRlcmxpbmVzOiBib29sZWFuO1xuICAgQElucHV0KCdhZGFwdGl2ZScpIGF0dHJBZGFwdGl2ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWRhcHRpdmV3aWR0aCcpIGF0dHJBZGFwdGl2ZXdpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoJ2NsaXBib2FyZCcpIGF0dHJDbGlwYm9hcmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nsb3NlYWJsZWdyb3VwcycpIGF0dHJDbG9zZWFibGVncm91cHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNtZW51d2lkdGgnKSBhdHRyQ29sdW1uc21lbnV3aWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdjb2x1bW5tZW51b3BlbmluZycpIGF0dHJDb2x1bW5tZW51b3BlbmluZzogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbiB8IHZvaWQ7XG4gICBASW5wdXQoJ2NvbHVtbm1lbnVjbG9zaW5nJykgYXR0ckNvbHVtbm1lbnVjbG9zaW5nOiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2hlaWdodCddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdjZWxsaG92ZXInKSBhdHRyQ2VsbGhvdmVyOiAoY2VsbGh0bWxFbGVtZW50PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ2NlbGxodG1sRWxlbWVudCddLCB4PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3gnXSwgeT86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd5J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2VuYWJsZWtleWJvYXJkZGVsZXRlJykgYXR0ckVuYWJsZWtleWJvYXJkZGVsZXRlOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVlbGxpcHNpcycpIGF0dHJFbmFibGVlbGxpcHNpczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlbW91c2V3aGVlbCcpIGF0dHJFbmFibGVtb3VzZXdoZWVsOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVhbmltYXRpb25zJykgYXR0ckVuYWJsZWFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZXRvb2x0aXBzJykgYXR0ckVuYWJsZXRvb2x0aXBzOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVob3ZlcicpIGF0dHJFbmFibGVob3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlYnJvd3NlcnNlbGVjdGlvbicpIGF0dHJFbmFibGVicm93c2Vyc2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdldmVycHJlc2VudHJvd3Bvc2l0aW9uJykgYXR0ckV2ZXJwcmVzZW50cm93cG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnZXZlcnByZXNlbnRyb3doZWlnaHQnKSBhdHRyRXZlcnByZXNlbnRyb3doZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zJykgYXR0ckV2ZXJwcmVzZW50cm93YWN0aW9uczogc3RyaW5nO1xuICAgQElucHV0KCdldmVycHJlc2VudHJvd2FjdGlvbnNtb2RlJykgYXR0ckV2ZXJwcmVzZW50cm93YWN0aW9uc21vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnZmlsdGVycm93aGVpZ2h0JykgYXR0ckZpbHRlcnJvd2hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdmaWx0ZXJtb2RlJykgYXR0ckZpbHRlcm1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnZ3JvdXBzcmVuZGVyZXInKSBhdHRyR3JvdXBzcmVuZGVyZXI6ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsndGV4dCddLCBncm91cD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2dyb3VwJ10sIGV4cGFuZGVkPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZXhwYW5kZWQnXSwgZGF0YT86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2RhdGEnXSkgPT4gc3RyaW5nO1xuICAgQElucHV0KCdncm91cGNvbHVtbnJlbmRlcmVyJykgYXR0ckdyb3VwY29sdW1ucmVuZGVyZXI6ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cGNvbHVtbnJlbmRlcmVyWyd0ZXh0J10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnZ3JvdXBzZXhwYW5kZWRieWRlZmF1bHQnKSBhdHRyR3JvdXBzZXhwYW5kZWRieWRlZmF1bHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2hhbmRsZWtleWJvYXJkbmF2aWdhdGlvbicpIGF0dHJIYW5kbGVrZXlib2FyZG5hdmlnYXRpb246IChldmVudDoganF3aWRnZXRzLkdyaWRIYW5kbGVrZXlib2FyZG5hdmlnYXRpb25bJ2V2ZW50J10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ3BhZ2VycmVuZGVyZXInKSBhdHRyUGFnZXJyZW5kZXJlcjogKCkgPT4gYW55W107XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dkZWZhdWx0bG9hZGVsZW1lbnQnKSBhdHRyU2hvd2RlZmF1bHRsb2FkZWxlbWVudDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQnKSBhdHRyU2hvd2ZpbHRlcmNvbHVtbmJhY2tncm91bmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dmaWx0ZXJtZW51aXRlbXMnKSBhdHRyU2hvd2ZpbHRlcm1lbnVpdGVtczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQnKSBhdHRyU2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dzb3J0Y29sdW1uYmFja2dyb3VuZCcpIGF0dHJTaG93c29ydGNvbHVtbmJhY2tncm91bmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dzb3J0bWVudWl0ZW1zJykgYXR0clNob3dzb3J0bWVudWl0ZW1zOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Z3JvdXBtZW51aXRlbXMnKSBhdHRyU2hvd2dyb3VwbWVudWl0ZW1zOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93cm93ZGV0YWlsc2NvbHVtbicpIGF0dHJTaG93cm93ZGV0YWlsc2NvbHVtbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2hlYWRlcicpIGF0dHJTaG93aGVhZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Z3JvdXBzaGVhZGVyJykgYXR0clNob3dncm91cHNoZWFkZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dhZ2dyZWdhdGVzJykgYXR0clNob3dhZ2dyZWdhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Z3JvdXBhZ2dyZWdhdGVzJykgYXR0clNob3dncm91cGFnZ3JlZ2F0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dldmVycHJlc2VudHJvdycpIGF0dHJTaG93ZXZlcnByZXNlbnRyb3c6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dmaWx0ZXJyb3cnKSBhdHRyU2hvd2ZpbHRlcnJvdzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd2VtcHR5cm93JykgYXR0clNob3dlbXB0eXJvdzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd3N0YXR1c2JhcicpIGF0dHJTaG93c3RhdHVzYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzdGF0dXNiYXJoZWlnaHQnKSBhdHRyU3RhdHVzYmFyaGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3d0b29sYmFyJykgYXR0clNob3d0b29sYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzZWxlY3Rpb25tb2RlJykgYXR0clNlbGVjdGlvbm1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgndXBkYXRlZmlsdGVyY29uZGl0aW9ucycpIGF0dHJVcGRhdGVmaWx0ZXJjb25kaXRpb25zOiAodHlwZT86IHN0cmluZywgZGVmYXVsdGNvbmRpdGlvbnM/OiBhbnkpID0+IGFueTtcbiAgIEBJbnB1dCgndXBkYXRlZmlsdGVycGFuZWwnKSBhdHRyVXBkYXRlZmlsdGVycGFuZWw6IChmaWx0ZXJ0eXBlZHJvcGRvd24xPzogYW55LCBmaWx0ZXJ0eXBlZHJvcGRvd24yPzogYW55LCBmaWx0ZXJvcGVyYXRvcmRyb3Bkb3duPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMT86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDI/OiBhbnksIGZpbHRlcmJ1dHRvbj86IGFueSwgY2xlYXJidXR0b24/OiBhbnksIGNvbHVtbmZpbHRlcj86IGFueSwgZmlsdGVydHlwZT86IGFueSwgZmlsdGVyY29uZGl0aW9ucz86IGFueSkgPT4gYW55O1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b29sYmFyaGVpZ2h0JykgYXR0clRvb2xiYXJoZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXV0b2hlaWdodCcpIGF0dHJBdXRvaGVpZ2h0OiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvcm93aGVpZ2h0JykgYXR0ckF1dG9yb3doZWlnaHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNoZWlnaHQnKSBhdHRyQ29sdW1uc2hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdkZWZlcnJlZGRhdGFmaWVsZHMnKSBhdHRyRGVmZXJyZWRkYXRhZmllbGRzOiBBcnJheTxzdHJpbmc+O1xuICAgQElucHV0KCdncm91cHNoZWFkZXJoZWlnaHQnKSBhdHRyR3JvdXBzaGVhZGVyaGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2dyb3VwaW5kZW50d2lkdGgnKSBhdHRyR3JvdXBpbmRlbnR3aWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlcmhlaWdodCcpIGF0dHJQYWdlcmhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdyb3dzaGVpZ2h0JykgYXR0clJvd3NoZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2Nyb2xsYmFyc2l6ZScpIGF0dHJTY3JvbGxiYXJzaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3Njcm9sbG1vZGUnKSBhdHRyU2Nyb2xsbW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzY3JvbGxmZWVkYmFjaycpIGF0dHJTY3JvbGxmZWVkYmFjazogKHJvdzoganF3aWRnZXRzLkdyaWRTY3JvbGxmZWVkYmFja1sncm93J10pID0+IHN0cmluZztcbiAgIEBJbnB1dCgnYXV0b3NhdmVzdGF0ZScpIGF0dHJBdXRvc2F2ZXN0YXRlOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvbG9hZHN0YXRlJykgYXR0ckF1dG9sb2Fkc3RhdGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnMnKSBhdHRyQ29sdW1uczoganF3aWRnZXRzLkdyaWRDb2x1bW5bXTtcbiAgIEBJbnB1dCgnY29sdW1uZ3JvdXBzJykgYXR0ckNvbHVtbmdyb3VwczogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgnY29sdW1uc21lbnUnKSBhdHRyQ29sdW1uc21lbnU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNyZXNpemUnKSBhdHRyQ29sdW1uc3Jlc2l6ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc2F1dG9yZXNpemUnKSBhdHRyQ29sdW1uc2F1dG9yZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNyZW9yZGVyJykgYXR0ckNvbHVtbnNyZW9yZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdGFibGUnKSBhdHRyRWRpdGFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXRtb2RlJykgYXR0ckVkaXRtb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2ZpbHRlcicpIGF0dHJGaWx0ZXI6IChjZWxsVmFsdWU/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnY2VsbFZhbHVlJ10sIHJvd0RhdGE/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsncm93RGF0YSddLCBkYXRhRmllbGQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGF0YUZpZWxkJ10sIGZpbHRlckdyb3VwPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2ZpbHRlckdyb3VwJ10sIGRlZmF1bHRGaWx0ZXJSZXN1bHQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGVmYXVsdEZpbHRlclJlc3VsdCddKSA9PiBhbnk7XG4gICBASW5wdXQoJ2ZpbHRlcmFibGUnKSBhdHRyRmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZ3JvdXBhYmxlJykgYXR0ckdyb3VwYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZ3JvdXBzJykgYXR0ckdyb3VwczogQXJyYXk8c3RyaW5nPjtcbiAgIEBJbnB1dCgnaG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXAnKSBhdHRySG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXA6IG51bWJlcjtcbiAgIEBJbnB1dCgnaG9yaXpvbnRhbHNjcm9sbGJhcmxhcmdlc3RlcCcpIGF0dHJIb3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ2luaXRyb3dkZXRhaWxzJykgYXR0ckluaXRyb3dkZXRhaWxzOiAoaW5kZXg/OiBudW1iZXIsIHBhcmVudEVsZW1lbnQ/OiBhbnksIGdyaWRFbGVtZW50PzogYW55LCBkYXRhcmVjb3JkPzogYW55KSA9PiB2b2lkO1xuICAgQElucHV0KCdrZXlib2FyZG5hdmlnYXRpb24nKSBhdHRyS2V5Ym9hcmRuYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdsb2NhbGl6YXRpb24nKSBhdHRyTG9jYWxpemF0aW9uOiBqcXdpZGdldHMuR3JpZExvY2FsaXphdGlvbm9iamVjdDtcbiAgIEBJbnB1dCgncGFnZXNpemUnKSBhdHRyUGFnZXNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZXNpemVvcHRpb25zJykgYXR0clBhZ2VzaXplb3B0aW9uczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbiAgIEBJbnB1dCgncGFnZXJtb2RlJykgYXR0clBhZ2VybW9kZTogJ3NpbXBsZScgfCAnZGVmYXVsdCc7XG4gICBASW5wdXQoJ3BhZ2VyYnV0dG9uc2NvdW50JykgYXR0clBhZ2VyYnV0dG9uc2NvdW50OiBudW1iZXI7XG4gICBASW5wdXQoJ3BhZ2VhYmxlJykgYXR0clBhZ2VhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdyb3dkZXRhaWxzJykgYXR0clJvd2RldGFpbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jvd2RldGFpbHN0ZW1wbGF0ZScpIGF0dHJSb3dkZXRhaWxzdGVtcGxhdGU6IGFueTtcbiAgIEBJbnB1dCgncmVhZHknKSBhdHRyUmVhZHk6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcmVkJykgYXR0clJlbmRlcmVkOiAodHlwZTogYW55KSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJzdGF0dXNiYXInKSBhdHRyUmVuZGVyc3RhdHVzYmFyOiAoc3RhdHVzYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJzdGF0dXNiYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJ0b29sYmFyJykgYXR0clJlbmRlcnRvb2xiYXI6ICh0b29sYmFyPzoganF3aWRnZXRzLkdyaWRSZW5kZXJ0b29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcmdyaWRyb3dzJykgYXR0clJlbmRlcmdyaWRyb3dzOiAocGFyYW1zPzogYW55KSA9PiBhbnk7XG4gICBASW5wdXQoJ3NvcnRhYmxlJykgYXR0clNvcnRhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdzb3J0bW9kZScpIGF0dHJTb3J0bW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzZWxlY3RlZHJvd2luZGV4JykgYXR0clNlbGVjdGVkcm93aW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2VsZWN0ZWRyb3dpbmRleGVzJykgYXR0clNlbGVjdGVkcm93aW5kZXhlczogQXJyYXk8bnVtYmVyPjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZToganF3aWRnZXRzLkdyaWRTb3VyY2U7XG4gICBASW5wdXQoJ3NvcnR0b2dnbGVzdGF0ZXMnKSBhdHRyU29ydHRvZ2dsZXN0YXRlczogc3RyaW5nO1xuICAgQElucHV0KCd1cGRhdGVkZWxheScpIGF0dHJVcGRhdGVkZWxheTogbnVtYmVyO1xuICAgQElucHV0KCd2aXJ0dWFsbW9kZScpIGF0dHJWaXJ0dWFsbW9kZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgndmVydGljYWxzY3JvbGxiYXJzdGVwJykgYXR0clZlcnRpY2Fsc2Nyb2xsYmFyc3RlcDogbnVtYmVyO1xuICAgQElucHV0KCd2ZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcCcpIGF0dHJWZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcDogbnVtYmVyO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FsdHJvd3MnLCdhbHRzdGFydCcsJ2FsdHN0ZXAnLCdhdXRvc2hvd2xvYWRlbGVtZW50JywnYXV0b3Nob3dmaWx0ZXJpY29uJywnYXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbicsJ3Nob3djb2x1bW5saW5lcycsJ3Nob3dyb3dsaW5lcycsJ3Nob3djb2x1bW5oZWFkZXJsaW5lcycsJ2FkYXB0aXZlJywnYWRhcHRpdmV3aWR0aCcsJ2NsaXBib2FyZCcsJ2Nsb3NlYWJsZWdyb3VwcycsJ2NvbHVtbnNtZW51d2lkdGgnLCdjb2x1bW5tZW51b3BlbmluZycsJ2NvbHVtbm1lbnVjbG9zaW5nJywnY2VsbGhvdmVyJywnZW5hYmxla2V5Ym9hcmRkZWxldGUnLCdlbmFibGVlbGxpcHNpcycsJ2VuYWJsZW1vdXNld2hlZWwnLCdlbmFibGVhbmltYXRpb25zJywnZW5hYmxldG9vbHRpcHMnLCdlbmFibGVob3ZlcicsJ2VuYWJsZWJyb3dzZXJzZWxlY3Rpb24nLCdldmVycHJlc2VudHJvd3Bvc2l0aW9uJywnZXZlcnByZXNlbnRyb3doZWlnaHQnLCdldmVycHJlc2VudHJvd2FjdGlvbnMnLCdldmVycHJlc2VudHJvd2FjdGlvbnNtb2RlJywnZmlsdGVycm93aGVpZ2h0JywnZmlsdGVybW9kZScsJ2dyb3Vwc3JlbmRlcmVyJywnZ3JvdXBjb2x1bW5yZW5kZXJlcicsJ2dyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0JywnaGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uJywncGFnZXJyZW5kZXJlcicsJ3J0bCcsJ3Nob3dkZWZhdWx0bG9hZGVsZW1lbnQnLCdzaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZCcsJ3Nob3dmaWx0ZXJtZW51aXRlbXMnLCdzaG93cGlubmVkY29sdW1uYmFja2dyb3VuZCcsJ3Nob3dzb3J0Y29sdW1uYmFja2dyb3VuZCcsJ3Nob3dzb3J0bWVudWl0ZW1zJywnc2hvd2dyb3VwbWVudWl0ZW1zJywnc2hvd3Jvd2RldGFpbHNjb2x1bW4nLCdzaG93aGVhZGVyJywnc2hvd2dyb3Vwc2hlYWRlcicsJ3Nob3dhZ2dyZWdhdGVzJywnc2hvd2dyb3VwYWdncmVnYXRlcycsJ3Nob3dldmVycHJlc2VudHJvdycsJ3Nob3dmaWx0ZXJyb3cnLCdzaG93ZW1wdHlyb3cnLCdzaG93c3RhdHVzYmFyJywnc3RhdHVzYmFyaGVpZ2h0Jywnc2hvd3Rvb2xiYXInLCdzZWxlY3Rpb25tb2RlJywndXBkYXRlZmlsdGVyY29uZGl0aW9ucycsJ3VwZGF0ZWZpbHRlcnBhbmVsJywndGhlbWUnLCd0b29sYmFyaGVpZ2h0JywnYXV0b2hlaWdodCcsJ2F1dG9yb3doZWlnaHQnLCdjb2x1bW5zaGVpZ2h0JywnZGVmZXJyZWRkYXRhZmllbGRzJywnZ3JvdXBzaGVhZGVyaGVpZ2h0JywnZ3JvdXBpbmRlbnR3aWR0aCcsJ2hlaWdodCcsJ3BhZ2VyaGVpZ2h0Jywncm93c2hlaWdodCcsJ3Njcm9sbGJhcnNpemUnLCdzY3JvbGxtb2RlJywnc2Nyb2xsZmVlZGJhY2snLCd3aWR0aCcsJ2F1dG9zYXZlc3RhdGUnLCdhdXRvbG9hZHN0YXRlJywnY29sdW1ucycsJ2NvbHVtbmdyb3VwcycsJ2NvbHVtbnNtZW51JywnY29sdW1uc3Jlc2l6ZScsJ2NvbHVtbnNhdXRvcmVzaXplJywnY29sdW1uc3Jlb3JkZXInLCdkaXNhYmxlZCcsJ2VkaXRhYmxlJywnZWRpdG1vZGUnLCdmaWx0ZXInLCdmaWx0ZXJhYmxlJywnZ3JvdXBhYmxlJywnZ3JvdXBzJywnaG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXAnLCdob3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwJywnaW5pdHJvd2RldGFpbHMnLCdrZXlib2FyZG5hdmlnYXRpb24nLCdsb2NhbGl6YXRpb24nLCdwYWdlc2l6ZScsJ3BhZ2VzaXplb3B0aW9ucycsJ3BhZ2VybW9kZScsJ3BhZ2VyYnV0dG9uc2NvdW50JywncGFnZWFibGUnLCdyb3dkZXRhaWxzJywncm93ZGV0YWlsc3RlbXBsYXRlJywncmVhZHknLCdyZW5kZXJlZCcsJ3JlbmRlcnN0YXR1c2JhcicsJ3JlbmRlcnRvb2xiYXInLCdyZW5kZXJncmlkcm93cycsJ3NvcnRhYmxlJywnc29ydG1vZGUnLCdzZWxlY3RlZHJvd2luZGV4Jywnc2VsZWN0ZWRyb3dpbmRleGVzJywnc291cmNlJywnc29ydHRvZ2dsZXN0YXRlcycsJ3VwZGF0ZWRlbGF5JywndmlydHVhbG1vZGUnLCd2ZXJ0aWNhbHNjcm9sbGJhcnN0ZXAnLCd2ZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhHcmlkO1xuXG4gICBjb250ZW50OiBTdHJpbmc7XG4gICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICB9OyBcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICBsZXQgY2hpbGRyZW4gPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKS5maW5kKCd0cicpOyBcbiAgICAgICBsZXQgaHRtbCA9ICcnOyBcbiAgICAgICBsZXQgb3B0aW9ucyA9IHt9OyBcblxuICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIGh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBodG1sO1xuXG4gICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgIGlmICh0aGlzWydhdHRyQ29sdW1ucyddICE9PSB1bmRlZmluZWQpIHsgIFxuOyAgICAgICAgICAgICAgICBvcHRpb25zWydzb3VyY2UnXSA9IHJlc3VsdC5zb3VyY2U7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9XG4gICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3NvdXJjZSddID0gcmVzdWx0LnNvdXJjZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zWydjb2x1bW5zJ10gPSByZXN1bHQuY29sdW1ucztcbiAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTsgXG4gICAgICB9XG4gICB9OyBcblxuIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKHsgc291cmNlOiByZXN1bHQuc291cmNlLCBjb2x1bW5zOiByZXN1bHQuY29sdW1ucyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKHsgc291cmNlOiByZXN1bHQuc291cmNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIH07XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4R3JpZCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeEdyaWRDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWx0cm93cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRyb3dzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRyb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsdHN0YXJ0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhbHRzdGFydCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYWx0c3RhcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWx0c3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWx0c3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYWx0c3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvc2hvd2xvYWRlbGVtZW50KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93bG9hZGVsZW1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93bG9hZGVsZW1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b3Nob3dmaWx0ZXJpY29uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zaG93ZmlsdGVyaWNvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3dmaWx0ZXJpY29uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9zaG93Y29sdW1uc21lbnVidXR0b24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Nob3djb2x1bW5zbWVudWJ1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Y29sdW1ubGluZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2NvbHVtbmxpbmVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Y29sdW1ubGluZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3Jvd2xpbmVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dyb3dsaW5lcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Jvd2xpbmVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3djb2x1bW5oZWFkZXJsaW5lcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Y29sdW1uaGVhZGVybGluZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3djb2x1bW5oZWFkZXJsaW5lcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhZGFwdGl2ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGFwdGl2ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYWRhcHRpdmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWRhcHRpdmV3aWR0aChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWRhcHRpdmV3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYWRhcHRpdmV3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbGlwYm9hcmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xpcGJvYXJkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGlwYm9hcmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VhYmxlZ3JvdXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2Nsb3NlYWJsZWdyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY2xvc2VhYmxlZ3JvdXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNtZW51d2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNtZW51d2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNtZW51d2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1ubWVudW9wZW5pbmcoYXJnPzogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVvcGVuaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbiB8IHZvaWQpOiAobWVudT86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ21lbnUnXSwgZGF0YWZpZWxkPzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51b3BlbmluZ1snZGF0YWZpZWxkJ10sIGhlaWdodD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudW9wZW5pbmdbJ2hlaWdodCddKSA9PiBib29sZWFuIHwgdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5tZW51b3BlbmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ubWVudW9wZW5pbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1ubWVudWNsb3NpbmcoYXJnPzogKG1lbnU/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydtZW51J10sIGRhdGFmaWVsZD86IGpxd2lkZ2V0cy5HcmlkQ29sdW1ubWVudWNsb3NpbmdbJ2RhdGFmaWVsZCddLCBoZWlnaHQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydoZWlnaHQnXSkgPT4gYm9vbGVhbik6IChtZW51PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snbWVudSddLCBkYXRhZmllbGQ/OiBqcXdpZGdldHMuR3JpZENvbHVtbm1lbnVjbG9zaW5nWydkYXRhZmllbGQnXSwgaGVpZ2h0PzoganF3aWRnZXRzLkdyaWRDb2x1bW5tZW51Y2xvc2luZ1snaGVpZ2h0J10pID0+IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ubWVudWNsb3NpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbm1lbnVjbG9zaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNlbGxob3Zlcihhcmc/OiAoY2VsbGh0bWxFbGVtZW50PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ2NlbGxodG1sRWxlbWVudCddLCB4PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3gnXSwgeT86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd5J10pID0+IHZvaWQpOiAoY2VsbGh0bWxFbGVtZW50PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ2NlbGxodG1sRWxlbWVudCddLCB4PzoganF3aWRnZXRzLkdyaWRDZWxsaG92ZXJbJ3gnXSwgeT86IGpxd2lkZ2V0cy5HcmlkQ2VsbGhvdmVyWyd5J10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2VsbGhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjZWxsaG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxla2V5Ym9hcmRkZWxldGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxla2V5Ym9hcmRkZWxldGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWtleWJvYXJkZGVsZXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWVsbGlwc2lzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZWVsbGlwc2lzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVlbGxpcHNpcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVtb3VzZXdoZWVsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZW1vdXNld2hlZWwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZW1vdXNld2hlZWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlYW5pbWF0aW9ucyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVhbmltYXRpb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVhbmltYXRpb25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZXRvb2x0aXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuYWJsZXRvb2x0aXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGV0b29sdGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVob3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVob3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZW5hYmxlaG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlYnJvd3NlcnNlbGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVicm93c2Vyc2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmFibGVicm93c2Vyc2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV2ZXJwcmVzZW50cm93cG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93cG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93cG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXZlcnByZXNlbnRyb3doZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93aGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdldmVycHJlc2VudHJvd2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBldmVycHJlc2VudHJvd2FjdGlvbnMoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93YWN0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZXZlcnByZXNlbnRyb3dhY3Rpb25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV2ZXJwcmVzZW50cm93YWN0aW9uc21vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93YWN0aW9uc21vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2V2ZXJwcmVzZW50cm93YWN0aW9uc21vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVycm93aGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJyb3doZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2ZpbHRlcnJvd2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3Vwc3JlbmRlcmVyKGFyZz86ICh0ZXh0PzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsndGV4dCddLCBncm91cD86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2dyb3VwJ10sIGV4cGFuZGVkPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZXhwYW5kZWQnXSwgZGF0YT86IGpxd2lkZ2V0cy5HcmlkR3JvdXBzcmVuZGVyZXJbJ2RhdGEnXSkgPT4gc3RyaW5nKTogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWyd0ZXh0J10sIGdyb3VwPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZ3JvdXAnXSwgZXhwYW5kZWQ/OiBqcXdpZGdldHMuR3JpZEdyb3Vwc3JlbmRlcmVyWydleHBhbmRlZCddLCBkYXRhPzoganF3aWRnZXRzLkdyaWRHcm91cHNyZW5kZXJlclsnZGF0YSddKSA9PiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzcmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc3JlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3VwY29sdW1ucmVuZGVyZXIoYXJnPzogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3VwY29sdW1ucmVuZGVyZXJbJ3RleHQnXSkgPT4gc3RyaW5nKTogKHRleHQ/OiBqcXdpZGdldHMuR3JpZEdyb3VwY29sdW1ucmVuZGVyZXJbJ3RleHQnXSkgPT4gc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwY29sdW1ucmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwY29sdW1ucmVuZGVyZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBzZXhwYW5kZWRieWRlZmF1bHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzZXhwYW5kZWRieWRlZmF1bHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc2V4cGFuZGVkYnlkZWZhdWx0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhhbmRsZWtleWJvYXJkbmF2aWdhdGlvbihhcmc/OiAoZXZlbnQ6IGpxd2lkZ2V0cy5HcmlkSGFuZGxla2V5Ym9hcmRuYXZpZ2F0aW9uWydldmVudCddKSA9PiBib29sZWFuKTogKGV2ZW50OiBqcXdpZGdldHMuR3JpZEhhbmRsZWtleWJvYXJkbmF2aWdhdGlvblsnZXZlbnQnXSkgPT4gYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdoYW5kbGVrZXlib2FyZG5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2hhbmRsZWtleWJvYXJkbmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlcnJlbmRlcmVyKGFyZz86ICgpID0+IGFueVtdKTogKCkgPT4gYW55W10ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJyZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJyZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2RlZmF1bHRsb2FkZWxlbWVudChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZGVmYXVsdGxvYWRlbGVtZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZGVmYXVsdGxvYWRlbGVtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJjb2x1bW5iYWNrZ3JvdW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZmlsdGVyY29sdW1uYmFja2dyb3VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZmlsdGVybWVudWl0ZW1zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJtZW51aXRlbXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dmaWx0ZXJtZW51aXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Bpbm5lZGNvbHVtbmJhY2tncm91bmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dwaW5uZWRjb2x1bW5iYWNrZ3JvdW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dzb3J0Y29sdW1uYmFja2dyb3VuZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c29ydGNvbHVtbmJhY2tncm91bmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dzb3J0Y29sdW1uYmFja2dyb3VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93c29ydG1lbnVpdGVtcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c29ydG1lbnVpdGVtcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3NvcnRtZW51aXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2dyb3VwbWVudWl0ZW1zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cG1lbnVpdGVtcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2dyb3VwbWVudWl0ZW1zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dyb3dkZXRhaWxzY29sdW1uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dyb3dkZXRhaWxzY29sdW1uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cm93ZGV0YWlsc2NvbHVtbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93aGVhZGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3doZWFkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3doZWFkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2dyb3Vwc2hlYWRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBzaGVhZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Z3JvdXBzaGVhZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dhZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dhZ2dyZWdhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93YWdncmVnYXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Z3JvdXBhZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cGFnZ3JlZ2F0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dncm91cGFnZ3JlZ2F0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd2V2ZXJwcmVzZW50cm93KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3dldmVycHJlc2VudHJvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2V2ZXJwcmVzZW50cm93Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dmaWx0ZXJyb3coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcnJvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2ZpbHRlcnJvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93ZW1wdHlyb3coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd2VtcHR5cm93JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93ZW1wdHlyb3cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3N0YXR1c2Jhcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c3RhdHVzYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93c3RhdHVzYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXR1c2JhcmhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc3RhdHVzYmFyaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzdGF0dXNiYXJoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd3Rvb2xiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2hvd3Rvb2xiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3d0b29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGlvbm1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGlvbm1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGlvbm1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXBkYXRlZmlsdGVyY29uZGl0aW9ucyhhcmc/OiAodHlwZT86IHN0cmluZywgZGVmYXVsdGNvbmRpdGlvbnM/OiBhbnkpID0+IGFueSk6ICh0eXBlPzogc3RyaW5nLCBkZWZhdWx0Y29uZGl0aW9ucz86IGFueSkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWZpbHRlcmNvbmRpdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWZpbHRlcmNvbmRpdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXBkYXRlZmlsdGVycGFuZWwoYXJnPzogKGZpbHRlcnR5cGVkcm9wZG93bjE/OiBhbnksIGZpbHRlcnR5cGVkcm9wZG93bjI/OiBhbnksIGZpbHRlcm9wZXJhdG9yZHJvcGRvd24/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQxPzogYW55LCBmaWx0ZXJpbnB1dGZpZWxkMj86IGFueSwgZmlsdGVyYnV0dG9uPzogYW55LCBjbGVhcmJ1dHRvbj86IGFueSwgY29sdW1uZmlsdGVyPzogYW55LCBmaWx0ZXJ0eXBlPzogYW55LCBmaWx0ZXJjb25kaXRpb25zPzogYW55KSA9PiBhbnkpOiAoZmlsdGVydHlwZWRyb3Bkb3duMT86IGFueSwgZmlsdGVydHlwZWRyb3Bkb3duMj86IGFueSwgZmlsdGVyb3BlcmF0b3Jkcm9wZG93bj86IGFueSwgZmlsdGVyaW5wdXRmaWVsZDE/OiBhbnksIGZpbHRlcmlucHV0ZmllbGQyPzogYW55LCBmaWx0ZXJidXR0b24/OiBhbnksIGNsZWFyYnV0dG9uPzogYW55LCBjb2x1bW5maWx0ZXI/OiBhbnksIGZpbHRlcnR5cGU/OiBhbnksIGZpbHRlcmNvbmRpdGlvbnM/OiBhbnkpID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVmaWx0ZXJwYW5lbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZmlsdGVycGFuZWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sYmFyaGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd0b29sYmFyaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd0b29sYmFyaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9oZWlnaHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvcm93aGVpZ2h0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9yb3doZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9yb3doZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc2hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWZlcnJlZGRhdGFmaWVsZHMoYXJnPzogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZGVmZXJyZWRkYXRhZmllbGRzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdkZWZlcnJlZGRhdGFmaWVsZHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JvdXBzaGVhZGVyaGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHNoZWFkZXJoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3Vwc2hlYWRlcmhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cGluZGVudHdpZHRoKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGluZGVudHdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGluZGVudHdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VyaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcmhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dzaGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dzaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dzaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbGJhcnNpemUoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbGJhcnNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3Njcm9sbGJhcnNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsbW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsbW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsbW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxmZWVkYmFjayhhcmc/OiAocm93OiBqcXdpZGdldHMuR3JpZFNjcm9sbGZlZWRiYWNrWydyb3cnXSkgPT4gc3RyaW5nKTogKHJvdzoganF3aWRnZXRzLkdyaWRTY3JvbGxmZWVkYmFja1sncm93J10pID0+IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxmZWVkYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2Nyb2xsZmVlZGJhY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvc2F2ZXN0YXRlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zYXZlc3RhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2F1dG9zYXZlc3RhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b2xvYWRzdGF0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvbG9hZHN0YXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdhdXRvbG9hZHN0YXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnMoYXJnPzoganF3aWRnZXRzLkdyaWRDb2x1bW5bXSk6IGpxd2lkZ2V0cy5HcmlkQ29sdW1uW10ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5ncm91cHMoYXJnPzogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uZ3JvdXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5ncm91cHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc21lbnUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc21lbnUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNtZW51Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNyZXNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc3Jlc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc3Jlc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zYXV0b3Jlc2l6ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2x1bW5zYXV0b3Jlc2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc2F1dG9yZXNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc3Jlb3JkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1uc3Jlb3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnNyZW9yZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0YWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlZGl0YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZWRpdGFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdG1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VkaXRtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdlZGl0bW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXIoYXJnPzogKGNlbGxWYWx1ZT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydjZWxsVmFsdWUnXSwgcm93RGF0YT86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydyb3dEYXRhJ10sIGRhdGFGaWVsZD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkYXRhRmllbGQnXSwgZmlsdGVyR3JvdXA/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZmlsdGVyR3JvdXAnXSwgZGVmYXVsdEZpbHRlclJlc3VsdD86IGpxd2lkZ2V0cy5HcmlkRmlsdGVyWydkZWZhdWx0RmlsdGVyUmVzdWx0J10pID0+IGFueSk6IChjZWxsVmFsdWU/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnY2VsbFZhbHVlJ10sIHJvd0RhdGE/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsncm93RGF0YSddLCBkYXRhRmllbGQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGF0YUZpZWxkJ10sIGZpbHRlckdyb3VwPzoganF3aWRnZXRzLkdyaWRGaWx0ZXJbJ2ZpbHRlckdyb3VwJ10sIGRlZmF1bHRGaWx0ZXJSZXN1bHQ/OiBqcXdpZGdldHMuR3JpZEZpbHRlclsnZGVmYXVsdEZpbHRlclJlc3VsdCddKSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZmlsdGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdmaWx0ZXJhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyb3VwYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dyb3VwYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBncm91cHMoYXJnPzogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ3JvdXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdncm91cHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaG9yaXpvbnRhbHNjcm9sbGJhcnN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2hvcml6b250YWxzY3JvbGxiYXJzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdob3Jpem9udGFsc2Nyb2xsYmFyc3RlcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBob3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdob3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdob3Jpem9udGFsc2Nyb2xsYmFybGFyZ2VzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluaXRyb3dkZXRhaWxzKGFyZz86IChpbmRleD86IG51bWJlciwgcGFyZW50RWxlbWVudD86IGFueSwgZ3JpZEVsZW1lbnQ/OiBhbnksIGRhdGFyZWNvcmQ/OiBhbnkpID0+IHZvaWQpOiAoaW5kZXg/OiBudW1iZXIsIHBhcmVudEVsZW1lbnQ/OiBhbnksIGdyaWRFbGVtZW50PzogYW55LCBkYXRhcmVjb3JkPzogYW55KSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2luaXRyb3dkZXRhaWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdpbml0cm93ZGV0YWlscycpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZG5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgna2V5Ym9hcmRuYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdrZXlib2FyZG5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGpxd2lkZ2V0cy5HcmlkTG9jYWxpemF0aW9ub2JqZWN0KToganF3aWRnZXRzLkdyaWRMb2NhbGl6YXRpb25vYmplY3Qge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlc2l6ZW9wdGlvbnMoYXJnPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXNpemVvcHRpb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlc2l6ZW9wdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJtb2RlKGFyZz86ICdzaW1wbGUnIHwgJ2RlZmF1bHQnKTogJ3NpbXBsZScgfCAnZGVmYXVsdCcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncGFnZXJtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcm1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJidXR0b25zY291bnQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BhZ2VyYnV0dG9uc2NvdW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlcmJ1dHRvbnNjb3VudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdwYWdlYWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncGFnZWFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm93ZGV0YWlscyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dkZXRhaWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dkZXRhaWxzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd2RldGFpbHN0ZW1wbGF0ZShhcmc/OiBhbnkpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncm93ZGV0YWlsc3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyb3dkZXRhaWxzdGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVhZHkoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVhZHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3JlYWR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmVkKGFyZz86ICh0eXBlOiBhbnkpID0+IHZvaWQpOiAodHlwZTogYW55KSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJzdGF0dXNiYXIoYXJnPzogKHN0YXR1c2Jhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVyc3RhdHVzYmFyWydzdGF0dXNiYXInXSkgPT4gdm9pZCk6IChzdGF0dXNiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnN0YXR1c2Jhclsnc3RhdHVzYmFyJ10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyc3RhdHVzYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJzdGF0dXNiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVydG9vbGJhcihhcmc/OiAodG9vbGJhcj86IGpxd2lkZ2V0cy5HcmlkUmVuZGVydG9vbGJhclsndG9vbGJhciddKSA9PiB2b2lkKTogKHRvb2xiYXI/OiBqcXdpZGdldHMuR3JpZFJlbmRlcnRvb2xiYXJbJ3Rvb2xiYXInXSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJ0b29sYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJ0b29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmdyaWRyb3dzKGFyZz86IChwYXJhbXM/OiBhbnkpID0+IGFueSk6IChwYXJhbXM/OiBhbnkpID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW5kZXJncmlkcm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyZ3JpZHJvd3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc29ydGFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc29ydGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NvcnRhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnRtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0bW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc29ydG1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0ZWRyb3dpbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0ZWRyb3dpbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0ZWRyb3dpbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3RlZHJvd2luZGV4ZXMoYXJnPzogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0ZWRyb3dpbmRleGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RlZHJvd2luZGV4ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGpxd2lkZ2V0cy5HcmlkU291cmNlKToganF3aWRnZXRzLkdyaWRTb3VyY2Uge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc29ydHRvZ2dsZXN0YXRlcyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc29ydHRvZ2dsZXN0YXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnc29ydHRvZ2dsZXN0YXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cGRhdGVkZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCgndXBkYXRlZGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWRlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpcnR1YWxtb2RlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3ZpcnR1YWxtb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd2aXJ0dWFsbW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2ZXJ0aWNhbHNjcm9sbGJhcnN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3ZlcnRpY2Fsc2Nyb2xsYmFyc3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndmVydGljYWxzY3JvbGxiYXJzdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZlcnRpY2Fsc2Nyb2xsYmFybGFyZ2VzdGVwKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd2ZXJ0aWNhbHNjcm9sbGJhcmxhcmdlc3RlcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgndmVydGljYWxzY3JvbGxiYXJsYXJnZXN0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhHcmlkQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYXV0b3Jlc2l6ZWNvbHVtbnModHlwZT86IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Jlc2l6ZWNvbHVtbnMnLCB0eXBlKTtcbiAgIH1cblxuICAgYXV0b3Jlc2l6ZWNvbHVtbihkYXRhRmllbGQ6IHN0cmluZywgdHlwZT86IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXV0b3Jlc2l6ZWNvbHVtbicsIGRhdGFGaWVsZCwgdHlwZSk7XG4gICB9XG5cbiAgIGJlZ2ludXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYmVnaW51cGRhdGUnKTtcbiAgIH1cblxuICAgY2xlYXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbGVhcicpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBlbmR1cGRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdlbmR1cGRhdGUnKTtcbiAgIH1cblxuICAgZW5zdXJlcm93dmlzaWJsZShyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2Vuc3VyZXJvd3Zpc2libGUnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRjb2x1bW5pbmRleChkYXRhRmllbGQ6IHN0cmluZyk6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y29sdW1uaW5kZXgnLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBnZXRjb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiBqcXdpZGdldHMuR3JpZEdldENvbHVtbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y29sdW1ucHJvcGVydHkoZGF0YUZpZWxkOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjb2x1bW5wcm9wZXJ0eScsIGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lKTtcbiAgIH1cblxuICAgZ2V0cm93aWQocm93Qm91bmRJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dpZCcsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBnZXRyb3dkYXRhKHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93ZGF0YScsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBnZXRyb3dkYXRhYnlpZChyb3dJRDogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRyb3dkYXRhYnlpZCcsIHJvd0lEKTtcbiAgIH1cblxuICAgZ2V0cm93Ym91bmRpbmRleGJ5aWQocm93SUQ6IHN0cmluZyk6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm93Ym91bmRpbmRleGJ5aWQnLCByb3dJRCk7XG4gICB9XG5cbiAgIGdldHJvd2JvdW5kaW5kZXgocm93RGlzcGxheUluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd2JvdW5kaW5kZXgnLCByb3dEaXNwbGF5SW5kZXgpO1xuICAgfVxuXG4gICBnZXRyb3dzKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHJvd3MnKTtcbiAgIH1cblxuICAgZ2V0Ym91bmRyb3dzKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGJvdW5kcm93cycpO1xuICAgfVxuXG4gICBnZXRkaXNwbGF5cm93cygpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRkaXNwbGF5cm93cycpO1xuICAgfVxuXG4gICBnZXRkYXRhaW5mb3JtYXRpb24oKToganF3aWRnZXRzLkdyaWRHZXREYXRhSW5mb3JtYXRpb24ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGRhdGFpbmZvcm1hdGlvbicpO1xuICAgfVxuXG4gICBnZXRzb3J0aW5mb3JtYXRpb24oKToganF3aWRnZXRzLkdyaWRHZXRTb3J0SW5mb3JtYXRpb24ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNvcnRpbmZvcm1hdGlvbicpO1xuICAgfVxuXG4gICBnZXRwYWdpbmdpbmZvcm1hdGlvbigpOiBqcXdpZGdldHMuR3JpZEdldFBhZ2luZ0luZm9ybWF0aW9uIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRwYWdpbmdpbmZvcm1hdGlvbicpO1xuICAgfVxuXG4gICBoaWRlY29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdoaWRlY29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaGlkZWxvYWRlbGVtZW50KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaGlkZWxvYWRlbGVtZW50Jyk7XG4gICB9XG5cbiAgIGhpZGVyb3dkZXRhaWxzKHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnaGlkZXJvd2RldGFpbHMnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgaXNjb2x1bW52aXNpYmxlKGRhdGFGaWVsZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaXNjb2x1bW52aXNpYmxlJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaXNjb2x1bW5waW5uZWQoZGF0YUZpZWxkOiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdpc2NvbHVtbnBpbm5lZCcsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGxvY2FsaXplc3RyaW5ncyhsb2NhbGl6YXRpb25vYmplY3Q6IGpxd2lkZ2V0cy5HcmlkTG9jYWxpemF0aW9ub2JqZWN0KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdsb2NhbGl6ZXN0cmluZ3MnLCBsb2NhbGl6YXRpb25vYmplY3QpO1xuICAgfVxuXG4gICBwaW5jb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3BpbmNvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHJlZnJlc2hkYXRhKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVmcmVzaGRhdGEnKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHNjcm9sbG9mZnNldCh0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxvZmZzZXQnLCB0b3AsIGxlZnQpO1xuICAgfVxuXG4gICBzY3JvbGxwb3NpdGlvbigpOiBqcXdpZGdldHMuR3JpZFNjcm9sbFBvc2l0aW9uIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdzY3JvbGxwb3NpdGlvbicpO1xuICAgfVxuXG4gICBzaG93bG9hZGVsZW1lbnQoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93bG9hZGVsZW1lbnQnKTtcbiAgIH1cblxuICAgc2hvd3Jvd2RldGFpbHMocm93Qm91bmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93cm93ZGV0YWlscycsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBzZXRjb2x1bW5pbmRleChkYXRhRmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2V0Y29sdW1uaW5kZXgnLCBkYXRhRmllbGQsIGluZGV4KTtcbiAgIH1cblxuICAgc2V0Y29sdW1ucHJvcGVydHkoZGF0YUZpZWxkOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogYW55LCBwcm9wZXJ0eVZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NldGNvbHVtbnByb3BlcnR5JywgZGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpO1xuICAgfVxuXG4gICBzaG93Y29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzaG93Y29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgdW5waW5jb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VucGluY29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgdXBkYXRlYm91bmRkYXRhKHR5cGU/OiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3VwZGF0ZWJvdW5kZGF0YScsIHR5cGUpO1xuICAgfVxuXG4gICB1cGRhdGluZygpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGluZycpO1xuICAgfVxuXG4gICBnZXRzb3J0Y29sdW1uKCk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c29ydGNvbHVtbicpO1xuICAgfVxuXG4gICByZW1vdmVzb3J0KCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVtb3Zlc29ydCcpO1xuICAgfVxuXG4gICBzb3J0YnkoZGF0YUZpZWxkOiBzdHJpbmcsIHNvcnRPcmRlcjogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzb3J0YnknLCBkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICB9XG5cbiAgIGFkZGdyb3VwKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdhZGRncm91cCcsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGNsZWFyZ3JvdXBzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnY2xlYXJncm91cHMnKTtcbiAgIH1cblxuICAgY29sbGFwc2Vncm91cChncm91cDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjb2xsYXBzZWdyb3VwJywgZ3JvdXApO1xuICAgfVxuXG4gICBjb2xsYXBzZWFsbGdyb3VwcygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbGxhcHNlYWxsZ3JvdXBzJyk7XG4gICB9XG5cbiAgIGV4cGFuZGFsbGdyb3VwcygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2V4cGFuZGFsbGdyb3VwcycpO1xuICAgfVxuXG4gICBleHBhbmRncm91cChncm91cDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdleHBhbmRncm91cCcsIGdyb3VwKTtcbiAgIH1cblxuICAgZ2V0cm9vdGdyb3Vwc2NvdW50KCk6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0cm9vdGdyb3Vwc2NvdW50Jyk7XG4gICB9XG5cbiAgIGdldGdyb3VwKGdyb3VwSW5kZXg6IG51bWJlcik6IGpxd2lkZ2V0cy5HcmlkR2V0R3JvdXAge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGdyb3VwJywgZ3JvdXBJbmRleCk7XG4gICB9XG5cbiAgIGluc2VydGdyb3VwKGdyb3VwSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2luc2VydGdyb3VwJywgZ3JvdXBJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaXNjb2x1bW5ncm91cGFibGUoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnaXNjb2x1bW5ncm91cGFibGUnKTtcbiAgIH1cblxuICAgcmVtb3ZlZ3JvdXBhdChncm91cEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbW92ZWdyb3VwYXQnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgcmVtb3ZlZ3JvdXAoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbW92ZWdyb3VwJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgYWRkZmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWx0ZXJHcm91cDogYW55LCByZWZyZXNoR3JpZD86IGJvb2xlYW4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2FkZGZpbHRlcicsIGRhdGFGaWVsZCwgZmlsdGVyR3JvdXAsIHJlZnJlc2hHcmlkKTtcbiAgIH1cblxuICAgYXBwbHlmaWx0ZXJzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYXBwbHlmaWx0ZXJzJyk7XG4gICB9XG5cbiAgIGNsZWFyZmlsdGVycygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NsZWFyZmlsdGVycycpO1xuICAgfVxuXG4gICBnZXRmaWx0ZXJpbmZvcm1hdGlvbigpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGZpbHRlcmluZm9ybWF0aW9uJyk7XG4gICB9XG5cbiAgIGdldGNvbHVtbmF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNvbHVtbmF0JywgaW5kZXgpO1xuICAgfVxuXG4gICByZW1vdmVmaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIHJlZnJlc2hHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdyZW1vdmVmaWx0ZXInLCBkYXRhRmllbGQsIHJlZnJlc2hHcmlkKTtcbiAgIH1cblxuICAgcmVmcmVzaGZpbHRlcnJvdygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlZnJlc2hmaWx0ZXJyb3cnKTtcbiAgIH1cblxuICAgZ290b3BhZ2UocGFnZW51bWJlcjogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdnb3RvcGFnZScsIHBhZ2VudW1iZXIpO1xuICAgfVxuXG4gICBnb3RvcHJldnBhZ2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdnb3RvcHJldnBhZ2UnKTtcbiAgIH1cblxuICAgZ290b25leHRwYWdlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZ290b25leHRwYWdlJyk7XG4gICB9XG5cbiAgIGFkZHJvdyhyb3dJZHM6IGFueSwgZGF0YTogYW55LCByb3dQb3NpdGlvbj86IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYWRkcm93Jywgcm93SWRzLCBkYXRhLCByb3dQb3NpdGlvbik7XG4gICB9XG5cbiAgIGJlZ2luY2VsbGVkaXQocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnYmVnaW5jZWxsZWRpdCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGJlZ2lucm93ZWRpdChyb3dCb3VuZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2JlZ2lucm93ZWRpdCcsIHJvd0JvdW5kSW5kZXgpO1xuICAgfVxuXG4gICBjbG9zZW1lbnUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdjbG9zZW1lbnUnKTtcbiAgIH1cblxuICAgZGVsZXRlcm93KHJvd0lkczogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZGVsZXRlcm93Jywgcm93SWRzKTtcbiAgIH1cblxuICAgZW5kY2VsbGVkaXQocm93Qm91bmRJbmRleDogbnVtYmVyLCBkYXRhRmllbGQ6IHN0cmluZywgY29uZmlybUNoYW5nZXM6IGJvb2xlYW4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2VuZGNlbGxlZGl0Jywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkLCBjb25maXJtQ2hhbmdlcyk7XG4gICB9XG5cbiAgIGVuZHJvd2VkaXQocm93Qm91bmRJbmRleDogbnVtYmVyLCBjb25maXJtQ2hhbmdlczogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnZW5kcm93ZWRpdCcsIHJvd0JvdW5kSW5kZXgsIGNvbmZpcm1DaGFuZ2VzKTtcbiAgIH1cblxuICAgZ2V0Y2VsbChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFmaWVsZDogc3RyaW5nKToganF3aWRnZXRzLkdyaWRHZXRDZWxsIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsJywgcm93Qm91bmRJbmRleCwgZGF0YWZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y2VsbGF0cG9zaXRpb24obGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IGpxd2lkZ2V0cy5HcmlkR2V0Q2VsbCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbGF0cG9zaXRpb24nLCBsZWZ0LCB0b3ApO1xuICAgfVxuXG4gICBnZXRjZWxsdGV4dChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjZWxsdGV4dCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNlbGx0ZXh0YnlpZChyb3dJRDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0Y2VsbHRleHRieWlkJywgcm93SUQsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNlbGx2YWx1ZWJ5aWQocm93SUQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGx2YWx1ZWJ5aWQnLCByb3dJRCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgZ2V0Y2VsbHZhbHVlKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldGNlbGx2YWx1ZScsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGlzQmluZGluZ0NvbXBsZXRlZCgpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdpc0JpbmRpbmdDb21wbGV0ZWQnKTtcbiAgIH1cblxuICAgb3Blbm1lbnUoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ29wZW5tZW51JywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgc2V0Y2VsbHZhbHVlKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NldGNlbGx2YWx1ZScsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCwgdmFsdWUpO1xuICAgfVxuXG4gICBzZXRjZWxsdmFsdWVieWlkKHJvd0lEOiBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZXRjZWxsdmFsdWVieWlkJywgcm93SUQsIGRhdGFGaWVsZCwgdmFsdWUpO1xuICAgfVxuXG4gICBzaG93dmFsaWRhdGlvbnBvcHVwKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Nob3d2YWxpZGF0aW9ucG9wdXAnLCByb3dCb3VuZEluZGV4LCBkYXRhRmllbGQsIHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgIH1cblxuICAgdXBkYXRlcm93KHJvd0lkczogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiwgZGF0YTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCd1cGRhdGVyb3cnLCByb3dJZHMsIGRhdGEpO1xuICAgfVxuXG4gICBjbGVhcnNlbGVjdGlvbigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2NsZWFyc2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGdldHNlbGVjdGVkcm93aW5kZXgoKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzZWxlY3RlZHJvd2luZGV4Jyk7XG4gICB9XG5cbiAgIGdldHNlbGVjdGVkcm93aW5kZXhlcygpOiBBcnJheTxudW1iZXI+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzZWxlY3RlZHJvd2luZGV4ZXMnKTtcbiAgIH1cblxuICAgZ2V0c2VsZWN0ZWRjZWxsKCk6IGpxd2lkZ2V0cy5HcmlkR2V0U2VsZWN0ZWRDZWxsIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRzZWxlY3RlZGNlbGwnKTtcbiAgIH1cblxuICAgZ2V0c2VsZWN0ZWRjZWxscygpOiBBcnJheTxqcXdpZGdldHMuR3JpZEdldFNlbGVjdGVkQ2VsbD4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2dldHNlbGVjdGVkY2VsbHMnKTtcbiAgIH1cblxuICAgc2VsZWN0Y2VsbChyb3dCb3VuZEluZGV4OiBudW1iZXIsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhHcmlkKCdzZWxlY3RjZWxsJywgcm93Qm91bmRJbmRleCwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgc2VsZWN0YWxscm93cygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3NlbGVjdGFsbHJvd3MnKTtcbiAgIH1cblxuICAgc2VsZWN0cm93KHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgnc2VsZWN0cm93Jywgcm93Qm91bmRJbmRleCk7XG4gICB9XG5cbiAgIHVuc2VsZWN0cm93KHJvd0JvdW5kSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgndW5zZWxlY3Ryb3cnLCByb3dCb3VuZEluZGV4KTtcbiAgIH1cblxuICAgdW5zZWxlY3RjZWxsKHJvd0JvdW5kSW5kZXg6IG51bWJlciwgZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3Vuc2VsZWN0Y2VsbCcsIHJvd0JvdW5kSW5kZXgsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGdldGNvbHVtbmFnZ3JlZ2F0ZWRkYXRhKGRhdGFGaWVsZDogc3RyaW5nLCBhZ2dyZWdhdGVzOiBBcnJheTxhbnk+KTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhHcmlkKCdnZXRjb2x1bW5hZ2dyZWdhdGVkZGF0YScsIGRhdGFGaWVsZCwgYWdncmVnYXRlcyk7XG4gICB9XG5cbiAgIHJlZnJlc2hhZ2dyZWdhdGVzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4R3JpZCgncmVmcmVzaGFnZ3JlZ2F0ZXMnKTtcbiAgIH1cblxuICAgcmVuZGVyYWdncmVnYXRlcygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ3JlbmRlcmFnZ3JlZ2F0ZXMnKTtcbiAgIH1cblxuICAgZXhwb3J0ZGF0YShkYXRhVHlwZTogc3RyaW5nLCBmaWxlTmFtZT86IHN0cmluZywgZXhwb3J0SGVhZGVyPzogYm9vbGVhbiwgcm93cz86IEFycmF5PG51bWJlcj4sIGV4cG9ydEhpZGRlbkNvbHVtbnM/OiBib29sZWFuLCBzZXJ2ZXJVUkw/OiBzdHJpbmcsIGNoYXJTZXQ/OiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ2V4cG9ydGRhdGEnLCBkYXRhVHlwZSwgZmlsZU5hbWUsIGV4cG9ydEhlYWRlciwgcm93cywgZXhwb3J0SGlkZGVuQ29sdW1ucywgc2VydmVyVVJMLCBjaGFyU2V0KTtcbiAgIH1cblxuICAgZ2V0c3RhdGUoKToganF3aWRnZXRzLkdyaWRHZXRTdGF0ZSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4R3JpZCgnZ2V0c3RhdGUnKTtcbiAgIH1cblxuICAgbG9hZHN0YXRlKHN0YXRlb2JqZWN0OiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoJ2xvYWRzdGF0ZScsIHN0YXRlb2JqZWN0KTtcbiAgIH1cblxuICAgc2F2ZXN0YXRlKCk6IGpxd2lkZ2V0cy5HcmlkR2V0U3RhdGUge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEdyaWQoJ3NhdmVzdGF0ZScpO1xuICAgfVxuXG5cbiAgIC8vIGpxeEdyaWRDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25CaW5kaW5nY29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5yZXNpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sdW1ucmVvcmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sdW1uY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsZG91YmxlY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbHZhbHVlY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxiZWdpbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsZW5kZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkdyb3Vwc2NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Hcm91cGV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkdyb3VwY29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QYWdlY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBhZ2VzaXplY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd2NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93ZG91YmxlY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3d1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd2V4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd2NvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JpbmRpbmdjb21wbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmluZGluZ2NvbXBsZXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtbnJlc2l6ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtbnJlc2l6ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1ucmVvcmRlcmVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5yZW9yZGVyZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1uY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtbmNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbGNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxkb3VibGVjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbGRvdWJsZWNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxzZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxzZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbHVuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsdW5zZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbHZhbHVlY2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbHZhbHVlY2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsYmVnaW5lZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsYmVnaW5lZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxlbmRlZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsZW5kZWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdmaWx0ZXInLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkZpbHRlci5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdncm91cHNjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Hcm91cHNjaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2dyb3VwZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Hcm91cGV4cGFuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdncm91cGNvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Hcm91cGNvbGxhcHNlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3BhZ2VjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QYWdlY2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwYWdlc2l6ZWNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBhZ2VzaXplY2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3djbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Y2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93ZG91YmxlY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd2RvdWJsZWNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd3NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93c2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd3Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3d1bnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dleHBhbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd2V4cGFuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3djb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Y29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4R3JpZENvbXBvbmVudFxuIl19