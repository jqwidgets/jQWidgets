
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTimePicker extends React.PureComponent<ITimePickerProps, IState> {
    protected static getDerivedStateFromProps(props: ITimePickerProps, state: IState): null | IState {
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

    constructor(props: ITimePickerProps) {
        super(props);

        this._id = 'JqxTimePicker' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITimePickerProps;
        this._jqx(this._componentSelector).jqxTimePicker(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITimePickerProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITimePickerProps): void {
        this._jqx(this._componentSelector).jqxTimePicker(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTimePicker(option);
    }

    public setHours(hours: number): void {
        this._jqx(this._componentSelector).jqxTimePicker('setHours' , hours);
    };

    public setMinutes(minutes: number): void {
        this._jqx(this._componentSelector).jqxTimePicker('setMinutes' , minutes);
    };

    private _manageProps(): ITimePickerProps {
        const widgetProps: string[] = ['autoSwitchToMinutes','disabled','footer','footerTemplate','format','minuteInterval','name','readonly','selection','theme','unfocusable','value','view'];

        const options = {} as ITimePickerProps;

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

export default JqxTimePicker;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ITimePickerOptions {
    autoSwitchToMinutes?: boolean;
    disabled?: boolean;
    footer?: boolean;
    footerTemplate?: string;
    format?: string;
    minuteInterval?: number;
    name?: string;
    readonly?: boolean;
    selection?: 'hour' | 'minute';
    theme?: string;
    unfocusable?: boolean;
    value?: Date;
    view?: 'landscape' | 'portrait';
}

export interface ITimePickerProps extends ITimePickerOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
