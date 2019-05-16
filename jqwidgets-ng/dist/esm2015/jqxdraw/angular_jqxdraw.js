import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
export class jqxDrawComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['renderEngine'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDraw(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDraw(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDraw(this.properties[i])) {
                        this.host.jqxDraw(this.properties[i], this[attrName]);
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
        this.host.append('div');
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
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
        this.host.jqxDraw('setOptions', options);
    }
    // jqxDrawComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderEngine(arg) {
        if (arg !== undefined) {
            this.host.jqxDraw('renderEngine', arg);
        }
        else {
            return this.host.jqxDraw('renderEngine');
        }
    }
    // jqxDrawComponent functions
    /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    attr(element, attributes) {
        this.host.jqxDraw('attr', element, attributes);
    }
    /**
     * @param {?=} cx
     * @param {?=} cy
     * @param {?=} r
     * @param {?=} attributes
     * @return {?}
     */
    circle(cx, cy, r, attributes) {
        return this.host.jqxDraw('circle', cx, cy, r, attributes);
    }
    /**
     * @return {?}
     */
    clear() {
        this.host.jqxDraw('clear');
    }
    /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    getAttr(element, attributes) {
        return this.host.jqxDraw('getAttr', element, attributes);
    }
    /**
     * @return {?}
     */
    getSize() {
        return this.host.jqxDraw('getSize');
    }
    /**
     * @param {?=} x1
     * @param {?=} y1
     * @param {?=} x2
     * @param {?=} y2
     * @param {?=} attributes
     * @return {?}
     */
    line(x1, y1, x2, y2, attributes) {
        return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
    }
    /**
     * @param {?=} text
     * @param {?=} angle
     * @param {?=} attributes
     * @return {?}
     */
    measureText(text, angle, attributes) {
        return this.host.jqxDraw('measureText', text, angle, attributes);
    }
    /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    on(element, event, func) {
        this.host.jqxDraw('on', element, event, func);
    }
    /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    off(element, event, func) {
        this.host.jqxDraw('off', element, event, func);
    }
    /**
     * @param {?=} path
     * @param {?=} attributes
     * @return {?}
     */
    path(path, attributes) {
        return this.host.jqxDraw('path', path, attributes);
    }
    /**
     * @param {?=} cx
     * @param {?=} xy
     * @param {?=} innerRadius
     * @param {?=} outerRadius
     * @param {?=} fromAngle
     * @param {?=} endAngle
     * @param {?=} centerOffset
     * @param {?=} attributes
     * @return {?}
     */
    pieslice(cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxDraw('refresh');
    }
    /**
     * @param {?=} x
     * @param {?=} y
     * @param {?=} width
     * @param {?=} height
     * @param {?=} attributes
     * @return {?}
     */
    rect(x, y, width, height, attributes) {
        return this.host.jqxDraw('rect', x, y, width, height, attributes);
    }
    /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    saveAsJPEG(image, url) {
        this.host.jqxDraw('saveAsJPEG', image, url);
    }
    /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    saveAsPNG(image, url) {
        this.host.jqxDraw('saveAsPNG', image, url);
    }
    /**
     * @param {?=} text
     * @param {?=} x
     * @param {?=} y
     * @param {?=} width
     * @param {?=} height
     * @param {?=} angle
     * @param {?=} attributes
     * @param {?=} clip
     * @param {?=} halign
     * @param {?=} valign
     * @param {?=} rotateAround
     * @return {?}
     */
    text(text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    }
    // jqxDrawComponent events
    /**
     * @return {?}
     */
    __wireEvents__() {
    }
} //jqxDrawComponent
jqxDrawComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDraw',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDrawComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDrawComponent.propDecorators = {
    attrRenderEngine: [{ type: Input, args: ['renderEngine',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }]
};
if (false) {
    /** @type {?} */
    jqxDrawComponent.prototype.attrRenderEngine;
    /** @type {?} */
    jqxDrawComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDrawComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDrawComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDrawComponent.prototype.properties;
    /** @type {?} */
    jqxDrawComponent.prototype.host;
    /** @type {?} */
    jqxDrawComponent.prototype.elementRef;
    /** @type {?} */
    jqxDrawComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcmF3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRyYXcvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRyYXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csTUFBTSxPQUFPLGdCQUFnQjs7OztJQWExQixZQUFZLGdCQUE0QjtRQVBsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBTXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3RHLFFBQVEsR0FBWSxLQUFLO2dCQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUss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LENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RILENBQUM7Ozs7O0lBTUQsY0FBYztJQUVkLENBQUM7RUFFRixrQkFBa0I7O1lBcE5uQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxzQ0FBc0M7YUFDbkQ7Ozs7WUFOZ0QsVUFBVTs7OytCQVV2RCxLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7eUJBRWQsS0FBSyxTQUFDLGFBQWE7Ozs7SUFKcEIsNENBQWdEOztJQUNoRCxxQ0FBMkM7O0lBQzNDLHNDQUE2Qzs7SUFFN0Msc0NBQWlEOztJQUVqRCxzQ0FBd0M7O0lBQ3hDLGdDQUFVOztJQUNWLHNDQUF1Qjs7SUFDdkIsd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEcmF3JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEcmF3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ3JlbmRlckVuZ2luZScpIGF0dHJSZW5kZXJFbmdpbmU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydyZW5kZXJFbmdpbmUnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RHJhdztcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhEcmF3KHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeERyYXcodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERyYXcodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuaG9zdC5hcHBlbmQoJ2RpdicpO1xuICAgICAgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhEcmF3Jywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyYXcoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4RHJhd0NvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICByZW5kZXJFbmdpbmUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdyZW5kZXJFbmdpbmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYXcoJ3JlbmRlckVuZ2luZScpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeERyYXdDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhdHRyKGVsZW1lbnQ/OiBhbnksIGF0dHJpYnV0ZXM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdhdHRyJywgZWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICB9XG5cbiAgIGNpcmNsZShjeD86IG51bWJlciwgY3k/OiBudW1iZXIsIHI/OiBudW1iZXIsIGF0dHJpYnV0ZXM/OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdjaXJjbGUnLCBjeCwgY3ksIHIsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdjbGVhcicpO1xuICAgfVxuXG4gICBnZXRBdHRyKGVsZW1lbnQ/OiBhbnksIGF0dHJpYnV0ZXM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdnZXRBdHRyJywgZWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICB9XG5cbiAgIGdldFNpemUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygnZ2V0U2l6ZScpO1xuICAgfVxuXG4gICBsaW5lKHgxPzogbnVtYmVyLCB5MT86IG51bWJlciwgeDI/OiBudW1iZXIsIHkyPzogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygnbGluZScsIHgxLCB5MSwgeDIsIHkyLCBhdHRyaWJ1dGVzKTtcbiAgIH1cblxuICAgbWVhc3VyZVRleHQodGV4dD86IHN0cmluZywgYW5nbGU/OiBudW1iZXIsIGF0dHJpYnV0ZXM/OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdtZWFzdXJlVGV4dCcsIHRleHQsIGFuZ2xlLCBhdHRyaWJ1dGVzKTtcbiAgIH1cblxuICAgb24oZWxlbWVudD86IGFueSwgZXZlbnQ/OiBzdHJpbmcsIGZ1bmM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdvbicsIGVsZW1lbnQsIGV2ZW50LCBmdW5jKTtcbiAgIH1cblxuICAgb2ZmKGVsZW1lbnQ/OiBhbnksIGV2ZW50Pzogc3RyaW5nLCBmdW5jPzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnb2ZmJywgZWxlbWVudCwgZXZlbnQsIGZ1bmMpO1xuICAgfVxuXG4gICBwYXRoKHBhdGg/OiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdwYXRoJywgcGF0aCwgYXR0cmlidXRlcyk7XG4gICB9XG5cbiAgIHBpZXNsaWNlKGN4PzogbnVtYmVyLCB4eT86IG51bWJlciwgaW5uZXJSYWRpdXM/OiBhbnksIG91dGVyUmFkaXVzPzogYW55LCBmcm9tQW5nbGU/OiBudW1iZXIsIGVuZEFuZ2xlPzogbnVtYmVyLCBjZW50ZXJPZmZzZXQ/OiBudW1iZXIsIGF0dHJpYnV0ZXM/OiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdwaWVzbGljZScsIGN4LCB4eSwgaW5uZXJSYWRpdXMsIG91dGVyUmFkaXVzLCBmcm9tQW5nbGUsIGVuZEFuZ2xlLCBjZW50ZXJPZmZzZXQsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyYXcoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVjdCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB3aWR0aD86IG51bWJlciB8IHN0cmluZywgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygncmVjdCcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICBzYXZlQXNKUEVHKGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdzYXZlQXNKUEVHJywgaW1hZ2UsIHVybCk7XG4gICB9XG5cbiAgIHNhdmVBc1BORyhpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnc2F2ZUFzUE5HJywgaW1hZ2UsIHVybCk7XG4gICB9XG5cbiAgIHRleHQodGV4dD86IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodD86IG51bWJlciB8IHN0cmluZywgYW5nbGU/OiBudW1iZXIsIGF0dHJpYnV0ZXM/OiBhbnksIGNsaXA/OiBib29sZWFuLCBoYWxpZ24/OiBzdHJpbmcsIHZhbGlnbj86IHN0cmluZywgcm90YXRlQXJvdW5kPzogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygndGV4dCcsIHRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGFuZ2xlLCBhdHRyaWJ1dGVzLCBjbGlwLCBoYWxpZ24sIHZhbGlnbiwgcm90YXRlQXJvdW5kKTtcbiAgIH1cblxuXG4gICAvLyBqcXhEcmF3Q29tcG9uZW50IGV2ZW50c1xuXG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuXG4gICB9XG5cbn0gLy9qcXhEcmF3Q29tcG9uZW50XG4iXX0=