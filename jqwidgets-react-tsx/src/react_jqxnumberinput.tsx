
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxNumberInput extends React.PureComponent<INumberInputProps, IState> {
    protected static getDerivedStateFromProps(props: INumberInputProps, state: IState): null | IState {
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

    constructor(props: INumberInputProps) {
        super(props);

        this._id = 'JqxNumberInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as INumberInputProps;
        this._jqx(this._componentSelector).jqxNumberInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as INumberInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: INumberInputProps): void {
        this._jqx(this._componentSelector).jqxNumberInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxNumberInput(option);
    }

    public clear(): void {
        this._jqx(this._componentSelector).jqxNumberInput('clear' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxNumberInput('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxNumberInput('focus' );
    };

    public getDecimal(): number {
        return this._jqx(this._componentSelector).jqxNumberInput('getDecimal' );
    };

    public setDecimal(index: number | string): void {
        this._jqx(this._componentSelector).jqxNumberInput('setDecimal' , index);
    };

    public val(value?: number | string): number {
        return this._jqx(this._componentSelector).jqxNumberInput('val' , value);
    };

    private _manageProps(): INumberInputProps {
        const widgetProps: string[] = ['allowNull','decimal','disabled','decimalDigits','decimalSeparator','digits','groupSeparator','groupSize','height','inputMode','min','max','negativeSymbol','placeHolder','promptChar','rtl','readOnly','spinMode','spinButtons','spinButtonsWidth','spinButtonsStep','symbol','symbolPosition','textAlign','template','theme','value','width'];

        const options = {} as INumberInputProps;

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

export default JqxNumberInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface INumberInputOptions {
    allowNull?: boolean;
    decimal?: number | string;
    disabled?: boolean;
    decimalDigits?: number | string;
    decimalSeparator?: number | string;
    digits?: number | string;
    groupSeparator?: string;
    groupSize?: number | string;
    height?: string | number;
    inputMode?: 'advanced' | 'simple';
    min?: number | string;
    max?: number | string;
    negativeSymbol?: string;
    placeHolder?: number | string;
    promptChar?: '_' | '?' | ';' | '#';
    rtl?: boolean;
    readOnly?: boolean;
    spinMode?: 'advanced' | 'simple';
    spinButtons?: boolean;
    spinButtonsWidth?: number;
    spinButtonsStep?: number | string;
    symbol?: string;
    symbolPosition?: 'left' | 'right';
    textAlign?: 'left' | 'right' | 'center';
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: number | string;
    width?: string | number;
}

export interface INumberInputProps extends INumberInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onTextchanged?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
