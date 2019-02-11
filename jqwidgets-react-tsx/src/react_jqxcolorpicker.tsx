
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxColorPicker extends React.PureComponent<IColorPickerProps, IState> {
    protected static getDerivedStateFromProps(props: IColorPickerProps, state: IState): null | IState {
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

    constructor(props: IColorPickerProps) {
        super(props);

        this._id = 'JqxColorPicker' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IColorPickerProps;
        this._jqx(this._componentSelector).jqxColorPicker(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IColorPickerProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IColorPickerProps): void {
        this._jqx(this._componentSelector).jqxColorPicker(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxColorPicker(option);
    }

    public getColor(): any {
        return this._jqx(this._componentSelector).jqxColorPicker('getColor' );
    };

    public setColor(color: object | string): void {
        this._jqx(this._componentSelector).jqxColorPicker('setColor' , color);
    };

    private _manageProps(): IColorPickerProps {
        const widgetProps: string[] = ['color','colorMode','disabled','height','showTransparent','width'];

        const options = {} as IColorPickerProps;

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

export default JqxColorPicker;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IColorPickerOptions {
    color?: string;
    colorMode?: 'hue' | 'saturation';
    disabled?: boolean;
    height?: string | number;
    showTransparent?: boolean;
    width?: string | number;
}

export interface IColorPickerProps extends IColorPickerOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onColorchange?: (e?: Event) => void;
}
