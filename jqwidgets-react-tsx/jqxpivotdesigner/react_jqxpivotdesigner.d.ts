import * as React from 'react';
declare class JqxPivotDesigner extends React.PureComponent<IPivotDesignerProps, IState> {
    protected static defaultProps: IPivotDesignerProps;
    protected static getDerivedStateFromProps(props: IPivotDesignerProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IPivotDesignerProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IPivotDesignerProps): void;
    setOptions(options: IPivotDesignerProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    refresh(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxPivotDesigner;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IPivotDesignerOptions {
    type?: string;
    target?: any;
}
export interface IPivotDesignerProps extends IPivotDesignerOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
