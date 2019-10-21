import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxresponsivepanel';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxResponsivePanelComponent = /** @class */ (function () {
    function jqxResponsivePanelComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxResponsivePanelComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxResponsivePanelComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxResponsivePanelComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxResponsivePanelComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxResponsivePanelComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxResponsivePanelComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxResponsivePanelComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
    };
    jqxResponsivePanelComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxResponsivePanelComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxResponsivePanelComponent.prototype.setOptions = function (options) {
        this.host.jqxResponsivePanel('setOptions', options);
    };
    // jqxResponsivePanelComponent properties
    jqxResponsivePanelComponent.prototype.animationDirection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    };
    jqxResponsivePanelComponent.prototype.animationHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    };
    jqxResponsivePanelComponent.prototype.animationShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    };
    jqxResponsivePanelComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    };
    jqxResponsivePanelComponent.prototype.autoClose = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    };
    jqxResponsivePanelComponent.prototype.collapseBreakpoint = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    };
    jqxResponsivePanelComponent.prototype.collapseWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    };
    jqxResponsivePanelComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    };
    jqxResponsivePanelComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    };
    jqxResponsivePanelComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    };
    jqxResponsivePanelComponent.prototype.toggleButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    };
    jqxResponsivePanelComponent.prototype.toggleButtonSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    };
    jqxResponsivePanelComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    };
    // jqxResponsivePanelComponent functions
    jqxResponsivePanelComponent.prototype.close = function () {
        this.host.jqxResponsivePanel('close');
    };
    jqxResponsivePanelComponent.prototype.destroy = function () {
        this.host.jqxResponsivePanel('destroy');
    };
    jqxResponsivePanelComponent.prototype.isCollapsed = function () {
        return this.host.jqxResponsivePanel('isCollapsed');
    };
    jqxResponsivePanelComponent.prototype.isOpened = function () {
        return this.host.jqxResponsivePanel('isOpened');
    };
    jqxResponsivePanelComponent.prototype.open = function () {
        this.host.jqxResponsivePanel('open');
    };
    jqxResponsivePanelComponent.prototype.refresh = function () {
        this.host.jqxResponsivePanel('refresh');
    };
    jqxResponsivePanelComponent.prototype.render = function () {
        this.host.jqxResponsivePanel('render');
    };
    jqxResponsivePanelComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxResponsivePanelComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('animationDirection'),
        __metadata("design:type", String)
    ], jqxResponsivePanelComponent.prototype, "attrAnimationDirection", void 0);
    __decorate([
        Input('animationHideDelay'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrAnimationHideDelay", void 0);
    __decorate([
        Input('animationShowDelay'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrAnimationShowDelay", void 0);
    __decorate([
        Input('animationType'),
        __metadata("design:type", String)
    ], jqxResponsivePanelComponent.prototype, "attrAnimationType", void 0);
    __decorate([
        Input('autoClose'),
        __metadata("design:type", Boolean)
    ], jqxResponsivePanelComponent.prototype, "attrAutoClose", void 0);
    __decorate([
        Input('collapseBreakpoint'),
        __metadata("design:type", Number)
    ], jqxResponsivePanelComponent.prototype, "attrCollapseBreakpoint", void 0);
    __decorate([
        Input('collapseWidth'),
        __metadata("design:type", Number)
    ], jqxResponsivePanelComponent.prototype, "attrCollapseWidth", void 0);
    __decorate([
        Input('initContent'),
        __metadata("design:type", Function)
    ], jqxResponsivePanelComponent.prototype, "attrInitContent", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxResponsivePanelComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('toggleButton'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrToggleButton", void 0);
    __decorate([
        Input('toggleButtonSize'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrToggleButtonSize", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxResponsivePanelComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "onCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "onExpand", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxResponsivePanelComponent.prototype, "onOpen", void 0);
    jqxResponsivePanelComponent = __decorate([
        Component({
            selector: 'jqxResponsivePanel',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxResponsivePanelComponent);
    return jqxResponsivePanelComponent;
}()); //jqxResponsivePanelComponent

var jqxResponsivePanelModule = /** @class */ (function () {
    function jqxResponsivePanelModule() {
    }
    jqxResponsivePanelModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxResponsivePanelComponent],
            exports: [jqxResponsivePanelComponent]
        })
    ], jqxResponsivePanelModule);
    return jqxResponsivePanelModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxResponsivePanelComponent, jqxResponsivePanelModule };
