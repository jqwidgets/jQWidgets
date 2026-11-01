import * as React from 'react';
declare class JqxDraw extends React.PureComponent<IDrawProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _changedInARow;
    private _warned;
    constructor(props: IDrawProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDrawProps): void;
    getOptions(option: string): any;
    attr(element?: any, attributes?: any): void;
    circle(cx?: number, cy?: number, r?: number, attributes?: any): any;
    clear(): void;
    getAttr(element?: any, attributes?: any): string;
    getSize(): any;
    line(x1?: number, y1?: number, x2?: number, y2?: number, attributes?: any): any;
    measureText(text?: string, angle?: number, attributes?: any): any;
    on(element?: any, event?: string, func?: any): void;
    off(element?: any, event?: string, func?: any): void;
    path(path?: string, attributes?: any): any;
    pieslice(cx?: number, xy?: number, innerRadius?: any, outerRadius?: any, fromAngle?: number, endAngle?: number, centerOffset?: number, attributes?: any): any;
    refresh(): void;
    rect(x?: number, y?: number, width?: number | string, height?: number | string, attributes?: any): any;
    saveAsJPEG(image?: string, url?: string): void;
    saveAsPNG(image?: string, url?: string): void;
    text(text?: string, x?: number, y?: number, width?: number | string, height?: number | string, angle?: number, attributes?: any, clip?: boolean, halign?: string, valign?: string, rotateAround?: string): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDraw;
export declare const jqx: any;
export declare const JQXLite: any;
interface IDrawOptions {
    renderEngine?: 'SVG' | 'VML' | 'HTML5';
    theme?: string;
}
export interface IDrawProps extends IDrawOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
