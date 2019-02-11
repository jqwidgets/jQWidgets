
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxResponsivePanel extends React.PureComponent<IResponsivePanelProps, IState> {
    protected static getDerivedStateFromProps(props: IResponsivePanelProps, state: IState): null | IState {
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

    constructor(props: IResponsivePanelProps) {
        super(props);

        this._id = 'JqxResponsivePanel' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IResponsivePanelProps;
        this._jqx(this._componentSelector).jqxResponsivePanel(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IResponsivePanelProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IResponsivePanelProps): void {
        this._jqx(this._componentSelector).jqxResponsivePanel(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxResponsivePanel(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxResponsivePanel('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxResponsivePanel('destroy' );
    };

    public isCollapsed(): boolean {
        return this._jqx(this._componentSelector).jqxResponsivePanel('isCollapsed' );
    };

    public isOpened(): boolean {
        return this._jqx(this._componentSelector).jqxResponsivePanel('isOpened' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxResponsivePanel('open' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxResponsivePanel('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxResponsivePanel('render' );
    };

    private _manageProps(): IResponsivePanelProps {
        const widgetProps: string[] = ['animationDirection','animationHideDelay','animationShowDelay','animationType','autoClose','collapseBreakpoint','collapseWidth','height','initContent','theme','toggleButton','toggleButtonSize','width'];

        const options = {} as IResponsivePanelProps;

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

export default JqxResponsivePanel;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IResponsivePanelOptions {
    animationDirection?: 'left' | 'right' | 'top' | 'bottom';
    animationHideDelay?: number | string;
    animationShowDelay?: number | string;
    animationType?: 'fade' | 'slide' | 'none';
    autoClose?: boolean;
    collapseBreakpoint?: number;
    collapseWidth?: number;
    height?: string | number;
    initContent?: () => void;
    theme?: string;
    toggleButton?: string | any;
    toggleButtonSize?: number | string;
    width?: string | number;
}

export interface IResponsivePanelProps extends IResponsivePanelOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onCollapse?: (e?: Event) => void;
    onExpand?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
