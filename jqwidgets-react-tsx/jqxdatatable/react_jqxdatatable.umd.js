require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxdata.export');
require('../../jqwidgets/jqxexport');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxbuttongroup');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxmenu');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxnumberinput');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/globalization/globalize');
require('../../jqwidgets/jqxcalendar');
require('../../jqwidgets/jqxdatetimeinput');
require('../../jqwidgets/jqxdatatable');
require('../../jqwidgets/jqxtooltip');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxdatatable = {}),global.React));
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
    var JqxDataTable = /** @class */ (function (_super) {
        __extends(JqxDataTable, _super);
        function JqxDataTable(props) {
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
            /* tslint:disable:variable-name */
            _this._readyHandler = null;
            _this._id = 'JqxDataTable' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
            _this._componentSelector = '#' + _this._id;
            return _this;
        }
        JqxDataTable.prototype.componentDidMount = function () {
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
                element.jqxDataTable(widgetOptions);
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
        JqxDataTable.prototype.componentDidUpdate = function () {
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
        JqxDataTable.prototype._warnRebuiltProps = function (changed) {
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
                    console.warn('JqxDataTable: the "' + key + '" prop was new on three renders in a row, and each time the widget was updated with it'
                        + (key === 'source' ? ' (its data bound again)' : '') + '. Create it once, outside the component or with useMemo or useCallback;'
                        + ' a function inside it, or a new jqx.dataAdapter, makes it new on every render.');
                }
            }
        };
        JqxDataTable.prototype._onReady = function () {
            var component = this;
            if (!this._readyHandler) {
                this._readyHandler = function () {
                    var widget = this;
                    var args = arguments;
                    __afterTask__(function () {
                        var ready = component.props.ready;
                        if (typeof ready === 'function') {
                            ready.apply(widget, args);
                        }
                    });
                };
            }
            return this._readyHandler;
        };
        JqxDataTable.prototype.componentWillUnmount = function () {
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
        JqxDataTable.prototype._target = function () {
            return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
        };
        JqxDataTable.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style, suppressHydrationWarning: true }, this._hostAttributes()), this.props.children));
        };
        JqxDataTable.prototype.setOptions = function (options) {
            this._jqx(this._target()).jqxDataTable(options);
        };
        JqxDataTable.prototype.getOptions = function (option) {
            return this._jqx(this._target()).jqxDataTable(option);
        };
        JqxDataTable.prototype.addRow = function (rowIndex, rowData, rowPosition) {
            this._jqx(this._target()).jqxDataTable('addRow', rowIndex, rowData, rowPosition);
        };
        JqxDataTable.prototype.addFilter = function (dataField, filerGroup) {
            this._jqx(this._target()).jqxDataTable('addFilter', dataField, filerGroup);
        };
        JqxDataTable.prototype.applyFilters = function () {
            this._jqx(this._target()).jqxDataTable('applyFilters');
        };
        JqxDataTable.prototype.beginUpdate = function () {
            this._jqx(this._target()).jqxDataTable('beginUpdate');
        };
        JqxDataTable.prototype.beginRowEdit = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('beginRowEdit', rowIndex);
        };
        JqxDataTable.prototype.beginCellEdit = function (rowIndex, dataField) {
            this._jqx(this._target()).jqxDataTable('beginCellEdit', rowIndex, dataField);
        };
        JqxDataTable.prototype.clearSelection = function () {
            this._jqx(this._target()).jqxDataTable('clearSelection');
        };
        JqxDataTable.prototype.clearFilters = function () {
            this._jqx(this._target()).jqxDataTable('clearFilters');
        };
        JqxDataTable.prototype.clear = function () {
            this._jqx(this._target()).jqxDataTable('clear');
        };
        JqxDataTable.prototype.destroy = function () {
            this._jqx(this._target()).jqxDataTable('destroy');
        };
        JqxDataTable.prototype.deleteRow = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('deleteRow', rowIndex);
        };
        JqxDataTable.prototype.endUpdate = function () {
            this._jqx(this._target()).jqxDataTable('endUpdate');
        };
        JqxDataTable.prototype.ensureRowVisible = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('ensureRowVisible', rowIndex);
        };
        JqxDataTable.prototype.endRowEdit = function (rowIndex, cancelChanges) {
            this._jqx(this._target()).jqxDataTable('endRowEdit', rowIndex, cancelChanges);
        };
        JqxDataTable.prototype.endCellEdit = function (rowIndex, dataField) {
            this._jqx(this._target()).jqxDataTable('endCellEdit', rowIndex, dataField);
        };
        JqxDataTable.prototype.exportData = function (exportDataType) {
            return this._jqx(this._target()).jqxDataTable('exportData', exportDataType);
        };
        JqxDataTable.prototype.focus = function () {
            this._jqx(this._target()).jqxDataTable('focus');
        };
        JqxDataTable.prototype.getColumnProperty = function (dataField, propertyName) {
            return this._jqx(this._target()).jqxDataTable('getColumnProperty', dataField, propertyName);
        };
        JqxDataTable.prototype.goToPage = function (pageIndex) {
            this._jqx(this._target()).jqxDataTable('goToPage', pageIndex);
        };
        JqxDataTable.prototype.goToPrevPage = function () {
            this._jqx(this._target()).jqxDataTable('goToPrevPage');
        };
        JqxDataTable.prototype.goToNextPage = function () {
            this._jqx(this._target()).jqxDataTable('goToNextPage');
        };
        JqxDataTable.prototype.getSelection = function () {
            return this._jqx(this._target()).jqxDataTable('getSelection');
        };
        JqxDataTable.prototype.getRows = function () {
            return this._jqx(this._target()).jqxDataTable('getRows');
        };
        JqxDataTable.prototype.getView = function () {
            return this._jqx(this._target()).jqxDataTable('getView');
        };
        JqxDataTable.prototype.getCellValue = function (rowIndex, dataField) {
            return this._jqx(this._target()).jqxDataTable('getCellValue', rowIndex, dataField);
        };
        JqxDataTable.prototype.hideColumn = function (dataField) {
            this._jqx(this._target()).jqxDataTable('hideColumn', dataField);
        };
        JqxDataTable.prototype.hideDetails = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('hideDetails', rowIndex);
        };
        JqxDataTable.prototype.isBindingCompleted = function () {
            return this._jqx(this._target()).jqxDataTable('isBindingCompleted');
        };
        JqxDataTable.prototype.lockRow = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('lockRow', rowIndex);
        };
        JqxDataTable.prototype.refresh = function () {
            this._jqx(this._target()).jqxDataTable('refresh');
        };
        JqxDataTable.prototype.renderWidget = function () {
            this._jqx(this._target()).jqxDataTable('render');
        };
        JqxDataTable.prototype.removeFilter = function (dataField) {
            this._jqx(this._target()).jqxDataTable('removeFilter', dataField);
        };
        JqxDataTable.prototype.scrollOffset = function (top, left) {
            this._jqx(this._target()).jqxDataTable('scrollOffset', top, left);
        };
        JqxDataTable.prototype.setColumnProperty = function (dataField, propertyName, propertyValue) {
            this._jqx(this._target()).jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
        };
        JqxDataTable.prototype.showColumn = function (dataField) {
            this._jqx(this._target()).jqxDataTable('showColumn', dataField);
        };
        JqxDataTable.prototype.selectRow = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('selectRow', rowIndex);
        };
        JqxDataTable.prototype.showDetails = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('showDetails', rowIndex);
        };
        JqxDataTable.prototype.setCellValue = function (rowIndex, dataField, value) {
            this._jqx(this._target()).jqxDataTable('setCellValue', rowIndex, dataField, value);
        };
        JqxDataTable.prototype.sortBy = function (dataField, sortOrder) {
            this._jqx(this._target()).jqxDataTable('sortBy', dataField, sortOrder);
        };
        JqxDataTable.prototype.updating = function () {
            return this._jqx(this._target()).jqxDataTable('updating');
        };
        JqxDataTable.prototype.updateBoundData = function () {
            this._jqx(this._target()).jqxDataTable('updateBoundData');
        };
        JqxDataTable.prototype.unselectRow = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('unselectRow', rowIndex);
        };
        JqxDataTable.prototype.updateRow = function (rowIndex, rowData) {
            this._jqx(this._target()).jqxDataTable('updateRow', rowIndex, rowData);
        };
        JqxDataTable.prototype.unlockRow = function (rowIndex) {
            this._jqx(this._target()).jqxDataTable('unlockRow', rowIndex);
        };
        JqxDataTable.prototype._manageProps = function () {
            var widgetProps = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'beginEdit', 'endEdit', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'handleKeyboardNavigation', 'height', 'initRowDetails', 'incrementalSearch', 'indentWidth', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'enableSanitizeAll', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    if (prop === 'ready' && typeof this.props.ready === 'function') {
                        options[prop] = this._onReady();
                    }
                    else {
                        options[prop] = this.props[prop];
                    }
                }
            }
            return options;
        };
        JqxDataTable.prototype._hostAttributes = function () {
            var attributes = {};
            for (var prop in this.props) {
                if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                    attributes[prop] = this.props[prop];
                }
            }
            return attributes;
        };
        JqxDataTable.prototype._applyHostAttributes = function () {
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
        JqxDataTable.prototype._wireEvents = function () {
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
        JqxDataTable.prototype._eventHandler = function (prop) {
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
        JqxDataTable.prototype._teardown = function () {
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
                this._jqx(node).jqxDataTable('destroy');
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
        return JqxDataTable;
    }(React.PureComponent));
    function __eventName__(prop) {
        return prop.charAt(2).toLowerCase() + prop.slice(3);
    }
    var __hasWindow__ = typeof window !== 'undefined';
    var jqx = (__hasWindow__ ? window.jqx : undefined);
    var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

    exports.default = JqxDataTable;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
