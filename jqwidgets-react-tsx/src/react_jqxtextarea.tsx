
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTextArea extends React.PureComponent<ITextAreaProps, IState> {
    protected static getDerivedStateFromProps(props: ITextAreaProps, state: IState): null | IState {
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

    constructor(props: ITextAreaProps) {
        super(props);

        this._id = 'JqxTextArea' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITextAreaProps;
        this._jqx(this._componentSelector).jqxTextArea(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITextAreaProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <textarea id={this._id}>{this.props.children}</textarea>
        );
    }

    public setOptions(options: ITextAreaProps): void {
        this._jqx(this._componentSelector).jqxTextArea(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTextArea(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTextArea('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxTextArea('focus' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxTextArea('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxTextArea('render' );
    };

    public selectAll(): void {
        this._jqx(this._componentSelector).jqxTextArea('selectAll' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxTextArea('val' , value);
    };

    private _manageProps(): ITextAreaProps {
        const widgetProps: string[] = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];

        const options = {} as ITextAreaProps;

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

export default JqxTextArea;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ITextAreaOptions {
    disabled?: boolean;
    displayMember?: string;
    dropDownWidth?: number | string;
    height?: string | number;
    items?: number;
    maxLength?: number;
    minLength?: number;
    opened?: boolean;
    placeHolder?: string;
    popupZIndex?: number;
    query?: string;
    renderer?: (itemValue: any, inputValue: any) => any;
    roundedCorners?: boolean;
    rtl?: boolean;
    scrollBarSize?: number;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
}

export interface ITextAreaProps extends ITextAreaOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
}
