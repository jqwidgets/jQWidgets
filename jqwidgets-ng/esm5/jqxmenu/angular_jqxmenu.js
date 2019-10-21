import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxmenu';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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
    jqxMenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
