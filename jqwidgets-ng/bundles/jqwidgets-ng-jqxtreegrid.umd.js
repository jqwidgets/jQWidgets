require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxdata');
require(('../jqwidgets/jqxdata.export');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxcheckbox');
require('../jqwidgets/jqxtooltip');
require('../jqwidgets/jqxscrollbar');
require('../jqwidgets/jqxlistbox');
require('../jqwidgets/jqxcombobox');
require('../jqwidgets/jqxnumberinput');
require('../jqwidgets/jqxdropdownlist');
require('../jqwidgets/jqxdatatable');
require('../jqwidgets/jqxtreegrid');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtreegrid', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtreegrid = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /// <reference path="../../jqwidgets.d.ts" />
    var jqxTreeGridComponent = /** @class */ (function () {
        function jqxTreeGridComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'checkboxes', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'height', 'hierarchicalCheckboxes', 'icons', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pageSizeMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'rowDetailsRenderer', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showSubAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'showHeader', 'theme', 'toolbarHeight', 'width', 'virtualModeCreateRecords', 'virtualModeRecordCreating'];
            // jqxTreeGridComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onCellBeginEdit = new core.EventEmitter();
            this.onCellEndEdit = new core.EventEmitter();
            this.onCellValueChanged = new core.EventEmitter();
            this.onColumnResized = new core.EventEmitter();
            this.onColumnReordered = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onPageChanged = new core.EventEmitter();
            this.onPageSizeChanged = new core.EventEmitter();
            this.onRowClick = new core.EventEmitter();
            this.onRowDoubleClick = new core.EventEmitter();
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onRowBeginEdit = new core.EventEmitter();
            this.onRowEndEdit = new core.EventEmitter();
            this.onRowExpand = new core.EventEmitter();
            this.onRowCollapse = new core.EventEmitter();
            this.onRowCheck = new core.EventEmitter();
            this.onRowUncheck = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTreeGridComponent.prototype.ngOnInit = function () {
        };
        ;
        jqxTreeGridComponent.prototype.ngAfterViewInit = function () {
            var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
            var html = '';
            var options = {};
            if (children.length > 0) {
                this.container = document.createElement('div');
                html = this.elementRef.nativeElement.innerHTML;
                this.container.appendChild(this.elementRef.nativeElement.firstChild);
                this.elementRef.nativeElement.innerHTML = html;
                this.content = html;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                if (this['attrColumns'] !== undefined) {
                    ;
                    options['source'] = result.source;
                }
                else {
                    options['source'] = result.source;
                    options['columns'] = result.columns;
                }
            }
            if (this.autoCreate) {
                this.createComponent(options);
            }
        };
        ;
        jqxTreeGridComponent.prototype.ngAfterViewChecked = function () {
            if (this.container) {
                if (this.content !== this.container.innerHTML) {
                    this.content = this.container.innerHTML;
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    var columns = this.host.jqxGrid('columns');
                    if (columns.length === 0) {
                        this.host.jqxGrid({ source: result.source, columns: result.columns });
                    }
                    else {
                        this.host.jqxGrid({ source: result.source });
                    }
                }
            }
        };
        ;
        jqxTreeGridComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeGrid(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTreeGrid(this.properties[i])) {
                            this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTreeGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTreeGridComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTreeGridComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTreeGridComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTreeGridComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeGrid', options);
        };
        jqxTreeGridComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTreeGridComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTreeGridComponent.prototype.setOptions = function (options) {
            this.host.jqxTreeGrid('setOptions', options);
        };
        // jqxTreeGridComponent properties
        jqxTreeGridComponent.prototype.altRows = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('altRows', arg);
            }
            else {
                return this.host.jqxTreeGrid('altRows');
            }
        };
        jqxTreeGridComponent.prototype.autoRowHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('autoRowHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('autoRowHeight');
            }
        };
        jqxTreeGridComponent.prototype.aggregatesHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('aggregatesHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('aggregatesHeight');
            }
        };
        jqxTreeGridComponent.prototype.autoShowLoadElement = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('autoShowLoadElement', arg);
            }
            else {
                return this.host.jqxTreeGrid('autoShowLoadElement');
            }
        };
        jqxTreeGridComponent.prototype.checkboxes = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('checkboxes', arg);
            }
            else {
                return this.host.jqxTreeGrid('checkboxes');
            }
        };
        jqxTreeGridComponent.prototype.columnsHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('columnsHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('columnsHeight');
            }
        };
        jqxTreeGridComponent.prototype.columns = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('columns', arg);
            }
            else {
                return this.host.jqxTreeGrid('columns');
            }
        };
        jqxTreeGridComponent.prototype.columnGroups = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('columnGroups', arg);
            }
            else {
                return this.host.jqxTreeGrid('columnGroups');
            }
        };
        jqxTreeGridComponent.prototype.columnsResize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('columnsResize', arg);
            }
            else {
                return this.host.jqxTreeGrid('columnsResize');
            }
        };
        jqxTreeGridComponent.prototype.columnsReorder = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('columnsReorder', arg);
            }
            else {
                return this.host.jqxTreeGrid('columnsReorder');
            }
        };
        jqxTreeGridComponent.prototype.disabled = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('disabled', arg);
            }
            else {
                return this.host.jqxTreeGrid('disabled');
            }
        };
        jqxTreeGridComponent.prototype.editable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('editable', arg);
            }
            else {
                return this.host.jqxTreeGrid('editable');
            }
        };
        jqxTreeGridComponent.prototype.editSettings = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('editSettings', arg);
            }
            else {
                return this.host.jqxTreeGrid('editSettings');
            }
        };
        jqxTreeGridComponent.prototype.exportSettings = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('exportSettings', arg);
            }
            else {
                return this.host.jqxTreeGrid('exportSettings');
            }
        };
        jqxTreeGridComponent.prototype.enableHover = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('enableHover', arg);
            }
            else {
                return this.host.jqxTreeGrid('enableHover');
            }
        };
        jqxTreeGridComponent.prototype.enableBrowserSelection = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('enableBrowserSelection', arg);
            }
            else {
                return this.host.jqxTreeGrid('enableBrowserSelection');
            }
        };
        jqxTreeGridComponent.prototype.filterable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('filterable', arg);
            }
            else {
                return this.host.jqxTreeGrid('filterable');
            }
        };
        jqxTreeGridComponent.prototype.filterHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('filterHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('filterHeight');
            }
        };
        jqxTreeGridComponent.prototype.filterMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('filterMode', arg);
            }
            else {
                return this.host.jqxTreeGrid('filterMode');
            }
        };
        jqxTreeGridComponent.prototype.height = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('height', arg);
            }
            else {
                return this.host.jqxTreeGrid('height');
            }
        };
        jqxTreeGridComponent.prototype.hierarchicalCheckboxes = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
            }
            else {
                return this.host.jqxTreeGrid('hierarchicalCheckboxes');
            }
        };
        jqxTreeGridComponent.prototype.icons = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('icons', arg);
            }
            else {
                return this.host.jqxTreeGrid('icons');
            }
        };
        jqxTreeGridComponent.prototype.incrementalSearch = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('incrementalSearch', arg);
            }
            else {
                return this.host.jqxTreeGrid('incrementalSearch');
            }
        };
        jqxTreeGridComponent.prototype.localization = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('localization', arg);
            }
            else {
                return this.host.jqxTreeGrid('localization');
            }
        };
        jqxTreeGridComponent.prototype.pagerHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pagerHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('pagerHeight');
            }
        };
        jqxTreeGridComponent.prototype.pageSize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pageSize', arg);
            }
            else {
                return this.host.jqxTreeGrid('pageSize');
            }
        };
        jqxTreeGridComponent.prototype.pageSizeOptions = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pageSizeOptions', arg);
            }
            else {
                return this.host.jqxTreeGrid('pageSizeOptions');
            }
        };
        jqxTreeGridComponent.prototype.pageable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pageable', arg);
            }
            else {
                return this.host.jqxTreeGrid('pageable');
            }
        };
        jqxTreeGridComponent.prototype.pagerPosition = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pagerPosition', arg);
            }
            else {
                return this.host.jqxTreeGrid('pagerPosition');
            }
        };
        jqxTreeGridComponent.prototype.pagerMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pagerMode', arg);
            }
            else {
                return this.host.jqxTreeGrid('pagerMode');
            }
        };
        jqxTreeGridComponent.prototype.pageSizeMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pageSizeMode', arg);
            }
            else {
                return this.host.jqxTreeGrid('pageSizeMode');
            }
        };
        jqxTreeGridComponent.prototype.pagerButtonsCount = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pagerButtonsCount', arg);
            }
            else {
                return this.host.jqxTreeGrid('pagerButtonsCount');
            }
        };
        jqxTreeGridComponent.prototype.pagerRenderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('pagerRenderer', arg);
            }
            else {
                return this.host.jqxTreeGrid('pagerRenderer');
            }
        };
        jqxTreeGridComponent.prototype.ready = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('ready', arg);
            }
            else {
                return this.host.jqxTreeGrid('ready');
            }
        };
        jqxTreeGridComponent.prototype.rowDetails = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('rowDetails', arg);
            }
            else {
                return this.host.jqxTreeGrid('rowDetails');
            }
        };
        jqxTreeGridComponent.prototype.rowDetailsRenderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('rowDetailsRenderer', arg);
            }
            else {
                return this.host.jqxTreeGrid('rowDetailsRenderer');
            }
        };
        jqxTreeGridComponent.prototype.renderToolbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('renderToolbar', arg);
            }
            else {
                return this.host.jqxTreeGrid('renderToolbar');
            }
        };
        jqxTreeGridComponent.prototype.renderStatusBar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('renderStatusBar', arg);
            }
            else {
                return this.host.jqxTreeGrid('renderStatusBar');
            }
        };
        jqxTreeGridComponent.prototype.rendering = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('rendering', arg);
            }
            else {
                return this.host.jqxTreeGrid('rendering');
            }
        };
        jqxTreeGridComponent.prototype.rendered = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('rendered', arg);
            }
            else {
                return this.host.jqxTreeGrid('rendered');
            }
        };
        jqxTreeGridComponent.prototype.rtl = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('rtl', arg);
            }
            else {
                return this.host.jqxTreeGrid('rtl');
            }
        };
        jqxTreeGridComponent.prototype.source = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('source', arg);
            }
            else {
                return this.host.jqxTreeGrid('source');
            }
        };
        jqxTreeGridComponent.prototype.sortable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('sortable', arg);
            }
            else {
                return this.host.jqxTreeGrid('sortable');
            }
        };
        jqxTreeGridComponent.prototype.showAggregates = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('showAggregates', arg);
            }
            else {
                return this.host.jqxTreeGrid('showAggregates');
            }
        };
        jqxTreeGridComponent.prototype.showSubAggregates = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('showSubAggregates', arg);
            }
            else {
                return this.host.jqxTreeGrid('showSubAggregates');
            }
        };
        jqxTreeGridComponent.prototype.showToolbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('showToolbar', arg);
            }
            else {
                return this.host.jqxTreeGrid('showToolbar');
            }
        };
        jqxTreeGridComponent.prototype.showStatusbar = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('showStatusbar', arg);
            }
            else {
                return this.host.jqxTreeGrid('showStatusbar');
            }
        };
        jqxTreeGridComponent.prototype.statusBarHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('statusBarHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('statusBarHeight');
            }
        };
        jqxTreeGridComponent.prototype.scrollBarSize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('scrollBarSize', arg);
            }
            else {
                return this.host.jqxTreeGrid('scrollBarSize');
            }
        };
        jqxTreeGridComponent.prototype.selectionMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('selectionMode', arg);
            }
            else {
                return this.host.jqxTreeGrid('selectionMode');
            }
        };
        jqxTreeGridComponent.prototype.showHeader = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('showHeader', arg);
            }
            else {
                return this.host.jqxTreeGrid('showHeader');
            }
        };
        jqxTreeGridComponent.prototype.theme = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('theme', arg);
            }
            else {
                return this.host.jqxTreeGrid('theme');
            }
        };
        jqxTreeGridComponent.prototype.toolbarHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('toolbarHeight', arg);
            }
            else {
                return this.host.jqxTreeGrid('toolbarHeight');
            }
        };
        jqxTreeGridComponent.prototype.width = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('width', arg);
            }
            else {
                return this.host.jqxTreeGrid('width');
            }
        };
        jqxTreeGridComponent.prototype.virtualModeCreateRecords = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
            }
            else {
                return this.host.jqxTreeGrid('virtualModeCreateRecords');
            }
        };
        jqxTreeGridComponent.prototype.virtualModeRecordCreating = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
            }
            else {
                return this.host.jqxTreeGrid('virtualModeRecordCreating');
            }
        };
        // jqxTreeGridComponent functions
        jqxTreeGridComponent.prototype.addRow = function (rowKey, rowData, rowPosition, parent) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
        };
        jqxTreeGridComponent.prototype.addFilter = function (dataField, filerGroup) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
        };
        jqxTreeGridComponent.prototype.applyFilters = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('applyFilters');
        };
        jqxTreeGridComponent.prototype.beginUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('beginUpdate');
        };
        jqxTreeGridComponent.prototype.beginRowEdit = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('beginRowEdit', rowKey);
        };
        jqxTreeGridComponent.prototype.beginCellEdit = function (rowKey, dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
        };
        jqxTreeGridComponent.prototype.clearSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('clearSelection');
        };
        jqxTreeGridComponent.prototype.clearFilters = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('clearFilters');
        };
        jqxTreeGridComponent.prototype.clear = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('clear');
        };
        jqxTreeGridComponent.prototype.checkRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('checkRow', rowKey);
        };
        jqxTreeGridComponent.prototype.collapseRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('collapseRow', rowKey);
        };
        jqxTreeGridComponent.prototype.collapseAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('collapseAll');
        };
        jqxTreeGridComponent.prototype.destroy = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('destroy');
        };
        jqxTreeGridComponent.prototype.deleteRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('deleteRow', rowKey);
        };
        jqxTreeGridComponent.prototype.expandRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('expandRow', rowKey);
        };
        jqxTreeGridComponent.prototype.expandAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('expandAll');
        };
        jqxTreeGridComponent.prototype.endUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('endUpdate');
        };
        jqxTreeGridComponent.prototype.ensureRowVisible = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('ensureRowVisible', rowKey);
        };
        jqxTreeGridComponent.prototype.endRowEdit = function (rowKey, cancelChanges) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
        };
        jqxTreeGridComponent.prototype.endCellEdit = function (rowKey, dataField, cancelChanges) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
        };
        jqxTreeGridComponent.prototype.exportData = function (exportDataType) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('exportData', exportDataType);
        };
        jqxTreeGridComponent.prototype.focus = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('focus');
        };
        jqxTreeGridComponent.prototype.getColumnProperty = function (dataField, propertyName) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
        };
        jqxTreeGridComponent.prototype.goToPage = function (pageIndex) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('goToPage', pageIndex);
        };
        jqxTreeGridComponent.prototype.goToPrevPage = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('goToPrevPage');
        };
        jqxTreeGridComponent.prototype.goToNextPage = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('goToNextPage');
        };
        jqxTreeGridComponent.prototype.getSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getSelection');
        };
        jqxTreeGridComponent.prototype.getKey = function (row) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getKey', row);
        };
        jqxTreeGridComponent.prototype.getRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getRow', rowKey);
        };
        jqxTreeGridComponent.prototype.getRows = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getRows');
        };
        jqxTreeGridComponent.prototype.getCheckedRows = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getCheckedRows');
        };
        jqxTreeGridComponent.prototype.getView = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getView');
        };
        jqxTreeGridComponent.prototype.getCellValue = function (rowKey, dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
        };
        jqxTreeGridComponent.prototype.hideColumn = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('hideColumn', dataField);
        };
        jqxTreeGridComponent.prototype.isBindingCompleted = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('isBindingCompleted');
        };
        jqxTreeGridComponent.prototype.lockRow = function (rowKey) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('lockRow', rowKey);
        };
        jqxTreeGridComponent.prototype.refresh = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('refresh');
        };
        jqxTreeGridComponent.prototype.render = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('render');
        };
        jqxTreeGridComponent.prototype.removeFilter = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('removeFilter', dataField);
        };
        jqxTreeGridComponent.prototype.scrollOffset = function (top, left) {
            if (top !== undefined || left !== undefined) {
                this.host.jqxTreeGrid('scrollOffset', top, left);
            }
            else {
                return this.host.jqxTreeGrid('scrollOffset');
            }
        };
        ;
        jqxTreeGridComponent.prototype.setColumnProperty = function (dataField, propertyName, propertyValue) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
        };
        jqxTreeGridComponent.prototype.showColumn = function (dataField) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('showColumn', dataField);
        };
        jqxTreeGridComponent.prototype.selectRow = function (rowId) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('selectRow', rowId);
        };
        jqxTreeGridComponent.prototype.setCellValue = function (rowId, dataField, cellValue) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
        };
        jqxTreeGridComponent.prototype.sortBy = function (dataField, sortOrder) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
        };
        jqxTreeGridComponent.prototype.updating = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxTreeGrid('updating');
        };
        jqxTreeGridComponent.prototype.updateBoundData = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('updateBoundData');
        };
        jqxTreeGridComponent.prototype.unselectRow = function (rowId) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('unselectRow', rowId);
        };
        jqxTreeGridComponent.prototype.uncheckRow = function (rowId) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('uncheckRow', rowId);
        };
        jqxTreeGridComponent.prototype.updateRow = function (rowId, data) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('updateRow', rowId, data);
        };
        jqxTreeGridComponent.prototype.unlockRow = function (rowId) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxTreeGrid('unlockRow', rowId);
        };
        jqxTreeGridComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('cellBeginEdit', function (eventData) { _this.onCellBeginEdit.emit(eventData); });
            this.host.on('cellEndEdit', function (eventData) { _this.onCellEndEdit.emit(eventData); });
            this.host.on('cellValueChanged', function (eventData) { _this.onCellValueChanged.emit(eventData); });
            this.host.on('columnResized', function (eventData) { _this.onColumnResized.emit(eventData); });
            this.host.on('columnReordered', function (eventData) { _this.onColumnReordered.emit(eventData); });
            this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
            this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
            this.host.on('pageSizeChanged', function (eventData) { _this.onPageSizeChanged.emit(eventData); });
            this.host.on('rowClick', function (eventData) { _this.onRowClick.emit(eventData); });
            this.host.on('rowDoubleClick', function (eventData) { _this.onRowDoubleClick.emit(eventData); });
            this.host.on('rowSelect', function (eventData) { _this.onRowSelect.emit(eventData); });
            this.host.on('rowUnselect', function (eventData) { _this.onRowUnselect.emit(eventData); });
            this.host.on('rowBeginEdit', function (eventData) { _this.onRowBeginEdit.emit(eventData); });
            this.host.on('rowEndEdit', function (eventData) { _this.onRowEndEdit.emit(eventData); });
            this.host.on('rowExpand', function (eventData) { _this.onRowExpand.emit(eventData); });
            this.host.on('rowCollapse', function (eventData) { _this.onRowCollapse.emit(eventData); });
            this.host.on('rowCheck', function (eventData) { _this.onRowCheck.emit(eventData); });
            this.host.on('rowUncheck', function (eventData) { _this.onRowUncheck.emit(eventData); });
            this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
        };
        jqxTreeGridComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('altRows'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrAltRows", void 0);
        __decorate([
            core.Input('autoRowHeight'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrAutoRowHeight", void 0);
        __decorate([
            core.Input('aggregatesHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrAggregatesHeight", void 0);
        __decorate([
            core.Input('autoShowLoadElement'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrAutoShowLoadElement", void 0);
        __decorate([
            core.Input('checkboxes'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrCheckboxes", void 0);
        __decorate([
            core.Input('columnsHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrColumnsHeight", void 0);
        __decorate([
            core.Input('columns'),
            __metadata("design:type", Array)
        ], jqxTreeGridComponent.prototype, "attrColumns", void 0);
        __decorate([
            core.Input('columnGroups'),
            __metadata("design:type", Array)
        ], jqxTreeGridComponent.prototype, "attrColumnGroups", void 0);
        __decorate([
            core.Input('columnsResize'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrColumnsResize", void 0);
        __decorate([
            core.Input('columnsReorder'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrColumnsReorder", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('editable'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrEditable", void 0);
        __decorate([
            core.Input('editSettings'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrEditSettings", void 0);
        __decorate([
            core.Input('exportSettings'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrExportSettings", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('enableBrowserSelection'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrEnableBrowserSelection", void 0);
        __decorate([
            core.Input('filterable'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrFilterable", void 0);
        __decorate([
            core.Input('filterHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrFilterHeight", void 0);
        __decorate([
            core.Input('filterMode'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrFilterMode", void 0);
        __decorate([
            core.Input('hierarchicalCheckboxes'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrHierarchicalCheckboxes", void 0);
        __decorate([
            core.Input('icons'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrIcons", void 0);
        __decorate([
            core.Input('incrementalSearch'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrIncrementalSearch", void 0);
        __decorate([
            core.Input('localization'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrLocalization", void 0);
        __decorate([
            core.Input('pagerHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrPagerHeight", void 0);
        __decorate([
            core.Input('pageSize'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrPageSize", void 0);
        __decorate([
            core.Input('pageSizeOptions'),
            __metadata("design:type", Array)
        ], jqxTreeGridComponent.prototype, "attrPageSizeOptions", void 0);
        __decorate([
            core.Input('pageable'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrPageable", void 0);
        __decorate([
            core.Input('pagerPosition'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrPagerPosition", void 0);
        __decorate([
            core.Input('pagerMode'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrPagerMode", void 0);
        __decorate([
            core.Input('pageSizeMode'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrPageSizeMode", void 0);
        __decorate([
            core.Input('pagerButtonsCount'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrPagerButtonsCount", void 0);
        __decorate([
            core.Input('pagerRenderer'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrPagerRenderer", void 0);
        __decorate([
            core.Input('ready'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrReady", void 0);
        __decorate([
            core.Input('rowDetails'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrRowDetails", void 0);
        __decorate([
            core.Input('rowDetailsRenderer'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrRowDetailsRenderer", void 0);
        __decorate([
            core.Input('renderToolbar'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrRenderToolbar", void 0);
        __decorate([
            core.Input('renderStatusBar'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrRenderStatusBar", void 0);
        __decorate([
            core.Input('rendering'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrRendering", void 0);
        __decorate([
            core.Input('rendered'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrRendered", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('sortable'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrSortable", void 0);
        __decorate([
            core.Input('showAggregates'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrShowAggregates", void 0);
        __decorate([
            core.Input('showSubAggregates'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrShowSubAggregates", void 0);
        __decorate([
            core.Input('showToolbar'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrShowToolbar", void 0);
        __decorate([
            core.Input('showStatusbar'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrShowStatusbar", void 0);
        __decorate([
            core.Input('statusBarHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrStatusBarHeight", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('selectionMode'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrSelectionMode", void 0);
        __decorate([
            core.Input('showHeader'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "attrShowHeader", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTreeGridComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('toolbarHeight'),
            __metadata("design:type", Number)
        ], jqxTreeGridComponent.prototype, "attrToolbarHeight", void 0);
        __decorate([
            core.Input('virtualModeCreateRecords'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrVirtualModeCreateRecords", void 0);
        __decorate([
            core.Input('virtualModeRecordCreating'),
            __metadata("design:type", Function)
        ], jqxTreeGridComponent.prototype, "attrVirtualModeRecordCreating", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTreeGridComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onCellBeginEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onCellEndEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onCellValueChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onColumnResized", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onColumnReordered", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onPageChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onPageSizeChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowDoubleClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowUnselect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowBeginEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowEndEdit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowExpand", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowCollapse", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowCheck", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onRowUncheck", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeGridComponent.prototype, "onSort", void 0);
        jqxTreeGridComponent = __decorate([
            core.Component({
                selector: 'jqxTreeGrid',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTreeGridComponent);
        return jqxTreeGridComponent;
    }()); //jqxTreeGridComponent

    var jqxTreeGridModule = /** @class */ (function () {
        function jqxTreeGridModule() {
        }
        jqxTreeGridModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTreeGridComponent],
                exports: [jqxTreeGridComponent]
            })
        ], jqxTreeGridModule);
        return jqxTreeGridModule;
    }());

    exports.jqxTreeGridComponent = jqxTreeGridComponent;
    exports.jqxTreeGridModule = jqxTreeGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
