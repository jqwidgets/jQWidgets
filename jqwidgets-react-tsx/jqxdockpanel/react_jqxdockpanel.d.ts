import * as React from 'react';
declare class JqxDockPanel extends React.PureComponent<IDockPanelProps, IState> {
    protected static defaultProps: IDockPanelProps;
    protected static getDerivedStateFromProps(props: IDockPanelProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDockPanelProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDockPanelProps): void;
    setOptions(options: IDockPanelProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    refresh(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDockPanel;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IDockPanelOptions {
    disabled?: boolean;
    height?: string | number;
    lastchildfill?: boolean;
    width?: string | number;
}
export interface IDockPanelProps extends IDockPanelOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onLayout?: (e?: Event) => void;
}
