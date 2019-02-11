
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxLayout extends React.PureComponent<ILayoutProps, IState> {
    protected static getDerivedStateFromProps(props: ILayoutProps, state: IState): null | IState {
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

    constructor(props: ILayoutProps) {
        super(props);

        this._id = 'JqxLayout' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ILayoutProps;
        this._jqx(this._componentSelector).jqxLayout(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ILayoutProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ILayoutProps): void {
        this._jqx(this._componentSelector).jqxLayout(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxLayout(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxLayout('destroy' );
    };

    public loadLayout(Layout: any): void {
        this._jqx(this._componentSelector).jqxLayout('loadLayout' , Layout);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxLayout('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxLayout('render' );
    };

    public saveLayout(): any {
        return this._jqx(this._componentSelector).jqxLayout('saveLayout' );
    };

    private _manageProps(): ILayoutProps {
        const widgetProps: string[] = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];

        const options = {} as ILayoutProps;

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

export default JqxLayout;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ILayout {
    type?: 'layoutGroup' | 'tabbedGroup' | 'documentGroup' | 'autoHideGroup' | 'layoutPanel' | 'documentPanel';
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
    selected?: boolean;
    title?: number | string;
    unpinnedHeight?: number | string;
    unpinnedWidth?: number | string;
    width?: number | string;
    items?: ILayout[];
}

interface ILayoutOptions {
    contextMenu?: boolean;
    height?: string | number;
    layout?: ILayout[];
    minGroupHeight?: number | string;
    minGroupWidth?: number | string;
    resizable?: boolean;
    rtl?: boolean;
    theme?: string;
    width?: string | number;
}

export interface ILayoutProps extends ILayoutOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onPin?: (e?: Event) => void;
    onResize?: (e?: Event) => void;
    onUnpin?: (e?: Event) => void;
}
