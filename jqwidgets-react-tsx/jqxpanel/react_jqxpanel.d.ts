import * as React from 'react';
declare class JqxPanel extends React.PureComponent<IPanelProps, IState> {
    protected static defaultProps: IPanelProps;
    protected static getDerivedStateFromProps(props: IPanelProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IPanelProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IPanelProps): void;
    setOptions(options: IPanelProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    append(HTMLElement: any): void;
    clearcontent(): void;
    destroy(): void;
    focus(): void;
    getScrollHeight(): number;
    getVScrollPosition(): number;
    getScrollWidth(): number;
    getHScrollPosition(): number;
    prepend(HTMLElement: any): void;
    remove(HTMLElement: any): void;
    scrollTo(left: number | string, top: number | string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxPanel;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IPanelOptions {
    autoUpdate?: boolean;
    disabled?: boolean;
    height?: string | number;
    rtl?: boolean;
    sizeMode?: 'fixed' | 'wrap';
    scrollBarSize?: number | string;
    theme?: string;
    width?: string | number;
}
export interface IPanelProps extends IPanelOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
