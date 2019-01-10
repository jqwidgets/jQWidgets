import * as React from 'react';
declare class JqxLoader extends React.PureComponent<ILoaderProps, IState> {
    protected static defaultProps: ILoaderProps;
    protected static getDerivedStateFromProps(props: ILoaderProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ILoaderProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ILoaderProps): void;
    setOptions(options: ILoaderProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    open(left?: number | string, top?: number | string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxLoader;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ILoaderOptions {
    autoOpen?: boolean;
    height?: string | number;
    html?: string;
    isModal?: boolean;
    imagePosition?: 'center' | 'top' | 'bottom';
    rtl?: boolean;
    text?: number | string;
    textPosition?: 'top' | 'bottom' | 'left' | 'right';
    theme?: string;
    width?: string | number;
}
export interface ILoaderProps extends ILoaderOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
