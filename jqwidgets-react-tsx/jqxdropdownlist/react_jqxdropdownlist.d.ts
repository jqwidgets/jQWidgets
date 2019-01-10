import * as React from 'react';
declare class JqxDropDownList extends React.PureComponent<IDropDownListProps, IState> {
    protected static defaultProps: IDropDownListProps;
    protected static getDerivedStateFromProps(props: IDropDownListProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IDropDownListProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IDropDownListProps): void;
    setOptions(options: IDropDownListProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addItem(item: IDropDownListItem): boolean;
    clearSelection(): void;
    clear(): void;
    close(): void;
    checkIndex(index: number): void;
    checkItem(item: any): void;
    checkAll(): void;
    clearFilter(): void;
    destroy(): void;
    disableItem(item: any): void;
    disableAt(index: number): void;
    enableItem(item: any): void;
    enableAt(index: number): void;
    ensureVisible(index: number): void;
    focus(): void;
    getItem(index: number): IDropDownListItem;
    getItemByValue(itemValue: string): IDropDownListItem;
    getItems(): IDropDownListItem[];
    getCheckedItems(): IDropDownListItem[];
    getSelectedItem(): IDropDownListItem;
    getSelectedIndex(): number;
    insertAt(item: IDropDownListItem, index: number): void;
    isOpened(): boolean;
    indeterminateIndex(index: number): void;
    indeterminateItem(item: any): void;
    loadFromSelect(arg: string): void;
    open(): void;
    removeItem(item: any): void;
    removeAt(index: number): void;
    selectIndex(index: number): void;
    selectItem(item: IDropDownListItem): void;
    setContent(content: string): void;
    updateItem(newItem: IDropDownListItem, item: any): void;
    updateAt(item: IDropDownListItem, index: number): void;
    unselectIndex(index: number): void;
    unselectItem(item: any): void;
    uncheckIndex(index: number): void;
    uncheckItem(item: any): void;
    uncheckAll(): void;
    val(value?: string): string;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxDropDownList;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IDropDownListItem {
    label?: string;
    value?: any;
    disabled?: boolean;
    checked?: any;
    hasThreeStates?: boolean;
    html?: string;
    group?: string;
}
interface IDropDownListRenderer {
    index?: number;
    label?: string;
    value?: string;
}
interface IDropDownListSelectionRenderer {
    element?: object;
    index?: number;
    label?: string;
}
interface IDropDownListOptions {
    autoOpen?: boolean;
    autoDropDownHeight?: boolean;
    animationType?: 'none' | 'slide' | 'fade';
    checkboxes?: boolean;
    closeDelay?: number;
    disabled?: boolean;
    displayMember?: string;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'bottom' | 'top';
    dropDownHeight?: number | string;
    dropDownWidth?: number | string;
    enableSelection?: boolean;
    enableBrowserBoundsDetection?: boolean;
    enableHover?: boolean;
    filterable?: boolean;
    filterHeight?: number;
    filterDelay?: number;
    filterPlaceHolder?: string;
    height?: number | string;
    incrementalSearch?: boolean;
    incrementalSearchDelay?: number;
    itemHeight?: number;
    openDelay?: number;
    placeHolder?: string;
    popupZIndex?: number;
    rtl?: boolean;
    renderer?: (index?: IDropDownListRenderer['index'], label?: IDropDownListRenderer['label'], value?: IDropDownListRenderer['value']) => string;
    selectionRenderer?: (element?: IDropDownListSelectionRenderer['element'], index?: IDropDownListSelectionRenderer['index'], label?: IDropDownListSelectionRenderer['label']) => string;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any[];
    selectedIndex?: number;
    theme?: string;
    template?: string;
    valueMember?: string;
    width?: number | string;
}
export interface IDropDownListProps extends IDropDownListOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onBindingComplete?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onCheckChange?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUnselect?: (e?: Event) => void;
}
