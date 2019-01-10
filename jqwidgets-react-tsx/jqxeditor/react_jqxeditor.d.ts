import * as React from 'react';
declare class JqxEditor extends React.PureComponent<IEditorProps, IState> {
    protected static defaultProps: IEditorProps;
    protected static getDerivedStateFromProps(props: IEditorProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IEditorProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IEditorProps): void;
    setOptions(options: IEditorProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    destroy(): void;
    focus(): void;
    print(): void;
    setMode(mode: boolean): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxEditor;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IEditorLocalization {
    bold?: string;
    italic?: string;
    underline?: string;
    format?: string;
    size?: number | string;
    font?: string;
    color?: string;
    background?: string;
    left?: string;
    center?: string;
    right?: string;
    outdent?: string;
    indent?: string;
    ul?: string;
    ol?: string;
    image?: string;
    link?: string;
    clean?: string;
}
interface IEditorCreateCommand {
    name?: string;
}
interface IEditorOptions {
    createCommand?: (name: IEditorCreateCommand['name']) => void;
    disabled?: boolean;
    editable?: boolean;
    height?: string | number;
    lineBreak?: 'BR' | 'P' | 'DIV' | 'default';
    localization?: IEditorLocalization;
    pasteMode?: 'html' | 'text';
    rtl?: boolean;
    stylesheets?: any[];
    theme?: string;
    toolbarPosition?: 'top' | 'bottom';
    tools?: string;
    width?: string | number;
}
export interface IEditorProps extends IEditorOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e?: Event) => void;
}
