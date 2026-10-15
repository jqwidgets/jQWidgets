import * as React from 'react';
declare class JqxKnob extends React.PureComponent<IKnobProps> {
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
    constructor(props: IKnobProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IKnobProps): void;
    getOptions(option: string): any;
    destroy(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxKnob;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IKnobChanging {
    oldValue: number;
    newValue: number;
}
export interface IKnobLabelsFormatFunction {
    formatFunction?: (label: string | number) => string | number;
}
export interface IKnobMarks {
    colorProgress?: any;
    colorRemaining?: any;
    drawAboveProgressBar?: boolean;
    minorInterval?: number;
    majorInterval?: number;
    majorSize?: number | string;
    offset?: string;
    rotate?: boolean;
    size?: number | string;
    type?: string;
    thickness?: number;
    visible?: boolean;
}
export interface IKnobDial {
    innerRadius?: any;
    outerRadius?: any;
    style?: any;
    startAngle?: number;
    endAngle?: number;
}
export interface IKnobLabels {
    rotate?: any;
    offset?: number | string;
    visible?: boolean;
    step?: number;
    style?: any;
    formatFunction?: IKnobLabelsFormatFunction['formatFunction'];
}
export interface IKnobProgressBar {
    offset?: number | string;
    style?: any;
    size?: number | string;
    background?: any;
    ranges?: any[];
}
export interface IKnobPointer {
    offset?: number | string;
    type?: string;
    style?: any;
    size?: number | string;
    thickness?: number;
    visible?: boolean;
}
export interface IKnobSpinner {
    innerRadius?: any;
    outerRadius?: any;
    style?: any;
    marks?: IKnobMarks;
}
export interface IKnobStyle {
    fill?: any;
    stroke?: string;
    strokeWidth?: number;
}
interface IKnobOptions {
    allowValueChangeOnClick?: boolean;
    allowValueChangeOnDrag?: boolean;
    allowValueChangeOnMouseWheel?: boolean;
    changing?: (oldValue: IKnobChanging['oldValue'] | IKnobChanging['oldValue'][], newValue: IKnobChanging['newValue'] | IKnobChanging['newValue'][]) => boolean;
    dragEndAngle?: number;
    dragStartAngle?: number;
    disabled?: boolean;
    dial?: IKnobDial;
    endAngle?: number;
    height?: number | string;
    labels?: IKnobLabels;
    marks?: IKnobMarks;
    min?: number;
    max?: number;
    progressBar?: IKnobProgressBar;
    pointer?: IKnobPointer | IKnobPointer[];
    pointerGrabAction?: 'normal' | 'progressBar' | 'pointer';
    rotation?: 'clockwise' | 'counterclockwise';
    startAngle?: number;
    spinner?: IKnobSpinner;
    styles?: IKnobStyle;
    step?: number | string;
    snapToStep?: boolean;
    theme?: string;
    value?: any;
    width?: number | string;
}
export interface IKnobProps extends IKnobOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
