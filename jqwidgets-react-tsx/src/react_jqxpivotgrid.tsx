
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxPivotGrid extends React.PureComponent<IPivotGridProps, IState> {
    protected static getDerivedStateFromProps(props: IPivotGridProps, state: IState): null | IState {
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

    constructor(props: IPivotGridProps) {
        super(props);

        this._id = 'JqxPivotGrid' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IPivotGridProps;
        this._jqx(this._componentSelector).jqxPivotGrid(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IPivotGridProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IPivotGridProps): void {
        this._jqx(this._componentSelector).jqxPivotGrid(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxPivotGrid(option);
    }

    public getInstance(): any {
        return this._jqx(this._componentSelector).jqxPivotGrid('getInstance' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxPivotGrid('refresh' );
    };

    public getPivotRows(): IPivotGridRows {
        return this._jqx(this._componentSelector).jqxPivotGrid('getPivotRows' );
    };

    public getPivotColumns(): IPivotGridColumns {
        return this._jqx(this._componentSelector).jqxPivotGrid('getPivotColumns' );
    };

    public getPivotCells(): object {
        return this._jqx(this._componentSelector).jqxPivotGrid('getPivotCells' );
    };

    private _manageProps(): IPivotGridProps {
        const widgetProps: string[] = ['source','localization','scrollBarsEnabled','selectionEnabled','multipleSelectionEnabled','treeStyleRows','autoResize','itemsRenderer','cellsRenderer'];

        const options = {} as IPivotGridProps;

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

export default JqxPivotGrid;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IPivotGridItemsRenderer {
    pivotItem?: any;
}

export interface IPivotGridCellsRenderer {
    pivotCell?: any;
}

export interface IPivotGridColumns {
    resizable?: boolean;
    sortable?: boolean;
    showExpandCollapseButtons?: boolean;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
    isHidden?: boolean;
}

export interface IPivotGridItem {
    isExpanded?: boolean;
    isHidden?: boolean;
    isSelected?: boolean;
    parentItem?: IPivotGridItem;
    hierarchy?: any;
    parentPivotGrid?: object;
    items?: IPivotGridItem[];
    valueItems?: IPivotGridItem[];
}

export interface IPivotGridRows {
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
