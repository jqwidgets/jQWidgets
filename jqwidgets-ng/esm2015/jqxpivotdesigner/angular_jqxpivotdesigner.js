import '../jqwidgets/jqxcore';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxPivotDesignerComponent = class jqxPivotDesignerComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['type', 'target'];
        this.elementRef = containerElement;
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotDesigner(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPivotDesigner(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPivotDesigner(this.properties[i])) {
                        this.host.jqxPivotDesigner(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotDesigner', options);
        this.__updateRect__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    setOptions(options) {
        this.host.jqxPivotDesigner('setOptions', options);
    }
    // jqxPivotDesignerComponent properties
    type(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotDesigner('type', arg);
        }
        else {
            return this.host.jqxPivotDesigner('type');
        }
    }
    target(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotDesigner('target', arg);
        }
        else {
            return this.host.jqxPivotDesigner('target');
        }
    }
    // jqxPivotDesignerComponent functions
    refresh() {
        this.host.jqxPivotDesigner('refresh');
    }
    __wireEvents__() {
    }
}; //jqxPivotDesignerComponent
jqxPivotDesignerComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('type'),
    tslib_1.__metadata("design:type", String)
], jqxPivotDesignerComponent.prototype, "attrType", void 0);
tslib_1.__decorate([
    Input('target'),
    tslib_1.__metadata("design:type", Object)
], jqxPivotDesignerComponent.prototype, "attrTarget", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxPivotDesignerComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxPivotDesignerComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxPivotDesignerComponent.prototype, "autoCreate", void 0);
jqxPivotDesignerComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxPivotDesigner',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxPivotDesignerComponent);
export { jqxPivotDesignerComponent };
