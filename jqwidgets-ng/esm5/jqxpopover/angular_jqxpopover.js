import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxpopover';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxPopoverComponent = /** @class */ (function () {
    function jqxPopoverComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
        // jqxPopoverComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxPopoverComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxPopoverComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxPopoverComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxPopoverComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxPopoverComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxPopoverComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxPopoverComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    jqxPopoverComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxPopoverComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxPopoverComponent.prototype.setOptions = function (options) {
        this.host.jqxPopover('setOptions', options);
    };
    // jqxPopoverComponent properties
    jqxPopoverComponent.prototype.arrowOffsetValue = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('arrowOffsetValue', arg);
        }
        else {
            return this.host.jqxPopover('arrowOffsetValue');
        }
    };
    jqxPopoverComponent.prototype.animationOpenDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationOpenDelay');
        }
    };
    jqxPopoverComponent.prototype.animationCloseDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationCloseDelay');
        }
    };
    jqxPopoverComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('autoClose', arg);
        }
        else {
            return this.host.jqxPopover('autoClose');
        }
    };
    jqxPopoverComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationType', arg);
        }
        else {
            return this.host.jqxPopover('animationType');
        }
    };
    jqxPopoverComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('height', arg);
        }
        else {
            return this.host.jqxPopover('height');
        }
    };
    jqxPopoverComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('initContent', arg);
        }
        else {
            return this.host.jqxPopover('initContent');
        }
    };
    jqxPopoverComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('isModal', arg);
        }
        else {
            return this.host.jqxPopover('isModal');
        }
    };
    jqxPopoverComponent.prototype.offset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('offset', arg);
        }
        else {
            return this.host.jqxPopover('offset');
        }
    };
    jqxPopoverComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('position', arg);
        }
        else {
            return this.host.jqxPopover('position');
        }
    };
    jqxPopoverComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('rtl', arg);
        }
        else {
            return this.host.jqxPopover('rtl');
        }
    };
    jqxPopoverComponent.prototype.selector = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('selector', arg);
        }
        else {
            return this.host.jqxPopover('selector');
        }
    };
    jqxPopoverComponent.prototype.showArrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showArrow', arg);
        }
        else {
            return this.host.jqxPopover('showArrow');
        }
    };
    jqxPopoverComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showCloseButton', arg);
        }
        else {
            return this.host.jqxPopover('showCloseButton');
        }
    };
    jqxPopoverComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('width', arg);
        }
        else {
            return this.host.jqxPopover('width');
        }
    };
    jqxPopoverComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('title', arg);
        }
        else {
            return this.host.jqxPopover('title');
        }
    };
    jqxPopoverComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('theme', arg);
        }
        else {
            return this.host.jqxPopover('theme');
        }
    };
    // jqxPopoverComponent functions
    jqxPopoverComponent.prototype.close = function () {
        this.host.jqxPopover('close');
    };
    jqxPopoverComponent.prototype.destroy = function () {
        this.host.jqxPopover('destroy');
    };
    jqxPopoverComponent.prototype.open = function () {
        this.host.jqxPopover('open');
    };
    jqxPopoverComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        setTimeout(function () {
            _this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            _this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        });
    };
    jqxPopoverComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('arrowOffsetValue'),
        tslib_1.__metadata("design:type", Number)
    ], jqxPopoverComponent.prototype, "attrArrowOffsetValue", void 0);
    tslib_1.__decorate([
        Input('animationOpenDelay'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrAnimationOpenDelay", void 0);
    tslib_1.__decorate([
        Input('animationCloseDelay'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrAnimationCloseDelay", void 0);
    tslib_1.__decorate([
        Input('autoClose'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "attrAutoClose", void 0);
    tslib_1.__decorate([
        Input('animationType'),
        tslib_1.__metadata("design:type", String)
    ], jqxPopoverComponent.prototype, "attrAnimationType", void 0);
    tslib_1.__decorate([
        Input('initContent'),
        tslib_1.__metadata("design:type", Function)
    ], jqxPopoverComponent.prototype, "attrInitContent", void 0);
    tslib_1.__decorate([
        Input('isModal'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "attrIsModal", void 0);
    tslib_1.__decorate([
        Input('offset'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrOffset", void 0);
    tslib_1.__decorate([
        Input('position'),
        tslib_1.__metadata("design:type", String)
    ], jqxPopoverComponent.prototype, "attrPosition", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('selector'),
        tslib_1.__metadata("design:type", String)
    ], jqxPopoverComponent.prototype, "attrSelector", void 0);
    tslib_1.__decorate([
        Input('showArrow'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "attrShowArrow", void 0);
    tslib_1.__decorate([
        Input('showCloseButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "attrShowCloseButton", void 0);
    tslib_1.__decorate([
        Input('title'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrTitle", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxPopoverComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxPopoverComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxPopoverComponent.prototype, "onOpen", void 0);
    jqxPopoverComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxPopover',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxPopoverComponent);
    return jqxPopoverComponent;
}()); //jqxPopoverComponent
export { jqxPopoverComponent };
