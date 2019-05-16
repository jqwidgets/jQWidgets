import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxexpander from '../../jqwidgets-scripts/jqwidgets/jqxexpander';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxExpanderComponent = /** @class */ (function () {
    function jqxExpanderComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxExpanderComponent events
        this.onCollapsing = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onExpanding = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.ngOnInit = /**
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
    jqxExpanderComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxExpander(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                        this.host.jqxExpander(this.properties[i], this[attrName]);
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
    jqxExpanderComponent.prototype.arraysEqual = /**
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
    jqxExpanderComponent.prototype.manageAttributes = /**
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
    jqxExpanderComponent.prototype.moveClasses = /**
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
    jqxExpanderComponent.prototype.moveStyles = /**
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
    jqxExpanderComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxExpanderComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.__updateRect__ = /**
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
    jqxExpanderComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxExpander('setOptions', options);
    };
    // jqxExpanderComponent properties
    // jqxExpanderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.animationType = 
    // jqxExpanderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('animationType', arg);
        }
        else {
            return this.host.jqxExpander('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.arrowPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('arrowPosition', arg);
        }
        else {
            return this.host.jqxExpander('arrowPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.collapseAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('collapseAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('disabled', arg);
        }
        else {
            return this.host.jqxExpander('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.expanded = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expanded', arg);
        }
        else {
            return this.host.jqxExpander('expanded');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.expandAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('expandAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('height', arg);
        }
        else {
            return this.host.jqxExpander('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.headerPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('headerPosition', arg);
        }
        else {
            return this.host.jqxExpander('headerPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.initContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('initContent', arg);
        }
        else {
            return this.host.jqxExpander('initContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('rtl', arg);
        }
        else {
            return this.host.jqxExpander('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.showArrow = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('showArrow', arg);
        }
        else {
            return this.host.jqxExpander('showArrow');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('theme', arg);
        }
        else {
            return this.host.jqxExpander('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.toggleMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('toggleMode', arg);
        }
        else {
            return this.host.jqxExpander('toggleMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxExpanderComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('width', arg);
        }
        else {
            return this.host.jqxExpander('width');
        }
    };
    // jqxExpanderComponent functions
    // jqxExpanderComponent functions
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.collapse = 
    // jqxExpanderComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('collapse');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('disable');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('destroy');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('enable');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.expand = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('expand');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('focus');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.getContent = /**
     * @return {?}
     */
    function () {
        return this.host.jqxExpander('getContent');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.getHeaderContent = /**
     * @return {?}
     */
    function () {
        return this.host.jqxExpander('getHeaderContent');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.invalidate = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('invalidate');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('refresh');
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxExpander('render');
    };
    /**
     * @param {?} headerContent
     * @return {?}
     */
    jqxExpanderComponent.prototype.setHeaderContent = /**
     * @param {?} headerContent
     * @return {?}
     */
    function (headerContent) {
        this.host.jqxExpander('setHeaderContent', headerContent);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    jqxExpanderComponent.prototype.setContent = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.host.jqxExpander('setContent', content);
    };
    /**
     * @return {?}
     */
    jqxExpanderComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('collapsing', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapsing.emit(eventData); }));
        this.host.on('collapsed', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCollapsed.emit(eventData); }));
        this.host.on('expanding', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpanding.emit(eventData); }));
        this.host.on('expanded', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onExpanded.emit(eventData); }));
    };
    jqxExpanderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxExpander',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxExpanderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxExpanderComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrArrowPosition: [{ type: Input, args: ['arrowPosition',] }],
        attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrExpanded: [{ type: Input, args: ['expanded',] }],
        attrExpandAnimationDuration: [{ type: Input, args: ['expandAnimationDuration',] }],
        attrHeaderPosition: [{ type: Input, args: ['headerPosition',] }],
        attrInitContent: [{ type: Input, args: ['initContent',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrShowArrow: [{ type: Input, args: ['showArrow',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onCollapsing: [{ type: Output }],
        onCollapsed: [{ type: Output }],
        onExpanding: [{ type: Output }],
        onExpanded: [{ type: Output }]
    };
    return jqxExpanderComponent;
}()); //jqxExpanderComponent
export { jqxExpanderComponent };
if (false) {
    /** @type {?} */
    jqxExpanderComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrArrowPosition;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrCollapseAnimationDuration;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrExpanded;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrExpandAnimationDuration;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrHeaderPosition;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrRtl;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrTheme;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrToggleMode;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrWidth;
    /** @type {?} */
    jqxExpanderComponent.prototype.attrHeight;
    /** @type {?} */
    jqxExpanderComponent.prototype.autoCreate;
    /** @type {?} */
    jqxExpanderComponent.prototype.properties;
    /** @type {?} */
    jqxExpanderComponent.prototype.host;
    /** @type {?} */
    jqxExpanderComponent.prototype.elementRef;
    /** @type {?} */
    jqxExpanderComponent.prototype.widgetObject;
    /** @type {?} */
    jqxExpanderComponent.prototype.onCollapsing;
    /** @type {?} */
    jqxExpanderComponent.prototype.onCollapsed;
    /** @type {?} */
    jqxExpanderComponent.prototype.onExpanding;
    /** @type {?} */
    jqxExpanderComponent.prototype.onExpanded;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhleHBhbmRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhleHBhbmRlci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4ZXhwYW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQTZCRyw4QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLDJCQUEyQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMseUJBQXlCLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsT0FBTyxDQUFDLENBQUM7O1FBMlJsTixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXhSdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFD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QkFBeUI7cUNBQy9CLEtBQUssU0FBQyxnQkFBZ0I7a0NBQ3RCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsS0FBSztnQ0FDWCxLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLE9BQU87aUNBQ2IsS0FBSyxTQUFDLFlBQVk7NEJBQ2xCLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxRQUFROzZCQUVkLEtBQUssU0FBQyxhQUFhOytCQTZSbkIsTUFBTTs4QkFDTixNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTs7SUFTViwyQkFBQztDQUFBLEFBL1RELElBK1RDLENBQUMsc0JBQXNCO1NBMVRYLG9CQUFvQjs7O0lBRTlCLGlEQUFrRDs7SUFDbEQsaURBQWtEOztJQUNsRCw2REFBMEU7O0lBQzFFLDRDQUF5Qzs7SUFDekMsNENBQXlDOztJQUN6QywyREFBc0U7O0lBQ3RFLGtEQUFvRDs7SUFDcEQsK0NBQWtEOztJQUNsRCx1Q0FBK0I7O0lBQy9CLDZDQUEyQzs7SUFDM0MseUNBQWtDOztJQUNsQyw4Q0FBNEM7O0lBQzVDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUU3QywwQ0FBaUQ7O0lBRWpELDBDQUE0Tjs7SUFDNU4sb0NBQVU7O0lBQ1YsMENBQXVCOztJQUN2Qiw0Q0FBcUM7O0lBd1JyQyw0Q0FBNEM7O0lBQzVDLDJDQUEyQzs7SUFDM0MsMkNBQTJDOztJQUMzQywwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEV4cGFuZGVyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhFeHBhbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25UeXBlJykgYXR0ckFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgIEBJbnB1dCgnYXJyb3dQb3NpdGlvbicpIGF0dHJBcnJvd1Bvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyQ29sbGFwc2VBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZXhwYW5kZWQnKSBhdHRyRXhwYW5kZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2V4cGFuZEFuaW1hdGlvbkR1cmF0aW9uJykgYXR0ckV4cGFuZEFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2hlYWRlclBvc2l0aW9uJykgYXR0ckhlYWRlclBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2luaXRDb250ZW50JykgYXR0ckluaXRDb250ZW50OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93QXJyb3cnKSBhdHRyU2hvd0Fycm93OiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b2dnbGVNb2RlJykgYXR0clRvZ2dsZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYXJyb3dQb3NpdGlvbicsJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nLCdkaXNhYmxlZCcsJ2V4cGFuZGVkJywnZXhwYW5kQW5pbWF0aW9uRHVyYXRpb24nLCdoZWlnaHQnLCdoZWFkZXJQb3NpdGlvbicsJ2luaXRDb250ZW50JywncnRsJywnc2hvd0Fycm93JywndGhlbWUnLCd0b2dnbGVNb2RlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RXhwYW5kZXI7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4RXhwYW5kZXIodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RXhwYW5kZXInLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4RXhwYW5kZXJDb21wb25lbnQgcHJvcGVydGllc1xuICAgYW5pbWF0aW9uVHlwZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignYW5pbWF0aW9uVHlwZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhcnJvd1Bvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2Fycm93UG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdhcnJvd1Bvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGV4cGFuZGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignZXhwYW5kZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdleHBhbmRlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBleHBhbmRBbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdleHBhbmRBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2V4cGFuZEFuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVhZGVyUG9zaXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignaGVhZGVyUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdoZWFkZXJQb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0Q29udGVudChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2luaXRDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignaW5pdENvbnRlbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhFeHBhbmRlcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dBcnJvdyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3Nob3dBcnJvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3Nob3dBcnJvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZ2dsZU1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcigndG9nZ2xlTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3RvZ2dsZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEV4cGFuZGVyQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgY29sbGFwc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2NvbGxhcHNlJyk7XG4gICB9XG5cbiAgIGRpc2FibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2Rpc2FibGUnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignZGVzdHJveScpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2VuYWJsZScpO1xuICAgfVxuXG4gICBleHBhbmQoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2V4cGFuZCcpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0Q29udGVudCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhFeHBhbmRlcignZ2V0Q29udGVudCcpO1xuICAgfVxuXG4gICBnZXRIZWFkZXJDb250ZW50KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdnZXRIZWFkZXJDb250ZW50Jyk7XG4gICB9XG5cbiAgIGludmFsaWRhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ2ludmFsaWRhdGUnKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhFeHBhbmRlcigncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3JlbmRlcicpO1xuICAgfVxuXG4gICBzZXRIZWFkZXJDb250ZW50KGhlYWRlckNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEV4cGFuZGVyKCdzZXRIZWFkZXJDb250ZW50JywgaGVhZGVyQ29udGVudCk7XG4gICB9XG5cbiAgIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RXhwYW5kZXIoJ3NldENvbnRlbnQnLCBjb250ZW50KTtcbiAgIH1cblxuXG4gICAvLyBqcXhFeHBhbmRlckNvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2xsYXBzZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FeHBhbmRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25FeHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbGxhcHNpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbGxhcHNpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sbGFwc2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kaW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25FeHBhbmRpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZXhwYW5kZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkV4cGFuZGVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhFeHBhbmRlckNvbXBvbmVudFxuIl19