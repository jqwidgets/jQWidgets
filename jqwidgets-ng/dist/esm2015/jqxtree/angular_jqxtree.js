import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets-scripts/jqwidgets/jqxpanel';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
import * as jqxtree from '../../jqwidgets-scripts/jqwidgets/jqxtree';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let jqxTreeComponent = class jqxTreeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTree('setOptions', options);
    }
    // jqxTreeComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    }
    allowDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    }
    allowDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    }
    checkboxes(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    }
    dragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    }
    dragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    }
    incrementalSearch(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    }
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    }
    // jqxTreeComponent functions
    addBefore(item, id) {
        this.host.jqxTree('addBefore', item, id);
    }
    addAfter(item, id) {
        this.host.jqxTree('addAfter', item, id);
    }
    addTo(item, id) {
        this.host.jqxTree('addTo', item, id);
    }
    clear() {
        this.host.jqxTree('clear');
    }
    checkAll() {
        this.host.jqxTree('checkAll');
    }
    checkItem(item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    }
    collapseAll() {
        this.host.jqxTree('collapseAll');
    }
    collapseItem(item) {
        this.host.jqxTree('collapseItem', item);
    }
    destroy() {
        this.host.jqxTree('destroy');
    }
    disableItem(item) {
        this.host.jqxTree('disableItem', item);
    }
    ensureVisible(item) {
        this.host.jqxTree('ensureVisible', item);
    }
    enableItem(item) {
        this.host.jqxTree('enableItem', item);
    }
    enableAll() {
        this.host.jqxTree('enableAll');
    }
    expandAll() {
        this.host.jqxTree('expandAll');
    }
    expandItem(item) {
        this.host.jqxTree('expandItem', item);
    }
    focus() {
        this.host.jqxTree('focus');
    }
    getCheckedItems() {
        return this.host.jqxTree('getCheckedItems');
    }
    getUncheckedItems() {
        return this.host.jqxTree('getUncheckedItems');
    }
    getItems() {
        return this.host.jqxTree('getItems');
    }
    getItem(element) {
        return this.host.jqxTree('getItem', element);
    }
    getSelectedItem() {
        return this.host.jqxTree('getSelectedItem');
    }
    getPrevItem(item) {
        return this.host.jqxTree('getPrevItem', item);
    }
    getNextItem(item) {
        return this.host.jqxTree('getNextItem', item);
    }
    hitTest(left, top) {
        return this.host.jqxTree('hitTest', left, top);
    }
    removeItem(item) {
        this.host.jqxTree('removeItem', item);
    }
    render() {
        this.host.jqxTree('render');
    }
    refresh() {
        this.host.jqxTree('refresh');
    }
    selectItem(item) {
        this.host.jqxTree('selectItem', item);
    }
    uncheckAll() {
        this.host.jqxTree('uncheckAll');
    }
    uncheckItem(item) {
        this.host.jqxTree('uncheckItem', item);
    }
    updateItem(item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('added', (eventData) => { this.onAdded.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
    }
}; //jqxTreeComponent
tslib_1.__decorate([
    Input('animationShowDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrAnimationShowDuration", void 0);
tslib_1.__decorate([
    Input('animationHideDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrAnimationHideDuration", void 0);
tslib_1.__decorate([
    Input('allowDrag'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrAllowDrag", void 0);
tslib_1.__decorate([
    Input('allowDrop'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrAllowDrop", void 0);
tslib_1.__decorate([
    Input('checkboxes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrCheckboxes", void 0);
tslib_1.__decorate([
    Input('dragStart'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeComponent.prototype, "attrDragStart", void 0);
tslib_1.__decorate([
    Input('dragEnd'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeComponent.prototype, "attrDragEnd", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('easing'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrEasing", void 0);
tslib_1.__decorate([
    Input('enableHover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrEnableHover", void 0);
tslib_1.__decorate([
    Input('hasThreeStates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrHasThreeStates", void 0);
tslib_1.__decorate([
    Input('incrementalSearch'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrIncrementalSearch", void 0);
tslib_1.__decorate([
    Input('keyboardNavigation'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrKeyboardNavigation", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('toggleIndicatorSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeComponent.prototype, "attrToggleIndicatorSize", void 0);
tslib_1.__decorate([
    Input('toggleMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrToggleMode", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxTreeComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onAdded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCheckChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onCollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onDragEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onExpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onItemClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeComponent.prototype, "onSelect", void 0);
jqxTreeComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxTree',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxTreeComponent);
export { jqxTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRyZWUvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUE4QjFCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsdUJBQXVCLEVBQUMsdUJBQXVCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBMFozUywwQkFBMEI7UUFDaEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE3WnJD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SUFBVCxNQUFNLEVBQUU7O3FEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7bURBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOztrREFBK0I7QUE1YjlCLGdCQUFnQjtJQUw1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsc0NBQXNDO0tBQ25ELENBQUM7NkNBZ0MrQixVQUFVO0dBOUI5QixnQkFBZ0IsQ0EwYzVCO1NBMWNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4VHJlZScsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RHVyYXRpb24nKSBhdHRyQW5pbWF0aW9uU2hvd0R1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicpIGF0dHJBbmltYXRpb25IaWRlRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnYWxsb3dEcmFnJykgYXR0ckFsbG93RHJhZzogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWxsb3dEcm9wJykgYXR0ckFsbG93RHJvcDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2hlY2tib3hlcycpIGF0dHJDaGVja2JveGVzOiBib29sZWFuO1xuICAgQElucHV0KCdkcmFnU3RhcnQnKSBhdHRyRHJhZ1N0YXJ0OiAoaXRlbToganF3aWRnZXRzLlRyZWVEcmFnU3RhcnRbJ2l0ZW0nXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZHJhZ0VuZCcpIGF0dHJEcmFnRW5kOiAoZHJhZ0l0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2RyYWdJdGVtJ10sIGRyb3BJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wSXRlbSddLCBhcmdzPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydhcmdzJ10sIGRyb3BQb3NpdGlvbj86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcFBvc2l0aW9uJ10sIHRyZWU/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ3RyZWUnXSkgPT4gYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Vhc2luZycpIGF0dHJFYXNpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2hhc1RocmVlU3RhdGVzJykgYXR0ckhhc1RocmVlU3RhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdpbmNyZW1lbnRhbFNlYXJjaCcpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaDogYm9vbGVhbjtcbiAgIEBJbnB1dCgna2V5Ym9hcmROYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCd0b2dnbGVJbmRpY2F0b3JTaXplJykgYXR0clRvZ2dsZUluZGljYXRvclNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgndG9nZ2xlTW9kZScpIGF0dHJUb2dnbGVNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJywnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJywnYWxsb3dEcmFnJywnYWxsb3dEcm9wJywnY2hlY2tib3hlcycsJ2RyYWdTdGFydCcsJ2RyYWdFbmQnLCdkaXNhYmxlZCcsJ2Vhc2luZycsJ2VuYWJsZUhvdmVyJywnaGVpZ2h0JywnaGFzVGhyZWVTdGF0ZXMnLCdpbmNyZW1lbnRhbFNlYXJjaCcsJ2tleWJvYXJkTmF2aWdhdGlvbicsJ3J0bCcsJ3NvdXJjZScsJ3RvZ2dsZUluZGljYXRvclNpemUnLCd0b2dnbGVNb2RlJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhUcmVlO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFRyZWUodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4VHJlZSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VHJlZScsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFRyZWVDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uU2hvd0R1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdhbmltYXRpb25TaG93RHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uSGlkZUR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdhbmltYXRpb25IaWRlRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dEcmFnKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhbGxvd0RyYWcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2FsbG93RHJhZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd0Ryb3AoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FsbG93RHJvcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnYWxsb3dEcm9wJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoZWNrYm94ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2NoZWNrYm94ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ1N0YXJ0KGFyZz86IChpdGVtOiBqcXdpZGdldHMuVHJlZURyYWdTdGFydFsnaXRlbSddKSA9PiBib29sZWFuKTogKGl0ZW06IGpxd2lkZ2V0cy5UcmVlRHJhZ1N0YXJ0WydpdGVtJ10pID0+IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2RyYWdTdGFydCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZHJhZ1N0YXJ0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdFbmQoYXJnPzogKGRyYWdJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcmFnSXRlbSddLCBkcm9wSXRlbT86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcEl0ZW0nXSwgYXJncz86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnYXJncyddLCBkcm9wUG9zaXRpb24/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2Ryb3BQb3NpdGlvbiddLCB0cmVlPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWyd0cmVlJ10pID0+IGJvb2xlYW4pOiAoZHJhZ0l0ZW0/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ2RyYWdJdGVtJ10sIGRyb3BJdGVtPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydkcm9wSXRlbSddLCBhcmdzPzoganF3aWRnZXRzLlRyZWVEcmFnRW5kWydhcmdzJ10sIGRyb3BQb3NpdGlvbj86IGpxd2lkZ2V0cy5UcmVlRHJhZ0VuZFsnZHJvcFBvc2l0aW9uJ10sIHRyZWU/OiBqcXdpZGdldHMuVHJlZURyYWdFbmRbJ3RyZWUnXSkgPT4gYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZHJhZ0VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZHJhZ0VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVhc2luZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2Vhc2luZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZWFzaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZW5hYmxlSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGFzVGhyZWVTdGF0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2hhc1RocmVlU3RhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdoYXNUaHJlZVN0YXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbmNyZW1lbnRhbFNlYXJjaChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgnaW5jcmVtZW50YWxTZWFyY2gnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2luY3JlbWVudGFsU2VhcmNoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGtleWJvYXJkTmF2aWdhdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgna2V5Ym9hcmROYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCdrZXlib2FyZE5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVJbmRpY2F0b3JTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgndG9nZ2xlSW5kaWNhdG9yU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgndG9nZ2xlSW5kaWNhdG9yU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZSgndG9nZ2xlTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgndG9nZ2xlTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFRyZWVDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGRCZWZvcmUoaXRlbTogYW55LCBpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnYWRkQmVmb3JlJywgaXRlbSwgaWQpO1xuICAgfVxuXG4gICBhZGRBZnRlcihpdGVtOiBhbnksIGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdhZGRBZnRlcicsIGl0ZW0sIGlkKTtcbiAgIH1cblxuICAgYWRkVG8oaXRlbTogYW55LCBpZDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2FkZFRvJywgaXRlbSwgaWQpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjbGVhcicpO1xuICAgfVxuXG4gICBjaGVja0FsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjaGVja0FsbCcpO1xuICAgfVxuXG4gICBjaGVja0l0ZW0oaXRlbTogYW55LCBjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnY2hlY2tJdGVtJywgaXRlbSwgY2hlY2tlZCk7XG4gICB9XG5cbiAgIGNvbGxhcHNlQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2NvbGxhcHNlQWxsJyk7XG4gICB9XG5cbiAgIGNvbGxhcHNlSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdjb2xsYXBzZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGRpc2FibGVJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2Rpc2FibGVJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGVuc3VyZVZpc2libGUoaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZW5zdXJlVmlzaWJsZScsIGl0ZW0pO1xuICAgfVxuXG4gICBlbmFibGVJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2VuYWJsZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgZW5hYmxlQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ2VuYWJsZUFsbCcpO1xuICAgfVxuXG4gICBleHBhbmRBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZXhwYW5kQWxsJyk7XG4gICB9XG5cbiAgIGV4cGFuZEl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgnZXhwYW5kSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRDaGVja2VkSXRlbXMoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVJdGVtPiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldENoZWNrZWRJdGVtcycpO1xuICAgfVxuXG4gICBnZXRVbmNoZWNrZWRJdGVtcygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUl0ZW0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0VW5jaGVja2VkSXRlbXMnKTtcbiAgIH1cblxuICAgZ2V0SXRlbXMoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVJdGVtPiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldEl0ZW1zJyk7XG4gICB9XG5cbiAgIGdldEl0ZW0oZWxlbWVudDogYW55KToganF3aWRnZXRzLlRyZWVJdGVtIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0SXRlbScsIGVsZW1lbnQpO1xuICAgfVxuXG4gICBnZXRTZWxlY3RlZEl0ZW0oKToganF3aWRnZXRzLlRyZWVJdGVtIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgnZ2V0U2VsZWN0ZWRJdGVtJyk7XG4gICB9XG5cbiAgIGdldFByZXZJdGVtKGl0ZW06IGFueSk6IGpxd2lkZ2V0cy5UcmVlSXRlbSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldFByZXZJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGdldE5leHRJdGVtKGl0ZW06IGFueSk6IGpxd2lkZ2V0cy5UcmVlSXRlbSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2dldE5leHRJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIGhpdFRlc3QobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWUoJ2hpdFRlc3QnLCBsZWZ0LCB0b3ApO1xuICAgfVxuXG4gICByZW1vdmVJdGVtKGl0ZW06IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3JlbW92ZUl0ZW0nLCBpdGVtKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWUoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCdzZWxlY3RJdGVtJywgaXRlbSk7XG4gICB9XG5cbiAgIHVuY2hlY2tBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgndW5jaGVja0FsbCcpO1xuICAgfVxuXG4gICB1bmNoZWNrSXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlKCd1bmNoZWNrSXRlbScsIGl0ZW0pO1xuICAgfVxuXG4gICB1cGRhdGVJdGVtKGl0ZW06IGFueSwgbmV3SXRlbTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZSgndXBkYXRlSXRlbScsIGl0ZW0sIG5ld0l0ZW0pO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBzdHJpbmcpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgndmFsJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZSgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeFRyZWVDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2FkZGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25BZGRlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGVja0NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sbGFwc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbGxhcHNlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdTdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdFbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdFbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaXRlbUNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25JdGVtQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVtb3ZlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVtb3ZlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4VHJlZUNvbXBvbmVudFxuIl19