import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavbar';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxNavBarComponent = /** @class */ (function () {
    function jqxNavBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
        // jqxNavBarComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxNavBarComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxNavBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxNavBarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxNavBarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxNavBarComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxNavBarComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxNavBarComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
    };
    jqxNavBarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxNavBarComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxNavBarComponent.prototype.setOptions = function (options) {
        this.host.jqxNavBar('setOptions', options);
    };
    // jqxNavBarComponent properties
    jqxNavBarComponent.prototype.columns = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('columns', arg);
        }
        else {
            return this.host.jqxNavBar('columns');
        }
    };
    jqxNavBarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('disabled', arg);
        }
        else {
            return this.host.jqxNavBar('disabled');
        }
    };
    jqxNavBarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('height', arg);
        }
        else {
            return this.host.jqxNavBar('height');
        }
    };
    jqxNavBarComponent.prototype.minimized = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimized', arg);
        }
        else {
            return this.host.jqxNavBar('minimized');
        }
    };
    jqxNavBarComponent.prototype.minimizeButtonPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizeButtonPosition', arg);
        }
        else {
            return this.host.jqxNavBar('minimizeButtonPosition');
        }
    };
    jqxNavBarComponent.prototype.minimizedHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedHeight', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedHeight');
        }
    };
    jqxNavBarComponent.prototype.minimizedTitle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedTitle', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedTitle');
        }
    };
    jqxNavBarComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('orientation', arg);
        }
        else {
            return this.host.jqxNavBar('orientation');
        }
    };
    jqxNavBarComponent.prototype.popupAnimationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('popupAnimationDelay', arg);
        }
        else {
            return this.host.jqxNavBar('popupAnimationDelay');
        }
    };
    jqxNavBarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('rtl', arg);
        }
        else {
            return this.host.jqxNavBar('rtl');
        }
    };
    jqxNavBarComponent.prototype.selection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selection', arg);
        }
        else {
            return this.host.jqxNavBar('selection');
        }
    };
    jqxNavBarComponent.prototype.selectedItem = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selectedItem', arg);
        }
        else {
            return this.host.jqxNavBar('selectedItem');
        }
    };
    jqxNavBarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('theme', arg);
        }
        else {
            return this.host.jqxNavBar('theme');
        }
    };
    jqxNavBarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('width', arg);
        }
        else {
            return this.host.jqxNavBar('width');
        }
    };
    // jqxNavBarComponent functions
    jqxNavBarComponent.prototype.close = function () {
        this.host.jqxNavBar('close');
    };
    jqxNavBarComponent.prototype.destroy = function () {
        this.host.jqxNavBar('destroy');
    };
    jqxNavBarComponent.prototype.getSelectedIndex = function () {
        return this.host.jqxNavBar('getSelectedIndex');
    };
    jqxNavBarComponent.prototype.open = function () {
        this.host.jqxNavBar('open');
    };
    jqxNavBarComponent.prototype.selectAt = function (index) {
        this.host.jqxNavBar('selectAt', index);
    };
    jqxNavBarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
    };
    jqxNavBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('columns'),
        __metadata("design:type", Array)
    ], jqxNavBarComponent.prototype, "attrColumns", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxNavBarComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('minimized'),
        __metadata("design:type", Boolean)
    ], jqxNavBarComponent.prototype, "attrMinimized", void 0);
    __decorate([
        Input('minimizeButtonPosition'),
        __metadata("design:type", String)
    ], jqxNavBarComponent.prototype, "attrMinimizeButtonPosition", void 0);
    __decorate([
        Input('minimizedHeight'),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "attrMinimizedHeight", void 0);
    __decorate([
        Input('minimizedTitle'),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "attrMinimizedTitle", void 0);
    __decorate([
        Input('orientation'),
        __metadata("design:type", String)
    ], jqxNavBarComponent.prototype, "attrOrientation", void 0);
    __decorate([
        Input('popupAnimationDelay'),
        __metadata("design:type", Number)
    ], jqxNavBarComponent.prototype, "attrPopupAnimationDelay", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxNavBarComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('selection'),
        __metadata("design:type", Boolean)
    ], jqxNavBarComponent.prototype, "attrSelection", void 0);
    __decorate([
        Input('selectedItem'),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "attrSelectedItem", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxNavBarComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxNavBarComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxNavBarComponent.prototype, "onChange", void 0);
    jqxNavBarComponent = __decorate([
        Component({
            selector: 'jqxNavBar',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxNavBarComponent);
    return jqxNavBarComponent;
}()); //jqxNavBarComponent

var jqxNavBarModule = /** @class */ (function () {
    function jqxNavBarModule() {
    }
    jqxNavBarModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxNavBarComponent],
            exports: [jqxNavBarComponent]
        })
    ], jqxNavBarModule);
    return jqxNavBarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNavBarComponent, jqxNavBarModule };
