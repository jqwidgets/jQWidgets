import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavigationbar';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxNavigationBarComponent = /** @class */ (function () {
    function jqxNavigationBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxNavigationBarComponent events
        this.onCollapsingItem = new EventEmitter();
        this.onCollapsedItem = new EventEmitter();
        this.onExpandingItem = new EventEmitter();
        this.onExpandedItem = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxNavigationBarComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxNavigationBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNavigationBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNavigationBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNavigationBarComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxNavigationBarComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxNavigationBarComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
    };
    jqxNavigationBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNavigationBarComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNavigationBarComponent.prototype.setOptions = function (options) {
        this.host.jqxNavigationBar('setOptions', options);
    };
    // jqxNavigationBarComponent properties
    jqxNavigationBarComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('animationType', arg);
        }
        else {
            return this.host.jqxNavigationBar('animationType');
        }
    };
    jqxNavigationBarComponent.prototype.arrowPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('arrowPosition', arg);
        }
        else {
            return this.host.jqxNavigationBar('arrowPosition');
        }
    };
    jqxNavigationBarComponent.prototype.collapseAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('collapseAnimationDuration');
        }
    };
    jqxNavigationBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('disabled', arg);
        }
        else {
            return this.host.jqxNavigationBar('disabled');
        }
    };
    jqxNavigationBarComponent.prototype.expandAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandAnimationDuration');
        }
    };
    jqxNavigationBarComponent.prototype.expandMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandMode');
        }
    };
    jqxNavigationBarComponent.prototype.expandedIndexes = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandedIndexes', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandedIndexes');
        }
    };
    jqxNavigationBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('height', arg);
        }
        else {
            return this.host.jqxNavigationBar('height');
        }
    };
    jqxNavigationBarComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('initContent', arg);
        }
        else {
            return this.host.jqxNavigationBar('initContent');
        }
    };
    jqxNavigationBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('rtl', arg);
        }
        else {
            return this.host.jqxNavigationBar('rtl');
        }
    };
    jqxNavigationBarComponent.prototype.showArrow = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('showArrow', arg);
        }
        else {
            return this.host.jqxNavigationBar('showArrow');
        }
    };
    jqxNavigationBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('theme', arg);
        }
        else {
            return this.host.jqxNavigationBar('theme');
        }
    };
    jqxNavigationBarComponent.prototype.toggleMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('toggleMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('toggleMode');
        }
    };
    jqxNavigationBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('width', arg);
        }
        else {
            return this.host.jqxNavigationBar('width');
        }
    };
    // jqxNavigationBarComponent functions
    jqxNavigationBarComponent.prototype.add = function (header, content) {
        this.host.jqxNavigationBar('add', header, content);
    };
    jqxNavigationBarComponent.prototype.collapseAt = function (index) {
        this.host.jqxNavigationBar('collapseAt', index);
    };
    jqxNavigationBarComponent.prototype.disableAt = function (index) {
        this.host.jqxNavigationBar('disableAt', index);
    };
    jqxNavigationBarComponent.prototype.disable = function () {
        this.host.jqxNavigationBar('disable');
    };
    jqxNavigationBarComponent.prototype.destroy = function () {
        this.host.jqxNavigationBar('destroy');
    };
    jqxNavigationBarComponent.prototype.expandAt = function (index) {
        this.host.jqxNavigationBar('expandAt', index);
    };
    jqxNavigationBarComponent.prototype.enableAt = function (index) {
        this.host.jqxNavigationBar('enableAt', index);
    };
    jqxNavigationBarComponent.prototype.enable = function () {
        this.host.jqxNavigationBar('enable');
    };
    jqxNavigationBarComponent.prototype.focus = function () {
        this.host.jqxNavigationBar('focus');
    };
    jqxNavigationBarComponent.prototype.getHeaderContentAt = function (index) {
        return this.host.jqxNavigationBar('getHeaderContentAt', index);
    };
    jqxNavigationBarComponent.prototype.getContentAt = function (index) {
        return this.host.jqxNavigationBar('getContentAt', index);
    };
    jqxNavigationBarComponent.prototype.hideArrowAt = function (index) {
        this.host.jqxNavigationBar('hideArrowAt', index);
    };
    jqxNavigationBarComponent.prototype.invalidate = function () {
        this.host.jqxNavigationBar('invalidate');
    };
    jqxNavigationBarComponent.prototype.insert = function (Index, header, content) {
        this.host.jqxNavigationBar('insert', Index, header, content);
    };
    jqxNavigationBarComponent.prototype.refresh = function () {
        this.host.jqxNavigationBar('refresh');
    };
    jqxNavigationBarComponent.prototype.render = function () {
        this.host.jqxNavigationBar('render');
    };
    jqxNavigationBarComponent.prototype.remove = function (index) {
        this.host.jqxNavigationBar('remove', index);
    };
    jqxNavigationBarComponent.prototype.setContentAt = function (index, item) {
        this.host.jqxNavigationBar('setContentAt', index, item);
    };
    jqxNavigationBarComponent.prototype.setHeaderContentAt = function (index, item) {
        this.host.jqxNavigationBar('setHeaderContentAt', index, item);
    };
    jqxNavigationBarComponent.prototype.showArrowAt = function (index) {
        this.host.jqxNavigationBar('showArrowAt', index);
    };
    jqxNavigationBarComponent.prototype.update = function (index, header, content) {
        this.host.jqxNavigationBar('update', index, header, content);
    };
    jqxNavigationBarComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxNavigationBar('val', value);
        }
        else {
            return this.host.jqxNavigationBar('val');
        }
    };
    ;
    jqxNavigationBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('collapsingItem', function (eventData) { _this.onCollapsingItem.emit(eventData); });
        this.host.on('collapsedItem', function (eventData) { _this.onCollapsedItem.emit(eventData); });
        this.host.on('expandingItem', function (eventData) { _this.onExpandingItem.emit(eventData); });
        this.host.on('expandedItem', function (eventData) { _this.onExpandedItem.emit(eventData); });
    };
    jqxNavigationBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('animationType'),
        __metadata("design:type", String)
    ], jqxNavigationBarComponent.prototype, "attrAnimationType", void 0);
    __decorate([
        Input('arrowPosition'),
        __metadata("design:type", String)
    ], jqxNavigationBarComponent.prototype, "attrArrowPosition", void 0);
    __decorate([
        Input('collapseAnimationDuration'),
        __metadata("design:type", Number)
    ], jqxNavigationBarComponent.prototype, "attrCollapseAnimationDuration", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxNavigationBarComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('expandAnimationDuration'),
        __metadata("design:type", Number)
    ], jqxNavigationBarComponent.prototype, "attrExpandAnimationDuration", void 0);
    __decorate([
        Input('expandMode'),
        __metadata("design:type", String)
    ], jqxNavigationBarComponent.prototype, "attrExpandMode", void 0);
    __decorate([
        Input('expandedIndexes'),
        __metadata("design:type", Array)
    ], jqxNavigationBarComponent.prototype, "attrExpandedIndexes", void 0);
    __decorate([
        Input('initContent'),
        __metadata("design:type", Function)
    ], jqxNavigationBarComponent.prototype, "attrInitContent", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxNavigationBarComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('showArrow'),
        __metadata("design:type", Boolean)
    ], jqxNavigationBarComponent.prototype, "attrShowArrow", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxNavigationBarComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('toggleMode'),
        __metadata("design:type", String)
    ], jqxNavigationBarComponent.prototype, "attrToggleMode", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxNavigationBarComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "onCollapsingItem", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "onCollapsedItem", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "onExpandingItem", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxNavigationBarComponent.prototype, "onExpandedItem", void 0);
    jqxNavigationBarComponent = __decorate([
        Component({
            selector: 'jqxNavigationBar',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxNavigationBarComponent);
    return jqxNavigationBarComponent;
}()); //jqxNavigationBarComponent

var jqxNavigationBarModule = /** @class */ (function () {
    function jqxNavigationBarModule() {
    }
    jqxNavigationBarModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxNavigationBarComponent],
            exports: [jqxNavigationBarComponent]
        })
    ], jqxNavigationBarModule);
    return jqxNavigationBarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNavigationBarComponent, jqxNavigationBarModule };
