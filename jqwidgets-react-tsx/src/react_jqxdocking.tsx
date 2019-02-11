
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDocking extends React.PureComponent<IDockingProps, IState> {
    protected static getDerivedStateFromProps(props: IDockingProps, state: IState): null | IState {
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

    constructor(props: IDockingProps) {
        super(props);

        this._id = 'JqxDocking' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDockingProps;
        this._jqx(this._componentSelector).jqxDocking(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDockingProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDockingProps): void {
        this._jqx(this._componentSelector).jqxDocking(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDocking(option);
    }

    public addWindow(windowId: string, mode: any, panel: number, position: any): void {
        this._jqx(this._componentSelector).jqxDocking('addWindow' , windowId, mode, panel, position);
    };

    public closeWindow(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('closeWindow' , windowId);
    };

    public collapseWindow(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('collapseWindow' , windowId);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDocking('destroy' );
    };

    public disableWindowResize(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('disableWindowResize' , windowId);
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxDocking('disable' );
    };

    public exportLayout(): string {
        return this._jqx(this._componentSelector).jqxDocking('exportLayout' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxDocking('enable' );
    };

    public expandWindow(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('expandWindow' , windowId);
    };

    public enableWindowResize(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('enableWindowResize' , windowId);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxDocking('focus' );
    };

    public hideAllCloseButtons(): void {
        this._jqx(this._componentSelector).jqxDocking('hideAllCloseButtons' );
    };

    public hideAllCollapseButtons(): void {
        this._jqx(this._componentSelector).jqxDocking('hideAllCollapseButtons' );
    };

    public hideCollapseButton(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('hideCollapseButton' , windowId);
    };

    public hideCloseButton(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('hideCloseButton' , windowId);
    };

    public importLayout(Json: string): void {
        this._jqx(this._componentSelector).jqxDocking('importLayout' , Json);
    };

    public move(windowId: string, panel: number, position: number): void {
        this._jqx(this._componentSelector).jqxDocking('move' , windowId, panel, position);
    };

    public pinWindow(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('pinWindow' , windowId);
    };

    public setWindowMode(windowId: string, mode: any): void {
        this._jqx(this._componentSelector).jqxDocking('setWindowMode' , windowId, mode);
    };

    public showCloseButton(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('showCloseButton' , windowId);
    };

    public showCollapseButton(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('showCollapseButton' , windowId);
    };

    public setWindowPosition(windowId: string, top: any, left: number): void {
        this._jqx(this._componentSelector).jqxDocking('setWindowPosition' , windowId, top, left);
    };

    public showAllCloseButtons(): void {
        this._jqx(this._componentSelector).jqxDocking('showAllCloseButtons' );
    };

    public showAllCollapseButtons(): void {
        this._jqx(this._componentSelector).jqxDocking('showAllCollapseButtons' );
    };

    public unpinWindow(windowId: string): void {
        this._jqx(this._componentSelector).jqxDocking('unpinWindow' , windowId);
    };

    private _manageProps(): IDockingProps {
        const widgetProps: string[] = ['cookies','cookieOptions','disabled','floatingWindowOpacity','height','keyboardNavigation','mode','orientation','rtl','theme','width','windowsMode','windowsOffset'];

        const options = {} as IDockingProps;

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

export default JqxDocking;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IDockingCookieOptions {
    domain?: string;
    expires?: number;
}

export interface IDockingWindowsMode {
    windowID?: 'default' | 'docked' | 'floating';
}

interface IDockingOptions {
    cookies?: boolean;
    cookieOptions?: IDockingCookieOptions;
    disabled?: boolean;
    floatingWindowOpacity?: number;
    height?: number | string;
    keyboardNavigation?: boolean;
    mode?: 'default' | 'docked' | 'floating';
    orientation?: 'horizontal' | 'vertical';
    rtl?: boolean;
    theme?: string;
    width?: number | string;
    windowsMode?: object;
    windowsOffset?: number;
}

export interface IDockingProps extends IDockingOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
}
