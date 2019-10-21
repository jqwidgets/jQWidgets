import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxribbon';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxRibbonComponent = /** @class */ (function () {
    function jqxRibbonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'reorder', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
        // jqxRibbonComponent events
        this.onChange = new EventEmitter();
        this.onReorder = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxRibbonComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxRibbonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRibbonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRibbonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRibbonComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxRibbonComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxRibbonComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
    };
    jqxRibbonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRibbonComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRibbonComponent.prototype.setOptions = function (options) {
        this.host.jqxRibbon('setOptions', options);
    };
    // jqxRibbonComponent properties
    jqxRibbonComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationType', arg);
        }
        else {
            return this.host.jqxRibbon('animationType');
        }
    };
    jqxRibbonComponent.prototype.animationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationDelay', arg);
        }
        else {
            return this.host.jqxRibbon('animationDelay');
        }
    };
    jqxRibbonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('disabled', arg);
        }
        else {
            return this.host.jqxRibbon('disabled');
        }
    };
    jqxRibbonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('height', arg);
        }
        else {
            return this.host.jqxRibbon('height');
        }
    };
    jqxRibbonComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('initContent', arg);
        }
        else {
            return this.host.jqxRibbon('initContent');
        }
    };
    jqxRibbonComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('mode', arg);
        }
        else {
            return this.host.jqxRibbon('mode');
        }
    };
    jqxRibbonComponent.prototype.popupCloseMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('popupCloseMode', arg);
        }
        else {
            return this.host.jqxRibbon('popupCloseMode');
        }
    };
    jqxRibbonComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('position', arg);
        }
        else {
            return this.host.jqxRibbon('position');
        }
    };
    jqxRibbonComponent.prototype.reorder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('reorder', arg);
        }
        else {
            return this.host.jqxRibbon('reorder');
        }
    };
    jqxRibbonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('rtl', arg);
        }
        else {
            return this.host.jqxRibbon('rtl');
        }
    };
    jqxRibbonComponent.prototype.selectedIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectedIndex', arg);
        }
        else {
            return this.host.jqxRibbon('selectedIndex');
        }
    };
    jqxRibbonComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectionMode', arg);
        }
        else {
            return this.host.jqxRibbon('selectionMode');
        }
    };
    jqxRibbonComponent.prototype.scrollPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollPosition', arg);
        }
        else {
            return this.host.jqxRibbon('scrollPosition');
        }
    };
    jqxRibbonComponent.prototype.scrollStep = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollStep', arg);
        }
        else {
            return this.host.jqxRibbon('scrollStep');
        }
    };
    jqxRibbonComponent.prototype.scrollDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollDelay', arg);
        }
        else {
            return this.host.jqxRibbon('scrollDelay');
        }
    };
    jqxRibbonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('theme', arg);
        }
        else {
            return this.host.jqxRibbon('theme');
        }
    };
    jqxRibbonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('width', arg);
        }
        else {
            return this.host.jqxRibbon('width');
        }
    };
    // jqxRibbonComponent functions
    jqxRibbonComponent.prototype.addAt = function (index, item) {
        this.host.jqxRibbon('addAt', index, item);
    };
    jqxRibbonComponent.prototype.clearSelection = function () {
        this.host.jqxRibbon('clearSelection');
    };
    jqxRibbonComponent.prototype.disableAt = function (index) {
        this.host.jqxRibbon('disableAt', index);
    };
    jqxRibbonComponent.prototype.destroy = function () {
        this.host.jqxRibbon('destroy');
    };
    jqxRibbonComponent.prototype.enableAt = function (index) {
        this.host.jqxRibbon('enableAt', index);
    };
    jqxRibbonComponent.prototype.hideAt = function (index) {
        this.host.jqxRibbon('hideAt', index);
    };
    jqxRibbonComponent.prototype.removeAt = function (index) {
        this.host.jqxRibbon('removeAt', index);
    };
    jqxRibbonComponent.prototype.render = function () {
        this.host.jqxRibbon('render');
    };
    jqxRibbonComponent.prototype.refresh = function () {
        this.host.jqxRibbon('refresh');
    };
    jqxRibbonComponent.prototype.selectAt = function (index) {
        this.host.jqxRibbon('selectAt', index);
    };
    jqxRibbonComponent.prototype.showAt = function (index) {
        this.host.jqxRibbon('showAt', index);
    };
    jqxRibbonComponent.prototype.setPopupLayout = function (index, layout, width, height) {
        this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
    };
    jqxRibbonComponent.prototype.updateAt = function (index, item) {
        this.host.jqxRibbon('updateAt', index, item);
    };
    jqxRibbonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxRibbon('val', value);
        }
        else {
            return this.host.jqxRibbon('val');
        }
    };
    ;
    jqxRibbonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        this.host.on('reorder', function (eventData) { _this.onReorder.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    jqxRibbonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('animationType'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrAnimationType", void 0);
    __decorate([
        Input('animationDelay'),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "attrAnimationDelay", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxRibbonComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('initContent'),
        __metadata("design:type", Function)
    ], jqxRibbonComponent.prototype, "attrInitContent", void 0);
    __decorate([
        Input('mode'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrMode", void 0);
    __decorate([
        Input('popupCloseMode'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrPopupCloseMode", void 0);
    __decorate([
        Input('position'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrPosition", void 0);
    __decorate([
        Input('reorder'),
        __metadata("design:type", Boolean)
    ], jqxRibbonComponent.prototype, "attrReorder", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxRibbonComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('selectedIndex'),
        __metadata("design:type", Number)
    ], jqxRibbonComponent.prototype, "attrSelectedIndex", void 0);
    __decorate([
        Input('selectionMode'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrSelectionMode", void 0);
    __decorate([
        Input('scrollPosition'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrScrollPosition", void 0);
    __decorate([
        Input('scrollStep'),
        __metadata("design:type", Number)
    ], jqxRibbonComponent.prototype, "attrScrollStep", void 0);
    __decorate([
        Input('scrollDelay'),
        __metadata("design:type", Number)
    ], jqxRibbonComponent.prototype, "attrScrollDelay", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxRibbonComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxRibbonComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "onChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "onReorder", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "onSelect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRibbonComponent.prototype, "onUnselect", void 0);
    jqxRibbonComponent = __decorate([
        Component({
            selector: 'jqxRibbon',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxRibbonComponent);
    return jqxRibbonComponent;
}()); //jqxRibbonComponent

var jqxRibbonModule = /** @class */ (function () {
    function jqxRibbonModule() {
    }
    jqxRibbonModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxRibbonComponent],
            exports: [jqxRibbonComponent]
        })
    ], jqxRibbonModule);
    return jqxRibbonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRibbonComponent, jqxRibbonModule };
