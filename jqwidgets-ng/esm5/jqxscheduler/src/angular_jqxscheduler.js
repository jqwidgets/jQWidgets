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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
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
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ngOnChanges = /**
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxSchedulerComponent.prototype.arraysEqual = /**
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
    jqxSchedulerComponent.prototype.manageAttributes = /**
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
    jqxSchedulerComponent.prototype.moveClasses = /**
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
    jqxSchedulerComponent.prototype.moveStyles = /**
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
    jqxSchedulerComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScheduler', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxSchedulerComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.__updateRect__ = /**
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
    jqxSchedulerComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxScheduler('setOptions', options);
    };
    // jqxSchedulerComponent properties
    // jqxSchedulerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.appointmentOpacity = 
    // jqxSchedulerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentOpacity', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentOpacity');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.appointmentsMinHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentsMinHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.appointmentDataFields = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentDataFields', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentDataFields');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.appointmentTooltips = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentTooltips', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentTooltips');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.columnsHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('columnsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('columnsHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.contextMenu = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenu', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenu');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.contextMenuOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuOpen', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.contextMenuClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuClose', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.contextMenuItemClick = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuItemClick', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuItemClick');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.contextMenuCreate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuCreate', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuCreate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.changedAppointments = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('changedAppointments', arg);
        }
        else {
            return this.host.jqxScheduler('changedAppointments');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('disabled', arg);
        }
        else {
            return this.host.jqxScheduler('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.date = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('date', arg);
        }
        else {
            return this.host.jqxScheduler('date');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.dayNameFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('dayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('dayNameFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('enableHover', arg);
        }
        else {
            return this.host.jqxScheduler('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialog = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialog', arg);
        }
        else {
            return this.host.jqxScheduler('editDialog');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogDateTimeFormatString = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateTimeFormatString');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogDateFormatString = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateFormatString');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogOpen = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogOpen', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogOpen');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogCreate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogCreate', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogCreate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogKeyDown = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogKeyDown', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogKeyDown');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.editDialogClose = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogClose', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogClose');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.exportSettings = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('exportSettings', arg);
        }
        else {
            return this.host.jqxScheduler('exportSettings');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('height', arg);
        }
        else {
            return this.host.jqxScheduler('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.legendPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendPosition', arg);
        }
        else {
            return this.host.jqxScheduler('legendPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.legendHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendHeight', arg);
        }
        else {
            return this.host.jqxScheduler('legendHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('localization', arg);
        }
        else {
            return this.host.jqxScheduler('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('min', arg);
        }
        else {
            return this.host.jqxScheduler('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('max', arg);
        }
        else {
            return this.host.jqxScheduler('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ready = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('ready', arg);
        }
        else {
            return this.host.jqxScheduler('ready');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.renderAppointment = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('renderAppointment', arg);
        }
        else {
            return this.host.jqxScheduler('renderAppointment');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.rendering = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendering', arg);
        }
        else {
            return this.host.jqxScheduler('rendering');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.rendered = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendered', arg);
        }
        else {
            return this.host.jqxScheduler('rendered');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rtl', arg);
        }
        else {
            return this.host.jqxScheduler('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.resources = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('resources', arg);
        }
        else {
            return this.host.jqxScheduler('resources');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.rowsHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('rowsHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.showToolbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showToolbar', arg);
        }
        else {
            return this.host.jqxScheduler('showToolbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.showLegend = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showLegend', arg);
        }
        else {
            return this.host.jqxScheduler('showLegend');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.scrollBarSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('scrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('scrollBarSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('source', arg);
        }
        else {
            return this.host.jqxScheduler('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.statuses = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('statuses', arg);
        }
        else {
            return this.host.jqxScheduler('statuses');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.touchRowsHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchRowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchRowsHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('theme', arg);
        }
        else {
            return this.host.jqxScheduler('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.touchAppointmentsMinHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchAppointmentsMinHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.touchScrollBarSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchScrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('touchScrollBarSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.timeZone = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('timeZone', arg);
        }
        else {
            return this.host.jqxScheduler('timeZone');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.touchDayNameFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchDayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('touchDayNameFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.toolBarRangeFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormat', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.toolBarRangeFormatAbbr = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormatAbbr');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.toolbarHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolbarHeight', arg);
        }
        else {
            return this.host.jqxScheduler('toolbarHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.views = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('views', arg);
        }
        else {
            return this.host.jqxScheduler('views');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.view = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('view', arg);
        }
        else {
            return this.host.jqxScheduler('view');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSchedulerComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('width', arg);
        }
        else {
            return this.host.jqxScheduler('width');
        }
    };
    // jqxSchedulerComponent functions
    // jqxSchedulerComponent functions
    /**
     * @param {?} item
     * @return {?}
     */
    jqxSchedulerComponent.prototype.addAppointment = 
    // jqxSchedulerComponent functions
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.host.jqxScheduler('addAppointment', item);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.beginAppointmentsUpdate = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('beginAppointmentsUpdate');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.clearAppointmentsSelection = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('clearAppointmentsSelection');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('clearSelection');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('closeMenu');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('closeDialog');
    };
    /**
     * @param {?} appointmenId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.deleteAppointment = /**
     * @param {?} appointmenId
     * @return {?}
     */
    function (appointmenId) {
        this.host.jqxScheduler('deleteAppointment', appointmenId);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('destroy');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.endAppointmentsUpdate = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('endAppointmentsUpdate');
    };
    /**
     * @param {?} id
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ensureAppointmentVisible = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.host.jqxScheduler('ensureAppointmentVisible', id);
    };
    /**
     * @param {?} item
     * @param {?} resourceId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ensureVisible = /**
     * @param {?} item
     * @param {?} resourceId
     * @return {?}
     */
    function (item, resourceId) {
        this.host.jqxScheduler('ensureVisible', item, resourceId);
    };
    /**
     * @param {?} format
     * @return {?}
     */
    jqxSchedulerComponent.prototype.exportData = /**
     * @param {?} format
     * @return {?}
     */
    function (format) {
        return this.host.jqxScheduler('exportData', format);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxScheduler('focus');
    };
    /**
     * @param {?} appointmentId
     * @param {?} name
     * @return {?}
     */
    jqxSchedulerComponent.prototype.getAppointmentProperty = /**
     * @param {?} appointmentId
     * @param {?} name
     * @return {?}
     */
    function (appointmentId, name) {
        return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.getSelection = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScheduler('getSelection');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.getAppointments = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScheduler('getAppointments');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.getDataAppointments = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScheduler('getDataAppointments');
    };
    /**
     * @param {?} resourcesId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.hideAppointmentsByResource = /**
     * @param {?} resourcesId
     * @return {?}
     */
    function (resourcesId) {
        this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxSchedulerComponent.prototype.openMenu = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        this.host.jqxScheduler('openMenu', left, top);
    };
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    jqxSchedulerComponent.prototype.openDialog = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        this.host.jqxScheduler('openDialog', left, top);
    };
    /**
     * @param {?} appointmentId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.selectAppointment = /**
     * @param {?} appointmentId
     * @return {?}
     */
    function (appointmentId) {
        this.host.jqxScheduler('selectAppointment', appointmentId);
    };
    /**
     * @param {?} appointmentId
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    jqxSchedulerComponent.prototype.setAppointmentProperty = /**
     * @param {?} appointmentId
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (appointmentId, name, value) {
        this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    };
    /**
     * @param {?} date
     * @param {?} allday
     * @param {?} resourceId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.selectCell = /**
     * @param {?} date
     * @param {?} allday
     * @param {?} resourceId
     * @return {?}
     */
    function (date, allday, resourceId) {
        this.host.jqxScheduler('selectCell', date, allday, resourceId);
    };
    /**
     * @param {?} resourceId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.showAppointmentsByResource = /**
     * @param {?} resourceId
     * @return {?}
     */
    function (resourceId) {
        this.host.jqxScheduler('showAppointmentsByResource', resourceId);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.scrollWidth = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScheduler('scrollWidth');
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.scrollHeight = /**
     * @return {?}
     */
    function () {
        return this.host.jqxScheduler('scrollHeight');
    };
    /**
     * @param {?} left
     * @return {?}
     */
    jqxSchedulerComponent.prototype.scrollLeft = /**
     * @param {?} left
     * @return {?}
     */
    function (left) {
        this.host.jqxScheduler('scrollLeft', left);
    };
    /**
     * @param {?} top
     * @return {?}
     */
    jqxSchedulerComponent.prototype.scrollTop = /**
     * @param {?} top
     * @return {?}
     */
    function (top) {
        this.host.jqxScheduler('scrollTop', top);
    };
    /**
     * @return {?}
     */
    jqxSchedulerComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
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
    jqxSchedulerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxScheduler',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxSchedulerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxSchedulerComponent;
}()); //jqxSchedulerComponent
export { jqxSchedulerComponent };
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
