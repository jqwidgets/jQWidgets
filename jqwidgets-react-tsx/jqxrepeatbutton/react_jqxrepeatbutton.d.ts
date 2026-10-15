import * as React from 'react';
declare class JqxRepeatButton extends React.PureComponent<IRepeatButtonProps> {
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
    constructor(props: IRepeatButtonProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IRepeatButtonProps): void;
    getOptions(option: string): any;
    destroy(): void;
    focus(): void;
    renderWidget(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxRepeatButton;
export declare const jqx: any;
export declare const JQXLite: any;
interface IRepeatButtonOptions {
    delay?: number;
    disabled?: boolean;
    height?: number | string;
    imgSrc?: string;
    imgWidth?: number | string;
    imgHeight?: number | string;
    imgPosition?: 'left' | 'center' | 'right' | 'top' | 'bottom' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
    roundedCorners?: 'top' | 'bottom' | 'all' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    rtl?: boolean;
    textPosition?: 'left' | 'center' | 'right' | 'top' | 'bottom' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
    textImageRelation?: 'imageBeforeText' | 'imageAboveText' | 'textAboveImage' | 'textBeforeImage' | 'overlay';
    theme?: string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    width?: string | number;
    value?: string;
}
export interface IRepeatButtonProps extends IRepeatButtonOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: (e?: any) => void;
}
