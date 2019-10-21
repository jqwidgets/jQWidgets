import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import { __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxDrawComponent = class jqxDrawComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['renderEngine'];
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
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
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
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
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDraw('setOptions', options);
    }
    // jqxDrawComponent properties
    renderEngine(arg) {
        if (arg !== undefined) {
            this.host.jqxDraw('renderEngine', arg);
        }
        else {
            return this.host.jqxDraw('renderEngine');
        }
    }
    // jqxDrawComponent functions
    attr(element, attributes) {
        this.host.jqxDraw('attr', element, attributes);
    }
    circle(cx, cy, r, attributes) {
        return this.host.jqxDraw('circle', cx, cy, r, attributes);
    }
    clear() {
        this.host.jqxDraw('clear');
    }
    getAttr(element, attributes) {
        return this.host.jqxDraw('getAttr', element, attributes);
    }
    getSize() {
        return this.host.jqxDraw('getSize');
    }
    line(x1, y1, x2, y2, attributes) {
        return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
    }
    measureText(text, angle, attributes) {
        return this.host.jqxDraw('measureText', text, angle, attributes);
    }
    on(element, event, func) {
        this.host.jqxDraw('on', element, event, func);
    }
    off(element, event, func) {
        this.host.jqxDraw('off', element, event, func);
    }
    path(path, attributes) {
        return this.host.jqxDraw('path', path, attributes);
    }
    pieslice(cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    }
    refresh() {
        this.host.jqxDraw('refresh');
    }
    rect(x, y, width, height, attributes) {
        return this.host.jqxDraw('rect', x, y, width, height, attributes);
    }
    saveAsJPEG(image, url) {
        this.host.jqxDraw('saveAsJPEG', image, url);
    }
    saveAsPNG(image, url) {
        this.host.jqxDraw('saveAsPNG', image, url);
    }
    text(text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    }
    // jqxDrawComponent events
    __wireEvents__() {
    }
}; //jqxDrawComponent
jqxDrawComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

let jqxDrawModule = class jqxDrawModule {
};
jqxDrawModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxDrawComponent],
        exports: [jqxDrawComponent]
    })
], jqxDrawModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDrawComponent, jqxDrawModule };
