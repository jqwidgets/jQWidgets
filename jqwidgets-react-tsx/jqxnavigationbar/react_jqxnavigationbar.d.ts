import * as React from 'react';
declare class JqxNavigationBar extends React.PureComponent<INavigationBarProps, IState> {
    protected static defaultProps: INavigationBarProps;
    protected static getDerivedStateFromProps(props: INavigationBarProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: INavigationBarProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: INavigationBarProps): void;
    setOptions(options: INavigationBarProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    add(header: number | string, content: number | string): void;
    collapseAt(index: number | string): void;
    disableAt(index: number | string): void;
    disable(): void;
    destroy(): void;
    expandAt(index: number | string): void;
    enableAt(index: number | string): void;
    enable(): void;
    focus(): void;
    getHeaderContentAt(index: number | string): string;
    getContentAt(index: number | string): string;
    hideArrowAt(index: number | string): void;
    invalidate(): void;
    insert(Index: number, header: number | string, content: number | string): void;
    refresh(): void;
    renderWidget(): void;
    remove(index: number | string): void;
    setContentAt(index: number, item: number | string): void;
    setHeaderContentAt(index: number, item: number | string): void;
    showArrowAt(index: number | string): void;
    update(index: number, header: number | string, content: number | string): void;
    val(value?: number | string): string | number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxNavigationBar;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface INavigationBarOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowPosition?: 'left' | 'right';
    collapseAnimationDuration?: number;
    disabled?: boolean;
    expandAnimationDuration?: number;
    expandMode?: 'single' | 'singleFitHeight' | 'multiple' | 'toggle' | 'none';
    expandedIndexes?: number[];
    height?: string | number;
    initContent?: (index: number) => void;
    rtl?: boolean;
    showArrow?: boolean;
    theme?: string;
    toggleMode?: 'click' | 'dblclick' | 'none';
    width?: string | number;
}
export interface INavigationBarProps extends INavigationBarOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onCollapsingItem?: (e?: Event) => void;
    onCollapsedItem?: (e?: Event) => void;
    onExpandingItem?: (e?: Event) => void;
    onExpandedItem?: (e?: Event) => void;
}
