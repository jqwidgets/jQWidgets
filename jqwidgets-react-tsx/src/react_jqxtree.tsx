
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTree extends React.PureComponent<ITreeProps, IState> {
    protected static getDerivedStateFromProps(props: ITreeProps, state: IState): null | IState {
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

    constructor(props: ITreeProps) {
        super(props);

        this._id = 'JqxTree' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITreeProps;
        this._jqx(this._componentSelector).jqxTree(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITreeProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITreeProps): void {
        this._jqx(this._componentSelector).jqxTree(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTree(option);
    }

    public addBefore(item: any, id: string): void {
        this._jqx(this._componentSelector).jqxTree('addBefore' , item, id);
    };

    public addAfter(item: any, id: string): void {
        this._jqx(this._componentSelector).jqxTree('addAfter' , item, id);
    };

    public addTo(item: any, id: string | null): void {
        this._jqx(this._componentSelector).jqxTree('addTo' , item, id);
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxTree('clear' );
    };

    public checkAll(): void {
        this._jqx(this._componentSelector).jqxTree('checkAll' );
    };

    public checkItem(item: any, checked: boolean): void {
        this._jqx(this._componentSelector).jqxTree('checkItem' , item, checked);
    };

    public collapseAll(): void {
        this._jqx(this._componentSelector).jqxTree('collapseAll' );
    };

    public collapseItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('collapseItem' , item);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTree('destroy' );
    };

    public disableItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('disableItem' , item);
    };

    public ensureVisible(item: object): void {
        this._jqx(this._componentSelector).jqxTree('ensureVisible' , item);
    };

    public enableItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('enableItem' , item);
    };

    public enableAll(): void {
        this._jqx(this._componentSelector).jqxTree('enableAll' );
    };

    public expandAll(): void {
        this._jqx(this._componentSelector).jqxTree('expandAll' );
    };

    public expandItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('expandItem' , item);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxTree('focus' );
    };

    public getCheckedItems(): ITreeItem[] {
        return this._jqx(this._componentSelector).jqxTree('getCheckedItems' );
    };

    public getUncheckedItems(): ITreeItem[] {
        return this._jqx(this._componentSelector).jqxTree('getUncheckedItems' );
    };

    public getItems(): ITreeItem[] {
        return this._jqx(this._componentSelector).jqxTree('getItems' );
    };

    public getItem(element: any): ITreeItem {
        return this._jqx(this._componentSelector).jqxTree('getItem' , element);
    };

    public getSelectedItem(): ITreeItem {
        return this._jqx(this._componentSelector).jqxTree('getSelectedItem' );
    };

    public getPrevItem(item: any): ITreeItem {
        return this._jqx(this._componentSelector).jqxTree('getPrevItem' , item);
    };

    public getNextItem(item: any): ITreeItem {
        return this._jqx(this._componentSelector).jqxTree('getNextItem' , item);
    };

    public hitTest(left: number, top: number): any {
        return this._jqx(this._componentSelector).jqxTree('hitTest' , left, top);
    };

    public removeItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('removeItem' , item);
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxTree('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxTree('refresh' );
    };

    public selectItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('selectItem' , item);
    };

    public uncheckAll(): void {
        this._jqx(this._componentSelector).jqxTree('uncheckAll' );
    };

    public uncheckItem(item: any): void {
        this._jqx(this._componentSelector).jqxTree('uncheckItem' , item);
    };

    public updateItem(item: any, newItem: any): void {
        this._jqx(this._componentSelector).jqxTree('updateItem' , item, newItem);
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxTree('val' , value);
    };

    private _manageProps(): ITreeProps {
        const widgetProps: string[] = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','source','toggleIndicatorSize','toggleMode','theme','width'];

        const options = {} as ITreeProps;

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

export default JqxTree;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ITreeDragStart {
    item?: object;
}

export interface ITreeDragEnd {
    dragItem?: any;
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
    dragEnd?: (dragItem?: ITreeDragEnd['dragItem'], dropItem?: ITreeDragEnd['dropItem'], args?: ITreeDragEnd['args'], dropPosition?: ITreeDragEnd['dropPosition'], tree?: ITreeDragEnd['tree']) => boolean;
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

export interface ITreeProps extends ITreeOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onAdded?: (e?: Event) => void;
    onCheckChange?: (e?: Event) => void;
    onCollapse?: (e?: Event) => void;
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
    onExpand?: (e?: Event) => void;
    onItemClick?: (e?: Event) => void;
    onRemoved?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
}
