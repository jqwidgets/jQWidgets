import * as React from 'react';
declare class JqxPivotDesigner extends React.PureComponent<IPivotDesignerProps> {
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
    private _changedInARow;
    private _warned;
    constructor(props: IPivotDesignerProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPivotDesignerProps): void;
    getOptions(option: string): any;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPivotDesigner;
export declare const jqx: any;
export declare const JQXLite: any;
interface IPivotDesignerOptions {
    theme?: string;
    type?: string;
    target?: any;
}
export interface IPivotDesignerProps extends IPivotDesignerOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
