
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxComplexInput extends React.PureComponent<IComplexInputProps, IState> {
    protected static getDerivedStateFromProps(props: IComplexInputProps, state: IState): null | IState {
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

    constructor(props: IComplexInputProps) {
        super(props);

        this._id = 'JqxComplexInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IComplexInputProps;
        this._jqx(this._componentSelector).jqxComplexInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IComplexInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                <input type="text" />
                <div />
            </div>
        );
    }

    public setOptions(options: IComplexInputProps): void {
        this._jqx(this._componentSelector).jqxComplexInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxComplexInput(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxComplexInput('destroy' );
    };

    public getDecimalNotation(part: string, decimalNotation: string): string {
        return this._jqx(this._componentSelector).jqxComplexInput('getDecimalNotation' , part, decimalNotation);
    };

    public getReal(complexnumber?: number): number {
        return this._jqx(this._componentSelector).jqxComplexInput('getReal' , complexnumber);
    };

    public getImaginary(complexnumber?: number): number {
        return this._jqx(this._componentSelector).jqxComplexInput('getImaginary' , complexnumber);
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxComplexInput('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxComplexInput('refresh' );
    };

    public val(value?: any): string {
        return this._jqx(this._componentSelector).jqxComplexInput('val' , value);
    };

    private _manageProps(): IComplexInputProps {
        const widgetProps: string[] = ['decimalNotation','disabled','height','placeHolder','roundedCorners','rtl','spinButtons','spinButtonsStep','template','theme','value','width'];

        const options = {} as IComplexInputProps;

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

export default JqxComplexInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IComplexInputOptions {
    decimalNotation?: 'default' | 'exponential' | 'scientific' | 'engineering';
    disabled?: boolean;
    height?: string | number;
    placeHolder?: string;
    roundedCorners?: boolean;
    rtl?: boolean;
    spinButtons?: boolean;
    spinButtonsStep?: number;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: string;
    width?: string | number;
}

export interface IComplexInputProps extends IComplexInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
