import * as React from 'react';
declare class JqxKanban extends React.PureComponent<IKanbanProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    constructor(props: IKanbanProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IKanbanProps): void;
    getOptions(option: string): any;
    addItem(newItem: any): void;
    destroy(): void;
    getColumn(dataField: string): IKanbanColumns;
    getColumnItems(dataField: string): IKanbanSource[];
    getItems(): IKanbanSource;
    removeItem(itemId: string | number): void;
    updateItem(itemId: string, newContent: IKanbanUpdateItem): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxKanban;
export declare const jqx: any;
export declare const JQXLite: any;
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
    element: any;
    collapsedElement: any;
    column: any;
}
export interface IKanbanItemRenderer {
    element: any;
    item: any;
    resource: any;
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
    columnRenderer?: (element: IKanbanColumnRenderer['element'], collapsedElement: IKanbanColumnRenderer['collapsedElement'], column: IKanbanColumnRenderer['column']) => void;
    columns?: IKanbanColumns[];
    connectWith?: string;
    headerHeight?: number | string;
    headerWidth?: number;
    height?: string | number;
    itemRenderer?: (element: IKanbanItemRenderer['element'], item: IKanbanItemRenderer['item'], resource: IKanbanItemRenderer['resource']) => void;
    ready?: () => void;
    rtl?: boolean;
    source?: any;
    resources?: any;
    template?: string;
    templateContent?: any;
    theme?: string;
    width?: string | number;
}
export interface IKanbanProps extends IKanbanOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onColumnAttrClicked?: (e?: any) => void;
    onColumnCollapsed?: (e?: any) => void;
    onColumnExpanded?: (e?: any) => void;
    onItemAttrClicked?: (e?: any) => void;
    onItemMoved?: (e?: any) => void;
}
