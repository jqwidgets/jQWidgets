import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxloader';
import { __spread, __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxLoaderComponent = /** @class */ (function () {
    function jqxLoaderComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'height', 'html', 'isModal', 'imagePosition', 'rtl', 'text', 'textPosition', 'theme', 'width'];
        this.elementRef = containerElement;
    }
    jqxLoaderComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxLoaderComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLoader(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLoader(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLoader(this.properties[i])) {
                        this.host.jqxLoader(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxLoaderComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxLoaderComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxLoaderComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxLoaderComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxLoaderComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLoader', options);
    };
    jqxLoaderComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxLoaderComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxLoaderComponent.prototype.setOptions = function (options) {
        this.host.jqxLoader('setOptions', options);
    };
    // jqxLoaderComponent properties
    jqxLoaderComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('autoOpen', arg);
        }
        else {
            return this.host.jqxLoader('autoOpen');
        }
    };
    jqxLoaderComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('height', arg);
        }
        else {
            return this.host.jqxLoader('height');
        }
    };
    jqxLoaderComponent.prototype.html = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('html', arg);
        }
        else {
            return this.host.jqxLoader('html');
        }
    };
    jqxLoaderComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('isModal', arg);
        }
        else {
            return this.host.jqxLoader('isModal');
        }
    };
    jqxLoaderComponent.prototype.imagePosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('imagePosition', arg);
        }
        else {
            return this.host.jqxLoader('imagePosition');
        }
    };
    jqxLoaderComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('rtl', arg);
        }
        else {
            return this.host.jqxLoader('rtl');
        }
    };
    jqxLoaderComponent.prototype.text = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('text', arg);
        }
        else {
            return this.host.jqxLoader('text');
        }
    };
    jqxLoaderComponent.prototype.textPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('textPosition', arg);
        }
        else {
            return this.host.jqxLoader('textPosition');
        }
    };
    jqxLoaderComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('theme', arg);
        }
        else {
            return this.host.jqxLoader('theme');
        }
    };
    jqxLoaderComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('width', arg);
        }
        else {
            return this.host.jqxLoader('width');
        }
    };
    // jqxLoaderComponent functions
    jqxLoaderComponent.prototype.close = function () {
        this.host.jqxLoader('close');
    };
    jqxLoaderComponent.prototype.open = function (left, top) {
        this.host.jqxLoader('open', left, top);
    };
    jqxLoaderComponent.prototype.__wireEvents__ = function () {
    };
    jqxLoaderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('autoOpen'),
        __metadata("design:type", Boolean)
    ], jqxLoaderComponent.prototype, "attrAutoOpen", void 0);
    __decorate([
        Input('html'),
        __metadata("design:type", String)
    ], jqxLoaderComponent.prototype, "attrHtml", void 0);
    __decorate([
        Input('isModal'),
        __metadata("design:type", Boolean)
    ], jqxLoaderComponent.prototype, "attrIsModal", void 0);
    __decorate([
        Input('imagePosition'),
        __metadata("design:type", String)
    ], jqxLoaderComponent.prototype, "attrImagePosition", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxLoaderComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('text'),
        __metadata("design:type", Object)
    ], jqxLoaderComponent.prototype, "attrText", void 0);
    __decorate([
        Input('textPosition'),
        __metadata("design:type", String)
    ], jqxLoaderComponent.prototype, "attrTextPosition", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxLoaderComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxLoaderComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxLoaderComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxLoaderComponent.prototype, "autoCreate", void 0);
    jqxLoaderComponent = __decorate([
        Component({
            selector: 'jqxLoader',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxLoaderComponent);
    return jqxLoaderComponent;
}()); //jqxLoaderComponent

var jqxLoaderModule = /** @class */ (function () {
    function jqxLoaderModule() {
    }
    jqxLoaderModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxLoaderComponent],
            exports: [jqxLoaderComponent]
        })
    ], jqxLoaderModule);
    return jqxLoaderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLoaderComponent, jqxLoaderModule };
