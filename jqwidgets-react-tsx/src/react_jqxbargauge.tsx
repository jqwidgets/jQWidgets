
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxBarGauge extends React.PureComponent<IBarGaugeProps, IState> {
    protected static getDerivedStateFromProps(props: IBarGaugeProps, state: IState): null | IState {
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

    constructor(props: IBarGaugeProps) {
        super(props);

        this._id = 'JqxBarGauge' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IBarGaugeProps;
        this._jqx(this._componentSelector).jqxBarGauge(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IBarGaugeProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IBarGaugeProps): void {
        this._jqx(this._componentSelector).jqxBarGauge(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxBarGauge(option);
    }

    public refresh(): void {
        this._jqx(this._componentSelector).jqxBarGauge('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxBarGauge('render' );
    };

    public val(value?: number[]): number[] {
        return this._jqx(this._componentSelector).jqxBarGauge('val' , value);
    };

    private _manageProps(): IBarGaugeProps {
        const widgetProps: string[] = ['animationDuration','backgroundColor','barSpacing','baseValue','colorScheme','customColorScheme','disabled','endAngle','formatFunction','height','labels','max','min','relativeInnerRadius','rendered','startAngle','title','tooltip','useGradient','values','width'];

        const options = {} as IBarGaugeProps;

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

export default JqxBarGauge;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IBarGaugeLabelsFont {
    color?: string;
    size?: number | string;
    family?: string;
}

export interface IBarGaugeLabels {
    connectorColor?: string;
    connectorWidth?: number;
    font?: IBarGaugeLabelsFont;
    formatFunction?: (value?: number, index?: number) => string;
    indent?: number;
    precision?: number;
    visible?: boolean;
}

export interface IBarGaugeTextFont {
    color?: string;
    family?: string;
    opacity?: number;
    size?: number | string;
    weight?: number;
}

export interface IBarGaugeTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}

export interface IBarGaugeTitleSubtitle {
    text?: string;
    font?: IBarGaugeTextFont;
}

export interface IBarGaugeTitle {
    text?: string;
    font?: IBarGaugeTextFont;
    horizontalAlignment?: 'left' | 'center' | 'right';
    margin?: IBarGaugeTitleMargin;
    subtitle?: IBarGaugeTitleSubtitle;
    verticalAlignment?: 'top' | 'bottom';
}

export interface IBarGaugeTooltip {
    classname?: string;
    formatFunction?: (value?: number | string, index?: number, color?: string) => string;
    visible?: boolean;
    precision?: number;
}

export interface IBarGaugeCustomColorScheme {
    name?: string;
    colors?: string[];
}

interface IBarGaugeOptions {
    animationDuration?: number;
    backgroundColor?: string;
    barSpacing?: number;
    baseValue?: number;
    colorScheme?: string;
    customColorScheme?: IBarGaugeCustomColorScheme;
    disabled?: boolean;
    endAngle?: number;
    formatFunction?: (value?: number | string, index?: number, color?: string) => string;
    height?: string | number;
    labels?: IBarGaugeLabels;
    max?: number | string;
    min?: number;
    relativeInnerRadius?: number | string;
    rendered?: () => void;
    startAngle?: number;
    title?: IBarGaugeTitle;
    tooltip?: IBarGaugeTooltip;
    useGradient?: boolean;
    values?: number[];
    width?: string | number;
}

export interface IBarGaugeProps extends IBarGaugeOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onDrawEnd?: (e?: Event) => void;
    onDrawStart?: (e?: Event) => void;
    onInitialized?: (e?: Event) => void;
    onTooltipClose?: (e?: Event) => void;
    onTooltipOpen?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
