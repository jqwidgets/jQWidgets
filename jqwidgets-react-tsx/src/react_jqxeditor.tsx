
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxEditor extends React.PureComponent<IEditorProps, IState> {
    protected static getDerivedStateFromProps(props: IEditorProps, state: IState): null | IState {
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

    constructor(props: IEditorProps) {
        super(props);

        this._id = 'JqxEditor' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IEditorProps;
        this._jqx(this._componentSelector).jqxEditor(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IEditorProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <textarea id={this._id}>{this.props.children}</textarea>
        );
    }

    public setOptions(options: IEditorProps): void {
        this._jqx(this._componentSelector).jqxEditor(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxEditor(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxEditor('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxEditor('focus' );
    };

    public print(): void {
        this._jqx(this._componentSelector).jqxEditor('print' );
    };

    public setMode(mode: boolean): void {
        this._jqx(this._componentSelector).jqxEditor('setMode' , mode);
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxEditor('val' , value);
    };

    private _manageProps(): IEditorProps {
        const widgetProps: string[] = ['createCommand','disabled','editable','height','lineBreak','localization','pasteMode','rtl','stylesheets','theme','toolbarPosition','tools','width'];

        const options = {} as IEditorProps;

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

export default JqxEditor;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IEditorLocalization {
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
    html?: string;
}

export interface IEditorCreateCommand {
    name?: string;
}

interface IEditorOptions {
    createCommand?: (name:IEditorCreateCommand['name']) => void;
    disabled?: boolean;
    editable?: boolean;
    height?: string  | number;
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

export interface IEditorProps extends IEditorOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
