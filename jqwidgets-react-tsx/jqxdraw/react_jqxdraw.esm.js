import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
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
function __afterTask__(callback) {
    if (typeof Promise !== 'undefined') {
        Promise.resolve().then(callback);
    }
    else {
        setTimeout(callback, 0);
    }
}
var JqxDraw = /** @class */ (function (_super) {
    __extends(JqxDraw, _super);
    function JqxDraw(props) {
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
        _this._id = 'JqxDraw' + (_this._jqx ? _this._jqx.generateID() : 'SSR' + (++__ssrIdCounter__));
        _this._componentSelector = '#' + _this._id;
        return _this;
    }
    JqxDraw.prototype.componentDidMount = function () {
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
        var widgetOptions = this._manageProps();
        element.jqxDraw(widgetOptions);
        this._appliedOptions = widgetOptions;
        this._applyHostAttributes();
        this._wireEvents();
    };
    JqxDraw.prototype.componentDidUpdate = function () {
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
    JqxDraw.prototype.componentWillUnmount = function () {
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
    JqxDraw.prototype._target = function () {
        return (typeof document !== 'undefined' && document.getElementById(this._id)) || this._rendered || this._componentSelector;
    };
    JqxDraw.prototype.render = function () {
        var _this = this;
        return (createElement("div", __assign({ id: this._id, ref: function (element) { _this._rendered = element; }, className: this.props.className, style: this.props.style }, this._hostAttributes()), this.props.children));
    };
    JqxDraw.prototype.setOptions = function (options) {
        this._jqx(this._target()).jqxDraw(options);
    };
    JqxDraw.prototype.getOptions = function (option) {
        return this._jqx(this._target()).jqxDraw(option);
    };
    JqxDraw.prototype.attr = function (element, attributes) {
        this._jqx(this._target()).jqxDraw('attr', element, attributes);
    };
    JqxDraw.prototype.circle = function (cx, cy, r, attributes) {
        return this._jqx(this._target()).jqxDraw('circle', cx, cy, r, attributes);
    };
    JqxDraw.prototype.clear = function () {
        this._jqx(this._target()).jqxDraw('clear');
    };
    JqxDraw.prototype.getAttr = function (element, attributes) {
        return this._jqx(this._target()).jqxDraw('getAttr', element, attributes);
    };
    JqxDraw.prototype.getSize = function () {
        return this._jqx(this._target()).jqxDraw('getSize');
    };
    JqxDraw.prototype.line = function (x1, y1, x2, y2, attributes) {
        return this._jqx(this._target()).jqxDraw('line', x1, y1, x2, y2, attributes);
    };
    JqxDraw.prototype.measureText = function (text, angle, attributes) {
        return this._jqx(this._target()).jqxDraw('measureText', text, angle, attributes);
    };
    JqxDraw.prototype.on = function (element, event, func) {
        this._jqx(this._target()).jqxDraw('on', element, event, func);
    };
    JqxDraw.prototype.off = function (element, event, func) {
        this._jqx(this._target()).jqxDraw('off', element, event, func);
    };
    JqxDraw.prototype.path = function (path, attributes) {
        return this._jqx(this._target()).jqxDraw('path', path, attributes);
    };
    JqxDraw.prototype.pieslice = function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this._jqx(this._target()).jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    };
    JqxDraw.prototype.refresh = function () {
        this._jqx(this._target()).jqxDraw('refresh');
    };
    JqxDraw.prototype.rect = function (x, y, width, height, attributes) {
        return this._jqx(this._target()).jqxDraw('rect', x, y, width, height, attributes);
    };
    JqxDraw.prototype.saveAsJPEG = function (image, url) {
        this._jqx(this._target()).jqxDraw('saveAsJPEG', image, url);
    };
    JqxDraw.prototype.saveAsPNG = function (image, url) {
        this._jqx(this._target()).jqxDraw('saveAsPNG', image, url);
    };
    JqxDraw.prototype.text = function (text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this._jqx(this._target()).jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    };
    JqxDraw.prototype._manageProps = function () {
        var widgetProps = ['renderEngine', 'theme'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxDraw.prototype._hostAttributes = function () {
        var attributes = {};
        for (var prop in this.props) {
            if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
                attributes[prop] = this.props[prop];
            }
        }
        return attributes;
    };
    JqxDraw.prototype._applyHostAttributes = function () {
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
    JqxDraw.prototype._wireEvents = function () {
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
    JqxDraw.prototype._eventHandler = function (prop) {
        var that = this;
        return function () {
            var handler = that.props[prop];
            return typeof handler === 'function' ? handler.apply(this, arguments) : undefined;
        };
    };
    JqxDraw.prototype._teardown = function () {
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
        if (kept && place) {
            place.parent.insertBefore(node, place.next && place.next.parentNode === place.parent ? place.next : null);
        }
    };
    return JqxDraw;
}(PureComponent));
function __eventName__(prop) {
    return prop.charAt(2).toLowerCase() + prop.slice(3);
}
var __hasWindow__ = typeof window !== 'undefined';
var jqx = (__hasWindow__ ? window.jqx : undefined);
var JQXLite = (__hasWindow__ ? window.JQXLite : undefined);

export default JqxDraw;
export { jqx, JQXLite };
