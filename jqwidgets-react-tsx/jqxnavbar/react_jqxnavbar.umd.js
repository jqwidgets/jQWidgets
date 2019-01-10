require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxnavbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.react_jqxnavbar = {}),global.React));
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

    var JqxNavBar = /** @class */ (function (_super) {
        __extends(JqxNavBar, _super);
        function JqxNavBar(props) {
            var _this = _super.call(this, props) || this;
            /* tslint:disable:variable-name */
            _this._jqx = JQXLite;
            _this._id = 'JqxNavBar' + _this._jqx.generateID();
            _this._componentSelector = '#' + _this._id;
            _this.state = { lastProps: props };
            return _this;
        }
        JqxNavBar.getDerivedStateFromProps = function (props, state) {
            var areEqual = Object.is(props, state.lastProps);
            if (!areEqual) {
                var newState = { lastProps: props };
                return newState;
            }
            return null;
        };
        JqxNavBar.prototype.componentDidUpdate = function () {
            var widgetOptions = this._manageProps();
            this.setOptions(widgetOptions);
        };
        JqxNavBar.prototype.componentDidMount = function () {
            if (this.props.autoCreate) {
                this._createComponent();
            }
        };
        JqxNavBar.prototype.render = function () {
            return (React.createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
        };
        JqxNavBar.prototype.createComponent = function (options) {
            if (!this.props.autoCreate) {
                this._createComponent(options);
            }
            else {
                /* tslint:disable:no-console */
                console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
            }
        };
        JqxNavBar.prototype.setOptions = function (options) {
            this._jqx(this._componentSelector).jqxNavBar(options);
        };
        JqxNavBar.prototype.getOptions = function (option) {
            return this._jqx(this._componentSelector).jqxNavBar(option);
        };
        JqxNavBar.prototype.addEventListener = function (name, callbackFn) {
            this._jqx(this._componentSelector).on(name, callbackFn);
        };
        JqxNavBar.prototype.removeEventListener = function (name) {
            this._jqx(this._componentSelector).off(name);
        };
        JqxNavBar.prototype.close = function () {
            this._jqx(this._componentSelector).jqxNavBar('close');
        };
        JqxNavBar.prototype.destroy = function () {
            this._jqx(this._componentSelector).jqxNavBar('destroy');
        };
        JqxNavBar.prototype.getSelectedIndex = function () {
            return this._jqx(this._componentSelector).jqxNavBar('getSelectedIndex');
        };
        JqxNavBar.prototype.open = function () {
            this._jqx(this._componentSelector).jqxNavBar('open');
        };
        JqxNavBar.prototype.selectAt = function (index) {
            this._jqx(this._componentSelector).jqxNavBar('selectAt', index);
        };
        JqxNavBar.prototype._createComponent = function (options) {
            var widgetOptions = options ? options : this._manageProps();
            this._jqx(this._componentSelector).jqxNavBar(widgetOptions);
            this._wireEvents();
        };
        JqxNavBar.prototype._manageProps = function () {
            var widgetProps = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
            var options = {};
            for (var prop in this.props) {
                if (widgetProps.indexOf(prop) !== -1) {
                    options[prop] = this.props[prop];
                }
            }
            return options;
        };
        JqxNavBar.prototype._wireEvents = function () {
            for (var prop in this.props) {
                if (prop.indexOf('on') === 0) {
                    var originalEventName = prop.slice(2);
                    originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                    this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
                }
            }
        };
        JqxNavBar.defaultProps = {
            autoCreate: true
        };
        return JqxNavBar;
    }(React.PureComponent));
    var jqx = window.jqx;
    var JQXLite = window.JQXLite;
    var jqwidgets = window.jqwidgets;

    exports.default = JqxNavBar;
    exports.jqx = jqx;
    exports.JQXLite = JQXLite;
    exports.jqwidgets = jqwidgets;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
