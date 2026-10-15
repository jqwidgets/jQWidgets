import * as React from 'react';
declare class JqxListBox extends React.PureComponent<IListBoxProps> {
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
    constructor(props: IListBoxProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IListBoxProps): void;
    getOptions(option: string): any;
    addItem(Item: any): boolean;
    beginUpdate(): void;
    clear(): void;
    clearSelection(): void;
    checkIndex(Index: number): void;
    checkItem(Item: any): void;
    checkAll(): void;
    clearFilter(): void;
    destroy(): void;
    disableItem(Item: any): void;
    disableAt(Index: number): void;
    enableItem(Item: any): void;
    enableAt(Index: number | string): void;
    ensureVisible(item: any): void;
    endUpdate(): void;
    focus(): void;
    getItems(): any[];
    getSelectedItems(): any[];
    getCheckedItems(): any[];
    getItem(Index: number): any;
    getItemByValue(Item: any): any;
    getSelectedItem(): any;
    getSelectedIndex(): number;
    insertAt(Item: any, Index: number | string): void;
    invalidate(): void;
    indeterminateItem(Item: any): void;
    indeterminateIndex(Index: number): void;
    loadFromSelect(selector: string): void;
    removeItem(Item: any): void;
    removeAt(Index: number | string): void;
    renderWidget(): void;
    refresh(): void;
    selectItem(Item: any): void;
    selectIndex(Index: number | string): void;
    updateItem(Item: any, Value: number | string): void;
    updateAt(item: any, index: number | string): void;
    unselectIndex(index: number | string): void;
    unselectItem(item: any): void;
    uncheckIndex(index: number | string): void;
    uncheckItem(item: any): void;
    uncheckAll(): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxListBox;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IListBoxItem {
    label?: string;
    value?: any;
    index?: number;
    visibleIndex?: number;
    disabled?: boolean;
    checked?: boolean;
    html?: string;
    group?: string;
    title?: string;
    originalItem?: any;
}
export interface IListBoxDragStart {
    item: IListBoxItem;
}
export interface IListBoxDragEnd {
    dragItem: IListBoxItem;
    dropItem?: IListBoxItem;
}
export interface IListBoxRenderer {
    index: number;
    label: string | number;
    value: string | number;
}
interface IListBoxOptions {
    autoHeight?: boolean;
    allowDrag?: boolean;
    allowDrop?: boolean;
    checkboxes?: boolean;
    disabled?: boolean;
    displayMember?: number | string;
    dropAction?: 'default' | 'copy' | 'none';
    dragStart?: (item: IListBoxDragStart['item']) => boolean;
    dragEnd?: (dragItem: IListBoxDragEnd['dragItem'], dropItem: IListBoxDragEnd['dropItem']) => boolean;
    enableHover?: boolean;
    enableSelection?: boolean;
    equalItemsWidth?: boolean;
    filterable?: boolean;
    filterHeight?: number;
    filterDelay?: number | string;
    filterPlaceHolder?: number | string;
    height?: string | number;
    hasThreeStates?: boolean;
    itemHeight?: number;
    incrementalSearch?: boolean;
    incrementalSearchDelay?: number | string;
    multiple?: boolean;
    multipleextended?: boolean;
    renderer?: (index: IListBoxRenderer['index'], label: IListBoxRenderer['label'], value: IListBoxRenderer['value']) => string;
    rendered?: () => any;
    rtl?: boolean;
    selectedIndex?: number | string;
    selectedIndexes?: any;
    source?: any[];
    scrollBarSize?: number;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    theme?: string;
    valueMember?: number | string;
    width?: string | number;
}
export interface IListBoxProps extends IListBoxOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onBindingComplete?: (e?: any) => void;
    onChange?: (e?: any) => void;
    onCheckChange?: (e?: any) => void;
    onDragStart?: (e?: any) => void;
    onDragEnd?: (e?: any) => void;
    onSelect?: (e?: any) => void;
    onUnselect?: (e?: any) => void;
}
