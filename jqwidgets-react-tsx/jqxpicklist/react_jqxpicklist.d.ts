import * as React from 'react';
declare class JqxPickList extends React.PureComponent<IPickListProps> {
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
    constructor(props: IPickListProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IPickListProps): void;
    getOptions(option: string): any;
    getSelectedItems(): any[];
    getSelectedValues(): any[];
    getSource(): any[];
    add(values: any): void;
    remove(values: any): void;
    addAll(): void;
    removeAll(): void;
    moveUp(): void;
    moveDown(): void;
    val(value?: any): any;
    focus(): void;
    refresh(): void;
    renderWidget(): void;
    destroy(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxPickList;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IPickListChange {
    added?: any[];
    removed?: any[];
    selectedItems?: any[];
}
export interface IPickListItems {
    items?: any[];
}
export interface IPickListRenderer {
    item: any;
    label: string;
    value: string;
    index: number;
}
interface IPickListOptions {
    width?: string | number;
    height?: string | number;
    source?: any;
    selectedItems?: any[];
    displayMember?: string;
    valueMember?: string;
    sourceHeader?: string;
    targetHeader?: string;
    showCounts?: boolean;
    filterable?: boolean;
    filterPlaceHolder?: string;
    searchMode?: string;
    checkboxes?: boolean;
    reorderable?: boolean;
    renderer?: (item: IPickListRenderer['item'], label: IPickListRenderer['label'], value: IPickListRenderer['value'], index: IPickListRenderer['index']) => string;
    buttons?: string[];
    itemHeight?: number;
    sourceLabel?: string;
    targetLabel?: string;
    disabled?: boolean;
    rtl?: boolean;
    theme?: string;
}
export interface IPickListProps extends IPickListOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onCreate?: (e?: any) => void;
    onChange?: (e?: any) => void;
    onItemsAdded?: (e?: any) => void;
    onItemsRemoved?: (e?: any) => void;
    onReordered?: (e?: any) => void;
}
