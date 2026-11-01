import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxganttapi from '../../jqwidgets/jqxgantt.api';
import * as jqxgantt from '../../jqwidgets/jqxgantt';
import { createElement, PureComponent } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var __ssrIdCounter__ = 0;
function __sameValue__(x, y) {
    return x === y ? (x !== 0 || 1 / x === 1 / y) : (x !== x && y !== y);
}
function __sameContent__(x, y, depth, loose) {
    if (__sameValue__(x, y)) {
        return true;
    }
    if (loose && typeof x === 'function' && typeof y === 'function') {
        return String(x) === String(y);
    }
    if (!x || !y || typeof x !== 'object' || typeof y !== 'object' || depth > 32) {
        return false;
    }
    if (x instanceof Date && y instanceof Date) {
        return x.getTime() === y.getTime();
    }
    var isArray = Array.isArray(x);
    if (isArray !== Array.isArray(y)) {
        return false;
    }
    if (!isArray) {
        var px = Object.getPrototypeOf(x);
        var py = Object.getPrototypeOf(y);
        if ((px !== Object.prototype && px !== null) || (py !== Object.prototype && py !== null)) {
            if (!loose || !x._source || !y._source) {
                return false;
            }
            if (x._source === y._source) {
                return true;
            }
            for (var _i = 0, _a = Object.keys(x._source); _i < _a.length; _i++) {
                var key = _a[_i];
                if (!__sameContent__(x._source[key], y._source[key], depth + 1, true)) {
                    return false;
                }
            }
            return true;
        }
    }
    var keys = Object.keys(x);
    if (keys.length !== Object.keys(y).length) {
        return false;
    }
    for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
        var key = keys_1[_b];
        if (!Object.prototype.hasOwnProperty.call(y, key)) {
            return false;
        }
        var a = x[key];
        var b = y[key];
        if (a === b && a && typeof a === 'object') {
            if (loose) {
                continue;
            }
            return false;
        }
        if (!__sameContent__(a, b, depth + 1, loose)) {
            return false;
        }
    }
    return true;
}
var __isDevelopment__ = (function () {
    try {
        return process.env.NODE_ENV !== 'production';
    }
    catch (error) {
        return false;
    }
})();
function __afterTask__(callback) {
    if (typeof Promise !== 'undefined') {
        Promise.resolve().then(callback);
    }
    else {
        setTimeout(callback, 0);
    }
}
var JqxGantt = /** @class */ (function (_super) {
    __extends(JqxGantt, _super);
    function JqxGantt(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        /* tslint:disable:variable-name */
        _this._rendered = null;
        /* tslint:disable:variable-name */
        _this._host = null;
        /* tslint:disable:variable-name */
        _this._appliedOptions = null;
        /* tslint:disable:variable-name */
        _this._eventHandlers = {};
        /* tslint:disable:variable-name */
        _this._eventElement = null;
        /* tslint:disable:variable-name */
        _this._teardownPending = false;
        /* tslint:disable:variable-name */
        _this._mounting = false;
        /* tslint:disable:variable-name */
        _this._hostParent = null;
        /* tslint:disable:variable-name */
        _this._hostNext = null;
        /* tslint:disable:variable-name */
        _this._widgetPlace = null;
        /* tslint:disable:variable-name */
        _this._hostChildren = [];
        /* tslint:disable:variable-name */
        _this._changedInARow = {};
        /* tslint:disable:variable-name */
        _this._warned = {};
        _this._id = 'JqxGantt' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
        _this._componentSelector = '#' + _this._id;
        return _this;
    }
    JqxGantt.prototype.componentDidMount = function () {
        if (this._teardownPending) {
            this._teardownPending = false;
            var place = this._widgetPlace;
            if (place && this._host) {
                place.parent.insertBefore(this._host, place.next && place.next.parentNode === place.parent ? place.next : null);
            }
            this._widgetPlace = null;
            return;
        }
        if (this._rendered && this._rendered.id !== this._id) {
            this._rendered.id = this._id;
        }
        var element = this._jqx(this._target());
        this._host = element[0] || null;
        this._hostParent = this._host ? this._host.parentNode : null;
        this._hostNext = this._host ? this._host.nextSibling : null;
        this._hostChildren = this._host ? Array.prototype.slice.call(this._host.childNodes) : [];
        var widgetOptions = this._manageProps();
        this._eventElement = element;
        this._wireEvents();
        this._mounting = true;
        try {
            element.jqxGantt(widgetOptions);
        }
        finally {
            this._mounting = false;
        }
        if (this._eventElement[0] !== this._jqx(this._target())[0]) {
            for (var prop in this._eventHandlers) {
                if (this._eventHandlers.hasOwnProperty(prop)) {
                    this._eventElement.off(__eventName__(prop), this._eventHandlers[prop]);
                }
            }
            this._eventHandlers = {};
            this._eventElement = null;
        }
        this._appliedOptions = widgetOptions;
        this._applyHostAttributes();
        this._wireEvents();
    };
    JqxGantt.prototype.componentDidUpdate = function () {
        if (!this._appliedOptions) {
            return;
        }
        var widgetOptions = this._manageProps();
        var changed = {};
        var hasChanges = false;
        for (var key in widgetOptions) {
            if (!__sameContent__(widgetOptions[key], this._appliedOptions[key], 0)) {
                changed[key] = widgetOptions[key];
                hasChanges = true;
            }
        }
        if (__isDevelopment__) {
            this._warnRebuiltProps(changed);
        }
        if ('source' in changed) {
            for (var _i = 0, _a = ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']; _i < _a.length; _i++) {
                var key = _a[_i];
                if (!(key in changed) && widgetOptions[key] !== undefined) {
                    changed[key] = widgetOptions[key];
                }
            }
        }
        this._appliedOptions = widgetOptions;
        if (hasChanges) {
            this.setOptions(changed);
            this._applyHostAttributes();
        }
        this._wireEvents();
    };
    JqxGantt.prototype._warnRebuiltProps = function (changed) {
        for (var key in this._changedInARow) {
            if (!(key in changed)) {
                this._changedInARow[key] = 0;
            }
        }
        for (var key in changed) {
            var value = changed[key];
            if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
                continue;
            }
            if (!__sameContent__(value, this._appliedOptions[key], 0, true)) {
                this._changedInARow[key] = 0;
                continue;
            }
            this._changedInARow[key] = (this._changedInARow[key] || 0) + 1;
            if (this._changedInARow[key] === 3 && !this._warned[key]) {
                this._warned[key] = true;
                console.warn('JqxGantt: the "' + key + '" prop was new on three renders in a row, and each time the widget was updated with it'
                    + (key === 'source' ? ' (its data bound again)' : '') + '. Create it once, outside the component or with useMemo or useCallback;'
                    + ' a function inside it, or a new jqx.dataAdapter, makes it new on every render.');
            }
        }
    };
    JqxGantt.prototype.componentWillUnmount = function () {
        var _this = this;
        if (!this._jqx || !this._host) {
            return;
        }
        var host = this._host;
        var parent = this._hostParent;
        if (parent && host.parentNode !== parent) {
            this._widgetPlace = host.parentNode ? { parent: host.parentNode, next: host.nextSibling } : null;
            var wrapper = host;
            while (wrapper && wrapper.parentNode !== parent) {
                wrapper = wrapper.parentNode;
            }
            var sibling = this._hostNext && this._hostNext.parentNode === parent ? this._hostNext : null;
            parent.insertBefore(host, wrapper || sibling);
        }
        this._teardownPending = true;
        __afterTask__(function () {
            if (_this._teardownPending) {
                _this._teardownPending = false;
                _this._teardown();
            }
        });
    };
    JqxGantt.prototype._target = function () {
        return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
    };
    JqxGantt.prototype.render = function () {
        var _this = this;
        return (createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style, suppressHydrationWarning: true }, this._hostAttributes()), this.props.children));
    };
    JqxGantt.prototype.setOptions = function (options) {
        this._jqx(this._target()).jqxGantt(options);
    };
    JqxGantt.prototype.getOptions = function (option) {
        return this._jqx(this._target()).jqxGantt(option);
    };
    JqxGantt.prototype.addFilter = function (columns, filterGroup) {
        this._jqx(this._target()).jqxGantt('addFilter', columns, filterGroup);
    };
    JqxGantt.prototype.aiConfig = function (options) {
        return this._jqx(this._target()).jqxGantt('aiConfig', options);
    };
    JqxGantt.prototype.aiCommand = function (text, callback) {
        return this._jqx(this._target()).jqxGantt('aiCommand', text, callback);
    };
    JqxGantt.prototype.aiAddTask = function (text, callback) {
        return this._jqx(this._target()).jqxGantt('aiAddTask', text, callback);
    };
    JqxGantt.prototype.aiAsk = function (text, callback) {
        return this._jqx(this._target()).jqxGantt('aiAsk', text, callback);
    };
    JqxGantt.prototype.aiSummarize = function (callback) {
        return this._jqx(this._target()).jqxGantt('aiSummarize', callback);
    };
    JqxGantt.prototype.aiExplainTask = function (ref, callback) {
        return this._jqx(this._target()).jqxGantt('aiExplainTask', ref, callback);
    };
    JqxGantt.prototype.aiClassifyTasks = function (options, callback) {
        return this._jqx(this._target()).jqxGantt('aiClassifyTasks', options, callback);
    };
    JqxGantt.prototype.aiGetCustomField = function (ref, field) {
        return this._jqx(this._target()).jqxGantt('aiGetCustomField', ref, field);
    };
    JqxGantt.prototype.clearFilters = function () {
        this._jqx(this._target()).jqxGantt('clearFilters');
    };
    JqxGantt.prototype.clearSort = function () {
        this._jqx(this._target()).jqxGantt('clearSort');
    };
    JqxGantt.prototype.clearSelection = function () {
        this._jqx(this._target()).jqxGantt('clearSelection');
    };
    JqxGantt.prototype.clearState = function () {
        this._jqx(this._target()).jqxGantt('clearState');
    };
    JqxGantt.prototype.clearTasks = function () {
        this._jqx(this._target()).jqxGantt('clearTasks');
    };
    JqxGantt.prototype.clearResources = function () {
        this._jqx(this._target()).jqxGantt('clearResources');
    };
    JqxGantt.prototype.destroy = function () {
        this._jqx(this._target()).jqxGantt('destroy');
    };
    JqxGantt.prototype.createConnection = function (startTaskIndex, taskEndIndex, connectionType, lag) {
        this._jqx(this._target()).jqxGantt('createConnection', startTaskIndex, taskEndIndex, connectionType, lag);
    };
    JqxGantt.prototype.collapse = function (id) {
        this._jqx(this._target()).jqxGantt('collapse', id);
    };
    JqxGantt.prototype.beginUpdate = function () {
        this._jqx(this._target()).jqxGantt('beginUpdate');
    };
    JqxGantt.prototype.endUpdate = function () {
        this._jqx(this._target()).jqxGantt('endUpdate');
    };
    JqxGantt.prototype.ensureVisible = function (taskId) {
        this._jqx(this._target()).jqxGantt('ensureVisible', taskId);
    };
    JqxGantt.prototype.expand = function (id) {
        this._jqx(this._target()).jqxGantt('expand', id);
    };
    JqxGantt.prototype.exportData = function (dataFormat, callback) {
        this._jqx(this._target()).jqxGantt('exportData', dataFormat, callback);
    };
    JqxGantt.prototype.getConnections = function () {
        return this._jqx(this._target()).jqxGantt('getConnections');
    };
    JqxGantt.prototype.getConnectionDetails = function (connectionId) {
        return this._jqx(this._target()).jqxGantt('getConnectionDetails', connectionId);
    };
    JqxGantt.prototype.getState = function () {
        return this._jqx(this._target()).jqxGantt('getState');
    };
    JqxGantt.prototype.getItemPath = function (item) {
        return this._jqx(this._target()).jqxGantt('getItemPath', item);
    };
    JqxGantt.prototype.getTask = function (itemId) {
        return this._jqx(this._target()).jqxGantt('getTask', itemId);
    };
    JqxGantt.prototype.getTasks = function () {
        return this._jqx(this._target()).jqxGantt('getTasks');
    };
    JqxGantt.prototype.getTaskIndex = function (task) {
        return this._jqx(this._target()).jqxGantt('getTaskIndex', task);
    };
    JqxGantt.prototype.getTaskConnections = function (taskId) {
        return this._jqx(this._target()).jqxGantt('getTaskConnections', taskId);
    };
    JqxGantt.prototype.getTaskProject = function (task) {
        return this._jqx(this._target()).jqxGantt('getTaskProject', task);
    };
    JqxGantt.prototype.getResource = function (itemId) {
        return this._jqx(this._target()).jqxGantt('getResource', itemId);
    };
    JqxGantt.prototype.getResources = function () {
        return this._jqx(this._target()).jqxGantt('getResources');
    };
    JqxGantt.prototype.getResourceIndex = function (resource) {
        return this._jqx(this._target()).jqxGantt('getResourceIndex', resource);
    };
    JqxGantt.prototype.getResourceTasks = function (resource) {
        return this._jqx(this._target()).jqxGantt('getResourceTasks', resource);
    };
    JqxGantt.prototype.getSelectedIds = function () {
        return this._jqx(this._target()).jqxGantt('getSelectedIds');
    };
    JqxGantt.prototype.getSelectedTasks = function () {
        return this._jqx(this._target()).jqxGantt('getSelectedTasks');
    };
    JqxGantt.prototype.getSelectedResources = function () {
        return this._jqx(this._target()).jqxGantt('getSelectedResources');
    };
    JqxGantt.prototype.getWorkingHours = function () {
        return this._jqx(this._target()).jqxGantt('getWorkingHours');
    };
    JqxGantt.prototype.hideTooltip = function () {
        return this._jqx(this._target()).jqxGantt('hideTooltip');
    };
    JqxGantt.prototype.isWorkingDay = function (date) {
        this._jqx(this._target()).jqxGantt('isWorkingDay', date);
    };
    JqxGantt.prototype.loadState = function (state) {
        this._jqx(this._target()).jqxGantt('loadState', state);
    };
    JqxGantt.prototype.removeAllConnections = function () {
        this._jqx(this._target()).jqxGantt('removeAllConnections');
    };
    JqxGantt.prototype.removeConnection = function (startTaskIndex, taskEndIndex, connectionType) {
        return this._jqx(this._target()).jqxGantt('removeConnection', startTaskIndex, taskEndIndex, connectionType);
    };
    JqxGantt.prototype.removeTaskConnection = function (taskStart, taskEnd) {
        this._jqx(this._target()).jqxGantt('removeTaskConnection', taskStart, taskEnd);
    };
    JqxGantt.prototype.showTooltip = function (target, content) {
        this._jqx(this._target()).jqxGantt('showTooltip', target, content);
    };
    JqxGantt.prototype.saveState = function (state) {
        this._jqx(this._target()).jqxGantt('saveState', state);
    };
    JqxGantt.prototype.insertTask = function (taskObject, project, index) {
        return this._jqx(this._target()).jqxGantt('insertTask', taskObject, project, index);
    };
    JqxGantt.prototype.updateTask = function (taskId, taskObject) {
        this._jqx(this._target()).jqxGantt('updateTask', taskId, taskObject);
    };
    JqxGantt.prototype.removeTask = function (taskId) {
        this._jqx(this._target()).jqxGantt('removeTask', taskId);
    };
    JqxGantt.prototype.insertResource = function (resourceId, resourceObject) {
        this._jqx(this._target()).jqxGantt('insertResource', resourceId, resourceObject);
    };
    JqxGantt.prototype.updateResource = function (resourceId, taskObject) {
        this._jqx(this._target()).jqxGantt('updateResource', resourceId, taskObject);
    };
    JqxGantt.prototype.removeResource = function (resourceId) {
        this._jqx(this._target()).jqxGantt('removeResource', resourceId);
    };
    JqxGantt.prototype.openWindow = function (taskId) {
        this._jqx(this._target()).jqxGantt('openWindow', taskId);
    };
    JqxGantt.prototype.closeWindow = function () {
        this._jqx(this._target()).jqxGantt('closeWindow');
    };
    JqxGantt.prototype.print = function () {
        this._jqx(this._target()).jqxGantt('print');
    };
    JqxGantt.prototype.setWorkTime = function (settings) {
        this._jqx(this._target()).jqxGantt('setWorkTime', settings);
    };
    JqxGantt.prototype.selectTask = function (id) {
        this._jqx(this._target()).jqxGantt('selectTask', id);
    };
    JqxGantt.prototype.selectResource = function (id) {
        this._jqx(this._target()).jqxGantt('selectResource', id);
    };
    JqxGantt.prototype.unselectTask = function (id) {
        this._jqx(this._target()).jqxGantt('unselectTask', id);
    };
    JqxGantt.prototype.unselectResource = function (id) {
        this._jqx(this._target()).jqxGantt('unselectResource', id);
    };
    JqxGantt.prototype.unsetWorkTime = function (settings) {
        this._jqx(this._target()).jqxGantt('unsetWorkTime', settings);
    };
    JqxGantt.prototype.sort = function (columns) {
        this._jqx(this._target()).jqxGantt('sort', columns);
    };
    JqxGantt.prototype._manageProps = function () {
        var widgetProps = ['adjustToNonworkingTime', 'aiProvider', 'aiKey', 'aiModel', 'aiProxyUrl', 'aiHeaders', 'aiSendRequest', 'aiMaxRows', 'autoSchedule', 'autoScheduleStrictMode', 'autoScrollStep', 'columnMenu', 'columnMinWidth', 'columnResize', 'columnResizeFeedback', 'currentTime', 'currentTimeIndicator', 'currentTimeIndicatorInterval', 'dataExportFileName', 'source', 'dayFormat', 'dateEnd', 'dateStart', 'dateMarkers', 'disabled', 'disableAutoScroll', 'disableTaskDrag', 'disableTaskProgressChange', 'disableTaskResize', 'disableSelection', 'disableSegmentDrag', 'disableSegmentResize', 'disableWindowEditor', 'durationUnit', 'filterRow', 'firstDayOfWeek', 'groupByResources', 'headerTemplate', 'height', 'hideDateMarkers', 'hideTimelineHeader', 'hideTimelineHeaderDetails', 'hideTimelineSecondHeaderDetails', 'hideResourcePanel', 'horizontalScrollBarVisibility', 'hourFormat', 'infiniteTimeline', 'infiniteTimelineStep', 'inverted', 'keyboardNavigation', 'max', 'min', 'monthFormat', 'monthScale', 'nonworkingDays', 'nonworkingHours', 'onTaskRender', 'popupWindowCustomizationFunction', 'popupWindowTabs', 'progressLabelFormatFunction', 'quarterFormat', 'resources', 'resourceColumns', 'resourceFiltering', 'resourceGroupFormatFunction', 'resourcePanelHeaderTemplate', 'resourcePanelMin', 'resourcePanelSize', 'resourcePanelRefreshRate', 'resourceTimelineFormatFunction', 'resourceTimelineMode', 'resourceTimelineView', 'rtl', 'selectedTaskIds', 'selectedResourceIds', 'shadeUntilCurrentTime', 'showSelectionColumn', 'showBaseline', 'showProgressLabel', 'snapToNearest', 'sortFunction', 'sortMode', 'tasks', 'taskColumns', 'taskFiltering', 'taskPanelMin', 'taskPanelSize', 'timelineMin', 'treeMin', 'treeSize', 'timelineHeaderFormatFunction', 'tooltip', 'verticalScrollBarVisibility', 'view', 'yearFormat', 'weekFormat', 'width', 'theme'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxGantt.prototype._hostAttributes = function () {
        var attributes = {};
        for (var prop in this.props) {
            if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                attributes[prop] = this.props[prop];
            }
        }
        return attributes;
    };
    JqxGantt.prototype._applyHostAttributes = function () {
        var host = this._host;
        if (!host) {
            return;
        }
        var attributes = this._hostAttributes();
        for (var name_1 in attributes) {
            var value = attributes[name_1];
            if (value !== undefined && value !== null && host.getAttribute(name_1) !== String(value)) {
                host.setAttribute(name_1, String(value));
            }
        }
    };
    JqxGantt.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0 && !this._eventHandlers[prop]) {
                if (!this._eventElement) {
                    this._eventElement = this._jqx(this._target());
                }
                this._eventHandlers[prop] = this._eventHandler(prop);
                this._eventElement.on(__eventName__(prop), this._eventHandlers[prop]);
            }
        }
    };
    JqxGantt.prototype._eventHandler = function (prop) {
        var that = this;
        return function () {
            var handler = that.props[prop];
            if (typeof handler !== 'function') {
                return undefined;
            }
            if (that._mounting) {
                var target_1 = this;
                var args_1 = arguments;
                __afterTask__(function () { handler.apply(target_1, args_1); });
                return undefined;
            }
            return handler.apply(this, arguments);
        };
    };
    JqxGantt.prototype._teardown = function () {
        var node = this._host;
        var place = this._widgetPlace;
        var kept = !!node.ownerDocument && node.ownerDocument.documentElement.contains(node);
        for (var prop in this._eventHandlers) {
            if (this._eventHandlers.hasOwnProperty(prop)) {
                this._eventElement.off(__eventName__(prop), this._eventHandlers[prop]);
            }
        }
        this._eventHandlers = {};
        this._eventElement = null;
        this._appliedOptions = null;
        this._host = null;
        this._widgetPlace = null;
        var parent = node.parentNode;
        var next = node.nextSibling;
        if (place) {
            place.parent.insertBefore(node, place.next && place.next.parentNode === place.parent ? place.next : null);
        }
        try {
            this._jqx(node).jqxGantt('destroy');
        }
        catch (e) {
            /* widget was already destroyed or never created */
        }
        if (kept && parent) {
            if (node.parentNode !== parent) {
                parent.insertBefore(node, next && next.parentNode === parent ? next : null);
            }
            node.id = this._id;
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            this._hostChildren.forEach(function (child) { return node.appendChild(child); });
        }
        else if (place && node.parentNode === place.parent) {
            place.parent.removeChild(node);
        }
    };
    return JqxGantt;
}(PureComponent));
function __eventName__(prop) {
    return prop.charAt(2).toLowerCase() + prop.slice(3);
}
var __hasWindow__ = typeof window !== 'undefined';
var jqx = (__hasWindow__ ? window.jqx : undefined);
var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

export default JqxGantt;
export { jqx, JQXLite };
