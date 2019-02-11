
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxListBox extends React.PureComponent<IListBoxProps, IState> {
    protected static getDerivedStateFromProps(props: IListBoxProps, state: IState): null | IState {
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

    constructor(props: IListBoxProps) {
        super(props);

        this._id = 'JqxListBox' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IListBoxProps;
        this._jqx(this._componentSelector).jqxListBox(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IListBoxProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IListBoxProps): void {
        this._jqx(this._componentSelector).jqxListBox(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxListBox(option);
    }

    public addItem(Item: any): boolean {
        return this._jqx(this._componentSelector).jqxListBox('addItem' , Item);
    };

    public beginUpdate(): void {
        this._jqx(this._componentSelector).jqxListBox('beginUpdate' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxListBox('clear' );
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxListBox('clearSelection' );
    };

    public checkIndex(Index: number): void {
        this._jqx(this._componentSelector).jqxListBox('checkIndex' , Index);
    };

    public checkItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('checkItem' , Item);
    };

    public checkAll(): void {
        this._jqx(this._componentSelector).jqxListBox('checkAll' );
    };

    public clearFilter(): void {
        this._jqx(this._componentSelector).jqxListBox('clearFilter' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxListBox('destroy' );
    };

    public disableItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('disableItem' , Item);
    };

    public disableAt(Index: number): void {
        this._jqx(this._componentSelector).jqxListBox('disableAt' , Index);
    };

    public enableItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('enableItem' , Item);
    };

    public enableAt(Index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('enableAt' , Index);
    };

    public ensureVisible(item: any): void {
        this._jqx(this._componentSelector).jqxListBox('ensureVisible' , item);
    };

    public endUpdate(): void {
        this._jqx(this._componentSelector).jqxListBox('endUpdate' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxListBox('focus' );
    };

    public getItems(): any[] {
        return this._jqx(this._componentSelector).jqxListBox('getItems' );
    };

    public getSelectedItems(): any[] {
        return this._jqx(this._componentSelector).jqxListBox('getSelectedItems' );
    };

    public getCheckedItems(): any[] {
        return this._jqx(this._componentSelector).jqxListBox('getCheckedItems' );
    };

    public getItem(Index: number): any {
        return this._jqx(this._componentSelector).jqxListBox('getItem' , Index);
    };

    public getItemByValue(Item: any): any {
        return this._jqx(this._componentSelector).jqxListBox('getItemByValue' , Item);
    };

    public getSelectedItem(): any {
        return this._jqx(this._componentSelector).jqxListBox('getSelectedItem' );
    };

    public getSelectedIndex(): number {
        return this._jqx(this._componentSelector).jqxListBox('getSelectedIndex' );
    };

    public insertAt(Item: any, Index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('insertAt' , Item, Index);
    };

    public invalidate(): void {
        this._jqx(this._componentSelector).jqxListBox('invalidate' );
    };

    public indeterminateItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('indeterminateItem' , Item);
    };

    public indeterminateIndex(Index: number): void {
        this._jqx(this._componentSelector).jqxListBox('indeterminateIndex' , Index);
    };

    public loadFromSelect(selector: string): void {
        this._jqx(this._componentSelector).jqxListBox('loadFromSelect' , selector);
    };

    public removeItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('removeItem' , Item);
    };

    public removeAt(Index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('removeAt' , Index);
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxListBox('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxListBox('refresh' );
    };

    public selectItem(Item: any): void {
        this._jqx(this._componentSelector).jqxListBox('selectItem' , Item);
    };

    public selectIndex(Index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('selectIndex' , Index);
    };

    public updateItem(Item: any, Value: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('updateItem' , Item, Value);
    };

    public updateAt(item: any, index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('updateAt' , item, index);
    };

    public unselectIndex(index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('unselectIndex' , index);
    };

    public unselectItem(item: any): void {
        this._jqx(this._componentSelector).jqxListBox('unselectItem' , item);
    };

    public uncheckIndex(index: number | string): void {
        this._jqx(this._componentSelector).jqxListBox('uncheckIndex' , index);
    };

    public uncheckItem(item: any): void {
        this._jqx(this._componentSelector).jqxListBox('uncheckItem' , item);
    };

    public uncheckAll(): void {
        this._jqx(this._componentSelector).jqxListBox('uncheckAll' );
    };

    public val(value?: number | string): string {
        return this._jqx(this._componentSelector).jqxListBox('val' , value);
    };

    private _manageProps(): IListBoxProps {
        const widgetProps: string[] = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rendered','rtl','selectedIndex','selectedIndexes','source','scrollBarSize','searchMode','theme','valueMember','width'];

        const options = {} as IListBoxProps;

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

export default JqxListBox;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IListBoxDragStart {
    item?: object;
}

export interface IListBoxDragEnd {
    dragItem?: object;
    dropItem?: object;
}

export interface IListBoxRenderer {
    index?: number;
    label?: string | number;
    value?: string | number;
}

interface IListBoxOptions {
    autoHeight?: boolean;
    allowDrag?: boolean;
    allowDrop?: boolean;
    checkboxes?: boolean;
    disabled?: boolean;
    displayMember?: number | string;
    dropAction?: 'default' | 'copy' | 'none';
    dragStart?: (item:IListBoxDragStart['item']) => boolean;
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

export interface IListBoxProps extends IListBoxOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBindingComplete?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onCheckChange?: (e?: Event) => void;
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUnselect?: (e?: Event) => void;
}
