import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxButtonComponent = /** @class */ (function () {
    function jqxButtonComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'enableDefault', 'cursor', 'textPosition', 'textImageRelation', 'theme', 'template', 'width', 'value'];
        // jqxButtonComponent events
        this.onClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxButtonComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                        this.host.jqxButton(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxButtonComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxButtonComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxButtonComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxButtonComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxButtonComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    jqxButtonComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxButtonComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxButtonComponent.prototype.setOptions = function (options) {
        this.host.jqxButton('setOptions', options);
    };
    // jqxButtonComponent properties
    jqxButtonComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('disabled', arg);
        }
        else {
            return this.host.jqxButton('disabled');
        }
    };
    jqxButtonComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('height', arg);
        }
        else {
            return this.host.jqxButton('height');
        }
    };
    jqxButtonComponent.prototype.imgSrc = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgSrc', arg);
        }
        else {
            return this.host.jqxButton('imgSrc');
        }
    };
    jqxButtonComponent.prototype.imgWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgWidth', arg);
        }
        else {
            return this.host.jqxButton('imgWidth');
        }
    };
    jqxButtonComponent.prototype.imgHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgHeight', arg);
        }
        else {
            return this.host.jqxButton('imgHeight');
        }
    };
    jqxButtonComponent.prototype.imgPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgPosition', arg);
        }
        else {
            return this.host.jqxButton('imgPosition');
        }
    };
    jqxButtonComponent.prototype.roundedCorners = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxButton('roundedCorners');
        }
    };
    jqxButtonComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('rtl', arg);
        }
        else {
            return this.host.jqxButton('rtl');
        }
    };
    jqxButtonComponent.prototype.enableDefault = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('enableDefault', arg);
        }
        else {
            return this.host.jqxButton('enableDefault');
        }
    };
    jqxButtonComponent.prototype.cursor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('cursor', arg);
        }
        else {
            return this.host.jqxButton('cursor');
        }
    };
    jqxButtonComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textPosition', arg);
        }
        else {
            return this.host.jqxButton('textPosition');
        }
    };
    jqxButtonComponent.prototype.textImageRelation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxButton('textImageRelation');
        }
    };
    jqxButtonComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('theme', arg);
        }
        else {
            return this.host.jqxButton('theme');
        }
    };
    jqxButtonComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('template', arg);
        }
        else {
            return this.host.jqxButton('template');
        }
    };
    jqxButtonComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('width', arg);
        }
        else {
            return this.host.jqxButton('width');
        }
    };
    jqxButtonComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxButton('value', arg);
        }
        else {
            return this.host.jqxButton('value');
        }
    };
    // jqxButtonComponent functions
    jqxButtonComponent.prototype.destroy = function () {
        this.host.jqxButton('destroy');
    };
    jqxButtonComponent.prototype.focus = function () {
        this.host.jqxButton('focus');
    };
    jqxButtonComponent.prototype.render = function () {
        this.host.jqxButton('render');
    };
    jqxButtonComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxButton('val', value);
        }
        else {
            return this.host.jqxButton('val');
        }
    };
    ;
    jqxButtonComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
    };
    jqxButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxButtonComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('imgSrc'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrImgSrc", void 0);
    __decorate([
        Input('imgWidth'),
        __metadata("design:type", Object)
    ], jqxButtonComponent.prototype, "attrImgWidth", void 0);
    __decorate([
        Input('imgHeight'),
        __metadata("design:type", Object)
    ], jqxButtonComponent.prototype, "attrImgHeight", void 0);
    __decorate([
        Input('imgPosition'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrImgPosition", void 0);
    __decorate([
        Input('roundedCorners'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrRoundedCorners", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxButtonComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('enableDefault'),
        __metadata("design:type", Boolean)
    ], jqxButtonComponent.prototype, "attrEnableDefault", void 0);
    __decorate([
        Input('cursor'),
        __metadata("design:type", Boolean)
    ], jqxButtonComponent.prototype, "attrCursor", void 0);
    __decorate([
        Input('textPosition'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrTextPosition", void 0);
    __decorate([
        Input('textImageRelation'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrTextImageRelation", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('template'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrTemplate", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", String)
    ], jqxButtonComponent.prototype, "attrValue", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxButtonComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxButtonComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxButtonComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxButtonComponent.prototype, "onClick", void 0);
    jqxButtonComponent = __decorate([
        Component({
            selector: 'jqxButton',
            template: '<button><ng-content></ng-content></button>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxButtonComponent);
    return jqxButtonComponent;
}()); //jqxButtonComponent

var jqxButtonModule = /** @class */ (function () {
    function jqxButtonModule() {
    }
    jqxButtonModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxButtonComponent],
            exports: [jqxButtonComponent]
        })
    ], jqxButtonModule);
    return jqxButtonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxButtonComponent, jqxButtonModule };
