
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxInput extends React.PureComponent<IInputProps, IState> {
    protected static getDerivedStateFromProps(props: IInputProps, state: IState): null | IState {
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

    constructor(props: IInputProps) {
        super(props);

        this._id = 'JqxInput' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IInputProps;
        this._jqx(this._componentSelector).jqxInput(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IInputProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <input id={this._id} type="text" />
        );
    }

    public setOptions(options: IInputProps): void {
        this._jqx(this._componentSelector).jqxInput(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxInput(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxInput('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxInput('focus' );
    };

    public selectAll(): void {
        this._jqx(this._componentSelector).jqxInput('selectAll' );
    };

    public val(value?: number | string): string {
        return this._jqx(this._componentSelector).jqxInput('val' , value);
    };

    private _manageProps(): IInputProps {
        const widgetProps: string[] = ['disabled','dropDownWidth','displayMember','height','items','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width','value'];

        const options = {} as IInputProps;

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

export default JqxInput;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IInputOptions {
    disabled?: boolean;
    dropDownWidth?: number | string;
    displayMember?: string;
    height?: string | number;
    items?: number;
    minLength?: number;
    maxLength?: number;
    opened?: boolean;
    placeHolder?: string;
    popupZIndex?: number;
    query?: string;
    renderer?: (itemValue?: string, inputValue?: string) => string;
    rtl?: boolean;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any;
    theme?: string;
    valueMember?: string;
    width?: string | number;
    value?: number | string;
}

export interface IInputProps extends IInputOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
}
