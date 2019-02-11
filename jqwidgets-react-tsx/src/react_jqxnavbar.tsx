
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxNavBar extends React.PureComponent<INavBarProps, IState> {
    protected static getDerivedStateFromProps(props: INavBarProps, state: IState): null | IState {
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

    constructor(props: INavBarProps) {
        super(props);

        this._id = 'JqxNavBar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as INavBarProps;
        this._jqx(this._componentSelector).jqxNavBar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as INavBarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: INavBarProps): void {
        this._jqx(this._componentSelector).jqxNavBar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxNavBar(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxNavBar('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxNavBar('destroy' );
    };

    public getSelectedIndex(): number {
        return this._jqx(this._componentSelector).jqxNavBar('getSelectedIndex' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxNavBar('open' );
    };

    public selectAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavBar('selectAt' , index);
    };

    private _manageProps(): INavBarProps {
        const widgetProps: string[] = ['columns','disabled','height','minimized','minimizeButtonPosition','minimizedHeight','minimizedTitle','orientation','popupAnimationDelay','rtl','selection','selectedItem','theme','width'];

        const options = {} as INavBarProps;

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

export default JqxNavBar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface INavBarOptions {
    columns?: string[];
    disabled?: boolean;
    height?: string | number;
    minimized?: boolean;
    minimizeButtonPosition?: 'left' | 'right';
    minimizedHeight?: number | string;
    minimizedTitle?: number | string;
    orientation?: 'vertical' | 'horizontal';
    popupAnimationDelay?: number;
    rtl?: boolean;
    selection?: boolean;
    selectedItem?: number | string;
    theme?: string;
    width?: string | number;
}

export interface INavBarProps extends INavBarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
}
