import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxsortable';
import '../jqwidgets/jqxsplitter';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxkanban';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxKanbanComponent = class jqxKanbanComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['columnRenderer', 'columns', 'connectWith', 'headerHeight', 'headerWidth', 'height', 'itemRenderer', 'ready', 'rtl', 'source', 'resources', 'template', 'templateContent', 'theme', 'width'];
        // jqxKanbanComponent events
        this.onColumnAttrClicked = new EventEmitter();
        this.onColumnCollapsed = new EventEmitter();
        this.onColumnExpanded = new EventEmitter();
        this.onItemAttrClicked = new EventEmitter();
        this.onItemMoved = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKanban(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKanban(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKanban(this.properties[i])) {
                        this.host.jqxKanban(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxKanban('setOptions', options);
    }
    // jqxKanbanComponent properties
    columnRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columnRenderer', arg);
        }
        else {
            return this.host.jqxKanban('columnRenderer');
        }
    }
    columns(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columns', arg);
        }
        else {
            return this.host.jqxKanban('columns');
        }
    }
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('connectWith', arg);
        }
        else {
            return this.host.jqxKanban('connectWith');
        }
    }
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerHeight', arg);
        }
        else {
            return this.host.jqxKanban('headerHeight');
        }
    }
    headerWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerWidth', arg);
        }
        else {
            return this.host.jqxKanban('headerWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('height', arg);
        }
        else {
            return this.host.jqxKanban('height');
        }
    }
    itemRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('itemRenderer', arg);
        }
        else {
            return this.host.jqxKanban('itemRenderer');
        }
    }
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('ready', arg);
        }
        else {
            return this.host.jqxKanban('ready');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('rtl', arg);
        }
        else {
            return this.host.jqxKanban('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('source', arg);
        }
        else {
            return this.host.jqxKanban('source');
        }
    }
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('resources', arg);
        }
        else {
            return this.host.jqxKanban('resources');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('template', arg);
        }
        else {
            return this.host.jqxKanban('template');
        }
    }
    templateContent(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('templateContent', arg);
        }
        else {
            return this.host.jqxKanban('templateContent');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('theme', arg);
        }
        else {
            return this.host.jqxKanban('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('width', arg);
        }
        else {
            return this.host.jqxKanban('width');
        }
    }
    // jqxKanbanComponent functions
    addItem(newItem) {
        this.host.jqxKanban('addItem', newItem);
    }
    destroy() {
        this.host.jqxKanban('destroy');
    }
    getColumn(dataField) {
        return this.host.jqxKanban('getColumn', dataField);
    }
    getColumnItems(dataField) {
        return this.host.jqxKanban('getColumnItems', dataField);
    }
    getItems() {
        return this.host.jqxKanban('getItems');
    }
    removeItem(itemId) {
        this.host.jqxKanban('removeItem', itemId);
    }
    updateItem(itemId, newContent) {
        this.host.jqxKanban('updateItem', itemId, newContent);
    }
    __wireEvents__() {
        this.host.on('columnAttrClicked', (eventData) => { this.onColumnAttrClicked.emit(eventData); });
        this.host.on('columnCollapsed', (eventData) => { this.onColumnCollapsed.emit(eventData); });
        this.host.on('columnExpanded', (eventData) => { this.onColumnExpanded.emit(eventData); });
        this.host.on('itemAttrClicked', (eventData) => { this.onItemAttrClicked.emit(eventData); });
        this.host.on('itemMoved', (eventData) => { this.onItemMoved.emit(eventData); });
    }
}; //jqxKanbanComponent
jqxKanbanComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('columnRenderer'),
    __metadata("design:type", Function)
], jqxKanbanComponent.prototype, "attrColumnRenderer", void 0);
__decorate([
    Input('columns'),
    __metadata("design:type", Array)
], jqxKanbanComponent.prototype, "attrColumns", void 0);
__decorate([
    Input('connectWith'),
    __metadata("design:type", String)
], jqxKanbanComponent.prototype, "attrConnectWith", void 0);
__decorate([
    Input('headerHeight'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrHeaderHeight", void 0);
__decorate([
    Input('headerWidth'),
    __metadata("design:type", Number)
], jqxKanbanComponent.prototype, "attrHeaderWidth", void 0);
__decorate([
    Input('itemRenderer'),
    __metadata("design:type", Function)
], jqxKanbanComponent.prototype, "attrItemRenderer", void 0);
__decorate([
    Input('ready'),
    __metadata("design:type", Function)
], jqxKanbanComponent.prototype, "attrReady", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxKanbanComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrSource", void 0);
__decorate([
    Input('resources'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrResources", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxKanbanComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('templateContent'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrTemplateContent", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxKanbanComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxKanbanComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "onColumnAttrClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "onColumnCollapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "onColumnExpanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "onItemAttrClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxKanbanComponent.prototype, "onItemMoved", void 0);
jqxKanbanComponent = __decorate([
    Component({
        selector: 'jqxKanban',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxKanbanComponent);

let jqxKanbanModule = class jqxKanbanModule {
};
jqxKanbanModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxKanbanComponent],
        exports: [jqxKanbanComponent]
    })
], jqxKanbanModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxKanbanComponent, jqxKanbanModule };
