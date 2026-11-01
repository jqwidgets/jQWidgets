import * as React from 'react';
declare class JqxButtonGroup extends React.PureComponent<IButtonGroupProps> {
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
    constructor(props: IButtonGroupProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IButtonGroupProps): void;
    getOptions(option: string): any;
    clearSelection(): void;
    disableAt(index: number): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    enableAt(index: number): void;
    getSelection(): any;
    renderWidget(): void;
    setSelection(index: number): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxButtonGroup;
export declare const jqx: any;
export declare const JQXLite: any;
interface IButtonGroupOptions {
    disabled?: boolean;
    enableHover?: boolean;
    height?: number | string;
    mode?: 'checkbox' | 'radio' | 'default';
    orientation?: string;
    roundedCorners?: boolean;
    rtl?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    width?: number | string;
}
export interface IButtonGroupProps extends IButtonGroupOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onButtonclick?: (e?: any) => void;
    onSelected?: (e?: any) => void;
    onUnselected?: (e?: any) => void;
}
