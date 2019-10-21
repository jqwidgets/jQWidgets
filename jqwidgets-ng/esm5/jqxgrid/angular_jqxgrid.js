import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxbuttongroup';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxgrid';
import '../jqwidgets/jqxgrid.edit';
import '../jqwidgets/jqxgrid.pager';
import '../jqwidgets/jqxgrid.selection';
import '../jqwidgets/jqxgrid.filter';
import '../jqwidgets/jqxgrid.sort';
import '../jqwidgets/jqxgrid.storage';
import '../jqwidgets/jqxgrid.grouping';
import '../jqwidgets/jqxgrid.export';
import '../jqwidgets/jqxgrid.columnsresize';
import '../jqwidgets/jqxgrid.columnsreorder';
import '../jqwidgets/jqxgrid.aggregates';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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
    jqxGridComponent.prototype.ngOnInit = function () {
    };
    ;
    jqxGridComponent.prototype.ngAfterViewInit = function () {
        var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        var html = '';
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
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
    jqxGridComponent.prototype.ngAfterViewChecked = function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                var result = JQXLite.jqx.parseSourceTag(this.container);
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
    jqxGridComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    jqxGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxGridComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxGridComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxGridComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxGridComponent.prototype.createComponent = function (options) {
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
    jqxGridComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxGridComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxGridComponent.prototype.setOptions = function (options) {
        this.host.jqxGrid('setOptions', options);
    };
    // jqxGridComponent properties
    jqxGridComponent.prototype.altrows = function (arg) {
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
    jqxGridComponent.prototype.altstart = function (arg) {
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
    jqxGridComponent.prototype.altstep = function (arg) {
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
    jqxGridComponent.prototype.autoshowloadelement = function (arg) {
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
    jqxGridComponent.prototype.autoshowfiltericon = function (arg) {
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
    jqxGridComponent.prototype.autoshowcolumnsmenubutton = function (arg) {
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
    jqxGridComponent.prototype.showcolumnlines = function (arg) {
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
    jqxGridComponent.prototype.showrowlines = function (arg) {
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
    jqxGridComponent.prototype.showcolumnheaderlines = function (arg) {
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
    jqxGridComponent.prototype.adaptive = function (arg) {
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
    jqxGridComponent.prototype.adaptivewidth = function (arg) {
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
    jqxGridComponent.prototype.clipboard = function (arg) {
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
    jqxGridComponent.prototype.closeablegroups = function (arg) {
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
    jqxGridComponent.prototype.columnsmenuwidth = function (arg) {
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
    jqxGridComponent.prototype.columnmenuopening = function (arg) {
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
    jqxGridComponent.prototype.columnmenuclosing = function (arg) {
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
    jqxGridComponent.prototype.cellhover = function (arg) {
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
    jqxGridComponent.prototype.enablekeyboarddelete = function (arg) {
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
    jqxGridComponent.prototype.enableellipsis = function (arg) {
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
    jqxGridComponent.prototype.enablemousewheel = function (arg) {
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
    jqxGridComponent.prototype.enableanimations = function (arg) {
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
    jqxGridComponent.prototype.enabletooltips = function (arg) {
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
    jqxGridComponent.prototype.enablehover = function (arg) {
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
    jqxGridComponent.prototype.enablebrowserselection = function (arg) {
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
    jqxGridComponent.prototype.everpresentrowposition = function (arg) {
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
    jqxGridComponent.prototype.everpresentrowheight = function (arg) {
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
    jqxGridComponent.prototype.everpresentrowactions = function (arg) {
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
    jqxGridComponent.prototype.everpresentrowactionsmode = function (arg) {
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
    jqxGridComponent.prototype.filterrowheight = function (arg) {
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
    jqxGridComponent.prototype.filtermode = function (arg) {
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
    jqxGridComponent.prototype.groupsrenderer = function (arg) {
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
    jqxGridComponent.prototype.groupcolumnrenderer = function (arg) {
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
    jqxGridComponent.prototype.groupsexpandedbydefault = function (arg) {
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
    jqxGridComponent.prototype.handlekeyboardnavigation = function (arg) {
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
    jqxGridComponent.prototype.pagerrenderer = function (arg) {
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
    jqxGridComponent.prototype.rtl = function (arg) {
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
    jqxGridComponent.prototype.showdefaultloadelement = function (arg) {
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
    jqxGridComponent.prototype.showfiltercolumnbackground = function (arg) {
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
    jqxGridComponent.prototype.showfiltermenuitems = function (arg) {
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
    jqxGridComponent.prototype.showpinnedcolumnbackground = function (arg) {
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
    jqxGridComponent.prototype.showsortcolumnbackground = function (arg) {
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
    jqxGridComponent.prototype.showsortmenuitems = function (arg) {
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
    jqxGridComponent.prototype.showgroupmenuitems = function (arg) {
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
    jqxGridComponent.prototype.showrowdetailscolumn = function (arg) {
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
    jqxGridComponent.prototype.showheader = function (arg) {
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
    jqxGridComponent.prototype.showgroupsheader = function (arg) {
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
    jqxGridComponent.prototype.showaggregates = function (arg) {
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
    jqxGridComponent.prototype.showgroupaggregates = function (arg) {
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
    jqxGridComponent.prototype.showeverpresentrow = function (arg) {
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
    jqxGridComponent.prototype.showfilterrow = function (arg) {
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
    jqxGridComponent.prototype.showemptyrow = function (arg) {
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
    jqxGridComponent.prototype.showstatusbar = function (arg) {
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
    jqxGridComponent.prototype.statusbarheight = function (arg) {
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
    jqxGridComponent.prototype.showtoolbar = function (arg) {
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
    jqxGridComponent.prototype.selectionmode = function (arg) {
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
    jqxGridComponent.prototype.updatefilterconditions = function (arg) {
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
    jqxGridComponent.prototype.updatefilterpanel = function (arg) {
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
    jqxGridComponent.prototype.theme = function (arg) {
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
    jqxGridComponent.prototype.toolbarheight = function (arg) {
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
    jqxGridComponent.prototype.autoheight = function (arg) {
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
    jqxGridComponent.prototype.autorowheight = function (arg) {
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
    jqxGridComponent.prototype.columnsheight = function (arg) {
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
    jqxGridComponent.prototype.deferreddatafields = function (arg) {
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
    jqxGridComponent.prototype.groupsheaderheight = function (arg) {
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
    jqxGridComponent.prototype.groupindentwidth = function (arg) {
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
    jqxGridComponent.prototype.height = function (arg) {
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
    jqxGridComponent.prototype.pagerheight = function (arg) {
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
    jqxGridComponent.prototype.rowsheight = function (arg) {
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
    jqxGridComponent.prototype.scrollbarsize = function (arg) {
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
    jqxGridComponent.prototype.scrollmode = function (arg) {
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
    jqxGridComponent.prototype.scrollfeedback = function (arg) {
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
    jqxGridComponent.prototype.width = function (arg) {
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
    jqxGridComponent.prototype.autosavestate = function (arg) {
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
    jqxGridComponent.prototype.autoloadstate = function (arg) {
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
    jqxGridComponent.prototype.columns = function (arg) {
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
    jqxGridComponent.prototype.columngroups = function (arg) {
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
    jqxGridComponent.prototype.columnsmenu = function (arg) {
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
    jqxGridComponent.prototype.columnsresize = function (arg) {
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
    jqxGridComponent.prototype.columnsautoresize = function (arg) {
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
    jqxGridComponent.prototype.columnsreorder = function (arg) {
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
    jqxGridComponent.prototype.disabled = function (arg) {
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
    jqxGridComponent.prototype.editable = function (arg) {
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
    jqxGridComponent.prototype.editmode = function (arg) {
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
    jqxGridComponent.prototype.filter = function (arg) {
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
    jqxGridComponent.prototype.filterable = function (arg) {
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
    jqxGridComponent.prototype.groupable = function (arg) {
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
    jqxGridComponent.prototype.groups = function (arg) {
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
    jqxGridComponent.prototype.horizontalscrollbarstep = function (arg) {
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
    jqxGridComponent.prototype.horizontalscrollbarlargestep = function (arg) {
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
    jqxGridComponent.prototype.initrowdetails = function (arg) {
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
    jqxGridComponent.prototype.keyboardnavigation = function (arg) {
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
    jqxGridComponent.prototype.localization = function (arg) {
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
    jqxGridComponent.prototype.pagesize = function (arg) {
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
    jqxGridComponent.prototype.pagesizeoptions = function (arg) {
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
    jqxGridComponent.prototype.pagermode = function (arg) {
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
    jqxGridComponent.prototype.pagerbuttonscount = function (arg) {
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
    jqxGridComponent.prototype.pageable = function (arg) {
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
    jqxGridComponent.prototype.rowdetails = function (arg) {
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
    jqxGridComponent.prototype.rowdetailstemplate = function (arg) {
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
    jqxGridComponent.prototype.ready = function (arg) {
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
    jqxGridComponent.prototype.rendered = function (arg) {
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
    jqxGridComponent.prototype.renderstatusbar = function (arg) {
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
    jqxGridComponent.prototype.rendertoolbar = function (arg) {
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
    jqxGridComponent.prototype.rendergridrows = function (arg) {
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
    jqxGridComponent.prototype.sortable = function (arg) {
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
    jqxGridComponent.prototype.sortmode = function (arg) {
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
    jqxGridComponent.prototype.selectedrowindex = function (arg) {
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
    jqxGridComponent.prototype.selectedrowindexes = function (arg) {
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
    jqxGridComponent.prototype.source = function (arg) {
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
    jqxGridComponent.prototype.sorttogglestates = function (arg) {
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
    jqxGridComponent.prototype.updatedelay = function (arg) {
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
    jqxGridComponent.prototype.virtualmode = function (arg) {
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
    jqxGridComponent.prototype.verticalscrollbarstep = function (arg) {
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
    jqxGridComponent.prototype.verticalscrollbarlargestep = function (arg) {
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
    jqxGridComponent.prototype.autoresizecolumns = function (type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumns', type);
    };
    jqxGridComponent.prototype.autoresizecolumn = function (dataField, type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    };
    jqxGridComponent.prototype.beginupdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginupdate');
    };
    jqxGridComponent.prototype.clear = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clear');
    };
    jqxGridComponent.prototype.destroy = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('destroy');
    };
    jqxGridComponent.prototype.endupdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endupdate');
    };
    jqxGridComponent.prototype.ensurerowvisible = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    };
    jqxGridComponent.prototype.focus = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('focus');
    };
    jqxGridComponent.prototype.getcolumnindex = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnindex', dataField);
    };
    jqxGridComponent.prototype.getcolumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumn', dataField);
    };
    jqxGridComponent.prototype.getcolumnproperty = function (dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    };
    jqxGridComponent.prototype.getrowid = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    };
    jqxGridComponent.prototype.getrowdata = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    };
    jqxGridComponent.prototype.getrowdatabyid = function (rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdatabyid', rowID);
    };
    jqxGridComponent.prototype.getrowboundindexbyid = function (rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    };
    jqxGridComponent.prototype.getrowboundindex = function (rowDisplayIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    };
    jqxGridComponent.prototype.getrows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrows');
    };
    jqxGridComponent.prototype.getboundrows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getboundrows');
    };
    jqxGridComponent.prototype.getdisplayrows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdisplayrows');
    };
    jqxGridComponent.prototype.getdatainformation = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdatainformation');
    };
    jqxGridComponent.prototype.getsortinformation = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortinformation');
    };
    jqxGridComponent.prototype.getpaginginformation = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getpaginginformation');
    };
    jqxGridComponent.prototype.hidecolumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hidecolumn', dataField);
    };
    jqxGridComponent.prototype.hideloadelement = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hideloadelement');
    };
    jqxGridComponent.prototype.hiderowdetails = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    };
    jqxGridComponent.prototype.iscolumnvisible = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnvisible', dataField);
    };
    jqxGridComponent.prototype.iscolumnpinned = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnpinned', dataField);
    };
    jqxGridComponent.prototype.localizestrings = function (localizationobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('localizestrings', localizationobject);
    };
    jqxGridComponent.prototype.pincolumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('pincolumn', dataField);
    };
    jqxGridComponent.prototype.refreshdata = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshdata');
    };
    jqxGridComponent.prototype.refresh = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refresh');
    };
    jqxGridComponent.prototype.render = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('render');
    };
    jqxGridComponent.prototype.scrolloffset = function (top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('scrolloffset', top, left);
    };
    jqxGridComponent.prototype.scrollposition = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('scrollposition');
    };
    jqxGridComponent.prototype.showloadelement = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showloadelement');
    };
    jqxGridComponent.prototype.showrowdetails = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    };
    jqxGridComponent.prototype.setcolumnindex = function (dataField, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnindex', dataField, index);
    };
    jqxGridComponent.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    };
    jqxGridComponent.prototype.showcolumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showcolumn', dataField);
    };
    jqxGridComponent.prototype.unpincolumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unpincolumn', dataField);
    };
    jqxGridComponent.prototype.updatebounddata = function (type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updatebounddata', type);
    };
    jqxGridComponent.prototype.updating = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('updating');
    };
    jqxGridComponent.prototype.getsortcolumn = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortcolumn');
    };
    jqxGridComponent.prototype.removesort = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removesort');
    };
    jqxGridComponent.prototype.sortby = function (dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('sortby', dataField, sortOrder);
    };
    jqxGridComponent.prototype.addgroup = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addgroup', dataField);
    };
    jqxGridComponent.prototype.cleargroups = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('cleargroups');
    };
    jqxGridComponent.prototype.collapsegroup = function (group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapsegroup', group);
    };
    jqxGridComponent.prototype.collapseallgroups = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapseallgroups');
    };
    jqxGridComponent.prototype.expandallgroups = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandallgroups');
    };
    jqxGridComponent.prototype.expandgroup = function (group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandgroup', group);
    };
    jqxGridComponent.prototype.getrootgroupscount = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrootgroupscount');
    };
    jqxGridComponent.prototype.getgroup = function (groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getgroup', groupIndex);
    };
    jqxGridComponent.prototype.insertgroup = function (groupIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    };
    jqxGridComponent.prototype.iscolumngroupable = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumngroupable');
    };
    jqxGridComponent.prototype.removegroupat = function (groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroupat', groupIndex);
    };
    jqxGridComponent.prototype.removegroup = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroup', dataField);
    };
    jqxGridComponent.prototype.addfilter = function (dataField, filterGroup, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    };
    jqxGridComponent.prototype.applyfilters = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('applyfilters');
    };
    jqxGridComponent.prototype.clearfilters = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearfilters');
    };
    jqxGridComponent.prototype.getfilterinformation = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getfilterinformation');
    };
    jqxGridComponent.prototype.getcolumnat = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnat', index);
    };
    jqxGridComponent.prototype.removefilter = function (dataField, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    };
    jqxGridComponent.prototype.refreshfilterrow = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshfilterrow');
    };
    jqxGridComponent.prototype.gotopage = function (pagenumber) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotopage', pagenumber);
    };
    jqxGridComponent.prototype.gotoprevpage = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotoprevpage');
    };
    jqxGridComponent.prototype.gotonextpage = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotonextpage');
    };
    jqxGridComponent.prototype.addrow = function (rowIds, data, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    };
    jqxGridComponent.prototype.begincelledit = function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.beginrowedit = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    };
    jqxGridComponent.prototype.closemenu = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('closemenu');
    };
    jqxGridComponent.prototype.deleterow = function (rowIds) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('deleterow', rowIds);
    };
    jqxGridComponent.prototype.endcelledit = function (rowBoundIndex, dataField, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    };
    jqxGridComponent.prototype.endrowedit = function (rowBoundIndex, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    };
    jqxGridComponent.prototype.getcell = function (rowBoundIndex, datafield) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    };
    jqxGridComponent.prototype.getcellatposition = function (left, top) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellatposition', left, top);
    };
    jqxGridComponent.prototype.getcelltext = function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.getcelltextbyid = function (rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    };
    jqxGridComponent.prototype.getcellvaluebyid = function (rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    };
    jqxGridComponent.prototype.getcellvalue = function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.isBindingCompleted = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('isBindingCompleted');
    };
    jqxGridComponent.prototype.openmenu = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openmenu', dataField);
    };
    jqxGridComponent.prototype.setcellvalue = function (rowBoundIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    };
    jqxGridComponent.prototype.setcellvaluebyid = function (rowID, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    };
    jqxGridComponent.prototype.showvalidationpopup = function (rowBoundIndex, dataField, validationMessage) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    };
    jqxGridComponent.prototype.updaterow = function (rowIds, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updaterow', rowIds, data);
    };
    jqxGridComponent.prototype.clearselection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearselection');
    };
    jqxGridComponent.prototype.getselectedrowindex = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindex');
    };
    jqxGridComponent.prototype.getselectedrowindexes = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindexes');
    };
    jqxGridComponent.prototype.getselectedcell = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcell');
    };
    jqxGridComponent.prototype.getselectedcells = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcells');
    };
    jqxGridComponent.prototype.selectcell = function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.selectallrows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectallrows');
    };
    jqxGridComponent.prototype.selectrow = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectrow', rowBoundIndex);
    };
    jqxGridComponent.prototype.unselectrow = function (rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    };
    jqxGridComponent.prototype.unselectcell = function (rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    };
    jqxGridComponent.prototype.getcolumnaggregateddata = function (dataField, aggregates) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    };
    jqxGridComponent.prototype.refreshaggregates = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshaggregates');
    };
    jqxGridComponent.prototype.renderaggregates = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('renderaggregates');
    };
    jqxGridComponent.prototype.exportdata = function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    };
    jqxGridComponent.prototype.getstate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getstate');
    };
    jqxGridComponent.prototype.loadstate = function (stateobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('loadstate', stateobject);
    };
    jqxGridComponent.prototype.savestate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('savestate');
    };
    jqxGridComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingcomplete', function (eventData) { _this.onBindingcomplete.emit(eventData); });
        this.host.on('columnresized', function (eventData) { _this.onColumnresized.emit(eventData); });
        this.host.on('columnreordered', function (eventData) { _this.onColumnreordered.emit(eventData); });
        this.host.on('columnclick', function (eventData) { _this.onColumnclick.emit(eventData); });
        this.host.on('cellclick', function (eventData) { _this.onCellclick.emit(eventData); });
        this.host.on('celldoubleclick', function (eventData) { _this.onCelldoubleclick.emit(eventData); });
        this.host.on('cellselect', function (eventData) { _this.onCellselect.emit(eventData); });
        this.host.on('cellunselect', function (eventData) { _this.onCellunselect.emit(eventData); });
        this.host.on('cellvaluechanged', function (eventData) { _this.onCellvaluechanged.emit(eventData); });
        this.host.on('cellbeginedit', function (eventData) { _this.onCellbeginedit.emit(eventData); });
        this.host.on('cellendedit', function (eventData) { _this.onCellendedit.emit(eventData); });
        this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
        this.host.on('groupschanged', function (eventData) { _this.onGroupschanged.emit(eventData); });
        this.host.on('groupexpand', function (eventData) { _this.onGroupexpand.emit(eventData); });
        this.host.on('groupcollapse', function (eventData) { _this.onGroupcollapse.emit(eventData); });
        this.host.on('pagechanged', function (eventData) { _this.onPagechanged.emit(eventData); });
        this.host.on('pagesizechanged', function (eventData) { _this.onPagesizechanged.emit(eventData); });
        this.host.on('rowclick', function (eventData) { _this.onRowclick.emit(eventData); });
        this.host.on('rowdoubleclick', function (eventData) { _this.onRowdoubleclick.emit(eventData); });
        this.host.on('rowselect', function (eventData) { _this.onRowselect.emit(eventData); });
        this.host.on('rowunselect', function (eventData) { _this.onRowunselect.emit(eventData); });
        this.host.on('rowexpand', function (eventData) { _this.onRowexpand.emit(eventData); });
        this.host.on('rowcollapse', function (eventData) { _this.onRowcollapse.emit(eventData); });
        this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
    };
    jqxGridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxGridComponent;
}()); //jqxGridComponent
export { jqxGridComponent };
