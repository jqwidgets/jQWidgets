import * as React from 'react';
declare class JqxHeatMap extends React.PureComponent<IHeatMapProps> {
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
    constructor(props: IHeatMapProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IHeatMapProps): void;
    getOptions(option: string): any;
    destroy(): void;
    setLegendPosition(position?: string): void;
    setOpposedXAxisPosition(opposedPosition: boolean): void;
    setOpposedYAxisPosition(opposedPosition: boolean): void;
    reverseXAxisPosition(isInversed: boolean): void;
    reverseYAxisPosition(isInversed: boolean): void;
    setPaletteType(type: string): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxHeatMap;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IHeatMapXAxis {
    labels?: any[];
    opposedPosition?: boolean;
    isInversed?: boolean;
    minimum?: Date;
    maximum?: Date;
    labelFormat?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
}
export interface IHeatMapYAxis {
    labels?: any[];
    opposedPosition?: boolean;
    isInversed?: boolean;
}
export interface IHeatMapPaletteSettings {
    palette?: any[];
    type?: 'Gradient' | 'Fixed';
    emptyPointColor?: string;
}
export interface IHeatMapPalette {
    value?: number;
    color?: string;
    label?: string;
}
export interface IHeatMapLegendSettings {
    position?: 'Top' | 'Bottom' | 'Left' | 'Right';
}
export interface IHeatMapTooltipRender {
    xLabel: any;
    yLabel: any;
    value: string;
    content: string;
    date?: string | null;
}
interface IHeatMapOptions {
    xAxis?: IHeatMapXAxis;
    yAxis?: IHeatMapYAxis;
    paletteSettings?: IHeatMapPaletteSettings;
    legendSettings?: IHeatMapLegendSettings;
    source?: any[];
    title?: string;
    width?: number | string;
    tooltipRender?: (args: IHeatMapTooltipRender) => void;
}
export interface IHeatMapProps extends IHeatMapOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
