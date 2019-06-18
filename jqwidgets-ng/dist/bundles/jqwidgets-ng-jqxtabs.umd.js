require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxtabs');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtabs', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtabs = {}), global.ng.core));
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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    /// <reference path="../../jqwidgets.d.ts" />
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
        jqxTabsComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTabsComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
        jqxTabsComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTabsComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTabsComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTabsComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTabsComponent.prototype.createComponent = function (options) {
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
        jqxTabsComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTabsComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTabsComponent.prototype.setOptions = function (options) {
            this.host.jqxTabs('setOptions', options);
        };
        // jqxTabsComponent properties
        jqxTabsComponent.prototype.animationType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('animationType', arg);
            }
            else {
                return this.host.jqxTabs('animationType');
            }
        };
        jqxTabsComponent.prototype.autoHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('autoHeight', arg);
            }
            else {
                return this.host.jqxTabs('autoHeight');
            }
        };
        jqxTabsComponent.prototype.closeButtonSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('closeButtonSize', arg);
            }
            else {
                return this.host.jqxTabs('closeButtonSize');
            }
        };
        jqxTabsComponent.prototype.collapsible = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('collapsible', arg);
            }
            else {
                return this.host.jqxTabs('collapsible');
            }
        };
        jqxTabsComponent.prototype.contentTransitionDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('contentTransitionDuration', arg);
            }
            else {
                return this.host.jqxTabs('contentTransitionDuration');
            }
        };
        jqxTabsComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('disabled', arg);
            }
            else {
                return this.host.jqxTabs('disabled');
            }
        };
        jqxTabsComponent.prototype.enabledHover = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('enabledHover', arg);
            }
            else {
                return this.host.jqxTabs('enabledHover');
            }
        };
        jqxTabsComponent.prototype.enableScrollAnimation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('enableScrollAnimation', arg);
            }
            else {
                return this.host.jqxTabs('enableScrollAnimation');
            }
        };
        jqxTabsComponent.prototype.enableDropAnimation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('enableDropAnimation', arg);
            }
            else {
                return this.host.jqxTabs('enableDropAnimation');
            }
        };
        jqxTabsComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('height', arg);
            }
            else {
                return this.host.jqxTabs('height');
            }
        };
        jqxTabsComponent.prototype.initTabContent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('initTabContent', arg);
            }
            else {
                return this.host.jqxTabs('initTabContent');
            }
        };
        jqxTabsComponent.prototype.keyboardNavigation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('keyboardNavigation', arg);
            }
            else {
                return this.host.jqxTabs('keyboardNavigation');
            }
        };
        jqxTabsComponent.prototype.next = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('next', arg);
            }
            else {
                return this.host.jqxTabs('next');
            }
        };
        jqxTabsComponent.prototype.previous = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('previous', arg);
            }
            else {
                return this.host.jqxTabs('previous');
            }
        };
        jqxTabsComponent.prototype.position = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('position', arg);
            }
            else {
                return this.host.jqxTabs('position');
            }
        };
        jqxTabsComponent.prototype.reorder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('reorder', arg);
            }
            else {
                return this.host.jqxTabs('reorder');
            }
        };
        jqxTabsComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('rtl', arg);
            }
            else {
                return this.host.jqxTabs('rtl');
            }
        };
        jqxTabsComponent.prototype.scrollAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('scrollAnimationDuration', arg);
            }
            else {
                return this.host.jqxTabs('scrollAnimationDuration');
            }
        };
        jqxTabsComponent.prototype.selectedItem = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('selectedItem', arg);
            }
            else {
                return this.host.jqxTabs('selectedItem');
            }
        };
        jqxTabsComponent.prototype.selectionTracker = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('selectionTracker', arg);
            }
            else {
                return this.host.jqxTabs('selectionTracker');
            }
        };
        jqxTabsComponent.prototype.scrollable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('scrollable', arg);
            }
            else {
                return this.host.jqxTabs('scrollable');
            }
        };
        jqxTabsComponent.prototype.scrollPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('scrollPosition', arg);
            }
            else {
                return this.host.jqxTabs('scrollPosition');
            }
        };
        jqxTabsComponent.prototype.scrollStep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('scrollStep', arg);
            }
            else {
                return this.host.jqxTabs('scrollStep');
            }
        };
        jqxTabsComponent.prototype.showCloseButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('showCloseButtons', arg);
            }
            else {
                return this.host.jqxTabs('showCloseButtons');
            }
        };
        jqxTabsComponent.prototype.toggleMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('toggleMode', arg);
            }
            else {
                return this.host.jqxTabs('toggleMode');
            }
        };
        jqxTabsComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('theme', arg);
            }
            else {
                return this.host.jqxTabs('theme');
            }
        };
        jqxTabsComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTabs('width', arg);
            }
            else {
                return this.host.jqxTabs('width');
            }
        };
        // jqxTabsComponent functions
        jqxTabsComponent.prototype.addAt = function (index, title, content) {
            this.host.jqxTabs('addAt', index, title, content);
        };
        jqxTabsComponent.prototype.addFirst = function (htmlElement1, htmlElement2) {
            this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
        };
        jqxTabsComponent.prototype.addLast = function (htmlElement1, htmlElement2) {
            this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
        };
        jqxTabsComponent.prototype.collapse = function () {
            this.host.jqxTabs('collapse');
        };
        jqxTabsComponent.prototype.disable = function () {
            this.host.jqxTabs('disable');
        };
        jqxTabsComponent.prototype.disableAt = function (index) {
            this.host.jqxTabs('disableAt', index);
        };
        jqxTabsComponent.prototype.destroy = function () {
            this.host.jqxTabs('destroy');
        };
        jqxTabsComponent.prototype.ensureVisible = function (index) {
            this.host.jqxTabs('ensureVisible', index);
        };
        jqxTabsComponent.prototype.enableAt = function (index) {
            this.host.jqxTabs('enableAt', index);
        };
        jqxTabsComponent.prototype.expand = function () {
            this.host.jqxTabs('expand');
        };
        jqxTabsComponent.prototype.enable = function () {
            this.host.jqxTabs('enable');
        };
        jqxTabsComponent.prototype.focus = function () {
            this.host.jqxTabs('focus');
        };
        jqxTabsComponent.prototype.getTitleAt = function (index) {
            return this.host.jqxTabs('getTitleAt', index);
        };
        jqxTabsComponent.prototype.getContentAt = function (index) {
            return this.host.jqxTabs('getContentAt', index);
        };
        jqxTabsComponent.prototype.getDisabledTabsCount = function () {
            return this.host.jqxTabs('getDisabledTabsCount');
        };
        jqxTabsComponent.prototype.hideCloseButtonAt = function (index) {
            this.host.jqxTabs('hideCloseButtonAt', index);
        };
        jqxTabsComponent.prototype.hideAllCloseButtons = function () {
            this.host.jqxTabs('hideAllCloseButtons');
        };
        jqxTabsComponent.prototype.length = function () {
            return this.host.jqxTabs('length');
        };
        jqxTabsComponent.prototype.removeAt = function (index) {
            this.host.jqxTabs('removeAt', index);
        };
        jqxTabsComponent.prototype.removeFirst = function () {
            this.host.jqxTabs('removeFirst');
        };
        jqxTabsComponent.prototype.removeLast = function () {
            this.host.jqxTabs('removeLast');
        };
        jqxTabsComponent.prototype.select = function (index) {
            this.host.jqxTabs('select', index);
        };
        jqxTabsComponent.prototype.setContentAt = function (index, htmlElement) {
            this.host.jqxTabs('setContentAt', index, htmlElement);
        };
        jqxTabsComponent.prototype.setTitleAt = function (index, htmlElement) {
            this.host.jqxTabs('setTitleAt', index, htmlElement);
        };
        jqxTabsComponent.prototype.showCloseButtonAt = function (index) {
            this.host.jqxTabs('showCloseButtonAt', index);
        };
        jqxTabsComponent.prototype.showAllCloseButtons = function () {
            this.host.jqxTabs('showAllCloseButtons');
        };
        jqxTabsComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxTabs('val', value);
            }
            else {
                return this.host.jqxTabs('val');
            }
        };
        jqxTabsComponent.prototype.__wireEvents__ = function () {
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
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxTabsComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('autoHeight'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrAutoHeight", void 0);
        __decorate([
            core.Input('closeButtonSize'),
            __metadata("design:type", Number)
        ], jqxTabsComponent.prototype, "attrCloseButtonSize", void 0);
        __decorate([
            core.Input('collapsible'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrCollapsible", void 0);
        __decorate([
            core.Input('contentTransitionDuration'),
            __metadata("design:type", Number)
        ], jqxTabsComponent.prototype, "attrContentTransitionDuration", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('enabledHover'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrEnabledHover", void 0);
        __decorate([
            core.Input('enableScrollAnimation'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrEnableScrollAnimation", void 0);
        __decorate([
            core.Input('enableDropAnimation'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrEnableDropAnimation", void 0);
        __decorate([
            core.Input('initTabContent'),
            __metadata("design:type", Function)
        ], jqxTabsComponent.prototype, "attrInitTabContent", void 0);
        __decorate([
            core.Input('keyboardNavigation'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrKeyboardNavigation", void 0);
        __decorate([
            core.Input('next'),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "attrNext", void 0);
        __decorate([
            core.Input('previous'),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "attrPrevious", void 0);
        __decorate([
            core.Input('position'),
            __metadata("design:type", String)
        ], jqxTabsComponent.prototype, "attrPosition", void 0);
        __decorate([
            core.Input('reorder'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrReorder", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('scrollAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxTabsComponent.prototype, "attrScrollAnimationDuration", void 0);
        __decorate([
            core.Input('selectedItem'),
            __metadata("design:type", Number)
        ], jqxTabsComponent.prototype, "attrSelectedItem", void 0);
        __decorate([
            core.Input('selectionTracker'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrSelectionTracker", void 0);
        __decorate([
            core.Input('scrollable'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrScrollable", void 0);
        __decorate([
            core.Input('scrollPosition'),
            __metadata("design:type", String)
        ], jqxTabsComponent.prototype, "attrScrollPosition", void 0);
        __decorate([
            core.Input('scrollStep'),
            __metadata("design:type", Number)
        ], jqxTabsComponent.prototype, "attrScrollStep", void 0);
        __decorate([
            core.Input('showCloseButtons'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "attrShowCloseButtons", void 0);
        __decorate([
            core.Input('toggleMode'),
            __metadata("design:type", String)
        ], jqxTabsComponent.prototype, "attrToggleMode", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTabsComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTabsComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onAdd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onCollapsed", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onExpanded", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onRemoved", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onSelecting", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onSelected", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onTabclick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onUnselecting", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTabsComponent.prototype, "onUnselected", void 0);
        jqxTabsComponent = __decorate([
            core.Component({
                selector: 'jqxTabs',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTabsComponent);
        return jqxTabsComponent;
    }()); //jqxTabsComponent

    var jqxTabsModule = /** @class */ (function () {
        function jqxTabsModule() {
        }
        jqxTabsModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTabsComponent],
                exports: [jqxTabsComponent]
            })
        ], jqxTabsModule);
        return jqxTabsModule;
    }());

    exports.jqxTabsComponent = jqxTabsComponent;
    exports.jqxTabsModule = jqxTabsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtabs.umd.js.map
