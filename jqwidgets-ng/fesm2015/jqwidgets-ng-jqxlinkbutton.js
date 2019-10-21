import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import { __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxLinkButtonComponent = class jqxLinkButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'rtl', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinkButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinkButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinkButton(this.properties[i])) {
                        this.host.jqxLinkButton(this.properties[i], this[attrName]);
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
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinkButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLinkButton('setOptions', options);
    }
    // jqxLinkButtonComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('disabled', arg);
        }
        else {
            return this.host.jqxLinkButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('height', arg);
        }
        else {
            return this.host.jqxLinkButton('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('rtl', arg);
        }
        else {
            return this.host.jqxLinkButton('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('theme', arg);
        }
        else {
            return this.host.jqxLinkButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('width', arg);
        }
        else {
            return this.host.jqxLinkButton('width');
        }
    }
    __wireEvents__() {
    }
}; //jqxLinkButtonComponent
jqxLinkButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxLinkButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxLinkButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxLinkButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxLinkButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxLinkButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxLinkButtonComponent.prototype, "autoCreate", void 0);
jqxLinkButtonComponent = __decorate([
    Component({
        selector: 'jqxLinkButton',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxLinkButtonComponent);

let jqxLinkButtonModule = class jqxLinkButtonModule {
};
jqxLinkButtonModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxLinkButtonComponent],
        exports: [jqxLinkButtonComponent]
    })
], jqxLinkButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLinkButtonComponent, jqxLinkButtonModule };
