import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxnavigationbar from '../../jqwidgets-scripts/jqwidgets/jqxnavigationbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxNavigationBarComponent = /** @class */ (function () {
    function jqxNavigationBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxNavigationBarComponent events
        this.onCollapsingItem = new EventEmitter();
        this.onCollapsedItem = new EventEmitter();
        this.onExpandingItem = new EventEmitter();
        this.onExpandedItem = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.ngOnInit = /**
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
    jqxNavigationBarComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
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
    jqxNavigationBarComponent.prototype.arraysEqual = /**
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
    jqxNavigationBarComponent.prototype.manageAttributes = /**
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
    jqxNavigationBarComponent.prototype.moveClasses = /**
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
    jqxNavigationBarComponent.prototype.moveStyles = /**
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
    jqxNavigationBarComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.__updateRect__ = /**
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
    jqxNavigationBarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxNavigationBar('setOptions', options);
    };
    // jqxNavigationBarComponent properties
    // jqxNavigationBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.animationType = 
    // jqxNavigationBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('animationType', arg);
        }
        else {
            return this.host.jqxNavigationBar('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.arrowPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('arrowPosition', arg);
        }
        else {
            return this.host.jqxNavigationBar('arrowPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.collapseAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('collapseAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('disabled', arg);
        }
        else {
            return this.host.jqxNavigationBar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.expandAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.expandMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.expandedIndexes = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandedIndexes', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandedIndexes');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('height', arg);
        }
        else {
            return this.host.jqxNavigationBar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('initContent', arg);
        }
        else {
            return this.host.jqxNavigationBar('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('rtl', arg);
        }
        else {
            return this.host.jqxNavigationBar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.showArrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('showArrow', arg);
        }
        else {
            return this.host.jqxNavigationBar('showArrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('theme', arg);
        }
        else {
            return this.host.jqxNavigationBar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.toggleMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('toggleMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('toggleMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('width', arg);
        }
        else {
            return this.host.jqxNavigationBar('width');
        }
    };
    // jqxNavigationBarComponent functions
    // jqxNavigationBarComponent functions
    /**
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.add = 
    // jqxNavigationBarComponent functions
    /**
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    function (header, content) {
        this.host.jqxNavigationBar('add', header, content);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.collapseAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('collapseAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.disableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('disableAt', index);
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('disable');
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('destroy');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.expandAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('expandAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.enableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('enableAt', index);
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('enable');
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('focus');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.getHeaderContentAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.host.jqxNavigationBar('getHeaderContentAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.getContentAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.host.jqxNavigationBar('getContentAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.hideArrowAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('hideArrowAt', index);
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.invalidate = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('invalidate');
    };
    /**
     * @param {?} Index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.insert = /**
     * @param {?} Index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    function (Index, header, content) {
        this.host.jqxNavigationBar('insert', Index, header, content);
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('refresh');
    };
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxNavigationBar('render');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('remove', index);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.setContentAt = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxNavigationBar('setContentAt', index, item);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.setHeaderContentAt = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        this.host.jqxNavigationBar('setHeaderContentAt', index, item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.showArrowAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNavigationBar('showArrowAt', index);
    };
    /**
     * @param {?} index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.update = /**
     * @param {?} index
     * @param {?} header
     * @param {?} content
     * @return {?}
     */
    function (index, header, content) {
        this.host.jqxNavigationBar('update', index, header, content);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxNavigationBar('val', value);
        }
        else {
            return this.host.jqxNavigationBar('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxNavigationBarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('collapsingItem', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapsingItem.emit(eventData); }));
        this.host.on('collapsedItem', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapsedItem.emit(eventData); }));
        this.host.on('expandingItem', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpandingItem.emit(eventData); }));
        this.host.on('expandedItem', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpandedItem.emit(eventData); }));
    };
    jqxNavigationBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxNavigationBar',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxNavigationBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxNavigationBarComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrArrowPosition: [{ type: Input, args: ['arrowPosition',] }],
        attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrExpandAnimationDuration: [{ type: Input, args: ['expandAnimationDuration',] }],
        attrExpandMode: [{ type: Input, args: ['expandMode',] }],
        attrExpandedIndexes: [{ type: Input, args: ['expandedIndexes',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowArrow: [{ type: Input, args: ['showArrow',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onCollapsingItem: [{ type: Output }],
        onCollapsedItem: [{ type: Output }],
        onExpandingItem: [{ type: Output }],
        onExpandedItem: [{ type: Output }]
    };
    return jqxNavigationBarComponent;
}()); //jqxNavigationBarComponent
export { jqxNavigationBarComponent };
if (false) {
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrArrowPosition;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrCollapseAnimationDuration;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandAnimationDuration;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandMode;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrExpandedIndexes;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrToggleMode;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.properties;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.host;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onCollapsingItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onCollapsedItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onExpandingItem;
    /** @type {?} */
    jqxNavigationBarComponent.prototype.onExpandedItem;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhuYXZpZ2F0aW9uYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeG5hdmlnYXRpb25iYXIvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeG5hdmlnYXRpb25iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTZCRyxtQ0FBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLDJCQUEyQixFQUFDLFVBQVUsRUFBQyx5QkFBeUIsRUFBQyxZQUFZLEVBQUMsaUJBQWlCLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBbVVyTixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBaFUzQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENB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Q2xELGtFQUEwRTs7SUFDMUUsaURBQXlDOztJQUN6QyxnRUFBc0U7O0lBQ3RFLG1EQUE0Qzs7SUFDNUMsd0RBQTZEOztJQUM3RCxvREFBOEQ7O0lBQzlELDRDQUErQjs7SUFDL0Isa0RBQTJDOztJQUMzQyw4Q0FBa0M7O0lBQ2xDLG1EQUE0Qzs7SUFDNUMsOENBQTJDOztJQUMzQywrQ0FBNkM7O0lBRTdDLCtDQUFpRDs7SUFFakQsK0NBQStOOztJQUMvTix5Q0FBVTs7SUFDViwrQ0FBdUI7O0lBQ3ZCLGlEQUEwQzs7SUFnVTFDLHFEQUFnRDs7SUFDaEQsb0RBQStDOztJQUMvQyxvREFBK0M7O0lBQy9DLG1EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4TmF2aWdhdGlvbkJhcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4TmF2aWdhdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25UeXBlJykgYXR0ckFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgIEBJbnB1dCgnYXJyb3dQb3NpdGlvbicpIGF0dHJBcnJvd1Bvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQ29sbGFwc2VBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZXhwYW5kQW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyRXhwYW5kQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnZXhwYW5kTW9kZScpIGF0dHJFeHBhbmRNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2V4cGFuZGVkSW5kZXhlcycpIGF0dHJFeHBhbmRlZEluZGV4ZXM6IEFycmF5PG51bWJlcj47XG4gICBASW5wdXQoJ2luaXRDb250ZW50JykgYXR0ckluaXRDb250ZW50OiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93QXJyb3cnKSBhdHRyU2hvd0Fycm93OiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b2dnbGVNb2RlJykgYXR0clRvZ2dsZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYXJyb3dQb3NpdGlvbicsJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nLCdkaXNhYmxlZCcsJ2V4cGFuZEFuaW1hdGlvbkR1cmF0aW9uJywnZXhwYW5kTW9kZScsJ2V4cGFuZGVkSW5kZXhlcycsJ2hlaWdodCcsJ2luaXRDb250ZW50JywncnRsJywnc2hvd0Fycm93JywndGhlbWUnLCd0b2dnbGVNb2RlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4TmF2aWdhdGlvbkJhcjtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeE5hdmlnYXRpb25CYXInLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdhbmltYXRpb25UeXBlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFycm93UG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdhcnJvd1Bvc2l0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdhcnJvd1Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwYW5kQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdleHBhbmRBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignZXhwYW5kQW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwYW5kTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2V4cGFuZE1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2V4cGFuZE1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwYW5kZWRJbmRleGVzKGFyZz86IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdleHBhbmRlZEluZGV4ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2V4cGFuZGVkSW5kZXhlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0Q29udGVudChhcmc/OiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTogKGluZGV4Om51bWJlcikgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignaW5pdENvbnRlbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2luaXRDb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Fycm93KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdzaG93QXJyb3cnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ3Nob3dBcnJvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2dnbGVNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcigndG9nZ2xlTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcigndG9nZ2xlTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeE5hdmlnYXRpb25CYXJDb21wb25lbnQgZnVuY3Rpb25zXG4gICBhZGQoaGVhZGVyOiBudW1iZXIgfCBzdHJpbmcsIGNvbnRlbnQ6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2FkZCcsIGhlYWRlciwgY29udGVudCk7XG4gICB9XG5cbiAgIGNvbGxhcHNlQXQoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2NvbGxhcHNlQXQnLCBpbmRleCk7XG4gICB9XG5cbiAgIGRpc2FibGVBdChpbmRleDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignZGlzYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2Rpc2FibGUnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGV4cGFuZEF0KGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdleHBhbmRBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgZW5hYmxlQXQoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2VuYWJsZUF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignZW5hYmxlJyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldEhlYWRlckNvbnRlbnRBdChpbmRleDogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TmF2aWdhdGlvbkJhcignZ2V0SGVhZGVyQ29udGVudEF0JywgaW5kZXgpO1xuICAgfVxuXG4gICBnZXRDb250ZW50QXQoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2dldENvbnRlbnRBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgaGlkZUFycm93QXQoaW5kZXg6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2hpZGVBcnJvd0F0JywgaW5kZXgpO1xuICAgfVxuXG4gICBpbnZhbGlkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ2ludmFsaWRhdGUnKTtcbiAgIH1cblxuICAgaW5zZXJ0KEluZGV4OiBudW1iZXIsIGhlYWRlcjogbnVtYmVyIHwgc3RyaW5nLCBjb250ZW50OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdpbnNlcnQnLCBJbmRleCwgaGVhZGVyLCBjb250ZW50KTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVtb3ZlKGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdyZW1vdmUnLCBpbmRleCk7XG4gICB9XG5cbiAgIHNldENvbnRlbnRBdChpbmRleDogbnVtYmVyLCBpdGVtOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdzZXRDb250ZW50QXQnLCBpbmRleCwgaXRlbSk7XG4gICB9XG5cbiAgIHNldEhlYWRlckNvbnRlbnRBdChpbmRleDogbnVtYmVyLCBpdGVtOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdzZXRIZWFkZXJDb250ZW50QXQnLCBpbmRleCwgaXRlbSk7XG4gICB9XG5cbiAgIHNob3dBcnJvd0F0KGluZGV4OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCdzaG93QXJyb3dBdCcsIGluZGV4KTtcbiAgIH1cblxuICAgdXBkYXRlKGluZGV4OiBudW1iZXIsIGhlYWRlcjogbnVtYmVyIHwgc3RyaW5nLCBjb250ZW50OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhOYXZpZ2F0aW9uQmFyKCd1cGRhdGUnLCBpbmRleCwgaGVhZGVyLCBjb250ZW50KTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE5hdmlnYXRpb25CYXIoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ29sbGFwc2luZ0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2xsYXBzZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRXhwYW5kaW5nSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkV4cGFuZGVkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbGxhcHNpbmdJdGVtJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzaW5nSXRlbS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2xsYXBzZWRJdGVtJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzZWRJdGVtLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2V4cGFuZGluZ0l0ZW0nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkV4cGFuZGluZ0l0ZW0uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kZWRJdGVtJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmRlZEl0ZW0uZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeE5hdmlnYXRpb25CYXJDb21wb25lbnRcbiJdfQ==