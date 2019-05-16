/// <reference path="../jqwidgets.d.ts" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxLinkButtonComponent implements OnChanges {
    attrDisabled: boolean;
    attrRtl: boolean;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxLinkButton;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    rtl(arg?: boolean): boolean;
    theme(arg?: string): string;
    width(arg?: string | number): string | number;
    __wireEvents__(): void;
}
