import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
