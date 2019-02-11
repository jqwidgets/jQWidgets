
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxLinkButton extends React.PureComponent<ILinkButtonProps, IState> {
    protected static getDerivedStateFromProps(props: ILinkButtonProps, state: IState): null | IState {
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

    constructor(props: ILinkButtonProps) {
        super(props);

        this._id = 'JqxLinkButton' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ILinkButtonProps;
        this._jqx(this._componentSelector).jqxLinkButton(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ILinkButtonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <a id={this._id}> target={ this.props.target } href={ this.props.href }>
                {this.props.children}
            </a>
        );
    }

    public setOptions(options: ILinkButtonProps): void {
        this._jqx(this._componentSelector).jqxLinkButton(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxLinkButton(option);
    }

    private _manageProps(): ILinkButtonProps {
        const widgetProps: string[] = ['disabled','height','rtl','theme','width'];

        const options = {} as ILinkButtonProps;

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

export default JqxLinkButton;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ILinkButtonOptions {
    disabled?: boolean;
    height?: string | number;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}

export interface ILinkButtonProps extends ILinkButtonOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
