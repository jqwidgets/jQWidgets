
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxCalendar extends React.PureComponent<ICalendarProps, IState> {
    protected static getDerivedStateFromProps(props: ICalendarProps, state: IState): null | IState {
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

    constructor(props: ICalendarProps) {
        super(props);

        this._id = 'JqxCalendar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ICalendarProps;
        this._jqx(this._componentSelector).jqxCalendar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ICalendarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ICalendarProps): void {
        this._jqx(this._componentSelector).jqxCalendar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxCalendar(option);
    }

    public clear(): void {
        this._jqx(this._componentSelector).jqxCalendar('clear' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxCalendar('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxCalendar('focus' );
    };

    public addSpecialDate(date: any, specialDateClass: any, text: any): void {
        this._jqx(this._componentSelector).jqxCalendar('addSpecialDate' , date, specialDateClass, text);
    };

    public getMinDate(): any {
        return this._jqx(this._componentSelector).jqxCalendar('getMinDate' );
    };

    public getMaxDate(): any {
        return this._jqx(this._componentSelector).jqxCalendar('getMaxDate' );
    };

    public getDate(): any {
        return this._jqx(this._componentSelector).jqxCalendar('getDate' );
    };

    public getRange(): any {
        return this._jqx(this._componentSelector).jqxCalendar('getRange' );
    };

    public navigateForward(months: number): void {
        this._jqx(this._componentSelector).jqxCalendar('navigateForward' , months);
    };

    public navigateBackward(months: number): void {
        this._jqx(this._componentSelector).jqxCalendar('navigateBackward' , months);
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxCalendar('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxCalendar('refresh' );
    };

    public setMinDate(date: any): void {
        this._jqx(this._componentSelector).jqxCalendar('setMinDate' , date);
    };

    public setMaxDate(date: any): void {
        this._jqx(this._componentSelector).jqxCalendar('setMaxDate' , date);
    };

    public setDate(date: any): void {
        this._jqx(this._componentSelector).jqxCalendar('setDate' , date);
    };

    public setRange(date: any, date2: any): void {
        this._jqx(this._componentSelector).jqxCalendar('setRange' , date, date2);
    };

    public today(): void {
        this._jqx(this._componentSelector).jqxCalendar('today' );
    };

    public val(value?: Date | string, value2?: Date | string): Date | string {
        return this._jqx(this._componentSelector).jqxCalendar('val' , value, value2);
    };

    private _manageProps(): ICalendarProps {
        const widgetProps: string[] = ['backText','columnHeaderHeight','clearString','culture','dayNameFormat','disabled','enableWeekend','enableViews','enableOtherMonthDays','enableFastNavigation','enableHover','enableAutoNavigation','enableTooltips','forwardText','firstDayOfWeek','height','min','max','navigationDelay','rowHeaderWidth','readOnly','restrictedDates','rtl','stepMonths','showWeekNumbers','showDayNames','showOtherMonthDays','showFooter','selectionMode','specialDates','theme','titleHeight','titleFormat','todayString','value','width'];

        const options = {} as ICalendarProps;

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

export default JqxCalendar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ICalendarOptions {
    backText?: string;
    columnHeaderHeight?: number;
    clearString?: string;
    culture?: string;
    dayNameFormat?: 'default' | 'shortest' | 'firstTwoLetters' | 'firstLetter' | 'full';
    disabled?: boolean;
    enableWeekend?: boolean;
    enableViews?: boolean;
    enableOtherMonthDays?: boolean;
    enableFastNavigation?: boolean;
    enableHover?: boolean;
    enableAutoNavigation?: boolean;
    enableTooltips?: boolean;
    forwardText?: string;
    firstDayOfWeek?: number;
    height?: string | number;
    min?: any;
    max?: any;
    navigationDelay?: number;
    rowHeaderWidth?: number | string;
    readOnly?: boolean;
    restrictedDates?: Date[];
    rtl?: boolean;
    stepMonths?: number;
    showWeekNumbers?: boolean;
    showDayNames?: boolean;
    showOtherMonthDays?: boolean;
    showFooter?: boolean;
    selectionMode?: 'none' | 'default' | 'range';
    specialDates?: any[];
    theme?: string;
    titleHeight?: number;
    titleFormat?: 'd' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy';
    todayString?: string;
    value?: Date;
    width?: string | number;
}

export interface ICalendarProps extends ICalendarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBackButtonClick?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onNextButtonClick?: (e?: Event) => void;
    onViewChange?: (e?: Event) => void;
}
