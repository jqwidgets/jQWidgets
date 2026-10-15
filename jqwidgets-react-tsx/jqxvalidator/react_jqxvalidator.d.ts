import * as React from 'react';
declare class JqxValidator extends React.PureComponent<IValidatorProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    constructor(props: IValidatorProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IValidatorProps): void;
    getOptions(option: string): any;
    hideHint(id: string): void;
    hide(): void;
    updatePosition(): void;
    validate(htmlElement?: any): void;
    validateInput(id: string): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxValidator;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IValidatorRule {
    input?: string;
    message?: string;
    action?: string;
    rule?: string | any;
    position?: string;
    hintRender?: any;
}
interface IValidatorOptions {
    arrow?: boolean;
    animation?: 'fade' | 'none';
    animationDuration?: number;
    closeOnClick?: boolean;
    focus?: boolean;
    hintType?: 'tooltip' | 'label';
    onError?: () => void;
    onSuccess?: () => void;
    position?: string;
    rules?: IValidatorRule[];
    rtl?: boolean;
    theme?: string;
}
export interface IValidatorProps extends IValidatorOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onValidationError?: (e?: any) => void;
    onValidationSuccess?: (e?: any) => void;
}
