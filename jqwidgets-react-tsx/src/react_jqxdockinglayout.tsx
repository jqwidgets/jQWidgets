
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDockingLayout extends React.PureComponent<IDockingLayoutProps, IState> {
    protected static getDerivedStateFromProps(props: IDockingLayoutProps, state: IState): null | IState {
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

    constructor(props: IDockingLayoutProps) {
        super(props);

        this._id = 'JqxDockingLayout' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDockingLayoutProps;
        this._jqx(this._componentSelector).jqxDockingLayout(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDockingLayoutProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDockingLayoutProps): void {
        this._jqx(this._componentSelector).jqxDockingLayout(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDockingLayout(option);
    }

    public addFloatGroup(width: number | string, height: number | string, position: IDockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void {
        this._jqx(this._componentSelector).jqxDockingLayout('addFloatGroup' , width, height, position, panelType, title, content, initContent);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDockingLayout('destroy' );
    };

    public loadLayout(layout: any): void {
        this._jqx(this._componentSelector).jqxDockingLayout('loadLayout' , layout);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxDockingLayout('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxDockingLayout('render' );
    };

    public saveLayout(): any {
        return this._jqx(this._componentSelector).jqxDockingLayout('saveLayout' );
    };

    private _manageProps(): IDockingLayoutProps {
        const widgetProps: string[] = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];

        const options = {} as IDockingLayoutProps;

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

export default JqxDockingLayout;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IDockingLayoutLayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel' | 'floatGroup';
    alignment?: 'left' | 'right' | 'top' | 'bottom';
    allowClose?: boolean;
    allowPin?: boolean;
    allowUnpin?: boolean;
    contentContainer?: string;
    height?: number | string;
    initContent?: () => void;
    minHeight?: number | string;
    minWidth?: number | string;
    orientation?: 'horizontal' | 'vertical';
    pinnedHeight?: number | string;
    pinnedWidth?: number | string;
    position?: IDockingLayoutLayoutPosition;
    selected?: boolean;
    title?: string;
    unpinnedHeight?: number | string;
    unpinnedWidth?: number | string;
    width?: number | string;
    items?: IDockingLayoutLayout[];
}

export interface IDockingLayoutLayoutPosition {
    x?: number;
    y?: number;
}

interface IDockingLayoutOptions {
    contextMenu?: boolean;
    height?: string | number;
    layout?: IDockingLayoutLayout[];
    minGroupHeight?: number | string;
    minGroupWidth?: number | string;
    resizable?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}

export interface IDockingLayoutProps extends IDockingLayoutOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onDock?: (e?: Event) => void;
    onFloatGroupClosed?: (e?: Event) => void;
    onFloat?: (e?: Event) => void;
    onPin?: (e?: Event) => void;
    onResize?: (e?: Event) => void;
    onUnpin?: (e?: Event) => void;
}
