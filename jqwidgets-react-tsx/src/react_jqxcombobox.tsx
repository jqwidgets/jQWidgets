
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxComboBox extends React.PureComponent<IComboBoxProps, IState> {
    protected static getDerivedStateFromProps(props: IComboBoxProps, state: IState): null | IState {
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

    constructor(props: IComboBoxProps) {
        super(props);

        this._id = 'JqxComboBox' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IComboBoxProps;
        this._jqx(this._componentSelector).jqxComboBox(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IComboBoxProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IComboBoxProps): void {
        this._jqx(this._componentSelector).jqxComboBox(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxComboBox(option);
    }

    public addItem(item: any): boolean {
        return this._jqx(this._componentSelector).jqxComboBox('addItem' , item);
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxComboBox('clearSelection' );
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxComboBox('clear' );
    };

    public close(): void {
        this._jqx(this._componentSelector).jqxComboBox('close' );
    };

    public checkIndex(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('checkIndex' , index);
    };

    public checkItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('checkItem' , item);
    };

    public checkAll(): void {
        this._jqx(this._componentSelector).jqxComboBox('checkAll' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxComboBox('destroy' );
    };

    public disableItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('disableItem' , item);
    };

    public disableAt(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('disableAt' , index);
    };

    public enableItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('enableItem' , item);
    };

    public enableAt(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('enableAt' , index);
    };

    public ensureVisible(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('ensureVisible' , index);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxComboBox('focus' );
    };

    public getItem(index: number): any {
        return this._jqx(this._componentSelector).jqxComboBox('getItem' , index);
    };

    public getItemByValue(value: string): any {
        return this._jqx(this._componentSelector).jqxComboBox('getItemByValue' , value);
    };

    public getVisibleItems(): any[] {
        return this._jqx(this._componentSelector).jqxComboBox('getVisibleItems' );
    };

    public getItems(): any[] {
        return this._jqx(this._componentSelector).jqxComboBox('getItems' );
    };

    public getCheckedItems(): any[] {
        return this._jqx(this._componentSelector).jqxComboBox('getCheckedItems' );
    };

    public getSelectedItem(): any {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedItem' );
    };

    public getSelectedItems(): any[] {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedItems' );
    };

    public getSelectedIndex(): number {
        return this._jqx(this._componentSelector).jqxComboBox('getSelectedIndex' );
    };

    public insertAt(item: any, index: number): boolean {
        return this._jqx(this._componentSelector).jqxComboBox('insertAt' , item, index);
    };

    public isOpened(): boolean {
        return this._jqx(this._componentSelector).jqxComboBox('isOpened' );
    };

    public indeterminateIndex(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('indeterminateIndex' , index);
    };

    public indeterminateItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('indeterminateItem' , item);
    };

    public loadFromSelect(selectTagId: string): void {
        this._jqx(this._componentSelector).jqxComboBox('loadFromSelect' , selectTagId);
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxComboBox('open' );
    };

    public removeItem(item: any): boolean {
        return this._jqx(this._componentSelector).jqxComboBox('removeItem' , item);
    };

    public removeAt(index: number): boolean {
        return this._jqx(this._componentSelector).jqxComboBox('removeAt' , index);
    };

    public selectIndex(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('selectIndex' , index);
    };

    public selectItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('selectItem' , item);
    };

    public searchString(): string {
        return this._jqx(this._componentSelector).jqxComboBox('searchString' );
    };

    public updateItem(item: any, itemValue: string): void {
        this._jqx(this._componentSelector).jqxComboBox('updateItem' , item, itemValue);
    };

    public updateAt(item: any, index: any): void {
        this._jqx(this._componentSelector).jqxComboBox('updateAt' , item, index);
    };

    public unselectIndex(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('unselectIndex' , index);
    };

    public unselectItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('unselectItem' , item);
    };

    public uncheckIndex(index: number): void {
        this._jqx(this._componentSelector).jqxComboBox('uncheckIndex' , index);
    };

    public uncheckItem(item: any): void {
        this._jqx(this._componentSelector).jqxComboBox('uncheckItem' , item);
    };

    public uncheckAll(): void {
        this._jqx(this._componentSelector).jqxComboBox('uncheckAll' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxComboBox('val' , value);
    };

    private _manageProps(): IComboBoxProps {
        const widgetProps: string[] = ['animationType','autoComplete','autoOpen','autoItemsHeight','autoDropDownHeight','closeDelay','checkboxes','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableHover','enableSelection','enableBrowserBoundsDetection','height','itemHeight','multiSelect','minLength','openDelay','popupZIndex','placeHolder','remoteAutoComplete','remoteAutoCompleteDelay','renderer','renderSelectedItem','rtl','selectedIndex','showArrow','showCloseButtons','searchMode','search','source','scrollBarSize','template','theme','validateSelection','valueMember','width'];

        const options = {} as IComboBoxProps;

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

export default JqxComboBox;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IComboBoxRenderer {
    index?: number;
    label?: number | string;
    value?: number | string;
}

export interface IComboBoxRenderSelectedItem {
    index?: number;
    item?: any;
}

export interface IComboBoxSearch {
    searchString?: string;
}

export interface IComboBoxValidateSelection {
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
    source?: any;
    scrollBarSize?: number | string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    validateSelection?: (itemValue?: IComboBoxValidateSelection['itemValue']) => boolean;
    valueMember?: string;
    width?: string | number;
}

export interface IComboBoxProps extends IComboBoxOptions {
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
