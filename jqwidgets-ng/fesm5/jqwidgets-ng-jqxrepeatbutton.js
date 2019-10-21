import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxRepeatButtonComponent = /** @class */ (function () {
    function jqxRepeatButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxRepeatButtonComponent events
        this.onClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxRepeatButtonComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxRepeatButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxRepeatButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxRepeatButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxRepeatButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxRepeatButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxRepeatButtonComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
    };
    jqxRepeatButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxRepeatButtonComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxRepeatButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxRepeatButton('setOptions', options);
    };
    // jqxRepeatButtonComponent properties
    jqxRepeatButtonComponent.prototype.delay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('delay', arg);
        }
        else {
            return this.host.jqxRepeatButton('delay');
        }
    };
    jqxRepeatButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('disabled', arg);
        }
        else {
            return this.host.jqxRepeatButton('disabled');
        }
    };
    jqxRepeatButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('height', arg);
        }
        else {
            return this.host.jqxRepeatButton('height');
        }
    };
    jqxRepeatButtonComponent.prototype.imgSrc = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgSrc', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgSrc');
        }
    };
    jqxRepeatButtonComponent.prototype.imgWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgWidth', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgWidth');
        }
    };
    jqxRepeatButtonComponent.prototype.imgHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgHeight', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgHeight');
        }
    };
    jqxRepeatButtonComponent.prototype.imgPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgPosition');
        }
    };
    jqxRepeatButtonComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxRepeatButton('roundedCorners');
        }
    };
    jqxRepeatButtonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('rtl', arg);
        }
        else {
            return this.host.jqxRepeatButton('rtl');
        }
    };
    jqxRepeatButtonComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('textPosition');
        }
    };
    jqxRepeatButtonComponent.prototype.textImageRelation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxRepeatButton('textImageRelation');
        }
    };
    jqxRepeatButtonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('theme', arg);
        }
        else {
            return this.host.jqxRepeatButton('theme');
        }
    };
    jqxRepeatButtonComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('template', arg);
        }
        else {
            return this.host.jqxRepeatButton('template');
        }
    };
    jqxRepeatButtonComponent.prototype.toggled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('toggled', arg);
        }
        else {
            return this.host.jqxRepeatButton('toggled');
        }
    };
    jqxRepeatButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('width', arg);
        }
        else {
            return this.host.jqxRepeatButton('width');
        }
    };
    jqxRepeatButtonComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('value', arg);
        }
        else {
            return this.host.jqxRepeatButton('value');
        }
    };
    // jqxRepeatButtonComponent functions
    jqxRepeatButtonComponent.prototype.destroy = function () {
        this.host.jqxRepeatButton('destroy');
    };
    jqxRepeatButtonComponent.prototype.focus = function () {
        this.host.jqxRepeatButton('focus');
    };
    jqxRepeatButtonComponent.prototype.render = function () {
        this.host.jqxRepeatButton('render');
    };
    jqxRepeatButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxRepeatButton('val', value);
        }
        else {
            return this.host.jqxRepeatButton('val');
        }
    };
    ;
    jqxRepeatButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
    };
    jqxRepeatButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('delay'),
        __metadata("design:type", Number)
    ], jqxRepeatButtonComponent.prototype, "attrDelay", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxRepeatButtonComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('imgSrc'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrImgSrc", void 0);
    __decorate([
        Input('imgWidth'),
        __metadata("design:type", Object)
    ], jqxRepeatButtonComponent.prototype, "attrImgWidth", void 0);
    __decorate([
        Input('imgHeight'),
        __metadata("design:type", Object)
    ], jqxRepeatButtonComponent.prototype, "attrImgHeight", void 0);
    __decorate([
        Input('imgPosition'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrImgPosition", void 0);
    __decorate([
        Input('roundedCorners'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrRoundedCorners", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxRepeatButtonComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('textPosition'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrTextPosition", void 0);
    __decorate([
        Input('textImageRelation'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrTextImageRelation", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('template'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrTemplate", void 0);
    __decorate([
        Input('toggled'),
        __metadata("design:type", Boolean)
    ], jqxRepeatButtonComponent.prototype, "attrToggled", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", String)
    ], jqxRepeatButtonComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxRepeatButtonComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxRepeatButtonComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxRepeatButtonComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxRepeatButtonComponent.prototype, "onClick", void 0);
    jqxRepeatButtonComponent = __decorate([
        Component({
            selector: 'jqxRepeatButton',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxRepeatButtonComponent);
    return jqxRepeatButtonComponent;
}()); //jqxRepeatButtonComponent

var jqxRepeatButtonModule = /** @class */ (function () {
    function jqxRepeatButtonModule() {
    }
    jqxRepeatButtonModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxRepeatButtonComponent],
            exports: [jqxRepeatButtonComponent]
        })
    ], jqxRepeatButtonModule);
    return jqxRepeatButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRepeatButtonComponent, jqxRepeatButtonModule };
