import * as React from 'react';
declare class JqxButtonGroup extends React.PureComponent<IButtonGroupProps, IState> {
    protected static defaultProps: IButtonGroupProps;
    protected static getDerivedStateFromProps(props: IButtonGroupProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IButtonGroupProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IButtonGroupProps): void;
    setOptions(options: IButtonGroupProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    disableAt(index: number): void;
    disable(): void;
    destroy(): void;
    enable(): void;
    enableAt(index: number): void;
    getSelection(): any;
    renderWidget(): void;
    setSelection(index: number): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxButtonGroup;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IButtonGroupOptions {
    disabled?: boolean;
    enableHover?: boolean;
    mode?: 'checkbox' | 'radio' | 'default';
    rtl?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
}
export interface IButtonGroupProps extends IButtonGroupOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onButtonclick?: (e?: Event) => void;
    onSelected?: (e?: Event) => void;
    onUnselected?: (e?: Event) => void;
}
