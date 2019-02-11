
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxNotification extends React.PureComponent<INotificationProps, IState> {
    protected static getDerivedStateFromProps(props: INotificationProps, state: IState): null | IState {
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

    constructor(props: INotificationProps) {
        super(props);

        this._id = 'JqxNotification' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as INotificationProps;
        this._jqx(this._componentSelector).jqxNotification(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as INotificationProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: INotificationProps): void {
        this._jqx(this._componentSelector).jqxNotification(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxNotification(option);
    }

    public closeAll(): void {
        this._jqx(this._componentSelector).jqxNotification('closeAll' );
    };

    public closeLast(): void {
        this._jqx(this._componentSelector).jqxNotification('closeLast' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxNotification('destroy' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxNotification('open' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxNotification('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxNotification('render' );
    };

    private _manageProps(): INotificationProps {
        const widgetProps: string[] = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];

        const options = {} as INotificationProps;

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

export default JqxNotification;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface INotificationIcon {
    width?: number | string;
    height?: number | string;
    url?: string;
    padding?: number | string;
}

interface INotificationOptions {
    appendContainer?: string;
    autoOpen?: boolean;
    animationOpenDelay?: number;
    animationCloseDelay?: number;
    autoClose?: boolean;
    autoCloseDelay?: number | string;
    blink?: boolean;
    browserBoundsOffset?: number;
    closeOnClick?: boolean;
    disabled?: boolean;
    height?: number | string;
    hoverOpacity?: number;
    icon?: INotificationIcon;
    notificationOffset?: number;
    opacity?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    rtl?: boolean;
    showCloseButton?: boolean;
    template?: 'info' | 'warning' | 'success' | 'error' | 'mail' | 'time' | 'null';
    theme?: string;
    width?: string | number;
}

export interface INotificationProps extends INotificationOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onClick?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
