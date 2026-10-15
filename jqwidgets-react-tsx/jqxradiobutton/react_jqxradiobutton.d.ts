import * as React from 'react';
declare class JqxRadioButton extends React.PureComponent<IRadioButtonProps> {
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
    constructor(props: IRadioButtonProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IRadioButtonProps): void;
    getOptions(option: string): any;
    check(): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    focus(): void;
    renderWidget(): void;
    uncheck(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxRadioButton;
export declare const jqx: any;
export declare const JQXLite: any;
interface IRadioButtonOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    hasThreeStates?: boolean;
    height?: string | number;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IRadioButtonProps extends IRadioButtonOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChecked?: (e?: any) => void;
    onChange?: (e?: any) => void;
    onUnchecked?: (e?: any) => void;
}
