import * as React from 'react';
declare class JqxProgressBar extends React.PureComponent<IProgressBarProps, IState> {
    protected static defaultProps: IProgressBarProps;
    protected static getDerivedStateFromProps(props: IProgressBarProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IProgressBarProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IProgressBarProps): void;
    setOptions(options: IProgressBarProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    actualValue(value: number | string): void;
    destroy(): void;
    val(value?: number | string): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxProgressBar;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IProgressBarColorRanges {
    stop?: number | string;
    color?: string;
}
interface IProgressBarRenderText {
    text?: string;
    value?: number;
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
    renderText?: (text?: IProgressBarRenderText['text'], value?: IProgressBarRenderText['value']) => string;
    showText?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: string | number;
    width?: string | number;
}
export interface IProgressBarProps extends IProgressBarOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onComplete?: (e?: Event) => void;
    onInvalidValue?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
