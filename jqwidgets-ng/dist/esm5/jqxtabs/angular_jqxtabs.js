import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtabs from '../../jqwidgets-scripts/jqwidgets/jqxtabs';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTabsComponent = /** @class */ (function () {
    function jqxTabsComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
        // jqxTabsComponent events
        this.onAdd = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelecting = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onTabclick = new EventEmitter();
        this.onUnselecting = new EventEmitter();
        this.onUnselected = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxTabsComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    ;
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
    tslib_1.__decorate([
        Input('animationType'),
        tslib_1.__metadata("design:type", String)
    ], jqxTabsComponent.prototype, "attrAnimationType", void 0);
    tslib_1.__decorate([
        Input('autoHeight'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrAutoHeight", void 0);
    tslib_1.__decorate([
        Input('closeButtonSize'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTabsComponent.prototype, "attrCloseButtonSize", void 0);
    tslib_1.__decorate([
        Input('collapsible'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrCollapsible", void 0);
    tslib_1.__decorate([
        Input('contentTransitionDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTabsComponent.prototype, "attrContentTransitionDuration", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('enabledHover'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrEnabledHover", void 0);
    tslib_1.__decorate([
        Input('enableScrollAnimation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrEnableScrollAnimation", void 0);
    tslib_1.__decorate([
        Input('enableDropAnimation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrEnableDropAnimation", void 0);
    tslib_1.__decorate([
        Input('initTabContent'),
        tslib_1.__metadata("design:type", Function)
    ], jqxTabsComponent.prototype, "attrInitTabContent", void 0);
    tslib_1.__decorate([
        Input('keyboardNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrKeyboardNavigation", void 0);
    tslib_1.__decorate([
        Input('next'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "attrNext", void 0);
    tslib_1.__decorate([
        Input('previous'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "attrPrevious", void 0);
    tslib_1.__decorate([
        Input('position'),
        tslib_1.__metadata("design:type", String)
    ], jqxTabsComponent.prototype, "attrPosition", void 0);
    tslib_1.__decorate([
        Input('reorder'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrReorder", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('scrollAnimationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTabsComponent.prototype, "attrScrollAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('selectedItem'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTabsComponent.prototype, "attrSelectedItem", void 0);
    tslib_1.__decorate([
        Input('selectionTracker'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrSelectionTracker", void 0);
    tslib_1.__decorate([
        Input('scrollable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrScrollable", void 0);
    tslib_1.__decorate([
        Input('scrollPosition'),
        tslib_1.__metadata("design:type", String)
    ], jqxTabsComponent.prototype, "attrScrollPosition", void 0);
    tslib_1.__decorate([
        Input('scrollStep'),
        tslib_1.__metadata("design:type", Number)
    ], jqxTabsComponent.prototype, "attrScrollStep", void 0);
    tslib_1.__decorate([
        Input('showCloseButtons'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "attrShowCloseButtons", void 0);
    tslib_1.__decorate([
        Input('toggleMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxTabsComponent.prototype, "attrToggleMode", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxTabsComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxTabsComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onAdd", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onCollapsed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onDragEnd", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onExpanded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onRemoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onSelecting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onSelected", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onTabclick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onUnselecting", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxTabsComponent.prototype, "onUnselected", void 0);
    jqxTabsComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxTabs',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxTabsComponent);
    return jqxTabsComponent;
}()); //jqxTabsComponent
export { jqxTabsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0YWJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRhYnMvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFxQ0csMEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsMkJBQTJCLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyx1QkFBdUIsRUFBQyxxQkFBcUIsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyx5QkFBeUIsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBOGI3YSwwQkFBMEI7UUFDaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFF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O0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzt5REFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7O3VEQUFnQztJQUMvQjtRQUFULE1BQU0sRUFBRTs7d0RBQWlDO0lBQ2hDO1FBQVQsTUFBTSxFQUFFOzt1REFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7O3lEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7d0RBQWlDO0lBQ2hDO1FBQVQsTUFBTSxFQUFFOzt3REFBaUM7SUFDaEM7UUFBVCxNQUFNLEVBQUU7OzJEQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTs7MERBQW1DO0lBemVsQyxnQkFBZ0I7UUFMNUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHNDQUFzQztTQUNuRCxDQUFDO2lEQXVDK0IsVUFBVTtPQXJDOUIsZ0JBQWdCLENBeWY1QjtJQUFELHVCQUFDO0NBQUEsQUF6ZkQsSUF5ZkMsQ0FBQyxrQkFBa0I7U0F6ZlAsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhUYWJzJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhdXRvSGVpZ2h0JykgYXR0ckF1dG9IZWlnaHQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nsb3NlQnV0dG9uU2l6ZScpIGF0dHJDbG9zZUJ1dHRvblNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgnY29sbGFwc2libGUnKSBhdHRyQ29sbGFwc2libGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbnRlbnRUcmFuc2l0aW9uRHVyYXRpb24nKSBhdHRyQ29udGVudFRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlZEhvdmVyJykgYXR0ckVuYWJsZWRIb3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlU2Nyb2xsQW5pbWF0aW9uJykgYXR0ckVuYWJsZVNjcm9sbEFuaW1hdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlRHJvcEFuaW1hdGlvbicpIGF0dHJFbmFibGVEcm9wQW5pbWF0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdpbml0VGFiQ29udGVudCcpIGF0dHJJbml0VGFiQ29udGVudDogKHRhYj86IG51bWJlcikgPT4gdm9pZDtcbiAgIEBJbnB1dCgna2V5Ym9hcmROYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbmV4dCcpIGF0dHJOZXh0OiBhbnk7XG4gICBASW5wdXQoJ3ByZXZpb3VzJykgYXR0clByZXZpb3VzOiBhbnk7XG4gICBASW5wdXQoJ3Bvc2l0aW9uJykgYXR0clBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Jlb3JkZXInKSBhdHRyUmVvcmRlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyU2Nyb2xsQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnc2VsZWN0ZWRJdGVtJykgYXR0clNlbGVjdGVkSXRlbTogbnVtYmVyO1xuICAgQElucHV0KCdzZWxlY3Rpb25UcmFja2VyJykgYXR0clNlbGVjdGlvblRyYWNrZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Njcm9sbGFibGUnKSBhdHRyU2Nyb2xsYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsUG9zaXRpb24nKSBhdHRyU2Nyb2xsUG9zaXRpb246IHN0cmluZztcbiAgIEBJbnB1dCgnc2Nyb2xsU3RlcCcpIGF0dHJTY3JvbGxTdGVwOiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3dDbG9zZUJ1dHRvbnMnKSBhdHRyU2hvd0Nsb3NlQnV0dG9uczogYm9vbGVhbjtcbiAgIEBJbnB1dCgndG9nZ2xlTW9kZScpIGF0dHJUb2dnbGVNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uVHlwZScsJ2F1dG9IZWlnaHQnLCdjbG9zZUJ1dHRvblNpemUnLCdjb2xsYXBzaWJsZScsJ2NvbnRlbnRUcmFuc2l0aW9uRHVyYXRpb24nLCdkaXNhYmxlZCcsJ2VuYWJsZWRIb3ZlcicsJ2VuYWJsZVNjcm9sbEFuaW1hdGlvbicsJ2VuYWJsZURyb3BBbmltYXRpb24nLCdoZWlnaHQnLCdpbml0VGFiQ29udGVudCcsJ2tleWJvYXJkTmF2aWdhdGlvbicsJ25leHQnLCdwcmV2aW91cycsJ3Bvc2l0aW9uJywncmVvcmRlcicsJ3J0bCcsJ3Njcm9sbEFuaW1hdGlvbkR1cmF0aW9uJywnc2VsZWN0ZWRJdGVtJywnc2VsZWN0aW9uVHJhY2tlcicsJ3Njcm9sbGFibGUnLCdzY3JvbGxQb3NpdGlvbicsJ3Njcm9sbFN0ZXAnLCdzaG93Q2xvc2VCdXR0b25zJywndG9nZ2xlTW9kZScsJ3RoZW1lJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VGFicztcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUYWJzKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRhYnModGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnModGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFRhYnMnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhUYWJzQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdhbmltYXRpb25UeXBlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9IZWlnaHQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2F1dG9IZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2F1dG9IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VCdXR0b25TaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnY2xvc2VCdXR0b25TaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdjbG9zZUJ1dHRvblNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sbGFwc2libGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2NvbGxhcHNpYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdjb2xsYXBzaWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250ZW50VHJhbnNpdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnY29udGVudFRyYW5zaXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnY29udGVudFRyYW5zaXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWRIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnZW5hYmxlZEhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGVkSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGVTY3JvbGxBbmltYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZVNjcm9sbEFuaW1hdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVEcm9wQW5pbWF0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGVEcm9wQW5pbWF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGVEcm9wQW5pbWF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluaXRUYWJDb250ZW50KGFyZz86ICh0YWI/OiBudW1iZXIpID0+IHZvaWQpOiAodGFiPzogbnVtYmVyKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdpbml0VGFiQ29udGVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnaW5pdFRhYkNvbnRlbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAga2V5Ym9hcmROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdrZXlib2FyZE5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBuZXh0KGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnbmV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnbmV4dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcmV2aW91cyhhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3ByZXZpb3VzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdwcmV2aW91cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdwb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW9yZGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdyZW9yZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdyZW9yZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnc2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0ZWRJdGVtKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnc2VsZWN0ZWRJdGVtJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdzZWxlY3RlZEl0ZW0nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uVHJhY2tlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnc2VsZWN0aW9uVHJhY2tlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnc2VsZWN0aW9uVHJhY2tlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbFBvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VGFicygnc2Nyb2xsUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Njcm9sbFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbFN0ZXAoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxTdGVwJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdzY3JvbGxTdGVwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dDbG9zZUJ1dHRvbnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3Nob3dDbG9zZUJ1dHRvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3Nob3dDbG9zZUJ1dHRvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9nZ2xlTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3RvZ2dsZU1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ3RvZ2dsZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUYWJzQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkQXQoaW5kZXg6IG51bWJlciwgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnYWRkQXQnLCBpbmRleCwgdGl0bGUsIGNvbnRlbnQpO1xuICAgfVxuXG4gICBhZGRGaXJzdChodG1sRWxlbWVudDE6IGFueSwgaHRtbEVsZW1lbnQyOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdhZGRGaXJzdCcsIGh0bWxFbGVtZW50MSwgaHRtbEVsZW1lbnQyKTtcbiAgIH1cblxuICAgYWRkTGFzdChodG1sRWxlbWVudDE6IGFueSwgaHRtbEVsZW1lbnQyPzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnYWRkTGFzdCcsIGh0bWxFbGVtZW50MSwgaHRtbEVsZW1lbnQyKTtcbiAgIH1cblxuICAgY29sbGFwc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnY29sbGFwc2UnKTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGRpc2FibGVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZGlzYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZW5zdXJlVmlzaWJsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZW5zdXJlVmlzaWJsZScsIGluZGV4KTtcbiAgIH1cblxuICAgZW5hYmxlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ2VuYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBleHBhbmQoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZXhwYW5kJyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdlbmFibGUnKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0VGl0bGVBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VGFicygnZ2V0VGl0bGVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgZ2V0Q29udGVudEF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdnZXRDb250ZW50QXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGdldERpc2FibGVkVGFic0NvdW50KCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRhYnMoJ2dldERpc2FibGVkVGFic0NvdW50Jyk7XG4gICB9XG5cbiAgIGhpZGVDbG9zZUJ1dHRvbkF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdoaWRlQ2xvc2VCdXR0b25BdCcsIGluZGV4KTtcbiAgIH1cblxuICAgaGlkZUFsbENsb3NlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdoaWRlQWxsQ2xvc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIGxlbmd0aCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCdsZW5ndGgnKTtcbiAgIH1cblxuICAgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3JlbW92ZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICByZW1vdmVGaXJzdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdyZW1vdmVGaXJzdCcpO1xuICAgfVxuXG4gICByZW1vdmVMYXN0KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRhYnMoJ3JlbW92ZUxhc3QnKTtcbiAgIH1cblxuICAgc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzZWxlY3QnLCBpbmRleCk7XG4gICB9XG5cbiAgIHNldENvbnRlbnRBdChpbmRleDogbnVtYmVyLCBodG1sRWxlbWVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnc2V0Q29udGVudEF0JywgaW5kZXgsIGh0bWxFbGVtZW50KTtcbiAgIH1cblxuICAgc2V0VGl0bGVBdChpbmRleDogbnVtYmVyLCBodG1sRWxlbWVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VGFicygnc2V0VGl0bGVBdCcsIGluZGV4LCBodG1sRWxlbWVudCk7XG4gICB9XG5cbiAgIHNob3dDbG9zZUJ1dHRvbkF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzaG93Q2xvc2VCdXR0b25BdCcsIGluZGV4KTtcbiAgIH1cblxuICAgc2hvd0FsbENsb3NlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUYWJzKCdzaG93QWxsQ2xvc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IHN0cmluZyk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUYWJzKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4VGFic0NvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FeHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TZWxlY3RpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblRhYmNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVW5zZWxlY3RpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYWRkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BZGQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sbGFwc2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ1N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ0VuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ0VuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdleHBhbmRlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRXhwYW5kZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVtb3ZlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVtb3ZlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzZWxlY3RpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNlbGVjdGluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzZWxlY3RlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2VsZWN0ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndGFiY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblRhYmNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Vuc2VsZWN0aW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdGluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd1bnNlbGVjdGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdGVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhUYWJzQ29tcG9uZW50XG4iXX0=