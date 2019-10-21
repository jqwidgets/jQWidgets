import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxpopover';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxPopoverComponent = class jqxPopoverComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
        // jqxPopoverComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                        this.host.jqxPopover(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxPopover('setOptions', options);
    }
    // jqxPopoverComponent properties
    arrowOffsetValue(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('arrowOffsetValue', arg);
        }
        else {
            return this.host.jqxPopover('arrowOffsetValue');
        }
    }
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationOpenDelay');
        }
    }
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationCloseDelay');
        }
    }
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('autoClose', arg);
        }
        else {
            return this.host.jqxPopover('autoClose');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationType', arg);
        }
        else {
            return this.host.jqxPopover('animationType');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('height', arg);
        }
        else {
            return this.host.jqxPopover('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('initContent', arg);
        }
        else {
            return this.host.jqxPopover('initContent');
        }
    }
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('isModal', arg);
        }
        else {
            return this.host.jqxPopover('isModal');
        }
    }
    offset(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('offset', arg);
        }
        else {
            return this.host.jqxPopover('offset');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('position', arg);
        }
        else {
            return this.host.jqxPopover('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('rtl', arg);
        }
        else {
            return this.host.jqxPopover('rtl');
        }
    }
    selector(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('selector', arg);
        }
        else {
            return this.host.jqxPopover('selector');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showArrow', arg);
        }
        else {
            return this.host.jqxPopover('showArrow');
        }
    }
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showCloseButton', arg);
        }
        else {
            return this.host.jqxPopover('showCloseButton');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('width', arg);
        }
        else {
            return this.host.jqxPopover('width');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('title', arg);
        }
        else {
            return this.host.jqxPopover('title');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('theme', arg);
        }
        else {
            return this.host.jqxPopover('theme');
        }
    }
    // jqxPopoverComponent functions
    close() {
        this.host.jqxPopover('close');
    }
    destroy() {
        this.host.jqxPopover('destroy');
    }
    open() {
        this.host.jqxPopover('open');
    }
    __wireEvents__() {
        setTimeout(() => {
            this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
            this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        });
    }
}; //jqxPopoverComponent
jqxPopoverComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('arrowOffsetValue'),
    __metadata("design:type", Number)
], jqxPopoverComponent.prototype, "attrArrowOffsetValue", void 0);
__decorate([
    Input('animationOpenDelay'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAnimationOpenDelay", void 0);
__decorate([
    Input('animationCloseDelay'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrAnimationCloseDelay", void 0);
__decorate([
    Input('autoClose'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "attrAutoClose", void 0);
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxPopoverComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('initContent'),
    __metadata("design:type", Function)
], jqxPopoverComponent.prototype, "attrInitContent", void 0);
__decorate([
    Input('isModal'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "attrIsModal", void 0);
__decorate([
    Input('offset'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrOffset", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], jqxPopoverComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('selector'),
    __metadata("design:type", String)
], jqxPopoverComponent.prototype, "attrSelector", void 0);
__decorate([
    Input('showArrow'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "attrShowArrow", void 0);
__decorate([
    Input('showCloseButton'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    Input('title'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrTitle", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxPopoverComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxPopoverComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPopoverComponent.prototype, "onOpen", void 0);
jqxPopoverComponent = __decorate([
    Component({
        selector: 'jqxPopover',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxPopoverComponent);

let jqxPopoverModule = class jqxPopoverModule {
};
jqxPopoverModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxPopoverComponent],
        exports: [jqxPopoverComponent]
    })
], jqxPopoverModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPopoverComponent, jqxPopoverModule };
