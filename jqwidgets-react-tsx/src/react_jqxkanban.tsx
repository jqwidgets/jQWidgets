
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxKanban extends React.PureComponent<IKanbanProps, IState> {
    protected static getDerivedStateFromProps(props: IKanbanProps, state: IState): null | IState {
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

    constructor(props: IKanbanProps) {
        super(props);

        this._id = 'JqxKanban' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IKanbanProps;
        this._jqx(this._componentSelector).jqxKanban(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IKanbanProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IKanbanProps): void {
        this._jqx(this._componentSelector).jqxKanban(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxKanban(option);
    }

    public addItem(newItem: any): void {
        this._jqx(this._componentSelector).jqxKanban('addItem' , newItem);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxKanban('destroy' );
    };

    public getColumn(dataField: string): IKanbanColumns {
        return this._jqx(this._componentSelector).jqxKanban('getColumn' , dataField);
    };

    public getColumnItems(dataField: string): IKanbanSource[] {
        return this._jqx(this._componentSelector).jqxKanban('getColumnItems' , dataField);
    };

    public getItems(): IKanbanSource {
        return this._jqx(this._componentSelector).jqxKanban('getItems' );
    };

    public removeItem(itemId: string): void {
        this._jqx(this._componentSelector).jqxKanban('removeItem' , itemId);
    };

    public updateItem(itemId: string, newContent: IKanbanUpdateItem): void {
        this._jqx(this._componentSelector).jqxKanban('updateItem' , itemId, newContent);
    };

    private _manageProps(): IKanbanProps {
        const widgetProps: string[] = ['columnRenderer','columns','connectWith','headerHeight','headerWidth','height','itemRenderer','ready','rtl','source','resources','template','templateContent','theme','width'];

        const options = {} as IKanbanProps;

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

export default JqxKanban;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IKanbanColumns {
    text?: string;
    dataField?: string;
    maxItems?: number;
    collapsible?: boolean;
    collapseDirection?: 'left' | 'right';
    headerElement?: any;
    collapsedHeaderElement?: any;
    iconClassName?: string;
}

export interface IKanbanColumnRenderer {
    element?: any;
    collapsedElement?: any;
    column?: any;
}

export interface IKanbanItemRenderer {
    element?: any;
    item?: any;
    resource?: any;
}

export interface IKanbanSource {
    id?: number;
    status?: string;
    text?: string;
    content?: any;
    tags?: string;
    color?: string;
    resourceId?: any;
    className?: string;
}

export interface IKanbanUpdateItem {
    status?: string;
    text?: string;
    content?: any;
    tags?: string;
    color?: string;
    resourceId?: any;
    className?: string;
}

interface IKanbanOptions {
    columnRenderer?: (element?: IKanbanColumnRenderer['element'], collapsedElement?: IKanbanColumnRenderer['collapsedElement'], column?: IKanbanColumnRenderer['column']) => void;
    columns?: IKanbanColumns[];
    connectWith?: string;
    headerHeight?: number | string;
    headerWidth?: number;
    height?: string | number;
    itemRenderer?: (element?: IKanbanItemRenderer['element'], item?: IKanbanItemRenderer['item'], resource?: IKanbanItemRenderer['resource']) => void;
    ready?: () => void;
    rtl?: boolean;
    source?: any;
    resources?: any;
    template?: string;
    templateContent?: any;
    theme?: string;
    width?: string | number;
}

export interface IKanbanProps extends IKanbanOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onColumnAttrClicked?: (e?: Event) => void;
    onColumnCollapsed?: (e?: Event) => void;
    onColumnExpanded?: (e?: Event) => void;
    onItemAttrClicked?: (e?: Event) => void;
    onItemMoved?: (e?: Event) => void;
}
