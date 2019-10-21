import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxScrollBarComponent = class jqxScrollBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
        // jqxScrollBarComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxScrollBar('setOptions', options);
    }
    // jqxScrollBarComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('disabled', arg);
        }
        else {
            return this.host.jqxScrollBar('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('height', arg);
        }
        else {
            return this.host.jqxScrollBar('height');
        }
    }
    largestep(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('largestep', arg);
        }
        else {
            return this.host.jqxScrollBar('largestep');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('min', arg);
        }
        else {
            return this.host.jqxScrollBar('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('max', arg);
        }
        else {
            return this.host.jqxScrollBar('max');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('rtl', arg);
        }
        else {
            return this.host.jqxScrollBar('rtl');
        }
    }
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('step', arg);
        }
        else {
            return this.host.jqxScrollBar('step');
        }
    }
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('showButtons', arg);
        }
        else {
            return this.host.jqxScrollBar('showButtons');
        }
    }
    thumbMinSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('thumbMinSize', arg);
        }
        else {
            return this.host.jqxScrollBar('thumbMinSize');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('theme', arg);
        }
        else {
            return this.host.jqxScrollBar('theme');
        }
    }
    vertical(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('vertical', arg);
        }
        else {
            return this.host.jqxScrollBar('vertical');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('value', arg);
        }
        else {
            return this.host.jqxScrollBar('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('width', arg);
        }
        else {
            return this.host.jqxScrollBar('width');
        }
    }
    // jqxScrollBarComponent functions
    destroy() {
        this.host.jqxScrollBar('destroy');
    }
    isScrolling() {
        return this.host.jqxScrollBar('isScrolling');
    }
    setPosition(index) {
        this.host.jqxScrollBar('setPosition', index);
    }
    __wireEvents__() {
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
}; //jqxScrollBarComponent
jqxScrollBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxScrollBarComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('largestep'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrLargestep", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrMax", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxScrollBarComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('step'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrStep", void 0);
__decorate([
    Input('showButtons'),
    __metadata("design:type", Boolean)
], jqxScrollBarComponent.prototype, "attrShowButtons", void 0);
__decorate([
    Input('thumbMinSize'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrThumbMinSize", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxScrollBarComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('vertical'),
    __metadata("design:type", Boolean)
], jqxScrollBarComponent.prototype, "attrVertical", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Number)
], jqxScrollBarComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxScrollBarComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxScrollBarComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxScrollBarComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxScrollBarComponent.prototype, "onValueChanged", void 0);
jqxScrollBarComponent = __decorate([
    Component({
        selector: 'jqxScrollBar',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxScrollBarComponent);

let jqxScrollBarModule = class jqxScrollBarModule {
};
jqxScrollBarModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxScrollBarComponent],
        exports: [jqxScrollBarComponent]
    })
], jqxScrollBarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxScrollBarComponent, jqxScrollBarModule };
