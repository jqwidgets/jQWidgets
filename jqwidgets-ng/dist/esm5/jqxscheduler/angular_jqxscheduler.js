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
var jqxSchedulerComponent = /** @class */ (function () {
    function jqxSchedulerComponent(containerElement) {
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
    jqxSchedulerComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxSchedulerComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxSchedulerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxSchedulerComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxSchedulerComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxSchedulerComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxSchedulerComponent.prototype.createComponent = function (options) {
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
    };
    jqxSchedulerComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxSchedulerComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxSchedulerComponent.prototype.setOptions = function (options) {
        this.host.jqxScheduler('setOptions', options);
    };
    // jqxSchedulerComponent properties
    jqxSchedulerComponent.prototype.appointmentOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentOpacity', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentOpacity');
        }
    };
    jqxSchedulerComponent.prototype.appointmentsMinHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentsMinHeight');
        }
    };
    jqxSchedulerComponent.prototype.appointmentDataFields = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentDataFields', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentDataFields');
        }
    };
    jqxSchedulerComponent.prototype.appointmentTooltips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentTooltips', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentTooltips');
        }
    };
    jqxSchedulerComponent.prototype.columnsHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('columnsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('columnsHeight');
        }
    };
    jqxSchedulerComponent.prototype.contextMenu = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenu', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenu');
        }
    };
    jqxSchedulerComponent.prototype.contextMenuOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuOpen', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuOpen');
        }
    };
    jqxSchedulerComponent.prototype.contextMenuClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuClose', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuClose');
        }
    };
    jqxSchedulerComponent.prototype.contextMenuItemClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuItemClick', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuItemClick');
        }
    };
    jqxSchedulerComponent.prototype.contextMenuCreate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuCreate', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuCreate');
        }
    };
    jqxSchedulerComponent.prototype.changedAppointments = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('changedAppointments', arg);
        }
        else {
            return this.host.jqxScheduler('changedAppointments');
        }
    };
    jqxSchedulerComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('disabled', arg);
        }
        else {
            return this.host.jqxScheduler('disabled');
        }
    };
    jqxSchedulerComponent.prototype.date = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('date', arg);
        }
        else {
            return this.host.jqxScheduler('date');
        }
    };
    jqxSchedulerComponent.prototype.dayNameFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('dayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('dayNameFormat');
        }
    };
    jqxSchedulerComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('enableHover', arg);
        }
        else {
            return this.host.jqxScheduler('enableHover');
        }
    };
    jqxSchedulerComponent.prototype.editDialog = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialog', arg);
        }
        else {
            return this.host.jqxScheduler('editDialog');
        }
    };
    jqxSchedulerComponent.prototype.editDialogDateTimeFormatString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateTimeFormatString');
        }
    };
    jqxSchedulerComponent.prototype.editDialogDateFormatString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateFormatString');
        }
    };
    jqxSchedulerComponent.prototype.editDialogOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogOpen', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogOpen');
        }
    };
    jqxSchedulerComponent.prototype.editDialogCreate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogCreate', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogCreate');
        }
    };
    jqxSchedulerComponent.prototype.editDialogKeyDown = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogKeyDown', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogKeyDown');
        }
    };
    jqxSchedulerComponent.prototype.editDialogClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogClose', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogClose');
        }
    };
    jqxSchedulerComponent.prototype.exportSettings = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('exportSettings', arg);
        }
        else {
            return this.host.jqxScheduler('exportSettings');
        }
    };
    jqxSchedulerComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('height', arg);
        }
        else {
            return this.host.jqxScheduler('height');
        }
    };
    jqxSchedulerComponent.prototype.legendPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendPosition', arg);
        }
        else {
            return this.host.jqxScheduler('legendPosition');
        }
    };
    jqxSchedulerComponent.prototype.legendHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendHeight', arg);
        }
        else {
            return this.host.jqxScheduler('legendHeight');
        }
    };
    jqxSchedulerComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('localization', arg);
        }
        else {
            return this.host.jqxScheduler('localization');
        }
    };
    jqxSchedulerComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('min', arg);
        }
        else {
            return this.host.jqxScheduler('min');
        }
    };
    jqxSchedulerComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('max', arg);
        }
        else {
            return this.host.jqxScheduler('max');
        }
    };
    jqxSchedulerComponent.prototype.ready = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('ready', arg);
        }
        else {
            return this.host.jqxScheduler('ready');
        }
    };
    jqxSchedulerComponent.prototype.renderAppointment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('renderAppointment', arg);
        }
        else {
            return this.host.jqxScheduler('renderAppointment');
        }
    };
    jqxSchedulerComponent.prototype.rendering = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendering', arg);
        }
        else {
            return this.host.jqxScheduler('rendering');
        }
    };
    jqxSchedulerComponent.prototype.rendered = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendered', arg);
        }
        else {
            return this.host.jqxScheduler('rendered');
        }
    };
    jqxSchedulerComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rtl', arg);
        }
        else {
            return this.host.jqxScheduler('rtl');
        }
    };
    jqxSchedulerComponent.prototype.resources = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('resources', arg);
        }
        else {
            return this.host.jqxScheduler('resources');
        }
    };
    jqxSchedulerComponent.prototype.rowsHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('rowsHeight');
        }
    };
    jqxSchedulerComponent.prototype.showToolbar = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showToolbar', arg);
        }
        else {
            return this.host.jqxScheduler('showToolbar');
        }
    };
    jqxSchedulerComponent.prototype.showLegend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showLegend', arg);
        }
        else {
            return this.host.jqxScheduler('showLegend');
        }
    };
    jqxSchedulerComponent.prototype.scrollBarSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('scrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('scrollBarSize');
        }
    };
    jqxSchedulerComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('source', arg);
        }
        else {
            return this.host.jqxScheduler('source');
        }
    };
    jqxSchedulerComponent.prototype.statuses = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('statuses', arg);
        }
        else {
            return this.host.jqxScheduler('statuses');
        }
    };
    jqxSchedulerComponent.prototype.touchRowsHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchRowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchRowsHeight');
        }
    };
    jqxSchedulerComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('theme', arg);
        }
        else {
            return this.host.jqxScheduler('theme');
        }
    };
    jqxSchedulerComponent.prototype.touchAppointmentsMinHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchAppointmentsMinHeight');
        }
    };
    jqxSchedulerComponent.prototype.touchScrollBarSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchScrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('touchScrollBarSize');
        }
    };
    jqxSchedulerComponent.prototype.timeZone = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('timeZone', arg);
        }
        else {
            return this.host.jqxScheduler('timeZone');
        }
    };
    jqxSchedulerComponent.prototype.touchDayNameFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchDayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('touchDayNameFormat');
        }
    };
    jqxSchedulerComponent.prototype.toolBarRangeFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormat', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormat');
        }
    };
    jqxSchedulerComponent.prototype.toolBarRangeFormatAbbr = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormatAbbr');
        }
    };
    jqxSchedulerComponent.prototype.toolbarHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolbarHeight', arg);
        }
        else {
            return this.host.jqxScheduler('toolbarHeight');
        }
    };
    jqxSchedulerComponent.prototype.views = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('views', arg);
        }
        else {
            return this.host.jqxScheduler('views');
        }
    };
    jqxSchedulerComponent.prototype.view = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('view', arg);
        }
        else {
            return this.host.jqxScheduler('view');
        }
    };
    jqxSchedulerComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('width', arg);
        }
        else {
            return this.host.jqxScheduler('width');
        }
    };
    // jqxSchedulerComponent functions
    jqxSchedulerComponent.prototype.addAppointment = function (item) {
        this.host.jqxScheduler('addAppointment', item);
    };
    jqxSchedulerComponent.prototype.beginAppointmentsUpdate = function () {
        this.host.jqxScheduler('beginAppointmentsUpdate');
    };
    jqxSchedulerComponent.prototype.clearAppointmentsSelection = function () {
        this.host.jqxScheduler('clearAppointmentsSelection');
    };
    jqxSchedulerComponent.prototype.clearSelection = function () {
        this.host.jqxScheduler('clearSelection');
    };
    jqxSchedulerComponent.prototype.closeMenu = function () {
        this.host.jqxScheduler('closeMenu');
    };
    jqxSchedulerComponent.prototype.closeDialog = function () {
        this.host.jqxScheduler('closeDialog');
    };
    jqxSchedulerComponent.prototype.deleteAppointment = function (appointmenId) {
        this.host.jqxScheduler('deleteAppointment', appointmenId);
    };
    jqxSchedulerComponent.prototype.destroy = function () {
        this.host.jqxScheduler('destroy');
    };
    jqxSchedulerComponent.prototype.endAppointmentsUpdate = function () {
        this.host.jqxScheduler('endAppointmentsUpdate');
    };
    jqxSchedulerComponent.prototype.ensureAppointmentVisible = function (id) {
        this.host.jqxScheduler('ensureAppointmentVisible', id);
    };
    jqxSchedulerComponent.prototype.ensureVisible = function (item, resourceId) {
        this.host.jqxScheduler('ensureVisible', item, resourceId);
    };
    jqxSchedulerComponent.prototype.exportData = function (format) {
        return this.host.jqxScheduler('exportData', format);
    };
    jqxSchedulerComponent.prototype.focus = function () {
        this.host.jqxScheduler('focus');
    };
    jqxSchedulerComponent.prototype.getAppointmentProperty = function (appointmentId, name) {
        return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
    };
    jqxSchedulerComponent.prototype.getSelection = function () {
        return this.host.jqxScheduler('getSelection');
    };
    jqxSchedulerComponent.prototype.getAppointments = function () {
        return this.host.jqxScheduler('getAppointments');
    };
    jqxSchedulerComponent.prototype.getDataAppointments = function () {
        return this.host.jqxScheduler('getDataAppointments');
    };
    jqxSchedulerComponent.prototype.hideAppointmentsByResource = function (resourcesId) {
        this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
    };
    jqxSchedulerComponent.prototype.openMenu = function (left, top) {
        this.host.jqxScheduler('openMenu', left, top);
    };
    jqxSchedulerComponent.prototype.openDialog = function (left, top) {
        this.host.jqxScheduler('openDialog', left, top);
    };
    jqxSchedulerComponent.prototype.selectAppointment = function (appointmentId) {
        this.host.jqxScheduler('selectAppointment', appointmentId);
    };
    jqxSchedulerComponent.prototype.setAppointmentProperty = function (appointmentId, name, value) {
        this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    };
    jqxSchedulerComponent.prototype.selectCell = function (date, allday, resourceId) {
        this.host.jqxScheduler('selectCell', date, allday, resourceId);
    };
    jqxSchedulerComponent.prototype.showAppointmentsByResource = function (resourceId) {
        this.host.jqxScheduler('showAppointmentsByResource', resourceId);
    };
    jqxSchedulerComponent.prototype.scrollWidth = function () {
        return this.host.jqxScheduler('scrollWidth');
    };
    jqxSchedulerComponent.prototype.scrollHeight = function () {
        return this.host.jqxScheduler('scrollHeight');
    };
    jqxSchedulerComponent.prototype.scrollLeft = function (left) {
        this.host.jqxScheduler('scrollLeft', left);
    };
    jqxSchedulerComponent.prototype.scrollTop = function (top) {
        this.host.jqxScheduler('scrollTop', top);
    };
    jqxSchedulerComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('appointmentChange', function (eventData) { _this.onAppointmentChange.emit(eventData); });
        this.host.on('appointmentClick', function (eventData) { _this.onAppointmentClick.emit(eventData); });
        this.host.on('appointmentDoubleClick', function (eventData) { _this.onAppointmentDoubleClick.emit(eventData); });
        this.host.on('appointmentDelete', function (eventData) { _this.onAppointmentDelete.emit(eventData); });
        this.host.on('appointmentAdd', function (eventData) { _this.onAppointmentAdd.emit(eventData); });
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('cellClick', function (eventData) { _this.onCellClick.emit(eventData); });
        this.host.on('cellDoubleClick', function (eventData) { _this.onCellDoubleClick.emit(eventData); });
        this.host.on('contextMenuOpen', function (eventData) { _this.onContextMenuOpen.emit(eventData); });
        this.host.on('contextMenuClose', function (eventData) { _this.onContextMenuClose.emit(eventData); });
        this.host.on('contextMenuItemClick', function (eventData) { _this.onContextMenuItemClick.emit(eventData); });
        this.host.on('contextMenuCreate', function (eventData) { _this.onContextMenuCreate.emit(eventData); });
        this.host.on('dateChange', function (eventData) { _this.onDateChange.emit(eventData); });
        this.host.on('editRecurrenceDialogOpen', function (eventData) { _this.onEditRecurrenceDialogOpen.emit(eventData); });
        this.host.on('editRecurrenceDialogClose', function (eventData) { _this.onEditRecurrenceDialogClose.emit(eventData); });
        this.host.on('editDialogCreate', function (eventData) { _this.onEditDialogCreate.emit(eventData); });
        this.host.on('editDialogOpen', function (eventData) { _this.onEditDialogOpen.emit(eventData); });
        this.host.on('editDialogClose', function (eventData) { _this.onEditDialogClose.emit(eventData); });
        this.host.on('viewChange', function (eventData) { _this.onViewChange.emit(eventData); });
    };
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
    return jqxSchedulerComponent;
}()); //jqxSchedulerComponent
export { jqxSchedulerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzY2hlZHVsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4c2NoZWR1bGVyLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhzY2hlZHVsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUErREcsK0JBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBQyxtQkFBbUIsRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGdDQUFnQyxFQUFDLDRCQUE0QixFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLHdCQUF3QixFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxD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RUFBMEM7SUFDekM7UUFBVCxNQUFNLEVBQUU7O3FFQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTs7MkVBQStDO0lBQzlDO1FBQVQsTUFBTSxFQUFFOztzRUFBMEM7SUFDekM7UUFBVCxNQUFNLEVBQUU7O21FQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTs7b0VBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzs4REFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7O29FQUF3QztJQUN2QztRQUFULE1BQU0sRUFBRTs7b0VBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOztxRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7O3lFQUE2QztJQUM1QztRQUFULE1BQU0sRUFBRTs7c0VBQTBDO0lBQ3pDO1FBQVQsTUFBTSxFQUFFOzsrREFBbUM7SUFDbEM7UUFBVCxNQUFNLEVBQUU7OzZFQUFpRDtJQUNoRDtRQUFULE1BQU0sRUFBRTs7OEVBQWtEO0lBQ2pEO1FBQVQsTUFBTSxFQUFFOztxRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7O21FQUF1QztJQUN0QztRQUFULE1BQU0sRUFBRTs7b0VBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzsrREFBbUM7SUEzdEJsQyxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQWlFK0IsVUFBVTtPQS9EOUIscUJBQXFCLENBbXZCakM7SUFBRCw0QkFBQztDQUFBLEFBbnZCRCxJQW12QkMsQ0FBQyx1QkFBdUI7U0FudkJaLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4U2NoZWR1bGVyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhTY2hlZHVsZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYXBwb2ludG1lbnRPcGFjaXR5JykgYXR0ckFwcG9pbnRtZW50T3BhY2l0eTogbnVtYmVyO1xuICAgQElucHV0KCdhcHBvaW50bWVudHNNaW5IZWlnaHQnKSBhdHRyQXBwb2ludG1lbnRzTWluSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2FwcG9pbnRtZW50RGF0YUZpZWxkcycpIGF0dHJBcHBvaW50bWVudERhdGFGaWVsZHM6IGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHM7XG4gICBASW5wdXQoJ2FwcG9pbnRtZW50VG9vbHRpcHMnKSBhdHRyQXBwb2ludG1lbnRUb29sdGlwczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc0hlaWdodCcpIGF0dHJDb2x1bW5zSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbnRleHRNZW51JykgYXR0ckNvbnRleHRNZW51OiBib29sZWFuO1xuICAgQElucHV0KCdjb250ZXh0TWVudU9wZW4nKSBhdHRyQ29udGV4dE1lbnVPcGVuOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2V2ZW50J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2NvbnRleHRNZW51Q2xvc2UnKSBhdHRyQ29udGV4dE1lbnVDbG9zZTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydldmVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdjb250ZXh0TWVudUl0ZW1DbGljaycpIGF0dHJDb250ZXh0TWVudUl0ZW1DbGljazogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydldmVudCddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdjb250ZXh0TWVudUNyZWF0ZScpIGF0dHJDb250ZXh0TWVudUNyZWF0ZTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnbWVudSddLCBzZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydzZXR0aW5ncyddKSA9PiB2b2lkO1xuICAgQElucHV0KCdjaGFuZ2VkQXBwb2ludG1lbnRzJykgYXR0ckNoYW5nZWRBcHBvaW50bWVudHM6IEFycmF5PGpxd2lkZ2V0cy5TY2hlZHVsZXJDaGFuZ2VkQXBwb2ludG1lbnRzPjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2RhdGUnKSBhdHRyRGF0ZTogYW55O1xuICAgQElucHV0KCdkYXlOYW1lRm9ybWF0JykgYXR0ckRheU5hbWVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXREaWFsb2cnKSBhdHRyRWRpdERpYWxvZzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nJykgYXR0ckVkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCdlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZycpIGF0dHJFZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCdlZGl0RGlhbG9nT3BlbicpIGF0dHJFZGl0RGlhbG9nT3BlbjogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2VkaXREaWFsb2dDcmVhdGUnKSBhdHRyRWRpdERpYWxvZ0NyZWF0ZTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ2VkaXREaWFsb2dLZXlEb3duJykgYXR0ckVkaXREaWFsb2dLZXlEb3duOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydlZGl0QXBwb2ludG1lbnQnXSwgZXZlbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2V2ZW50J10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXREaWFsb2dDbG9zZScpIGF0dHJFZGl0RGlhbG9nQ2xvc2U6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdleHBvcnRTZXR0aW5ncycpIGF0dHJFeHBvcnRTZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckV4cG9ydFNldHRpbmdzO1xuICAgQElucHV0KCdsZWdlbmRQb3NpdGlvbicpIGF0dHJMZWdlbmRQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdsZWdlbmRIZWlnaHQnKSBhdHRyTGVnZW5kSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGFueTtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogYW55O1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBhbnk7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJBcHBvaW50bWVudCcpIGF0dHJSZW5kZXJBcHBvaW50bWVudDogKGRhdGE6IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZW5kZXJBcHBvaW50bWVudFsnZGF0YSddKSA9PiBhbnk7XG4gICBASW5wdXQoJ3JlbmRlcmluZycpIGF0dHJSZW5kZXJpbmc6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcmVkJykgYXR0clJlbmRlcmVkOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdyZXNvdXJjZXMnKSBhdHRyUmVzb3VyY2VzOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVzb3VyY2VzO1xuICAgQElucHV0KCdyb3dzSGVpZ2h0JykgYXR0clJvd3NIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2hvd1Rvb2xiYXInKSBhdHRyU2hvd1Rvb2xiYXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dMZWdlbmQnKSBhdHRyU2hvd0xlZ2VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsQmFyU2l6ZScpIGF0dHJTY3JvbGxCYXJTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ3NvdXJjZScpIGF0dHJTb3VyY2U6IGFueTtcbiAgIEBJbnB1dCgnc3RhdHVzZXMnKSBhdHRyU3RhdHVzZXM6IGpxd2lkZ2V0cy5TY2hlZHVsZXJTdGF0dXNlcztcbiAgIEBJbnB1dCgndG91Y2hSb3dzSGVpZ2h0JykgYXR0clRvdWNoUm93c0hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcpIGF0dHJUb3VjaEFwcG9pbnRtZW50c01pbkhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCd0b3VjaFNjcm9sbEJhclNpemUnKSBhdHRyVG91Y2hTY3JvbGxCYXJTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ3RpbWVab25lJykgYXR0clRpbWVab25lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RvdWNoRGF5TmFtZUZvcm1hdCcpIGF0dHJUb3VjaERheU5hbWVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbEJhclJhbmdlRm9ybWF0JykgYXR0clRvb2xCYXJSYW5nZUZvcm1hdDogc3RyaW5nO1xuICAgQElucHV0KCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJykgYXR0clRvb2xCYXJSYW5nZUZvcm1hdEFiYnI6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbGJhckhlaWdodCcpIGF0dHJUb29sYmFySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3ZpZXdzJykgYXR0clZpZXdzOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCd2aWV3JykgYXR0clZpZXc6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhcHBvaW50bWVudE9wYWNpdHknLCdhcHBvaW50bWVudHNNaW5IZWlnaHQnLCdhcHBvaW50bWVudERhdGFGaWVsZHMnLCdhcHBvaW50bWVudFRvb2x0aXBzJywnY29sdW1uc0hlaWdodCcsJ2NvbnRleHRNZW51JywnY29udGV4dE1lbnVPcGVuJywnY29udGV4dE1lbnVDbG9zZScsJ2NvbnRleHRNZW51SXRlbUNsaWNrJywnY29udGV4dE1lbnVDcmVhdGUnLCdjaGFuZ2VkQXBwb2ludG1lbnRzJywnZGlzYWJsZWQnLCdkYXRlJywnZGF5TmFtZUZvcm1hdCcsJ2VuYWJsZUhvdmVyJywnZWRpdERpYWxvZycsJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycsJ2VkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nJywnZWRpdERpYWxvZ09wZW4nLCdlZGl0RGlhbG9nQ3JlYXRlJywnZWRpdERpYWxvZ0tleURvd24nLCdlZGl0RGlhbG9nQ2xvc2UnLCdleHBvcnRTZXR0aW5ncycsJ2hlaWdodCcsJ2xlZ2VuZFBvc2l0aW9uJywnbGVnZW5kSGVpZ2h0JywnbG9jYWxpemF0aW9uJywnbWluJywnbWF4JywncmVhZHknLCdyZW5kZXJBcHBvaW50bWVudCcsJ3JlbmRlcmluZycsJ3JlbmRlcmVkJywncnRsJywncmVzb3VyY2VzJywncm93c0hlaWdodCcsJ3Nob3dUb29sYmFyJywnc2hvd0xlZ2VuZCcsJ3Njcm9sbEJhclNpemUnLCdzb3VyY2UnLCdzdGF0dXNlcycsJ3RvdWNoUm93c0hlaWdodCcsJ3RoZW1lJywndG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQnLCd0b3VjaFNjcm9sbEJhclNpemUnLCd0aW1lWm9uZScsJ3RvdWNoRGF5TmFtZUZvcm1hdCcsJ3Rvb2xCYXJSYW5nZUZvcm1hdCcsJ3Rvb2xCYXJSYW5nZUZvcm1hdEFiYnInLCd0b29sYmFySGVpZ2h0Jywndmlld3MnLCd2aWV3Jywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4U2NoZWR1bGVyO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhTY2hlZHVsZXInLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFNjaGVkdWxlckNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhcHBvaW50bWVudE9wYWNpdHkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50T3BhY2l0eScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudE9wYWNpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXBwb2ludG1lbnRzTWluSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudHNNaW5IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRzTWluSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFwcG9pbnRtZW50RGF0YUZpZWxkcyhhcmc/OiBqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzKToganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudERhdGFGaWVsZHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnREYXRhRmllbGRzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFwcG9pbnRtZW50VG9vbHRpcHMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRUb29sdGlwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudFRvb2x0aXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbHVtbnNIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29sdW1uc0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudU9wZW4oYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydldmVudCddKSA9PiB2b2lkKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydldmVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51T3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudU9wZW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVDbG9zZShhcmc/OiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2V2ZW50J10pID0+IHZvaWQpOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2V2ZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVDbG9zZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUNsb3NlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51SXRlbUNsaWNrKGFyZz86IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snZXZlbnQnXSkgPT4gYm9vbGVhbik6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snZXZlbnQnXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudUl0ZW1DbGljaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudUNyZWF0ZShhcmc/OiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydtZW51J10sIHNldHRpbmdzOiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ3NldHRpbmdzJ10pID0+IHZvaWQpOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydtZW51J10sIHNldHRpbmdzOiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ3NldHRpbmdzJ10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVDcmVhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVDcmVhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hhbmdlZEFwcG9pbnRtZW50cyhhcmc/OiBBcnJheTxqcXdpZGdldHMuU2NoZWR1bGVyQ2hhbmdlZEFwcG9pbnRtZW50cz4pOiBBcnJheTxqcXdpZGdldHMuU2NoZWR1bGVyQ2hhbmdlZEFwcG9pbnRtZW50cz4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2hhbmdlZEFwcG9pbnRtZW50cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjaGFuZ2VkQXBwb2ludG1lbnRzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRhdGUoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkYXlOYW1lRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXlOYW1lRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RheU5hbWVGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlSG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5hYmxlSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2cnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dEYXRlRm9ybWF0U3RyaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nT3Blbihhcmc/OiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCk6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dPcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dPcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dDcmVhdGUoYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQpOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ3JlYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dDcmVhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ0tleURvd24oYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZWRpdEFwcG9pbnRtZW50J10sIGV2ZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydldmVudCddKSA9PiBib29sZWFuKTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZWRpdEFwcG9pbnRtZW50J10sIGV2ZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydldmVudCddKSA9PiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dLZXlEb3duJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dLZXlEb3duJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dDbG9zZShhcmc/OiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCk6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dDbG9zZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ2xvc2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwb3J0U2V0dGluZ3MoYXJnPzoganF3aWRnZXRzLlNjaGVkdWxlckV4cG9ydFNldHRpbmdzKToganF3aWRnZXRzLlNjaGVkdWxlckV4cG9ydFNldHRpbmdzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2V4cG9ydFNldHRpbmdzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2V4cG9ydFNldHRpbmdzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRQb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbGVnZW5kUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbGVnZW5kUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGVnZW5kSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsZWdlbmRIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbGVnZW5kSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxvY2FsaXphdGlvbihhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xvY2FsaXphdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWR5KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlYWR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlYWR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlckFwcG9pbnRtZW50KGFyZz86IChkYXRhOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVuZGVyQXBwb2ludG1lbnRbJ2RhdGEnXSkgPT4gYW55KTogKGRhdGE6IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZW5kZXJBcHBvaW50bWVudFsnZGF0YSddKSA9PiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyQXBwb2ludG1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyQXBwb2ludG1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyaW5nKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzb3VyY2VzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJSZXNvdXJjZXMpOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVzb3VyY2VzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Jlc291cmNlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZXNvdXJjZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm93c0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncm93c0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyb3dzSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUb29sYmFyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dUb29sYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dUb29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dMZWdlbmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd0xlZ2VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93TGVnZW5kJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbEJhclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsQmFyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdHVzZXMoYXJnPzoganF3aWRnZXRzLlNjaGVkdWxlclN0YXR1c2VzKToganF3aWRnZXRzLlNjaGVkdWxlclN0YXR1c2VzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3N0YXR1c2VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3N0YXR1c2VzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoUm93c0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hSb3dzSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoUm93c0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoU2Nyb2xsQmFyU2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hTY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoU2Nyb2xsQmFyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aW1lWm9uZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndGltZVpvbmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndGltZVpvbmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG91Y2hEYXlOYW1lRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaERheU5hbWVGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hEYXlOYW1lRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xCYXJSYW5nZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbEJhclJhbmdlRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xCYXJSYW5nZUZvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sQmFyUmFuZ2VGb3JtYXRBYmJyKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xCYXJSYW5nZUZvcm1hdEFiYnInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbGJhckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbGJhckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sYmFySGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpZXdzKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3ZpZXdzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3ZpZXdzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpZXcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3ZpZXcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndmlldycpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhTY2hlZHVsZXJDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGRBcHBvaW50bWVudChpdGVtOiBqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhZGRBcHBvaW50bWVudCcsIGl0ZW0pO1xuICAgfVxuXG4gICBiZWdpbkFwcG9pbnRtZW50c1VwZGF0ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2JlZ2luQXBwb2ludG1lbnRzVXBkYXRlJyk7XG4gICB9XG5cbiAgIGNsZWFyQXBwb2ludG1lbnRzU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xlYXJBcHBvaW50bWVudHNTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjbGVhclNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjbG9zZU1lbnUnKTtcbiAgIH1cblxuICAgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjbG9zZURpYWxvZycpO1xuICAgfVxuXG4gICBkZWxldGVBcHBvaW50bWVudChhcHBvaW50bWVuSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGVsZXRlQXBwb2ludG1lbnQnLCBhcHBvaW50bWVuSWQpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGVzdHJveScpO1xuICAgfVxuXG4gICBlbmRBcHBvaW50bWVudHNVcGRhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbmRBcHBvaW50bWVudHNVcGRhdGUnKTtcbiAgIH1cblxuICAgZW5zdXJlQXBwb2ludG1lbnRWaXNpYmxlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Vuc3VyZUFwcG9pbnRtZW50VmlzaWJsZScsIGlkKTtcbiAgIH1cblxuICAgZW5zdXJlVmlzaWJsZShpdGVtOiBhbnksIHJlc291cmNlSWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Vuc3VyZVZpc2libGUnLCBpdGVtLCByZXNvdXJjZUlkKTtcbiAgIH1cblxuICAgZXhwb3J0RGF0YShmb3JtYXQ6IHN0cmluZyk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZXhwb3J0RGF0YScsIGZvcm1hdCk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0QXBwb2ludG1lbnRQcm9wZXJ0eShhcHBvaW50bWVudElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZ2V0QXBwb2ludG1lbnRQcm9wZXJ0eScsIGFwcG9pbnRtZW50SWQsIG5hbWUpO1xuICAgfVxuXG4gICBnZXRTZWxlY3Rpb24oKToganF3aWRnZXRzLlNjaGVkdWxlckdldFNlbGVjdGlvbiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZ2V0U2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGdldEFwcG9pbnRtZW50cygpOiBBcnJheTxqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzPiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZ2V0QXBwb2ludG1lbnRzJyk7XG4gICB9XG5cbiAgIGdldERhdGFBcHBvaW50bWVudHMoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZ2V0RGF0YUFwcG9pbnRtZW50cycpO1xuICAgfVxuXG4gICBoaWRlQXBwb2ludG1lbnRzQnlSZXNvdXJjZShyZXNvdXJjZXNJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdoaWRlQXBwb2ludG1lbnRzQnlSZXNvdXJjZScsIHJlc291cmNlc0lkKTtcbiAgIH1cblxuICAgb3Blbk1lbnUobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignb3Blbk1lbnUnLCBsZWZ0LCB0b3ApO1xuICAgfVxuXG4gICBvcGVuRGlhbG9nKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ29wZW5EaWFsb2cnLCBsZWZ0LCB0b3ApO1xuICAgfVxuXG4gICBzZWxlY3RBcHBvaW50bWVudChhcHBvaW50bWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NlbGVjdEFwcG9pbnRtZW50JywgYXBwb2ludG1lbnRJZCk7XG4gICB9XG5cbiAgIHNldEFwcG9pbnRtZW50UHJvcGVydHkoYXBwb2ludG1lbnRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NldEFwcG9pbnRtZW50UHJvcGVydHknLCBhcHBvaW50bWVudElkLCBuYW1lLCB2YWx1ZSk7XG4gICB9XG5cbiAgIHNlbGVjdENlbGwoZGF0ZTogYW55LCBhbGxkYXk6IGJvb2xlYW4sIHJlc291cmNlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2VsZWN0Q2VsbCcsIGRhdGUsIGFsbGRheSwgcmVzb3VyY2VJZCk7XG4gICB9XG5cbiAgIHNob3dBcHBvaW50bWVudHNCeVJlc291cmNlKHJlc291cmNlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd0FwcG9pbnRtZW50c0J5UmVzb3VyY2UnLCByZXNvdXJjZUlkKTtcbiAgIH1cblxuICAgc2Nyb2xsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxXaWR0aCcpO1xuICAgfVxuXG4gICBzY3JvbGxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxIZWlnaHQnKTtcbiAgIH1cblxuICAgc2Nyb2xsTGVmdChsZWZ0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbExlZnQnLCBsZWZ0KTtcbiAgIH1cblxuICAgc2Nyb2xsVG9wKHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxUb3AnLCB0b3ApO1xuICAgfVxuXG5cbiAgIC8vIGpxeFNjaGVkdWxlckNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudERlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50QWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbERvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51SXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29udGV4dE1lbnVDcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdFJlY3VycmVuY2VEaWFsb2dPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdFJlY3VycmVuY2VEaWFsb2dDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXREaWFsb2dDcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0RGlhbG9nT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXREaWFsb2dDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudENoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnRDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnRDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnRDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudERvdWJsZUNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BcHBvaW50bWVudERvdWJsZUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50RGVsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BcHBvaW50bWVudERlbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudEFkZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnRBZGQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbENsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbERvdWJsZUNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsRG91YmxlQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29udGV4dE1lbnVPcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db250ZXh0TWVudU9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29udGV4dE1lbnVDbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29udGV4dE1lbnVDbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb250ZXh0TWVudUl0ZW1DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29udGV4dE1lbnVJdGVtQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29udGV4dE1lbnVDcmVhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51Q3JlYXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RhdGVDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdFJlY3VycmVuY2VEaWFsb2dPcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0UmVjdXJyZW5jZURpYWxvZ09wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdFJlY3VycmVuY2VEaWFsb2dDbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdFJlY3VycmVuY2VEaWFsb2dDbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0RGlhbG9nQ3JlYXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0RGlhbG9nQ3JlYXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXREaWFsb2dPcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0RGlhbG9nT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0RGlhbG9nQ2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXREaWFsb2dDbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2aWV3Q2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WaWV3Q2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhTY2hlZHVsZXJDb21wb25lbnRcbiJdfQ==