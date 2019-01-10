import * as React from 'react';
declare class JqxPasswordInput extends React.PureComponent<IPasswordInputProps, IState> {
    protected static defaultProps: IPasswordInputProps;
    protected static getDerivedStateFromProps(props: IPasswordInputProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IPasswordInputProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IPasswordInputProps): void;
    setOptions(options: IPasswordInputProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    renderWidget(): void;
    refresh(): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxPasswordInput;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IPasswordInputLocalization {
    passwordStrengthString?: string;
    tooShort?: string;
    weak?: string;
    fair?: string;
    good?: string;
    strong?: string;
}
interface IPasswordInputStrengthColors {
    tooShort?: string;
    weak?: string;
    fair?: string;
    good?: string;
    strong?: string;
}
interface IPasswordInputPasswordStrength {
    password?: string | number;
    characters?: object;
    defaultStrength?: string;
}
interface IPasswordInputStrengthTypeRenderer {
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
    passwordStrength?: (password: IPasswordInputPasswordStrength['password'], characters: IPasswordInputPasswordStrength['characters'], defaultStrength: IPasswordInputPasswordStrength['defaultStrength']) => string;
    rtl?: boolean;
    strengthColors?: IPasswordInputStrengthColors;
    showStrength?: boolean;
    showStrengthPosition?: 'left' | 'right' | 'top' | 'bottom';
    strengthTypeRenderer?: (password: IPasswordInputStrengthTypeRenderer['password'], characters: IPasswordInputStrengthTypeRenderer['characters'], defaultStrength: IPasswordInputStrengthTypeRenderer['defaultStrength']) => string;
    showPasswordIcon?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IPasswordInputProps extends IPasswordInputOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
