import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollview';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxScrollViewComponent = /** @class */ (function () {
    function jqxScrollViewComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
        // jqxScrollViewComponent events
        this.onPageChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxScrollViewComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxScrollViewComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxScrollViewComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxScrollViewComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxScrollViewComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxScrollViewComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxScrollViewComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
    };
    jqxScrollViewComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxScrollViewComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxScrollViewComponent.prototype.setOptions = function (options) {
        this.host.jqxScrollView('setOptions', options);
    };
    // jqxScrollViewComponent properties
    jqxScrollViewComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('animationDuration', arg);
        }
        else {
            return this.host.jqxScrollView('animationDuration');
        }
    };
    jqxScrollViewComponent.prototype.bounceEnabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('bounceEnabled', arg);
        }
        else {
            return this.host.jqxScrollView('bounceEnabled');
        }
    };
    jqxScrollViewComponent.prototype.buttonsOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('buttonsOffset', arg);
        }
        else {
            return this.host.jqxScrollView('buttonsOffset');
        }
    };
    jqxScrollViewComponent.prototype.currentPage = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('currentPage', arg);
        }
        else {
            return this.host.jqxScrollView('currentPage');
        }
    };
    jqxScrollViewComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('disabled', arg);
        }
        else {
            return this.host.jqxScrollView('disabled');
        }
    };
    jqxScrollViewComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('height', arg);
        }
        else {
            return this.host.jqxScrollView('height');
        }
    };
    jqxScrollViewComponent.prototype.moveThreshold = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('moveThreshold', arg);
        }
        else {
            return this.host.jqxScrollView('moveThreshold');
        }
    };
    jqxScrollViewComponent.prototype.showButtons = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('showButtons', arg);
        }
        else {
            return this.host.jqxScrollView('showButtons');
        }
    };
    jqxScrollViewComponent.prototype.slideShow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideShow', arg);
        }
        else {
            return this.host.jqxScrollView('slideShow');
        }
    };
    jqxScrollViewComponent.prototype.slideDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideDuration', arg);
        }
        else {
            return this.host.jqxScrollView('slideDuration');
        }
    };
    jqxScrollViewComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('theme', arg);
        }
        else {
            return this.host.jqxScrollView('theme');
        }
    };
    jqxScrollViewComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('width', arg);
        }
        else {
            return this.host.jqxScrollView('width');
        }
    };
    // jqxScrollViewComponent functions
    jqxScrollViewComponent.prototype.back = function () {
        this.host.jqxScrollView('back');
    };
    jqxScrollViewComponent.prototype.changePage = function (index) {
        this.host.jqxScrollView('changePage', index);
    };
    jqxScrollViewComponent.prototype.forward = function () {
        this.host.jqxScrollView('forward');
    };
    jqxScrollViewComponent.prototype.refresh = function () {
        this.host.jqxScrollView('refresh');
    };
    jqxScrollViewComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
    };
    jqxScrollViewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollViewComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('bounceEnabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollViewComponent.prototype, "attrBounceEnabled", void 0);
    tslib_1.__decorate([
        Input('buttonsOffset'),
        tslib_1.__metadata("design:type", Array)
    ], jqxScrollViewComponent.prototype, "attrButtonsOffset", void 0);
    tslib_1.__decorate([
        Input('currentPage'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollViewComponent.prototype, "attrCurrentPage", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollViewComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('moveThreshold'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollViewComponent.prototype, "attrMoveThreshold", void 0);
    tslib_1.__decorate([
        Input('showButtons'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollViewComponent.prototype, "attrShowButtons", void 0);
    tslib_1.__decorate([
        Input('slideShow'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollViewComponent.prototype, "attrSlideShow", void 0);
    tslib_1.__decorate([
        Input('slideDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxScrollViewComponent.prototype, "attrSlideDuration", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxScrollViewComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollViewComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollViewComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxScrollViewComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxScrollViewComponent.prototype, "onPageChanged", void 0);
    jqxScrollViewComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxScrollView',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxScrollViewComponent);
    return jqxScrollViewComponent;
}()); //jqxScrollViewComponent
export { jqxScrollViewComponent };
