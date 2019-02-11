
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDropDownList extends React.PureComponent<IDropDownListProps, IState> {
    protected static getDerivedStateFromProps(props: IDropDownListProps, state: IState): null | IState {
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

    constructor(props: IDropDownListProps) {
        super(props);

        this._id = 'JqxDropDownList' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDropDownListProps;
        this._jqx(this._componentSelector).jqxDropDownList(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDropDownListProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDropDownListProps): void {
        this._jqx(this._componentSelector).jqxDropDownList(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDropDownList(option);
    }

    public addItem(item: IDropDownListItem): boolean {
        return this._jqx(this._componentSelector).jqxDropDownList('addItem' , item);
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxDropDownList('clearSelection' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxDropDownList('clear' );
    };

    public close(): void {
        this._jqx(this._componentSelector).jqxDropDownList('close' );
    };

    public checkIndex(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('checkIndex' , index);
    };

    public checkItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('checkItem' , item);
    };

    public checkAll(): void {
        this._jqx(this._componentSelector).jqxDropDownList('checkAll' );
    };

    public clearFilter(): void {
        this._jqx(this._componentSelector).jqxDropDownList('clearFilter' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDropDownList('destroy' );
    };

    public disableItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('disableItem' , item);
    };

    public disableAt(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('disableAt' , index);
    };

    public enableItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('enableItem' , item);
    };

    public enableAt(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('enableAt' , index);
    };

    public ensureVisible(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('ensureVisible' , index);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxDropDownList('focus' );
    };

    public getItem(index: number): IDropDownListItem {
        return this._jqx(this._componentSelector).jqxDropDownList('getItem' , index);
    };

    public getItemByValue(itemValue: string): IDropDownListItem {
        return this._jqx(this._componentSelector).jqxDropDownList('getItemByValue' , itemValue);
    };

    public getItems(): IDropDownListItem[] {
        return this._jqx(this._componentSelector).jqxDropDownList('getItems' );
    };

    public getCheckedItems(): IDropDownListItem[] {
        return this._jqx(this._componentSelector).jqxDropDownList('getCheckedItems' );
    };

    public getSelectedItem(): IDropDownListItem {
        return this._jqx(this._componentSelector).jqxDropDownList('getSelectedItem' );
    };

    public getSelectedIndex(): number {
        return this._jqx(this._componentSelector).jqxDropDownList('getSelectedIndex' );
    };

    public insertAt(item: IDropDownListItem, index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('insertAt' , item, index);
    };

    public isOpened(): boolean {
        return this._jqx(this._componentSelector).jqxDropDownList('isOpened' );
    };

    public indeterminateIndex(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('indeterminateIndex' , index);
    };

    public indeterminateItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('indeterminateItem' , item);
    };

    public loadFromSelect(arg: string): void {
        this._jqx(this._componentSelector).jqxDropDownList('loadFromSelect' , arg);
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxDropDownList('open' );
    };

    public removeItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('removeItem' , item);
    };

    public removeAt(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('removeAt' , index);
    };

    public selectIndex(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('selectIndex' , index);
    };

    public selectItem(item: IDropDownListItem): void {
        this._jqx(this._componentSelector).jqxDropDownList('selectItem' , item);
    };

    public setContent(content: string): void {
        this._jqx(this._componentSelector).jqxDropDownList('setContent' , content);
    };

    public updateItem(newItem: IDropDownListItem, item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('updateItem' , newItem, item);
    };

    public updateAt(item: IDropDownListItem, index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('updateAt' , item, index);
    };

    public unselectIndex(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('unselectIndex' , index);
    };

    public unselectItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('unselectItem' , item);
    };

    public uncheckIndex(index: number): void {
        this._jqx(this._componentSelector).jqxDropDownList('uncheckIndex' , index);
    };

    public uncheckItem(item: any): void {
        this._jqx(this._componentSelector).jqxDropDownList('uncheckItem' , item);
    };

    public uncheckAll(): void {
        this._jqx(this._componentSelector).jqxDropDownList('uncheckAll' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxDropDownList('val' , value);
    };

    private _manageProps(): IDropDownListProps {
        const widgetProps: string[] = ['autoOpen','autoDropDownHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableSelection','enableBrowserBoundsDetection','enableHover','filterable','filterHeight','filterDelay','filterPlaceHolder','height','incrementalSearch','incrementalSearchDelay','itemHeight','openDelay','placeHolder','popupZIndex','rtl','renderer','selectionRenderer','searchMode','source','selectedIndex','theme','template','valueMember','width'];

        const options = {} as IDropDownListProps;

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

export default JqxDropDownList;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IDropDownListItem {
    label?: string;
    value?: any;
    disabled?: boolean;
    checked?: any;
    hasThreeStates?: boolean;
    html?: string;
    group?: string;
}

export interface IDropDownListRenderer {
    index?: number;
    label?: string;
    value?: string;
}

export interface IDropDownListSelectionRenderer {
    element?: object;
    index?: number;
    label?: string;
    value?: any;
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
    selectionRenderer?: (element?: IDropDownListSelectionRenderer['element'], index?: IDropDownListSelectionRenderer['index'], label?: IDropDownListSelectionRenderer['label'], value?: IDropDownListSelectionRenderer['value']) => string;
    searchMode?: 'none' | 'contains' | 'containsignorecase' | 'equals' | 'equalsignorecase' | 'startswithignorecase' | 'startswith' | 'endswithignorecase' | 'endswith';
    source?: any[];
    selectedIndex?: number;
    theme?: string;
    template?: string;
    valueMember?: string;
    width?: number | string;
}

export interface IDropDownListProps extends IDropDownListOptions {
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
