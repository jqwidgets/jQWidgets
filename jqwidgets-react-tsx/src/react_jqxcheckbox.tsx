
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxCheckBox extends React.PureComponent<ICheckBoxProps, IState> {
    protected static getDerivedStateFromProps(props: ICheckBoxProps, state: IState): null | IState {
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

    constructor(props: ICheckBoxProps) {
        super(props);

        this._id = 'JqxCheckBox' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ICheckBoxProps;
        this._jqx(this._componentSelector).jqxCheckBox(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ICheckBoxProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                <span>{this.props.children}</span>
            </div>
        );
    }

    public setOptions(options: ICheckBoxProps): void {
        this._jqx(this._componentSelector).jqxCheckBox(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxCheckBox(option);
    }

    public check(): void {
        this._jqx(this._componentSelector).jqxCheckBox('check' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxCheckBox('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxCheckBox('destroy' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxCheckBox('enable' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxCheckBox('focus' );
    };

    public indeterminate(): void {
        this._jqx(this._componentSelector).jqxCheckBox('indeterminate' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxCheckBox('render' );
    };

    public toggle(): void {
        this._jqx(this._componentSelector).jqxCheckBox('toggle' );
    };

    public uncheck(): void {
        this._jqx(this._componentSelector).jqxCheckBox('uncheck' );
    };

    public val(value?: boolean): boolean {
        return this._jqx(this._componentSelector).jqxCheckBox('val' , value);
    };

    private _manageProps(): ICheckBoxProps {
        const widgetProps: string[] = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];

        const options = {} as ICheckBoxProps;

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

export default JqxCheckBox;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ICheckBoxOptions {
    animationShowDelay?: number;
    animationHideDelay?: number;
    boxSize?: number | string;
    checked?: boolean | null;
    disabled?: boolean;
    enableContainerClick?: boolean;
    groupName?: string;
    height?: number | string;
    hasThreeStates?: boolean;
    locked?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: number | string;
}

export interface ICheckBoxProps extends ICheckBoxOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChecked?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onIndeterminate?: (e?: Event) => void;
    onUnchecked?: (e?: Event) => void;
}
