import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
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

var JqxCalendar = /** @class */ (function (_super) {
    __extends(JqxCalendar, _super);
    function JqxCalendar(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxCalendar' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxCalendar.getDerivedStateFromProps = function (props, state) {
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxCalendar.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxCalendar.prototype.componentDidMount = function () {
        if (this.props.autoCreate) {
            this._createComponent();
        }
    };
    JqxCalendar.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxCalendar.prototype.createComponent = function (options) {
        if (!this.props.autoCreate) {
            this._createComponent(options);
        }
        else {
            /* tslint:disable:no-console */
            console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
        }
    };
    JqxCalendar.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxCalendar(options);
    };
    JqxCalendar.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxCalendar(option);
    };
    JqxCalendar.prototype.addEventListener = function (name, callbackFn) {
        this._jqx(this._componentSelector).on(name, callbackFn);
    };
    JqxCalendar.prototype.removeEventListener = function (name) {
        this._jqx(this._componentSelector).off(name);
    };
    JqxCalendar.prototype.clear = function () {
        this._jqx(this._componentSelector).jqxCalendar('clear');
    };
    JqxCalendar.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxCalendar('destroy');
    };
    JqxCalendar.prototype.focus = function () {
        this._jqx(this._componentSelector).jqxCalendar('focus');
    };
    JqxCalendar.prototype.addSpecialDate = function (date, specialDateClass, text) {
        this._jqx(this._componentSelector).jqxCalendar('addSpecialDate', date, specialDateClass, text);
    };
    JqxCalendar.prototype.getMinDate = function () {
        return this._jqx(this._componentSelector).jqxCalendar('getMinDate');
    };
    JqxCalendar.prototype.getMaxDate = function () {
        return this._jqx(this._componentSelector).jqxCalendar('getMaxDate');
    };
    JqxCalendar.prototype.getDate = function () {
        return this._jqx(this._componentSelector).jqxCalendar('getDate');
    };
    JqxCalendar.prototype.getRange = function () {
        return this._jqx(this._componentSelector).jqxCalendar('getRange');
    };
    JqxCalendar.prototype.navigateForward = function (months) {
        this._jqx(this._componentSelector).jqxCalendar('navigateForward', months);
    };
    JqxCalendar.prototype.navigateBackward = function (months) {
        this._jqx(this._componentSelector).jqxCalendar('navigateBackward', months);
    };
    JqxCalendar.prototype.renderWidget = function () {
        this._jqx(this._componentSelector).jqxCalendar('render');
    };
    JqxCalendar.prototype.refresh = function () {
        this._jqx(this._componentSelector).jqxCalendar('refresh');
    };
    JqxCalendar.prototype.setMinDate = function (date) {
        this._jqx(this._componentSelector).jqxCalendar('setMinDate', date);
    };
    JqxCalendar.prototype.setMaxDate = function (date) {
        this._jqx(this._componentSelector).jqxCalendar('setMaxDate', date);
    };
    JqxCalendar.prototype.setDate = function (date) {
        this._jqx(this._componentSelector).jqxCalendar('setDate', date);
    };
    JqxCalendar.prototype.setRange = function (date, date2) {
        this._jqx(this._componentSelector).jqxCalendar('setRange', date, date2);
    };
    JqxCalendar.prototype.today = function () {
        this._jqx(this._componentSelector).jqxCalendar('today');
    };
    JqxCalendar.prototype.val = function (value, value2) {
        return this._jqx(this._componentSelector).jqxCalendar('val', value, value2);
    };
    JqxCalendar.prototype._createComponent = function (options) {
        var widgetOptions = options ? options : this._manageProps();
        this._jqx(this._componentSelector).jqxCalendar(widgetOptions);
        this._wireEvents();
    };
    JqxCalendar.prototype._manageProps = function () {
        var widgetProps = ['backText', 'columnHeaderHeight', 'clearString', 'culture', 'dayNameFormat', 'disabled', 'enableWeekend', 'enableViews', 'enableOtherMonthDays', 'enableFastNavigation', 'enableHover', 'enableAutoNavigation', 'enableTooltips', 'forwardText', 'firstDayOfWeek', 'height', 'min', 'max', 'navigationDelay', 'rowHeaderWidth', 'readOnly', 'restrictedDates', 'rtl', 'stepMonths', 'showWeekNumbers', 'showDayNames', 'showOtherMonthDays', 'showFooter', 'selectionMode', 'specialDates', 'theme', 'titleHeight', 'titleFormat', 'todayString', 'value', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxCalendar.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    JqxCalendar.defaultProps = {
        autoCreate: true
    };
    return JqxCalendar;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;
var jqwidgets = window.jqwidgets;

export default JqxCalendar;
export { jqx, JQXLite, jqwidgets };
