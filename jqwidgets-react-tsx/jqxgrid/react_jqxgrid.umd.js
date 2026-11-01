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
require('../../jqwidgets/jqxgrid');
require('../../jqwidgets/jqxgrid.edit');
require('../../jqwidgets/jqxgrid.pager');
require('../../jqwidgets/jqxgrid.selection');
require('../../jqwidgets/jqxgrid.filter');
require('../../jqwidgets/jqxgrid.sort');
require('../../jqwidgets/jqxgrid.storage');
require('../../jqwidgets/jqxgrid.grouping');
require('../../jqwidgets/jqxgrid.export');
require('../../jqwidgets/jqxgrid.columnsresize');
require('../../jqwidgets/jqxgrid.columnsreorder');
require('../../jqwidgets/jqxgrid.aggregates');
require('../../jqwidgets/jqxgrid.chart');
require('../../jqwidgets/jqxgrid.ai');
require('../../jqwidgets/jqxgrid.celltemplates');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (factory((global.react_jqxgrid = {}),global.React,global.ReactDOM));
}(this, (function (exports,React,ReactDOM) { 'use strict';

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
    var JqxGrid = /** @class */ (function (_super) {
        __extends(JqxGrid, _super);
        function JqxGrid(props) {
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
            _this._cellComponents = {};
            /* tslint:disable:variable-name */
            _this._cellRenderers = {};
            /* tslint:disable:variable-name */
            _this._cellData = {};
            /* tslint:disable:variable-name */
            _this._cellContainers = {};
            /* tslint:disable:variable-name */
            _this._cellKeyData = {};
            /* tslint:disable:variable-name */
            _this._cellCount = 0;
            /* tslint:disable:variable-name */
            _this._cellObserver = null;
            /* tslint:disable:variable-name */
            _this._cellFlushPending = false;
            /* tslint:disable:variable-name */
            _this._editorComponents = {};
            /* tslint:disable:variable-name */
            _this._editorHooks = {};
            /* tslint:disable:variable-name */
            _this._activeEditor = null;
            /* tslint:disable:variable-name */
            _this._editCount = 0;
            /* tslint:disable:variable-name */
            _this._columnFunctions = {};
            /* tslint:disable:variable-name */
            _this._columnWrappers = {};
            /* tslint:disable:variable-name */
            _this._redrawPending = false;
            /* tslint:disable:variable-name */
            _this._newComponents = {};
            /* tslint:disable:variable-name */
            _this._headerComponents = {};
            /* tslint:disable:variable-name */
            _this._headerRenderers = {};
            /* tslint:disable:variable-name */
            _this._headerContainers = {};
            /* tslint:disable:variable-name */
            _this._toolbarContainer = null;
            /* tslint:disable:variable-name */
            _this._statusbarContainer = null;
            /* tslint:disable:variable-name */
            _this._detailContainers = {};
            /* tslint:disable:variable-name */
            _this._partRenderers = {};
            /* tslint:disable:variable-name */
            _this._stateApplying = false;
            /* tslint:disable:variable-name */
            _this._selectionReportPending = false;
            /* tslint:disable:variable-name */
            _this._sortReportPending = false;
            /* tslint:disable:variable-name */
            _this._selectionApplied = undefined;
            /* tslint:disable:variable-name */
            _this._sortApplied = undefined;
            /* tslint:disable:variable-name */
            _this._stateCheck = null;
            /* tslint:disable:variable-name */
            _this._totalApplied = undefined;
            /* tslint:disable:variable-name */
            _this._queryReportPending = false;
            /* tslint:disable:variable-name */
            _this._lastQuery = null;
            /* tslint:disable:variable-name */
            _this._loadingShown = false;
            /* tslint:disable:variable-name */
            _this._serverRowsRenderer = null;
            /* tslint:disable:variable-name */
            _this._columnsIn = null;
            /* tslint:disable:variable-name */
            _this._columnsOut = null;
            /* tslint:disable:variable-name */
            _this._rowsSource = null;
            /* tslint:disable:variable-name */
            _this._rowsAdapter = null;
            /* tslint:disable:variable-name */
            _this._rowsApplied = null;
            /* tslint:disable:variable-name */
            _this._readyHandler = null;
            _this._id = 'JqxGrid' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
            _this._componentSelector = '#' + _this._id;
            return _this;
        }
        JqxGrid.prototype.componentDidMount = function () {
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
                element.jqxGrid(widgetOptions);
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
            this._watchState();
            this._showLoading();
            this._watchQuery();
        };
        JqxGrid.prototype.componentDidUpdate = function () {
            if (!this._appliedOptions) {
                return;
            }
            this._syncRows();
            this._applyState(!!this._stateCheck);
            if (this._stateCheck) {
                clearTimeout(this._stateCheck);
                this._stateCheck = null;
            }
            this._showLoading();
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
        JqxGrid.prototype._warnRebuiltProps = function (changed) {
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
                    console.warn('JqxGrid: the "' + key + '" prop was new on three renders in a row, and each time the widget was updated with it'
                        + (key === 'source' ? ' (its data bound again)' : '') + '. Create it once, outside the component or with useMemo or useCallback;'
                        + ' a function inside it, or a new jqx.dataAdapter, makes it new on every render.');
                }
            }
        };
        // The columns the widget gets. Its function options (cellsrenderer, validation, createeditor...)
        // are wrappers that call the function the props have now, the same wrapper on every render:
        // an inline function does not make the columns new (which rebuilt them and dropped the sort),
        // and the grid, which keeps the functions it was given, does not call an old one with an
        // earlier render's state. When they change, the cells are drawn again. A cellComponent or
        // editorComponent becomes a cell renderer or custom editor of the component's own.
        JqxGrid.prototype._prepareColumns = function (columns) {
            var _this = this;
            if (columns === this._columnsIn) {
                return this._columnsOut;
            }
            var prepared = columns;
            var functionsChanged = false;
            if (Array.isArray(columns)) {
                prepared = columns.map(function (column, index) {
                    if (!column || typeof column !== 'object') {
                        return column;
                    }
                    var name = column.datafield !== undefined ? String(column.datafield) : '#' + index;
                    var copy = {};
                    for (var key in column) {
                        var value = column[key];
                        if (key === 'cellComponent' || key === 'editorComponent' || key === 'headerComponent') {
                            continue;
                        }
                        if (typeof value === 'function') {
                            var id = name + '|' + key;
                            if (_this._columnFunctions[id] && _this._columnFunctions[id] !== value) {
                                functionsChanged = true;
                            }
                            _this._columnFunctions[id] = value;
                            copy[key] = _this._columnFunction(id);
                        }
                        else {
                            // a copy of plain values (an aggregates array shared between renders): the
                            // next render's columns are compared with it by content, and a value changed
                            // in place is still seen
                            copy[key] = _this._plainCopy(value, 0);
                        }
                    }
                    if (column.cellComponent) {
                        _this._watchComponent(name, 'cellComponent', _this._cellComponents[column.datafield], column.cellComponent);
                        _this._cellComponents[column.datafield] = column.cellComponent;
                        copy.cellsrenderer = _this._cellRenderer(column.datafield);
                    }
                    if (column.headerComponent) {
                        _this._watchComponent(name, 'headerComponent', _this._headerComponents[name], column.headerComponent);
                        _this._headerComponents[name] = column.headerComponent;
                        copy.renderer = _this._headerRenderer(name);
                    }
                    if (column.editorComponent) {
                        // a custom editor whose content is the component
                        var hooks = _this._editorHooksOf(column.datafield);
                        _this._watchComponent(name, 'editorComponent', _this._editorComponents[column.datafield], column.editorComponent);
                        _this._editorComponents[column.datafield] = column.editorComponent;
                        copy.columntype = 'custom';
                        copy.createeditor = hooks.create;
                        copy.initeditor = hooks.init;
                        copy.geteditorvalue = hooks.value;
                    }
                    return copy;
                });
            }
            this._columnsIn = columns;
            this._columnsOut = prepared;
            if (functionsChanged && this._host && !this._redrawPending) {
                this._redrawPending = true;
                __afterTask__(function () {
                    _this._redrawPending = false;
                    if (_this._host) {
                        _this._jqx(_this._target()).jqxGrid('refresh');
                    }
                });
            }
            return prepared;
        };
        // The row the app gave in rows (the grid's record is a copy, with fields of its own and objects
        // turned into text by the data adapter); with a data adapter, the record.
        JqxGrid.prototype._originalRow = function (record) {
            var rows = this._rowsApplied;
            if (!record || !rows) {
                return record;
            }
            var index = record.boundindex !== undefined ? record.boundindex : record.uid;
            var row = rows[index];
            var key = this.props.rowKey;
            if (row && (!key || row[key] === record[key])) {
                return row;
            }
            // a server page (bound indexes count from the first row of all) or moved rows: by key
            if (key && rows.length <= 5000) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i] && rows[i][key] === record[key]) {
                        return rows[i];
                    }
                }
            }
            return record;
        };
        // a row's bound index by its key: the source's id when it has one, else the row's field
        // (a data adapter whose source names no id)
        JqxGrid.prototype._indexOfKey = function (value) {
            var grid = this._jqx(this._target());
            var index = grid.jqxGrid('getrowboundindexbyid', value);
            if (index !== undefined && index !== null && index >= 0) {
                return index;
            }
            var key = this.props.rowKey;
            var rows = grid.jqxGrid('getboundrows') || [];
            for (var i = 0; i < rows.length; i++) {
                if (key && rows[i] && rows[i][key] === value) {
                    return rows[i].boundindex !== undefined ? rows[i].boundindex : i;
                }
            }
            return -1;
        };
        // arrays and plain objects copied (to a depth); anything else as it is
        JqxGrid.prototype._plainCopy = function (value, depth) {
            var _this = this;
            if (!value || typeof value !== 'object' || depth > 8) {
                return value;
            }
            if (Array.isArray(value)) {
                return value.map(function (item) { return _this._plainCopy(item, depth + 1); });
            }
            var proto = Object.getPrototypeOf(value);
            if (proto !== Object.prototype && proto !== null) {
                return value;
            }
            var copy = {};
            for (var key in value) {
                copy[key] = this._plainCopy(value[key], depth + 1);
            }
            return copy;
        };
        // the wrapper of a column's function option: it calls the one the props have now
        JqxGrid.prototype._columnFunction = function (id) {
            if (!this._columnWrappers[id]) {
                var component_1 = this;
                this._columnWrappers[id] = function () {
                    var current = component_1._columnFunctions[id];
                    return typeof current === 'function' ? current.apply(this, arguments) : undefined;
                };
            }
            return this._columnWrappers[id];
        };
        // In development: a cellComponent or editorComponent defined inside the render is a new
        // component each time, and React creates its cells again on every render. Said once.
        JqxGrid.prototype._watchComponent = function (column, prop, previous, next) {
            if (!__isDevelopment__ || !previous || previous === next || String(previous) !== String(next)) {
                return;
            }
            var id = column + '|' + prop;
            this._newComponents[id] = (this._newComponents[id] || 0) + 1;
            if (this._newComponents[id] === 3) {
                console.warn('JqxGrid: the ' + prop + ' of the "' + column + '" column is a new component on every render, so React creates '
                    + (prop === 'cellComponent' ? 'its cells' : prop === 'headerComponent' ? 'its header' : 'its editor') + ' again each time. Define it outside the component, or with useCallback.');
            }
        };
        // The cell renderer of a column with a cellComponent: an empty placeholder, which a portal
        // fills once the grid has put it on the page
        JqxGrid.prototype._cellRenderer = function (datafield) {
            var _this = this;
            if (!this._cellRenderers[datafield]) {
                this._cellRenderers[datafield] = function (rowIndex, _column, value, _html, settings, row) {
                    var id = 'c' + (++_this._cellCount);
                    _this._cellData[id] = { value: value, row: _this._originalRow(row), rowIndex: rowIndex, datafield: datafield };
                    _this._scheduleCells();
                    var align = settings && settings.cellsalign;
                    var alignClass = align === 'center' ? ' jqx-grid-react-cell-center' : align === 'right' ? ' jqx-grid-react-cell-right' : '';
                    return '<div class="jqx-grid-react-cell' + alignClass + '" data-jqx-react-cell="' + id + '"></div>';
                };
            }
            return this._cellRenderers[datafield];
        };
        // The grid redraws cells as it scrolls, sorts and pages, and can put back cells it drew
        // before: the placeholders on the page are looked for after each change of its content.
        JqxGrid.prototype._scheduleCells = function () {
            var _this = this;
            if (!this._cellObserver && typeof MutationObserver !== 'undefined' && this._host) {
                this._cellObserver = new MutationObserver(function () { return _this._scheduleCells(); });
                this._cellObserver.observe(this._host, { childList: true, subtree: true });
            }
            if (this._cellFlushPending) {
                return;
            }
            this._cellFlushPending = true;
            __afterTask__(function () { return _this._flushCells(); });
        };
        JqxGrid.prototype._flushCells = function () {
            var _this = this;
            this._cellFlushPending = false;
            if (!this._host) {
                return;
            }
            // Each row's cell (column and row key) has a host element of its own, moved into the
            // placeholder the grid drew for it: the grid draws new placeholders whenever it redraws,
            // but the portal's container stays, so React updates the component instead of making it
            // again (it keeps its state while its row is shown, and scrolling makes fewer of them).
            var containers = {};
            var keyData = {};
            var found = this._host.querySelectorAll('[data-jqx-react-cell]');
            var rowKey = this.props.rowKey;
            var placed = {};
            var changed = false;
            for (var i = 0; i < found.length; i++) {
                var element = found[i];
                var id = element.getAttribute('data-jqx-react-cell');
                var data = this._cellData[id];
                if (!data) {
                    continue;
                }
                var row = data.row;
                var rowId = row && rowKey && row[rowKey] !== undefined ? row[rowKey] : row && row.uid !== undefined ? row.uid : data.rowIndex;
                var key = data.datafield + '|' + rowId;
                placed[id] = key;
                if (containers[key]) {
                    continue;
                }
                var host = this._cellContainers[key];
                if (!host) {
                    host = document.createElement('div');
                    host.className = 'jqx-grid-react-cell-host';
                    changed = true;
                }
                if (host.parentNode !== element) {
                    element.appendChild(host);
                }
                containers[key] = host;
                keyData[key] = data;
                var before = this._cellKeyData[key];
                if (!before || before.value !== data.value || before.row !== data.row || before.rowIndex !== data.rowIndex) {
                    changed = true;
                }
            }
            for (var key in this._cellContainers) {
                if (!containers[key]) {
                    changed = true;
                }
            }
            this._cellKeyData = keyData;
            var headers = {};
            var headerElements = this._host.querySelectorAll('[data-jqx-react-header]');
            for (var i = 0; i < headerElements.length; i++) {
                var element = headerElements[i];
                var name_1 = element.getAttribute('data-jqx-react-header');
                headers[name_1] = element;
                if (this._headerContainers[name_1] !== element) {
                    changed = true;
                }
            }
            for (var name_2 in this._headerContainers) {
                if (!headers[name_2]) {
                    changed = true;
                }
            }
            this._headerContainers = headers;
            // what the cells drawn long ago showed (the grid keeps no more than a page or two)
            if (this._cellCount % 5000 === 0 || Object.keys(this._cellData).length > 20000) {
                var kept = {};
                for (var id in placed) {
                    kept[id] = this._cellData[id];
                }
                this._cellData = kept;
            }
            if (!changed) {
                return;
            }
            this._cellContainers = containers;
            // at once, so a cell is never seen empty (flushSync: React 16.4 and later)
            var flushSync = ReactDOM.flushSync;
            if (flushSync) {
                flushSync(function () { return _this.forceUpdate(); });
            }
            else {
                this.forceUpdate();
            }
        };
        // The custom editor hooks of a column with an editorComponent (the same functions on every
        // render). The grid makes an editor element per row the first time one of its cells is
        // edited (createeditor), and calls initeditor on each edit: the component renders in the
        // element of the cell being edited, with its value; geteditorvalue gives the grid the value
        // the component last reported through onChange.
        JqxGrid.prototype._editorHooksOf = function (datafield) {
            var _this = this;
            if (!this._editorHooks[datafield]) {
                var open_1 = function (rowIndex, value, editor, typed) {
                    var container = editor && editor[0];
                    if (!container) {
                        return;
                    }
                    // (the themes leave a React part's own styles alone: their rules for inputs and
                    // spans in a widget skip the .jqx-grid-react-* elements)
                    container.classList.add('jqx-grid-react-editor');
                    var grid = _this._jqx(_this._target());
                    // a new key for each edit: the component starts afresh, without the state of the last edit
                    var active = { container: container, datafield: datafield, value: value, key: 'editor' + (++_this._editCount) };
                    var end = function (cancel) {
                        if (_this._activeEditor === active) {
                            grid.jqxGrid('endcelledit', rowIndex, datafield, cancel);
                        }
                    };
                    active.props = {
                        value: value, row: _this._originalRow(grid.jqxGrid('getrowdata', rowIndex)), rowIndex: rowIndex, datafield: datafield,
                        typed: typeof typed === 'string' && typed.length ? typed : undefined,
                        onChange: function (next) {
                            active.value = next;
                            active.props = Object.assign({}, active.props, { value: next });
                            if (_this._activeEditor === active) {
                                _this.forceUpdate();
                            }
                        },
                        onCommit: function (next) {
                            if (next !== undefined) {
                                active.value = next;
                            }
                            end(false);
                        },
                        onCancel: function () { return end(true); }
                    };
                    _this._activeEditor = active;
                    // Not flushSync: the grid is opening its editor, and flushSync would also apply the
                    // app's pending updates (the previous edit's new rows) in the middle of that.
                    _this.forceUpdate();
                    // the component's first field gets the focus, as the built-in editors' do
                    setTimeout(function () {
                        if (_this._activeEditor !== active || container.contains(document.activeElement)) {
                            return;
                        }
                        var field = container.querySelector('input, select, textarea, button, [tabindex]:not([tabindex="-1"])');
                        if (field) {
                            field.focus();
                        }
                    });
                };
                this._editorHooks[datafield] = {
                    create: function (rowIndex, value, editor, _text, _width, _height, typed) { return open_1(rowIndex, value, editor, typed); },
                    init: function (rowIndex, value, editor, _text, typed) { return open_1(rowIndex, value, editor, typed); },
                    value: function (_rowIndex, value) {
                        var active = _this._activeEditor;
                        return active && active.datafield === datafield ? active.value : value;
                    }
                };
            }
            return this._editorHooks[datafield];
        };
        JqxGrid.prototype._renderCells = function () {
            // the components of the columns this render has (componentDidUpdate comes after it)
            if (this.props.columns !== undefined) {
                this._prepareColumns(this.props.columns);
            }
            var portals = [];
            var part = function (key, component, container, props) {
                if (component && container) {
                    portals.push(React.createElement(React.Fragment, { key: key }, ReactDOM.createPortal(React.createElement(component, props), container)));
                }
            };
            part('toolbar', this.props.toolbarComponent, this._toolbarContainer, { grid: this });
            part('statusbar', this.props.statusbarComponent, this._statusbarContainer, { grid: this });
            for (var name_3 in this._headerContainers) {
                var column = this._columnByName(name_3);
                part('header|' + name_3, this._headerComponents[name_3], this._headerContainers[name_3], { text: column ? column.text : '', datafield: column ? column.datafield : name_3 });
            }
            if (this.props.rowDetailsComponent) {
                var grid = this._host ? this._jqx(this._target()) : null;
                for (var rowIndex in this._detailContainers) {
                    var index = +rowIndex;
                    part('details|' + rowIndex, this.props.rowDetailsComponent, this._detailContainers[rowIndex], { rowIndex: index, row: grid ? this._originalRow(grid.jqxGrid('getrowdata', index)) : null });
                }
            }
            var active = this._activeEditor;
            var editor = active && this._editorComponents[active.datafield];
            if (editor) {
                portals.push(React.createElement(React.Fragment, { key: active.key }, ReactDOM.createPortal(React.createElement(editor, active.props), active.container)));
            }
            for (var key in this._cellContainers) {
                var data = this._cellKeyData[key];
                var component = data && this._cellComponents[data.datafield];
                if (component) {
                    portals.push(React.createElement(React.Fragment, { key: key }, ReactDOM.createPortal(React.createElement(component, data), this._cellContainers[key])));
                }
            }
            return portals;
        };
        // A header with a headerComponent: a placeholder, the same for the column on every render
        JqxGrid.prototype._headerRenderer = function (name) {
            var _this = this;
            if (!this._headerRenderers[name]) {
                this._headerRenderers[name] = function (_text, align) {
                    _this._scheduleCells();
                    // aligned as the column's align says, as the header's text was
                    var alignClass = align === 'center' ? ' jqx-grid-react-cell-center' : align === 'right' ? ' jqx-grid-react-cell-right' : '';
                    return '<div class="jqx-grid-react-header' + alignClass + '" data-jqx-react-header="' + name.replace(/"/g, '&quot;') + '"></div>';
                };
            }
            return this._headerRenderers[name];
        };
        JqxGrid.prototype._columnByName = function (name) {
            var columns = this.props.columns;
            if (!Array.isArray(columns)) {
                return null;
            }
            for (var i = 0; i < columns.length; i++) {
                var column = columns[i];
                if (column && (column.datafield !== undefined ? String(column.datafield) : '#' + i) === name) {
                    return column;
                }
            }
            return null;
        };
        // The renderers of the toolbar, the status bar and the row details: an element of the
        // component's own in what the grid gives (the grid draws the toolbar again when its theme
        // changes; a row's details element is made once and kept)
        JqxGrid.prototype._partRenderer = function (part) {
            var _this = this;
            if (!this._partRenderers[part]) {
                this._partRenderers[part] = function (first, second) {
                    if (part === 'details') {
                        var element = second && (second[0] || second);
                        var target = element && (element.querySelector('.jqx-grid-react-details') || element);
                        if (target) {
                            _this._detailContainers[String(first)] = target;
                        }
                    }
                    else {
                        var bar = first && (first[0] || first);
                        if (!bar) {
                            return;
                        }
                        var container = null;
                        for (var i = 0; i < bar.children.length; i++) {
                            if (bar.children[i].className === 'jqx-grid-react-' + part) {
                                container = bar.children[i];
                            }
                        }
                        if (!container) {
                            container = document.createElement('div');
                            container.className = 'jqx-grid-react-' + part;
                            bar.appendChild(container);
                        }
                        if (part === 'toolbar') {
                            _this._toolbarContainer = container;
                        }
                        else {
                            _this._statusbarContainer = container;
                        }
                    }
                    __afterTask__(function () { if (_this._host) {
                        _this.forceUpdate();
                    } });
                };
            }
            return this._partRenderers[part];
        };
        // the row details template, the same object while the height is the same
        JqxGrid.prototype._detailsTemplate = function (height) {
            var current = this._partRenderers.template;
            if (current && current.rowdetailsheight === height) {
                return current;
            }
            this._partRenderers.template = { rowdetails: '<div class="jqx-grid-react-details"></div>', rowdetailsheight: height };
            return this._partRenderers.template;
        };
        // ---- server mode ----
        // the rows a virtual mode grid shows: the page the source has
        JqxGrid.prototype._serverRows = function () {
            if (!this._serverRowsRenderer) {
                this._serverRowsRenderer = function (params) { return params.data; };
            }
            return this._serverRowsRenderer;
        };
        // the page, page size, sort and filters, as the app asks the server for them
        JqxGrid.prototype._query = function () {
            var grid = this._jqx(this._target());
            var paging = grid.jqxGrid('getpaginginformation') || {};
            var filters = [];
            var information = grid.jqxGrid('getfilterinformation') || [];
            for (var _i = 0, information_1 = information; _i < information_1.length; _i++) {
                var item = information_1[_i];
                var conditions = item.filter && item.filter.getfilters ? item.filter.getfilters() : [];
                filters.push({
                    datafield: item.datafield,
                    conditions: conditions.map(function (c) { return ({ condition: c.condition, value: c.value, operator: c.operator === 1 || c.operator === 'or' ? 'or' : 'and' }); })
                });
            }
            return { page: paging.pagenum || 0, pageSize: paging.pagesize || 0, sort: this._sortState(), filters: filters };
        };
        // after the user pages, sorts or filters (once for several at once), and once at the start
        JqxGrid.prototype._reportQuery = function () {
            var _this = this;
            if (this._queryReportPending || typeof this.props.onQueryChange !== 'function') {
                return;
            }
            this._queryReportPending = true;
            __afterTask__(function () {
                _this._queryReportPending = false;
                var report = _this.props.onQueryChange;
                if (_this._host && typeof report === 'function') {
                    _this._lastQuery = _this._query();
                    report(_this._lastQuery);
                }
            });
        };
        JqxGrid.prototype._watchQuery = function () {
            var _this = this;
            if (!this._host || this.props.totalRows === undefined) {
                return;
            }
            this._jqx(this._host).on('pagechanged.jqxreact pagesizechanged.jqxreact', function () { return _this._reportQuery(); });
            this._reportQuery();
            this._showLoading();
        };
        // the grid's loading indicator while the loading prop is true
        JqxGrid.prototype._showLoading = function () {
            if (!this._host || this.props.loading === undefined || !!this.props.loading === this._loadingShown) {
                return;
            }
            this._loadingShown = !!this.props.loading;
            this._jqx(this._target()).jqxGrid(this._loadingShown ? 'showloadelement' : 'hideloadelement');
        };
        // ---- the selection and the sort as React state ----
        // the keys of the selected rows (rowKey's values; without one, the rows' indexes)
        JqxGrid.prototype._selectedKeys = function () {
            var grid = this._jqx(this._target());
            var key = this.props.rowKey;
            var indexes = grid.jqxGrid('getselectedrowindexes') || [];
            var keys = [];
            for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
                var index = indexes_1[_i];
                var row = key ? grid.jqxGrid('getrowdata', index) : null;
                var value = key ? (row ? row[key] : undefined) : index;
                if (value !== undefined) {
                    keys.push(value);
                }
            }
            return keys;
        };
        JqxGrid.prototype._sortState = function () {
            var info = this._jqx(this._target()).jqxGrid('getsortinformation');
            if (!info || !info.sortcolumn) {
                return null;
            }
            var direction = info.sortdirection && info.sortdirection.descending ? 'desc' : 'asc';
            return { datafield: info.sortcolumn, direction: direction };
        };
        // the grid's events that the selection and the sort props follow (after it is made)
        JqxGrid.prototype._watchState = function () {
            var _this = this;
            if (!this._host) {
                return;
            }
            var host = this._jqx(this._host);
            host.on('rowselect.jqxreact rowunselect.jqxreact', function () { return _this._reportSelection(); });
            host.on('sort.jqxreact', function () { return _this._reportSort(); });
            host.on('bindingcomplete.jqxreact', function () { return __afterTask__(function () { return _this._applyState(true); }); });
            this._applyState(false);
        };
        JqxGrid.prototype._reportSelection = function () {
            var _this = this;
            if (this._stateApplying || this._selectionReportPending || typeof this.props.onSelectionChange !== 'function') {
                return;
            }
            this._selectionReportPending = true;
            __afterTask__(function () {
                _this._selectionReportPending = false;
                var report = _this.props.onSelectionChange;
                if (_this._host && typeof report === 'function') {
                    report(_this._selectedKeys());
                    _this._checkState();
                }
            });
        };
        // After a report, the props win over the grid, as a controlled input's value does: the app
        // renders with the selection or sort it accepted (applied by componentDidUpdate), or, if it
        // does not render again, the props it has are applied here.
        JqxGrid.prototype._checkState = function () {
            var _this = this;
            if (this._stateCheck) {
                clearTimeout(this._stateCheck);
            }
            this._stateCheck = setTimeout(function () {
                _this._stateCheck = null;
                _this._applyState(true);
            }, 100);
        };
        JqxGrid.prototype._reportSort = function () {
            var _this = this;
            if (this._stateApplying || this._sortReportPending || typeof this.props.onSortChange !== 'function') {
                return;
            }
            this._sortReportPending = true;
            __afterTask__(function () {
                _this._sortReportPending = false;
                var report = _this.props.onSortChange;
                if (_this._host && typeof report === 'function') {
                    report(_this._sortState());
                    _this._checkState();
                }
            });
        };
        // The selection and the sort the props ask for, when they changed (or, after the data was
        // bound again, always), without reporting them back to the app, which asked for them.
        JqxGrid.prototype._applyState = function (force) {
            if (!this._host) {
                return;
            }
            var grid = this._jqx(this._target());
            var keys = this.props.selectedRowKeys;
            var sort = this.props.sort;
            this._stateApplying = true;
            try {
                if (keys !== undefined && (force || !__sameContent__(keys, this._selectionApplied, 0))) {
                    this._selectionApplied = keys ? keys.slice() : keys;
                    var wanted = (keys || []).map(String).sort().join('|');
                    if (this._selectedKeys().map(String).sort().join('|') !== wanted) {
                        grid.jqxGrid('clearselection', false, false);
                        var key = this.props.rowKey;
                        var selected = 0;
                        for (var _i = 0, _a = keys || []; _i < _a.length; _i++) {
                            var value = _a[_i];
                            var index = key ? this._indexOfKey(value) : value;
                            if (index !== undefined && index !== null && index >= 0) {
                                grid.jqxGrid('selectrow', index);
                                selected++;
                            }
                        }
                        // selectrow draws the rows; with nothing to select, they are drawn here
                        // (otherwise the rows that were selected stay highlighted)
                        if (!selected) {
                            grid.jqxGrid('clearselection', true, false);
                        }
                    }
                }
                if (sort !== undefined && (force || !__sameContent__(sort, this._sortApplied, 0))) {
                    this._sortApplied = sort ? { datafield: sort.datafield, direction: sort.direction } : sort;
                    var current = this._sortState();
                    if (!sort) {
                        if (current) {
                            grid.jqxGrid('removesort');
                        }
                    }
                    else if (!current || current.datafield !== sort.datafield || current.direction !== sort.direction) {
                        grid.jqxGrid('sortby', sort.datafield, sort.direction);
                    }
                }
            }
            finally {
                this._stateApplying = false;
            }
        };
        // The source of the rows prop, made once: its fields are the rows' (the fieldTypes prop
        // names a field's type; otherwise it is the type of its first value) and the columns'.
        JqxGrid.prototype._getRowsAdapter = function () {
            var _this = this;
            if (!this._rowsAdapter) {
                var rows = this.props.rows || [];
                this._rowsSource = { localdata: rows, datatype: 'array', datafields: this._rowFields(rows), id: this.props.rowKey };
                if (this.props.totalRows !== undefined) {
                    // server mode: the grid does not sort or filter the page; it asks the app
                    this._rowsSource.totalrecords = this.props.totalRows;
                    this._totalApplied = this.props.totalRows;
                    this._rowsSource.sort = function () { return _this._reportQuery(); };
                    // a new filter starts from the first page, as the server is asked for it
                    // (the grid redraws before the page arrives, and from its cache of pages it stepped
                    // forward to the page it was on: the cache goes, and the page is the first)
                    this._rowsSource.filter = function () {
                        var widget = _this._jqx(_this._target()).jqxGrid('getInstance');
                        if (widget && widget.dataview) {
                            widget._pagescache = [];
                            widget.dataview.pagenum = 0;
                            if (widget.updatepagerdetails) {
                                widget.updatepagerdetails();
                            }
                        }
                        _this._reportQuery();
                    };
                }
                this._rowsAdapter = new jqx.dataAdapter(this._rowsSource);
                this._rowsApplied = rows;
            }
            return this._rowsAdapter;
        };
        JqxGrid.prototype._rowFields = function (rows) {
            var types = this.props.fieldTypes || {};
            var fields = {};
            var names = [];
            var add = function (name) { if (names.indexOf(name) === -1) {
                names.push(name);
            } };
            for (var _i = 0, _a = rows.slice(0, 50); _i < _a.length; _i++) {
                var row = _a[_i];
                for (var name_4 in row) {
                    add(name_4);
                    var value = row[name_4];
                    if (value === null || value === undefined) {
                        continue;
                    }
                    // an object or array (an order's lines) is kept as it is: no type, which the data
                    // adapter would turn into text
                    fields[name_4] = typeof value === 'number' ? 'number' : typeof value === 'boolean' ? 'bool' : value instanceof Date ? 'date'
                        : typeof value === 'object' ? 'any' : 'string';
                }
            }
            // the columns', the key's and fieldTypes' fields too: rows can start empty (before a fetch).
            // A column's filter or editor type says what the field holds, over its values (a date the
            // server sends as text); fieldTypes says it over both.
            var columns = this.props.columns;
            var columnTypes = {};
            if (Array.isArray(columns)) {
                for (var _b = 0, columns_1 = columns; _b < columns_1.length; _b++) {
                    var column = columns_1[_b];
                    if (!column || !column.datafield) {
                        continue;
                    }
                    add(column.datafield);
                    var kind = column.filtertype || column.columntype;
                    columnTypes[column.datafield] = kind === 'number' || kind === 'numberinput' ? 'number'
                        : kind === 'date' || kind === 'range' || kind === 'datetimeinput' ? 'date'
                            : kind === 'bool' || kind === 'checkbox' ? 'bool' : '';
                }
            }
            if (this.props.rowKey) {
                add(this.props.rowKey);
            }
            for (var name_5 in types) {
                add(name_5);
            }
            return names.map(function (name) {
                var type = types[name] || columnTypes[name] || fields[name] || 'string';
                return type === 'any' ? { name: name } : { name: name, type: type };
            });
        };
        // A changed row as the grid gets it in place: a copy, with each field's value converted to
        // the field's type as binding converts it (a date given as text stays a date)
        JqxGrid.prototype._typedRow = function (row) {
            var copy = Object.assign({}, row);
            var adapter = this._rowsAdapter;
            var datafields = (this._rowsSource && this._rowsSource.datafields) || [];
            if (adapter && typeof adapter.getvaluebytype === 'function') {
                for (var _i = 0, datafields_1 = datafields; _i < datafields_1.length; _i++) {
                    var field = datafields_1[_i];
                    var value = copy[field.name];
                    if (field.type && value !== null && value !== undefined && typeof value !== 'object') {
                        copy[field.name] = adapter.getvaluebytype(value, field);
                    }
                }
            }
            return copy;
        };
        // The first rows after empty ones (the data has been fetched): the fields are read again. If a
        // type changed, the data is bound anew, which makes the filter row again for the right types
        // (the sort and selection props are applied again after it).
        JqxGrid.prototype._refreshFields = function (rows) {
            var _this = this;
            var before = JSON.stringify(this._rowsSource.datafields);
            this._rowsSource.datafields = this._rowFields(rows);
            var grid = this._jqx(this._target());
            this._keepFilterFocus(function () {
                if (before !== JSON.stringify(_this._rowsSource.datafields) && grid.jqxGrid('showfilterrow')) {
                    grid.jqxGrid('updatebounddata');
                }
                else {
                    grid.jqxGrid('updatebounddata', 'data');
                }
            });
        };
        // Binding the data again draws the filter row again: an input of it that had the focus (the
        // user typing a filter while the rows of the last one arrive) gets it back, with its caret,
        // or the next keys went nowhere.
        JqxGrid.prototype._keepFilterFocus = function (bind) {
            var widget = this._jqx(this._target()).jqxGrid('getInstance');
            var rowOf = function () { return (widget && widget.filterrow ? widget.filterrow[0] || widget.filterrow : null); };
            var row = rowOf();
            var active = document.activeElement;
            if (!row || !active || !row.contains(active) || active.tagName !== 'INPUT') {
                bind();
                return;
            }
            var cells = function (r) { return Array.prototype.slice.call(r.querySelectorAll('.jqx-grid-cell')); };
            var index = cells(row).findIndex(function (c) { return c.contains(active); });
            var length = active.value.length;
            var start = active.selectionStart === null ? length : active.selectionStart;
            var end = active.selectionEnd === null ? length : active.selectionEnd;
            bind();
            var restore = function () {
                var after = rowOf();
                var cell = after && index >= 0 ? cells(after)[index] : null;
                var input = cell ? cell.querySelector('input') : null;
                if (!input || document.activeElement === input || (document.activeElement && document.activeElement !== document.body)) {
                    return;
                }
                input.focus();
                try {
                    input.setSelectionRange(start, end);
                }
                catch ( /* not a text input */_a) { /* not a text input */ }
            };
            restore();
            __afterTask__(restore);
        };
        // The data bound again (rows came, went or moved): the rows whose details were open, found by
        // rowKey, show them again (binding again closed them all).
        JqxGrid.prototype._rebind = function (previous, reason) {
            var grid = this._jqx(this._target());
            var widget = grid.jqxGrid('getInstance');
            var key = this.props.rowKey;
            var open = [];
            if (widget && widget.rowdetails) {
                // open details by bound index (detailboundrows is by displayed row once sorted)
                var visibility = widget.detailsVisibility || [];
                if (key) {
                    visibility.forEach(function (hidden, boundindex) {
                        var row = previous[boundindex];
                        if (hidden === false && row) {
                            open.push(row[key]);
                        }
                    });
                }
                // The details elements are kept by bound index, which now belongs to other rows: they
                // go, and each row's details are made again for it (as the grid's refresh does).
                var cache = widget._rowdetailscache || [];
                for (var lookup in cache) {
                    var entry = cache[lookup];
                    if (entry && entry.element && entry.element.parentNode) {
                        entry.element.parentNode.removeChild(entry.element);
                    }
                }
                widget._rowdetailscache = [];
                widget._rowdetailselementscache = [];
                widget.detailboundrows = [];
                widget.details = [];
                widget.detailsVisibility = [];
                this._detailContainers = {};
            }
            this._keepFilterFocus(function () { return grid.jqxGrid('updatebounddata', reason); });
            for (var _i = 0, open_2 = open; _i < open_2.length; _i++) {
                var value = open_2[_i];
                var index = grid.jqxGrid('getrowboundindexbyid', value);
                if (index !== undefined && index !== null && index >= 0) {
                    grid.jqxGrid('showrowdetails', index);
                }
            }
            if (widget && widget.rowdetails) {
                this.forceUpdate();
            }
        };
        // A new rows array: the rows that changed are updated (found by rowKey, in the same order),
        // or, when rows came, went or moved, the data is bound again. Either way the sort, filters
        // and groups stay.
        JqxGrid.prototype._syncRows = function () {
            var _this = this;
            var next = this.props.rows;
            var server = this.props.totalRows !== undefined;
            if (!this._host || !this._rowsAdapter || next === undefined || (next === this._rowsApplied && (!server || this.props.totalRows === this._totalApplied))) {
                return;
            }
            // Not while a cell is being edited: drawing the rows again would take its editor away
            // (the app's new rows for the previous edit can come as the next one begins).
            var widget = this._jqx(this._target()).jqxGrid('getInstance');
            if (widget && widget.editcell && widget.editcell.editing) {
                setTimeout(function () { return _this._syncRows(); }, 50);
                return;
            }
            var previous = this._rowsApplied || [];
            this._rowsApplied = next;
            this._rowsSource.localdata = next;
            // server mode: the page the server sent, and the number of rows it has
            if (server) {
                this._totalApplied = this.props.totalRows;
                this._rowsSource.totalrecords = this.props.totalRows;
                // the rows are the page the app was last asked for: the grid shows that page
                var pageWidget = this._jqx(this._target()).jqxGrid('getInstance');
                if (this._lastQuery && pageWidget && pageWidget.dataview) {
                    pageWidget.dataview.pagenum = this._lastQuery.page;
                }
                if (previous.length === 0 && next.length > 0) {
                    this._refreshFields(next);
                }
                else {
                    this._rebind(previous, 'data');
                }
                return;
            }
            if (previous.length === 0 && next.length > 0) {
                this._refreshFields(next);
                return;
            }
            var key = this.props.rowKey;
            var grid = this._jqx(this._target());
            var sameRows = previous.length === next.length;
            for (var i = 0; sameRows && key && i < next.length; i++) {
                if (!next[i] || !previous[i] || next[i][key] !== previous[i][key]) {
                    sameRows = false;
                }
            }
            if (!sameRows) {
                this._rebind(previous, 'data');
                return;
            }
            var changed = [];
            for (var i = 0; i < next.length; i++) {
                if (next[i] !== previous[i]) {
                    changed.push(i);
                }
            }
            if (changed.length === 0) {
                return;
            }
            if (!key || changed.length > 50) {
                grid.jqxGrid('updatebounddata', 'cells');
                return;
            }
            // one call for all of them: the grid refreshes its data once (a call per row refreshed it
            // each time, which grows with the number of rows)
            if (changed.length === 1) {
                grid.jqxGrid('updaterow', next[changed[0]][key], this._typedRow(next[changed[0]]));
            }
            else {
                grid.jqxGrid('updaterow', changed.map(function (i) { return next[i][key]; }), changed.map(function (i) { return _this._typedRow(next[i]); }));
            }
        };
        JqxGrid.prototype._onReady = function () {
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
        JqxGrid.prototype.componentWillUnmount = function () {
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
        JqxGrid.prototype._target = function () {
            return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
        };
        JqxGrid.prototype.render = function () {
            var _this = this;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style, suppressHydrationWarning: true }, this._hostAttributes()), this.props.children),
                this._renderCells()));
        };
        JqxGrid.prototype.setOptions = function (options) {
            this._jqx(this._target()).jqxGrid(options);
        };
        JqxGrid.prototype.getOptions = function (option) {
            return this._jqx(this._target()).jqxGrid(option);
        };
        JqxGrid.prototype.aiConfig = function (config) {
            return this._jqx(this._target()).jqxGrid('aiConfig', config);
        };
        JqxGrid.prototype.aiCommand = function (text, callback) {
            return this._jqx(this._target()).jqxGrid('aiCommand', text, callback);
        };
        JqxGrid.prototype.aiAsk = function (text, callback) {
            return this._jqx(this._target()).jqxGrid('aiAsk', text, callback);
        };
        JqxGrid.prototype.aiSummarize = function (rows, callback) {
            return this._jqx(this._target()).jqxGrid('aiSummarize', rows, callback);
        };
        JqxGrid.prototype.aiExplainRow = function (rowindex, callback) {
            return this._jqx(this._target()).jqxGrid('aiExplainRow', rowindex, callback);
        };
        JqxGrid.prototype.aiClassifyColumn = function (options, callback) {
            return this._jqx(this._target()).jqxGrid('aiClassifyColumn', options, callback);
        };
        JqxGrid.prototype.autoresizecolumns = function (type) {
            this._jqx(this._target()).jqxGrid('autoresizecolumns', type);
        };
        JqxGrid.prototype.autoresizecolumn = function (dataField, type) {
            this._jqx(this._target()).jqxGrid('autoresizecolumn', dataField, type);
        };
        JqxGrid.prototype.beginupdate = function () {
            this._jqx(this._target()).jqxGrid('beginupdate');
        };
        JqxGrid.prototype.clear = function () {
            this._jqx(this._target()).jqxGrid('clear');
        };
        JqxGrid.prototype.createChart = function (type, dataSource) {
            this._jqx(this._target()).jqxGrid('createChart', type, dataSource);
        };
        JqxGrid.prototype.destroy = function () {
            this._jqx(this._target()).jqxGrid('destroy');
        };
        JqxGrid.prototype.endupdate = function () {
            this._jqx(this._target()).jqxGrid('endupdate');
        };
        JqxGrid.prototype.ensurerowvisible = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('ensurerowvisible', rowBoundIndex);
        };
        JqxGrid.prototype.ensurecellvisible = function (rowBoundIndex, dataField) {
            this._jqx(this._target()).jqxGrid('ensurecellvisible', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.focus = function () {
            this._jqx(this._target()).jqxGrid('focus');
        };
        JqxGrid.prototype.getcolumnindex = function (dataField) {
            return this._jqx(this._target()).jqxGrid('getcolumnindex', dataField);
        };
        JqxGrid.prototype.getcolumn = function (dataField) {
            return this._jqx(this._target()).jqxGrid('getcolumn', dataField);
        };
        JqxGrid.prototype.getcolumnproperty = function (dataField, propertyName) {
            return this._jqx(this._target()).jqxGrid('getcolumnproperty', dataField, propertyName);
        };
        JqxGrid.prototype.getrowid = function (rowBoundIndex) {
            return this._jqx(this._target()).jqxGrid('getrowid', rowBoundIndex);
        };
        JqxGrid.prototype.getrowdata = function (rowBoundIndex) {
            return this._jqx(this._target()).jqxGrid('getrowdata', rowBoundIndex);
        };
        JqxGrid.prototype.getrowdatabyid = function (rowID) {
            return this._jqx(this._target()).jqxGrid('getrowdatabyid', rowID);
        };
        JqxGrid.prototype.getrowboundindexbyid = function (rowID) {
            return this._jqx(this._target()).jqxGrid('getrowboundindexbyid', rowID);
        };
        JqxGrid.prototype.getrowboundindex = function (rowDisplayIndex) {
            return this._jqx(this._target()).jqxGrid('getrowboundindex', rowDisplayIndex);
        };
        JqxGrid.prototype.getrowheight = function (rowBoundIndex) {
            return this._jqx(this._target()).jqxGrid('getrowheight', rowBoundIndex);
        };
        JqxGrid.prototype.getrowvisibleindex = function (rowBoundIndex) {
            return this._jqx(this._target()).jqxGrid('getrowvisibleindex', rowBoundIndex);
        };
        JqxGrid.prototype.getrows = function () {
            return this._jqx(this._target()).jqxGrid('getrows');
        };
        JqxGrid.prototype.getboundrows = function () {
            return this._jqx(this._target()).jqxGrid('getboundrows');
        };
        JqxGrid.prototype.getdisplayrows = function () {
            return this._jqx(this._target()).jqxGrid('getdisplayrows');
        };
        JqxGrid.prototype.getdatainformation = function () {
            return this._jqx(this._target()).jqxGrid('getdatainformation');
        };
        JqxGrid.prototype.getsortinformation = function () {
            return this._jqx(this._target()).jqxGrid('getsortinformation');
        };
        JqxGrid.prototype.getpaginginformation = function () {
            return this._jqx(this._target()).jqxGrid('getpaginginformation');
        };
        JqxGrid.prototype.hidecolumn = function (dataField) {
            this._jqx(this._target()).jqxGrid('hidecolumn', dataField);
        };
        JqxGrid.prototype.hideloadelement = function () {
            this._jqx(this._target()).jqxGrid('hideloadelement');
        };
        JqxGrid.prototype.hiderowdetails = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('hiderowdetails', rowBoundIndex);
        };
        JqxGrid.prototype.hiderow = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('hiderow', rowBoundIndex);
        };
        JqxGrid.prototype.isrowhiddenat = function (rowBoundIndex) {
            return this._jqx(this._target()).jqxGrid('isrowhiddenat', rowBoundIndex);
        };
        JqxGrid.prototype.iscolumnvisible = function (dataField) {
            return this._jqx(this._target()).jqxGrid('iscolumnvisible', dataField);
        };
        JqxGrid.prototype.iscolumnpinned = function (dataField) {
            return this._jqx(this._target()).jqxGrid('iscolumnpinned', dataField);
        };
        JqxGrid.prototype.localizestrings = function (localizationobject) {
            this._jqx(this._target()).jqxGrid('localizestrings', localizationobject);
        };
        JqxGrid.prototype.pincolumn = function (dataField) {
            this._jqx(this._target()).jqxGrid('pincolumn', dataField);
        };
        JqxGrid.prototype.refreshdata = function () {
            this._jqx(this._target()).jqxGrid('refreshdata');
        };
        JqxGrid.prototype.refresh = function () {
            this._jqx(this._target()).jqxGrid('refresh');
        };
        JqxGrid.prototype.renderWidget = function () {
            this._jqx(this._target()).jqxGrid('render');
        };
        JqxGrid.prototype.scrolloffset = function (top, left) {
            this._jqx(this._target()).jqxGrid('scrolloffset', top, left);
        };
        JqxGrid.prototype.scrollto = function (left, top) {
            this._jqx(this._target()).jqxGrid('scrollto', left, top);
        };
        JqxGrid.prototype.scrollposition = function () {
            return this._jqx(this._target()).jqxGrid('scrollposition');
        };
        JqxGrid.prototype.showloadelement = function () {
            this._jqx(this._target()).jqxGrid('showloadelement');
        };
        JqxGrid.prototype.showrowdetails = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('showrowdetails', rowBoundIndex);
        };
        JqxGrid.prototype.showrow = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('showrow', rowBoundIndex);
        };
        JqxGrid.prototype.setcolumnindex = function (dataField, index) {
            this._jqx(this._target()).jqxGrid('setcolumnindex', dataField, index);
        };
        JqxGrid.prototype.setcolumnproperty = function (dataField, propertyName, propertyValue) {
            this._jqx(this._target()).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
        };
        JqxGrid.prototype.showcolumn = function (dataField) {
            this._jqx(this._target()).jqxGrid('showcolumn', dataField);
        };
        JqxGrid.prototype.unpincolumn = function (dataField) {
            this._jqx(this._target()).jqxGrid('unpincolumn', dataField);
        };
        JqxGrid.prototype.updatebounddata = function (type) {
            this._jqx(this._target()).jqxGrid('updatebounddata', type);
        };
        JqxGrid.prototype.updating = function () {
            return this._jqx(this._target()).jqxGrid('updating');
        };
        JqxGrid.prototype.getsortcolumn = function () {
            return this._jqx(this._target()).jqxGrid('getsortcolumn');
        };
        JqxGrid.prototype.getsortcolumns = function () {
            return this._jqx(this._target()).jqxGrid('getsortcolumns');
        };
        JqxGrid.prototype.removesort = function () {
            this._jqx(this._target()).jqxGrid('removesort');
        };
        JqxGrid.prototype.sortby = function (dataField, sortOrder) {
            this._jqx(this._target()).jqxGrid('sortby', dataField, sortOrder);
        };
        JqxGrid.prototype.addgroup = function (dataField) {
            this._jqx(this._target()).jqxGrid('addgroup', dataField);
        };
        JqxGrid.prototype.cleargroups = function () {
            this._jqx(this._target()).jqxGrid('cleargroups');
        };
        JqxGrid.prototype.collapsegroup = function (group) {
            this._jqx(this._target()).jqxGrid('collapsegroup', group);
        };
        JqxGrid.prototype.collapseallgroups = function () {
            this._jqx(this._target()).jqxGrid('collapseallgroups');
        };
        JqxGrid.prototype.expandallgroups = function () {
            this._jqx(this._target()).jqxGrid('expandallgroups');
        };
        JqxGrid.prototype.expandgroup = function (group) {
            this._jqx(this._target()).jqxGrid('expandgroup', group);
        };
        JqxGrid.prototype.getrootgroupscount = function () {
            return this._jqx(this._target()).jqxGrid('getrootgroupscount');
        };
        JqxGrid.prototype.getgroup = function (groupIndex) {
            return this._jqx(this._target()).jqxGrid('getgroup', groupIndex);
        };
        JqxGrid.prototype.isgroupexpanded = function (groupIndex) {
            return this._jqx(this._target()).jqxGrid('isgroupexpanded', groupIndex);
        };
        JqxGrid.prototype.insertgroup = function (groupIndex, dataField) {
            this._jqx(this._target()).jqxGrid('insertgroup', groupIndex, dataField);
        };
        JqxGrid.prototype.iscolumngroupable = function (dataField) {
            return this._jqx(this._target()).jqxGrid('iscolumngroupable', dataField);
        };
        JqxGrid.prototype.removegroupat = function (groupIndex) {
            this._jqx(this._target()).jqxGrid('removegroupat', groupIndex);
        };
        JqxGrid.prototype.removegroup = function (dataField) {
            this._jqx(this._target()).jqxGrid('removegroup', dataField);
        };
        JqxGrid.prototype.addfilter = function (dataField, filterGroup, refreshGrid) {
            this._jqx(this._target()).jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
        };
        JqxGrid.prototype.applyfilters = function () {
            this._jqx(this._target()).jqxGrid('applyfilters');
        };
        JqxGrid.prototype.clearfilters = function () {
            this._jqx(this._target()).jqxGrid('clearfilters');
        };
        JqxGrid.prototype.getfilterinformation = function () {
            return this._jqx(this._target()).jqxGrid('getfilterinformation');
        };
        JqxGrid.prototype.getcolumnat = function (index) {
            return this._jqx(this._target()).jqxGrid('getcolumnat', index);
        };
        JqxGrid.prototype.removefilter = function (dataField, refreshGrid) {
            this._jqx(this._target()).jqxGrid('removefilter', dataField, refreshGrid);
        };
        JqxGrid.prototype.refreshfilterrow = function () {
            this._jqx(this._target()).jqxGrid('refreshfilterrow');
        };
        JqxGrid.prototype.gotopage = function (pagenumber) {
            this._jqx(this._target()).jqxGrid('gotopage', pagenumber);
        };
        JqxGrid.prototype.gotoprevpage = function () {
            this._jqx(this._target()).jqxGrid('gotoprevpage');
        };
        JqxGrid.prototype.gotonextpage = function () {
            this._jqx(this._target()).jqxGrid('gotonextpage');
        };
        JqxGrid.prototype.addrow = function (rowIds, data, rowPosition) {
            this._jqx(this._target()).jqxGrid('addrow', rowIds, data, rowPosition);
        };
        JqxGrid.prototype.begincelledit = function (rowBoundIndex, dataField) {
            this._jqx(this._target()).jqxGrid('begincelledit', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.beginrowedit = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('beginrowedit', rowBoundIndex);
        };
        JqxGrid.prototype.closemenu = function () {
            this._jqx(this._target()).jqxGrid('closemenu');
        };
        JqxGrid.prototype.deleterow = function (rowIds) {
            this._jqx(this._target()).jqxGrid('deleterow', rowIds);
        };
        JqxGrid.prototype.endcelledit = function (rowBoundIndex, dataField, confirmChanges) {
            this._jqx(this._target()).jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
        };
        JqxGrid.prototype.endrowedit = function (rowBoundIndex, confirmChanges) {
            this._jqx(this._target()).jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
        };
        JqxGrid.prototype.getcell = function (rowBoundIndex, datafield) {
            return this._jqx(this._target()).jqxGrid('getcell', rowBoundIndex, datafield);
        };
        JqxGrid.prototype.getcellatposition = function (left, top) {
            return this._jqx(this._target()).jqxGrid('getcellatposition', left, top);
        };
        JqxGrid.prototype.getcelltext = function (rowBoundIndex, dataField) {
            return this._jqx(this._target()).jqxGrid('getcelltext', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.getcelltextbyid = function (rowID, dataField) {
            return this._jqx(this._target()).jqxGrid('getcelltextbyid', rowID, dataField);
        };
        JqxGrid.prototype.getcellvaluebyid = function (rowID, dataField) {
            return this._jqx(this._target()).jqxGrid('getcellvaluebyid', rowID, dataField);
        };
        JqxGrid.prototype.getcellvalue = function (rowBoundIndex, dataField) {
            return this._jqx(this._target()).jqxGrid('getcellvalue', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.isBindingCompleted = function () {
            return this._jqx(this._target()).jqxGrid('isBindingCompleted');
        };
        JqxGrid.prototype.openmenu = function (dataField) {
            this._jqx(this._target()).jqxGrid('openmenu', dataField);
        };
        JqxGrid.prototype.setcellvalue = function (rowBoundIndex, dataField, value) {
            this._jqx(this._target()).jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
        };
        JqxGrid.prototype.setcellvaluebyid = function (rowID, dataField, value) {
            this._jqx(this._target()).jqxGrid('setcellvaluebyid', rowID, dataField, value);
        };
        JqxGrid.prototype.setrowheight = function (rowBoundIndex, height) {
            this._jqx(this._target()).jqxGrid('setrowheight', rowBoundIndex, height);
        };
        JqxGrid.prototype.showvalidationpopup = function (rowBoundIndex, dataField, validationMessage) {
            this._jqx(this._target()).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
        };
        JqxGrid.prototype.updaterow = function (rowIds, data) {
            this._jqx(this._target()).jqxGrid('updaterow', rowIds, data);
        };
        JqxGrid.prototype.clearselection = function () {
            this._jqx(this._target()).jqxGrid('clearselection');
            this._reportSelection();
        };
        JqxGrid.prototype.getselectedrowindex = function () {
            return this._jqx(this._target()).jqxGrid('getselectedrowindex');
        };
        JqxGrid.prototype.getselectedrowindexes = function () {
            return this._jqx(this._target()).jqxGrid('getselectedrowindexes');
        };
        JqxGrid.prototype.getselectedcell = function () {
            return this._jqx(this._target()).jqxGrid('getselectedcell');
        };
        JqxGrid.prototype.getselectedcells = function () {
            return this._jqx(this._target()).jqxGrid('getselectedcells');
        };
        JqxGrid.prototype.showSidePanel = function (selector, width, callbackFn) {
            this._jqx(this._target()).jqxGrid('showSidePanel', selector, width, callbackFn);
        };
        JqxGrid.prototype.closeSidePanel = function () {
            this._jqx(this._target()).jqxGrid('closeSidePanel');
        };
        JqxGrid.prototype.selectcell = function (rowBoundIndex, dataField) {
            this._jqx(this._target()).jqxGrid('selectcell', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.selectallrows = function () {
            this._jqx(this._target()).jqxGrid('selectallrows');
        };
        JqxGrid.prototype.selectrow = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('selectrow', rowBoundIndex);
        };
        JqxGrid.prototype.unselectrow = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('unselectrow', rowBoundIndex);
        };
        JqxGrid.prototype.unselectcell = function (rowBoundIndex, dataField) {
            this._jqx(this._target()).jqxGrid('unselectcell', rowBoundIndex, dataField);
        };
        JqxGrid.prototype.getcolumnaggregateddata = function (dataField, aggregates) {
            return this._jqx(this._target()).jqxGrid('getcolumnaggregateddata', dataField, aggregates);
        };
        JqxGrid.prototype.refreshaggregates = function () {
            this._jqx(this._target()).jqxGrid('refreshaggregates');
        };
        JqxGrid.prototype.renderaggregates = function () {
            this._jqx(this._target()).jqxGrid('renderaggregates');
        };
        JqxGrid.prototype.exportdata = function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
            return this._jqx(this._target()).jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
        };
        JqxGrid.prototype.exportview = function (dataType, fileName) {
            return this._jqx(this._target()).jqxGrid('exportview', dataType, fileName);
        };
        JqxGrid.prototype.openColumnChooser = function (columns, header) {
            this._jqx(this._target()).jqxGrid('openColumnChooser', columns, header);
        };
        JqxGrid.prototype.getstate = function () {
            return this._jqx(this._target()).jqxGrid('getstate');
        };
        JqxGrid.prototype.loadstate = function (stateobject) {
            this._jqx(this._target()).jqxGrid('loadstate', stateobject);
        };
        JqxGrid.prototype.savestate = function () {
            return this._jqx(this._target()).jqxGrid('savestate');
        };
        JqxGrid.prototype._manageProps = function () {
            var widgetProps = ['altrows', 'altstart', 'altstep', 'autoselectfirstrow', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'showcolumnlines', 'showrowlines', 'showcolumnheaderlines', 'adaptive', 'compact', 'contextmenuitems', 'contextmenuenabled', 'contextmenuwidth', 'contextmenuheight', 'contextmenuitemclick', 'adaptivewidth', 'commandcolumn', 'commandcolumnrenderer', 'clipboard', 'clipboardbegin', 'clipboardend', 'copytoclipboardwithheaders', 'copytoclipboardhiddencolumns', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'showfilterbar', 'filterbarmode', 'selectionmode', 'multipleselectionbegins', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'autogeneratecolumns', 'enableSanitize', 'enableSanitizeAll', 'cardview', 'cardviewcolumns', 'cardheight', 'cardsize', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'charting', 'disabled', 'editable', 'batcheditable', 'editmode', 'filter', 'filterable', 'filternlpinput', 'aiKey', 'aiUrl', 'aiProvider', 'aiModel', 'aiProxyUrl', 'aiHeaders', 'aiSendRequest', 'aiMaxRows', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'layoutrowdetails', 'enablerowdetailsindent', 'disablerowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'autofill', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'rendergroups', 'sortable', 'sortmode', 'sortmodekey', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
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
            if (this.props.columns !== undefined) {
                options.columns = this._prepareColumns(this.props.columns);
            }
            if (this.props.rows !== undefined) {
                options.source = this._getRowsAdapter();
            }
            if (this.props.selectedRowKeys !== undefined && options.autoselectfirstrow === undefined) {
                options.autoselectfirstrow = false;
            }
            if (this.props.rows !== undefined && options.enableSanitize === undefined) {
                options.enableSanitize = true;
            }
            if (this.props.rows !== undefined && this.props.totalRows !== undefined) {
                options.virtualmode = true;
                if (options.pageable === undefined) {
                    options.pageable = true;
                }
                options.rendergridrows = this._serverRows();
            }
            if (this.props.toolbarComponent) {
                if (options.showtoolbar === undefined) {
                    options.showtoolbar = true;
                }
                options.rendertoolbar = this._partRenderer('toolbar');
            }
            if (this.props.statusbarComponent) {
                if (options.showstatusbar === undefined) {
                    options.showstatusbar = true;
                }
                options.renderstatusbar = this._partRenderer('statusbar');
            }
            if (this.props.rowDetailsComponent) {
                options.rowdetails = true;
                options.rowdetailstemplate = this._detailsTemplate(this.props.rowDetailsHeight || 200);
                options.initrowdetails = this._partRenderer('details');
            }
            return options;
        };
        JqxGrid.prototype._hostAttributes = function () {
            var attributes = {};
            for (var prop in this.props) {
                if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                    attributes[prop] = this.props[prop];
                }
            }
            return attributes;
        };
        JqxGrid.prototype._applyHostAttributes = function () {
            var host = this._host;
            if (!host) {
                return;
            }
            var attributes = this._hostAttributes();
            for (var name_6 in attributes) {
                var value = attributes[name_6];
                if (value !== undefined && value !== null && host.getAttribute(name_6) !== String(value)) {
                    host.setAttribute(name_6, String(value));
                }
            }
        };
        JqxGrid.prototype._wireEvents = function () {
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
        JqxGrid.prototype._eventHandler = function (prop) {
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
        JqxGrid.prototype._teardown = function () {
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
            if (this._cellObserver) {
                this._cellObserver.disconnect();
                this._cellObserver = null;
            }
            this._cellContainers = {};
            this._cellKeyData = {};
            this._cellData = {};
            this._activeEditor = null;
            if (this._stateCheck) {
                clearTimeout(this._stateCheck);
                this._stateCheck = null;
            }
            if (node) {
                this._jqx(node).off('.jqxreact');
            }
            this._headerContainers = {};
            this._detailContainers = {};
            this._toolbarContainer = null;
            this._statusbarContainer = null;
            this._host = null;
            this._widgetPlace = null;
            var parent = node.parentNode;
            var next = node.nextSibling;
            if (place) {
                place.parent.insertBefore(node, place.next && place.next.parentNode === place.parent ? place.next : null);
            }
            try {
                this._jqx(node).jqxGrid('destroy');
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
        return JqxGrid;
    }(React.PureComponent));
    function __eventName__(prop) {
        return prop.charAt(2).toLowerCase() + prop.slice(3);
    }
    var __hasWindow__ = typeof window !== 'undefined';
    var jqx = (__hasWindow__ ? window.jqx : undefined);
    var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

    exports.default = JqxGrid;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
