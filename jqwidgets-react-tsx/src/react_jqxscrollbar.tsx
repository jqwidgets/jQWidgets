
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxScrollBar extends React.PureComponent<IScrollBarProps, IState> {
    protected static getDerivedStateFromProps(props: IScrollBarProps, state: IState): null | IState {
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

    constructor(props: IScrollBarProps) {
        super(props);

        this._id = 'JqxScrollBar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IScrollBarProps;
        this._jqx(this._componentSelector).jqxScrollBar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IScrollBarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IScrollBarProps): void {
        this._jqx(this._componentSelector).jqxScrollBar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxScrollBar(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxScrollBar('destroy' );
    };

    public isScrolling(): boolean {
        return this._jqx(this._componentSelector).jqxScrollBar('isScrolling' );
    };

    public setPosition(index: number): void {
        this._jqx(this._componentSelector).jqxScrollBar('setPosition' , index);
    };

    private _manageProps(): IScrollBarProps {
        const widgetProps: string[] = ['disabled','height','largestep','min','max','rtl','step','showButtons','thumbMinSize','theme','vertical','value','width'];

        const options = {} as IScrollBarProps;

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

export default JqxScrollBar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IScrollBarOptions {
    disabled?: boolean;
    height?: string | number;
    largestep?: number;
    min?: number;
    max?: number;
    rtl?: boolean;
    step?: number;
    showButtons?: boolean;
    thumbMinSize?: number;
    theme?: string;
    vertical?: boolean;
    value?: number;
    width?: string | number;
}

export interface IScrollBarProps extends IScrollBarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onValueChanged?: (e?: Event) => void;
}
