import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxdate';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcolorpicker';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxinput';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxscheduler';
import '../jqwidgets/jqxscheduler.api';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
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
jqxSchedulerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('appointmentOpacity'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrAppointmentOpacity", void 0);
__decorate([
    Input('appointmentsMinHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrAppointmentsMinHeight", void 0);
__decorate([
    Input('appointmentDataFields'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrAppointmentDataFields", void 0);
__decorate([
    Input('appointmentTooltips'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrAppointmentTooltips", void 0);
__decorate([
    Input('columnsHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrColumnsHeight", void 0);
__decorate([
    Input('contextMenu'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrContextMenu", void 0);
__decorate([
    Input('contextMenuOpen'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuOpen", void 0);
__decorate([
    Input('contextMenuClose'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuClose", void 0);
__decorate([
    Input('contextMenuItemClick'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuItemClick", void 0);
__decorate([
    Input('contextMenuCreate'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrContextMenuCreate", void 0);
__decorate([
    Input('changedAppointments'),
    __metadata("design:type", Array)
], jqxSchedulerComponent.prototype, "attrChangedAppointments", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('date'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrDate", void 0);
__decorate([
    Input('dayNameFormat'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrDayNameFormat", void 0);
__decorate([
    Input('enableHover'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrEnableHover", void 0);
__decorate([
    Input('editDialog'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrEditDialog", void 0);
__decorate([
    Input('editDialogDateTimeFormatString'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrEditDialogDateTimeFormatString", void 0);
__decorate([
    Input('editDialogDateFormatString'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrEditDialogDateFormatString", void 0);
__decorate([
    Input('editDialogOpen'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogOpen", void 0);
__decorate([
    Input('editDialogCreate'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogCreate", void 0);
__decorate([
    Input('editDialogKeyDown'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogKeyDown", void 0);
__decorate([
    Input('editDialogClose'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrEditDialogClose", void 0);
__decorate([
    Input('exportSettings'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrExportSettings", void 0);
__decorate([
    Input('legendPosition'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrLegendPosition", void 0);
__decorate([
    Input('legendHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrLegendHeight", void 0);
__decorate([
    Input('localization'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrLocalization", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrMax", void 0);
__decorate([
    Input('ready'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrReady", void 0);
__decorate([
    Input('renderAppointment'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRenderAppointment", void 0);
__decorate([
    Input('rendering'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRendering", void 0);
__decorate([
    Input('rendered'),
    __metadata("design:type", Function)
], jqxSchedulerComponent.prototype, "attrRendered", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('resources'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrResources", void 0);
__decorate([
    Input('rowsHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrRowsHeight", void 0);
__decorate([
    Input('showToolbar'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrShowToolbar", void 0);
__decorate([
    Input('showLegend'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "attrShowLegend", void 0);
__decorate([
    Input('scrollBarSize'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrScrollBarSize", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrSource", void 0);
__decorate([
    Input('statuses'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrStatuses", void 0);
__decorate([
    Input('touchRowsHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchRowsHeight", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('touchAppointmentsMinHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchAppointmentsMinHeight", void 0);
__decorate([
    Input('touchScrollBarSize'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrTouchScrollBarSize", void 0);
__decorate([
    Input('timeZone'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTimeZone", void 0);
__decorate([
    Input('touchDayNameFormat'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrTouchDayNameFormat", void 0);
__decorate([
    Input('toolBarRangeFormat'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrToolBarRangeFormat", void 0);
__decorate([
    Input('toolBarRangeFormatAbbr'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrToolBarRangeFormatAbbr", void 0);
__decorate([
    Input('toolbarHeight'),
    __metadata("design:type", Number)
], jqxSchedulerComponent.prototype, "attrToolbarHeight", void 0);
__decorate([
    Input('views'),
    __metadata("design:type", Array)
], jqxSchedulerComponent.prototype, "attrViews", void 0);
__decorate([
    Input('view'),
    __metadata("design:type", String)
], jqxSchedulerComponent.prototype, "attrView", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxSchedulerComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentDoubleClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentDelete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onAppointmentAdd", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onBindingComplete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onCellClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onCellDoubleClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuItemClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onContextMenuCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onDateChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditRecurrenceDialogOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditRecurrenceDialogClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onEditDialogClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSchedulerComponent.prototype, "onViewChange", void 0);
jqxSchedulerComponent = __decorate([
    Component({
        selector: 'jqxScheduler',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxSchedulerComponent);

let jqxSchedulerModule = class jqxSchedulerModule {
};
jqxSchedulerModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxSchedulerComponent],
        exports: [jqxSchedulerComponent]
    })
], jqxSchedulerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxSchedulerComponent, jqxSchedulerModule };
