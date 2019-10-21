import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxexpander';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxExpanderComponent = class jqxExpanderComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxExpanderComponent events
        this.onCollapsing = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onExpanding = new EventEmitter();
        this.onExpanded = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxExpander(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                        this.host.jqxExpander(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxExpander('setOptions', options);
    }
    // jqxExpanderComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('animationType', arg);
        }
        else {
            return this.host.jqxExpander('animationType');
        }
    }
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('arrowPosition', arg);
        }
        else {
            return this.host.jqxExpander('arrowPosition');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('collapseAnimationDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('disabled', arg);
        }
        else {
            return this.host.jqxExpander('disabled');
        }
    }
    expanded(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expanded', arg);
        }
        else {
            return this.host.jqxExpander('expanded');
        }
    }
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('expandAnimationDuration');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('height', arg);
        }
        else {
            return this.host.jqxExpander('height');
        }
    }
    headerPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('headerPosition', arg);
        }
        else {
            return this.host.jqxExpander('headerPosition');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('initContent', arg);
        }
        else {
            return this.host.jqxExpander('initContent');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('rtl', arg);
        }
        else {
            return this.host.jqxExpander('rtl');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('showArrow', arg);
        }
        else {
            return this.host.jqxExpander('showArrow');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('theme', arg);
        }
        else {
            return this.host.jqxExpander('theme');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('toggleMode', arg);
        }
        else {
            return this.host.jqxExpander('toggleMode');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('width', arg);
        }
        else {
            return this.host.jqxExpander('width');
        }
    }
    // jqxExpanderComponent functions
    collapse() {
        this.host.jqxExpander('collapse');
    }
    disable() {
        this.host.jqxExpander('disable');
    }
    destroy() {
        this.host.jqxExpander('destroy');
    }
    enable() {
        this.host.jqxExpander('enable');
    }
    expand() {
        this.host.jqxExpander('expand');
    }
    focus() {
        this.host.jqxExpander('focus');
    }
    getContent() {
        return this.host.jqxExpander('getContent');
    }
    getHeaderContent() {
        return this.host.jqxExpander('getHeaderContent');
    }
    invalidate() {
        this.host.jqxExpander('invalidate');
    }
    refresh() {
        this.host.jqxExpander('refresh');
    }
    render() {
        this.host.jqxExpander('render');
    }
    setHeaderContent(headerContent) {
        this.host.jqxExpander('setHeaderContent', headerContent);
    }
    setContent(content) {
        this.host.jqxExpander('setContent', content);
    }
    __wireEvents__() {
        this.host.on('collapsing', (eventData) => { this.onCollapsing.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('expanding', (eventData) => { this.onExpanding.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
    }
}; //jqxExpanderComponent
jqxExpanderComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('animationType'),
    tslib_1.__metadata("design:type", String)
], jqxExpanderComponent.prototype, "attrAnimationType", void 0);
tslib_1.__decorate([
    Input('arrowPosition'),
    tslib_1.__metadata("design:type", String)
], jqxExpanderComponent.prototype, "attrArrowPosition", void 0);
tslib_1.__decorate([
    Input('collapseAnimationDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxExpanderComponent.prototype, "attrCollapseAnimationDuration", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxExpanderComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('expanded'),
    tslib_1.__metadata("design:type", Boolean)
], jqxExpanderComponent.prototype, "attrExpanded", void 0);
tslib_1.__decorate([
    Input('expandAnimationDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxExpanderComponent.prototype, "attrExpandAnimationDuration", void 0);
tslib_1.__decorate([
    Input('headerPosition'),
    tslib_1.__metadata("design:type", String)
], jqxExpanderComponent.prototype, "attrHeaderPosition", void 0);
tslib_1.__decorate([
    Input('initContent'),
    tslib_1.__metadata("design:type", Function)
], jqxExpanderComponent.prototype, "attrInitContent", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxExpanderComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('showArrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxExpanderComponent.prototype, "attrShowArrow", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxExpanderComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toggleMode'),
    tslib_1.__metadata("design:type", String)
], jqxExpanderComponent.prototype, "attrToggleMode", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxExpanderComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "onCollapsing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "onCollapsed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "onExpanding", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxExpanderComponent.prototype, "onExpanded", void 0);
jqxExpanderComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxExpander',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxExpanderComponent);
export { jqxExpanderComponent };
