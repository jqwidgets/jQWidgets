import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
import * as jqxtree from '../../jqwidgets-scripts/jqwidgets/jqxtree';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTreeComponent = /** @class */ (function () {
    function jqxTreeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxTreeComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    ;
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
    tslib_1.__decorate([
        Input('animationShowDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
    tslib_1.__decorate([
        Input('animationHideDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
    tslib_1.__decorate([
        Input('allowDrag'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
    tslib_1.__decorate([
        Input('allowDrop'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
    tslib_1.__decorate([
        Input('checkboxes'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
    tslib_1.__decorate([
        Input('dragStart'),
        tslib_1.__metadata("design:type", Function)
    ], jqxTreeComponent.prototype, "attrDragStart", void 0);
    tslib_1.__decorate([
        Input('dragEnd'),
        tslib_1.__metadata("design:type", Function)
    ], jqxTreeComponent.prototype, "attrDragEnd", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('easing'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeComponent.prototype, "attrEasing", void 0);
    tslib_1.__decorate([
        Input('enableHover'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrEnableHover", void 0);
    tslib_1.__decorate([
        Input('hasThreeStates'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
    tslib_1.__decorate([
        Input('incrementalSearch'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
    tslib_1.__decorate([
        Input('keyboardNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('toggleIndicatorSize'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
    tslib_1.__decorate([
        Input('toggleMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeComponent.prototype, "attrToggleMode", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxTreeComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTreeComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onAdded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onCheckChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onItemClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onRemoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTreeComponent.prototype, "onSelect", void 0);
    jqxTreeComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxTree',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxTreeComponent);
    return jqxTreeComponent;
}()); //jqxTreeComponent
export { jqxTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRyZWUvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUE4QkcsMEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBMFozUywwQkFBMEI7UUFDaEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE3WnJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENB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QUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBdGMrQjtRQUEvQixLQUFLLENBQUMsdUJBQXVCLENBQUM7O3VFQUFtQztJQUNsQztRQUEvQixLQUFLLENBQUMsdUJBQXVCLENBQUM7O3VFQUFtQztJQUM5QztRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzsyREFBd0I7SUFDdkI7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7MkRBQXdCO0lBQ3RCO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7OzREQUF5QjtJQUN6QjtRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzsyREFBbUU7SUFDcEU7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7eURBQXdQO0lBQ3RQO1FBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7OzBEQUF1QjtJQUN4QjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBb0I7SUFDZDtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzs2REFBMEI7SUFDdEI7UUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztnRUFBNkI7SUFDekI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzttRUFBZ0M7SUFDOUI7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztvRUFBaUM7SUFDL0M7UUFBYixLQUFLLENBQUMsS0FBSyxDQUFDOztxREFBa0I7SUFDZDtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBaUI7SUFDSDtRQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7O3FFQUFpQztJQUN6QztRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzs0REFBd0I7SUFDNUI7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzt1REFBbUI7SUFDbEI7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzt1REFBNEI7SUFDMUI7UUFBaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7d0RBQTZCO0lBRXZCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O3dEQUE0QjtJQTZadkM7UUFBVCxNQUFNLEVBQUU7O3FEQUE4QjtJQUM3QjtRQUFULE1BQU0sRUFBRTs7MkRBQW9DO0lBQ25DO1FBQVQsTUFBTSxFQUFFOzt3REFBaUM7SUFDaEM7UUFBVCxNQUFNLEVBQUU7O3lEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7dURBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOztzREFBK0I7SUFDOUI7UUFBVCxNQUFNLEVBQUU7O3lEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7dURBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOztzREFBK0I7SUE1YjlCLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7aURBZ0MrQixVQUFVO09BOUI5QixnQkFBZ0IsQ0EwYzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFjRCxJQTBjQyxDQUFDLGtCQUFrQjtTQTFjUCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRyZWUnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJykgYXR0ckFuaW1hdGlvblNob3dEdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdhbmltYXRpb25IaWRlRHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uSGlkZUR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2FsbG93RHJhZycpIGF0dHJBbGxvd0RyYWc6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93RHJvcCcpIGF0dHJBbGxvd0Ryb3A6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NoZWNrYm94ZXMnKSBhdHRyQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZHJhZ1N0YXJ0JykgYXR0ckRyYWdTdGFydDogKGl0ZW06IGpxd2lkZ2V0cy5UcmVlRHJhZ1N0YXJ0WydpdGVtJ10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2RyYWdFbmQnKSBhdHRyRHJhZ0VuZDogKGRyYWdJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcmFnSXRlbSddLCBkcm9wSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcEl0ZW0nXSwgYXJncz86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnYXJncyddLCBkcm9wUG9zaXRpb24/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BQb3NpdGlvbiddLCB0cmVlPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWyd0cmVlJ10pID0+IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlYXNpbmcnKSBhdHRyRWFzaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdoYXNUaHJlZVN0YXRlcycpIGF0dHJIYXNUaHJlZVN0YXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaW5jcmVtZW50YWxTZWFyY2gnKSBhdHRySW5jcmVtZW50YWxTZWFyY2g6IGJvb2xlYW47XG4gICBASW5wdXQoJ2tleWJvYXJkTmF2aWdhdGlvbicpIGF0dHJLZXlib2FyZE5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NvdXJjZScpIGF0dHJTb3VyY2U6IGFueTtcbiAgIEBJbnB1dCgndG9nZ2xlSW5kaWNhdG9yU2l6ZScpIGF0dHJUb2dnbGVJbmRpY2F0b3JTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ3RvZ2dsZU1vZGUnKSBhdHRyVG9nZ2xlTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FuaW1hdGlvblNob3dEdXJhdGlvbicsJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicsJ2FsbG93RHJhZycsJ2FsbG93RHJvcCcsJ2NoZWNrYm94ZXMnLCdkcmFnU3RhcnQnLCdkcmFnRW5kJywnZGlzYWJsZWQnLCdlYXNpbmcnLCdlbmFibGVIb3ZlcicsJ2hlaWdodCcsJ2hhc1RocmVlU3RhdGVzJywnaW5jcmVtZW50YWxTZWFyY2gnLCdrZXlib2FyZE5hdmlnYXRpb24nLCdydGwnLCdzb3VyY2UnLCd0b2dnbGVJbmRpY2F0b3JTaXplJywndG9nZ2xlTW9kZScsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VHJlZTtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUcmVlKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRyZWUodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFRyZWUnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhUcmVlQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblNob3dEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvbkhpZGVEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93RHJhZyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYWxsb3dEcmFnJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdhbGxvd0RyYWcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dEcm9wKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhbGxvd0Ryb3AnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2FsbG93RHJvcCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjaGVja2JveGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjaGVja2JveGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdjaGVja2JveGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdTdGFydChhcmc/OiAoaXRlbToganF3aWRnZXRzLlRyZWVEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbik6IChpdGVtOiBqcXdpZGdldHMuVHJlZURyYWdTdGFydFsnaXRlbSddKSA9PiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdkcmFnU3RhcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2RyYWdTdGFydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnRW5kKGFyZz86IChkcmFnSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJhZ0l0ZW0nXSwgZHJvcEl0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BJdGVtJ10sIGFyZ3M/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2FyZ3MnXSwgZHJvcFBvc2l0aW9uPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wUG9zaXRpb24nXSwgdHJlZT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsndHJlZSddKSA9PiBib29sZWFuKTogKGRyYWdJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcmFnSXRlbSddLCBkcm9wSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcEl0ZW0nXSwgYXJncz86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnYXJncyddLCBkcm9wUG9zaXRpb24/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BQb3NpdGlvbiddLCB0cmVlPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWyd0cmVlJ10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2RyYWdFbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2RyYWdFbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlYXNpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdlYXNpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2Vhc2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhhc1RocmVlU3RhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdoYXNUaHJlZVN0YXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnaGFzVGhyZWVTdGF0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2goYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2luY3JlbWVudGFsU2VhcmNoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdpbmNyZW1lbnRhbFNlYXJjaCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZE5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgna2V5Ym9hcmROYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9nZ2xlSW5kaWNhdG9yU2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3RvZ2dsZUluZGljYXRvclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3RvZ2dsZUluZGljYXRvclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9nZ2xlTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3RvZ2dsZU1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3RvZ2dsZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkQmVmb3JlKGl0ZW06IGFueSwgaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FkZEJlZm9yZScsIGl0ZW0sIGlkKTtcbiAgIH1cblxuICAgYWRkQWZ0ZXIoaXRlbTogYW55LCBpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYWRkQWZ0ZXInLCBpdGVtLCBpZCk7XG4gICB9XG5cbiAgIGFkZFRvKGl0ZW06IGFueSwgaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhZGRUbycsIGl0ZW0sIGlkKTtcbiAgIH1cblxuICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY2xlYXInKTtcbiAgIH1cblxuICAgY2hlY2tBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY2hlY2tBbGwnKTtcbiAgIH1cblxuICAgY2hlY2tJdGVtKGl0ZW06IGFueSwgY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NoZWNrSXRlbScsIGl0ZW0sIGNoZWNrZWQpO1xuICAgfVxuXG4gICBjb2xsYXBzZUFsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjb2xsYXBzZUFsbCcpO1xuICAgfVxuXG4gICBjb2xsYXBzZUl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY29sbGFwc2VJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkaXNhYmxlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdkaXNhYmxlSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBlbnN1cmVWaXNpYmxlKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2Vuc3VyZVZpc2libGUnLCBpdGVtKTtcbiAgIH1cblxuICAgZW5hYmxlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdlbmFibGVJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGVuYWJsZUFsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdlbmFibGVBbGwnKTtcbiAgIH1cblxuICAgZXhwYW5kQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2V4cGFuZEFsbCcpO1xuICAgfVxuXG4gICBleHBhbmRJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2V4cGFuZEl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0Q2hlY2tlZEl0ZW1zKCk6IEFycmF5PGpxd2lkZ2V0cy5UcmVlSXRlbT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRDaGVja2VkSXRlbXMnKTtcbiAgIH1cblxuICAgZ2V0VW5jaGVja2VkSXRlbXMoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVJdGVtPiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldFVuY2hlY2tlZEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldEl0ZW1zKCk6IEFycmF5PGpxd2lkZ2V0cy5UcmVlSXRlbT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRJdGVtKGVsZW1lbnQ6IGFueSk6IGpxd2lkZ2V0cy5UcmVlSXRlbSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldEl0ZW0nLCBlbGVtZW50KTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0ZWRJdGVtKCk6IGpxd2lkZ2V0cy5UcmVlSXRlbSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldFNlbGVjdGVkSXRlbScpO1xuICAgfVxuXG4gICBnZXRQcmV2SXRlbShpdGVtOiBhbnkpOiBqcXdpZGdldHMuVHJlZUl0ZW0ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXRQcmV2SXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBnZXROZXh0SXRlbShpdGVtOiBhbnkpOiBqcXdpZGdldHMuVHJlZUl0ZW0ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdnZXROZXh0SXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBoaXRUZXN0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdoaXRUZXN0JywgbGVmdCwgdG9wKTtcbiAgIH1cblxuICAgcmVtb3ZlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdyZW1vdmVJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHNlbGVjdEl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnc2VsZWN0SXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICB1bmNoZWNrQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3VuY2hlY2tBbGwnKTtcbiAgIH1cblxuICAgdW5jaGVja0l0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgndW5jaGVja0l0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgdXBkYXRlSXRlbShpdGVtOiBhbnksIG5ld0l0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3VwZGF0ZUl0ZW0nLCBpdGVtLCBuZXdJdGVtKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhUcmVlQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGVja0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdhZGRlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQWRkZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoZWNrQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnRW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnRW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2V4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2l0ZW1DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JlbW92ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlbW92ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRyZWVDb21wb25lbnRcbiJdfQ==