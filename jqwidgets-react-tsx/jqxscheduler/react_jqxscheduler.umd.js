require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxdata.export');
require('../../jqwidgets/jqxdate');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxmenu');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxradiobutton');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxwindow');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxcolorpicker');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxnumberinput');
require('../../jqwidgets/jqxinput');
require('../../jqwidgets/globalization/globalize');
require('../../jqwidgets/jqxcalendar');
require('../../jqwidgets/jqxdatetimeinput');
require('../../jqwidgets/jqxscheduler');
require('../../jqwidgets/jqxscheduler.api');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxscheduler = {}),global.React));
}(this, (function (exports,React) { 'use strict';

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
    function __afterTask__(callback) {
        if (typeof Promise !== 'undefined') {
            Promise.resolve().then(callback);
        }
        else {
            setTimeout(callback, 0);
        }
    }
    var JqxScheduler = /** @class */ (function (_super) {
        __extends(JqxScheduler, _super);
        function JqxScheduler(props) {
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
            _this._hostParent = null;
            /* tslint:disable:variable-name */
            _this._hostNext = null;
            /* tslint:disable:variable-name */
            _this._widgetPlace = null;
            /* tslint:disable:variable-name */
            _this._hostChildren = [];
            _this._id = 'JqxScheduler' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
            _this._componentSelector = '#' + _this._id;
            return _this;
        }
        JqxScheduler.prototype.componentDidMount = function () {
            if (this._teardownPending) {
                this._teardownPending = false;
                var place = this._widgetPlace;
                if (place && this._host) {
                    place.parent.insertBefore(this._host, place.next && place.next.parentNode === place.parent ? place.next : null);
                }
                this._widgetPlace = null;
                return;
            }
            var element = this._jqx(this._target());
            this._host = element[0] || null;
            this._hostParent = this._host ? this._host.parentNode : null;
            this._hostNext = this._host ? this._host.nextSibling : null;
            this._hostChildren = this._host ? Array.prototype.slice.call(this._host.childNodes) : [];
            var widgetOptions = this._manageProps();
            element.jqxScheduler(widgetOptions);
            this._appliedOptions = widgetOptions;
            this._applyHostAttributes();
            this._wireEvents();
        };
        JqxScheduler.prototype.componentDidUpdate = function () {
            if (!this._appliedOptions) {
                return;
            }
            var widgetOptions = this._manageProps();
            var changed = {};
            var hasChanges = false;
            for (var key in widgetOptions) {
                if (!__sameValue__(widgetOptions[key], this._appliedOptions[key])) {
                    changed[key] = widgetOptions[key];
                    hasChanges = true;
                }
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
        JqxScheduler.prototype.componentWillUnmount = function () {
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
        JqxScheduler.prototype._target = function () {
            return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
        };
        JqxScheduler.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style }, this._hostAttributes()), this.props.children));
        };
        JqxScheduler.prototype.setOptions = function (options) {
            this._jqx(this._target()).jqxScheduler(options);
        };
        JqxScheduler.prototype.getOptions = function (option) {
            return this._jqx(this._target()).jqxScheduler(option);
        };
        JqxScheduler.prototype.aiConfig = function (config) {
            return this._jqx(this._target()).jqxScheduler('aiConfig', config);
        };
        JqxScheduler.prototype.aiCommand = function (text, callback) {
            return this._jqx(this._target()).jqxScheduler('aiCommand', text, callback);
        };
        JqxScheduler.prototype.aiScheduleAppointment = function (text, callback) {
            return this._jqx(this._target()).jqxScheduler('aiScheduleAppointment', text, callback);
        };
        JqxScheduler.prototype.aiFindSlot = function (text, callback) {
            return this._jqx(this._target()).jqxScheduler('aiFindSlot', text, callback);
        };
        JqxScheduler.prototype.aiBookSlot = function (slot, details) {
            return this._jqx(this._target()).jqxScheduler('aiBookSlot', slot, details);
        };
        JqxScheduler.prototype.aiResolveConflicts = function (options, callback) {
            return this._jqx(this._target()).jqxScheduler('aiResolveConflicts', options, callback);
        };
        JqxScheduler.prototype.aiApplyResolution = function (proposals) {
            return this._jqx(this._target()).jqxScheduler('aiApplyResolution', proposals);
        };
        JqxScheduler.prototype.aiAsk = function (text, callback) {
            return this._jqx(this._target()).jqxScheduler('aiAsk', text, callback);
        };
        JqxScheduler.prototype.aiSummarize = function (callback) {
            return this._jqx(this._target()).jqxScheduler('aiSummarize', callback);
        };
        JqxScheduler.prototype.aiExplainAppointment = function (key, callback) {
            return this._jqx(this._target()).jqxScheduler('aiExplainAppointment', key, callback);
        };
        JqxScheduler.prototype.aiClassifyAppointments = function (options, callback) {
            return this._jqx(this._target()).jqxScheduler('aiClassifyAppointments', options, callback);
        };
        JqxScheduler.prototype.addAppointment = function (item) {
            return this._jqx(this._target()).jqxScheduler('addAppointment', item);
        };
        JqxScheduler.prototype.beginAppointmentsUpdate = function () {
            this._jqx(this._target()).jqxScheduler('beginAppointmentsUpdate');
        };
        JqxScheduler.prototype.clearAppointmentsSelection = function () {
            this._jqx(this._target()).jqxScheduler('clearAppointmentsSelection');
        };
        JqxScheduler.prototype.clearSelection = function () {
            this._jqx(this._target()).jqxScheduler('clearSelection');
        };
        JqxScheduler.prototype.closeMenu = function () {
            this._jqx(this._target()).jqxScheduler('closeMenu');
        };
        JqxScheduler.prototype.closeDialog = function () {
            this._jqx(this._target()).jqxScheduler('closeDialog');
        };
        JqxScheduler.prototype.deleteAppointment = function (appointmenId) {
            return this._jqx(this._target()).jqxScheduler('deleteAppointment', appointmenId);
        };
        JqxScheduler.prototype.destroy = function () {
            this._jqx(this._target()).jqxScheduler('destroy');
        };
        JqxScheduler.prototype.endAppointmentsUpdate = function () {
            this._jqx(this._target()).jqxScheduler('endAppointmentsUpdate');
        };
        JqxScheduler.prototype.ensureAppointmentVisible = function (id) {
            this._jqx(this._target()).jqxScheduler('ensureAppointmentVisible', id);
        };
        JqxScheduler.prototype.ensureVisible = function (item, resourceId) {
            this._jqx(this._target()).jqxScheduler('ensureVisible', item, resourceId);
        };
        JqxScheduler.prototype.findAvailableSlots = function (options) {
            return this._jqx(this._target()).jqxScheduler('findAvailableSlots', options);
        };
        JqxScheduler.prototype.importData = function (data, options) {
            return this._jqx(this._target()).jqxScheduler('importData', data, options);
        };
        JqxScheduler.prototype.exportData = function (format) {
            return this._jqx(this._target()).jqxScheduler('exportData', format);
        };
        JqxScheduler.prototype.focus = function () {
            this._jqx(this._target()).jqxScheduler('focus');
        };
        JqxScheduler.prototype.getAppointmentProperty = function (appointmentId, name) {
            return this._jqx(this._target()).jqxScheduler('getAppointmentProperty', appointmentId, name);
        };
        JqxScheduler.prototype.getSelection = function () {
            return this._jqx(this._target()).jqxScheduler('getSelection');
        };
        JqxScheduler.prototype.getAppointments = function () {
            return this._jqx(this._target()).jqxScheduler('getAppointments');
        };
        JqxScheduler.prototype.getDataAppointments = function () {
            return this._jqx(this._target()).jqxScheduler('getDataAppointments');
        };
        JqxScheduler.prototype.hideAppointmentsByResource = function (resourcesId) {
            this._jqx(this._target()).jqxScheduler('hideAppointmentsByResource', resourcesId);
        };
        JqxScheduler.prototype.openMenu = function (left, top) {
            this._jqx(this._target()).jqxScheduler('openMenu', left, top);
        };
        JqxScheduler.prototype.openDialog = function (left, top) {
            this._jqx(this._target()).jqxScheduler('openDialog', left, top);
        };
        JqxScheduler.prototype.selectAppointment = function (appointmentId) {
            this._jqx(this._target()).jqxScheduler('selectAppointment', appointmentId);
        };
        JqxScheduler.prototype.setAppointmentProperty = function (appointmentId, name, value) {
            this._jqx(this._target()).jqxScheduler('setAppointmentProperty', appointmentId, name, value);
        };
        JqxScheduler.prototype.selectCell = function (date, allday, resourceId) {
            this._jqx(this._target()).jqxScheduler('selectCell', date, allday, resourceId);
        };
        JqxScheduler.prototype.showAppointmentsByResource = function (resourceId) {
            this._jqx(this._target()).jqxScheduler('showAppointmentsByResource', resourceId);
        };
        JqxScheduler.prototype.scrollWidth = function () {
            return this._jqx(this._target()).jqxScheduler('scrollWidth');
        };
        JqxScheduler.prototype.scrollHeight = function () {
            return this._jqx(this._target()).jqxScheduler('scrollHeight');
        };
        JqxScheduler.prototype.scrollLeft = function (left) {
            this._jqx(this._target()).jqxScheduler('scrollLeft', left);
        };
        JqxScheduler.prototype.scrollTop = function (top) {
            this._jqx(this._target()).jqxScheduler('scrollTop', top);
        };
        JqxScheduler.prototype.scrollToTime = function (time) {
            return this._jqx(this._target()).jqxScheduler('scrollToTime', time);
        };
        JqxScheduler.prototype.undo = function () {
            return this._jqx(this._target()).jqxScheduler('undo');
        };
        JqxScheduler.prototype.redo = function () {
            return this._jqx(this._target()).jqxScheduler('redo');
        };
        JqxScheduler.prototype.canUndo = function () {
            return this._jqx(this._target()).jqxScheduler('canUndo');
        };
        JqxScheduler.prototype.canRedo = function () {
            return this._jqx(this._target()).jqxScheduler('canRedo');
        };
        JqxScheduler.prototype.clearUndoRedo = function () {
            this._jqx(this._target()).jqxScheduler('clearUndoRedo');
        };
        JqxScheduler.prototype._manageProps = function () {
            var widgetProps = ['allowOverlap', 'blockedTimes', 'maxDuration', 'minDuration', 'appointmentOpacity', 'appointmentsMinHeight', 'appointmentDataFields', 'appointmentTooltips', 'columnsHeight', 'contextMenu', 'contextMenuOpen', 'contextMenuClose', 'contextMenuItemClick', 'contextMenuCreate', 'changedAppointments', 'disabled', 'date', 'dayNameFormat', 'enableHover', 'editDialog', 'editDialogDateTimeFormatString', 'editDialogDateFormatString', 'editDialogOpen', 'editDialogCreate', 'editDialogKeyDown', 'editDialogClose', 'exportSettings', 'height', 'legendPosition', 'legendHeight', 'localization', 'min', 'max', 'ready', 'renderAppointment', 'rendering', 'rendered', 'rtl', 'resources', 'rowsHeight', 'showToolbar', 'showLegend', 'showCurrent', 'showCurrentAppointment', 'scrollBarSize', 'source', 'statuses', 'touchRowsHeight', 'theme', 'touchAppointmentsMinHeight', 'touchScrollBarSize', 'timeZone', 'touchDayNameFormat', 'toolBarRangeFormat', 'toolBarRangeFormatAbbr', 'toolbarHeight', 'undoRedo', 'undoRedoLimit', 'views', 'view', 'width'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    options[prop] = this.props[prop];
                }
            }
            return options;
        };
        JqxScheduler.prototype._hostAttributes = function () {
            var attributes = {};
            for (var prop in this.props) {
                if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                    attributes[prop] = this.props[prop];
                }
            }
            return attributes;
        };
        JqxScheduler.prototype._applyHostAttributes = function () {
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
        JqxScheduler.prototype._wireEvents = function () {
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
        JqxScheduler.prototype._eventHandler = function (prop) {
            var that = this;
            return function () {
                var handler = that.props[prop];
                return typeof handler === 'function' ? handler.apply(this, arguments) : undefined;
            };
        };
        JqxScheduler.prototype._teardown = function () {
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
                this._jqx(node).jqxScheduler('destroy');
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
        return JqxScheduler;
    }(React.PureComponent));
    function __eventName__(prop) {
        return prop.charAt(2).toLowerCase() + prop.slice(3);
    }
    var __hasWindow__ = typeof window !== 'undefined';
    var jqx = (__hasWindow__ ? window.jqx : undefined);
    var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

    exports.default = JqxScheduler;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
