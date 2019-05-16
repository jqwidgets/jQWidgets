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
     * @param {?=} resourceId
     * @return {?}
     */
    jqxSchedulerComponent.prototype.ensureVisible = /**
     * @param {?} item
     * @param {?=} resourceId
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
        this.host.on('appointmentChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onAppointmentChange.emit(eventData); }));
        this.host.on('appointmentClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onAppointmentClick.emit(eventData); }));
        this.host.on('appointmentDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onAppointmentDoubleClick.emit(eventData); }));
        this.host.on('appointmentDelete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onAppointmentDelete.emit(eventData); }));
        this.host.on('appointmentAdd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onAppointmentAdd.emit(eventData); }));
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
        this.host.on('cellClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellClick.emit(eventData); }));
        this.host.on('cellDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellDoubleClick.emit(eventData); }));
        this.host.on('contextMenuOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onContextMenuOpen.emit(eventData); }));
        this.host.on('contextMenuClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onContextMenuClose.emit(eventData); }));
        this.host.on('contextMenuItemClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onContextMenuItemClick.emit(eventData); }));
        this.host.on('contextMenuCreate', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onContextMenuCreate.emit(eventData); }));
        this.host.on('dateChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDateChange.emit(eventData); }));
        this.host.on('editRecurrenceDialogOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onEditRecurrenceDialogOpen.emit(eventData); }));
        this.host.on('editRecurrenceDialogClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onEditRecurrenceDialogClose.emit(eventData); }));
        this.host.on('editDialogCreate', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onEditDialogCreate.emit(eventData); }));
        this.host.on('editDialogOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onEditDialogOpen.emit(eventData); }));
        this.host.on('editDialogClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onEditDialogClose.emit(eventData); }));
        this.host.on('viewChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onViewChange.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzY2hlZHVsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4c2NoZWR1bGVyLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhzY2hlZHVsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQW9FRywrQkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxvQkFBb0IsRUFBQyx1QkFBdUIsRUFBQyx1QkFBdUIsRUFBQyxxQkFBcUIsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLHNCQUFzQixFQUFDLG1CQUFtQixFQUFDLHFCQUFxQixFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsZ0NBQWdDLEVBQUMsNEJBQTRCLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsd0JBQXdCLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxD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QzNDLGtEQUFpRDs7SUFDakQsa0RBQWlEOztJQUNqRCxtREFBa0Q7O0lBQ2xELHVEQUFzRDs7SUFDdEQsb0RBQW1EOztJQUNuRCw2Q0FBNEM7O0lBQzVDLDJEQUEwRDs7SUFDMUQsNERBQTJEOztJQUMzRCxtREFBa0Q7O0lBQ2xELGlEQUFnRDs7SUFDaEQsa0RBQWlEOztJQUNqRCw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFNjaGVkdWxlcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4U2NoZWR1bGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FwcG9pbnRtZW50T3BhY2l0eScpIGF0dHJBcHBvaW50bWVudE9wYWNpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXBwb2ludG1lbnRzTWluSGVpZ2h0JykgYXR0ckFwcG9pbnRtZW50c01pbkhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdhcHBvaW50bWVudERhdGFGaWVsZHMnKSBhdHRyQXBwb2ludG1lbnREYXRhRmllbGRzOiBqcXdpZGdldHMuU2NoZWR1bGVyQXBwb2ludG1lbnREYXRhRmllbGRzO1xuICAgQElucHV0KCdhcHBvaW50bWVudFRvb2x0aXBzJykgYXR0ckFwcG9pbnRtZW50VG9vbHRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNIZWlnaHQnKSBhdHRyQ29sdW1uc0hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdjb250ZXh0TWVudScpIGF0dHJDb250ZXh0TWVudTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVPcGVuJykgYXR0ckNvbnRleHRNZW51T3BlbjogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudU9wZW5bJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydldmVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdjb250ZXh0TWVudUNsb3NlJykgYXR0ckNvbnRleHRNZW51Q2xvc2U6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnbWVudSddLCBhcHBvaW50bWVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q2xvc2VbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnZXZlbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVJdGVtQ2xpY2snKSBhdHRyQ29udGV4dE1lbnVJdGVtQ2xpY2s6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ21lbnUnXSwgYXBwb2ludG1lbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUl0ZW1DbGlja1snZXZlbnQnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGV4dE1lbnVDcmVhdGUnKSBhdHRyQ29udGV4dE1lbnVDcmVhdGU6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDcmVhdGVbJ21lbnUnXSwgc2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnc2V0dGluZ3MnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnY2hhbmdlZEFwcG9pbnRtZW50cycpIGF0dHJDaGFuZ2VkQXBwb2ludG1lbnRzOiBBcnJheTxqcXdpZGdldHMuU2NoZWR1bGVyQ2hhbmdlZEFwcG9pbnRtZW50cz47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkYXRlJykgYXR0ckRhdGU6IGFueTtcbiAgIEBJbnB1dCgnZGF5TmFtZUZvcm1hdCcpIGF0dHJEYXlOYW1lRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0RGlhbG9nJykgYXR0ckVkaXREaWFsb2c6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycpIGF0dHJFZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnKSBhdHRyRWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnZWRpdERpYWxvZ09wZW4nKSBhdHRyRWRpdERpYWxvZ09wZW46IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ09wZW5bJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdlZGl0RGlhbG9nQ3JlYXRlJykgYXR0ckVkaXREaWFsb2dDcmVhdGU6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdlZGl0RGlhbG9nS2V5RG93bicpIGF0dHJFZGl0RGlhbG9nS2V5RG93bjogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZWRpdEFwcG9pbnRtZW50J10sIGV2ZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dLZXlEb3duWydldmVudCddKSA9PiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0RGlhbG9nQ2xvc2UnKSBhdHRyRWRpdERpYWxvZ0Nsb3NlOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZXhwb3J0U2V0dGluZ3MnKSBhdHRyRXhwb3J0U2V0dGluZ3M6IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncztcbiAgIEBJbnB1dCgnbGVnZW5kUG9zaXRpb24nKSBhdHRyTGVnZW5kUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnbGVnZW5kSGVpZ2h0JykgYXR0ckxlZ2VuZEhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdsb2NhbGl6YXRpb24nKSBhdHRyTG9jYWxpemF0aW9uOiBhbnk7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IGFueTtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogYW55O1xuICAgQElucHV0KCdyZWFkeScpIGF0dHJSZWFkeTogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyQXBwb2ludG1lbnQnKSBhdHRyUmVuZGVyQXBwb2ludG1lbnQ6IChkYXRhOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVuZGVyQXBwb2ludG1lbnRbJ2RhdGEnXSkgPT4gYW55O1xuICAgQElucHV0KCdyZW5kZXJpbmcnKSBhdHRyUmVuZGVyaW5nOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVzb3VyY2VzJykgYXR0clJlc291cmNlczoganF3aWRnZXRzLlNjaGVkdWxlclJlc291cmNlcztcbiAgIEBJbnB1dCgncm93c0hlaWdodCcpIGF0dHJSb3dzSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3dUb29sYmFyJykgYXR0clNob3dUb29sYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93TGVnZW5kJykgYXR0clNob3dMZWdlbmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Njcm9sbEJhclNpemUnKSBhdHRyU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3N0YXR1c2VzJykgYXR0clN0YXR1c2VzOiBqcXdpZGdldHMuU2NoZWR1bGVyU3RhdHVzZXM7XG4gICBASW5wdXQoJ3RvdWNoUm93c0hlaWdodCcpIGF0dHJUb3VjaFJvd3NIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQnKSBhdHRyVG91Y2hBcHBvaW50bWVudHNNaW5IZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndG91Y2hTY3JvbGxCYXJTaXplJykgYXR0clRvdWNoU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCd0aW1lWm9uZScpIGF0dHJUaW1lWm9uZTogc3RyaW5nO1xuICAgQElucHV0KCd0b3VjaERheU5hbWVGb3JtYXQnKSBhdHRyVG91Y2hEYXlOYW1lRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xCYXJSYW5nZUZvcm1hdCcpIGF0dHJUb29sQmFyUmFuZ2VGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgndG9vbEJhclJhbmdlRm9ybWF0QWJicicpIGF0dHJUb29sQmFyUmFuZ2VGb3JtYXRBYmJyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xiYXJIZWlnaHQnKSBhdHRyVG9vbGJhckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCd2aWV3cycpIGF0dHJWaWV3czogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgndmlldycpIGF0dHJWaWV3OiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXBwb2ludG1lbnRPcGFjaXR5JywnYXBwb2ludG1lbnRzTWluSGVpZ2h0JywnYXBwb2ludG1lbnREYXRhRmllbGRzJywnYXBwb2ludG1lbnRUb29sdGlwcycsJ2NvbHVtbnNIZWlnaHQnLCdjb250ZXh0TWVudScsJ2NvbnRleHRNZW51T3BlbicsJ2NvbnRleHRNZW51Q2xvc2UnLCdjb250ZXh0TWVudUl0ZW1DbGljaycsJ2NvbnRleHRNZW51Q3JlYXRlJywnY2hhbmdlZEFwcG9pbnRtZW50cycsJ2Rpc2FibGVkJywnZGF0ZScsJ2RheU5hbWVGb3JtYXQnLCdlbmFibGVIb3ZlcicsJ2VkaXREaWFsb2cnLCdlZGl0RGlhbG9nRGF0ZVRpbWVGb3JtYXRTdHJpbmcnLCdlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZycsJ2VkaXREaWFsb2dPcGVuJywnZWRpdERpYWxvZ0NyZWF0ZScsJ2VkaXREaWFsb2dLZXlEb3duJywnZWRpdERpYWxvZ0Nsb3NlJywnZXhwb3J0U2V0dGluZ3MnLCdoZWlnaHQnLCdsZWdlbmRQb3NpdGlvbicsJ2xlZ2VuZEhlaWdodCcsJ2xvY2FsaXphdGlvbicsJ21pbicsJ21heCcsJ3JlYWR5JywncmVuZGVyQXBwb2ludG1lbnQnLCdyZW5kZXJpbmcnLCdyZW5kZXJlZCcsJ3J0bCcsJ3Jlc291cmNlcycsJ3Jvd3NIZWlnaHQnLCdzaG93VG9vbGJhcicsJ3Nob3dMZWdlbmQnLCdzY3JvbGxCYXJTaXplJywnc291cmNlJywnc3RhdHVzZXMnLCd0b3VjaFJvd3NIZWlnaHQnLCd0aGVtZScsJ3RvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0JywndG91Y2hTY3JvbGxCYXJTaXplJywndGltZVpvbmUnLCd0b3VjaERheU5hbWVGb3JtYXQnLCd0b29sQmFyUmFuZ2VGb3JtYXQnLCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJywndG9vbGJhckhlaWdodCcsJ3ZpZXdzJywndmlldycsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFNjaGVkdWxlcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4U2NoZWR1bGVyJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhTY2hlZHVsZXJDb21wb25lbnQgcHJvcGVydGllc1xuICAgYXBwb2ludG1lbnRPcGFjaXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdhcHBvaW50bWVudE9wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRPcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFwcG9pbnRtZW50c01pbkhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRzTWluSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50c01pbkhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcHBvaW50bWVudERhdGFGaWVsZHMoYXJnPzoganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJBcHBvaW50bWVudERhdGFGaWVsZHMge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnREYXRhRmllbGRzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50RGF0YUZpZWxkcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcHBvaW50bWVudFRvb2x0aXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2FwcG9pbnRtZW50VG9vbHRpcHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYXBwb2ludG1lbnRUb29sdGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb2x1bW5zSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbHVtbnNIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVPcGVuKGFyZz86IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnZXZlbnQnXSkgPT4gdm9pZCk6IChtZW51OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVPcGVuWydhcHBvaW50bWVudCddLCBldmVudDoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51T3BlblsnZXZlbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdjb250ZXh0TWVudU9wZW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVPcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbnRleHRNZW51Q2xvc2UoYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydldmVudCddKSA9PiB2b2lkKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVDbG9zZVsnYXBwb2ludG1lbnQnXSwgZXZlbnQ6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNsb3NlWydldmVudCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q2xvc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVDbG9zZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZXh0TWVudUl0ZW1DbGljayhhcmc/OiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2V2ZW50J10pID0+IGJvb2xlYW4pOiAobWVudToganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51SXRlbUNsaWNrWydtZW51J10sIGFwcG9pbnRtZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2FwcG9pbnRtZW50J10sIGV2ZW50OiBqcXdpZGdldHMuU2NoZWR1bGVyQ29udGV4dE1lbnVJdGVtQ2xpY2tbJ2V2ZW50J10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVJdGVtQ2xpY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY29udGV4dE1lbnVJdGVtQ2xpY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGV4dE1lbnVDcmVhdGUoYXJnPzogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnbWVudSddLCBzZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydzZXR0aW5ncyddKSA9PiB2b2lkKTogKG1lbnU6IGpxd2lkZ2V0cy5TY2hlZHVsZXJDb250ZXh0TWVudUNyZWF0ZVsnbWVudSddLCBzZXR0aW5nczoganF3aWRnZXRzLlNjaGVkdWxlckNvbnRleHRNZW51Q3JlYXRlWydzZXR0aW5ncyddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q3JlYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NvbnRleHRNZW51Q3JlYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoYW5nZWRBcHBvaW50bWVudHMoYXJnPzogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckNoYW5nZWRBcHBvaW50bWVudHM+KTogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckNoYW5nZWRBcHBvaW50bWVudHM+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NoYW5nZWRBcHBvaW50bWVudHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2hhbmdlZEFwcG9pbnRtZW50cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkYXRlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGF5TmFtZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZGF5TmFtZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdkYXlOYW1lRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2coYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVUaW1lRm9ybWF0U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2VkaXREaWFsb2dEYXRlVGltZUZvcm1hdFN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nRGF0ZUZvcm1hdFN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0RhdGVGb3JtYXRTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZWRpdERpYWxvZ09wZW4oYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZmllbGRzJ10sIGVkaXRBcHBvaW50bWVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nT3BlblsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQpOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dPcGVuWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nT3BlbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nQ3JlYXRlKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2VkaXRBcHBvaW50bWVudCddKSA9PiB2b2lkKTogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ3JlYXRlWydkaWFsb2cnXSwgZmllbGRzPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDcmVhdGVbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0NyZWF0ZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0NyZWF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ3JlYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXREaWFsb2dLZXlEb3duKGFyZz86IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2VkaXRBcHBvaW50bWVudCddLCBldmVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZXZlbnQnXSkgPT4gYm9vbGVhbik6IChkaWFsb2c/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0tleURvd25bJ2VkaXRBcHBvaW50bWVudCddLCBldmVudD86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nS2V5RG93blsnZXZlbnQnXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nS2V5RG93bicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nS2V5RG93bicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0RGlhbG9nQ2xvc2UoYXJnPzogKGRpYWxvZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2RpYWxvZyddLCBmaWVsZHM/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydmaWVsZHMnXSwgZWRpdEFwcG9pbnRtZW50PzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZWRpdEFwcG9pbnRtZW50J10pID0+IHZvaWQpOiAoZGlhbG9nPzoganF3aWRnZXRzLlNjaGVkdWxlckVkaXREaWFsb2dDbG9zZVsnZGlhbG9nJ10sIGZpZWxkcz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFZGl0RGlhbG9nQ2xvc2VbJ2ZpZWxkcyddLCBlZGl0QXBwb2ludG1lbnQ/OiBqcXdpZGdldHMuU2NoZWR1bGVyRWRpdERpYWxvZ0Nsb3NlWydlZGl0QXBwb2ludG1lbnQnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlZGl0RGlhbG9nQ2xvc2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZWRpdERpYWxvZ0Nsb3NlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV4cG9ydFNldHRpbmdzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJFeHBvcnRTZXR0aW5ncyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdleHBvcnRTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdleHBvcnRTZXR0aW5ncycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGVnZW5kUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZFBvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZEhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbGVnZW5kSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xlZ2VuZEhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2xvY2FsaXphdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkeShhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZWFkeScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZWFkeScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJBcHBvaW50bWVudChhcmc/OiAoZGF0YToganF3aWRnZXRzLlNjaGVkdWxlclJlbmRlckFwcG9pbnRtZW50WydkYXRhJ10pID0+IGFueSk6IChkYXRhOiBqcXdpZGdldHMuU2NoZWR1bGVyUmVuZGVyQXBwb2ludG1lbnRbJ2RhdGEnXSkgPT4gYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlckFwcG9pbnRtZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlckFwcG9pbnRtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmluZyhhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZW5kZXJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVuZGVyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlcmVkKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3JlbmRlcmVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlc291cmNlcyhhcmc/OiBqcXdpZGdldHMuU2NoZWR1bGVyUmVzb3VyY2VzKToganF3aWRnZXRzLlNjaGVkdWxlclJlc291cmNlcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdyZXNvdXJjZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncmVzb3VyY2VzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd3NIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Jvd3NIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigncm93c0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93VG9vbGJhcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93VG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzaG93VG9vbGJhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TGVnZW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dMZWdlbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2hvd0xlZ2VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Njcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXR1c2VzKGFyZz86IGpxd2lkZ2V0cy5TY2hlZHVsZXJTdGF0dXNlcyk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJTdGF0dXNlcyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzdGF0dXNlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzdGF0dXNlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaFJvd3NIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoUm93c0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFJvd3NIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoQXBwb2ludG1lbnRzTWluSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaEFwcG9pbnRtZW50c01pbkhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaFNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoU2Nyb2xsQmFyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b3VjaFNjcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGltZVpvbmUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RpbWVab25lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RpbWVab25lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoRGF5TmFtZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG91Y2hEYXlOYW1lRm9ybWF0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3RvdWNoRGF5TmFtZUZvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sQmFyUmFuZ2VGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xCYXJSYW5nZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbEJhclJhbmdlRm9ybWF0QWJicihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbEJhclJhbmdlRm9ybWF0QWJicicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd0b29sQmFyUmFuZ2VGb3JtYXRBYmJyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xiYXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Rvb2xiYXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcigndG9vbGJhckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aWV3cyhhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3cycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aWV3KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCd2aWV3JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3ZpZXcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4U2NoZWR1bGVyQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkQXBwb2ludG1lbnQoaXRlbToganF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignYWRkQXBwb2ludG1lbnQnLCBpdGVtKTtcbiAgIH1cblxuICAgYmVnaW5BcHBvaW50bWVudHNVcGRhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdiZWdpbkFwcG9pbnRtZW50c1VwZGF0ZScpO1xuICAgfVxuXG4gICBjbGVhckFwcG9pbnRtZW50c1NlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2NsZWFyQXBwb2ludG1lbnRzU2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xvc2VNZW51Jyk7XG4gICB9XG5cbiAgIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignY2xvc2VEaWFsb2cnKTtcbiAgIH1cblxuICAgZGVsZXRlQXBwb2ludG1lbnQoYXBwb2ludG1lbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2RlbGV0ZUFwcG9pbnRtZW50JywgYXBwb2ludG1lbklkKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZW5kQXBwb2ludG1lbnRzVXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignZW5kQXBwb2ludG1lbnRzVXBkYXRlJyk7XG4gICB9XG5cbiAgIGVuc3VyZUFwcG9pbnRtZW50VmlzaWJsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbnN1cmVBcHBvaW50bWVudFZpc2libGUnLCBpZCk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaXRlbTogYW55LCByZXNvdXJjZUlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdlbnN1cmVWaXNpYmxlJywgaXRlbSwgcmVzb3VyY2VJZCk7XG4gICB9XG5cbiAgIGV4cG9ydERhdGEoZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2V4cG9ydERhdGEnLCBmb3JtYXQpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldEFwcG9pbnRtZW50UHJvcGVydHkoYXBwb2ludG1lbnRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldEFwcG9pbnRtZW50UHJvcGVydHknLCBhcHBvaW50bWVudElkLCBuYW1lKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0aW9uKCk6IGpxd2lkZ2V0cy5TY2hlZHVsZXJHZXRTZWxlY3Rpb24ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldFNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBnZXRBcHBvaW50bWVudHMoKTogQXJyYXk8anF3aWRnZXRzLlNjaGVkdWxlckFwcG9pbnRtZW50RGF0YUZpZWxkcz4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldEFwcG9pbnRtZW50cycpO1xuICAgfVxuXG4gICBnZXREYXRhQXBwb2ludG1lbnRzKCk6IEFycmF5PGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ2dldERhdGFBcHBvaW50bWVudHMnKTtcbiAgIH1cblxuICAgaGlkZUFwcG9pbnRtZW50c0J5UmVzb3VyY2UocmVzb3VyY2VzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignaGlkZUFwcG9pbnRtZW50c0J5UmVzb3VyY2UnLCByZXNvdXJjZXNJZCk7XG4gICB9XG5cbiAgIG9wZW5NZW51KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ29wZW5NZW51JywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgb3BlbkRpYWxvZyhsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdvcGVuRGlhbG9nJywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgc2VsZWN0QXBwb2ludG1lbnQoYXBwb2ludG1lbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZWxlY3RBcHBvaW50bWVudCcsIGFwcG9pbnRtZW50SWQpO1xuICAgfVxuXG4gICBzZXRBcHBvaW50bWVudFByb3BlcnR5KGFwcG9pbnRtZW50SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzZXRBcHBvaW50bWVudFByb3BlcnR5JywgYXBwb2ludG1lbnRJZCwgbmFtZSwgdmFsdWUpO1xuICAgfVxuXG4gICBzZWxlY3RDZWxsKGRhdGU6IGFueSwgYWxsZGF5OiBib29sZWFuLCByZXNvdXJjZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3NlbGVjdENlbGwnLCBkYXRlLCBhbGxkYXksIHJlc291cmNlSWQpO1xuICAgfVxuXG4gICBzaG93QXBwb2ludG1lbnRzQnlSZXNvdXJjZShyZXNvdXJjZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTY2hlZHVsZXIoJ3Nob3dBcHBvaW50bWVudHNCeVJlc291cmNlJywgcmVzb3VyY2VJZCk7XG4gICB9XG5cbiAgIHNjcm9sbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsV2lkdGgnKTtcbiAgIH1cblxuICAgc2Nyb2xsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsSGVpZ2h0Jyk7XG4gICB9XG5cbiAgIHNjcm9sbExlZnQobGVmdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U2NoZWR1bGVyKCdzY3JvbGxMZWZ0JywgbGVmdCk7XG4gICB9XG5cbiAgIHNjcm9sbFRvcCh0b3A6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNjaGVkdWxlcignc2Nyb2xsVG9wJywgdG9wKTtcbiAgIH1cblxuXG4gICAvLyBqcXhTY2hlZHVsZXJDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkFwcG9pbnRtZW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudERvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQXBwb2ludG1lbnREZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25BcHBvaW50bWVudEFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxEb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db250ZXh0TWVudUl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbnRleHRNZW51Q3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXRSZWN1cnJlbmNlRGlhbG9nT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkVkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRWRpdERpYWxvZ09wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FZGl0RGlhbG9nQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnRDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50Q2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FwcG9pbnRtZW50Q2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50Q2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnREb3VibGVDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnREb3VibGVDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhcHBvaW50bWVudERlbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQXBwb2ludG1lbnREZWxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignYXBwb2ludG1lbnRBZGQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFwcG9pbnRtZW50QWRkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JpbmRpbmdDb21wbGV0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmluZGluZ0NvbXBsZXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbENsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxEb3VibGVDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbERvdWJsZUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51T3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29udGV4dE1lbnVPcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51Q2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29udGV4dE1lbnVJdGVtQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbnRleHRNZW51SXRlbUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbnRleHRNZW51Q3JlYXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db250ZXh0TWVudUNyZWF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkYXRlQ2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EYXRlQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXRSZWN1cnJlbmNlRGlhbG9nT3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdFJlY3VycmVuY2VEaWFsb2dPcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2VkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkVkaXRSZWN1cnJlbmNlRGlhbG9nQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdERpYWxvZ0NyZWF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdERpYWxvZ0NyZWF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdlZGl0RGlhbG9nT3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRWRpdERpYWxvZ09wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZWRpdERpYWxvZ0Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FZGl0RGlhbG9nQ2xvc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndmlld0NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmlld0NoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4U2NoZWR1bGVyQ29tcG9uZW50XG4iXX0=