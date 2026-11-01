import * as React from 'react';
declare class JqxToolBar extends React.PureComponent<IToolBarProps> {
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
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: IToolBarProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IToolBarProps): void;
    getOptions(option: string): any;
    addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type: string, tool: any, menuToolIninitialization: boolean) => {
        minimizable?: boolean;
        menuTool?: boolean;
    } | void): void;
    disableTool(index: number, disable: boolean): void;
    destroy(): void;
    destroyTool(index: number): void;
    getTools(): IToolBarToolItem[];
    renderWidget(): void;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxToolBar;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IToolBarToolItem {
    type?: string;
    tool?: any;
    separatorAfterWidget?: boolean;
    minimizable?: boolean;
    minimized?: boolean;
    menuTool?: any;
    menuSeparator?: any;
}
interface IToolBarOptions {
    disabled?: boolean;
    height?: string | number;
    initTools?: (type: string, index: number, tool: any, menuToolIninitialization: boolean) => {
        minimizable?: boolean;
        menuTool?: boolean;
    } | void;
    minimizeWidth?: number;
    minWidth?: number | string;
    maxWidth?: number | string;
    rtl?: boolean;
    tools?: string;
    theme?: string;
    width?: string | number;
}
export interface IToolBarProps extends IToolBarOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: (e?: any) => void;
    onOpen?: (e?: any) => void;
}
