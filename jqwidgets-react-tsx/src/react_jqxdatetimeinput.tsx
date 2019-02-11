
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDateTimeInput extends React.PureComponent<IDateTimeInputProps, IState> {
    protected static getDerivedStateFromProps(props: IDateTimeInputProps, state: IState): null | IState {
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

    constructor(props: IDateTimeInputProps) {
        super(props);

        this._id = 'JqxDateTimeInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDateTimeInputProps;
        this._jqx(this._componentSelector).jqxDateTimeInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDateTimeInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDateTimeInputProps): void {
        this._jqx(this._componentSelector).jqxDateTimeInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('focus' );
    };

    public getRange(): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getRange' );
    };

    public getText(): string {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getText' );
    };

    public getDate(): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getDate' );
    };

    public getMaxDate(): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getMaxDate' );
    };

    public getMinDate(): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput('getMinDate' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('open' );
    };

    public setRange(date: any, date2: any): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('setRange' , date, date2);
    };

    public setMinDate(date: any): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('setMinDate' , date);
    };

    public setMaxDate(date: any): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('setMaxDate' , date);
    };

    public setDate(date: any): void {
        this._jqx(this._componentSelector).jqxDateTimeInput('setDate' , date);
    };

    public val(value?: any, value2?: any): any {
        return this._jqx(this._componentSelector).jqxDateTimeInput('val' , value, value2);
    };

    private _manageProps(): IDateTimeInputProps {
        const widgetProps: string[] = ['animationType','allowNullDate','allowKeyboardDelete','clearString','culture','closeDelay','closeCalendarAfterSelection','dropDownHorizontalAlignment','dropDownVerticalAlignment','disabled','enableBrowserBoundsDetection','enableAbsoluteSelection','firstDayOfWeek','formatString','height','min','max','openDelay','placeHolder','popupZIndex','rtl','readonly','showFooter','selectionMode','showWeekNumbers','showTimeButton','showCalendarButton','theme','template','textAlign','todayString','value','width'];

        const options = {} as IDateTimeInputProps;

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

export default JqxDateTimeInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IDateTimeInputOptions {
    animationType?: 'fade' | 'slide' | 'none';
    allowNullDate?: boolean;
    allowKeyboardDelete?: boolean;
    clearString?: string;
    culture?: string;
    closeDelay?: number;
    closeCalendarAfterSelection?: boolean;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'top' | 'bottom';
    disabled?: boolean;
    enableBrowserBoundsDetection?: boolean;
    enableAbsoluteSelection?: boolean;
    firstDayOfWeek?: number;
    formatString?: 'd' | 'f' | 'F' | 'n' | 'c' | 'p' | 'd' | 'dd' | 'ddd' | 'dddd' | 'D' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy' | 'dddd-MMMM-yyyy';
    height?: string | number;
    min?: Date;
    max?: Date;
    openDelay?: number;
    placeHolder?: string;
    popupZIndex?: number;
    rtl?: boolean;
    readonly?: boolean;
    showFooter?: boolean;
    selectionMode?: 'none' | 'default' | 'range';
    showWeekNumbers?: boolean;
    showTimeButton?: boolean;
    showCalendarButton?: boolean;
    theme?: string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    textAlign?: 'left' | 'right' | 'center';
    todayString?: string;
    value?: Date;
    width?: string | number;
}

export interface IDateTimeInputProps extends IDateTimeInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onTextchanged?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
