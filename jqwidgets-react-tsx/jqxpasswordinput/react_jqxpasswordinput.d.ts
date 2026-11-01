import * as React from 'react';
declare class JqxPasswordInput extends React.PureComponent<IPasswordInputProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _changedInARow;
    private _warned;
    constructor(props: IPasswordInputProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPasswordInputProps): void;
    getOptions(option: string): any;
    renderWidget(): void;
    refresh(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPasswordInput;
export declare const jqx: any;
export declare const JQXLite: any;
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
    password: string;
    characters: {
        letters: number;
        numbers: number;
        specialKeys: number;
    };
    defaultStrength: string;
}
export interface IPasswordInputStrengthTypeRenderer {
    password: string;
    characters: {
        letters: number;
        numbers: number;
        specialKeys: number;
    };
    defaultStrength: string;
}
interface IPasswordInputOptions {
    disabled?: boolean;
    height?: string | number;
    hint?: boolean;
    localization?: IPasswordInputLocalization;
    maxLength?: number | string;
    minLength?: number | string;
    placeHolder?: number | string;
    passwordStrength?: (password: IPasswordInputPasswordStrength['password'], characters: IPasswordInputPasswordStrength['characters'], defaultStrength: IPasswordInputPasswordStrength['defaultStrength']) => string;
    rtl?: boolean;
    strengthColors?: IPasswordInputStrengthColors;
    showStrength?: boolean;
    showStrengthPosition?: 'left' | 'right' | 'top' | 'bottom';
    strengthTypeRenderer?: (password: IPasswordInputStrengthTypeRenderer['password'], characters: IPasswordInputStrengthTypeRenderer['characters'], defaultStrength: IPasswordInputStrengthTypeRenderer['defaultStrength']) => string;
    showPasswordIcon?: boolean;
    theme?: string;
    value?: string;
    width?: string | number;
}
export interface IPasswordInputProps extends IPasswordInputOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: any) => void;
}
