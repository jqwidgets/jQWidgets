
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxPanel extends React.PureComponent<IPanelProps, IState> {
    protected static getDerivedStateFromProps(props: IPanelProps, state: IState): null | IState {
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

    constructor(props: IPanelProps) {
        super(props);

        this._id = 'JqxPanel' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IPanelProps;
        this._jqx(this._componentSelector).jqxPanel(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IPanelProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IPanelProps): void {
        this._jqx(this._componentSelector).jqxPanel(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxPanel(option);
    }

    public append(HTMLElement: any): void {
        this._jqx(this._componentSelector).jqxPanel('append' , HTMLElement);
    };

    public clearcontent(): void {
        this._jqx(this._componentSelector).jqxPanel('clearcontent' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxPanel('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxPanel('focus' );
    };

    public getScrollHeight(): number {
        return this._jqx(this._componentSelector).jqxPanel('getScrollHeight' );
    };

    public getVScrollPosition(): number {
        return this._jqx(this._componentSelector).jqxPanel('getVScrollPosition' );
    };

    public getScrollWidth(): number {
        return this._jqx(this._componentSelector).jqxPanel('getScrollWidth' );
    };

    public getHScrollPosition(): number {
        return this._jqx(this._componentSelector).jqxPanel('getHScrollPosition' );
    };

    public prepend(HTMLElement: any): void {
        this._jqx(this._componentSelector).jqxPanel('prepend' , HTMLElement);
    };

    public remove(HTMLElement: any): void {
        this._jqx(this._componentSelector).jqxPanel('remove' , HTMLElement);
    };

    public scrollTo(left: number | string, top: number | string): void {
        this._jqx(this._componentSelector).jqxPanel('scrollTo' , left, top);
    };

    private _manageProps(): IPanelProps {
        const widgetProps: string[] = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];

        const options = {} as IPanelProps;

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

export default JqxPanel;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IPanelOptions {
    autoUpdate?: boolean;
    disabled?: boolean;
    height?: string | number;
    rtl?: boolean;
    sizeMode?: 'fixed' | 'wrap';
    scrollBarSize?: number | string;
    theme?: string;
    width?: string | number;
}

export interface IPanelProps extends IPanelOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
