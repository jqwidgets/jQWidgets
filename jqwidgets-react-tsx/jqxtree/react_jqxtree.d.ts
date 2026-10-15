import * as React from 'react';
declare class JqxTree extends React.PureComponent<ITreeProps> {
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
    constructor(props: ITreeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ITreeProps): void;
    getOptions(option: string): any;
    addBefore(item: any, id: string): void;
    addAfter(item: any, id: string): void;
    addTo(item: any, id: string | null): void;
    clear(): void;
    checkAll(): void;
    checkItem(item: any, checked: boolean): void;
    collapseAll(): void;
    collapseItem(item: any): void;
    destroy(): void;
    disableCheckbox(item: any): void;
    disableItem(item: any): void;
    ensureVisible(item: object): void;
    enableCheckbox(item: any): void;
    enableItem(item: any): void;
    enableAll(): void;
    expandAll(): void;
    expandItem(item: any): void;
    focus(): void;
    getCheckedItems(): ITreeItem[];
    getUncheckedItems(): ITreeItem[];
    getItems(): ITreeItem[];
    getItem(element: any): ITreeItem;
    getSelectedItem(): ITreeItem;
    getPrevItem(item: any): ITreeItem;
    getNextItem(item: any): ITreeItem;
    hitTest(left: number, top: number): any;
    removeItem(item: any): void;
    renderWidget(): void;
    refresh(): void;
    selectItem(item: any): void;
    uncheckAll(): void;
    uncheckItem(item: any): void;
    updateItem(item: any, newItem: any): void;
    val(value?: any): any;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxTree;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ITreeDragStart {
    item: ITreeItem;
}
export interface ITreeDragEnd {
    dragItem: any;
    dropItem?: any;
    args?: any;
    dropPosition?: any;
    tree?: any;
}
export interface ITreeItem {
    label?: string;
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    element?: any;
    parentElement?: any;
    isExpanded?: boolean;
    selected?: boolean;
}
interface ITreeOptions {
    animationShowDuration?: number;
    animationHideDuration?: number;
    allowDrag?: boolean;
    allowDrop?: boolean;
    checkboxes?: boolean;
    dragStart?: (item: ITreeDragStart['item']) => boolean;
    dragEnd?: (dragItem: ITreeDragEnd['dragItem'], dropItem?: ITreeDragEnd['dropItem'], args?: ITreeDragEnd['args'], dropPosition?: ITreeDragEnd['dropPosition'], tree?: ITreeDragEnd['tree']) => boolean;
    disabled?: boolean;
    easing?: string;
    enableHover?: boolean;
    height?: number | string;
    hasThreeStates?: boolean;
    incrementalSearch?: boolean;
    keyboardNavigation?: boolean;
    rtl?: boolean;
    source?: any;
    toggleIndicatorSize?: number;
    toggleMode?: 'click' | 'dblclick';
    theme?: string;
    width?: string | number;
}
export interface ITreeProps extends ITreeOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onAdded?: (e?: any) => void;
    onCheckChange?: (e?: any) => void;
    onCollapse?: (e?: any) => void;
    onDragStart?: (e?: any) => void;
    onDragEnd?: (e?: any) => void;
    onExpand?: (e?: any) => void;
    onItemClick?: (e?: any) => void;
    onRemoved?: (e?: any) => void;
    onSelect?: (e?: any) => void;
}
