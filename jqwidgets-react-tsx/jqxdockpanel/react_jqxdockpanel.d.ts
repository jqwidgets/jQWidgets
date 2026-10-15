import * as React from 'react';
declare class JqxDockPanel extends React.PureComponent<IDockPanelProps> {
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
    constructor(props: IDockPanelProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDockPanelProps): void;
    getOptions(option: string): any;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDockPanel;
export declare const jqx: any;
export declare const JQXLite: any;
interface IDockPanelOptions {
    disabled?: boolean;
    height?: string | number;
    lastchildfill?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IDockPanelProps extends IDockPanelOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onLayout?: (e?: any) => void;
}
