import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxTooltipComponent = /** @class */ (function () {
    function jqxTooltipComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
        // jqxTooltipComponent events
        this.onClose = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpening = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxTooltipComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxTooltipComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxTooltipComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTooltipComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTooltipComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxTooltipComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxTooltipComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
    };
    jqxTooltipComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTooltipComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTooltipComponent.prototype.setOptions = function (options) {
        this.host.jqxTooltip('setOptions', options);
    };
    // jqxTooltipComponent properties
    jqxTooltipComponent.prototype.absolutePositionX = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionX', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionX');
        }
    };
    jqxTooltipComponent.prototype.absolutePositionY = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionY', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionY');
        }
    };
    jqxTooltipComponent.prototype.autoHide = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHide', arg);
        }
        else {
            return this.host.jqxTooltip('autoHide');
        }
    };
    jqxTooltipComponent.prototype.autoHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('autoHideDelay');
        }
    };
    jqxTooltipComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationShowDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationShowDelay');
        }
    };
    jqxTooltipComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationHideDelay');
        }
    };
    jqxTooltipComponent.prototype.content = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('content', arg);
        }
        else {
            return this.host.jqxTooltip('content');
        }
    };
    jqxTooltipComponent.prototype.closeOnClick = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('closeOnClick', arg);
        }
        else {
            return this.host.jqxTooltip('closeOnClick');
        }
    };
    jqxTooltipComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('disabled', arg);
        }
        else {
            return this.host.jqxTooltip('disabled');
        }
    };
    jqxTooltipComponent.prototype.enableBrowserBoundsDetection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxTooltip('enableBrowserBoundsDetection');
        }
    };
    jqxTooltipComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('height', arg);
        }
        else {
            return this.host.jqxTooltip('height');
        }
    };
    jqxTooltipComponent.prototype.left = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('left', arg);
        }
        else {
            return this.host.jqxTooltip('left');
        }
    };
    jqxTooltipComponent.prototype.name = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('name', arg);
        }
        else {
            return this.host.jqxTooltip('name');
        }
    };
    jqxTooltipComponent.prototype.opacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('opacity', arg);
        }
        else {
            return this.host.jqxTooltip('opacity');
        }
    };
    jqxTooltipComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('position', arg);
        }
        else {
            return this.host.jqxTooltip('position');
        }
    };
    jqxTooltipComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('rtl', arg);
        }
        else {
            return this.host.jqxTooltip('rtl');
        }
    };
    jqxTooltipComponent.prototype.showDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showDelay', arg);
        }
        else {
            return this.host.jqxTooltip('showDelay');
        }
    };
    jqxTooltipComponent.prototype.showArrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showArrow', arg);
        }
        else {
            return this.host.jqxTooltip('showArrow');
        }
    };
    jqxTooltipComponent.prototype.top = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('top', arg);
        }
        else {
            return this.host.jqxTooltip('top');
        }
    };
    jqxTooltipComponent.prototype.trigger = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('trigger', arg);
        }
        else {
            return this.host.jqxTooltip('trigger');
        }
    };
    jqxTooltipComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('theme', arg);
        }
        else {
            return this.host.jqxTooltip('theme');
        }
    };
    jqxTooltipComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('width', arg);
        }
        else {
            return this.host.jqxTooltip('width');
        }
    };
    // jqxTooltipComponent functions
    jqxTooltipComponent.prototype.close = function (index) {
        this.host.jqxTooltip('close', index);
    };
    jqxTooltipComponent.prototype.destroy = function () {
        this.host.jqxTooltip('destroy');
    };
    jqxTooltipComponent.prototype.open = function (left, top) {
        this.host.jqxTooltip('open', left, top);
    };
    jqxTooltipComponent.prototype.refresh = function () {
        this.host.jqxTooltip('refresh');
    };
    jqxTooltipComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('closing', function (eventData) { _this.onClosing.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('opening', function (eventData) { _this.onOpening.emit(eventData); });
    };
    jqxTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('absolutePositionX'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrAbsolutePositionX", void 0);
    __decorate([
        Input('absolutePositionY'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrAbsolutePositionY", void 0);
    __decorate([
        Input('autoHide'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrAutoHide", void 0);
    __decorate([
        Input('autoHideDelay'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrAutoHideDelay", void 0);
    __decorate([
        Input('animationShowDelay'),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "attrAnimationShowDelay", void 0);
    __decorate([
        Input('animationHideDelay'),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "attrAnimationHideDelay", void 0);
    __decorate([
        Input('content'),
        __metadata("design:type", String)
    ], jqxTooltipComponent.prototype, "attrContent", void 0);
    __decorate([
        Input('closeOnClick'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrCloseOnClick", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('enableBrowserBoundsDetection'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    __decorate([
        Input('left'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrLeft", void 0);
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], jqxTooltipComponent.prototype, "attrName", void 0);
    __decorate([
        Input('opacity'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrOpacity", void 0);
    __decorate([
        Input('position'),
        __metadata("design:type", String)
    ], jqxTooltipComponent.prototype, "attrPosition", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('showDelay'),
        __metadata("design:type", Number)
    ], jqxTooltipComponent.prototype, "attrShowDelay", void 0);
    __decorate([
        Input('showArrow'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "attrShowArrow", void 0);
    __decorate([
        Input('top'),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "attrTop", void 0);
    __decorate([
        Input('trigger'),
        __metadata("design:type", String)
    ], jqxTooltipComponent.prototype, "attrTrigger", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxTooltipComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxTooltipComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "onClosing", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "onOpen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTooltipComponent.prototype, "onOpening", void 0);
    jqxTooltipComponent = __decorate([
        Component({
            selector: 'jqxTooltip',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxTooltipComponent);
    return jqxTooltipComponent;
}()); //jqxTooltipComponent

var jqxTooltipModule = /** @class */ (function () {
    function jqxTooltipModule() {
    }
    jqxTooltipModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxTooltipComponent],
            exports: [jqxTooltipComponent]
        })
    ], jqxTooltipModule);
    return jqxTooltipModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTooltipComponent, jqxTooltipModule };
