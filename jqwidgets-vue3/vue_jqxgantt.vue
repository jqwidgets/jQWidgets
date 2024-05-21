<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxgantt.api.js';
    import '../jqwidgets/jqxgantt.js';

    export default {
        props: {
            adjustToNonworkingTime: Boolean,
            autoSchedule: Boolean,
            autoScheduleStrictMode: Boolean,
            autoScrollStep: Number,
            columnMenu: Boolean,
            columnMinWidth: [String, Number],
            columnResize: Boolean,
            columnResizeFeedback: Boolean,
            currentTime: [String, Date],
            currentTimeIndicator: Boolean,
            currentTimeIndicatorInterval: Number,
            dataExportFileName: String,
            source: Any,
            dayFormat: String,
            dateEnd: [String, Date],
            dateStart: [String, Date],
            dateMarkers: [{label?: string, date: Date, String, className?: string }[]],
            disabled: Boolean,
            disableAutoScroll: Boolean,
            disableTaskDrag: Boolean,
            disableTaskProgressChange: Boolean,
            disableTaskResize: Boolean,
            disableSelection: Boolean,
            disableSegmentDrag: Boolean,
            disableSegmentResize: Boolean,
            disableWindowEditor: Boolean,
            durationUnit: String,
            filterRow: Boolean,
            firstDayOfWeek: Number,
            groupByResources: Boolean,
            headerTemplate: Any,
            hideDateMarkers: Boolean,
            hideTimelineHeader: Boolean,
            hideTimelineHeaderDetails: Boolean,
            hideTimelineSecondHeaderDetails: Boolean,
            hideResourcePanel: Boolean,
            horizontalScrollBarVisibility: String,
            hourFormat: String,
            infiniteTimeline: Boolean,
            infiniteTimelineStep: Number,
            inverted: Boolean,
            keyboardNavigation: Boolean,
            max: [String, Date],
            min: [String, Date],
            monthFormat: String,
            monthScale: String,
            nonworkingDays: Number[],
            nonworkingHours: [Number[], Number[][]],
            onTaskRender: Any,
            popupWindowCustomizationFunction: Any,
            popupWindowTabs: String[],
            progressLabelFormatFunction: Any,
            quarterFormat: String,
            resources: {label: string, capacity: number, value: string, workload: number, progress: number, id: string,  class: string }[],
            resourceColumns: {label: string, value: string}[],
            resourceFiltering: Boolean,
            resourceGroupFormatFunction: Any,
            resourcePanelHeaderTemplate: Any,
            resourcePanelMin: [Number, String],
            resourcePanelSize: [Number, String],
            resourcePanelRefreshRate: Number,
            resourceTimelineFormatFunction: Any,
            resourceTimelineMode: String,
            resourceTimelineView: String,
            rightToLeft: Boolean,
            selectedTaskIds: [Number[], String[]],
            selectedResourceIds: [Number[], String[]],
            shadeUntilCurrentTime: Boolean,
            showSelectionColumn: Boolean,
            showBaseline: Boolean,
            showProgressLabel: Boolean,
            snapToNearest: Boolean,
            sortFunction: { (dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]): void },
            sortMode: String,
            tasks: [{label: string, dateStart: string, Date, dateEnd: string, Date, expanded?: boolean, progress?: number, type?: string}[]],
            taskColumns: {label: string, value: string}[],
            taskFiltering: Boolean,
            taskPanelMin: [String, Number],
            taskPanelSize: [String, Number],
            timelineMin: [String, Number],
            treeMin: [String, Number],
            treeSize: [String, Number],
            timelineHeaderFormatFunction: Any,
            tooltip: Object,
            verticalScrollBarVisibility: String,
            view: String,
            yearFormat: String,
            weekFormat: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["beginUpdate","endUpdate","connectionStart","connectionEnd","change","columnResize","closing","close","collapse","dragStart","dragEnd","expand","filter","itemClick","itemInsert","itemRemove","itemUpdate","opening","open","progressChangeStart","progressChangeEnd","resizeStart","resizeEnd","sort","scrollBottomReached","scrollTopReached","scrollLeftReached","scrollRightReached"],
        setup(props, context) {
			const id = "jqxGantt" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxGantt(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxGantt(usedProps[i]);
                }
                return resultToReturn;
            }
            function addFilter(columns, filterGroup) {
                JQXLite(componentSelector).jqxGantt('addFilter', columns, filterGroup);  
            }
            function clearFilters() {
                JQXLite(componentSelector).jqxGantt('clearFilters');  
            }
            function clearSort() {
                JQXLite(componentSelector).jqxGantt('clearSort');  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxGantt('clearSelection');  
            }
            function clearState() {
                JQXLite(componentSelector).jqxGantt('clearState');  
            }
            function clearTasks() {
                JQXLite(componentSelector).jqxGantt('clearTasks');  
            }
            function clearResources() {
                JQXLite(componentSelector).jqxGantt('clearResources');  
            }
            function createConnection(startTaskIndex, taskEndIndex, connectionType, lag) {
                JQXLite(componentSelector).jqxGantt('createConnection', startTaskIndex, taskEndIndex, connectionType, lag);  
            }
            function collapse(id) {
                JQXLite(componentSelector).jqxGantt('collapse', id);  
            }
            function beginUpdate() {
                JQXLite(componentSelector).jqxGantt('beginUpdate');  
            }
            function endUpdate() {
                JQXLite(componentSelector).jqxGantt('endUpdate');  
            }
            function ensureVisible(taskId) {
                JQXLite(componentSelector).jqxGantt('ensureVisible', taskId);  
            }
            function expand(id) {
                JQXLite(componentSelector).jqxGantt('expand', id);  
            }
            function exportData(dataFormat, callback) {
                JQXLite(componentSelector).jqxGantt('exportData', dataFormat, callback);  
            }
            function getConnections() {
                return JQXLite(componentSelector).jqxGantt('getConnections');  
            }
            function getConnectionDetails(connectionId) {
                return JQXLite(componentSelector).jqxGantt('getConnectionDetails', connectionId);  
            }
            function getState() {
                return JQXLite(componentSelector).jqxGantt('getState');  
            }
            function getItemPath(item) {
                return JQXLite(componentSelector).jqxGantt('getItemPath', item);  
            }
            function getTask(itemId) {
                return JQXLite(componentSelector).jqxGantt('getTask', itemId);  
            }
            function getTasks() {
                return JQXLite(componentSelector).jqxGantt('getTasks');  
            }
            function getTaskIndex(task) {
                return JQXLite(componentSelector).jqxGantt('getTaskIndex', task);  
            }
            function getTaskConnections(taskId) {
                return JQXLite(componentSelector).jqxGantt('getTaskConnections', taskId);  
            }
            function getTaskProject(task) {
                return JQXLite(componentSelector).jqxGantt('getTaskProject', task);  
            }
            function getResource(itemId) {
                return JQXLite(componentSelector).jqxGantt('getResource', itemId);  
            }
            function getResources() {
                return JQXLite(componentSelector).jqxGantt('getResources');  
            }
            function getResourceIndex(resource) {
                return JQXLite(componentSelector).jqxGantt('getResourceIndex', resource);  
            }
            function getResourceTasks(resource) {
                return JQXLite(componentSelector).jqxGantt('getResourceTasks', resource);  
            }
            function getSelectedIds() {
                return JQXLite(componentSelector).jqxGantt('getSelectedIds');  
            }
            function getSelectedTasks() {
                return JQXLite(componentSelector).jqxGantt('getSelectedTasks');  
            }
            function getSelectedResources() {
                return JQXLite(componentSelector).jqxGantt('getSelectedResources');  
            }
            function getWorkingHours() {
                return JQXLite(componentSelector).jqxGantt('getWorkingHours');  
            }
            function hideTooltip() {
                return JQXLite(componentSelector).jqxGantt('hideTooltip');  
            }
            function isWorkingDay(date) {
                JQXLite(componentSelector).jqxGantt('isWorkingDay', date);  
            }
            function loadState(state) {
                JQXLite(componentSelector).jqxGantt('loadState', state);  
            }
            function removeAllConnections() {
                JQXLite(componentSelector).jqxGantt('removeAllConnections');  
            }
            function removeConnection(startTaskIndex, taskEndIndex, connectionType) {
                return JQXLite(componentSelector).jqxGantt('removeConnection', startTaskIndex, taskEndIndex, connectionType);  
            }
            function removeTaskConnection(taskStart, taskEnd) {
                JQXLite(componentSelector).jqxGantt('removeTaskConnection', taskStart, taskEnd);  
            }
            function showTooltip(target, content) {
                JQXLite(componentSelector).jqxGantt('showTooltip', target, content);  
            }
            function saveState(state) {
                JQXLite(componentSelector).jqxGantt('saveState', state);  
            }
            function insertTask(taskObject, project, index) {
                return JQXLite(componentSelector).jqxGantt('insertTask', taskObject, project, index);  
            }
            function updateTask(taskId, taskObject) {
                JQXLite(componentSelector).jqxGantt('updateTask', taskId, taskObject);  
            }
            function removeTask(taskId) {
                JQXLite(componentSelector).jqxGantt('removeTask', taskId);  
            }
            function insertResource(resourceId, resourceObject) {
                JQXLite(componentSelector).jqxGantt('insertResource', resourceId, resourceObject);  
            }
            function updateResource(resourceId, taskObject) {
                JQXLite(componentSelector).jqxGantt('updateResource', resourceId, taskObject);  
            }
            function removeResource(resourceId) {
                JQXLite(componentSelector).jqxGantt('removeResource', resourceId);  
            }
            function openWindow(taskId) {
                JQXLite(componentSelector).jqxGantt('openWindow', taskId);  
            }
            function closeWindow() {
                JQXLite(componentSelector).jqxGantt('closeWindow');  
            }
            function print() {
                JQXLite(componentSelector).jqxGantt('print');  
            }
            function setWorkTime(settings) {
                JQXLite(componentSelector).jqxGantt('setWorkTime', settings);  
            }
            function selectTask(id) {
                JQXLite(componentSelector).jqxGantt('selectTask', id);  
            }
            function selectResource(id) {
                JQXLite(componentSelector).jqxGantt('selectResource', id);  
            }
            function unselectTask(id) {
                JQXLite(componentSelector).jqxGantt('unselectTask', id);  
            }
            function unselectResource(id) {
                JQXLite(componentSelector).jqxGantt('unselectResource', id);  
            }
            function unsetWorkTime(settings) {
                JQXLite(componentSelector).jqxGantt('unsetWorkTime', settings);  
            }
            function sort(columns) {
                JQXLite(componentSelector).jqxGantt('sort', columns);  
            }
            function _adjustToNonworkingTime (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('adjustToNonworkingTime', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('adjustToNonworkingTime');
                }
            }
            function _autoSchedule (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('autoSchedule', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('autoSchedule');
                }
            }
            function _autoScheduleStrictMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('autoScheduleStrictMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('autoScheduleStrictMode');
                }
            }
            function _autoScrollStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('autoScrollStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('autoScrollStep');
                }
            }
            function _columnMenu (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('columnMenu', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('columnMenu');
                }
            }
            function _columnMinWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('columnMinWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('columnMinWidth');
                }
            }
            function _columnResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('columnResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('columnResize');
                }
            }
            function _columnResizeFeedback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('columnResizeFeedback', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('columnResizeFeedback');
                }
            }
            function _currentTime (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('currentTime', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('currentTime');
                }
            }
            function _currentTimeIndicator (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('currentTimeIndicator', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('currentTimeIndicator');
                }
            }
            function _currentTimeIndicatorInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('currentTimeIndicatorInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('currentTimeIndicatorInterval');
                }
            }
            function _dataExportFileName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('dataExportFileName', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('dataExportFileName');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('source');
                }
            }
            function _dayFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('dayFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('dayFormat');
                }
            }
            function _dateEnd (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('dateEnd', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('dateEnd');
                }
            }
            function _dateStart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('dateStart', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('dateStart');
                }
            }
            function _dateMarkers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('dateMarkers', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('dateMarkers');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disabled');
                }
            }
            function _disableAutoScroll (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableAutoScroll', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableAutoScroll');
                }
            }
            function _disableTaskDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableTaskDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableTaskDrag');
                }
            }
            function _disableTaskProgressChange (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableTaskProgressChange', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableTaskProgressChange');
                }
            }
            function _disableTaskResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableTaskResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableTaskResize');
                }
            }
            function _disableSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableSelection');
                }
            }
            function _disableSegmentDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableSegmentDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableSegmentDrag');
                }
            }
            function _disableSegmentResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableSegmentResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableSegmentResize');
                }
            }
            function _disableWindowEditor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('disableWindowEditor', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('disableWindowEditor');
                }
            }
            function _durationUnit (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('durationUnit', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('durationUnit');
                }
            }
            function _filterRow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('filterRow', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('filterRow');
                }
            }
            function _firstDayOfWeek (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('firstDayOfWeek', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('firstDayOfWeek');
                }
            }
            function _groupByResources (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('groupByResources', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('groupByResources');
                }
            }
            function _headerTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('headerTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('headerTemplate');
                }
            }
            function _hideDateMarkers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hideDateMarkers', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hideDateMarkers');
                }
            }
            function _hideTimelineHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hideTimelineHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hideTimelineHeader');
                }
            }
            function _hideTimelineHeaderDetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hideTimelineHeaderDetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hideTimelineHeaderDetails');
                }
            }
            function _hideTimelineSecondHeaderDetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hideTimelineSecondHeaderDetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hideTimelineSecondHeaderDetails');
                }
            }
            function _hideResourcePanel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hideResourcePanel', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hideResourcePanel');
                }
            }
            function _horizontalScrollBarVisibility (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('horizontalScrollBarVisibility', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('horizontalScrollBarVisibility');
                }
            }
            function _hourFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('hourFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('hourFormat');
                }
            }
            function _infiniteTimeline (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('infiniteTimeline', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('infiniteTimeline');
                }
            }
            function _infiniteTimelineStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('infiniteTimelineStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('infiniteTimelineStep');
                }
            }
            function _inverted (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('inverted', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('inverted');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('keyboardNavigation');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('max');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('min');
                }
            }
            function _monthFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('monthFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('monthFormat');
                }
            }
            function _monthScale (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('monthScale', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('monthScale');
                }
            }
            function _nonworkingDays (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('nonworkingDays', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('nonworkingDays');
                }
            }
            function _nonworkingHours (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('nonworkingHours', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('nonworkingHours');
                }
            }
            function _onTaskRender (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('onTaskRender', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('onTaskRender');
                }
            }
            function _popupWindowCustomizationFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('popupWindowCustomizationFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('popupWindowCustomizationFunction');
                }
            }
            function _popupWindowTabs (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('popupWindowTabs', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('popupWindowTabs');
                }
            }
            function _progressLabelFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('progressLabelFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('progressLabelFormatFunction');
                }
            }
            function _quarterFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('quarterFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('quarterFormat');
                }
            }
            function _resources (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resources', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resources');
                }
            }
            function _resourceColumns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceColumns', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceColumns');
                }
            }
            function _resourceFiltering (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceFiltering', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceFiltering');
                }
            }
            function _resourceGroupFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceGroupFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceGroupFormatFunction');
                }
            }
            function _resourcePanelHeaderTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourcePanelHeaderTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourcePanelHeaderTemplate');
                }
            }
            function _resourcePanelMin (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourcePanelMin', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourcePanelMin');
                }
            }
            function _resourcePanelSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourcePanelSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourcePanelSize');
                }
            }
            function _resourcePanelRefreshRate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourcePanelRefreshRate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourcePanelRefreshRate');
                }
            }
            function _resourceTimelineFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceTimelineFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceTimelineFormatFunction');
                }
            }
            function _resourceTimelineMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceTimelineMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceTimelineMode');
                }
            }
            function _resourceTimelineView (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('resourceTimelineView', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('resourceTimelineView');
                }
            }
            function _rightToLeft (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('rightToLeft', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('rightToLeft');
                }
            }
            function _selectedTaskIds (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('selectedTaskIds', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('selectedTaskIds');
                }
            }
            function _selectedResourceIds (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('selectedResourceIds', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('selectedResourceIds');
                }
            }
            function _shadeUntilCurrentTime (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('shadeUntilCurrentTime', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('shadeUntilCurrentTime');
                }
            }
            function _showSelectionColumn (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('showSelectionColumn', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('showSelectionColumn');
                }
            }
            function _showBaseline (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('showBaseline', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('showBaseline');
                }
            }
            function _showProgressLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('showProgressLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('showProgressLabel');
                }
            }
            function _snapToNearest (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('snapToNearest', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('snapToNearest');
                }
            }
            function _sortFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('sortFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('sortFunction');
                }
            }
            function _sortMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('sortMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('sortMode');
                }
            }
            function _tasks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('tasks', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('tasks');
                }
            }
            function _taskColumns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('taskColumns', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('taskColumns');
                }
            }
            function _taskFiltering (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('taskFiltering', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('taskFiltering');
                }
            }
            function _taskPanelMin (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('taskPanelMin', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('taskPanelMin');
                }
            }
            function _taskPanelSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('taskPanelSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('taskPanelSize');
                }
            }
            function _timelineMin (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('timelineMin', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('timelineMin');
                }
            }
            function _treeMin (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('treeMin', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('treeMin');
                }
            }
            function _treeSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('treeSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('treeSize');
                }
            }
            function _timelineHeaderFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('timelineHeaderFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('timelineHeaderFormatFunction');
                }
            }
            function _tooltip (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('tooltip', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('tooltip');
                }
            }
            function _verticalScrollBarVisibility (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('verticalScrollBarVisibility', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('verticalScrollBarVisibility');
                }
            }
            function _view (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('view', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('view');
                }
            }
            function _yearFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('yearFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('yearFormat');
                }
            }
            function _weekFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('weekFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('weekFormat');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGantt('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxGantt('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxGantt(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['adjustToNonworkingTime','autoSchedule','autoScheduleStrictMode','autoScrollStep','columnMenu','columnMinWidth','columnResize','columnResizeFeedback','currentTime','currentTimeIndicator','currentTimeIndicatorInterval','dataExportFileName','source','dayFormat','dateEnd','dateStart','dateMarkers','disabled','disableAutoScroll','disableTaskDrag','disableTaskProgressChange','disableTaskResize','disableSelection','disableSegmentDrag','disableSegmentResize','disableWindowEditor','durationUnit','filterRow','firstDayOfWeek','groupByResources','headerTemplate','hideDateMarkers','hideTimelineHeader','hideTimelineHeaderDetails','hideTimelineSecondHeaderDetails','hideResourcePanel','horizontalScrollBarVisibility','hourFormat','infiniteTimeline','infiniteTimelineStep','inverted','keyboardNavigation','max','min','monthFormat','monthScale','nonworkingDays','nonworkingHours','onTaskRender','popupWindowCustomizationFunction','popupWindowTabs','progressLabelFormatFunction','quarterFormat','resources','resourceColumns','resourceFiltering','resourceGroupFormatFunction','resourcePanelHeaderTemplate','resourcePanelMin','resourcePanelSize','resourcePanelRefreshRate','resourceTimelineFormatFunction','resourceTimelineMode','resourceTimelineView','rightToLeft','selectedTaskIds','selectedResourceIds','shadeUntilCurrentTime','showSelectionColumn','showBaseline','showProgressLabel','snapToNearest','sortFunction','sortMode','tasks','taskColumns','taskFiltering','taskPanelMin','taskPanelSize','timelineMin','treeMin','treeSize','timelineHeaderFormatFunction','tooltip','verticalScrollBarVisibility','view','yearFormat','weekFormat','theme'];
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
                 get adjustToNonworkingTime() {
                     return _adjustToNonworkingTime();
                 },
                 set adjustToNonworkingTime(newValue) {
                     _adjustToNonworkingTime(newValue);
                 },
                 get autoSchedule() {
                     return _autoSchedule();
                 },
                 set autoSchedule(newValue) {
                     _autoSchedule(newValue);
                 },
                 get autoScheduleStrictMode() {
                     return _autoScheduleStrictMode();
                 },
                 set autoScheduleStrictMode(newValue) {
                     _autoScheduleStrictMode(newValue);
                 },
                 get autoScrollStep() {
                     return _autoScrollStep();
                 },
                 set autoScrollStep(newValue) {
                     _autoScrollStep(newValue);
                 },
                 get columnMenu() {
                     return _columnMenu();
                 },
                 set columnMenu(newValue) {
                     _columnMenu(newValue);
                 },
                 get columnMinWidth() {
                     return _columnMinWidth();
                 },
                 set columnMinWidth(newValue) {
                     _columnMinWidth(newValue);
                 },
                 get columnResize() {
                     return _columnResize();
                 },
                 set columnResize(newValue) {
                     _columnResize(newValue);
                 },
                 get columnResizeFeedback() {
                     return _columnResizeFeedback();
                 },
                 set columnResizeFeedback(newValue) {
                     _columnResizeFeedback(newValue);
                 },
                 get currentTime() {
                     return _currentTime();
                 },
                 set currentTime(newValue) {
                     _currentTime(newValue);
                 },
                 get currentTimeIndicator() {
                     return _currentTimeIndicator();
                 },
                 set currentTimeIndicator(newValue) {
                     _currentTimeIndicator(newValue);
                 },
                 get currentTimeIndicatorInterval() {
                     return _currentTimeIndicatorInterval();
                 },
                 set currentTimeIndicatorInterval(newValue) {
                     _currentTimeIndicatorInterval(newValue);
                 },
                 get dataExportFileName() {
                     return _dataExportFileName();
                 },
                 set dataExportFileName(newValue) {
                     _dataExportFileName(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get dayFormat() {
                     return _dayFormat();
                 },
                 set dayFormat(newValue) {
                     _dayFormat(newValue);
                 },
                 get dateEnd() {
                     return _dateEnd();
                 },
                 set dateEnd(newValue) {
                     _dateEnd(newValue);
                 },
                 get dateStart() {
                     return _dateStart();
                 },
                 set dateStart(newValue) {
                     _dateStart(newValue);
                 },
                 get dateMarkers() {
                     return _dateMarkers();
                 },
                 set dateMarkers(newValue) {
                     _dateMarkers(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get disableAutoScroll() {
                     return _disableAutoScroll();
                 },
                 set disableAutoScroll(newValue) {
                     _disableAutoScroll(newValue);
                 },
                 get disableTaskDrag() {
                     return _disableTaskDrag();
                 },
                 set disableTaskDrag(newValue) {
                     _disableTaskDrag(newValue);
                 },
                 get disableTaskProgressChange() {
                     return _disableTaskProgressChange();
                 },
                 set disableTaskProgressChange(newValue) {
                     _disableTaskProgressChange(newValue);
                 },
                 get disableTaskResize() {
                     return _disableTaskResize();
                 },
                 set disableTaskResize(newValue) {
                     _disableTaskResize(newValue);
                 },
                 get disableSelection() {
                     return _disableSelection();
                 },
                 set disableSelection(newValue) {
                     _disableSelection(newValue);
                 },
                 get disableSegmentDrag() {
                     return _disableSegmentDrag();
                 },
                 set disableSegmentDrag(newValue) {
                     _disableSegmentDrag(newValue);
                 },
                 get disableSegmentResize() {
                     return _disableSegmentResize();
                 },
                 set disableSegmentResize(newValue) {
                     _disableSegmentResize(newValue);
                 },
                 get disableWindowEditor() {
                     return _disableWindowEditor();
                 },
                 set disableWindowEditor(newValue) {
                     _disableWindowEditor(newValue);
                 },
                 get durationUnit() {
                     return _durationUnit();
                 },
                 set durationUnit(newValue) {
                     _durationUnit(newValue);
                 },
                 get filterRow() {
                     return _filterRow();
                 },
                 set filterRow(newValue) {
                     _filterRow(newValue);
                 },
                 get firstDayOfWeek() {
                     return _firstDayOfWeek();
                 },
                 set firstDayOfWeek(newValue) {
                     _firstDayOfWeek(newValue);
                 },
                 get groupByResources() {
                     return _groupByResources();
                 },
                 set groupByResources(newValue) {
                     _groupByResources(newValue);
                 },
                 get headerTemplate() {
                     return _headerTemplate();
                 },
                 set headerTemplate(newValue) {
                     _headerTemplate(newValue);
                 },
                 get hideDateMarkers() {
                     return _hideDateMarkers();
                 },
                 set hideDateMarkers(newValue) {
                     _hideDateMarkers(newValue);
                 },
                 get hideTimelineHeader() {
                     return _hideTimelineHeader();
                 },
                 set hideTimelineHeader(newValue) {
                     _hideTimelineHeader(newValue);
                 },
                 get hideTimelineHeaderDetails() {
                     return _hideTimelineHeaderDetails();
                 },
                 set hideTimelineHeaderDetails(newValue) {
                     _hideTimelineHeaderDetails(newValue);
                 },
                 get hideTimelineSecondHeaderDetails() {
                     return _hideTimelineSecondHeaderDetails();
                 },
                 set hideTimelineSecondHeaderDetails(newValue) {
                     _hideTimelineSecondHeaderDetails(newValue);
                 },
                 get hideResourcePanel() {
                     return _hideResourcePanel();
                 },
                 set hideResourcePanel(newValue) {
                     _hideResourcePanel(newValue);
                 },
                 get horizontalScrollBarVisibility() {
                     return _horizontalScrollBarVisibility();
                 },
                 set horizontalScrollBarVisibility(newValue) {
                     _horizontalScrollBarVisibility(newValue);
                 },
                 get hourFormat() {
                     return _hourFormat();
                 },
                 set hourFormat(newValue) {
                     _hourFormat(newValue);
                 },
                 get infiniteTimeline() {
                     return _infiniteTimeline();
                 },
                 set infiniteTimeline(newValue) {
                     _infiniteTimeline(newValue);
                 },
                 get infiniteTimelineStep() {
                     return _infiniteTimelineStep();
                 },
                 set infiniteTimelineStep(newValue) {
                     _infiniteTimelineStep(newValue);
                 },
                 get inverted() {
                     return _inverted();
                 },
                 set inverted(newValue) {
                     _inverted(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get monthFormat() {
                     return _monthFormat();
                 },
                 set monthFormat(newValue) {
                     _monthFormat(newValue);
                 },
                 get monthScale() {
                     return _monthScale();
                 },
                 set monthScale(newValue) {
                     _monthScale(newValue);
                 },
                 get nonworkingDays() {
                     return _nonworkingDays();
                 },
                 set nonworkingDays(newValue) {
                     _nonworkingDays(newValue);
                 },
                 get nonworkingHours() {
                     return _nonworkingHours();
                 },
                 set nonworkingHours(newValue) {
                     _nonworkingHours(newValue);
                 },
                 get onTaskRender() {
                     return _onTaskRender();
                 },
                 set onTaskRender(newValue) {
                     _onTaskRender(newValue);
                 },
                 get popupWindowCustomizationFunction() {
                     return _popupWindowCustomizationFunction();
                 },
                 set popupWindowCustomizationFunction(newValue) {
                     _popupWindowCustomizationFunction(newValue);
                 },
                 get popupWindowTabs() {
                     return _popupWindowTabs();
                 },
                 set popupWindowTabs(newValue) {
                     _popupWindowTabs(newValue);
                 },
                 get progressLabelFormatFunction() {
                     return _progressLabelFormatFunction();
                 },
                 set progressLabelFormatFunction(newValue) {
                     _progressLabelFormatFunction(newValue);
                 },
                 get quarterFormat() {
                     return _quarterFormat();
                 },
                 set quarterFormat(newValue) {
                     _quarterFormat(newValue);
                 },
                 get resources() {
                     return _resources();
                 },
                 set resources(newValue) {
                     _resources(newValue);
                 },
                 get resourceColumns() {
                     return _resourceColumns();
                 },
                 set resourceColumns(newValue) {
                     _resourceColumns(newValue);
                 },
                 get resourceFiltering() {
                     return _resourceFiltering();
                 },
                 set resourceFiltering(newValue) {
                     _resourceFiltering(newValue);
                 },
                 get resourceGroupFormatFunction() {
                     return _resourceGroupFormatFunction();
                 },
                 set resourceGroupFormatFunction(newValue) {
                     _resourceGroupFormatFunction(newValue);
                 },
                 get resourcePanelHeaderTemplate() {
                     return _resourcePanelHeaderTemplate();
                 },
                 set resourcePanelHeaderTemplate(newValue) {
                     _resourcePanelHeaderTemplate(newValue);
                 },
                 get resourcePanelMin() {
                     return _resourcePanelMin();
                 },
                 set resourcePanelMin(newValue) {
                     _resourcePanelMin(newValue);
                 },
                 get resourcePanelSize() {
                     return _resourcePanelSize();
                 },
                 set resourcePanelSize(newValue) {
                     _resourcePanelSize(newValue);
                 },
                 get resourcePanelRefreshRate() {
                     return _resourcePanelRefreshRate();
                 },
                 set resourcePanelRefreshRate(newValue) {
                     _resourcePanelRefreshRate(newValue);
                 },
                 get resourceTimelineFormatFunction() {
                     return _resourceTimelineFormatFunction();
                 },
                 set resourceTimelineFormatFunction(newValue) {
                     _resourceTimelineFormatFunction(newValue);
                 },
                 get resourceTimelineMode() {
                     return _resourceTimelineMode();
                 },
                 set resourceTimelineMode(newValue) {
                     _resourceTimelineMode(newValue);
                 },
                 get resourceTimelineView() {
                     return _resourceTimelineView();
                 },
                 set resourceTimelineView(newValue) {
                     _resourceTimelineView(newValue);
                 },
                 get rightToLeft() {
                     return _rightToLeft();
                 },
                 set rightToLeft(newValue) {
                     _rightToLeft(newValue);
                 },
                 get selectedTaskIds() {
                     return _selectedTaskIds();
                 },
                 set selectedTaskIds(newValue) {
                     _selectedTaskIds(newValue);
                 },
                 get selectedResourceIds() {
                     return _selectedResourceIds();
                 },
                 set selectedResourceIds(newValue) {
                     _selectedResourceIds(newValue);
                 },
                 get shadeUntilCurrentTime() {
                     return _shadeUntilCurrentTime();
                 },
                 set shadeUntilCurrentTime(newValue) {
                     _shadeUntilCurrentTime(newValue);
                 },
                 get showSelectionColumn() {
                     return _showSelectionColumn();
                 },
                 set showSelectionColumn(newValue) {
                     _showSelectionColumn(newValue);
                 },
                 get showBaseline() {
                     return _showBaseline();
                 },
                 set showBaseline(newValue) {
                     _showBaseline(newValue);
                 },
                 get showProgressLabel() {
                     return _showProgressLabel();
                 },
                 set showProgressLabel(newValue) {
                     _showProgressLabel(newValue);
                 },
                 get snapToNearest() {
                     return _snapToNearest();
                 },
                 set snapToNearest(newValue) {
                     _snapToNearest(newValue);
                 },
                 get sortFunction() {
                     return _sortFunction();
                 },
                 set sortFunction(newValue) {
                     _sortFunction(newValue);
                 },
                 get sortMode() {
                     return _sortMode();
                 },
                 set sortMode(newValue) {
                     _sortMode(newValue);
                 },
                 get tasks() {
                     return _tasks();
                 },
                 set tasks(newValue) {
                     _tasks(newValue);
                 },
                 get taskColumns() {
                     return _taskColumns();
                 },
                 set taskColumns(newValue) {
                     _taskColumns(newValue);
                 },
                 get taskFiltering() {
                     return _taskFiltering();
                 },
                 set taskFiltering(newValue) {
                     _taskFiltering(newValue);
                 },
                 get taskPanelMin() {
                     return _taskPanelMin();
                 },
                 set taskPanelMin(newValue) {
                     _taskPanelMin(newValue);
                 },
                 get taskPanelSize() {
                     return _taskPanelSize();
                 },
                 set taskPanelSize(newValue) {
                     _taskPanelSize(newValue);
                 },
                 get timelineMin() {
                     return _timelineMin();
                 },
                 set timelineMin(newValue) {
                     _timelineMin(newValue);
                 },
                 get treeMin() {
                     return _treeMin();
                 },
                 set treeMin(newValue) {
                     _treeMin(newValue);
                 },
                 get treeSize() {
                     return _treeSize();
                 },
                 set treeSize(newValue) {
                     _treeSize(newValue);
                 },
                 get timelineHeaderFormatFunction() {
                     return _timelineHeaderFormatFunction();
                 },
                 set timelineHeaderFormatFunction(newValue) {
                     _timelineHeaderFormatFunction(newValue);
                 },
                 get tooltip() {
                     return _tooltip();
                 },
                 set tooltip(newValue) {
                     _tooltip(newValue);
                 },
                 get verticalScrollBarVisibility() {
                     return _verticalScrollBarVisibility();
                 },
                 set verticalScrollBarVisibility(newValue) {
                     _verticalScrollBarVisibility(newValue);
                 },
                 get view() {
                     return _view();
                 },
                 set view(newValue) {
                     _view(newValue);
                 },
                 get yearFormat() {
                     return _yearFormat();
                 },
                 set yearFormat(newValue) {
                     _yearFormat(newValue);
                 },
                 get weekFormat() {
                     return _weekFormat();
                 },
                 set weekFormat(newValue) {
                     _weekFormat(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('beginUpdate', function (event) { that.emit('beginUpdate', event); });
                JQXLite(componentSelector).on('endUpdate', function (event) { that.emit('endUpdate', event); });
                JQXLite(componentSelector).on('connectionStart', function (event) { that.emit('connectionStart', event); });
                JQXLite(componentSelector).on('connectionEnd', function (event) { that.emit('connectionEnd', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('columnResize', function (event) { that.emit('columnResize', event); });
                JQXLite(componentSelector).on('closing', function (event) { that.emit('closing', event); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('collapse', function (event) { that.emit('collapse', event); });
                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('expand', function (event) { that.emit('expand', event); });
                JQXLite(componentSelector).on('filter', function (event) { that.emit('filter', event); });
                JQXLite(componentSelector).on('itemClick', function (event) { that.emit('itemClick', event); });
                JQXLite(componentSelector).on('itemInsert', function (event) { that.emit('itemInsert', event); });
                JQXLite(componentSelector).on('itemRemove', function (event) { that.emit('itemRemove', event); });
                JQXLite(componentSelector).on('itemUpdate', function (event) { that.emit('itemUpdate', event); });
                JQXLite(componentSelector).on('opening', function (event) { that.emit('opening', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('progressChangeStart', function (event) { that.emit('progressChangeStart', event); });
                JQXLite(componentSelector).on('progressChangeEnd', function (event) { that.emit('progressChangeEnd', event); });
                JQXLite(componentSelector).on('resizeStart', function (event) { that.emit('resizeStart', event); });
                JQXLite(componentSelector).on('resizeEnd', function (event) { that.emit('resizeEnd', event); });
                JQXLite(componentSelector).on('sort', function (event) { that.emit('sort', event); });
                JQXLite(componentSelector).on('scrollBottomReached', function (event) { that.emit('scrollBottomReached', event); });
                JQXLite(componentSelector).on('scrollTopReached', function (event) { that.emit('scrollTopReached', event); });
                JQXLite(componentSelector).on('scrollLeftReached', function (event) { that.emit('scrollLeftReached', event); });
                JQXLite(componentSelector).on('scrollRightReached', function (event) { that.emit('scrollRightReached', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxGantt(widgetOptions);
			})
			return {id, componentSelector, addFilter,clearFilters,clearSort,clearSelection,clearState,clearTasks,clearResources,createConnection,collapse,beginUpdate,endUpdate,ensureVisible,expand,exportData,getConnections,getConnectionDetails,getState,getItemPath,getTask,getTasks,getTaskIndex,getTaskConnections,getTaskProject,getResource,getResources,getResourceIndex,getResourceTasks,getSelectedIds,getSelectedTasks,getSelectedResources,getWorkingHours,hideTooltip,isWorkingDay,loadState,removeAllConnections,removeConnection,removeTaskConnection,showTooltip,saveState,insertTask,updateTask,removeTask,insertResource,updateResource,removeResource,openWindow,closeWindow,print,setWorkTime,selectTask,selectResource,unselectTask,unselectResource,unsetWorkTime,sort, setOptions, options, getOptions, createComponent};
        },
    }
</script>
