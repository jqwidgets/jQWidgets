import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxnotification';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxNotificationComponent = /** @class */ (function () {
    function jqxNotificationComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
        // jqxNotificationComponent events
        this.onClose = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxNotificationComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxNotificationComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNotificationComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNotificationComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNotificationComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxNotificationComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxNotificationComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
    };
    jqxNotificationComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNotificationComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNotificationComponent.prototype.setOptions = function (options) {
        this.host.jqxNotification('setOptions', options);
    };
    // jqxNotificationComponent properties
    jqxNotificationComponent.prototype.appendContainer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('appendContainer', arg);
        }
        else {
            return this.host.jqxNotification('appendContainer');
        }
    };
    jqxNotificationComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoOpen', arg);
        }
        else {
            return this.host.jqxNotification('autoOpen');
        }
    };
    jqxNotificationComponent.prototype.animationOpenDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationOpenDelay');
        }
    };
    jqxNotificationComponent.prototype.animationCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationCloseDelay');
        }
    };
    jqxNotificationComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoClose', arg);
        }
        else {
            return this.host.jqxNotification('autoClose');
        }
    };
    jqxNotificationComponent.prototype.autoCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('autoCloseDelay');
        }
    };
    jqxNotificationComponent.prototype.blink = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('blink', arg);
        }
        else {
            return this.host.jqxNotification('blink');
        }
    };
    jqxNotificationComponent.prototype.browserBoundsOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('browserBoundsOffset', arg);
        }
        else {
            return this.host.jqxNotification('browserBoundsOffset');
        }
    };
    jqxNotificationComponent.prototype.closeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('closeOnClick', arg);
        }
        else {
            return this.host.jqxNotification('closeOnClick');
        }
    };
    jqxNotificationComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('disabled', arg);
        }
        else {
            return this.host.jqxNotification('disabled');
        }
    };
    jqxNotificationComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('height', arg);
        }
        else {
            return this.host.jqxNotification('height');
        }
    };
    jqxNotificationComponent.prototype.hoverOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('hoverOpacity', arg);
        }
        else {
            return this.host.jqxNotification('hoverOpacity');
        }
    };
    jqxNotificationComponent.prototype.icon = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('icon', arg);
        }
        else {
            return this.host.jqxNotification('icon');
        }
    };
    jqxNotificationComponent.prototype.notificationOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('notificationOffset', arg);
        }
        else {
            return this.host.jqxNotification('notificationOffset');
        }
    };
    jqxNotificationComponent.prototype.opacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('opacity', arg);
        }
        else {
            return this.host.jqxNotification('opacity');
        }
    };
    jqxNotificationComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('position', arg);
        }
        else {
            return this.host.jqxNotification('position');
        }
    };
    jqxNotificationComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('rtl', arg);
        }
        else {
            return this.host.jqxNotification('rtl');
        }
    };
    jqxNotificationComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('showCloseButton', arg);
        }
        else {
            return this.host.jqxNotification('showCloseButton');
        }
    };
    jqxNotificationComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('template', arg);
        }
        else {
            return this.host.jqxNotification('template');
        }
    };
    jqxNotificationComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('theme', arg);
        }
        else {
            return this.host.jqxNotification('theme');
        }
    };
    jqxNotificationComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('width', arg);
        }
        else {
            return this.host.jqxNotification('width');
        }
    };
    // jqxNotificationComponent functions
    jqxNotificationComponent.prototype.closeAll = function () {
        this.host.jqxNotification('closeAll');
    };
    jqxNotificationComponent.prototype.closeLast = function () {
        this.host.jqxNotification('closeLast');
    };
    jqxNotificationComponent.prototype.destroy = function () {
        this.host.jqxNotification('destroy');
    };
    jqxNotificationComponent.prototype.open = function () {
        this.host.jqxNotification('open');
    };
    jqxNotificationComponent.prototype.refresh = function () {
        this.host.jqxNotification('refresh');
    };
    jqxNotificationComponent.prototype.render = function () {
        this.host.jqxNotification('render');
    };
    jqxNotificationComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxNotificationComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('appendContainer'),
        tslib_1.__metadata("design:type", String)
    ], jqxNotificationComponent.prototype, "attrAppendContainer", void 0);
    tslib_1.__decorate([
        Input('autoOpen'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrAutoOpen", void 0);
    tslib_1.__decorate([
        Input('animationOpenDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrAnimationOpenDelay", void 0);
    tslib_1.__decorate([
        Input('animationCloseDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrAnimationCloseDelay", void 0);
    tslib_1.__decorate([
        Input('autoClose'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrAutoClose", void 0);
    tslib_1.__decorate([
        Input('autoCloseDelay'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "attrAutoCloseDelay", void 0);
    tslib_1.__decorate([
        Input('blink'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrBlink", void 0);
    tslib_1.__decorate([
        Input('browserBoundsOffset'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrBrowserBoundsOffset", void 0);
    tslib_1.__decorate([
        Input('closeOnClick'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrCloseOnClick", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('hoverOpacity'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrHoverOpacity", void 0);
    tslib_1.__decorate([
        Input('icon'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "attrIcon", void 0);
    tslib_1.__decorate([
        Input('notificationOffset'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrNotificationOffset", void 0);
    tslib_1.__decorate([
        Input('opacity'),
        tslib_1.__metadata("design:type", Number)
    ], jqxNotificationComponent.prototype, "attrOpacity", void 0);
    tslib_1.__decorate([
        Input('position'),
        tslib_1.__metadata("design:type", String)
    ], jqxNotificationComponent.prototype, "attrPosition", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('showCloseButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "attrShowCloseButton", void 0);
    tslib_1.__decorate([
        Input('template'),
        tslib_1.__metadata("design:type", String)
    ], jqxNotificationComponent.prototype, "attrTemplate", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxNotificationComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxNotificationComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "onClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxNotificationComponent.prototype, "onOpen", void 0);
    jqxNotificationComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxNotification',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxNotificationComponent);
    return jqxNotificationComponent;
}()); //jqxNotificationComponent
export { jqxNotificationComponent };
