import * as React from 'react';
declare class JqxRangeSelector extends React.PureComponent<IRangeSelectorProps> {
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
    constructor(props: IRangeSelectorProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IRangeSelectorProps): void;
    getOptions(option: string): any;
    destroy(): void;
    getRange(): IRangeSelectorGetRange;
    renderWidget(): void;
    refresh(): void;
    setRange(from: any, to: any): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxRangeSelector;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IRangeSelectorRange {
    from?: number | string | Date;
    to?: number | string | Date;
    min?: number | string | object;
    max?: number | string | object;
}
export interface IRangeSelectorGetRange {
    from?: number | string;
    to?: number | string;
}
export interface IRangeSelectorLabelsFormatFunction {
    value: any;
}
export interface IRangeSelectorMarkersFormatFunction {
    value: any;
    position: 'left' | 'right';
}
export interface IRangeSelectorGroupLabelsFormatFunction {
    value: string;
    date: Date;
}
interface IRangeSelectorOptions {
    disabled?: boolean;
    groupLabelsFormatFunction?: (value: IRangeSelectorGroupLabelsFormatFunction['value'], date: IRangeSelectorGroupLabelsFormatFunction['date']) => string;
    height?: string | number;
    labelsFormat?: string;
    labelsFormatFunction?: (value: IRangeSelectorLabelsFormatFunction['value']) => string;
    labelsOnTicks?: boolean;
    markersFormat?: string;
    markersFormatFunction?: (value: IRangeSelectorMarkersFormatFunction['value'], position: IRangeSelectorMarkersFormatFunction['position']) => string;
    markersPosition?: string;
    majorTicksInterval?: any;
    minorTicksInterval?: any;
    max?: any;
    min?: any;
    moveOnClick?: boolean;
    padding?: number | string;
    range?: IRangeSelectorRange;
    resizable?: boolean;
    rtl?: boolean;
    showGroupLabels?: boolean;
    showLabels?: boolean;
    showMajorTicks?: boolean;
    showMinorTicks?: boolean;
    snapToTicks?: boolean;
    showMarkers?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IRangeSelectorProps extends IRangeSelectorOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
