import * as React from 'react';
declare class JqxProgressBar extends React.PureComponent<IProgressBarProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    constructor(props: IProgressBarProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IProgressBarProps): void;
    getOptions(option: string): any;
    actualValue(value: number | string): void;
    destroy(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxProgressBar;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IProgressBarColorRanges {
    stop?: number | string;
    color?: string;
}
export interface IProgressBarRenderText {
    text: string;
    value: number;
}
interface IProgressBarOptions {
    animationDuration?: number;
    colorRanges?: IProgressBarColorRanges[];
    disabled?: boolean;
    height?: string | number;
    layout?: 'normal' | 'reverse';
    max?: string | number;
    min?: number | string;
    orientation?: 'vertical' | 'horizontal';
    rtl?: boolean;
    renderText?: (text: IProgressBarRenderText['text'], value: IProgressBarRenderText['value']) => string;
    showText?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: string | number;
    width?: string | number;
}
export interface IProgressBarProps extends IProgressBarOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onComplete?: (e?: any) => void;
    onInvalidValue?: (e?: any) => void;
    onValueChanged?: (e?: any) => void;
}
