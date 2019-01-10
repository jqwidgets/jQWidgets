import * as React from 'react';
declare class JqxExpander extends React.PureComponent<IExpanderProps, IState> {
    protected static defaultProps: IExpanderProps;
    protected static getDerivedStateFromProps(props: IExpanderProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IExpanderProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IExpanderProps): void;
    setOptions(options: IExpanderProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    collapse(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    expand(): void;
    focus(): void;
    getContent(): string;
    getHeaderContent(): string;
    invalidate(): void;
    refresh(): void;
    renderWidget(): void;
    setHeaderContent(headerContent: string): void;
    setContent(content: string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxExpander;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IExpanderOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowPosition?: 'left' | 'right';
    collapseAnimationDuration?: number;
    disabled?: boolean;
    expanded?: boolean;
    expandAnimationDuration?: number;
    height?: number | string;
    headerPosition?: 'top' | 'bottom';
    initContent?: () => void;
    rtl?: boolean;
    showArrow?: boolean;
    theme?: string;
    toggleMode?: 'click' | 'dblclick' | 'none';
    width?: number | string;
}
export interface IExpanderProps extends IExpanderOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onCollapsing?: (e?: Event) => void;
    onCollapsed?: (e?: Event) => void;
    onExpanding?: (e?: Event) => void;
    onExpanded?: (e?: Event) => void;
}
