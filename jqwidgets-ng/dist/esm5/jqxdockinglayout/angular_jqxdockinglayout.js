import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxribbon from '../../jqwidgets-scripts/jqwidgets/jqxribbon';
import * as jqxlayout from '../../jqwidgets-scripts/jqwidgets/jqxlayout';
import * as jqxmenu from '../../jqwidgets-scripts/jqwidgets/jqxmenu';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxdockinglayout from '../../jqwidgets-scripts/jqwidgets/jqxdockinglayout';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDockingLayoutComponent = /** @class */ (function () {
    function jqxDockingLayoutComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.ngOnInit = /**
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
    jqxDockingLayoutComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
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
    jqxDockingLayoutComponent.prototype.arraysEqual = /**
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
    jqxDockingLayoutComponent.prototype.manageAttributes = /**
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
    jqxDockingLayoutComponent.prototype.moveClasses = /**
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
    jqxDockingLayoutComponent.prototype.moveStyles = /**
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
    jqxDockingLayoutComponent.prototype.createComponent = /**
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
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.__updateRect__ = /**
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
    jqxDockingLayoutComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDockingLayout('setOptions', options);
    };
    // jqxDockingLayoutComponent properties
    // jqxDockingLayoutComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.contextMenu = 
    // jqxDockingLayoutComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.layout = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.minGroupHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.minGroupWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.resizable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    };
    // jqxDockingLayoutComponent functions
    // jqxDockingLayoutComponent functions
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} position
     * @param {?} panelType
     * @param {?} title
     * @param {?} content
     * @param {?} initContent
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.addFloatGroup = 
    // jqxDockingLayoutComponent functions
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} position
     * @param {?} panelType
     * @param {?} title
     * @param {?} content
     * @param {?} initContent
     * @return {?}
     */
    function (width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('destroy');
    };
    /**
     * @param {?} layout
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.loadLayout = /**
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('refresh');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('render');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.saveLayout = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDockingLayout('saveLayout');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('dock', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDock.emit(eventData); }));
        this.host.on('floatGroupClosed', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onFloatGroupClosed.emit(eventData); }));
        this.host.on('float', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onFloat.emit(eventData); }));
        this.host.on('pin', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPin.emit(eventData); }));
        this.host.on('resize', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onResize.emit(eventData); }));
        this.host.on('unpin', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onUnpin.emit(eventData); }));
    };
    jqxDockingLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDockingLayout',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDockingLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDockingLayoutComponent.propDecorators = {
        attrContextMenu: [{ type: Input, args: ['contextMenu',] }],
        attrLayout: [{ type: Input, args: ['layout',] }],
        attrMinGroupHeight: [{ type: Input, args: ['minGroupHeight',] }],
        attrMinGroupWidth: [{ type: Input, args: ['minGroupWidth',] }],
        attrResizable: [{ type: Input, args: ['resizable',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onDock: [{ type: Output }],
        onFloatGroupClosed: [{ type: Output }],
        onFloat: [{ type: Output }],
        onPin: [{ type: Output }],
        onResize: [{ type: Output }],
        onUnpin: [{ type: Output }]
    };
    return jqxDockingLayoutComponent;
}()); //jqxDockingLayoutComponent
export { jqxDockingLayoutComponent };
if (false) {
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrContextMenu;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrLayout;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrResizable;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.properties;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.host;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onDock;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloatGroupClosed;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloat;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onPin;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onResize;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onUnpin;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkb2NraW5nbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRvY2tpbmdsYXlvdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRvY2tpbmdsYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQXdCRyxtQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBdU5sSCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1Qix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBdE5wQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3RHLFFBQVEsR0FBWSxLQUFLO2dCQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEVBQUU7NEJBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM5Rjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQy9ELFNBQVM7cUJBQ1g7b0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDakU7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsK0NBQVc7Ozs7O0lBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsb0RBQWdCOzs7SUFBaEI7O1lBQ08sT0FBTyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDMUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELCtDQUFXOzs7OztJQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7O1lBQ2hELE9BQU8sR0FBUSxRQUFRLENBQUMsU0FBUztRQUNyQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCw4Q0FBVTs7Ozs7SUFBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7O1lBQy9DLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU87UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELG1EQUFlOzs7O0lBQWYsVUFBZ0IsT0FBYTtRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixPQUFPO1NBQ1Q7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDbkQ7YUFDSTtZQUNILE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV4RixDQUFDOzs7OztJQUVELGdEQUFZOzs7O0lBQVosVUFBYSxPQUFhO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUNHLElBQUcsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBdUM7Ozs7OztJQUN2QywrQ0FBVzs7Ozs7O0lBQVgsVUFBWSxHQUFhO1FBQ3RCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0osQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sR0FBcUI7UUFDekIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7SUFDSixDQUFDOzs7OztJQUVELDBDQUFNOzs7O0lBQU4sVUFBTyxHQUEwQztRQUM5QyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQztJQUNKLENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLEdBQXFCO1FBQ2pDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN2RDtJQUNKLENBQUM7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLEdBQXFCO1FBQ2hDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0osQ0FBQzs7Ozs7SUFFRCw2Q0FBUzs7OztJQUFULFVBQVUsR0FBYTtRQUNwQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRDtJQUNKLENBQUM7Ozs7O0lBRUQsdUNBQUc7Ozs7SUFBSCxVQUFJLEdBQWE7UUFDZCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQUs7Ozs7SUFBTCxVQUFNLEdBQVk7UUFDZixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7Ozs7O0lBRUQseUNBQUs7Ozs7SUFBTCxVQUFNLEdBQXFCO1FBQ3hCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0osQ0FBQztJQUdELHNDQUFzQzs7Ozs7Ozs7Ozs7O0lBQ3RDLGlEQUFhOzs7Ozs7Ozs7Ozs7SUFBYixVQUFjLEtBQXNCLEVBQUUsTUFBdUIsRUFBRSxRQUErQyxFQUFFLFNBQWlCLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxXQUFnQjtRQUNoTCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoSCxDQUFDOzs7O0lBRUQsMkNBQU87OztJQUFQO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxNQUFXO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCwyQ0FBTzs7O0lBQVA7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCwwQ0FBTTs7O0lBQU47UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCw4Q0FBVTs7O0lBQVY7UUFDRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQVdELGtEQUFjOzs7SUFBZDtRQUFBLGlCQU9DO1FBTkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztRQUFFLFVBQUMsU0FBYyxJQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCOzs7O1FBQUUsVUFBQyxTQUFjLElBQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQXhQSCxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHNDQUFzQztpQkFDbkQ7Ozs7Z0JBTmdELFVBQVU7OztrQ0FVdkQsS0FBSyxTQUFDLGFBQWE7NkJBQ25CLEtBQUssU0FBQyxRQUFRO3FDQUNkLEtBQUssU0FBQyxnQkFBZ0I7b0NBQ3RCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMsV0FBVzswQkFDakIsS0FBSyxTQUFDLEtBQUs7NEJBQ1gsS0FBSyxTQUFDLE9BQU87NEJBQ2IsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFFBQVE7NkJBRWQsS0FBSyxTQUFDLGFBQWE7eUJBeU5uQixNQUFNO3FDQUNOLE1BQU07MEJBQ04sTUFBTTt3QkFDTixNQUFNOzJCQUNOLE1BQU07MEJBQ04sTUFBTTs7SUFXVixnQ0FBQztDQUFBLEFBMVBELElBMFBDLENBQUMsMkJBQTJCO1NBclBoQix5QkFBeUI7OztJQUVuQyxvREFBK0M7O0lBQy9DLCtDQUFrRTs7SUFDbEUsdURBQTZEOztJQUM3RCxzREFBMkQ7O0lBQzNELGtEQUEyQzs7SUFDM0MsNENBQStCOztJQUMvQiw4Q0FBa0M7O0lBQ2xDLDhDQUEyQzs7SUFDM0MsK0NBQTZDOztJQUU3QywrQ0FBaUQ7O0lBRWpELCtDQUE0SDs7SUFDNUgseUNBQVU7O0lBQ1YsK0NBQXVCOztJQUN2QixpREFBMEM7O0lBb04xQywyQ0FBc0M7O0lBQ3RDLHVEQUFrRDs7SUFDbEQsNENBQXVDOztJQUN2QywwQ0FBcUM7O0lBQ3JDLDZDQUF3Qzs7SUFDeEMsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEb2NraW5nTGF5b3V0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEb2NraW5nTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2NvbnRleHRNZW51JykgYXR0ckNvbnRleHRNZW51OiBib29sZWFuO1xuICAgQElucHV0KCdsYXlvdXQnKSBhdHRyTGF5b3V0OiBBcnJheTxqcXdpZGdldHMuRG9ja2luZ0xheW91dExheW91dD47XG4gICBASW5wdXQoJ21pbkdyb3VwSGVpZ2h0JykgYXR0ck1pbkdyb3VwSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21pbkdyb3VwV2lkdGgnKSBhdHRyTWluR3JvdXBXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdyZXNpemFibGUnKSBhdHRyUmVzaXphYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2NvbnRleHRNZW51JywnaGVpZ2h0JywnbGF5b3V0JywnbWluR3JvdXBIZWlnaHQnLCdtaW5Hcm91cFdpZHRoJywncmVzaXphYmxlJywncnRsJywndGhlbWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhEb2NraW5nTGF5b3V0O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RG9ja2luZ0xheW91dCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeERvY2tpbmdMYXlvdXRDb21wb25lbnQgcHJvcGVydGllc1xuICAgY29udGV4dE1lbnUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQoJ2NvbnRleHRNZW51JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdjb250ZXh0TWVudScpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsYXlvdXQoYXJnPzogQXJyYXk8anF3aWRnZXRzLkRvY2tpbmdMYXlvdXRMYXlvdXQ+KTogQXJyYXk8anF3aWRnZXRzLkRvY2tpbmdMYXlvdXRMYXlvdXQ+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdsYXlvdXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQoJ2xheW91dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5Hcm91cEhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQoJ21pbkdyb3VwSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdtaW5Hcm91cEhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5Hcm91cFdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgnbWluR3JvdXBXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgnbWluR3JvdXBXaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNpemFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmdMYXlvdXQoJ3Jlc2l6YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgncmVzaXphYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZ0xheW91dCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhEb2NraW5nTGF5b3V0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkRmxvYXRHcm91cCh3aWR0aDogbnVtYmVyIHwgc3RyaW5nLCBoZWlnaHQ6IG51bWJlciB8IHN0cmluZywgcG9zaXRpb246IGpxd2lkZ2V0cy5Eb2NraW5nTGF5b3V0TGF5b3V0UG9zaXRpb24sIHBhbmVsVHlwZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGluaXRDb250ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdhZGRGbG9hdEdyb3VwJywgd2lkdGgsIGhlaWdodCwgcG9zaXRpb24sIHBhbmVsVHlwZSwgdGl0bGUsIGNvbnRlbnQsIGluaXRDb250ZW50KTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGxvYWRMYXlvdXQobGF5b3V0OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdsb2FkTGF5b3V0JywgbGF5b3V0KTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdyZW5kZXInKTtcbiAgIH1cblxuICAgc2F2ZUxheW91dCgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nTGF5b3V0KCdzYXZlTGF5b3V0Jyk7XG4gICB9XG5cblxuICAgLy8ganF4RG9ja2luZ0xheW91dENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkRvY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25GbG9hdEdyb3VwQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRmxvYXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QaW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25VbnBpbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RvY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRvY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZmxvYXRHcm91cENsb3NlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRmxvYXRHcm91cENsb3NlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdmbG9hdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRmxvYXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGluJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QaW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVzaXplJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZXNpemUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndW5waW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVucGluLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhEb2NraW5nTGF5b3V0Q29tcG9uZW50XG4iXX0=