import * as React from 'react';
declare class JqxTreeMap extends React.PureComponent<ITreeMapProps, IState> {
    protected static defaultProps: ITreeMapProps;
    protected static getDerivedStateFromProps(props: ITreeMapProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ITreeMapProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ITreeMapProps): void;
    setOptions(options: ITreeMapProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    renderWidget(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxTreeMap;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ITreeMapColorRanges {
    color?: string;
    min?: number;
    max?: number;
}
interface ITreeMapLegendPosition {
    x?: number | string;
    y?: number | string;
}
interface ITreeMapLegendScaleCallback {
    v?: number;
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
    renderCallbacks?: any;
    selectionEnabled?: boolean;
    showLegend?: boolean;
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
}
export interface ITreeMapProps extends ITreeMapOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onBindingComplete?: (e?: Event) => void;
}
