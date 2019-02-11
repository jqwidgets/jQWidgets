
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxSlider extends React.PureComponent<ISliderProps, IState> {
    protected static getDerivedStateFromProps(props: ISliderProps, state: IState): null | IState {
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

    constructor(props: ISliderProps) {
        super(props);

        this._id = 'JqxSlider' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ISliderProps;
        this._jqx(this._componentSelector).jqxSlider(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ISliderProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ISliderProps): void {
        this._jqx(this._componentSelector).jqxSlider(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxSlider(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxSlider('destroy' );
    };

    public decrementValue(): void {
        this._jqx(this._componentSelector).jqxSlider('decrementValue' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxSlider('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxSlider('enable' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxSlider('focus' );
    };

    public getValue(): number {
        return this._jqx(this._componentSelector).jqxSlider('getValue' );
    };

    public incrementValue(): void {
        this._jqx(this._componentSelector).jqxSlider('incrementValue' );
    };

    public setValue(index: number | number[]): void {
        this._jqx(this._componentSelector).jqxSlider('setValue' , index);
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxSlider('val' , value);
    };

    private _manageProps(): ISliderProps {
        const widgetProps: string[] = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','orientation','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];

        const options = {} as ISliderProps;

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

export default JqxSlider;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ISliderTickLabelFormatFunction {
    value?: number;
}

export interface ISliderTooltipFormatFunction {
    value?: number;
}

interface ISliderOptions {
    buttonsPosition?: 'both' | 'left' | 'right';
    disabled?: boolean;
    height?: string | number;
    layout?: 'normal' | 'reverse';
    mode?: 'default' | 'fixed';
    minorTicksFrequency?: number;
    minorTickSize?: number;
    max?: number;
    min?: number;
    orientation?: string;
    rangeSlider?: boolean;
    rtl?: boolean;
    step?: number;
    showTicks?: boolean;
    showMinorTicks?: boolean;
    showTickLabels?: boolean;
    showButtons?: boolean;
    showRange?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    ticksPosition?: 'top' | 'bottom' | 'both';
    ticksFrequency?: number;
    tickSize?: number;
    tickLabelFormatFunction?: (value: ISliderTickLabelFormatFunction['value']) => string;
    tooltip?: boolean;
    tooltipHideDelay?: number;
    tooltipPosition?: 'near' | 'far';
    tooltipFormatFunction?: (value: ISliderTooltipFormatFunction['value']) => any;
    value?: any;
    values?: number[];
    width?: number | string;
}

export interface ISliderProps extends ISliderOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onSlide?: (e?: Event) => void;
    onSlideStart?: (e?: Event) => void;
    onSlideEnd?: (e?: Event) => void;
}
