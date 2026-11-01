import * as React from 'react';
declare class JqxLinkButton extends React.PureComponent<ILinkButtonProps> {
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
    constructor(props: ILinkButtonProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ILinkButtonProps): void;
    getOptions(option: string): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxLinkButton;
export declare const jqx: any;
export declare const JQXLite: any;
interface ILinkButtonOptions {
    disabled?: boolean;
    height?: string | number;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}
export interface ILinkButtonProps extends ILinkButtonOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    href?: string;
    target?: string;
}
