import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcolorpicker';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxColorPickerComponent = /** @class */ (function () {
    function jqxColorPickerComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['color', 'colorMode', 'disabled', 'height', 'showTransparent', 'width'];
        // jqxColorPickerComponent events
        this.onColorchange = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxColorPickerComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxColorPicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxColorPicker(this.properties[i])) {
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxColorPickerComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxColorPickerComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxColorPickerComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxColorPickerComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxColorPickerComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
    };
    jqxColorPickerComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxColorPickerComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxColorPickerComponent.prototype.setOptions = function (options) {
        this.host.jqxColorPicker('setOptions', options);
    };
    // jqxColorPickerComponent properties
    jqxColorPickerComponent.prototype.color = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('color', arg);
        }
        else {
            return this.host.jqxColorPicker('color');
        }
    };
    jqxColorPickerComponent.prototype.colorMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('colorMode', arg);
        }
        else {
            return this.host.jqxColorPicker('colorMode');
        }
    };
    jqxColorPickerComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('disabled', arg);
        }
        else {
            return this.host.jqxColorPicker('disabled');
        }
    };
    jqxColorPickerComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('height', arg);
        }
        else {
            return this.host.jqxColorPicker('height');
        }
    };
    jqxColorPickerComponent.prototype.showTransparent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('showTransparent', arg);
        }
        else {
            return this.host.jqxColorPicker('showTransparent');
        }
    };
    jqxColorPickerComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('width', arg);
        }
        else {
            return this.host.jqxColorPicker('width');
        }
    };
    // jqxColorPickerComponent functions
    jqxColorPickerComponent.prototype.getColor = function () {
        return this.host.jqxColorPicker('getColor');
    };
    jqxColorPickerComponent.prototype.setColor = function (color) {
        this.host.jqxColorPicker('setColor', color);
    };
    jqxColorPickerComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('colorchange', function (eventData) { _this.onColorchange.emit(eventData); });
    };
    jqxColorPickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('color'),
        __metadata("design:type", String)
    ], jqxColorPickerComponent.prototype, "attrColor", void 0);
    __decorate([
        Input('colorMode'),
        __metadata("design:type", String)
    ], jqxColorPickerComponent.prototype, "attrColorMode", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxColorPickerComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('showTransparent'),
        __metadata("design:type", Boolean)
    ], jqxColorPickerComponent.prototype, "attrShowTransparent", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxColorPickerComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxColorPickerComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxColorPickerComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxColorPickerComponent.prototype, "onColorchange", void 0);
    jqxColorPickerComponent = __decorate([
        Component({
            selector: 'jqxColorPicker',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxColorPickerComponent);
    return jqxColorPickerComponent;
}()); //jqxColorPickerComponent

var jqxColorPickerModule = /** @class */ (function () {
    function jqxColorPickerModule() {
    }
    jqxColorPickerModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxColorPickerComponent],
            exports: [jqxColorPickerComponent]
        })
    ], jqxColorPickerModule);
    return jqxColorPickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxColorPickerComponent, jqxColorPickerModule };
