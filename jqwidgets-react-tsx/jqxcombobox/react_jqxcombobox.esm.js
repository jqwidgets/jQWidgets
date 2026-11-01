import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
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
var JqxComboBox = /** @class */ (function (_super) {
    __extends(JqxComboBox, _super);
    function JqxComboBox(props) {
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
        _this._id = 'JqxComboBox' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
        _this._componentSelector = '#' + _this._id;
        return _this;
    }
    JqxComboBox.prototype.componentDidMount = function () {
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
            element.jqxComboBox(widgetOptions);
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
    JqxComboBox.prototype.componentDidUpdate = function () {
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
    JqxComboBox.prototype._warnRebuiltProps = function (changed) {
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
                console.warn('JqxComboBox: the "' + key + '" prop was new on three renders in a row, and each time the widget was updated with it'
                    + (key === 'source' ? ' (its data bound again)' : '') + '. Create it once, outside the component or with useMemo or useCallback;'
                    + ' a function inside it, or a new jqx.dataAdapter, makes it new on every render.');
            }
        }
    };
    JqxComboBox.prototype._onReady = function () {
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
    JqxComboBox.prototype.componentWillUnmount = function () {
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
    JqxComboBox.prototype._target = function () {
        return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
    };
    JqxComboBox.prototype.render = function () {
        var _this = this;
        return (createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style, suppressHydrationWarning: true }, this._hostAttributes()), this.props.children));
    };
    JqxComboBox.prototype.setOptions = function (options) {
        this._jqx(this._target()).jqxComboBox(options);
    };
    JqxComboBox.prototype.getOptions = function (option) {
        return this._jqx(this._target()).jqxComboBox(option);
    };
    JqxComboBox.prototype.addItem = function (item) {
        return this._jqx(this._target()).jqxComboBox('addItem', item);
    };
    JqxComboBox.prototype.clearSelection = function () {
        this._jqx(this._target()).jqxComboBox('clearSelection');
    };
    JqxComboBox.prototype.clear = function () {
        this._jqx(this._target()).jqxComboBox('clear');
    };
    JqxComboBox.prototype.close = function () {
        this._jqx(this._target()).jqxComboBox('close');
    };
    JqxComboBox.prototype.checkIndex = function (index) {
        this._jqx(this._target()).jqxComboBox('checkIndex', index);
    };
    JqxComboBox.prototype.checkItem = function (item) {
        this._jqx(this._target()).jqxComboBox('checkItem', item);
    };
    JqxComboBox.prototype.checkAll = function () {
        this._jqx(this._target()).jqxComboBox('checkAll');
    };
    JqxComboBox.prototype.destroy = function () {
        this._jqx(this._target()).jqxComboBox('destroy');
    };
    JqxComboBox.prototype.disableItem = function (item) {
        this._jqx(this._target()).jqxComboBox('disableItem', item);
    };
    JqxComboBox.prototype.disableAt = function (index) {
        this._jqx(this._target()).jqxComboBox('disableAt', index);
    };
    JqxComboBox.prototype.enableItem = function (item) {
        this._jqx(this._target()).jqxComboBox('enableItem', item);
    };
    JqxComboBox.prototype.enableAt = function (index) {
        this._jqx(this._target()).jqxComboBox('enableAt', index);
    };
    JqxComboBox.prototype.ensureVisible = function (index) {
        this._jqx(this._target()).jqxComboBox('ensureVisible', index);
    };
    JqxComboBox.prototype.findItems = function (text) {
        return this._jqx(this._target()).jqxComboBox('findItems', text);
    };
    JqxComboBox.prototype.focus = function () {
        this._jqx(this._target()).jqxComboBox('focus');
    };
    JqxComboBox.prototype.getItem = function (index) {
        return this._jqx(this._target()).jqxComboBox('getItem', index);
    };
    JqxComboBox.prototype.getItemByValue = function (value) {
        return this._jqx(this._target()).jqxComboBox('getItemByValue', value);
    };
    JqxComboBox.prototype.getVisibleItems = function () {
        return this._jqx(this._target()).jqxComboBox('getVisibleItems');
    };
    JqxComboBox.prototype.getItems = function () {
        return this._jqx(this._target()).jqxComboBox('getItems');
    };
    JqxComboBox.prototype.getCheckedItems = function () {
        return this._jqx(this._target()).jqxComboBox('getCheckedItems');
    };
    JqxComboBox.prototype.getSelectedItem = function () {
        return this._jqx(this._target()).jqxComboBox('getSelectedItem');
    };
    JqxComboBox.prototype.getSelectedItems = function () {
        return this._jqx(this._target()).jqxComboBox('getSelectedItems');
    };
    JqxComboBox.prototype.getSelectedIndex = function () {
        return this._jqx(this._target()).jqxComboBox('getSelectedIndex');
    };
    JqxComboBox.prototype.insertAt = function (item, index) {
        return this._jqx(this._target()).jqxComboBox('insertAt', item, index);
    };
    JqxComboBox.prototype.isOpened = function () {
        return this._jqx(this._target()).jqxComboBox('isOpened');
    };
    JqxComboBox.prototype.indeterminateIndex = function (index) {
        this._jqx(this._target()).jqxComboBox('indeterminateIndex', index);
    };
    JqxComboBox.prototype.indeterminateItem = function (item) {
        this._jqx(this._target()).jqxComboBox('indeterminateItem', item);
    };
    JqxComboBox.prototype.loadFromSelect = function (selectTagId) {
        this._jqx(this._target()).jqxComboBox('loadFromSelect', selectTagId);
    };
    JqxComboBox.prototype.open = function () {
        this._jqx(this._target()).jqxComboBox('open');
    };
    JqxComboBox.prototype.removeItem = function (item) {
        return this._jqx(this._target()).jqxComboBox('removeItem', item);
    };
    JqxComboBox.prototype.removeAt = function (index) {
        return this._jqx(this._target()).jqxComboBox('removeAt', index);
    };
    JqxComboBox.prototype.selectIndex = function (index) {
        this._jqx(this._target()).jqxComboBox('selectIndex', index);
    };
    JqxComboBox.prototype.selectItem = function (item) {
        this._jqx(this._target()).jqxComboBox('selectItem', item);
    };
    JqxComboBox.prototype.setContent = function (content) {
        this._jqx(this._target()).jqxComboBox('setContent', content);
    };
    JqxComboBox.prototype.searchString = function () {
        return this._jqx(this._target()).jqxComboBox('searchString');
    };
    JqxComboBox.prototype.updateItem = function (item, itemValue) {
        this._jqx(this._target()).jqxComboBox('updateItem', item, itemValue);
    };
    JqxComboBox.prototype.updateAt = function (item, index) {
        this._jqx(this._target()).jqxComboBox('updateAt', item, index);
    };
    JqxComboBox.prototype.unselectIndex = function (index) {
        this._jqx(this._target()).jqxComboBox('unselectIndex', index);
    };
    JqxComboBox.prototype.unselectItem = function (item) {
        this._jqx(this._target()).jqxComboBox('unselectItem', item);
    };
    JqxComboBox.prototype.uncheckIndex = function (index) {
        this._jqx(this._target()).jqxComboBox('uncheckIndex', index);
    };
    JqxComboBox.prototype.uncheckItem = function (item) {
        this._jqx(this._target()).jqxComboBox('uncheckItem', item);
    };
    JqxComboBox.prototype.uncheckAll = function () {
        this._jqx(this._target()).jqxComboBox('uncheckAll');
    };
    JqxComboBox.prototype.val = function (value) {
        if (value !== undefined) {
            this._jqx(this._target()).jqxComboBox('val', value);
        }
        else {
            return this._jqx(this._target()).jqxComboBox('val');
        }
    };
    JqxComboBox.prototype._manageProps = function () {
        var widgetProps = ['animationType', 'arrowSize', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'dropDownContainer', 'emptyString', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'equalItemsWidth', 'groupMember', 'height', 'hint', 'itemHeight', 'keyboardSelection', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'ready', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'selectionMode', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'searchMember', 'source', 'scrollBarSize', 'template', 'theme', 'touchMode', 'validateSelection', 'valueMember', 'width'];
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
    JqxComboBox.prototype._hostAttributes = function () {
        var attributes = {};
        for (var prop in this.props) {
            if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                attributes[prop] = this.props[prop];
            }
        }
        return attributes;
    };
    JqxComboBox.prototype._applyHostAttributes = function () {
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
    JqxComboBox.prototype._wireEvents = function () {
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
    JqxComboBox.prototype._eventHandler = function (prop) {
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
    JqxComboBox.prototype._teardown = function () {
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
            this._jqx(node).jqxComboBox('destroy');
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
    return JqxComboBox;
}(PureComponent));
function __eventName__(prop) {
    return prop.charAt(2).toLowerCase() + prop.slice(3);
}
var __hasWindow__ = typeof window !== 'undefined';
var jqx = (__hasWindow__ ? window.jqx : undefined);
var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

export default JqxComboBox;
export { jqx, JQXLite };
