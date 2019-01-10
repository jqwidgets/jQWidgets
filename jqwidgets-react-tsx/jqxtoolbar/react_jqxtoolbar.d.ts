import * as React from 'react';
declare class JqxToolBar extends React.PureComponent<IToolBarProps, IState> {
    protected static defaultProps: IToolBarProps;
    protected static getDerivedStateFromProps(props: IToolBarProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IToolBarProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IToolBarProps): void;
    setOptions(options: IToolBarProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: string, tool?: any, menuToolIninitialization?: boolean) => void): void;
    disableTool(index: number, disable: boolean): void;
    destroy(): void;
    destroyTool(index: number): void;
    getTools(): IToolBarToolItem[];
    renderWidget(): void;
    refresh(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxToolBar;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IToolBarToolItem {
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
    initTools?: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void;
    minimizeWidth?: number;
    minWidth?: number | string;
    maxWidth?: number | string;
    rtl?: boolean;
    tools?: 'button' | 'toggleButton' | 'dropdownlist' | 'combobox' | 'input' | 'custom';
    theme?: string;
    width?: string | number;
}
export interface IToolBarProps extends IToolBarOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
