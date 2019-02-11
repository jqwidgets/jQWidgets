
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxFormattedInput extends React.PureComponent<IFormattedInputProps, IState> {
    protected static getDerivedStateFromProps(props: IFormattedInputProps, state: IState): null | IState {
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

    constructor(props: IFormattedInputProps) {
        super(props);

        this._id = 'JqxFormattedInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IFormattedInputProps;
        this._jqx(this._componentSelector).jqxFormattedInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IFormattedInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id}>
                { !this.props.rtl && <input type='text' /> }
                { this.props.spinButtons && <div /> }
                { this.props.dropDown && <div /> }
                { this.props.rtl && <input type='text' /> }
            </div>
        );
    }

    public setOptions(options: IFormattedInputProps): void {
        this._jqx(this._componentSelector).jqxFormattedInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxFormattedInput(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('focus' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('open' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('refresh' );
    };

    public selectAll(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('selectAll' );
    };

    public selectFirst(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('selectFirst' );
    };

    public selectLast(): void {
        this._jqx(this._componentSelector).jqxFormattedInput('selectLast' );
    };

    public val(value?: number | string): any {
        return this._jqx(this._componentSelector).jqxFormattedInput('val' , value);
    };

    private _manageProps(): IFormattedInputProps {
        const widgetProps: string[] = ['disabled','decimalNotation','dropDown','dropDownWidth','height','min','max','placeHolder','popupZIndex','roundedCorners','rtl','radix','spinButtons','spinButtonsStep','template','theme','upperCase','value','width'];

        const options = {} as IFormattedInputProps;

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

export default JqxFormattedInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IFormattedInputOptions {
    disabled?: boolean;
    decimalNotation?: 'default' | 'exponential';
    dropDown?: boolean;
    dropDownWidth?: number | string;
    height?: number | string;
    min?: number | string;
    max?: number | string;
    placeHolder?: string;
    popupZIndex?: number;
    roundedCorners?: boolean;
    rtl?: boolean;
    radix?: number | string;
    spinButtons?: boolean;
    spinButtonsStep?: number;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    upperCase?: boolean;
    value?: number | string;
    width?: number | string;
}

export interface IFormattedInputProps extends IFormattedInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onRadixChange?: (e?: Event) => void;
}
