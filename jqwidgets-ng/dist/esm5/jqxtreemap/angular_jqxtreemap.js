import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxtreemap from '../../jqwidgets-scripts/jqwidgets/jqxtreemap';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTreeMapComponent = /** @class */ (function () {
    function jqxTreeMapComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
        // jqxTreeMapComponent events
        this.onBindingComplete = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxTreeMapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxTreeMapComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxTreeMapComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxTreeMapComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTreeMapComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTreeMapComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxTreeMapComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTreeMap('setOptions', options);
    };
    // jqxTreeMapComponent properties
    // jqxTreeMapComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.baseColor = 
    // jqxTreeMapComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('baseColor', arg);
        }
        else {
            return this.host.jqxTreeMap('baseColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.colorRanges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRanges', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRanges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.colorRange = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRange', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRange');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.colorMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorMode', arg);
        }
        else {
            return this.host.jqxTreeMap('colorMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.displayMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('displayMember', arg);
        }
        else {
            return this.host.jqxTreeMap('displayMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('height', arg);
        }
        else {
            return this.host.jqxTreeMap('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.hoverEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('hoverEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('hoverEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.headerHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('headerHeight', arg);
        }
        else {
            return this.host.jqxTreeMap('headerHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.legendLabel = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendLabel', arg);
        }
        else {
            return this.host.jqxTreeMap('legendLabel');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.legendPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendPosition', arg);
        }
        else {
            return this.host.jqxTreeMap('legendPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.legendScaleCallback = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendScaleCallback', arg);
        }
        else {
            return this.host.jqxTreeMap('legendScaleCallback');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.renderCallbacks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('renderCallbacks', arg);
        }
        else {
            return this.host.jqxTreeMap('renderCallbacks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.selectionEnabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('selectionEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('selectionEnabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.showLegend = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('showLegend', arg);
        }
        else {
            return this.host.jqxTreeMap('showLegend');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('source', arg);
        }
        else {
            return this.host.jqxTreeMap('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('theme', arg);
        }
        else {
            return this.host.jqxTreeMap('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.valueMember = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('valueMember', arg);
        }
        else {
            return this.host.jqxTreeMap('valueMember');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeMapComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('width', arg);
        }
        else {
            return this.host.jqxTreeMap('width');
        }
    };
    // jqxTreeMapComponent functions
    // jqxTreeMapComponent functions
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.destroy = 
    // jqxTreeMapComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxTreeMap('destroy');
    };
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxTreeMap('render');
    };
    /**
     * @return {?}
     */
    jqxTreeMapComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
    };
    jqxTreeMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTreeMap',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTreeMapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxTreeMapComponent;
}()); //jqxTreeMapComponent
export { jqxTreeMapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlbWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeHRyZWVtYXAvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeHRyZWVtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQWlDRyw2QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxxQkFBcUIsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBZ1J2USxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBMVE5QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3RHLFFBQVEsR0FBWSxLQUFLO2dCQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEVBQUU7NEJBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDeEY7d0JBQ0QsSUFBSSxRQUFRLEVBQUU7NEJBQ1gsT0FBTyxLQUFLLENBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDekQsU0FBUztxQkFDWDtvQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQzNEO2lCQUNIO2FBQ0g7U0FDSDtJQUNKLENBQUM7Ozs7OztJQUVELHlDQUFXOzs7OztJQUFYLFVBQVksU0FBYyxFQUFFLFNBQWM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDekQsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Y7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDhDQUFnQjs7O0lBQWhCOztZQUNPLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCx5Q0FBVzs7Ozs7SUFBWCxVQUFZLFFBQXFCLEVBQUUsT0FBb0I7OztZQUNoRCxPQUFPLEdBQVEsUUFBUSxDQUFDLFNBQVM7UUFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixDQUFBLEtBQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQSxDQUFDLEdBQUcsNEJBQUksT0FBTyxHQUFFO1NBQ25DO1FBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsd0NBQVU7Ozs7O0lBQVYsVUFBVyxRQUFxQixFQUFFLE9BQW9COztZQUMvQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw2Q0FBZTs7OztJQUFmLFVBQWdCLE9BQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osT0FBTztTQUNUO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDVixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO2FBQ0k7WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFbEYsQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBYTtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsT0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlDQUFpQzs7Ozs7O0lBQ2pDLHVDQUFTOzs7Ozs7SUFBVCxVQUFVLEdBQVk7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEdBQXlDO1FBQ2xELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7SUFDSixDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxHQUFZO1FBQ3BCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxHQUFZO1FBQ25CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDSixDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxHQUFZO1FBQ3ZCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEQ7SUFDSixDQUFDOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxHQUFxQjtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0osQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsR0FBYTtRQUN2QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0osQ0FBQzs7Ozs7SUFFRCwwQ0FBWTs7OztJQUFaLFVBQWEsR0FBWTtRQUN0QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksR0FBWTtRQUNyQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsR0FBcUM7UUFDakQsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakQ7SUFDSixDQUFDOzs7OztJQUVELGlEQUFtQjs7OztJQUFuQixVQUFvQixHQUF1RTtRQUN4RixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN0RDtJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQWU7Ozs7SUFBZixVQUFnQixHQUFTO1FBQ3RCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsR0FBYTtRQUMzQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNuRDtJQUNKLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLEdBQWE7UUFDckIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3QztJQUNKLENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLEdBQVM7UUFDYixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQ0FBSzs7OztJQUFMLFVBQU0sR0FBWTtRQUNmLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxHQUFZO1FBQ3JCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7SUFDSixDQUFDOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxHQUFxQjtRQUN4QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0osQ0FBQztJQUdELGdDQUFnQzs7Ozs7SUFDaEMscUNBQU87Ozs7O0lBQVA7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsb0NBQU07OztJQUFOO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQU1ELDRDQUFjOzs7SUFBZDtRQUFBLGlCQUVDO1FBREUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3BHLENBQUM7O2dCQWhUSCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ25EOzs7O2dCQU5nRCxVQUFVOzs7Z0NBVXZELEtBQUssU0FBQyxXQUFXO2tDQUNqQixLQUFLLFNBQUMsYUFBYTtpQ0FDbkIsS0FBSyxTQUFDLFlBQVk7Z0NBQ2xCLEtBQUssU0FBQyxXQUFXO29DQUNqQixLQUFLLFNBQUMsZUFBZTttQ0FDckIsS0FBSyxTQUFDLGNBQWM7bUNBQ3BCLEtBQUssU0FBQyxjQUFjO2tDQUNwQixLQUFLLFNBQUMsYUFBYTtxQ0FDbkIsS0FBSyxTQUFDLGdCQUFnQjswQ0FDdEIsS0FBSyxTQUFDLHFCQUFxQjtzQ0FDM0IsS0FBSyxTQUFDLGlCQUFpQjt1Q0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtpQ0FDeEIsS0FBSyxTQUFDLFlBQVk7NkJBQ2xCLEtBQUssU0FBQyxRQUFROzRCQUNkLEtBQUssU0FBQyxPQUFPO2tDQUNiLEtBQUssU0FBQyxhQUFhOzRCQUNuQixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTtvQ0FrUm5CLE1BQU07O0lBTVYsMEJBQUM7Q0FBQSxBQWxURCxJQWtUQyxDQUFDLHFCQUFxQjtTQTdTVixtQkFBbUI7OztJQUU3Qiw0Q0FBMEM7O0lBQzFDLDhDQUEyRTs7SUFDM0UsNkNBQTRDOztJQUM1Qyw0Q0FBMEM7O0lBQzFDLGdEQUFrRDs7SUFDbEQsK0NBQWlEOztJQUNqRCwrQ0FBZ0Q7O0lBQ2hELDhDQUE4Qzs7SUFDOUMsaURBQTZFOztJQUM3RSxzREFBeUg7O0lBQ3pILGtEQUFtRDs7SUFDbkQsbURBQXlEOztJQUN6RCw2Q0FBNkM7O0lBQzdDLHlDQUFpQzs7SUFDakMsd0NBQWtDOztJQUNsQyw4Q0FBOEM7O0lBQzlDLHdDQUEyQzs7SUFDM0MseUNBQTZDOztJQUU3Qyx5Q0FBaUQ7O0lBRWpELHlDQUFpUjs7SUFDalIsbUNBQVU7O0lBQ1YseUNBQXVCOztJQUN2QiwyQ0FBb0M7O0lBNlFwQyxnREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRyZWVNYXAnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRyZWVNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYmFzZUNvbG9yJykgYXR0ckJhc2VDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdjb2xvclJhbmdlcycpIGF0dHJDb2xvclJhbmdlczogQXJyYXk8anF3aWRnZXRzLlRyZWVNYXBDb2xvclJhbmdlcz47XG4gICBASW5wdXQoJ2NvbG9yUmFuZ2UnKSBhdHRyQ29sb3JSYW5nZTogbnVtYmVyO1xuICAgQElucHV0KCdjb2xvck1vZGUnKSBhdHRyQ29sb3JNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc3BsYXlNZW1iZXInKSBhdHRyRGlzcGxheU1lbWJlcjogc3RyaW5nO1xuICAgQElucHV0KCdob3ZlckVuYWJsZWQnKSBhdHRySG92ZXJFbmFibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdoZWFkZXJIZWlnaHQnKSBhdHRySGVhZGVySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2xlZ2VuZExhYmVsJykgYXR0ckxlZ2VuZExhYmVsOiBzdHJpbmc7XG4gICBASW5wdXQoJ2xlZ2VuZFBvc2l0aW9uJykgYXR0ckxlZ2VuZFBvc2l0aW9uOiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFBvc2l0aW9uO1xuICAgQElucHV0KCdsZWdlbmRTY2FsZUNhbGxiYWNrJykgYXR0ckxlZ2VuZFNjYWxlQ2FsbGJhY2s6ICh2OiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFNjYWxlQ2FsbGJhY2tbJ3YnXSkgPT4gc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdyZW5kZXJDYWxsYmFja3MnKSBhdHRyUmVuZGVyQ2FsbGJhY2tzOiBhbnk7XG4gICBASW5wdXQoJ3NlbGVjdGlvbkVuYWJsZWQnKSBhdHRyU2VsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0xlZ2VuZCcpIGF0dHJTaG93TGVnZW5kOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlTWVtYmVyJykgYXR0clZhbHVlTWVtYmVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYmFzZUNvbG9yJywnY29sb3JSYW5nZXMnLCdjb2xvclJhbmdlJywnY29sb3JNb2RlJywnZGlzcGxheU1lbWJlcicsJ2hlaWdodCcsJ2hvdmVyRW5hYmxlZCcsJ2hlYWRlckhlaWdodCcsJ2xlZ2VuZExhYmVsJywnbGVnZW5kUG9zaXRpb24nLCdsZWdlbmRTY2FsZUNhbGxiYWNrJywncmVuZGVyQ2FsbGJhY2tzJywnc2VsZWN0aW9uRW5hYmxlZCcsJ3Nob3dMZWdlbmQnLCdzb3VyY2UnLCd0aGVtZScsJ3ZhbHVlTWVtYmVyJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VHJlZU1hcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUcmVlTWFwKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRyZWVNYXAodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuaG9zdFswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzFweCc7XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhUcmVlTWFwJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4VHJlZU1hcENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBiYXNlQ29sb3IoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdiYXNlQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Jhc2VDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xvclJhbmdlcyhhcmc/OiBBcnJheTxqcXdpZGdldHMuVHJlZU1hcENvbG9yUmFuZ2VzPik6IEFycmF5PGpxd2lkZ2V0cy5UcmVlTWFwQ29sb3JSYW5nZXM+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdjb2xvclJhbmdlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnY29sb3JSYW5nZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sb3JSYW5nZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2NvbG9yUmFuZ2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2NvbG9yUmFuZ2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sb3JNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnY29sb3JNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdjb2xvck1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzcGxheU1lbWJlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Rpc3BsYXlNZW1iZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2Rpc3BsYXlNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaG92ZXJFbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdob3ZlckVuYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2hvdmVyRW5hYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWFkZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdoZWFkZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2hlYWRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRMYWJlbChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2xlZ2VuZExhYmVsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdsZWdlbmRMYWJlbCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsZWdlbmRQb3NpdGlvbihhcmc/OiBqcXdpZGdldHMuVHJlZU1hcExlZ2VuZFBvc2l0aW9uKToganF3aWRnZXRzLlRyZWVNYXBMZWdlbmRQb3NpdGlvbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ2xlZ2VuZFBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGxlZ2VuZFNjYWxlQ2FsbGJhY2soYXJnPzogKHY6IGpxd2lkZ2V0cy5UcmVlTWFwTGVnZW5kU2NhbGVDYWxsYmFja1sndiddKSA9PiBzdHJpbmcgfCBudW1iZXIpOiAodjoganF3aWRnZXRzLlRyZWVNYXBMZWdlbmRTY2FsZUNhbGxiYWNrWyd2J10pID0+IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kU2NhbGVDYWxsYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnbGVnZW5kU2NhbGVDYWxsYmFjaycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJDYWxsYmFja3MoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdyZW5kZXJDYWxsYmFja3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3JlbmRlckNhbGxiYWNrcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25FbmFibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzZWxlY3Rpb25FbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzZWxlY3Rpb25FbmFibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dMZWdlbmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3Nob3dMZWdlbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVNYXAoJ3Nob3dMZWdlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZU1hcCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWVNZW1iZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd2YWx1ZU1lbWJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgndmFsdWVNZW1iZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZU1hcCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlTWFwQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlTWFwKCdyZW5kZXInKTtcbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlTWFwQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRyZWVNYXBDb21wb25lbnRcbiJdfQ==