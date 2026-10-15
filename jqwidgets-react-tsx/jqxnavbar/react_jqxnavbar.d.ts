import * as React from 'react';
declare class JqxNavBar extends React.PureComponent<INavBarProps> {
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
    constructor(props: INavBarProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: INavBarProps): void;
    getOptions(option: string): any;
    close(): void;
    destroy(): void;
    getSelectedIndex(): number;
    open(): void;
    selectAt(index: number | string): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxNavBar;
export declare const jqx: any;
export declare const JQXLite: any;
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
export interface INavBarProps extends INavBarOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
