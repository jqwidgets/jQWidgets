
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxPasswordInput extends React.PureComponent<IPasswordInputProps, IState> {
    protected static getDerivedStateFromProps(props: IPasswordInputProps, state: IState): null | IState {
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

    constructor(props: IPasswordInputProps) {
        super(props);

        this._id = 'JqxPasswordInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IPasswordInputProps;
        this._jqx(this._componentSelector).jqxPasswordInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IPasswordInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
             <input id={this._id} type="password" />
        );
    }

    public setOptions(options: IPasswordInputProps): void {
        this._jqx(this._componentSelector).jqxPasswordInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxPasswordInput(option);
    }

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxPasswordInput('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxPasswordInput('refresh' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxPasswordInput('val' , value);
    };

    private _manageProps(): IPasswordInputProps {
        const widgetProps: string[] = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];

        const options = {} as IPasswordInputProps;

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

export default JqxPasswordInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IPasswordInputLocalization {
    passwordStrengthString?: string;
    tooShort?: string;
    weak?: string;
    fair?: string;
    good?: string;
    strong?: string;
}

export interface IPasswordInputStrengthColors {
    tooShort?: string;
    weak?: string;
    fair?: string;
    good?: string;
    strong?: string;
}

export interface IPasswordInputPasswordStrength {
    password?: string | number;
    characters?: object;
    defaultStrength?: string;
}

export interface IPasswordInputStrengthTypeRenderer {
    password?: string | number;
    characters?: object;
    defaultStrength?: string;
}

interface IPasswordInputOptions {
    disabled?: boolean;
    height?: string | number;
    localization?: IPasswordInputLocalization;
    maxLength?: number | string;
    placeHolder?: number | string;
    passwordStrength?: (password:IPasswordInputPasswordStrength['password'], characters:IPasswordInputPasswordStrength['characters'], defaultStrength:IPasswordInputPasswordStrength['defaultStrength']) => string;
    rtl?: boolean;
    strengthColors?: IPasswordInputStrengthColors;
    showStrength?: boolean;
    showStrengthPosition?: 'left' | 'right' | 'top' | 'bottom';
    strengthTypeRenderer?: (password:IPasswordInputStrengthTypeRenderer['password'], characters:IPasswordInputStrengthTypeRenderer['characters'], defaultStrength:IPasswordInputStrengthTypeRenderer['defaultStrength']) => string;
    showPasswordIcon?: boolean;
    theme?: string;
    width?: string | number;
}

export interface IPasswordInputProps extends IPasswordInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
