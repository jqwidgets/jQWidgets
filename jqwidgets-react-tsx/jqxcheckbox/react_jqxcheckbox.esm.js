import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
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

var JqxCheckBox = /** @class */ (function (_super) {
    __extends(JqxCheckBox, _super);
    function JqxCheckBox(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxCheckBox' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxCheckBox.getDerivedStateFromProps = function (props, state) {
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxCheckBox.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxCheckBox.prototype.componentDidMount = function () {
        if (this.props.autoCreate) {
            this._createComponent();
        }
    };
    JqxCheckBox.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style },
            createElement("span", null, this.props.children)));
    };
    JqxCheckBox.prototype.createComponent = function (options) {
        if (!this.props.autoCreate) {
            this._createComponent(options);
        }
        else {
            /* tslint:disable:no-console */
            console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
        }
    };
    JqxCheckBox.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxCheckBox(options);
    };
    JqxCheckBox.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxCheckBox(option);
    };
    JqxCheckBox.prototype.addEventListener = function (name, callbackFn) {
        this._jqx(this._componentSelector).on(name, callbackFn);
    };
    JqxCheckBox.prototype.removeEventListener = function (name) {
        this._jqx(this._componentSelector).off(name);
    };
    JqxCheckBox.prototype.check = function () {
        this._jqx(this._componentSelector).jqxCheckBox('check');
    };
    JqxCheckBox.prototype.disable = function () {
        this._jqx(this._componentSelector).jqxCheckBox('disable');
    };
    JqxCheckBox.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxCheckBox('destroy');
    };
    JqxCheckBox.prototype.enable = function () {
        this._jqx(this._componentSelector).jqxCheckBox('enable');
    };
    JqxCheckBox.prototype.focus = function () {
        this._jqx(this._componentSelector).jqxCheckBox('focus');
    };
    JqxCheckBox.prototype.indeterminate = function () {
        this._jqx(this._componentSelector).jqxCheckBox('indeterminate');
    };
    JqxCheckBox.prototype.renderWidget = function () {
        this._jqx(this._componentSelector).jqxCheckBox('render');
    };
    JqxCheckBox.prototype.toggle = function () {
        this._jqx(this._componentSelector).jqxCheckBox('toggle');
    };
    JqxCheckBox.prototype.uncheck = function () {
        this._jqx(this._componentSelector).jqxCheckBox('uncheck');
    };
    JqxCheckBox.prototype.val = function (value) {
        return this._jqx(this._componentSelector).jqxCheckBox('val', value);
    };
    JqxCheckBox.prototype._createComponent = function (options) {
        var widgetOptions = options ? options : this._manageProps();
        this._jqx(this._componentSelector).jqxCheckBox(widgetOptions);
        this._wireEvents();
    };
    JqxCheckBox.prototype._manageProps = function () {
        var widgetProps = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxCheckBox.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    JqxCheckBox.defaultProps = {
        autoCreate: true
    };
    return JqxCheckBox;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;
var jqwidgets = window.jqwidgets;

export default JqxCheckBox;
export { jqx, JQXLite, jqwidgets };
