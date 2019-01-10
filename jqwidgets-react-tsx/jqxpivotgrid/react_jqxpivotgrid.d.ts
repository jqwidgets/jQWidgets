import * as React from 'react';
declare class JqxPivotGrid extends React.PureComponent<IPivotGridProps, IState> {
    protected static defaultProps: IPivotGridProps;
    protected static getDerivedStateFromProps(props: IPivotGridProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IPivotGridProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IPivotGridProps): void;
    setOptions(options: IPivotGridProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    getInstance(): any;
    refresh(): void;
    getPivotRows(): IPivotGridRows;
    getPivotColumns(): IPivotGridColumns;
    getPivotCells(): object;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxPivotGrid;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IPivotGridItemsRenderer {
    pivotItem?: any;
}
interface IPivotGridCellsRenderer {
    pivotCell?: any;
}
interface IPivotGridColumns {
    resizable?: boolean;
    sortable?: boolean;
    showExpandCollapseButtons?: boolean;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
    isHidden?: boolean;
}
interface IPivotGridItem {
    isExpanded?: boolean;
    isHidden?: boolean;
    isSelected?: boolean;
    parentItem?: IPivotGridItem;
    hierarchy?: any;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
}
interface IPivotGridRows {
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
}
export interface IPivotGridProps extends IPivotGridOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onPivotitemexpanding?: (e?: Event) => void;
    onPivotitemexpanded?: (e?: Event) => void;
    onPivotitemcollapsing?: (e?: Event) => void;
    onPivotitemcollapsed?: (e?: Event) => void;
    onSortchanging?: (e?: Event) => void;
    onSortchanged?: (e?: Event) => void;
    onSortremoving?: (e?: Event) => void;
    onSortremoved?: (e?: Event) => void;
    onPivotitemselectionchanged?: (e?: Event) => void;
    onPivotcellmousedown?: (e?: Event) => void;
    onPivotcellmouseup?: (e?: Event) => void;
    onPivotcellclick?: (e?: Event) => void;
    onPivotcelldblclick?: (e?: Event) => void;
    onPivotitemmousedown?: (e?: Event) => void;
    onPivotitemmouseup?: (e?: Event) => void;
    onPivotitemclick?: (e?: Event) => void;
    onPivotitemdblclick?: (e?: Event) => void;
}
