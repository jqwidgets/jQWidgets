import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxToggleButtonComponent = /** @class */ (function () {
    function jqxToggleButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxToggleButtonComponent events
        this.onClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxToggleButtonComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxToggleButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxToggleButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxToggleButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxToggleButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxToggleButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxToggleButtonComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
    };
    jqxToggleButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxToggleButtonComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxToggleButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxToggleButton('setOptions', options);
    };
    // jqxToggleButtonComponent properties
    jqxToggleButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('disabled', arg);
        }
        else {
            return this.host.jqxToggleButton('disabled');
        }
    };
    jqxToggleButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('height', arg);
        }
        else {
            return this.host.jqxToggleButton('height');
        }
    };
    jqxToggleButtonComponent.prototype.imgSrc = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgSrc', arg);
        }
        else {
            return this.host.jqxToggleButton('imgSrc');
        }
    };
    jqxToggleButtonComponent.prototype.imgWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgWidth', arg);
        }
        else {
            return this.host.jqxToggleButton('imgWidth');
        }
    };
    jqxToggleButtonComponent.prototype.imgHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgHeight', arg);
        }
        else {
            return this.host.jqxToggleButton('imgHeight');
        }
    };
    jqxToggleButtonComponent.prototype.imgPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('imgPosition');
        }
    };
    jqxToggleButtonComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxToggleButton('roundedCorners');
        }
    };
    jqxToggleButtonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('rtl', arg);
        }
        else {
            return this.host.jqxToggleButton('rtl');
        }
    };
    jqxToggleButtonComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('textPosition');
        }
    };
    jqxToggleButtonComponent.prototype.textImageRelation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxToggleButton('textImageRelation');
        }
    };
    jqxToggleButtonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('theme', arg);
        }
        else {
            return this.host.jqxToggleButton('theme');
        }
    };
    jqxToggleButtonComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('template', arg);
        }
        else {
            return this.host.jqxToggleButton('template');
        }
    };
    jqxToggleButtonComponent.prototype.toggled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('toggled', arg);
        }
        else {
            return this.host.jqxToggleButton('toggled');
        }
    };
    jqxToggleButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('width', arg);
        }
        else {
            return this.host.jqxToggleButton('width');
        }
    };
    jqxToggleButtonComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('value', arg);
        }
        else {
            return this.host.jqxToggleButton('value');
        }
    };
    // jqxToggleButtonComponent functions
    jqxToggleButtonComponent.prototype.check = function () {
        this.host.jqxToggleButton('check');
    };
    jqxToggleButtonComponent.prototype.destroy = function () {
        this.host.jqxToggleButton('destroy');
    };
    jqxToggleButtonComponent.prototype.focus = function () {
        this.host.jqxToggleButton('focus');
    };
    jqxToggleButtonComponent.prototype.render = function () {
        this.host.jqxToggleButton('render');
    };
    jqxToggleButtonComponent.prototype.toggle = function () {
        this.host.jqxToggleButton('toggle');
    };
    jqxToggleButtonComponent.prototype.unCheck = function () {
        this.host.jqxToggleButton('unCheck');
    };
    jqxToggleButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxToggleButton('val', value);
        }
        else {
            return this.host.jqxToggleButton('val');
        }
    };
    ;
    jqxToggleButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
    };
    jqxToggleButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxToggleButtonComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('imgSrc'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrImgSrc", void 0);
    __decorate([
        Input('imgWidth'),
        __metadata("design:type", Object)
    ], jqxToggleButtonComponent.prototype, "attrImgWidth", void 0);
    __decorate([
        Input('imgHeight'),
        __metadata("design:type", Object)
    ], jqxToggleButtonComponent.prototype, "attrImgHeight", void 0);
    __decorate([
        Input('imgPosition'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrImgPosition", void 0);
    __decorate([
        Input('roundedCorners'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrRoundedCorners", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxToggleButtonComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('textPosition'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrTextPosition", void 0);
    __decorate([
        Input('textImageRelation'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrTextImageRelation", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('template'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrTemplate", void 0);
    __decorate([
        Input('toggled'),
        __metadata("design:type", Boolean)
    ], jqxToggleButtonComponent.prototype, "attrToggled", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", String)
    ], jqxToggleButtonComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxToggleButtonComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxToggleButtonComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxToggleButtonComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxToggleButtonComponent.prototype, "onClick", void 0);
    jqxToggleButtonComponent = __decorate([
        Component({
            selector: 'jqxToggleButton',
            template: '<button><ng-content></ng-content></button>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxToggleButtonComponent);
    return jqxToggleButtonComponent;
}()); //jqxToggleButtonComponent

var jqxToggleButtonModule = /** @class */ (function () {
    function jqxToggleButtonModule() {
    }
    jqxToggleButtonModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxToggleButtonComponent],
            exports: [jqxToggleButtonComponent]
        })
    ], jqxToggleButtonModule);
    return jqxToggleButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxToggleButtonComponent, jqxToggleButtonModule };
