import * as React from 'react';
declare class JqxNavBar extends React.PureComponent<INavBarProps, IState> {
    protected static defaultProps: INavBarProps;
    protected static getDerivedStateFromProps(props: INavBarProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: INavBarProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: INavBarProps): void;
    setOptions(options: INavBarProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    close(): void;
    destroy(): void;
    getSelectedIndex(): number;
    open(): void;
    selectAt(index: number | string): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxNavBar;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface INavBarOptions {
    columns?: string[];
    disabled?: boolean;
    height?: string | number;
    minimized?: boolean;
    minimizeButtonPosition?: 'left' | 'right';
    minimizedHeight?: number | string;
    minimizedTitle?: number | string;
    orientation?: 'vertical' | 'horizontal';
    popupAnimationDelay?: number;
    rtl?: boolean;
    selection?: boolean;
    selectedItem?: number | string;
    theme?: string;
    width?: string | number;
}
export interface INavBarProps extends INavBarOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
