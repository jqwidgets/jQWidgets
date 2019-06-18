import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxMenuComponent = /** @class */ (function () {
    function jqxMenuComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new EventEmitter();
        this.onItemclick = new EventEmitter();
        this.onShown = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxMenuComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxMenuComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxMenuComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxMenuComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxMenuComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxMenuComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxMenuComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
    };
    jqxMenuComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxMenuComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxMenuComponent.prototype.setOptions = function (options) {
        this.host.jqxMenu('setOptions', options);
    };
    // jqxMenuComponent properties
    jqxMenuComponent.prototype.animationShowDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    };
    jqxMenuComponent.prototype.animationHideDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    };
    jqxMenuComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    };
    jqxMenuComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    };
    jqxMenuComponent.prototype.autoCloseInterval = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    };
    jqxMenuComponent.prototype.autoSizeMainItems = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    };
    jqxMenuComponent.prototype.autoCloseOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    };
    jqxMenuComponent.prototype.autoOpenPopup = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    };
    jqxMenuComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    };
    jqxMenuComponent.prototype.autoCloseOnMouseLeave = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    };
    jqxMenuComponent.prototype.clickToOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    };
    jqxMenuComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    };
    jqxMenuComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    };
    jqxMenuComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    };
    jqxMenuComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    };
    jqxMenuComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    };
    jqxMenuComponent.prototype.minimizeWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    };
    jqxMenuComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    };
    jqxMenuComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    };
    jqxMenuComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    };
    jqxMenuComponent.prototype.showTopLevelArrows = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    };
    jqxMenuComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    };
    jqxMenuComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    };
    jqxMenuComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    };
    // jqxMenuComponent functions
    jqxMenuComponent.prototype.closeItem = function (itemID) {
        this.host.jqxMenu('closeItem', itemID);
    };
    jqxMenuComponent.prototype.close = function () {
        this.host.jqxMenu('close');
    };
    jqxMenuComponent.prototype.disable = function (itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    };
    jqxMenuComponent.prototype.destroy = function () {
        this.host.jqxMenu('destroy');
    };
    jqxMenuComponent.prototype.focus = function () {
        this.host.jqxMenu('focus');
    };
    jqxMenuComponent.prototype.minimize = function () {
        this.host.jqxMenu('minimize');
    };
    jqxMenuComponent.prototype.open = function (left, top) {
        this.host.jqxMenu('open', left, top);
    };
    jqxMenuComponent.prototype.openItem = function (itemID) {
        this.host.jqxMenu('openItem', itemID);
    };
    jqxMenuComponent.prototype.restore = function () {
        this.host.jqxMenu('restore');
    };
    jqxMenuComponent.prototype.setItemOpenDirection = function (item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    };
    jqxMenuComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('closed', function (eventData) { _this.onClosed.emit(eventData); });
        this.host.on('itemclick', function (eventData) { _this.onItemclick.emit(eventData); });
        this.host.on('shown', function (eventData) { _this.onShown.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('animationShowDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxMenuComponent.prototype, "attrAnimationShowDuration", void 0);
    tslib_1.__decorate([
        Input('animationHideDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxMenuComponent.prototype, "attrAnimationHideDuration", void 0);
    tslib_1.__decorate([
        Input('animationHideDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxMenuComponent.prototype, "attrAnimationHideDelay", void 0);
    tslib_1.__decorate([
        Input('animationShowDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxMenuComponent.prototype, "attrAnimationShowDelay", void 0);
    tslib_1.__decorate([
        Input('autoCloseInterval'),
        tslib_1.__metadata("design:type", Number)
    ], jqxMenuComponent.prototype, "attrAutoCloseInterval", void 0);
    tslib_1.__decorate([
        Input('autoSizeMainItems'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrAutoSizeMainItems", void 0);
    tslib_1.__decorate([
        Input('autoCloseOnClick'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrAutoCloseOnClick", void 0);
    tslib_1.__decorate([
        Input('autoOpenPopup'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrAutoOpenPopup", void 0);
    tslib_1.__decorate([
        Input('autoOpen'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrAutoOpen", void 0);
    tslib_1.__decorate([
        Input('autoCloseOnMouseLeave'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrAutoCloseOnMouseLeave", void 0);
    tslib_1.__decorate([
        Input('clickToOpen'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrClickToOpen", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('enableHover'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrEnableHover", void 0);
    tslib_1.__decorate([
        Input('easing'),
        tslib_1.__metadata("design:type", String)
    ], jqxMenuComponent.prototype, "attrEasing", void 0);
    tslib_1.__decorate([
        Input('keyboardNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrKeyboardNavigation", void 0);
    tslib_1.__decorate([
        Input('minimizeWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "attrMinimizeWidth", void 0);
    tslib_1.__decorate([
        Input('mode'),
        tslib_1.__metadata("design:type", String)
    ], jqxMenuComponent.prototype, "attrMode", void 0);
    tslib_1.__decorate([
        Input('popupZIndex'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "attrPopupZIndex", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('showTopLevelArrows'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "attrShowTopLevelArrows", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxMenuComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxMenuComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "onClosed", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "onItemclick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxMenuComponent.prototype, "onShown", void 0);
    jqxMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxMenu',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxMenuComponent);
    return jqxMenuComponent;
}()); //jqxMenuComponent
export { jqxMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhtZW51LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeG1lbnUvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeG1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFrQ0csMEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsbUJBQW1CLEVBQUMsbUJBQW1CLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxvQkFBb0IsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBOFZ4WSwwQkFBMEI7UUFDaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBM1ZwQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDO0lBRUYsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0csSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO2dCQUU5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEVBQUU7NEJBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckY7d0JBQ0QsSUFBSSxRQUFRLEVBQUU7NEJBQ1gsT0FBTyxLQUFLLENBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDdEQsU0FBUztxQkFDWDtvQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQ3hEO2lCQUNIO2FBQ0g7U0FDSDtJQUNKLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksU0FBYyxFQUFFLFNBQWM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Y7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNsQixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLFFBQXFCLEVBQUUsT0FBb0I7O1FBQ3BELElBQUksT0FBTyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixDQUFBLEtBQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQSxDQUFDLEdBQUcsNEJBQUksT0FBTyxHQUFFO1NBQ25DO1FBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxRQUFxQixFQUFFLE9BQW9CO1FBQ25ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsT0FBYTtRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPO1NBQ1Q7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDbkQ7YUFDSTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFL0UsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFhO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDRyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQThCO0lBQzlCLGdEQUFxQixHQUFyQixVQUFzQixHQUFZO1FBQy9CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0osQ0FBQztJQUVELGdEQUFxQixHQUFyQixVQUFzQixHQUFZO1FBQy9CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0osQ0FBQztJQUVELDZDQUFrQixHQUFsQixVQUFtQixHQUFZO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQUVELDZDQUFrQixHQUFsQixVQUFtQixHQUFZO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQUVELDRDQUFpQixHQUFqQixVQUFrQixHQUFZO1FBQzNCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0osQ0FBQztJQUVELDRDQUFpQixHQUFqQixVQUFrQixHQUFhO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0osQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixHQUFhO1FBQzNCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0osQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxHQUFhO1FBQ3hCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztJQUNKLENBQUM7SUFFRCxnREFBcUIsR0FBckIsVUFBc0IsR0FBYTtRQUNoQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNyRDtJQUNKLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksR0FBYTtRQUN0QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNDO0lBQ0osQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxHQUFhO1FBQ25CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEdBQWE7UUFDdEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQztJQUNKLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sR0FBWTtRQUNoQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0osQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxHQUFxQjtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0osQ0FBQztJQUVELDZDQUFrQixHQUFsQixVQUFtQixHQUFhO1FBQzdCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxHQUFxQjtRQUNoQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0osQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxHQUFZO1FBQ2QsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNKLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksR0FBcUI7UUFDOUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQztJQUNKLENBQUM7SUFFRCw4QkFBRyxHQUFILFVBQUksR0FBYTtRQUNkLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSixDQUFDO0lBRUQsNkNBQWtCLEdBQWxCLFVBQW1CLEdBQWE7UUFDN0IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDbEQ7SUFDSixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEdBQVM7UUFDYixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0osQ0FBQztJQUVELGdDQUFLLEdBQUwsVUFBTSxHQUFZO1FBQ2YsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQztJQUNKLENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sR0FBcUI7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQztJQUNKLENBQUM7SUFHRCw2QkFBNkI7SUFDN0Isb0NBQVMsR0FBVCxVQUFVLE1BQXVCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsTUFBdUIsRUFBRSxLQUFjO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxJQUFZLEVBQUUsR0FBVztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsTUFBdUI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELCtDQUFvQixHQUFwQixVQUFxQixJQUFxQixFQUFFLG1CQUEyQixFQUFFLGlCQUF5QjtRQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBUUQseUNBQWMsR0FBZDtRQUFBLGlCQUlDO1FBSEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQWxZK0I7UUFBL0IsS0FBSyxDQUFDLHVCQUF1QixDQUFDOzt1RUFBbUM7SUFDbEM7UUFBL0IsS0FBSyxDQUFDLHVCQUF1QixDQUFDOzt1RUFBbUM7SUFDckM7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztvRUFBZ0M7SUFDL0I7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztvRUFBZ0M7SUFDaEM7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzttRUFBK0I7SUFDOUI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzttRUFBZ0M7SUFDaEM7UUFBMUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDOztrRUFBK0I7SUFDakM7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7K0RBQTRCO0lBQ2hDO1FBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7OzBEQUF1QjtJQUNUO1FBQS9CLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7dUVBQW9DO0lBQzdDO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7OzZEQUEwQjtJQUM1QjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzswREFBdUI7SUFDbkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7NkRBQTBCO0lBQzlCO1FBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7O3dEQUFvQjtJQUNQO1FBQTVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7b0VBQWlDO0lBQ3JDO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7OytEQUFvQztJQUM1QztRQUFkLEtBQUssQ0FBQyxNQUFNLENBQUM7O3NEQUFrQjtJQUNWO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7OzZEQUFrQztJQUN6QztRQUFiLEtBQUssQ0FBQyxLQUFLLENBQUM7O3FEQUFrQjtJQUNGO1FBQTVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7b0VBQWlDO0lBQzVDO1FBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7O3dEQUFpQjtJQUNqQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7O3VEQUFtQjtJQUNsQjtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7O3VEQUE0QjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBNkI7SUFFdkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7d0RBQTRCO0lBaVd2QztRQUFULE1BQU0sRUFBRTs7c0RBQStCO0lBQzlCO1FBQVQsTUFBTSxFQUFFOzt5REFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7O3FEQUE4QjtJQTlYN0IsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxzQ0FBc0M7U0FDbkQsQ0FBQztpREFvQytCLFVBQVU7T0FsQzlCLGdCQUFnQixDQXNZNUI7SUFBRCx1QkFBQztDQUFBLEFBdFlELElBc1lDLENBQUMsa0JBQWtCO1NBdFlQLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4TWVudScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uU2hvd0R1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicpIGF0dHJBbmltYXRpb25IaWRlRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYW5pbWF0aW9uSGlkZURlbGF5JykgYXR0ckFuaW1hdGlvbkhpZGVEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RGVsYXknKSBhdHRyQW5pbWF0aW9uU2hvd0RlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9DbG9zZUludGVydmFsJykgYXR0ckF1dG9DbG9zZUludGVydmFsOiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9TaXplTWFpbkl0ZW1zJykgYXR0ckF1dG9TaXplTWFpbkl0ZW1zOiBib29sZWFuO1xuICAgQElucHV0KCdhdXRvQ2xvc2VPbkNsaWNrJykgYXR0ckF1dG9DbG9zZU9uQ2xpY2s6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9PcGVuUG9wdXAnKSBhdHRyQXV0b09wZW5Qb3B1cDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b09wZW4nKSBhdHRyQXV0b09wZW46IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScpIGF0dHJBdXRvQ2xvc2VPbk1vdXNlTGVhdmU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NsaWNrVG9PcGVuJykgYXR0ckNsaWNrVG9PcGVuOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Vhc2luZycpIGF0dHJFYXNpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgna2V5Ym9hcmROYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbWluaW1pemVXaWR0aCcpIGF0dHJNaW5pbWl6ZVdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21vZGUnKSBhdHRyTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdwb3B1cFpJbmRleCcpIGF0dHJQb3B1cFpJbmRleDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93VG9wTGV2ZWxBcnJvd3MnKSBhdHRyU2hvd1RvcExldmVsQXJyb3dzOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJywnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJywnYW5pbWF0aW9uSGlkZURlbGF5JywnYW5pbWF0aW9uU2hvd0RlbGF5JywnYXV0b0Nsb3NlSW50ZXJ2YWwnLCdhdXRvU2l6ZU1haW5JdGVtcycsJ2F1dG9DbG9zZU9uQ2xpY2snLCdhdXRvT3BlblBvcHVwJywnYXV0b09wZW4nLCdhdXRvQ2xvc2VPbk1vdXNlTGVhdmUnLCdjbGlja1RvT3BlbicsJ2Rpc2FibGVkJywnZW5hYmxlSG92ZXInLCdlYXNpbmcnLCdoZWlnaHQnLCdrZXlib2FyZE5hdmlnYXRpb24nLCdtaW5pbWl6ZVdpZHRoJywnbW9kZScsJ3BvcHVwWkluZGV4JywncnRsJywnc2hvd1RvcExldmVsQXJyb3dzJywnc291cmNlJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhNZW51O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4TWVudSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4TWVudScsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeE1lbnVDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uU2hvd0R1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhbmltYXRpb25TaG93RHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uSGlkZUR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhbmltYXRpb25IaWRlRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uSGlkZURlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uSGlkZURlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhbmltYXRpb25IaWRlRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uU2hvd0RlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYW5pbWF0aW9uU2hvd0RlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhbmltYXRpb25TaG93RGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0Nsb3NlSW50ZXJ2YWwoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VJbnRlcnZhbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlSW50ZXJ2YWwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b1NpemVNYWluSXRlbXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9TaXplTWFpbkl0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvU2l6ZU1haW5JdGVtcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvQ2xvc2VPbkNsaWNrKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VPbkNsaWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VPbkNsaWNrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9PcGVuUG9wdXAoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9PcGVuUG9wdXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9PcGVuUG9wdXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b09wZW4oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9PcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvQ2xvc2VPbk1vdXNlTGVhdmUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlT25Nb3VzZUxlYXZlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsaWNrVG9PcGVuKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdjbGlja1RvT3BlbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnY2xpY2tUb09wZW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVhc2luZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Vhc2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnZWFzaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGtleWJvYXJkTmF2aWdhdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgna2V5Ym9hcmROYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdrZXlib2FyZE5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluaW1pemVXaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ21pbmltaXplV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ21pbmltaXplV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ21vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ21vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9wdXBaSW5kZXgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdwb3B1cFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgncG9wdXBaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93VG9wTGV2ZWxBcnJvd3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3Nob3dUb3BMZXZlbEFycm93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnc2hvd1RvcExldmVsQXJyb3dzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvdXJjZShhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4TWVudUNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsb3NlSXRlbShpdGVtSUQ6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Nsb3NlSXRlbScsIGl0ZW1JRCk7XG4gICB9XG5cbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Nsb3NlJyk7XG4gICB9XG5cbiAgIGRpc2FibGUoaXRlbUlEOiBudW1iZXIgfCBzdHJpbmcsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnZGlzYWJsZScsIGl0ZW1JRCwgdmFsdWUpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnZm9jdXMnKTtcbiAgIH1cblxuICAgbWluaW1pemUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnbWluaW1pemUnKTtcbiAgIH1cblxuICAgb3BlbihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnb3BlbicsIGxlZnQsIHRvcCk7XG4gICB9XG5cbiAgIG9wZW5JdGVtKGl0ZW1JRDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TWVudSgnb3Blbkl0ZW0nLCBpdGVtSUQpO1xuICAgfVxuXG4gICByZXN0b3JlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3Jlc3RvcmUnKTtcbiAgIH1cblxuICAgc2V0SXRlbU9wZW5EaXJlY3Rpb24oaXRlbTogbnVtYmVyIHwgc3RyaW5nLCBob3Jpem9udGFsZGlyZWN0aW9uOiBzdHJpbmcsIHZlcnRpY2FsZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdzZXRJdGVtT3BlbkRpcmVjdGlvbicsIGl0ZW0sIGhvcml6b250YWxkaXJlY3Rpb24sIHZlcnRpY2FsZGlyZWN0aW9uKTtcbiAgIH1cblxuXG4gICAvLyBqcXhNZW51Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbWNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbG9zZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNsb3NlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdpdGVtY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkl0ZW1jbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzaG93bicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU2hvd24uZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeE1lbnVDb21wb25lbnRcbiJdfQ==