import * as React from 'react';
declare class JqxPivotGrid extends React.PureComponent<IPivotGridProps> {
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
    constructor(props: IPivotGridProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPivotGridProps): void;
    getOptions(option: string): any;
    getInstance(): any;
    refresh(): void;
    destroy(): void;
    getPivotRows(): IPivotGridRows;
    getPivotColumns(): IPivotGridColumns;
    getPivotCells(): object;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPivotGrid;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IPivotGridItemsRenderer {
    pivotItem: any;
}
export interface IPivotGridCellsRenderer {
    pivotCell: any;
}
export interface IPivotGridColumns {
    resizable?: boolean;
    sortable?: boolean;
    showExpandCollapseButtons?: boolean;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
    isHidden?: boolean;
}
export interface IPivotGridItem {
    isExpanded?: boolean;
    isHidden?: boolean;
    isSelected?: boolean;
    parentItem?: IPivotGridItem;
    hierarchy?: any;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
}
export interface IPivotGridRows {
    resizable?: boolean;
    sortable?: boolean;
    showExpandCollapseButtons?: boolean;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
    isHidden?: boolean;
}
interface IPivotGridOptions {
    source?: any;
    localization?: any;
    scrollBarsEnabled?: boolean;
    selectionEnabled?: boolean;
    multipleSelectionEnabled?: boolean;
    treeStyleRows?: boolean;
    autoResize?: boolean;
    itemsRenderer?: (pivotItem: IPivotGridItemsRenderer['pivotItem']) => string;
    cellsRenderer?: (pivotCell: IPivotGridCellsRenderer['pivotCell']) => string;
    theme?: string;
}
export interface IPivotGridProps extends IPivotGridOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onPivotitemexpanding?: (e?: any) => void;
    onPivotitemexpanded?: (e?: any) => void;
    onPivotitemcollapsing?: (e?: any) => void;
    onPivotitemcollapsed?: (e?: any) => void;
    onSortchanging?: (e?: any) => void;
    onSortchanged?: (e?: any) => void;
    onSortremoving?: (e?: any) => void;
    onSortremoved?: (e?: any) => void;
    onPivotitemselectionchanged?: (e?: any) => void;
    onPivotcellmousedown?: (e?: any) => void;
    onPivotcellmouseup?: (e?: any) => void;
    onPivotcellclick?: (e?: any) => void;
    onPivotcelldblclick?: (e?: any) => void;
    onPivotitemmousedown?: (e?: any) => void;
    onPivotitemmouseup?: (e?: any) => void;
    onPivotitemclick?: (e?: any) => void;
    onPivotitemdblclick?: (e?: any) => void;
}
