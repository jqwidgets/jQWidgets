
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxKnob extends React.PureComponent<IKnobProps, IState> {
    protected static getDerivedStateFromProps(props: IKnobProps, state: IState): null | IState {
        if (!Object.is) {
            Object.is = function (x, y) {
                if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                } else {
                    return x !== x && y !== y;
                }
            };
        }

        const areEqual = Object.is(props, state.lastProps) as boolean;

        if (!areEqual) {
            const newState = { lastProps: props } as IState;
            return newState;
        }

        return null;
    }

    /* tslint:disable:variable-name */
    private _jqx = JQXLite as any;
    /* tslint:disable:variable-name */
    private _id: string;
    /* tslint:disable:variable-name */
    private _componentSelector: string;

    constructor(props: IKnobProps) {
        super(props);

        this._id = 'JqxKnob' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IKnobProps;
        this._jqx(this._componentSelector).jqxKnob(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IKnobProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IKnobProps): void {
        this._jqx(this._componentSelector).jqxKnob(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxKnob(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxKnob('destroy' );
    };

    public val(value?: number | string): number {
        return this._jqx(this._componentSelector).jqxKnob('val' , value);
    };

    private _manageProps(): IKnobProps {
        const widgetProps: string[] = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','styles','step','snapToStep','value','width'];

        const options = {} as IKnobProps;

        for (const prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                 options[prop] = this.props[prop];
            }
        }

        return options;
    }

    private _wireEvents(): void {
        for (const prop in this.props) {
            if (prop.indexOf('on') === 0) {
                let originalEventName = prop.slice(2) as string;
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    }
}

export default JqxKnob;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IKnobChanging {
    oldValue?: number;
    newValue?: number;
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
    type?: 'circle' | 'line';
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
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
