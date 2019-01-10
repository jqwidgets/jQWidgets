import * as React from 'react';
declare class JqxKnob extends React.PureComponent<IKnobProps, IState> {
    protected static defaultProps: IKnobProps;
    protected static getDerivedStateFromProps(props: IKnobProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IKnobProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IKnobProps): void;
    setOptions(options: IKnobProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    val(value?: number | string): number;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxKnob;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IKnobChanging {
    oldValue?: number;
    newValue?: number;
}
interface IKnobLabelsFormatFunction {
    formatFunction?: (label: string | number) => string | number;
}
interface IKnobMarks {
    colorProgress?: any;
    colorRemaining?: any;
    drawAboveProgressBar?: boolean;
    minorInterval?: number;
    majorInterval?: number;
    majorSize?: number | string;
    offset?: string;
    rotate?: boolean;
    size?: number | string;
    type?: 'circle' | 'line';
    thickness?: number;
    visible?: boolean;
}
interface IKnobDial {
    innerRadius?: any;
    outerRadius?: any;
    style?: any;
    startAngle?: number;
    endAngle?: number;
}
interface IKnobLabels {
    rotate?: any;
    offset?: number | string;
    visible?: boolean;
    step?: number;
    style?: any;
    formatFunction?: IKnobLabelsFormatFunction['formatFunction'];
}
interface IKnobProgressBar {
    offset?: number | string;
    style?: any;
    size?: number | string;
    background?: any;
    ranges?: any[];
}
interface IKnobPointer {
    offset?: number | string;
    type?: string;
    style?: any;
    size?: number | string;
    thickness?: number;
    visible?: boolean;
}
interface IKnobSpinner {
    innerRadius?: any;
    outerRadius?: any;
    style?: any;
    marks?: IKnobMarks;
}
interface IKnobStyle {
    fill?: any;
    stroke?: string;
    strokeWidth?: number;
}
interface IKnobOptions {
    allowValueChangeOnClick?: boolean;
    allowValueChangeOnDrag?: boolean;
    allowValueChangeOnMouseWheel?: boolean;
    changing?: (oldValue: IKnobChanging['oldValue'], newValue: IKnobChanging['newValue']) => boolean;
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
    pointer?: IKnobPointer;
    pointerGrabAction?: 'normal' | 'progressBar' | 'pointer';
    rotation?: 'clockwise' | 'counterclockwise';
    startAngle?: number;
    spinner?: IKnobSpinner;
    styles?: IKnobStyle;
    step?: number | string;
    snapToStep?: boolean;
    value?: any;
    width?: number | string;
}
export interface IKnobProps extends IKnobOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
