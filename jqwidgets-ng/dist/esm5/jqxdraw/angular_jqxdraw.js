import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
var jqxDrawComponent = /** @class */ (function () {
    function jqxDrawComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['renderEngine'];
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.ngOnInit = /**
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
    jqxDrawComponent.prototype.ngOnChanges = /**
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxDrawComponent.prototype.arraysEqual = /**
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
    jqxDrawComponent.prototype.manageAttributes = /**
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
    jqxDrawComponent.prototype.moveClasses = /**
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
    jqxDrawComponent.prototype.moveStyles = /**
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
    jqxDrawComponent.prototype.createComponent = /**
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
        this.host.append('div');
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDraw', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDrawComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.__updateRect__ = /**
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
    jqxDrawComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDraw('setOptions', options);
    };
    // jqxDrawComponent properties
    // jqxDrawComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDrawComponent.prototype.renderEngine = 
    // jqxDrawComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDraw('renderEngine', arg);
        }
        else {
            return this.host.jqxDraw('renderEngine');
        }
    };
    // jqxDrawComponent functions
    // jqxDrawComponent functions
    /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.attr = 
    // jqxDrawComponent functions
    /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    function (element, attributes) {
        this.host.jqxDraw('attr', element, attributes);
    };
    /**
     * @param {?=} cx
     * @param {?=} cy
     * @param {?=} r
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.circle = /**
     * @param {?=} cx
     * @param {?=} cy
     * @param {?=} r
     * @param {?=} attributes
     * @return {?}
     */
    function (cx, cy, r, attributes) {
        return this.host.jqxDraw('circle', cx, cy, r, attributes);
    };
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.host.jqxDraw('clear');
    };
    /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.getAttr = /**
     * @param {?=} element
     * @param {?=} attributes
     * @return {?}
     */
    function (element, attributes) {
        return this.host.jqxDraw('getAttr', element, attributes);
    };
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDraw('getSize');
    };
    /**
     * @param {?=} x1
     * @param {?=} y1
     * @param {?=} x2
     * @param {?=} y2
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.line = /**
     * @param {?=} x1
     * @param {?=} y1
     * @param {?=} x2
     * @param {?=} y2
     * @param {?=} attributes
     * @return {?}
     */
    function (x1, y1, x2, y2, attributes) {
        return this.host.jqxDraw('line', x1, y1, x2, y2, attributes);
    };
    /**
     * @param {?=} text
     * @param {?=} angle
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.measureText = /**
     * @param {?=} text
     * @param {?=} angle
     * @param {?=} attributes
     * @return {?}
     */
    function (text, angle, attributes) {
        return this.host.jqxDraw('measureText', text, angle, attributes);
    };
    /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    jqxDrawComponent.prototype.on = /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    function (element, event, func) {
        this.host.jqxDraw('on', element, event, func);
    };
    /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    jqxDrawComponent.prototype.off = /**
     * @param {?=} element
     * @param {?=} event
     * @param {?=} func
     * @return {?}
     */
    function (element, event, func) {
        this.host.jqxDraw('off', element, event, func);
    };
    /**
     * @param {?=} path
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.path = /**
     * @param {?=} path
     * @param {?=} attributes
     * @return {?}
     */
    function (path, attributes) {
        return this.host.jqxDraw('path', path, attributes);
    };
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
    jqxDrawComponent.prototype.pieslice = /**
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
    function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return this.host.jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    };
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxDraw('refresh');
    };
    /**
     * @param {?=} x
     * @param {?=} y
     * @param {?=} width
     * @param {?=} height
     * @param {?=} attributes
     * @return {?}
     */
    jqxDrawComponent.prototype.rect = /**
     * @param {?=} x
     * @param {?=} y
     * @param {?=} width
     * @param {?=} height
     * @param {?=} attributes
     * @return {?}
     */
    function (x, y, width, height, attributes) {
        return this.host.jqxDraw('rect', x, y, width, height, attributes);
    };
    /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    jqxDrawComponent.prototype.saveAsJPEG = /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    function (image, url) {
        this.host.jqxDraw('saveAsJPEG', image, url);
    };
    /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    jqxDrawComponent.prototype.saveAsPNG = /**
     * @param {?=} image
     * @param {?=} url
     * @return {?}
     */
    function (image, url) {
        this.host.jqxDraw('saveAsPNG', image, url);
    };
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
    jqxDrawComponent.prototype.text = /**
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
    function (text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return this.host.jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    };
    // jqxDrawComponent events
    // jqxDrawComponent events
    /**
     * @return {?}
     */
    jqxDrawComponent.prototype.__wireEvents__ = 
    // jqxDrawComponent events
    /**
     * @return {?}
     */
    function () {
    };
    jqxDrawComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDraw',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDrawComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDrawComponent.propDecorators = {
        attrRenderEngine: [{ type: Input, args: ['renderEngine',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }]
    };
    return jqxDrawComponent;
}()); //jqxDrawComponent
export { jqxDrawComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcmF3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRyYXcvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRyYXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRzdHO0lBa0JHLDBCQUFZLGdCQUE0QjtRQVBsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBTXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztvQkFDdEcsUUFBUSxHQUFZLEtBQUs7Z0JBRTdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxR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d2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4RHJhdycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4RHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdyZW5kZXJFbmdpbmUnKSBhdHRyUmVuZGVyRW5naW5lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsncmVuZGVyRW5naW5lJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeERyYXc7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4RHJhdyh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhdyh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhEcmF3KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLmhvc3QuYXBwZW5kKCdkaXYnKTtcbiAgICAgIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RHJhdycsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERyYXdDb21wb25lbnQgcHJvcGVydGllc1xuICAgcmVuZGVyRW5naW5lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhdygncmVuZGVyRW5naW5lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmF3KCdyZW5kZXJFbmdpbmUnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhEcmF3Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYXR0cihlbGVtZW50PzogYW55LCBhdHRyaWJ1dGVzPzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnYXR0cicsIGVsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICBjaXJjbGUoY3g/OiBudW1iZXIsIGN5PzogbnVtYmVyLCByPzogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygnY2lyY2xlJywgY3gsIGN5LCByLCBhdHRyaWJ1dGVzKTtcbiAgIH1cblxuICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnY2xlYXInKTtcbiAgIH1cblxuICAgZ2V0QXR0cihlbGVtZW50PzogYW55LCBhdHRyaWJ1dGVzPzogYW55KTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygnZ2V0QXR0cicsIGVsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICBnZXRTaXplKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYXcoJ2dldFNpemUnKTtcbiAgIH1cblxuICAgbGluZSh4MT86IG51bWJlciwgeTE/OiBudW1iZXIsIHgyPzogbnVtYmVyLCB5Mj86IG51bWJlciwgYXR0cmlidXRlcz86IGFueSk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYXcoJ2xpbmUnLCB4MSwgeTEsIHgyLCB5MiwgYXR0cmlidXRlcyk7XG4gICB9XG5cbiAgIG1lYXN1cmVUZXh0KHRleHQ/OiBzdHJpbmcsIGFuZ2xlPzogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygnbWVhc3VyZVRleHQnLCB0ZXh0LCBhbmdsZSwgYXR0cmlidXRlcyk7XG4gICB9XG5cbiAgIG9uKGVsZW1lbnQ/OiBhbnksIGV2ZW50Pzogc3RyaW5nLCBmdW5jPzogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnb24nLCBlbGVtZW50LCBldmVudCwgZnVuYyk7XG4gICB9XG5cbiAgIG9mZihlbGVtZW50PzogYW55LCBldmVudD86IHN0cmluZywgZnVuYz86IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyYXcoJ29mZicsIGVsZW1lbnQsIGV2ZW50LCBmdW5jKTtcbiAgIH1cblxuICAgcGF0aChwYXRoPzogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygncGF0aCcsIHBhdGgsIGF0dHJpYnV0ZXMpO1xuICAgfVxuXG4gICBwaWVzbGljZShjeD86IG51bWJlciwgeHk/OiBudW1iZXIsIGlubmVyUmFkaXVzPzogYW55LCBvdXRlclJhZGl1cz86IGFueSwgZnJvbUFuZ2xlPzogbnVtYmVyLCBlbmRBbmdsZT86IG51bWJlciwgY2VudGVyT2Zmc2V0PzogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhdygncGllc2xpY2UnLCBjeCwgeHksIGlubmVyUmFkaXVzLCBvdXRlclJhZGl1cywgZnJvbUFuZ2xlLCBlbmRBbmdsZSwgY2VudGVyT2Zmc2V0LCBhdHRyaWJ1dGVzKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmF3KCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlY3QoeD86IG51bWJlciwgeT86IG51bWJlciwgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsIGhlaWdodD86IG51bWJlciB8IHN0cmluZywgYXR0cmlidXRlcz86IGFueSk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYXcoJ3JlY3QnLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBhdHRyaWJ1dGVzKTtcbiAgIH1cblxuICAgc2F2ZUFzSlBFRyhpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhdygnc2F2ZUFzSlBFRycsIGltYWdlLCB1cmwpO1xuICAgfVxuXG4gICBzYXZlQXNQTkcoaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERyYXcoJ3NhdmVBc1BORycsIGltYWdlLCB1cmwpO1xuICAgfVxuXG4gICB0ZXh0KHRleHQ/OiBzdHJpbmcsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nLCBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmcsIGFuZ2xlPzogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55LCBjbGlwPzogYm9vbGVhbiwgaGFsaWduPzogc3RyaW5nLCB2YWxpZ24/OiBzdHJpbmcsIHJvdGF0ZUFyb3VuZD86IHN0cmluZyk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYXcoJ3RleHQnLCB0ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBhbmdsZSwgYXR0cmlidXRlcywgY2xpcCwgaGFsaWduLCB2YWxpZ24sIHJvdGF0ZUFyb3VuZCk7XG4gICB9XG5cblxuICAgLy8ganF4RHJhd0NvbXBvbmVudCBldmVudHNcblxuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcblxuICAgfVxuXG59IC8vanF4RHJhd0NvbXBvbmVudFxuIl19