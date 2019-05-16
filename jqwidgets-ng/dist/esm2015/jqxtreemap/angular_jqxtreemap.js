import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtreemap from '../../jqwidgets-scripts/jqwidgets/jqxtreemap';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTreeMapComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
        // jqxTreeMapComponent events
        this.onBindingComplete = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeMap(this.properties[i])) {
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
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
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxTreeMap('setOptions', options);
    }
    // jqxTreeMapComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    baseColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('baseColor', arg);
        }
        else {
            return this.host.jqxTreeMap('baseColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRanges', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRanges');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorRange(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRange', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRange');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorMode', arg);
        }
        else {
            return this.host.jqxTreeMap('colorMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('displayMember', arg);
        }
        else {
            return this.host.jqxTreeMap('displayMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('height', arg);
        }
        else {
            return this.host.jqxTreeMap('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hoverEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('hoverEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('hoverEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('headerHeight', arg);
        }
        else {
            return this.host.jqxTreeMap('headerHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendLabel', arg);
        }
        else {
            return this.host.jqxTreeMap('legendLabel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendPosition', arg);
        }
        else {
            return this.host.jqxTreeMap('legendPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendScaleCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendScaleCallback', arg);
        }
        else {
            return this.host.jqxTreeMap('legendScaleCallback');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderCallbacks(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('renderCallbacks', arg);
        }
        else {
            return this.host.jqxTreeMap('renderCallbacks');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('selectionEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('selectionEnabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('showLegend', arg);
        }
        else {
            return this.host.jqxTreeMap('showLegend');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('source', arg);
        }
        else {
            return this.host.jqxTreeMap('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('theme', arg);
        }
        else {
            return this.host.jqxTreeMap('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('valueMember', arg);
        }
        else {
            return this.host.jqxTreeMap('valueMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('width', arg);
        }
        else {
            return this.host.jqxTreeMap('width');
        }
    }
    // jqxTreeMapComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxTreeMap('destroy');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxTreeMap('render');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingComplete.emit(eventData); }));
    }
} //jqxTreeMapComponent
jqxTreeMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTreeMap',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTreeMapComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxTreeMapComponent.propDecorators = {
    attrBaseColor: [{ type: Input, args: ['baseColor',] }],
    attrColorRanges: [{ type: Input, args: ['colorRanges',] }],
    attrColorRange: [{ type: Input, args: ['colorRange',] }],
    attrColorMode: [{ type: Input, args: ['colorMode',] }],
    attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
    attrHoverEnabled: [{ type: Input, args: ['hoverEnabled',] }],
    attrHeaderHeight: [{ type: Input, args: ['headerHeight',] }],
    attrLegendLabel: [{ type: Input, args: ['legendLabel',] }],
    attrLegendPosition: [{ type: Input, args: ['legendPosition',] }],
    attrLegendScaleCallback: [{ type: Input, args: ['legendScaleCallback',] }],
    attrRenderCallbacks: [{ type: Input, args: ['renderCallbacks',] }],
    attrSelectionEnabled: [{ type: Input, args: ['selectionEnabled',] }],
    attrShowLegend: [{ type: Input, args: ['showLegend',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrValueMember: [{ type: Input, args: ['valueMember',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onBindingComplete: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrBaseColor;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrColorRanges;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrColorRange;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrColorMode;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrHoverEnabled;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrHeaderHeight;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrLegendLabel;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrLegendPosition;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrLegendScaleCallback;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrRenderCallbacks;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrSelectionEnabled;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrShowLegend;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrSource;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTreeMapComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTreeMapComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTreeMapComponent.prototype.properties;
    /** @type {?} */
    jqxTreeMapComponent.prototype.host;
    /** @type {?} */
    jqxTreeMapComponent.prototype.elementRef;
    /** @type {?} */
    jqxTreeMapComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTreeMapComponent.prototype.onBindingComplete;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlbWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRyZWVtYXAvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRyZWVtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUE0QjdCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMscUJBQXFCLEVBQUMsaUJBQWlCLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQWdSdlEsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTFROUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixXQUFXLENBQUMsT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJ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U0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsWUFBWTs0QkFDbEIsS0FBSyxTQUFDLFdBQVc7Z0NBQ2pCLEtBQUssU0FBQyxlQUFlOytCQUNyQixLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLGNBQWM7OEJBQ3BCLEtBQUssU0FBQyxhQUFhO2lDQUNuQixLQUFLLFNBQUMsZ0JBQWdCO3NDQUN0QixLQUFLLFNBQUMscUJBQXFCO2tDQUMzQixLQUFLLFNBQUMsaUJBQWlCO21DQUN2QixLQUFLLFNBQUMsa0JBQWtCOzZCQUN4QixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLE9BQU87OEJBQ2IsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3lCQUVkLEtBQUssU0FBQyxhQUFhO2dDQWtSbkIsTUFBTTs7OztJQXJTUCw0Q0FBMEM7O0lBQzFDLDhDQUEyRTs7SUFDM0UsNkNBQTRDOztJQUM1Qyw0Q0FBMEM7O0lBQzFDLGdEQUFrRDs7SUFDbEQsK0NBQWlEOztJQUNqRCwrQ0FBZ0Q7O0lBQ2hELDhDQUE4Qzs7SUFDOUMsaURBQTZFOztJQUM3RSxzREFBeUg7O0lBQ3pILGtEQUFtRDs7SUFDbkQsbURBQXlEOztJQUN6RCw2Q0FBNkM7O0lBQzdDLHlDQUFpQzs7SUFDakMsd0NBQWtDOztJQUNsQyw4Q0FBOEM7O0lBQzlDLHdDQUEyQzs7SUFDM0MseUNBQTZDOztJQUU3Qyx5Q0FBaUQ7O0lBRWpELHlDQUFpUjs7SUFDalIsbUNBQVU7O0lBQ1YseUNBQXVCOztJQUN2QiwyQ0FBb0M7O0lBNlFwQyxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRyZWVNYXAnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRyZWVNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYmFzZUNvbG9yJykgYXR0ckJhc2VDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdjb2xvclJhbmdlcycpIGF0dHJDb2xvclJhbmdlczogQXJyYXk8anF3aWRnZXRzLlRyZWVNYXBDb2xvclJhbmdlcz47XG4gICBASW5wdXQoJ2NvbG9yUmFuZ2UnKSBhdHRyQ29sb3JSYW5nZTogbnVtYmVyO1xuICAgQElucHV0KCdjb2xvck1vZGUnKSBhdHRyQ29sb3JNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc3BsYXlNZW1iZXInKSBhdHRyRGlzcGxheU1lbWJlcjogc3RyaW5nO1xuICAgQElucHV0KCdob3ZlckVuYWJsZWQnKSBhdHRySG92ZXJFbmFibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdoZWFkZXJIZWlnaHQnKSBhdHRySGVhZGVySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2xlZ2VuZExhYmVsJykgYXR0ckxlZ2VuZExhYmVsOiBzdHJpbmc7XG4gICBASW5wdXQoJ2xlZ2VuZFBvc2l0aW9uJykgYXR0ckxlZ2VuZFBvc2l0aW9uOiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFBvc2l0aW9uO1xuICAgQElucHV0KCdsZWdlbmRTY2FsZUNhbGxiYWNrJykgYXR0ckxlZ2VuZFNjYWxlQ2FsbGJhY2s6ICh2OiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFNjYWxlQ2FsbGJhY2tbJ3YnXSkgPT4gc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdyZW5kZXJDYWxsYmFja3MnKSBhdHRyUmVuZGVyQ2FsbGJhY2tzOiBhbnk7XG4gICBASW5wdXQoJ3NlbGVjdGlvbkVuYWJsZWQnKSBhdHRyU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0xlZ2VuZCcpIGF0dHJTaG93TGVnZW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYmFzZUNvbG9yJywnY29sb3JSYW5nZXMnLCdjb2xvclJhbmdlJywnY29sb3JNb2RlJywnZGlzcGxheU1lbWJlcicsJ2hlaWdodCcsJ2hvdmVyRW5hYmxlZCcsJ2hlYWRlckhlaWdodCcsJ2xlZ2VuZExhYmVsJywnbGVnZW5kUG9zaXRpb24nLCdsZWdlbmRTY2FsZUNhbGxiYWNrJywncmVuZGVyQ2FsbGJhY2tzJywnc2VsZWN0aW9uRW5hYmxlZCcsJ3Nob3dMZWdlbmQnLCdzb3VyY2UnLCd0aGVtZScsJ3ZhbHVlTWVtYmVyJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VHJlZU1hcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUcmVlTWFwKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRyZWVNYXAodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuaG9zdFswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzFweCc7XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhUcmVlTWFwJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4VHJlZU1hcENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBiYXNlQ29sb3IoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdiYXNlQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Jhc2VDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xvclJhbmdlcyhhcmc/OiBBcnJheTxqcXdpZGdldHMuVHJlZU1hcENvbG9yUmFuZ2VzPik6IEFycmF5PGpxd2lkZ2V0cy5UcmVlTWFwQ29sb3JSYW5nZXM+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdjb2xvclJhbmdlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnY29sb3JSYW5nZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sb3JSYW5nZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2NvbG9yUmFuZ2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2NvbG9yUmFuZ2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sb3JNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnY29sb3JNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdjb2xvck1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzcGxheU1lbWJlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Rpc3BsYXlNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Rpc3BsYXlNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaG92ZXJFbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdob3ZlckVuYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2hvdmVyRW5hYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWFkZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdoZWFkZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2hlYWRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRMYWJlbChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2xlZ2VuZExhYmVsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdsZWdlbmRMYWJlbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRQb3NpdGlvbihhcmc/OiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFBvc2l0aW9uKToganF3aWRnZXRzLlRyZWVNYXBMZWdlbmRQb3NpdGlvbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2xlZ2VuZFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZFNjYWxlQ2FsbGJhY2soYXJnPzogKHY6IGpxd2lkZ2V0cy5UcmVlTWFwTGVnZW5kU2NhbGVDYWxsYmFja1sndiddKSA9PiBzdHJpbmcgfCBudW1iZXIpOiAodjoganF3aWRnZXRzLlRyZWVNYXBMZWdlbmRTY2FsZUNhbGxiYWNrWyd2J10pID0+IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kU2NhbGVDYWxsYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kU2NhbGVDYWxsYmFjaycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJDYWxsYmFja3MoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdyZW5kZXJDYWxsYmFja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3JlbmRlckNhbGxiYWNrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25FbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzZWxlY3Rpb25FbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dMZWdlbmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3Nob3dMZWdlbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3Nob3dMZWdlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWVNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd2YWx1ZU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgndmFsdWVNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlTWFwQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdyZW5kZXInKTtcbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlTWFwQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRyZWVNYXBDb21wb25lbnRcbiJdfQ==