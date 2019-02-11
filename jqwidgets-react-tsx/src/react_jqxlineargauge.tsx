
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxLinearGauge extends React.PureComponent<ILinearGaugeProps, IState> {
    protected static getDerivedStateFromProps(props: ILinearGaugeProps, state: IState): null | IState {
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

    constructor(props: ILinearGaugeProps) {
        super(props);

        this._id = 'JqxLinearGauge' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ILinearGaugeProps;
        this._jqx(this._componentSelector).jqxLinearGauge(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ILinearGaugeProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ILinearGaugeProps): void {
        this._jqx(this._componentSelector).jqxLinearGauge(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxLinearGauge(option);
    }

    public disable(): void {
        this._jqx(this._componentSelector).jqxLinearGauge('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxLinearGauge('enable' );
    };

    public val(value?: number | string): number {
        return this._jqx(this._componentSelector).jqxLinearGauge('val' , value);
    };

    private _manageProps(): ILinearGaugeProps {
        const widgetProps: string[] = ['animationDuration','background','colorScheme','disabled','easing','height','int64','labels','min','max','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','scaleStyle','scaleLength','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width'];

        const options = {} as ILinearGaugeProps;

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

export default JqxLinearGauge;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ILinearGaugeRanges {
    startValue?: number;
    endValue?: number;
    style?: any;
}

export interface ILinearGaugeBackground {
    borderType?: 'rectangle' | 'roundedRectangle';
    borderRadius?: any;
    visible?: boolean;
    style?: any;
    showGradient?: boolean;
}

export interface ILinearGaugeLabels {
    position?: 'far' | 'near' | 'both';
    style?: any;
    interval?: number;
    offset?: number;
    formatValue?: (value:any, position:string) => any;
    visible?: boolean;
}

export interface ILinearGaugePointer {
    pointerType?: 'default' | 'rectangle';
    style?: any;
    size?: number | string;
    offset?: number;
    visible?: boolean;
}

export interface ILinearGaugeTicks {
    size?: number | string;
    interval?: number;
    visible?: boolean;
    style?: any;
}

interface ILinearGaugeOptions {
    animationDuration?: number;
    background?: ILinearGaugeBackground;
    colorScheme?: string;
    disabled?: boolean;
    easing?: 'linear' | 'easeOutBack' | 'easeInQuad' | 'easeInOutCirc' | 'easeInOutSine' | 'easeOutCubic';
    height?: number | string;
    int64?: boolean;
    labels?: ILinearGaugeLabels | ILinearGaugeLabels[];
    min?: number;
    max?: number;
    orientation?: 'vertical' | 'horizontal';
    pointer?: ILinearGaugePointer;
    rangesOffset?: number;
    rangeSize?: number | string;
    ranges?: ILinearGaugeRanges[];
    showRanges?: boolean;
    scaleStyle?: any;
    scaleLength?: number | string;
    ticksOffset?: Array<number | string>;
    ticksPosition?: 'far' | 'near' | 'both';
    ticksMinor?: ILinearGaugeTicks;
    ticksMajor?: ILinearGaugeTicks;
    value?: number;
    width?: number | string;
}

export interface ILinearGaugeProps extends ILinearGaugeOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onValueChanging?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
