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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxgrid = {}),global.React));
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
            _this._hostParent = null;
            /* tslint:disable:variable-name */
            _this._hostNext = null;
            /* tslint:disable:variable-name */
            _this._widgetPlace = null;
            /* tslint:disable:variable-name */
            _this._hostChildren = [];
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
            var element = this._jqx(this._target());
            this._host = element[0] || null;
            this._hostParent = this._host ? this._host.parentNode : null;
            this._hostNext = this._host ? this._host.nextSibling : null;
            this._hostChildren = this._host ? Array.prototype.slice.call(this._host.childNodes) : [];
            var widgetOptions = this._manageProps();
            element.jqxGrid(widgetOptions);
            this._appliedOptions = widgetOptions;
            this._applyHostAttributes();
            this._wireEvents();
        };
        JqxGrid.prototype.componentDidUpdate = function () {
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
            return (React.createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style }, this._hostAttributes()), this.props.children));
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
        JqxGrid.prototype.scrollposition = function () {
            return this._jqx(this._target()).jqxGrid('scrollposition');
        };
        JqxGrid.prototype.showloadelement = function () {
            this._jqx(this._target()).jqxGrid('showloadelement');
        };
        JqxGrid.prototype.showrowdetails = function (rowBoundIndex) {
            this._jqx(this._target()).jqxGrid('showrowdetails', rowBoundIndex);
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
        JqxGrid.prototype.showvalidationpopup = function (rowBoundIndex, dataField, validationMessage) {
            this._jqx(this._target()).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
        };
        JqxGrid.prototype.updaterow = function (rowIds, data) {
            this._jqx(this._target()).jqxGrid('updaterow', rowIds, data);
        };
        JqxGrid.prototype.clearselection = function () {
            this._jqx(this._target()).jqxGrid('clearselection');
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
            var widgetProps = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'showcolumnlines', 'showrowlines', 'showcolumnheaderlines', 'adaptive', 'compact', 'contextmenuitems', 'contextmenuenabled', 'contextmenuwidth', 'contextmenuheight', 'contextmenuitemclick', 'adaptivewidth', 'commandcolumn', 'commandcolumnrenderer', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'showfilterbar', 'filterbarmode', 'selectionmode', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'enableSanitize', 'cardview', 'cardviewcolumns', 'cardheight', 'cardsize', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'charting', 'disabled', 'editable', 'batcheditable', 'editmode', 'filter', 'filterable', 'filternlpinput', 'aiKey', 'aiUrl', 'aiProvider', 'aiModel', 'aiProxyUrl', 'aiHeaders', 'aiSendRequest', 'aiMaxRows', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'disablerowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'autofill', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'sortmode', 'sortmodekey', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    options[prop] = this.props[prop];
                }
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
            for (var name_1 in attributes) {
                var value = attributes[name_1];
                if (value !== undefined && value !== null && host.getAttribute(name_1) !== String(value)) {
                    host.setAttribute(name_1, String(value));
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
                return typeof handler === 'function' ? handler.apply(this, arguments) : undefined;
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
