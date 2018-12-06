require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxtabs');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtabs', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtabs = {}),global.ng.core));
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
    var jqxTabsComponent = /** @class */ (function () {
        function jqxTabsComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
            // jqxTabsComponent events
            this.onAdd = new core.EventEmitter();
            this.onCollapsed = new core.EventEmitter();
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onExpanded = new core.EventEmitter();
            this.onRemoved = new core.EventEmitter();
            this.onSelecting = new core.EventEmitter();
            this.onSelected = new core.EventEmitter();
            this.onTabclick = new core.EventEmitter();
            this.onUnselecting = new core.EventEmitter();
            this.onUnselected = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.ngOnInit = /**
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
        jqxTabsComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTabs(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                                this.host.jqxTabs(this.properties[i], this[attrName]);
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
        jqxTabsComponent.prototype.arraysEqual = /**
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
        jqxTabsComponent.prototype.manageAttributes = /**
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
        jqxTabsComponent.prototype.moveClasses = /**
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
        jqxTabsComponent.prototype.moveStyles = /**
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
        jqxTabsComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTabsComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.__updateRect__ = /**
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
        jqxTabsComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTabs('setOptions', options);
            };
        // jqxTabsComponent properties
        // jqxTabsComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.animationType =
            // jqxTabsComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('animationType', arg);
                }
                else {
                    return this.host.jqxTabs('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.autoHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('autoHeight', arg);
                }
                else {
                    return this.host.jqxTabs('autoHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.closeButtonSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('closeButtonSize', arg);
                }
                else {
                    return this.host.jqxTabs('closeButtonSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.collapsible = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('collapsible', arg);
                }
                else {
                    return this.host.jqxTabs('collapsible');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.contentTransitionDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('contentTransitionDuration', arg);
                }
                else {
                    return this.host.jqxTabs('contentTransitionDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('disabled', arg);
                }
                else {
                    return this.host.jqxTabs('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.enabledHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('enabledHover', arg);
                }
                else {
                    return this.host.jqxTabs('enabledHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.enableScrollAnimation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('enableScrollAnimation', arg);
                }
                else {
                    return this.host.jqxTabs('enableScrollAnimation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.enableDropAnimation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('enableDropAnimation', arg);
                }
                else {
                    return this.host.jqxTabs('enableDropAnimation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('height', arg);
                }
                else {
                    return this.host.jqxTabs('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.initTabContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('initTabContent', arg);
                }
                else {
                    return this.host.jqxTabs('initTabContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.keyboardNavigation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('keyboardNavigation', arg);
                }
                else {
                    return this.host.jqxTabs('keyboardNavigation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.next = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('next', arg);
                }
                else {
                    return this.host.jqxTabs('next');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.previous = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('previous', arg);
                }
                else {
                    return this.host.jqxTabs('previous');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.position = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('position', arg);
                }
                else {
                    return this.host.jqxTabs('position');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.reorder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('reorder', arg);
                }
                else {
                    return this.host.jqxTabs('reorder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('rtl', arg);
                }
                else {
                    return this.host.jqxTabs('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.scrollAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('scrollAnimationDuration', arg);
                }
                else {
                    return this.host.jqxTabs('scrollAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.selectedItem = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('selectedItem', arg);
                }
                else {
                    return this.host.jqxTabs('selectedItem');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.selectionTracker = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('selectionTracker', arg);
                }
                else {
                    return this.host.jqxTabs('selectionTracker');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.scrollable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('scrollable', arg);
                }
                else {
                    return this.host.jqxTabs('scrollable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.scrollPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('scrollPosition', arg);
                }
                else {
                    return this.host.jqxTabs('scrollPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.scrollStep = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('scrollStep', arg);
                }
                else {
                    return this.host.jqxTabs('scrollStep');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.showCloseButtons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('showCloseButtons', arg);
                }
                else {
                    return this.host.jqxTabs('showCloseButtons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.toggleMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('toggleMode', arg);
                }
                else {
                    return this.host.jqxTabs('toggleMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('theme', arg);
                }
                else {
                    return this.host.jqxTabs('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTabsComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTabs('width', arg);
                }
                else {
                    return this.host.jqxTabs('width');
                }
            };
        // jqxTabsComponent functions
        // jqxTabsComponent functions
        /**
         * @param {?} index
         * @param {?} title
         * @param {?} content
         * @return {?}
         */
        jqxTabsComponent.prototype.addAt =
            // jqxTabsComponent functions
            /**
             * @param {?} index
             * @param {?} title
             * @param {?} content
             * @return {?}
             */
            function (index, title, content) {
                this.host.jqxTabs('addAt', index, title, content);
            };
        /**
         * @param {?} htmlElement1
         * @param {?} htmlElement2
         * @return {?}
         */
        jqxTabsComponent.prototype.addFirst = /**
         * @param {?} htmlElement1
         * @param {?} htmlElement2
         * @return {?}
         */
            function (htmlElement1, htmlElement2) {
                this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
            };
        /**
         * @param {?} htmlElement1
         * @param {?=} htmlElement2
         * @return {?}
         */
        jqxTabsComponent.prototype.addLast = /**
         * @param {?} htmlElement1
         * @param {?=} htmlElement2
         * @return {?}
         */
            function (htmlElement1, htmlElement2) {
                this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.collapse = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('collapse');
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('disable');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.disableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('disableAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('destroy');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.ensureVisible = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('ensureVisible', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('enableAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.expand = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('expand');
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('enable');
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('focus');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.getTitleAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return this.host.jqxTabs('getTitleAt', index);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.getContentAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return this.host.jqxTabs('getContentAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.getDisabledTabsCount = /**
         * @return {?}
         */
            function () {
                return this.host.jqxTabs('getDisabledTabsCount');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.hideCloseButtonAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('hideCloseButtonAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.hideAllCloseButtons = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('hideAllCloseButtons');
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.length = /**
         * @return {?}
         */
            function () {
                return this.host.jqxTabs('length');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.removeAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('removeAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.removeFirst = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('removeFirst');
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.removeLast = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('removeLast');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.select = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('select', index);
            };
        /**
         * @param {?} index
         * @param {?} htmlElement
         * @return {?}
         */
        jqxTabsComponent.prototype.setContentAt = /**
         * @param {?} index
         * @param {?} htmlElement
         * @return {?}
         */
            function (index, htmlElement) {
                this.host.jqxTabs('setContentAt', index, htmlElement);
            };
        /**
         * @param {?} index
         * @param {?} htmlElement
         * @return {?}
         */
        jqxTabsComponent.prototype.setTitleAt = /**
         * @param {?} index
         * @param {?} htmlElement
         * @return {?}
         */
            function (index, htmlElement) {
                this.host.jqxTabs('setTitleAt', index, htmlElement);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxTabsComponent.prototype.showCloseButtonAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxTabs('showCloseButtonAt', index);
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.showAllCloseButtons = /**
         * @return {?}
         */
            function () {
                this.host.jqxTabs('showAllCloseButtons');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxTabsComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxTabs('val', value);
                }
                else {
                    return this.host.jqxTabs('val');
                }
            };
        /**
         * @return {?}
         */
        jqxTabsComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('add', function (eventData) { _this.onAdd.emit(eventData); });
                this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
                this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
                this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
                this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
                this.host.on('removed', function (eventData) { _this.onRemoved.emit(eventData); });
                this.host.on('selecting', function (eventData) { _this.onSelecting.emit(eventData); });
                this.host.on('selected', function (eventData) { _this.onSelected.emit(eventData); });
                this.host.on('tabclick', function (eventData) { _this.onTabclick.emit(eventData); });
                this.host.on('unselecting', function (eventData) { _this.onUnselecting.emit(eventData); });
                this.host.on('unselected', function (eventData) { _this.onUnselected.emit(eventData); });
            };
        jqxTabsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTabs',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxTabsComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTabsComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAutoHeight: [{ type: core.Input, args: ['autoHeight',] }],
            attrCloseButtonSize: [{ type: core.Input, args: ['closeButtonSize',] }],
            attrCollapsible: [{ type: core.Input, args: ['collapsible',] }],
            attrContentTransitionDuration: [{ type: core.Input, args: ['contentTransitionDuration',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnabledHover: [{ type: core.Input, args: ['enabledHover',] }],
            attrEnableScrollAnimation: [{ type: core.Input, args: ['enableScrollAnimation',] }],
            attrEnableDropAnimation: [{ type: core.Input, args: ['enableDropAnimation',] }],
            attrInitTabContent: [{ type: core.Input, args: ['initTabContent',] }],
            attrKeyboardNavigation: [{ type: core.Input, args: ['keyboardNavigation',] }],
            attrNext: [{ type: core.Input, args: ['next',] }],
            attrPrevious: [{ type: core.Input, args: ['previous',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrReorder: [{ type: core.Input, args: ['reorder',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrScrollAnimationDuration: [{ type: core.Input, args: ['scrollAnimationDuration',] }],
            attrSelectedItem: [{ type: core.Input, args: ['selectedItem',] }],
            attrSelectionTracker: [{ type: core.Input, args: ['selectionTracker',] }],
            attrScrollable: [{ type: core.Input, args: ['scrollable',] }],
            attrScrollPosition: [{ type: core.Input, args: ['scrollPosition',] }],
            attrScrollStep: [{ type: core.Input, args: ['scrollStep',] }],
            attrShowCloseButtons: [{ type: core.Input, args: ['showCloseButtons',] }],
            attrToggleMode: [{ type: core.Input, args: ['toggleMode',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onAdd: [{ type: core.Output }],
            onCollapsed: [{ type: core.Output }],
            onDragStart: [{ type: core.Output }],
            onDragEnd: [{ type: core.Output }],
            onExpanded: [{ type: core.Output }],
            onRemoved: [{ type: core.Output }],
            onSelecting: [{ type: core.Output }],
            onSelected: [{ type: core.Output }],
            onTabclick: [{ type: core.Output }],
            onUnselecting: [{ type: core.Output }],
            onUnselected: [{ type: core.Output }]
        };
        return jqxTabsComponent;
    }()); //jqxTabsComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTabsModule = /** @class */ (function () {
        function jqxTabsModule() {
        }
        jqxTabsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxTabsComponent],
                        exports: [jqxTabsComponent]
                    },] }
        ];
        return jqxTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTabsComponent = jqxTabsComponent;
    exports.jqxTabsModule = jqxTabsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

