<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxdata.export.js';
    import '../jqwidgets/jqxdate.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxmenu.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxradiobutton.js';
    import '../jqwidgets/jqxcheckbox.js';
    import '../jqwidgets/jqxwindow.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxcolorpicker.js';
    import '../jqwidgets/jqxcombobox.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxnumberinput.js';
    import '../jqwidgets/jqxinput.js';
    import '../jqwidgets/globalization/globalize.js';
    import '../jqwidgets/jqxcalendar.js';
    import '../jqwidgets/jqxdatetimeinput.js';
    import '../jqwidgets/jqxscheduler.js';
    import '../jqwidgets/jqxscheduler.api.js';

    export default {
        props: {
            aiProvider: String,
            aiKey: String,
            aiModel: String,
            aiProxyUrl: String,
            aiHeaders: Object,
            aiSendRequest: Function,
            aiMaxRows: Number,
            allowOverlap: {
                default: true,
                type: Boolean
            },
            blockedTimes: Array,
            maxDuration: Number,
            minDuration: Number,
            appointmentOpacity: Number,
            appointmentsMinHeight: Number,
            appointmentDataFields: Object,
            appointmentTooltips: {
                default: true,
                type: Boolean
            },
            columnsHeight: Number,
            contextMenu: {
                default: true,
                type: Boolean
            },
            contextMenuOpen: Function,
            contextMenuClose: Function,
            contextMenuItemClick: Function,
            contextMenuCreate: Function,
            changedAppointments: Array,
            disabled: {
                default: false,
                type: Boolean
            },
            date: [Object, Date],
            dayNameFormat: String,
            enableHover: {
                default: true,
                type: Boolean
            },
            editDialog: {
                default: true,
                type: Boolean
            },
            editDialogDateTimeFormatString: String,
            editDialogDateFormatString: String,
            editDialogOpen: Function,
            editDialogCreate: Function,
            editDialogKeyDown: Function,
            editDialogClose: Function,
            exportSettings: Object,
            height: [Number, String],
            legendPosition: String,
            legendHeight: Number,
            localization: Object,
            maxAppointmentsPerDay: Number,
            min: [Object, Date],
            max: [Object, Date],
            ready: Function,
            renderAppointment: Function,
            rendering: Function,
            rendered: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            resources: Object,
            rowsHeight: Number,
            showToolbar: {
                default: true,
                type: Boolean
            },
            showLegend: {
                default: false,
                type: Boolean
            },
            showCurrent: {
                default: true,
                type: Boolean
            },
            showAllDayRow: {
                default: true,
                type: Boolean
            },
            showCurrentAppointment: {
                default: true,
                type: Boolean
            },
            scrollBarSize: Number,
            source: Object,
            statuses: Object,
            touchRowsHeight: Number,
            theme: String,
            touchAppointmentsMinHeight: Number,
            touchScrollBarSize: Number,
            timeZone: String,
            timeRulerWidth: Number,
            touchDayNameFormat: String,
            toolBarRangeFormat: String,
            toolBarRangeFormatAbbr: String,
            toolbarHeight: Number,
            undoRedo: {
                default: true,
                type: Boolean
            },
            undoRedoLimit: Number,
            views: Array,
            view: [Number, String],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["scheduleraiResult","scheduleraiError","appointmentChange","appointmentClick","appointmentDoubleClick","appointmentDelete","appointmentAdd","appointmentAdding","appointmentChanging","appointmentDeleting","undoRedoChange","bindingComplete","cellClick","cellDoubleClick","contextMenuOpen","contextMenuClose","contextMenuItemClick","contextMenuCreate","dateChange","editRecurrenceDialogOpen","editRecurrenceDialogClose","editDialogCreate","editDialogOpen","editDialogClose","viewChange"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxScheduler" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxScheduler(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxScheduler(usedProps[i]);
                }
                return resultToReturn;
            }
            function aiConfig(config) {
                return JQXLite(componentSelector).jqxScheduler('aiConfig', config);  
            }
            function aiCommand(text, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiCommand', text, callback);  
            }
            function aiScheduleAppointment(text, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiScheduleAppointment', text, callback);  
            }
            function aiFindSlot(text, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiFindSlot', text, callback);  
            }
            function aiBookSlot(slot, details) {
                return JQXLite(componentSelector).jqxScheduler('aiBookSlot', slot, details);  
            }
            function aiResolveConflicts(options, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiResolveConflicts', options, callback);  
            }
            function aiApplyResolution(proposals) {
                return JQXLite(componentSelector).jqxScheduler('aiApplyResolution', proposals);  
            }
            function aiAsk(text, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiAsk', text, callback);  
            }
            function aiSummarize(callback) {
                return JQXLite(componentSelector).jqxScheduler('aiSummarize', callback);  
            }
            function aiExplainAppointment(key, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiExplainAppointment', key, callback);  
            }
            function aiClassifyAppointments(options, callback) {
                return JQXLite(componentSelector).jqxScheduler('aiClassifyAppointments', options, callback);  
            }
            function addAppointment(item) {
                return JQXLite(componentSelector).jqxScheduler('addAppointment', item);  
            }
            function beginAppointmentsUpdate() {
                JQXLite(componentSelector).jqxScheduler('beginAppointmentsUpdate');  
            }
            function clearAppointmentsSelection() {
                JQXLite(componentSelector).jqxScheduler('clearAppointmentsSelection');  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxScheduler('clearSelection');  
            }
            function closeMenu() {
                JQXLite(componentSelector).jqxScheduler('closeMenu');  
            }
            function closeDialog() {
                JQXLite(componentSelector).jqxScheduler('closeDialog');  
            }
            function deleteAppointment(appointmenId) {
                return JQXLite(componentSelector).jqxScheduler('deleteAppointment', appointmenId);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxScheduler('destroy');  
            }
            function endAppointmentsUpdate() {
                JQXLite(componentSelector).jqxScheduler('endAppointmentsUpdate');  
            }
            function ensureAppointmentVisible(id) {
                JQXLite(componentSelector).jqxScheduler('ensureAppointmentVisible', id);  
            }
            function ensureVisible(item, resourceId) {
                JQXLite(componentSelector).jqxScheduler('ensureVisible', item, resourceId);  
            }
            function findAvailableSlots(options) {
                return JQXLite(componentSelector).jqxScheduler('findAvailableSlots', options);  
            }
            function filterAppointments(text) {
                JQXLite(componentSelector).jqxScheduler('filterAppointments', text);  
            }
            function importData(data, options) {
                return JQXLite(componentSelector).jqxScheduler('importData', data, options);  
            }
            function exportData(format) {
                JQXLite(componentSelector).jqxScheduler('exportData', format);  
            }
            function focus() {
                JQXLite(componentSelector).jqxScheduler('focus');  
            }
            function getAppointmentProperty(appointmentId, name) {
                return JQXLite(componentSelector).jqxScheduler('getAppointmentProperty', appointmentId, name);  
            }
            function getSelection() {
                return JQXLite(componentSelector).jqxScheduler('getSelection');  
            }
            function getAppointments() {
                return JQXLite(componentSelector).jqxScheduler('getAppointments');  
            }
            function getDataAppointments() {
                return JQXLite(componentSelector).jqxScheduler('getDataAppointments');  
            }
            function hideAppointmentsByResource(resourcesId) {
                JQXLite(componentSelector).jqxScheduler('hideAppointmentsByResource', resourcesId);  
            }
            function navigateTo(date) {
                JQXLite(componentSelector).jqxScheduler('navigateTo', date);  
            }
            function navigateForward() {
                JQXLite(componentSelector).jqxScheduler('navigateForward');  
            }
            function navigateBackward() {
                JQXLite(componentSelector).jqxScheduler('navigateBackward');  
            }
            function openMenu(left, top) {
                JQXLite(componentSelector).jqxScheduler('openMenu', left, top);  
            }
            function openDialog(left, top) {
                JQXLite(componentSelector).jqxScheduler('openDialog', left, top);  
            }
            function selectAppointment(appointmentId) {
                JQXLite(componentSelector).jqxScheduler('selectAppointment', appointmentId);  
            }
            function setAppointmentProperty(appointmentId, name, value) {
                JQXLite(componentSelector).jqxScheduler('setAppointmentProperty', appointmentId, name, value);  
            }
            function selectCell(date, allday, resourceId) {
                JQXLite(componentSelector).jqxScheduler('selectCell', date, allday, resourceId);  
            }
            function showAppointmentsByResource(resourceId) {
                JQXLite(componentSelector).jqxScheduler('showAppointmentsByResource', resourceId);  
            }
            function scrollWidth() {
                return JQXLite(componentSelector).jqxScheduler('scrollWidth');  
            }
            function scrollHeight() {
                return JQXLite(componentSelector).jqxScheduler('scrollHeight');  
            }
            function scrollLeft(left) {
                JQXLite(componentSelector).jqxScheduler('scrollLeft', left);  
            }
            function scrollTop(top) {
                JQXLite(componentSelector).jqxScheduler('scrollTop', top);  
            }
            function scrollOffset(top, left) {
                return JQXLite(componentSelector).jqxScheduler('scrollOffset', top, left);  
            }
            function scrollToTime(time) {
                return JQXLite(componentSelector).jqxScheduler('scrollToTime', time);  
            }
            function undo() {
                return JQXLite(componentSelector).jqxScheduler('undo');  
            }
            function redo() {
                return JQXLite(componentSelector).jqxScheduler('redo');  
            }
            function canUndo() {
                return JQXLite(componentSelector).jqxScheduler('canUndo');  
            }
            function canRedo() {
                return JQXLite(componentSelector).jqxScheduler('canRedo');  
            }
            function clearUndoRedo() {
                JQXLite(componentSelector).jqxScheduler('clearUndoRedo');  
            }
            function _aiProvider (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiProvider', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiProvider');
                }
            }
            function _aiKey (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiKey', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiKey');
                }
            }
            function _aiModel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiModel', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiModel');
                }
            }
            function _aiProxyUrl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiProxyUrl', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiProxyUrl');
                }
            }
            function _aiHeaders (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiHeaders', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiHeaders');
                }
            }
            function _aiSendRequest (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiSendRequest', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiSendRequest');
                }
            }
            function _aiMaxRows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('aiMaxRows', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('aiMaxRows');
                }
            }
            function _allowOverlap (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('allowOverlap', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('allowOverlap');
                }
            }
            function _blockedTimes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('blockedTimes', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('blockedTimes');
                }
            }
            function _maxDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('maxDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('maxDuration');
                }
            }
            function _minDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('minDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('minDuration');
                }
            }
            function _appointmentOpacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('appointmentOpacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('appointmentOpacity');
                }
            }
            function _appointmentsMinHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('appointmentsMinHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('appointmentsMinHeight');
                }
            }
            function _appointmentDataFields (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('appointmentDataFields', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('appointmentDataFields');
                }
            }
            function _appointmentTooltips (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('appointmentTooltips', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('appointmentTooltips');
                }
            }
            function _columnsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('columnsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('columnsHeight');
                }
            }
            function _contextMenu (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('contextMenu', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('contextMenu');
                }
            }
            function _contextMenuOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('contextMenuOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('contextMenuOpen');
                }
            }
            function _contextMenuClose (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('contextMenuClose', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('contextMenuClose');
                }
            }
            function _contextMenuItemClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('contextMenuItemClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('contextMenuItemClick');
                }
            }
            function _contextMenuCreate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('contextMenuCreate', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('contextMenuCreate');
                }
            }
            function _changedAppointments (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('changedAppointments', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('changedAppointments');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('disabled');
                }
            }
            function _date (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('date', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('date');
                }
            }
            function _dayNameFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('dayNameFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('dayNameFormat');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('enableHover');
                }
            }
            function _editDialog (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialog', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialog');
                }
            }
            function _editDialogDateTimeFormatString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogDateTimeFormatString', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogDateTimeFormatString');
                }
            }
            function _editDialogDateFormatString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogDateFormatString', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogDateFormatString');
                }
            }
            function _editDialogOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogOpen');
                }
            }
            function _editDialogCreate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogCreate', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogCreate');
                }
            }
            function _editDialogKeyDown (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogKeyDown', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogKeyDown');
                }
            }
            function _editDialogClose (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('editDialogClose', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('editDialogClose');
                }
            }
            function _exportSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('exportSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('exportSettings');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('height');
                }
            }
            function _legendPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('legendPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('legendPosition');
                }
            }
            function _legendHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('legendHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('legendHeight');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('localization');
                }
            }
            function _maxAppointmentsPerDay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('maxAppointmentsPerDay', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('maxAppointmentsPerDay');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('max');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('ready');
                }
            }
            function _renderAppointment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('renderAppointment', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('renderAppointment');
                }
            }
            function _rendering (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('rendering', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('rendering');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('rendered');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('rtl');
                }
            }
            function _resources (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('resources', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('resources');
                }
            }
            function _rowsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('rowsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('rowsHeight');
                }
            }
            function _showToolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('showToolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('showToolbar');
                }
            }
            function _showLegend (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('showLegend', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('showLegend');
                }
            }
            function _showCurrent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('showCurrent', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('showCurrent');
                }
            }
            function _showAllDayRow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('showAllDayRow', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('showAllDayRow');
                }
            }
            function _showCurrentAppointment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('showCurrentAppointment', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('showCurrentAppointment');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('scrollBarSize');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('source');
                }
            }
            function _statuses (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('statuses', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('statuses');
                }
            }
            function _touchRowsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('touchRowsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('touchRowsHeight');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('theme');
                }
            }
            function _touchAppointmentsMinHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('touchAppointmentsMinHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('touchAppointmentsMinHeight');
                }
            }
            function _touchScrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('touchScrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('touchScrollBarSize');
                }
            }
            function _timeZone (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('timeZone', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('timeZone');
                }
            }
            function _timeRulerWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('timeRulerWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('timeRulerWidth');
                }
            }
            function _touchDayNameFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('touchDayNameFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('touchDayNameFormat');
                }
            }
            function _toolBarRangeFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('toolBarRangeFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('toolBarRangeFormat');
                }
            }
            function _toolBarRangeFormatAbbr (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('toolBarRangeFormatAbbr', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('toolBarRangeFormatAbbr');
                }
            }
            function _toolbarHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('toolbarHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('toolbarHeight');
                }
            }
            function _undoRedo (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('undoRedo', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('undoRedo');
                }
            }
            function _undoRedoLimit (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('undoRedoLimit', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('undoRedoLimit');
                }
            }
            function _views (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('views', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('views');
                }
            }
            function _view (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('view', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('view');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScheduler('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxScheduler('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxScheduler(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['aiProvider','aiKey','aiModel','aiProxyUrl','aiHeaders','aiSendRequest','aiMaxRows','allowOverlap','blockedTimes','maxDuration','minDuration','appointmentOpacity','appointmentsMinHeight','appointmentDataFields','appointmentTooltips','columnsHeight','contextMenu','contextMenuOpen','contextMenuClose','contextMenuItemClick','contextMenuCreate','changedAppointments','disabled','date','dayNameFormat','enableHover','editDialog','editDialogDateTimeFormatString','editDialogDateFormatString','editDialogOpen','editDialogCreate','editDialogKeyDown','editDialogClose','exportSettings','height','legendPosition','legendHeight','localization','maxAppointmentsPerDay','min','max','ready','renderAppointment','rendering','rendered','rtl','resources','rowsHeight','showToolbar','showLegend','showCurrent','showAllDayRow','showCurrentAppointment','scrollBarSize','source','statuses','touchRowsHeight','theme','touchAppointmentsMinHeight','touchScrollBarSize','timeZone','timeRulerWidth','touchDayNameFormat','toolBarRangeFormat','toolBarRangeFormatAbbr','toolbarHeight','undoRedo','undoRedoLimit','views','view','width'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get aiProvider() {
                     return _aiProvider();
                 },
                 set aiProvider(newValue) {
                     _aiProvider(newValue);
                 },
                 get aiKey() {
                     return _aiKey();
                 },
                 set aiKey(newValue) {
                     _aiKey(newValue);
                 },
                 get aiModel() {
                     return _aiModel();
                 },
                 set aiModel(newValue) {
                     _aiModel(newValue);
                 },
                 get aiProxyUrl() {
                     return _aiProxyUrl();
                 },
                 set aiProxyUrl(newValue) {
                     _aiProxyUrl(newValue);
                 },
                 get aiHeaders() {
                     return _aiHeaders();
                 },
                 set aiHeaders(newValue) {
                     _aiHeaders(newValue);
                 },
                 get aiSendRequest() {
                     return _aiSendRequest();
                 },
                 set aiSendRequest(newValue) {
                     _aiSendRequest(newValue);
                 },
                 get aiMaxRows() {
                     return _aiMaxRows();
                 },
                 set aiMaxRows(newValue) {
                     _aiMaxRows(newValue);
                 },
                 get allowOverlap() {
                     return _allowOverlap();
                 },
                 set allowOverlap(newValue) {
                     _allowOverlap(newValue);
                 },
                 get blockedTimes() {
                     return _blockedTimes();
                 },
                 set blockedTimes(newValue) {
                     _blockedTimes(newValue);
                 },
                 get maxDuration() {
                     return _maxDuration();
                 },
                 set maxDuration(newValue) {
                     _maxDuration(newValue);
                 },
                 get minDuration() {
                     return _minDuration();
                 },
                 set minDuration(newValue) {
                     _minDuration(newValue);
                 },
                 get appointmentOpacity() {
                     return _appointmentOpacity();
                 },
                 set appointmentOpacity(newValue) {
                     _appointmentOpacity(newValue);
                 },
                 get appointmentsMinHeight() {
                     return _appointmentsMinHeight();
                 },
                 set appointmentsMinHeight(newValue) {
                     _appointmentsMinHeight(newValue);
                 },
                 get appointmentDataFields() {
                     return _appointmentDataFields();
                 },
                 set appointmentDataFields(newValue) {
                     _appointmentDataFields(newValue);
                 },
                 get appointmentTooltips() {
                     return _appointmentTooltips();
                 },
                 set appointmentTooltips(newValue) {
                     _appointmentTooltips(newValue);
                 },
                 get columnsHeight() {
                     return _columnsHeight();
                 },
                 set columnsHeight(newValue) {
                     _columnsHeight(newValue);
                 },
                 get contextMenu() {
                     return _contextMenu();
                 },
                 set contextMenu(newValue) {
                     _contextMenu(newValue);
                 },
                 get contextMenuOpen() {
                     return _contextMenuOpen();
                 },
                 set contextMenuOpen(newValue) {
                     _contextMenuOpen(newValue);
                 },
                 get contextMenuClose() {
                     return _contextMenuClose();
                 },
                 set contextMenuClose(newValue) {
                     _contextMenuClose(newValue);
                 },
                 get contextMenuItemClick() {
                     return _contextMenuItemClick();
                 },
                 set contextMenuItemClick(newValue) {
                     _contextMenuItemClick(newValue);
                 },
                 get contextMenuCreate() {
                     return _contextMenuCreate();
                 },
                 set contextMenuCreate(newValue) {
                     _contextMenuCreate(newValue);
                 },
                 get changedAppointments() {
                     return _changedAppointments();
                 },
                 set changedAppointments(newValue) {
                     _changedAppointments(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get date() {
                     return _date();
                 },
                 set date(newValue) {
                     _date(newValue);
                 },
                 get dayNameFormat() {
                     return _dayNameFormat();
                 },
                 set dayNameFormat(newValue) {
                     _dayNameFormat(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get editDialog() {
                     return _editDialog();
                 },
                 set editDialog(newValue) {
                     _editDialog(newValue);
                 },
                 get editDialogDateTimeFormatString() {
                     return _editDialogDateTimeFormatString();
                 },
                 set editDialogDateTimeFormatString(newValue) {
                     _editDialogDateTimeFormatString(newValue);
                 },
                 get editDialogDateFormatString() {
                     return _editDialogDateFormatString();
                 },
                 set editDialogDateFormatString(newValue) {
                     _editDialogDateFormatString(newValue);
                 },
                 get editDialogOpen() {
                     return _editDialogOpen();
                 },
                 set editDialogOpen(newValue) {
                     _editDialogOpen(newValue);
                 },
                 get editDialogCreate() {
                     return _editDialogCreate();
                 },
                 set editDialogCreate(newValue) {
                     _editDialogCreate(newValue);
                 },
                 get editDialogKeyDown() {
                     return _editDialogKeyDown();
                 },
                 set editDialogKeyDown(newValue) {
                     _editDialogKeyDown(newValue);
                 },
                 get editDialogClose() {
                     return _editDialogClose();
                 },
                 set editDialogClose(newValue) {
                     _editDialogClose(newValue);
                 },
                 get exportSettings() {
                     return _exportSettings();
                 },
                 set exportSettings(newValue) {
                     _exportSettings(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get legendPosition() {
                     return _legendPosition();
                 },
                 set legendPosition(newValue) {
                     _legendPosition(newValue);
                 },
                 get legendHeight() {
                     return _legendHeight();
                 },
                 set legendHeight(newValue) {
                     _legendHeight(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get maxAppointmentsPerDay() {
                     return _maxAppointmentsPerDay();
                 },
                 set maxAppointmentsPerDay(newValue) {
                     _maxAppointmentsPerDay(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get ready() {
                     return _ready();
                 },
                 set ready(newValue) {
                     _ready(newValue);
                 },
                 get renderAppointment() {
                     return _renderAppointment();
                 },
                 set renderAppointment(newValue) {
                     _renderAppointment(newValue);
                 },
                 get rendering() {
                     return _rendering();
                 },
                 set rendering(newValue) {
                     _rendering(newValue);
                 },
                 get rendered() {
                     return _rendered();
                 },
                 set rendered(newValue) {
                     _rendered(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get resources() {
                     return _resources();
                 },
                 set resources(newValue) {
                     _resources(newValue);
                 },
                 get rowsHeight() {
                     return _rowsHeight();
                 },
                 set rowsHeight(newValue) {
                     _rowsHeight(newValue);
                 },
                 get showToolbar() {
                     return _showToolbar();
                 },
                 set showToolbar(newValue) {
                     _showToolbar(newValue);
                 },
                 get showLegend() {
                     return _showLegend();
                 },
                 set showLegend(newValue) {
                     _showLegend(newValue);
                 },
                 get showCurrent() {
                     return _showCurrent();
                 },
                 set showCurrent(newValue) {
                     _showCurrent(newValue);
                 },
                 get showAllDayRow() {
                     return _showAllDayRow();
                 },
                 set showAllDayRow(newValue) {
                     _showAllDayRow(newValue);
                 },
                 get showCurrentAppointment() {
                     return _showCurrentAppointment();
                 },
                 set showCurrentAppointment(newValue) {
                     _showCurrentAppointment(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get statuses() {
                     return _statuses();
                 },
                 set statuses(newValue) {
                     _statuses(newValue);
                 },
                 get touchRowsHeight() {
                     return _touchRowsHeight();
                 },
                 set touchRowsHeight(newValue) {
                     _touchRowsHeight(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get touchAppointmentsMinHeight() {
                     return _touchAppointmentsMinHeight();
                 },
                 set touchAppointmentsMinHeight(newValue) {
                     _touchAppointmentsMinHeight(newValue);
                 },
                 get touchScrollBarSize() {
                     return _touchScrollBarSize();
                 },
                 set touchScrollBarSize(newValue) {
                     _touchScrollBarSize(newValue);
                 },
                 get timeZone() {
                     return _timeZone();
                 },
                 set timeZone(newValue) {
                     _timeZone(newValue);
                 },
                 get timeRulerWidth() {
                     return _timeRulerWidth();
                 },
                 set timeRulerWidth(newValue) {
                     _timeRulerWidth(newValue);
                 },
                 get touchDayNameFormat() {
                     return _touchDayNameFormat();
                 },
                 set touchDayNameFormat(newValue) {
                     _touchDayNameFormat(newValue);
                 },
                 get toolBarRangeFormat() {
                     return _toolBarRangeFormat();
                 },
                 set toolBarRangeFormat(newValue) {
                     _toolBarRangeFormat(newValue);
                 },
                 get toolBarRangeFormatAbbr() {
                     return _toolBarRangeFormatAbbr();
                 },
                 set toolBarRangeFormatAbbr(newValue) {
                     _toolBarRangeFormatAbbr(newValue);
                 },
                 get toolbarHeight() {
                     return _toolbarHeight();
                 },
                 set toolbarHeight(newValue) {
                     _toolbarHeight(newValue);
                 },
                 get undoRedo() {
                     return _undoRedo();
                 },
                 set undoRedo(newValue) {
                     _undoRedo(newValue);
                 },
                 get undoRedoLimit() {
                     return _undoRedoLimit();
                 },
                 set undoRedoLimit(newValue) {
                     _undoRedoLimit(newValue);
                 },
                 get views() {
                     return _views();
                 },
                 set views(newValue) {
                     _views(newValue);
                 },
                 get view() {
                     return _view();
                 },
                 set view(newValue) {
                     _view(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('scheduleraiResult', function (event) { that.emit('scheduleraiResult', event); });
                JQXLite(componentSelector).on('scheduleraiError', function (event) { that.emit('scheduleraiError', event); });
                JQXLite(componentSelector).on('appointmentChange', function (event) { that.emit('appointmentChange', event); });
                JQXLite(componentSelector).on('appointmentClick', function (event) { that.emit('appointmentClick', event); });
                JQXLite(componentSelector).on('appointmentDoubleClick', function (event) { that.emit('appointmentDoubleClick', event); });
                JQXLite(componentSelector).on('appointmentDelete', function (event) { that.emit('appointmentDelete', event); });
                JQXLite(componentSelector).on('appointmentAdd', function (event) { that.emit('appointmentAdd', event); });
                JQXLite(componentSelector).on('appointmentAdding', function (event) { that.emit('appointmentAdding', event); });
                JQXLite(componentSelector).on('appointmentChanging', function (event) { that.emit('appointmentChanging', event); });
                JQXLite(componentSelector).on('appointmentDeleting', function (event) { that.emit('appointmentDeleting', event); });
                JQXLite(componentSelector).on('undoRedoChange', function (event) { that.emit('undoRedoChange', event); });
                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('cellClick', function (event) { that.emit('cellClick', event); });
                JQXLite(componentSelector).on('cellDoubleClick', function (event) { that.emit('cellDoubleClick', event); });
                JQXLite(componentSelector).on('contextMenuOpen', function (event) { that.emit('contextMenuOpen', event); });
                JQXLite(componentSelector).on('contextMenuClose', function (event) { that.emit('contextMenuClose', event); });
                JQXLite(componentSelector).on('contextMenuItemClick', function (event) { that.emit('contextMenuItemClick', event); });
                JQXLite(componentSelector).on('contextMenuCreate', function (event) { that.emit('contextMenuCreate', event); });
                JQXLite(componentSelector).on('dateChange', function (event) { that.emit('dateChange', event); });
                JQXLite(componentSelector).on('editRecurrenceDialogOpen', function (event) { that.emit('editRecurrenceDialogOpen', event); });
                JQXLite(componentSelector).on('editRecurrenceDialogClose', function (event) { that.emit('editRecurrenceDialogClose', event); });
                JQXLite(componentSelector).on('editDialogCreate', function (event) { that.emit('editDialogCreate', event); });
                JQXLite(componentSelector).on('editDialogOpen', function (event) { that.emit('editDialogOpen', event); });
                JQXLite(componentSelector).on('editDialogClose', function (event) { that.emit('editDialogClose', event); });
                JQXLite(componentSelector).on('viewChange', function (event) { that.emit('viewChange', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			// The props that changed, and only those (arrays and objects by reference): all of
			// them again, on every update, reset the widget (JqxGrid bound its source again and
			// showed "Loading...", JqxDropDownList went back to its selectedIndex).
			watch(__manageProps__, (widgetOptions) => {
				if (!__hasJQXLite__ || !__created__) return;
				const changed = {};
				let hasChanges = false;
				for (const key in widgetOptions) {
					if (!Object.is(widgetOptions[key], __appliedProps__[key])) {
						changed[key] = widgetOptions[key];
						hasChanges = true;
					}
				}
				// new data resets the widget's selection: the selection the props ask for goes with it
				if ('source' in changed) {
					for (const key of ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']) {
						if (!(key in changed) && widgetOptions[key] !== undefined) changed[key] = widgetOptions[key];
					}
				}
				__appliedProps__ = widgetOptions;
				if (hasChanges) JQXLite(componentSelector).jqxScheduler(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxScheduler('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, aiConfig, aiCommand, aiScheduleAppointment, aiFindSlot, aiBookSlot, aiResolveConflicts, aiApplyResolution, aiAsk, aiSummarize, aiExplainAppointment, aiClassifyAppointments, addAppointment, beginAppointmentsUpdate, clearAppointmentsSelection, clearSelection, closeMenu, closeDialog, deleteAppointment, destroy, endAppointmentsUpdate, ensureAppointmentVisible, ensureVisible, findAvailableSlots, filterAppointments, importData, exportData, focus, getAppointmentProperty, getSelection, getAppointments, getDataAppointments, hideAppointmentsByResource, navigateTo, navigateForward, navigateBackward, openMenu, openDialog, selectAppointment, setAppointmentProperty, selectCell, showAppointmentsByResource, scrollWidth, scrollHeight, scrollLeft, scrollTop, scrollOffset, scrollToTime, undo, redo, canUndo, canRedo, clearUndoRedo, setOptions, options, getOptions, createComponent};
        },
    }
</script>
