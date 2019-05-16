import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxbuttongroup from '../../jqwidgets-scripts/jqwidgets/jqxbuttongroup';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxButtonGroupComponent = /** @class */ (function () {
    function jqxButtonGroupComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
        // jqxButtonGroupComponent events
        this.onButtonclick = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onUnselected = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.ngOnInit = /**
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
    jqxButtonGroupComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
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
    jqxButtonGroupComponent.prototype.arraysEqual = /**
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
    jqxButtonGroupComponent.prototype.manageAttributes = /**
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
    jqxButtonGroupComponent.prototype.moveClasses = /**
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
    jqxButtonGroupComponent.prototype.moveStyles = /**
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
    jqxButtonGroupComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.__updateRect__ = /**
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
    jqxButtonGroupComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxButtonGroup('setOptions', options);
    };
    // jqxButtonGroupComponent properties
    // jqxButtonGroupComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.disabled = 
    // jqxButtonGroupComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('disabled', arg);
        }
        else {
            return this.host.jqxButtonGroup('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('enableHover', arg);
        }
        else {
            return this.host.jqxButtonGroup('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.mode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('mode', arg);
        }
        else {
            return this.host.jqxButtonGroup('mode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('rtl', arg);
        }
        else {
            return this.host.jqxButtonGroup('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('template', arg);
        }
        else {
            return this.host.jqxButtonGroup('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('theme', arg);
        }
        else {
            return this.host.jqxButtonGroup('theme');
        }
    };
    // jqxButtonGroupComponent functions
    // jqxButtonGroupComponent functions
    /**
     * @param {?} index
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.disableAt = 
    // jqxButtonGroupComponent functions
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxButtonGroup('disableAt', index);
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxButtonGroup('disable');
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxButtonGroup('destroy');
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxButtonGroup('enable');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.enableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxButtonGroup('enableAt', index);
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.getSelection = /**
     * @return {?}
     */
    function () {
        return this.host.jqxButtonGroup('getSelection');
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxButtonGroup('render');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.setSelection = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxButtonGroup('setSelection', index);
    };
    /**
     * @return {?}
     */
    jqxButtonGroupComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('buttonclick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onButtonclick.emit(eventData); }));
        this.host.on('selected', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSelected.emit(eventData); }));
        this.host.on('unselected', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUnselected.emit(eventData); }));
    };
    jqxButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxButtonGroup',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxButtonGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxButtonGroupComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrMode: [{ type: Input, args: ['mode',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onButtonclick: [{ type: Output }],
        onSelected: [{ type: Output }],
        onUnselected: [{ type: Output }]
    };
    return jqxButtonGroupComponent;
}()); //jqxButtonGroupComponent
export { jqxButtonGroupComponent };
if (false) {
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrMode;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrRtl;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrTheme;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrWidth;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrHeight;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.autoCreate;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.properties;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.host;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.elementRef;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.widgetObject;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onButtonclick;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onSelected;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onUnselected;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhidXR0b25ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhidXR0b25ncm91cC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4YnV0dG9uZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXVCRyxpQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQXdNeEUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXBNekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O29CQUN0RyxRQUFRLEdBQVksS0FBSztnQkFFN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMvQixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsRUFBRTt3QkFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksS0FBSyxFQUFFOzRCQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzVGO3dCQUNELElBQUksUUFBUSxFQUFFOzRCQUNYLE9BQU8sS0FBSyxDQUFDO3lCQUNmO3dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzdELFNBQVM7cUJBQ1g7b0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3FCQUMvRDtpQkFDSDthQUNIO1NBQ0g7SUFDSixDQUFDOzs7Ozs7SUFFRCw2Q0FBVzs7Ozs7SUFBWCxVQUFZLFNBQWMsRUFBRSxTQUFjO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxFQUFFO1lBQ3pELE9BQU8sS0FBSyxDQUFDO1NBQ2Y7UUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLEtBQUssQ0FBQzthQUNmO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxrREFBZ0I7OztJQUFoQjs7WUFDTyxPQUFPLEdBQUcsRUFBRTtRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUMxQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsNkNBQVc7Ozs7O0lBQVgsVUFBWSxRQUFxQixFQUFFLE9BQW9COzs7WUFDaEQsT0FBTyxHQUFRLFFBQVEsQ0FBQyxTQUFTO1FBQ3JDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsQ0FBQSxLQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUEsQ0FBQyxHQUFHLDRCQUFJLE9BQU8sR0FBRTtTQUNuQztRQUNELFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsUUFBcUIsRUFBRSxPQUFvQjs7WUFDL0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsaURBQWU7Ozs7SUFBZixVQUFnQixPQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFdEYsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsT0FBYTtRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxnREFBYzs7O0lBQWQ7UUFDRyxJQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCw0Q0FBVTs7OztJQUFWLFVBQVcsT0FBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFxQzs7Ozs7O0lBQ3JDLDBDQUFROzs7Ozs7SUFBUixVQUFTLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEdBQWE7UUFDdEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7Ozs7O0lBRUQsc0NBQUk7Ozs7SUFBSixVQUFLLEdBQVk7UUFDZCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBYTtRQUNkLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxHQUFZO1FBQ2xCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDOzs7OztJQUVELHVDQUFLOzs7O0lBQUwsVUFBTSxHQUFZO1FBQ2YsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNKLENBQUM7SUFHRCxvQ0FBb0M7Ozs7OztJQUNwQywyQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQseUNBQU87OztJQUFQO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0csT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsd0NBQU07OztJQUFOO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQVFELGdEQUFjOzs7SUFBZDtRQUFBLGlCQUlDO1FBSEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTs7OztRQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTs7OztRQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBbE9ILFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsc0NBQXNDO2lCQUNuRDs7OztnQkFOZ0QsVUFBVTs7OytCQVV2RCxLQUFLLFNBQUMsVUFBVTtrQ0FDaEIsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLEtBQUssU0FBQyxNQUFNOzBCQUNaLEtBQUssU0FBQyxLQUFLOytCQUNYLEtBQUssU0FBQyxVQUFVOzRCQUNoQixLQUFLLFNBQUMsT0FBTzs0QkFDYixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsUUFBUTs2QkFFZCxLQUFLLFNBQUMsYUFBYTtnQ0EwTW5CLE1BQU07NkJBQ04sTUFBTTsrQkFDTixNQUFNOztJQVFWLDhCQUFDO0NBQUEsQUFwT0QsSUFvT0MsQ0FBQyx5QkFBeUI7U0EvTmQsdUJBQXVCOzs7SUFFakMsK0NBQXlDOztJQUN6QyxrREFBK0M7O0lBQy9DLDJDQUFnQzs7SUFDaEMsMENBQStCOztJQUMvQiwrQ0FBd0M7O0lBQ3hDLDRDQUFrQzs7SUFDbEMsNENBQTJDOztJQUMzQyw2Q0FBNkM7O0lBRTdDLDZDQUFpRDs7SUFFakQsNkNBQWtGOztJQUNsRix1Q0FBVTs7SUFDViw2Q0FBdUI7O0lBQ3ZCLCtDQUF3Qzs7SUFxTXhDLGdEQUE2Qzs7SUFDN0MsNkNBQTBDOztJQUMxQywrQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEJ1dHRvbkdyb3VwJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ21vZGUnKSBhdHRyTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCd0ZW1wbGF0ZScpIGF0dHJUZW1wbGF0ZTogc3RyaW5nO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywnZW5hYmxlSG92ZXInLCdtb2RlJywncnRsJywndGVtcGxhdGUnLCd0aGVtZSddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhCdXR0b25Hcm91cDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLmhvc3RbMF0uc3R5bGUubWFyZ2luTGVmdCA9ICcxcHgnO1xuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4QnV0dG9uR3JvdXAnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4QnV0dG9uR3JvdXBDb21wb25lbnQgcHJvcGVydGllc1xuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ21vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKCdtb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKCd0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3RlbXBsYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhCdXR0b25Hcm91cENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGRpc2FibGVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ2Rpc2FibGVBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgnZGlzYWJsZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEJ1dHRvbkdyb3VwKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgnZW5hYmxlJyk7XG4gICB9XG5cbiAgIGVuYWJsZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgnZW5hYmxlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGlvbigpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgnZ2V0U2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCdXR0b25Hcm91cCgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHNldFNlbGVjdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4QnV0dG9uR3JvdXAoJ3NldFNlbGVjdGlvbicsIGluZGV4KTtcbiAgIH1cblxuXG4gICAvLyBqcXhCdXR0b25Hcm91cENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJ1dHRvbmNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYnV0dG9uY2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJ1dHRvbmNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NlbGVjdGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3RlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd1bnNlbGVjdGVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25VbnNlbGVjdGVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhCdXR0b25Hcm91cENvbXBvbmVudFxuIl19