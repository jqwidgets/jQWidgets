
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxHeatMap extends React.PureComponent<IHeatMapProps, IState> {
    protected static getDerivedStateFromProps(props: IHeatMapProps, state: IState): null | IState {
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

    constructor(props: IHeatMapProps) {
        super(props);

        this._id = 'JqxHeatMap' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IHeatMapProps;
        this._jqx(this._componentSelector).jqxHeatMap(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IHeatMapProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IHeatMapProps): void {
        this._jqx(this._componentSelector).jqxHeatMap(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxHeatMap(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxHeatMap('destroy' );
    };

    public setLegendPosition(position?: string): void {
        this._jqx(this._componentSelector).jqxHeatMap('setLegendPosition' , position);
    };

    public setOpposedXAxisPosition(opposedPosition: boolean): void {
        this._jqx(this._componentSelector).jqxHeatMap('setOpposedXAxisPosition' , opposedPosition);
    };

    public setOpposedYAxisPosition(opposedPosition: boolean): void {
        this._jqx(this._componentSelector).jqxHeatMap('setOpposedYAxisPosition' , opposedPosition);
    };

    public reverseXAxisPosition(isInversed: boolean): void {
        this._jqx(this._componentSelector).jqxHeatMap('reverseXAxisPosition' , isInversed);
    };

    public reverseYAxisPosition(isInversed: boolean): void {
        this._jqx(this._componentSelector).jqxHeatMap('reverseYAxisPosition' , isInversed);
    };

    public setPaletteType(type: string): void {
        this._jqx(this._componentSelector).jqxHeatMap('setPaletteType' , type);
    };

    private _manageProps(): IHeatMapProps {
        const widgetProps: string[] = ['xAxis','yAxis','paletteSettings','legendSettings','source','title','width','tooltipRender'];

        const options = {} as IHeatMapProps;

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

export default JqxHeatMap;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IHeatMapXAxis {
    labels?: any[];
    opposedPosition?: boolean;
    isInversed?: boolean;
    minimum?: Date;
    maximum?: Date;
    labelFormat?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
}

export interface IHeatMapYAxis {
    labels?: any[];
    opposedPosition?: boolean;
    isInversed?: boolean;
}

export interface IHeatMapPaletteSettings {
    palette?: any[];
    type?: 'Gradient' | 'Fixed';
    emptyPointColor?: string;
}

export interface IHeatMapPalette {
    value?: number;
    color?: string;
    label?: string;
}

export interface IHeatMapLegendSettings {
    position?: 'Top' | 'Bottom' | 'Left' | 'Right';
}

export interface IHeatMapTooltipRender {
    xLabel?: any[];
    yLabel?: any[];
    value?: string;
    content?: string;
    date?: Date;
}

interface IHeatMapOptions {
    xAxis?: IHeatMapXAxis;
    yAxis?: IHeatMapYAxis;
    paletteSettings?: IHeatMapPaletteSettings;
    legendSettings?: IHeatMapLegendSettings;
    source?: any[];
    title?: string;
    width?: number | string;
    tooltipRender?: (xLabel?: IHeatMapTooltipRender['xLabel'], yLabel?: IHeatMapTooltipRender['yLabel'], value?: IHeatMapTooltipRender['value'], date?: IHeatMapTooltipRender['date'], content?: IHeatMapTooltipRender['content']) => void;
}

export interface IHeatMapProps extends IHeatMapOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
