import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxdragdrop';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxpivot';
import '../jqwidgets/jqxpivotgrid';
import '../jqwidgets/jqxpivotdesigner';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxPivotGridComponent = class jqxPivotGridComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['source', 'localization', 'scrollBarsEnabled', 'selectionEnabled', 'multipleSelectionEnabled', 'treeStyleRows', 'autoResize', 'itemsRenderer', 'cellsRenderer'];
        // jqxPivotGridComponent events
        this.onPivotitemexpanding = new EventEmitter();
        this.onPivotitemexpanded = new EventEmitter();
        this.onPivotitemcollapsing = new EventEmitter();
        this.onPivotitemcollapsed = new EventEmitter();
        this.onSortchanging = new EventEmitter();
        this.onSortchanged = new EventEmitter();
        this.onSortremoving = new EventEmitter();
        this.onSortremoved = new EventEmitter();
        this.onPivotitemselectionchanged = new EventEmitter();
        this.onPivotcellmousedown = new EventEmitter();
        this.onPivotcellmouseup = new EventEmitter();
        this.onPivotcellclick = new EventEmitter();
        this.onPivotcelldblclick = new EventEmitter();
        this.onPivotitemmousedown = new EventEmitter();
        this.onPivotitemmouseup = new EventEmitter();
        this.onPivotitemclick = new EventEmitter();
        this.onPivotitemdblclick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPivotGrid(this.properties[i])) {
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotGrid', options);
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
        this.host.jqxPivotGrid('setOptions', options);
    }
    // jqxPivotGridComponent properties
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('source', arg);
        }
        else {
            return this.host.jqxPivotGrid('source');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('localization', arg);
        }
        else {
            return this.host.jqxPivotGrid('localization');
        }
    }
    scrollBarsEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('scrollBarsEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('scrollBarsEnabled');
        }
    }
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('selectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('selectionEnabled');
        }
    }
    multipleSelectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('multipleSelectionEnabled');
        }
    }
    treeStyleRows(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('treeStyleRows', arg);
        }
        else {
            return this.host.jqxPivotGrid('treeStyleRows');
        }
    }
    autoResize(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('autoResize', arg);
        }
        else {
            return this.host.jqxPivotGrid('autoResize');
        }
    }
    itemsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('itemsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('itemsRenderer');
        }
    }
    cellsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('cellsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('cellsRenderer');
        }
    }
    // jqxPivotGridComponent functions
    getInstance() {
        return this.host.jqxPivotGrid('getInstance');
    }
    refresh() {
        this.host.jqxPivotGrid('refresh');
    }
    getPivotRows() {
        return this.host.jqxPivotGrid('getPivotRows');
    }
    getPivotColumns() {
        return this.host.jqxPivotGrid('getPivotColumns');
    }
    getPivotCells() {
        return this.host.jqxPivotGrid('getPivotCells');
    }
    __wireEvents__() {
        this.host.on('pivotitemexpanding', (eventData) => { this.onPivotitemexpanding.emit(eventData); });
        this.host.on('pivotitemexpanded', (eventData) => { this.onPivotitemexpanded.emit(eventData); });
        this.host.on('pivotitemcollapsing', (eventData) => { this.onPivotitemcollapsing.emit(eventData); });
        this.host.on('pivotitemcollapsed', (eventData) => { this.onPivotitemcollapsed.emit(eventData); });
        this.host.on('sortchanging', (eventData) => { this.onSortchanging.emit(eventData); });
        this.host.on('sortchanged', (eventData) => { this.onSortchanged.emit(eventData); });
        this.host.on('sortremoving', (eventData) => { this.onSortremoving.emit(eventData); });
        this.host.on('sortremoved', (eventData) => { this.onSortremoved.emit(eventData); });
        this.host.on('pivotitemselectionchanged', (eventData) => { this.onPivotitemselectionchanged.emit(eventData); });
        this.host.on('pivotcellmousedown', (eventData) => { this.onPivotcellmousedown.emit(eventData); });
        this.host.on('pivotcellmouseup', (eventData) => { this.onPivotcellmouseup.emit(eventData); });
        this.host.on('pivotcellclick', (eventData) => { this.onPivotcellclick.emit(eventData); });
        this.host.on('pivotcelldblclick', (eventData) => { this.onPivotcelldblclick.emit(eventData); });
        this.host.on('pivotitemmousedown', (eventData) => { this.onPivotitemmousedown.emit(eventData); });
        this.host.on('pivotitemmouseup', (eventData) => { this.onPivotitemmouseup.emit(eventData); });
        this.host.on('pivotitemclick', (eventData) => { this.onPivotitemclick.emit(eventData); });
        this.host.on('pivotitemdblclick', (eventData) => { this.onPivotitemdblclick.emit(eventData); });
    }
}; //jqxPivotGridComponent
jqxPivotGridComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "attrSource", void 0);
__decorate([
    Input('localization'),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "attrLocalization", void 0);
__decorate([
    Input('scrollBarsEnabled'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "attrScrollBarsEnabled", void 0);
__decorate([
    Input('selectionEnabled'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "attrSelectionEnabled", void 0);
__decorate([
    Input('multipleSelectionEnabled'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "attrMultipleSelectionEnabled", void 0);
__decorate([
    Input('treeStyleRows'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "attrTreeStyleRows", void 0);
__decorate([
    Input('autoResize'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "attrAutoResize", void 0);
__decorate([
    Input('itemsRenderer'),
    __metadata("design:type", Function)
], jqxPivotGridComponent.prototype, "attrItemsRenderer", void 0);
__decorate([
    Input('cellsRenderer'),
    __metadata("design:type", Function)
], jqxPivotGridComponent.prototype, "attrCellsRenderer", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxPivotGridComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemexpanding", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemexpanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemcollapsing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemcollapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onSortchanging", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onSortchanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onSortremoving", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onSortremoved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemselectionchanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotcellmousedown", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotcellmouseup", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotcellclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotcelldblclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemmousedown", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemmouseup", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPivotGridComponent.prototype, "onPivotitemdblclick", void 0);
jqxPivotGridComponent = __decorate([
    Component({
        selector: 'jqxPivotGrid',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxPivotGridComponent);

let jqxPivotGridModule = class jqxPivotGridModule {
};
jqxPivotGridModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxPivotGridComponent],
        exports: [jqxPivotGridComponent]
    })
], jqxPivotGridModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPivotGridComponent, jqxPivotGridModule };
