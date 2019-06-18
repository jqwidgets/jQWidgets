import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxresponsivepanel from '../../jqwidgets-scripts/jqwidgets/jqxresponsivepanel';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
tslib_1.__decorate([
    Input('animationDirection'),
    tslib_1.__metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrAnimationDirection", void 0);
tslib_1.__decorate([
    Input('animationHideDelay'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationHideDelay", void 0);
tslib_1.__decorate([
    Input('animationShowDelay'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrAnimationShowDelay", void 0);
tslib_1.__decorate([
    Input('animationType'),
    tslib_1.__metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrAnimationType", void 0);
tslib_1.__decorate([
    Input('autoClose'),
    tslib_1.__metadata("design:type", Boolean)
], jqxResponsivePanelComponent.prototype, "attrAutoClose", void 0);
tslib_1.__decorate([
    Input('collapseBreakpoint'),
    tslib_1.__metadata("design:type", Number)
], jqxResponsivePanelComponent.prototype, "attrCollapseBreakpoint", void 0);
tslib_1.__decorate([
    Input('collapseWidth'),
    tslib_1.__metadata("design:type", Number)
], jqxResponsivePanelComponent.prototype, "attrCollapseWidth", void 0);
tslib_1.__decorate([
    Input('initContent'),
    tslib_1.__metadata("design:type", Function)
], jqxResponsivePanelComponent.prototype, "attrInitContent", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxResponsivePanelComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toggleButton'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButton", void 0);
tslib_1.__decorate([
    Input('toggleButtonSize'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrToggleButtonSize", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxResponsivePanelComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onCollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onExpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxResponsivePanelComponent.prototype, "onOpen", void 0);
jqxResponsivePanelComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxResponsivePanel',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxResponsivePanelComponent);
export { jqxResponsivePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4cmVzcG9uc2l2ZXBhbmVsLyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXhyZXNwb25zaXZlcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUF1QnJDLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBMFBsTyxxQ0FBcUM7UUFDM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF4UG5DLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRixXQUFXLENBQUMsT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFD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Qzs7MkVBQWdDO0FBQ3BDO0lBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3NFQUEyQjtBQUM1QjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOztvRUFBNkI7QUFDbEM7SUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzs4REFBbUI7QUFDWDtJQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOztxRUFBZ0M7QUFDM0I7SUFBMUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDOzt5RUFBdUM7QUFDakQ7SUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzs4REFBNEI7QUFDMUI7SUFBaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7K0RBQTZCO0FBRXZCO0lBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7OytEQUE0QjtBQTZQdkM7SUFBVCxNQUFNLEVBQUU7OzREQUE4QjtBQUM3QjtJQUFULE1BQU0sRUFBRTs7K0RBQWlDO0FBQ2hDO0lBQVQsTUFBTSxFQUFFOzs2REFBK0I7QUFDOUI7SUFBVCxNQUFNLEVBQUU7OzJEQUE2QjtBQWhSNUIsMkJBQTJCO0lBTHZDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLHNDQUFzQztLQUNuRCxDQUFDOzZDQXlCK0IsVUFBVTtHQXZCOUIsMkJBQTJCLENBeVJ2QztTQXpSWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFJlc3BvbnNpdmVQYW5lbCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvbkRpcmVjdGlvbicpIGF0dHJBbmltYXRpb25EaXJlY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgnYW5pbWF0aW9uSGlkZURlbGF5JykgYXR0ckFuaW1hdGlvbkhpZGVEZWxheTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdhbmltYXRpb25TaG93RGVsYXknKSBhdHRyQW5pbWF0aW9uU2hvd0RlbGF5OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhdXRvQ2xvc2UnKSBhdHRyQXV0b0Nsb3NlOiBib29sZWFuO1xuICAgQElucHV0KCdjb2xsYXBzZUJyZWFrcG9pbnQnKSBhdHRyQ29sbGFwc2VCcmVha3BvaW50OiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbGxhcHNlV2lkdGgnKSBhdHRyQ29sbGFwc2VXaWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdpbml0Q29udGVudCcpIGF0dHJJbml0Q29udGVudDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndG9nZ2xlQnV0dG9uJykgYXR0clRvZ2dsZUJ1dHRvbjogc3RyaW5nIHwgYW55O1xuICAgQElucHV0KCd0b2dnbGVCdXR0b25TaXplJykgYXR0clRvZ2dsZUJ1dHRvblNpemU6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25EaXJlY3Rpb24nLCdhbmltYXRpb25IaWRlRGVsYXknLCdhbmltYXRpb25TaG93RGVsYXknLCdhbmltYXRpb25UeXBlJywnYXV0b0Nsb3NlJywnY29sbGFwc2VCcmVha3BvaW50JywnY29sbGFwc2VXaWR0aCcsJ2hlaWdodCcsJ2luaXRDb250ZW50JywndGhlbWUnLCd0b2dnbGVCdXR0b24nLCd0b2dnbGVCdXR0b25TaXplJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4UmVzcG9uc2l2ZVBhbmVsO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhSZXNwb25zaXZlUGFuZWwnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFJlc3BvbnNpdmVQYW5lbENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EaXJlY3Rpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvbkRpcmVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25EaXJlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uSGlkZURlbGF5KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25IaWRlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uSGlkZURlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvblNob3dEZWxheShhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnYW5pbWF0aW9uU2hvd0RlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvblNob3dEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbmltYXRpb25UeXBlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2FuaW1hdGlvblR5cGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b0Nsb3NlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2F1dG9DbG9zZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdhdXRvQ2xvc2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sbGFwc2VCcmVha3BvaW50KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdjb2xsYXBzZUJyZWFrcG9pbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY29sbGFwc2VCcmVha3BvaW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbGxhcHNlV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2NvbGxhcHNlV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnY29sbGFwc2VXaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdENvbnRlbnQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaW5pdENvbnRlbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnaW5pdENvbnRlbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZ2dsZUJ1dHRvbihhcmc/OiBzdHJpbmcgfCBhbnkpOiBzdHJpbmcgfCBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgndG9nZ2xlQnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RvZ2dsZUJ1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVCdXR0b25TaXplKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCd0b2dnbGVCdXR0b25TaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3RvZ2dsZUJ1dHRvblNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhSZXNwb25zaXZlUGFuZWwoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdjbG9zZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdpc0NvbGxhcHNlZCcpO1xuICAgfVxuXG4gICBpc09wZW5lZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdpc09wZW5lZCcpO1xuICAgfVxuXG4gICBvcGVuKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgnb3BlbicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFJlc3BvbnNpdmVQYW5lbCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4UmVzcG9uc2l2ZVBhbmVsKCdyZW5kZXInKTtcbiAgIH1cblxuXG4gICAvLyBqcXhSZXNwb25zaXZlUGFuZWxDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sbGFwc2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignb3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4UmVzcG9uc2l2ZVBhbmVsQ29tcG9uZW50XG4iXX0=