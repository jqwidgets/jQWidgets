import * as React from 'react';
declare class JqxRangeSelector extends React.PureComponent<IRangeSelectorProps, IState> {
    protected static defaultProps: IRangeSelectorProps;
    protected static getDerivedStateFromProps(props: IRangeSelectorProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IRangeSelectorProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IRangeSelectorProps): void;
    setOptions(options: IRangeSelectorProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    getRange(): IRangeSelectorGetRange;
    renderWidget(): void;
    refresh(): void;
    setRange(from: any, to: any): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxRangeSelector;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IRangeSelectorRange {
    from?: number | string;
    to?: number | string;
    min?: number | string;
    max?: number | string;
}
interface IRangeSelectorGetRange {
    from?: number | string;
    to?: number | string;
}
interface IRangeSelectorLabelsFormatFunction {
    value?: string;
}
interface IRangeSelectorMarkersFormatFunction {
    value?: string;
    position?: string;
}
interface IRangeSelectorGroupLabelsFormatFunction {
    value?: string;
    date?: object;
}
interface IRangeSelectorOptions {
    disabled?: boolean;
    groupLabelsFormatFunction?: (value: IRangeSelectorGroupLabelsFormatFunction['value'], date: IRangeSelectorGroupLabelsFormatFunction['date']) => string;
    height?: string | number;
    labelsFormat?: 'd' | 'f' | 'n' | 'c' | 'p' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    labelsFormatFunction?: (value: IRangeSelectorLabelsFormatFunction['value']) => string;
    labelsOnTicks?: boolean;
    markersFormat?: 'd' | 'f' | 'n' | 'c' | 'p' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    markersFormatFunction?: (value: IRangeSelectorMarkersFormatFunction['value'], position: IRangeSelectorMarkersFormatFunction['position']) => string;
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
    showMinorTicks?: boolean;
    snapToTicks?: boolean;
    showMajorLabels?: boolean;
    showMarkers?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IRangeSelectorProps extends IRangeSelectorOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
