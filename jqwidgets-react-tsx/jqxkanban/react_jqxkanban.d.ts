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
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    private _changedInARow;
    private _warned;
    private _readyHandler;
    constructor(props: IKanbanProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    private _onReady;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IKanbanProps): void;
    getOptions(option: string): any;
    addItem(newItem: any): void;
    collapseColumn(dataField: string): boolean;
    destroy(): void;
    expandColumn(dataField: string): boolean;
    getColumn(dataField: string): IKanbanColumns;
    getColumnItems(dataField: string): IKanbanSource[];
    getItems(): IKanbanSource;
    getSelectedColumn(): string;
    getSelectedItem(): IKanbanSource;
    removeItem(itemId: string | number): void;
    selectItem(itemId: string | number): void;
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
    animationDelay?: number;
    columnRenderer?: (element: IKanbanColumnRenderer['element'], collapsedElement: IKanbanColumnRenderer['collapsedElement'], column: IKanbanColumnRenderer['column']) => void;
    columns?: IKanbanColumns[];
    connectWith?: string;
    headerHeight?: number | string;
    headerWidth?: number;
    handle?: string;
    height?: string | number;
    itemRenderer?: (element: IKanbanItemRenderer['element'], item: IKanbanItemRenderer['item'], resource: IKanbanItemRenderer['resource']) => void;
    ready?: () => void;
    rtl?: boolean;
    source?: any;
    resources?: any;
    template?: string;
    templateContent?: any;
    verticalTextOrientation?: string;
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
    onColumnSelected?: (e?: any) => void;
    onColumnUnselected?: (e?: any) => void;
    onItemAttrClicked?: (e?: any) => void;
    onItemCreated?: (e?: any) => void;
    onItemMoved?: (e?: any) => void;
    onItemReceived?: (e?: any) => void;
    onItemSelected?: (e?: any) => void;
}
