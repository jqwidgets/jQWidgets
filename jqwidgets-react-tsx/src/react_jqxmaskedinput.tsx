
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxMaskedInput extends React.PureComponent<IMaskedInputProps, IState> {
    protected static getDerivedStateFromProps(props: IMaskedInputProps, state: IState): null | IState {
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

    constructor(props: IMaskedInputProps) {
        super(props);

        this._id = 'JqxMaskedInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IMaskedInputProps;
        this._jqx(this._componentSelector).jqxMaskedInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IMaskedInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IMaskedInputProps): void {
        this._jqx(this._componentSelector).jqxMaskedInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxMaskedInput(option);
    }

    public clear(): void {
        this._jqx(this._componentSelector).jqxMaskedInput('clear' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxMaskedInput('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxMaskedInput('focus' );
    };

    public val(value?: number | string): string {
        return this._jqx(this._componentSelector).jqxMaskedInput('val' , value);
    };

    private _manageProps(): IMaskedInputProps {
        const widgetProps: string[] = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];

        const options = {} as IMaskedInputProps;

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

export default JqxMaskedInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IMaskedInputOptions {
    disabled?: boolean;
    height?: string | number;
    mask?: string;
    promptChar?: number | string;
    readOnly?: boolean;
    rtl?: boolean;
    theme?: string;
    textAlign?: 'left' | 'right';
    value?: number | string;
    width?: string | number;
}

export interface IMaskedInputProps extends IMaskedInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
