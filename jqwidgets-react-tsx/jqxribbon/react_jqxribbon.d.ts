import * as React from 'react';
declare class JqxRibbon extends React.PureComponent<IRibbonProps, IState> {
    protected static defaultProps: IRibbonProps;
    protected static getDerivedStateFromProps(props: IRibbonProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IRibbonProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IRibbonProps): void;
    setOptions(options: IRibbonProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addAt(index: number, item: object): void;
    clearSelection(): void;
    disableAt(index: number): void;
    destroy(): void;
    enableAt(index: number): void;
    hideAt(index: number): void;
    removeAt(index: number): void;
    renderWidget(): void;
    refresh(): void;
    selectAt(index: number): void;
    showAt(index: number): void;
    setPopupLayout(index: number, layout: any, width: number | string, height: number | string): void;
    updateAt(index: number, item: object): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxRibbon;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IRibbonOptions {
    animationType?: 'fade' | 'slide' | 'none';
    animationDelay?: number | string;
    disabled?: boolean;
    height?: number | string;
    initContent?: (index: any) => void;
    mode?: 'default' | 'popup';
    popupCloseMode?: 'click' | 'mouseLeave' | 'none';
    position?: 'top' | 'bottom' | 'left' | 'right';
    reorder?: boolean;
    rtl?: boolean;
    selectedIndex?: number;
    selectionMode?: 'click' | 'hover' | 'none';
    scrollPosition?: 'both' | 'near' | 'far';
    scrollStep?: number;
    scrollDelay?: number;
    theme?: string;
    width?: string | number;
}
export interface IRibbonProps extends IRibbonOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
    onReorder?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUnselect?: (e?: Event) => void;
}
