import * as React from 'react';
declare class JqxTimeline extends React.PureComponent<ITimelineProps> {
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
    constructor(props: ITimelineProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ITimelineProps): void;
    getOptions(option: string): any;
    renderWidget(): [];
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxTimeline;
export declare const jqx: any;
export declare const JQXLite: any;
interface ITimelineOptions {
    autoWidth?: boolean;
    collapsible?: boolean;
    disabled?: boolean;
    horizontal?: boolean;
    position?: string;
    source?: [];
    theme?: string;
}
export interface ITimelineProps extends ITimelineOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
