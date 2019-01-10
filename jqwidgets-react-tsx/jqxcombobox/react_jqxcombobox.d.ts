import * as React from 'react';
declare class JqxComboBox extends React.PureComponent<IComboBoxProps, IState> {
    protected static defaultProps: IComboBoxProps;
    protected static getDerivedStateFromProps(props: IComboBoxProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IComboBoxProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IComboBoxProps): void;
    setOptions(options: IComboBoxProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addItem(item: any): boolean;
    clearSelection(): void;
    clear(): void;
    close(): void;
    checkIndex(index: number): void;
    checkItem(item: any): void;
    checkAll(): void;
    destroy(): void;
    disableItem(item: any): void;
    disableAt(index: number): void;
    enableItem(item: any): void;
    enableAt(index: number): void;
    ensureVisible(index: number): void;
    focus(): void;
    getItem(index: number): any;
    getItemByValue(value: string): any;
    getVisibleItems(): any[];
    getItems(): any[];
    getCheckedItems(): any[];
    getSelectedItem(): any;
    getSelectedItems(): any[];
    getSelectedIndex(): number;
    insertAt(item: any, index: number): boolean;
    isOpened(): boolean;
    indeterminateIndex(index: number): void;
    indeterminateItem(item: any): void;
    loadFromSelect(selectTagId: string): void;
    open(): void;
    removeItem(item: any): boolean;
    removeAt(index: number): boolean;
    selectIndex(index: number): void;
    selectItem(item: any): void;
    searchString(): string;
    updateItem(item: any, itemValue: string): void;
    updateAt(item: any, index: any): void;
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
export default JqxComboBox;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IComboBoxRenderer {
    index?: number;
    label?: number | string;
    value?: number | string;
}
interface IComboBoxRenderSelectedItem {
    index?: number;
    item?: any;
}
interface IComboBoxSearch {
    searchString?: string;
}
interface IComboBoxValidateSelection {
    itemValue?: string;
}
interface IComboBoxOptions {
    animationType?: 'fade' | 'slide' | 'none';
    autoComplete?: boolean;
    autoOpen?: boolean;
    autoItemsHeight?: boolean;
    autoDropDownHeight?: boolean;
    closeDelay?: number;
    checkboxes?: boolean;
    disabled?: boolean;
    displayMember?: string;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'top' | 'bottom';
    dropDownHeight?: number | string;
    dropDownWidth?: number | string;
    enableHover?: boolean;
    enableSelection?: boolean;
    enableBrowserBoundsDetection?: boolean;
    height?: string | number;
    itemHeight?: number;
    multiSelect?: boolean;
    minLength?: number;
    openDelay?: number;
    popupZIndex?: number;
    placeHolder?: string;
    remoteAutoComplete?: boolean;
    remoteAutoCompleteDelay?: number;
    renderer?: (index?: IComboBoxRenderer['index'], label?: IComboBoxRenderer['label'], value?: IComboBoxRenderer['value']) => string;
    renderSelectedItem?: (index?: IComboBoxRenderSelectedItem['index'], item?: IComboBoxRenderSelectedItem['item']) => string;
    rtl?: boolean;
    selectedIndex?: number;
    showArrow?: boolean;
    showCloseButtons?: boolean;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    search?: (searchString?: IComboBoxSearch['searchString']) => void;
    source?: any[];
    scrollBarSize?: number | string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    validateSelection?: (itemValue?: IComboBoxValidateSelection['itemValue']) => boolean;
    valueMember?: string;
    width?: string | number;
}
export interface IComboBoxProps extends IComboBoxOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onBindingComplete?: (e?: Event) => void;
    onCheckChange?: (e?: Event) => void;
    onClose?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUnselect?: (e?: Event) => void;
}
