import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxdate from '../../jqwidgets-scripts/jqwidgets/jqxdate';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxradiobutton from '../../jqwidgets-scripts/jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxcolorpicker from '../../jqwidgets-scripts/jqwidgets/jqxcolorpicker';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
import * as jqxinput from '../../jqwidgets-scripts/jqwidgets/jqxinput';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxscheduler from '../../jqwidgets-scripts/jqwidgets/jqxscheduler';
import * as jqxschedulerapi from '../../jqwidgets-scripts/jqwidgets/jqxscheduler.api';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let jqxSchedulerComponent = class jqxSchedulerComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appointmentOpacity', 'appointmentsMinHeight', 'appointmentDataFields', 'appointmentTooltips', 'columnsHeight', 'contextMenu', 'contextMenuOpen', 'contextMenuClose', 'contextMenuItemClick', 'contextMenuCreate', 'changedAppointments', 'disabled', 'date', 'dayNameFormat', 'enableHover', 'editDialog', 'editDialogDateTimeFormatString', 'editDialogDateFormatString', 'editDialogOpen', 'editDialogCreate', 'editDialogKeyDown', 'editDialogClose', 'exportSettings', 'height', 'legendPosition', 'legendHeight', 'localization', 'min', 'max', 'ready', 'renderAppointment', 'rendering', 'rendered', 'rtl', 'resources', 'rowsHeight', 'showToolbar', 'showLegend', 'scrollBarSize', 'source', 'statuses', 'touchRowsHeight', 'theme', 'touchAppointmentsMinHeight', 'touchScrollBarSize', 'timeZone', 'touchDayNameFormat', 'toolBarRangeFormat', 'toolBarRangeFormatAbbr', 'toolbarHeight', 'views', 'view', 'width'];
        // jqxSchedulerComponent events
        this.onAppointmentChange = new EventEmitter();
        this.onAppointmentClick = new EventEmitter();
        this.onAppointmentDoubleClick = new EventEmitter();
        this.onAppointmentDelete = new EventEmitter();
        this.onAppointmentAdd = new EventEmitter();
        this.onBindingComplete = new EventEmitter();
        this.onCellClick = new EventEmitter();
        this.onCellDoubleClick = new EventEmitter();
        this.onContextMenuOpen = new EventEmitter();
        this.onContextMenuClose = new EventEmitter();
        this.onContextMenuItemClick = new EventEmitter();
        this.onContextMenuCreate = new EventEmitter();
        this.onDateChange = new EventEmitter();
        this.onEditRecurrenceDialogOpen = new EventEmitter();
        this.onEditRecurrenceDialogClose = new EventEmitter();
        this.onEditDialogCreate = new EventEmitter();
        this.onEditDialogOpen = new EventEmitter();
        this.onEditDialogClose = new EventEmitter();
        this.onViewChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScheduler(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScheduler(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScheduler(this.properties[i])) {
                        this.host.jqxScheduler(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScheduler', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxScheduler('setOptions', options);
    }
    // jqxSchedulerComponent properties
    appointmentOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentOpacity', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentOpacity');
        }
    }
    appointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentsMinHeight');
        }
    }
    appointmentDataFields(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentDataFields', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentDataFields');
        }
    }
    appointmentTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentTooltips', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentTooltips');
        }
    }
    columnsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('columnsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('columnsHeight');
        }
    }
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenu', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenu');
        }
    }
    contextMenuOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuOpen', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuOpen');
        }
    }
    contextMenuClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuClose', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuClose');
        }
    }
    contextMenuItemClick(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuItemClick', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuItemClick');
        }
    }
    contextMenuCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuCreate', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuCreate');
        }
    }
    changedAppointments(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('changedAppointments', arg);
        }
        else {
            return this.host.jqxScheduler('changedAppointments');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('disabled', arg);
        }
        else {
            return this.host.jqxScheduler('disabled');
        }
    }
    date(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('date', arg);
        }
        else {
            return this.host.jqxScheduler('date');
        }
    }
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('dayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('dayNameFormat');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('enableHover', arg);
        }
        else {
            return this.host.jqxScheduler('enableHover');
        }
    }
    editDialog(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialog', arg);
        }
        else {
            return this.host.jqxScheduler('editDialog');
        }
    }
    editDialogDateTimeFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateTimeFormatString');
        }
    }
    editDialogDateFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateFormatString');
        }
    }
    editDialogOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogOpen', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogOpen');
        }
    }
    editDialogCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogCreate', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogCreate');
        }
    }
    editDialogKeyDown(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogKeyDown', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogKeyDown');
        }
    }
    editDialogClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogClose', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogClose');
        }
    }
    exportSettings(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('exportSettings', arg);
        }
        else {
            return this.host.jqxScheduler('exportSettings');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('height', arg);
        }
        else {
            return this.host.jqxScheduler('height');
        }
    }
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendPosition', arg);
        }
        else {
            return this.host.jqxScheduler('legendPosition');
        }
    }
    legendHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendHeight', arg);
        }
        else {
            return this.host.jqxScheduler('legendHeight');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('localization', arg);
        }
        else {
            return this.host.jqxScheduler('localization');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('min', arg);
        }
        else {
            return this.host.jqxScheduler('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('max', arg);
        }
        else {
            return this.host.jqxScheduler('max');
        }
    }
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('ready', arg);
        }
        else {
            return this.host.jqxScheduler('ready');
        }
    }
    renderAppointment(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('renderAppointment', arg);
        }
        else {
            return this.host.jqxScheduler('renderAppointment');
        }
    }
    rendering(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendering', arg);
        }
        else {
            return this.host.jqxScheduler('rendering');
        }
    }
    rendered(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendered', arg);
        }
        else {
            return this.host.jqxScheduler('rendered');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rtl', arg);
        }
        else {
            return this.host.jqxScheduler('rtl');
        }
    }
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('resources', arg);
        }
        else {
            return this.host.jqxScheduler('resources');
        }
    }
    rowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('rowsHeight');
        }
    }
    showToolbar(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showToolbar', arg);
        }
        else {
            return this.host.jqxScheduler('showToolbar');
        }
    }
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showLegend', arg);
        }
        else {
            return this.host.jqxScheduler('showLegend');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('scrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('scrollBarSize');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('source', arg);
        }
        else {
            return this.host.jqxScheduler('source');
        }
    }
    statuses(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('statuses', arg);
        }
        else {
            return this.host.jqxScheduler('statuses');
        }
    }
    touchRowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchRowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchRowsHeight');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('theme', arg);
        }
        else {
            return this.host.jqxScheduler('theme');
        }
    }
    touchAppointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchAppointmentsMinHeight');
        }
    }
    touchScrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchScrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('touchScrollBarSize');
        }
    }
    timeZone(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('timeZone', arg);
        }
        else {
            return this.host.jqxScheduler('timeZone');
        }
    }
    touchDayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchDayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('touchDayNameFormat');
        }
    }
    toolBarRangeFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormat', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormat');
        }
    }
    toolBarRangeFormatAbbr(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormatAbbr');
        }
    }
    toolbarHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolbarHeight', arg);
        }
        else {
            return this.host.jqxScheduler('toolbarHeight');
        }
    }
    views(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('views', arg);
        }
        else {
            return this.host.jqxScheduler('views');
        }
    }
    view(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('view', arg);
        }
        else {
            return this.host.jqxScheduler('view');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('width', arg);
        }
        else {
            return this.host.jqxScheduler('width');
        }
    }
    // jqxSchedulerComponent functions
    addAppointment(item) {
        this.host.jqxScheduler('addAppointment', item);
    }
    beginAppointmentsUpdate() {
        this.host.jqxScheduler('beginAppointmentsUpdate');
    }
    clearAppointmentsSelection() {
        this.host.jqxScheduler('clearAppointmentsSelection');
    }
    clearSelection() {
        this.host.jqxScheduler('clearSelection');
    }
    closeMenu() {
        this.host.jqxScheduler('closeMenu');
    }
    closeDialog() {
        this.host.jqxScheduler('closeDialog');
    }
    deleteAppointment(appointmenId) {
        this.host.jqxScheduler('deleteAppointment', appointmenId);
    }
    destroy() {
        this.host.jqxScheduler('destroy');
    }
    endAppointmentsUpdate() {
        this.host.jqxScheduler('endAppointmentsUpdate');
    }
    ensureAppointmentVisible(id) {
        this.host.jqxScheduler('ensureAppointmentVisible', id);
    }
    ensureVisible(item, resourceId) {
        this.host.jqxScheduler('ensureVisible', item, resourceId);
    }
    exportData(format) {
        return this.host.jqxScheduler('exportData', format);
    }
    focus() {
        this.host.jqxScheduler('focus');
    }
    getAppointmentProperty(appointmentId, name) {
        return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
    }
    getSelection() {
        return this.host.jqxScheduler('getSelection');
    }
    getAppointments() {
        return this.host.jqxScheduler('getAppointments');
    }
    getDataAppointments() {
        return this.host.jqxScheduler('getDataAppointments');
    }
    hideAppointmentsByResource(resourcesId) {
        this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
    }
    openMenu(left, top) {
        this.host.jqxScheduler('openMenu', left, top);
    }
    openDialog(left, top) {
        this.host.jqxScheduler('openDialog', left, top);
    }
    selectAppointment(appointmentId) {
        this.host.jqxScheduler('selectAppointment', appointmentId);
    }
    setAppointmentProperty(appointmentId, name, value) {
        this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    }
    selectCell(date, allday, resourceId) {
        this.host.jqxScheduler('selectCell', date, allday, resourceId);
    }
    showAppointmentsByResource(resourceId) {
        this.host.jqxScheduler('showAppointmentsByResource', resourceId);
    }
    scrollWidth() {
        return this.host.jqxScheduler('scrollWidth');
    }
    scrollHeight() {
        return this.host.jqxScheduler('scrollHeight');
    }
    scrollLeft(left) {
        this.host.jqxScheduler('scrollLeft', left);
    }
    scrollTop(top) {
        this.host.jqxScheduler('scrollTop', top);
    }
    __wireEvents__() {
        this.host.on('appointmentChange', (eventData) => { this.onAppointmentChange.emit(eventData); });
        this.host.on('appointmentClick', (eventData) => { this.onAppointmentClick.emit(eventData); });
        this.host.on('appointmentDoubleClick', (eventData) => { this.onAppointmentDoubleClick.emit(eventData); });
        this.host.on('appointmentDelete', (eventData) => { this.onAppointmentDelete.emit(eventData); });
        this.host.on('appointmentAdd', (eventData) => { this.onAppointmentAdd.emit(eventData); });
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('cellClick', (eventData) => { this.onCellClick.emit(eventData); });
        this.host.on('cellDoubleClick', (eventData) => { this.onCellDoubleClick.emit(eventData); });
        this.host.on('contextMenuOpen', (eventData) => { this.onContextMenuOpen.emit(eventData); });
        this.host.on('contextMenuClose', (eventData) => { this.onContextMenuClose.emit(eventData); });
        this.host.on('contextMenuItemClick', (eventData) => { this.onContextMenuItemClick.emit(eventData); });
        this.host.on('contextMenuCreate', (eventData) => { this.onContextMenuCreate.emit(eventData); });
        this.host.on('dateChange', (eventData) => { this.onDateChange.emit(eventData); });
        this.host.on('editRecurrenceDialogOpen', (eventData) => { this.onEditRecurrenceDialogOpen.emit(eventData); });
        this.host.on('editRecurrenceDialogClose', (eventData) => { this.onEditRecurrenceDialogClose.emit(eventData); });
        this.host.on('editDialogCreate', (eventData) => { this.onEditDialogCreate.emit(eventData); });
        this.host.on('editDialogOpen', (eventData) => { this.onEditDialogOpen.emit(eventData); });
        this.host.on('editDialogClose', (eventData) => { this.onEditDialogClose.emit(eventData); });
        this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
    }
}; //jqxSchedulerComponent
tslib_1.__decorate([
    Input('appointmentOpacity'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrAppointmentOpacity", void 0);
tslib_1.__decorate([
    Input('appointmentsMinHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrAppointmentsMinHeight", void 0);
tslib_1.__decorate([
    Input('appointmentDataFields'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrAppointmentDataFields", void 0);
tslib_1.__decorate([
    Input('appointmentTooltips'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrAppointmentTooltips", void 0);
tslib_1.__decorate([
    Input('columnsHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrColumnsHeight", void 0);
tslib_1.__decorate([
    Input('contextMenu'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrContextMenu", void 0);
tslib_1.__decorate([
    Input('contextMenuOpen'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuOpen", void 0);
tslib_1.__decorate([
    Input('contextMenuClose'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuClose", void 0);
tslib_1.__decorate([
    Input('contextMenuItemClick'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuItemClick", void 0);
tslib_1.__decorate([
    Input('contextMenuCreate'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuCreate", void 0);
tslib_1.__decorate([
    Input('changedAppointments'),
    tslib_1.__metadata("design:type", Array)
], jqxSchedulerComponent.prototype, "attrChangedAppointments", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('date'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrDate", void 0);
tslib_1.__decorate([
    Input('dayNameFormat'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrDayNameFormat", void 0);
tslib_1.__decorate([
    Input('enableHover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrEnableHover", void 0);
tslib_1.__decorate([
    Input('editDialog'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrEditDialog", void 0);
tslib_1.__decorate([
    Input('editDialogDateTimeFormatString'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrEditDialogDateTimeFormatString", void 0);
tslib_1.__decorate([
    Input('editDialogDateFormatString'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrEditDialogDateFormatString", void 0);
tslib_1.__decorate([
    Input('editDialogOpen'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogOpen", void 0);
tslib_1.__decorate([
    Input('editDialogCreate'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogCreate", void 0);
tslib_1.__decorate([
    Input('editDialogKeyDown'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogKeyDown", void 0);
tslib_1.__decorate([
    Input('editDialogClose'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogClose", void 0);
tslib_1.__decorate([
    Input('exportSettings'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrExportSettings", void 0);
tslib_1.__decorate([
    Input('legendPosition'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrLegendPosition", void 0);
tslib_1.__decorate([
    Input('legendHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrLegendHeight", void 0);
tslib_1.__decorate([
    Input('localization'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrLocalization", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('ready'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrReady", void 0);
tslib_1.__decorate([
    Input('renderAppointment'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRenderAppointment", void 0);
tslib_1.__decorate([
    Input('rendering'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRendering", void 0);
tslib_1.__decorate([
    Input('rendered'),
    tslib_1.__metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRendered", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('resources'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrResources", void 0);
tslib_1.__decorate([
    Input('rowsHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrRowsHeight", void 0);
tslib_1.__decorate([
    Input('showToolbar'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrShowToolbar", void 0);
tslib_1.__decorate([
    Input('showLegend'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrShowLegend", void 0);
tslib_1.__decorate([
    Input('scrollBarSize'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrScrollBarSize", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('statuses'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrStatuses", void 0);
tslib_1.__decorate([
    Input('touchRowsHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchRowsHeight", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('touchAppointmentsMinHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchAppointmentsMinHeight", void 0);
tslib_1.__decorate([
    Input('touchScrollBarSize'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchScrollBarSize", void 0);
tslib_1.__decorate([
    Input('timeZone'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTimeZone", void 0);
tslib_1.__decorate([
    Input('touchDayNameFormat'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTouchDayNameFormat", void 0);
tslib_1.__decorate([
    Input('toolBarRangeFormat'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrToolBarRangeFormat", void 0);
tslib_1.__decorate([
    Input('toolBarRangeFormatAbbr'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrToolBarRangeFormatAbbr", void 0);
tslib_1.__decorate([
    Input('toolbarHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrToolbarHeight", void 0);
tslib_1.__decorate([
    Input('views'),
    tslib_1.__metadata("design:type", Array)
], jqxSchedulerComponent.prototype, "attrViews", void 0);
tslib_1.__decorate([
    Input('view'),
    tslib_1.__metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrView", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentDoubleClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentDelete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentAdd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onBindingComplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onCellClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onCellDoubleClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuItemClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onDateChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditRecurrenceDialogOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditRecurrenceDialogClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onViewChange", void 0);
jqxSchedulerComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxScheduler',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxSchedulerComponent);
export { jqxSchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzY2hlZHVsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4c2NoZWR1bGVyLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhzY2hlZHVsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUErRC9CLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBQyxtQkFBbUIsRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGdDQUFnQyxFQUFDLDRCQUE0QixFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLHdCQUF3QixFQUFDLGVBQWUsRUFBQyxP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Q2xDO0lBQVQsTUFBTSxFQUFFOzt5RUFBaUQ7QUFDaEQ7SUFBVCxNQUFNLEVBQUU7OzBFQUFrRDtBQUNqRDtJQUFULE1BQU0sRUFBRTs7aUVBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzsrREFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7O2dFQUF3QztBQUN2QztJQUFULE1BQU0sRUFBRTs7MkRBQW1DO0FBM3RCbEMscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDbkQsQ0FBQzs2Q0FpRStCLFVBQVU7R0EvRDlCLHFCQUFxQixDQW12QmpDO1NBbnZCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFNjaGVkdWxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4U2NoZWR1bGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FwcG9pbnRtZW50T3BhY2l0eScpIGF0dHJBcHBvaW50bWVudE9wYWNpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXBwb2ludG1lbnRzTWluSGVpZ2h0JykgYXR0ckFwcG9pbnRtZW50c01pbkhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdhcHBvaW50bWVudERhdGFGaWVsZHMnKSBhdHRyQXBwb2ludG1lbnREYXRhRmllbGRzOiBqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzO1xuICAgQElucHV0KCdhcHBvaW50bWVudFRvb2x0aXBzJykgYXR0ckFwcG9pbnRtZW50VG9vbHRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNIZWlnaHQnKSBhdHRyQ29sdW1uc0hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdjb250ZXh0TWVudScpIGF0dHJDb250ZXh0TWVudTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVPcGVuJykgYXR0ckNvbnRleHRNZW51T3BlbjogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydldmVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdjb250ZXh0TWVudUNsb3NlJykgYXR0ckNvbnRleHRNZW51Q2xvc2U6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnZXZlbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVJdGVtQ2xpY2snKSBhdHRyQ29udGV4dE1lbnVJdGVtQ2xpY2s6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snZXZlbnQnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVDcmVhdGUnKSBhdHRyQ29udGV4dE1lbnVDcmVhdGU6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ21lbnUnXSwgc2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnc2V0dGluZ3MnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnY2hhbmdlZEFwcG9pbnRtZW50cycpIGF0dHJDaGFuZ2VkQXBwb2ludG1lbnRzOiBBcnJheTxqcXdpZGdldHMuU2NoZWR1bGVyQ2hhbmdlZEFwcG9pbnRtZW50cz47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkYXRlJykgYXR0ckRhdGU6IGFueTtcbiAgIEBJbnB1dCgnZGF5TmFtZUZvcm1hdCcpIGF0dHJEYXlOYW1lRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0RGlhbG9nJykgYXR0ckVkaXREaWFsb2c6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycpIGF0dHJFZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnKSBhdHRyRWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ09wZW4nKSBhdHRyRWRpdERpYWxvZ09wZW46IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdlZGl0RGlhbG9nQ3JlYXRlJykgYXR0ckVkaXREaWFsb2dDcmVhdGU6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdlZGl0RGlhbG9nS2V5RG93bicpIGF0dHJFZGl0RGlhbG9nS2V5RG93bjogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZWRpdEFwcG9pbnRtZW50J10sIGV2ZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydldmVudCddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0RGlhbG9nQ2xvc2UnKSBhdHRyRWRpdERpYWxvZ0Nsb3NlOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZXhwb3J0U2V0dGluZ3MnKSBhdHRyRXhwb3J0U2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncztcbiAgIEBJbnB1dCgnbGVnZW5kUG9zaXRpb24nKSBhdHRyTGVnZW5kUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnbGVnZW5kSGVpZ2h0JykgYXR0ckxlZ2VuZEhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdsb2NhbGl6YXRpb24nKSBhdHRyTG9jYWxpemF0aW9uOiBhbnk7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IGFueTtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogYW55O1xuICAgQElucHV0KCdyZWFkeScpIGF0dHJSZWFkeTogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyQXBwb2ludG1lbnQnKSBhdHRyUmVuZGVyQXBwb2ludG1lbnQ6IChkYXRhOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVuZGVyQXBwb2ludG1lbnRbJ2RhdGEnXSkgPT4gYW55O1xuICAgQElucHV0KCdyZW5kZXJpbmcnKSBhdHRyUmVuZGVyaW5nOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVzb3VyY2VzJykgYXR0clJlc291cmNlczoganF3aWRnZXRzLlNjaGVkdWxlclJlc291cmNlcztcbiAgIEBJbnB1dCgncm93c0hlaWdodCcpIGF0dHJSb3dzSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3dUb29sYmFyJykgYXR0clNob3dUb29sYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93TGVnZW5kJykgYXR0clNob3dMZWdlbmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Njcm9sbEJhclNpemUnKSBhdHRyU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3N0YXR1c2VzJykgYXR0clN0YXR1c2VzOiBqcXdpZGdldHMuU2NoZWR1bGVyU3RhdHVzZXM7XG4gICBASW5wdXQoJ3RvdWNoUm93c0hlaWdodCcpIGF0dHJUb3VjaFJvd3NIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQnKSBhdHRyVG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndG91Y2hTY3JvbGxCYXJTaXplJykgYXR0clRvdWNoU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCd0aW1lWm9uZScpIGF0dHJUaW1lWm9uZTogc3RyaW5nO1xuICAgQElucHV0KCd0b3VjaERheU5hbWVGb3JtYXQnKSBhdHRyVG91Y2hEYXlOYW1lRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xCYXJSYW5nZUZvcm1hdCcpIGF0dHJUb29sQmFyUmFuZ2VGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbEJhclJhbmdlRm9ybWF0QWJicicpIGF0dHJUb29sQmFyUmFuZ2VGb3JtYXRBYmJyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xiYXJIZWlnaHQnKSBhdHRyVG9vbGJhckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCd2aWV3cycpIGF0dHJWaWV3czogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgndmlldycpIGF0dHJWaWV3OiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXBwb2ludG1lbnRPcGFjaXR5JywnYXBwb2ludG1lbnRzTWluSGVpZ2h0JywnYXBwb2ludG1lbnREYXRhRmllbGRzJywnYXBwb2ludG1lbnRUb29sdGlwcycsJ2NvbHVtbnNIZWlnaHQnLCdjb250ZXh0TWVudScsJ2NvbnRleHRNZW51T3BlbicsJ2NvbnRleHRNZW51Q2xvc2UnLCdjb250ZXh0TWVudUl0ZW1DbGljaycsJ2NvbnRleHRNZW51Q3JlYXRlJywnY2hhbmdlZEFwcG9pbnRtZW50cycsJ2Rpc2FibGVkJywnZGF0ZScsJ2RheU5hbWVGb3JtYXQnLCdlbmFibGVIb3ZlcicsJ2VkaXREaWFsb2cnLCdlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcnLCdlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZycsJ2VkaXREaWFsb2dPcGVuJywnZWRpdERpYWxvZ0NyZWF0ZScsJ2VkaXREaWFsb2dLZXlEb3duJywnZWRpdERpYWxvZ0Nsb3NlJywnZXhwb3J0U2V0dGluZ3MnLCdoZWlnaHQnLCdsZWdlbmRQb3NpdGlvbicsJ2xlZ2VuZEhlaWdodCcsJ2xvY2FsaXphdGlvbicsJ21pbicsJ21heCcsJ3JlYWR5JywncmVuZGVyQXBwb2ludG1lbnQnLCdyZW5kZXJpbmcnLCdyZW5kZXJlZCcsJ3J0bCcsJ3Jlc291cmNlcycsJ3Jvd3NIZWlnaHQnLCdzaG93VG9vbGJhcicsJ3Nob3dMZWdlbmQnLCdzY3JvbGxCYXJTaXplJywnc291cmNlJywnc3RhdHVzZXMnLCd0b3VjaFJvd3NIZWlnaHQnLCd0aGVtZScsJ3RvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0JywndG91Y2hTY3JvbGxCYXJTaXplJywndGltZVpvbmUnLCd0b3VjaERheU5hbWVGb3JtYXQnLCd0b29sQmFyUmFuZ2VGb3JtYXQnLCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJywndG9vbGJhckhlaWdodCcsJ3ZpZXdzJywndmlldycsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFNjaGVkdWxlcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4U2NoZWR1bGVyJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhTY2hlZHVsZXJDb21wb25lbnQgcHJvcGVydGllc1xuICAgYXBwb2ludG1lbnRPcGFjaXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudE9wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRPcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFwcG9pbnRtZW50c01pbkhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRzTWluSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50c01pbkhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcHBvaW50bWVudERhdGFGaWVsZHMoYXJnPzoganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnREYXRhRmllbGRzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50RGF0YUZpZWxkcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcHBvaW50bWVudFRvb2x0aXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50VG9vbHRpcHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRUb29sdGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb2x1bW5zSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbHVtbnNIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVPcGVuKGFyZz86IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnZXZlbnQnXSkgPT4gdm9pZCk6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnZXZlbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudU9wZW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVPcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51Q2xvc2UoYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydldmVudCddKSA9PiB2b2lkKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydldmVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVDbG9zZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudUl0ZW1DbGljayhhcmc/OiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2V2ZW50J10pID0+IGJvb2xlYW4pOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2V2ZW50J10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVJdGVtQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVJdGVtQ2xpY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVDcmVhdGUoYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnbWVudSddLCBzZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydzZXR0aW5ncyddKSA9PiB2b2lkKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnbWVudSddLCBzZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydzZXR0aW5ncyddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q3JlYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q3JlYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoYW5nZWRBcHBvaW50bWVudHMoYXJnPzogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckNoYW5nZWRBcHBvaW50bWVudHM+KTogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckNoYW5nZWRBcHBvaW50bWVudHM+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NoYW5nZWRBcHBvaW50bWVudHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2hhbmdlZEFwcG9pbnRtZW50cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkYXRlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGF5TmFtZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGF5TmFtZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXlOYW1lRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ09wZW4oYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQpOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nT3BlbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nQ3JlYXRlKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkKTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0NyZWF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ3JlYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dLZXlEb3duKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2VkaXRBcHBvaW50bWVudCddLCBldmVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZXZlbnQnXSkgPT4gYm9vbGVhbik6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2VkaXRBcHBvaW50bWVudCddLCBldmVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZXZlbnQnXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nS2V5RG93bicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nS2V5RG93bicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nQ2xvc2UoYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQpOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ2xvc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0Nsb3NlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV4cG9ydFNldHRpbmdzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdleHBvcnRTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdleHBvcnRTZXR0aW5ncycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGVnZW5kUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZFBvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZEhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbGVnZW5kSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZEhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xvY2FsaXphdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkeShhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZWFkeScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZWFkeScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJBcHBvaW50bWVudChhcmc/OiAoZGF0YToganF3aWRnZXRzLlNjaGVkdWxlclJlbmRlckFwcG9pbnRtZW50WydkYXRhJ10pID0+IGFueSk6IChkYXRhOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVuZGVyQXBwb2ludG1lbnRbJ2RhdGEnXSkgPT4gYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlckFwcG9pbnRtZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlckFwcG9pbnRtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmluZyhhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmVkKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlc291cmNlcyhhcmc/OiBqcXdpZGdldHMuU2NoZWR1bGVyUmVzb3VyY2VzKToganF3aWRnZXRzLlNjaGVkdWxlclJlc291cmNlcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZXNvdXJjZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVzb3VyY2VzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd3NIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Jvd3NIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncm93c0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93VG9vbGJhcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93VG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93VG9vbGJhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TGVnZW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dMZWdlbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd0xlZ2VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXR1c2VzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJTdGF0dXNlcyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJTdGF0dXNlcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzdGF0dXNlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzdGF0dXNlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaFJvd3NIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoUm93c0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFJvd3NIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaFNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoU2Nyb2xsQmFyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFNjcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGltZVpvbmUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RpbWVab25lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RpbWVab25lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoRGF5TmFtZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hEYXlOYW1lRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoRGF5TmFtZUZvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sQmFyUmFuZ2VGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xCYXJSYW5nZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbEJhclJhbmdlRm9ybWF0QWJicihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbEJhclJhbmdlRm9ybWF0QWJicicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xiYXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xiYXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbGJhckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aWV3cyhhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3cycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aWV3KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3ZpZXcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4U2NoZWR1bGVyQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkQXBwb2ludG1lbnQoaXRlbToganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYWRkQXBwb2ludG1lbnQnLCBpdGVtKTtcbiAgIH1cblxuICAgYmVnaW5BcHBvaW50bWVudHNVcGRhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdiZWdpbkFwcG9pbnRtZW50c1VwZGF0ZScpO1xuICAgfVxuXG4gICBjbGVhckFwcG9pbnRtZW50c1NlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NsZWFyQXBwb2ludG1lbnRzU2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xvc2VNZW51Jyk7XG4gICB9XG5cbiAgIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xvc2VEaWFsb2cnKTtcbiAgIH1cblxuICAgZGVsZXRlQXBwb2ludG1lbnQoYXBwb2ludG1lbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RlbGV0ZUFwcG9pbnRtZW50JywgYXBwb2ludG1lbklkKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZW5kQXBwb2ludG1lbnRzVXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5kQXBwb2ludG1lbnRzVXBkYXRlJyk7XG4gICB9XG5cbiAgIGVuc3VyZUFwcG9pbnRtZW50VmlzaWJsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbnN1cmVBcHBvaW50bWVudFZpc2libGUnLCBpZCk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaXRlbTogYW55LCByZXNvdXJjZUlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbnN1cmVWaXNpYmxlJywgaXRlbSwgcmVzb3VyY2VJZCk7XG4gICB9XG5cbiAgIGV4cG9ydERhdGEoZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2V4cG9ydERhdGEnLCBmb3JtYXQpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldEFwcG9pbnRtZW50UHJvcGVydHkoYXBwb2ludG1lbnRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldEFwcG9pbnRtZW50UHJvcGVydHknLCBhcHBvaW50bWVudElkLCBuYW1lKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0aW9uKCk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJHZXRTZWxlY3Rpb24ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldFNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBnZXRBcHBvaW50bWVudHMoKTogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcz4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldEFwcG9pbnRtZW50cycpO1xuICAgfVxuXG4gICBnZXREYXRhQXBwb2ludG1lbnRzKCk6IEFycmF5PGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldERhdGFBcHBvaW50bWVudHMnKTtcbiAgIH1cblxuICAgaGlkZUFwcG9pbnRtZW50c0J5UmVzb3VyY2UocmVzb3VyY2VzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignaGlkZUFwcG9pbnRtZW50c0J5UmVzb3VyY2UnLCByZXNvdXJjZXNJZCk7XG4gICB9XG5cbiAgIG9wZW5NZW51KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ29wZW5NZW51JywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgb3BlbkRpYWxvZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdvcGVuRGlhbG9nJywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgc2VsZWN0QXBwb2ludG1lbnQoYXBwb2ludG1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZWxlY3RBcHBvaW50bWVudCcsIGFwcG9pbnRtZW50SWQpO1xuICAgfVxuXG4gICBzZXRBcHBvaW50bWVudFByb3BlcnR5KGFwcG9pbnRtZW50SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZXRBcHBvaW50bWVudFByb3BlcnR5JywgYXBwb2ludG1lbnRJZCwgbmFtZSwgdmFsdWUpO1xuICAgfVxuXG4gICBzZWxlY3RDZWxsKGRhdGU6IGFueSwgYWxsZGF5OiBib29sZWFuLCByZXNvdXJjZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NlbGVjdENlbGwnLCBkYXRlLCBhbGxkYXksIHJlc291cmNlSWQpO1xuICAgfVxuXG4gICBzaG93QXBwb2ludG1lbnRzQnlSZXNvdXJjZShyZXNvdXJjZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dBcHBvaW50bWVudHNCeVJlc291cmNlJywgcmVzb3VyY2VJZCk7XG4gICB9XG5cbiAgIHNjcm9sbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsV2lkdGgnKTtcbiAgIH1cblxuICAgc2Nyb2xsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsSGVpZ2h0Jyk7XG4gICB9XG5cbiAgIHNjcm9sbExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxMZWZ0JywgbGVmdCk7XG4gICB9XG5cbiAgIHNjcm9sbFRvcCh0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsVG9wJywgdG9wKTtcbiAgIH1cblxuXG4gICAvLyBqcXhTY2hlZHVsZXJDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudERvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudEFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db250ZXh0TWVudUl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXRSZWN1cnJlbmNlRGlhbG9nT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdERpYWxvZ09wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnRDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50Q2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50Q2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50Q2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnREb3VibGVDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnREb3VibGVDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudERlbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnREZWxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnRBZGQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50QWRkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JpbmRpbmdDb21wbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmluZGluZ0NvbXBsZXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbENsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxEb3VibGVDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbERvdWJsZUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51T3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29udGV4dE1lbnVPcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51Q2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29udGV4dE1lbnVJdGVtQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51SXRlbUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51Q3JlYXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db250ZXh0TWVudUNyZWF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkYXRlQ2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EYXRlQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXRSZWN1cnJlbmNlRGlhbG9nT3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdFJlY3VycmVuY2VEaWFsb2dPcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdERpYWxvZ0NyZWF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdERpYWxvZ0NyZWF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0RGlhbG9nT3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdERpYWxvZ09wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdERpYWxvZ0Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0RGlhbG9nQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndmlld0NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmlld0NoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4U2NoZWR1bGVyQ29tcG9uZW50XG4iXX0=