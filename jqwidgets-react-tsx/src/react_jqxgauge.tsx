
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxGauge extends React.PureComponent<IGaugeProps, IState> {
    protected static getDerivedStateFromProps(props: IGaugeProps, state: IState): null | IState {
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

    constructor(props: IGaugeProps) {
        super(props);

        this._id = 'JqxGauge' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IGaugeProps;
        this._jqx(this._componentSelector).jqxGauge(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IGaugeProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IGaugeProps): void {
        this._jqx(this._componentSelector).jqxGauge(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxGauge(option);
    }

    public disable(): void {
        this._jqx(this._componentSelector).jqxGauge('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxGauge('enable' );
    };

    public val(value?: number): number {
        return this._jqx(this._componentSelector).jqxGauge('val' , value);
    };

    private _manageProps(): IGaugeProps {
        const widgetProps: string[] = ['animationDuration','border','caption','cap','colorScheme','disabled','easing','endAngle','height','int64','labels','min','max','pointer','radius','ranges','startAngle','showRanges','styles','ticksMajor','ticksMinor','ticksDistance','value','width'];

        const options = {} as IGaugeProps;

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

export default JqxGauge;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IGaugeStyle {
    fill?: string;
    stroke?: string;
}

export interface IGaugeBorder {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
    showGradient?: boolean;
}

export interface IGaugeCaption {
    value?: string;
    position?: 'top' | 'bottom';
    offset?: number[];
    visible?: boolean;
}

export interface IGaugeCap {
    size?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
}

export interface IGaugeLabels {
    distance?: string;
    position?: 'none' | 'inside' | 'outside';
    interval?: number | string;
    offset?: number[];
    visible?: boolean;
    formatValue?: (value?: number) => string;
}

export interface IGaugePointer {
    pointerType?: string;
    style?: IGaugeStyle;
    width?: number | string;
    length?: number | string;
    visible?: boolean;
}

export interface IGaugeRanges {
    startValue?: number | string;
    endValue?: number | string;
    startWidth?: number | string;
    endWidth?: number | string;
    startDistance?: number | string;
    endDistance?: number | string;
    style?: IGaugeStyle;
}

export interface IGaugeTicks {
    size?: number | string;
    interval?: number | string;
    visible?: boolean;
    style?: IGaugeStyle;
}

interface IGaugeOptions {
    animationDuration?: string | number;
    border?: IGaugeBorder;
    caption?: IGaugeCaption;
    cap?: IGaugeCap;
    colorScheme?: string;
    disabled?: boolean;
    easing?: 'linear' | 'easeOutBack' | 'easeInQuad' | 'easeInOutCirc' | 'easeInOutSine' | 'easeOutCubic';
    endAngle?: number | string;
    height?: number | string;
    int64?: boolean;
    labels?: IGaugeLabels;
    min?: number;
    max?: number | string;
    pointer?: IGaugePointer;
    radius?: number | string;
    ranges?: IGaugeRanges[];
    startAngle?: number | string;
    showRanges?: boolean;
    styles?: IGaugeStyle;
    ticksMajor?: IGaugeTicks;
    ticksMinor?: IGaugeTicks;
    ticksDistance?: string;
    value?: number;
    width?: number | string;
}

export interface IGaugeProps extends IGaugeOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onValueChanging?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
