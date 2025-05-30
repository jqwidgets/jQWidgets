import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxpasswordinput from '../../jqwidgets/jqxpasswordinput';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxmaskedinput from '../../jqwidgets/jqxmaskedinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxform from '../../jqwidgets/jqxform';
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

var JqxForm = /** @class */ (function (_super) {
    __extends(JqxForm, _super);
    function JqxForm(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxForm' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxForm.getDerivedStateFromProps = function (props, state) {
        if (!Object.is) {
            Object.is = function (x, y) {
                if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                }
                else {
                    return x !== x && y !== y;
                }
            };
        }
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxForm.prototype.componentDidMount = function () {
        var widgetOptions = this._manageProps();
        this._jqx(this._componentSelector).jqxForm(widgetOptions);
        this._wireEvents();
    };
    JqxForm.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
        this._wireEvents();
    };
    JqxForm.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxForm.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxForm(options);
    };
    JqxForm.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxForm(option);
    };
    JqxForm.prototype.getInstance = function () {
        return this._jqx(this._componentSelector).jqxForm('getInstance');
    };
    JqxForm.prototype.refresh = function () {
        this._jqx(this._componentSelector).jqxForm('refresh');
    };
    JqxForm.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxForm('destroy');
    };
    JqxForm.prototype.hideComponent = function (name) {
        this._jqx(this._componentSelector).jqxForm('hideComponent', name);
    };
    JqxForm.prototype.showComponent = function (name) {
        this._jqx(this._componentSelector).jqxForm('showComponent', name);
    };
    JqxForm.prototype.val = function (value) {
        if (value) {
            this._jqx(this._componentSelector).jqxForm('val', value);
        }
        else {
            return this._jqx(this._componentSelector).jqxForm('val');
        }
    };
    JqxForm.prototype.submit = function (action, target, method) {
        this._jqx(this._componentSelector).jqxForm('submit', action, target, method);
    };
    JqxForm.prototype.getComponentByName = function (name) {
        return this._jqx(this._componentSelector).jqxForm('getComponentByName', name);
    };
    JqxForm.prototype._manageProps = function () {
        var widgetProps = ['padding', 'backgroundColor', 'borderColor', 'value', 'template', 'enableSmartPaste', 'aiKey', 'aiUrl'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxForm.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).off(originalEventName);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    return JqxForm;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;

export default JqxForm;
export { jqx, JQXLite };
