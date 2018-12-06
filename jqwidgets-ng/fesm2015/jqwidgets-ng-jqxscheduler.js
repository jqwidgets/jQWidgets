import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets/jqxdata.export';
import * as jqxdate from '../../jqwidgets/jqxdate';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxcolorpicker from '../../jqwidgets/jqxcolorpicker';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxscheduler from '../../jqwidgets/jqxscheduler';
import * as jqxschedulerapi from '../../jqwidgets/jqxscheduler.api';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxSchedulerComponent {
    /**
     * @param {?} containerElement
     */
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScheduler', options);
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
        this.host.jqxScheduler('setOptions', options);
    }
    // jqxSchedulerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    appointmentOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentOpacity', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentOpacity');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    appointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentsMinHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    appointmentDataFields(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentDataFields', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentDataFields');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    appointmentTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentTooltips', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentTooltips');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('columnsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('columnsHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenu', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenu');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenuOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuOpen', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenuClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuClose', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuClose');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenuItemClick(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuItemClick', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuItemClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    contextMenuCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuCreate', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuCreate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    changedAppointments(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('changedAppointments', arg);
        }
        else {
            return this.host.jqxScheduler('changedAppointments');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('disabled', arg);
        }
        else {
            return this.host.jqxScheduler('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    date(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('date', arg);
        }
        else {
            return this.host.jqxScheduler('date');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('dayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('dayNameFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('enableHover', arg);
        }
        else {
            return this.host.jqxScheduler('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialog(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialog', arg);
        }
        else {
            return this.host.jqxScheduler('editDialog');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogDateTimeFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateTimeFormatString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogDateFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateFormatString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogOpen', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogOpen');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogCreate', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogCreate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogKeyDown(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogKeyDown', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogKeyDown');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editDialogClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogClose', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogClose');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    exportSettings(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('exportSettings', arg);
        }
        else {
            return this.host.jqxScheduler('exportSettings');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('height', arg);
        }
        else {
            return this.host.jqxScheduler('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendPosition', arg);
        }
        else {
            return this.host.jqxScheduler('legendPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendHeight', arg);
        }
        else {
            return this.host.jqxScheduler('legendHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('localization', arg);
        }
        else {
            return this.host.jqxScheduler('localization');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('min', arg);
        }
        else {
            return this.host.jqxScheduler('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('max', arg);
        }
        else {
            return this.host.jqxScheduler('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('ready', arg);
        }
        else {
            return this.host.jqxScheduler('ready');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderAppointment(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('renderAppointment', arg);
        }
        else {
            return this.host.jqxScheduler('renderAppointment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendering(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendering', arg);
        }
        else {
            return this.host.jqxScheduler('rendering');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rendered(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendered', arg);
        }
        else {
            return this.host.jqxScheduler('rendered');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rtl', arg);
        }
        else {
            return this.host.jqxScheduler('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('resources', arg);
        }
        else {
            return this.host.jqxScheduler('resources');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('rowsHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showToolbar(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showToolbar', arg);
        }
        else {
            return this.host.jqxScheduler('showToolbar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showLegend', arg);
        }
        else {
            return this.host.jqxScheduler('showLegend');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('scrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('scrollBarSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('source', arg);
        }
        else {
            return this.host.jqxScheduler('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    statuses(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('statuses', arg);
        }
        else {
            return this.host.jqxScheduler('statuses');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    touchRowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchRowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchRowsHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('theme', arg);
        }
        else {
            return this.host.jqxScheduler('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    touchAppointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchAppointmentsMinHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    touchScrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchScrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('touchScrollBarSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    timeZone(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('timeZone', arg);
        }
        else {
            return this.host.jqxScheduler('timeZone');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    touchDayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchDayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('touchDayNameFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolBarRangeFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormat', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolBarRangeFormatAbbr(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormatAbbr');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolbarHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolbarHeight', arg);
        }
        else {
            return this.host.jqxScheduler('toolbarHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    views(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('views', arg);
        }
        else {
            return this.host.jqxScheduler('views');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    view(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('view', arg);
        }
        else {
            return this.host.jqxScheduler('view');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('width', arg);
        }
        else {
            return this.host.jqxScheduler('width');
        }
    }
    // jqxSchedulerComponent functions
    /**
     * @param {?} item
     * @return {?}
     */
    addAppointment(item) {
        this.host.jqxScheduler('addAppointment', item);
    }
    /**
     * @return {?}
     */
    beginAppointmentsUpdate() {
        this.host.jqxScheduler('beginAppointmentsUpdate');
    }
    /**
     * @return {?}
     */
    clearAppointmentsSelection() {
        this.host.jqxScheduler('clearAppointmentsSelection');
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.host.jqxScheduler('clearSelection');
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.host.jqxScheduler('closeMenu');
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.host.jqxScheduler('closeDialog');
    }
    /**
     * @param {?} appointmenId
     * @return {?}
     */
    deleteAppointment(appointmenId) {
        this.host.jqxScheduler('deleteAppointment', appointmenId);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxScheduler('destroy');
    }
    /**
     * @return {?}
     */
    endAppointmentsUpdate() {
        this.host.jqxScheduler('endAppointmentsUpdate');
    }
    /**
     * @param {?} id
     * @return {?}
     */
    ensureAppointmentVisible(id) {
        this.host.jqxScheduler('ensureAppointmentVisible', id);
    }
    /**
     * @param {?} item
     * @param {?} resourceId
     * @return {?}
     */
    ensureVisible(item, resourceId) {
        this.host.jqxScheduler('ensureVisible', item, resourceId);
    }
    /**
     * @param {?} format
     * @return {?}
     */
    exportData(format) {
        return this.host.jqxScheduler('exportData', format);
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxScheduler('focus');
    }
    /**
     * @param {?} appointmentId
     * @param {?} name
     * @return {?}
     */
    getAppointmentProperty(appointmentId, name) {
        return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
    }
    /**
     * @return {?}
     */
    getSelection() {
        return this.host.jqxScheduler('getSelection');
    }
    /**
     * @return {?}
     */
    getAppointments() {
        return this.host.jqxScheduler('getAppointments');
    }
    /**
     * @return {?}
     */
    getDataAppointments() {
        return this.host.jqxScheduler('getDataAppointments');
    }
    /**
     * @param {?} resourcesId
     * @return {?}
     */
    hideAppointmentsByResource(resourcesId) {
        this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    openMenu(left, top) {
        this.host.jqxScheduler('openMenu', left, top);
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    openDialog(left, top) {
        this.host.jqxScheduler('openDialog', left, top);
    }
    /**
     * @param {?} appointmentId
     * @return {?}
     */
    selectAppointment(appointmentId) {
        this.host.jqxScheduler('selectAppointment', appointmentId);
    }
    /**
     * @param {?} appointmentId
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setAppointmentProperty(appointmentId, name, value) {
        this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    }
    /**
     * @param {?} date
     * @param {?} allday
     * @param {?} resourceId
     * @return {?}
     */
    selectCell(date, allday, resourceId) {
        this.host.jqxScheduler('selectCell', date, allday, resourceId);
    }
    /**
     * @param {?} resourceId
     * @return {?}
     */
    showAppointmentsByResource(resourceId) {
        this.host.jqxScheduler('showAppointmentsByResource', resourceId);
    }
    /**
     * @return {?}
     */
    scrollWidth() {
        return this.host.jqxScheduler('scrollWidth');
    }
    /**
     * @return {?}
     */
    scrollHeight() {
        return this.host.jqxScheduler('scrollHeight');
    }
    /**
     * @param {?} left
     * @return {?}
     */
    scrollLeft(left) {
        this.host.jqxScheduler('scrollLeft', left);
    }
    /**
     * @param {?} top
     * @return {?}
     */
    scrollTop(top) {
        this.host.jqxScheduler('scrollTop', top);
    }
    /**
     * @return {?}
     */
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
} //jqxSchedulerComponent
jqxSchedulerComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxScheduler',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxSchedulerComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxSchedulerComponent.propDecorators = {
    attrAppointmentOpacity: [{ type: Input, args: ['appointmentOpacity',] }],
    attrAppointmentsMinHeight: [{ type: Input, args: ['appointmentsMinHeight',] }],
    attrAppointmentDataFields: [{ type: Input, args: ['appointmentDataFields',] }],
    attrAppointmentTooltips: [{ type: Input, args: ['appointmentTooltips',] }],
    attrColumnsHeight: [{ type: Input, args: ['columnsHeight',] }],
    attrContextMenu: [{ type: Input, args: ['contextMenu',] }],
    attrContextMenuOpen: [{ type: Input, args: ['contextMenuOpen',] }],
    attrContextMenuClose: [{ type: Input, args: ['contextMenuClose',] }],
    attrContextMenuItemClick: [{ type: Input, args: ['contextMenuItemClick',] }],
    attrContextMenuCreate: [{ type: Input, args: ['contextMenuCreate',] }],
    attrChangedAppointments: [{ type: Input, args: ['changedAppointments',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDate: [{ type: Input, args: ['date',] }],
    attrDayNameFormat: [{ type: Input, args: ['dayNameFormat',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrEditDialog: [{ type: Input, args: ['editDialog',] }],
    attrEditDialogDateTimeFormatString: [{ type: Input, args: ['editDialogDateTimeFormatString',] }],
    attrEditDialogDateFormatString: [{ type: Input, args: ['editDialogDateFormatString',] }],
    attrEditDialogOpen: [{ type: Input, args: ['editDialogOpen',] }],
    attrEditDialogCreate: [{ type: Input, args: ['editDialogCreate',] }],
    attrEditDialogKeyDown: [{ type: Input, args: ['editDialogKeyDown',] }],
    attrEditDialogClose: [{ type: Input, args: ['editDialogClose',] }],
    attrExportSettings: [{ type: Input, args: ['exportSettings',] }],
    attrLegendPosition: [{ type: Input, args: ['legendPosition',] }],
    attrLegendHeight: [{ type: Input, args: ['legendHeight',] }],
    attrLocalization: [{ type: Input, args: ['localization',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrReady: [{ type: Input, args: ['ready',] }],
    attrRenderAppointment: [{ type: Input, args: ['renderAppointment',] }],
    attrRendering: [{ type: Input, args: ['rendering',] }],
    attrRendered: [{ type: Input, args: ['rendered',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrResources: [{ type: Input, args: ['resources',] }],
    attrRowsHeight: [{ type: Input, args: ['rowsHeight',] }],
    attrShowToolbar: [{ type: Input, args: ['showToolbar',] }],
    attrShowLegend: [{ type: Input, args: ['showLegend',] }],
    attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrStatuses: [{ type: Input, args: ['statuses',] }],
    attrTouchRowsHeight: [{ type: Input, args: ['touchRowsHeight',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTouchAppointmentsMinHeight: [{ type: Input, args: ['touchAppointmentsMinHeight',] }],
    attrTouchScrollBarSize: [{ type: Input, args: ['touchScrollBarSize',] }],
    attrTimeZone: [{ type: Input, args: ['timeZone',] }],
    attrTouchDayNameFormat: [{ type: Input, args: ['touchDayNameFormat',] }],
    attrToolBarRangeFormat: [{ type: Input, args: ['toolBarRangeFormat',] }],
    attrToolBarRangeFormatAbbr: [{ type: Input, args: ['toolBarRangeFormatAbbr',] }],
    attrToolbarHeight: [{ type: Input, args: ['toolbarHeight',] }],
    attrViews: [{ type: Input, args: ['views',] }],
    attrView: [{ type: Input, args: ['view',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onAppointmentChange: [{ type: Output }],
    onAppointmentClick: [{ type: Output }],
    onAppointmentDoubleClick: [{ type: Output }],
    onAppointmentDelete: [{ type: Output }],
    onAppointmentAdd: [{ type: Output }],
    onBindingComplete: [{ type: Output }],
    onCellClick: [{ type: Output }],
    onCellDoubleClick: [{ type: Output }],
    onContextMenuOpen: [{ type: Output }],
    onContextMenuClose: [{ type: Output }],
    onContextMenuItemClick: [{ type: Output }],
    onContextMenuCreate: [{ type: Output }],
    onDateChange: [{ type: Output }],
    onEditRecurrenceDialogOpen: [{ type: Output }],
    onEditRecurrenceDialogClose: [{ type: Output }],
    onEditDialogCreate: [{ type: Output }],
    onEditDialogOpen: [{ type: Output }],
    onEditDialogClose: [{ type: Output }],
    onViewChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxSchedulerModule {
}
jqxSchedulerModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxSchedulerComponent],
                exports: [jqxSchedulerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxSchedulerComponent, jqxSchedulerModule };

