
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxToolBar extends React.PureComponent<IToolBarProps, IState> {
    protected static getDerivedStateFromProps(props: IToolBarProps, state: IState): null | IState {
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

    constructor(props: IToolBarProps) {
        super(props);

        this._id = 'JqxToolBar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IToolBarProps;
        this._jqx(this._componentSelector).jqxToolBar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IToolBarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IToolBarProps): void {
        this._jqx(this._componentSelector).jqxToolBar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxToolBar(option);
    }

    public addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: string, tool?: any, menuToolIninitialization?: boolean) => void): void {
        this._jqx(this._componentSelector).jqxToolBar('addTool' , type, position, separator, menuToolIninitialization);
    };

    public disableTool(index: number, disable: boolean): void {
        this._jqx(this._componentSelector).jqxToolBar('disableTool' , index, disable);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxToolBar('destroy' );
    };

    public destroyTool(index: number): void {
        this._jqx(this._componentSelector).jqxToolBar('destroyTool' , index);
    };

    public getTools(): IToolBarToolItem[] {
        return this._jqx(this._componentSelector).jqxToolBar('getTools' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxToolBar('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxToolBar('refresh' );
    };

    private _manageProps(): IToolBarProps {
        const widgetProps: string[] = ['disabled','height','initTools','minimizeWidth','minWidth','maxWidth','rtl','tools','theme','width'];

        const options = {} as IToolBarProps;

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

export default JqxToolBar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IToolBarToolItem {
    type?: string;
    tool?: any;
    separatorAfterWidget?: boolean;
    minimizable?: boolean;
    minimized?: boolean;
    menuTool?: any;
    menuSeparator?: any;
}

interface IToolBarOptions {
    disabled?: boolean;
    height?: string | number;
    initTools?: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void;
    minimizeWidth?: number;
    minWidth?: number | string;
    maxWidth?: number | string;
    rtl?: boolean;
    tools?: string | 'button' | 'toggleButton' | 'dropdownlist' | 'combobox' | 'input' | 'custom';
    theme?: string;
    width?: string | number;
}

export interface IToolBarProps extends IToolBarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
