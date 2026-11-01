import * as React from 'react';
declare class JqxTreeMap extends React.PureComponent<ITreeMapProps> {
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
    constructor(props: ITreeMapProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ITreeMapProps): void;
    getOptions(option: string): any;
    clearSelection(): void;
    destroy(): void;
    renderWidget(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxTreeMap;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ITreeMapColorRanges {
    color?: string;
    min?: number;
    max?: number;
}
export interface ITreeMapLegendPosition {
    x?: number | string;
    y?: number | string;
}
export interface ITreeMapLegendScaleCallback {
    v: number;
}
interface ITreeMapOptions {
    baseColor?: string;
    colorRanges?: ITreeMapColorRanges[];
    colorRange?: number;
    colorMode?: 'parent' | 'autoColors' | 'rangeColors';
    displayMember?: string;
    height?: string | number;
    hoverEnabled?: boolean;
    headerHeight?: number;
    legendLabel?: string;
    legendPosition?: ITreeMapLegendPosition;
    legendScaleCallback?: (v: ITreeMapLegendScaleCallback['v']) => string | number;
    renderCallbacks?: {
        [label: string]: (element: any, data: any) => boolean | void;
    };
    selectionEnabled?: boolean;
    singleSelection?: boolean;
    showLegend?: boolean;
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
}
export interface ITreeMapProps extends ITreeMapOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onBindingComplete?: (e?: any) => void;
    onMouseenterSector?: (e?: any) => void;
    onMouseleaveSector?: (e?: any) => void;
}
