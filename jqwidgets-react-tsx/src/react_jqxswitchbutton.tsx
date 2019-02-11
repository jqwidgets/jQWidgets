
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxSwitchButton extends React.PureComponent<ISwitchButtonProps, IState> {
    protected static getDerivedStateFromProps(props: ISwitchButtonProps, state: IState): null | IState {
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

    constructor(props: ISwitchButtonProps) {
        super(props);

        this._id = 'JqxSwitchButton' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ISwitchButtonProps;
        this._jqx(this._componentSelector).jqxSwitchButton(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ISwitchButtonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ISwitchButtonProps): void {
        this._jqx(this._componentSelector).jqxSwitchButton(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxSwitchButton(option);
    }

    public check(): void {
        this._jqx(this._componentSelector).jqxSwitchButton('check' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxSwitchButton('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxSwitchButton('enable' );
    };

    public toggle(): void {
        this._jqx(this._componentSelector).jqxSwitchButton('toggle' );
    };

    public uncheck(): void {
        this._jqx(this._componentSelector).jqxSwitchButton('uncheck' );
    };

    public val(value?: boolean): boolean {
        return this._jqx(this._componentSelector).jqxSwitchButton('val' , value);
    };

    private _manageProps(): ISwitchButtonProps {
        const widgetProps: string[] = ['checked','disabled','height','orientation','onLabel','offLabel','thumbSize','rtl','width'];

        const options = {} as ISwitchButtonProps;

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

export default JqxSwitchButton;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ISwitchButtonOptions {
    checked?: boolean;
    disabled?: boolean;
    height?: string | number;
    orientation?: 'horizontal' | 'vertical';
    onLabel?: string;
    offLabel?: string;
    thumbSize?: string;
    rtl?: boolean;
    width?: string | number;
}

export interface ISwitchButtonProps extends ISwitchButtonOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
