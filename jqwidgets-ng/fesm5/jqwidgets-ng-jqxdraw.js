import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import { __spread, __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
var jqxDrawComponent = /** @class */ (function () {
    function jqxDrawComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['renderEngine'];
        this.elementRef = containerElement;
    }
    jqxDrawComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDrawComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDraw(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDraw(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDraw(this.properties[i])) {
                        this.host.jqxDraw(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDrawComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDrawComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDrawComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxDrawComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDrawComponent.prototype.createComponent = function (options) {
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
        this.host.append('div');
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
    };
    jqxDrawComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDrawComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDrawComponent.prototype.setOptions = function (options) {
        this.host.jqxDraw('setOptions', options);
    };
    // jqxDrawComponent properties
    jqxDrawComponent.prototype.renderEngine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDraw('renderEngine', arg);
        }
        else {
            return this.host.jqxDraw('renderEngine');
        }
    };
    // jqxDrawComponent functions
    jqxDrawComponent.prototype.attr = function (element, attributes) {
        this.host.jqxDraw('attr', element, attributes);
    };
    jqxDrawComponent.prototype.circle = function (cx, cy, r, attributes) {
        return this.host.jqxDraw('circle', cx, cy, r, attributes);
    };
    jqxDrawComponent.prototype.clear = function () {
        this.host.jqxDraw('clear');
    };
    jqxDrawComponent.prototype.getAttr = function (element, attributes) {
        return this.host.jqxDraw('getAttr', element, attributes);
    };
    jqxDrawComponent.prototype.getSize = function () {
        return this.host.jqxDraw('getSize');
    };
    jqxDrawComponent.prototype.line = function (x1, y1, x2, y2, attributes) {
        return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
    };
    jqxDrawComponent.prototype.measureText = function (text, angle, attributes) {
        return this.host.jqxDraw('measureText', text, angle, attributes);
    };
    jqxDrawComponent.prototype.on = function (element, event, func) {
        this.host.jqxDraw('on', element, event, func);
    };
    jqxDrawComponent.prototype.off = function (element, event, func) {
        this.host.jqxDraw('off', element, event, func);
    };
    jqxDrawComponent.prototype.path = function (path, attributes) {
        return this.host.jqxDraw('path', path, attributes);
    };
    jqxDrawComponent.prototype.pieslice = function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    };
    jqxDrawComponent.prototype.refresh = function () {
        this.host.jqxDraw('refresh');
    };
    jqxDrawComponent.prototype.rect = function (x, y, width, height, attributes) {
        return this.host.jqxDraw('rect', x, y, width, height, attributes);
    };
    jqxDrawComponent.prototype.saveAsJPEG = function (image, url) {
        this.host.jqxDraw('saveAsJPEG', image, url);
    };
    jqxDrawComponent.prototype.saveAsPNG = function (image, url) {
        this.host.jqxDraw('saveAsPNG', image, url);
    };
    jqxDrawComponent.prototype.text = function (text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    };
    // jqxDrawComponent events
    jqxDrawComponent.prototype.__wireEvents__ = function () {
    };
    jqxDrawComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('renderEngine'),
        __metadata("design:type", String)
    ], jqxDrawComponent.prototype, "attrRenderEngine", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxDrawComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxDrawComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxDrawComponent.prototype, "autoCreate", void 0);
    jqxDrawComponent = __decorate([
        Component({
            selector: 'jqxDraw',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxDrawComponent);
    return jqxDrawComponent;
}()); //jqxDrawComponent

var jqxDrawModule = /** @class */ (function () {
    function jqxDrawModule() {
    }
    jqxDrawModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxDrawComponent],
            exports: [jqxDrawComponent]
        })
    ], jqxDrawModule);
    return jqxDrawModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDrawComponent, jqxDrawModule };
