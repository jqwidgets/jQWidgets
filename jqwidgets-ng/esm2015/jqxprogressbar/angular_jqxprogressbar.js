import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxprogressbar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxProgressBarComponent = class jqxProgressBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'colorRanges', 'disabled', 'height', 'layout', 'max', 'min', 'orientation', 'rtl', 'renderText', 'showText', 'template', 'theme', 'value', 'width'];
        // jqxProgressBarComponent events
        this.onComplete = new EventEmitter();
        this.onInvalidValue = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxProgressBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxProgressBar(this.properties[i])) {
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxProgressBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxProgressBar('setOptions', options);
    }
    // jqxProgressBarComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('animationDuration', arg);
        }
        else {
            return this.host.jqxProgressBar('animationDuration');
        }
    }
    colorRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('colorRanges', arg);
        }
        else {
            return this.host.jqxProgressBar('colorRanges');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('disabled', arg);
        }
        else {
            return this.host.jqxProgressBar('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('height', arg);
        }
        else {
            return this.host.jqxProgressBar('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('layout', arg);
        }
        else {
            return this.host.jqxProgressBar('layout');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('max', arg);
        }
        else {
            return this.host.jqxProgressBar('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('min', arg);
        }
        else {
            return this.host.jqxProgressBar('min');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('orientation', arg);
        }
        else {
            return this.host.jqxProgressBar('orientation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('rtl', arg);
        }
        else {
            return this.host.jqxProgressBar('rtl');
        }
    }
    renderText(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('renderText', arg);
        }
        else {
            return this.host.jqxProgressBar('renderText');
        }
    }
    showText(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('showText', arg);
        }
        else {
            return this.host.jqxProgressBar('showText');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('template', arg);
        }
        else {
            return this.host.jqxProgressBar('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('theme', arg);
        }
        else {
            return this.host.jqxProgressBar('theme');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('value', arg);
        }
        else {
            return this.host.jqxProgressBar('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('width', arg);
        }
        else {
            return this.host.jqxProgressBar('width');
        }
    }
    // jqxProgressBarComponent functions
    actualValue(value) {
        this.host.jqxProgressBar('actualValue', value);
    }
    destroy() {
        this.host.jqxProgressBar('destroy');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxProgressBar('val', value);
        }
        else {
            return this.host.jqxProgressBar('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('complete', (eventData) => { this.onComplete.emit(eventData); });
        this.host.on('invalidValue', (eventData) => { this.onInvalidValue.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
}; //jqxProgressBarComponent
jqxProgressBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('animationDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxProgressBarComponent.prototype, "attrAnimationDuration", void 0);
tslib_1.__decorate([
    Input('colorRanges'),
    tslib_1.__metadata("design:type", Array)
], jqxProgressBarComponent.prototype, "attrColorRanges", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxProgressBarComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('layout'),
    tslib_1.__metadata("design:type", String)
], jqxProgressBarComponent.prototype, "attrLayout", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('orientation'),
    tslib_1.__metadata("design:type", String)
], jqxProgressBarComponent.prototype, "attrOrientation", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxProgressBarComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('renderText'),
    tslib_1.__metadata("design:type", Function)
], jqxProgressBarComponent.prototype, "attrRenderText", void 0);
tslib_1.__decorate([
    Input('showText'),
    tslib_1.__metadata("design:type", Boolean)
], jqxProgressBarComponent.prototype, "attrShowText", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", String)
], jqxProgressBarComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxProgressBarComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxProgressBarComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "onComplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "onInvalidValue", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxProgressBarComponent.prototype, "onValueChanged", void 0);
jqxProgressBarComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxProgressBar',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxProgressBarComponent);
export { jqxProgressBarComponent };
