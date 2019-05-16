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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxSchedulerComponent {
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
     * @param {?=} resourceId
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
        this.host.on('appointmentChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAppointmentChange.emit(eventData); }));
        this.host.on('appointmentClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAppointmentClick.emit(eventData); }));
        this.host.on('appointmentDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAppointmentDoubleClick.emit(eventData); }));
        this.host.on('appointmentDelete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAppointmentDelete.emit(eventData); }));
        this.host.on('appointmentAdd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onAppointmentAdd.emit(eventData); }));
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingComplete.emit(eventData); }));
        this.host.on('cellClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellClick.emit(eventData); }));
        this.host.on('cellDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellDoubleClick.emit(eventData); }));
        this.host.on('contextMenuOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onContextMenuOpen.emit(eventData); }));
        this.host.on('contextMenuClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onContextMenuClose.emit(eventData); }));
        this.host.on('contextMenuItemClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onContextMenuItemClick.emit(eventData); }));
        this.host.on('contextMenuCreate', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onContextMenuCreate.emit(eventData); }));
        this.host.on('dateChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onDateChange.emit(eventData); }));
        this.host.on('editRecurrenceDialogOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onEditRecurrenceDialogOpen.emit(eventData); }));
        this.host.on('editRecurrenceDialogClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onEditRecurrenceDialogClose.emit(eventData); }));
        this.host.on('editDialogCreate', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onEditDialogCreate.emit(eventData); }));
        this.host.on('editDialogOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onEditDialogOpen.emit(eventData); }));
        this.host.on('editDialogClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onEditDialogClose.emit(eventData); }));
        this.host.on('viewChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onViewChange.emit(eventData); }));
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
if (false) {
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrAppointmentOpacity;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrAppointmentsMinHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrAppointmentDataFields;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrAppointmentTooltips;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrColumnsHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrContextMenu;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrContextMenuOpen;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrContextMenuClose;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrContextMenuItemClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrContextMenuCreate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrChangedAppointments;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrDate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrDayNameFormat;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialog;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogDateTimeFormatString;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogDateFormatString;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogOpen;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogCreate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogKeyDown;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrEditDialogClose;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrExportSettings;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrLegendPosition;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrLegendHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrMin;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrMax;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrReady;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrRenderAppointment;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrRendering;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrRendered;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrRtl;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrResources;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrRowsHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrShowToolbar;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrShowLegend;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrSource;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrStatuses;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTouchRowsHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTheme;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTouchAppointmentsMinHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTouchScrollBarSize;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTimeZone;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrTouchDayNameFormat;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrToolBarRangeFormat;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrToolBarRangeFormatAbbr;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrToolbarHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrViews;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrView;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrWidth;
    /** @type {?} */
    jqxSchedulerComponent.prototype.attrHeight;
    /** @type {?} */
    jqxSchedulerComponent.prototype.autoCreate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.properties;
    /** @type {?} */
    jqxSchedulerComponent.prototype.host;
    /** @type {?} */
    jqxSchedulerComponent.prototype.elementRef;
    /** @type {?} */
    jqxSchedulerComponent.prototype.widgetObject;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onAppointmentChange;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onAppointmentClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onAppointmentDoubleClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onAppointmentDelete;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onAppointmentAdd;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onCellClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onCellDoubleClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onContextMenuOpen;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onContextMenuClose;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onContextMenuItemClick;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onContextMenuCreate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onDateChange;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onEditRecurrenceDialogOpen;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onEditRecurrenceDialogClose;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onEditDialogCreate;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onEditDialogOpen;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onEditDialogClose;
    /** @type {?} */
    jqxSchedulerComponent.prototype.onViewChange;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzY2hlZHVsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4c2NoZWR1bGVyLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhzY2hlZHVsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUErRC9CLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBQyxtQkFBbUIsRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGdDQUFnQyxFQUFDLDRCQUE0QixFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLHdCQUF3QixFQUFDLGVBQWUsRUFBQyxPQUFPLEVB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MkNBQWlEOztJQUVqRCwyQ0FBbzJCOztJQUNwMkIscUNBQVU7O0lBQ1YsMkNBQXVCOztJQUN2Qiw2Q0FBc0M7O0lBNG9CdEMsb0RBQW1EOztJQUNuRCxtREFBa0Q7O0lBQ2xELHlEQUF3RDs7SUFDeEQsb0RBQW1EOztJQUNuRCxpREFBZ0Q7O0lBQ2hELGtEQUFpRDs7SUFDakQsNENBQTJDOztJQUMzQyxrREFBaUQ7O0lBQ2pELGtEQUFpRDs7SUFDakQsbURBQWtEOztJQUNsRCx1REFBc0Q7O0lBQ3RELG9EQUFtRDs7SUFDbkQsNkNBQTRDOztJQUM1QywyREFBMEQ7O0lBQzFELDREQUEyRDs7SUFDM0QsbURBQWtEOztJQUNsRCxpREFBZ0Q7O0lBQ2hELGtEQUFpRDs7SUFDakQsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhTY2hlZHVsZXInLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFNjaGVkdWxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhcHBvaW50bWVudE9wYWNpdHknKSBhdHRyQXBwb2ludG1lbnRPcGFjaXR5OiBudW1iZXI7XG4gICBASW5wdXQoJ2FwcG9pbnRtZW50c01pbkhlaWdodCcpIGF0dHJBcHBvaW50bWVudHNNaW5IZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXBwb2ludG1lbnREYXRhRmllbGRzJykgYXR0ckFwcG9pbnRtZW50RGF0YUZpZWxkczoganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcztcbiAgIEBJbnB1dCgnYXBwb2ludG1lbnRUb29sdGlwcycpIGF0dHJBcHBvaW50bWVudFRvb2x0aXBzOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zSGVpZ2h0JykgYXR0ckNvbHVtbnNIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnUnKSBhdHRyQ29udGV4dE1lbnU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbnRleHRNZW51T3BlbicpIGF0dHJDb250ZXh0TWVudU9wZW46IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnZXZlbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVDbG9zZScpIGF0dHJDb250ZXh0TWVudUNsb3NlOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2V2ZW50J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2NvbnRleHRNZW51SXRlbUNsaWNrJykgYXR0ckNvbnRleHRNZW51SXRlbUNsaWNrOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2V2ZW50J10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbnRleHRNZW51Q3JlYXRlJykgYXR0ckNvbnRleHRNZW51Q3JlYXRlOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydtZW51J10sIHNldHRpbmdzOiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ3NldHRpbmdzJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2NoYW5nZWRBcHBvaW50bWVudHMnKSBhdHRyQ2hhbmdlZEFwcG9pbnRtZW50czogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckNoYW5nZWRBcHBvaW50bWVudHM+O1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGF0ZScpIGF0dHJEYXRlOiBhbnk7XG4gICBASW5wdXQoJ2RheU5hbWVGb3JtYXQnKSBhdHRyRGF5TmFtZUZvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCdlbmFibGVIb3ZlcicpIGF0dHJFbmFibGVIb3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdERpYWxvZycpIGF0dHJFZGl0RGlhbG9nOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcnKSBhdHRyRWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2VkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nJykgYXR0ckVkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2VkaXREaWFsb2dPcGVuJykgYXR0ckVkaXREaWFsb2dPcGVuOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0NyZWF0ZScpIGF0dHJFZGl0RGlhbG9nQ3JlYXRlOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0tleURvd24nKSBhdHRyRWRpdERpYWxvZ0tleURvd246IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2VkaXRBcHBvaW50bWVudCddLCBldmVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZXZlbnQnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0Nsb3NlJykgYXR0ckVkaXREaWFsb2dDbG9zZTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2V4cG9ydFNldHRpbmdzJykgYXR0ckV4cG9ydFNldHRpbmdzOiBqcXdpZGdldHMuU2NoZWR1bGVyRXhwb3J0U2V0dGluZ3M7XG4gICBASW5wdXQoJ2xlZ2VuZFBvc2l0aW9uJykgYXR0ckxlZ2VuZFBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2xlZ2VuZEhlaWdodCcpIGF0dHJMZWdlbmRIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnbG9jYWxpemF0aW9uJykgYXR0ckxvY2FsaXphdGlvbjogYW55O1xuICAgQElucHV0KCdtaW4nKSBhdHRyTWluOiBhbnk7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IGFueTtcbiAgIEBJbnB1dCgncmVhZHknKSBhdHRyUmVhZHk6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlckFwcG9pbnRtZW50JykgYXR0clJlbmRlckFwcG9pbnRtZW50OiAoZGF0YToganF3aWRnZXRzLlNjaGVkdWxlclJlbmRlckFwcG9pbnRtZW50WydkYXRhJ10pID0+IGFueTtcbiAgIEBJbnB1dCgncmVuZGVyaW5nJykgYXR0clJlbmRlcmluZzogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyZWQnKSBhdHRyUmVuZGVyZWQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jlc291cmNlcycpIGF0dHJSZXNvdXJjZXM6IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZXNvdXJjZXM7XG4gICBASW5wdXQoJ3Jvd3NIZWlnaHQnKSBhdHRyUm93c0hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdzaG93VG9vbGJhcicpIGF0dHJTaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0xlZ2VuZCcpIGF0dHJTaG93TGVnZW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzY3JvbGxCYXJTaXplJykgYXR0clNjcm9sbEJhclNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCdzdGF0dXNlcycpIGF0dHJTdGF0dXNlczoganF3aWRnZXRzLlNjaGVkdWxlclN0YXR1c2VzO1xuICAgQElucHV0KCd0b3VjaFJvd3NIZWlnaHQnKSBhdHRyVG91Y2hSb3dzSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0JykgYXR0clRvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3RvdWNoU2Nyb2xsQmFyU2l6ZScpIGF0dHJUb3VjaFNjcm9sbEJhclNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgndGltZVpvbmUnKSBhdHRyVGltZVpvbmU6IHN0cmluZztcbiAgIEBJbnB1dCgndG91Y2hEYXlOYW1lRm9ybWF0JykgYXR0clRvdWNoRGF5TmFtZUZvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCd0b29sQmFyUmFuZ2VGb3JtYXQnKSBhdHRyVG9vbEJhclJhbmdlRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xCYXJSYW5nZUZvcm1hdEFiYnInKSBhdHRyVG9vbEJhclJhbmdlRm9ybWF0QWJicjogc3RyaW5nO1xuICAgQElucHV0KCd0b29sYmFySGVpZ2h0JykgYXR0clRvb2xiYXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndmlld3MnKSBhdHRyVmlld3M6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ3ZpZXcnKSBhdHRyVmlldzogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FwcG9pbnRtZW50T3BhY2l0eScsJ2FwcG9pbnRtZW50c01pbkhlaWdodCcsJ2FwcG9pbnRtZW50RGF0YUZpZWxkcycsJ2FwcG9pbnRtZW50VG9vbHRpcHMnLCdjb2x1bW5zSGVpZ2h0JywnY29udGV4dE1lbnUnLCdjb250ZXh0TWVudU9wZW4nLCdjb250ZXh0TWVudUNsb3NlJywnY29udGV4dE1lbnVJdGVtQ2xpY2snLCdjb250ZXh0TWVudUNyZWF0ZScsJ2NoYW5nZWRBcHBvaW50bWVudHMnLCdkaXNhYmxlZCcsJ2RhdGUnLCdkYXlOYW1lRm9ybWF0JywnZW5hYmxlSG92ZXInLCdlZGl0RGlhbG9nJywnZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nJywnZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnLCdlZGl0RGlhbG9nT3BlbicsJ2VkaXREaWFsb2dDcmVhdGUnLCdlZGl0RGlhbG9nS2V5RG93bicsJ2VkaXREaWFsb2dDbG9zZScsJ2V4cG9ydFNldHRpbmdzJywnaGVpZ2h0JywnbGVnZW5kUG9zaXRpb24nLCdsZWdlbmRIZWlnaHQnLCdsb2NhbGl6YXRpb24nLCdtaW4nLCdtYXgnLCdyZWFkeScsJ3JlbmRlckFwcG9pbnRtZW50JywncmVuZGVyaW5nJywncmVuZGVyZWQnLCdydGwnLCdyZXNvdXJjZXMnLCdyb3dzSGVpZ2h0Jywnc2hvd1Rvb2xiYXInLCdzaG93TGVnZW5kJywnc2Nyb2xsQmFyU2l6ZScsJ3NvdXJjZScsJ3N0YXR1c2VzJywndG91Y2hSb3dzSGVpZ2h0JywndGhlbWUnLCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcsJ3RvdWNoU2Nyb2xsQmFyU2l6ZScsJ3RpbWVab25lJywndG91Y2hEYXlOYW1lRm9ybWF0JywndG9vbEJhclJhbmdlRm9ybWF0JywndG9vbEJhclJhbmdlRm9ybWF0QWJicicsJ3Rvb2xiYXJIZWlnaHQnLCd2aWV3cycsJ3ZpZXcnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhTY2hlZHVsZXI7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFNjaGVkdWxlcicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4U2NoZWR1bGVyQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFwcG9pbnRtZW50T3BhY2l0eShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRPcGFjaXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50T3BhY2l0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcHBvaW50bWVudHNNaW5IZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50c01pbkhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudHNNaW5IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXBwb2ludG1lbnREYXRhRmllbGRzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHMpOiBqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50RGF0YUZpZWxkcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudERhdGFGaWVsZHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXBwb2ludG1lbnRUb29sdGlwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudFRvb2x0aXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50VG9vbHRpcHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29sdW1uc0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb2x1bW5zSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51T3Blbihhcmc/OiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2V2ZW50J10pID0+IHZvaWQpOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2V2ZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVPcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51T3BlbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudUNsb3NlKGFyZz86IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnZXZlbnQnXSkgPT4gdm9pZCk6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnZXZlbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUNsb3NlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q2xvc2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVJdGVtQ2xpY2soYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydldmVudCddKSA9PiBib29sZWFuKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydldmVudCddKSA9PiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51SXRlbUNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51Q3JlYXRlKGFyZz86IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ21lbnUnXSwgc2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnc2V0dGluZ3MnXSkgPT4gdm9pZCk6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ21lbnUnXSwgc2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnc2V0dGluZ3MnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUNyZWF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUNyZWF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGFuZ2VkQXBwb2ludG1lbnRzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5TY2hlZHVsZXJDaGFuZ2VkQXBwb2ludG1lbnRzPik6IEFycmF5PGpxd2lkZ2V0cy5TY2hlZHVsZXJDaGFuZ2VkQXBwb2ludG1lbnRzPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjaGFuZ2VkQXBwb2ludG1lbnRzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NoYW5nZWRBcHBvaW50bWVudHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGF0ZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRheU5hbWVGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RheU5hbWVGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGF5TmFtZUZvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dPcGVuKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkKTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ09wZW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ09wZW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ0NyZWF0ZShhcmc/OiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCk6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dDcmVhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0NyZWF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nS2V5RG93bihhcmc/OiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydlZGl0QXBwb2ludG1lbnQnXSwgZXZlbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2V2ZW50J10pID0+IGJvb2xlYW4pOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydlZGl0QXBwb2ludG1lbnQnXSwgZXZlbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2V2ZW50J10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0tleURvd24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0tleURvd24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ0Nsb3NlKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkKTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0Nsb3NlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dDbG9zZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBleHBvcnRTZXR0aW5ncyhhcmc/OiBqcXdpZGdldHMuU2NoZWR1bGVyRXhwb3J0U2V0dGluZ3MpOiBqcXdpZGdldHMuU2NoZWR1bGVyRXhwb3J0U2V0dGluZ3Mge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZXhwb3J0U2V0dGluZ3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZXhwb3J0U2V0dGluZ3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZFBvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsZWdlbmRQb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsZWdlbmRQb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZEhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsZWdlbmRIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsb2NhbGl6YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ21heCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVhZHkoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVhZHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVhZHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyQXBwb2ludG1lbnQoYXJnPzogKGRhdGE6IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZW5kZXJBcHBvaW50bWVudFsnZGF0YSddKSA9PiBhbnkpOiAoZGF0YToganF3aWRnZXRzLlNjaGVkdWxlclJlbmRlckFwcG9pbnRtZW50WydkYXRhJ10pID0+IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJBcHBvaW50bWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJBcHBvaW50bWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJpbmcoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlZChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNvdXJjZXMoYXJnPzoganF3aWRnZXRzLlNjaGVkdWxlclJlc291cmNlcyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZXNvdXJjZXMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVzb3VyY2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Jlc291cmNlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dzSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyb3dzSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Jvd3NIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1Rvb2xiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd1Rvb2xiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd1Rvb2xiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0xlZ2VuZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93TGVnZW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dMZWdlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsQmFyU2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsQmFyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxCYXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGF0dXNlcyhhcmc/OiBqcXdpZGdldHMuU2NoZWR1bGVyU3RhdHVzZXMpOiBqcXdpZGdldHMuU2NoZWR1bGVyU3RhdHVzZXMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc3RhdHVzZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc3RhdHVzZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG91Y2hSb3dzSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFJvd3NIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hSb3dzSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG91Y2hTY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFNjcm9sbEJhclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hTY3JvbGxCYXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpbWVab25lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0aW1lWm9uZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0aW1lWm9uZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaERheU5hbWVGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoRGF5TmFtZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaERheU5hbWVGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbEJhclJhbmdlRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbEJhclJhbmdlRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xCYXJSYW5nZUZvcm1hdEFiYnIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xCYXJSYW5nZUZvcm1hdEFiYnInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbEJhclJhbmdlRm9ybWF0QWJicicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sYmFySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sYmFySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xiYXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmlld3MoYXJnPzogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndmlld3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndmlld3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmlldyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndmlldycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFNjaGVkdWxlckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZEFwcG9pbnRtZW50KGl0ZW06IGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHMpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FkZEFwcG9pbnRtZW50JywgaXRlbSk7XG4gICB9XG5cbiAgIGJlZ2luQXBwb2ludG1lbnRzVXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYmVnaW5BcHBvaW50bWVudHNVcGRhdGUnKTtcbiAgIH1cblxuICAgY2xlYXJBcHBvaW50bWVudHNTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjbGVhckFwcG9pbnRtZW50c1NlbGVjdGlvbicpO1xuICAgfVxuXG4gICBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NsZWFyU2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Nsb3NlTWVudScpO1xuICAgfVxuXG4gICBjbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Nsb3NlRGlhbG9nJyk7XG4gICB9XG5cbiAgIGRlbGV0ZUFwcG9pbnRtZW50KGFwcG9pbnRtZW5JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkZWxldGVBcHBvaW50bWVudCcsIGFwcG9pbnRtZW5JZCk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGVuZEFwcG9pbnRtZW50c1VwZGF0ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VuZEFwcG9pbnRtZW50c1VwZGF0ZScpO1xuICAgfVxuXG4gICBlbnN1cmVBcHBvaW50bWVudFZpc2libGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5zdXJlQXBwb2ludG1lbnRWaXNpYmxlJywgaWQpO1xuICAgfVxuXG4gICBlbnN1cmVWaXNpYmxlKGl0ZW06IGFueSwgcmVzb3VyY2VJZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5zdXJlVmlzaWJsZScsIGl0ZW0sIHJlc291cmNlSWQpO1xuICAgfVxuXG4gICBleHBvcnREYXRhKGZvcm1hdDogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdleHBvcnREYXRhJywgZm9ybWF0KTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRBcHBvaW50bWVudFByb3BlcnR5KGFwcG9pbnRtZW50SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdnZXRBcHBvaW50bWVudFByb3BlcnR5JywgYXBwb2ludG1lbnRJZCwgbmFtZSk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGlvbigpOiBqcXdpZGdldHMuU2NoZWR1bGVyR2V0U2VsZWN0aW9uIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdnZXRTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgZ2V0QXBwb2ludG1lbnRzKCk6IEFycmF5PGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHM+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdnZXRBcHBvaW50bWVudHMnKTtcbiAgIH1cblxuICAgZ2V0RGF0YUFwcG9pbnRtZW50cygpOiBBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdnZXREYXRhQXBwb2ludG1lbnRzJyk7XG4gICB9XG5cbiAgIGhpZGVBcHBvaW50bWVudHNCeVJlc291cmNlKHJlc291cmNlc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2hpZGVBcHBvaW50bWVudHNCeVJlc291cmNlJywgcmVzb3VyY2VzSWQpO1xuICAgfVxuXG4gICBvcGVuTWVudShsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdvcGVuTWVudScsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIG9wZW5EaWFsb2cobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignb3BlbkRpYWxvZycsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIHNlbGVjdEFwcG9pbnRtZW50KGFwcG9pbnRtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2VsZWN0QXBwb2ludG1lbnQnLCBhcHBvaW50bWVudElkKTtcbiAgIH1cblxuICAgc2V0QXBwb2ludG1lbnRQcm9wZXJ0eShhcHBvaW50bWVudElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2V0QXBwb2ludG1lbnRQcm9wZXJ0eScsIGFwcG9pbnRtZW50SWQsIG5hbWUsIHZhbHVlKTtcbiAgIH1cblxuICAgc2VsZWN0Q2VsbChkYXRlOiBhbnksIGFsbGRheTogYm9vbGVhbiwgcmVzb3VyY2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZWxlY3RDZWxsJywgZGF0ZSwgYWxsZGF5LCByZXNvdXJjZUlkKTtcbiAgIH1cblxuICAgc2hvd0FwcG9pbnRtZW50c0J5UmVzb3VyY2UocmVzb3VyY2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93QXBwb2ludG1lbnRzQnlSZXNvdXJjZScsIHJlc291cmNlSWQpO1xuICAgfVxuXG4gICBzY3JvbGxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbFdpZHRoJyk7XG4gICB9XG5cbiAgIHNjcm9sbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbEhlaWdodCcpO1xuICAgfVxuXG4gICBzY3JvbGxMZWZ0KGxlZnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsTGVmdCcsIGxlZnQpO1xuICAgfVxuXG4gICBzY3JvbGxUb3AodG9wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbFRvcCcsIHRvcCk7XG4gICB9XG5cblxuICAgLy8ganF4U2NoZWR1bGVyQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50RGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRBZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25CaW5kaW5nQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsRG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db250ZXh0TWVudU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db250ZXh0TWVudUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db250ZXh0TWVudUNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0UmVjdXJyZW5jZURpYWxvZ09wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0UmVjdXJyZW5jZURpYWxvZ0Nsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdERpYWxvZ0NyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXREaWFsb2dPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdERpYWxvZ0Nsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50Q2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BcHBvaW50bWVudENoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudENsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BcHBvaW50bWVudENsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50RG91YmxlQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50RG91YmxlQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnREZWxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50RGVsZXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50QWRkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BcHBvaW50bWVudEFkZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdiaW5kaW5nQ29tcGxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJpbmRpbmdDb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsRG91YmxlQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNlbGxEb3VibGVDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb250ZXh0TWVudU9wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51T3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb250ZXh0TWVudUNsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db250ZXh0TWVudUNsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51SXRlbUNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db250ZXh0TWVudUl0ZW1DbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb250ZXh0TWVudUNyZWF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29udGV4dE1lbnVDcmVhdGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZGF0ZUNoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRGF0ZUNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0UmVjdXJyZW5jZURpYWxvZ09wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXRSZWN1cnJlbmNlRGlhbG9nT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0UmVjdXJyZW5jZURpYWxvZ0Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0UmVjdXJyZW5jZURpYWxvZ0Nsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXREaWFsb2dDcmVhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXREaWFsb2dDcmVhdGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdERpYWxvZ09wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXREaWFsb2dPcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXREaWFsb2dDbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdERpYWxvZ0Nsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZpZXdDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZpZXdDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFNjaGVkdWxlckNvbXBvbmVudFxuIl19