
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTreeMap extends React.PureComponent<ITreeMapProps, IState> {
    protected static getDerivedStateFromProps(props: ITreeMapProps, state: IState): null | IState {
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

    constructor(props: ITreeMapProps) {
        super(props);

        this._id = 'JqxTreeMap' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITreeMapProps;
        this._jqx(this._componentSelector).jqxTreeMap(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITreeMapProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITreeMapProps): void {
        this._jqx(this._componentSelector).jqxTreeMap(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTreeMap(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTreeMap('destroy' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxTreeMap('render' );
    };

    private _manageProps(): ITreeMapProps {
        const widgetProps: string[] = ['baseColor','colorRanges','colorRange','colorMode','displayMember','height','hoverEnabled','headerHeight','legendLabel','legendPosition','legendScaleCallback','renderCallbacks','selectionEnabled','showLegend','source','theme','valueMember','width'];

        const options = {} as ITreeMapProps;

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

export default JqxTreeMap;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ITreeMapColorRanges {
    color?: string;
    min?: number;
    max?: number;
}

export interface ITreeMapLegendPosition {
    x?: number | string;
    y?: number | string;
}

export interface ITreeMapLegendScaleCallback {
    v?: number;
}

interface ITreeMapOptions {
    baseColor?: string;
    colorRanges?: ITreeMapColorRanges[];
    colorRange?: number;
    colorMode?: 'parent' | 'autoColors' | 'rangeColors';
    displayMember?: string;
    height?: string | number;
    hoverEnabled?: boolean;
    headerHeight?: number;
    legendLabel?: string;
    legendPosition?: ITreeMapLegendPosition;
    legendScaleCallback?: (v: ITreeMapLegendScaleCallback['v']) => string | number;
    renderCallbacks?: any;
    selectionEnabled?: boolean;
    showLegend?: boolean;
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
}

export interface ITreeMapProps extends ITreeMapOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBindingComplete?: (e?: Event) => void;
}
