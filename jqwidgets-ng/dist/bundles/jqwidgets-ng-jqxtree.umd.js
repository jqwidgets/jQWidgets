require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxscrollbar');
require('../../jqwidgets-scripts/jqwidgets/jqxpanel');
require('../../jqwidgets-scripts/jqwidgets/jqxdragdrop');
require('../../jqwidgets-scripts/jqwidgets/jqxtree');
require('../../jqwidgets-scripts/jqwidgets/jqxcheckbox');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtree', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtree = {}), global.ng.core));
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
    var jqxTreeComponent = /** @class */ (function () {
        function jqxTreeComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
            // jqxTreeComponent events
            this.onAdded = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onCollapse = new core.EventEmitter();
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onExpand = new core.EventEmitter();
            this.onItemClick = new core.EventEmitter();
            this.onRemoved = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxTreeComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxTreeComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxTree(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                            this.host.jqxTree(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxTreeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxTreeComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxTreeComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxTreeComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxTreeComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
        };
        jqxTreeComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxTreeComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxTreeComponent.prototype.setOptions = function (options) {
            this.host.jqxTree('setOptions', options);
        };
        // jqxTreeComponent properties
        jqxTreeComponent.prototype.animationShowDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('animationShowDuration', arg);
            }
            else {
                return this.host.jqxTree('animationShowDuration');
            }
        };
        jqxTreeComponent.prototype.animationHideDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('animationHideDuration', arg);
            }
            else {
                return this.host.jqxTree('animationHideDuration');
            }
        };
        jqxTreeComponent.prototype.allowDrag = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('allowDrag', arg);
            }
            else {
                return this.host.jqxTree('allowDrag');
            }
        };
        jqxTreeComponent.prototype.allowDrop = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('allowDrop', arg);
            }
            else {
                return this.host.jqxTree('allowDrop');
            }
        };
        jqxTreeComponent.prototype.checkboxes = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('checkboxes', arg);
            }
            else {
                return this.host.jqxTree('checkboxes');
            }
        };
        jqxTreeComponent.prototype.dragStart = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('dragStart', arg);
            }
            else {
                return this.host.jqxTree('dragStart');
            }
        };
        jqxTreeComponent.prototype.dragEnd = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('dragEnd', arg);
            }
            else {
                return this.host.jqxTree('dragEnd');
            }
        };
        jqxTreeComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('disabled', arg);
            }
            else {
                return this.host.jqxTree('disabled');
            }
        };
        jqxTreeComponent.prototype.easing = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('easing', arg);
            }
            else {
                return this.host.jqxTree('easing');
            }
        };
        jqxTreeComponent.prototype.enableHover = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('enableHover', arg);
            }
            else {
                return this.host.jqxTree('enableHover');
            }
        };
        jqxTreeComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('height', arg);
            }
            else {
                return this.host.jqxTree('height');
            }
        };
        jqxTreeComponent.prototype.hasThreeStates = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('hasThreeStates', arg);
            }
            else {
                return this.host.jqxTree('hasThreeStates');
            }
        };
        jqxTreeComponent.prototype.incrementalSearch = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('incrementalSearch', arg);
            }
            else {
                return this.host.jqxTree('incrementalSearch');
            }
        };
        jqxTreeComponent.prototype.keyboardNavigation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('keyboardNavigation', arg);
            }
            else {
                return this.host.jqxTree('keyboardNavigation');
            }
        };
        jqxTreeComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('rtl', arg);
            }
            else {
                return this.host.jqxTree('rtl');
            }
        };
        jqxTreeComponent.prototype.source = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('source', arg);
            }
            else {
                return this.host.jqxTree('source');
            }
        };
        jqxTreeComponent.prototype.toggleIndicatorSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('toggleIndicatorSize', arg);
            }
            else {
                return this.host.jqxTree('toggleIndicatorSize');
            }
        };
        jqxTreeComponent.prototype.toggleMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('toggleMode', arg);
            }
            else {
                return this.host.jqxTree('toggleMode');
            }
        };
        jqxTreeComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('theme', arg);
            }
            else {
                return this.host.jqxTree('theme');
            }
        };
        jqxTreeComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxTree('width', arg);
            }
            else {
                return this.host.jqxTree('width');
            }
        };
        // jqxTreeComponent functions
        jqxTreeComponent.prototype.addBefore = function (item, id) {
            this.host.jqxTree('addBefore', item, id);
        };
        jqxTreeComponent.prototype.addAfter = function (item, id) {
            this.host.jqxTree('addAfter', item, id);
        };
        jqxTreeComponent.prototype.addTo = function (item, id) {
            this.host.jqxTree('addTo', item, id);
        };
        jqxTreeComponent.prototype.clear = function () {
            this.host.jqxTree('clear');
        };
        jqxTreeComponent.prototype.checkAll = function () {
            this.host.jqxTree('checkAll');
        };
        jqxTreeComponent.prototype.checkItem = function (item, checked) {
            this.host.jqxTree('checkItem', item, checked);
        };
        jqxTreeComponent.prototype.collapseAll = function () {
            this.host.jqxTree('collapseAll');
        };
        jqxTreeComponent.prototype.collapseItem = function (item) {
            this.host.jqxTree('collapseItem', item);
        };
        jqxTreeComponent.prototype.destroy = function () {
            this.host.jqxTree('destroy');
        };
        jqxTreeComponent.prototype.disableItem = function (item) {
            this.host.jqxTree('disableItem', item);
        };
        jqxTreeComponent.prototype.ensureVisible = function (item) {
            this.host.jqxTree('ensureVisible', item);
        };
        jqxTreeComponent.prototype.enableItem = function (item) {
            this.host.jqxTree('enableItem', item);
        };
        jqxTreeComponent.prototype.enableAll = function () {
            this.host.jqxTree('enableAll');
        };
        jqxTreeComponent.prototype.expandAll = function () {
            this.host.jqxTree('expandAll');
        };
        jqxTreeComponent.prototype.expandItem = function (item) {
            this.host.jqxTree('expandItem', item);
        };
        jqxTreeComponent.prototype.focus = function () {
            this.host.jqxTree('focus');
        };
        jqxTreeComponent.prototype.getCheckedItems = function () {
            return this.host.jqxTree('getCheckedItems');
        };
        jqxTreeComponent.prototype.getUncheckedItems = function () {
            return this.host.jqxTree('getUncheckedItems');
        };
        jqxTreeComponent.prototype.getItems = function () {
            return this.host.jqxTree('getItems');
        };
        jqxTreeComponent.prototype.getItem = function (element) {
            return this.host.jqxTree('getItem', element);
        };
        jqxTreeComponent.prototype.getSelectedItem = function () {
            return this.host.jqxTree('getSelectedItem');
        };
        jqxTreeComponent.prototype.getPrevItem = function (item) {
            return this.host.jqxTree('getPrevItem', item);
        };
        jqxTreeComponent.prototype.getNextItem = function (item) {
            return this.host.jqxTree('getNextItem', item);
        };
        jqxTreeComponent.prototype.hitTest = function (left, top) {
            return this.host.jqxTree('hitTest', left, top);
        };
        jqxTreeComponent.prototype.removeItem = function (item) {
            this.host.jqxTree('removeItem', item);
        };
        jqxTreeComponent.prototype.render = function () {
            this.host.jqxTree('render');
        };
        jqxTreeComponent.prototype.refresh = function () {
            this.host.jqxTree('refresh');
        };
        jqxTreeComponent.prototype.selectItem = function (item) {
            this.host.jqxTree('selectItem', item);
        };
        jqxTreeComponent.prototype.uncheckAll = function () {
            this.host.jqxTree('uncheckAll');
        };
        jqxTreeComponent.prototype.uncheckItem = function (item) {
            this.host.jqxTree('uncheckItem', item);
        };
        jqxTreeComponent.prototype.updateItem = function (item, newItem) {
            this.host.jqxTree('updateItem', item, newItem);
        };
        jqxTreeComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxTree('val', value);
            }
            else {
                return this.host.jqxTree('val');
            }
        };
        jqxTreeComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('added', function (eventData) { _this.onAdded.emit(eventData); });
            this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
            this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
            this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
            this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
            this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
            this.host.on('itemClick', function (eventData) { _this.onItemClick.emit(eventData); });
            this.host.on('removed', function (eventData) { _this.onRemoved.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        };
        __decorate([
            core.Input('animationShowDuration'),
            __metadata("design:type", Number)
        ], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
        __decorate([
            core.Input('animationHideDuration'),
            __metadata("design:type", Number)
        ], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
        __decorate([
            core.Input('allowDrag'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
        __decorate([
            core.Input('allowDrop'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
        __decorate([
            core.Input('checkboxes'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
        __decorate([
            core.Input('dragStart'),
            __metadata("design:type", Function)
        ], jqxTreeComponent.prototype, "attrDragStart", void 0);
        __decorate([
            core.Input('dragEnd'),
            __metadata("design:type", Function)
        ], jqxTreeComponent.prototype, "attrDragEnd", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('easing'),
            __metadata("design:type", String)
        ], jqxTreeComponent.prototype, "attrEasing", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('hasThreeStates'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
        __decorate([
            core.Input('incrementalSearch'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
        __decorate([
            core.Input('keyboardNavigation'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('toggleIndicatorSize'),
            __metadata("design:type", Number)
        ], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
        __decorate([
            core.Input('toggleMode'),
            __metadata("design:type", String)
        ], jqxTreeComponent.prototype, "attrToggleMode", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxTreeComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxTreeComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onAdded", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onCheckChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onItemClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onRemoved", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxTreeComponent.prototype, "onSelect", void 0);
        jqxTreeComponent = __decorate([
            core.Component({
                selector: 'jqxTree',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxTreeComponent);
        return jqxTreeComponent;
    }()); //jqxTreeComponent

    var jqxTreeModule = /** @class */ (function () {
        function jqxTreeModule() {
        }
        jqxTreeModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxTreeComponent],
                exports: [jqxTreeComponent]
            })
        ], jqxTreeModule);
        return jqxTreeModule;
    }());

    exports.jqxTreeComponent = jqxTreeComponent;
    exports.jqxTreeModule = jqxTreeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxtree.umd.js.map
