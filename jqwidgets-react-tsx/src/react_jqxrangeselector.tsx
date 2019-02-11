
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxRangeSelector extends React.PureComponent<IRangeSelectorProps, IState> {
    protected static getDerivedStateFromProps(props: IRangeSelectorProps, state: IState): null | IState {
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

    constructor(props: IRangeSelectorProps) {
        super(props);

        this._id = 'JqxRangeSelector' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IRangeSelectorProps;
        this._jqx(this._componentSelector).jqxRangeSelector(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IRangeSelectorProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IRangeSelectorProps): void {
        this._jqx(this._componentSelector).jqxRangeSelector(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxRangeSelector(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxRangeSelector('destroy' );
    };

    public getRange(): IRangeSelectorGetRange {
        return this._jqx(this._componentSelector).jqxRangeSelector('getRange' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxRangeSelector('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxRangeSelector('refresh' );
    };

    public setRange(from: any, to: any): void {
        this._jqx(this._componentSelector).jqxRangeSelector('setRange' , from, to);
    };

    private _manageProps(): IRangeSelectorProps {
        const widgetProps: string[] = ['disabled','groupLabelsFormatFunction','height','labelsFormat','labelsFormatFunction','labelsOnTicks','markersFormat','markersFormatFunction','majorTicksInterval','minorTicksInterval','max','min','moveOnClick','padding','range','resizable','rtl','showGroupLabels','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];

        const options = {} as IRangeSelectorProps;

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

export default JqxRangeSelector;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IRangeSelectorRange {
    from?: number | string;
    to?: number | string;
    min?: number | string;
    max?: number | string;
}

export interface IRangeSelectorGetRange {
    from?: number | string;
    to?: number | string;
}

export interface IRangeSelectorLabelsFormatFunction {
    value?: string;
}

export interface IRangeSelectorMarkersFormatFunction {
    value?: string;
    position?: string;
}

export interface IRangeSelectorGroupLabelsFormatFunction {
    value?: string;
    date?: object;
}

interface IRangeSelectorOptions {
    disabled?: boolean;
    groupLabelsFormatFunction?: (value: IRangeSelectorGroupLabelsFormatFunction['value'], date: IRangeSelectorGroupLabelsFormatFunction['date']) => string;
    height?: string | number;
    labelsFormat?: 'd' | 'f' | 'n' | 'c' | 'p' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    labelsFormatFunction?: (value: IRangeSelectorLabelsFormatFunction['value']) => string;
    labelsOnTicks?: boolean;
    markersFormat?: 'd' | 'f' | 'n' | 'c' | 'p' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    markersFormatFunction?: (value: IRangeSelectorMarkersFormatFunction['value'], position: IRangeSelectorMarkersFormatFunction['position']) => string;
    majorTicksInterval?: any;
    minorTicksInterval?: any;
    max?: any;
    min?: any;
    moveOnClick?: boolean;
    padding?: number | string;
    range?: IRangeSelectorRange;
    resizable?: boolean;
    rtl?: boolean;
    showGroupLabels?: boolean;
    showMinorTicks?: boolean;
    snapToTicks?: boolean;
    showMajorLabels?: boolean;
    showMarkers?: boolean;
    theme?: string;
    width?: string | number;
}

export interface IRangeSelectorProps extends IRangeSelectorOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
