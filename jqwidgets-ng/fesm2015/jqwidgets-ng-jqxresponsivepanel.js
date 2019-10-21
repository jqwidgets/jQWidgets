import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxresponsivepanel';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxResponsivePanelComponent = class jqxResponsivePanelComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxResponsivePanel('setOptions', options);
    }
    // jqxResponsivePanelComponent properties
    animationDirection(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    }
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    }
    collapseBreakpoint(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    }
    collapseWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    }
    toggleButton(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    }
    toggleButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    }
    // jqxResponsivePanelComponent functions
    close() {
        this.host.jqxResponsivePanel('close');
    }
    destroy() {
        this.host.jqxResponsivePanel('destroy');
    }
    isCollapsed() {
        return this.host.jqxResponsivePanel('isCollapsed');
    }
    isOpened() {
        return this.host.jqxResponsivePanel('isOpened');
    }
    open() {
        this.host.jqxResponsivePanel('open');
    }
    refresh() {
        this.host.jqxResponsivePanel('refresh');
    }
    render() {
        this.host.jqxResponsivePanel('render');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
}; //jqxResponsivePanelComponent
jqxResponsivePanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationDirection'),
    __metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrAnimationDirection", void 0);
__decorate([
    Input('animationHideDelay'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    Input('animationShowDelay'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('autoClose'),
    __metadata("design:type", Boolean)
], jqxResponsivePanelComponent.prototype, "attrAutoClose", void 0);
__decorate([
    Input('collapseBreakpoint'),
    __metadata("design:type", Number)
], jqxResponsivePanelComponent.prototype, "attrCollapseBreakpoint", void 0);
__decorate([
    Input('collapseWidth'),
    __metadata("design:type", Number)
], jqxResponsivePanelComponent.prototype, "attrCollapseWidth", void 0);
__decorate([
    Input('initContent'),
    __metadata("design:type", Function)
], jqxResponsivePanelComponent.prototype, "attrInitContent", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('toggleButton'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButton", void 0);
__decorate([
    Input('toggleButtonSize'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButtonSize", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxResponsivePanelComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onOpen", void 0);
jqxResponsivePanelComponent = __decorate([
    Component({
        selector: 'jqxResponsivePanel',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxResponsivePanelComponent);

let jqxResponsivePanelModule = class jqxResponsivePanelModule {
};
jqxResponsivePanelModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxResponsivePanelComponent],
        exports: [jqxResponsivePanelComponent]
    })
], jqxResponsivePanelModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxResponsivePanelComponent, jqxResponsivePanelModule };
