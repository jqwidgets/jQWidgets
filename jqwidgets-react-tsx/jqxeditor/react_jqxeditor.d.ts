import * as React from 'react';
declare class JqxEditor extends React.PureComponent<IEditorProps> {
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
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: IEditorProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IEditorProps): void;
    getOptions(option: string): any;
    destroy(): void;
    focus(): void;
    print(): void;
    setMode(mode: boolean): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxEditor;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IEditorLocalization {
    bold?: string;
    italic?: string;
    underline?: string;
    format?: string;
    size?: number | string;
    font?: string;
    html?: string;
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
export interface IEditorCreateCommand {
    name: string;
}
interface IEditorOptions {
    createCommand?: (name: IEditorCreateCommand['name']) => any;
    disabled?: boolean;
    editable?: boolean;
    fontFamily?: string;
    height?: string | number;
    keyPressed?: (event: any) => void;
    lineBreak?: 'br' | 'p' | 'div' | 'default';
    localization?: IEditorLocalization;
    pasteMode?: 'html' | 'text';
    rtl?: boolean;
    stylesheets?: any[];
    theme?: string;
    toolbarPosition?: 'top' | 'bottom';
    tools?: string;
    width?: string | number;
}
export interface IEditorProps extends IEditorOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (e?: any) => void;
}
