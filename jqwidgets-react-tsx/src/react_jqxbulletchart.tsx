
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxBulletChart extends React.PureComponent<IBulletChartProps, IState> {
    protected static getDerivedStateFromProps(props: IBulletChartProps, state: IState): null | IState {
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

    constructor(props: IBulletChartProps) {
        super(props);

        this._id = 'JqxBulletChart' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IBulletChartProps;
        this._jqx(this._componentSelector).jqxBulletChart(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IBulletChartProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IBulletChartProps): void {
        this._jqx(this._componentSelector).jqxBulletChart(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxBulletChart(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxBulletChart('destroy' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxBulletChart('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxBulletChart('refresh' );
    };

    public val(value?: number): number {
        return this._jqx(this._componentSelector).jqxBulletChart('val' , value);
    };

    private _manageProps(): IBulletChartProps {
        const widgetProps: string[] = ['animationDuration','barSize','description','disabled','height','labelsFormat','labelsFormatFunction','orientation','pointer','rtl','ranges','showTooltip','target','ticks','title','tooltipFormatFunction','width'];

        const options = {} as IBulletChartProps;

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

export default JqxBulletChart;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IBulletChartLabelsFormatFunction {
    value?: string;
    position?: string;
}

export interface IBulletChartTooltipFormatFunction {
    pointerValue?: number;
    targetValue?: number;
}

export interface IBulletChartPointer {
    value?: number;
    label?: string;
    size?: number | string;
    color?: string;
}

export interface IBulletChartRanges {
    startValue?: number;
    endValue?: number;
    opacity?: number;
    color?: string;
}

export interface IBulletChartTicks {
    position?: 'near' | 'far' | 'both' | 'none';
    interval?: number;
    size?: number | string;
}

interface IBulletChartOptions {
    animationDuration?: number;
    barSize?: number | string;
    description?: string;
    disabled?: boolean;
    height?: string | number;
    labelsFormat?: 'null' | 'd' | 'f' | 'n' | 'c' | 'p';
    labelsFormatFunction?: (value?: IBulletChartLabelsFormatFunction['value'], position?: IBulletChartLabelsFormatFunction['position']) => any;
    orientation?: 'horizontal' | 'vertical';
    pointer?: IBulletChartPointer;
    rtl?: boolean;
    ranges?: IBulletChartRanges[];
    showTooltip?: boolean;
    target?: IBulletChartPointer;
    ticks?: IBulletChartTicks;
    title?: string;
    tooltipFormatFunction?: (pointerValue?: IBulletChartTooltipFormatFunction['pointerValue'], targetValue?: IBulletChartTooltipFormatFunction['targetValue']) => string;
    width?: string | number;
}

export interface IBulletChartProps extends IBulletChartOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
