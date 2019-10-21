import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxtoolbar';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxToolBarComponent = class jqxToolBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        // jqxToolBarComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxToolBar('setOptions', options);
    }
    // jqxToolBarComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('disabled', arg);
        }
        else {
            return this.host.jqxToolBar('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('height', arg);
        }
        else {
            return this.host.jqxToolBar('height');
        }
    }
    initTools(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('initTools', arg);
        }
        else {
            return this.host.jqxToolBar('initTools');
        }
    }
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minimizeWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minimizeWidth');
        }
    }
    minWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minWidth');
        }
    }
    maxWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('maxWidth', arg);
        }
        else {
            return this.host.jqxToolBar('maxWidth');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('rtl', arg);
        }
        else {
            return this.host.jqxToolBar('rtl');
        }
    }
    tools(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('tools', arg);
        }
        else {
            return this.host.jqxToolBar('tools');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('theme', arg);
        }
        else {
            return this.host.jqxToolBar('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('width', arg);
        }
        else {
            return this.host.jqxToolBar('width');
        }
    }
    // jqxToolBarComponent functions
    addTool(type, position, separator, menuToolIninitialization) {
        this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    }
    disableTool(index, disable) {
        this.host.jqxToolBar('disableTool', index, disable);
    }
    destroy() {
        this.host.jqxToolBar('destroy');
    }
    destroyTool(index) {
        this.host.jqxToolBar('destroyTool', index);
    }
    getTools() {
        return this.host.jqxToolBar('getTools');
    }
    render() {
        this.host.jqxToolBar('render');
    }
    refresh() {
        this.host.jqxToolBar('refresh');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
}; //jqxToolBarComponent
jqxToolBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxToolBarComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('initTools'),
    __metadata("design:type", Function)
], jqxToolBarComponent.prototype, "attrInitTools", void 0);
__decorate([
    Input('minimizeWidth'),
    __metadata("design:type", Number)
], jqxToolBarComponent.prototype, "attrMinimizeWidth", void 0);
__decorate([
    Input('minWidth'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrMinWidth", void 0);
__decorate([
    Input('maxWidth'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrMaxWidth", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxToolBarComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('tools'),
    __metadata("design:type", String)
], jqxToolBarComponent.prototype, "attrTools", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxToolBarComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxToolBarComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxToolBarComponent.prototype, "onOpen", void 0);
jqxToolBarComponent = __decorate([
    Component({
        selector: 'jqxToolbar',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxToolBarComponent);

let jqxToolBarModule = class jqxToolBarModule {
};
jqxToolBarModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxToolBarComponent],
        exports: [jqxToolBarComponent]
    })
], jqxToolBarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxToolBarComponent, jqxToolBarModule };
