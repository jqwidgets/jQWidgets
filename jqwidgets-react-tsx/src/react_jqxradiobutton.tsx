
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxRadioButton extends React.PureComponent<IRadioButtonProps, IState> {
    protected static getDerivedStateFromProps(props: IRadioButtonProps, state: IState): null | IState {
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

    constructor(props: IRadioButtonProps) {
        super(props);

        this._id = 'JqxRadioButton' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IRadioButtonProps;
        this._jqx(this._componentSelector).jqxRadioButton(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IRadioButtonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IRadioButtonProps): void {
        this._jqx(this._componentSelector).jqxRadioButton(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxRadioButton(option);
    }

    public check(): void {
        this._jqx(this._componentSelector).jqxRadioButton('check' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxRadioButton('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxRadioButton('destroy' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxRadioButton('enable' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxRadioButton('focus' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxRadioButton('render' );
    };

    public uncheck(): void {
        this._jqx(this._componentSelector).jqxRadioButton('uncheck' );
    };

    public val(value?: boolean): boolean {
        return this._jqx(this._componentSelector).jqxRadioButton('val' , value);
    };

    private _manageProps(): IRadioButtonProps {
        const widgetProps: string[] = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','hasThreeStates','height','rtl','theme','width'];

        const options = {} as IRadioButtonProps;

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

export default JqxRadioButton;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IRadioButtonOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    hasThreeStates?: boolean;
    height?: string | number;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}

export interface IRadioButtonProps extends IRadioButtonOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
