import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxribbon';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxlayout';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxLayoutComponent = class jqxLayoutComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxLayoutComponent events
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLayout(this.properties[i])) {
                        this.host.jqxLayout(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLayout', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLayout('setOptions', options);
    }
    // jqxLayoutComponent properties
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxLayout('contextMenu');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('height', arg);
        }
        else {
            return this.host.jqxLayout('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('layout', arg);
        }
        else {
            return this.host.jqxLayout('layout');
        }
    }
    minGroupHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxLayout('minGroupHeight');
        }
    }
    minGroupWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxLayout('minGroupWidth');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('resizable', arg);
        }
        else {
            return this.host.jqxLayout('resizable');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('rtl', arg);
        }
        else {
            return this.host.jqxLayout('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('theme', arg);
        }
        else {
            return this.host.jqxLayout('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLayout('width', arg);
        }
        else {
            return this.host.jqxLayout('width');
        }
    }
    // jqxLayoutComponent functions
    destroy() {
        this.host.jqxLayout('destroy');
    }
    loadLayout(Layout) {
        this.host.jqxLayout('loadLayout', Layout);
    }
    refresh() {
        this.host.jqxLayout('refresh');
    }
    render() {
        this.host.jqxLayout('render');
    }
    saveLayout() {
        return this.host.jqxLayout('saveLayout');
    }
    __wireEvents__() {
        this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
    }
}; //jqxLayoutComponent
jqxLayoutComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('contextMenu'),
    __metadata("design:type", Boolean)
], jqxLayoutComponent.prototype, "attrContextMenu", void 0);
__decorate([
    Input('layout'),
    __metadata("design:type", Array)
], jqxLayoutComponent.prototype, "attrLayout", void 0);
__decorate([
    Input('minGroupHeight'),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "attrMinGroupHeight", void 0);
__decorate([
    Input('minGroupWidth'),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "attrMinGroupWidth", void 0);
__decorate([
    Input('resizable'),
    __metadata("design:type", Boolean)
], jqxLayoutComponent.prototype, "attrResizable", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxLayoutComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxLayoutComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxLayoutComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "onPin", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "onResize", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxLayoutComponent.prototype, "onUnpin", void 0);
jqxLayoutComponent = __decorate([
    Component({
        selector: 'jqxLayout',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxLayoutComponent);

let jqxLayoutModule = class jqxLayoutModule {
};
jqxLayoutModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxLayoutComponent],
        exports: [jqxLayoutComponent]
    })
], jqxLayoutModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLayoutComponent, jqxLayoutModule };
