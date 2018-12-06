import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import { Component, Input, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxDrawComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxDrawModule {
}
jqxDrawModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxDrawComponent],
                exports: [jqxDrawComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxDrawComponent, jqxDrawModule };

