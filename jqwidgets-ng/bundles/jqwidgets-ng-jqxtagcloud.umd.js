require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxtagcloud');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtagcloud', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtagcloud = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTagCloudComponent = /** @class */ (function () {
        function jqxTagCloudComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
            // jqxTagCloudComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onItemClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate) {
                    this.createComponent();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxTagCloudComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.host) {
                    for (var i = 0; i < this.properties.length; i++) {
                        /** @type {?} */
                        var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                        /** @type {?} */
                        var areEqual = false;
                        if (this[attrName] !== undefined) {
                            if (typeof this[attrName] === 'object') {
                                if (this[attrName] instanceof Array) {
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTagCloud(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                                this.host.jqxTagCloud(this.properties[i], this[attrName]);
                            }
                        }
                    }
                }
            };
        /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
        jqxTagCloudComponent.prototype.arraysEqual = /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
            function (attrValue, hostValue) {
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
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.manageAttributes = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var options = {};
                for (var i = 0; i < this.properties.length; i++) {
                    /** @type {?} */
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    if (this[attrName] !== undefined) {
                        options[this.properties[i]] = this[attrName];
                    }
                }
                return options;
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxTagCloudComponent.prototype.moveClasses = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                var _a;
                /** @type {?} */
                var classes = parentEl.classList;
                if (classes.length > 0) {
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
                }
                parentEl.className = '';
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxTagCloudComponent.prototype.moveStyles = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                /** @type {?} */
                var style = parentEl.style.cssText;
                childEl.style.cssText = style;
                parentEl.style.cssText = '';
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTagCloudComponent.prototype.createComponent = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTagCloudComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxTagCloudComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTagCloud('setOptions', options);
            };
        // jqxTagCloudComponent properties
        // jqxTagCloudComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.alterTextCase =
            // jqxTagCloudComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('alterTextCase', arg);
                }
                else {
                    return this.host.jqxTagCloud('alterTextCase');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('disabled', arg);
                }
                else {
                    return this.host.jqxTagCloud('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.displayLimit = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('displayLimit', arg);
                }
                else {
                    return this.host.jqxTagCloud('displayLimit');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.displayMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('displayMember', arg);
                }
                else {
                    return this.host.jqxTagCloud('displayMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.displayValue = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('displayValue', arg);
                }
                else {
                    return this.host.jqxTagCloud('displayValue');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.fontSizeUnit = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('fontSizeUnit', arg);
                }
                else {
                    return this.host.jqxTagCloud('fontSizeUnit');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('height', arg);
                }
                else {
                    return this.host.jqxTagCloud('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.maxColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('maxColor', arg);
                }
                else {
                    return this.host.jqxTagCloud('maxColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.maxFontSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('maxFontSize', arg);
                }
                else {
                    return this.host.jqxTagCloud('maxFontSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.maxValueToDisplay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('maxValueToDisplay', arg);
                }
                else {
                    return this.host.jqxTagCloud('maxValueToDisplay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.minColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('minColor', arg);
                }
                else {
                    return this.host.jqxTagCloud('minColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.minFontSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('minFontSize', arg);
                }
                else {
                    return this.host.jqxTagCloud('minFontSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.minValueToDisplay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('minValueToDisplay', arg);
                }
                else {
                    return this.host.jqxTagCloud('minValueToDisplay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('rtl', arg);
                }
                else {
                    return this.host.jqxTagCloud('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.sortBy = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('sortBy', arg);
                }
                else {
                    return this.host.jqxTagCloud('sortBy');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.sortOrder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('sortOrder', arg);
                }
                else {
                    return this.host.jqxTagCloud('sortOrder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('source', arg);
                }
                else {
                    return this.host.jqxTagCloud('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.tagRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('tagRenderer', arg);
                }
                else {
                    return this.host.jqxTagCloud('tagRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.takeTopWeightedItems = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('takeTopWeightedItems', arg);
                }
                else {
                    return this.host.jqxTagCloud('takeTopWeightedItems');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.textColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('textColor', arg);
                }
                else {
                    return this.host.jqxTagCloud('textColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.urlBase = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('urlBase', arg);
                }
                else {
                    return this.host.jqxTagCloud('urlBase');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.urlMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('urlMember', arg);
                }
                else {
                    return this.host.jqxTagCloud('urlMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.valueMember = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('valueMember', arg);
                }
                else {
                    return this.host.jqxTagCloud('valueMember');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTagCloudComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTagCloud('width', arg);
                }
                else {
                    return this.host.jqxTagCloud('width');
                }
            };
        // jqxTagCloudComponent functions
        // jqxTagCloudComponent functions
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.destroy =
            // jqxTagCloudComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxTagCloud('destroy');
            };
        /**
         * @param {?} tag
         * @return {?}
         */
        jqxTagCloudComponent.prototype.findTagIndex = /**
         * @param {?} tag
         * @return {?}
         */
            function (tag) {
                return this.host.jqxTagCloud('findTagIndex', tag);
            };
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.getHiddenTagsList = /**
         * @return {?}
         */
            function () {
                return this.host.jqxTagCloud('getHiddenTagsList');
            };
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.getRenderedTags = /**
         * @return {?}
         */
            function () {
                return this.host.jqxTagCloud('getRenderedTags');
            };
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.getTagsList = /**
         * @return {?}
         */
            function () {
                return this.host.jqxTagCloud('getTagsList');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTagCloudComponent.prototype.hideItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTagCloud('hideItem', index);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxTagCloudComponent.prototype.insertAt = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                this.host.jqxTagCloud('insertAt', index, item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTagCloudComponent.prototype.removeAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTagCloud('removeAt', index);
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        jqxTagCloudComponent.prototype.updateAt = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                this.host.jqxTagCloud('updateAt', index, item);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTagCloudComponent.prototype.showItem = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTagCloud('showItem', index);
            };
        /**
         * @return {?}
         */
        jqxTagCloudComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
            };
        jqxTagCloudComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTagCloud',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxTagCloudComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTagCloudComponent.propDecorators = {
            attrAlterTextCase: [{ type: core.Input, args: ['alterTextCase',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDisplayLimit: [{ type: core.Input, args: ['displayLimit',] }],
            attrDisplayMember: [{ type: core.Input, args: ['displayMember',] }],
            attrDisplayValue: [{ type: core.Input, args: ['displayValue',] }],
            attrFontSizeUnit: [{ type: core.Input, args: ['fontSizeUnit',] }],
            attrMaxColor: [{ type: core.Input, args: ['maxColor',] }],
            attrMaxFontSize: [{ type: core.Input, args: ['maxFontSize',] }],
            attrMaxValueToDisplay: [{ type: core.Input, args: ['maxValueToDisplay',] }],
            attrMinColor: [{ type: core.Input, args: ['minColor',] }],
            attrMinFontSize: [{ type: core.Input, args: ['minFontSize',] }],
            attrMinValueToDisplay: [{ type: core.Input, args: ['minValueToDisplay',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSortBy: [{ type: core.Input, args: ['sortBy',] }],
            attrSortOrder: [{ type: core.Input, args: ['sortOrder',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrTagRenderer: [{ type: core.Input, args: ['tagRenderer',] }],
            attrTakeTopWeightedItems: [{ type: core.Input, args: ['takeTopWeightedItems',] }],
            attrTextColor: [{ type: core.Input, args: ['textColor',] }],
            attrUrlBase: [{ type: core.Input, args: ['urlBase',] }],
            attrUrlMember: [{ type: core.Input, args: ['urlMember',] }],
            attrValueMember: [{ type: core.Input, args: ['valueMember',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onItemClick: [{ type: core.Output }]
        };
        return jqxTagCloudComponent;
    }()); //jqxTagCloudComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTagCloudModule = /** @class */ (function () {
        function jqxTagCloudModule() {
        }
        jqxTagCloudModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxTagCloudComponent],
                        exports: [jqxTagCloudComponent]
                    },] }
        ];
        return jqxTagCloudModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTagCloudComponent = jqxTagCloudComponent;
    exports.jqxTagCloudModule = jqxTagCloudModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

