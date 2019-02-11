
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxButtonGroup extends React.PureComponent<IButtonGroupProps, IState> {
    protected static getDerivedStateFromProps(props: IButtonGroupProps, state: IState): null | IState {
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

    constructor(props: IButtonGroupProps) {
        super(props);

        this._id = 'JqxButtonGroup' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IButtonGroupProps;
        this._jqx(this._componentSelector).jqxButtonGroup(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IButtonGroupProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IButtonGroupProps): void {
        this._jqx(this._componentSelector).jqxButtonGroup(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxButtonGroup(option);
    }

    public disableAt(index: number): void {
        this._jqx(this._componentSelector).jqxButtonGroup('disableAt' , index);
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxButtonGroup('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxButtonGroup('destroy' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxButtonGroup('enable' );
    };

    public enableAt(index: number): void {
        this._jqx(this._componentSelector).jqxButtonGroup('enableAt' , index);
    };

    public getSelection(): any {
        return this._jqx(this._componentSelector).jqxButtonGroup('getSelection' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxButtonGroup('render' );
    };

    public setSelection(index: number): void {
        this._jqx(this._componentSelector).jqxButtonGroup('setSelection' , index);
    };

    private _manageProps(): IButtonGroupProps {
        const widgetProps: string[] = ['disabled','enableHover','mode','rtl','template','theme'];

        const options = {} as IButtonGroupProps;

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

export default JqxButtonGroup;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

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
    className?: string; 
    style?: React.CSSProperties; 
    onButtonclick?: (e?: Event) => void;
    onSelected?: (e?: Event) => void;
    onUnselected?: (e?: Event) => void;
}
